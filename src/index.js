import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IbetApp from './ibet/IbetApp';
import LetouApp from './letou/LetouApp';
import * as serviceWorker from './serviceWorker';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import fr from 'react-intl/locale-data/fr';
import vi from 'react-intl/locale-data/vi';
import th from 'react-intl/locale-data/th';

import throttle from 'lodash/throttle';
import { createLogger } from 'redux-logger';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers';

import { loadState, saveState } from './localStorage';

const persistentState = loadState();
const loggerMiddleware = createLogger();

addLocaleData(en);
addLocaleData(zh);
addLocaleData(fr);
addLocaleData(vi);
addLocaleData(th);

let middleware = [];
if (process.env.REACT_APP_NODE_ENV === 'development') {
    middleware = [...middleware, thunkMiddleware, loggerMiddleware];
} else {
    middleware = [...middleware, thunkMiddleware];
}

const store = createStore(
    rootReducers,
    persistentState,
    compose(applyMiddleware(...middleware))
);

store.subscribe(
    throttle(() => {
        saveState({
            auth: store.getState().auth
        });
    }, 1000)
);

if (
    window.location
        .toString()
        .toLowerCase()
        .indexOf('asia') !== -1 ||
    window.location
        .toString()
        .toLowerCase()
        .indexOf('localhost') !== -1
) {
    ReactDOM.render(
        <Provider store={store}>
            <LetouApp />
        </Provider>,
        document.getElementById('root')
    );
} else {
    // console.log('using ibet app');
    ReactDOM.render(
        <Provider store={store}>
            <IbetApp />
        </Provider>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
