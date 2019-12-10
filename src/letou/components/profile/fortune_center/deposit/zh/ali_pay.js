import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import clsx from 'clsx';
import getSymbolFromCurrency from 'currency-symbol-map'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { authCheckState, sendingLog, logout, postLogout } from '../../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

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

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496',
        },
    },
    checked: {},
})(props => <Checkbox {...props} />);

const amounts = Object.freeze([500, 800, 1000, 1500]);

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

class AliPay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            qaicash_error: false,
            qaicash_error_msg: "",
            live_check_amount: false,
            button_disable: true,
            value: "",
            size: 128,
            fgColor: '#000000',
            bgColor: '#ffffff',
            level: 'L',
            renderAs: 'svg',
            includeMargin: false,
            show_qrcode: false,
            bankid: '',

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
                this.setState({ isFavorite: res.data.favorite_payment_method === 'alipay' });
            });
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'alipay' });
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

        var postData = {
            "amount": this.state.amount,
            "user_id": this.state.data.pk,
            "currency": "0",
            "language": "zh-Hans",
            "method": "ALIPAY",
        }
        //console.log(this.state.amount)
        //console.log(this.state.data.pk)
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
            if(data.errorCode){
                currentComponent.props.logout();
                postLogout();
                return;
            }
            let redirectUrl = data.paymentPageSession.paymentPageUrl
            //console.log(redirectUrl)


            if (redirectUrl != null) {
                const mywin = window.open(redirectUrl, 'qaicash-Alipay');
                currentComponent.props.callbackFromParent("inprogress", {"trans_ID": data.depositTransaction.transactionId,"method": data.depositTransaction.depositMethod});
                var timer = setInterval(function () {
                    //console.log('checking..')
                    console.log("data",data)
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
                        console.log("postData",postData)

                        return fetch(API_URL + 'accounting/api/qaicash/get_transaction_status', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: formBody
                        }).then(function (res) {
                            return res.json();
                        }).then(function (data) {
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
                                            currentComponent.props.callbackFromParent("error", 'Transaction failed.');
                                        } else if (res.data === 'The balance is not enough') {
                                            currentComponent.props.callbackFromParent("error", 'Cannot deposit this amount.');
                                        } else {
                                            currentComponent.props.callbackFromParent('success', currentComponent.state.amount);
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
            }
        }).catch(function (err) {  
            
            currentComponent.props.callbackFromParent("error", "Something is wrong");
            sendingLog(err);
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavorite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'alipay' : null,
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
        const { isFavorite, amount, currency } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    {amounts.map((x, i) => {
                        return (
                            <Grid item xs={3} key={i}>
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
                            placeholder={this.getLabel('alipay-placeholder')}
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(AliPay)));