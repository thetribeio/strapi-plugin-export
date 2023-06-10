'use strict';

const pluginName = 'export-data';
module.exports = async ({strapi}) => {
  // bootstrap phase
  const registerPermissionActions = async () => {
    const actions = [
      {
        section: 'plugins',
        displayName: 'Export data',
        uid: 'export',
        pluginName: pluginName,
      },
    ];

    await strapi.admin.services.permission.actionProvider.registerMany(actions);
  };

  await registerPermissionActions();
};

