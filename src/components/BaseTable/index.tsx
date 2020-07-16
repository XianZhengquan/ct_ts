import React, {useEffect, useMemo, useState} from 'react';
import {Table} from 'antd';
import useSize from 'hooks/useSize';
import {IBaseTableProps, ITableOptionsProps} from './interface';

function BaseTable<T extends object = {}>(props: IBaseTableProps<T>): JSX.Element {
    // layout的大小
    const [state] = useSize(document.querySelector('.i-layout-container') as HTMLElement);
    // 表格配置
    const [tableOptions, setTableOptions] = useState<ITableOptionsProps<T>>({
        columns: [],
        dataSource: [],
        rowKey: 'id',
        total: 0
    });

    // 表格宽度
    const scrollX = useMemo(() => {
        return tableOptions.columns.reduce((sum: number, curr: any) => {
            if (curr.width) sum += curr.width as number;
            return sum;
        }, 0);
    }, [tableOptions]);

    //
    useEffect(() => {
        const {onChange, total, defaultColumns, height, currentPage, ...restProps} = props;
        setTableOptions(v => ({...v, ...restProps}));
    }, [props]);

    // 表格change
    function handleTableChange({current, pageSize}: any, filters: any, {columnKey, order}: any) {
        void props.onChange({
            currentPage: current,
            pageSize,
            ...filters,
            orderByName: columnKey || '',
            orderByType: order
        });
    }

    return (
        <article className={`base-table ${props.className ?? ''}`.trim()}>
            <Table<T> scroll={{x: scrollX, y: state.height as number - (props.height ?? 66)}}
                      onChange={handleTableChange}
                      pagination={{
                          defaultPageSize: 20,
                          pageSizeOptions: ['10', '20', '30', '40'],
                          showSizeChanger: true,
                          total: props.total,
                          current: props.currentPage
                      }}
                      {...tableOptions} />
        </article>
    );
}

export default BaseTable;
