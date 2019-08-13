import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputMask from 'react-input-mask';

import { ReactComponent as PrevStepIcon } from '../../../../../assets/img/svg/prev_step.svg';
import { ReactComponent as CvvIcon } from '../../../../../assets/img/svg/card-cvv.svg';

import { authCheckState } from '../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = function (theme) {
    return ({
        root: {
            width: 925,
            backgroundColor: '#ffffff',
            border: 'solid 1px #979797',
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
            paddingBottom: 50,
        },
        cardTypeCell: {
            borderTop: '1px solid #d8d8d8',
            borderBottom: '1px solid #d8d8d8',
            height: 77,
            paddingTop: 15,
            textAlign: 'center',
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
            marginTop: 28,
        },
        buttonCell: {
            paddingTop: 50,
            textAlign: 'center',
        },
        continueButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8',
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
        leftButton: {
            display: 'inline-block',
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44,
        },
        middleButton: {
            marginRight: 10,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44,
        },
        rightButton: {
            marginLeft: 10,
            marginRight: 0,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 88,
            height: 44,
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
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            "&:hover": {
                border: 'solid 1px #717171',
            },
            "&:focus": {
                border: 'solid 1px #717171',
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
        amountText: {
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
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
            paddingLeft: 10,
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            "&:hover": {
                border: 'solid 1px #717171',
            },
            "&:focus": {
                border: 'solid 1px #717171',
            },
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
            marginTop: 10,
            marginRight: 10,
            paddingLeft: 10,
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            "&:hover": {
                border: 'solid 1px #717171',
            },
            "&:focus": {
                border: 'solid 1px #717171',
            },
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
            marginTop: 10,
            marginLeft: 10,
            paddingLeft: 10,
            paddingRight: 10,
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            "&:hover": {
                border: 'solid 1px #717171',
            },
            "&:focus": {
                border: 'solid 1px #717171',
            },
        },
        amountButtonRow: {
            paddingTop: 30,
        }
    })
};

class DepositAstropay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: "",
            card_num: "",
            card_code: "",
            exp_date: "",

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

            firstOption: 10,
            secondOption: 50,
            thirdOption: 100,
            fourthOption: 500,
            currencyValue: "USD",
            showLinearProgressBar: false,
        };

        this.numberChanged = this.numberChanged.bind(this);
        this.numberFocused = this.numberFocused.bind(this);

        this.expireDateChanged = this.expireDateChanged.bind(this);
        this.expireDateFocused = this.expireDateFocused.bind(this);

        this.cvvChanged = this.cvvChanged.bind(this);
        this.cvvFocused = this.cvvFocused.bind(this);

        this.backClicked = this.backClicked.bind(this);
        this.firstOptionClicked = this.firstOptionClicked.bind(this);
        this.secondOptionClicked = this.secondOptionClicked.bind(this);
        this.thirdOptionClicked = this.thirdOptionClicked.bind(this);
        this.fourthOptionClicked = this.fourthOptionClicked.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.amountFocused = this.amountFocused.bind(this);

        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currencyValue: res.data.currency });
            });
    }

    firstOptionClicked(event) {
        this.setState({ amount: this.state.firstOption });
        this.setState({ amountInvalid: false });
        this.setState({ amountFocused: false });
        this.amountInput.current.value = '';
    }

    secondOptionClicked(event) {
        this.setState({ amount: this.state.secondOption });
        this.setState({ amountInvalid: false });
        this.setState({ amountFocused: false });
        this.amountInput.current.value = '';
    }

    thirdOptionClicked(event) {
        this.setState({ amount: this.state.thirdOption });
        this.setState({ amountInvalid: false });
        this.setState({ amountFocused: false });
        this.amountInput.current.value = '';
    }

    fourthOptionClicked(event) {
        this.setState({ amount: this.state.fourthOption });
        this.setState({ amountInvalid: false });
        this.setState({ amountFocused: false });
        this.amountInput.current.value = '';
    }

    amountChanged(event) {
        if (event.target.value.length == 0 || parseInt(event.target.value) > 50000 || parseInt(event.target.value) < 10) {
            this.setState({ amount: 0 });
            this.setState({ amountInvalid: true });
        } else {
            this.setState({ amount: event.target.value });
            this.setState({ amountInvalid: false });
        }
    }

    amountFocused(event) {
        this.setState({ amountFocused: true });
    }

    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    numberChanged(event) {
        this.setState({ number: event.target.value });
        this.setState({ numberFocused: true });
        this.setState({ numberInvalid: (event.target.value.toString().length < 19) });
    }

    numberFocused(event) {
        this.setState({ numberFocused: true });
    }

    expireDateChanged(event) {
        this.setState({ expireDate: event.target.value });
        this.setState({ expireDateFocused: true });


        if (event.target.value.toString().length < 5) {
            this.setState({ expireDateInvalid: true });
        } else {
            let month = event.target.value.split('/')[0];
            let monthInt = parseInt(month);

            if (month === '00' || monthInt > 12)
                this.setState({ expireDateInvalid: true });
            else {
                let year = event.target.value.split('/')[1];
                let yearInt = parseInt("20" + year);

                let expireDate = new Date();
                expireDate.setDate(1);
                expireDate.setMonth(monthInt - 1);
                expireDate.setFullYear(yearInt);

                let today = new Date();

                this.setState({ expireDateInvalid: (expireDate <= today) });
            }
        }
    }

    expireDateFocused(event) {
        this.setState({ expireDateFocused: true });
    }

    cvvChanged(event) {
        this.setState({ cvv: event.target.value });
        this.setState({ cvvFocused: true });

        this.setState({ cvvInvalid: (event.target.value.length < 3 || event.target.value === '000') });
    }

    cvvFocused(event) {
        this.setState({ cvvFocused: true });
    }

    async handleClick(event) {
        event.preventDefault();
        const { amount, card_num, card_code, exp_date, data } = this.state;
        const token = localStorage.getItem('token');

        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        console.log("amount: " + amount);
        console.log(data)
        let postData = {
            "card_num": card_num,
            "card_code": card_code,
            "exp_date": exp_date,
            "amount": amount
        };

        var res = await axios.post(API_URL + 'accounting/api/astropay/capture_transaction',
            postData,
            config)
        console.log("result of deposit: ");
        console.log(res);
        if (res.data.response_msg.slice(0, 5) === "1|1|1") {
            const body = JSON.stringify({
                type: 'add',
                username: data.username || "",
                balance: amount,
            });
            axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
                .then(res => {
                    if (res.data === 'Failed') {
                        this.setState({ error: true });
                    } else if (res.data === 'The balance is not enough') {
                        alert("cannot withdraw this amount")
                    } else {
                        alert("your balance is updated")
                        // window.location.reload();
                    }
                });
        }
        else {
            // this.showError(res.data.response_msg.split("|")[3]);
            this.setState({ error: true, error_msg: res.data.response_msg.split("|")[3] });
        }
    }

    render() {
        const { classes } = this.props;
        const { amount, card_num, card_code, exp_date } = this.state;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;


        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <PrevStepIcon />
            </Button>);

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
                        <Grid item xs={2} className={classes.backCell}>
                        </Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && <LinearProgress />}
                        </Grid>
                        <Grid item xs={12} className={classes.contentRow}
                            style={(showLinearProgressBar === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                            <Grid container>
                                <Grid item xs={12} className={classes.cardTypeCell}>
                                    <Button className={classes.cardTypeButton} disabled>
                                        Astropay
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <InputMask
                                        mask="9999 9999 9999 9999" maskChar={null}
                                        onChange={this.numberChanged}
                                        onFocus={this.numberFocused}
                                        value={this.state.number}

                                        className={classes.detailText}>
                                        {() => <TextField
                                            className={classes.detailText}
                                            placeholder="Card Number"
                                            type="text"
                                            error={(this.state.numberInvalid && this.state.numberFocused)}
                                            helperText={(this.state.numberInvalid && this.state.numberFocused) ? 'Please enter 16-digit card number.' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={6} className={classes.expireCell}>
                                    <InputMask
                                        mask="99/99" maskChar={null}
                                        onChange={this.expireDateChanged}
                                        onFocus={this.expireDateFocused}
                                        value={this.state.expireDate}

                                        className={classes.expireText}>
                                        {() => <TextField
                                            className={classes.expireText}
                                            placeholder="MM/YY"
                                            type="text"
                                            error={(this.state.expireDateInvalid && this.state.expireDateFocused)}
                                            helperText={(this.state.expireDateInvalid && this.state.expireDateFocused) ? 'Invalid expiration card' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>

                                </Grid>
                                <Grid item xs={6} className={classes.cvvCell}>
                                    <InputMask
                                        mask="999" maskChar={null}
                                        onChange={this.cvvChanged}
                                        onFocus={this.cvvFocused}
                                        value={this.state.cvv}

                                        className={classes.cvvText}>
                                        {() => <TextField
                                            className={classes.cvvText}
                                            placeholder="CVV"
                                            type="text"
                                            error={(this.state.cvvInvalid && this.state.cvvFocused)}
                                            helperText={(this.state.cvvInvalid && this.state.cvvFocused) ? 'Invalid code' : ' '}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: <InputAdornment position="end"><CvvIcon /></InputAdornment>,
                                            }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12} className={classes.amountButtonRow}>
                                    <Button className={classes.leftButton} onClick={this.firstOptionClicked}>
                                        {this.state.firstOption}
                                    </Button>
                                    <Button className={classes.middleButton} onClick={this.secondOptionClicked}>
                                        {this.state.secondOption}
                                    </Button>
                                    <Button className={classes.middleButton} onClick={this.thirdOptionClicked}>
                                        {this.state.thirdOption}
                                    </Button>
                                    <Button className={classes.rightButton} onClick={this.fourthOptionClicked}>
                                        {this.state.fourthOption}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        className={classes.otherText}
                                        placeholder="Deposit 10 - 50,000"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={this.state.amountInvalid && this.state.amountFocused}
                                        helperText={(this.state.amountInvalid && this.state.amountFocused) ? 'Please enter a valid amount.' : ' '}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: <InputAdornment position="end">Other</InputAdornment>,
                                        }}
                                        type="number"
                                        inputProps={{
                                            step: 10,
                                            min: 10,
                                            max: 50000
                                        }}
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.amountRow}>
                                    <div className={classes.amountText}>
                                        <FormattedNumber
                                            value={this.state.amount}
                                            style='currency'
                                            currency={this.state.currencyValue}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={6} className={classes.amountRightRow}>
                                    <span className={classes.amountText}>Total</span>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={this.state.amountInvalid ||
                                            this.state.numberInvalid ||
                                            this.state.expireDateInvalid ||
                                            this.state.cvvInvalid}
                                    >Continue</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositAstropay)));