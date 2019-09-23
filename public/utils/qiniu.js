const qiniu = require('qiniu');

const Config = {
    bucket: 'yike-static',
    prefix: 'http://pxynkk8s9.bkt.clouddn.com',
    accessKey: 'f0oB2vnGyS-ClZpkLHP4ZmHdvl6n7p3zCRQ_qOw9',
    secretKey: '4B2LjCYBQjbZvejAZkCm9BUuV9A1tXfg2oXsWgJz',
};

module.exports = {
    upload: (filePath, key) => {
        const bucket = Config.bucket;
        const mac = new qiniu.auth.digest.Mac(Config.accessKey, Config.secretKey);
        const putPolicy = new qiniu.rs.PutPolicy({
            scope: bucket,
        });
        const token = putPolicy.uploadToken(mac);
        const config = new qiniu.conf.Config();
        const formUploader = new qiniu.form_up.FormUploader(config);
        const putExtra = new qiniu.form_up.PutExtra();

        return new Promise((resolve, reject) => {
            formUploader.putFile(token, key || null, filePath, putExtra, function (respErr, respBody, respInfo) {
                if (respErr) {
                    reject(respErr.error);
                }

                if (respInfo.statusCode === 200) {
                    resolve({
                        full_url: `${Config.prefix}/${respBody.key}`,
                        filename: respBody.key,
                    });
                } else {
                    reject(respBody.error);
                }
            });
        });
    },
};