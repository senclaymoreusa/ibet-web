/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../../util_config';
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
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

const crypto = require('crypto'),
    API_URL = process.env.REACT_APP_DEVELOP_API_URL,
    CIRCLEPAY_DEPOSIT_URL = 'https://gateway.circlepay.ph/payment/',
    USER_CODE = 297802061195;

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingBottom: 20
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
    infoGrid: {
        width: 430,
        border: '1px solid #e4e4e4',
        borderRadius: 3,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        marginBottom: 20
    },
    info: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#212121'
    },
    fee: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.83,
        letterSpacing: -0.17,
        color: '#a1a1a1'
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

class CirclePay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            amount: '',
            error: false,
            data: '',
            type: '',
            value: '',
            selectedCurrencyOption: 'none',
            selectedBankOption: 'none',
            order_id:
                'letou' +
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
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ data: res.data });
                    this.setState({
                        currency: getSymbolFromCurrency(res.data.currency)
                    });
                    this.setState({ currencyCode: res.data.currency });
                    this.setState({
                        isFavorite:
                            res.data.favorite_payment_method === 'circlepay'
                    });
                });
            }
        });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ data: res.data });
                    this.setState({
                        currency: getSymbolFromCurrency(res.data.currency)
                    });
                    this.setState({ currencyCode: res.data.currency });
                    this.setState({
                        isFavorite:
                            res.data.favorite_payment_method === 'circlepay'
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
                this.setState({ amount: event.target.value });
                this.setState({
                    amountInvalid:
                        parseFloat(event.target.value) < 20000 ||
                        parseFloat(event.target.value) > 100000000
                });
            } else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    handleClick(event) {
        event.preventDefault();

        let currentComponent = this;

        const { data: userData } = this.state;
        const { amount } = this.state;
        const token = localStorage.getItem('token');

        if (!token) {
            console.log('no token -- user is not logged in');
        }
        config.headers['Authorization'] = `Token ${token}`;

        let currDate = new Date();
        let month =
            currDate.getMonth() + 1 < 10
                ? '0' + (currDate.getMonth() + 1)
                : currDate.getMonth() + 1;
        let date =
            currDate.getDate() < 10
                ? '0' + currDate.getDate()
                : currDate.getDate();
        let transId =
            userData.username +
            currDate.getFullYear() +
            month +
            date +
            'T' +
            currDate.getHours() +
            currDate.getMinutes() +
            currDate.getSeconds();

        const secret = 'Kiy4O3IAvPpHxXJ9ht1mBfZs';

        let secretMsg = 'jennyto@ibet.com' + transId + amount;

        const hash = crypto
            .createHmac('sha256', secret)
            .update(secretMsg)
            .digest('hex');

        let postURL =
            CIRCLEPAY_DEPOSIT_URL +
            USER_CODE +
            '/?partner_tran_id=' +
            transId +
            '&amount=' +
            amount +
            '&username=' +
            userData.username +
            '&token=' +
            hash;

        let postData = {
            amount: amount,
            trans_id: transId
        };

        axios
            .post(
                API_URL + 'accounting/api/circlepay/deposit',
                postData,
                config
            )
            .then(res => {
                if (res.status !== 200) {
                    this.setState({
                        error: true,
                        error_msg: JSON.stringify(res)
                    });
                    currentComponent.props.callbackFromParent(
                        'error',
                        JSON.stringify(res)
                    );
                } else {
                    currentComponent.props.authUserUpdate();

                    if (res.data.errorCode) {
                        currentComponent.props.postLogout();
                        return;
                    }
                    window.open(postURL);
                }
            })
            .catch(function(err) {
                currentComponent.props.callbackFromParent(
                    'error',
                    'Something is wrong.'
                );
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavorite(event) {
        axios
            .post(API_URL + `users/api/favorite-payment-setting/`, {
                user_id: this.state.data.pk,
                payment: event.target.checked ? 'circlepay' : null
            })
            .then(() => {
                this.props.authUserUpdate();
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
            })
            .catch(function(err) {
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
        const { isFavorite, amount, currency } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.infoGrid}>
                    <Grid item xs={12} className={classes.infoRow}>
                        <span className={classes.info}>
                            {this.getLabel('bank-transfer')}
                        </span>
                        <span className={classes.fee}>
                            {this.getLabel('bank-fee')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.infoRow}>
                        <span className={classes.info}>
                            {this.getLabel('internet-banking')}
                        </span>
                        <span className={classes.fee}>
                            {this.getLabel('internet-fee')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.infoRow}>
                        <span className={classes.info}>
                            {this.getLabel('momo-pay')}
                        </span>
                        <span className={classes.fee}>
                            {this.getLabel('momo-fee')}
                        </span>
                    </Grid>
                </Grid>

                <Grid container className={classes.contentGrid}>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.amountText}
                            placeholder={this.getLabel('circlepay-placeholder')}
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
                                        this.setAsFavorite(event);
                                    }}
                                />
                            }
                            label={this.getLabel('add-favourite-deposit')}
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.contentGrid} spacing={2}>
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
                            onClick={this.handleClick.bind(this)}
                            disabled={this.state.amountInvalid}
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
        injectIntl(
            connect(mapStateToProps, { authCheckState, authUserUpdate })(
                CirclePay
            )
        )
    )
);
