import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, sendingLog, authUserUpdate } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { config } from '../../../../util_config';
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import StepConnector from '@material-ui/core/StepConnector';
import { images } from '../../../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
    },
    label: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap'
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
        padding: 20,
    },
    sendButton: {
        textTransform: 'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap',
        minWidth: 140,
    },
    button: {
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
        minWidth: 140,
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
        width: 140,
        marginRight: 20,
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
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    resultRow: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    successLabel: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap'
    }
});

const ColorlibConnector = withStyles({
    alternativeLabel: {

    },
    active: {
        '& $line': {
            backgroundColor: '#4DA9DF',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#4DA9DF',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#ccc',
        borderRadius: 1,
    },
})(StepConnector);

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


const customStepStyles = makeStyles({
    root: {
        zIndex: 1,
        color: '#fff',
        width: 26,
        height: 26,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    active: {
        backgroundColor: '#4DA9DF',
    },
    completed: {
        backgroundColor: '#4DA9DF',
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
    }
}));

function customStepIcon(props) {
    const classes = customStepStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {props.icon}
        </div>
    );
}

customStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
};

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

export class EditPhone extends Component {
    timeIntervalID = null;

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            username: '',
            phone: '',
            newPhone: '',
            verificationCode: '',
            verificationCodeSent: true,

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',

            remainingTime: 0,
        }

        this.sendVerificationCode = this.sendVerificationCode.bind(this);
        this.verifyVerificationCode = this.verifyVerificationCode.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getStepContent() {
        const { classes } = this.props;
        const { activeStep, phone, newPhone, remainingTime, verificationCode } = this.state;

        switch (activeStep) {
            case 0:
                return (<Grid container>
                    <Grid item xs={2} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('phone-number')}
                        </span>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <span className={classes.value}>
                            {phone}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('verification-code')}
                        </span>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <TextField className={classes.textField}
                            value={verificationCode}
                            onChange={(event) => {
                                this.setState({ verificationCode: event.target.value });
                            }}
                            InputProps={{
                                disableUnderline: true,

                            }}></TextField>
                        <Button variant="contained"
                            color="default"
                            onClick={this.sendVerificationCode}
                            className={classes.sendButton}>{
                                ((this.timeIntervalID != 0 && this.state.remainingTime) > 0 ?
                                    this.getLabel('enter-code') + ' ' + this.state.remainingTime :
                                    this.getLabel('send-code'))
                            }</Button>
                    </Grid>
                    <Grid item xs={2} className={classes.row}>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        {this.getLabel('only-three-code')}
                    </Grid>
                    <Grid item xs={2} className={classes.row}>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <Button variant="contained"
                            disabled={verificationCode.length === 0 || remainingTime === 0}
                            onClick={this.verifyVerificationCode}
                            className={classes.button}>{this.getLabel('next-step')}</Button>
                    </Grid>
                </Grid>);
            case 1:
                return (
                    <Grid container>
                        <Grid item xs={2} className={classes.row}>
                            <span className={classes.label}>
                                {this.getLabel('new-phone-number')}
                            </span>
                        </Grid>
                        <Grid item xs={10} className={classes.row}>
                            <TextField className={classes.textField}
                                value={newPhone}
                                onChange={(event) => {
                                    const re = /^[0-9\b]+$/;
                                    if (event.target.value === '' || re.test(event.target.value))
                                        this.setState({ newPhone: event.target.value });
                                }}
                                InputProps={{
                                    disableUnderline: true,

                                }}></TextField>
                        </Grid>
                        <Grid item xs={2} className={classes.row}>
                        </Grid>
                        <Grid item xs={10} className={classes.row}>
                            <Button variant="contained"
                                disabled={newPhone.length === 0}
                                onClick={this.setNewPhoneNumber.bind(this)}
                                className={classes.button}>{this.getLabel('set-new-phone')}</Button>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (<Grid container>
                    <Grid item xs={12} className={classes.resultRow}>
                        <img src={images.src + 'letou/complete-icon.svg'} alt="" />
                        <span className={classes.successLabel} style={{ marginTop: 30 }}>
                            {this.getLabel('good-job')}
                        </span>
                        <Button variant="contained" style={{ marginTop: 30 }}
                            onClick={() => {
                                this.props.callbackFromParent(
                                    'account-info'
                                );
                            }}
                            className={classes.button}>{this.getLabel('back-acccount-settings')}</Button>
                    </Grid>
                </Grid>);
            default:
                return <div>
                    <Button variant="contained" style={{ marginTop: 30 }}
                        onClick={() => {
                            this.props.callbackFromParent(
                                'account-info'
                            );
                        }}
                        className={classes.button}>{this.getLabel('back-acccount-settings')}</Button>
                </div>;
        }
    }

    componentDidMount() {

        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                } else {
                    
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            this.setState({ phone: res.data.phone });
                            this.setState({ username: res.data.username });
                        }).catch(function (err) {
                            sendingLog(err);
                        });
                }
            })

        
    }

    setNewPhoneNumber() {
        this.setState({ activeStep: 2 });
        this.setState({ snackType: 'success' });
        this.setState({ snackMessage: this.getLabel('phone-change-success') });
        this.setState({ showSnackbar: true });
    }

    sendVerificationCode() {
        axios.post(API_URL + `users/api/generateactivationcode/`, {
            type: 'change_member_phone_num',
            username: this.state.username,
        })
            .then(res => {
                if (res.status === 201) {
                    this.setState({ snackType: 'success' });
                    this.setState({ snackMessage: this.getLabel('verification-code-sent') });
                    this.setState({ showSnackbar: true });
                  
                    this.setState({ remainingTime: 180 });

                    this.timeIntervalID = setInterval(() => {
                        if (this.state.remainingTime > 0) {
                            this.setState({ remainingTime: this.state.remainingTime - 1 });
                        } else {
                            clearInterval(this.timeIntervalID);
                            this.timeIntervalID = null;
                        }
                    }, 1000);

                } if (res.data === 104) {
                    this.setState({ snackType: 'warning' });
                    this.setState({ snackMessage: this.getLabel('reached-verification-limit') });
                    this.setState({ showSnackbar: true });
                }
            }).catch(function (err) {
                sendingLog(err);
            });
    }

    verifyVerificationCode() {
        let currentComponent = this;

        axios.post(API_URL + `users/api/verifyactivationcode/`, {
            code: this.state.verificationCode,
            username: this.state.username,
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({ snackType: 'success' });
                    this.setState({ snackMessage: this.getLabel('verification-code-sent') });
                    this.setState({ showSnackbar: true });
                    this.setState({ activeStep: 1 });
                    currentComponent.props.authUserUpdate();    
                                        
                }
            }).catch(function (err) {
                sendingLog(err);
                currentComponent.setState({ snackType: 'error' });
                currentComponent.setState({ snackMessage: currentComponent.getLabel('verification-code-error') });
                currentComponent.setState({ showSnackbar: true });
            });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('modify-phone')}
                        </span>
                    </Grid>
                    <Grid item xs={12} >
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                            <Step key={this.getLabel('phone-verification')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('phone-verification')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('phone-settings')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('phone-settings')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('set-successfully')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('set-successfully')}</StepLabel>
                            </Step>
                        </Stepper>
                    </Grid>
                    <Grid item xs={12}>
                    {this.getStepContent()}
                    </Grid>
                </Grid>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, authUserUpdate })(EditPhone))));