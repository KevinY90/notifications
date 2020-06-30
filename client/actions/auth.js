import axios from 'axios';
import * as types from './actionTypes';


export const accessKeyInput = accessKey => ({type: types.ACCESS_KEY_INPUT, accessKey});

export const accessKeyValid = user => ({ type: types.ACCESS_KEY_VALID, user });

export const submitAccessKey = () => async (dispatch, getState) => {
    const { auth } = getState();
    try {
        const user = await axios.post('/api/auth/key', {
            key: auth.accessKey,
        })
        dispatch(accessKeyValid(user.data));
    } catch(e) {
        console.error(e);
    };
};

export const userLogout = () => ({type: types.USER_LOGOUT })

export const validSession = user => ({ type: types.EXISTING_USER, user })

export const isValidSession = () => async dispatch => {
    try {
        const user = await axios.get('/api/session');
        const { id, email } = user.data;
        dispatch(validSession({id, email}));
    } catch(e) {
        console.log();
    };
};
