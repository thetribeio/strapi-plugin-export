import { exportContentType } from '../utils/api';
import getFile from '../utils/getFile';

const useExportContentType = () => {
    const downloadExportFile = async (name) => {
        const response = await exportContentType(name);
        getFile(name, response);
    };

    return {
        downloadExportFile,
    };
};

export default useExportContentType;
