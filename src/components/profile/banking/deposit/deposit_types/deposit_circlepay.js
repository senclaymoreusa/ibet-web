import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import { authCheckState } from '../../../../../actions';

const
    crypto = require("crypto"),
    API_URL = process.env.REACT_APP_DEVELOP_API_URL,
    CIRCLEPAY_DEPOSIT_URL = "https://gateway.circlepay.ph/payment/",
    USER_CODE = 297802061195;

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
        continueButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8',
        },
        backBankingButton: {
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
        backButtonCell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20,
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
            paddingTop: 6,
            paddingLeft: 10,
            paddingRight: 10,
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
    })
};

class DepositCirclepay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',

            amountFocused: false,
            amountInvalid: true,

            firstOption: 20,
            secondOption: 50,
            thirdOption: 100,
            fourthOption: 250,
            currencyValue: "USD",
            showLinearProgressBar: false,
        };

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
        if (event.target.value.length == 0 || parseInt(event.target.value) > 50000 || parseInt(event.target.value) < 20) {
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

    async handleClick(event) {
        event.preventDefault();

        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        const { data: userData } = this.state;
        const { amount } = this.state;
        const token = localStorage.getItem('token');


        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;


        // setup POST request params
        let currDate = new Date();
      
        let month = (currDate.getMonth() + 1) < 10 ? ("0" + (currDate.getMonth() + 1)) : (currDate.getMonth() + 1);
        let date = currDate.getDate() < 10 ? ("0" + currDate.getDate()) : currDate.getDate();
        
        let transId = userData.username + currDate.getFullYear() + month + date + "T" + currDate.getHours() + currDate.getMinutes() + currDate.getSeconds()


        const secret = 'Kiy4O3IAvPpHxXJ9ht1mBfZs';

        let secretMsg = 'jennyto@ibet.com' + transId + amount;

        const hash = crypto.createHmac('sha256', secret)
            .update(secretMsg)
            .digest('hex');


        let postURL = CIRCLEPAY_DEPOSIT_URL + USER_CODE + "/?partner_tran_id=" + transId + "&amount=" + amount + "&username=" + userData.username + "&token=" + hash;


        window.open(postURL);


        let postData = {
            "amount": amount,
            "trans_id": transId
        }

        axios.post(API_URL + 'accounting/api/circlepay/deposit',
            postData,
            config).then(res => {
                console.log("result of deposit: ");
                console.log(res);
                if (res.status !== 200) {
                    this.setState({ error: true, error_msg: JSON.stringify(res) });
                    currentComponent.props.callbackFromParent("error", JSON.stringify(res));

                }
                else {
                    console.log(res);

                }
                currentComponent.setState({ showLinearProgressBar: false });


            });

        // axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
        // .then(res => {
        //     if (res.data === 'Failed'){
        //         this.setState({error: true});
        //     } else if (res.data === 'The balance is not enough') {
        //         alert("cannot withdraw this amount")
        //     } else {
        //         alert("your balance is updated")
        //         // window.location.reload();
        //     }
        // });


    }

    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} />
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
                                        Circle Pay
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
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
                                        placeholder="Deposit 20 - 50,000"
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
                                            min: 20,
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
                                        disabled={this.state.amountInvalid}
                                    >{continueMessage}</Button>
                                </Grid>
                                <Grid item xs={12} className={classes.backButtonCell}>
                                    <Button className={classes.backBankingButton}
                                        onClick={this.backClicked}
                                    >{backMessage}</Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositCirclepay)));