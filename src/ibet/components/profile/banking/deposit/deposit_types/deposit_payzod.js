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
import { authCheckState, sendingLog, logout, postLogout } from '../../../../../../actions';

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
    })
};

class DepositPayzod extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',

            amountFocused: false,
            amountInvalid: true,

            firstOption: 500,
            secondOption: 1000,
            thirdOption: 2000,
            fourthOption: 5000,
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
        if (event.target.value.length === 0 || parseInt(event.target.value) > 500000 || parseInt(event.target.value) < 500) {
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

        // var res = 
        await axios.post(API_URL + 'accounting/api/payzod/deposit',
            postData,
            config).then(res => {
                if(res.data.errorCode){
                    currentComponent.props.logout();
                    postLogout();
                    return;
                }
                if (res.data) {
                    currentComponent.setState({ showLinearProgressBar: false });
                    this.setState({ qr_code: res.data });
                }
            }).catch(function(err){
                currentComponent.props.callbackFromParent("error", "Something is wrong.");
                sendingLog(err);
            });


        
    }

    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar, qr_code } = this.state;

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

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
                        <Grid item xs={12} className={classes.contentRow}
                            style={(showLinearProgressBar === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                            <Grid container>
                                <Grid item xs={12} className={classes.cardTypeCell}>
                                    <Button className={classes.cardTypeButton} disabled>
                                        Payzod
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
                                        placeholder="Deposit 500 - 500,000"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={this.state.amountInvalid && this.state.amountFocused}
                                        helperText={(this.state.amountInvalid && this.state.amountFocused) ? 'Please enter a valid amount.' : ' '}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: <InputAdornment position="end">Other</InputAdornment>,
                                            inputProps:{
                                                step: 10,
                                                min: 500,
                                                max: 500000
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
                    <div id="api-response" style={{textAlign: 'center', paddingLeft: 262, paddingRight: 262}}>
                        {
                            qr_code ? 
                            <>
                                <img alt="qr_code" src={`data:image/png;base64, ${qr_code}`} style={{width: "250px", height: "250px"}}/>
                                <p>Once you have scanned the QR code, please check your e-mail and transaction history to confirm that the deposit was successful.</p>
                            </>
                            : 
                            <br/>
                        }
                    </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState, logout })(DepositPayzod)));