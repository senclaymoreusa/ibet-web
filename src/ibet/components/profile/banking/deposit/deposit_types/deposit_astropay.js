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
import InputMask from 'react-input-mask';
import { authCheckState ,sendingLog, logout, postLogout } from '../../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = function(theme) {
    return {
        root: {
            width: 925,
            backgroundColor: '#ffffff',
            border: 'solid 1px #979797'
        },
        titleRow: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            height: 80
        },
        backCell: {
            paddingLeft: 10,
            paddingTop: 20,
            alignItems: 'left',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            height: 80
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
            paddingTop: 1
            // paddingBottom: 15
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
            marginLeft: 4.75,
            marginRight: 4.75,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44
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
        otherText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            margin: '10px 0px 10px 0px',
            padding: '6px 10px 0px 10px',
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
            marginTop: 10,
            height: 40,
            borderBottom: '4px solid #5e5e5e'
        },
        amountRightRow: {
            marginTop: 10,
            height: 40,
            textAlign: 'right',
            borderBottom: '4px solid #5e5e5e'
        },
        amountText: {
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929'
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
            marginTop: 10,
            marginBottom: 10,
            padding: '7px 0px 10px 15px',
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
        expireText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            margin: '10px 10px 10px 0px',
            padding: '7px 0px 10px 15px',
            width: 190,
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
            margin: '10px 0px 10px 10px',
            padding: '7px 0px 10px 15px',
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        amountButtonRow: {
            // paddingTop: 30
        }
    };
};

const amounts = Object.freeze([25, 50, 100, 500]);

class DepositAstropay extends Component {
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

            currencyValue: 'USD',
            showLinearProgressBar: false
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data, currencyValue: res.data.currency });
        });
    }

    amountChanged = event => {
        if (
            event.target.value.length === 0 ||
            parseInt(event.target.value) > 50000 ||
            parseInt(event.target.value) < 10
        ) {
            this.setState({ amount: 0, amountInvalid: true });
        } else {
            this.setState({ amount: event.target.value, amountInvalid: false });
        }
    };

    amountFocused = () => {
        this.setState({ amountFocused: true });
    };

    backClicked = () => {
        this.props.callbackFromParent('deposit_method');
    };

    numberChanged = event => {
        this.setState({
            number: event.target.value,
            numberFocused: true,
            numberInvalid: event.target.value.toString().length < 19
        });
    };

    numberFocused = () => {
        this.setState({ numberFocused: true });
    };

    expireDateChanged = event => {
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

    expireDateFocused = () => {
        this.setState({ expireDateFocused: true });
    };

    cvvChanged = event => {
        this.setState({
            cvv: event.target.value,
            cvvFocused: true,
            cvvInvalid: event.target.value.length < 4 || !event.target.value
        });
    };

    cvvFocused = () => {
        this.setState({ cvvFocused: true });
    };

    handleClick = async event => {
        event.preventDefault();
        let currentComponent = this;
        currentComponent.setState({ showLinearProgressBar: true });

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
            amount: this.state.amount
        };

        var res = await axios.post(
            API_URL + 'accounting/api/astropay/capture_transaction',
            postData,
            config
        );
        console.log('result of deposit: ');
        console.log(res);
        if(res.data.errorCode){
            currentComponent.props.logout();
            postLogout();
            return;
        }
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
                        this.setState({ error: true });
                    } else if (res.data === 'The balance is not enough') {
                        alert('cannot withdraw this amount');
                    } else {
                        alert('your balance is updated');
                        // window.location.reload();
                    }
                }).catch(function (err) {  
                    //console.log('Request failed', err);
                    currentComponent.props.callbackFromParent("error", "Something is wrong.");
                    sendingLog(err);
                    // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                });
        } else {
            this.setState({
                error: true,
                error_msg: res.data.response_msg.split('|')[3]
            });
        }
    };

    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

        let depositAmountMessage = formatMessage({
            id: 'deposit.deposit_amount'
        });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} alt="" />
            </Button>
        );

        return (
            <div className={classes.root}>
                <form>
                    <Grid container>
                        <Grid item xs={2} className={classes.backCell}>
                            {backButton}
                        </Grid>
                        <Grid item xs={8} className={classes.titleRow}>
                            <span className={classes.title}>
                                {depositAmountMessage}
                            </span>
                        </Grid>
                        <Grid item xs={2} className={classes.backCell}></Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && (
                                <LinearProgress />
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.contentRow}
                            style={
                                showLinearProgressBar === true
                                    ? { pointerEvents: 'none' }
                                    : { pointerEvents: 'all' }
                            }
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.cardTypeCell}
                                >
                                    <Button
                                        className={classes.cardTypeButton}
                                        disabled
                                    >
                                        Astropay
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                >
                                    <InputMask
                                        mask="9999 9999 9999 9999"
                                        maskChar={null}
                                        onChange={this.numberChanged}
                                        onFocus={this.numberFocused}
                                        value={this.state.number}
                                        className={classes.detailText}
                                    >
                                        {() => (
                                            <TextField
                                                className={classes.detailText}
                                                placeholder="Card Number"
                                                type="text"
                                                error={
                                                    this.state.numberInvalid &&
                                                    this.state.numberFocused
                                                }
                                                helperText={
                                                    this.state.numberInvalid &&
                                                    this.state.numberFocused
                                                        ? 'Please enter 16-digit card number.'
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
                                    xs={6}
                                    className={classes.expireCell}
                                >
                                    <InputMask
                                        mask="99/9999"
                                        maskChar={null}
                                        onChange={this.expireDateChanged}
                                        onFocus={this.expireDateFocused}
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
                                                        ? 'Invalid expiration card'
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={6} className={classes.cvvCell}>
                                    <InputMask
                                        mask="9999"
                                        maskChar={null}
                                        onChange={this.cvvChanged}
                                        onFocus={this.cvvFocused}
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
                                                        ? 'Invalid code'
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <img
                                                                src={
                                                                    images.src +
                                                                    'card-cvv.svg'
                                                                }
                                                                alt=""
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.amountButtonRow}
                                >
                                    {amounts.map((x, i) => {
                                        return (
                                            <Button
                                                className={classes.middleButton}
                                                key={i}
                                                onClick={() =>
                                                    this.setState({
                                                        amount: x,
                                                        amountInvalid: false,
                                                        amountFocused: false
                                                    })
                                                }
                                            >
                                                {x}
                                            </Button>
                                        );
                                    })}
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                >
                                    <TextField
                                        className={classes.otherText}
                                        placeholder="Deposit 10 - 50,000"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                        }
                                        helperText={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                                ? 'Please enter a valid amount.'
                                                : ' '
                                        }
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    Other
                                                </InputAdornment>
                                            ),
                                            inputProps: {
                                                step: 10,
                                                min: 10,
                                                max: 50000
                                            }
                                        }}
                                        type="number"
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.amountRow}>
                                    <div className={classes.amountText}>
                                        <FormattedNumber
                                            value={this.state.amount}
                                            style={`currency`}
                                            currency={this.state.currencyValue}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.amountRightRow}
                                >
                                    <span className={classes.amountText}>
                                        Total
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.buttonCell}
                                >
                                    <Button
                                        className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={
                                            this.state.amountInvalid ||
                                            this.state.numberInvalid ||
                                            this.state.expireDateInvalid ||
                                            this.state.cvvInvalid
                                        }
                                    >
                                        {continueMessage}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.backButtonCell}
                                >
                                    <Button
                                        className={classes.backBankingButton}
                                        onClick={this.backClicked}
                                    >
                                        {backMessage}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
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
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState, logout }
        )(DepositAstropay)
    )
);
