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

    async getEntries(contentTypeUid) {
        const contentType = strapi.contentTypes[contentTypeUid];
        if (contentType.kind === 'collectionType') {
            return strapi.entityService.findMany(`${contentTypeUid}`);
        }
        const singleTypes = await strapi.entityService.findMany(`${contentTypeUid}`);

        return [singleTypes];
    },

    async exportContentType(ctx, contentTypeUid) {
        const entries = await this.getEntries(contentTypeUid);
        const formatedEntries = strapi.plugin('export-data').service('format').process(contentTypeUid, entries);

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
