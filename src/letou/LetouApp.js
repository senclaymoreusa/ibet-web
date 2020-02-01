import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './letou_routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { setLanguage } from '../actions/language';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


import './css/global.css';

class LetouApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'zh'
        };
    }

    componentDidMount() {
        //this.props.getLanguage();
        this.props.setLanguage("th")

    }

    render() {
        const { lang } = this.props;

        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <ErrorBoundary>
                <div>
                    <Router>
                        <BaseRouter />
                    </Router>
                </div>
                </ErrorBoundary>
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

export default connect(mapStateToProps, { setLanguage })(LetouApp);
