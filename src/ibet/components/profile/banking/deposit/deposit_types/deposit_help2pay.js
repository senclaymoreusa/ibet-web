import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, sendingLog, logout, postLogout } from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

const bank_options = [
    //tailand
    { value: 'KKR', label: 'Karsikorn Bank (K-Bank)', link: '2' },
    { value: 'BBL', label: 'Bangkok Bank', link: '2' },
    { value: 'SCB', label: 'Siam Commercial Bank', link: '2' },
    { value: 'KTB', label: 'Krung Thai Bank', link: '2' },
    { value: 'BOA', label: 'Bank of Ayudhya (Krungsri)', link: '2' },
    { value: 'GSB', label: 'Government Savings Bank', link: '2' },
    { value: 'TMB', label: 'TMB Bank Public Company Limited', link: '2' },
    { value: 'CIMBT', label: 'CIMB Thai', link: '2' },
    { value: 'KNK', label: 'Kiatnakin Bank', link: '2' },
    // vietnam
    { value: 'TCB', label: 'Techcom Bank', link: '8' },
    { value: 'SACOM', label: 'Sacom Bank', link: '8' },
    { value: 'VCB', label: 'Vietcom Bank', link: '8' },
    { value: 'ACB', label: 'Asia Commercial Bank', link: '8' },
    { value: 'DAB', label: 'DongA Bank', link: '8' },
    { value: 'VTB', label: 'Vietin Bank', link: '8' },
    { value: 'BIDV', label: 'Bank for Investment and Development of Vietnam', link: '8' },
    { value: 'EXIM', label: 'Eximbank Vietnam', link: '8' },
];

const currency_options = [
    { value: '2', label: 'THB' },
    { value: '8', label: 'VND' },
];
// var QRCode = require('qrcode.react');

const amounts = Object.freeze([500, 750, 1000, 5000]);

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
        width: 400,
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
});

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
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

class DepositHelp2pay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            error: false,
            data: '',
            type: '',
            live_check_amount: false,
            button_disable: false,
            value: "",
            selectedCurrencyOption: 'none',
            selectedBankOption: 'none',
            order_id: "ibet" + new Date().toISOString().replace(/-/g, '').replace('T', '').replace(/:/g, '').split('.')[0],

            amountFocused: false,
            amountInvalid: true,

            currencyValue: "THB",
            showLinearProgressBar: false,
        };

        this.backClicked = this.backClicked.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.amountFocused = this.amountFocused.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    amountChanged(event) {
        if (event.target.value.length === 0 || parseInt(event.target.value) > 500000 || parseInt(event.target.value) < 500) {
            this.setState({ amount: 0, amountInvalid: true });
        } else {
            this.setState({ amount: event.target.value, amountInvalid: false });
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data, currencyValue: res.data.currency  });
            });
    }

    handleCurrencyChange = event => {
        this.setState({ selectedCurrencyOption: event.target.value, selectedBankOption: 'none' });
    };

    amountFocused(event) {
        this.setState({ amountFocused: true });
    }

    handleBankChange = event => {
        this.setState({ selectedBankOption: event.target.value });
    };

    handleClick = () => {
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        var orderid = this.state.order_id;
        var postData = {
            "amount": this.state.amount,
            "user_id": this.state.data.pk,
            "currency": this.state.selectedCurrencyOption,
            "bank": this.state.selectedBankOption,
            "language": "en-Us",
            "order_id": orderid,
        }
        //console.log(orderid)
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const token = localStorage.getItem('token');

        return fetch(API_URL + 'accounting/api/help2pay/deposit', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': 'Token ' + token
            },
            body: formBody
        }).then(function (res) {
        
            if (res.status == 200) {
                return res.text();
            }else if(res.status == 401){
                currentComponent.props.logout();
                postLogout();
                return;
            }

            currentComponent.setState({ showLinearProgressBar: false });
            currentComponent.props.callbackFromParent("error", "渠道维护中");

            //alert("渠道维护中");
            throw new Error('Something went wrong.');

        }).then(function (data) {
            if(data.errorCode){
                currentComponent.props.logout();
                postLogout();
                return;
            }
            let newwin = window.open('');
            newwin.document.write(data);
            var timer = setInterval(function () {

                currentComponent.setState({ showLinearProgressBar: false });

                //console.log('checking..')
                if (newwin.closed) {
                    clearInterval(timer);
                    const pd = JSON.stringify({
                        order_id: orderid,

                    });

                    currentComponent.setState({ showLinearProgressBar: true });


                    return fetch(API_URL + 'accounting/api/help2pay/deposit_status', {
                        method: 'POST',
                        withCredentials: true,
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'Token ' + token
                        },
                        body: pd

                    }).then(function (res) {
                        
                        return res.text();

                    }).then(function (data) {
                        
                        //console.log(data)

                        currentComponent.setState({ showLinearProgressBar: false });

                        if (data === '0') {
                            currentComponent.setState({ showLinearProgressBar: true });

                            const body = JSON.stringify({
                                type: 'add',
                                username: this.state.data.username,
                                balance: this.state.amount,
                            });
                            //console.log(body)
                            axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                .then(res => {
                                    if (res.data === 'Failed') {
                                        currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                    } else if (res.data === 'The balance is not enough') {
                                        currentComponent.props.callbackFromParent("error", "Cannot deposit this amount.");
                                    } else {
                                        currentComponent.props.callbackFromParent("success", "Transaction completed.");
                                    }
                                });
                        } else {
                            currentComponent.props.callbackFromParent("error", '渠道维护中');
                            // currentComponent.props.callbackFromParent("error", 'Your deposit failed!');
                        }
                    });
                }
            }, 1000);

        }).catch(function (err) {
    

            currentComponent.props.callbackFromParent("error", "Something is wrong");
            sendingLog(err);
            // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
        });
    }


    render() {
        const { classes } = this.props;
        const { selectedCurrencyOption } = this.state;
        const { selectedBankOption } = this.state;
        const filteredOptions = bank_options.filter((o) => o.link === this.state.selectedCurrencyOption)

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

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
                                        Help2Pay
                                </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        className={classes.select}
                                        value={selectedCurrencyOption}
                                        onChange={this.handleCurrencyChange}
                                        input={<BootstrapInput name="currency" id="currency-select" />}>
                                        <MenuItem key='none' value='none' disabled>Select Currency</MenuItem>
                                        {
                                            currency_options.map(currency => (
                                                <MenuItem key={currency.label} value={currency.value} >
                                                    {currency.label}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        className={classes.select}
                                        value={selectedBankOption}
                                        onChange={this.handleBankChange}
                                        input={<BootstrapInput name="bank" id="bank-select" />}>
                                        <MenuItem key='none' value='none' disabled>Select Bank</MenuItem>
                                        {
                                            filteredOptions.map(bank => (
                                                <MenuItem key={bank.label} value={bank.value} >
                                                    {bank.label}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Grid>
                                <Grid item xs={12} >
                                    {amounts.map((x, i) => {
                                        return (
                                            <Button
                                                className={
                                                    i === 0
                                                        ? classes.leftButton
                                                        : i === 3
                                                        ? classes.rightButton
                                                        : classes.middleButton
                                                }
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
                                        disabled={this.state.amountInvalid || this.state.selectedBankOption === 'none' || this.state.selectedCurrencyOption === 'none'}
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
        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState, logout })(DepositHelp2pay)));