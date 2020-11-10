/**
 * 上传文件组件
 * @author XianZhengquan
 * @create 2020/4/17
 */
import React, {useState} from 'react';
import {Button, message, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {UploadChangeParam, UploadFile as UploadFileListProps} from 'antd/es/upload/interface';
import {IUploadFileProps} from './interface';
import {FileApi} from 'api/file';

const UploadFile: React.FC<IUploadFileProps> = (props) => {
    const {ascriptionType = '', ascriptionId = '', multiple = true, size = 50, limit = 9999, accept, tips, defaultFileList, checkUpdating, onChange, uploadText = '点击上传'} = props;
    // 文件列表
    const [fileList, setFileList] = useState<UploadFileListProps<any>[]>(defaultFileList ?? []);

    // 文件上传之前
    function beforeUpload(file: UploadFileListProps) {
        // 文件大小是否超过限制
        const isLtLimit = file.size / 1024 / 1024 < size;
        if (!isLtLimit) {
            message.error(`上传文件大小不能超过 ${size}MB!`);
            return false;
        }
        // 文件类型是否有要求
        if (accept) {
            const fileTypeList = file.name.split('.');
            const checkAccept = accept.includes(fileTypeList[fileTypeList.length - 1]);
            if (!checkAccept) {
                message.error(tips ?? '文件类型不正确！');
                return false;
            }
        }
        return true;
    }

    // 上传文件改变时的状态
    function handleChange(info: UploadChangeParam<UploadFileListProps<any>>) {
        const {file, fileList} = info;
        // 上传的数量超过之后，删除多余的
        if (limit && fileList.length > limit) {
            const index = fileList.length - limit;
            fileList.splice(-index);
        }

        // 上传文件出错之后，fileList移除上传出错的
        if (file.status === 'error') {
            message.error('上传失败！');
            fileList.splice(fileList.findIndex(item => item.uid === file.uid));
        }
        if (file.status === 'done' && file?.response?.status !== 200) {
            message.error('上传失败！');
            fileList.splice(fileList.findIndex(item => item.uid === file.uid));
        }

        // 设置值 fileList
        setFileList(fileList
            .filter(item => {
                if (accept) {
                    const fileTypeList = item.name.split('.');
                    return accept.includes(fileTypeList[fileTypeList.length - 1]);
                }
                return true;
            })
            .map(item => ({...item, url: item?.response?.data?.fileUrl ?? ''})));

        // 传递上传状态
        void checkUpdating?.(!!fileList.filter(item => item.status === 'uploading').length);

        // 传递文件列表
        void onChange?.(fileList
            .filter(item => {
                if (accept) {
                    const fileTypeList = item.name.split('.');
                    return accept.includes(fileTypeList[fileTypeList.length - 1]);
                }
                return true;
            })
            .map(item => ({...item, url: item?.response?.data?.fileUrl ?? ''})));
    }

    // 文件删除
    async function onRemove(file: UploadFileListProps<any>) {
        try {
            // @ts-ignore
            await FileApi.removeFile(file.fileId || file?.response?.data?.fileId);
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    }

    return (
        <Upload name='file'
                action='/api/file/fileManage/uploadFile'
                headers={{Authorization: sessionStorage.token}}
                data={{ascriptionType, ascriptionId}}
                multiple={multiple}
                fileList={fileList}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                onRemove={onRemove}>
            {
                fileList.length < limit ? (<Button><UploadOutlined /> {uploadText}</Button>) : null
            }
        </Upload>
    );
};

export default UploadFile;
