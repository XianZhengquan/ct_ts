import axios from 'utils/axios';

export const LoginApi = {
    // 登录
    login: (data: any) => axios({
        url: '/auth/oauth/token',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            company: data.companyId
        },
        transformRequest: [(p) => {
            let str = '';
            for (let i in p) {
                str += `${i}=${p[i]}&`;
            }
            return str;
        }]
    }),

    // 公司列表
    // getComList: data => axios.post('/company/companyCenter/getCompanyListForLogin', data),
    getComList: (data: object) => axios.post('/company/company_users/companies', data),

    // 获取路由
    getAuthorityMenu: (params?: any) => axios.get('/user/users/menus', {params}),

    // 登录后 获取当前用户信息
    getCurrentUserInfo: () => axios.get(`/user/users/current`),

    // 退出登录
    loginOut: () => axios.delete(`/auth/authentication/token`),

    // 更改登录密码
    updatePassword: (data: object) => axios.put('/user/users/password', data),

    // 根据用户获取菜单纬度
    getDim: () => axios.get(`/user/menus/dim`),

    // 获取枚举
    getEnum: () => axios.get('/setting/enums'),
};
