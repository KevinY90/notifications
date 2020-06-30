import React from 'react';
import { connect } from 'react-redux';
import UrlView from '../views/SavedUrl';

const container = props => <UrlView {...props}/>

const mapStateToProps = state => {
    const { urls } = state.data;
    return {
        urls,
    };
};

export default connect(mapStateToProps)(container);
