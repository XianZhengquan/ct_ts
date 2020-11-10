import {useCallback, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {PageType, RootCtx} from 'Root';
import {LoginApi} from 'api/login';

/**
 * 全局公用跳转方法
 * @param dim {string} 1、资产经营 2、中介服务 3、物业管理 4、设置中心 5、资产管理
 * @param pathname {string} 跳转路径
 * @param state 传递的state
 */
function usePublicPush(dim: PageType, pathname: string, state?: object) {
    const {rootOptions, setRootOptions} = useContext(RootCtx);
    const history = useHistory();

    // 根据当前纬度 获取菜单
    return useCallback(async () => {
        // 如果传递的纬度和当前纬度不同，设置纬度
        if (rootOptions.pageType !== dim) {
            // 设置 当前纬度
            sessionStorage.pageType = dim;
            setRootOptions(v => ({...v, pageType: dim, loading: true}));
        }

        try {
            // 如果传递的纬度和当前纬度不同，重新获取纬度下的路由并设值
            if (rootOptions.pageType !== dim) {
                const {data} = await LoginApi.getAuthorityMenu({dim});
                sessionStorage.menu = JSON.stringify(data);
                setRootOptions(v => ({...v, routeData: data}));
            }
            history.replace({
                pathname,
                state
            });
        } catch (e) {
            console.log(e);
        } finally {
            setRootOptions(v => ({...v, loading: false}));
        }
    }, [dim, history, pathname, rootOptions.pageType, setRootOptions, state]);
}

export default usePublicPush;
