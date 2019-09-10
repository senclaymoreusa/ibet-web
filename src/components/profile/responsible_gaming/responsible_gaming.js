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
import { FormattedNumber } from 'react-intl';
import moment from "moment";
import LinearProgress from '@material-ui/core/LinearProgress';


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
        minHeight: 415,
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
    dateField: {
        height: 44,
        marginLeft: 61,
        marginRight: 61,
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
        marginTop: 36,
        "&:active": {
            backgroundColor: '#fff'
        },
        "&:hover": {
            backgroundColor: '#fff'

        },
    },
    limitValueContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        textAlign: 'right',
        fontSize: 12,
        fontWeight: 500,
        float: 'right',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#2e2f2e',
    },
});

export class ResponsibleGaming extends Component {

    constructor(props) {
        super(props);

        this.state = {
            depositLimitDuration: 0,
            currentDepositLimit: '',
            depositLimits: [],

            lossLimitDuration: 0,
            currentLossLimit: '',
            lossLimits: [],

            activityReminderDuration: null,

            lockDuration: null,
            agree: false,

            balanceCurrenyCode: "$",
            balanceCurreny: "USD",

            messageText: '',
            showMessage: false,

            isLocked: false,

            showDepositProgressBar: false,
            showLossProgressBar: false,
        }

        this.getValues = this.getValues.bind(this);
        this.depositLimitDurationClicked = this.depositLimitDurationClicked.bind(this);
        this.lossLimitDurationClicked = this.lossLimitDurationClicked.bind(this);
        this.reminderDurationClicked = this.reminderDurationClicked.bind(this);
        this.lockDurationClicked = this.lockDurationClicked.bind(this);
        
    }

    async componentWillReceiveProps(props) {
        await this.getValues();
    }

    async componentDidMount() {
        await this.getValues();
    }

    async getValues() {
        let currentComponent = this;

        let duration = localStorage.getItem('activityReminderDuration');
        this.setState({ activityReminderDuration: parseInt(duration) })

        await this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        currentComponent.setState({ userId: res.data.pk });
                        currentComponent.setState({ balanceCurrenyCode: getSymbolFromCurrency(res.data.currency) });
                        currentComponent.setState({ balanceCurreny: res.data.currency });

                        axios.get(API_URL + 'users/api/get-limitations/?id=' + currentComponent.state.userId, config)
                            .then(res => {
                                currentComponent.setState({ depositLimits: res.data.deposit });
                                currentComponent.setState({ lossLimits: res.data.loss });

                                let dailyDepositItem = res.data.deposit.filter(function (item) {
                                    return item.intervalValue === 0;
                                });

                                if (dailyDepositItem)
                                    this.setState({ currentDepositLimit: parseInt(dailyDepositItem[0].amount) });

                                let dailyLossItem = res.data.loss.filter(function (item) {
                                    return item.intervalValue === 0;
                                });

                                if (dailyLossItem)
                                    this.setState({ currentLossLimit: parseInt(dailyLossItem[0].amount) });
                            }).catch(err => {
                                console.log(err);
                            })
                    })
            }
        })
    }

    depositLimitChanged(ev) {

        this.setState({ currentDepositLimit: ev.target.value });

        this.setState(prevState => ({
            depositLimits: prevState.depositLimits.map(
                obj => (obj.intervalValue === this.state.depositLimitDuration ? Object.assign(obj, { amount: ev.target.value }) : obj)
            )
        }));
    }

    lossLimitChanged(ev) {
        this.setState({ currentLossLimit: ev.target.value });

        this.setState(prevState => ({
            lossLimits: prevState.lossLimits.map(
                obj => (obj.intervalValue === this.state.lossLimitDuration ? Object.assign(obj, { amount: ev.target.value }) : obj)
            )
        }));
    }

    depositLimitDurationClicked(val) {
        this.setState({ depositLimitDuration: val });

        var item = this.state.depositLimits.filter(function (item) {
            return item.intervalValue === val;
        });

        if (item.length > 0)
            this.setState({ currentDepositLimit: parseInt(item[0].amount) });
        else
            this.setState({ currentDepositLimit: '' });
    }

    lossLimitDurationClicked(val) {
        this.setState({ lossLimitDuration: val });

        var item = this.state.lossLimits.filter(function (item) {
            return item.intervalValue === val;
        });

        if (item.length > 0)
            this.setState({ currentLossLimit: parseInt(item[0].amount) });
        else
            this.setState({ currentLossLimit: null });
    }

    decreaseDepositLimitClicked() {
        if (!this.state.currentDepositLimit) {
            this.setState({ currentDepositLimit: 0 });

            var newLimit = {
                "amount": 0,
                "intervalValue": this.state.depositLimitDuration,
                "limitId": null,
                "expiration_time": ""
            }

            this.setState({ depositLimits: this.state.depositLimits, newLimit });

        } else if (parseInt(this.state.currentDepositLimit) >= 0) {
            this.setState({ currentDepositLimit: parseInt(this.state.currentDepositLimit) - 1 });

            this.setState(prevState => ({
                depositLimits: prevState.depositLimits.map(
                    obj => (obj.intervalValue === this.state.depositLimitDuration ? Object.assign(obj, { amount: parseInt(this.state.currentDepositLimit) - 1 }) : obj)
                )
            }));
        }
    }

    increaseDepositLimitClicked() {
        if (this.state.currentDepositLimit >= 0) {
            this.setState({ currentDepositLimit: parseInt(this.state.currentDepositLimit) + 1 });

            this.setState(prevState => ({
                depositLimits: prevState.depositLimits.map(
                    obj => (obj.intervalValue === this.state.depositLimitDuration ? Object.assign(obj, { amount: parseInt(this.state.currentDepositLimit) + 1 }) : obj)
                )
            }));
        } else {
            this.setState({ currentDepositLimit: 0 });

            var newLimit = {
                "amount": 0,
                "intervalValue": this.state.depositLimitDuration,
                "limitId": null,
                "expiration_time": ""
            }

            this.setState({ depositLimits: this.state.depositLimits, newLimit });
        }
    }

    decreaseLossLimitClicked() {
        if (!this.state.currentLossLimit) {
            this.setState({ currentLossLimit: 0 });

            var newLimit = {
                "amount": 0,
                "intervalValue": this.state.lossLimitDuration,
                "limitId": null,
                "expiration_time": ""
            }

            this.setState({ lossLimits: this.state.lossLimits, newLimit });

        } else if (parseInt(this.state.currentLossLimit) >= 0) {
            this.setState({ currentLossLimit: parseInt(this.state.currentLossLimit) - 1 });

            this.setState(prevState => ({
                lossLimits: prevState.lossLimits.map(
                    obj => (obj.intervalValue === this.state.lossLimitDuration ? Object.assign(obj, { amount: parseInt(this.state.currentLossLimit) - 1 }) : obj)
                )
            }));
        }
    }

    increaseLossLimitClicked() {
        if (this.state.currentLossLimit >= 0) {
            this.setState({ currentLossLimit: parseInt(this.state.currentLossLimit) + 1 });

            this.setState(prevState => ({
                lossLimits: prevState.lossLimits.map(
                    obj => (obj.intervalValue === this.state.lossLimitDuration ? Object.assign(obj, { amount: parseInt(this.state.currentLossLimit) + 1 }) : obj)
                )
            }));
        } else {
            this.setState({ currentLossLimit: 0 });

            var newLimit = {
                "amount": 0,
                "intervalValue": this.state.lossLimitDuration,
                "limitId": null,
                "expiration_time": ""
            }

            this.setState({ depositLimits: this.state.lossLimits, newLimit });
        }
    }

    saveDepositLimits() {
        let currentComponent = this;
        currentComponent.setState({ showDepositProgressBar: true });

        let limitArr = [];
        let intervalArr = [];

        this.state.depositLimits.forEach(limit => {
            if (limit.amount !== null && limit.expiration_time === '') {
                limitArr.push(limit.amount);
                intervalArr.push(limit.intervalValue);
            }
        });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/set-limitations/', {
            "limit": limitArr,
            "interval": intervalArr,
            "user_id": this.state.userId,
            "type": "deposit",
        }, config)
            .then(res => {
                currentComponent.setState({ showDepositProgressBar: false });

                if (res.status === 200) {
                    currentComponent.setState({ messageText: res.data });
                    currentComponent.setState({ showMessage: true });
                }
            })
    }

    saveLossLimits() {
        let currentComponent = this;
        currentComponent.setState({ showLossProgressBar: true });

        let limitArr = [];
        let intervalArr = [];

        this.state.lossLimits.forEach(limit => {
            if (limit.amount !== null && limit.expiration_time === '') {
                limitArr.push(limit.amount);
                intervalArr.push(limit.intervalValue);
            }
        });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/set-limitations/', {
            "limit": limitArr,
            "interval": intervalArr,
            "user_id": this.state.userId,
            "type": "loss",
        }, config)
            .then(res => {
                currentComponent.setState({ showLossProgressBar: false });

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

    async removeDepositLimitClicked() {
        let currentComponent = this;

        currentComponent.setState({ showDepositProgressBar: true });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let id = currentComponent.state.depositLimits.filter(function (item) {
            return item.intervalValue === currentComponent.state.depositLimitDuration;
        });

        axios.post(API_URL + 'users/api/delete-limitation/', {
            "user_id": currentComponent.state.userId,
            "interval": currentComponent.state.depositLimitDuration,
            "type": "deposit",
            "id": id
        }, config)
            .then(res => {
                if (res.status === 200) {
                    currentComponent.setState(prevState => ({
                        depositLimits: prevState.depositLimits.map(
                            obj => (obj.limitId === id ? Object.assign(obj, { expiration_time: res.data.expiration_time }) : obj)
                        )
                    }));

                    currentComponent.setState({ showDepositProgressBar: false });
                }
            }).catch(err => {

                console.log(err);
            })
    }

    async removeLossLimitClicked() {
        let currentComponent = this;

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let id = currentComponent.state.lossLimits.filter(function (item) {
            return item.intervalValue === currentComponent.state.lossLimitDuration;
        });

        axios.post(API_URL + 'users/api/delete-limitation/', {
            "user_id": currentComponent.state.userId,
            "interval": currentComponent.state.lossLimitDuration,
            "type": "loss",
            "id": id
        }, config)
            .then(res => {
                if (res.status === 200) {
                    currentComponent.setState(prevState => ({
                        lossLimits: prevState.lossLimits.map(
                            obj => (obj.limitId === id ? Object.assign(obj, { expiration_time: res.data.expiration_time }) : obj)
                        )
                    }));
                }
            }).catch(err => {
                console.log(err);
            })
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

    cancelDepositLimitDeletion(evt) {
        let currentComponent = this;

        currentComponent.setState({ showDepositProgressBar: true });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let id = currentComponent.state.depositLimits.filter(function (item) {
            return item.intervalValue === currentComponent.state.depositLimitDuration;
        });

        axios.post(API_URL + 'users/api/cancel-delete-limitation/', {
            "user_id": currentComponent.state.userId,
            "interval": currentComponent.state.depositLimitDuration,
            "type": "deposit",
            "id": id
        }, config)
            .then(res => {
                if (res.status === 200) {
                    currentComponent.setState(prevState => ({
                        depositLimits: prevState.depositLimits.map(
                            obj => (obj.limitId === id ? Object.assign(obj, {
                                expiration_time: '', amount: null
                            }) : obj)
                        )
                    }));

                    currentComponent.setState({ showDepositProgressBar: false });
                }
            }).catch(err => {

                console.log(err);
            })
    }

    cancelLossLimitDeletion(evt) {
        let currentComponent = this;

        currentComponent.setState({ showLossProgressBar: true });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let id = currentComponent.state.lossLimits.filter(function (item) {
            return item.intervalValue === currentComponent.state.lossLimitDuration;
        });

        axios.post(API_URL + 'users/api/cancel-delete-limitation/', {
            "user_id": currentComponent.state.userId,
            "interval": currentComponent.state.lossLimitDuration,
            "type": "loss",
            "id": id
        }, config)
            .then(res => {
                if (res.status === 200) {
                    currentComponent.setState(prevState => ({
                        lossLimits: prevState.lossLimits.map(
                            obj => (obj.limitId === id ? Object.assign(obj, {
                                expiration_time: '', amount: null
                            }) : obj)
                        )
                    }));

                    currentComponent.setState({ showLossProgressBar: false });
                }
            }).catch(err => {

                console.log(err);
            })
    }

    render() {
        const { classes } = this.props;
        const { depositLimitDuration, lossLimitDuration, lockDuration, currentDepositLimit, currentLossLimit } = this.state;

        const { showDepositProgressBar, showLossProgressBar } = this.state;

        var selectedDepositItem = this.state.depositLimits.filter(function (item) {
            return item.intervalValue === depositLimitDuration;
        });

        var selectedDepositExpirationTime = '';
        if (selectedDepositItem && selectedDepositItem.length > 0 && selectedDepositItem[0].expiration_time.length > 0) {
            let milliseconds = Date.parse(selectedDepositItem[0].expiration_time)
            selectedDepositExpirationTime = moment(new Date(milliseconds)).format("MM/DD hh:mmA");
        }

        var selectedLossItem = this.state.lossLimits.filter(function (item) {
            return item.intervalValue === lossLimitDuration;
        });

        var selectedLossExpirationTime = '';
        if (selectedLossItem && selectedLossItem.length > 0 && selectedLossItem[0].expiration_time.length > 0) {
            let milliseconds = Date.parse(selectedLossItem[0].expiration_time)
            selectedLossExpirationTime = moment(new Date(milliseconds)).format("MM/DD hh:mmA");
        }


        return (
            <div className={classes.root}>
                {this.state.isLocked ?
                    <Grid container style={{ width: 270 }}>
                        <Grid item xs={12} className={classes.iconRow}>
                            <img src={images.src + 'lock-icon.svg'} alt="" />
                        </Grid>
                        <Grid item xs={12} className={classes.lockTextRow}>
                            <span className={classes.lockText}>Your Account is Locked</span>
                            <span className={classes.lockDesc}>
                                If this was a mistake,  click on “Revert” below to unlock your account or contact customer service at  <a className={classes.contact_email} href="mailto:help@ibet.com?subject = Feedback&body = Message">help@ibet.com</a>
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.lockButtonRow}>
                            <Button className={classes.button} onClick={this.doneClicked.bind(this)}>
                                Done
                    </Button>
                            <Button className={classes.button} style={{ marginTop: 20 }} onClick={this.revertClicked.bind(this)}>
                                Revert
                    </Button>
                        </Grid>
                    </Grid>
                    :
                    <Grid container spacing={2} className={classes.container}>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Deposit Limit</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {showDepositProgressBar === true && <LinearProgress />}
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockButtonRow}>
                                        {(selectedDepositItem.length > 0 && selectedDepositItem[0].expiration_time === '' && selectedDepositItem[0].amount) && <Button onClick={this.removeDepositLimitClicked.bind(this)}
                                            className={classes.removeLimitButton} >
                                            <img src={images.src + 'remove-limit.svg'} alt="" height="18" width="18" />
                                            Remove The Limit
                                        </Button>}
                                    </Grid>
                                    <Grid item xs={12} className={classes.timeCell}>
                                        <Button onClick={() => { this.depositLimitDurationClicked(0) }}
                                            className={(depositLimitDuration === 0) ? classes.activeLimitButton : classes.limitButton} >
                                            Daily
                                        </Button>
                                        <Button onClick={() => { this.depositLimitDurationClicked(1)}}
                                            className={(depositLimitDuration === 1) ? classes.activeLimitButton : classes.limitButton}>
                                            Weekly
                                        </Button>
                                        <Button onClick={() => { this.depositLimitDurationClicked(2)}}
                                            className={(depositLimitDuration === 2) ? classes.activeLimitButton : classes.limitButton} >
                                            Monthly
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.labelRow}>
                                        <span className={classes.limitLabel}>Current Limit</span>
                                        <div className={classes.limitValueContainer}>
                                            <FormattedNumber
                                                maximumFractionDigits={0}
                                                minimumFractionDigits={0}
                                                value={currentDepositLimit >= 0 ? currentDepositLimit : 0}
                                                className={classes.limitValueLabel}
                                                style={`currency`}
                                                currency={this.state.balanceCurreny}
                                            />
                                            <span className={classes.limitValueLabel}>&nbsp;out of&nbsp;</span>
                                            <FormattedNumber
                                                maximumFractionDigits={0}
                                                minimumFractionDigits={0}
                                                value={currentDepositLimit >= 0 ? currentDepositLimit : 0}
                                                className={classes.limitValueLabel}
                                                style={`currency`}
                                                currency={this.state.balanceCurreny}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        {selectedDepositExpirationTime === '' ?
                                            <div className={classes.inputRow}>
                                                <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseDepositLimitClicked.bind(this)}>-</Button>
                                                <TextField
                                                    className={classes.textField}
                                                    value={currentDepositLimit >= 0 ? currentDepositLimit : ''}
                                                    onChange={this.depositLimitChanged.bind(this)}
                                                    type="number"
                                                    fullWidth
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        startAdornment: <InputAdornment position="start">{this.state.balanceCurrenyCode}</InputAdornment>,
                                                        inputProps: {
                                                            style: {
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
                                                <Button variant="contained" className={classes.incrementButton} onClick={this.increaseDepositLimitClicked.bind(this)}>+</Button>
                                            </div>
                                            :
                                            <div className={classes.inputRow}>
                                                <TextField
                                                    className={classes.dateField}
                                                    value={selectedDepositExpirationTime}
                                                    fullWidth
                                                    disabled={true}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        inputProps: {
                                                            style: {
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
                                            </div>
                                        }
                                    </Grid>
                                    <Grid item xs={12} className={classes.buttonCell}>
                                        {selectedDepositExpirationTime === '' ?
                                            <Button className={classes.button}
                                                onClick={this.saveDepositLimits.bind(this)}
                                            >Save My Deposit Limit</Button>
                                            :
                                            <Button className={classes.button}
                                                onClick={this.cancelDepositLimitDeletion.bind(this)}
                                            >Cancel</Button>
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className={classes.paper}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.titleCell}>
                                        <span className={classes.title}>Loss Limit</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {showLossProgressBar === true && <LinearProgress />}
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockButtonRow}>
                                    {(selectedLossItem.length > 0 && selectedLossItem[0].expiration_time === '' && selectedLossItem[0].amount) && <Button onClick={this.removeLossLimitClicked.bind(this)}
                                            className={classes.removeLimitButton} >
                                            <img src={images.src + 'remove-limit.svg'} alt="" height="18" width="18" />
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
                                        <div className={classes.limitValueContainer}>
                                            <FormattedNumber
                                                maximumFractionDigits={0}
                                                minimumFractionDigits={0}
                                                value={currentLossLimit >= 0 ? currentLossLimit : 0}
                                                className={classes.limitValueLabel}
                                                style={`currency`}
                                                currency={this.state.balanceCurreny}
                                            />
                                            <span className={classes.limitValueLabel}>&nbsp;out of&nbsp;</span>
                                            <FormattedNumber
                                                maximumFractionDigits={0}
                                                minimumFractionDigits={0}
                                                value={currentLossLimit >= 0 ? currentLossLimit : 0}
                                                className={classes.limitValueLabel}
                                                style={`currency`}
                                                currency={this.state.balanceCurreny}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                    {selectedLossExpirationTime === '' ?
                                            <div className={classes.inputRow}>
                                                <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseLossLimitClicked.bind(this)}>-</Button>
                                                <TextField
                                                    className={classes.textField}
                                                    value={currentLossLimit >= 0 ? currentLossLimit : ''}
                                                    type="number"
                                                    onChange={this.lossLimitChanged.bind(this)}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        startAdornment: <InputAdornment position="start">{this.state.balanceCurrenyCode}</InputAdornment>,
                                                        inputProps: {
                                                            style: {
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
                                                <Button variant="contained" className={classes.incrementButton} onClick={this.increaseLossLimitClicked.bind(this)}>+</Button>
                                            </div>
                                            :
                                            <div className={classes.inputRow}>
                                                <TextField
                                                    className={classes.dateField}
                                                    value={selectedLossExpirationTime}
                                                    fullWidth
                                                    disabled={true}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        inputProps: {
                                                            style: {
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
                                            </div>
                                        }
                                    </Grid>
                                    <Grid item xs={12} className={classes.buttonCell}>
                                    {selectedLossExpirationTime === '' ?
                                            <Button className={classes.button}
                                                onClick={this.saveLossLimits.bind(this)}
                                            >Save My Loss Limit</Button>
                                            :
                                            <Button className={classes.button}
                                                onClick={this.cancelLossLimitDeletion.bind(this)}
                                            >Cancel</Button>
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
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
                                            onClick={() => { this.reminderDurationClicked(30)}}>30 Min</Button>
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
                                            onClick={this.saveActivityReminderClicked.bind(this)}
                                        >Save My Activity Reminder</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                                            control={<Checkbox onChange={this.agreeClicked.bind(this)} checked={this.state.agree} color="default" />}
                                            className={classes.understandText}
                                            label="By checking this box I understand that I'm locking my account for the selected period of time. " />
                                    </Grid>
                                    <Grid item xs={12} className={classes.lockRow}>
                                        <Button className={classes.button}
                                            disabled={!this.state.agree || (this.state.lockDuration === null)}
                                            onClick={this.lockClicked.bind(this)}
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
                    onClose={this.closeNotificationClicked.bind(this)}
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
                                onClick={this.closeNotificationClicked.bind(this)}
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