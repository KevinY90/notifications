import React from 'react';
import {
    Typography,
    Box,
    Container,
    List,
    ListItem,
    Paper,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    view: {
        width: '75vw',
        marginLeft: theme.spacing(6),
    },
    button: {
        margin: theme.spacing(2),
    },
    jobItem: {
        marginBottom: theme.spacing(2),
    },
    start: {
        background: 'green'
    },
    stop:{
        background: 'red'
    },
    active: {
        color: 'green',
    },
    inactive: {
        color: 'red',
    },
}));

const JobView = props => {
    const classes = styles();
    const { tasks, start } = props;
    return (
        <div className={classes.view}>
        <Container maxWidth='md'>
            <List>
            {
                tasks.length ? tasks.map(task => (
                    <Paper elevation={2} key={`${task.id}`}>
                    <ListItem className={classes.jobItem} >
                        <Box m={3}>
                            <Typography>Name: {task.name}</Typography>
                            <Typography>Description: {task.description}</Typography>
                            <Typography>Request Count: {task.callCount}</Typography>
                            <Typography>Interval: {task.interval}</Typography>
                            <Typography>Notification Message: {task.notification_message}</Typography>
                            <Typography>Notification Method: {task.notification_type}</Typography>
                            <Typography 
                                className={task.active ? classes.active: classes.inactive}>
                                { task.active ? 'Active' : 'Inactive' }
                                </Typography>
                            <Box m={2}>
                                <Typography> Start/Stop</Typography>
                                <Button 
                                id={`${task.id}-start`} 
                                className={classes.start} 
                                variant='contained'
                                onClick={start}
                                value={true}
                                disabled={ task.active ? true : false}
                                >
                            </Button>
                            <Button
                                id={`${task.id}-stop`}
                                className={classes.stop}
                                variant='contained'
                                onClick={start}
                                disabled={ !task.active ? true : false}
                                value={false}
                            >
                            </Button>
                            </Box>
                            
                            <Button 
                                id={`${task.id}-edit`}
                                className={classes.button}
                                variant='contained'> 
                                Edit 
                            </Button>
                            <Button
                                id={`${task.id}-delete`}
                                className={classes.button}
                                variant='contained'
                                color='secondary'>
                                Delete
                            </Button>
                        </Box>
                        
                    </ListItem>
                    </Paper>
                )) : ''
            }
            </List>
        </Container>
       </div>
    )
};

export default JobView; 