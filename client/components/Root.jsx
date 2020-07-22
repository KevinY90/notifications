import React from 'react';
import { connect } from 'react-redux';
import Main from '../views/Main';
import { isValidSession, isDemo } from '../actions/auth';


const container = props => <Main {...props}/>

const mapStateToProps = state => {
    const { auth } = state;
    return {
        auth,
    };
};

const mapDispatchToProps = dispatch => ({
    existingSession() {
        dispatch(isValidSession())
    },
    getAppMode() {
        dispatch(isDemo())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
