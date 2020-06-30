import React from 'react';
import { connect } from 'react-redux';
import CreateRequest from '../views/FormCreate';
import { 
    addHeader,
    addParam, 
    inputUrl, 
    inputHeaderName,
    inputHeaderValue,
    inputParamName,
    inputParamValue,
} from '../actions/createForm';

const container = props => <CreateRequest {...props} />

const mapStateToProps = state => {
    const { url, task } = state.form
    return {
        url,
        task,
    }
};

const mapDispatchToProps = dispatch => ({
    handleAddHeader() {
        dispatch(addHeader())
    },
    handleAddParam() {
        dispatch(addParam())
    },
    handleInput(e) {
        const [toUpdate, field, idx ] = e.target.id.split('-');
        const name = e.target.name ? e.target.name : `${toUpdate}-${field}`
        if (name === 'url') dispatch(inputUrl(e.target.value))
        else if (name === 'param-optionName') dispatch(inputParamName({index: idx, value: e.target.value}))
        else if (name === 'param-value') dispatch(inputParamValue({index: idx, value: e.target.value}))
        else if (name === 'header-optionName') dispatch(inputHeaderName({index: idx, value: e.target.value}))
        else if (name === 'header-value') dispatch(inputHeaderValue({index: idx, value:e.target.value}))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(container);
