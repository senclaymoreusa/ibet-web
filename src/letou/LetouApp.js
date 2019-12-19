import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './letou_routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { getLanguage } from '../actions/language';

import './css/global.css';


class LetouApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'zh',
        };
    }

    componentDidMount() {
        this.props.getLanguage();
    }

    render() {
        const { lang } = this.props;

        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <Router>
                        <BaseRouter />
                    </Router>
                </div>
            </IntlProvider>
        );
    }
}

const mapStateToProps = state => {
    const { token } = state.auth;

    return {
        isAuthenticated: token !== null && token !== undefined,
        lang: state.language.lang
    };
};

export default
    connect(
        mapStateToProps,
        { getLanguage }
    )(LetouApp)
    ;
