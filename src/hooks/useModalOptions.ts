import {useState} from 'react';

/**
 * IModalOptions
 * @description 默认提供的参数
 * @param destroyOnClose {boolean}
 * @param keyboard {boolean}
 * @param maskClosable {boolean}
 * @param className {string}
 * @param width {number | string}
 * @param visible {boolean}
 */
interface IModalOptions {
    destroyOnClose?: boolean;
    keyboard?: boolean;
    maskClosable?: boolean;
    className?: string;
    width?: number | string;
    visible?: boolean;
};

function useModalOptions<T extends object = {}>(options: T = {} as T) {

    return useState<{
        [K in keyof T]: T[K]
    } & IModalOptions>({
        destroyOnClose: true,
        keyboard: false,
        maskClosable: false,
        visible: false,
        ...options
    });
}

export default useModalOptions;
