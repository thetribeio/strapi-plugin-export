"use strict"

import getFile from "../utils/getFile";
import {exportContentType} from "../utils/api";

const useExportContentType = (name) => {
  const exportCT = async (name) => {
    const response = await exportContentType(name);
    getFile(name,response)
  }

  return {
    exportCT
  }
}

export default useExportContentType
