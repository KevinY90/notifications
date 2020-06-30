import React from 'react';
import {
    Typography,
    Container,
    Grid,
    Card,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActiveTable from '../components/ActiveTable';

const styles = makeStyles(theme => ({
    view: {
        width: '75vw',
        marginLeft: '10%',
    },
    cardItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '15vw',
        height: '20vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overview: {
        margin: theme.spacing(3)
    },
}));

const DashboardView = props => {
    const classes = styles();
    const { urls, tasks, notifications }  = props;
    const totalRequests = tasks.reduce((total, task) => total+task.callCount,0)
    const activeJobs = tasks.reduce((total, task) => task.active ? total+1 : total, 0)
    const notificationCount = notifications.reduce((total, notification) => total+notification.count, 0);
    return (
        <div className={classes.view}>
            <Container maxWidth='lg'>
                <Grid container justify="center" spacing={3} className={classes.overview}>
                    <Grid item xs={3} >
                        <Card className={classes.cardItem}>
                            <Typography>Total Requests</Typography>
                            <Typography variant='h3'>{totalRequests}</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}> 
                        <Card className={classes.cardItem}>
                            <Typography>Notifications</Typography>
                            <Typography variant='h3'>{notificationCount}</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.cardItem}>
                            <Typography>Active Jobs</Typography>
                            <Typography variant='h3' >{activeJobs}</Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={2}>
                        <ActiveTable />
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
};

export default DashboardView;

