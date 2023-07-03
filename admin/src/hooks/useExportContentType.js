import { exportContentType } from '../utils/api';
import getFile from '../utils/getFile';

const useExportContentType = () => {
    const downloadExportFile = async (name, filters = {}) => {
        const response = await exportContentType(name, filters);
        getFile(name, response);
    };

    return {
        downloadExportFile,
    };
};

export default useExportContentType;
