import axios from 'axios';
import * as types from './actionTypes';


export const accessKeyInput = accessKey => ({type: types.ACCESS_KEY_INPUT, accessKey});

export const accessKeyValid = user => ({ type: types.ACCESS_KEY_VALID, user });

export const appMode = demo => ({ type: types.IS_DEMO, demo});

export const demoSignin = () => async dispatch => {
    try {
        const user = await axios.post('/auth/demo', {});
        dispatch(validSession(user.data));
    } catch(e) {
        console.error(e);
    };
};

export const isDemo = () => async dispatch => {
    try{ 
        const mode = await axios.get('/auth/mode');
        if (mode.demo) dispatch(appMode(true));
    } catch(e) {
        console.error(e)
    };
};

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
        console.error(e);
    };
};
