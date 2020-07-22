import React from 'react';
import {
    Container,
    Typography,
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
    const demo = props.auth;
    const { handleClick } = props;
    return (
        <Container className={classes.content} maxWidth='sm'>
            {
                demo ? 
                <Container>
                    <Typography> Email notifications and Authentication is disabled in Demo mode, no data is stored  </Typography>
                    <Button color='primary' onClick={handleClick}> Use Demo Account </Button>
                </Container> :
                <Container> 
                    <div className={`fb-login-button`} data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" data-width=""></div>
                    <a href={`/auth/google`}>
                        <img src={"/img/btn_google_signin_light_normal_web.png"}/>
                    </a>
                </Container>
            }
        </Container>
    );
};


export default SignInOptions;

