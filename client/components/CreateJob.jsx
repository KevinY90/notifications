import React from 'react';
import { connect } from 'react-redux';
import CreateJob from '../views/CreateJob';
import {
    selectFunction,
    updateJobDescription,
    updateJobInterval,
    updateJobMessage,
    updateJobName,
    updateTargetValue,
    
} from '../actions/createForm';

const container = props => <CreateJob {...props} />

const mapStateToProps = state => {
    const { url, task } = state.form;
    const { functions, field, selectedFn }  = url;
    return {
        functions,
        field,
        selectedFn,
        task,
    };
};

const mapDispatchToProps = dispatch => ({
    handleSelect(e) {
        dispatch(selectFunction(e.target.value))
    },
    handleInput(e) {
        const updated = e.target.id;
        if (updated === 'input-target-value') dispatch(updateTargetValue(e.target.value));
        else if(updated === 'input-job-name') dispatch(updateJobName(e.target.value));
        else if (updated === 'input-job-description') dispatch(updateJobDescription(e.target.value));
        else if (updated === 'input-job-interval') dispatch(updateJobInterval(e.target.value));
        else if (updated === 'input-job-message') dispatch(updateJobMessage(e.target.value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
