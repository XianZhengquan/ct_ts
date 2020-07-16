/**
 * 项目楼宇
 * @author XianZhengquan
 * @create 2020/4/15
 */
import React, {useEffect, useState, Fragment} from 'react';
import {message} from 'antd';
import {UploadFile, TextButton, BaseTable, SearchLine} from 'components';
import {ITableOptionsProps} from 'components/BaseTable/interface';
import {SearchLineOptionsProps} from 'components/SearchLine/interface';

// 表格数据类型
interface IDataSourceProps {
    id: string;
    name: string;
    age: number;
    [propsName:string]:any
}

const Assets: React.FC = () => {
    // 表格配置
    const [tableOptions, setTableOptions] = useState<ITableOptionsProps<IDataSourceProps>>({
        loading: false,
        columns: [
            {
                title: 'Id',
                width: 200,
                dataIndex: 'id'
            },
            {
                title: 'Name',
                width: 200,
                dataIndex: 'name'
            },
            {
                title: 'Age',
                width: 200,
                dataIndex: 'age'
            }
        ],
        dataSource: [
            {
                id: 'sdwad',
                name: '啥都玩得',
                age: 12
            }
        ],
        total: 0
    });
    // 搜索条的options  ps:配置写成state,可以防止其他的state的变化导致组件的重新渲染
    const [searchLineOptions] = useState<SearchLineOptionsProps[]>([
        {
            type: 'input',
            field: 'input',
            initialValue: '123',
            placeholder: '哈哈哈'
        },
        {
            type: 'input',
            field: 'input3',
            initialValue: '666',
            placeholder: '哈哈哈'
        },
        {
            type:'cascader',
            field:'cascader',
            initialValue:[],
            options:[],
            fieldNames:{
                label: 'label',
                value: 'value',
                children: 'children'
            }
        }
    ]);

    // cdm
    useEffect(() => {
        setTableOptions(v => ({
            ...v,
            loading: true
        }));
        setTimeout(() => {
            setTableOptions(v => ({
                ...v,
                loading: false,
                dataSource: [
                    {
                        id: '1',
                        name: '啥都玩得1',
                        age: 12
                    },
                    {
                        id: '2',
                        name: '啥都玩得2',
                        age: 12
                    }
                ]
            }));
        }, 2000);
    }, []);

    // 表格 change
    function onChange(props: any) {
        console.log(props);
    }

    return (
        <article className='assets'>
            项目楼宇
            <UploadFile />
            <hr />
            <section>
                <h1>文字按钮</h1>
                <div>
                    <TextButton>文字按钮</TextButton>
                    <TextButton disabled={true}>禁用</TextButton>
                    <TextButton onClick={() => message.success('点击')}>事件</TextButton>
                    <TextButton onClick={() => message.success('点击')} link='www.baidu.com'>link</TextButton>
                </div>
            </section>
            <hr />
            <section>
                <h1>基础表格</h1>
                <BaseTable<IDataSourceProps> {...tableOptions}
                                            currentPage={1}
                                            onChange={onChange} />
            </section>
            <hr />
            <section>
                <h1>SearchLine</h1>
                <SearchLine onChange={(val) => {
                    console.log('表单的值', val);
                }}
                            options={searchLineOptions}
                            extra={(<Fragment>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </Fragment>)}
                            space={8} />
            </section>
        </article>
    );
};

export default Assets;
