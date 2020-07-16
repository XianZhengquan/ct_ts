// 公共的interface
import React from 'react';
import {CascaderOptionType, FieldNamesType} from 'antd/es/cascader';

export interface IPublicProps {
    field: string;
    initialValue: any;
    width?: number;
    placeholder?: string;
}

/**
 * IInputProps
 * @param type {'input'} 类型，固定的
 */
export interface IInputProps extends IPublicProps {
    type: 'input';
}

/**
 * IRadioProps
 * @param type {'radios'} 类型，固定的
 * @param options {ISelectOptions[]} 用于渲染select的option
 */
export interface IRadioProps extends IPublicProps {
    type: 'radios';
    options: IRadioOptions[];
}

/**
 * radio 的 option
 * @param label {string} 显示名称
 * @param value {any} 对应的值
 */
export interface IRadioOptions {
    label: string;
    value: any;
}

/**
 * ISelectProps
 * @param type {'select'} 类型，固定的
 * @param options {ISelectOptions[]} 用于渲染select的option
 */
export interface ISelectProps extends IPublicProps {
    type: 'select';
    options: ISelectOptions[];
}

/**
 * select 的 option
 * @param label {string} 显示名称
 * @param value {any} 对应的值
 */
export interface ISelectOptions {
    label: string;
    value: any;

    [propsName: string]: any;
}

/**
 * ICascaderProps
 * @param type {'cascader'} 类型，固定的
 * @param options {CascaderOptionType[]} 用于渲染cascader的option
 * @param changeOnSelect {undefined | boolean} 选择立刻改变
 * @param allowClear {undefined | boolean} 时候显示 x
 * @param fieldNames {undefined | FieldNamesType} options的数据结构
 */
export interface ICascaderProps extends IPublicProps {
    type: 'cascader';
    options: CascaderOptionType[];
    changeOnSelect?: boolean;
    allowClear?: boolean;
    fieldNames?: FieldNamesType;
}

// 声明联合类型
export type SearchLineOptionsProps = IInputProps | IRadioProps | ISelectProps | ICascaderProps;

/**
 * 搜索条组件
 * @param extra {React.ReactNode} 额外的
 * @param space {undefined | number} 控制extra的间距，默认8
 * @param options {SearchLineOptionsProps[]} 用于渲染搜索组件
 * @param onChange {(value: any) => void} 搜索条change
 * @param className {undefined | number} className
 */
export interface ISearchLineProps {
    extra?: React.ReactNode;
    space?: number;
    options: SearchLineOptionsProps[];
    onChange: (value: any) => void;
    className?: string;
}

export default ISearchLineProps;
