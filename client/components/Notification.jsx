import React from 'react';
import { connect } from 'react-redux';
import NotificationView from '../views/Notification';

const container = props => <NotificationView {...props} />;

const mapStateToProps = state => {

    const { user } = state;
    const { notifications } = state.data;
    return {
        user, 
        notifications,
    };
};

export default connect(mapStateToProps)(container);
