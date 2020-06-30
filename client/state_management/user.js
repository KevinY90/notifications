import * as types from '../actions/actionTypes';

const userState = {
    id: null,
    email: null,
};

const user = (state=userState, action) => {
    switch(action.type) {
        case types.ACCESS_KEY_VALID:
            return {
                ...state,
                id: action.user.id,
                email: action.user.email,
            };
        case types.EXISTING_USER:
            return {
                ...state,
                id: action.user.id,
                email: action.user.email,
            };
        case types.USER_LOGOUT:
            return userState
        default:
            return state;
    };
};

export default user;
