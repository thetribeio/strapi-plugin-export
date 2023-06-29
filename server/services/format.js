const getTransformations = (entry, customFormats) => Object.keys(customFormats).filter(
    (column) => entry[column] !== undefined,
);

module.exports = ({ strapi }) => ({
    process(contentType, entries) {
        const config = strapi.config.get('plugin.export-data');
        const customFormats = config?.formats?.[contentType];
        if (!customFormats || Object.keys(customFormats).length === 0) {
            return entries;
        }
        entries.forEach((entry) => {
            if (customFormats) {
                const transformations = getTransformations(entry, customFormats);
                transformations.forEach((column) => (
                    { ...entry, [column]: customFormats[column](entry[column]) }
                ));
            }
        });

        return entries;
    },
});
