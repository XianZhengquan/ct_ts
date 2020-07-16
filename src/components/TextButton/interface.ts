import React from 'react';

/**
 * 文字按钮参数
 * @param disabled {boolean} 是否禁用
 * @param onClick {React.MouseEventHandler<HTMLElement>} 点击事件
 * @param className {string} 额外的类名
 * @param link {string} 如果有值，则转换成 <a href={link}>...</a>
 */
export interface ITextButtonProps {
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLElement>,
    className?: string,
    link?: string
}

export default ITextButtonProps;
