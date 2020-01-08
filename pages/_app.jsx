import React from 'react';
import App from 'next/app';
import Header from 'next/head';
import { connect } from 'dva';
import { ConfigProvider, Layout, Modal, Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import PropTypes from 'prop-types';

import withDva from 'public/utils/store';
import { Header as MyHeader } from 'component';

import 'public/theme/common.less';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            modalNotice: false
        };
    }
    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext);
        appProps.pageProps = {
            ...appProps.pageProps
        };
        return {
            ...appProps
        };
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = '//s.weituibao.com/site/images/1568272475072/pace.min.js';
        document.head.appendChild(script);
        
        const { dispatch, router } = this.props;

        if (router.asPath != '/login') {
            dispatch({
                type: 'user/get'
            }).then(res => {
                if (res.system.notice) {
                    this.setState({
                        modalNotice: true
                    });
                }
            });
        }
        router.events.on('routeChangeStart', () => {
            window.Pace.start();
        });
        router.events.on('routeChangeComplete', () => {
            window.Pace.stop();
        });
    }

    render() {
        const { Component, pageProps, router, user, dispatch } = this.props;
        const { modalNotice } = this.state;

        if (router.asPath == '/login') {
            return (
                <ConfigProvider locale={zh_CN}>
                    <Header>
                        <title>登录-壹壳</title>
                    </Header>
                    <Component {...pageProps} router={router} onLogin={() => this.setState({ modalNotice: true })} />
                </ConfigProvider>
            );
        }

        if (!user) return null;

        return (
            <ConfigProvider locale={zh_CN}>
                <Header>
                    <title>首页-壹壳</title>
                </Header>
                <Modal
                    className="notice-modal"
                    title="系统公告"
                    width={640}
                    onCancel={() => this.setState({ modalNotice: false })}
                    visible={modalNotice}
                    footer={[<Button key="confirm" type="primary" onClick={() => this.setState({ modalNotice: false })}>知道了</Button>]}
                ><div dangerouslySetInnerHTML={{ __html: user.system.notice }}></div></Modal>
                <Layout>
                    <Layout.Header><MyHeader router={router} user={user} onShowNotice={() => {
                        dispatch({
                            type: 'user/getSystemInfo'
                        }).then(() => {
                            this.setState({
                                modalNotice: true
                            });
                        });
                    }} /></Layout.Header>
                    <Layout.Content><Component {...pageProps} router={router} /></Layout.Content>
                </Layout>
            </ConfigProvider>
        );
    }
}

MyApp.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func
};

export default withDva(connect(({ user }) => ({
    user
}))(MyApp));