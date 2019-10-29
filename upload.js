const fs = require('fs');
const path = require('path');
const qiniu = require('./public/utils/qiniu');
// const file = require('./public/utils/file');
// const fileArr = file.traversalFolder(path.resolve(__dirname, 'build/static'));

// for (let i = 0; i < fileArr.length; i++) {
//     const file = fileArr[i];
//     qiniu.upload(file.filepath, `_next${file.filename}`);
// }

const manifestPath = path.resolve(__dirname, './build/build-manifest.json');

const _manifest = JSON.parse(fs.readFileSync(manifestPath));
const pageManifest = JSON.parse(fs.readFileSync(path.resolve(__dirname, './build/server/pages-manifest.json')));

const pages = Object.keys(_manifest.pages);

pages.forEach(page => {
    _manifest.pages[page].forEach(file => {
        qiniu.upload(path.join(__dirname, 'build', file), `_next/${file}`).catch(err => {
            console.log(err.message);
        });
    });
});

Object.keys(pageManifest).forEach(item => {
    const file = pageManifest[item];
    const filepath = path.join(__dirname, 'build', file);
    if (fs.existsSync(filepath)) {
        qiniu.upload(filepath, `_next/${file}`).catch(err => {
            console.log(err.message);
        });
    }
});