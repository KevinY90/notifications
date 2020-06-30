import React from 'react';
import { connect } from 'react-redux';
import ActiveTable from '../views/ActiveTable';

const container = props => <ActiveTable {...props}/>;

const mapStateToProps = state => {
    const { tasks } = state.data
    return {
        tasks,
    };
};

export default connect(mapStateToProps)(container);
