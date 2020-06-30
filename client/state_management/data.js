import * as types from '../actions/actionTypes'

const dataState = {
    tasks: [],
    urls: [],
    notifications: [],
};

const data = (state=dataState, action) => {
    switch(action.type) {
        case types.UPDATE_USER_URLS:
            return {
                ...state,
                urls: action.data,
            };
        case types.TASK_START_STOP:
            const updated = state.tasks.map(task => {
                if(task.id === action.data.id) {
                    task.active = action.start
                }
                return task
            });
            return {
                ...state,
                tasks: updated,
            };
        case types.UPDATE_USER_TASKS:
            return {
                ...state,
                tasks: action.data,
            }
        case types.UPDATE_USER_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.data,
            };
        case types.USER_LOGOUT:
            return dataState;
        default:
            return state
    };
};

export default data;
