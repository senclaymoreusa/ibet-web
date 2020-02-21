import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    authLogin, authCheckState, AUTH_RESULT_SUCCESS, hide_letou_forgot_password,
    hide_letou_login, show_signup, sendingLog
} from '../../../actions';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import PermIdentity from '@material-ui/icons/PermIdentity';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';

import Clear from '@material-ui/icons/Clear';
import clsx from 'clsx';

import { images, config } from '../../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = () => ({
    root: {
        width: 360,
        padding: 15,
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
        marginTop: 8,
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    closeCell: {
        paddingLeft: 10,
        alignItems: 'left',
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
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
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
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    retrieveOption: {
        width: '100%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#F1941A',
        color: 'white',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#f79c25',
        },
        "&:focus": {
            backgroundColor: '#f79c25',
        },
    },
    loginButton: {
        width: '100%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#F1941A',
        color: 'white',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#f79c25',
        },
        "&:focus": {
            backgroundColor: '#f79c25',
        },
    },
    showIcon: {
        height: 30,
        width: 30
    },
    loginText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    optionLabel: {
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        color: '#212121',
    },
    loginQuestionText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        color: '#212121',
    },
    orange:{
        fill: '#F1941A',
    },
    retrieveMethods: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    retrieveOption: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: 88,
        height: 88,
        marginLeft: 10,
        marginRight: 10,
        padding: 0,
        backgroundColor: '#f9f9f9',
        border: '1px solid #e7e8e7',
        borderRadius: 88,
        fontSize: 12,
        textTransform: 'capitalize',
        color: '#292929',
        "&:hover": {
            backgroundColor: '#f9f9f9',
        },
        "&:focus": {
            backgroundColor: '#f9f9f9',
        },
    }
});

export class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            username: '',

            hasQuestion: false,
            phoneVerified: false,
            emailVerified: false,

            password: '',
            hidden: true,

            name: '',
            email: '',
            button_clicked: 0,
            check: false,
            showPassword: false,

            usernameInvalid: true,

            usernameFocused: false,

            loginDisabled: true,
            wrongPasswordError: false,
            userBlocked: false
        };

        this.onInputChange_password = this.onInputChange_password.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.handle_one_click = this.handle_one_click.bind(this);
    }

    submitUsername() {
        let apiURL = `users/api/retrievepasswordmethod?username=${this.state.username}`;

        axios
            .get(API_URL + apiURL, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        hasQuestion: res.data.question,
                        phoneVerified: res.data.phone,
                        emailVerified: res.data.email,
                        activeStep: 1
                    });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    async componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_SUCCESS) {
                    this.props.history.push('/');
                }
            });

        const remember_check = localStorage.getItem('remember_check');
        if (remember_check) {
            await this.setState({ check: true })
        }

        const check = localStorage.getItem('one-click');
        if (check) {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            localStorage.removeItem('one-click');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            this.setState({ username: username, password: password, loginDisabled: false })
        } else {
            const remember_check = localStorage.getItem('remember_check');
            if (remember_check) {
                const username = localStorage.getItem('remember_username');
                const password = localStorage.getItem('remember_password');
                this.setState({ username: username, password: password, loginDisabled: false })
            }
        }
    }

    handle_one_click() {
        axios.post(API_URL + 'users/api/oneclicksignup/')
            .then(res => {
                const { formatMessage } = this.props.intl;
                const message_username = formatMessage({ id: "login.username" });

                const message_password = formatMessage({ id: "login.password" });

                var temp = res.data.split('-')
                var username = temp[0]
                var password = temp[1]
                this.setState({ username: username, password: password, loginDisabled: false, check: false })

                localStorage.removeItem('remember_username');
                localStorage.removeItem('remember_password');
                localStorage.removeItem('remember_check');

                alert(message_username + ":" + username + '  ' + message_password + ":" + password)
            })
    }

    usernameChanged(event) {
        if (event.target.value && this.state.password) {
            this.setState({ loginDisabled: false })
        } else {
            this.setState({ loginDisabled: true })
        }
        this.setState({ username: event.target.value });
    }

    onInputChange_password(event) {
        if (event.target.value && this.state.username) {
            this.setState({ loginDisabled: false })
        } else {
            this.setState({ loginDisabled: true })
        }
        this.setState({ password: event.target.value });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentClicked = () => {
        this.setState({ button_clicked: 1 })
        var username = this.state.name
        var email = this.state.email

        this.props.FacebookauthLogin(username, email)
            .then(() => {
                this.props.history.push('/');
            }).catch(() => {
                this.props.FacebookSignup(username, email)
                    .then(() => {
                        this.props.FacebookauthLogin(username, email)
                            .then(() => {
                                this.props.history.push('/');
                            })
                            .catch(err => {
                                sendingLog(err);

                                //axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });
                            })
                    })
                    .catch(err => {
                        sendingLog(err);

                        //axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });
                    })
            })
    }

    onInputChange_checkbox = async () => {
        await this.setState({ check: !this.state.check })
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.authLogin(this.state.username, this.state.password)
            .then(() => {
                this.props.hide_letou_login()

            })
            .catch(err => {
                if (typeof err === "string") {
                    this.setState({ userBlocked: true, wrongPasswordError: false })
                } else {
                    this.setState({ wrongPasswordError: true, userBlocked: false })
                }
                sendingLog(err);


                //axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });

            });
    }

    handleRetrieveMethod(step) {
        let apiURL = `users/api/confirmretrievemethod?username=${this.state.username}`;

        axios
            .get(API_URL + apiURL, config)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    this.setState({
                        hasQuestion: res.data.question,
                        phoneVerified: res.data.phone,
                        emailVerified: res.data.email,
                        activeStep: step
                    });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
        this.setState({activeStep: step});
    }

    handleRetrieveMethod(step) {
        let apiURL = `users/api/confirmretrievemethod?username=${this.state.username}`;

        axios
            .get(API_URL + apiURL, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        hasQuestion: res.data.question,
                        phoneVerified: res.data.phone,
                        emailVerified: res.data.email,
                        activeStep: step
                    });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
        this.setState({activeStep: step});
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { activeStep, username } = this.state;

        return (
            <div className={classes.root}>
                {activeStep == 0 && <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('forgot-password')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_forgot_password()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.row} >
                        <span className={classes.loginText}>
                            {this.getLabel('fill-username')}
                        </span>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
                        <TextField
                            className={classes.usernameText}
                            placeholder={this.getLabel('user-name')}
                            value={username}
                            onChange={(event) => {
                                this.setState({ username: event.target.value });
                            }}
                            InputProps={{
                                inputProps: { maxLength: 24 },
                                disableUnderline: true,
                                startAdornment: <InputAdornment position="start">
                                    <PermIdentity />
                                </InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className={classes.loginButton}
                            onClick={this.submitUsername.bind(this)}
                            disabled={username.length == 0}
                        >{this.getLabel('retrieve-password')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>
                }
                {activeStep == 1 && <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('retrieve-password')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_forgot_password()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.row} style={{ textAlign: 'center', marginBottom: 15 }}>
                        <span className={classes.loginText}>
                            {this.getLabel('select-verification-method')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.retrieveMethods}>
                        <Button className={classes.retrieveOption}
                            onClick={() => {this.handleRetrieveMethod(2)}}
                            disabled={!this.state.hasQuestion}
                        >
                            <div className={classes.column}>
                                <CheckCircle className={clsx({
                                        [classes.orange]: this.state.hasQuestion
                                    })}/>
                                {/* <img
                                    src={images.src + 'check_circle-24px.svg'}
                                    alt='letou'
                                    className={clsx({
                                        [classes.orange]: this.state.hasQuestion
                                    })}
                                /> */}
                                <span className={classes.optionLabel}> {this.getLabel('security-question')}</span>
                            </div>
                        </Button>
                        <Button className={classes.retrieveOption}
                            onClick={() => {this.handleRetrieveMethod(3)}}
                            disabled={!this.state.emailVerified}
                        >
                            <div className={classes.column}>
                                <Email className={clsx({
                                        [classes.orange]: this.state.emailVerified
                                    })}/>
                                {/* <img
                                    src={images.src + 'email-24px.svg'}
                                    alt='letou'
                                    className={clsx({
                                        [classes.orange]: this.state.emailVerified
                                    })}
                                /> */}
                                <span className={classes.optionLabel}> {this.getLabel('email-label')}</span>
                            </div>
                        </Button>
                        <Button className={classes.retrieveOption}
                            onClick={() => {this.handleRetrieveMethod(4)}}
                            disabled={!this.state.phoneVerified}
                        >
                            <div className={classes.column}>
                                <PhoneIphone className={clsx({
                                        [classes.orange]: this.state.phoneVerified
                                    })}/>
                                {/* <img
                                    src={images.src + 'phone_iphone-24px.svg'}
                                    alt='letou'
                                    className={clsx({
                                        [classes.orange]: this.state.phoneVerified
                                    })}
                                /> */}
                                <span className={classes.optionLabel}> {this.getLabel('phone-label')}</span>
                            </div>
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>}
                {activeStep == 2 && <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('security-question')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_forgot_password()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.row} >
                        <span className={classes.loginText}>
                            {this.state.hasQuestion}
                        </span>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
                        <TextField
                            className={classes.usernameText}
                            placeholder={this.getLabel('answer-label')}
                            onChange={(event) => {
                                this.setState({ username: event.target.value });
                            }}
                            InputProps={{
                                inputProps: { maxLength: 24 },
                                disableUnderline: true,
                                startAdornment: <InputAdornment position="start">
                                    <PermIdentity />
                                </InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className={classes.loginButton}
                            onClick={() => {}}
                            disabled={username.length == 0}
                        >{this.getLabel('retrieve-password')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>}
                {activeStep == 3 && <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('email-label')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_forgot_password()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.row} >
                        <span className={classes.loginText}>
                            {this.state.emailVerified}
                        </span>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
                        <TextField
                            className={classes.usernameText}
                            placeholder={this.getLabel('answer-label')}
                            onChange={(event) => {
                                this.setState({ username: event.target.value });
                            }}
                            InputProps={{
                                inputProps: { maxLength: 24 },
                                disableUnderline: true,
                                startAdornment: <InputAdornment position="start">
                                    <PermIdentity />
                                </InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className={classes.loginButton}
                            onClick={() => {}}
                            disabled={username.length == 0}
                        >{this.getLabel('retrieve-password')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>}
                {activeStep == 4 && <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('phone-number')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_forgot_password()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.row} >
                        <span className={classes.loginText}>
                            {this.state.phoneVerified}
                        </span>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
                        <TextField
                            className={classes.usernameText}
                            placeholder={this.getLabel('answer-label')}
                            onChange={(event) => {
                                this.setState({ username: event.target.value });
                            }}
                            InputProps={{
                                inputProps: { maxLength: 24 },
                                disableUnderline: true,
                                startAdornment: <InputAdornment position="start">
                                    <PermIdentity />
                                </InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className={classes.loginButton}
                            onClick={() => {}}
                            disabled={username.length == 0}
                        >{this.getLabel('retrieve-password')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>}
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        loading: state.auth.loading,
    }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authLogin, authCheckState, hide_letou_login, show_signup, hide_letou_forgot_password })(ForgotPassword))));