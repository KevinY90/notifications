import React from 'react';
import { 
    Typography,
    Container,
    Box,
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    view: {
        width: '70vw',
        marginLeft: theme.spacing(6),
    },
}));


const NotificationView = props => {
    const classes = styles();
    const { user, notifications } = props;
    return (
        <Container className={classes.view}>
        <Box m={10} className={classes.view}>
            <Typography align='center'>
                Notifications currently sent to: {user.email}
            </Typography>
        </Box>
        </Container>
        
    )
};

export default NotificationView;

