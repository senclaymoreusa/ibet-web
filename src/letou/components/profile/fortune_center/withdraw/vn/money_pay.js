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
    AUTH_RESULT_FAIL,
    authUserUpdate
} from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const vn_bank_options = [
    {
        value: 'ACB',
        label: 'Asia Commercial Bank',
        img: 'letou/acb.png',
        code: 'VND'
    },
    { value: 'AGB', label: 'Agribank', img: '', code: 'VND' },
    {
        value: 'BIDV',
        label: 'Bank for Investment and Development of Vietnam',
        img: 'letou/bidv.png',
        code: 'VND'
    },
    { value: 'DAB', label: 'DongA Bank', img: 'letou/donga.png', code: 'VND' },
    {
        value: 'EXIM',
        label: 'Eximbank Vietnam',
        img: 'letou/eximbank.png',
        code: 'VND'
    },
    {
        value: 'SACOM',
        label: 'Sacom Bank',
        img: 'letou/sacombank.png',
        code: 'VND'
    },
    { value: 'SCMB', label: 'SAIGON Bank', img: '', code: 'VND' },
    {
        value: 'TCB',
        label: 'Techcom Bank',
        img: 'letou/techcombank.png',
        code: 'VND'
    },
    {
        value: 'VIB',
        label: 'Vietnam International Bank',
        img: '',
        code: 'VND'
    },
    {
        value: 'VCB',
        label: 'Vietcom Bank',
        img: 'letou/vietcombank.png',
        code: 'VND'
    },
    {
        value: 'VTB',
        label: 'Vietin Bank',
        img: 'letou/vietinbank.png',
        code: 'VND'
    }
];

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
        width: 430
    },
    contentRow: {
        paddingLeft: 263,
        paddingRight: 262,
        paddingTop: 50,
        paddingBottom: 50
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 15,
        textAlign: 'center'
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
    checkbox: {
        margin: theme.spacing()
    },
    continueButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8'
    },
    backBankingButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8'
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
    },
    backButtonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    rememberCell: {
        paddingTop: 20
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1'
    },
    infoCell: {
        paddingTop: 15
    },
    infoRow: {
        display: 'block'
    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a'
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
        marginLeft: 3
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
        height: 44
    },
    middleButton: {
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44
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
    rightButton: {
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 88,
        height: 44
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
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
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
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
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
    bankIcon: {
        height: 20,
        maxWidth: 100
    },
    span: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#212121'
    },
    forgot: {
        textTransform: 'capitalize',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#53abe0'
    }
});

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

class MoneyPay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            amount: '',
            error: false,
            data: '',
            selectedBankOption: 'none',

            amountFocused: false,
            amountInvalid: true,

            bankAccountNumber: '',
            bankAccountHolder: '',
            withdrawPassword: '',

            activeStep: 0,
            currency: 'VND',
            currencyCode: 'VND',
            isFavorite: false
        };
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({
                        data: res.data,
                        // currency: getSymbolFromCurrency(res.data.currency),
                        // currencyCode: res.data.currency,
                        isFavorite:
                            res.data.favorite_payment_method ===
                            'vietnamhelp2pay'
                    });
                });
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
                this.setState({
                    amount: event.target.value,
                    amountInvalid:
                        parseFloat(event.target.value) < 300000 ||
                        parseFloat(event.target.value) > 300000000
                });
            } else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    handleBankChange = event => {
        this.setState({ selectedBankOption: event.target.value });
    };

    async handleClick() {
        let currentComponent = this;

        var postData = {
            amount: this.state.amount,
            username: this.state.data.username,
            toBankAccountName: this.state.bankAccountHolder,
            toBankAccountNumber: this.state.bankAccountNumber,
            withdrawPassword: this.state.withdrawPassword,
            bank: this.state.selectedBankOption,
            currency: 8
        };

        let res = await axios.post(
            API_URL + 'accounting/api/help2pay/submit_payout',
            postData,
            config
        );
        if (res.status === 200) {
            if (
                res.data.status_code &&
                (res.data.status_code === 101 || res.data.status_code === 107)
            ) {
                currentComponent.props.callbackFromParent(
                    'error',
                    res.data.message
                );
                return;
            }
            if (res.data.indexOf('000') !== -1) {
                currentComponent.props.callbackFromParent(
                    'success',
                    postData.amount
                );
                return;
            } else {
                let d = res.data;
                var errMsg = d.slice(
                    d.indexOf('<message>') + 9,
                    d.indexOf('</message>')
                );
                currentComponent.props.callbackFromParent('error', errMsg);
                return;
            }
        } else {
            currentComponent.props.callbackFromParent(
                'error',
                'Something went wrong, please try again later'
            );
            return;
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    bankAccountHolderChanged(event) {
        this.setState({
            bankAccountHolder: event.target.value,
            bankAccountHolderFocused: true
        });
    }

    bankAccountNumberChanged(event) {
        this.setState({ bankAccountNumberFocused: true });

        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ bankAccountNumber: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bankAccountNumber: '' });
    }

    cancelClicked() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
        let currentComponent = this;
        currentComponent.props.callbackFromParent('');
    }

    withdrawPasswordChanged(event) {
        this.setState({ withdrawPassword: event.target.value });
    }

    render() {
        const { classes } = this.props;
        const {
            selectedBankOption,
            bankAccountNumber,
            bankAccountHolder,
            amount,
            currency,
            withdrawPassword
        } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.contentGrid} spacing={2}>
                    <Grid item xs={12}>
                        <Select
                            className={classes.select}
                            value={selectedBankOption}
                            onChange={this.handleBankChange}
                            input={
                                <BootstrapInput name="bank" id="bank-select" />
                            }
                        >
                            <MenuItem key="none" value="none" disabled>
                                <span className={classes.selectLabel}>
                                    {this.getLabel('choose-bank')}
                                </span>
                            </MenuItem>
                            {vn_bank_options.map(bank => (
                                <MenuItem key={bank.label} value={bank.value}>
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
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('bank-holder')}
                            onChange={this.bankAccountHolderChanged.bind(this)}
                            value={bankAccountHolder}
                            error={
                                this.state.bankAccountHolderFocused &&
                                bankAccountHolder.length === 0
                            }
                            helperText={
                                this.state.bankAccountHolderFocused &&
                                bankAccountHolder.length === 0
                            } // ? this.getLabel('invalid-bank-number') : ' '}
                            InputProps={{
                                disableUnderline: true
                                // endAdornment: (

                                //     <InputAdornment position="end" >
                                //     </InputAdornment>

                                // ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('bank-number')}
                            onChange={this.bankAccountNumberChanged.bind(this)}
                            value={bankAccountNumber}
                            error={
                                this.state.bankAccountNumberFocused &&
                                bankAccountNumber.length === 0
                            }
                            helperText={
                                this.state.bankAccountNumberFocused &&
                                bankAccountNumber.length === 0
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
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.amountText}
                            placeholder={this.getLabel(
                                'vn-moneypay-placeholder-withdraw'
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
                                    : ''
                            }
                            InputProps={{
                                disableUnderline: true,
                                inputComponent: NumberFormatCustom,
                                inputProps: {
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
                        style={{
                            textAlign: 'right',
                            paddingTop: 0,
                            marginTop: -10
                        }}
                    >
                        {/* <span className={classes.span}>
                        {this.getLabel('moneypay-daily-limit')}
                    </span> */}
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('withdrawal-password')}
                            value={withdrawPassword}
                            onChange={this.withdrawPasswordChanged.bind(this)}
                            type={
                                this.state.showWithdrawPassword
                                    ? ''
                                    : 'password'
                            }
                            // error={this.state.withdrawPasswordInvalid}
                            // helperText={this.state.withdrawPasswordInvalid ? withdrawPasswordErrorMessage : ''}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            size="small"
                                            disabled={
                                                this.state.withdrawPassword
                                                    .length === 0
                                            }
                                            aria-label="Toggle password visibility"
                                            onClick={() => {
                                                this.setState(state => ({
                                                    showWithdrawPassword: !state.showWithdrawPassword
                                                }));
                                            }}
                                        >
                                            {this.state.showNewPassword ? (
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
                    {/* <Grid item xs={12} style={{ paddingTop: 0, marginBottom: 30 }}>
                        <Button className={classes.forgot}>
                            {this.getLabel('forgot-password')}
                        </Button>
                    </Grid> */}
                    <Grid
                        item
                        xs={6}
                        className={classes.buttonCell}
                        style={{ marginTop: 30 }}
                    >
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >
                            {this.getLabel('cancel-label')}
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className={classes.buttonCell}
                        style={{ marginTop: 30 }}
                    >
                        <Button
                            className={classes.actionButton}
                            onClick={this.handleClick.bind(this)}
                            disabled={
                                this.state.amountInvalid ||
                                this.state.selectedBankOption === 'none'
                            }
                        >
                            {this.getLabel('next-label')}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(connect(mapStateToProps, { authCheckState })(MoneyPay))
    )
);
