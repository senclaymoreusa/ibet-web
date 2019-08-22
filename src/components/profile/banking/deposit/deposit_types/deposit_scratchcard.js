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
import { MenuItem, InputAdornment } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputMask from 'react-input-mask';

import { ReactComponent as PrevStepIcon } from '../../../../../assets/img/svg/prev_step.svg';
import { ReactComponent as CvvIcon } from '../../../../../assets/img/svg/card-cvv.svg';

import { authCheckState } from '../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const amountChoices = [10000,20000,30000,50000,100000,200000,300000,500000,1000000];
const operators = [
    {
        value: "vtt",
        label: "Viettel"
    },
    {
        value: "vnp",
        label: "Vinaphone"
    },
    {
        value: "vms",
        label: "Mobifone"
    }
];
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

class DepositScratchCard extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            number: '',
            numberFocused: false,
            numberInvalid: true,

            expireDate: '',
            pinNumberFocused: false,
            pinNumberInvalid: true,

            operator: '',
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

        this.pinNumberChanged = this.pinNumberChanged.bind(this);
        this.pinNumberFocused = this.pinNumberFocused.bind(this);

        this.cvvChanged = this.cvvChanged.bind(this);
        this.cvvFocused = this.cvvFocused.bind(this);

        this.backClicked = this.backClicked.bind(this);
        this.firstOptionClicked = this.firstOptionClicked.bind(this);
        this.secondOptionClicked = this.secondOptionClicked.bind(this);
        this.thirdOptionClicked = this.thirdOptionClicked.bind(this);
        this.fourthOptionClicked = this.fourthOptionClicked.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.amountFocused = this.amountFocused.bind(this);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
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
        this.setState({ numberInvalid: (event.target.value.toString().length < 9 || event.target.value.toString().length > 15) });
    }

    numberFocused(event) {
        this.setState({ numberFocused: true });
    }

    pinNumberChanged(event) {
        this.setState({ expireDate: event.target.value });
        this.setState({ pinNumberFocused: true });


        if (event.target.value.toString().length < 9 || event.target.value.toString().length > 15) {
            this.setState({ pinNumberInvalid: true });
        } else {
            let month = event.target.value.split('/')[0];
            let monthInt = parseInt(month);

            if (month === '00' || monthInt > 12)
                this.setState({ pinNumberInvalid: true });
            else {
                let year = event.target.value.split('/')[1];
                let yearInt = parseInt(year);

                let expireDate = new Date();
                expireDate.setDate(1);
                expireDate.setMonth(monthInt - 1);
                expireDate.setFullYear(yearInt);

                let today = new Date();

                this.setState({ pinNumberInvalid: (expireDate <= today) });
            }
        }
    }

    pinNumberFocused(event) {
        this.setState({ pinNumberFocused: true });
    }

    cvvChanged(event) {
        this.setState({ cvv: event.target.value });
        this.setState({ cvvFocused: true });

        this.setState({ cvvInvalid: (event.target.value.length < 4 || !event.target.value ) });
    }

    cvvFocused(event) {
        this.setState({ cvvFocused: true });
    }

    handleDateChange(event) {
        event.preventDefault();

        this.setState({operator: event.target.value}); 
    }
    handleAmountChange(event) {
        event.preventDefault();

        this.setState({amount: event.target.value}); 
    }

    async handleClick(event) {
        event.preventDefault();
       
        const token = localStorage.getItem('token');

        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        console.log("amount: " + this.state.amount);
        console.log(this.state.data)
        let postData = {
            "card_num": this.state.number.replace(/\s+/g, ''),
            "card_code": this.state.cvv,
            "exp_date": this.state.expireDate,
            "amount": this.state.amount
        };

        var res = await axios.post(API_URL + 'accounting/api/astropay/capture_transaction',
            postData,
            config)
        console.log("result of deposit: ");
        console.log(res);
        if (res.data.response_msg.slice(0, 5) === "1|1|1") {
            const body = JSON.stringify({
                type: 'add',
                username: this.state.data.username || "",
                balance: this.state.amount,
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
       
        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar, operator, amount } = this.state;

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

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
                                        Scratch Card
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <InputMask
                                        mask="99999 99999 99999" maskChar={null}
                                        onChange={this.numberChanged}
                                        onFocus={this.numberFocused}
                                        value={this.state.serialNumber}

                                        className={classes.detailText}>
                                        {() => <TextField
                                            className={classes.detailText}
                                            placeholder="Serial Number"
                                            // placeholder="Số Seri"
                                            type="text"
                                            error={(this.state.numberInvalid && this.state.numberFocused)}
                                            helperText={(this.state.numberInvalid && this.state.numberFocused) ? 'Please enter serial number between 9 and 15 digits' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12} className={classes.pinCell}>
                                    <InputMask
                                        mask="99999 99999 99999" maskChar={null}
                                        onChange={this.pinNumberChanged}
                                        onFocus={this.pinNumberFocused}
                                        value={this.state.pinNumber}

                                        className={classes.expireText}>
                                        {() => <TextField
                                            className={classes.expireText}
                                            placeholder="PIN"
                                            // placeholder="Mã Nạp"
                                            type="text"
                                            error={(this.state.pinNumberInvalid && this.state.pinNumberFocused)}
                                            helperText={(this.state.pinNumberInvalid && this.state.pinNumberFocused) ? 'Please enter PIN number between 9 and 15 digits' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={6} className={classes.operator}>
                                    <TextField
                                        required
                                        // id="select-operator"
                                        select
                                        label="Operator"
                                        className={classes.textField}
                                        value={operator}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        onChange={this.handleDateChange}
                                        helperText="Telecom Company"
                                        variant="outlined"
                                        margin="normal"
                                        style={{"width": 125}}
                                    >
                                        {
                                            operators.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                        }
                                    </TextField>
                                </Grid>
                                <Grid item xs={6} className={classes.amountDropDown}>
                                    <TextField
                                        id="select-amount"
                                        select
                                        label="Amount"
                                        className={classes.textField}
                                        value={amount}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        onChange={this.handleAmountChange}
                                        helperText="Please Select Deposit Amount"
                                        variant="outlined"
                                        margin="normal"
                                    >
                                        {
                                            amountChoices.map(option => (
                                                <MenuItem key={option} value={option}>
                                                    {Intl.NumberFormat('us-EN', {currency: 'VND'}).format(option) + " VND"}
                                                </MenuItem>
                                            ))
                                        }
                                    </TextField>
                                </Grid>
                                <br/>
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
                                            this.state.pinNumberInvalid ||
                                            this.state.cvvInvalid}
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositScratchCard)));