// import { delay } from 'dva/saga';
import axios from 'axios';
import Axios from '../utils/axios';
export default {
    namespace: 'auth',
    state: {
        name: '',
        _id: ''
    },
    reducers: {
        'currentUser' (state, action) {
            console.log('reducer', action.payload.name);
            return {
                ...state,
                name: action.payload.name,
                _id: action.payload._id
            };
        },
    },
    effects: {
        *asyncCurrentUser(props, { call, put, select }) { 
            console.log(props); 
            const res = yield Axios.ajax({
                url: '/current_user',
                method: 'get'
            })
            // const res = yield axios.get('/current_user');
            //const res = yield call(axios.get, '/current_user');
            if(res.code === 200){
                if(typeof res.items[0]._id !== 'undefined'){
                    yield put({ type: 'currentUser', payload: res.items[0] });
                }else{
                   props.history.push('/User/Login');
                }
            }else{
                props.history.push('/User/Login');
            }
            //yield call(delay, 1000);
        },
    },
}
