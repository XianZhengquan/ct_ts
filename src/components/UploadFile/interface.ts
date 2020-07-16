import {UploadFile as UploadFileListProps} from 'antd/es/upload/interface';

/**
 * 上传文件的interface
 * @param ascriptionType {string} 文件的标识
 * @param ascriptionId {string} 文件关联id
 * @param multiple {boolean} 是否多选，默认true
 * @param size {number} 文件大小，单位M，默认50
 * @param limit {number} 文件上传数量，默认不限
 * @param defaultFileList {UploadFileListProps<any>[]} 默认的文件列表
 * @param accept {string[]} 文件类型，['json','ppt']等
 * @param tips {string} 文件类型不正确时的自定义提示
 * @param checkUpdating {(uploading: boolean) => void} 是否还在上传中
 * @param onChange {(fileList: UploadFileListProps<any>[]) => void} 文件变化的父级回调
 */
export interface IUploadFileProps {
    ascriptionType?: string;
    ascriptionId?: string;
    multiple?: boolean;
    size?: number;
    limit?: number;
    defaultFileList?: UploadFileListProps<any>[];
    accept?: string[];
    tips?: string;
    checkUpdating?: (uploading: boolean) => void;
    onChange?: (fileList: UploadFileListProps<any>[]) => void;
}

export default IUploadFileProps;
