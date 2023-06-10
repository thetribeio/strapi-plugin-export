import { request } from '@strapi/helper-plugin';
import pluginId from '../pluginId';;
import axiosInstance from '../utils/axiosInstance';

const fetchContentTypes = async () => {
  try {
    const data = await request(`/${pluginId}/content-types`, { method: 'GET' });
    return data;
  } catch (error) {
    return null;
  }
};

const exportContentType = async (contentTypeName) => {
  try {
    const data = await axiosInstance.get(`/${pluginId}/export/${contentTypeName}`);
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};

export {fetchContentTypes, exportContentType}