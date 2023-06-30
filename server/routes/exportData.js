module.exports = {
    // accessible only from admin UI
    type: 'admin',
    routes: [
        {
            method: 'GET',
            path: '/content-types',
            handler: 'exportData.findContentTypes',
            config: {
                policies: [],
            },
        }, {
            method: 'GET',
            path: '/export',
            handler: 'exportData.exportContentType',
            config: {
                policies: [],
            },
        },
    ],
};
