/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    authCheckState,
    sendingLog,
    AUTH_RESULT_FAIL
} from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import clsx from 'clsx';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const amounts = Object.freeze([20, 50, 100, 250]);

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 70
        }
    },
    contentGrid: {
        width: '100%',
        maxWidth: 430
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40
    },
    grow: {
        flexGrow: 1
    },
    detailRow: {
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailBorderRow: {
        paddingBottom: 15,
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px solid #e7e7e7'
    },
    actionButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        '&:focus': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        textTransform: 'capitalize'
    },
    cancelButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        textTransform: 'capitalize'
    },
    select: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        width: '100%'
    },
    amountText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingLeft: 6,
        paddingRight: 10,
        paddingTop: 6,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
    },
    label: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: -6,
        width: 80,
        color: '#212121',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12
    },
    detailText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingLeft: 6,
        paddingRight: 10,
        paddingTop: 6,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
    },
    selectLabel: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    text: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    totalBalance: {
        fontSize: 36,
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a'
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    bankIcon: {
        height: 20,
        maxWidth: 100
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#f28f22',
        marginBottom: 15,
        width: 80,
        height: 44,
        fontSize: 15,
        color: '#fff',
        opacity: 0.5,
        '&:hover': {
            backgroundColor: '#f28f22',
            opacity: 1
        },
        '&:focus': {
            backgroundColor: '#f28f22',
            opacity: 1
        }
    }
});

const bank_options = [
    {
        value: 'KKR',
        label: 'Kasikorn Bank (K-Bank)',
        img: 'letou/kasikornbank.png',
        code: 2
    },
    {
        value: 'BBL',
        label: 'Bangkok Bank',
        img: 'letou/bangkok-bank.png',
        code: 2
    },
    {
        value: 'SCB',
        label: 'Siam Commercial Bank',
        img: 'letou/scb.png',
        code: 2
    },
    {
        value: 'KTB',
        label: 'Krung Thai Bank',
        img: 'letou/krungthai.png',
        code: 2
    },
    {
        value: 'BOA',
        label: 'Bank of Ayudhya (Krungsri)',
        img: 'letou/bay.png',
        code: 2
    },
    {
        value: 'GSB',
        label: 'Government Savings Bank',
        img: 'letou/gov-saving.png',
        code: 2
    },
    {
        value: 'TMB',
        label: 'TMB Bank Public Company Limited',
        img: 'letou/tmb.png',
        code: 2
    },
    {
        value: 'CIMBT',
        label: 'CIMB Thai',
        img: 'letou/cimb.png',
        code: 2
    },
    {
        value: 'KNK',
        label: 'Kiatnakin Bank',
        img: 'letou/kiat.png',
        code: 2
    }
];

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
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 2px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        display: 'flex',
        flexDirection: 'row',
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

function NumberFormatCustom(props) {
    const { currency, inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale
            prefix={currency}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

class ThaiLocalBank extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            selectedBank: 'none',
            order_id: '', //"letou" + new Date().toISOString().replace(/-/g, '').replace('T', '').replace(/:/g, '').split('.')[0],
            accountNumber: '',
            password: '',
            showPassword: false,
            activeStep: 0,
            showErrorDialog: false
        };
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });
    }

    amountChanged(event) {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                this.setState({ amount: event.target.value });
                this.setState({
                    amountInvalid:
                        parseFloat(event.target.value) < 200 ||
                        parseFloat(event.target.value) > 500000
                });
            } else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    accountNumberChanged(event) {
        this.setState({ accountNumberFocused: true });

        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ accountNumber: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ accountNumber: '' });
    }

    handleClick() {
        let currentComponent = this;

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        const body = JSON.stringify({
            bank: this.state.selectedBank,
            bank_acc_no: this.state.accountNumber,
            real_name:
                this.props.user.firstName + ' ' + this.props.user.lastName,
            username: this.props.user.username,
            amount: this.state.amount,
            currency: 7,
            type: '1'
        });
        return axios
            .post(
                API_URL + 'accounting/api/transactions/save_transaction',
                body,
                config
            )
            .then(res => {
                if (res.statusText == 'OK') {
                    return res.data;
                } else {
                    currentComponent.props.callbackFromParent(
                        'error',
                        'Transaction failed.'
                    );
                }
            })
            .then(function(data) {
                let status = data.success;
                if (status) {
                    const sbody = JSON.stringify({
                        type: 'withdraw',
                        username: currentComponent.props.user.username,
                        balance: currentComponent.state.amount
                    });
                    axios
                        .post(
                            API_URL + `users/api/addorwithdrawbalance/`,
                            sbody,
                            config
                        )
                        .then(res => {
                            if (res.data === 'Failed') {
                                //this.setState({ error: true });
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Transaction failed!'
                                );
                            } else if (
                                res.data === 'The balance is not enough'
                            ) {
                                //    // alert("cannot withdraw this amount")
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Cannot withdraw this amount!'
                                );
                            } else {
                                currentComponent.props.callbackFromParent(
                                    'success',
                                    'Your balance is updated.'
                                );
                            }
                        });
                } else {
                    currentComponent.props.callbackFromParent(
                        'error',
                        'Somthing is wrong'
                    );
                }
            })
            .catch(err => {
                currentComponent.props.callbackFromParent(
                    'error',
                    'Something is wrong.'
                );
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    checkWithdrawPassword() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config).then(res => {
            if (res.datawithdraw_password === this.state.password) {
                this.setState({ showErrorDialog: true });
            } else {
                this.setState({ activeStep: 1 });
            }
        });
    }

    render() {
        const { classes, user } = this.props;
        const {
            selectedBank,
            accountNumber,
            amount,
            currency,
            password,
            activeStep,
            showPassword,
            showErrorDialog
        } = this.state;

        return (
            <div className={classes.root}>
                {activeStep === 0 && (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('bank-account')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel('vn-local-withdraw-text')}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                            <Select
                                className={classes.select}
                                value={selectedBank}
                                onChange={event => {
                                    this.setState({
                                        selectedBank: event.target.value
                                    });
                                }}
                                input={
                                    <BootstrapInput
                                        name="bank"
                                        id="bank-select"
                                    />
                                }
                            >
                                <MenuItem key="none" value="none" disabled>
                                    <span className={classes.selectLabel}>
                                        {this.getLabel('choose-bank')}
                                    </span>
                                </MenuItem>
                                {bank_options.map(bank => (
                                    <MenuItem
                                        key={bank.label}
                                        value={bank.value}
                                    >
                                        <div style={{ width: 100 }}>
                                            <img
                                                src={images.src + bank.img}
                                                alt=""
                                                className={classes.bankIcon}
                                            />
                                        </div>
                                        <span className={classes.selectLabel}>
                                            {bank.label}
                                        </span>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.detailRow}>
                            <TextField
                                autoComplete="bank-number"
                                className={classes.detailText}
                                placeholder={this.getLabel('account-number')}
                                onChange={this.accountNumberChanged.bind(this)}
                                value={accountNumber}
                                error={
                                    this.state.accountNumberFocused &&
                                    accountNumber.length === 0
                                }
                                helperText={
                                    this.state.accountNumberFocused &&
                                    accountNumber.length === 0
                                        ? this.getLabel('invalid-bank-number')
                                        : ' '
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/info-icon.svg'
                                                }
                                                alt=""
                                                height="20"
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.detailRow}>
                            <TextField
                                autoComplete="withdraw-password"
                                className={classes.detailText}
                                placeholder={this.getLabel('password-text')}
                                onChange={event => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showPassword: !state.showPassword
                                                    }));
                                                }}
                                            >
                                                {this.state.showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={() => {
                                    this.props.history.push(
                                        '/p/fortune-center/withdraw'
                                    );
                                }}
                            >
                                {this.getLabel('cancel-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                className={classes.actionButton}
                                onClick={this.checkWithdrawPassword.bind(this)}
                                disabled={
                                    selectedBank === 'none' ||
                                    accountNumber == '' ||
                                    password === ''
                                }
                            >
                                {this.getLabel('next-label')}
                            </Button>
                        </Grid>
                    </Grid>
                )}
                {activeStep === 1 && (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ borderBottom: '1px solid #e7e7e7' }}
                        >
                            <img
                                src={
                                    images.src +
                                    bank_options.filter(
                                        o => o.value === selectedBank
                                    )[0].img
                                }
                                alt=""
                                className={classes.bankIcon}
                            />
                            <span
                                className={classes.text}
                                style={{ marginLeft: 10 }}
                            >
                                {
                                    bank_options.filter(
                                        o => o.value === selectedBank
                                    )[0].label
                                }
                            </span>
                            <span className={classes.text}>{' - '}</span>
                            <span
                                className={classes.text}
                                style={{ marginLeft: 10 }}
                            >
                                {accountNumber.substring(
                                    accountNumber.length - 4
                                )}
                            </span>
                        </Grid>
                        <Grid item xs={2} className={classes.detailRow}></Grid>
                        <Grid item xs={8} style={{ textAlign: 'center' }}>
                            <span className={classes.text}>
                                {this.getLabel('total-balance')}
                            </span>
                        </Grid>
                        <Grid item xs={2} style={{ textAlign: 'right' }}>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                className={classes.bankIcon}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: 'center',
                                borderBottom: '1px solid #e7e7e7',
                                paddingTop: 15,
                                paddingBottom: 20
                            }}
                        >
                            <span className={classes.totalBalance}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailBorderRow}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('withdrawal-balance')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailBorderRow}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('locked-balance')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailBorderRow}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('free-withdrawals-remaining')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>0</span>
                        </Grid>
                        {amounts.map((x, i) => {
                            return (
                                <Grid
                                    item
                                    xs={3}
                                    key={i}
                                    style={{ paddingTop: 20 }}
                                >
                                    <Button
                                        className={clsx({
                                            [classes.button]: true,
                                            [classes.selected]: x === amount
                                        })}
                                        onClick={() =>
                                            this.setState({
                                                amount: x,
                                                amountInvalid: false,
                                                amountFocused: false
                                            })
                                        }
                                    >
                                        {x}
                                    </Button>
                                </Grid>
                            );
                        })}
                        <Grid item xs={12} className={classes.detailRow}>
                            <span className={classes.desc}>
                                {this.getLabel('withdraw-fee-text')}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.amountText}
                                placeholder={this.getLabel(
                                    'help2pay-placeholder'
                                )}
                                onChange={this.amountChanged.bind(this)}
                                value={amount}
                                error={
                                    this.state.amountInvalid &&
                                    this.state.amountFocused
                                }
                                helperText={
                                    this.state.amountInvalid &&
                                    this.state.amountFocused
                                        ? this.getLabel('valid-amount')
                                        : ' '
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    inputComponent: NumberFormatCustom,
                                    inputProps: {
                                        step: 10,
                                        min: 200,
                                        max: 950000,
                                        style: { textAlign: 'right' },
                                        currency: currency
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <span className={classes.label}>
                                                {this.getLabel('amount-label')}
                                            </span>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ paddingBottom: 0 }}
                        >
                            <div
                                style={{
                                    border: '1px solid #e7e7e7',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: 12,
                                    borderTopLeftRadius: 3,
                                    borderTopRightRadius: 3
                                }}
                            >
                                <span className={classes.detailLabel}>
                                    {this.getLabel('fees-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.text}>
                                    {this.getLabel('free-label')}
                                </span>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ paddingTop: 0 }}
                        >
                            <div
                                style={{
                                    borderLeft: '1px solid #e7e7e7',
                                    borderRight: '1px solid #e7e7e7',
                                    borderBottom: '1px solid #e7e7e7',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: 12,
                                    borderBottomLeftRadius: 3,
                                    borderBottomRightRadius: 3
                                }}
                            >
                                <span className={classes.detailLabel}>
                                    {this.getLabel('receive-amount')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.text}>
                                    {amount === ''
                                        ? ''
                                        : getSymbolFromCurrency(user.currency)}
                                    {amount === ''
                                        ? ''
                                        : Number(amount).toFixed(2)}
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={() => {
                                    this.props.history.push(
                                        '/p/fortune-center/withdraw'
                                    );
                                }}
                            >
                                {this.getLabel('cancel-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                className={classes.actionButton}
                                onClick={this.handleClick.bind(this)}
                                disabled={
                                    amount === '' ||
                                    this.state.amountInvalid == ''
                                }
                            >
                                {this.getLabel('confirm-label')}
                            </Button>
                        </Grid>
                    </Grid>
                )}
                <Dialog aria-labelledby="dialog-title" open={showErrorDialog}>
                    <DialogTitle id="dialog-title">
                        {this.getLabel('error-label')}
                    </DialogTitle>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token, user } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(connect(mapStateToProps, { authCheckState })(ThaiLocalBank))
    )
);
