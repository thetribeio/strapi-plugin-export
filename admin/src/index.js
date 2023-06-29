import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import ExportButton from './components/ExportButton/ExportButton';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import permissions from './permissions';
import pluginId from './pluginId';

const { name } = pluginPkg.strapi;

export default {
    register(app) {
        app.addMenuLink({
            to: `/plugins/${pluginId}`,
            icon: PluginIcon,
            intlLabel: {
                id: `${pluginId}.plugin.name`,
                defaultMessage: 'Export de données',
            },
            Component: async () => {
                const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

                return component;
            },
            permissions: permissions.main,
        });
        app.registerPlugin({
            id: pluginId,
            initializer: Initializer,
            isReady: false,
            name,
        });
    },

    bootstrap(app) {
        app.injectContentManagerComponent('listView', 'actions', {
            name: `${pluginId}-export`,
            Component: ExportButton,
        });
    },
    async registerTrads({ locales }) {
        const importedTrads = await Promise.all(
            locales.map((locale) => import(
                /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
            )
                .then(({ default: data }) => ({
                    data: prefixPluginTranslations(data, pluginId),
                    locale,
                }))
                .catch(() => ({
                    data: {},
                    locale,
                }))),
        );

        return Promise.resolve(importedTrads);
    },
};
