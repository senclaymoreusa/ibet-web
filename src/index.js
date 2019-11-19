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

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

addLocaleData(en);
addLocaleData(zh);
addLocaleData(fr);
addLocaleData(vi);
addLocaleData(th);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

if (
    window.location
        .toString()
        .toLowerCase()
        .indexOf('asia') != -1
) {
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
