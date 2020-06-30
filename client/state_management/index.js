import { combineReducers } from 'redux';
import auth from './auth';
import data from './data';
import user from './user';
import form from './form';

const reducer = combineReducers({
    auth,
    data,
    user,
    form,
});

export default reducer;
