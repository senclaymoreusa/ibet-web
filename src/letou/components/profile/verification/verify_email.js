import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { config } from '../../../../util_config';
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
import Warning from '@material-ui/icons/Warning';
import Email from '@material-ui/icons/Email';
import Error from '@material-ui/icons/ErrorOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Info from '@material-ui/icons/InfoOutlined';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';

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
    sendButton: {
        textTransform: 'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap',
        width: 140,
    },
    nextButton: {
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
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
    backButton: {
        textTransform: 'capitalize',
        fontSize: 15,
    },
    fab: {
        cursor: 'default',
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
        minWidth: 260,
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

export class VerifyEmail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,

            email: '',
            emailInvalid: true,
            emailFocused: false,

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

        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                    window.location.reload()
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;


        // let currentComponent = this;

        // axios.get(API_URL + 'users/api/security-question/', config)
        //     .then(res => {
        //         this.setState({ questionList: res.data });
        //     }).catch(function (err) {
        //         sendingLog(err);
        //     });

        // await axios.get(API_URL + 'users/api/user/', config)
        //     .then(res => {
        //         currentComponent.setState({ userId: res.data.pk });
        //         currentComponent.setState({ securityQuestion: res.data.security_question });
        //         axios.get(API_URL + 'users/api/user-security-question/?userId=' + res.data.pk, config)
        //             .then(res => {
        //                 if (res.data.errorCode !== 105)
        //                     this.setState({ securityQuestion: res.data.value });
        //             }).catch(function (err) {
        //                 sendingLog(err);
        //             });
        //     }).catch(function (err) {
        //         sendingLog(err);
        //     });
    }

    sendVerificationCodeToEmail() {
        this.setState({ activeStep: 1 });
    }

    verifyEmailWithCode() {
        this.setState({ activeStep: 2 });

        //     let currentComponent = this;

        //     axios.post(API_URL + `users/api/user-security-question/`, {
        //         question: currentComponent.state.securityQuestion,
        //         answer: currentComponent.state.securityAnswer,
        //         userId: currentComponent.state.userId
        //     })
        //         .then(res => {
        //             if (res.status === 200) {
        //                 if (res.data.code === 1) {
        //                     this.setState({ snackType: 'success' });
        //                     this.setState({ snackMessage: this.getLabel('security-question-set-success') });
        //                     this.setState({ showSnackbar: true });
        //                     this.setState({ activeStep: 2 });
        //                 }
        //             }
        //         }).catch(function (err) {
        //             sendingLog(err);
        //             currentComponent.setState({ snackType: 'error' });
        //             currentComponent.setState({ snackMessage: currentComponent.getLabel('security-question-set-error') });
        //             currentComponent.setState({ showSnackbar: true });
        //         });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    emailChanged(event) {
        this.setState({ emailFocused: true });

        this.setState({ email: event.target.value });

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)) {
            this.setState({ emailInvalid: true })
        } else {
            this.setState({ emailInvalid: false })
        }
    }

    getStepContent() {
        const { classes } = this.props;
        const { activeStep, email, emailInvalid, verificationCode } = this.state;

        switch (activeStep) {
            case 0:
                return (<Grid container style={{ maxWidth: 500, margin: '0 auto' }}>
                    <Grid item xs={2} className={classes.row} style={{ verticalAlign: 'middle' }}>
                        <span className={classes.label} >
                            {this.getLabel('email-label')}
                        </span>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <TextField className={classes.textField}
                            value={email}
                            onChange={(event) => { this.emailChanged(event) }}
                            error={this.state.emailInvalid && this.state.emailFocused}
                            helperText={(this.state.emailInvalid && this.state.emailFocused) ? this.getLabel('please-valid-email') : ' '}
                            InputProps={{
                                disableUnderline: true,
                                startAdornment: (<InputAdornment position="start">
                                    <Email />
                                </InputAdornment>)
                            }} />
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
                        <Button variant="contained"
                            disabled={emailInvalid}
                            onClick={this.sendVerificationCodeToEmail.bind(this)}
                            className={classes.nextButton}>{this.getLabel('next-step')}</Button>
                    </Grid>
                </Grid>);
            case 1:
                return (
                    <Grid container style={{ maxWidth: 500, margin: '0 auto' }}>
                        <Grid item xs={4} className={classes.row}>
                            <span className={classes.label}>
                                {this.getLabel('verification-code')}
                            </span>
                        </Grid>
                        <Grid item xs={8} className={classes.row} >
                            <TextField className={classes.textField}
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
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Email />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.getLabel('email-has-sent')} secondary="" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Error />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={this.getLabel('not-get-email')} secondary={this.getLabel('check-in-spam')} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} className={classes.row}>
                            <Button variant="contained" color="default"
                                onClick={() => { this.setState({ activeStep: 0 }) }}
                                className={classes.backButton}>{this.getLabel('back-label')}</Button>
                        </Grid>
                        <Grid item xs={6} className={classes.row}>
                            <Button variant="contained"
                                disabled={verificationCode.length === 0}
                                onClick={this.verifyEmailWithCode.bind(this)}
                                className={classes.nextButton}>{this.getLabel('next-step')}</Button>
                        </Grid>
                    </Grid>
                );
            case 2:
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
                            {this.getLabel('verify-email')}
                        </span>
                    </Grid>
                    <Grid item xs={12} >
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                            <Step key={this.getLabel('email-verification')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('email-verification')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('enter-verification-code')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('enter-verification-code')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('set-successfully')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('set-successfully')}</StepLabel>
                            </Step>
                        </Stepper>
                    </Grid>
                </Grid>
                {this.getStepContent()}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(VerifyEmail))));