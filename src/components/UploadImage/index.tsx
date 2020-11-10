/**
 * 上传文件组件
 * @author XianZhengquan
 * @create 2020/4/17
 */
import React, {useState} from 'react';
import {message, Upload, Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {UploadChangeParam, UploadFile as UploadFileListProps} from 'antd/es/upload/interface';
import {IUploadImageProps} from './interface';
import {FileApi} from 'api/file';

// 上传按钮
const uploadButton = (<div>
    <PlusOutlined />
    <div style={{marginTop: 8}}>上传图片</div>
</div>);
// 上传的类型
// const imageType = ['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'];
const imageType = ['jpeg', 'png', 'jpg', 'bmp'];

const UploadImage: React.FC<IUploadImageProps> = (props) => {
    const {ascriptionType = '', ascriptionId = '', multiple = true, size = 50, limit = 3, accept = imageType, tips, defaultFileList, checkUpdating, onChange, disabled = false} = props;

    // 模态框配置
    const [modalOptions, setModalOptions] = useState<{ visible: boolean; imageUrl?: string }>({
        visible: false,
        imageUrl: ''
    });

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
                const fileTypeList = item.name.split('.');
                return accept.includes(fileTypeList[fileTypeList.length - 1]);
            })
            .map(item => ({...item, url: item?.response?.data?.fileUrl ?? ''})));

        // 传递上传状态
        void checkUpdating?.(fileList.some(item => item.status === 'uploading'));

        // 传递文件列表
        void onChange?.(fileList
            .filter(item => {
                const fileTypeList = item.name.split('.');
                return accept.includes(fileTypeList[fileTypeList.length - 1]);
            })
            .map(item => ({...item, url: item?.response?.data?.fileUrl ?? ''})));
    }

    // 点击当前图片
    function handlePreview(file: UploadFileListProps<any>) {
        setModalOptions(v => ({
            ...v,
            visible: true,
            imageUrl: file?.response?.data?.fileUrl ? window.location.origin + file?.response?.data?.fileUrl : (file.url || file.thumbUrl)
        }));
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

    // 模态框关闭
    function handleCancel() {
        setModalOptions(v => ({...v, visible: false, imageUrl: ''}));
    }

    return (
        <article className="upload-image">
            <Upload name='file'
                    listType="picture-card"
                    action='/api/file/fileManage/uploadFile'
                    headers={{Authorization: sessionStorage.token}}
                    data={{ascriptionType, ascriptionId}}
                    multiple={multiple}
                    fileList={fileList}
                    disabled={disabled}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    onPreview={handlePreview}
                    onRemove={onRemove}>
                {fileList.length < limit ? uploadButton : null}
            </Upload>
            <Modal visible={modalOptions.visible}
                   footer={null}
                   width='50%'
                   onCancel={handleCancel}>
                <img alt=""
                     style={{maxWidth: '100%', height: 'auto'}}
                     src={modalOptions.imageUrl} />
            </Modal>
        </article>
    );
};

export default UploadImage;
