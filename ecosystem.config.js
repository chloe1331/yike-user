'use strict';

const appName = 'yike-user';

module.exports = {
    apps: [{
        name: appName,
        script: 'npm start',
        env: {
            COMMON_VARIABLE: 'true',
            NODE_SERVER: 'true',
            NODE_ENV: 'beta',
        },
        env_production: {
            NODE_SERVER: 'true',
            NODE_ENV: 'production',
        },
    }],

    // 初始化 pm2 deploy ecosystem.config.js production setup
    deploy: {
        production: {
            user: 'root',
            host: '47.99.38.214',
            ref: 'origin/master',
            repo: `git@github.com:chloe1331/${appName}.git`,
            path: `/workspace/${appName}`,
            'post-deploy': 'git reset --hard && git checkout master && git pull && npm install && pm2 startOrRestart ecosystem.config.js --env production',
            env: {
                NODE_ENV: 'production',
            },
        },
    },
};
