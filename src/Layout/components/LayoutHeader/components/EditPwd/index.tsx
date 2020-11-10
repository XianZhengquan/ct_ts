import React, {Fragment} from 'react';
import {Modal, Form, Input, message} from 'antd';
import {useModalOptions, useFormOptions} from 'hooks';
import REG from 'config/reg';
import {LoginApi} from 'api/login';

interface IEditPwdProps {
    id: string,
    callback?: () => void
}

const EditPwd: React.FC<IEditPwdProps> = ({id, children, callback}) => {
    // 表单默认配置
    const [FormConf] = useFormOptions();
    const [form] = Form.useForm();

    // 模态框配置
    const [modalOptions, setModalOptions] = useModalOptions();

    // 打开模态框
    function openModal(): void {
        setModalOptions(v => ({...v, visible: true}));
    }

    // 模态框 取消
    function handleCancel(): void {
        setModalOptions(v => ({...v, visible: false}));
        form.resetFields();
    }

    // 模态框 确定
    async function handleOk() {
        try {
            const {values}: any = await form.validateFields();
            await LoginApi.updatePassword({
                userInfoId: id,
                ...values
            });
            message.success('更新成功！');
            handleCancel();
            void callback?.();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Fragment>
            <span onClick={openModal}>{children}</span>
            <Modal {...modalOptions}
                   title='模态框'
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <Form form={form}
                      layout="vertical"
                      {...FormConf}>
                    <ModalComponent />
                </Form>
            </Modal>
        </Fragment>
    );
};

export default EditPwd;

const ModalComponent: React.FC = () => {

    return (
        <Fragment>
            <Form.Item name="oldPassword"
                       label="原密码"
                       rules={[{required: true, message: '请填写原密码'}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="userPassword"
                       label="设置新密码"
                       rules={[{required: true, message: '请填写新密码'}, {pattern: REG.password, message: '包含字母和数字，8~32位'}]}>
                <Input.Password />
            </Form.Item>
        </Fragment>
    );
};
