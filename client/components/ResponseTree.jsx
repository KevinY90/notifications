import React from 'react';
import { connect } from 'react-redux';
import ResponseTree from '../views/ResponseTree';
import { fieldSelect } from '../actions/createForm';

const container = props => <ResponseTree {...props} />;

const mapStateToProps = state => {
    const { responseData, field } = state.form.url
    return {
        responseData,
        field,
    }
};

const mapDispatchToProps = dispatch => ({
    handleSelect(path) {
        dispatch(fieldSelect(path));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(container);

