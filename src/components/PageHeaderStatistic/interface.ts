// dataSource 的 每一项
export interface IFieldKeysProps {
    label: string;
    value: string;
    subLabel: string;
    subValue: string;
    subLabelSecond: string;
    subValueSecond: string;
    ratioLabel?: string;
    ratioValue?: string;
    tips?: string;
}

/**
 * 页面统计的props
 * @param fieldNames {IFieldKeysProps | undefined} 自定义 再dataSource 中取值的 key
 * @param dataSource {IFieldKeysProps[]} 组件的数据
 * @param className {string | undefined} 类名
 * @param isShowRatioValue {boolean | undefined} 是否显示计租率的增长与下降图标  默认true
 */
export interface IPageHeaderStatisticInterface {
    fieldNames?: IFieldKeysProps;
    dataSource: IFieldKeysProps[];
    className?: string;
    isShowRatioValue?: boolean;
}
