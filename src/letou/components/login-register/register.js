/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Footer from '../footer';
import TopNavbar from '../top_navbar';
import { connect } from 'react-redux';
import {
    authCheckState,
    authSignup,
    handle_referid,
    hide_landing_page,
    show_letou_login,
    sendingLog
} from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import { images } from '../../../util_config';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Button from '@material-ui/core/Button';
import LockOpen from '@material-ui/icons/LockOpen';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined';
import Phone from '@material-ui/icons/Phone';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { injectIntl } from 'react-intl';
import zxcvbn from 'zxcvbn';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Country_Info from '../../../commons/country_info';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';

import PasswordStrengthMeter from '../../../commons/PasswordStrengthMeter';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper
    },
    grow: {
        flexGrow: 1,
        backgroundImage: 'url(' + images.src + 'letou/register_bg.jpg)',
        backgroundPosition: 'top',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        paddingTop: 30,
        paddingBottom: 30
    },
    registerPaper: {
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
    registerText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121'
    },
    loginLink: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#F1941A',
        textTransform: 'lowercase',
        '&:hover': {
            backgroundColor: '#fff'
        }
    },
    policyLink: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#F1941A',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#fff'
        }
    },
    registerField: {
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
    phoneField: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        marginLeft: 10,
        width: 240,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.42)',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    registerButton: {
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
    hintContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    hintText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121'
    },
    errorText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#fe0000'
    },
    registerSuccess: {
        backgroundColor: '#41d930'
    },
    icon: {
        fontSize: 20
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(0, 0, 0, 0.42)',
        fontSize: 16,
        width: 40,
        height: 22,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}))(InputBase);

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameFocused: false,
            usernameInvalid: true,

            password: '',
            passwordFocused: false,
            showPassword: false,
            passwordInvalid: true,

            confirmPassword: '',
            confirmPasswordFocused: false,
            showConfirmPassword: false,
            confirmPasswordInvalid: true,

            phoneCode: this.props.signup_phone
                ? this.props.signup_phone.split('/')[0]
                : '',
            phone: this.props.signup_phone
                ? this.props.signup_phone.split('/')[1]
                : '',
            phoneFocused: false,
            phoneInvalid: true,

            email: '',
            emailFocused: false,
            emailInvalid: true,

            referralCode: '',

            errorMessage: '',

            allCountryName: Country_Info['Country_Info'],
            formOpen: false,

            showRegisterMessage: false
        };

        this.getLabel = this.getLabel.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.confirmPasswordChanged = this.confirmPasswordChanged.bind(this);
        this.phoneChanged = this.phoneChanged.bind(this);
    }

    componentDidMount() {
        if (!this.props.signup_phone) {
            axios.get('https://ipapi.co/json/').then(res => {
                this.setState({
                    phoneCode: res.data.country_calling_code
                });
            });
        }
    }

    usernameChanged(event) {
        this.setState({ username: event.target.value });

        if (!event.target.value.match(/^[a-zA-Z0-9]{8,16}$/)) {
            this.setState({ usernameInvalid: true });
        } else {
            this.setState({ usernameInvalid: false });
        }
    }

    passwordChanged(event) {
        let testedResult = zxcvbn(event.target.value);

        this.setState({
            password: event.target.value,
            passwordInvalid: !(
                testedResult.score == 3 || testedResult.score == 4
            ),
            confirmPasswordInvalid:
                this.state.confirmPassword !== event.target.value
        });
    }

    confirmPasswordChanged(event) {
        this.setState({
            confirmPassword: event.target.value,
            confirmPasswordInvalid: this.state.password !== event.target.value
        });
    }

    emailChanged(event) {
        this.setState({ email: event.target.value });

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)) {
            this.setState({ emailInvalid: true });
        } else {
            this.setState({ emailInvalid: false });
        }
    }

    phoneChanged(event) {
        if (event.target.value.length === 0)
            this.setState({ phone: event.target.value });

        if (event.target.value.match(/^[0-9\b]+$/)) {
            this.setState({ phone: event.target.value });
            this.setState({ phoneInvalid: false });
        } else {
            this.setState({ phoneInvalid: true });
            // this.setState({ phone: ''});
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.setState({ errorMessage: '' });

        this.props
            .authSignup(
                this.state.username,
                this.state.email.length !== 0 ? this.state.email : undefined,
                this.state.password,
                undefined,
                undefined,
                this.state.phoneCode.slice(1) + this.state.phone,
                undefined,
                undefined,
                'china',
                undefined,
                undefined,
                true,
                this.props.lang,
                this.state.referralCode.length !== 0
                    ? this.state.referralCode
                    : undefined
            )
            .then(() => {
                this.props.show_letou_login();
                this.setState({ showRegisterMessage: true });
            })
            .catch(err => {
                sendingLog(err);

                if (err.response && 'username' in err.response.data) {
                    this.setState({ usernameInvalid: true });
                    this.setState({
                        errorMessage: err.response.data.username[0]
                    });
                } else if (err.response && 'email' in err.response.data) {
                    this.setState({ emailInvalid: true });
                    this.setState({ errorMessage: err.response.data.email[0] });
                } else if (err.response && 'phone' in err.response.data) {
                    this.setState({ phoneInvalid: true });
                    this.setState({ errorMessage: err.response.data.phone[0] });
                } else if (
                    err.response &&
                    'non_field_errors' in err.response.data
                ) {
                    // this.setState({ error: err.response.data.non_field_errors.slice(0) })
                    // this.setState({ errorMessage: err.response.data.username[0] });
                } else if (err.response && 'password' in err.response.data) {
                    this.setState({ passwordInvalid: true });
                    this.setState({
                        errorMessage: err.response.data.password[0]
                    });
                }
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
                <TopNavbar />
                <div className={classes.grow}>
                    <Grid container>
                        <Grid item xs={7}></Grid>
                        <Grid item xs={5}>
                            <Paper className={classes.registerPaper}>
                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        className={classes.titleRow}
                                    >
                                        <span className={classes.title}>
                                            {this.getLabel('title-register')}
                                        </span>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            textAlign: 'center'
                                        }}
                                    >
                                        <span className={classes.registerText}>
                                            {this.getLabel(
                                                'already-have-account'
                                            )}
                                        </span>
                                        <Button
                                            className={classes.loginLink}
                                            onClick={() => {
                                                this.props.show_letou_login();
                                            }}
                                        >
                                            {this.getLabel('login-here')}
                                        </Button>
                                    </Grid>
                                    <form
                                        autoComplete="off"
                                        onSubmit={this.onFormSubmit.bind(this)}
                                        style={{ width: '100%' }}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ paddingBottom: 20 }}
                                        >
                                            <TextField
                                                value={this.state.username}
                                                className={
                                                    classes.registerField
                                                }
                                                placeholder={this.getLabel(
                                                    'user-name'
                                                )}
                                                onChange={event => {
                                                    this.usernameChanged(event);
                                                }}
                                                onFocus={() => {
                                                    this.setState({
                                                        usernameFocused: true
                                                    });
                                                }}
                                                error={
                                                    this.state
                                                        .usernameInvalid &&
                                                    this.state.usernameFocused
                                                }
                                                helperText={
                                                    this.state
                                                        .usernameInvalid &&
                                                    this.state.usernameFocused
                                                        ? this.getLabel(
                                                              'username-limit'
                                                          )
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
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ paddingBottom: 20 }}
                                        >
                                            <TextField
                                                autoComplete="new-password"
                                                value={this.state.password}
                                                className={
                                                    classes.registerField
                                                }
                                                placeholder={this.getLabel(
                                                    'password-text'
                                                )}
                                                onChange={event => {
                                                    this.passwordChanged(event);
                                                }}
                                                onFocus={() => {
                                                    this.setState({
                                                        passwordFocused: true
                                                    });
                                                }}
                                                error={
                                                    this.state
                                                        .passwordInvalid &&
                                                    this.state.passwordFocused
                                                }
                                                helperText={
                                                    this.state
                                                        .passwordInvalid &&
                                                    this.state.passwordFocused
                                                        ? this.getLabel(
                                                              'please-strong-password'
                                                          )
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
                                                                    this.state
                                                                        .password
                                                                        .length ===
                                                                    0
                                                                }
                                                                aria-label="Toggle password visibility"
                                                                onClick={() => {
                                                                    this.setState(
                                                                        state => ({
                                                                            showPassword: !state.showPassword
                                                                        })
                                                                    );
                                                                }}
                                                            >
                                                                {this.state
                                                                    .showPassword ? (
                                                                    <VisibilityOff
                                                                        className={
                                                                            classes.showIcon
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Visibility
                                                                        className={
                                                                            classes.showIcon
                                                                        }
                                                                    />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                type={
                                                    this.state.showPassword
                                                        ? ''
                                                        : 'password'
                                                }
                                            />

                                            {this.state.password && (
                                                <div
                                                    className={
                                                        classes.hintContainer
                                                    }
                                                >
                                                    <PasswordStrengthMeter
                                                        password={
                                                            this.state.password
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            classes.hintText
                                                        }
                                                    >
                                                        {this.getLabel(
                                                            'register-hint1'
                                                        )}
                                                    </span>
                                                    <span
                                                        className={
                                                            classes.hintText
                                                        }
                                                    >
                                                        {this.getLabel(
                                                            'register-hint2'
                                                        )}
                                                    </span>
                                                    <span
                                                        className={
                                                            classes.hintText
                                                        }
                                                    >
                                                        {this.getLabel(
                                                            'register-hint3'
                                                        )}
                                                    </span>
                                                    <span
                                                        className={
                                                            classes.hintText
                                                        }
                                                    >
                                                        {this.getLabel(
                                                            'register-hint4'
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ paddingBottom: 20 }}
                                        >
                                            <TextField
                                                value={
                                                    this.state.confirmPassword
                                                }
                                                className={
                                                    classes.registerField
                                                }
                                                placeholder={this.getLabel(
                                                    'password-confirm'
                                                )}
                                                onChange={event => {
                                                    this.confirmPasswordChanged(
                                                        event
                                                    );
                                                }}
                                                onPaste={event => {
                                                    event.preventDefault();
                                                    return false;
                                                }}
                                                onFocus={() => {
                                                    this.setState({
                                                        confirmPasswordFocused: true
                                                    });
                                                }}
                                                error={
                                                    this.state
                                                        .confirmPasswordInvalid &&
                                                    this.state
                                                        .confirmPasswordFocused
                                                }
                                                helperText={
                                                    this.state
                                                        .confirmPasswordInvalid &&
                                                    this.state
                                                        .confirmPasswordFocused
                                                        ? this.getLabel(
                                                              'please-confirm-password'
                                                          )
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
                                                                    this.state
                                                                        .confirmPassword
                                                                        .length ===
                                                                    0
                                                                }
                                                                aria-label="Toggle password visibility"
                                                                onClick={() => {
                                                                    this.setState(
                                                                        state => ({
                                                                            showConfirmPassword: !state.showConfirmPassword
                                                                        })
                                                                    );
                                                                }}
                                                            >
                                                                {this.state
                                                                    .showConfirmPassword ? (
                                                                    <VisibilityOff
                                                                        className={
                                                                            classes.showIcon
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Visibility
                                                                        className={
                                                                            classes.showIcon
                                                                        }
                                                                    />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                type={
                                                    this.state
                                                        .showConfirmPassword
                                                        ? ''
                                                        : 'password'
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl>
                                                <Select
                                                    onClick={() => {
                                                        this.setState({
                                                            formOpen: !this
                                                                .state.formOpen
                                                        });
                                                    }}
                                                    value={this.state.phoneCode}
                                                    onChange={event => {
                                                        this.setState({
                                                            phoneCode:
                                                                event.target
                                                                    .value
                                                        });
                                                    }}
                                                    input={
                                                        <BootstrapInput
                                                            name="country"
                                                            id="country-customized-select"
                                                        />
                                                    }
                                                >
                                                    {this.state.allCountryName.map(
                                                        item => (
                                                            <MenuItem
                                                                key={item.name}
                                                                value={
                                                                    item.code
                                                                }
                                                            >
                                                                {this.state
                                                                    .formOpen ? (
                                                                    <div>
                                                                        {' '}
                                                                        {
                                                                            item.name
                                                                        }{' '}
                                                                        {
                                                                            item.code
                                                                        }{' '}
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        {' '}
                                                                        {
                                                                            item.code
                                                                        }{' '}
                                                                    </div>
                                                                )}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>

                                            <TextField
                                                value={this.state.phone}
                                                className={classes.phoneField}
                                                placeholder={this.getLabel(
                                                    'phone-number'
                                                )}
                                                onChange={event => {
                                                    this.phoneChanged(event);
                                                }}
                                                onFocus={() => {
                                                    this.setState({
                                                        phoneFocused: true
                                                    });
                                                }}
                                                error={
                                                    this.state.phoneInvalid &&
                                                    this.state.phoneFocused
                                                }
                                                helperText={
                                                    this.state.phonenvalid &&
                                                    this.state.phoneFocused
                                                        ? this.getLabel(
                                                              'please-valid-phone'
                                                          )
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Phone />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ marginTop: 20 }}
                                        >
                                            <TextField
                                                value={this.state.email}
                                                className={
                                                    classes.registerField
                                                }
                                                placeholder={this.getLabel(
                                                    'email-label'
                                                )}
                                                onChange={event => {
                                                    this.emailChanged(event);
                                                }}
                                                onFocus={() => {
                                                    this.setState({
                                                        emailFocused: true
                                                    });
                                                }}
                                                error={
                                                    this.state.emailInvalid &&
                                                    this.state.emailFocused
                                                }
                                                helperText={
                                                    this.state.emailInvalid &&
                                                    this.state.emailFocused
                                                        ? this.getLabel(
                                                              'please-valid-email'
                                                          )
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailOutlined />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ marginTop: 20 }}
                                        >
                                            <TextField
                                                value={this.state.referrer}
                                                className={
                                                    classes.registerField
                                                }
                                                placeholder={this.getLabel(
                                                    'referral-code'
                                                )}
                                                onChange={event => {
                                                    this.setState({
                                                        referralCode:
                                                            event.target.value
                                                    });
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SupervisedUserCircleOutlined />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ marginTop: 20 }}
                                        >
                                            <Button
                                                className={
                                                    classes.registerButton
                                                }
                                                onClick={this.handleClick}
                                                disabled={
                                                    this.state
                                                        .usernameInvalid ||
                                                    this.state
                                                        .passwordInvalid ||
                                                    this.state
                                                        .confirmPasswordInvalid ||
                                                    this.state.phoneInvalid
                                                }
                                                type="submit"
                                            >
                                                {this.getLabel(
                                                    'title-register'
                                                )}
                                            </Button>
                                        </Grid>
                                    </form>
                                    {this.state.errorMessage.length > 0 && (
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ paddingTop: 10 }}
                                        >
                                            <span className={classes.errorText}>
                                                {this.state.errorMessage}
                                            </span>
                                        </Grid>
                                    )}
                                    <Grid
                                        item
                                        xs={12}
                                        style={{
                                            paddingTop: 20,
                                            textAlign: 'center'
                                        }}
                                    >
                                        <span className={classes.registerText}>
                                            {this.getLabel(
                                                'register-policy-text'
                                            )}
                                        </span>
                                        <Button
                                            className={classes.policyLink}
                                            target="_blank"
                                            href="https://help.letou.com/cn/member_maintain/seq1.html"
                                            onClick={() => {
                                                this.props.show_letou_login();
                                            }}
                                        >
                                            {this.getLabel(
                                                'rules-privacy-policy'
                                            )}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    variant="success"
                    autoHideDuration={3000}
                    open={this.state.showRegisterMessage}
                    onClose={() => {
                        this.setState({ showRegisterMessage: false });
                    }}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                >
                    <SnackbarContent
                        className={classes.registerSuccess}
                        aria-describedby="client-snackbar"
                        message={
                            <span id="message-id">
                                {this.getLabel('register-succes')}
                            </span>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                onClick={() => {
                                    this.setState({
                                        showRegisterMessage: false
                                    });
                                }}
                            >
                                <CloseIcon className={classes.icon} />
                            </IconButton>
                        ]}
                    />
                </Snackbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(mapStateToProps, {
            authCheckState,
            authSignup,
            handle_referid,
            hide_landing_page,
            show_letou_login
        })(Register)
    )
);
