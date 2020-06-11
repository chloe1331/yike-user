import { Component } from 'react';
import Link from 'next/link';
import { Dropdown, Avatar, Icon, Menu } from 'antd';
import cx from 'classnames';
import PropTypes from 'prop-types';

import style from './style.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
        const handles = ['handleLogout'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleLogout() {
        const { router } = this.props;
        localStorage.removeItem('token');
        router.push('/login');
    }
    
    render() {
        const { router, user, onShowNotice } = this.props;
        const isSub = !!user.sub;
        let menu = [
            {
                title: '下单',
                href: '/'
            },
            // {
            //     title: '图片空间',
            //     href: '/image'
            // },
            {
                title: '订单列表',
                href: '/order'
            },
            {
                title: '售后订单',
                href: '/refund'
            }
        ];
        if (!isSub) {
            menu = menu.concat([
                {
                    title: '账单列表',
                    href: '/bill'
                },
                {
                    title: '子账号列表',
                    href: '/sub'
                }
            ]);
        }
        const userMenu = (
            <Menu style={{ width: 180 }}>
                <Menu.Item>
                    <a onClick={this.handleLogout}>
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className={style.myHeader}>
                <ul className={style.menuList}>
                    {
                        menu.map(item => (
                            <li key={item.href} className={cx({ active: router.pathname == item.href })}>
                                <Link href={item.href}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <a style={{ marginRight: '15px' }} onClick={onShowNotice}>查看公告</a>
                    <Dropdown overlay={userMenu}>
                        <a className={style.userInfo}>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} icon="user" />
                            <span className={style.userText}>{isSub ? `${user.username}:${user.sub.username}` : user.username}</span>
                            <Icon type="caret-down" className={style.dropdownIcon} />
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    router: PropTypes.object,
    user: PropTypes.object,
    onShowNotice: PropTypes.func
};