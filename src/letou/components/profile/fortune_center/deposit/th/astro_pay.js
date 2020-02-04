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
import InputMask from 'react-input-mask';
import { authCheckState, AUTH_RESULT_FAIL, sendingLog, authUserUpdate } from '../../../../../../actions';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 30
        },
        contentGrid: {
            width: 430,
            minWidth: 430,
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
        continueButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8'
        },
        checkbox: {
            margin: theme.spacing()
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
            marginTop: 3
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
        detailText: {
            fontSize: 14,
            fontWeight: 500,
            width: '100%',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            padding: '7px 0px 10px 7px',
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        expireText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            padding: '7px 0px 10px 7px',
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        cvvText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            padding: '7px 0px 10px 7px',
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
    };
};

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496',
        },
    },
    checked: {},
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


class Astropay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            number: '',
            numberFocused: false,
            numberInvalid: true,

            expireDate: '',
            expireDateFocused: false,
            expireDateInvalid: true,

            cvv: '',
            cvvFocused: false,
            cvvInvalid: true,

            amount: '',
            amountFocused: false,
            amountInvalid: true,

            currency: '',
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
                        this.setState({ isFavorite: res.data.favorite_payment_method === 'astropay' });
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
                        this.setState({ isFavorite: res.data.favorite_payment_method === 'astropay' });
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
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 10 || parseFloat(event.target.value) > 500000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    numberChanged = event => {
        this.setState({ numberFocused: true });

        this.setState({
            number: event.target.value,
            numberFocused: true,
            numberInvalid: event.target.value.toString().length < 19
        });
    };

    expireDateChanged = event => {
        this.setState({ expireDateFocused: true });

        this.setState({
            expireDate: event.target.value,
            expireDateFocused: true
        });

        if (event.target.value.toString().length < 5) {
            this.setState({ expireDateInvalid: true });
        } else {
            let month = event.target.value.split('/')[0];
            let monthInt = parseInt(month);

            if (month === '00' || monthInt > 12)
                this.setState({ expireDateInvalid: true });
            else {
                let year = event.target.value.split('/')[1];
                let yearInt = parseInt(year);

                let expireDate = new Date();
                expireDate.setDate(1);
                expireDate.setMonth(monthInt - 1);
                expireDate.setFullYear(yearInt);

                let today = new Date();

                this.setState({ expireDateInvalid: expireDate <= today });
            }
        }
    };

    cvvChanged = event => {
        this.setState({ cvvFocused: true });

        this.setState({
            cvv: event.target.value,
            cvvFocused: true,
            cvvInvalid: event.target.value.length < 4 || !event.target.value
        });
    };

    handleClick = async event => {
        event.preventDefault();
        let currentComponent = this;

        const token = localStorage.getItem('token');

        if (!token) {
            console.log('no token -- user is not logged in');
        }
        config.headers['Authorization'] = `Token ${token}`;

        console.log('amount: ' + this.state.amount);
        console.log(this.state.data);
        let postData = {
            card_num: this.state.number.replace(/\s+/g, ''),
            card_code: this.state.cvv,
            exp_date: this.state.expireDate,
            amount: this.state.amount,
            currency: "THB"
        };

        var res = await axios.post(
            API_URL + 'accounting/api/astropay/capture_transaction',
            postData,
            config
        );

        if (res.data.response_msg.slice(0, 5) === '1|1|1') {
            const body = JSON.stringify({
                type: 'add',
                username: this.state.data.username || '',
                balance: this.state.amount
            });
            axios
                .post(API_URL + 'users/api/addorwithdrawbalance/', body, config)
                .then(res => {
                    if (res.data === 'Failed') {
                        currentComponent.props.callbackFromParent('error');
                    } else if (res.data === 'The balance is not enough') {
                        currentComponent.props.callbackFromParent('error', 'Cannot withdraw this amount');
                    } else {
                        currentComponent.props.authUserUpdate();
                        currentComponent.props.callbackFromParent("success");
                    }
                }).catch(function (err) {
                    currentComponent.props.callbackFromParent("error", "Something is wrong.");
                    sendingLog(err);
                });
        } else {
            sendingLog(res.data.response_msg.split('|')[3]);
            currentComponent.props.callbackFromParent("error", res.data.response_msg.split('|')[3]);
        }
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavourite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'astropay' : null,
        })
            .then(() => {
                this.props.authUserUpdate();
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
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
        const { amount, currency, isFavorite } = this.state;


        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    <Grid
                        item
                        xs={6}
                    >
                        <InputMask
                            mask="9999 9999 9999 9999"
                            maskChar={null}
                            onChange={this.numberChanged}
                            value={this.state.number}
                        >
                            {() => (
                                <TextField
                                    className={classes.detailText}
                                    placeholder={this.getLabel('card-number')}
                                    type="text"
                                    error={
                                        this.state.numberInvalid &&
                                        this.state.numberFocused
                                    }
                                    helperText={
                                        this.state.numberInvalid &&
                                            this.state.numberFocused
                                            ? this.getLabel('16-digit-number')
                                            : ' '
                                    }
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            )}
                        </InputMask>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.expireCell}
                    >
                        <InputMask
                            mask="99/9999"
                            maskChar={null}
                            onChange={this.expireDateChanged}
                            value={this.state.expireDate}
                            className={classes.expireText}
                        >
                            {() => (
                                <TextField
                                    className={classes.expireText}
                                    placeholder="MM/YYYY"
                                    type="text"
                                    error={
                                        this.state
                                            .expireDateInvalid &&
                                        this.state.expireDateFocused
                                    }
                                    helperText={
                                        this.state
                                            .expireDateInvalid &&
                                            this.state.expireDateFocused
                                            ? this.getLabel('date-invalid')
                                            : ' '
                                    }
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            )}
                        </InputMask>
                    </Grid>
                    <Grid item xs={3}>
                        <InputMask
                            mask="9999"
                            maskChar={null}
                            onChange={this.cvvChanged}
                            value={this.state.cvv}
                            className={classes.cvvText}
                        >
                            {() => (
                                <TextField
                                    className={classes.cvvText}
                                    placeholder="CVV"
                                    type="text"
                                    error={
                                        this.state.cvvInvalid &&
                                        this.state.cvvFocused
                                    }
                                    helperText={
                                        this.state.cvvInvalid &&
                                            this.state.cvvFocused
                                            ? this.getLabel('cvv-invalid')
                                            : ' '
                                    }
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            )}
                        </InputMask>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            onChange={this.amountChanged.bind(this)}
                            value={amount}
                            className={classes.amountText}
                            placeholder={this.getLabel('astropay-placeholder')}
                            error={this.state.amountInvalid && this.state.amountFocused}
                            helperText={this.state.amountInvalid && this.state.amountFocused ? this.getLabel('valid-amount') : ' '}
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
                            disabled={
                                this.state.amountInvalid ||
                                this.state.numberInvalid ||
                                this.state.expireDateInvalid ||
                                this.state.cvvInvalid
                            }
                        >{this.getLabel('next-label')}</Button>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)
    (withRouter(
        injectIntl(
            connect(
                mapStateToProps,
                { authCheckState, authUserUpdate }
            )(Astropay)
        ))
    );
