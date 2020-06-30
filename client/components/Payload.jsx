import React from 'react';
import { connect } from 'react-redux';
import PayloadComponent from '../views/Payload';
import { validatePayload }  from '../actions/createForm';

const container = props => <PayloadComponent {...props} />;

const mapStateToProps = state => {
    const { url } = state.form;
    return {
        url
    };
};

const mapDispatchToProps = dispatch => ({
    handleClick(e){
        e.preventDefault();
        dispatch(validatePayload());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(container);
