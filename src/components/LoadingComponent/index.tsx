/**
 * 路由懒加载 loading | 报错 组件
 * @author XianZhengquan
 * @create 2020/4/14
 */
import React from 'react';
import {Spin} from 'antd';

interface ILoadingComponentProps {
    error?: {
        code?: string,
        message?: string
    }
}

const LoadingComponent: React.FC<ILoadingComponentProps> = ({error}) => {

    return (
        <article className='loading-component'>
            {
                error && <pre style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '7%'
                }}>
                    Error : {error.code}<br />
                    {error.message}
                </pre>
            }
            {
                !error && <Spin style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '7%'
                }} tip="页面加载中..." />
            }
        </article>
    );
};

export default LoadingComponent;
