import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import getSymbolFromCurrency from 'currency-symbol-map'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { authCheckState, sendingLog, logout, postLogout, AUTH_RESULT_FAIL } from '../../../../../../actions';
import { withRouter } from 'react-router-dom';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const bank_options = [
    { value: 'OOO6CN', label: 'China UnionPay' },
    { value: 'ABOCCN', label: 'Agricultural Bank of China' },
    { value: 'BEASCN', label: 'Bank of East Asia' },
    { value: 'BJCNCN', label: 'Bank of Beijing' },
    { value: 'BKCHCN', label: 'Bank of China' },
    { value: 'BKNBCN', label: 'Bank of Ningbo' },
    { value: 'BKSHCN', label: 'Bank Of Hebei' },
    { value: 'BOSHCN', label: 'Bank of Shanghai' },
    { value: 'BRCBCN', label: 'Beijing Rural Commercial Bank' },
    { value: 'CBOCCN', label: 'Bank of Chengdu' },
    { value: 'CHBHCN', label: 'China Bohai Bank' },
    { value: 'CIBKCN', label: 'China Citic Bank' },
    { value: 'CMBCCN', label: 'China Merchants Bank' },
    { value: 'CN01CN', label: 'Zhongshan Rural Credit Union' },
    { value: 'CN03CN', label: 'Yao Credit Cooperative Union' },
    { value: 'COMMCN', label: 'Bank of Communication' },
    { value: 'CZCBCN', label: 'Zhejiang Chouzhou commercial bank' },
    { value: 'EVSOCN', label: 'China Everbright Bank' },
    { value: 'FJIBCN', label: 'Industrial Bank Co Ltd' },
    { value: 'GDBKCN', label: 'China Guangfa Bank' },
    { value: 'GNXSCN', label: 'Guangzhou Rural Credit Cooperatives' },
    { value: 'GZCBCN', label: 'Bank of Guangzhou' },
    { value: 'GZRCCN', label: 'GuangZhou Commercial Bank' },
    { value: 'HFCBCN', label: 'Huishang Bank' },
    { value: 'HXBKCN', label: 'Huaxia Bank' },
    { value: 'HZCBCN', label: 'Hangzhou Bank' },
    { value: 'ICBKCN', label: 'Industrial and Commercial Bank of China' },
    { value: 'JSHBCN', label: 'Jinshang Bank' },
    { value: 'MSBCCN', label: 'China Minsheng Bank' },
    { value: 'NJCBCN', label: 'Bank of Nanjing' },
    { value: 'NYCBCN', label: 'Nanyang Commercial Bank' },
    { value: 'PCBCCN', label: 'China Construction Bank' },
    { value: 'PSBCCN', label: 'Postal Savings Bank of China' },
    { value: 'RCCSCN', label: 'Shunde Rural Commercial Bank' },
    { value: 'SHRCCN', label: 'Shanghai Rural Commercial Bank' },
    { value: 'SPDBCN', label: 'Shanghai Pudong Development Bank' },
    { value: 'SZCBCN', label: 'Ping An Bank' },
    { value: 'SZDBCN', label: 'Shenzhen Development Bank' },
    { value: 'TCCBCN', label: 'Bank of Tianjin' },
    { value: 'WHCBCN', label: 'Hankou Bank' },
    { value: 'WZCBCN', label: 'Bank of Wenzhou' },
    { value: 'ZJCBCN', label: 'China Zheshang Bank' },
    { value: 'ZJTLCN', label: 'Zhejiang Tailong Commercial Bank' },
    { value: 'PBOCCN', label: 'People’s Bank of China' },
    { value: 'HSBCCN', label: 'HSBC' },
    { value: 'DGCBCN', label: 'Bank of Dongguang' },

];

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contentGrid: {
        width: 430,
    },
    contentRow: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    actionButton: {
        width: 324,
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
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
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
    button: {
        borderRadius: 4,
        backgroundColor: '#f28f22',
        marginBottom: 15,
        width: 90,
        height: 44,
        fontSize: 15,
        color: '#fff',
        opacity: 0.5,
        "&:hover": {
            backgroundColor: '#f28f22',
            opacity: 1,
        },
        "&:focus": {
            backgroundColor: '#f28f22',
            opacity: 1
        },
    },
    selected: {
        opacity: 1,
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
    bankIcon: {
        height: 20,
        maxWidth: 100
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
    amountRow: {
        height: 40,
        borderBottom: '4px solid #5e5e5e'
    },
    amountRightRow: {
        height: 40,
        textAlign: 'right',
        borderBottom: '4px solid #5e5e5e'
    },
    checkbox: {
        margin: theme.spacing()
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

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496',
        },
    },
    checked: {},
})(props => <Checkbox {...props} />);

const amounts = Object.freeze([100, 500, 1000, 10000]);

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

class BankTransfer extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            bank: 'none',
            amountFocused: false,
            amountInvalid: true,

            isFavorite: false,
        };
    }

    componentWillReceiveProps(props) {
        this._isMounted = true;

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        data: res.data,
                        currency: getSymbolFromCurrency(res.data.currency),
                        isFavorite: res.data.favorite_payment_method === 'chinabanktransfer'
                    });
                }
            });
    }

    componentDidMount() {
        this._isMounted = true;
        
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        data: res.data,
                        currency: getSymbolFromCurrency(res.data.currency),
                        isFavorite: res.data.favorite_payment_method === 'chinabanktransfer'
                    });
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    amountChanged = e => {
        this.setState({ amountFocused: true });

        if (e.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(e.target.value)) {
                this.setState({ amount: e.target.value });
                this.setState({ amountInvalid: (parseFloat(e.target.value) < 100 || parseFloat(e.target.value) > 10000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    handleBankChange = event => {
        this.setState({ bank: event.target.value });
    };

    handleClick() {
        {/*
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('no token -- user is not logged in');
        }
        config.headers['Authorization'] = `Token ${token}`;
        let userid = this.state.data.pk;
        var postData = {
            amount: this.state.amount,
            userid: userid,
            currency: 7,
            real_name: this.state.name,
            bank_acc_no: this.state.bankAccountNumber,
            bank: this.state.bank,
            type: 0 // 0 = deposit
        };
        return axios
            .post(
                API_URL + 'accounting/api/transactions/save_transaction',
                postData,
                config
            )
            .then((res, err) => {
                console.log(res);
            });
       */}
        {
            let currentComponent = this;

            currentComponent.setState({ showLinearProgressBar: true });

            var postData = {
                "amount": this.state.amount,
                "user_id": this.state.data.pk,
                "currency": "0",
                "language": "zh-Hans",
                "method": "BANK_TRANSFER",
                "bank": this.state.selectedBankOption,
            }
            //console.log(this.state.amount)
            //console.log(currentComponent.state.data.username)
            var formBody = [];
            for (var pd in postData) {
                var encodedKey = encodeURIComponent(pd);
                var encodedValue = encodeURIComponent(postData[pd]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            return fetch(API_URL + 'accounting/api/qaicash/submit_deposit', {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: formBody
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                let redirectUrl = data.paymentPageSession.paymentPageUrl
                //console.log(redirectUrl)


                if (redirectUrl != null) {
                    const mywin = window.open(redirectUrl, 'qaicash_BT');
                    var timer = setInterval(function () {
                        //console.log('checking..')
                        if (mywin.closed) {
                            clearInterval(timer);
                            var postData = {
                                "trans_id": data.paymentPageSession.orderId
                            }
                            var formBody = [];
                            for (var pd in postData) {
                                var encodedKey = encodeURIComponent(pd);
                                var encodedValue = encodeURIComponent(postData[pd]);
                                formBody.push(encodedKey + "=" + encodedValue);
                            }
                            formBody = formBody.join("&");

                            return fetch(API_URL + 'accounting/api/qaicash/get_transaction_status', {
                                method: "POST",
                                headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                },
                                body: formBody
                            }).then(function (res) {
                                return res.json();
                            }).then(function (data) {
                                if (data.errorCode) {
                                    currentComponent.props.postLogout();
                                    // postLogout();
                                    return;
                                }
                                //console.log(data.status)
                                if (data.status === 0) {
                                    //alert('Transaction is approved.');
                                    const body = JSON.stringify({
                                        type: 'add',
                                        username: currentComponent.state.data.username,
                                        balance: currentComponent.state.amount,
                                    });
                                    //console.log(body)
                                    axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                        .then(res => {
                                            if (res.data === 'Failed') {
                                                //currentComponent.setState({ error: true });
                                                currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                            } else if (res.data === "The balance is not enough") {
                                                currentComponent.props.callbackFromParent("error", "Cannot deposit this amount.");
                                            } else {
                                                currentComponent.props.callbackFromParent("success", currentComponent.state.amount);
                                            }
                                        });
                                } else {
                                    currentComponent.props.callbackFromParent("error", "Transaction is not approved.");
                                }
                            });
                        }
                    }, 1000);
                } else {
                    currentComponent.setState({ showLinearProgressBar: false });
                    currentComponent.props.callbackFromParent("error", data.returnMessage);
                    //this.setState({ qaicash_error: true, qaicash_error_msg: data.returnMessage });
                }
            }).catch(function (err) {
                //console.log('Request failed', err);
                currentComponent.props.callbackFromParent("error", "Something is wrong");
                sendingLog(err);
            });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavorite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'chinabanktransfer' : null,
        })
            .then(res => {
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
            })
            .catch(function (err) {
                sendingLog(err);
            });
    }

    backClicked() {
        var url = this.props.history.location.pathname
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    render() {
        const { classes } = this.props;
        const { isFavorite, amount, currency, bank } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    <Grid item xs={12} className={classes.detailRow}>
                        <Select
                            className={classes.select}
                            value={bank}
                            onChange={(event) => {
                                this.setState({ bank: event.target.value });
                            }}
                            input={<BootstrapInput name="bank" id="bank-select" />}>
                            <MenuItem key='none' value='none' disabled>
                                <span className={classes.selectLabel}>{this.getLabel('choose-bank')}</span>
                            </MenuItem>
                            {
                                bank_options.map(bank => (

                                    <MenuItem key={bank.label} value={bank.value} >
                                        {/*
                                        <div style={{ width: 100 }}>
                                            <img src={images.src + bank.img} alt="" className={classes.bankIcon} />
                                        </div>
                                        */}
                                        <span className={classes.selectLabel}>{bank.label}</span>
                                    </MenuItem>

                                ))
                            }
                        </Select>
                    </Grid>
                    {amounts.map((x, i) => {
                        return (
                            <Grid item xs={3} key={i} style={{ height: 60 }}>
                                <Button
                                    className={clsx({
                                        [classes.button]: true,
                                        [classes.selected]: (x === amount)
                                    })}

                                    onClick={() =>
                                        this.setState({
                                            amount: x,
                                            amountInvalid: false,
                                            amountFocused: false
                                        })}>
                                    {x}
                                </Button>
                            </Grid>
                        );
                    })}
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.amountText}
                            placeholder={"Deposit ¥100 - ¥10,000"}
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
                                    step: 1,
                                    min: 10,
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
                    <Grid item xs={12}>
                        <FormControlLabel className={classes.checkbox}
                            control={
                                <CustomCheckbox checked={isFavorite} value="checkedA" onClick={(event) => { this.setAsFavorite(event) }} />
                            }
                            label={this.getLabel('add-favourite-deposit')}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.handleClick.bind(this)}
                            disabled={this.state.amountInvalid}
                        >{this.getLabel('deposit-label')}</Button>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.backClicked.bind(this)}
                        >{this.getLabel('back-banking')}</Button>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(BankTransfer))));