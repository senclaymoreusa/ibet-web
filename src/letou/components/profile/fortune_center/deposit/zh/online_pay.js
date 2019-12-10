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
import { authCheckState, sendingLog, logout, postLogout } from '../../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const bank_options = [
    { label: '工商银行', value: '1' },
    // { label: '建设银行', value: '2' },
    // { label: '农业银行', value: '3' },
    // { label: '招商银行', value: '4' },
    { label: '广发银行', value: '6' },
    { label: '中国银行', value: '7' },
    { label: '中国邮政储蓄银行', value: '9' },
    { label: '中信银行', value: '10' },
    // { label: '光大银行', value: '11' },
    { label: '民生银行', value: '12' },
    // { label: '兴业银行', value: '16' },
    // { label: '华夏银行', value: '17' },
    // { label: '平安银行', value: '23' },
    { label: '上海银行', value: '21' },
    //{ value: 'ACB', label: 'Asia Commercial Bank', img: 'letou/acb.png', code: 'VND' },
    //{ value: 'BIDV', label: 'Bank for Investment and Development of Vietnam', img: 'letou/bidv.png', code: 'VND' },
    //{ value: 'DAB', label: 'DongA Bank', img: 'letou/donga.png', code: 'VND' },
    //{ value: 'EXIM', label: 'Eximbank Vietnam', img: 'letou/eximbank.png', code: 'VND' },
    //{ value: 'SACOM', label: 'Sacom Bank', img: 'letou/sacombank.png', code: 'VND' },
    //{ value: 'TCB', label: 'Techcom Bank', img: 'letou/techcombank.png', code: 'VND' },
    //{ value: 'VCB', label: 'Vietcom Bank', img: 'letou/vietcombank.png', code: 'VND' },
    //{ value: 'VTB', label: 'Vietin Bank', img: 'letou/vietinbank.png', code: 'VND' },
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

const amounts = Object.freeze([20, 50, 100, 250]);

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
            prefix={currency}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

class OnlinePay extends Component {
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
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'onlinepay' });
            });
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'onlinepay' });
            });
    }

    amountChanged = e => {
        this.setState({ amountFocused: true });

        if (e.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^[0-9\b]+$/;

            if (re.test(e.target.value)) {
                this.setState({ amount: e.target.value, amountInvalid: false });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    handleClick() {
        let currentComponent = this;
        currentComponent.setState({ showLinearProgressBar: true });
        let userid = this.state.data.pk;
        var postData = {
            amount: this.state.amount,
            userid: this.state.data.pk,
            currency: '0',
            PayWay: '30', //online bank
            method: this.state.bankid, //银行卡
            RealName : this.state.realname,
        };

        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        return fetch(API_URL + 'accounting/api/asiapay/deposit', {
            method: 'POST',
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        })
            .then(function(res) {
                
                if(res.status == 200){
                    return res.text();
                }
                else{
                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                    return res.text();

                }
            })
            .then(function(data) {
                currentComponent.setState({ showLinearProgressBar: false });
                //console.log(data);
                // let url = data.url;
                // let order_id = data.order_id;
                // const mywin = window.open(
                //     url + '?cid=BRANDCQNGHUA3&oid=' + order_id
                // );
                let newwin = window.open('');
                newwin.document.write(data);
                var timer = setInterval(function() {
                    
                    if (newwin.closed) {
                        clearInterval(timer);
                        var postData = {
                            order_id: data.oid,
                            userid: 'n' + userid,
                            CmdType: '01'
                        };
                        var formBody = [];
                        for (var pd in postData) {
                            var encodedKey = encodeURIComponent(pd);
                            var encodedValue = encodeURIComponent(postData[pd]);
                            formBody.push(encodedKey + '=' + encodedValue);
                        }
                        formBody = formBody.join('&');

                        return fetch(
                            API_URL + 'accounting/api/asiapay/orderStatus',
                            {
                                method: 'POST',
                                headers: {
                                    'content-type':
                                        'application/x-www-form-urlencoded; charset=UTF-8'
                                },
                                body: formBody
                            }
                        )
                            .then(function(res) {
                                return res.json();
                            })
                            .then(function(data) {
                                if(data.errorCode){
                                    currentComponent.props.logout();
                                    postLogout();
                                    return;
                                }
                                //console.log(data.status);
                                if (data.status === '001') {
                                    //alert('Transaction is approved.');
                                    const body = JSON.stringify({
                                        type: 'add',
                                        username:
                                            currentComponent.state.data
                                                .username,
                                        balance: currentComponent.state.amount
                                    });
                                    //console.log(body);
                                    axios
                                        .post(
                                            API_URL +
                                                `users/api/addorwithdrawbalance/`,
                                            body,
                                            config
                                        )
                                        .then(res => {
                                            if (res.data === 'Failed') {
                                                //currentComponent.setState({ error: true });
                                                currentComponent.props.callbackFromParent(
                                                    'error',
                                                    'Transaction failed.'
                                                );
                                            } else if (
                                                res.data ===
                                                'The balance is not enough'
                                            ) {
                                                currentComponent.props.callbackFromParent(
                                                    'error',
                                                    'Cannot deposit this amount.'
                                                );
                                            } else {
                                                currentComponent.props.callbackFromParent(
                                                    'success',
                                                    currentComponent.state
                                                        .amount
                                                );
                                            }
                                        });
                                } else {
                                    currentComponent.props.callbackFromParent(
                                        'error',
                                        data.StatusMsg
                                    );
                                }
                            });
                    }
                }, 1000);
            }).catch(function (err) {  
            //console.log('Request failed', err);
            currentComponent.props.callbackFromParent("error", "Something is wrong.");
            sendingLog(err);
        });
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavorite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'onlinepay' : null,
        })
            .then(res => {
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
            })
            .catch(function (err) {
                sendingLog(err);
            });
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
                                        <div style={{ width: 100 }}>
                                            <img src={images.src + bank.img} alt="" className={classes.bankIcon} />
                                        </div>
                                        <span className={classes.selectLabel}>{bank.label}</span>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </Grid>
                    {amounts.map((x, i) => {
                        return (
                            <Grid item xs={3} key={i} style={{height:60}}>
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
                            placeholder={this.getLabel('bitcoin-placeholder')}
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
                            onClick={this.backClicked}
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(OnlinePay)));