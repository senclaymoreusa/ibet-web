/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    sendingLog,
    authUserUpdate
} from '../../../../../../actions';
import getSymbolFromCurrency from 'currency-symbol-map';
import { withRouter } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import zxcvbn from 'zxcvbn';
import NumberFormat from 'react-number-format';
import Bank_Info from '../../../../../../commons/bank_info';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PasswordStrengthMeter from '../../../../../../commons/PasswordStrengthMeter';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = () => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    contentGrid: {
        width: 430
    },
    label: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: -6,
        width: 80,
        color: '#212121',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    totalBalance: {
        fontSize: 36,
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a'
    },
    addButton: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#53abe0'
    },
    passwordField: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 36,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        border: 'solid 1px #7a7a7a',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    grow: {
        flexGrow: 1
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
    },
    actionButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        '&:focus': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        textTransform: 'capitalize'
    },
    hintText: {
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    hintContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 25,
        paddingLeft: 10,
    },
    cancelButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,

        textTransform: 'capitalize'
    },
    amountText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingLeft: 6,
        paddingRight: 10,
        paddingTop: 6,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
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
        paddingLeft: 6,
        paddingRight: 10,
        paddingTop: 6,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
    },
    successRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 800,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
        marginTop: 44
    },
    completeCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    completeDiv: {
        height: 160,
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: '#cffcea',
        justifyContent: 'center'
    },
    accountRow: {
        cursor: 'pointer',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    accountInfo: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.15,
        color: '#252525'
    },
    forgot: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#53abe0',
        marginTop: 3,
        textTransform: 'capitalize'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#f28f22',
        marginBottom: 15,
        width: 80,
        height: 44,
        fontSize: 15,
        color: '#fff',
        opacity: 0.5,
        '&:hover': {
            backgroundColor: '#f28f22',
            opacity: 1
        },
        '&:focus': {
            backgroundColor: '#f28f22',
            opacity: 1
        }
    },
    selected: {
        backgroundColor: '#f28f22',
        opacity: 1
    }
});

const amounts = Object.freeze([250, 500, 1000, 2500]);

function NumberFormatCustom(props) {
    const { currency, inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale
            prefix={currency}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
};

const snackStyles = makeStyles(theme => ({
    success: {
        backgroundColor: '#21e496'
    },
    error: {
        backgroundColor: '#fa2054'
    },
    info: {
        backgroundColor: '#53abe0'
    },
    warning: {
        backgroundColor: '#f28f22'
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    }
}));

function LetouSnackbarContentWrapper(props) {
    const classes = snackStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>
            ]}
            {...other}
        />
    );
}

LetouSnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired
};

class ChinaLocalBank extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            cards: [],

            alreadyHaveWithdrawPassword: false,
            withdrawPassword: '',

            cardholder: '',
            cardNumber: '',

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',

            currentIdForRemoving: '',
            openConfirm: false,

            createWithdrawPassword: '',
            createWithdrawPasswordInvalid: false,
            createConfirmWithdrawPassword: '',
            createConfirmWithdrawPasswordInvalid: false,

            selectedCard: null,
            amount: ''
        };
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        const { user } = this.props;


        if (this._isMounted && user) {
            this.getBankCards();

            this.setState({
                cardholder: user.firstName + ' ' + user.lastName
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    getBankCards() {
        const { user } = this.props;
        let requestURL = `accounting/api/transactions/get_withdraw_accs?id=${user.userId}`;

        axios
            .get(API_URL + requestURL)
            .then(res => {
                if (res.status === 200) {
                    let items = res.data.results;

                    for (const card of items) {
                        let bi = Bank_Info['Bank_Info']
                            .filter(b => {
                                return b.CardLength == card.account_no.length;
                            })
                            .filter(b => {
                                return (
                                    b.BINCode ==
                                    card.account_no.substring(
                                        0,
                                        b.BINCodeLength
                                    )
                                );
                            })[0];

                        if (bi) {
                            card.BankName = bi.BankName;
                        } else {
                            card.BankName = this.getLabel('my-card');
                        }
                    }

                    this.setState({
                        cards: items
                    });
                }
            })
            .catch(err => {
                this.setState({ cards: [] });
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    cancelCreatePasswordClicked() {
        this.setState({
            activeStep: 0,
            createWithdrawPassword: '',
            createWithdrawPasswordInvalid: false,
            createConfirmWithdrawPassword: '',
            createConfirmWithdrawPasswordInvalid: false
        });
    }

    cancelCreateBankCardClicked() {
        this.setState({
            activeStep: 0,
            cardholder: '',
            cardNumber: '',
            withdrawPassword: ''
        });
    }

    cancelWithdrawClicked() {
        this.setState({
            activeStep: 0,
            amount: '',
            selectedCard: '',
        });
    }

    createWithdrawPassword() {
        let currentComponent = this;

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/setting-withdraw-password/',
            {
                'userId': this.props.user.userId,
                'withdrawPassword': this.state.createWithdrawPassword
            }, config)
            .then(() => {
                this.setState({
                    snackType: 'success',
                    snackMessage: this.getLabel('withdrawal-password-success'),
                    showSnackbar: true,
                    activeStep: 0
                });

                currentComponent.props.authUserUpdate();
            }).catch(err => {
                sendingLog(err);

                this.setState({
                    snackMessage: this.getLabel('password-update-failed'),
                    snackType: 'error',
                    showSnackbar: true
                });
            })
    }

    deleteCard() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let requestURL = `accounting/api/transactions/del_withdraw_acc`;
        console.log(requestURL)
        axios
            .post(
                API_URL + requestURL,
                {
                    user_id: this.props.user.userId,
                    acc_id: this.state.currentIdForRemoving
                },
                config
            )
            .then(() => {
                this.setState({
                    currentIdForRemoving: '',
                    openConfirm: false
                })
                this.getBankCards();
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    bankCardNumberChanged(event) {
        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value)) {
            this.setState({ cardNumber: event.target.value });
        } else if (event.target.value.length === 0)
            this.setState({ cardNumber: '' });
    }

    checkWithdrawalPassword() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        axios
            .post(
                API_URL + 'users/api/check-withdraw-password/',
                {
                    user_id: this.props.user.userId,
                    password: this.state.withdrawPassword
                },
                config
            )
            .then(() => {
                this.deleteCard(this.state.currentIdForRemoving);

            })
            .catch(err => {
                sendingLog(err);

                this.setState({
                    snackMessage: this.getLabel('error-withdraw-password'),
                    snackType: 'error',
                    showSnackbar: true
                });
            });
    }

    createBankCard() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let bodyItem = {};

        if (this.state.cardholder.length > 0)
            bodyItem = {
                user_id: this.props.user.userId,
                acc_no: this.state.cardNumber,
                full_name: this.state.cardholder
            };
        else
            bodyItem = {
                user_id: this.props.user.userId,
                acc_no: this.state.cardNumber
            };

        axios
            .post(
                API_URL + 'accounting/api/transactions/add_withdraw_acc',
                bodyItem,
                config
            )
            .then(res => {
                this.setState({
                    snackType: 'success',
                    snackMessage: this.getLabel('add-account-success'),
                    showSnackbar: true,
                    activeStep: 0
                });
                this.getBankCards();
            })
            .catch(err => {
                sendingLog(err);

                this.setState({
                    snackMessage: this.getLabel('add-account-failed'),
                    snackType: 'error',
                    showSnackbar: true
                });
            });
    }

    createPasswordChanged(event) {
        this.setState({ createWithdrawPassword: event.target.value });

        let testedResult = zxcvbn(event.target.value);
        console.log('testedResult:' + testedResult)
        this.setState({
            createWithdrawPasswordInvalid: !(testedResult.score === 3 || testedResult.score === 4),
            createConfirmWithdrawPasswordInvalid: (event.target.value !== this.state.createConfirmWithdrawPassword) && this.state.createConfirmWithdrawPasswordFocused
        });
    }

    createConfirmPasswordChanged(event) {
        this.setState({
            createConfirmWithdrawPassword: event.target.value,
            createConfirmWithdrawPasswordFocused: true,
            createConfirmWithdrawPasswordInvalid: (this.state.createWithdrawPassword !== event.target.value)
        });
    }

    amountChanged(event) {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                this.setState({
                    amount: event.target.value,
                    amountInvalid:
                        parseFloat(event.target.value) < 100 ||
                        parseFloat(event.target.value) > 50000
                });
            } else {
                this.setState({ amountInvalid: true });
            }
        }
    }

    confirmWithdraw() {
        let currentComponent = this;

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        const body = JSON.stringify({
            bank: this.state.selectedCard.BankName,
            bank_acc_no: this.state.selectedCard.account_no,
            real_name:
                this.props.user.firstName + ' ' + this.props.user.lastName,
            username: this.props.user.username,
            amount: this.state.amount,
            currency: 0,
            type: '1'
        });
        console.log(body)
        return axios
            .post(
                API_URL + 'accounting/api/transactions/save_transaction',
                body,
                config
            )
            .then(res => {
                if (res.statusText === 'OK') {
                    return res.data;
                } else {
                    currentComponent.props.callbackFromParent(
                        'error',
                        'Transaction failed.'
                    );
                }
            })
            .then(function (data) {
                let status = data.success;
                if (status) {
                    const sbody = JSON.stringify({
                        type: 'withdraw',
                        username: currentComponent.props.user.username,
                        balance: currentComponent.state.amount
                    });
                    axios
                        .post(
                            API_URL + `users/api/addorwithdrawbalance/`,
                            sbody,
                            config
                        )
                        .then(res => {
                            if (res.data === 'Failed') {
                                //this.setState({ error: true });
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Transaction failed!'
                                );
                            } else if (
                                res.data === 'The balance is not enough'
                            ) {
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Cannot withdraw this amount!'
                                );
                            } else {
                                currentComponent.props.authUserUpdate();
                                currentComponent.props.callbackFromParent(
                                    'success',
                                    'Your balance is updated.'
                                );
                            }
                        });
                } else {
                    currentComponent.props.callbackFromParent(
                        'error',
                        'Somthing is wrong'
                    );
                }
            })
            .catch(err => {
                currentComponent.props.callbackFromParent(
                    'error',
                    'Something is wrong.'
                );
                sendingLog(err);
            });
    }

    getContent() {
        const { classes, user } = this.props;
        const {
            activeStep,
            cards,
            selectedCard,
            amount,
            withdrawPassword,
            createWithdrawPassword,
            createConfirmWithdrawPassword,
            cardholder,
            cardNumber
        } = this.state;

        if (activeStep === 4) {
            for (const card of cards) {
                let bi = Bank_Info['Bank_Info']
                    .filter(b => {
                        return b.CardLength == card.account_no.length;
                    })
                    .filter(b => {
                        return (
                            b.BINCode ==
                            card.account_no.substring(0, b.BINCodeLength)
                        );
                    })[0];

                if (bi) {
                    card.BankName = bi.BankName;
                } else {
                    card.BankName = this.getLabel('my-card');
                }
            }
        }

        switch (activeStep) {
            case 0:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('bank-account')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginBottom: 10 }}
                            >
                                {this.getLabel('add-bank-account-text')}
                            </span>
                            {cards.length > 0 && (
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ width: '100%' }}
                                />
                            )}

                            {cards.map(card => (
                                <div
                                    key={card.account_no}
                                    className={classes.column}
                                >
                                    <div className={classes.accountRow}>
                                        <div className={classes.row} style={{ width: '100%' }}
                                            onClick={() => {
                                                this.setState({
                                                    selectedCard: card,
                                                    activeStep: user.hasWithdrawPassword
                                                        ? 4
                                                        : 1
                                                });
                                            }}>
                                            <span className={classes.accountInfo}>
                                                {card.BankName}
                                                {' - '}
                                                {card.account_no.substring(
                                                    card.account_no.length - 3
                                                )}
                                            </span>
                                            <div className={classes.grow} />
                                        </div>
                                        <Button
                                            className={classes.action}
                                            onClick={() => {
                                                this.setState({
                                                    currentIdForRemoving: card.id,
                                                    openConfirm: true
                                                });
                                            }}
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/delete-btn.svg'
                                                }
                                                alt=""
                                            />
                                        </Button>
                                    </div>
                                    <Divider
                                        variant="fullWidth"
                                        light={true}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            ))}
                            <Button
                                className={classes.addButton}
                                onClick={event => {
                                    this.setState({
                                        activeStep: user.hasWithdrawPassword
                                            ? 2
                                            : 1
                                    });
                                }}
                            >
                                <img
                                    src={images.src + 'letou/plus.svg'}
                                    alt=""
                                    style={{ marginRight: 5 }}
                                />
                                {this.getLabel('add-bank-account')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: 30
                            }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('create-withdrawal-password')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel(
                                    'create-withdrawal-password-text'
                                )}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <TextField
                                className={classes.passwordField}
                                placeholder={this.getLabel('password-label')}
                                value={createWithdrawPassword}
                                onChange={this.createPasswordChanged.bind(this)}
                                type={
                                    this.state.showCreateWithdrawPassword
                                        ? ''
                                        : 'password'
                                }
                                error={this.state.createWithdrawPasswordInvalid}
                                helperText={this.state.createWithdrawPasswordInvalid ? this.getLabel('please-strong-password') : ''}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={
                                                    createWithdrawPassword.length ===
                                                    0
                                                }
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showCreateWithdrawPassword: !state.showCreateWithdrawPassword
                                                    }));
                                                }}
                                            >
                                                {this.state
                                                    .showCreateWithdrawPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Tooltip
                                title={this.getLabel(
                                    'eight-characters-warning'
                                )}
                            >
                                <img
                                    style={{ marginLeft: 5 }}
                                    src={images.src + 'letou/info-orange.svg'}
                                    alt=""
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.passwordField}
                                placeholder={this.getLabel('confirm-password')}
                                value={createConfirmWithdrawPassword}
                                onChange={this.createConfirmPasswordChanged.bind(this)}
                                type={this.state.showConfirmPassword ? '' : 'password'}
                                error={this.state.createConfirmWithdrawPasswordInvalid}
                                helperText={this.state.createConfirmWithdrawPasswordInvalid ? this.getLabel('password-not-match') : ''}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {(!this.state.createConfirmWithdrawPasswordInvalid && this.state.createConfirmWithdrawPasswordFocused) ? <img
                                                src={images.src + 'letou/circle-confirmation.svg'}
                                                alt=""
                                            />
                                                : <div />}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {
                                createWithdrawPassword && <div className={classes.hintContainer}>
                                    <PasswordStrengthMeter password={createWithdrawPassword} />
                                    <span className={classes.hintText}>{this.getLabel('register-hint1')}</span>
                                    <span className={classes.hintText}>{this.getLabel('register-hint2')}</span>
                                    <span className={classes.hintText}>{this.getLabel('register-hint3')}</span>
                                    <span className={classes.hintText}>{this.getLabel('register-hint4')}</span>
                                </div>
                            }
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={this.cancelCreatePasswordClicked.bind(this)}
                            >
                                {this.getLabel('cancel-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                className={classes.actionButton}
                                onClick={this.createWithdrawPassword.bind(this)}
                                disabled={this.state.createWithdrawPasswordInvalid
                                    || this.state.createWithdrawPassword.length === 0
                                    || this.state.createConfirmWithdrawPasswordInvalid
                                    || this.state.createConfirmWithdrawPassword.length === 0}
                            >
                                {this.getLabel('next-label')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('bank-account')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel('bank-details-withdraw')}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ marginTop: 30 }}
                        >
                            <TextField
                                className={classes.detailText}
                                placeholder={this.getLabel('card-holder')}
                                value={cardholder}
                                onChange={event => {
                                    this.setState({
                                        cardholder: event.target.value
                                    });
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Tooltip
                                                title={this.getLabel(
                                                    'account-name-tooltip'
                                                )}
                                                placement="bottom"
                                            >
                                                <img
                                                    src={
                                                        images.src +
                                                        'letou/info-icon.svg'
                                                    }
                                                    alt=""
                                                    height="20"
                                                />
                                            </Tooltip>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.detailText}
                                placeholder={this.getLabel('bank-card-number')}
                                onChange={this.bankCardNumberChanged.bind(
                                    this
                                )}
                                value={cardNumber}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/info-icon.svg'
                                                }
                                                alt=""
                                                height="20"
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{ marginBottom: 30 }}>
                            <TextField
                                className={classes.passwordField}
                                value={withdrawPassword}
                                onChange={event => {
                                    this.setState({
                                        withdrawPassword: event.target.value
                                    });
                                }}
                                type={
                                    this.state.showWithdrawPassword
                                        ? ''
                                        : 'password'
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={
                                                    withdrawPassword.length ===
                                                    0
                                                }
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showWithdrawPassword: !state.showWithdrawPassword
                                                    }));
                                                }}
                                            >
                                                <Tooltip
                                                    title={this.getLabel(
                                                        'withdraw-password-tooltip'
                                                    )}
                                                    placement="bottom"
                                                >
                                                    {this.state
                                                        .showWithdrawPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                </Tooltip>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Button className={classes.forgot}>
                                {this.getLabel('forgot-password')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} style={{ marginBottom: 30 }}></Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={this.cancelCreateBankCardClicked.bind(this)}
                            >
                                {this.getLabel('cancel-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                className={classes.actionButton}
                                onClick={this.checkWithdrawalPassword.bind(
                                    this
                                )}
                                disabled={
                                    this.state.cardholder.length === 0 ||
                                    this.state.cardNumber.length === 0 ||
                                    this.state.withdrawPassword.length === 0
                                }
                            >
                                {this.getLabel('next-label')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 3:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid item xs={12} className={classes.completeCell}>
                            <div className={classes.completeDiv}>
                                <img src={images.src + 'letou/ok.svg'} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.successRow}>
                            <span className={classes.title}>
                                {this.getLabel('account-added')}
                            </span>
                        </Grid>
                    </Grid>
                );
            case 4:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ borderBottom: '1px solid #e7e7e7' }}
                        >
                            <span
                                className={classes.text}
                                style={{ marginLeft: 10 }}
                            >
                                {selectedCard.BankName}
                                {' - '}
                                {selectedCard.account_no.substring(
                                    selectedCard.account_no.length - 3
                                )}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row} style={{ textAlign: 'center' }}>
                            <span className={classes.text}>
                                {this.getLabel('total-balance')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 10 }}
                                className={classes.bankIcon}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: 'center',
                                borderBottom: '1px solid #e7e7e7',
                                paddingTop: 15,
                                paddingBottom: 20
                            }}
                        >
                            <span className={classes.totalBalance}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('withdrawal-balance')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                                style={{ marginLeft: 10 }}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('locked-balance')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>
                                {getSymbolFromCurrency(user.currency)}
                                {Number(user.balance).toFixed(2)}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span className={classes.detailLabel}>
                                {this.getLabel('free-withdrawals-remaining')}
                            </span>
                            <img
                                src={images.src + 'letou/info-icon.svg'}
                                alt=""
                                style={{ marginLeft: 6 }}
                                className={classes.bankIcon}
                            />
                            <div className={classes.grow} />
                            <span className={classes.text}>0</span>
                        </Grid>
                        {amounts.map((x, i) => {
                            return (
                                <Grid
                                    item
                                    xs={3}
                                    key={i}
                                    style={{ paddingTop: 20 }}
                                >
                                    <Button
                                        className={clsx({
                                            [classes.button]: true,
                                            [classes.selected]: x === amount
                                        })}
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
                                </Grid>
                            );
                        })}
                        <Grid item xs={12} className={classes.detailRow}>
                            <span className={classes.desc}>
                                {this.getLabel('withdraw-fee-text')}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.amountText}
                                placeholder={this.getLabel(
                                    'zh-localbank-placeholder-withdraw'
                                )}
                                onChange={this.amountChanged.bind(this)}
                                value={amount}
                                error={
                                    this.state.amountInvalid &&
                                    this.state.amountFocused
                                }
                                helperText={
                                    this.state.amountInvalid &&
                                        this.state.amountFocused
                                        ? this.getLabel('valid-amount')
                                        : ' '
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    inputComponent: NumberFormatCustom,
                                    inputProps: {
                                        step: 10,
                                        min: 100,
                                        max: 50000,
                                        style: { textAlign: 'right' },
                                        currency: getSymbolFromCurrency(user.currency)
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <span className={classes.label}>
                                                {this.getLabel('amount-label')}
                                            </span>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ paddingBottom: 0 }}
                        >
                            <div
                                style={{
                                    border: '1px solid #e7e7e7',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: 12,
                                    borderTopLeftRadius: 3,
                                    borderTopRightRadius: 3
                                }}
                            >
                                <span className={classes.detailLabel}>
                                    {this.getLabel('fees-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.text}>
                                    {this.getLabel('free-label')}
                                </span>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ paddingTop: 0 }}
                        >
                            <div
                                style={{
                                    borderLeft: '1px solid #e7e7e7',
                                    borderRight: '1px solid #e7e7e7',
                                    borderBottom: '1px solid #e7e7e7',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: 12,
                                    borderBottomLeftRadius: 3,
                                    borderBottomRightRadius: 3
                                }}
                            >
                                <span className={classes.detailLabel}>
                                    {this.getLabel('receive-amount')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.text}>
                                    {amount === ''
                                        ? ''
                                        : getSymbolFromCurrency(user.currency)}
                                    {amount === ''
                                        ? ''
                                        : Number(amount).toFixed(2)}
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={this.cancelWithdrawClicked.bind(this)}
                            >
                                {this.getLabel('cancel-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonCell}>
                            <Button
                                className={classes.actionButton}
                                onClick={this.confirmWithdraw.bind(this)}
                                disabled={
                                    amount === '' || this.state.amountInvalid
                                }
                            >
                                {this.getLabel('confirm-label')}
                            </Button>
                        </Grid>
                    </Grid>
                );
        }
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.getContent()}
                <Dialog
                    open={this.state.openConfirm}
                    onClose={() => {
                        this.setState({
                            openConfirm: false
                        })
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.getLabel('are-you-sure')}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.getLabel('about-delete-card')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.setState({
                                    openConfirm: false,
                                    currentIdForRemoving: ''
                                })
                            }}
                            color="primary">
                            {this.getLabel('cancel-label')}
                        </Button>
                        <Button
                            onClick={
                                this.deleteCard.bind(this)}
                            color="primary" autoFocus>
                            {this.getLabel('remove-label')}
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    open={this.state.showSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleSnackbarClose}
                >
                    <LetouSnackbarContentWrapper
                        onClose={this.handleSnackbarClose}
                        variant={this.state.snackType}
                        message={this.state.snackMessage}
                    />
                </Snackbar>
            </div >
        );
    }
}

const mapStateToProps = state => {
    const { token, user } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, sendingLog, authUserUpdate })(
                ChinaLocalBank
            )
        )
    )
);
