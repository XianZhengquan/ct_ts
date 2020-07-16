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
 *  IRootOptions interface
 *  @param pageType {number} 页面路由类型 1、资产经营，2、资产管理，3、物业管理，4、管理中心
 *  @param routeData {IRouteConfParams[]} 路由数据
 *  @param login {boolean} 是否登陆
 */
interface IRootOptions {
    pageType: string,
    routeData: IRouteConfParams[],
    login: boolean
}

//
export const RootCtx = createContext<{ rootOptions: IRootOptions, setRootOptions: React.Dispatch<React.SetStateAction<IRootOptions>> }>({
    rootOptions: {
        pageType: sessionStorage.pageType ?? '1',
        routeData: [],
        login: false
    },
    setRootOptions: () => {
    }
});

const Root: React.FC = () => {
    //
    const [rootOptions, setRootOptions] = useState<IRootOptions>({
        pageType: sessionStorage.pageType ?? '1',
        routeData: JSON.parse(sessionStorage.menus ?? '[]'),
        login: !!sessionStorage.menus
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
