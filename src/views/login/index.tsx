import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';
import {RootCtx} from 'Root';
import {LoginApi} from 'api/login';

const LoginPage: React.FC = () => {
    //
    const {setRootOptions} = useContext(RootCtx);
    const history = useHistory();
    // 按钮 loading
    const [loading, setLoading] = useState<boolean>(false);

    // 获取公司
    async function getCompanyList() {
        if (loading) return;
        setLoading(true);
        try {
            const {data} = await LoginApi.getComList({
                username: 'admin',
                password: 'smart1119',
                userType: 1
            });
            await handleLogin(data[0].routeUrl);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    // 登录
    async function handleLogin(companyId: string | number) {
        try {
            const data: any = await LoginApi.login({
                grant_type: 'password',
                username: companyId + '|admin',
                password: 'smart1119',
                companyId
            });
            localStorage.token = `Bearer ${data.access_token}`;
            localStorage.userName = data.userName;
            localStorage.userId = data.userId;
            await getAllInfo();
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    // 登录之后获取当前用户信息、获取枚举、获取菜单
    async function getAllInfo() {
        try {
            // 获取菜单
            const {data} = await LoginApi.getAuthorityMenu();
            sessionStorage.menus = JSON.stringify(data);
            setRootOptions(v => ({...v, routeData: data, login: true}));
            setLoading(false);
            history.push('/');
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }


    return (
        <article className='login-page'>
            <Button type='primary' onClick={getCompanyList} loading={loading}>登录</Button>
        </article>
    );
};

export default LoginPage;
