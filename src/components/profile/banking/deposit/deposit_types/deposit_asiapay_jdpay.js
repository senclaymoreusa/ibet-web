import React, { Component } from 'react';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';

import TopNavbar from "../../../../top_navbar";
import '../../../../../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { authCheckState } from '../../../../../actions';
import InputAdornment from '@material-ui/core/InputAdornment';


import { ReactComponent as PrevStepIcon } from '../../../../../assets/img/svg/prev_step.svg';


var QRCode = require('qrcode.react');

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
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
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 15,
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
        marginTop: 10,
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
    depositBankcardForm: {

    }
});

class DepositAsiapayJDPay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            qaicash_error: false,
            qaicash_error_msg: "",
            live_check_amount: false,
            button_disable: false,
            value: "",
            size: 128,
            fgColor: '#000000',
            bgColor: '#ffffff',
            level: 'L',
            renderAs: 'svg',
            includeMargin: false,
            show_qrcode: false,

            firstOption: 20,
            secondOption: 50,
            thirdOption: 100,
            fourthOption: 250,
            currencyValue: "USD",
        };

        this.backClicked = this.backClicked.bind(this);
        this.firstOptionClicked = this.firstOptionClicked.bind(this);
        this.secondOptionClicked = this.secondOptionClicked.bind(this);
        this.thirdOptionClicked = this.thirdOptionClicked.bind(this);
        this.fourthOptionClicked = this.fourthOptionClicked.bind(this);


        // this.onInputChange_balance = this.onInputChange_balance.bind(this);
        this.amountChanged = this.amountChanged.bind(this);

        this.handleClick = this.handleClick.bind(this);
        // this.onQrChange  = this.onQrChange.bind(this);
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

            });
        // const { type } = this.props.match.params;


    }
    // onInputChange_balance(event) {
    //     if (!event.target.value || event.target.value.match(/^[0-9.]+$/)) {
    //         this.setState({ balance: event.target.value });

    //         if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)) {
    //             this.setState({ live_check_amount: true, button_disable: true })
    //         } else {
    //             this.setState({ live_check_amount: false, button_disable: false })
    //         }
    //     }
    // }

    firstOptionClicked(event) {
        this.setState({ amount: this.state.firstOption });
    }

    secondOptionClicked(event) {
        this.setState({ amount: this.state.secondOption });
    }

    thirdOptionClicked(event) {
        this.setState({ amount: this.state.thirdOption });
    }

    fourthOptionClicked(event) {
        this.setState({ amount: this.state.fourthOption });
    }

    amountChanged(event) {
        if (parseInt(event.target.value) > 2000) {
            let val = parseInt(event.target.value) / 10;
            this.setState({ amount: val.toFixed(0) });
            this.amountInput.current.value = val.toFixed(0);
        } else
            this.setState({ amount: event.target.value });
    }

    backClicked(ev) {
        this.props.callbackFromParent(1);
    }

    handleClick = (depositChannel, apiRoute) => {
        let currentComponent = this;
        
        var postData = {
            "amount": this.state.amount,
            "userid": this.state.data.pk,
            "currency": "0",
            "PayWay": "42", //QRcode
            "method": "49", //京东支付
        }
        console.log(this.state.amount)
        console.log(this.state.data.pk)
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return fetch(API_URL + 'accounting/api/asiapay/deposit', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then(function (res) {
            if (res.ok) {
                return res.text();
            }
            // alert("渠道维护中");
            // throw new Error('Something went wrong.');
            currentComponent.props.callbackFromParentForError("渠道维护中");

        }).then(function (data) {
            currentComponent.setState({ qr: data.qr });

            if (data.code == 'ERROR') {
                alert(data.message);
            } else {
                currentComponent.setState({ value: this.state.qr, show_qrcode: true })
            }
        }).catch(function (error) {                        // catch
            console.log('Request failed', error);
        });
    }
    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });

        let amount = this.state.balance;
        let user = this.state.data.pk;
        let myqr = this.state.qr;

        let currentComponent = this;
        const backButton = (
            <Button onClick={this.backClicked}>
                <PrevStepIcon />
            </Button>);

        return (
            <div className={classes.root}>
                <form className={classes.depositBankcardForm}>
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
                        <Grid item xs={12} className={classes.contentRow}>
                            <Grid container>
                                <Grid item xs={3} className={classes.cardTypeCell}>
                                    <Button className={classes.cardTypeButton} disabled>
                                        JD Pay
                                    </Button>
                                </Grid>
                                <Grid item xs={9} className={classes.cardTypeCell}>
                                    <div className={classes.infoRow}>
                                        <span className={classes.infoValue}>Credit card</span>
                                        <span className={classes.infoValue}>**** 0718</span>
                                    </div>
                                    <div className={classes.infoRow}>
                                        <span className={classes.infoValue}>07/20</span>
                                        <span className={classes.infoValue}>|</span>
                                        <span className={classes.infoValue}>Default</span>
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.infoCell}>
                                    <div className={classes.infoRow}>
                                        <span className={classes.infoLabel}>Fee:</span>
                                        <span className={classes.infoValue}>Free</span>
                                    </div>
                                </Grid>
                                <Grid item xs={9} className={classes.infoCell}>
                                    <div className={classes.infoRow}>
                                        <span className={classes.infoLabel}>Process Time:</span>
                                        <span className={classes.infoValue}>1-3 banking days</span>
                                    </div>
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
                                        placeholder="Deposit $10 - $2,000"
                                        onChange={this.amountChanged}
                                        error={this.state.nameInvalid && this.state.nameFocused}
                                        helperText={(this.state.nameInvalid && this.state.nameFocused) ? 'Please enter cardholder name.' : ' '}
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
                                        onClick={this.state.button_disable ? () => { } : this.handleClick}
                                        disabled={(parseInt(this.state.amount) == 0)}
                                    >Continue</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className="asiapay-qr" style={{ display: this.state.show_qrcode ? "block" : "none" }}>
                        <QRCode
                            value={this.state.value}
                            size={this.state.size}
                            fgColor={this.state.fgColor}
                            bgColor={this.state.bgColor}
                            level={this.state.level}
                            renderAs={this.state.renderAs}
                            includeMargin={this.state.includeMargin}
                        />
                    </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositAsiapayJDPay)));