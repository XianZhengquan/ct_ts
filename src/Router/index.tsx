import React, {useContext} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ILayout from 'Layout';
import {LoadingComponent} from 'components';
import loadable from '@loadable/component';
import {RootCtx} from 'Root';
import {IRouteConfParams} from 'config/routers';

type RouteComponentProps = Omit<IRouteConfParams, 'children' | 'symbol' | 'level' | 'show'>

// 懒加载的Route
const RouteComponent = loadable<RouteComponentProps>(
    props => import(`./../views${props.component}`),
    {
        cacheKey: props => props.path,
        fallback: <LoadingComponent />
    }
);

const Router: React.FC = () => {
    // 获取路由数据
    const {rootOptions: {routeData}} = useContext(RootCtx);

    // 将 RouterConf 转换为路由
    function transformRoute(data: IRouteConfParams[]) {
        // 展平后的数组
        const flatData: RouteComponentProps[] = [];

        // 展平
        (function flat(data: IRouteConfParams[]) {
            data.forEach(item => {
                if (item.children) flat(item.children);
                flatData.push(item);
            });
        })(data);

        return flatData.map(item => {
            if (item.component) return <Route path={item.path}
                                              key={item.path}
                                              render={props => <RouteComponent {...props} {...item} />} />;
            return <Route path={item.path}
                          key={item.path}
                          render={props => <Redirect to={item.redirect as string} />} />;
        });
    }

    return (
        <HashRouter>
            <Switch>
                <Route path='/login'
                       key='/login'
                       render={props => <RouteComponent component='/login' path='/login' />} />
                <ILayout>
                    <Switch>
                        <Route exact path="/" render={_ => (<Redirect to={routeData[0].redirect as string} />)} />
                        {transformRoute(routeData)}
                    </Switch>
                </ILayout>
            </Switch>
        </HashRouter>
    );
};

export default Router;
