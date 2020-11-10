/**
 * 个人中心
 * @author XianZhengquan
 * @create 2020/7/22
 */
import React, {useContext} from 'react';
import {Dropdown, Menu} from 'antd';
import {PersonalCenter} from '../index';
import Icon from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import {RootCtx} from 'Root';
import {LoginApi} from 'api/login';

interface IUserCenterProps {
    icon: any
}

const UserCenter: React.FC<IUserCenterProps> = ({icon}) => {
    const {setRootOptions} = useContext(RootCtx);
    const history = useHistory();

    // 反馈
    function feedback() {
        history.push('/feedback');
    }

    // 退出
    async function logout() {
        await LoginApi.loginOut();
        sessionStorage.clear();
        setRootOptions(v => ({
            ...v,
            pageType: '1',
            routeData: [],
            login: false
        }));
        history.push('/login');
    }

    return (
        <Dropdown overlay={
            <Menu>
                <Menu.Item>
                    <PersonalCenter>个人中心</PersonalCenter>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={feedback}>我要反馈</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={logout}>退出</div>
                </Menu.Item>
            </Menu>}>
            <article className='user header-item'>
                <div className="icon">
                    <Icon component={icon} />
                </div>
                <div className="label">{sessionStorage.userName}</div>
            </article>
        </Dropdown>
    );
};

export default UserCenter;
