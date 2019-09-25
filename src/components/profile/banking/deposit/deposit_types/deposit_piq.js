import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { connect } from 'react-redux';
// import _PaymentIQCashier from 'paymentiq-cashier-bootstrapper';
import uuidv1 from 'uuid/v1';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import {
    LinearProgress,
    InputAdornment,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import InputMask from 'react-input-mask';

import { authCheckState, AUTH_RESULT_FAIL } from '../../../../../actions';

const jsencrypt = require('jsencrypt');
const API_URL = process.env.REACT_APP_DEVELOP_API_URL,
    PIQ_API = process.env.REACT_APP_PIQ_API_URL,
    PIQ_MID = process.env.REACT_APP_PIQ_MID;

const styles = function(theme) {
    return {
        root: {
            width: 925,
            // height: 500,
            backgroundColor: '#ffffff',
            border: 'solid 1px #979797'
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
            paddingBottom: 50
        },
        cardTypeCell: {
            borderTop: '1px solid #d8d8d8',
            borderBottom: '1px solid #d8d8d8',
            height: 77,
            paddingTop: 15,
            textAlign: 'center'
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
            marginTop: 28
        },
        continueButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8'
        },
        backBankingButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8'
        },
        buttonCell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 40
        },
        backButtonCell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20
        },
        rememberCell: {
            paddingTop: 20
        },
        cardTypeButton: {
            width: 72,
            height: 48,
            borderRadius: 4.8,
            backgroundColor: '#f1f1f1'
        },
        infoCell: {
            paddingTop: 15
        },
        infoRow: {
            display: 'block'
        },
        infoLabel: {
            display: 'inline-block',
            fontSize: 16,
            fontWeight: 600,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a'
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
            marginLeft: 3
        },
        detailRow: {
            paddingTop: 1
        },
        leftButton: {
            display: 'inline-block',
            marginRight: 6.666,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44
        },
        middleButton: {
            marginLeft: 4.75,
            marginRight: 4.75,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44
        },
        rightButton: {
            marginLeft: 6.666,
            // marginRight: 0,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 88,
            height: 44
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
            margin: '10px 0px 10px 0px',
            padding: '6px 10px 0px 10px',
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        amountRow: {
            marginTop: 10,
            height: 40,
            borderBottom: '4px solid #5e5e5e'
        },
        amountRightRow: {
            marginTop: 10,
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
            color: '#292929'
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
            marginBottom: 10,
            padding: '7px 0px 10px 15px',
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
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
            margin: '10px 10px 10px 0px',
            padding: '7px 0px 10px 15px',
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
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
            margin: '10px 0px 10px 10px',
            padding: '7px 0px 10px 15px',
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        dropDowns: {
            paddingTop: 12,
            paddingBottom: 20
            // marginRight: 5,
            // marginLeft: 10
        },
        textField: {
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        amountButtonRow: {
            // paddingTop: 15
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
            width: 200
        },
        menuItem: {
            marginRight: 20
        }
    };
};

const amounts = Object.freeze([25, 50, 100, 500]);

class DepositPIQ extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            name: '',
            nameFocused: false,
            nameInvalid: true,

            serialNumber: '',
            numberFocused: false,
            numberInvalid: true,

            pinNumber: '',
            pinNumberFocused: false,
            pinNumberInvalid: true,

            operator: 'none',
            operatorInvalid: true,

            amount: 0,
            amountFocused: false,
            amountInvalid: true,

            expireDate: '',
            dateInvalid: true,
            cvv: '',

            currencyValue: 'USD',
            showLinearProgressBar: false
        };
    }

    userCheck = () => {
        return axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({
                userData: res.data,
                currencyValue: res.data.currency
            });
            console.log('res data:');
            console.log(res.data);
            return res.data.username;
        });
    };

    getDepositMethods = (username, sessionId) => {
        console.log('gettign deposit methods for: ' + username);
        return axios.get(
            PIQ_API +
                'api/user/payment/method/' +
                PIQ_MID +
                '/' +
                username +
                '?sessionId=' +
                sessionId +
                '&method=deposit'
        );
    };

    async componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                window.location.href = '/';
                return;
            }
        });
        this.setState({ sessionId: uuidv1() });

        let encrypt = new jsencrypt.JSEncrypt();

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        await this.userCheck();
        console.log('component mounted');
    }

    backClicked = () => {
        this.props.callbackFromParent('deposit_method');
    };

    amountChanged = event => {
        this.setState({
            amount: event.target.value,
            amountFocused: true,
            amountInvalid: false
        });
    };

    nameChanged = event => {
        this.setState({
            name: event.target.value,
            nameFocused: true,
            nameInvalid: event.target.value.toString().split(' ').length < 2
        });
    };

    numberChanged = event => {
        this.setState({
            serialNumber: event.target.value,
            numberFocused: true,
            numberInvalid: event.target.value.toString().length != 19
        });
    };

    cvvChanged = event => {
        this.setState({
            cvv: event.target.value,
            cvvFocused: true,
            cvvInvalid: event.target.value.toString().length != 3
        });
    };

    dateChanged = event => {
        let currDate = new Date();

        this.setState({
            expireDate: event.target.value,
            dateFocused: true,
            dateInvalid:
                event.target.value.toString().length != 7 ||
                parseInt(event.target.value.toString().slice(0, 2)) > 12 ||
                parseInt(event.target.value.toString().slice(3)) <
                    currDate.getFullYear()
        });
    };

    handleClick = async () => {
        let currentComponent = this;
        currentComponent.setState({ showLinearProgressBar: true });

        const {
            userData,
            sessionId,
            name,
            cvv,
            serialNumber,
            amount,
            expireDate
        } = this.state;

        const token = localStorage.getItem('token');
        if (!token) {
            console.log('no token -- user is not logged in');
            window.location.href = '/';
        }
        config.headers['Authorization'] = `Token ${token}`;

        let encrypt = new jsencrypt.JSEncrypt();
        encrypt.setPublicKey(process.env.REACT_APP_PIQ_PEM);

        let encCcNum = encrypt.encrypt(serialNumber);
        let encCvv = encrypt.encrypt(cvv);
        let expiry = expireDate.split('/');

        let postData = {
            sessionId: sessionId,
            userId: userData.username,
            merchantId: PIQ_MID,
            amount: amount,
            cardHolder: name || 'John Doe',
            encCreditcardNumber: encCcNum,
            encCvv: encCvv,
            expiryMonth: expiry[0],
            expiryYear: expiry[1]
            // attributes: {
            //     transactionMethod: 'deposit'
            // }
        };
        console.log('post data:');
        console.log(postData);
        axios
            .post(PIQ_API + 'api/creditcard/deposit/process', postData)
            .then(res => {
                console.log(res.data);
                if (res.data.txState === 'SUCCESSFUL') {
                    // show success page
                    currentComponent.setState({ showLinearProgressBar: false });
                    currentComponent.props.callbackFromParent('success');
                } else {
                    // show deposit page
                    currentComponent.setState({ showLinearProgressBar: false });
                    currentComponent.props.callbackFromParent(
                        'error',
                        res.data.errors[0].msg
                    );
                }
            });
    };

    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar, amount } = this.state;

        let depositAmountMessage = formatMessage({
            id: 'deposit.deposit_amount'
        });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} />
            </Button>
        );

        return (
            <div className={classes.root} id="cashier">
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
                        <Grid item xs={2} className={classes.backCell}></Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && (
                                <LinearProgress />
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.contentRow}
                            style={
                                showLinearProgressBar === true
                                    ? { pointerEvents: 'none' }
                                    : { pointerEvents: 'all' }
                            }
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.cardTypeCell}
                                >
                                    <Button
                                        className={classes.cardTypeButton}
                                        disabled
                                    >
                                        PAYMENT IQ
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                    style={{ marginTop: '10px' }}
                                >
                                    <TextField
                                        className={classes.detailText}
                                        value={this.state.name}
                                        onChange={this.nameChanged}
                                        placeholder="John Doe"
                                        type="text"
                                        error={
                                            this.state.nameInvalid &&
                                            this.state.nameFocused
                                        }
                                        helperText={
                                            this.state.nameInvalid &&
                                            this.state.nameFocused
                                                ? 'Invalid Name'
                                                : ''
                                        }
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                >
                                    <InputMask
                                        mask="9999 9999 9999 9999"
                                        maskChar={null}
                                        onChange={this.numberChanged}
                                        onFocus={this.numberFocused}
                                        value={this.state.serialNumber}
                                        className={classes.detailText}
                                    >
                                        {() => (
                                            <TextField
                                                className={classes.detailText}
                                                placeholder="Card Number"
                                                type="text"
                                                error={
                                                    this.state.numberInvalid &&
                                                    this.state.numberFocused
                                                }
                                                helperText={
                                                    this.state.numberInvalid &&
                                                    this.state.numberFocused
                                                        ? 'Please enter 16-digit card number.'
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.expireCell}
                                >
                                    <InputMask
                                        mask="99/9999"
                                        maskChar={null}
                                        onChange={this.dateChanged}
                                        onFocus={this.dateFocused}
                                        value={this.state.expireDate}
                                        className={classes.expireText}
                                    >
                                        {() => (
                                            <TextField
                                                className={classes.expireText}
                                                placeholder="MM/YYYY"
                                                type="text"
                                                error={
                                                    this.state.dateInvalid &&
                                                    this.state.dateFocused
                                                }
                                                helperText={
                                                    this.state.dateInvalid &&
                                                    this.state.dateFocused
                                                        ? 'Invalid expiration date'
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={6} className={classes.cvvCell}>
                                    <InputMask
                                        mask="999"
                                        maskChar={null}
                                        onChange={this.cvvChanged}
                                        onFocus={this.cvvFocused}
                                        value={this.state.cvv}
                                        className={classes.cvvText}
                                    >
                                        {() => (
                                            <TextField
                                                className={classes.cvvText}
                                                placeholder="CVV"
                                                type="text"
                                                error={
                                                    this.state.cvvInvalid &&
                                                    this.state.cvvFocused
                                                }
                                                helperText={
                                                    this.state.cvvInvalid &&
                                                    this.state.cvvFocused
                                                        ? 'Invalid code'
                                                        : ' '
                                                }
                                                InputProps={{
                                                    disableUnderline: true,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <img
                                                                src={
                                                                    images.src +
                                                                    'card-cvv.svg'
                                                                }
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.amountButtonRow}
                                >
                                    {amounts.map((x, i) => {
                                        return (
                                            <Button
                                                className={classes.middleButton}
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
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                >
                                    <TextField
                                        className={classes.otherText}
                                        // placeholder="Amount: e.g. 100.00"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                        }
                                        helperText={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                                ? 'Please enter a valid amount.'
                                                : ' '
                                        }
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    Other
                                                </InputAdornment>
                                            )
                                        }}
                                        type="number"
                                        inputProps={{
                                            step: 10,
                                            min: 10
                                        }}
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.amountRow}>
                                    <div className={classes.amountText}>
                                        <FormattedNumber
                                            value={this.state.amount || '0.00'}
                                            style="currency"
                                            currency={this.state.currencyValue}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.amountRightRow}
                                >
                                    <span className={classes.amountText}>
                                        Total
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.buttonCell}
                                >
                                    <Button
                                        className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={
                                            this.state.amountInvalid ||
                                            this.state.numberInvalid ||
                                            this.state.dateInvalid ||
                                            this.state.cvvInvalid
                                        }
                                    >
                                        {continueMessage}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.backButtonCell}
                                >
                                    <Button
                                        className={classes.backBankingButton}
                                        onClick={this.backClicked}
                                    >
                                        {backMessage}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState }
        )(DepositPIQ)
    )
);

// new _PaymentIQCashier(
//     '#cashier',
//     {
//         merchantId: '100185999',
//         userId: res.data.username,
//         sessionId: uuidv1(),
//         containerHeight: '550px',
//         containerWidth: '60%',
//         environment: 'test' // if not set, defaults to production
//     },
//     api => {
//         api.on({
//             doneLoading: function(data) {
//                 console.log(
//                     'Cashier intialized and ready to take down the empire1'
//                 );
//             },
//             update: function(data) {
//                 console.log(
//                     'Cashier intialized and ready to take down the empire2'
//                 );
//             }
//         });
//     }
// );
