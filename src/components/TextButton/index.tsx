/**
 * 文字按钮
 * @author XianZhengquan
 * @create 2020/4/17
 */
import React from 'react';
import {ITextButtonProps} from './interface';
import './index.less';

const TextButton: React.FC<ITextButtonProps> = ({disabled, className, onClick, link, children}) => {

    return (
        <article className={['text-button', className, disabled && 'disabled'].filter(Boolean).join(' ').trim()}>
            {
                link
                    ? <a href={link}>{children}</a>
                    : <span onClick={disabled ? undefined : onClick ?? undefined}>{children}</span>
            }
        </article>
    );
};

export default TextButton;
