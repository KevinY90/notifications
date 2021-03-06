import React from 'react';
import { connect } from 'react-redux';
import Nav from '../views/Nav';
import { logout } from '../actions/auth';

const container = props => <Nav {...props}/>

const mapStateToProps = state => {
    const {auth} = state;
    return {
        auth
    };
};

export default connect(mapStateToProps)(container);
