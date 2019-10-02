import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { authLogin, authCheckState, AUTH_RESULT_SUCCESS, FacebookSignup, FacebookauthLogin, hide_login, show_signup, show_forget_password, sendingLog } from '../../actions';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../util_config';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    textField: {
        flexBasis: 200,
        width: 300,
        backgroundColor: '#ffffff;'
    },

    cssOutlinedInput: {
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
        },

        "&$cssFocused $notchedOutline": {
            borderColor: "blue",
        }
    },
    cssFocused: {},

    notchedOutline: {},
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

            button_disable: true,
            wrong_password_error: false,
            user_blocked: false
        };

        this.onInputChange_username = this.onInputChange_username.bind(this);
        this.onInputChange_password = this.onInputChange_password.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
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
            this.setState({ username: username, password: password, button_disable: false })
        } else {
            const remember_check = localStorage.getItem('remember_check');
            if (remember_check) {
                const username = localStorage.getItem('remember_username');
                const password = localStorage.getItem('remember_password');
                this.setState({ username: username, password: password, button_disable: false })
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
                this.setState({ username: username, password: password, button_disable: false, check: false })

                localStorage.removeItem('remember_username');
                localStorage.removeItem('remember_password');
                localStorage.removeItem('remember_check');

                alert(message_username + ":" + username + '  ' + message_password + ":" + password)
            })
    }

    onInputChange_username(event) {
        if (event.target.value && this.state.password) {
            this.setState({ button_disable: false })
        } else {
            this.setState({ button_disable: true })
        }
        this.setState({ username: event.target.value });
    }

    onInputChange_password(event) {
        if (event.target.value && this.state.username) {
            this.setState({ button_disable: false })
        } else {
            this.setState({ button_disable: true })
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
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                this.props.FacebookSignup(username, email)
                    .then(res => {
                        this.props.FacebookauthLogin(username, email)
                            .then(res => {
                                this.props.history.push('/');
                            })
                            .catch(err => {
                                sendingLog(err);
                                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                            })
                    })
                    .catch(err => {
                        sendingLog(err);
                        // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                    })
            })
    }

    onInputChange_checkbox = async (event) => {
        await this.setState({ check: !this.state.check })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.authLogin(this.state.username, this.state.password)
            .then((response) => {
                if (response.errorCode === 100) {
                    this.setState({ user_blocked: true, wrong_password_error: false });
                    // return;
                } else if (response.errorCode === 101) {
                    this.setState({ user_blocked: false, wrong_password_error: true });
                    // return;
                } else {
                    if (this.state.check) {
                        localStorage.setItem('remember_password', this.state.password);
                        localStorage.setItem('remember_check', 'checked')
    
                        axios.get(API_URL + 'users/api/user/', config)
                            .then(res => {
                                localStorage.setItem('remember_username', res.data.username);
                            })
                    } else {
                        localStorage.removeItem('remember_username');
                        localStorage.removeItem('remember_password');
                        localStorage.removeItem('remember_check');
                    }
                    this.props.hide_login()
    
                    this.setActivityReminder();
                }
            })
            .catch(err => {
                if (typeof err === "string") {
                    this.setState({ user_blocked: true, wrong_password_error: false })
                } else {
                    this.setState({ wrong_password_error: true, user_blocked: false })
                }
                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                // sendingLog(err);
            });
    }

    async setActivityReminder() {
        let currentComponent = this;

        let reminderData = {
            "userId": currentComponent.state.userId,
            "startTime": new Date(),
            "duration": 60
        }

        await this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_SUCCESS) {
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        let userId = res.data.pk;
                        reminderData.userId = userId;

                        return axios.get(API_URL + 'users/api/activity-check/?userId=' + userId, config);
                    }).then(res => {
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

                        localStorage.setItem('activityCheckReminder', JSON.stringify(reminderData));
                    }).catch(err => {
                        // console.log(err);
                        // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                        sendingLog(err);
                    })
            }
        })
    }

    render() {

        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const remember_password = formatMessage({ id: "login.remember" });

        return (
            <div style={{ backgroundColor: '#ffffff', width: 380 }}>

                <div style={{ fontSize: 32, textAlign: 'center' }}>
                    <FormattedMessage id="nav.login" defaultMessage='Login' />
                </div>

                <form onSubmit={this.onFormSubmit} >

                    <div style={{ marginTop: 37, textAlign: 'center' }}>
                        <TextField
                            className={classes.textField}
                            label="EMAIL DDRESS"
                            variant="outlined"
                            value={this.state.username}
                            onChange={this.onInputChange_username}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    <div style={{ color: '#747175', marginTop: 10, marginLeft: 40 }}>
                        <FormattedMessage id="signup.email_message1" defaultMessage='This will be used to log in.' />
                    </div>

                    <div style={{ marginTop: 15, textAlign: 'center' }}>
                        <TextField
                            className={classes.textField}
                            label="PASSWORD"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.onInputChange_password}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                },

                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    {
                        this.state.wrong_password_error &&
                        <div style={{ color: 'red', marginTop: 20, marginLeft: 40 }}>
                            <FormattedMessage id="login.fail" defaultMessage='Incorrect Username / Password' />
                        </div>
                    }

                    {
                        this.state.user_blocked &&
                        <div style={{ color: 'red', marginTop: 20, marginLeft: 40 }}>
                            <FormattedMessage id="login.block" defaultMessage='The Current User is Blocked' />
                        </div>
                    }


                    <div style={{ color: '#747175', marginTop: 20, marginLeft: 40 }}>

                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                this.props.hide_login()
                                this.props.show_forget_password();
                            }}
                        >
                            Forgot Password ?
                        </span>
                    </div>



                    <div style={{ marginTop: 20, marginLeft: 40 }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.check}
                                    onChange={this.onInputChange_checkbox}
                                    value="checkedA"
                                />
                            }
                            label={remember_password}
                        />
                    </div>

                    <button
                        disabled={this.state.button_disable}
                        style={{ backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 52, width: 272, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', marginLeft: 50 }}
                        type="submit"
                    >
                        <FormattedMessage id="login.login" defaultMessage='Login' />
                    </button>

                </form>

                <div
                    onClick={() => {
                        this.props.hide_login();
                        this.props.show_signup();
                    }}
                    style={{ marginTop: 30, cursor: 'pointer', fontSize: 14, color: '#212121', textAlign: 'center' }}
                >
                    <FormattedMessage id="login.notauser" defaultMessage='Not a member? Signup for free' />
                </div>

                <div style={{ height: 30 }}>

                </div>

            </div>
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authLogin, authCheckState, FacebookSignup, FacebookauthLogin, hide_login, show_signup, show_forget_password })(Login))));