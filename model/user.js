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
            yield put({
                type: 'save',
                data: {
                    ...res.data
                }
            });
        }
    },
};

export default model;