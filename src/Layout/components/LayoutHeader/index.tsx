import React from 'react';
import Icon, {SoundOutlined} from '@ant-design/icons';
import {Features, UserCenter} from './components';
import HeaderIcons from 'assets/icons/layoutHeaderIcon';
import {useHistory} from 'react-router-dom';
import './index.less';

const LayoutHeader: React.FC = () => {
    const history = useHistory();

    // 获取icon
    function getIcon(name: string): any {
        // @ts-ignore
        return HeaderIcons[name];
    }

    // 跳转
    function pushRoute(path: string) {
        history.push(path);
    }

    return (
        <header className='layout-header'>
            <section className="header-item"
                     onClick={() => pushRoute('/messageCenter')}>
                <div className="icon">
                    <SoundOutlined />
                </div>
                <div className="label">消息</div>
            </section>
            <div className="divider" />
            <section className="header-item"
                     onClick={() => pushRoute('/helpCenter')}>
                <div className="icon">
                    <Icon component={getIcon('support')} />
                </div>
                <div className="label">技术支持</div>
            </section>
            <div className="divider" />
            <UserCenter icon={getIcon('user')} />
            <div className="divider" />
            <Features icons={HeaderIcons} />
        </header>
    );
};

export default LayoutHeader;
