import {ColumnProps} from 'antd/es/table';

/**
 * 基础表格参数
 * @param defaultColumns {undefined | ColumnProps<T>[]} 用于控制自定义表头的
 * @param columns {ColumnProps<T>[]} 表格columns
 * @param dataSource {T[]} 表格数据
 * @param rowKey {undefined | string} 数据的key
 * @param total {undefined | number} 总条数
 * @param currentPage {number} 当前页码
 * @param height {undefined | number} 表格高度，用于自定义表格高度
 * @param loading {undefined | boolean} 表格loading
 * @param onChange {(props: any) => void} 表格change回调
 * @param className {undefined | string} 额外的className
 */
export interface IBaseTableProps<T> {
    columns: ColumnProps<T>[];
    dataSource: T[];
    total: number;
    currentPage: number;
    onChange: (props: any) => void;
    defaultColumns?: ColumnProps<T>[];
    rowKey?: string;
    height?: number;
    loading?: boolean;
    className?: string;

    [props: string]: any
}

/**
 * 给外部定义表格数据用的Interface
 * @param props
 * @constructor
 */
export interface ITableOptionsProps<T> {
    columns: ColumnProps<T>[];
    dataSource: T[];
    total: number;
    rowKey?: string;
    loading?: boolean;

    [props: string]: any
}

declare function BaseTable<RecordType extends object = any>(props: IBaseTableProps<RecordType>): JSX.Element;

export default BaseTable;
