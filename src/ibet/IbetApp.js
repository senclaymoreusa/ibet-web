import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './ibet_routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { getLanguage } from './actions/language';
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

class IbetApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'zh',
            showActivityCheckReminder: false
        };
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleWindowBeforeUnload);

        this.props.getLanguage();
        this.setState({ inbox: 0 });

        setInterval(() => this.checkIfReminderTime(), 1000);
    }

    componentWillUnmount() {
        window.removeEventListener(
            'beforeunload',
            this.handleWindowBeforeUnload
        );
    }

    handleWindowBeforeUnload = ev => {
        localStorage.removeItem('activityCheckReminder');

        return 'Unsaved changes. Are you sure?';
    };

    checkIfReminderTime() {
        var reminderText = localStorage.getItem('activityCheckReminder');

        if (reminderText) {
            var reminderData = JSON.parse(reminderText);

            let now = new Date();

            let milliseconds = Date.parse(reminderData.startTime);
            let threshold = new Date(milliseconds);
            let mins = threshold.getMinutes();
            threshold.setMinutes(mins + parseInt(reminderData.duration));

            if (threshold < now) {
                this.setState({ showActivityCheckReminder: true });
                reminderData.startTime = now;
                localStorage.setItem(
                    'activityCheckReminder',
                    JSON.stringify(reminderData)
                );
            }
        } else if (this.props.isAuthenticated) {
            this.setActivityReminder();
        }
    }

    setActivityReminder() {
        let currentComponent = this;

        let reminderData = {
            userId: currentComponent.state.userId,
            startTime: new Date(),
            duration: 60
        };

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        axios
            .get(API_URL + 'users/api/user/', config)
            .then(res => {
                let userId = res.data.pk;
                reminderData.userId = userId;

                return axios.get(
                    API_URL + 'users/api/activity-check/?userId=' + userId,
                    config
                );
            })
            .then(res => {
                switch (res.data) {
                    case 0:
                        reminderData.duration = 5;
                        break;
                    case 1:
                        reminderData.duration = 30;
                        break;
                    case 2:
                        reminderData.duration = 60;
                        break;
                    case 120:
                        reminderData.duration = 120;
                        break;
                    default:
                        reminderData.duration = 60;
                }

                localStorage.setItem(
                    'activityCheckReminder',
                    JSON.stringify(reminderData)
                );
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { lang } = this.props;
        const { classes } = this.props;
        const activityReminderDuration = localStorage.getItem(
            'activityReminderDuration'
        );

        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <Router>
                        <BaseRouter />
                    </Router>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        open={this.state.showActivityCheckReminder}
                        onClose={() => {
                            this.setState({ showActivityCheckReminder: false });
                        }}
                        autoHideDuration={3000}
                        TransitionComponent={Fade}
                    >
                        <SnackbarContent
                            className={classes.notification}
                            aria-describedby="client-snackbar"
                            message={
                                <div>
                                    <CheckCircleIcon
                                        className={classes.checkIcon}
                                    />
                                    <span
                                        id="client-snackbar"
                                        className={classes.message}
                                    >
                                        You have been playing for{' '}
                                        {activityReminderDuration} minutes.
                                    </span>
                                </div>
                            }
                            action={[
                                <IconButton
                                    key="close"
                                    aria-label="close"
                                    color="inherit"
                                    className={classes.close}
                                    onClick={() => {
                                        this.setState({
                                            showActivityCheckReminder: false
                                        });
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            ]}
                        />
                    </Snackbar>
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

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { getLanguage }
    )(IbetApp)
);
