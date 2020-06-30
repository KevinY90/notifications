import React, {Component} from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router';
import Dashboard from '../components/Dashboard';
import Notifications from '../components/Notification';
import Urls from '../components/SavedUrl';
import Jobs from '../components/Job';
import Builder from '../components/Builder';



export default class ProjectComponent extends Component {
    componentDidMount() {
        const { getUserData, user } = this.props;
        getUserData(user.id);
    };

    render() {
        return (
            <Box m='auto' >
                <Switch>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Route path='/create' component={Builder}></Route>
                    <Route path='/urls' component={Urls}></Route>
                    <Route path='/jobs' component={Jobs}></Route>
                    <Route path='/notifications' component={Notifications}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </Box>
        );
    };
};
