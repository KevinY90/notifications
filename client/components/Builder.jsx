import React from 'react';
import { connect } from 'react-redux';
import BuilderComponent from '../views/Builder';
import { createJob } from '../actions/data';

const container = props => <BuilderComponent {...props}/>

const mapStateToProps = state => {
    const { validResponse, field } = state.form.url;
    return {
        validResponse,
        field,
    };
};

const mapDispatchToProps = (dispatch, ownProps ) => ({
    handleCreate() {
        dispatch(createJob(ownProps.history));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
