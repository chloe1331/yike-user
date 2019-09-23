const webpack = require('webpack');
const path = require('path');

const withLessExcludeAntd = require('./next-less.config.js');

// choose your own modifyVars
const modifyVars = require('./public/theme/modifyVars');

if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {};
}

module.exports = withLessExcludeAntd({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
        camelCase: true
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: modifyVars
    },
    distDir: process.env.NODE_ENV == 'production' ? 'build' : '.next',
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };
        Object.assign(config.resolve.alias, {
            pages: path.resolve(__dirname, './pages'),
            component: path.resolve(__dirname, './component'),
            public: path.resolve(__dirname, './public'),
            config: path.resolve(__dirname, './config'),
        });
        return config;
    }

});