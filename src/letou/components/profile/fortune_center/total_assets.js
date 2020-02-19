/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { config, images } from '../../../../util_config';
import { connect } from 'react-redux';
import {
    authCheckState,
    sendingLog,
    AUTH_RESULT_FAIL,
    setWalletColors
} from '../../../../actions';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import axios from 'axios';
import getSymbolFromCurrency from 'currency-symbol-map';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

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
        paddingBottom: 60,
        display: 'flex',
        backgroundColor: '#f2f3f5',
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
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
        flexGrow: 1
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
        '&:hover': {
            backgroundColor: '#f2f4f8'
        },
        '&:focus': {
            backgroundColor: '#f2f4f8'
        }
    },
    pointer: {
        cursor: 'pointer'
    }
}));

function LetouWallet(props) {
    const classes = walletStyles();
    const { wallet, currency, colorObj, onClick, closeClick, ...other } = props;

    return (
        <Paper
            onClick={onClick}
            className={clsx({
                [classes.root]: true,
                [classes.pointer]: onClick !== undefined
            })}
            aria-describedby="client-snackbar"
            {...other}
        >
            <div className={classes.content}>
                <Typography className={classes.amount}>
                    {currency}
                    {wallet.amount}
                </Typography>
                <Typography className={classes.name}>

                    {wallet.isMain === 'true' ?
                        <FormattedMessage id="main-wallet" defaultMessage="Main Wallet" />
                        :
                        wallet.code}
                </Typography>
                {closeClick !== undefined && (
                    <Button className={classes.close} onClick={closeClick}>
                        <img
                            src={images.src + 'letou/close-wallet.svg'}
                            alt=""
                        />
                    </Button>
                )}
            </div>
            <div className={classes.grow} />
            <div
                style={{
                    height: 6,
                    backgroundColor: colorObj ? colorObj.color : '#d9d9d9',
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3
                }}
            ></div>
        </Paper>
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

export class TotalAssets extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            currency: 'CNY',
            walletObjs: [],
            totalBalance: 0
        };

        this.getWalletsByUsername = this.getWalletsByUsername.bind(this);

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

    async getWalletsByUsername(userId) {
       axios.get(API_URL + 'users/api/get-each-wallet-amount/?user_id=' + userId, config)
            .then(res => {
                if (res.status === 200) {
                    let total = res.data.reduce((totalBalance, wallet) => totalBalance + parseFloat(wallet.amount), 0);
 
                    this._isMounted  && this.setState({
                         walletObjs: res.data,
                         totalBalance: total
                     });
 
                     if (this.props.walletColors.length === 0)
                         this.props.setWalletColors(res.data);
 
                 }

                 this._isMounted  && this.setState({ loading: false });
            }).catch(function (err) {
                this._isMounted  && this.setState({ loading: false });
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes, walletColors } = this.props;
        const { walletObjs, currency, totalBalance, loading } = this.state;

        let mainWalletObj = walletObjs.filter(item => item.isMain === true)[0];

        let otherWalletObjs = walletObjs.filter(item => item.isMain === false);

        let mainWallet = mainWalletObj ? (
            <LetouWallet
                wallet={mainWalletObj}
                currency={currency}
                colorObj={walletColors.filter(wc => {
                    return (
                        wc.code ===
                        mainWalletObj.code
                    );
                })[0]}
            />
        ) : null;

        return (
            <div className={classes.root}>
                {loading && <CircularProgress className={classes.progress} />}


                <div className={classes.rootDesktop} style={
                    loading === true
                        ? { pointerEvents: 'none' }
                        : { pointerEvents: 'all' }
                }>
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title} >
                                {this.getLabel('total-assets')}
                            </span>
                        </Grid>
                        <Grid item xs={7} >
                            <Grid container>
                                <Grid item xs={12} style={{ paddingTop: 20, paddingBottom: 20 }}>
                                    {mainWallet}
                                </Grid>
                                <Grid item xs={12} style={{ borderTop: '1px solid #979797', paddingTop: 30 }}>
                                    <Grid container spacing={2}>
                                        {otherWalletObjs.map(walletObj => (
                                            <Grid item xs={4} key={walletObj.code}>
                                                <LetouWallet wallet={walletObj} 
                                                currency={currency} 
                                                colorObj={walletColors.filter(wc => {
                                                    return (
                                                        wc.code ===
                                                        walletObj.code
                                                    );
                                                })[0]}/>
                                            </Grid>
                                        ))}
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
                    </Grid>
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
                                        {this.getLabel('total-assets')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}>
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
                        <Grid item xs={12} style={{ borderTop: '1px solid #979797', paddingTop: 30 }}>
                            <Grid container spacing={2}>
                                {otherWalletObjs.map(walletObj => (
                                    <Grid item xs={4} key={walletObj.code}>
                                        <LetouWallet wallet={walletObj} currency={currency}
                                            onClick={() => { this.handleWalletClick(walletObj.code) }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
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

export default withStyles(styles)(
    withRouter(
        injectIntl(connect(mapStateToProps, { authCheckState, setWalletColors })(TotalAssets))
    )
);
