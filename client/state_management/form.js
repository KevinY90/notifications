import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';


const urlState = {
    url: '',
    headers: [],
    params:[],
    field: null,
    functions: [],
    targetValue: '',
    selectedFn: '',
    html: false,
    responseData: {},
    validResponse: false,
    statusCode: null,
};

const taskState = {
    name: '',
    description: '',
    interval: 500,
    taskMessage: '',
    notificationType: 'email',
    active: false,
};

const url = (state=urlState, action) => {
    switch(action.type) {
        case types.ADD_HEADER:
            return {
                ...state,
                headers: [
                    ...state.headers, 
                    {
                        optionName: '',
                        value: '',
                    },
                ]
            };
        case types.ADD_PARAM:
            return {
                ...state,
                params: [
                    ...state.params,
                    {
                        optionName: '',
                        value: '',
                    },
                ]
            };
        case types.INPUT_URL:
            return {
                ...state,
                url: action.data
            };
        case types.INPUT_HEADER_NAME:
            const updateHeaderName = [...state.headers]
            updateHeaderName[action.data.index].optionName = action.data.value
            return {
                ...state,
                headers: updateHeaderName
            };
        case types.INPUT_HEADER_VALUE:
            const updateHeaderValue = [...state.headers]
            updateHeaderValue[action.data.index].value = action.data.value
            return {
                ...state,
                headers: updateHeaderValue
            };
        case types.INPUT_PARAMETER_NAME:
            const updateParamName = [...state.params]
            updateParamName[action.data.index].optionName = action.data.value
            return {
                ...state,
                params: updateParamName
            };
        case types.INPUT_PARAMETER_VALUE:
            const updateParamValue = [...state.params]
            updateParamValue[action.data.index].value = action.data.value
            return {
                ...state,
                params: updateParamValue
                };
        case types.SELECT_FIELD:
            return {
                ...state,
                field: action.data
            };
        case types.VALID_RESPONSE:
            return {
                ...state,
                validResponse: action.isValid,
            };
        case types.PAYLOAD_STATUS:
            return {
                ...state,
                statusCode: action.data,
            }
        case types.RESPONSE_PAYLOAD_DATA:
            return {
                ...state,
                responseData: action.data,
            };
        case types.AVAILABLE_FUNCTIONS:
            return {
                ...state,
                functions: action.data,
            };
        case types.SELECT_FUNCTION:
            return {
                ...state,
                selectedFn: action.data,
            };
        case types.UPDATE_TARGET_VALUE:
            return {
                ...state,
                targetValue: action.data,
            };
        case types.JOB_CREATED:
            return {
                ...urlState,
            };
        case types.USER_LOGOUT:
            return urlState;
        default:
            return state;
    };
};

const task = (state=taskState, action) => {
    switch(action.type) {
        case types.UPDATE_JOB_NAME:
            return {
                ...state,
                name: action.data
            };
        case types.UPDATE_JOB_DESCRIPTION:
            return {
                ...state,
                description: action.data,
            };
        case types.UPDATE_JOB_INTERVAL:
            const nan = isNaN(parseInt(action.data))
            return {
                ...state,
                interval: nan ? 500 : parseInt(action.data)
            };
        case types.UPDATE_JOB_MESSAGE:
            return {
                ...state,
                taskMessage: action.data
            };
        case types.USER_LOGOUT:
            return taskState;
        default:
            return state
    };
};


const form = combineReducers({
    url,
    task,
});

export default form;
