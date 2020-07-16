import React, {useEffect, useState} from 'react';
import {Drawer, Button} from 'antd';
import {Map, Marker} from 'react-amap';
import './index.less';

const AMap: React.FC = () => {
    // 地图中心位置
    const [mapCenter] = useState({
        longitude: 104.07219,
        latitude: 30.663441
    });
    // 左边抽屉配置
    const [leftDrawerOptions, setLeftDrawerOptions] = useState({
        visible: false
    });
    // 右边抽屉配置
    const [rightDrawerOptions, setRightDrawerOptions] = useState({
        visible: false,
        width: 256
    });

    // 左边抽屉关闭
    function leftHandleClose() {
        setLeftDrawerOptions(v => ({...v, visible: false}));
    }

    // 右边抽屉关闭
    function rightHandleClose() {
        setRightDrawerOptions(v => ({...v, visible: false}));
    }

    // 获取右边抽屉的宽度
    function getRightDrawerWidth() {
        const Container = document.querySelector('.a-map') as HTMLElement;
        setRightDrawerOptions(v => ({...v, width: Container.offsetWidth as number - 256}));
    }

    //
    useEffect(() => {
        getRightDrawerWidth();
    }, []);

    return (
        <article className='a-map'>
            <Map amapkey='a37bbb1de25eb3aa6f78a2752647c0cc'
                 center={mapCenter}>
                <Marker position={mapCenter}>
                    <Button onClick={() => setLeftDrawerOptions(v => ({...v, visible: true}))}>open</Button>
                </Marker>
                <Marker position={{
                    longitude: 104.17219,
                    latitude: 30.663441
                }}>
                    <Button onClick={() => setLeftDrawerOptions(v => ({...v, visible: true}))}>open</Button>
                </Marker>
                <Marker position={{
                    longitude: 105.07219,
                    latitude: 30.663441
                }}>
                    <Button onClick={() => setLeftDrawerOptions(v => ({...v, visible: true}))}>open</Button>
                </Marker>
            </Map>

            <Drawer title='地图里面的抽屉'
                    style={{position: 'absolute'}}
                    onClose={leftHandleClose}
                    placement='left'
                    getContainer={false}
                    {...leftDrawerOptions}>
                抽屉内容
                <Button onClick={() => setRightDrawerOptions(v => ({...v, visible: true}))}>打开右边</Button>
            </Drawer>
            <Drawer title='地图里面的抽屉'
                    mask={false}
                    style={{position: 'absolute'}}
                    onClose={rightHandleClose}
                    placement='right'
                    getContainer={false}
                    {...rightDrawerOptions}>
                右边抽屉
            </Drawer>
        </article>
    );
};

export default AMap;
