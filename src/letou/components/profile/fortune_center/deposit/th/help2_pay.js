import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { images } from '../../../../../../util_config';
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
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

const bank_options = [
    //tailand
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
    { value: 'CIMBT', label: 'CIMB Thai', img: 'letou/cimb.png', code: 2 },
    { value: 'KNK', label: 'Kiatnakin Bank', img: 'letou/kiat.png', code: 2 },
    // vietnam
    { value: 'TCB', label: 'Techcom Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'SACOM', label: 'Sacom Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'VCB', label: 'Vietcom Bank', img: 'letou/kiat.png', code: 'VND' },
    {
        value: 'ACB',
        label: 'Asia Commercial Bank',
        img: 'letou/kiat.png',
        code: 'VND'
    },
    { value: 'DAB', label: 'DongA Bank', img: 'letou/kiat.png', code: 'VND' },
    { value: 'VTB', label: 'Vietin Bank', img: 'letou/kiat.png', code: 'VND' },
    {
        value: 'BIDV',
        label: 'Bank for Investment and Development of Vietnam',
        img: 'letou/kiat.png',
        code: 'VND'
    },
    {
        value: 'EXIM',
        label: 'Eximbank Vietnam',
        img: 'letou/kiat.png',
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

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496'
        }
    },
    checked: {}
})(props => <Checkbox {...props} />);

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

class Help2pay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            urlPath: '',
            amount: '',
            error: false,
            data: '',
            type: '',
            live_check_amount: false,
            button_disable: false,
            value: '',
            selectedCurrencyOption: 'none',
            selectedBankOption: 'none',
            order_id:
                'ibet' +
                new Date()
                    .toISOString()
                    .replace(/-/g, '')
                    .replace('T', '')
                    .replace(/:/g, '')
                    .split('.')[0],

            amountFocused: false,
            amountInvalid: true,

            currency: 'THB',
            currencyCode: 'THB',
            isFavorite: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                if (this.props.user) {
                    this.setState({
                        currency: getSymbolFromCurrency(
                            this.props.user.currency
                        ),
                        currencyCode: this.props.user.currency,
                        isFavorite:
                            this.props.user.favoriteDepositMethod ===
                            'help2pay'
                    });
                }
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
                        parseFloat(event.target.value) < 500 ||
                        parseFloat(event.target.value) > 500000
                });
            } else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    handleCurrencyChange = event => {
        this.setState({ selectedCurrencyOption: event.target.value });
        this.setState({ selectedBankOption: 'none' });
    };

    handleBankChange = event => {
        this.setState({ selectedBankOption: event.target.value });
    };

    handleClick = () => {
        let currentComponent = this;

        var postData = {
            amount: this.state.amount,
            user_id: this.props.user.userId,
            currency: '2',
            bank: this.state.selectedBankOption,
            language: 'en-Us'
        };
        
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        const token = localStorage.getItem('token');

        return fetch(API_URL + 'accounting/api/help2pay/deposit', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
                Authorization: 'Token ' + token
            },
            body: formBody
        })
            .then(function (res) {
                if (res.ok) {
                    return res.text();
                }

                currentComponent.props.callbackFromParent(
                    'error',
                    '渠道维护中'
                );

                throw new Error('Something went wrong.');
            })
            .then(function (data) {
                let newwin = window.open('');
                newwin.document.write(data);
            })
            .catch(function (err) {
                console.log('Request failed', err);
                currentComponent.props.callbackFromParent('error', err.message);
                sendingLog(err);
            });
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavourite(event) {
        axios
            .post(API_URL + `users/api/favorite-payment-setting/`, {
                user_id: this.props.user.userId,
                payment: event.target.checked ? 'help2pay' : null
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
        var url = this.props.history.location.pathname;
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    render() {
        const { classes } = this.props;
        const { selectedBankOption, isFavorite, amount, currency } = this.state;

        const filteredOptions = bank_options.filter(o => o.code === 2);
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
                            {filteredOptions.map(bank => (
                                <MenuItem key={bank.label} value={bank.value}>
                                    <div style={{ width: 100 }}>
                                        <img
                                            src={images.src + bank.img}
                                            alt=""
                                            height="20"
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
                    <Grid item xs={12} style={{ marginBottom: 50 }}>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <CustomCheckbox
                                    checked={isFavorite}
                                    value="checkedA"
                                    onClick={event => {
                                        this.setAsFavourite(event);
                                    }}
                                />
                            }
                            label={this.getLabel('add-favourite-deposit')}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >
                            {this.getLabel('cancel-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.actionButton}
                            onClick={this.handleClick}
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
    const { user } = state.auth;

    return {
        user: user
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, authUserUpdate })(
                Help2pay
            )
        )
    )
);
