import { request } from '@strapi/helper-plugin';
import qs from 'qs';
import pluginId from '../pluginId';
import axiosInstance from './axiosInstance';

const fetchContentTypes = async () => {
    try {
        const data = await request(`/${pluginId}/content-types`, { method: 'GET' });

        return data;
    } catch (error) {
        return null;
    }
};

const exportContentType = async (contentTypeName, filters = {}) => {
    const searchFilters = qs.stringify(filters);
    let exportRouteUrl = `/${pluginId}/export?content-type=${contentTypeName}`;
    if (searchFilters) {
        exportRouteUrl += `&${searchFilters}`;
    }
    try {
        const data = await axiosInstance.get(exportRouteUrl);

        return data;
    } catch (error) {
        return null;
    }
};

export { fetchContentTypes, exportContentType };
