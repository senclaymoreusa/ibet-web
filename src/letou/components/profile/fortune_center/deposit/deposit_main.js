import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL
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
        flexDirection: 'column',
        minHeight: '100vh'
    },
    rootDesktop: {
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        minHeight: '100vh',
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
        borderBottom: '1px solid #eff3f4',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    methodGrid: {
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
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
        alignItems: 'center',
        backgroundColor: '#fff'
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

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export class DepositMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            contentValue: '',
            selectedType: '',
            userCountry: '',
            favouriteMethod: '',

            tabValue: 'chinabanktransfer'
        };

        this.handleTabChange = this.handleTabChange.bind(this);

        this.setPage = this.setPage.bind(this);
        this.depositWith = this.depositWith.bind(this);
        this.checkFavoriteMethod = this.checkFavoriteMethod.bind(this);
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ userCountry: res.data.country });
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
                //this.setState({contentValue: this.state.favouriteMethod });
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ userCountry: res.data.country });
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
                this.setState({ contentValue: this.state.favouriteMethod });
                //this.setState({ contentValue: res.data.favorite_payment_method });
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    checkFavoriteMethod() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
                this.setState({ contentValue: this.state.favouriteMethod });
                //this.setState({ contentValue: res.data.favorite_payment_method });
            });
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue })
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
        //this.setState({ contentValue: this.state.favouriteMethod })
    }

    setPage = (page, msg) => {
        if (msg)
            this.setState({ depositMessage: msg });

        this.setState({ contentValue: page });
    };

    depositWith(paymentMethod) {
        this.setState({ contentValue: paymentMethod });


        var url = this.state.urlPath;
        var parts = url.split('/');

        if (parts.length >= 4) {
            url = '/';
            var path = parts.slice(1, 4).join('/');
            url = url + path;
        }
        url = url + '/' + paymentMethod;
        this.props.history.push(url);

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    checkFavoriteMethod() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
            });
    }

    getAvailablePaymentMethods() {


        const { classes } = this.props;
        const { contentValue, userCountry, favouriteMethod, tabValue } = this.state;

        switch (userCountry.toLowerCase()) {
            case 'china':
                return (
                    <div>
                        <div className={classes.rootDesktop}>
                            <Grid container className={classes.methodGrid} spacing={4}>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('chinabanktransfer');
                                        }}>
                                        <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                        {favouriteMethod === 'chinabanktransfer' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'chinabanktransfer'),
                                    })}>{this.getLabel('bank-transfer')}</span>
                                    {contentValue === 'chinabanktransfer' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('quickpay');
                                        }}>
                                        <img src={images.src + 'letou/unionpay.svg'} alt="" height="26" />
                                        {favouriteMethod === 'quickpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'quickpay'),
                                    })}>{this.getLabel('quick-pay')}</span>
                                    {contentValue === 'quickpay' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('unionpayqr');
                                        }}>
                                        <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="26" />
                                        {favouriteMethod === 'unionpayqr' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'unionpayqr'),
                                    })}>{this.getLabel('union-pay-qr')}</span>
                                    {contentValue === 'unionpayqr' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('alipay');
                                        }}>
                                        <img src={images.src + 'letou/alipay@3x.png'} alt="" height="26" />
                                        {favouriteMethod === 'alipay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'alipay'),
                                    })}>{this.getLabel('ali-pay')}</span>
                                    {contentValue === 'alipay' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('onlinepay');
                                        }}>
                                        <img src={images.src + 'letou/onlinepay.svg'} alt="" height="26" />
                                        {favouriteMethod === 'onlinepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'onlinepay'),
                                    })}>{this.getLabel('online-pay')}</span>
                                    {contentValue === 'onlinepay' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('wechatpay');
                                        }}>
                                        <img src={images.src + 'letou/wechatpay.svg'} alt="" height="40" />
                                        {favouriteMethod === 'wechatpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'wechatpay'),
                                    })}>{this.getLabel('we-chat-pay')}</span>
                                    {contentValue === 'wechatpay' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('jdpay');
                                        }}>
                                        <img src={images.src + 'letou/jdpay.svg'} alt="" height="28" />
                                        {favouriteMethod === 'jdpay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'jdpay'),
                                    })}>{this.getLabel('jd-pay')}</span>
                                    {contentValue === 'jdpay' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('bitcoin');
                                        }}>
                                        <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                        {favouriteMethod === 'bitcoin' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'bitcoin'),
                                    })}>{this.getLabel('bit-coin')}</span>
                                    {contentValue === 'bitcoin' && <div className={classes.selected} />}
                                </Grid>
                                <Grid item xs={1} className={classes.methodColumn}>
                                    <Button
                                        className={classes.paymentButton}
                                        onClick={() => {
                                            this.depositWith('astropay_ch');
                                        }}>
                                        <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                                        {favouriteMethod === 'astropay_ch' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                                    </Button>
                                    <span className={clsx(classes.title, {
                                        [classes.active]: (contentValue === 'astropay_ch'),
                                    })}>{this.getLabel('astro-pay')}</span>
                                    {contentValue === 'astropay_ch' && <div className={classes.selected} />}
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
                                                {this.getLabel('deposit-label')}
                                            </span>
                                        </Grid>
                                        <Grid item xs={3}>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                                <StyledTabs
                                    value={tabValue}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    onChange={this.handleTabChange}
                                >
                                    <StyledTab label={this.getLabel('bank-transfer')}
                                        value="chinabanktransfer"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/bank-icon.svg'} alt="" height="18" />
                                        </div>}
                                        onClick={() => {
                                            if (this.props.match.params.type !== 'chinabanktransfer') {
                                                this.handleTabChange('chinabanktransfer');
                                                this.depositWith('chinabanktransfer');
                                            }
                                        }} />
                                    <StyledTab label={this.getLabel('quick-pay')} value="quickpay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/unionpay.svg'} alt="" height="18" />
                                        </div>}
                                        onClick={() => {
                                            if (this.props.match.params.type !== 'quickpay') {
                                                this.handleTabChange('quickpay');
                                                this.depositWith('quickpay');
                                            }
                                        }} />
                                    <StyledTab label={this.getLabel('union-pay-qr')} value="unionpayqr"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/unionpayqr.svg'} alt="" height="18" />
                                        </div>} {...a11yProps(2)} />
                                    <StyledTab label={this.getLabel('ali-pay')} value="alipay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/alipay@3x.png'} alt="" height="18" />
                                        </div>} {...a11yProps(3)} />
                                    <StyledTab label={this.getLabel('online-pay')} value="onlinepay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/onlinepay.svg'} alt="" height="18" />
                                        </div>} {...a11yProps(4)} />
                                    <StyledTab label={this.getLabel('we-chat-pay')} value="wechatpay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/wechatpay.svg'} alt="" height="26" />
                                        </div>} {...a11yProps(5)} />
                                    <StyledTab label={this.getLabel('jd-pay')} value="jdpay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/jdpay.svg'} alt="" height="18" />
                                        </div>} {...a11yProps(6)} />
                                    <StyledTab label={this.getLabel('bit-coin')} value="bitcoin"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                                        </div>} {...a11yProps(7)} />
                                    <StyledTab label={this.getLabel('astro-pay')} value="astropay"
                                        icon={<div className={classes.mobileTabIcon}>
                                            <img src={images.src + 'letou/astropay.svg'} alt="" height="18" />
                                        </div>} {...a11yProps(8)} />
                                </StyledTabs>
                            </AppBar>
                        </div>
                    </div>
                );
            case 'thailand':
                return (
                    <div classnName={classes.rootDesktop}>
                        <Grid container className={classes.methodGrid} spacing={4}>
                            <Grid item xs={1} className={classes.methodColumn}>
                                <Button
                                    className={classes.paymentButton}
                                    onClick={() => {
                                        this.depositWith('thailocalbank');
                                    }}
                                >
                                    <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                                    {favouriteMethod === 'thailocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'help2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'payzod' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'vietnamlocalbank' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'circlepay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'vietnamhelp2pay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'momopay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'scratchcard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
                                    {favouriteMethod === 'fgocard' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
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
    render() {
        const { classes } = this.props;
        const { contentValue } = this.state;

        return (
            <div className={classes.root}>
                {this.getAvailablePaymentMethods()}
                {contentValue === 'error' && (<DepositError callbackFromParent={this.setPage} errorMessage={this.state.depositMessage} />)}
                {contentValue === 'success' && (<DepositSuccess callbackFromParent={this.setPage} successMessage={this.state.depositMessage} />)}
                {contentValue === 'inprogress' && (<DepositInprogress callbackFromParent={this.setPage} InprogressMessage={this.state.depositMessage} />)}

                {/*
                {contentValue === 'bitcoin' && (<BitcoinDeposit callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod}/>)}
                */}
                {contentValue === 'alipay' && (<AliPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'onlinepay' && (<OnlinePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'chinabanktransfer' && (<Banktransfer callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'wechatpay' && (<WechatPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'quickpay' && (<QuickPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'unionpayqr' && (<UnionPayQr callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'jdpay' && (<JDPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'astropay_ch' && (<Astropay_CH callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}

                {contentValue === 'vietnamhelp2pay' && (<VietnamHelp2pay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'circlepay' && (<CirclePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'fgocard' && (<FgoCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'vietnamlocalbank' && (<VietnamLocalBank callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'momopay' && (<MomoPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'scratchcard' && (<ScratchCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'thailocalbank' && (<ThaiLocalBank callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'payzod' && (<Payzod callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'astropay' && (<Astropay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'help2pay' && (<Help2pay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang,
    };
};

export default withStyles(styles)
    (withRouter(
        injectIntl(
            connect(
                mapStateToProps, { authCheckState }
            )(DepositMain)
        )
    )
    );
