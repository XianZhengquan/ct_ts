/**
 * 页面外层骨架
 * @author XianZhengquan
 * @create 2020/4/14
 */
import React, {Fragment, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Layout} from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {LoadingComponent} from 'components';
import {LeftMenu} from './components';
import {useHistory, useLocation} from 'react-router-dom';
import {RootCtx} from 'Root';
import useWatchLogin from 'hooks/useWatchLogin';
import ctImg from 'assets/logos/ct.png';
import ctExpImg from 'assets/logos/ct-exp.png';
import assetImg from 'assets/logos/asset.png';
import assetExpImg from 'assets/logos/asset-exp.png';
import settingImg from 'assets/logos/setting.png';
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
        '2': '资产管理',
        '3': '物业管理'
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
                    ? (<Layout className='i-layout'>
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
                                        <img src={collapsed ? assetExpImg : isBack ? settingImg : assetImg} alt="" />}
                                        {process?.env?.REACT_APP_PARTY_A?.trim() === 'cityInvestment' &&
                                        <img src={collapsed ? ctExpImg : isBack ? settingImg : ctImg} alt="" />}
                                    </div>
                                    {!collapsed && (<div className="menu-type">{menuType}</div>)}
                                </section>

                                {/* 二期的工作台 */}
                                {/*<section className={`workbench ${collapsed && 'exp'}`}>
                                <div className="avatar">{localStorage.userName[0]}</div>
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
                            <Layout.Header className='i-layout-header'>

                            </Layout.Header>
                            <Layout.Content className='i-layout-container'>
                                {children}
                            </Layout.Content>
                        </Layout>
                    </Layout>)
                    : <LoadingComponent />
            }
        </Fragment>
    );
};

export default ILayout;
