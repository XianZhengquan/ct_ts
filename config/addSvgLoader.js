/**
 * 添加svg-loader 将svg变成react组件
 * @author XianZhengquan
 * @create 2020/7/16
 */
const {loaderByName, addBeforeLoader} = require('@craco/craco');

module.exports = {
    overrideWebpackConfig: ({webpackConfig}) => {
        const svgLoader = {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true
                    }
                }
            ]
        };
        addBeforeLoader(webpackConfig, loaderByName('url-loader'), svgLoader);
        return webpackConfig;
    }
};
