import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './letou_routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
<<<<<<< HEAD
import { getLanguage } from './actions/language';
=======
import { getLanguage } from '../actions/language';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { config } from '../util_config';
import axios from 'axios';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;
const styles = theme => ({
    notification: {
        backgroundColor: '#0095ff'
    },
    checkIcon: {
        float: 'left'
    },
    message: {
        marginLeft: 10,
        float: 'left',
        lineHeight: 1.9
    }
});
>>>>>>> cd2b0197709969b4ff17f151dd3be07bbfa86046

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
