{/*
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, sendingLog, AUTH_RESULT_FAIL } from '../../../../../actions';
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

class CreateWithdraw extends Component {
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
        this.setState({ bankAccountHolder: event.target.value });
        this.setState({ bankAccountHolderFocused: true });
        //this.setState({ pinInvalid: (event.target.value.length < 2) });
    };

    withdrawpasswordChanged(event) {
        this.setState({ withdrawpasswordFocused: true });
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


                        if (data === '0') {

                            const body = JSON.stringify({
                                type: 'add',
                                username: this.state.data.username,
                                balance: this.state.amount,
                            });
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

        return (
            <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.labelDiv}>
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('new-password')}
                                    </span>
                                </div>
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('confirm-new-password')}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.valueDiv}>
                                <div className={classes.row}>
                                    <TextField className={classes.textField}
                                        value={this.state.newPassword}
                                        onChange={this.newPasswordChanged.bind(this)}
                                        type={this.state.showNewPassword ? '' : 'password'}
                                        //error={this.state.newPasswordInvalid}
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
                                <div className={classes.row} style={{ paddingTop: 20 }}>
                                    <Button variant="contained"
                                        onClick={currentComponent.setWithdrawalPassword}
                                        disabled={this.state.newPasswordInvalid
                                            || this.state.newPassword.length === 0
                                            || this.state.confirmPasswordInvalid
                                            || this.state.confirmPassword.length === 0}
                                        className={classes.nextButton}>{this.getLabel('create-password')}</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(CreateWithdraw))));
*/}