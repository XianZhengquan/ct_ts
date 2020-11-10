/**
 * axios 封装
 * @author XianZhengquan
 * @create 2020/4/14
 */
import axios from 'axios';
import {message} from 'antd';

// 实例化 axios
const service = axios.create({
    // timeout: 30000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// 请求之前拦截
service.interceptors.request.use(
    (config: any) => {
        const mockReg = /^\/mock.*/;

        // 如果是 /mock 开头的
        if (mockReg.test(config.url)) {
            // 环境变量为api  process.env.REACT_APP_AXIOS_URL_TYPE 默认为 mock
            if (process.env.REACT_APP_AXIOS_URL_TYPE === 'api') config.url = config.url.replace(/^\/mock/, '/api');
        } else {
            // 如果不是 /mock 开头的，就是以前的 旧 /api,则需要走 后端的/api
            config.url = `/api${config.url}`;
        }
        config.timeout = config.url === '/api/import/importExport/importExcel' ? 120000 : 120000;
        config.headers['Authorization'] = config.url === '/api/auth/oauth/token'
            ? 'Basic dWFwOnVhcA=='
            : sessionStorage.token;
        return config;
    },
    err => {
        message.error(`request.use : ${err}`);
    }
);

// 请求之后拦截
service.interceptors.response.use(
    // @ts-ignore
    res => {
        if (res.config.url === '/api/auth/oauth/token') {
            if (!!res.data.access_token) {
                return Promise.resolve(res.data);
            }
        } else {
            if (res.data.status !== 200) {
                message.error(res.data.message);
                return Promise.reject(res.data.message);
            } else {
                return Promise.resolve(res.data);
            }
        }
    },
    (err: any) => {
        if (err.response) {
            if (err.response.data.status === 401) {
                message.error(err.response.data.message);
                sessionStorage.clear();
                setTimeout(_ => {
                    window.location.href = window.location.origin;
                }, 3000);
            } else {
                message.error(`${err.response.data.message}`);
            }
            return Promise.reject(`${err.response.data.message}`);
        } else {
            message.error('网络错误，请求链接失败！');
            return Promise.reject('网络错误，请求链接失败！');
        }
    }
);

export default service;
