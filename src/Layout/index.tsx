/**
 * 页面外层骨架
 * @author XianZhengquan
 * @create 2020/4/14
 */
import React, {Fragment, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Layout, Spin} from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {LoadingComponent} from 'components';
import {LeftMenu, LayoutHeader} from './components';
import {useHistory, useLocation} from 'react-router-dom';
import {RootCtx} from 'Root';
import {useWatchLogin} from 'hooks';
import ctImg from 'assets/logos/ct.png';
import ctExpImg from 'assets/logos/ct-exp.png';
import assetImg from 'assets/logos/asset.png';
import assetExpImg from 'assets/logos/asset-exp.png';
import settingCTImg from 'assets/logos/setting-ct.png';
import settingAssetImg from 'assets/logos/setting-asset.png';
import './index.less';

const ILayout: React.FC = ({children}) => {
    // 获取全局配置
    const {rootOptions} = useContext(RootCtx);
    //
    const history = useHistory();
    const location = useLocation();
    // 监听用户登录情况
    useWatchLogin(history);

    // 控制sider的展开
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // 是否是 设置后台
    const isBack = useMemo<boolean>(() => rootOptions.pageType === '4', [rootOptions.pageType]);
    // 显示路由类型
    // @ts-ignore
    const menuType = useMemo<string>(() => ({
        '1': '资产经营',
        '2': '中介服务',
        '3': '物业管理',
        '5': '资产管理'
    }[rootOptions.pageType]), [rootOptions.pageType]);
    // 存储 dom
    const animateDom = useRef<any>(null);

    // cdm 设置过渡
    useEffect(() => {
        if (location.pathname) {
            if (!animateDom.current) animateDom.current = document.querySelector('.i-layout-container');

            if (animateDom.current) {
                animateDom.current.className = 'i-layout-container';
                animateDom.current.className = 'i-layout-container animate-component';
                setTimeout(() => {
                    animateDom.current.className = 'i-layout-container';
                }, 1001);
            }
        }
    }, [location.pathname]);

    return (
        <Fragment>
            {
                rootOptions.login
                    ? (
                        <Spin spinning={rootOptions.loading}
                              tip='加载中'
                              wrapperClassName='i-layout-spin'>
                            <Layout className='i-layout'>
                                <Layout.Sider width={isBack ? 200 : 160}
                                              trigger={null}
                                              collapsible
                                              collapsed={collapsed}
                                              className='i-layout-sider'>
                                    <article className={`sider-wrap ${isBack && 'back'}`}
                                             style={{width: collapsed ? 64 : isBack ? 200 : 160}}>
                                        {/* logo */}
                                        <section className={`logo-wrap ${collapsed ? 'exp' : ''}`}>
                                            <div className="logo">
                                                {process?.env?.REACT_APP_PARTY_A?.trim() === 'assetSass' &&
                                                <img src={collapsed ? assetExpImg : isBack ? settingAssetImg : assetImg}
                                                     alt=""
                                                     style={{paddingTop: collapsed ? 0 : 12}} />}
                                                {process?.env?.REACT_APP_PARTY_A?.trim() === 'cityInvestment' &&
                                                <img src={collapsed ? ctExpImg : isBack ? settingCTImg : ctImg} alt="" />}
                                            </div>
                                            {!collapsed && (<div className="menu-type">{menuType}</div>)}
                                        </section>

                                        {/* 二期的工作台 */}
                                        {/*<section className={`workbench ${collapsed && 'exp'}`}>
                                <div className="avatar">{sessionStorage.userName[0]}</div>
                                {!collapsed && <div className='ml8'>工作台</div>}
                                </section>*/}

                                        {/* 菜单 */}
                                        <LeftMenu />

                                        {/* 收起、展开 */}
                                        <footer className="sider-collapsed"
                                                onClick={() => setCollapsed(!collapsed)}>
                                            {
                                                collapsed
                                                    ? <ArrowRightOutlined />
                                                    : <ArrowLeftOutlined />
                                            }
                                        </footer>
                                    </article>
                                </Layout.Sider>
                                <Layout className='i-layout-content'>
                                    <article className="i-layout-content-wrap"
                                             style={{
                                                 minWidth: collapsed ? 1302 : isBack ? 1166 : 1206,
                                                 maxWidth: collapsed ? 1856 : isBack ? 1720 : 1760
                                             }}>
                                        <Layout.Header className='i-layout-header'>
                                            <LayoutHeader />
                                        </Layout.Header>
                                        <Layout.Content className='i-layout-container'>
                                            {children}
                                        </Layout.Content>
                                    </article>
                                </Layout>
                            </Layout>
                        </Spin>
                    )
                    : <LoadingComponent />
            }
        </Fragment>
    );
};

export default ILayout;
