import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, sendingLog, AUTH_RESULT_FAIL,authUserUpdate } from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map'
import { Divider } from '@material-ui/core';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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

const bank_options = [
    { value: 'ACB', label: 'Asia Commercial Bank', img: 'letou/acb.png', code: 'VND' },
    { value: 'BIDV', label: 'Bank for Investment and Development of Vietnam', img: 'letou/bidv.png', code: 'VND' },
    { value: 'DAB', label: 'DongA Bank', img: 'letou/donga.png', code: 'VND' },
    { value: 'SACOM', label: 'Sacom Bank', img: 'letou/sacombank.png', code: 'VND' },
    { value: 'TCB', label: 'Techcom Bank', img: 'letou/techombank.svg', code: 'VND' },
    { value: 'VTB', label: 'Vietin Bank', img: 'letou/vietinbank.png', code: 'VND' },
    { value: 'VPB', label: 'VP Bank', img: 'letou/vp-bank.svg', code: 'VND' },
];

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

class VietnamLocalBank extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            amount: '',
            error: false,
            data: '',
            selectedBankOption: 'none',
            order_id: '',
            //"letou" + new Date().toISOString().replace(/-/g, '').replace('T', '').replace(/:/g, '').split('.')[0],

            amountFocused: false,
            amountInvalid: true,

            bankAccountNumber: '',
            password: '',

            activeStep: 0,
            currency: "VND",
            currencyCode: 'VND',
            isFavorite: false,
        };
    }
    /*
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
                //this.setState({ isFavorite: res.data.favorite_payment_method === 'vietnamhelp2pay' });
            });
        
    }
    */
    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }else{
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;
                
                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ data: res.data });
                        this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                        this.setState({ currencyCode: res.data.currency });
                        //this.setState({ isFavorite: res.data.favorite_payment_method === 'vietnamhelp2pay' });
                    });
            }
        })

      
       
    }

    amountChanged(event) {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                this.setState({ amount: event.target.value });
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 200000 || parseFloat(event.target.value) > 100000000) });
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

    handleBankChange = event => {
        this.setState({ selectedBankOption: event.target.value });
    };

    handleClick() {
        let currentComponent = this;
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        
        const body = JSON.stringify({
            type: '1',
            username: this.state.data.username,
            balance: this.state.amount,
            'bank':this.state.selectedBankOption,
            'bank_acc_no':this.state.bankAccountNumber,
            "real_name": this.state.bankAccountHolder,
            amount: this.state.amount,
            currency: 2,
        });
        return axios
            .post(
                API_URL + 'accounting/api/transactions/save_transaction',
                body,
                config
            )
            .then((res) => {
                if(res.statusText==="OK"){
                    return res.data;
                }else{
                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                }
            }).then(function (data) {
                let status = data.success;
                if (status) {
                    const sbody = JSON.stringify({
                        type: 'withdraw',
                        username: currentComponent.state.data.username,
                        balance: currentComponent.state.amount,
                    });
                    axios.post(API_URL + `users/api/addorwithdrawbalance/`, sbody, config)
                        .then(res => {
                            if (res.data === 'Failed') {
                                //this.setState({ error: true });
                                currentComponent.props.callbackFromParent("error", 'Transaction failed!');
                            } else if (res.data === 'The balance is not enough') {
                                //    // alert("cannot withdraw this amount")
                                currentComponent.props.callbackFromParent("error", 'Cannot withdraw this amount!');
    
                            } else {
                                currentComponent.props.authUserUpdate();    
                                currentComponent.props.callbackFromParent("success", 'Your balance is updated.');
    
                                // alert("your balance is updated")
                                // window.location.reload()
                            }
                        });
    
                } else {
                    currentComponent.props.callbackFromParent("error", "Somthing is wrong");
                    //this.setState({ qaicash_error: true, qaicash_error_msg: data.returnMessage });
                }
            }).catch(err => {
                currentComponent.props.callbackFromParent("error", "Something is wrong.");
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
        let currentComponent = this;
        currentComponent.props.callbackFromParent("");
    }

    render() {
        const { classes } = this.props;
        const { selectedBankOption, bankAccountNumber, amount, currency } = this.state;

        const filteredOptions = bank_options.filter((o) => o.code === "VND")

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
                                            <img src={images.src + bank.img} alt="" className={classes.bankIcon} />
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
                                placeholder={this.getLabel('vn-localbank-placeholder-withdraw')}
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
                                        <InputAdornment position="start" >
                                            <span className={classes.label}>{this.getLabel('amount-label')}</span>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    {/*}
                    <Grid item xs={6} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('password-text')}
                            onChange={this.bankAccountNumberChanged.bind(this)}
                            value={bankAccountNumber}
                            error={this.state.bankAccountNumberFocused && bankAccountNumber.length === 0}
                            helperText={(this.state.bankAccountNumberFocused && bankAccountNumber.length === 0) ? this.getLabel('invalid-bank-number') : ' '}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                //disabled={this.state.password.length === 0}
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({ showPassword: !state.showPassword }))
                                                }}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                        */}
                    <Grid item xs={6} className={classes.buttonCell} >
                        <Button variant="contained" className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >{this.getLabel('cancel-label')}</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.handleClick.bind(this)}
                            disabled={this.state.amountInvalid || this.state.selectedBankOption === 'none' || this.state.bankAccountNumber === ''}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, sendingLog, authUserUpdate })(VietnamLocalBank))));