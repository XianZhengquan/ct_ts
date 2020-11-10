import axios from 'utils/axios';

export const FileApi = {
    // 删除文件
    removeFile: (fileId: string) => axios.delete(`/file/fileManage/deleteFile/${fileId}`)
};
