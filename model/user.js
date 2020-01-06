import { MServer } from 'public/utils';

const model = {
    namespace: 'user',
    state: null,
    reducers: {
        save: (state, payload) => ({
            ...state,
            ...payload.data
        })
    },
    effects: {
        *get(action, { put }) {
            const res = yield MServer.get('/user/info', null, {
                silent: true
            });
            
            if (res.errcode !== 0) {
                return;
            }
            const system = yield MServer.get('/system/get').then(res => {
                const systemInfo = {};
                if (res.errcode == 0) {
                    res.data.forEach(item => {
                        systemInfo[item.key] = item[item.type];
                    });
                }
                return systemInfo;
            });
            const data = {
                ...res.data,
                system
            };
            yield put({
                type: 'save',
                data
            });
            return data;
        }
    },
};

export default model;