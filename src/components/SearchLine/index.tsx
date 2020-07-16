import React, {useEffect, useMemo} from 'react';
import {Form, Space, Input, Select, Cascader, Radio} from 'antd';
import {ISearchLineProps, SearchLineOptionsProps} from './interface';
import './index.less';

// TODO button的位置，回车事件的处理
// FormItem
const FormItem: React.FC<SearchLineOptionsProps> = (props) => {
    if (props.type === 'input') {
        return (<Form.Item name={props.field}>
            <Input placeholder={props.placeholder ?? '请输入'}
                   allowClear={true}
                   style={{width: props.width ?? 'auto'}} />
        </Form.Item>);
    } else if (props.type === 'radios') {
        return (<Radio.Group buttonStyle='solid'>
            {props.options.map(item => (
                <Radio.Button key={item.value}
                              value={item.value}>
                    {item.label}
                </Radio.Button>
            ))}
        </Radio.Group>);
    } else if (props.type === 'select') {
        return (
            <Select placeholder={props.placeholder}
                    showSearch
                    filterOption={(input, option) => option?.props?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    allowClear
                    style={{width: props.width ?? 200}}>

            </Select>
        );
    } else if (props.type === 'cascader') {
        return (<Cascader options={props.options}
                          placeholder={props.placeholder}
                          changeOnSelect={props.changeOnSelect ?? true}
                          showSearch={true}
                          allowClear={props.allowClear ?? true}
                          fieldNames={props.fieldNames ?? {
                              label: 'label',
                              value: 'value',
                              children: 'children'
                          }} />);
    } else {
        return null;
    }
};

const SearchLine: React.FC<ISearchLineProps> = ({extra, space, options, onChange, className}) => {
    // form
    const [form] = Form.useForm();

    // 表单默认值，只有初始化以及重置时生效
    const initialValues = useMemo(() => {
        return options.reduce((values: { [propsName: string]: any }, item) => {
            values[item.field] = item.initialValue;
            return values;
        }, {});
    }, [options]);

    // cdm
    // options有变化时，重新给表单设值
    useEffect(() => {
        console.log(1);
        const initialValues = options.reduce((values: { [propsName: string]: any }, item) => {
            values[item.field] = item.initialValue;
            return values;
        }, {});
        form.setFieldsValue(initialValues);
    }, [form, options]);

    // 渲染 FormItem
    function renderFormItem(data: SearchLineOptionsProps[]): React.ReactNode {
        return data.map((item, index) => {
            return <FormItem {...item}
                             key={index} />;
        });
    }

    // 字段值更新时触发
    function onValuesChange(changedValues: any, allValues: any) {
        /* console.log('changedValues==', changedValues);
         console.log('allValues==', allValues);*/
        void onChange?.(allValues);
    }

    // 提交表单且数据验证成功后回调事件
    function onFinish(values: any) {
        void onChange?.(values);
    }

    return (
        <article className={`search-line ${className ?? ''}`.trim()}>
            <section className="form-wrap">
                <Form size='middle'
                      layout='inline'
                      onValuesChange={onValuesChange}
                      onFinish={onFinish}
                      initialValues={initialValues}
                      form={form}>
                    {renderFormItem(options)}
                </Form>
            </section>
            <section className="extra-wrap">
                <Space size={space ?? 8}>
                    {extra}
                </Space>
            </section>
        </article>
    );
};

export default SearchLine;
