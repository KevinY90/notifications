import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { 
    Drawer,
    IconButton, 
    List, 
    Divider, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import CachedIcon from '@material-ui/icons/Cached';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PostAddIcon from '@material-ui/icons/PostAdd';


const sidebarWidth = '18%';

const styles = makeStyles(theme => ({
    hide: {
        display: 'none'
    },
    drawer: {
        width: sidebarWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
    width: sidebarWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    },
}));

const SidebarComponent = ({sidebarOpen, handleSidebarCollapse}) => {
    const classes = styles();
    return (
    <div className={classes.toolbar}>
        <Drawer 
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: sidebarOpen,
            [classes.drawerClose]: !sidebarOpen,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: sidebarOpen,
                [classes.drawerClose]: !sidebarOpen,
            }),
            }}
            >
            <div className={classes.toolbar}>
                <IconButton onClick={handleSidebarCollapse}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button component={Link} to='/dashboard' key='dashboard'>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Dashboard'/>
                </ListItem>
                <ListItem button component={Link} to='/create' key='create'>
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText>Create</ListItemText>
                </ListItem>
                <ListItem button component={Link} to='/urls' key='saved-urls'>
                    <ListItemIcon>
                        <BookmarksIcon />
                    </ListItemIcon>
                    <ListItemText primary='Saved URLs'/>
                </ListItem>
                <ListItem button component={Link} to='/jobs' key='currently-scheduled'>
                    <ListItemIcon>
                        <CachedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Scheduled'/>
                </ListItem>
                <ListItem button component={Link} to='/notifications' key='notification'>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Notifications'/>
                </ListItem>
            </List>
        </Drawer>
    </div>
    );
};

export default SidebarComponent;
