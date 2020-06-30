import axios from 'axios';
import * as types from './actionTypes';


export const addHeader = () => ({type: types.ADD_HEADER});

export const addParam = () => ({type: types.ADD_PARAM});

export const inputUrl = data => ({ type: types.INPUT_URL, data})

export const inputHeaderName = data => ({type: types.INPUT_HEADER_NAME, data});

export const selectFunction = data => ({ type: types.SELECT_FUNCTION, data});

export const inputHeaderValue = data => ({type: types.INPUT_HEADER_VALUE, data });

export const fieldSelect = data => ({ type: types.SELECT_FIELD, data});

export const inputParamName = data => ({type: types.INPUT_PARAMETER_NAME, data});

export const inputParamValue = data => ({type: types.INPUT_PARAMETER_VALUE, data});

export const updateJobName = data => ({type: types.UPDATE_JOB_NAME, data});

export const updateJobDescription = data => ({type:types.UPDATE_JOB_DESCRIPTION, data});

export const updateJobInterval = data => ({ type: types.UPDATE_JOB_INTERVAL, data});

export const updateJobMessage = data => ({type:types.UPDATE_JOB_MESSAGE, data});

export const updateTargetValue = data => ({ type: types.UPDATE_TARGET_VALUE, data});

export const responsePayloadData = data => ({ type: types.RESPONSE_PAYLOAD_DATA, data });

export const payloadStatusCode = data => ({ type: types.PAYLOAD_STATUS, data });

export const validResponse = isValid => ({ type: types.VALID_RESPONSE, isValid });

export const validatePayload = () => async (dispatch, getState) => {
    const { form } = getState();
    const url = form.url
    const headers = url.headers
        .reduce((obj, header) => {
            obj[header.optionName] = header.value
            return obj
        }, {});
    const queryParams = url.params
        .map(param => `${param.optionName}=${param.value}`)
        .join('&');
    const targetUrl = url.url;
    try {
        const response = await axios.post('/api/resources/test/payload', {
            targetUrl,
            hArgs: headers,
            queryParams,
        });
        dispatch(payloadStatusCode(response.status))
        dispatch(validResponse(200<=response.status < 300 && typeof response.data === 'object'));
        dispatch(responsePayloadData(response.data));
    } catch(e) {
        dispatch(validResponse(false));
        dispatch(responsePayloadData(e))
    };
};
