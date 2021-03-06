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

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

function new_script(src) {
    return new Promise(function(resolve, reject){
      var script = document.createElement('script');
      script.async = true;
      script.src = src;
      script.addEventListener('load', function () {
        resolve();
      });
      script.addEventListener('error', function (e) {
        reject(e);
      });
      document.body.appendChild(script);
    })
}
class LetouApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'zh',
            status: 'start'
        };
    }
    
    
    
    iovationLoad(){
        var bbData = window.IGLOO.getBlackbox();
        var language = '';
        if (bbData.finished) {
            // clearTimeout(timeoutId);
            var blackBoxString = bbData.blackbox;
            axios
                .get(
                    API_URL + 'users/api/login-device-info?bb=' + blackBoxString
                )
                .then(res => {
                    try{
                        var location = res.data.details.realIp.ipLocation.countryCode
                        const ip = res.data.details.realIp.address;
                        localStorage.setItem('ip', ip);
                        localStorage.setItem('countryCode', location);
              
                        //console.log(location)
                        if (location === 'CN') {
                            language = 'zh';
                        } else if (location === 'TH') {
                            language = 'th';
                        } else if (location === 'VN') {
                            language = 'vi';
                        } else {
                            language = 'en';
                        }

                    }
                    catch{
                        language = 'en';
                    }
                    this.props.setLanguage(language);
                })
        }
    }
    loadScript(){
        new_script("../../public/iovation.js")
            .then(() => {
                this.setState({'status': 'done'});
                //console.log(script);
                this.iovationLoad(); 
                
            }).catch(function(){
                this.setState({'status': 'error'});
            })

    }
    componentDidMount() {
        //this.props.getLanguage();
        // var language = 'en';
        // axios.get('https://ipapi.co/json/')
        // .then(res => {
        //     try {
        //         var location = res.data.country;
        //         if (location === 'CN') {
        //             language = 'zh';
        //         } else if (location === 'TH') {
        //             language = 'th';
        //         } else if (location === 'VN') {
        //             language = 'vi';
        //         } else {
        //             language = 'en';
        //         }
        //     }
        //     catch{
        //         language = 'en';
        //     }
        //     this.props.setLanguage(language);
        // })

        
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
      

    }

    render() {
        const { lang } = this.props;
        var self = this;
        //self.loadScript();
        if (self.state.status === 'start') {
            setTimeout(function () {
                self.loadScript()
            }, 0);
        }
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
