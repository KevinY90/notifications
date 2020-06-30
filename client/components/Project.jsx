import React from 'react';
import { connect } from 'react-redux';
import Project from '../views/Project';
import { 
    fetchUserNotifications, 
    fetchUserTasks, 
    fetchUserSavedUrls,
    fetchAvailableFunctions,
} from '../actions/data';

const container = props => <Project {...props}/>;

const mapStateToProps = state => {
    const { user, data } = state
    return {
        user,
        data,
    };
};

const mapDispatchToProps = dispatch => ({
    getUserData(id) {
        dispatch(fetchUserNotifications(id))
        dispatch(fetchUserTasks(id))
        dispatch(fetchUserSavedUrls(id))
        dispatch(fetchAvailableFunctions())
    },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
