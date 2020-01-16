import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, sendingLog
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';
import DepositError from './deposit_error';
import DepositInprogress from './deposit_inprogress';
import { images } from '../../../../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { config } from '../../../../../util_config';
import ThaiLocalBank from './th/local_bank';
import Payzod from './th/payzod';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Astropay from './th/astro_pay';
import Help2pay from './th/help2_pay';
import FgoCard from './vn/fgo_card';
import MomoPay from './vn/momo_pay';
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
import Astropay_CH from './zh/astro_pay';

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
        backgroundColor: '#f2f3f5',
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
        width: 87,
        padding: 0,
        height: 58,
        marginBottom: 32,
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
        width:100
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #eff3f4',
    },
    methodGrid: {
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
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
    favourite: {
        position: 'absolute',
        right: -9,
        bottom: 0
    },
    mobileFavourite: {
        position: 'absolute',
        right: 2,
        bottom: 32
    },
    mobileTabIcon: {
        backgroundColor: '#e4e4e4',
        height: 40,
        maxHeight: 40,
        width: 60,
        maxWidth: 60,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        };

        this.setPage = this.setPage.bind(this);
        this.depositWith = this.depositWith.bind(this);
        this.checkFavoriteMethod = this.checkFavoriteMethod.bind(this);
    }

    componentDidMount() {
    
    }

    checkFavoriteMethod() {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers["Authorization"] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ contentValue: this.state.user.favoriteDepositMethod });
                    //this.setState({ contentValue: res.data.favorite_payment_method });
                });
        }

    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length > 4) {
            if (parts[4].length > 0) {
                this.setState({ contentValue: parts[4] })
            }
        } else
            this.setState({ contentValue: '' })
    }

    setPage = (page, msg) => {
        console.log(page);
        if (msg)
            this.setState({ depositMessage: msg });

        this.setState({ contentValue: page });
    };

    depositWith(paymentMethod) {
        this.props.history.push('/p/fortune-center/deposit/' + paymentMethod)
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    

    getAvailablePaymentMethods() {
        const { classes, user, operationProp } = this.props;
        const { contentValue } = this.state;

        switch (user.country.toLowerCase()) {
            case 'china':
                return (
                    <div>
                        <div className={classes.rootDesktop}>
                            <Grid container className={classes.methodGrid} spacing={4}>
                                <Grid item xs={12} className={classes.row}>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('chinabanktransfer');
                                            }}>
                                            <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'chinabanktransfer' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'chinabanktransfer'),
                                        })}>{this.getLabel('bank-transfer')}</span>
                                        {contentValue === 'chinabanktransfer' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('quickpay');
                                            }}>
                                            <img src={images.src + 'letou/unionpay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'quickpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'quickpay'),
                                        })}>{this.getLabel('quick-pay')}</span>
                                        {contentValue === 'quickpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('unionpayqr');
                                            }}>
                                            <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'unionpayqr' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'unionpayqr'),
                                        })}>{this.getLabel('union-pay-qr')}</span>
                                        {contentValue === 'unionpayqr' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('alipay');
                                            }}>
                                            <img src={images.src + 'letou/alipay@3x.png'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'alipay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'alipay'),
                                        })}>{this.getLabel('ali-pay')}</span>
                                        {contentValue === 'alipay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('onlinepay');
                                            }}>
                                            <img src={images.src + 'letou/onlinepay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'onlinepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'onlinepay'),
                                        })}>{this.getLabel('online-pay')}</span>
                                        {contentValue === 'onlinepay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('wechatpay');
                                            }}>
                                            <img src={images.src + 'letou/wechatpay.svg'} alt="" height="40" />
                                            {user.favoriteDepositMethod === 'wechatpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'wechatpay'),
                                        })}>{this.getLabel('we-chat-pay')}</span>
                                        {contentValue === 'wechatpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('jdpay');
                                            }}>
                                            <img src={images.src + 'letou/jdpay.svg'} alt="" height="28" />
                                            {user.favoriteDepositMethod === 'jdpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'jdpay'),
                                        })}>{this.getLabel('jd-pay')}</span>
                                        {contentValue === 'jdpay' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('bitcoin');
                                            }}>
                                            <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                            {user.favoriteDepositMethod === 'bitcoin' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'bitcoin'),
                                        })}>{this.getLabel('bit-coin')}</span>
                                        {contentValue === 'bitcoin' && <div className={classes.selected} />}
                                    </div>
                                    <div className={classes.methodColumn}>
                                        <Button
                                            className={classes.paymentButton}
                                            onClick={() => {
                                                this.depositWith('astropay_ch');
                                            }}>
                                            <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                                            {user.favoriteDepositMethod === 'astropay_ch' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                        </Button>
                                        <span className={clsx(classes.title, {
                                            [classes.active]: (contentValue === 'astropay_ch'),
                                        })}>{this.getLabel('astro-pay')}</span>
                                        {contentValue === 'astropay_ch' && <div className={classes.selected} />}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
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
                                    value="chinabanktransfer"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bank-icon.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'chinabanktransfer' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'chinabanktransfer') {
                                            this.depositWith('chinabanktransfer');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('quick-pay')} value="quickpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/unionpay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'quickpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                    </div>}
                                    onClick={() => {
                                        if (operationProp !== 'quickpay') {
                                            this.depositWith('quickpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('union-pay-qr')} value="unionpayqr"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'unionpayqr' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'unionpayqr') {
                                            this.depositWith('unionpayqr');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('ali-pay')} value="alipay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/alipay@3x.png'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'alipay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'alipay') {
                                            this.depositWith('alipay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('online-pay')} value="onlinepay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/onlinepay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'onlinepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'onlinepay') {
                                            this.depositWith('onlinepay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('we-chat-pay')} value="wechatpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/wechatpay.svg'} alt="" height="26" />
                                        {user.favoriteDepositMethod === 'wechatpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'wechatpay') {
                                            this.depositWith('wechatpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('jd-pay')} value="jdpay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/jdpay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'jdpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'jdpay') {
                                            this.depositWith('jdpay');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('bit-coin')} value="bitcoin"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'bitcoin' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
                                   </div>}
                                    onClick={() => {
                                        if (operationProp !== 'bitcoin') {
                                            this.depositWith('bitcoin');
                                        }
                                    }} />
                                <StyledTab label={this.getLabel('astro-pay')} value="astropay"
                                    icon={<div className={classes.mobileTabIcon}>
                                        <img src={images.src + 'letou/astropay.svg'} alt="" height="18" />
                                        {user.favoriteDepositMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.mobileFavourite} />}
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
                    <div className={classes.rootDesktop}>
                        <Grid container className={classes.methodGrid} spacing={4}>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('thailocalbank');
                                    }}
                                >
                                    <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'thailocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'thailocalbank'),
                                })}>{this.getLabel('local-bank')}</span>
                                {contentValue === 'thailocalbank' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('help2pay');
                                    }}
                                >
                                    <img src={images.src + 'letou/help-2-pay@3x.png'} alt="" height="32" />
                                    {user.favoriteDepositMethod === 'help2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'help2pay'),
                                })}>{this.getLabel('help-pay')}</span>
                                {contentValue === 'help2pay' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('payzod');
                                    }}
                                >
                                    <img src={images.src + 'letou/payzod-1@3x.png'} alt="" height="36" />
                                    {user.favoriteDepositMethod === 'payzod' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'payzod'),
                                })}>{this.getLabel('payzod-pay')}</span>
                                {contentValue === 'payzod' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('astropay');
                                    }}
                                >
                                    <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'astropay'),
                                })}>{this.getLabel('astro-pay')}</span>
                                {contentValue === 'astropay' && <div className={classes.selected} />}
                            </Grid>
                        </Grid>
                    </div>
                );
            case 'vietnam':
                return (
                    <div className={classes.rootDesktop}>
                        <Grid container className={classes.methodGrid} spacing={4}>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('vietnamlocalbank');
                                    }}>
                                    <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'vietnamlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'vietnamlocalbank'),
                                })}>{this.getLabel('local-bank')}</span>
                                {contentValue === 'vietnamlocalbank' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('circlepay');
                                    }}>
                                    <img src={images.src + 'letou/circlepay.svg'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'circlepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'circlepay'),
                                })}>{this.getLabel('circle-pay')}</span>
                                {contentValue === 'circlepay' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('vietnamhelp2pay');
                                    }}>
                                    <img src={images.src + 'letou/help-2-pay@3x.png'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'vietnamhelp2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'vietnamhelp2pay'),
                                })}>{this.getLabel('help-pay')}</span>
                                {contentValue === 'vietnamhelp2pay' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('momopay');
                                    }}>
                                    <img src={images.src + 'letou/momo.png'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'momopay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'momopay'),
                                })}>{this.getLabel('momo-pay')}</span>
                                {contentValue === 'momopay' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('scratchcard');
                                    }}>
                                    <img src={images.src + 'letou/scratchcard.svg'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'scratchcard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'scratchcard'),
                                })}>{this.getLabel('scratch-card')}</span>
                                {contentValue === 'scratchcard' && <div className={classes.selected} />}
                            </Grid>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('fgocard');
                                    }}>
                                    <img src={images.src + 'letou/fgocard.png'} alt="" height="26" />
                                    {user.favoriteDepositMethod === 'fgocard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                </Button>
                                <span className={clsx(classes.title, {
                                    [classes.active]: (contentValue === 'fgocard'),
                                })}>{this.getLabel('fgo-card')}</span>
                                {contentValue === 'fgocard' && <div className={classes.selected} />}
                            </Grid>
                        </Grid>
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

        if (operationProp === 'alipay')
            return <AliPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'onlinepay')
            return <OnlinePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'chinabanktransfer')
            return <Banktransfer callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'wechatpay')
            return <WechatPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'quickpay')
            return <QuickPay callbackFromParent={this.setPage} />;
        // else if (operationProp === 'bitcoin')
        //     return <BitcoinDeposit callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'unionpayqr')
            return <UnionPayQr callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'jdpay')
            return <JDPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'astropay_ch')
            return <Astropay_CH callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'vietnamhelp2pay')
            return <VietnamHelp2pay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'circlepay')
            return <CirclePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'fgocard')
            return <FgoCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'vietnamlocalbank')
            return <VietnamLocalBank callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'momopay')
            return <MomoPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'scratchcard')
            return <ScratchCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'thailocalbank')
            return <ThaiLocalBank callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'payzod')
            return <Payzod callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'astropay')
            return <Astropay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;
        else if (operationProp === 'help2pay')
            return <Help2pay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />;    
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                {this.getAvailablePaymentMethods()}
                {this.getPaymentMethodContent()}
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state.auth;

    return {
        user: user,
        operationProp: ownProps.match.params.operation,
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
