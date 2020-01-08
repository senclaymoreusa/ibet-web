/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout,
    postLogout,
    handle_search,
    setLanguage,
    authCheckState,
    show_letou_mobile_login,
    show_letou_mobile_signup,
    hide_letou_mobile_signup
} from '../../actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { injectIntl } from 'react-intl';
import Link from '@material-ui/core/Link';
import { images } from '../../util_config';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import PhoneIcon from '@material-ui/icons/Phone';
import Paper from '@material-ui/core/Paper';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import Person from '@material-ui/icons/Person';
import ContactSupport from '@material-ui/icons/ContactSupport';
import MeetingRoom from '@material-ui/icons/MeetingRoom';

import MobileLogin from './mobile/mobile_login';
import MobileRegister from './mobile/mobile_register';

const styles = theme => ({
    root: {
        width: '100%'
    },
    rootDesktop: {
        display: 'none',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: theme.spacing() * 2,
            paddingBottom: theme.spacing() * 2,
            backgroundColor: '#3c3c3c',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    rootMobile: {
        display: 'flex',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    mainGrid: {
        maxWidth: 1400
    },
    mainRow: {
        paddingTop: 20,
        paddingBottom: 30,
        display: 'flex'
    },
    imageGridCell: {
        direction: 'column',
        justify: 'flex-start',
        alignItems: 'center'
    },
    imageContainer: {
        direction: 'row',
        justify: 'flex-start',
        alignItems: 'center',
        minHeight: 44
    },
    image: {
        display: 'inline',
        verticalAlign: 'middle'
    },
    policyLink: {
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#cdcbcc',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
    },
    footer_menu_container: {
        display: 'inline',
        marginTop: 20
    },
    lang_button: {
        // padding: 0,
        // minWidth: 0
        border: '1px solid #363636',
        height: 48,
        borderRadius: 4,
        '&:hover': {
            borderRadius: 4,
            border: '1px solid #868686'
        }
    },
    itemList: {
        backgroundColor: '#363636',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10
    },
    listItem: {
        border: '1px solid #363636',
        borderRadius: 4,
        '&:hover': {
            border: '1px solid #868686'
        }
    },
    listItemSelected: {
        borderRadius: 4,
        border: '1px solid #ffffff'
    },
    listItemFlag: {
        display: 'inline-block'
    },
    listItemText: {
        marginLeft: 10,
        color: 'white',
        display: 'inline-block'
    },
    footerLink: {
        cursor: 'pointer',
        color: '#d3d1d2',
        fontSize: 15,
        fontWeight: 800,
        fontStyle: 'normal',
        whiteSpace: 'nowrap',
        marginRight: 30,
        '&:hover': {
            opacity: 1,
            textDecoration: 'none'
        }
    },
    mobileMenuPaper: {
        height: '100%',
        width: '100%',
        borderRadius: 0
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    contact_title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'right'
    },
    contactText: {
        fontSize: 14,
        color: '#e5e4e5',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.57
    },
    contact_email: {
        fontSize: 14,
        color: 'red'
    },
    menuButton: {
        fontSize: 20
    },
    a: {
        color: 'white'
    },
    langLabel: {
        color: '#cdcbcc',
        fontSize: 14
    },
    langControl: {
        minWidth: 140,
        marginTop: -20
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: 30
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 30
    },
    title: {
        color: '#F1941A',
        fontSize: 15,
        lineHeight: 1.5,
        letterSpacing: 0.08,
        fontWeight: 'bold',
        marginBottom: 10
    },
    grow: {
        flexGrow: 1
    },
    mobileModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    },
    flexRowDiv: {
        direction: 'row',
        justify: 'flex-start',
        alignItems: 'center'
    },
    flexColumnDiv: {
        direction: 'column',
        justify: 'flex-start',
        alignItems: 'center'
    },
    responsibilityImage: {
        height: 40,
        marginLeft: 8
    },
    productImage: {
        width: 120,
        marginLeft: 15
    },
    partnerImage: {
        height: 45,
        marginRight: 15
    },
    footerlink: {
        color: '#c2c2c2',
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: 0.08,
        fontWeight: 500,
        textDecoration: 'none'
    },
    partnerButton: {
        backgroundColor: '#717171',
        color: '#fff',
        borderRadius: 5,
        textTransform: 'capitalize',
        minWidth: 200,
        marginBottom: 20,
        '&:hover': {
            backgroundColor: '#7f7f7f',
            color: '#fff'
        }
    },
    phoneButton: {
        backgroundColor: '#3c3c3c',
        color: '#c2c2c2',
        border: '1px solid #c2c2c2',
        borderRadius: 5,
        minWidth: 200,
        '&:hover': {
            backgroundColor: '#4f4f4f',
            color: '#c2c2c2',
            border: '1px solid #c2c2c2'
        }
    },
    footerText: {
        color: '#717171',
        fontSize: 13,
        lineHeight: 1.5,
        letterSpacing: 0.08,
        fontWeight: 'normal',
        textDecoration: 'none',
        marginTop: 14
    },
    textRow: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: 'home'
        };

        this.getLabel = this.getLabel.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setActiveMenuByPath();
    }

    componentDidMount() {
        this.setActiveMenuByPath();
    }

    setActiveMenuByPath() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            let path = parts[1];

            this.setState({ activeMenu: (path == '') ? 'home' : path });
        } else if (parts.length >= 3) {
            let path = parts[2];

            if (path === 'about_us') this.setState({ activeMenu: 'help' });
        } else {
            this.setState({ activeMenu: 'home' });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getMobileFooterIconUrl(menu) {
        if (this.state.activeMenu === menu)
            return images.src + 'letou/' + menu + '-bottom-active.png';
        else return images.src + 'letou/' + menu + '-bottom.png';
    }

    render() {
        let { classes } = this.props;
        let phone = '';
        let phoneLabel = '';

        const { activeMenu } = this.state;

        switch (this.props.lang) {
            case 'en':
                phone = 'tel:+864001208588';
                phoneLabel = '400 120 8588';
                break;
            case 'zh-hans':
                phone = 'tel:+864001208588';
                phoneLabel = '400 120 8588';
                break;
            case 'zh':
                phone = 'tel:+864001208588';
                phoneLabel = '400 120 8588';
                break;
            case 'th':
                phone = 'tel:+6620261262';
                phoneLabel = '2026 1262';
                break;
            case 'vi':
                phone = 'tel:+842444582028';
                phoneLabel = '24 4458 2028';
                break;
            default:
                phone = 'tel:+864001208588';
                phoneLabel = '400 120 8588';
                break;
        }

        return (
            <div className={classes.root}>
                <footer className={classes.rootDesktop}>
                    <Grid container className={classes.mainGrid}>
                        <Grid item xs={12} className={classes.mainRow}>
                            {this.props.lang === 'zh' ? (
                                <div className={classes.column}>
                                    <span className={classes.title}>
                                        {this.getLabel('operation-license')}
                                    </span>
                                    <Link
                                        target="_blank"
                                        href="https://validator.curacao-egaming.com/validate?domain=www.letou.com&seal_id=a5ea1be10398cd6ee2d6406f92d93ee05134bf59a960309e0cf88f47b97711fdfcab134d120d801335e0e95e7f9afe5c&stamp=6d5e24c75d974acc207e43ce395877ca"
                                    >
                                        <img
                                            src={
                                                images.src +
                                                'letou/curacao_egaming.png'
                                            }
                                            alt=""
                                            height="64"
                                            width="64"
                                            className={classes.image}
                                        />
                                    </Link>
                                </div>
                            ) : null}

                            {this.props.lang === 'vi' ? (
                                <div className={classes.column}>
                                    <span className={classes.title}>
                                        {this.getLabel('title-license')}
                                    </span>
                                    <Link
                                        target="_blank"
                                        href="https://validator.curacao-egaming.com/validate?domain=www.letou.com&seal_id=a5ea1be10398cd6ee2d6406f92d93ee05134bf59a960309e0cf88f47b97711fdfcab134d120d801335e0e95e7f9afe5c&stamp=6d5e24c75d974acc207e43ce395877ca"
                                    >
                                        <img
                                            src={
                                                images.src + 'letou/pagcor.png'
                                            }
                                            alt=""
                                            height="50"
                                            className={classes.image}
                                        />
                                    </Link>
                                </div>
                            ) : null}

                            {/* <div className={classes.column}>
              <span className={classes.title}>{this.getLabel('operation-license')}</span>
              <Link target="_blank" href='https://validator.curacao-egaming.com/validate?domain=www.letou.com&seal_id=a5ea1be10398cd6ee2d6406f92d93ee05134bf59a960309e0cf88f47b97711fdfcab134d120d801335e0e95e7f9afe5c&stamp=6d5e24c75d974acc207e43ce395877ca'>
                <img src={images.src + 'letou/curacao_egaming.png'} alt="" height="64" width="64" className={classes.image} />
              </Link>
            </div> */}
                            <div className={classes.column}>
                                <span className={classes.title}>
                                    {this.getLabel('seriea-sponsorship')}
                                </span>
                                <Link
                                    target="_blank"
                                    href="https://www.inter.it/cn/news/2018/08/8/%E4%B9%90%E6%8A%95%E6%88%90%E4%B8%BA%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0%E8%B6%B3%E7%90%83%E4%BF%B1%E4%B9%90%E9%83%A8%E4%BA%9A%E6%B4%B2%E5%9C%B0%E5%8C%BA%E9%A6%96%E5%AE%B6%E7%BA%BF%E4%B8%8A%E5%A8%B1%E4%B9%90%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4.html"
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/intermilan_sponsor_1.png'
                                        }
                                        alt=""
                                        height="52"
                                        width="130"
                                        className={classes.image}
                                    />
                                </Link>
                            </div>
                            <div className={classes.column}>
                                <span className={classes.title}>
                                    {this.getLabel('esport-sponsorship')}
                                </span>
                                <Link
                                    target="_blank"
                                    href="https://www.fnatic.com/teams/dota2"
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/fnatic_sponsor_1.png'
                                        }
                                        alt=""
                                        width="130"
                                        className={classes.image}
                                        style={{ marginTop: 16 }}
                                    />
                                </Link>
                            </div>
                            <div className={classes.grow} />
                            <div className={classes.column}>
                                <span className={classes.title}>
                                    {this.getLabel('title-partner')}
                                </span>
                                <div>
                                    <Link target="_blank" href="/">
                                        <img
                                            src={
                                                images.src +
                                                'letou/icon_gamcare_1.png'
                                            }
                                            alt=""
                                            className={
                                                classes.responsibilityImage
                                            }
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://help.letou.com/cn/member_maintain/seq4.html"
                                    >
                                        <img
                                            src={
                                                images.src +
                                                'letou/icon_plus18_1.png'
                                            }
                                            alt=""
                                            className={
                                                classes.responsibilityImage
                                            }
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://help.letou.com/cn/member_maintain/seq4.html"
                                    >
                                        <img
                                            src={
                                                images.src + 'letou/icon_no.png'
                                            }
                                            alt=""
                                            className={
                                                classes.responsibilityImage
                                            }
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className={classes.mainRow}>
                            <div className={classes.leftColumn}>
                                <span className={classes.title}>
                                    {this.getLabel('payment-methods')}
                                </span>
                                <div>
                                    <Link
                                        target="_blank"
                                        href="https://usa.visa.com/"
                                    >
                                        <img
                                            src={
                                                images.src +
                                                'letou/icon_visa_1.png'
                                            }
                                            alt=""
                                            className={classes.partnerImage}
                                        />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://www.mastercard.us/en-us.html"
                                    >
                                        <img
                                            src={
                                                images.src +
                                                'letou/icon_mastercard_1.png'
                                            }
                                            alt=""
                                            className={classes.partnerImage}
                                        />
                                    </Link>
                                    <Link target="_blank" href="/">
                                        <img
                                            src={
                                                images.src +
                                                'letou/localbanks_vn.png'
                                            }
                                            alt=""
                                            className={classes.partnerImage}
                                        />
                                    </Link>
                                    <Link target="_blank" href="/">
                                        <img
                                            src={
                                                images.src +
                                                'letou/scratchcards.png'
                                            }
                                            alt=""
                                            className={classes.partnerImage}
                                        />
                                    </Link>
                                    <Link target="_blank" href="/">
                                        <img
                                            src={
                                                images.src +
                                                'letou/helptopay_footer.png'
                                            }
                                            alt=""
                                            className={classes.partnerImage}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>

                        {this.props.lang === 'vi' ? (
                            <Grid item xs={12} className={classes.mainRow}>
                                <div className={classes.leftColumn}>
                                    <span className={classes.title}>
                                        {this.getLabel('title-product')}
                                    </span>
                                    <div>
                                        <Link target="_blank" href="/">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/oneworks.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/asiagaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/playtech.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/opusgaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/gameplay.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/microgaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/hkjockeyclub.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        ) : null}
                        {this.props.lang === 'th' ? (
                            <Grid item xs={12} className={classes.mainRow}>
                                <div className={classes.leftColumn}>
                                    <span className={classes.title}>
                                        {this.getLabel('title-product')}
                                    </span>
                                    <div>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/asiagaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/entwinetech.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/playtech.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/opusgaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/evolutiongaming.png'
                                                }
                                                alt=""
                                                className={classes.productImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/golddeluxe.png'
                                                }
                                                alt=""
                                                height="40"
                                                style={{ marginLeft: 15 }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        ) : null}
                        {this.props.lang === 'zh' ? (
                            <Grid item xs={12} className={classes.mainRow}>
                                <div className={classes.leftColumn}>
                                    <span className={classes.title}>
                                        {this.getLabel('title-partner')}
                                    </span>
                                    <div>
                                        <Link
                                            target="_blank"
                                            href="https://usa.visa.com/"
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_visa_1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://www.mastercard.us/en-us.html"
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_mastercard_1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://cn.unionpay.com/"
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/item_union_1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F"
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/item_wechat_1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://www.alipay.com/"
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/item_alipay_1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                        <Link target="_blank" href="/">
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/pay6-1.png'
                                                }
                                                alt=""
                                                className={classes.partnerImage}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        ) : null}
                        <Grid
                            item
                            xs={12}
                            className={classes.mainRow}
                            style={{ borderBottom: '1px solid #cdcbcc' }}
                        ></Grid>
                        <Grid item xs={12} className={classes.mainRow}>
                            <div className={classes.leftColumn}>
                                <span className={classes.title}>
                                    {this.getLabel('about-us')}
                                </span>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_brand/seq1.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('about-letou')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_maintain/seq4.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('gaming-responsibility')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_maintain/seq2.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('link-disclaimer')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_event/seq1.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('terms-conditions')}
                                </Link>
                            </div>
                            <div className={classes.leftColumn}>
                                <span className={classes.title}>
                                    {this.getLabel('login-help')}
                                </span>
                                <Link
                                    target="_blank"
                                    href="https://letou.one/"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('line-center')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="/"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('online-service')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_brand/seq2.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('contact-us')}
                                </Link>
                            </div>
                            <div className={classes.leftColumn}>
                                <span className={classes.title}>
                                    {this.getLabel('using-help')}
                                </span>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_start_02/seq1.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('deposit-process')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_start_04/seq1.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('common-problem')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/index.html?type=member_rule_03"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('sabah-sports-rules')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_rule_05/seq2.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('happy-color-rules')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_rule_05/seq3.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('timing-rules')}
                                </Link>
                            </div>
                            <div
                                className={classes.leftColumn}
                                style={{ paddingTop: 32 }}
                            >
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/index.html?type=member_start_03"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('withdrawal-process')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/index.html?type=member_rule_01"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('sports-rules')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/index.html?type=member_rule_02"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('casino-rules')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/index.html?type=member_rule_04"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('video-game-rules')}
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://help.letou.com/cn/member_rule_05/seq1.html"
                                    className={classes.footerlink}
                                >
                                    {this.getLabel('world-lotto-rules')}
                                </Link>
                            </div>
                            <div className={classes.grow} />
                            <div className={classes.column}>
                                <span className={classes.title}>
                                    {this.getLabel('maximum-gaming-platform')}
                                </span>
                                <Button
                                    target="_blank"
                                    href="https://affiliates.letou.com/cn/"
                                    variant="contained"
                                    className={classes.partnerButton}
                                >
                                    <SupervisorAccount
                                        style={{ marginRight: 5 }}
                                    />
                                    {this.getLabel('become-partner')}
                                </Button>
                                <Button
                                    href={phone}
                                    variant="contained"
                                    className={classes.phoneButton}
                                >
                                    <PhoneIcon style={{ marginRight: 5 }} />
                                    {phoneLabel}
                                </Button>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.mainRow}
                            style={{ borderBottom: '1px solid #cdcbcc' }}
                        ></Grid>
                        <Grid item xs={12} className={classes.textRow}>
                            <Typography className={classes.footerText}>
                                {this.getLabel('footer-text1')}
                            </Typography>
                            <Typography className={classes.footerText}>
                                {this.getLabel('footer-text2')}
                            </Typography>
                            <Typography className={classes.footerText}>
                                {this.getLabel('footer-text3')}
                            </Typography>
                            <Typography className={classes.footerText}>
                                {this.getLabel('footer-text4')}
                            </Typography>
                        </Grid>
                    </Grid>
                </footer>
                {this.props.isAuthenticated ? (
                    <BottomNavigation
                        value={activeMenu}
                        showLabels
                        className={classes.rootMobile}
                    >
                        <BottomNavigationAction
                            label={this.getLabel('home-label')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl('home')}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.setState({ activeMenu: 'home' });
                                this.props.history.push('/');
                            }}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('promotions-label')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl(
                                        'promotions'
                                    )}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.setState({ activeMenu: 'promotions' });
                                this.props.history.push('/promotions');
                            }}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('deposit-label')}
                            icon={<MeetingRoom />}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('inbox-label')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl('inbox')}
                                    alt=""
                                    height="20"
                                />
                            }
                        />
                        <BottomNavigationAction
                            label={this.getLabel('profile-label')}
                            icon={<Person />}
                            onClick={() => {
                                this.props.history.push('/p/');
                            }}
                        />
                    </BottomNavigation>
                ) : (
                    <BottomNavigation
                        value={activeMenu}
                        showLabels
                        className={classes.rootMobile}
                    >
                        <BottomNavigationAction
                            label={this.getLabel('home-label')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl('home')}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.props.history.push('/');
                                this.setState({ activeMenu: 'home' });
                            }}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('promotions-label')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl(
                                        'promotions'
                                    )}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.setState({ activeMenu: 'promotions' });
                                this.props.history.push('/promotions');
                            }}
                        />
                        <BottomNavigationAction
                            style={{ paddingTop: 0, paddingBottom: 0 }}
                            icon={
                                <img
                                    src={
                                        images.src +
                                        'letou/signup-bottom-' +
                                        this.props.lang +
                                        '.png'
                                    }
                                    alt=""
                                    height="50"
                                />
                            }
                            onClick={() => {
                                this.props.show_letou_mobile_signup();
                            }}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('help-title')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl('help')}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.props.history.push(
                                    '/' + this.props.lang + '/about_us'
                                );
                                this.setState({ activeMenu: 'help' });
                            }}
                        />
                        <BottomNavigationAction
                            label={this.getLabel('log-in')}
                            icon={
                                <img
                                    src={this.getMobileFooterIconUrl('signin')}
                                    alt=""
                                    height="20"
                                />
                            }
                            onClick={() => {
                                this.props.show_letou_mobile_login();
                            }}
                        />
                    </BottomNavigation>
                )}
                <Modal
                    aria-labelledby="mobile-menu"
                    aria-describedby="mobile-menu-description"
                    open={this.props.showMobileLogin}
                    className={classes.mobileModal}
                >
                    <Paper className={classes.mobileMenuPaper}>
                        <MobileLogin />
                    </Paper>
                </Modal>
                <Modal
                    aria-labelledby="mobile-menu"
                    aria-describedby="mobile-menu-description"
                    open={this.props.showMobileSignup}
                    className={classes.mobileModal}
                >
                    <Paper className={classes.mobileMenuPaper}>
                        <MobileRegister />
                    </Paper>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
        showMobileLogin: state.general.show_letou_mobile_login,
        showMobileSignup: state.general.show_letou_mobile_signup
    };
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
    injectIntl(
        withRouter(
            connect(mapStateToProps, {
                logout,
                postLogout,
                handle_search,
                setLanguage,
                authCheckState,
                show_letou_mobile_login,
                show_letou_mobile_signup,
                hide_letou_mobile_signup
            })(Footer)
        )
    )
);
