
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const locale = require('./config/locale');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    let assetPrefix = '';
    if (process.env.NODE_ENV === 'production') {
        assetPrefix = locale[process.env.NODE_ENV].url.cdnStatic;
    }

    app.setAssetPrefix(assetPrefix);
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        handle(req, res, parsedUrl);
    }).listen(3001, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3001');
    });
});