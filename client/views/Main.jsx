import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import Project from '../components/Project'
import Auth from '../components/Auth';


export default class Main extends Component {
    componentDidMount() {
        const { existingSession, getAppMode } = this.props;
        existingSession();
        getAppMode();
    };

    render() {
        const { auth } = this.props;
        
        return (
            <div display='flex'>
                <Navigation />
                <main>
                    {
                        auth.signedIn ? 
                        <Project /> : <Auth />
                    }
                </main>
            </div>
        );
    };
};
