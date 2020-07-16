/**
 * 代理配置
 * @author XianZhengquan
 * @create 2020/4/14
 */
const {createProxyMiddleware} = require('http-proxy-middleware'); // 1.0.0版本的引用方式

module.exports = function (app) {
    // 后端api
    app.use('/api', createProxyMiddleware({
        // target: 'http://uap-test.uokohome.com:8970/api', // test1
        // target: 'http://182.151.18.47:8970/api', // test2
        target: 'http://192.168.200.76:10002/api', // 开发环境
        // target: 'http://pf.myream.com/api', // 好房线上
        // target: 'https://zg.pm-cdci.cn/api', // 城投线上
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));

    // mock
    app.use('/mock', createProxyMiddleware({
        target: 'https://www.fastmock.site/mock/06f05928112ed4d737390c4f06eee7a1/mock',
        changeOrigin: true,
        pathRewrite: {
            '^/mock': ''
        }
    }));
};
