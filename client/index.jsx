import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Root from './components/Root';

const appDiv = document.getElementById('app');

const App = () => (
    <Provider store={store}>
        <Router> 
            <Root />
        </Router>
    </Provider>
);

ReactDOM.render(<App />, appDiv);

export default App;
