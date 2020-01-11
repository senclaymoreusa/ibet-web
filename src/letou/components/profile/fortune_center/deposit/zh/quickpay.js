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
import { withRouter } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { authCheckState, sendingLog, logout, postLogout, AUTH_RESULT_FAIL } from '../../../../../../actions';

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

const amounts = Object.freeze([100, 200, 500, 1000]);

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

class QuickPay extends Component {
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
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ data: res.data });
                        this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                        this.setState({ isFavorite: res.data.favorite_payment_method === 'quickpay' });
                    });
            }
        })
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ data: res.data });
                        this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                        this.setState({ isFavorite: res.data.favorite_payment_method === 'quickpay' });
                    });
            }
        })
    }

    amountChanged = e => {
        this.setState({ amountFocused: true });

        if (e.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(e.target.value)) {
                this.setState({ amount: e.target.value });
                this.setState({ amountInvalid: (parseFloat(e.target.value) < 100 || parseFloat(e.target.value) > 3000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    handleClick = event => {
        event.preventDefault();

        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });
        let userid = this.state.data.pk;
        let amount = this.state.amount;
        let user = this.state.data.pk;

        let postData = {
            amount: amount,
            userid: user,
            currency: '0',
            PayWay: '30', // pop up window / new tab
            method: '39', // 快捷支付
            RealName: this.state.data.last_name + this.state.data.first_name,
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
                // console.log(res);

                currentComponent.setState({ showLinearProgressBar: false });

                // return res.json();
                if (res.ok) {
                    return res.text();
                }
            })
            .then(function(data) {
                currentComponent.setState({ showLinearProgressBar: false });
                //console.log(data);
                // let url = data.url;
                // let order_id = data.order_id;
                // const mywin = window.open(url + "?cid=BRANDCQNGHUA3&oid=" + order_id);
                if(data.indexOf("其他错误|25") && data.includes("100309")){
                    currentComponent.props.callbackFromParent("error", "Something is wrong.");
                }else{
                    //console.log(data.StatusCode)
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
                                if(res.status == 200){
                                    return res.json();
                                }else{
                                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                }
                            })
                            .then(function(data) {
                                if(data.errorCode){
                                    // currentComponent.props.logout();
                                    currentComponent.props.postLogout();
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
                }
                
            })
            .catch(function (err) {  
                //console.log('Request failed', err);
                currentComponent.props.callbackFromParent("error", "Something is wrong.");
                sendingLog(err);});
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    backClicked() {
        var url = this.props.history.location.pathname
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    setAsFavorite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'quickpay' : null,
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
                            placeholder={"Deposit ¥100 - ¥3,000"}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(QuickPay))));