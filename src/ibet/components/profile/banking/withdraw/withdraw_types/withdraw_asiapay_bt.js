import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { authCheckState } from '../../../../../actions';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputMask from 'react-input-mask';
import { images } from '../../../../../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
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
        marginTop: 10,
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
    }
});

class WithdrawAsiapayBT extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            error: false,
            bank: '',
            pin:'',
            data: '',
            type: '',
            cardname: '',
            bankname: '',
            
            live_check_amount: false,

            button_disable: false,
            value: "",
            size: 128,
            fgColor: '#000000',
            bgColor: '#ffffff',
            level: 'L',
            renderAs: 'svg',
            includeMargin: false,

            amountFocused: false,
            amountInvalid: true,

            pinFocused: false,
            pinInvalid: true,

            cardnameFocused: false,
            

            banknameFocused: false,
            

            showLinearProgressBar: false,
            currencyValue: "USD",
        };

        this.backClicked = this.backClicked.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.amountFocused = this.amountFocused.bind(this);
        this.pinChanged = this.pinChanged.bind(this);
        this.pinFocused = this.pinFocused.bind(this);
        this.cardnameChanged = this.cardnameChanged.bind(this);
        this.cardnameFocused = this.cardnameFocused.bind(this);
        this.banknameChanged = this.banknameChanged.bind(this);
        this.banknameFocused = this.banknameFocused.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currencyValue: res.data.currency });
            })
    }

    amountChanged(event) {
        if (parseInt(event.target.value) < 100) {
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
        this.props.callbackFromParent('withdraw_method');
    }
    pinChanged(event) {
        this.setState({ pin: event.target.value });
        this.setState({ pinFocused: true });
        this.setState({ pinInvalid: (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/)) });
    }

    pinFocused(event) {
        this.setState({ pinFocused: true });
    }

    cardnameChanged(event) {
        this.setState({ cardname: event.target.value });
        this.setState({ cardnameFocused: true });
        this.setState({ pinInvalid: (event.target.value.length < 2) });
    }

    cardnameFocused(event){
        this.setState({ cardnameFocused: true });
    }

    banknameChanged(event){
        this.setState({ bankname: event.target.value });
        this.setState({ banknameFocused: true });
        this.setState({ pinInvalid: (event.target.value.length < 2) });
    }
    banknameFocused(event){
        this.setState({ banknameFocused: true});
    }

    
    handleClick = () => {
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        let amount = this.state.amount;
        let user = this.state.data.pk;
        let main_wallet = this.state.data.main_wallet;
        let cardnumber = this.state.pin;
        let cardname = this.state.cardname;
        let bankname = this.state.bankname;
        let username = this.state.data.username


        var postData = {
            "amount": amount,
            "userid": user,
            "currency": 0,
            "cashoutMethod": "cashifacebatch",
            "CashCardNumber": cardnumber,
            "CashCardChName": cardname,
            "CashBankDetailName": bankname,
        }
        console.log(amount)
        console.log(user)
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return fetch(API_URL + 'accounting/api/asiapay/cashout', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then(function (res) {
            console.log(res)
            if(res.ok){
                return res.json();
            }else{
                currentComponent.props.callbackFromParent("error", "Transaction failed.");
            }
            
        }).then(function (data) {
            let status = data.StatusCode;

            if (status == '50001') {
                const body = JSON.stringify({
                    type: 'withdraw',
                    username: username,
                    balance: amount,
                });
                console.log(body)
                axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                    .then(res => {
                        if (res.data === 'Failed') {
                            //this.setState({ error: true });
                            currentComponent.props.callbackFromParent("error", 'Transaction failed!');
                        } else if (res.data === 'The balance is not enough') {
                            //    // alert("cannot withdraw this amount")
                            currentComponent.props.callbackFromParent("error", 'Cannot withdraw this amount!');

                        } else {
                            currentComponent.props.callbackFromParent("success", 'Your balance is updated.');

                            // alert("your balance is updated")
                            // window.location.reload()
                        }
                    });

            } else {
                currentComponent.props.callbackFromParent("error", data.StatusMsg);
                //this.setState({ qaicash_error: true, qaicash_error_msg: data.returnMessage });
            }
        }).catch(err => {
            currentComponent.props.callbackFromParent("error", err.returnMessage);
            axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
        });
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

        let depositAmountMessage = formatMessage({ id: 'withdraw.withdraw_amount' });
        let continueMessage = formatMessage({ id: 'withdraw.continue' });
        let backMessage = formatMessage({ id: 'withdraw.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'}  alt=""/>
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
                        <Grid item xs={12} className={classes.contentRow} style={(showLinearProgressBar === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                            <Grid container>
                                <Grid item xs={12} className={classes.cardTypeCell}>
                                    <Button className={classes.cardTypeButton} disabled>
                                        Asiapay 代付
                                    </Button>
                                </Grid>
                                
                                <Grid item xs={12} className={classes.detailRow}>
                                    <InputMask
                                        mask="9999999999999999999" maskChar={null}
                                        onFocus={this.pinFocused}
                                        onChange={this.pinChanged}
                                        value={this.state.pin}
                                        className={classes.otherText}>
                                        {() => <TextField
                                            className={classes.otherText}
                                            placeholder="Card Number"
                                            type="text"
                                            error={(this.state.pinInvalid && this.state.pinFocused)}
                                            helperText={(this.state.pinInvalid && this.state.pinFocused) ? 'Please enter a valid card number.' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        className={classes.otherText}
                                        placeholder="Minimum 100"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={this.state.amountInvalid && this.state.amountFocused}
                                        helperText={(this.state.amountInvalid && this.state.amountFocused) ? 'Please enter a valid amount.' : ' '}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: <InputAdornment position="end">Other</InputAdornment>,
                                            inputProps:{
                                                step: 10,
                                                min: 100
                                            }
                                          }}
                                        type="number"
                                        inputRef={this.amountInput}

                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        onFocus={this.cardnameFocused}
                                        onChange={this.cardnameChanged}
                                        value={this.state.cardname}
                                        className={classes.otherText}
                                        placeholder="Card Holder Name"
                                        helperText={(this.state.cardnameInvalid && this.state.cardnameFocused) ? 'Please enter a valid card holder name.' : ' '}
                                        InputProps={{ disableUnderline: true }}
                                        type="text"
                                        error={( this.state.cardnameFocused)}   
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        onFocus={this.banknameFocused}
                                        onChange={this.banknameChanged}
                                        value={this.state.bankname}
                                        className={classes.otherText}
                                        
                                        placeholder="Bank banch name"
                                        type="text"
                                        error={( this.state.banknameFocused)}
                                        helperText={(this.state.banknameInvalid && this.state.banknameFocused) ? 'Please enter a valid bank branch name.' : ' '}
                                        InputProps={{ disableUnderline: true }}
                                        
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
                                <Grid item xs={6} className={classes.amountRightRow}>
                                    <span className={classes.amountText}>Total</span>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={this.state.amountInvalid}
                                    >
                                        {continueMessage}</Button>
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
        )
    }


}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(WithdrawAsiapayBT)));