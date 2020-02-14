import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { config, images } from '../../../../util_config';
import { connect } from 'react-redux';
import { authCheckState, sendingLog, AUTH_RESULT_FAIL, authUserUpdate, setWalletColors } from '../../../../actions';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import clsx from 'clsx';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import TransferSuccess from './transfer_success';
import getSymbolFromCurrency from 'currency-symbol-map';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    rootDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    titleRow: {
        paddingTop: 12,
        paddingBottom: 20,
        borderBottom: '1px solid #cdcdcd'
    },
    boldText: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#000'
    },
    row: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    allButton: {
        textTransform: 'capitalize',
        color: '#057aff'
    },
    walletColumn: {
        maxWidth: 362,
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        },
        textTransform: 'capitalize'
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%'
    },
    grow: {
        flexGrow: 1
    },
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    walletButton: {
        border: '1px dashed #e1e1e1',
        width: 110,
        height: 60,
        textTransform: 'capitalize',

    },
    arrow: {
        marginLeft: 23,
        marginRight: 23,
    },
    amountField: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 6,
        paddingRight: 10,
        width: 294,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        },
        '&::placeholder': {
            fontStyle: 'italic',
        },
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
        paddingTop: 12,
    },
    nextButton: {
        borderRadius: 18,
        height: 36,
        width: 294,
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
        backgroundColor: '#4DA9DF',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
        "&:focus": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
    },
    chartColumn: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        width: '80%',
        maxHeight: 435
    },
    progress: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: 20,
        marginLeft: -20,
        zIndex: 2
    },
    mobileGrid: {
        padding: 20
    },
    balanceContainer: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    balanceInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    totalBalance: {
        fontSize: 36,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
    }
});


function ConfirmationDialogRaw(props) {
    const { onClose, open, ...other } = props;
    const radioGroupRef = React.useRef(null);


    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose('ok');
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">
                <FormattedMessage id='transfer-to-main' defaultMessage='Transfer All to Main Wallet' />
            </DialogTitle>
            <DialogContent dividers>
                <FormattedMessage id='are-u-sure-transfer' defaultMessage='Are you sure?' />

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                    <FormattedMessage id='cancel-label' defaultMessage='Cancel' />
                </Button>
                <Button onClick={handleOk} color="primary">
                    <FormattedMessage id='ok-label' defaultMessage='OK' />
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


const walletStyles = makeStyles(() => ({
    root: {
        width: 110,
        height: 60,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f2f4f8',
        position: 'relative'
    },
    name: {
        fontSize: 10,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
        textTransform: 'uppercase'
    },
    amount: {
        fontSize: 13,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
        marginBottom: 3
    },
    content: {
        padding: 5
    },
    grow: {
        flexGrow: 1,
    },
    close: {
        padding: 0,
        height: 11,
        width: 11,
        minWidth: 11,
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#f2f4f8',
        "&:hover": {
            backgroundColor: '#f2f4f8',
        },
        "&:focus": {
            backgroundColor: '#f2f4f8',
        },
    },
    pointer: {
        cursor: 'pointer',
    }
}));

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

function LetouWallet(props) {
    const classes = walletStyles();
    const { className, wallet, currency, colorObj, isMain, onClick, closeClick, ...other } = props;

    return (
        <Paper onClick={onClick}
            className={clsx({
                [classes.root]: true,
                [classes.pointer]: (onClick !== undefined)
            })}
            aria-describedby="client-snackbar"
            {...other}>
            <div className={classes.content}>
                <Typography className={classes.amount}>
                    {currency}{wallet.amount}
                </Typography>
                <Typography className={classes.name}>

                    {wallet.isMain === 'true' ?
                        <FormattedMessage id="main-wallet" defaultMessage="Main Wallet" />
                        :
                        wallet.code}
                </Typography>
                {(closeClick !== undefined) &&
                    <Button className={classes.close} onClick={closeClick}>
                        <img src={images.src + 'letou/close-wallet.svg'} alt="" />
                    </Button>}
            </div >
            <div className={classes.grow} />
            <div style={{
                height: 6,
                backgroundColor: colorObj ? colorObj.color : '#d9d9d9',
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3
            }}>
            </div>
        </Paper >
    );
}

LetouWallet.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    closeClick: PropTypes.func,
    wallet: PropTypes.object,
    currency: PropTypes.string,
    colorObj: PropTypes.object
};

const snackStyles = makeStyles(theme => ({
    success: {
        backgroundColor: '#21e496',
    },
    error: {
        backgroundColor: '#fa2054',
    },
    info: {
        backgroundColor: '#53abe0',
    },
    warning: {
        backgroundColor: '#f28f22',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
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
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

LetouSnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class Transfer extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null,
            amount: '',
            amountInvalid: false,
            amountFocused: true,
            currency: '',
            walletObjs: [],
            totalBalance: 0,
            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',
            showConfirmationDialog: false,
            loading: false,

            activeContent: 0
        }

        this.handleWalletClick = this.handleWalletClick.bind(this);
        this.sendAllToMainWallet = this.sendAllToMainWallet.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_FAIL) {
                    sendingLog('authentication failure!!!');
                } else {
                    const { user } = this.props;

                    if (this._isMounted) {
                        this.setState({
                            loading: true,
                            currency: getSymbolFromCurrency(user.currency)
                        });
                        this.getWalletsByUsername(user.userId);
                    }
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getWalletsByUsername(userId) {
      let currentComponent = this;

        axios.get(API_URL + 'users/api/get-each-wallet-amount/?user_id=' + userId, config)
            .then(res => {
                if (res.status === 200) {
                   let total = res.data.reduce((totalBalance, wallet) => totalBalance + parseFloat(wallet.amount), 0);

                    currentComponent.setState({
                        walletObjs: res.data,
                        totalBalance: total
                    });

                    if (currentComponent.props.walletColors.length == 0)
                        currentComponent.props.setWalletColors(res.data);

                }
                currentComponent.setState({ loading: false });
            }).catch(function (err) {
                currentComponent.setState({ loading: false });
                sendingLog(err);
            });
    }

    sendClicked() {

        if (parseInt(this.state.from.amount) < parseInt(this.state.amount)) {
            this.setState({
                snackType: 'error',
                snackMessage: this.getLabel('balance-not-enough'),
                showSnackbar: true
            });
            return;
        }

        this.setState({ loading: true });

        const { user } = this.props;
        let currentComponent = this;

        axios.post(API_URL + 'users/api/transfer/',
            {
                'user_id': user.userId,
                'from_wallet': this.state.from.code,
                'to_wallet': this.state.to.code,
                'amount': this.state.amount
            }, config)
            .then(res => {
                if (res.data.status_code === 1) {
                    this.setState({ activeContent: 1 });
                } else if (res.data.status_code === 107) {
                    this.setState({
                        snackType: 'error',
                        snackMessage: res.data.error_message,
                        showSnackbar: true
                    });
                }

                this.getWalletsByUsername(this.props.user.userId);

                this.setState({ loading: false });
                currentComponent.props.authUserUpdate();
            }).catch(err => {
                sendingLog(err);
                this.setState({
                    loading: false,
                    snackType: 'error',
                    snackMessage: err.message,
                    showSnackbar: true
                });
            })
    }

    sendAllToMainWallet() {
        this.setState({ from: null, to: null });

        let currentComponent = this;

        let mainWalletObj = this.state.walletObjs.filter(item => item.isMain === true)[0];
        let walletsWithAmount = this.state.walletObjs.filter(item => item.isMain === false && parseFloat(item.amount) > 10.00);

        walletsWithAmount.forEach(wallet => {

            axios.post(API_URL + 'users/api/transfer/',
                {
                    'user_id': this.props.user.userId,
                    'from_wallet': wallet.code,
                    'to_wallet': mainWalletObj.code,
                    'amount': wallet.amount
                }, config)
                .then(res => {
                    if (res.data.status_code === 1) {
                        if (walletsWithAmount[walletsWithAmount.length - 1].code === wallet.code) {
                            currentComponent.getWalletsByUsername(currentComponent.props.user.userId);
                        }
                    } else if (res.data.status_code === 107) {
                        this.setState({
                            snackType: 'error',
                            snackMessage: res.data.error_message,
                            showSnackbar: true
                        });
                    }
                }).catch(err => {
                    sendingLog(err);
                });
        });
    }

    amountChanged = event => {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                if (this.state.from !== null && this.state.from.value < event.target.value) {
                    this.setState({
                        snackType: 'error',
                        snackMessage: this.getLabel('invalid-transfer-value'),
                        showSnackbar: true,
                        amountInvalid: true
                    });
                } else {
                    this.setState({ amount: event.target.value, amountInvalid: false });
                }
            }
        }
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    handleWalletClick(id) {
        let wallet = this.state.walletObjs.filter(item => item.code === id)[0];

        if (this.state.from === null && this.state.to === null) {
            if (wallet.amount === 0) {
                this.setState({
                    snackType: 'warning',
                    snackMessage: this.getLabel('empty-wallet-message'),
                    showSnackbar: true
                });
                return;
            }

            this.setState({ from: wallet });
        } else if (this.state.from === null && this.state.to.code !== wallet.code) {
            if (wallet.amount === 0) {
                this.setState({
                    snackType: 'warning',
                    snackMessage: this.getLabel('empty-wallet-message'),
                    showSnackbar: true
                });
                return;
            }

            this.setState({ from: wallet });
        } else if (this.state.to === null && this.state.from.code !== wallet.code) {
            this.setState({ to: wallet });
        }
    }

    closeConfirmationDialog = newValue => {
        this.setState({ showConfirmationDialog: false });

        if (newValue)
            this.sendAllToMainWallet();
    }

    render() {
        const { classes, walletColors } = this.props;
        const { from, to, amount, walletObjs, currency, showConfirmationDialog, loading, totalBalance, activeContent } = this.state;
        let mainWallet = null;
        let fromWallet = null;
        let toWallet = null;
        let otherWalletObjs = [];

        if (activeContent === 0) {
            let mainWalletObj = walletObjs.filter(item => item.isMain === true)[0];

            otherWalletObjs = walletObjs.filter(item => item.isMain === false);

            mainWallet = (
                mainWalletObj ?
                    <LetouWallet wallet={mainWalletObj}
                        colorObj={walletColors.filter(wc => {
                            return (
                                wc.code ===
                                mainWalletObj.code
                            );
                        })[0]}
                        currency={currency} onClick={() => { this.handleWalletClick(mainWalletObj.code) }} />
                    :
                    null
            );

            fromWallet = (
                (from) ?
                    <LetouWallet wallet={from} currency={currency} closeClick={() => { this.setState(() => ({ from: null })) }} />
                    :
                    <Button className={classes.walletButton}>{this.getLabel('from-label')}</Button>
            );

            toWallet = (
                (to) ?
                    <LetouWallet wallet={to} currency={currency} closeClick={() => { this.setState(() => ({ to: null })) }} />
                    :
                    <Button className={classes.walletButton}>{this.getLabel('to-label')}</Button>
            );
        }

        return (
            <div className={classes.root}>
                {loading && <CircularProgress className={classes.progress} />}

                <div className={classes.rootDesktop} style={
                    loading === true
                        ? { pointerEvents: 'none' }
                        : { pointerEvents: 'all' }
                }>
                    {activeContent === 1
                        ? < TransferSuccess
                            from={from.code} to={to.code} amount={currency + '' + amount}
                        />
                        : <Grid container>
                            <Grid item xs={12} className={classes.titleRow}>
                                <span className={classes.title} >
                                    {this.getLabel('transfer-label')}
                                </span>
                            </Grid>
                            <Grid item xs={7} >
                                <Grid container>
                                    <Grid item xs={12} className={classes.row}>
                                        <span className={classes.boldText} >
                                            {this.getLabel('select-transfer')}
                                        </span>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingBottom: 20 }}>
                                        {mainWallet}
                                    </Grid>
                                    <Grid item xs={12} style={{ borderTop: '1px solid #979797', paddingTop: 5 }}>
                                        <Button className={classes.allButton}>
                                            {this.getLabel('transfer-to-main')}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingTop: 30 }}>
                                        <Grid container spacing={2}>
                                            {otherWalletObjs.map(walletObj => (
                                                <Grid item xs={4} key={walletObj.code}>
                                                    <LetouWallet
                                                        wallet={walletObj}
                                                        currency={currency}
                                                        colorObj={walletColors.filter(wc => {
                                                            return (
                                                                wc.code ===
                                                                walletObj.code
                                                            );
                                                        })[0]}
                                                        onClick={() => { this.handleWalletClick(walletObj.code) }} />
                                                </Grid>
                                            ))}
                                            <Grid item xs={12} style={{ paddingTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                                {fromWallet}
                                                <div style={{ height: 60, width: 74, paddingTop: 18 }}>
                                                    <ArrowForward className={classes.arrow} />
                                                </div>
                                                {toWallet}
                                            </Grid>
                                            <Grid item xs={12} style={{ paddingTop: 20 }}>
                                                <TextField className={classes.amountField}
                                                    value={amount}
                                                    placeholder="Minimum ¥10"
                                                    onChange={this.amountChanged.bind(this)}
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
                                                        inputProps: {
                                                            step: 1,
                                                            min: 10,
                                                            style: { textAlign: 'right' }
                                                        },
                                                        startAdornment: (
                                                            <InputAdornment position="start" >
                                                                <span className={classes.label}>{this.getLabel('amount-label')}</span>
                                                            </InputAdornment>
                                                        ),
                                                    }} />
                                            </Grid>
                                            <Grid item xs={12} style={{ paddingTop: 40 }}>
                                                <Button className={classes.nextButton}
                                                    onClick={this.sendClicked.bind(this)}
                                                    disabled={amount < 10 ||
                                                        from === null || to === null}>
                                                    {this.getLabel('next-label')}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} >
                                <ReactMinimalPieChart
                                    animate={true}
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    cx={50}
                                    cy={50}
                                    data={walletObjs.map(function (item) {
                                        return {
                                            title: item.code,
                                            value: parseFloat(item.amount),
                                            color: item.color
                                        };
                                    })}
                                    lineWidth={15}
                                    onClick={undefined}
                                    onMouseOut={undefined}
                                    onMouseOver={undefined}
                                    paddingAngle={0}
                                    radius={40}
                                    ratio={1}
                                    rounded={false}
                                    startAngle={0}
                                />
                            </Grid>
                        </Grid>}
                </div>
                <div className={classes.rootMobile}>
                    <AppBar position="fixed" className={classes.mobileRow}>
                        <Toolbar className={classes.mobileBar}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Button
                                        className={classes.mobileMenuButton}
                                        onClick={() => {
                                            this.props.history.push('/p/');
                                        }}
                                    >
                                        <ArrowBackIos style={{ width: 16 }} />
                                        {this.getLabel('back-label')}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}
                                >
                                    <span className={classes.title}>
                                        {this.getLabel('transfer-label')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        className={classes.mobileMenuButton}
                                        onClick={() => {
                                            this.props.history.push('/p/');
                                        }}
                                    >
                                        {this.getLabel('records-label')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container className={classes.mobileGrid}>
                        <Grid item xs={12} className={classes.chartColumn} style={{ marginTop: 20 }}>
                            <ReactMinimalPieChart
                                animate={true}
                                animationDuration={500}
                                animationEasing="ease-out"
                                cx={50}
                                cy={50}
                                data={walletObjs.map(function (item) {
                                    return {
                                        title: item.code,
                                        value: parseFloat(item.amount),
                                        color: item.color
                                    };
                                })}
                                lengthAngle={360}
                                lineWidth={15}
                                onClick={undefined}
                                onMouseOut={undefined}
                                onMouseOver={undefined}
                                paddingAngle={0}
                                radius={40}
                                ratio={1}
                                rounded={false}
                                startAngle={0}
                            />
                            <div className={classes.balanceContainer}>
                                <div className={classes.balanceInnerContainer}>
                                    <span className={classes.totalBalance}>{currency}{totalBalance}</span>
                                    <FormattedMessage id='total-balance' defaultMessage='Total Balance' />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.row} style={{ textAlign: 'center' }}>
                            <span className={classes.boldText} >
                                {this.getLabel('tap-transfer')}
                            </span>
                        </Grid>
                        <Grid item xs={12} style={{ paddingBottom: 20 }}>
                            {mainWallet}
                        </Grid>
                        <Grid item xs={12} style={{ borderTop: '1px solid #979797', paddingTop: 5 }}>
                            <Button href="#text-buttons" className={classes.allButton}
                                onClick={() => {
                                    this.setState({ showConfirmationDialog: true });
                                }}>
                                {this.getLabel('transfer-to-main')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 30 }}>
                            <Grid container spacing={2}>
                                {otherWalletObjs.map(walletObj => (
                                    <Grid item xs={4} key={walletObj.code}>
                                        <LetouWallet wallet={walletObj} currency={currency}
                                            onClick={() => { this.handleWalletClick(walletObj.code) }} />
                                    </Grid>
                                ))}
                                <Grid item xs={12} style={{ paddingTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                    {fromWallet}
                                    <div style={{ height: 60, width: 74, paddingTop: 18 }}>
                                        <ArrowForward className={classes.arrow} />
                                    </div>
                                    {toWallet}
                                </Grid>
                                <Grid item xs={12} style={{ paddingTop: 20 }}>
                                    <TextField className={classes.amountField}
                                        value={amount}
                                        placeholder="Minimum ¥10"
                                        onChange={this.amountChanged.bind(this)}
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
                                            inputProps: {
                                                step: 1,
                                                min: 10,
                                                style: { textAlign: 'right' }
                                            },
                                            startAdornment: (
                                                <InputAdornment position="start" >
                                                    <span className={classes.label}>{this.getLabel('amount-label')}</span>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </Grid>
                                <Grid item xs={12} style={{ paddingTop: 40, paddingBottom: 60 }}>
                                    <Button className={classes.nextButton}
                                        onClick={this.sendClicked.bind(this)}
                                        disabled={amount < 10 ||
                                            from === null || to === null}>
                                        {this.getLabel('next-label')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
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
                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={showConfirmationDialog}
                    onClose={this.closeConfirmationDialog.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state.auth;
    const { walletColors } = state.general;

    return {
        user: user,
        walletColors: walletColors
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, authUserUpdate, setWalletColors })(Transfer))));