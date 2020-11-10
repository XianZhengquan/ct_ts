import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {Drawer} from 'antd';
import {TextButton} from 'components';
import {EditPwd} from '../index';
import {useDrawerOptions} from 'hooks';
import {formatValue} from 'utils/common';
import {LoginApi} from 'api/login';
import './index.less';

const PersonalCenter: React.FC = ({children}) => {
    // 抽屉配置
    const [drawerOptions, setDrawerOptions] = useDrawerOptions();

    // 打开抽屉
    function openDrawer(): void {
        setDrawerOptions(v => ({...v, visible: true}));
    }

    // 抽屉关闭
    function handleClose(): void {
        setDrawerOptions(v => ({...v, visible: false}));
    }

    return (
        <Fragment>
            <span onClick={openDrawer}>{children}</span>
            <Drawer {...drawerOptions}
                    title='个人中心'
                    onClose={handleClose}>
                <DrawerComponent />
            </Drawer>
        </Fragment>
    );
};

export default PersonalCenter;

const DrawerComponent: React.FC = () => {
    // 信息数据
    const [infoData, setInfoData] = useState<{ [propsName: string]: any }>({});
    // 获取数据
    const getData = useCallback(async () => {
        try {
            const {data} = await LoginApi.getCurrentUserInfo();
            setInfoData(data);
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <article className='personal-center'>
            <header className="personal-center-header-wrap">
                <div className='title'>个人信息</div>
                <EditPwd id={infoData.id} callback={getData}>
                    <TextButton>修改密码</TextButton>
                </EditPwd>
            </header>
            <section className='personal-center-item'>
                <div className="label">姓名</div>
                <div className="value">{formatValue(infoData.userName)}</div>
            </section>
            <section className='personal-center-item'>
                <div className="label">手机号码</div>
                <div className="value">{formatValue(infoData.userPhone)}</div>
            </section>
            <section className='personal-center-item'>
                <div className="label">邮箱</div>
                <div className="value">{formatValue(infoData.userEmail)}</div>
            </section>
            <section className='personal-center-item'>
                <div className="label">工号</div>
                <div className="value">{formatValue(infoData.userJobNum)}</div>
            </section>
            <section className='personal-center-item'>
                <div className="label">部门</div>
                <div className="value">{formatValue(infoData.deptName)}</div>
            </section>
            <section className='personal-center-item'>
                <div className="label">职位</div>
                <div className="value">{formatValue(infoData.positionName)}</div>
            </section>
        </article>
    );
};
