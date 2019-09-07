import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { config, images } from '../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        color: theme.palette.text.secondary,
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.2)',
        minHeight: 415
    },
    container: {
        maxWidth: 1444,
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 48,
        paddingTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: '#000'
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    button: {
        height: 40,
        minWidth: 300,
        borderRadius: 20,
        backgroundColor: '#d8d8d8',
        paddingLeft: 20,
        paddingRight: 20
    },
    limitButton: {
        width: '33%',
        height: 36,
        borderRadius: 0,
        textTransform: 'capitalize',
        backgroundColor: '#d8d8d8',
        "&:hover": {
            backgroundColor: '#d8d8d8',
        },
    },
    activeLimitButton: {
        width: '33%',
        height: 36,
        borderRadius: 0,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },
    timeCell: {
        paddingLeft: 72,
        paddingRight: 72,
        paddingTop: 5,
    },
    decrementButton: {
        height: 44,
        width: 44,
        minWidth: 44,
        maxWidth: 44,
        padding: 0,
    },
    incrementButton: {
        height: 44,
        width: 44,
        minWidth: 44,
        maxWidth: 44,
        padding: 0,
    },
    inputRow: {
        paddingLeft: 72,
        paddingRight: 72,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    labelRow: {
        paddingLeft: 132,
        paddingRight: 132,
        paddingTop: 10,
    },
    limitLabel: {
        fontSize: 12,
        fontWeight: 500,
        float: 'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#2e2f2e',
    },
    limitValueLabel: {
        fontSize: 12,
        fontWeight: 500,
        float: 'right',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#2e2f2e',
    },
    textField: {
        height: 44,
        marginLeft: 17,
        marginRight: 17,
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    activityTitleRow: {
        paddingTop: 20,
        paddingLeft: 72,
        paddingRight: 72,
        display: 'flex',
        flexDirection: 'column',
    },
    activityRow: {
        paddingTop: 20,
        paddingLeft: 72,
        paddingRight: 72
    },
    activitySubTitle: {
        fontSize: 14,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    activityText: {
        display: 'block',
        fontSize: 12,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#212121',
        opacity: 0.5
    },
    activityRemindText: {
        fontSize: 12,
        float: 'left',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    activityButtonRow: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
    },
    timeButton: {
        height: 44,
        width: 72,
        padding: 0,
        textTransform: 'capitalize',

    },
    selectedTimeButton: {
        height: 44,
        width: 72,
        padding: 0,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },
    lockRow: {
        paddingLeft: 150,
        paddingRight: 150
    },
    lockDescText: {
        marginTop: 40,
        display: 'block',
        fontSize: 12,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#212121',
        opacity: 0.5
    },
    lockSubTitle: {
        fontSize: 14,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    leftLock: {
        paddingLeft: 150,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
    },
    rightLock: {
        paddingRight: 150,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
    },
    lockButtonContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "left",
    },
    lockButton: {
        height: 44,
        textTransform: 'capitalize',
        backgroundColor: '#d8d8d8',
        "&:hover": {
            backgroundColor: '#d8d8d8',
        },
    },
    selectedLockButton: {
        height: 44,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },
    understandText: {
        fontSize: 16,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#212121',
    },
    notification: {
        backgroundColor: '#3ce86a',
    },
    message: {
        marginLeft: 10,
        float: 'left',
        lineHeight: 1.9
    },
    checkIcon: {
        float: 'left',
    },
    iconRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    lockTextRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 170,
    },
    lockText: {
        fontSize: 24,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
    },
    lockDesc: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#212121',
        display: 'inline-block',
        marginTop: 19
    },
    lockButtonRow: {
        textAlign: 'right',
        paddingRight: 72,
        height: 60,
    },
    removeLimitButton: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#ff0000',
        marginTop: 36
    }
});

export class ResponsibleGaming extends Component {

    constructor(props) {
        super(props);

        this.state = {
            depositLimitDuration: 0,
            currentDepositLimit: 0,
            depositLimit: [0, 0, 0],

            lossLimitDuration: 0,
            currentLossLimit: 0,
            lossLimit: [0, 0, 0],

            activityReminderDuration: null,

            lockDuration: null,
            agree: false,

            balanceCurrency: "USD",

            messageText: '',
            showMessage: false,

            isLocked: false,
        }

        this.depositLimitChanged = this.depositLimitChanged.bind(this);
        this.lossLimitChanged = this.lossLimitChanged.bind(this);
        this.increaseDepositLimitClicked = this.increaseDepositLimitClicked.bind(this);
        this.decreaseDepositLimitClicked = this.decreaseDepositLimitClicked.bind(this);
        this.increaseLossLimitClicked = this.increaseLossLimitClicked.bind(this);
        this.decreaseLossLimitClicked = this.decreaseLossLimitClicked.bind(this);
        this.depositLimitDurationClicked = this.depositLimitDurationClicked.bind(this);
        this.lossLimitDurationClicked = this.lossLimitDurationClicked.bind(this);
        this.getValues = this.getValues.bind(this);
        this.saveDepositLimits = this.saveDepositLimits.bind(this);
        this.saveLossLimits = this.saveLossLimits.bind(this);
        this.closeNotificationClicked = this.closeNotificationClicked.bind(this);
        this.lockClicked = this.lockClicked.bind(this);
        this.lockDurationClicked = this.lockDurationClicked.bind(this);
        this.agreeClicked = this.agreeClicked.bind(this);
        this.revertClicked = this.revertClicked.bind(this);
        this.doneClicked = this.doneClicked.bind(this);
        this.removeDepositLimitClicked = this.removeDepositLimitClicked.bind(this);
        this.removeLossLimitClicked = this.removeLossLimitClicked.bind(this);
        this.saveActivityReminderClicked = this.saveActivityReminderClicked.bind(this);
        this.reminderDurationClicked = this.reminderDurationClicked.bind(this);

    }

    componentWillReceiveProps(props) {
        this.getValues();
    }

    componentDidMount() {
        this.getValues();
    }

    getValues() {
        let currentComponent = this;
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        currentComponent.setState({ userId: res.data.pk });
                        currentComponent.setState({ balanceCurrency: getSymbolFromCurrency(res.data.currency) });

                        axios.get(API_URL + 'users/api/get-limitations/?id=' + currentComponent.state.userId, config)
                            .then(res => {
                                currentComponent.setState({ limits: res.data });

                                res.data.deposit.forEach(item => {
                                    let clone = this.state.depositLimit.slice();
                                    clone[item.intervalValue] = (Number(item.amount)).toFixed(0);

                                    this.setState({ depositLimit: clone });

                                    if (item.intervalValue === 0)
                                        this.setState({ currentDepositLimit: (Number(item.amount)).toFixed(0) })
                                });


                                res.data.loss.forEach(item => {
                                    let clone = this.state.lossLimit.slice();
                                    clone[item.intervalValue] = (Number(item.amount)).toFixed(0);

                                    this.setState({ lossLimit: clone });

                                    if (item.intervalValue === 0)
                                        this.setState({ currentLossLimit: (Number(item.amount)).toFixed(0) })
                                });
                            }).catch(err => {
                                console.log(err);
                            })
                    })
            }
        })
    }

    depositLimitChanged(ev) {
        this.setState({ currentDepositLimit: ev.target.value });

        let clone = this.state.depositLimit.slice();
        clone[this.depositLimitDuration] = ev.target.value;

        this.setState({ depositLimit: clone });
    }

    lossLimitChanged(ev) {
        this.setState({ currentLossLimit: ev.target.value });

        let clone = this.state.lossLimit.slice();
        clone[this.lossLimitDuration] = ev.target.value;

        this.setState({ lossLimit: clone });
    }

    depositLimitDurationClicked(val) {
        this.setState({ depositLimitDuration: val });
        this.setState({ currentDepositLimit: this.state.depositLimit[val] });

        // limits.deposit.forEach(item => {
        //     let clone = this.state.depositLimit.slice();
        //     clone[item.intervalValue] = (Number(item.amount)).toFixed(0);

        //     this.setState({ depositLimit: clone });
        // });
    }

    lossLimitDurationClicked(val) {
        this.setState({ lossLimitDuration: val });

        this.setState({ currentLossLimit: this.state.lossLimit[val] });

    }

    decreaseDepositLimitClicked() {
        if (parseInt(this.state.currentDepositLimit) > 0) {
            this.setState({ currentDepositLimit: parseInt(this.state.currentDepositLimit) - 1 });

            let clone = this.state.depositLimit.slice();
            clone[this.state.depositLimitDuration] = parseInt(this.state.currentDepositLimit) - 1;

            this.setState({ depositLimit: clone });
        }
    }

    increaseDepositLimitClicked() {
        this.setState({ currentDepositLimit: parseInt(this.state.currentDepositLimit) + 1 });

        let clone = this.state.depositLimit.slice();
        clone[this.state.depositLimitDuration] = parseInt(this.state.currentDepositLimit) + 1;

        this.setState({ depositLimit: clone });
    }

    decreaseLossLimitClicked() {
        if (parseInt(this.state.currentLossLimit) > 0) {
            this.setState({ currentLossLimit: parseInt(this.state.currentLossLimit) - 1 });

            let clone = this.state.lossLimit.slice();
            clone[this.state.lossLimitDuration] = parseInt(this.state.currentLossLimit) - 1;

            this.setState({ lossLimit: clone });
        }
    }

    increaseLossLimitClicked() {
        this.setState({ currentLossLimit: parseInt(this.state.currentLossLimit) + 1 });

        let clone = this.state.lossLimit.slice();
        clone[this.state.lossLimitDuration] = parseInt(this.state.currentLossLimit) + 1;

        this.setState({ lossLimit: clone });
    }

    saveDepositLimits() {
        let limitArr = [];
        let intervalArr = [];

        for (const [index, value] of this.state.depositLimit.entries()) {
            if (value !== 0) {
                limitArr.push(value)
                intervalArr.push(index)
            }
        }

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/set-limitations/', {
            "limit": limitArr,
            "interval": intervalArr,
            "user_id": this.state.userId,
            "type": "deposit",
        }, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ messageText: res.data });
                    this.setState({ showMessage: true });
                }
            })
    }

    saveLossLimits() {
        let limitArr = [];
        let intervalArr = [];

        for (const [index, value] of this.state.lossLimit.entries()) {
            if (value !== 0) {
                limitArr.push(value)
                intervalArr.push(index)
            }
        }

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/set-limitations/', {
            "limit": limitArr,
            "interval": intervalArr,
            "user_id": this.state.userId,
            "type": "loss",
        }, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ messageText: res.data });
                    this.setState({ showMessage: true });
                }
            })
    }

    closeNotificationClicked() {
        this.setState({ showMessage: false });
    }

    lockDurationClicked(val) {
        this.setState({ lockDuration: val });
    }

    agreeClicked(evt) {
        this.setState({ agree: evt.target.checked });
    }

    lockClicked() {
        // const token = localStorage.getItem('token');
        // config.headers["Authorization"] = `Token ${token}`;

        // axios.post(API_URL + 'users/api/set-block-time/', {
        //     "timespan": this.state.lockDuration,
        //     "userId": this.state.userId,
        // }, config)
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.setState({ messageText: res.data });
        //             this.setState({ showMessage: true });
        //         }
        //     })

        this.setState({ isLocked: true });

    }

    doneClicked(ev) {
        this.props.history.push('/')
    }

    revertClicked(ev) {
        window.location.reload();

        //this is gonna be updated when the backend is done
    }

    removeDepositLimitClicked() {

    }

    removeLossLimitClicked() {

    }

    saveActivityReminderClicked() {
        localStorage.setItem("activityReminderStartTime", new Date());
        localStorage.setItem("activityReminderDuration", this.state.activityReminderDuration);

        this.setState({ messageText: "You have set your reminder." });
        this.setState({ showMessage: true });
    }

    reminderDurationClicked(val) {
        this.setState({ activityReminderDuration: val });
    }

    render() {
        const { classes } = this.props;
        const { depositLimitDuration, lossLimitDuration, lockDuration } = this.state;

        return (
            <div className={classes.root}>
                {this.state.isLocked ?
                    <Grid container style={{ width: 270 }}>
                        <Grid item xs={12} className={classes.iconRow}>
                            <img src={images.src + 'lock-icon.svg'} />
                        </Grid>
                        <Grid item xs={12} className={classes.lockTextRow}>
                            <span className={classes.lockText}>Your Account is Locked</span>
                            <span className={classes.lockDesc}>
                                If this was a mistake,  click on “Revert” below to unlock your account or contact customer service at  <a className={classes.contact_email} href="mailto:help@ibet.com?subject = Feedback&body = Message">help@ibet.com</a>
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.lockButtonRow}>
                            <Button className={classes.button} onClick={this.doneClicked}>
                                Done
                    </Button>
                            <Button className={classes.button} style={{ marginTop: 20 }} onClick={this.revertClicked}>
                                Revert
                    </Button>
                        </Grid>
                    </Grid>
                    :
                    <Grid container spacing={2} className={classes.container}>
                        <Grid item xs={4}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Deposit Limit</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockButtonRow}>
                                        {this.state.currentDepositLimit !== 0 && <Button onClick={this.removeDepositLimitClicked}
                                            className={classes.removeLimitButton} >
                                            <img src={images.src + 'remove-limit.svg'} height="18" width="18" />
                                            Remove The Limit
                                        </Button>}
                                    </Grid>
                                    <Grid item xs={12} className={classes.timeCell}>
                                        <Button onClick={() => { this.depositLimitDurationClicked(0) }}
                                            className={(depositLimitDuration === 0) ? classes.activeLimitButton : classes.limitButton} >
                                            Daily
                                        </Button>
                                        <Button onClick={() => { this.depositLimitDurationClicked(1) }}
                                            className={(depositLimitDuration === 1) ? classes.activeLimitButton : classes.limitButton}>
                                            Weekly
                                        </Button>
                                        <Button onClick={() => { this.depositLimitDurationClicked(2) }}
                                            className={(depositLimitDuration === 2) ? classes.activeLimitButton : classes.limitButton} >
                                            Monthly
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.labelRow}>
                                        <span className={classes.limitLabel}>Current Limit</span>
                                        <span className={classes.limitValueLabel}>$0 out of $0</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.inputRow}>
                                        <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseDepositLimitClicked}>-</Button>
                                        <TextField
                                            className={classes.textField}
                                            value={this.state.currentDepositLimit}
                                            onChange={this.depositLimitChanged}
                                            type="number"
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                                startAdornment: <InputAdornment position="start">{this.state.balanceCurrency}</InputAdornment>,
                                                inputProps: {
                                                    style: {
                                                        textAlign: 'center',
                                                        paddingTop: 0,
                                                        fontSize: 22,
                                                        fontWeight: 500,
                                                        fontStyle: 'normal',
                                                        fontStretch: 'normal',
                                                        lineHeight: 'normal',
                                                        letterSpacing: 'normal',
                                                        textAlign: 'center',
                                                        color: '#2e2f2e'
                                                    },
                                                    step: 1,
                                                    min: 0,
                                                    max: 50000
                                                }
                                            }}
                                        />
                                        <Button variant="contained" className={classes.incrementButton} onClick={this.increaseDepositLimitClicked}>+</Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.buttonCell}>
                                        <Button className={classes.button}
                                            onClick={this.saveDepositLimits}
                                        >Save My Deposit Limit</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Loss Limit</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockButtonRow}>
                                        {this.state.currentLossLimit !== 0 && <Button onClick={this.removeLossLimitClicked}
                                            className={classes.removeLimitButton} >
                                            <img src={images.src + 'remove-limit.svg'} height="18" width="18" />
                                            Remove The Limit
                                        </Button>}
                                    </Grid>
                                    <Grid item xs={12} className={classes.timeCell}>
                                        <Button onClick={() => { this.lossLimitDurationClicked(0) }}
                                            className={(lossLimitDuration === 0) ? classes.activeLimitButton : classes.limitButton} >
                                            Daily
                                    </Button>
                                        <Button onClick={() => { this.lossLimitDurationClicked(1) }}
                                            className={(lossLimitDuration === 1) ? classes.activeLimitButton : classes.limitButton}>
                                            Weekly
                                    </Button>
                                        <Button onClick={() => { this.lossLimitDurationClicked(2) }}
                                            className={(lossLimitDuration === 2) ? classes.activeLimitButton : classes.limitButton} >
                                            Monthly
                                    </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.labelRow}>
                                        <span className={classes.limitLabel}>Current Limit</span>
                                        <span className={classes.limitValueLabel}>$0 out of $0</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.inputRow}>
                                        <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseLossLimitClicked}>-</Button>
                                        <TextField
                                            className={classes.textField}
                                            value={this.state.currentLossLimit}
                                            type="number"
                                            onChange={this.lossLimitChanged}
                                            InputProps={{
                                                disableUnderline: true,
                                                startAdornment: <InputAdornment position="start">{this.state.balanceCurrency}</InputAdornment>,
                                                inputProps: {
                                                    style: {
                                                        textAlign: 'center',
                                                        paddingTop: 0,
                                                        fontSize: 22,
                                                        fontWeight: 500,
                                                        fontStyle: 'normal',
                                                        fontStretch: 'normal',
                                                        lineHeight: 'normal',
                                                        letterSpacing: 'normal',
                                                        textAlign: 'center',
                                                        color: '#2e2f2e'
                                                    }
                                                }
                                            }}
                                        />
                                        <Button variant="contained" className={classes.incrementButton} onClick={this.increaseLossLimitClicked}>+</Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.buttonCell}>
                                        <Button className={classes.button}
                                            onClick={this.saveLossLimits}
                                        >Save My Loss Limit</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Activity Check</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.activityTitleRow} >
                                        <span className={classes.activitySubTitle} >Activity Check</span>
                                        <Divider light />
                                    </Grid>
                                    <Grid item xs={12} className={classes.activityRow}>
                                        <span className={classes.activityText}>Time can fly when you are having fun! make sure it doesn’t get away from you with our Activity Check. Adjustable notification alerts informing you of the time spent on both Casino & Sportsbook from the moment you log in, your very own player alarm clock.</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.activityRow}>
                                        <span className={classes.activityRemindText}>Remind me every...</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.activityButtonRow}>
                                        <Button variant="contained"
                                            className={(this.state.activityReminderDuration === 5) ? classes.selectedTimeButton : classes.timeButton}
                                            onClick={() => { this.reminderDurationClicked(5) }}>5 Min</Button>
                                        <Button variant="contained"
                                            className={(this.state.activityReminderDuration === 30) ? classes.selectedTimeButton : classes.timeButton}
                                            style={{ marginLeft: 12, marginRight: 12 }}
                                            onClick={() => { this.reminderDurationClicked(30) }}>30 Min</Button>
                                        <Button variant="contained"
                                            className={(this.state.activityReminderDuration === 60) ? classes.selectedTimeButton : classes.timeButton}
                                            style={{ marginRight: 12 }}
                                            onClick={() => { this.reminderDurationClicked(60) }}>60 Min</Button>
                                        <Button variant="contained"
                                            className={(this.state.activityReminderDuration === 120) ? classes.selectedTimeButton : classes.timeButton}
                                            onClick={() => { this.reminderDurationClicked(120) }}> 120 Min</Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.buttonCell}>
                                        <Button className={classes.button}
                                            disabled={this.state.activityReminderDuration === null}
                                            onClick={this.saveActivityReminderClicked}
                                        >Save My Activity Reminder</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Lock My Account</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockRow}>
                                        <span className={classes.lockDescText}>It’s important for us that you have fun playing online. So should you ever be in doubt that you are playing more than you can really afford; lock your account a period of time. You will be able to reopen your account by contacting Customer Support. </span>
                                    </Grid>
                                    <Grid item xs={5} className={classes.leftLock}>
                                        <span className={classes.lockSubTitle}>Lock my account for a short time</span>
                                        <div className={classes.lockButtonContainer}>
                                            <Button variant="contained"
                                                className={(lockDuration === 0) ? classes.selectedLockButton : classes.lockButton}
                                                onClick={() => { this.lockDurationClicked(0) }}>1 day</Button>
                                            <Button variant="contained"
                                                className={(lockDuration === 1) ? classes.selectedLockButton : classes.lockButton}
                                                style={{ marginLeft: 12, marginRight: 12 }}
                                                onClick={() => { this.lockDurationClicked(1) }}>7 days</Button>
                                            <Button variant="contained"
                                                className={(lockDuration === 2) ? classes.selectedLockButton : classes.lockButton}
                                                onClick={() => { this.lockDurationClicked(2) }}>30 days</Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={7} className={classes.rightLock}>
                                        <span className={classes.lockSubTitle}>Or for a long period of time</span>
                                        <div className={classes.lockButtonContainer}>
                                            <Button variant="contained"
                                                className={(lockDuration === 3) ? classes.selectedLockButton : classes.lockButton}
                                                onClick={() => { this.lockDurationClicked(3) }}>6 Months</Button>
                                            <Button variant="contained"
                                                className={(lockDuration === 4) ? classes.selectedLockButton : classes.lockButton}
                                                style={{ marginLeft: 12, marginRight: 12 }}
                                                onClick={() => { this.lockDurationClicked(4) }}>1 Year</Button>
                                            <Button variant="contained"
                                                className={(lockDuration === 5) ? classes.selectedLockButton : classes.lockButton}
                                                style={{ marginRight: 12 }}
                                                onClick={() => { this.lockDurationClicked(5) }}>3 Years</Button>
                                            <Button variant="contained"
                                                className={(lockDuration === 6) ? classes.selectedLockButton : classes.lockButton}
                                                style={{ marginRight: 12 }}
                                                onClick={() => { this.lockDurationClicked(6) }}>5 Years</Button>
                                            <Button variant="contained" className={classes.lockButton} disabled={true}>Indefinite (Min. 1 Year)</Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockRow} style={{ paddingTop: 20, paddingBottom: 20 }}>
                                        <FormControlLabel
                                            control={<Checkbox onChange={this.agreeClicked} checked={this.state.agree} color="default" />}
                                            className={classes.understandText}
                                            label="By checking this box I understand that I'm locking my account for the selected period of time. " />
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockRow}>
                                        <Button className={classes.button}
                                            disabled={!this.state.agree || (this.state.lockDuration === null)}
                                            onClick={this.lockClicked}
                                        >Lock My Account</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                }
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.showMessage}
                    onClose={this.closeNotificationClicked}
                    autoHideDuration={3000}
                    TransitionComponent={Fade}
                >
                    <SnackbarContent
                        className={classes.notification}
                        aria-describedby="client-snackbar"
                        message={
                            <div>
                                <CheckCircleIcon className={classes.checkIcon} />
                                <span id="client-snackbar" className={classes.message}>
                                    {this.state.messageText}
                                </span>
                            </div>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.closeNotificationClicked}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    /></Snackbar>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(ResponsibleGaming))));