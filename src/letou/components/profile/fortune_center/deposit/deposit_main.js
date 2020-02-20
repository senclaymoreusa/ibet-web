import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, sendingLog, AUTH_RESULT_FAIL
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';
import DepositError from './deposit_error';
import DepositInprogress from './deposit_inprogress';
import DepositPending from './deposit_pending';
import MomoPayPending from './deposit_momo_pay';
import MomoPay from './vn/momo_pay';
import { images } from '../../../../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThaiLocalBank from './th/local_bank';
import Payzod from './th/payzod';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Astropay from './th/astro_pay';
import Help2pay from './th/help2_pay';
import FgoCard from './vn/fgo_card';
import CirclePay from './vn/circle_pay';
import VietnamHelp2pay from './vn/help2_pay';
import ScratchCard from './vn/scratch_card';
import VietnamLocalBank from './vn/local_bank';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AliPay from './zh/ali_pay';
import OnlinePay from './zh/online_pay';
import Banktransfer from './zh/bank_transfer';
import WechatPay from './zh/wechat_pay';
import QuickPay from './zh/quickpay';
import UnionPayQr from './zh/unionpay_qr';
import JDPay from './zh/jd_pay';
import AstropayCH from './zh/astro_pay';

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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        },
        textTransform: 'capitalize'
    },
    paymentButton: {
        width: 80,
        maxWidth:80,
        padding: 0,
        height: 58,
        marginBottom: 32,
        position:'relative',
        backgroundColor: '#efefef',
        display: 'inline-block',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #32c5ff'
        }
    },
    methodColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: 100,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    methodGrid: {
        borderBottom: '1px solid #d8d8d8',
        marginBottom: 30
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
        borderBottom: '1px solid #d8d8d8'
    },
    grow: {
        flexGrow: 1
    },
    mobileRow: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 12,
        marginBottom:10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#676767',
        whiteSpace: 'nowrap'
    },
    mobileTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    active: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.18,
        letterSpacing: 0.06,
        color: '#53abe0',
        whiteSpace: 'nowrap'
    },
    selected: {
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid #34abe8',
        position: 'absolute',
        bottom: 0
    },
    heart: {
        position: 'absolute',
        right: -9,
        bottom: 0
    },
    mobileTabIcon: {
        backgroundColor: '#e4e4e4',
        height: 40,
        maxHeight: 40,
        width: 60,
        minWidth:60,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative'
    }
});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            width: '100%',
            backgroundColor: '#53abe0',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#676767',
        backgroundColor: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(13),
        '&:focus': {
            opacity: 1,

        },
        '&:selected': {
            opacity: 1,
            height: '100%',
        },
    }
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export class DepositMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentValue: '',
            activePSP: null
        };

        this.setPage = this.setPage.bind(this);
        this.depositWith = this.depositWith.bind(this);
    }

    componentDidMount() {
        let txn_type = "deposit";
        let country = "";
        let marketCode = "";
        let { user } = this.props;
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                if (user && user.country) {
                    country = user.country;
                }
                
                if (user && user.favoriteDepositMethod) {
                    this.depositWith(user.favoriteDepositMethod)
                }else{
                    switch(country.toLowerCase()){
                        case 'china':
                            this.depositWith('zhlocalbank');
                            break;
                        case 'thailand':
                            this.depositWith('thlocalbank');
                            break;
                        case 'vietnam':
                            this.depositWith('vnlocalbank');
                            break;
                    }
               }

                let available = {
                    'methods': [],
                    'channels': []
                };
                if (country.toLowerCase() === "china") marketCode = 5
                if (country.toLowerCase() === "thailand") marketCode = 4
                if (country.toLowerCase() === "vietnam") marketCode = 3
        
                
                let path = `accounting/api/payments/get_available_psps?txn_type=${txn_type}&market_code=${marketCode}`
                fetch(API_URL + path)
                .then( function(res) {
                    if (res.status === 200) {
                        return res.json();
                    } else {
                        this.props.callbackFromParent("error", "Could not retrieve payment options");
                    }
                })
                .then( (data) => {
        
                    for(let i = 0; i < data.length; i++) {
                        available.channels.push(data[i].fields.channel.toLowerCase());
                        available.methods.push(data[i].fields.method.toLowerCase());
                    }
                    this.setState({ activePSP: available});
                })
            }
        })
    }

    setPage = (page, msg, timer) => {
        if (msg) this.setState({ depositMessage: msg });
        if (timer) this.setState({ timer: timer})

        this.setState({ contentValue: page });
    };

    depositWith(paymentMethod) {
        this.setState({contentValue:''});
        this.props.history.push('/p/fortune-center/deposit/' + paymentMethod)
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    renderHelp2Pay(classes, user, operationProp) {
        return (
            <div className={classes.methodColumn}>
                <Button
                    className={classes.paymentButton}
                    onClick={() => {
                        this.depositWith('help2pay');
                    }}
                >
                    <img src={images.src + 'letou/help-2-pay@3x.png'} alt="" height="32" />
                    {user.favoriteDepositMethod === 'help2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                </Button>
                <span className={clsx(classes.title, {
                    [classes.active]: (operationProp === 'help2pay'),
                })}>{this.getLabel('help-pay')}</span>
                {operationProp === 'help2pay' && <div className={classes.selected} />}
            </div>
        )
    }
    renderPayzod(classes, user, operationProp) {
        return (
            <div className={classes.methodColumn}>
                <Button
                    className={classes.paymentButton}
                    onClick={() => {
                        this.depositWith('payzod');
                    }}
                >
                    <img src={images.src + 'letou/payzod-1@3x.png'} alt="" height="36" />
                    {user.favoriteDepositMethod === 'payzod' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                </Button>
                <span className={clsx(classes.title, {
                    [classes.active]: (operationProp === 'payzod'),
                })}>{this.getLabel('payzod-pay')}</span>
                {operationProp === 'payzod' && <div className={classes.selected} />}
            </div>
        )
    }
    renderLocalbank(classes, user, operationProp, bank) {
        return (
            <div className={classes.methodColumn}>
                <Button
                    className={classes.paymentButton}
                    onClick={() => {
                        this.depositWith(bank);
                    }}
                >
                    <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                    {user.favoriteDepositMethod === bank && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                </Button>
                <span className={clsx(classes.title, {
                    [classes.active]: (operationProp === bank),
                })}>{this.getLabel('local-bank')}</span>
                {operationProp === bank && <div className={classes.selected} />}
            </div>
        )
    }
    renderAstropay(classes, user, operationProp) {
        return (
            <div className={classes.methodColumn}>
                <Button
                    className={classes.paymentButton}
                    onClick={() => {
                        this.depositWith('astropay');
                    }}
                >
                    <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                    {user.favoriteDepositMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                </Button>
                <span className={clsx(classes.title, {
                    [classes.active]: (operationProp === 'astropay'),
                })}>{this.getLabel('astropay')}</span>
                {operationProp === 'astropay' && <div className={classes.selected} />}
            </div>
        )
    }
    
    getAvailablePaymentMethods() {
        const { classes, user, operationProp } = this.props;
        const { activePSP: psps } = this.state;
        var country = "";
        if (user && user.country) {
            country = user.country;
        }
        
        switch (country.toLowerCase()) {
            case 'china':
                return (
                    <div>
                        <div className={classes.rootDesktop}>
                            <Grid container className={classes.methodGrid} >
                                <Grid item xs={12} className={classes.row}>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('zhlocalbank');
                                            }}>
                                            <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'zhlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'zhlocalbank'),
                                        })}>{this.getLabel('bank-transfer')}</span>
                                        {operationProp === 'zhlocalbank' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('quickpay');
                                            }}>
                                            <img src={images.src + 'letou/unionpay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'quickpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'quickpay'),
                                        })}>{this.getLabel('quick-pay')}</span>
                                        {operationProp === 'quickpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('unionpayqr');
                                            }}>
                                            <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'unionpayqr' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'unionpayqr'),
                                        })}>{this.getLabel('union-pay-qr')}</span>
                                        {operationProp === 'unionpayqr' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('alipay');
                                            }}>
                                            <img src={images.src + 'letou/alipay@3x.png'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'alipay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'alipay'),
                                        })}>{this.getLabel('ali-pay')}</span>
                                        {operationProp === 'alipay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('onlinepay');
                                            }}>
                                            <img src={images.src + 'letou/onlinepay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'onlinepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'onlinepay'),
                                        })}>{this.getLabel('online-pay')}</span>
                                        {operationProp === 'onlinepay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('wechatpay');
                                            }}>
                                            <img src={images.src + 'letou/wechatpay.svg'} alt="" height="40" />
                                            {user.favoriteDepositMethod === 'wechatpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'wechatpay'),
                                        })}>{this.getLabel('we-chat-pay')}</span>
                                        {operationProp === 'wechatpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('jdpay');
                                            }}>
                                            <img src={images.src + 'letou/jdpay.svg'} alt="" height="28" />
                                            {user.favoriteDepositMethod === 'jdpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'jdpay'),
                                        })}>{this.getLabel('jd-pay')}</span>
                                        {operationProp === 'jdpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('bitcoin');
                                            }}>
                                            <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                            {user.favoriteDepositMethod === 'bitcoin' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'bitcoin'),
                                        })}>{this.getLabel('bit-coin')}</span>
                                        {operationProp === 'bitcoin' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('astropay_ch');
                                            }}>
                                            <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'astropay_ch' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (operationProp === 'astropay_ch'),
                                        })}>{this.getLabel('astropay')}</span>
                                        {operationProp === 'astropay_ch' && <div className={classes.selected} />}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.rootMobile}>
                            <StyledTabs
                                value={operationProp ? operationProp : 'none'}
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <StyledTab
                                    style={{ width: 0, minWidth: 0, maxWidth: 0, padding: 0 }}
                                    value="none"
                                />
                                <StyledTab label={this.getLabel('bank-transfer')}
                                    value="zhlocalbank"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bank-icon.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'zhlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'zhlocalbank') {
                                            this.depositWith('zhlocalbank');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('quick-pay')} value="quickpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/unionpay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'quickpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'quickpay') {
                                            this.depositWith('quickpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('union-pay-qr')} value="unionpayqr"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'unionpayqr' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'unionpayqr') {
                                            this.depositWith('unionpayqr');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('ali-pay')} value="alipay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/alipay@3x.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'alipay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'alipay') {
                                            this.depositWith('alipay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('online-pay')} value="onlinepay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/onlinepay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'onlinepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'onlinepay') {
                                            this.depositWith('onlinepay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('we-chat-pay')} value="wechatpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/wechatpay.svg'} alt="" height="26" />
                                        {user.favoriteDepositMethod === 'wechatpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'wechatpay') {
                                            this.depositWith('wechatpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('jd-pay')} value="jdpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/jdpay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'jdpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'jdpay') {
                                            this.depositWith('jdpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('bit-coin')} value="bitcoin"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'bitcoin' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'bitcoin') {
                                            this.depositWith('bitcoin');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('astropay')} value="astropay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/astropay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'astropay') {
                                            this.depositWith('astropay');
                                        }
                                    }} />
                            </StyledTabs>
                        </div>
                    </div>
                );
            case 'thailand':
                return (
                    <div>
                        <div className={classes.rootDesktop}>
                            <Grid container className={classes.methodGrid} >
                                <Grid item xs={12} className={classes.row}>
                                    {this.renderLocalbank(classes, user, operationProp, 'thlocalbank')}
                                    {psps && psps.channels.includes("help2pay") ? this.renderHelp2Pay(classes, user, operationProp) : <div></div>}
                                    {psps && psps.channels.includes("payzod") ? this.renderPayzod(classes, user, operationProp) : <div></div>}
                                    {psps && psps.channels.includes("astropay") ? this.renderAstropay(classes, user, operationProp) : <div></div>}
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.rootMobile}>
                            <StyledTabs
                                value={operationProp ? operationProp : 'none'}
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <StyledTab
                                    style={{ width: 0, minWidth: 0, maxWidth: 0, padding: 0 }}
                                    value="none"
                                />
                                <StyledTab label={this.getLabel('local-bank')}
                                    value="thlocalbank"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bank-icon.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'thlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'thlocalbank') {
                                            this.depositWith('thlocalbank');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('help-pay')} value="help2pay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/help-2-pay@3x.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'help2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'help2pay') {
                                            this.depositWith('help2pay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('payzod-pay')} value="payzod"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/payzod-1@3x.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'payzod' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'payzod') {
                                            this.depositWith('payzod');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('astropay')} value="astropay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/astropay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'astropay') {
                                            this.depositWith('astropay');
                                        }
                                    }} />
                            </StyledTabs>
                        </div>
                    </div>
                );
            case 'vietnam':
                return (
                    <div>
                        <div className={classes.rootDesktop}>
                            <Grid container className={classes.methodGrid} >
                                <Grid item xs={12} className={classes.row}>
                                    {this.renderLocalbank(classes, user, operationProp, 'vnlocalbank')}
                                    {psps && psps.channels ? psps.channels.map( c => {
                                        // console.log(c);
                                        // console.log(c === ("momopay" || "fgocard" ));
                                        let extension = (c === "momopay" || c === "fgocard" || c === "help2pay") ? "png" : "svg";
                                        
                                        return (
                                            <div className={classes.methodColumn} key={c}>
                                                <Button
                                                    className={classes.paymentButton}
                                                    onClick={() => {
                                                        if (c != "help2pay") { this.depositWith(c); }
                                                        else { this.depositWith("vietnamhelp2pay"); }
                                                    }}>
                                                    <img src={images.src + `letou/${c}.${extension}`} alt="" height="26" />
                                                    {((c === "help2pay" && user.favoriteDepositMethod === "vietnamhelp2pay") || (c !== "help2pay" && user.favoriteDepositMethod === c))  && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                                </Button>
                                                <span className={clsx(classes.title, {
                                                    [classes.active]: ((c === "help2pay" && operationProp === "vietnamhelp2pay") || (c !== "help2pay" && operationProp === c)),
                                                })}>{this.getLabel(c)}</span>
                                                {((c === "help2pay" && operationProp === "vietnamhelp2pay") || (c !== "help2pay" && operationProp === c)) && <div className={classes.selected} />}
                                            </div>
                                        )
                                    }) : <div></div>}
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.rootMobile}>
                            <StyledTabs
                                value={operationProp ? operationProp : 'none'}
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <StyledTab
                                    style={{ width: 0, minWidth: 0, maxWidth: 0, padding: 0 }}
                                    value="none"
                                />
                                <StyledTab label={this.getLabel('local-bank')}
                                    value="vnlocalbank"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bank-icon.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'vnlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'vnlocalbank') {
                                            this.depositWith('vnlocalbank');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('circlepay')} value="circlepay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/circlepay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'circlepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'circlepay') {
                                            this.depositWith('circlepay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('momopay')} value="momopay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/momo.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'momopay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'momopay') {
                                            this.depositWith('momopay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('scratchcard')} value="scratchcard"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/scratchcard.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'scratchcard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'scratchcard') {
                                            this.depositWith('scratchcard');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('fgocard')} value="fgocard"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/fgocard.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'fgocard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'fgocard') {
                                            this.depositWith('fgocard');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('help2pay')} value="vietnamhelp2pay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/help2pay.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'vietnamhelp2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.heart} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'vietnamhelp2pay') {
                                            this.depositWith('vietnamhelp2pay');
                                        }
                                    }} />
                            </StyledTabs>
                        </div>
                    </div>
                );
            default:
                return <div></div>;
        }
    }

    getPaymentMethodContent() {
        const { operationProp } = this.props;
        const { contentValue } = this.state;

        if (contentValue === 'error')
            return <DepositError callbackFromParent={this.setPage} errorMessage={this.state.depositMessage} />;
        else if (contentValue === 'success')
            return <DepositSuccess callbackFromParent={this.setPage} successMessage={this.state.depositMessage} />;
        else if (contentValue === 'inprogress')
            return <DepositInprogress callbackFromParent={this.setPage} InprogressMessage={this.state.depositMessage} />;
        else if (contentValue === 'pending')
            return <DepositPending callbackFromParent={this.setPage} pendingMessage={this.state.depositMessage} timer={this.state.timer}/>;
        else if (contentValue === 'momopay')
            return <MomoPayPending callbackFromParent={this.setPage} pendingMessage={this.state.depositMessage} />;

        if (operationProp === 'alipay')
            return <AliPay callbackFromParent={this.setPage} />;
        else if (operationProp === 'onlinepay')
            return <OnlinePay callbackFromParent={this.setPage} />;
        else if (operationProp === 'zhlocalbank')
            return <Banktransfer callbackFromParent={this.setPage} />;
        else if (operationProp === 'wechatpay')
            return <WechatPay callbackFromParent={this.setPage} />;
        else if (operationProp === 'quickpay')
            return <QuickPay callbackFromParent={this.setPage} />;
        else if (operationProp === 'bitcoin')
            return <div />;
        else if (operationProp === 'unionpayqr')
            return <UnionPayQr callbackFromParent={this.setPage} />;
        else if (operationProp === 'jdpay')
            return <JDPay callbackFromParent={this.setPage} />;
        else if (operationProp === 'astropay_ch')
            return <AstropayCH callbackFromParent={this.setPage} />;
        else if (operationProp === 'vietnamhelp2pay')
            return <VietnamHelp2pay callbackFromParent={this.setPage} />;
        else if (operationProp === 'circlepay')
            return <CirclePay callbackFromParent={this.setPage} />;
        else if (operationProp === 'fgocard')
            return <FgoCard callbackFromParent={this.setPage} />;
        else if (operationProp === 'vnlocalbank')
            return <VietnamLocalBank callbackFromParent={this.setPage} />;
        else if (operationProp === 'momopay')
            return <div />;
        else if (operationProp === 'scratchcard')
            return <ScratchCard callbackFromParent={this.setPage} />;
        else if (operationProp === 'thlocalbank')
            return <ThaiLocalBank callbackFromParent={this.setPage} />;
        else if (operationProp === 'payzod')
            return <Payzod callbackFromParent={this.setPage} />;
        else if (operationProp === 'astropay')
            return <Astropay callbackFromParent={this.setPage} />;
        else if (operationProp === 'help2pay')
            return <Help2pay callbackFromParent={this.setPage} />;
        else if (operationProp === 'momopay')
            return <MomoPay callbackFromParent={this.setPage} />;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.rootMobile}>
                    <AppBar position="static" className={classes.mobileRow}>
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
                                    <span className={classes.mobileTitle}>
                                        {this.getLabel('deposit-label')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
                {this.getAvailablePaymentMethods()}
                {this.getPaymentMethodContent()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state.auth;

    return {
        user: user,
        operationProp: ownProps.match.params.operation
    };
};

export default withStyles(styles)
    (withRouter(
        injectIntl(
            connect(
                mapStateToProps, { authCheckState, sendingLog }
            )(DepositMain)
        )
    )
    );
