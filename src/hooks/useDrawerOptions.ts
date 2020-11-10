import {useState} from 'react';

/**
 * IDrawerOptions
 * @description 默认提供的参数
 * @param destroyOnClose {boolean} true
 * @param closable {boolean} true
 * @param maskClosable {boolean} false
 * @param placement {'right' | 'left' | 'top' | 'bottom'} 'right'
 * @param className {string} 'custom-drawer'
 * @param width {number | string} '50%'
 * @param visible {boolean} false
 */
interface IDrawerOptions {
    destroyOnClose?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    className?: string;
    width?: number | string;
    visible?: boolean;
}

function useDrawerOptions<T extends object = {}>(options: T = {} as T) {
    return useState<{
        [K in keyof T]: T[K]
    } & IDrawerOptions>({
        className: 'custom-drawer',
        placement: 'right',
        width: '50%',
        destroyOnClose: true,
        closable: true,
        maskClosable: false,
        visible: false,
        ...options
    });
}

export default useDrawerOptions;
