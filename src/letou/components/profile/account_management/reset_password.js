import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, sendingLog } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { config } from '../../../../util_config';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import zxcvbn from 'zxcvbn';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import PasswordStrengthMeter from '../../../../commons/PasswordStrengthMeter';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = () => ({
    root: {
    },
    label: {
        marginTop: 8,
        marginBottom: 12,
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap',
    },
    value: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#999'
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    titleRow: {
        paddingBottom: 12,
    },
    row: {
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nextButton: {
        textTransform: 'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap',
        width: 260,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
        "&:focus": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
    },
    textField: {
        width: 260,
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 36,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        border: 'solid 1px #7a7a7a',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    labelDiv: {
        float: 'left',
        width: 200,
        display: 'flex',
        flexDirection: 'column'
    },
    valueDiv: {
        float: 'left',
        width: 220,
        display: 'flex',
        flexDirection: 'column',
    },
    hintContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 25,
        paddingLeft: 10,
    },
    hintText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
});

const snackStyles = makeStyles(theme => ({
    success: {
        backgroundColor: '#21e496',
    },
    error: {
        backgroundColor: '#fa2054',
    },
    info: {
        backgroundColor: '#53abe0',
    },
    warning: {
        backgroundColor: '#f28f22',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function LetouSnackbarContentWrapper(props) {
    const classes = snackStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

LetouSnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};


export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,

            password: '',
            newPassword: '',
            confirmPassword: '',

            passwordInvalid: false,
            newPasswordInvalid: false,
            confirmPasswordInvalid: false,

            showPassword: false,
            showNewPassword: false,
            showConfirmPassword: false,

            passwordSame: false,
            passwordTooSimple: false,

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',
        }

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    passwordChanged(event) {
        this.setState({ newPasswordInvalid: (event.target.value.length > 0 && event.target.value === this.state.newPassword) });
        this.setState({ passwordSame: (event.target.value.length > 0 && event.target.value === this.state.newPassword) });

        this.setState({ password: event.target.value, passwordInvalid: false });
    }

    newPasswordChanged(event) {
        this.setState({ newPassword: event.target.value });
        let testedResult = zxcvbn(event.target.value);

        this.setState({
            newPasswordInvalid: !(testedResult.score === 3 || testedResult.score === 4),
            confirmPasswordInvalid: (this.state.confirmPassword !== event.target.value)
        });
    }

    confirmPasswordChanged(event) {
        this.setState({
            confirmPassword: event.target.value,
            confirmPasswordInvalid: (this.state.newPassword !== event.target.value)
        });
    }

    async onFormSubmit(event) {
        event.preventDefault();

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        const { user } = this.props;

        await axios.post(API_URL + 'users/api/validateandresetpassword/',
            {
                'username': user.username,
                'current_password': this.state.password,
                'new_password': this.state.newPassword
            }, config)
            .then(() => {
                this.setState({
                    snackType: 'success',
                    snackMessage: this.getLabel('password-reset-successful'),
                    showSnackbar: true
                });
            }).catch(err => {
                sendingLog(err);
                if (err.response.status === 400)
                    this.setState({ snackMessage: this.getLabel('wrong-password') });
                else
                    this.setState({ snackMessage: this.getLabel('password-update-failed') });

                this.setState({
                    snackType: 'error',
                    showSnackbar: true
                });
            })

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                }
            })
    }

    render() {
        const { classes } = this.props;

        let newPasswordErrorMessage = '';

        if (this.state.newPasswordInvalid) {
            newPasswordErrorMessage = this.getLabel('please-strong-password');

            if (this.state.passwordSame)
                newPasswordErrorMessage = this.getLabel('old-new-same');
        }

        return (
            <div className={classes.root}>
                <form onSubmit={this.onFormSubmit.bind(this)} >
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {this.getLabel('reset-password')}
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('current-password')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        value={this.state.password}
                                        onChange={this.passwordChanged.bind(this)}
                                        type={this.state.showPassword ? '' : 'password'}
                                        error={this.state.passwordInvalid}
                                        helperText={this.state.passwordInvalid ? this.getLabel('incorrect-password') : ''}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        size="small"
                                                        disabled={this.state.password.length === 0}
                                                        aria-label="Toggle password visibility"
                                                        onClick={() => {
                                                            this.setState(state => ({ showPassword: !state.showPassword }));
                                                        }}
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row} style={{ marginTop: 10 }}>
                                    <span className={classes.label}>
                                        {this.getLabel('new-password')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        style={{ marginTop: 10 }}
                                        value={this.state.newPassword}
                                        onChange={this.newPasswordChanged.bind(this)}
                                        type={this.state.showNewPassword ? '' : 'password'}
                                        error={this.state.newPasswordInvalid}
                                        helperText={this.state.newPasswordInvalid ? newPasswordErrorMessage : ''}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        size="small"
                                                        disabled={this.state.newPassword.length === 0}
                                                        aria-label="Toggle password visibility"
                                                        onClick={() => {
                                                            this.setState(state => ({ showNewPassword: !state.showNewPassword }));
                                                        }}
                                                    >
                                                        {this.state.showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </div>
                                {
                                    this.state.newPassword && <div className={classes.hintContainer}>
                                        <PasswordStrengthMeter password={this.state.newPassword} style={{ width: 180 }} />
                                        <span className={classes.hintText}>{this.getLabel('register-hint1')}</span>
                                        <span className={classes.hintText}>{this.getLabel('register-hint2')}</span>
                                        <span className={classes.hintText}>{this.getLabel('register-hint3')}</span>
                                        <span className={classes.hintText}>{this.getLabel('register-hint4')}</span>
                                    </div>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row} style={{ marginTop: 10 }}>
                                    <span className={classes.label}>
                                        {this.getLabel('confirm-new-password')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        style={{ marginTop: 10 }}
                                        value={this.state.confirmPassword}
                                        onChange={this.confirmPasswordChanged.bind(this)}
                                        type={this.state.showConfirmPassword ? '' : 'password'}
                                        error={this.state.confirmPasswordInvalid}
                                        helperText={this.state.confirmPasswordInvalid ? this.getLabel('password-not-match') : ''}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        size="small"
                                                        disabled={this.state.confirmPassword.length === 0}
                                                        aria-label="Toggle password visibility"
                                                        onClick={() => {
                                                            this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
                                                        }}
                                                    >
                                                        {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.row} style={{ paddingTop: 20, paddingLeft: 210 }}>
                                <Button variant="contained"
                                    type="submit"
                                    disabled={this.state.passwordInvalid
                                        || this.state.password.length === 0
                                        || this.state.newPasswordInvalid
                                        || this.state.newPassword.length === 0
                                        || this.state.confirmPasswordInvalid
                                        || this.state.confirmPassword.length === 0}
                                    className={classes.nextButton}>{this.getLabel('next-step')}</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.showSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleSnackbarClose}
                >
                    <LetouSnackbarContentWrapper
                        onClose={this.handleSnackbarClose}
                        variant={this.state.snackType}
                        message={this.state.snackMessage}
                    />
                </Snackbar>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token, user } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(ResetPassword))));