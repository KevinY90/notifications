import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard';

const container = props => <Dashboard {...props} />;

const mapStateToProps = state => {

    const { urls, tasks, notifications } = state.data;

    return {
        urls,
        tasks,
        notifications,
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(container);
