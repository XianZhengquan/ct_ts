import React, {useEffect, useState} from 'react';
import {IPageHeaderStatisticInterface, IFieldKeysProps} from './interface';

const PageHeaderStatistic: React.FC<IPageHeaderStatisticInterface> = ({fieldNames, dataSource, className = '', isShowRatioValue = true}) => {
    // 自定义取值key
    const [fieldKeys, setFieldKeys] = useState<IFieldKeysProps>({
        label: 'label', // 主标签
        value: 'value',
        subLabel: 'subLabel', // 第二行 副标签
        subValue: 'subValue',
        subLabelSecond: 'subLabelSecond', // hack 特殊样式
        subValueSecond: 'subValueSecond',
        ratioLabel: 'ratioLabel', // 同比
        ratioValue: 'ratioValue',
        tips: 'tips'
    });
    // 如果有 fieldNames 更新 fieldKeys
    useEffect(() => {
        if (fieldNames) setFieldKeys(fieldNames);
        console.log(fieldKeys);
    }, [fieldKeys, fieldNames]);


    return (
        <article className={`page-header-statistic ${className}`}>
            {
                dataSource.map((item, index) => (<div key={index}>

                </div>))
            }
        </article>
    );
};

export default PageHeaderStatistic;
