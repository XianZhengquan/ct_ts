import {useCallback, useContext, useEffect} from 'react';
import {message} from 'antd';
import {RootCtx} from 'Root';
import {LoginApi} from 'api/login';

function useWatchLogin(history: any): void;
function useWatchLogin(history: any) {
    const {setRootOptions} = useContext(RootCtx);
    // 用户是否登录
    const isLogin = (): boolean => !!sessionStorage.token;
    // 是否有菜单
    const isHaveMenu = (): boolean => !!sessionStorage.menus;
    // 页面类型
    const pageType = () => sessionStorage.pageType;

    // 获取用户菜单等
    const getAllInfo = useCallback(async () => {
        try {
            // 获取菜单
            const {data} = await LoginApi.getAuthorityMenu({dim: pageType()});
            sessionStorage.menus = JSON.stringify(data);
            setRootOptions(v => ({...v, routeData: data, login: true}));
            history.replace('/');
        } catch (e) {
            console.log(e);
            message.error('获取用户菜单失败，请重新登录！');
            sessionStorage.clear();
            setRootOptions(v => ({...v, routeData: [], login: false}));
            history.push('/login');
        }
    }, [history, setRootOptions]);
    // 路由监听事件
    const listen = useCallback(() => {
        if (isLogin()) {
            if (!isHaveMenu()) void getAllInfo();
            // 如果 已登录 && 当前路由是 /login
            if (history.location.pathname === '/login') history.replace('/');
        } else {
            if (history.location.pathname !== '/login') history.push('/login');
        }
    }, [getAllInfo, history]);

    useEffect(() => {
        const unListen = history.listen(listen);
        listen();
        return () => {
            unListen();
        };
    }, [history, listen]);
}

export default useWatchLogin;
