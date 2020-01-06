import React from 'react';
import App from 'next/app';
import Header from 'next/head';
import { connect } from 'dva';
import { ConfigProvider, Layout } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import PropTypes from 'prop-types';

import withDva from 'public/utils/store';
import { Header as MyHeader } from 'component';

import 'public/theme/common.less';

class MyApp extends App {
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
        const { Component, pageProps, router, user } = this.props;

        if (router.asPath == '/login') {
            return (
                <ConfigProvider locale={zh_CN}>
                    <Header>
                        <title>登录-壹壳</title>
                    </Header>
                    <Component {...pageProps} router={router} />
                </ConfigProvider>
            );
        }

        if (!user) return null;

        return (
            <ConfigProvider locale={zh_CN}>
                <Header>
                    <title>首页-壹壳</title>
                </Header>
                <Layout>
                    <Layout.Header><MyHeader router={router} user={user} /></Layout.Header>
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