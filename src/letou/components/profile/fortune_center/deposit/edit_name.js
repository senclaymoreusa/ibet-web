import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, sendingLog } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { config } from '../../../../../util_config';
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

import PasswordStrengthMeter from '../../../../../commons/PasswordStrengthMeter';

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


export class EditName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,

            firstName: '',
            lastName: '',

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',
        }

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    firstNameChanged(event) {


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
        user.firstName = this.state.firstName;
        user.lastName = this.state.lastName;

        await axios.put(API_URL + 'users/api/user/', user, config)
            .then(() => {
                this.setState({
                    snackType: 'success',
                    snackMessage: this.getLabel('name-saved-successful'),
                    showSnackbar: true
                });
            }).catch(err => {
                sendingLog(err);
                if (err.response.status === 400)
                    this.setState({ snackMessage: this.getLabel('wrong-password') });
                else
                    this.setState({ snackMessage: this.getLabel('password-update-failed') });

                this.setState({
                    snackMessage: this.getLabel('saving-name-fail'),
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
        const countryCode = localStorage.getItem('countryCode');

    }

    render() {
        const { classes } = this.props;
        const countryCode = localStorage.getItem('countryCode');

        return (
            <div className={classes.root}>
                <form onSubmit={this.onFormSubmit.bind(this)} >
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {this.getLabel('edit-name')}
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {(countryCode.toLowerCase() === 'cn')
                                            ? this.getLabel('name-label')
                                            : this.getLabel('first-name')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        value={this.state.firstName}
                                        onChange={event => {
                                            this.setState({firstName: event.target.value});
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                        }} />
                                </div>
                            </div>
                        </Grid>
                        {(countryCode.toLowerCase() != 'cn') && <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row} style={{ marginTop: 10 }}>
                                    <span className={classes.label}>
                                        {this.getLabel('last-name')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        style={{ marginTop: 10 }}
                                        value={this.state.lastName}
                                        onChange={event => {
                                            this.setState({lastName: event.target.value});
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                        }} />
                                </div>
                            </div>
                        </Grid>
                        }
                        <Grid item xs={12}>
                            <div className={classes.row} style={{ paddingTop: 20, paddingLeft: 210 }}>
                                <Button variant="contained"
                                    type="submit"
                                    disabled={ ((countryCode.toLowerCase() === 'cn') && this.state.firstName.length == 0) || 
                                    ((countryCode.toLowerCase() === 'cn') && this.state.firstName.length == 0 && this.state.lastName.length == 0)}
                                    className={classes.nextButton}>{this.getLabel('save-label')}</Button>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(EditName))));