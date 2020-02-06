/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState,
    sendingLog,
    AUTH_RESULT_FAIL
} from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
import Bank_Info from '../../../../commons/bank_info';
import { config, images } from '../../../../util_config';
import axios from 'axios';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
};

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000'
    },
    titleRow: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderBottom: '1px solid #cdcdcd'
    },
    row: {
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        textTransform: 'capitalize',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap'
    },
    grow: {
        flexGrow: 1
    },
    textfield: {
        width: '100%',
        maxWidth: 240,
        marginRight: 20,
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
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    container: {
        width: '100%',
        maxWidth: 450,
        marginTop: 30
    },
    button: {
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
        minWidth: 140,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        '&:focus': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        }
    },
    account: {
        width: 200,
        maxWidth: 200,
        marginRight: 20,
        height: 140,
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginRight: 0
        },
        borderRadius: 4,
        backgroundColor: '#f5f5f5',
        border: '1px solid #d4d4d4',
        '&:hover': {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        },
        '&:focus': {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        }
    },
    addAccount: {
        width: 200,
        maxWidth: 200,
        height: 140,
        paddingTop: 40,
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 4,
        border: '1px dashed #acd',
        '&:hover': {
            backgroundColor: '#dfeef7',
        },
        '&:focus': {
            backgroundColor: '#dfeef7',
        }
    },
    accountRow: {
        padding: 3,
        paddingLeft: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    action: {
        color: '#1976d2',
        textTransform: 'capitalize',
        '&:hover': {
            color: '#1976d2'
        },
        '&:focus': {
            color: '#1976d2'
        }
    }
});

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

export class BankCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            cardholder: '',
            cardNumber: '',
            password: '',
            showPassword: false,

            activeStep: 0,
            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',

        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                sendingLog('authentication failure!!!');
            } else {
                const { user } = this.props;

                this.getBanckCards();

                this.setState({
                    cardholder: user.firstName + ' ' + user.lastName
                });
            }
        });
    }

    getBanckCards() {
        const { user } = this.props;
        let requestURL = `accounting/api/transactions/get_withdraw_accs?id=${user.userId}`;

        axios
            .get(API_URL + requestURL)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        cards: res.data.results,
                        activeSteps: res.data.results.length > 0 ? 0 : 1
                    });

                }
            })
            .catch(err => {
                this.setState({ items: [] });
                sendingLog(err);
            });

    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
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
                    password: this.state.password
                },
                config
            )
            .then(() => {
                this.createBankCard();
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

    deleteCard(id) {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let requestURL = `accounting/api/transactions/del_withdraw_acc`;

        axios
            .post(
                API_URL + requestURL,
                {
                    user_id: this.props.user.userId,
                    acc_id: id
                },
                config
            )
            .then(() => {
                this.getBanckCards();
            })
            .catch(err => {
                sendingLog(err);
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
                this.getBanckCards();
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

    render() {
        const { classes } = this.props;
        const { cards, cardholder, cardNumber, password, activeStep } = this.state;

        for (const card of cards) {
            let bi = Bank_Info['Bank_Info'].filter(b => {
                return b.CardLength == card.account_no.length;
            })
                .filter(b => {
                    return b.BINCode == card.account_no.substring(0, b.BINCodeLength);
                })[0];

            if (bi) {
                card.BankName = bi.BankName;
            } else {
                card.BankName = this.getLabel('my-card');
            }
        }

        return (
            <div className={classes.root}>
                {activeStep == 0 ?
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {this.getLabel('bank-card-management')}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            {cards.map(card => (
                                <div key={card.id} className={classes.account}>
                                    <Grid container>
                                        <Grid item xs={12} className={classes.row} style={{ borderBottom: '1px solid #d4d4d4' }}>
                                            <span className={classes.label}>
                                                {card.BankName}
                                            </span>
                                            <div className={classes.grow} />
                                            <span className={classes.label}>
                                                {'...'}
                                                {card.account_no.substring(card.account_no.length - 3)}
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} className={classes.accountRow}>
                                            <span className={classes.label}>
                                                {this.getLabel('transfer-records')}
                                            </span>
                                            <div className={classes.grow} />
                                            <Button className={classes.action}
                                                onClick={() => {
                                                    this.props.history.push(
                                                        '/p/transaction-records/account-details'
                                                    );
                                                }}>
                                                {this.getLabel('inquire-label')}
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} className={classes.accountRow}>
                                            <span className={classes.label}>
                                                {this.getLabel('card-removal')}
                                            </span>
                                            <div className={classes.grow} />
                                            <Button className={classes.action}
                                                onClick={() => {
                                                    this.deleteCard(card.id)
                                                }}>
                                                {this.getLabel('delete-label')}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                            <div className={classes.addAccount} onClick={() => {
                                this.setState({ activeStep: 1 });
                            }}>
                                <img src={images.src + 'letou/add-account.png'} alt="" style={{ marginBottom: 10 }} />
                                <span className={classes.action}>
                                    {this.getLabel('add-bank-card')}
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                    : <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {this.getLabel('add-bank-card')}
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className={classes.container}>
                                <Grid item xs={12} className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('card-holder')}
                                    </span>
                                    <div className={classes.grow} />
                                    <TextField
                                        className={classes.textfield}
                                        value={cardholder}
                                        onChange={event => {
                                            this.setState({
                                                cardholder: event.target.value
                                            });
                                        }}
                                        InputProps={{
                                            readOnly: cardholder.length > 0,
                                            disableUnderline: true
                                        }}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('bank-card-number')}
                                    </span>
                                    <div className={classes.grow} />
                                    <TextField
                                        className={classes.textfield}
                                        value={cardNumber}
                                        onChange={this.bankCardNumberChanged.bind(
                                            this
                                        )}
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('withdrawal-password')}
                                    </span>
                                    <div className={classes.grow} />
                                    <TextField
                                        className={classes.textfield}
                                        type={
                                            this.state.showPassword
                                                ? ''
                                                : 'password'
                                        }
                                        value={password}
                                        onChange={event => {
                                            this.setState({
                                                password: event.target.value
                                            });
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        size="small"
                                                        disabled={
                                                            this.state.password
                                                                .length === 0
                                                        }
                                                        aria-label="Toggle password visibility"
                                                        onClick={() => {
                                                            this.setState(
                                                                state => ({
                                                                    showPassword: !state.showPassword
                                                                })
                                                            );
                                                        }}
                                                    >
                                                        {this.state.showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                                <Visibility />
                                                            )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                        onClick={this.checkWithdrawalPassword.bind(
                                            this
                                        )}
                                        disabled={
                                            this.state.cardholder.length === 0 ||
                                            this.state.cardNumber.length === 0 ||
                                            this.state.password.length === 0
                                        }
                                    >
                                        {this.getLabel('create-label')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
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
            </div>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(BankCards))
    )
);
