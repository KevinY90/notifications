import * as types from '../actions/actionTypes';

const authState= {
    accessKey: '',
    signedIn: false,
    demo: false,
};

const auth = (state=authState, action) => {
    switch(action.type) {
        case types.ACCESS_KEY_INPUT:
            return {
                ...state,
                accessKey: action.accessKey,
            }
        case types.ACCESS_KEY_VALID:
            return {
                ...state,
                signedIn: true,
            };
        case types.IS_DEMO:
            return {
                ...state,
                demo: action.demo,
            };
        case types.EXISTING_USER:
            return {
                ...state,
                signedIn: true,
            };
        default:
            return state;
    };
};

export default auth;
