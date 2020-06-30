import React from 'react';
import { connect } from 'react-redux';
import SignInOptions from '../views/Login';


const container = props => <SignInOptions {...props} />

const mapStateToProps = state => {
    const { auth, user } = state;
    return {
        auth,
        user,
    };
};


export default connect(mapStateToProps)(container);

