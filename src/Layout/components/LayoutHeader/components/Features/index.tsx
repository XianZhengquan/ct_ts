import React, {useContext, useState, useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Popover} from 'antd';
import Icon from '@ant-design/icons';
import {RootCtx, PageType} from 'Root';
import {LoginApi} from 'api/login';
import './index.less';

// 功能
interface IFeaturesProps {
    icons: any
}

// 维度
interface IFeaturesOptionProps {
    label: string;
    value: PageType;
    icon: string;
    activeIcon: string;
}

const Features: React.FC<IFeaturesProps> = ({icons}) => {
    const {rootOptions: {pageType}, setRootOptions} = useContext(RootCtx);
    const history = useHistory();

    // 当前选择
    const [currentBusiness, setCurrentBusiness] = useState<string>(sessionStorage.pageType ?? '');
    // 维度数据
    const [features, setFeatures] = useState<IFeaturesOptionProps[]>([]);
    // 获取维度
    const getFeatures = useCallback(async () => {
        try {
            const {data}: { data: IFeaturesOptionProps[] } = await LoginApi.getDim();
            setFeatures(data.map(item => ({...item, value: (item.value + '') as PageType})));
            setCurrentBusiness(sessionStorage.pageType ?? data[0]?.value);
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        void getFeatures();
    }, [getFeatures]);

    // 如果在其他地方修改了纬度，这里的显示也修改
    useEffect(() => {
        if (pageType !== currentBusiness) setCurrentBusiness(pageType);
    }, [currentBusiness, pageType]);

    // 设置业务
    function setBusiness(type: PageType): void {
        setCurrentBusiness(type);
        sessionStorage.pageType = type;
        setRootOptions(v => ({...v, pageType: type}));
        void getNewRoute(type);
    }

    // 获取新路由
    async function getNewRoute(type: PageType) {
        setRootOptions(v => ({...v, loading: true}));
        try {
            const {data} = await LoginApi.getAuthorityMenu({dim: type});
            sessionStorage.menu = JSON.stringify(data);
            setRootOptions(v => ({...v, routeData: data}));
            history.replace(data?.[0]?.redirect);
        } catch (e) {
            console.log(e);
        } finally {
            setRootOptions(v => ({...v, loading: false}));
        }
    }

    const Content = (<article className='features-content'>
        <div className="features-content-wrap">
            {
                features.map(item => item.value !== '4'
                    ? (<section className="content-item" key={item.value}>
                        <div className={`item-label ${currentBusiness === item.value && 'active'}`}
                             onClick={() => setBusiness(item.value)}>
                            <div className="icon">
                                <Icon
                                    component={currentBusiness === item.value ? icons[item.activeIcon] : icons[item.icon]} />
                            </div>
                            <div className="label">{item.label}</div>
                        </div>
                        {currentBusiness === item.value && (<div className="tag">当前</div>)}
                    </section>)
                    : null)
            }
        </div>
        <div className="features-content-center"
             style={{
                 height: features.some(item => item.value === '4') ? 'auto' : 0
             }}>
            <div className="center-split" />
            <div className="center-button" onClick={() => setBusiness('4')}>管理中心</div>
            {currentBusiness === '4' && (<div className="tag">当前</div>)}
        </div>
    </article>);

    return (
        <Popover content={Content}
                 placement='bottomRight'
                 overlayClassName='features-pop'>
            <article className='features header-item'>
                <div className="icon">
                    <Icon component={icons.feat} />
                </div>
                <div className="label">功能切换</div>
            </article>
        </Popover>
    );
};

export default Features;
