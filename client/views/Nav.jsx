import React from 'react';
import clsx from 'clsx';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import SidebarComponent from './Sidebar'


const sidebarWidth = '18%';
const styles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 36,
        color: 'white',
    },
    title: {
        flexGrow: 1
    },
    hide: {
        display: 'none'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth})`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
            }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    logout: {
        color: 'white',
        fontSize: '28px',
        fontStyle: 'Arial',
    },
}));


const NavComponent = props => {
    
    const classes = styles();
    const { auth, } = props;
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const handleSidebarExpand = () => {
        setSidebarOpen(true);
    };
    const handleSidebarCollapse = () => {
        setSidebarOpen(false);
    };

    return (
        <div className={classes.toolbar}>
            <AppBar position='fixed' className={clsx(classes.appBar, {
          [classes.appBarShift]: sidebarOpen,
        })}>
                <Toolbar >
                    {
                        auth.signedIn ? <IconButton 
                        edge="start"
                        onClick={handleSidebarExpand}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: sidebarOpen,
                          })}
                        >
                            <MenuIcon />
                        </IconButton> : ''
                    }
                <Typography variant="h5" className={classes.title}>
                    Project
                </Typography>
                {
                    auth.signedIn ? <a href='/logout'><Typography className={classes.logout}>Logout</Typography></a> : ''

                }
                </Toolbar>
            </AppBar>
            {
                auth.signedIn ? 
                <SidebarComponent sidebarOpen={sidebarOpen} handleSidebarCollapse={handleSidebarCollapse}/>:
                ''
            }
        </div>
    )
};

export default NavComponent;
