module.exports = {
  // accessible only from admin UI
  // type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/content-types',
      handler: 'exportData.findContentTypes',
      config: {
        policies: [],
      },
    },{
      method: 'GET',
      path: '/export/:contentType',
      handler: 'exportData.exportContentType',
      config: {
        policies: [],
      },
    },
  ],
};
