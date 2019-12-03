import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';
import DepositError from './deposit_error';
import BitcoinDeposit from './zh/bitcoin';
import { images } from '../../../../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../../../util_config';

import ThaiLocalBank from './th/local_bank';
import Payzod from './th/payzod';
import Astropay from './th/astro_pay';
import Help2pay from './th/help2_pay';

import FgoCard from './vn/fgo_card';
import MomoPay from './vn/momo_pay';
import CirclePay from './vn/circle_pay';
import VietnamHelp2pay from './vn/help2_pay';
import ScratchCard from './vn/scratch_card';
import VietnamLocalBank from './vn/local_bank';

import AliPay from './zh/ali_pay';
import OnlinePay from './zh/online_pay';
import Banktransfer from './zh/bank_transfer';
import WechatPay from './zh/wechat_pay';
import QuickPay from './zh/quickpay';
import UnionPayQr from './zh/unionpay_qr';
import JDPay from './zh/jd_pay';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
        width: '100%'
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
});

export class DepositMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            contentValue: '',
            selectedType: '',
            userCountry: '',
            favouriteMethod: ''
        };

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
        const { contentValue, userCountry, favouriteMethod } = this.state;

        switch (userCountry.toLowerCase()) {
            case 'china':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
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
                                className={classes.addButton}
                                onClick={() => {
                                    this.depositWith('astropay');
                                }}>
                                <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                                {favouriteMethod === 'astropay' && <img src={images.src + 'letou/favorite.svg'} alt="" className={classes.favourite} />}
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'astropay'),
                            })}>{this.getLabel('astro-pay')}</span>
                            {contentValue === 'astropay' && <div className={classes.selected} />}
                        </Grid>
                    </Grid>
                );
            case 'thailand':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
                                onClick={() => {
                                    this.depositWith('thailocalbank');
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
                                    this.depositWith('help2pay');
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
                                    this.depositWith('payzod');
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
                                    this.depositWith('astropay');
                                }}
                            >
                                <img src={images.src + 'letou/astropay.svg'} alt="" height="26" />
                            </Button>
                            <span className={clsx(classes.title, {
                                [classes.active]: (contentValue === 'astropay'),
                            })}>{this.getLabel('astro-pay')}</span>
                            {contentValue === 'astropay' && <div className={classes.selected} />}
                        </Grid>
                    </Grid>
                );
            case 'vietnam':
                return (
                    <Grid container className={classes.methodGrid} spacing={4}>
                        <Grid item xs={1} className={classes.methodColumn}>
                            <Button
                                className={classes.addButton}
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

                {contentValue === 'bitcoin' && (<BitcoinDeposit callbackFromParent={this.setPage} />)}
                {contentValue === 'alipay' && (<AliPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'onlinepay' && (<OnlinePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'chinabanktransfer' && (<Banktransfer callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'wechatpay' && (<WechatPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'quickpay' && (<QuickPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'unionpayqr' && (<UnionPayQr callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'jdpay' && (<JDPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}

                {contentValue === 'thailocalbank' && (<ThaiLocalBank callbackFromParent={this.setPage} />)}
                {contentValue === 'payzod' && (<Payzod callbackFromParent={this.setPage} />)}
                {contentValue === 'astropay' && (<Astropay callbackFromParent={this.setPage} />)}
                {contentValue === 'help2pay' && (<Help2pay callbackFromParent={this.setPage} />)}

                {contentValue === 'vietnamhelp2pay' && (<VietnamHelp2pay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'circlepay' && (<CirclePay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'fgocard' && (<FgoCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'vietnamlocalbank' && (<VietnamLocalBank callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'momopay' && (<MomoPay callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
                {contentValue === 'scratchcard' && (<ScratchCard callbackFromParent={this.setPage} checkFavoriteMethod={this.checkFavoriteMethod} />)}
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
