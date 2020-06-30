import React from 'react';
import { connect } from 'react-redux';
import JobView from '../views/Job';
import { startTask } from '../actions/data';



const container = props => <JobView {...props}/>

const mapStateToProps = state => {
    const { tasks } = state.data;
    return {
        tasks
    };
};

const mapDispatchToProps = dispatch => ({
    start(e) {
        const taskId = e.target.id.split('-')[0]
        console.log(e.target.value)
        dispatch(startTask(taskId, e.target.value))
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(container);
