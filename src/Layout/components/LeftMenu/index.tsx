import React, {useContext, useState, useCallback, useEffect, Fragment} from 'react';
import {Menu} from 'antd';
import Icon from '@ant-design/icons';
import {useHistory, useLocation, NavLink} from 'react-router-dom';
import {RootCtx} from 'Root';
import MenuIcons from 'assets/icons/menuIcons';
import {IRouteConfParams} from 'config/routers';

const LeftMenu: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    // menu数据
    const {rootOptions: {routeData}} = useContext(RootCtx);
    // 当前menu选中
    const [currentKey, setCurrentKey] = useState<string>('');

    // 菜单父级点击选中子集第一个
    const onTitleClick = useCallback(({key, domEvent}) => {
        if (domEvent.currentTarget.getAttribute('aria-expanded') === 'false') {
            const current = routeData.filter(item => item.id === key)[0];
            setCurrentKey(current.redirect ?? '');
            history.push(current.redirect ?? '');
        }
    }, [history, routeData]);

    // cdm 设置默认选中
    useEffect(() => {
        // 找到当前的1级菜单
        const current = routeData.find(item => location.pathname.includes(item.path));
        if (current) {
            // 有子集 当前菜单指向子集中的一个
            const children = current?.children?.filter(item => item.show);
            if (children?.length) {
                setCurrentKey(children?.find(item => location.pathname.includes(item.path))?.redirect ?? (current?.redirect ?? ''));
            } else {
                setCurrentKey(current?.redirect ?? '');
            }
        }
    }, [location, routeData]);

    // 创建 MenuItem
    function renderMenuItem(data: IRouteConfParams[]): React.ReactNode {
        // 返回一级菜单对应的icon
        function getIcon(item: IRouteConfParams, currentKey: string): any {
            const iconName = currentKey === item.redirect ? (item.icon + 'Active') : item.icon;
            // @ts-ignore
            return MenuIcons[iconName];
        }

        const renderMenu = (data: IRouteConfParams[]) => {
            return data.map(item => {
                if (item.show) {
                    if (item?.children?.filter(c => c.show)?.length) {
                        return (<Menu.SubMenu onTitleClick={onTitleClick}
                                              key={item.id}
                                              title={<div>
                                                  {item.level === 1 && (<Icon component={getIcon(item, currentKey)} />)}
                                                  <span className='menu-item-title'>{item.title}</span>
                                              </div>}>
                            {renderMenu(item.children)}
                        </Menu.SubMenu>);
                    }
                    return (
                        <Menu.Item key={item.redirect}>
                            <NavLink to={item.redirect ?? item.path} replace>
                                {item.level === 1 && (<Icon component={getIcon(item, currentKey)} />)}
                                <span className='menu-item-title'>{item.title}</span>
                            </NavLink>
                        </Menu.Item>
                    );
                }
                return null;
            });
        };
        return renderMenu(data);
    }

    // 菜单点击
    function handleClick({key}: any) {
        if (key === currentKey) return;
        setCurrentKey(key);
    }

    return (
        <Fragment>
            <Menu className='left-menu'
                  theme="dark"
                  mode="inline"
                  onClick={handleClick}
                  selectedKeys={[currentKey]}>
                {renderMenuItem(routeData)}
            </Menu>
        </Fragment>
    );
};

export default LeftMenu;
