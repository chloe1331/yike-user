import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

import Config from 'config/locale';
import UtilsUrl from './url';

axios.defaults.withCredentials = true;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

const methods = ['get', 'post'];
const envUrls = Config[process.env.NODE_ENV].url;
const api = {};

methods.forEach(method => {
    api[method] = (_url, data, option = {}) => {
        const headers = api.getDefaultHeaders();

        if (method == 'post') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
            data = qs.stringify(data);
        }
        if (option.headers) Object.assign(headers, option.headers);

        let url = _url;
        if (!/^\/\//.test(_url)) {
            url = `${envUrls.api}${_url}`;
        }
        return axios({
            method,
            url,
            data,
            params: method == 'get' ? data : (option.params || null),
            headers
        }).then(res => {
            if (res.data.errcode !== 0) {
                if (res.data.errcode == 401) {
                    location.href = '/login';
                } else {
                    if (!option.silent) message.error(res.data.message);
                }
            }
            return option.response ? res : res.data;
        }).catch((err) => {
            const _message = err.response ? err.response.data.message : err.message;
            if (!option.silent) message.error(_message);
            return {
                errcode: 1,
                message: _message,
                error: err.response ? err.response.data : null
            };
        });
    };
});

api.getUrl = (_url, data, encode) => {
    let url = _url;
    const fullUrl = UtilsUrl.getUrl(url, data, encode);

    return {
        domain: envUrls.api,
        url: fullUrl,
        fullUrl: `${envUrls.api}${fullUrl}`
    };
};

api.getDefaultHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Authorization': token ? `Bearer ${token}` : undefined
    };
};

export default api;