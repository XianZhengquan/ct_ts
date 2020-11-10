import {useState} from 'react';

/**
 * IFormOptions
 * @description 默认提供的参数
 * @param size {'small' | 'middle' | 'large'} 'middle'
 * @param className {string} 'custom-form'
 * @param colon {boolean} false
 * @param layout {string} 'vertical'
 * @param labelCol {}
 * @param wrapperCol {}
 */
interface IFormOptions {
    size?: 'small' | 'middle' | 'large';
    className?: string;
    colon?: boolean;
    layout?: 'horizontal' | 'vertical' | 'inline';
    labelCol?: {
        xs: { span: number };
        sm: { span: number };
        [propsName: string]: any;
    };
    wrapperCol?: {
        xs: { span: number };
        sm: { span: number };
        [propsName: string]: any;
    };
};

function useFormOptions<T extends object = {}>(options: T = {} as T) {

    return useState<{
        [K in keyof T]: T[K]
    } & IFormOptions>({
        size: 'middle',
        colon: false,
        layout: 'vertical',
        className: 'custom-form',
        labelCol: {
            xs: {span: 24},
            sm: {span: 24}
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 24}
        },
        ...options
    });
}

export default useFormOptions;
