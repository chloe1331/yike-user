const Api = {
    getUrl: (url, query, encode) => {
        const _q = [];
        if (query) {
            url += '?';
            Object.keys(query).sort((a, b) => a.charCodeAt() - b.charCodeAt()).map(function (key) {
                const val = encode ? encodeURIComponent(query[key]) : query[key];
                return _q.push(`${key}=${val}`);
            });
        }
        return url + _q.join('&');
    },

    convertCondition: (params) => {
        Object.keys(params).forEach(item => {
            if (params[item] === '') delete params[item];
        });

        return params;
    },

    getUrlParam: (url, name) => {
        if (!name) {
            return null;
        }
        url = url || location.search;
        name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\');
        const reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i');
        const match = url.match(reg);
        return !match ? null : match[1];
    },

    getAllParams: (url) => {
        if (!url) {
            return null;
        }

        const _params = url.match(/[?|&][^=]*=[^&]*/ig);

        if (_params) {
            const params = {};

            _params.forEach(item => {
                const _match = item.match(/[?|&]([^=]*)=([^&]*)/);
                params[_match[1]] = decodeURIComponent(_match[2]);
            });

            return params;
        } else {
            return null;
        }
    }
};

module.exports = Api;