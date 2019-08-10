import React, { Component } from 'react';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';
import TopNavbar from "../../../../top_navbar";

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


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;
console.log("Process.env is");
console.log(process.env);


const CLIENT = {
    sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
    production: 'xxxXXX',
};

const
    LINEPAY_LOGO_URL = "https://scdn.line-apps.com/linepay/partner/images/logo/linepay_logo_119x39_v3.png",
    MIN_DEPOSIT = 200,
    MAX_DEPOSIT = 30000,
    CURRENCY = "THB"

const styles = (theme) => ({
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

function ContainedButtons(buttonProps) {
    return (
        <Button variant="contained"
            color={buttonProps.color}
            className={buttonProps.button}
            onClick={buttonProps.onClick}>
            {buttonProps.amount.toLocaleString(undefined, { style: "currency", currency: "THB" })}
        </Button>
    );
}

class DepositLinePay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            amount_display: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            live_check_amount: false,
            button_disable: false,

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
        this.amountChanged = this.amountChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


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

    backClicked(ev) {
        this.props.callbackFromParent(1);
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
        /*
         * Check if there is a user logged in
         */
        this.props.authCheckState()
            .then(res => {
                console.log("Auth check state result: " + res)
                if (res === 1) {
                    console.log(this.props);
                    window.location.href = "/";
                    return;
                }
            })
            .catch(err => {
                console.log("ERROR!!! " + err)
            });

        console.log(this.props.history);
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currencyValue: res.data.currency });
            })
            .catch(err => {
                console.log("Error with authentication! Error: " + err);
            })

        //const { type } = this.props.match.params;
    }

    handleClick = (depositChannel, apiRoute) => {
        let currentComponent = this;

        const token = localStorage.getItem('token');
        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        let postData = {
            amount: this.state.amount
        }
        axios.post(
            API_URL + "accounting/api/linepay/reserve_payment",
            JSON.stringify(postData),
            config
        ).then(
            response => {
                console.log(response.data);
                if (response.data && response.data.returnCode && response.data.returnCode === "0000") {
                    window.open(response.data.info.paymentUrl.web);
                }
                else {
                    this.setState({ error: true });
                    if (response.data.returnMessage) this.setState({ error_msg: response.data.returnMessage });
                    else this.setState({ error_msg: response.data.errorMsg });

                }
            }
        ).catch(function (error) {                        // catch
            currentComponent.props.callbackFromParentForError(error.message);
            console.log('Request failed', error);
        });
    }

    render() {
        const { deposit_amount: depositAmount, error: showError, error_msg: errorMsg } = this.state;
        const { button_disable, live_check_amount } = this.state;
        const { formatMessage } = this.props.intl;
        const { classes } = this.props;
        let user = this.state.data.username; // this.state.data is initialized to a string not a dictionary, is modified and set to be the result data from detecting what user is logged in from API call on line 118

        const backButton = (
            <Button onClick={this.backClicked}>
                <PrevStepIcon />
            </Button>);

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });

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
                                        Linepay
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
                </form>
            </div>
            // <div>
            //     <form className="deposit-form" id="deposit_form">
            //         <p>How much do you want to deposit? {depositAmount}</p>
            //         <input
            //             type="text"
            //             value={depositAmount || ''}
            //             placeholder="Enter Amount"
            //             name="deposit_amount"
            //             onChange={this.handleChange}
            //             className="input-deposit-amount"
            //         />
            //         <br />
            //         <FormattedMessage className="min-max" id="deposit_prompt" defaultMessage={"Min: " + MIN_DEPOSIT + " " + CURRENCY} />
            //         <FormattedMessage className="min-max" id="deposit_prompt" defaultMessage={"Max: " + MAX_DEPOSIT + " " + CURRENCY} />
            //         {
            //             live_check_amount ?
            //                 <div style={{ color: 'red' }}>
            //                     <FormattedMessage id="amount.error" defaultMessage={"Invalid deposit amount!"} />
            //                 </div>
            //                 :
            //                 <div></div>
            //         }
            //         {
            //             showError ?
            //                 <div style={{ color: 'red' }}>
            //                     <FormattedMessage id="amount.error" defaultMessage={"Error: " + errorMsg} />
            //                 </div>
            //                 :
            //                 <div></div>
            //         }
            //     </form>
            //     <div id="quick-deposit" className="deposit-form">
            //         {this.renderAmtButton(200)}
            //         {this.renderAmtButton(500, "primary")}
            //         {this.renderAmtButton(1000, "primary")}
            //         {this.renderAmtButton(2500, "secondary")}
            //         {this.renderAmtButton(5000, "secondary")}
            //     </div>
            //     <div className="deposit-form" id="submit-amount">
            //         {/* <p>Select payment method:</p> */}
            //         <Button
            //             variant="contained"
            //             value="Deposit"
            //             onClick={button_disable ? () => { } : this.handleClick}
            //             style={button_disable ? {} : { cursor: "pointer" }}
            //         >
            //             {"Deposit " + depositAmount + " to my account"}
            //         </Button>
            //         {/* <img 
            //             id="LINElogo" 
            //             type="image" 
            //             onClick={button_disable ? () => {} : this.handleClick}
            //             style={button_disable ? {} : {cursor: "pointer"}}  
            //             src={LINEPAY_LOGO_URL} 
            //             alt="LINEpay logo"
            //         /> */}
            //     </div>
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositLinePay)));