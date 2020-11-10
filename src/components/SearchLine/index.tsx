import React, {useEffect, useMemo} from 'react';
import {Form, Space, Input, Select, Cascader, Radio, Button} from 'antd';
import {ISearchLineProps, SearchLineOptionsProps} from './interface';
import './index.less';

// FormItem
const FormItem: React.FC<SearchLineOptionsProps> = (props) => {
    switch (props.type) {
        case 'input':
            return (<Form.Item name={props.field}>
                <Input placeholder={props.placeholder ?? '请输入'}
                       allowClear={true}
                       style={{width: props.width ?? 'auto'}} />
            </Form.Item>);
        case 'cascader':
            return (<Form.Item name={props.field}>
                <Cascader options={props.options}
                          placeholder={props.placeholder}
                          changeOnSelect={props.changeOnSelect ?? true}
                          showSearch={true}
                          allowClear={props.allowClear ?? true}
                          fieldNames={props.fieldNames ?? {
                              label: 'label',
                              value: 'value',
                              children: 'children'
                          }} />
            </Form.Item>);
        case 'radios':
            return (<Form.Item name={props.field}>
                <Radio.Group buttonStyle='solid'>
                    {props.options.map(item => (
                        <Radio.Button key={item.value}
                                      value={item.value}>
                            {item.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Form.Item>);
        case 'select':
            return (<Form.Item name={props.field}>
                <Select placeholder={props.placeholder}
                        showSearch
                        filterOption={(input, option) => option?.props?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        allowClear
                        style={{width: props.width ?? 200}}>

                </Select>
            </Form.Item>);
        default :
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

    // options有变化时，重新给表单设值
    useEffect(() => {
        const initialValues = options.reduce((values: { [propsName: string]: any }, item) => {
            values[item.field] = item.initialValue;
            return values;
        }, {});
        form.setFieldsValue(initialValues);
    }, [form, options]);

    // 是否有 input 类型的表单
    const haveInput = useMemo(() => options.some(item => item.type === 'input'), [options]);

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
                    {haveInput && (<Form.Item>
                        <Button htmlType='submit'>搜索</Button>
                    </Form.Item>)}
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
