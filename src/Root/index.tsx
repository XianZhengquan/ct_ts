/**
 * 根组件
 * @author XianZhengquan
 * @create 2020/4/14
 */
import React, {createContext, useState} from 'react';
import {ConfigProvider} from 'antd';
import Router from 'Router';
import zhCN from 'antd/es/locale/zh_CN';
import {IRouteConfParams} from 'config/routers';

/**
 * 1、资产经营 2、中介服务 3、物业管理 4、设置中心 5、资产管理
 */
export type PageType = '1' | '2' | '3' | '4' | '5'

/**
 *  IRootOptions interface
 *  @param pageType {string} 页面路由类型 1、资产经营 2、中介服务 3、物业管理 4、设置中心 5、资产管理
 *  @param routeData {IRouteConfParams[]} 路由数据
 *  @param login {boolean} 是否登陆
 */
interface IRootOptions {
    pageType: PageType,
    routeData: IRouteConfParams[],
    login: boolean,
    loading: boolean
}

//
export const RootCtx = createContext<{ rootOptions: IRootOptions, setRootOptions: React.Dispatch<React.SetStateAction<IRootOptions>> }>({
    rootOptions: {
        pageType: sessionStorage.pageType ?? '1',
        routeData: [],
        login: false,
        loading: false
    },
    setRootOptions: () => {
    }
});

const Root: React.FC = () => {
    //
    const [rootOptions, setRootOptions] = useState<IRootOptions>({
        pageType: sessionStorage.pageType ?? '1',
        routeData: JSON.parse(sessionStorage.menus ?? '[]'),
        login: !!sessionStorage.menus,
        loading: false
    });

    return (
        <RootCtx.Provider value={{rootOptions, setRootOptions}}>
            <ConfigProvider locale={zhCN}>
                <Router />
            </ConfigProvider>
        </RootCtx.Provider>
    );
};

export default Root;
