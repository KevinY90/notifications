import * as types from './actionTypes';
import axios from 'axios';

export const jobCreated = () => ({type: types.JOB_CREATED});

export const jobCreateError = error => ({type: types.JOB_CREATE_ERROR}, error);

export const updateUserTasks = data => ({type: types.UPDATE_USER_TASKS, data});

export const updateUserNotifications = data => ({type: types.UPDATE_USER_NOTIFICATIONS, data});

export const updateUserUrls = data => ({type: types.UPDATE_USER_URLS, data});

export const availableFn = data => ({ type: types.AVAILABLE_FUNCTIONS, data});

export const taskStarted = (data, start) => ({ type: types.TASK_START_STOP, data, start });

export const fetchUserTasks = id => async dispatch => {
    try {
        const userTasks = await axios.get(`/api/tasks/${id}`);
        dispatch(updateUserTasks(userTasks.data))
    } catch(e) {
        console.error(e)
    };
};

export const fetchUserNotifications = id => async dispatch  => {
    try {
        const userNotifications = await axios.get(`/api/users/notifications/${id}`);
        dispatch(updateUserNotifications(userNotifications.data))
    } catch(e) {
        console.error(e)
    };
};

export const fetchUserSavedUrls = id => async dispatch  => {
    try {
        const userUrls = await axios.get(`/api/urls/${id}`);
        dispatch(updateUserUrls(userUrls.data));
    } catch(e) {
        console.error(e)
    };
};

export const fetchAvailableFunctions = () => async dispatch => {
    try {
        const fnList = await axios.get('/api/resources/functions');
        dispatch(availableFn(fnList.data))
    } catch(e) {
        console.error(e)
    }
};

export const clearFormData = () => ({ type:types.CLEAR_FORM_DATA });

export const createJob = history => async (dispatch, getState) => {
    const { form, user } = getState();
    const { url, task } = form;
    const headers = url.headers
        .filter(hObj => (hObj.optionName.trim() !== '' && hObj.value.trim() !== ''))
        .map(headerData => `${headerData.optionName}=${headerData.value}`)
        .join(',');
    const params = url.params
        .filter(paramObj => (paramObj.optionName.trim() !== '' && paramObj.value.trim() !== ''))
        .map(qs => `${qs.optionName}=${qa.value}`)
        .join(',');
    const urlObj = {
        url: url.url,
        headers,
        params,
        html: url.html,
        fields: `${url.field}-${url.selectedFn}-${url.targetValue}`,
        userId: user.id
    };
    try {
        const createdUrl = await axios.post('/api/urls/create', urlObj);
        const taskObj = {
            name: task.name,
            description: task.description,
            interval: task.interval,
            completed: false,
            notification_message: task.taskMessage, 
            userId: user.id,
            urlId: createdUrl.data.id,
        };
        await axios.post('/api/tasks/create', taskObj);
        dispatch(jobCreated());
        dispatch(clearFormData());
        history.push('/dashboard');
    } catch(e) {
        console.error(e);
        dispatch(jobCreateError(e));
    };
};


export const startTask = (id, start) => async dispatch => {
    try {
        const status = await axios.post('/api/tasks/start', { id });
        dispatch(taskStarted(status.data, start));
    } catch(e) {
        console.error(e);
    };
};
