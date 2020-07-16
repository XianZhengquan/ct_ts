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
    // getAuthorityMenu: data => axios.get('/user/menu/authorityMenu', data)
    // getAuthorityMenu: data => axios.get('/mock/menu', data),
    getAuthorityMenu: () => axios.get('/user/users/menus'),

    // 登录后 获取当前用户信息
    getCurrentUserInfo: () => axios.get(`/user/users/current`),

    // 退出登录
    loginOut: () => axios.delete(`/auth/authentication/token`)
};
