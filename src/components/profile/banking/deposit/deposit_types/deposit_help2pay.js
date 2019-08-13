import React, { Component } from 'react';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { authCheckState } from '../../../../../actions';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

import { ReactComponent as PrevStepIcon } from '../../../../../assets/img/svg/prev_step.svg';

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
var QRCode = require('qrcode.react');

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
        paddingTop:6,
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

class DepositHelp2pay extends Component {
    constructor(props) {
        super(props);

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

            currencyValue: "USD",
            showLinearProgressBar: false,
        };

        this.onInputChange_amount = this.onInputChange_amount.bind(this);


        this.backClicked = this.backClicked.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    amountChanged(event) {
        if (parseInt(event.target.value) > 2000) {
            let val = parseInt(event.target.value) / 10;
            this.setState({ amount: val.toFixed(0) });
            this.amountInput.current.value = val.toFixed(0);
        } else
            this.setState({ amount: event.target.value });
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

    handleCurrencyChange = selectedCurrencyOption => {
        this.setState({ selectedCurrencyOption });
        //console.log(`Option selected:`, selectedCurrencyOption);
        this.check_button_disable()
    };
    handleBankChange = selectedBankOption => {

        this.setState({ selectedBankOption });
        //console.log(`Option selected:`, selectedBankOption);
        this.check_button_disable()
    };

    onInputChange_amount(event) {
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)) {
            this.setState({ amount: event.target.value });

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)) {
                this.setState({ live_check_amount: true, button_disable: true })
            } else {
                this.setState({ live_check_amount: false, button_disable: false })
            }
        }
        this.check_button_disable()
    }

    check_button_disable() {

        if (this.state.amount && this.state.selectedCurrencyOption != {} && this.state.selectedBankOption != {} && !this.state.live_check_amount) {
            this.setState({ button_disable: false })
        }
    }

    handleClick = () => {
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        var orderid = this.state.order_id;
        var postData = {
            "amount": this.state.amount,
            "user_id": this.state.data.pk,
            "currency": this.state.selectedCurrencyOption.value,
            "bank": this.state.selectedBankOption.value,
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
            if (res.ok) {
                return res.text();
            }
            alert("渠道维护中");
            throw new Error('Something went wrong.');

        }).then(function (data) {
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

                        if (data == '0') {
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
                                        this.setState({ error: true });
                                    } else if (res.data === 'The balance is not enough') {
                                        alert("cannot withdraw this amount")
                                    } else {
                                        alert("your balance is updated")

                                    }

                                    currentComponent.setState({ showLinearProgressBar: false });

                                });
                        } else {
                            alert('Your deposit is not success!');
                        }
                        window.location.reload()
                    });
                }
            }, 1000);

        }).catch(function (error) {
            console.log('Request failed', error);
        });
    }


    render() {
        const { classes } = this.props;
        const { selectedCurrencyOption } = this.state;
        const { selectedBankOption } = this.state;
        const filteredOptions = bank_options.filter((o) => o.link === this.state.selectedCurrencyOption.value)

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
                                    {/* <div className="select-currency">
                                        <Select
                                            placeholder="Currency"
                                            className={classes.select}
                                            value={selectedCurrencyOption}
                                            onChange={this.handleCurrencyChange}
                                            options={currency_options}
                                        />
                                    </div> */}
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

                                    {/* <div className="select-bank">
                                        <Select
                                            className={classes.select}
                                            value={selectedBankOption}
                                            onChange={this.handleBankChange}
                                            options={filteredOptions}
                                        />
                                    </div> */}
                                </Grid>
                                {/* <Grid item xs={12} >
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
                                </Grid> */}
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        className={classes.otherText}
                                        placeholder="Deposit $10 - $2,000"
                                        onChange={this.amountChanged}
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
                                            max: 2000
                                        }}
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                {/* <Grid item xs={6} className={classes.amountRow}>
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
                                </Grid> */}
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={this.state.amountInvalid}
                                    >Continue</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>

            // <div>
            //         <form className='deposit-bankcard-form'>
            //             <div>
            //                 <label>
            //                     <b>
            //                         <FormattedMessage id="deposit.currency" defaultMessage='Please choose the currency you want to use' />
            //                     </b>
            //                 </label>
            //             </div>
            //             <div className="select-currency">
            //                 <Select
            //                     value={selectedCurrencyOption}
            //                     onChange={this.handleCurrencyChange}
            //                     options={currency_options}
            //                 />
            //             </div>

            //             <div>
            //                 <label>
            //                     <b>
            //                         <FormattedMessage id="deposit.bank" defaultMessage='Please choose the bank you want to use' />
            //                     </b>
            //                 </label>
            //             </div>
            //             <div className="select-bank">
            //                 <Select
            //                     value={selectedBankOption}
            //                     onChange={this.handleBankChange}
            //                     options={filteredOptions}
            //                 />
            //             </div>
            //             <div>
            //                 <label>
            //                     <b>
            //                         <FormattedMessage id="deposit.amount" defaultMessage='Please enter the amount you want to add to your account' />
            //                     </b>
            //                 </label>
            //             </div>

            //             <TextField
            //                 className={classNames(classes.margin, classes.textField)}
            //                 variant="outlined"
            //                 type={'text'}
            //                 value={this.state.amount || ''}
            //                 onChange={this.onInputChange_amount}
            //             />
            //             <br />
            //             {
            //                 this.state.live_check_amount && this.state.live_check_amount ?
            //                     <div style={{ color: 'red' }}>
            //                         <FormattedMessage id="balance.error" defaultMessage='The amount you entered is not valid' />
            //                     </div> :
            //                     <div>
            //                         <br />
            //                     </div>
            //             }

            //             <div className='asiapay-button'  >
            //                 <Button
            //                     disabled={this.state.button_disable}
            //                     variant="contained"
            //                     color="primary"
            //                     className={classes.button}
            //                     onClick={this.state.button_disable ? () => { } : this.handleClick}

            //                 >
            //                     PAY NOW
            //                 </Button>

            //             </div>

            //         </form>
            //     </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositHelp2pay)));