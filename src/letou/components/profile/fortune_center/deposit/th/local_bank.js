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
import getSymbolFromCurrency from 'currency-symbol-map'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { authCheckState, sendingLog, AUTH_RESULT_FAIL, authUserUpdate } from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 15,
            paddingRight: 15
        }
    },
    contentGrid: {
        width: '100%',
        maxWidth: 430
    },
    contentRow: {
        paddingTop: 50,
        paddingBottom: 50,
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
        marginBottom: 3
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
    select: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        maxHeight: 44,
        width: '100%',
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
});

const bank_options = [
    //tailand
    { value: 'KKR', label: 'Kasikorn Bank (K-Bank)', img: 'letou/kasikornbank.png', code: 'THB' },
    { value: 'SCB', label: 'Siam Commercial Bank', img: 'letou/scb.png', code: 'THB' },
    { value: 'KTB', label: 'Krung Thai Bank', img: 'letou/krungthai.png', code: 'THB' },
    { value: 'BOA', label: 'Bank of Ayudhya (Krungsri)', img: 'letou/bay.png', code: 'THB' },
    { value: 'TMB', label: 'TMB Bank Public Company Limited', img: 'letou/tmb.png', code: 'THB' },
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

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496',
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


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

class ThaiLocalBank extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            name: '',
            bankAccountNumber: '',
            bank: 'none',

            amountFocused: false,
            amountInvalid: true,

            isFavorite: false,
        };
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                if (this.props.user) {
                    this.setState({
                        currency: getSymbolFromCurrency(
                            this.props.user.currency
                        ),
                        isFavorite:
                            this.props.user.favoriteDepositMethod ===
                            'thlocalbank'
                    });
                }
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
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 200 || parseFloat(event.target.value) > 950000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    bankAccountNumberChanged(event) {
        this.setState({ bankAccountNumberFocused: true });

        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ bankAccountNumber: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bankAccountNumber: '' });
    };

    handleClick = () => {
        let currentComponent = this;

        let userid = this.props.user.userId;
        var postData = {
            "amount": this.state.amount,
            "userid": this.props.user.userId,
            "currency": "0",
            "PayWay": "30", //在线支付
            "method": "38", //wechat
        }
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return fetch(API_URL + 'accounting/api/asiapay/deposit', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then(function (res) {

            return res.json();

        }).then(function (data) {
            let qrurl = data.qr;
            if (qrurl != null) {
                const mywin = window.open(qrurl, 'asiapay-wechatpay')
                var timer = setInterval(function () {

                    if (mywin.closed) {
                        clearInterval(timer);
                        var postData = {
                            "order_id": data.oid,
                            "userid": "n" + userid,
                            "CmdType": "01",
                        }
                        var formBody = [];
                        for (var pd in postData) {
                            var encodedKey = encodeURIComponent(pd);
                            var encodedValue = encodeURIComponent(postData[pd]);
                            formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");

                        return fetch(API_URL + 'accounting/api/asiapay/orderStatus', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: formBody
                        }).then(function (res) {
                            return res.json();
                        }).then(function (data) {
                            if (data.status === "001") {
                                const body = JSON.stringify({
                                    type: 'add',
                                    username: currentComponent.state.data.username,
                                    balance: currentComponent.state.amount,
                                });

                                axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                    .then(res => {
                                        if (res.data === 'Failed') {
                                            currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                        } else if (res.data === "The balance is not enough") {
                                            currentComponent.props.callbackFromParent("error", "Cannot deposit this amount.");
                                        } else {
                                            currentComponent.props.authUserUpdate();
                                            currentComponent.props.callbackFromParent("success", currentComponent.state.amount);
                                        }
                                    });
                            } else {
                                currentComponent.props.callbackFromParent("error", data.StatusMsg);
                            }
                        });
                    }
                }, 1000);

            } else {
                currentComponent.props.callbackFromParent("error", data.StatusMsg);
            }

        }).catch(function (err) {
            currentComponent.props.callbackFromParent("error", err.message);
            sendingLog(err);
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavourite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.props.user.userId,
            payment: event.target.checked ? 'thlocalbank' : null,
        })
            .then(() => {
                this.props.authUserUpdate();
                this.setState({ isFavorite: !this.state.isFavorite });
             })
            .catch(function (err) {
                sendingLog(err);
            });
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
        const { amount, currency, isFavorite, name, bankAccountNumber, bank } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('name-label')}
                            onChange={(event) => {
                                this.setState({ nameFocused: true });
                                this.setState({ name: event.target.value });
                            }}
                            value={name}
                            error={this.state.nameFocused && name.length === 0}
                            helperText={(this.state.nameFocused && name.length === 0) ? this.getLabel('invalid-name') : ' '}
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
                    <Grid item xs={12}>
                        <Select
                            className={classes.select}
                            placeholder={this.getLabel('bank-number')}
                            value={bank}
                            onChange={(event) => {
                                this.setState({ bank: event.target.value });
                            }}
                            input={<BootstrapInput name="bank" id="bank-select" />}>
                            <MenuItem key='none' value='none' disabled>
                                <span >{this.getLabel('choose-bank')}</span>
                            </MenuItem>
                            {
                                bank_options.map(bank => (
                                    <MenuItem key={bank.label} value={bank.value} >
                                        <div style={{ width: 100 }}>
                                            <img src={images.src + bank.img} alt="" height="20" />
                                        </div>
                                        <span >{bank.label}</span>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('thai-localbank-placeholder')}
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
                    <Grid item xs={12} style={{ marginBottom: 50 }}>
                        <FormControlLabel className={classes.checkbox}
                            control={
                                <CustomCheckbox checked={isFavorite} value="checkedA" onClick={(event) => { this.setAsFavourite(event) }} />
                            }
                            label={this.getLabel('add-favourite-deposit')}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button variant="contained" className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >{this.getLabel('cancel-label')}</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.handleClick}
                            disabled={this.state.amountInvalid || this.state.selectedBankOption === 'none'}
                        >{this.getLabel('next-label')}</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;

    return {
        user: user
    };
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, authUserUpdate })(ThaiLocalBank))));