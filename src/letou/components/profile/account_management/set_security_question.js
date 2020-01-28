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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
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
        fontSize: 12,
        whiteSpace: 'nowrap',
        width: 240,
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
    answerField: {
        width: 240,
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
    select: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 36,
        width: 240,
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

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 2px 10px 12px',
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
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export class SetSecurityQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            userId: '',
            questionList: [],
            securityQuestion: -1,
            securityAnswer: '',
            answerIsIncorrect: false,

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
            .then(async res => {
                if (res === 1) {
                    this.props.history.push('/');
                } else {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;


                    let currentComponent = this;

                    axios.get(API_URL + 'users/api/security-question/', config)
                        .then(res => {
                            this.setState({ questionList: res.data });
                        }).catch(function (err) {
                            sendingLog(err);
                        });

                    await axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            currentComponent.setState({ userId: res.data.pk });
                            currentComponent.setState({ securityQuestion: res.data.security_question });
                            axios.get(API_URL + 'users/api/user-security-question/?userId=' + res.data.pk, config)
                                .then(res => {
                                    if (res.data.errorCode !== 105)
                                        this.setState({ securityQuestion: res.data.value });
                                }).catch(function (err) {
                                    sendingLog(err);
                                });
                        }).catch(function (err) {
                            sendingLog(err);
                        });
                }
            })


    }

    setSecurityAnswer() {
        let currentComponent = this;

        axios.post(API_URL + `users/api/user-security-question/`, {
            question: currentComponent.state.securityQuestion,
            answer: currentComponent.state.securityAnswer,
            userId: currentComponent.state.userId
        })
            .then(res => {
                if (res.status === 200) {
                    if (res.data.code === 1) {
                        this.setState({ snackType: 'success' });
                        this.setState({ snackMessage: this.getLabel('security-question-set-success') });
                        this.setState({ showSnackbar: true });
                        this.setState({ activeStep: 2 });
                        currentComponent.props.authUserUpdate();
                    }
                }
            }).catch(function (err) {
                sendingLog(err);
                currentComponent.setState({ snackType: 'error' });
                currentComponent.setState({ snackMessage: currentComponent.getLabel('security-question-set-error') });
                currentComponent.setState({ showSnackbar: true });
            });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    getStepContent() {
        const { classes } = this.props;
        const { activeStep, securityAnswer, securityQuestion, questionList } = this.state;

        switch (activeStep) {
            case 1:
                return (<Grid container>
                    <Grid item xs={2} className={classes.row} style={{ verticalAlign: 'middle' }}>
                        <span className={classes.label} >
                            {this.getLabel('security-question')}
                        </span>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <Select
                            className={classes.select}
                            value={securityQuestion}
                            onChange={(event) => {
                                this.setState({ securityQuestion: event.target.value });
                            }}
                            input={<BootstrapInput name="question" id="question-select" />}>
                            <MenuItem key='none' value='-1' disabled>{this.getLabel('select-question')}</MenuItem>
                            {
                                questionList.map(item => (
                                    <MenuItem key={item.question} value={item.value} >
                                        {item.question}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={2} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('answer-label')}
                        </span>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <TextField className={classes.answerField}
                            value={securityAnswer}
                            onChange={(event) => {
                                this.setState({ securityAnswer: event.target.value });
                            }}
                            InputProps={{
                                disableUnderline: true,

                            }}></TextField>
                    </Grid>
                    <Grid item xs={2} className={classes.row}>
                    </Grid>
                    <Grid item xs={10} className={classes.row}>
                        <Button variant="contained"
                            disabled={securityAnswer.length === 0 || securityQuestion === -1}
                            onClick={this.setSecurityAnswer.bind(this)}
                            className={classes.nextButton}>{this.getLabel('next-step')}</Button>
                    </Grid>
                </Grid>);
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
        const { activeStep, securityAnswer, securityQuestion, questionList } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('set-security-question')}
                        </span>
                    </Grid>
                    <Grid item xs={12} >
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                            <Step key={this.getLabel('setting-problem')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('setting-problem')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('confirm-answer')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('confirm-answer')}</StepLabel>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, authUserUpdate })(SetSecurityQuestion))));