/**
 * axios with a custom config.
 */

import { auth } from '@strapi/helper-plugin';
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.STRAPI_ADMIN_BACKEND_URL,
});

instance.interceptors.request.use(
    async (config) => {
        const headers = {
            Authorization: `Bearer ${auth.getToken()}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        return { ...config, headers };
    },
    (error) => {
        Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        // whatever you want to do with the error
        if (error.response?.status === 401) {
            auth.clearAppStorage();
            // eslint-disable-next-line no-undef
            window.location.reload();
        }

        throw error;
    },
);

export default instance;
