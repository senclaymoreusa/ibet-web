import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { images } from '../../../../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../../../util_config';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import WithdrawSuccess from './withdraw_success';
import WithdrawError from './withdraw_error';
import VietnamLocalBank from './vn/local_bank';
import MoneyPay from './vn/money_pay';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
        width: '100%',
    },
    addButton: {
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
    content: {
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 50
    },
});

const StyledTabs = withStyles({
    root:{
        borderBottom:'1px solid #efefef',
    },
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
        color: '#474747',
        backgroundColor: '#e4e4e4',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
            fontWeight: 800,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: - 0.06,
            textAlign: 'center',
        },
        '&:selected': {
            opacity: 1,
            height: '100%',
        },
    },
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


export class WithdrawMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            contentValue: '',
            selectedType: '',
            userCountry: '',
            favouriteMethod: '',

            tabValue: 'localbank'
        };

        this.handleTabChange = this.handleTabChange.bind(this);

        this.setPage = this.setPage.bind(this);
        this.withdrawWith = this.withdrawWith.bind(this);
        this.checkFavoriteMethod = this.checkFavoriteMethod.bind(this);
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue })
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
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
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
        if (msg)
            this.setState({ withdrawMessage: msg });

        this.setState({ contentValue: page });
    };

    withdrawWith(paymentMethod) {
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
        const { contentValue, userCountry, favouriteMethod } = this.state;

        switch (userCountry.toLowerCase()) {
            case 'china':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        {/* <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('banktransfer');
                                }}
                            >
                                <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'banktransfer'),
                            })}>{this.getLabel('bank-transfer')}</span>
                            {contentValue === 'banktransfer' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('quickpay');
                                }}
                            ><img src={images.src + 'letou/unionpay.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'quickpay'),
                            })}>{this.getLabel('quick-pay')}</span>
                            {contentValue === 'quickpay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('unionpayqr');
                                }}
                            ><img src={images.src + 'letou/unionpayqr.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'unionpayqr'),
                            })}>{this.getLabel('union-pay-qr')}</span>
                            {contentValue === 'unionpayqr' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('alipay');
                                }}
                            ><img src={images.src + 'letou/alipay@3x.png'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'alipay'),
                            })}>{this.getLabel('ali-pay')}</span>
                            {contentValue === 'alipay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('onlinepay');
                                }}
                            ><img src={images.src + 'letou/onlinepay.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'onlinepay'),
                            })}>{this.getLabel('online-pay')}</span>
                            {contentValue === 'onlinepay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('wechatpay');
                                }}
                            ><img src={images.src + 'letou/wechatpay.svg'} alt="" height="40" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'wechatpay'),
                            })}>{this.getLabel('we-chat-pay')}</span>
                            {contentValue === 'wechatpay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('jdpay');
                                }}
                            ><img src={images.src + 'letou/jdpay.svg'} alt="" height="28" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'jdpay'),
                            })}>{this.getLabel('jd-pay')}</span>
                            {contentValue === 'jdpay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('bitcoin');
                                }}
                            ><img src={images.src + 'letou/bitcoin.svg'} alt="" height="18" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'bitcoin'),
                            })}>{this.getLabel('bit-coin')}</span>
                            {contentValue === 'bitcoin' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('astropay');
                                }}
                            ><img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'astropay'),
                            })}>{this.getLabel('astro-pay')}</span>
                            {contentValue === 'astropay' && <div className={classes.selected} />}
                        </Grid> */}
                    </Grid>
                );
            case 'thailand':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        {/* <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('thailocalbank');
                                }}
                            >
                                <img src={images.src + 'letou/bank-icon.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'thailocalbank'),
                            })}>{this.getLabel('local-bank')}</span>
                            {contentValue === 'thailocalbank' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('help2pay');
                                }}
                            >
                                <img src={images.src + 'letou/help-2-pay@3x.png'} alt="" height="32" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'help2pay'),
                            })}>{this.getLabel('help-pay')}</span>
                            {contentValue === 'help2pay' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('payzod');
                                }}
                            >
                                <img src={images.src + 'letou/payzod-1@3x.png'} alt="" height="36" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'payzod'),
                            })}>{this.getLabel('payzod-pay')}</span>
                            {contentValue === 'payzod' && <div className={classes.selected} />}
                        </Grid>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('astropay');
                                }}
                            >
                                <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'astropay'),
                            })}>{this.getLabel('astro-pay')}</span>
                            {contentValue === 'astropay' && <div className={classes.selected} />}
                        </Grid> */}
                    </Grid>
                );
            case 'vietnam':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.withdrawWith('vietnamlocalbank');
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
                                    this.withdrawWith('circlepay');
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
                                    this.withdrawWith('vietnamhelp2pay');
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
                                    this.withdrawWith('momopay');
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
                                    this.withdrawWith('scratchcard');
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
                                    this.withdrawWith('fgocard');
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
                );
            default:
                return <div></div>;
        }
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root}>
                <StyledTabs
                    value={tabValue}
                    onChange={this.handleTabChange}>
                    <StyledTab
                        label={this.getLabel('local-bank')}
                        value="localbank"
                        onClick={() => {
                            if (this.props.match.params.type !== 'localbank') {
                                this.handleTabChange('localbank');
                            }
                        }}
                    />
                    <StyledTab
                        label={this.getLabel('money-pay')}
                        value="moneypay"
                        onClick={() => {
                            if (this.props.match.params.type !== 'moneypay') {
                                this.handleTabChange('moneypay');
                            }
                        }}
                    />
                </StyledTabs>
                <div className={classes.content}>
                    {this.state.tabValue === 'localbank' && <VietnamLocalBank />}
                    {this.state.tabValue === 'moneypay' && <MoneyPay />}
                </div>
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
            )(WithdrawMain)
        )
    )
    );
