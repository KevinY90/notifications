import React from 'react';
import { connect } from 'react-redux';
import SignInOptions from '../views/Login';
import { demoSignin } from '../actions/auth';


const container = props => <SignInOptions {...props} />

const mapStateToProps = state => {
    const { auth, user } = state;
    return {
        auth,
        user,
    };
};

const mapDispatchToProps = dispatch => ({
    handleClick() {
        dispatch(demoSignin())
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(container);
