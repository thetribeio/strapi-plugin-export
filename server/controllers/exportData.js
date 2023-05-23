'use strict';

module.exports = ({ strapi }) => ({
  findContentTypes(ctx) {
    console.log(strapi.plugin('export-data').config());
    console.log(strapi.config.get('plugin.export-data'));
    ctx.body = strapi.plugin('export-data').service('exportData').getContentTypes();
  },
  async exportContentType(ctx) {

    const {contentType} = ctx.params;
    try {
      const file = await strapi.plugin('export-data').service('exportData').exportContentType(ctx,contentType);
      ctx.body = file;
      ctx.set('Content-disposition', 'attachment; filename=export.csv');
      ctx.set('Content-type', 'text/csv');
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});
