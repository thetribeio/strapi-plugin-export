const { ExportToCsv } = require('export-to-csv');

module.exports = ({ strapi }) => ({
    getContentTypes() {
        const { contentTypes } = strapi;
        const keys = Object.keys(contentTypes);
        const collectionTypes = [];
        const singleTypes = [];

        keys.forEach((name) => {
            if (name.includes('api::')) {
                const contentType = {
                    uid: contentTypes[name].uid,
                    kind: contentTypes[name].kind,
                    globalId: contentTypes[name].globalId,
                    attributes: contentTypes[name].attributes,
                };
                if (contentTypes[name].kind === 'collectionType') {
                    collectionTypes.push(contentType);
                } else {
                    singleTypes.push(contentType);
                }
            }
        });

        return { collectionTypes, singleTypes } || null;
    },

    async getEntries(contentTypeUid, parameters) {
        const contentType = strapi.contentTypes[contentTypeUid];
        if (contentType.kind === 'collectionType') {
            return strapi.entityService.findMany(`${contentTypeUid}`, parameters);
        }
        const singleTypes = await strapi.entityService.findMany(`${contentTypeUid}`, parameters);

        return [singleTypes];
    },

    async exportContentType(ctx) {
        const contentType = ctx.query['content-type'];
        const { filters, sort } = ctx.query;
        const entries = await this.getEntries(contentType, { filters: filters || {}, sort: sort || {} });
        const formatedEntries = strapi.plugin('export-data').service('format').process(contentType, entries);

        const exportOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: false,
            title: '',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
        };

        const csvExporter = new ExportToCsv(exportOptions);
        const csvData = await csvExporter.generateCsv(formatedEntries, true);

        return strapi.plugin('export-data').service('file').writeFile(csvData);
    },
});
