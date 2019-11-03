import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { store } from './store';
import App from './components/App';
import DictionaryListView from './components/DictionaryListView/DictionaryListView';
import DictionaryDetailView from './components/.DictionaryDetailView/DictionaryDetailView';

ReactDOM.render(
    // <Provider store={store}>
    <Router>
        <Switch>
            <App>
                <Route path='/' exact component={DictionaryListView} />
                <Route path='/dict/:id' component={DictionaryDetailView} />
            </App>
        </Switch>
    </Router>,
    // </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
