import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress, Grid, Button, Select, MenuItem, TextField, InputBase } from '@material-ui/core';
import InputMask from 'react-input-mask';

import { ReactComponent as PrevStepIcon } from '../../../../../assets/img/svg/prev_step.svg';

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

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 2px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

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
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


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
        dropDowns: {
            paddingTop: 12,
            paddingBottom: 20,
            // marginRight: 5,
            // marginLeft: 10
        },
        textField: {
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
            marginTop: 10,
            width: 200,
        },
        menuItem: {
            marginRight: 20
        }
    })
};

class DepositScratchCard extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            serialNumber: '',
            numberFocused: false,
            numberInvalid: true,

            pinNumber: '',
            pinNumberFocused: false,
            pinNumberInvalid: true,

            operator: 'none',
            operatorInvalid: true,

            amount: 'none',
            amountFocused: false,
            amountInvalid: true,

            showLinearProgressBar: false,
        };


        this.numberChanged = this.numberChanged.bind(this);
        this.numberFocused = this.numberFocused.bind(this);

        this.pinNumberChanged = this.pinNumberChanged.bind(this);
        this.pinNumberFocused = this.pinNumberFocused.bind(this);

        this.backClicked = this.backClicked.bind(this);

        this.amountChanged = this.amountChanged.bind(this);
        this.amountFocused = this.amountFocused.bind(this);

        this.handleOperatorChange = this.handleOperatorChange.bind(this);
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
        this.setState({ serialNumber: event.target.value });
        this.setState({ numberFocused: true });
        this.setState({ numberInvalid: (event.target.value.toString().length < 10 || event.target.value.toString().length > 17) });
    }

    numberFocused(event) {
        event.preventDefault();
        this.setState({ numberFocused: true });
    }

    pinNumberChanged(event) {
        this.setState({ pinNumber: event.target.value });
        this.setState({ pinNumberFocused: true });

        this.setState({ pinNumberInvalid: (event.target.value.toString().length < 10 || event.target.value.toString().length > 17) });
    }

    pinNumberFocused(event) {
        event.preventDefault();
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

    
    handleOperatorChange(event) {
        event.preventDefault();

        this.setState({ operator: event.target.value }); 
        this.setState({ operatorInvalid: false });
    }

    handleAmountChange(event) {
        event.preventDefault();

        this.setState({ amount: event.target.value }); 
        this.setState({ amountInvalid: false });

    }

    async handleClick(event) {
        event.preventDefault();
        const {serialNumber, pinNumber, amount, operator, data} = this.state;
       
        const token = localStorage.getItem('token');

        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        console.log("amount: " + amount);
        console.log(data)
        let postData = {
            "serial": serialNumber.replace(/\s/g, ""),
            "pin": pinNumber.replace(/\s/g, ""),
            "operator": operator,
            "amount": amount
        };
        console.log(postData);

        var res = await axios.post(API_URL + 'accounting/api/scratchcard/deposit',
            postData,
            config)
        console.log("result of deposit: ");
        console.log(res);

        if (res.status === 200) {
            console.log("nice!");
            if (res.data.status === 6) {
                this.setState({
                    receive_response: true, 
                    response_msg: "Deposit request is processing. Please check your transaction history for updates to your balance once we finish processing",
                    error: false,
                    error_msg: ""
                });
            }
            else if (res.data.status === 1) {
                const body = JSON.stringify({
                    type : 'add',
                    username: data.username || "",
                    balance: amount,
                });
                axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
                .then(res => {
                    if (res.data === 'Failed'){
                        this.setState({error: true});
                    } else if (res.data === 'The balance is not enough') {
                        alert("cannot withdraw this amount")
                    } else {
                        alert("your balance is updated")
                        // window.location.reload();
                    }
                });
            }
            else {
                this.setState({
                    error: true, 
                    error_msg: JSON.stringify(res.data.msg),
                    receive_response: false,
                    response_msg: ""
                });
            }
        }
        else {
            this.setState({error: true, error_msg: "Could not communicate with iBet servers. Error code: " + res.status});
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
                                <Grid item xs={6} className={classes.dropDowns} style={{alignContent: 'center', textAlign: 'center'}}>
                                    <Select
                                        className={classes.select}
                                        value={operator}
                                        style={{textAlign: 'left'}}
                                        onChange={this.handleOperatorChange}
                                        input={<BootstrapInput name="operator" id="select-operator" />}>
                                    >
                                        <MenuItem key='none' value='none' disabled >Select Operator</MenuItem>
                                        {
                                            operators.map(currency => (
                                                <MenuItem key={currency.label} value={currency.value} >
                                                    {currency.label}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Grid>
                                <Grid item xs={6} className={classes.dropDowns} style={{alignContent: 'center', textAlign: 'center'}}>
                                    <Select
                                        className={classes.select}
                                        value={amount}
                                        style={{textAlign: 'left'}}
                                        onChange={this.handleAmountChange}
                                        input={<BootstrapInput name="amount" id="select-amount" />}>
                                    >
                                        <MenuItem key='none' value='none' disabled>Select Amount</MenuItem>
                                        {
                                            amountChoices.map(option => (
                                                <MenuItem key={option} value={option}>
                                                    {Intl.NumberFormat('us-EN', {currency: 'VND'}).format(option) + " VND"}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Grid>
                                <br/>
                                <Grid item xs={6} className={classes.amountRow}>
                                    <div className={classes.amountText}>
                                        <FormattedNumber
                                            value={this.state.amount == "none" ? 0 : this.state.amount}
                                            style='currency'
                                            currency={"VND"}
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
                                            this.state.operatorInvalid}
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
                    <div style={{textAlign: 'center', paddingLeft: 262, paddingRight: 262}}>
                        <div id="response-msg">
                            {
                                this.state.receive_response ? 
                                <p>{this.state.response_msg}</p> :
                                <br></br>
                            }
                        </div>
                        <div id="error-msg">
                            {
                                this.state.error ? 
                                <p style={{color: "red"}}>{this.state.error_msg}</p> :
                                <br></br>
                            }
                        </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositScratchCard)));