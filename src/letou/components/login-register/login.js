import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    authLogin, authCheckState, AUTH_RESULT_SUCCESS, show_letou_forgot_password,
    hide_letou_login, show_signup
} from '../../../actions';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import PermIdentity from '@material-ui/icons/PermIdentity';
import LockOpen from '@material-ui/icons/LockOpen';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Clear from '@material-ui/icons/Clear';

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
    loginButton: {
        width: '100%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#F1941A',
        color: 'white',
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
    loginQuestionText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        color: '#212121',
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
        "&:hover": {
            backgroundColor: '#fff',
        },
    },
});

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hidden: true,

            name: '',
            email: '',
            button_clicked: 0,
            check: false,
            showPassword: false,

            usernameInvalid: true,
            passwordInvalid: true,

            usernameFocused: false,
            passwordFocused: false,

            loginDisabled: true,
            wrongPasswordError: false,
            userBlocked: false
        };

        this.onInputChange_password = this.onInputChange_password.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.handle_one_click = this.handle_one_click.bind(this);
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

    usernameCahnged(event) {
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
                                axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });
                            })
                    })
                    .catch(err => {
                        axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });
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
                axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(() => { });

            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {

        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} >
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('title-login')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton className={classes.closeButton} onClick={() => {
                            this.props.hide_letou_login()
                        }}>
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>
                        <span className={classes.loginText}>{this.getLabel('dont-have-account')}</span>
                        <span className={classes.loginText}>{this.getLabel('register-here')}</span>
                    </Grid>
                    <form onSubmit={this.onFormSubmit.bind(this)} style={{ width: '100%' }}>
                        <Grid item xs={12} style={{ paddingBottom: 20 }}>
                            <TextField
                                className={classes.usernameText}
                                placeholder={this.getLabel('user-name')}
                                onChange={(event) => {
                                    this.setState({ username: event.target.value });
                                    this.setState({ usernameInvalid: event.target.value.length === 0 });

                                }}
                                onFocus={() => {
                                    this.setState({ usernameFocused: true });
                                }}
                                error={this.state.usernameInvalid && this.state.usernameFocused}
                                helperText={(this.state.usernameInvalid && this.state.usernameFocused) ? this.getLabel('enter-valid-username') : ' '}
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: <InputAdornment position="start">
                                        <PermIdentity />
                                    </InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingBottom: 40 }}>
                            <TextField
                                className={classes.passwordText}
                                placeholder={this.getLabel('password-text')}
                                onChange={(event) => {
                                    this.setState({ password: event.target.value });
                                    this.setState({ passwordInvalid: event.target.value.length === 0 });

                                }}
                                onFocus={() => {
                                    this.setState({ passwordFocused: true });
                                }}
                                error={this.state.passwordInvalid && this.state.passwordFocused}
                                helperText={(this.state.passwordInvalid && this.state.passwordFocused) ? this.getLabel('enter-password') : ' '}
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (<InputAdornment position="start">
                                        <LockOpen />
                                    </InputAdornment>),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                disabled={this.state.password.length === 0}
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({ showPassword: !state.showPassword }))
                                                }}
                                            >
                                                {this.state.showPassword ? <VisibilityOff className={classes.showIcon} /> : <Visibility className={classes.showIcon} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                type={this.state.showPassword ? '' : 'password'} />
                        </Grid>
                        <Grid item xs={12} >
                            <Button className={classes.loginButton}
                                onClick={this.handleClick}
                                disabled={this.state.usernameInvalid ||
                                    this.state.passwordInvalid}
                            >{this.getLabel('title-login')}</Button>
                        </Grid>
                    </form>
                    <Grid item xs={12} style={{ paddingTop: 10, textAlign: 'center' }}>
                        <Button className={classes.forgotButton}
                            onClick={() => {
                                this.props.hide_letou_login()
                                this.props.show_letou_forgot_password()
                            }}
                        >{this.getLabel('forgot-password')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                    </Grid>
                </Grid>
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authLogin, authCheckState, hide_letou_login, show_signup, show_letou_forgot_password })(Login))));