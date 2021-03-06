/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    authLogin,
    authCheckState,
    show_letou_forgot_password,
    hide_letou_login,
    show_signup,
    sendingLog
} from '../../../actions';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { config } from '../../../util_config';

import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import PermIdentity from '@material-ui/icons/PermIdentity';
import LockOpen from '@material-ui/icons/LockOpen';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Clear from '@material-ui/icons/Clear';
import CircularProgress from '@material-ui/core/CircularProgress';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = () => ({
    root: {
        width: 360,
        padding: 15
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 8
    },
    closeCell: {
        paddingLeft: 10,
        alignItems: 'left'
    },
    closeButton: {
        height: 48,
        width: 48
    },
    usernameText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.42)',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    passwordText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.42)',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    loginButton: {
        width: '100%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#F1941A',
        color: 'white',
        '&:hover': {
            backgroundColor: '#f79c25'
        },
        '&:focus': {
            backgroundColor: '#f79c25'
        }
    },
    loginText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121'
    },
    loginQuestionText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        color: '#212121'
    },
    forgotButton: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#fff'
        }
    },
    errorText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#fe0000'
    },
    progress: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: 20,
        marginLeft: -20,
        zIndex: 2
    }
});

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            // iovationData: '',

            name: '',
            email: '',
            showPassword: false,

            usernameInvalid: true,
            passwordInvalid: true,

            usernameFocused: false,
            passwordFocused: false,

            wrongPasswordError: false,
            userBlocked: false,

            errorMessage: ''
        };

        this.getLabel = this.getLabel.bind(this);
    }

    async componentDidMount() {
        // this.props.authCheckState()
        //     .then(res => {
        //         if (res === AUTH_RESULT_SUCCESS) {
        //             this.props.history.push('/');
        //         }
        //     });

        // const remember_check = localStorage.getItem('remember_check');
        // if (remember_check) {
        //     await this.setState({ check: true })
        // }

        const check = localStorage.getItem('one-click');
        if (check) {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            localStorage.removeItem('one-click');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            this.setState({
                username: username,
                password: password,
                loginDisabled: false
            });
        } else {
            const remember_check = localStorage.getItem('remember_check');
            if (remember_check) {
                const username = localStorage.getItem('remember_username');
                const password = localStorage.getItem('remember_password');
                this.setState({
                    username: username,
                    password: password,
                    loginDisabled: false
                });
            }
        }
    }

    onFormSubmit(event) {
        event.preventDefault();
        //this.getBlackbox();
        // console.log(this.state.password)
        // console.log(this.state.iovationData);
        var bbData = window.IGLOO.getBlackbox();
        if (bbData.finished) {
            // clearTimeout(timeoutId);
            var blackBoxString = bbData.blackbox;
            axios
                .get(
                    API_URL + 'users/api/login-device-info?bb=' + blackBoxString
                )
                .then(res => {
                    //console.log(res.data)
                    this.props
                        .authLogin(
                            this.state.username,
                            this.state.password,
                            res.data
                        )
                        .then(response => {
                            if (response.errorCode) {
                                this.setState({
                                    errorMessage: response.errorMsg.detail[0]
                                });
                            } else {
                                this.props.hide_letou_login();
                                this.props.history.push('/');
                            }
                        })
                        .catch(err => {
                            this.setState({ errorMessage: err });

                            sendingLog(err);
                        });
                });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { loading } = this.props;

        return (
            <div className={classes.root}>
                {loading && <CircularProgress className={classes.progress} />}
                <Grid
                    container
                    style={
                        loading === true
                            ? { pointerEvents: 'none' }
                            : { pointerEvents: 'all' }
                    }
                >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('title-login')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton
                            className={classes.closeButton}
                            onClick={() => {
                                this.props.hide_letou_login();
                            }}
                        >
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            paddingTop: 20,
                            paddingBottom: 20,
                            textAlign: 'center'
                        }}
                    >
                        <span className={classes.loginText}>
                            {this.getLabel('dont-have-account')}
                        </span>
                        <span className={classes.loginText}>
                            {this.getLabel('register-here')}
                        </span>
                    </Grid>
                    <form
                        onSubmit={this.onFormSubmit.bind(this)}
                        style={{ width: '100%' }}
                    >
                        <Grid item xs={12} style={{ paddingBottom: 20 }}>
                            <TextField
                                className={classes.usernameText}
                                placeholder={this.getLabel('user-name')}
                                onChange={event => {
                                    this.setState({ usernameFocused: true });

                                    this.setState({
                                        username: event.target.value
                                    });
                                    this.setState({
                                        usernameInvalid:
                                            event.target.value.length === 0
                                    });
                                }}
                                error={
                                    this.state.usernameInvalid &&
                                    this.state.usernameFocused
                                }
                                helperText={
                                    this.state.usernameInvalid &&
                                    this.state.usernameFocused
                                        ? this.getLabel('enter-valid-username')
                                        : ' '
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PermIdentity />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingBottom: 40 }}>
                            <TextField
                                className={classes.passwordText}
                                placeholder={this.getLabel('password-text')}
                                onChange={event => {
                                    this.setState({ passwordFocused: true });

                                    this.setState({
                                        password: event.target.value
                                    });
                                    this.setState({
                                        passwordInvalid:
                                            event.target.value.length === 0
                                    });
                                }}
                                error={
                                    this.state.passwordInvalid &&
                                    this.state.passwordFocused
                                }
                                helperText={
                                    this.state.passwordInvalid &&
                                    this.state.passwordFocused
                                        ? this.getLabel('enter-password')
                                        : ' '
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpen />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={
                                                    this.state.password
                                                        .length === 0
                                                }
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showPassword: !state.showPassword
                                                    }));
                                                }}
                                            >
                                                {this.state.showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                type={this.state.showPassword ? '' : 'password'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={classes.loginButton}
                                disabled={
                                    this.state.usernameInvalid ||
                                    this.state.passwordInvalid
                                }
                                type="submit"
                            >
                                {this.getLabel('title-login')}
                            </Button>
                        </Grid>
                    </form>
                    {this.state.errorMessage.length > 0 && (
                        <Grid item xs={12} style={{ paddingTop: 10 }}>
                            <span className={classes.errorText}>
                                {this.state.errorMessage}
                            </span>
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: 10, textAlign: 'center' }}
                    >
                        <Button
                            className={classes.forgotButton}
                            onClick={() => {
                                this.props.hide_letou_login();
                                this.props.show_letou_forgot_password();
                            }}
                        >
                            {this.getLabel('forgot-password')}
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>
                            {this.getLabel('login-question-text')}
                        </span>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { loading } = state.auth;
    return {
        loading: loading
    };
};

export default withStyles(styles)(
    injectIntl(
        withRouter(
            connect(mapStateToProps, {
                authLogin,
                authCheckState,
                hide_letou_login,
                show_signup,
                show_letou_forgot_password
            })(Login)
        )
    )
);
