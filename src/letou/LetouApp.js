import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './letou_routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { setLanguage } from '../actions/language';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import axios from 'axios';

import './css/global.css';

// const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

class LetouApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'zh'
        };
    }

    componentDidMount() {
        //this.props.getLanguage();
        var language = 'en';
        axios.get('https://ipapi.co/json/')
        .then(res => {
            var location = res.data.country_code;
            if (location === 'CN') {
                language = 'zh';
            } else if (location === 'TH') {
                language = 'th';
            } else if (location === 'VN') {
                language = 'vi';
            } else {
                language = 'en';
            }
        })
        // const script = document.createElement("script");
        // script.type = "text/javascript";
        // script.src = "config.js"
        // document.body.appendChild(script);
        
        // const script2 = document.createElement("script");
        // script2.type = "text/javascript";
        // script2.src = "iovation.js"
        // document.body.appendChild(script2);

        // var bbData = window.IGLOO.getBlackbox();
        // var language = 'en';
        // if (bbData.finished) {
        //     // clearTimeout(timeoutId);
        //     var blackBoxString = bbData.blackbox;
        //     axios
        //         .get(
        //             API_URL + 'users/api/login-device-info?bb=' + blackBoxString
        //         )
        //         .then(res => {
        //             try{
        //                 var location = res.data.details.realIp.ipLocation.countryCode
        //                 console.log(location)
        //                 if (location === 'CN') {
        //                     language = 'zh';
        //                 } else if (location === 'TH') {
        //                     language = 'th';
        //                 } else if (location === 'VN') {
        //                     language = 'vi';
        //                 } else {
        //                     language = 'en';
        //                 }

        //             }
        //             catch{
        //                 language = 'en';
        //             }

        //         })
        // }
        this.props.setLanguage(language)

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
