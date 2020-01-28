import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState,
    sendingLog,
    authUserUpdate
} from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { config } from '../../../../util_config';
import axios from 'axios'
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
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Info from '@material-ui/icons/InfoOutlined';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    titleRow: {
        paddingBottom: 12,
        textAlign: 'center',

    },
    row: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    codeRow: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    sendButton: {
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
        width: 140,
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
        fontSize: 12,
        width: '100%',
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
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    select: {
        fontSize: 14,
        paddingLeft: 5,
        height: 44,
        width: 70,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
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
    },
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


export class VerifyPhone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            username: '',

            phone: '',
            verificationCode: '',

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',
        }

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    async componentDidMount() {

        axios.get('https://ipapi.co/json/')
            .then(res => {
                this.setState({ phoneCode: res.data.country_calling_code })
            })

        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                } else {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            this.setState({ username: res.data.username });
                            this.setState({ fetchedPhone: res.data.phone });
                            this.setState({ phone: res.data.phone });
                        }).catch(function (err) {
                            sendingLog(err);
                        });
                }
            })
    }

    phoneChanged(event) {
        if (event.target.value.length === 0)
            this.setState({ phone: '' });

        if (event.target.value.match(/^[0-9\b]+$/)) {
            this.setState({ phone: event.target.value });
            this.setState({ phoneInvalid: false });
        } else {
            this.setState({ phoneInvalid: true });
        }
    }

    verifyPhone() {
        let currentComponent = this;

        axios.post(API_URL + `users/api/verifyactivationcode/`, {
            code: this.state.verificationCode,
            username: this.state.username,
            type: 'change_member_phone_num',
            phone: this.state.phone
        })
            .then(res => {
                if (res.status === 200) {
                    currentComponent.setState({ snackType: 'success' });
                    currentComponent.setState({ snackMessage: this.getLabel('phone-verification-success-message') });
                    currentComponent.setState({ showSnackbar: true });
                    currentComponent.setState({ activeStep: 1 });
                    currentComponent.props.authUserUpdate();
                }
            }).catch(function (err) {
                sendingLog(err);
                currentComponent.setState({ snackType: 'error' });
                currentComponent.setState({ snackMessage: currentComponent.getLabel('phone-verification-error-message') });
                currentComponent.setState({ showSnackbar: true });
            });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    sendVerificationCode() {
        let currentComponent = this;

        axios.post(API_URL + `users/api/generateactivationcode/`, {
            type: 'change_member_phone_num',
            username: this.state.username,
            phone: this.state.phone
        })
            .then(res => {
                if (res.status === 201) {
                    this.setState({ snackType: 'success' });
                    this.setState({ snackMessage: this.getLabel('verification-code-sent') });
                    this.setState({ showSnackbar: true });
                    currentComponent.props.authUserUpdate();
                } if (res.data === 104) {
                    this.setState({ snackType: 'warning' });
                    this.setState({ snackMessage: this.getLabel('reached-verification-limit') });
                    this.setState({ showSnackbar: true });
                }
            }).catch(function (err) {
                sendingLog(err);
            });
    }

    getStepContent() {
        const { classes } = this.props;
        const { activeStep, verificationCode } = this.state;

        switch (activeStep) {
            case 0:
                return (
                    <Grid container style={{ maxWidth: 500, margin: '0 auto' }}>
                        <Grid item xs={12} className={classes.codeRow}>
                            <PhoneInput
                                style={{ width: '100%' }}
                                value={this.state.phone}
                                onChange={(event) => {
                                    this.setState({ phone: event });
                                }}
                            />
                            <Button
                                style={{ marginLeft: 20 }}
                                variant="contained"
                                color="default"
                                onClick={this.sendVerificationCode.bind(this)}
                                className={classes.sendButton}>{this.getLabel('send-code')}</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.codeRow} >
                            <TextField className={classes.textField}
                                placeholder={this.getLabel('verification-code')}
                                value={verificationCode}
                                onChange={(event) => {
                                    this.setState({ verificationCode: event.target.value });
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (<InputAdornment position="start">
                                        <PlaylistAddCheck />
                                    </InputAdornment>)
                                }}></TextField>

                            <Button style={{ marginLeft: 20 }}
                                variant="contained"
                                disabled={verificationCode.length === 0}
                                onClick={this.verifyPhone.bind(this)}
                                className={classes.button}>{this.getLabel('next-step')}</Button>

                        </Grid>
                        <Grid item xs={12} className={classes.row} >
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Info />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.getLabel('only-three-code')} secondary="" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>

                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container>
                        <Grid item xs={12} className={classes.resultRow}>
                            <img src={images.src + 'letou/complete-icon.svg'} alt="" />
                            <span className={classes.successLabel} style={{ marginTop: 30 }}>
                                {this.getLabel('good-job')}
                            </span>
                            <span className={classes.title} style={{ marginTop: 50 }}>
                                {this.getLabel('intimate-reminder')}
                            </span>
                            <span className={classes.label} style={{ marginTop: 30 }}>
                                {this.getLabel('intimate-reminder-text')}
                            </span>
                        </Grid>
                    </Grid>
                );
            default:
                return <div></div>;
        }
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('verify-phone')}
                        </span>
                    </Grid>
                    <Grid item xs={12} >
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                            <Step key={this.getLabel('phone-verification')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('phone-verification')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('set-successfully')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('set-successfully')}</StepLabel>
                            </Step>
                        </Stepper>
                    </Grid>
                    <Grid item xs={12} >
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
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, authUserUpdate })(VerifyPhone))));