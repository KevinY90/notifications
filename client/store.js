import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './state_management';


var mw = [];
var store;
if (process.env.NODE_ENV === 'development') {
    mw = [...thunkMiddleware, logger];
    store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    );
} else {
    store = createStore(
        reducer,
        applyMiddleware(thunkMiddleware, logger)
    );
};

export default store;
