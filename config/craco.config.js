/**
 * 修改webpack 配置
 * @author XianZhengquan
 * @create 2020/6/11
 */
// 添加 antd 相关webpack配置
const CracoAntDesignPlugin = require('craco-antd');
// 替换moment为dayjs
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// 添加 svgLoader
const svgLoader = require('./addSvgLoader');

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A',
                    '@link-color': '#1DA57A'
                }
            }
        },
        {
            plugin: svgLoader
        }
        // 此plugin会导致启动项目白屏
        /*{
            plugin: AntdDayjsWebpackPlugin
        }*/
    ]
};
