import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Typography,
    TableCell,
} from '@material-ui/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const styles = makeStyles(theme => ({
    active: {
        color: 'green',
    },
    inactive: {
        color: 'red',
    },
    title: {
        margin: theme.spacing(2),
    },
    idle: {
        color: 'grey',
        fontStyle: 'italic',
        align:'right',
    },
    timer: {
        display: 'flex',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: '8px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
}));

const ActiveTable = props => {
    const classes = styles();
    const { tasks } = props;
    const getTimeEstimate = (lastUpdate, interval) => parseInt(interval - ((new Date().getTime() - new Date(lastUpdate).getTime()) / 1000));
    const renderTimeRemaining = ({remainingTime}) => {
        let seconds = remainingTime;
        if (parseInt(seconds) === 0) return '';
        const days = seconds / 86400;
        const hours = seconds / 3600;
        const minutes = seconds / 60
        if (days > 1) return (
            <div className={classes.timerText}>
            <Typography >
                {`> 1 Day`}
            </Typography>
            </div>
            );
        else if (hours > 1) return (
            <div className={classes.timerText}>
                <Typography >{parseInt(hours)}</Typography>
                <Typography>hours</Typography>
            </div>
            );
        else if (minutes > 1) return (
            <div className={classes.timerText}>
                <Typography>{parseInt(minutes)}</Typography>
                <Typography>minutes</Typography>
            </div>
            );
        else return (
            <div className={classes.timerText}>
                <Typography>{parseInt(seconds)}</Typography>
                <Typography>seconds</Typography>
            </div>
        );
    };

    return (
        <React.Fragment> 
            <Typography className={classes.title} variant='h5'>Current Jobs</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography>Status</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Name</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography>Estimated Next Request</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    tasks.map(task => (
                        <TableRow key={`${task.name}`}>
                            <TableCell>
                                <Typography className={
                                    task.active ? classes.active : classes.inactive
                            }>{ task.active ? 'Active' : 'Inactive' }</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{`${task.name}`}</Typography>
                            </TableCell>
                            <TableCell>
                            { getTimeEstimate(task.updatedAt, task.interval) > 0 && task.active ? 
                            <div className={classes.timer}>
                            <CountdownCircleTimer
                                isPlaying
                                strokeWidth={1}
                                duration={getTimeEstimate(task.updatedAt, task.interval)}
                                colors={[["FF143R7", 0.33], ["#F7B001", 0.33], ["#FS9900"]]}
                                initialRemainingTime={task.interval}
                                size={70}>
                                {renderTimeRemaining}
                            </CountdownCircleTimer>
                            </div> :
                            <Typography className={classes.idle} align='center'>Currently Inactive</Typography>}
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </React.Fragment>
    );
};

export default ActiveTable;
