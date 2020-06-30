import React from 'react';
import {
    Container,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center',
        marginTop: '20%',
        spacing: theme.spacing(3)
    }
}));

const SignInOptions = props => {
    const classes = styles();

    return (
        <Container className={classes.content} maxWidth='sm'>
            <div className={`fb-login-button`} data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" data-width=""></div>
            <a href={`/auth/google`}>
                <img src={"/img/btn_google_signin_light_normal_web.png"}/>
            </a>
        </Container>
    );
};


export default SignInOptions;

