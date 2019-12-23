import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, sendingLog, AUTH_RESULT_FAIL } from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Divider } from '@material-ui/core';

const bank_options = [
    //tailand
    { value: 'KKR', label: 'Kasikorn Bank (K-Bank)', img: 'letou/kasikornbank.png', code: 2 },
    { value: 'BBL', label: 'Bangkok Bank', img: 'letou/bangkok-bank.png', code: 2 },
    { value: 'SCB', label: 'Siam Commercial Bank', img: 'letou/scb.png', code: 2 },
    { value: 'KTB', label: 'Krung Thai Bank', img: 'letou/krungthai.png', code: 2 },
    { value: 'BOA', label: 'Bank of Ayudhya (Krungsri)', img: 'letou/bay.png', code: 2 },
    { value: 'GSB', label: 'Government Savings Bank', img: 'letou/gov-saving.png', code: 2 },
    { value: 'TMB', label: 'TMB Bank Public Company Limited', img: 'letou/tmb.png', code: 2 },
    { value: 'CIMBT', label: 'CIMB Thai', img: 'letou/cimb.png', code: 2 },
    { value: 'KNK', label: 'Kiatnakin Bank', img: 'letou/kiat.png', code: 2 },
    // vietnam
    { value: 'TCB', label: 'Techcom Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'SACOM', label: 'Sacom Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'VCB', label: 'Vietcom Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'ACB', label: 'Asia Commercial Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'DAB', label: 'DongA Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'VTB', label: 'Vietin Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'BIDV', label: 'Bank for Investment and Development of Vietnam', img: 'letou/kiat.png', code: 'VND' },
    { value: 'EXIM', label: 'Eximbank Vietnam', img: 'letou/kiat.png', code: 'VND' },
];
{/*
    { value: 'ACB', label: 'Asia Commercial Bank', img: 'letou/acb.png', code: 'VND' },
    { value: 'BIDV', label: 'Bank for Investment and Development of Vietnam', img: 'letou/bidv.png', code: 'VND' },
    { value: 'DAB', label: 'DongA Bank', img: 'letou/donga.png', code: 'VND' },
    { value: 'SACOM', label: 'Sacom Bank', img: 'letou/sacombank.png', code: 'VND' },
    { value: 'TCB', label: 'Techcom Bank', img: 'letou/techombank.svg', code: 'VND' },
    { value: 'VTB', label: 'Vietin Bank', img: 'letou/vietinbank.png', code: 'VND' },
    { value: 'VPB', label: 'VP Bank', img: 'letou/vp-bank.svg', code: 'VND' },
];
*/}

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    contentGrid: {
        width: 430,
    },
    contentRow: {
        paddingLeft: 263,
        paddingRight: 262,
        paddingTop: 50,
        paddingBottom: 50,
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 15,
        textAlign: 'center',
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
        marginTop: 28,
    },
    checkbox: {
        margin: theme.spacing()
    },
    continueButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
    },
    backBankingButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        marginTop: 30
    },
    rememberCell: {
        paddingTop: 20,
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1',
    },
    infoCell: {
        paddingTop: 15,
    },
    infoRow: {
        display: 'block',

    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
    },
    infoValue: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
        marginLeft: 3,
    },
    detailRow: {
        paddingBottom: 15
    },
    leftButton: {
        display: 'inline-block',
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44,
    },
    middleButton: {
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44,
    },
    actionButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
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
        textTransform: 'capitalize',
    },
    cancelButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        textTransform: 'capitalize',
    },
    rightButton: {
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 88,
        height: 44,
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
        width: '100%',
    },
    otherText: {
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
        width: 400,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    amountRow: {
        height: 40,
        borderBottom: '4px solid #5e5e5e'
    },
    amountRightRow: {
        height: 40,
        textAlign: 'right',
        borderBottom: '4px solid #5e5e5e'
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
        "&:hover": {
            border: '1px solid #717171',
        },
        "&:focus": {
            border: '1px solid #717171',
        },
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
        paddingTop: 12,
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
        "&:hover": {
            border: '1px solid #717171',
        },
        "&:focus": {
            border: '1px solid #717171',
        },
    },
    selectLabel: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
    },
    bankIcon: {
        height: 20,
        maxWidth: 100
    },
});

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
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
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
            decimalSeparator='.'
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

class Help2Pay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            amount: '',
            error: false,
            data: '',
            selectedBankOption: 'none',
            order_id: "letou" + new Date().toISOString().replace(/-/g, '').replace('T', '').replace(/:/g, '').split('.')[0],
            
            showwithdrawPassword: false,

            amountFocused: false,
            amountInvalid: true,

            bankAccountNumber: '',
            bankAccountHolder: '',
            withdrawpassword: '',

            //withdrawpasswordFocused: false,
            //withdrawpasswordInvalid: true,

            activeStep: 0,
            currency: "THB",
            currencyCode: 'THB',
            isFavorite: false,
        };
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ currencyCode: res.data.currency });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'vietnamhelp2pay' });
            });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ currencyCode: res.data.currency });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'vietnamhelp2pay' });
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
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 500 || parseFloat(event.target.value) > 500000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    bankAccountNumberChanged(event) {
        this.setState({ bankAccountNumberFocused: true });

        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ bankAccountNumber: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bankAccountNumber: '' });
    };

    bankAccountHolderChanged(event) {
        this.setState({ bankAccountHolderFocused: true });
        {/*
        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ bankAccountHolder: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bankAccountHolder: '' });
        */}
        this.setState({ bankAccountHolder: event.target.value });
        this.setState({ bankAccountHolderFocused: true });
        //this.setState({ pinInvalid: (event.target.value.length < 2) });
    };

    withdrawpasswordChanged(event) {
        this.setState({ withdrawpasswordFocused: true });
        {/*}
        const re = /^[0-9]+(\.[0-9]{0,2})?$/;

        if (re.test(event.target.value))
            this.setState({ withdrawpassword: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bwithdrawpassword: '' });
        */}
        this.setState({ withdrawpassword: event.target.value });
        this.setState({ withdrawpasswordFocused: true });
    };



    handleBankChange = event => {
        this.setState({ selectedBankOption: event.target.value });
    };

    handleClick() {
        let currentComponent = this;

        var postData = {
            "amount": this.state.amount,
            "user_id": this.state.data.pk,
            "currency": '2',
            "bank": this.state.selectedBankOption,
            "language": "en-Us",
            "order_id": this.state.order_id,
            "withdrawPassword": this.state.withdrawpassword,
            "toBankAccountName": this.state.bankAccountHolder,
            "toBankAccountNumber": this.state.bankAccountNumber,
        }

        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const token = localStorage.getItem('token');
        {/*
            path('api/help2pay/deposit', help2pay.SubmitDeposit.as_view(), name='Help2pay_Deposit'),
            path('api/help2pay/deposit_result', help2pay.DepositResult.as_view(), name='Help2pay_deposit_result'),
            path('api/help2pay/deposit_success', help2pay.depositFrontResult, name = 'Help2pay_deposit_sucess'),
            path('api/help2pay/deposit_status', help2pay.depositStatus, name = 'Help2pay_deposit_status'),
        */}
        //console.log({formBody})
        return fetch(API_URL + 'accounting/api/help2pay/submit_payout', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': 'Token ' + token
            },
            body: formBody
        }).then(function (res) {
            if (res.ok) {
                return res.text();
            }

            currentComponent.props.callbackFromParent("error", "渠道维护中");

            throw new Error('Something went wrong.');

        }).then(function (data) {
            let newwin = window.open('');
            newwin.document.write(data);
            var timer = setInterval(function () {

                if (newwin.closed) {
                    clearInterval(timer);
                    const pd = JSON.stringify({
                        order_id: currentComponent.state.order_id,

                    });

                    return fetch(API_URL + 'accounting/api/help2pay/deposit_status', {
                        method: 'POST',
                        withCredentials: true,
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'Token ' + token
                        },
                        body: pd

                    }).then(function (res) {
                        return res.text();
                    }).then(function (data) {
                        //console.log(data)


                        if (data === '0') {

                            const body = JSON.stringify({
                                type: 'add',
                                username: this.state.data.username,
                                balance: this.state.amount,
                            });
                            //console.log(body)
                            axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                .then(res => {
                                    if (res.data === 'Failed') {
                                        currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                    } else if (res.data === 'The balance is not enough') {
                                        currentComponent.props.callbackFromParent("error", "Cannot deposit this amount.");
                                    } else {
                                        currentComponent.props.callbackFromParent("success", "Transaction completed.");
                                    }
                                });
                        } else {
                            currentComponent.props.callbackFromParent("error", '渠道维护中');
                        }
                    });
                }
            }, 1000);

        }).catch(function (err) {
            //console.log('Request failed', err);
            currentComponent.props.callbackFromParent("error", err.message);
            sendingLog(err);
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    cancelClicked() {
        var url = this.props.history.location.pathname
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    render() {
        const { classes } = this.props;
        const { selectedBankOption, bankAccountNumber, amount, currency, bankAccountHolder, withdrawpassword } = this.state;

        //const filteredOptions = bank_options.filter((o) => o.code === this.state.currencyCode.toUpperCase())
        const filteredOptions = bank_options.filter((o) => o.code === 2)
        console.log(filteredOptions)
        return (
            <div className={classes.root}>
                <Grid container className={classes.contentGrid} spacing={2}>
                    
                    <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className={classes.selectLabel}>{this.getLabel('bank-account')}</span>
                        <Divider style={{ marginTop: 10 }} />
                        <span className={classes.desc} style={{ marginTop: 10, marginbottom: 20 }}>{this.getLabel('vn-local-withdraw-text')}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <Select
                            className={classes.select}
                            value={selectedBankOption}
                            onChange={this.handleBankChange}
                            input={<BootstrapInput name="bank" id="bank-select" />}>
                            <MenuItem key='none' value='none' disabled>
                                <span className={classes.selectLabel}>{this.getLabel('choose-bank')}</span>
                            </MenuItem>
                            {
                                filteredOptions.map(bank => (
                                    <MenuItem key={bank.label} value={bank.value} >
                                        <div style={{ width: 100 }}>
                                            <img src={images.src + bank.img} alt="" height="20" /> 
                                            {/*className={classes.bankIcon} />
                                            */}
                                        </div>
                                        <span className={classes.selectLabel}>{bank.label}</span>
                                    </MenuItem>
                                ))
                            }
                            <MenuItem key='other' value='other'>
                                <div style={{ width: 100 }}>
                                </div>
                                <span className={classes.selectLabel}>{this.getLabel('other-label')}</span>
                            </MenuItem>
                        </Select>
                    </Grid>
                    {this.state.activeStep === 1 && <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.amountText}
                            placeholder={this.getLabel('vn-help2paypay-placeholder')}
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
                                    style: { textAlign: 'right' },
                                    currency: currency
                                },
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <span className={classes.label}>{this.getLabel('amount-label')}</span>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>}
                    
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('bank-holder')}
                            onChange={this.bankAccountHolderChanged.bind(this)}
                            value={bankAccountHolder}
                            error={this.state.bankAccountHolderFocused && bankAccountHolder.length === 0}
                            helperText={(this.state.bankAccountHolderFocused && bankAccountHolder.length === 0)}// ? this.getLabel('invalid-bank-number') : ' '}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    
                                    <InputAdornment position="end" >
                                    </InputAdornment>
                                    
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('bank-number')}
                            onChange={this.bankAccountNumberChanged.bind(this)}
                            value={bankAccountNumber}
                            error={this.state.bankAccountNumberFocused && bankAccountNumber.length === 0}
                            helperText={(this.state.bankAccountNumberFocused && bankAccountNumber.length === 0) ? this.getLabel('invalid-bank-number') : ' '}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end" >
                                        <img src={images.src + 'letou/info-icon.svg'} alt="" height="20" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.amountText}
                                placeholder={this.getLabel('help2pay-placeholder')}
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
                                        min: 950000,
                                        style: { textAlign: 'right' },
                                        currency: currency
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start" >
                                            <span className={classes.label}>{this.getLabel('amount-label')}</span>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            value={this.state.withdrawpassword}
                            placeholder={this.getLabel('password-text')}
                            onChange={this.withdrawpasswordChanged.bind(this)}
                            type={this.state.showwithdrawPassword ? '' : 'password'}
                            error={this.state.withdrawpasswordFocused && withdrawpassword.length === 0}
                            helperText={(this.state.withdrawpasswordFocused && withdrawpassword.length === 0)}// ? this.getLabel('invalid-bank-number') : ' '}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={this.state.withdrawpassword.length === 0}
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({ showwithdrawPassword: !state.showwithdrawPassword }))
                                                }}
                                            >
                                                {this.state.showwithdrawPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                ),
                            }}
                            //
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell} >
                        <Button variant="contained" className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >{this.getLabel('cancel-label')}</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.handleClick.bind(this)}
                            disabled={this.state.amountInvalid || this.state.selectedBankOption === 'none'}
                        >{this.getLabel('next-label')}</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Help2Pay))));