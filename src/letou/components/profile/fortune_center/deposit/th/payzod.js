import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import { authCheckState, sendingLog } from '../../../../../../actions';
import getSymbolFromCurrency from 'currency-symbol-map'
import clsx from 'clsx';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

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
    qrGrid: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    contentRow: {
        paddingTop: 50,
        paddingBottom: 50,
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
    descCell: {
        height: 88,
        borderBottom: '1px solid #eff3f4'
    },
    desc: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: -0.06,
        color: '#212121',
    },
    labelQr: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: -0.06,
        color: '#cdcbcc',
    },
    value: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: -0.06,
        color: '#212121',
    },
    timer: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: -0.06,
        color: '#fa2054',
    },
    qrTittleCell: {
        height: 62,
        backgroundColor: '#f28f22',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 800,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.11,
        color: '#ffffff',
    },
    qrDiv: {
        width: 200,
        height: 148,
        backgroundColor: '#e4e4e4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    qrCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        paddingTop: 5,
        paddingBottom: 5,
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


class Payzod extends Component {
    timeIntervalID = null;

    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            amountFocused: false,
            amountInvalid: true,
            currency: 'USD',
            orderNumber: '',
            isFavorite: false,
            activeStep: 0,
            timeout: null,
            timeIntervalID: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(props) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers["Authorization"] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ data: res.data });
                    this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                    this.setState({ isFavorite: res.data.favorite_payment_method === 'payzod' });
                });
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers["Authorization"] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currency: getSymbolFromCurrency(res.data.currency) });
                this.setState({ isFavorite: res.data.favorite_payment_method === 'payzod' });
            });
        }
    }

    amountChanged(event) {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                this.setState({ amount: event.target.value });
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 500 || parseFloat(event.target.value) > 500000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    handleClick = async event => {
        event.preventDefault();

        let currentComponent = this;

        const { amount } = this.state;
        const token = localStorage.getItem('token');

        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        console.log("amount: " + amount);

        let postData = {
            "amount": amount
        };

        var res = await axios
            .post(API_URL + 'accounting/api/payzod/deposit', postData, config)
            .catch(err => {
                console.log(err.response);
                sendingLog(err);
            });

        if (res.data) {
            this.setState({ qrCode: res.data });

            let time = new Date();
            time.setHours(time.getHours() + 3);

            this.setState({ timeout: time });

            this.timeIntervalID = setInterval(() => {
                if (this.state.timeout < new Date()) {
                    clearInterval(this.timeIntervalID);
                    this.timeIntervalID = null;

                    currentComponent.props.callbackFromParent(
                        'error',
                        'Transaction failed due to timeout!'
                    );
                }
            }, 1000);

            axios.get(API_URL + 'accounting/api/transactions/get_transactions?userid=' + currentComponent.state.data.username, config)
                .then(res => {
                    console.log(res)
                    if (res.data.results) {
                        let transaction = res.data.results.filter((o) => o.amount === this.state.amount && o.method.includes('Payzod'))[0];
                        this.setState({ orderNumber: transaction.transaction_id });
                    }
                })
                .catch(err => {
                    sendingLog(err);
                });
        }

        this.setState({ activeStep: 1 });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavourite(event) {
        axios.post(API_URL + `users/api/favorite-payment-setting/`, {
            user_id: this.state.data.pk,
            payment: event.target.checked ? 'payzod' : null,
        })
            .then(res => {
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
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

    getContent() {
        const { classes } = this.props;
        const { activeStep, isFavorite, amount, currency, qrCode, orderNumber, timeout } = this.state;


        switch (activeStep) {
            case 0:
                return (
                    <Grid container spacing={2} className={classes.contentGrid} >
                        <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.amountText}
                                placeholder={this.getLabel('payzod-placeholder')}
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
                                        min: 950000,
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
                                disabled={this.state.amountInvalid}
                            >{this.getLabel('next-label')}</Button>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container spacing={2} className={classes.qrGrid} >
                        <Grid item xs={6} >
                            <Grid container style={{ width: '100%' }}>
                                <Grid item xs={12} className={classes.descCell} >
                                    <span className={classes.desc}>{this.getLabel('payzod-desc')}</span>
                                </Grid>
                                <Grid item xs={4} className={classes.row}>
                                    <span className={classes.labelQr}>{this.getLabel('order-number')}</span>
                                </Grid>
                                <Grid item xs={8} className={classes.row}>
                                    <span className={classes.value}>{orderNumber}</span>
                                </Grid>
                                <Grid item xs={4} className={classes.row}>
                                    <span className={classes.labelQr}>{this.getLabel('timer-label')}</span>
                                </Grid>
                                <Grid item xs={8} className={classes.row}>
                                    <Moment className={classes.timer} interval={1000} date={timeout} durationFromNow />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.qrCell}>
                            {
                                qrCode ?
                                    <div style={{ width: 200, height: 210 }}>
                                        <div className={classes.qrTittleCell}>
                                            <FormattedNumber
                                                maximumFractionDigits={2}
                                                value={amount}
                                                style={`currency`}
                                                currency={currency}
                                            />
                                        </div>
                                        <div className={classes.qrDiv}>
                                            <img alt="qr_code" src={`data:image/png;base64, ${qrCode}`} style={{ width: "96px", height: "96px" }} />
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6} style={{ marginTop: 50 }}>
                            <Button variant="contained" className={classes.cancelButton}
                                onClick={this.cancelClicked.bind(this)}
                            >{this.getLabel('cancel-label')}</Button>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                );
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.getContent()}
            </div >
        );
    }
}


const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Payzod))));