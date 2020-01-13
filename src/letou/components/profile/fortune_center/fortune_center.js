import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL, sendingLog } from '../../../../actions';
import { injectIntl, FormattedNumber } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { config, images } from '../../../../util_config';
import axios from 'axios';

import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import FlightLandOutlined from '@material-ui/icons/FlightLandOutlined';
import FlightTakeoffOutlined from '@material-ui/icons/FlightTakeoffOutlined';
import LoopOutlined from '@material-ui/icons/LoopOutlined';

import DepositMain from './deposit/deposit_main';
import TotalAssets from './total_assets';
import Transfer from './transfer';
import Withdrawal from './withdraw/withdraw_main';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center'
    },
    rootDesktop: {
        maxWidth: 1400,
        width: '100%',
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#f2f3f5',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    mainGrid: {
        maxWidth: 1400,
    },
    leftPane: {
        backgroundColor: '#f0f0f0',
        minHeight: 500,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    leftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        "&:hover": {
            backgroundColor: '#f1f1f1',
        },
    },
    activeLeftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        backgroundColor: '#d1d1d1',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        "&:hover": {
            backgroundColor: '#dfdfdf',
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
        borderBottom: '1px solid #4DA9DF',
        paddingBottom: 12,
    },
    content: {
        flexGrow: 1,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10
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
    headerGrid: {
        backgroundColor: '#0aadff',
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingTop: 80
    },
    fund: {
        fontSize: 30,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#fff',
    },
    identityGrid: {
        backgroundColor: '#fff',
        padding: 20
    },
    row: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        textTransform: 'capitalize',
        backgroundColor: '#ff9202',
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        minHeight: 44,
        width: '100%',
        '&:focus': {
            backgroundColor: '#f59d2a'
        },
        '&:hover': {
            backgroundColor: '#f59d2a'
        }
    },
    listImage: {
        marginRight: 15
    }
});

export class FortuneCenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            desktopContent: '',
            desktopTabValue: '',
            userInformationEditMessage: '',
            message: '',
            mainWallet: 0,
            currency: 'CNY'
        }
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;

                axios
                    .get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ username: res.data.username });
                        this.setState({ mainWallet: res.data.main_wallet });
                        this.setState({ currency: res.data.currency });
                    })
                    .catch(function (err) {
                        sendingLog(err);
                    });
            }
        })

        

        this.setState({ urlPath: this.props.history.location.pathname });

        this.initializeContent();
    }

    componentDidMount() {
        const { activeContent } = this.props;

        if (activeContent)
            this.setState({ contentValue: activeContent });

        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;

                axios
                    .get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ username: res.data.username });
                        this.setState({ mainWallet: res.data.main_wallet });
                        this.setState({ currency: res.data.currency });
                    })
                    .catch(function (err) {
                        sendingLog(err);
                    });
            }
        })

        

        this.setState({ urlPath: this.props.history.location.pathname });

        this.initializeContent();
    }

    initializeContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');


        if (parts.length > 3) {
            if (parts[1].length > 0) {
                this.setState({ desktopContent: parts[3] })
            }

            this.setState({ desktopTabValue: parts[3] })
        } else {
            this.setState({ desktopContent: 'total-assets' })
            this.setState({ desktopTabValue: 'total-assets' })
        }
    }


    setContent = (page, msg) => {
        this.setState({ desktopContent: page });

        if (msg)
            this.setState({ userInformationEditMessage: msg });
    }

    setMessageContent = (page, msg) => {
        this.setState({ desktopContent: page });

        if (msg) {
            this.setState({ message: msg });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getMobileContent() {
        const { subProp } = this.props;
        const { classes } = this.props;
        
        switch (subProp) {
            case 'deposit':
                return <DepositMain />;
            case 'withdrawal':
                return <Withdrawal />;
            case 'transfer':
                return <Transfer />;
            case 'total-assets':
                return <TotalAssets />;
            default:
                return (<div>
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
                                    <span className={classes.title}>
                                        {this.getLabel('fortune-center')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container className={classes.headerGrid}>
                        <Grid item xs={12}>
                            <span className={classes.label} style={{ color: 'white' }}>
                                {this.getLabel('withdrawable-fund')}
                            </span>
                        </Grid>
                        <Grid item xs={12} >
                            <span className={classes.fund}>
                                <FormattedNumber
                                    maximumFractionDigits={2}
                                    value={this.state.mainWallet}
                                    style={`currency`}
                                    currency={this.state.currency}
                                />
                            </span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.identityGrid}>
                        <Grid item xs={12} >
                            <Button className={classes.button}
                                onClick={() => {
                                    this.props.history.push('/p/account-management')
                                }}>
                                {this.getLabel('compelete-dentity-info')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: 15 }}>
                        <Grid item xs={12} className={classes.row}
                            onClick={() => {
                                this.props.history.push(
                                    '/p/fortune-center/deposit'
                                );
                            }}>
                            <img
                                src={images.src + 'letou/deposit-icon-blue.png'}
                                alt=""
                                width="22"
                                className={classes.listImage}
                            />
                            <span className={classes.label}>
                                {this.getLabel('deposit-label')}
                            </span>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                        <Grid item xs={12} className={classes.row}
                            onClick={() => {
                                this.props.history.push(
                                    '/p/fortune-center/withdrawal'
                                );
                            }}>
                            <img
                                src={images.src + 'letou/withdrawal-icon-orange.png'}
                                alt=""
                                width="22"
                                className={classes.listImage}
                            />
                            <span className={classes.label}>
                                {this.getLabel('title-withdrawal')}
                            </span>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                        <Grid item xs={12} className={classes.row}
                            onClick={() => {
                                this.props.history.push(
                                    '/p/fortune-center/transfer'
                                );
                            }}
                        >

                            <img
                                src={images.src + 'letou/transfers-icon-green.png'}
                                alt=""
                                width="22"
                                className={classes.listImage}
                            />
                            <span className={classes.label}>
                                {this.getLabel('title-transfer')}
                            </span>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: 15 }}>
                        <Grid item xs={12} className={classes.row}
                            onClick={() => {
                                this.props.history.push(
                                    '/p/fortune-center/total-assets'
                                );
                            }}>
                            <img
                                src={images.src + 'letou/total-icon.png'}
                                alt=""
                                width="22"
                                className={classes.listImage}
                            />
                            <span className={classes.label}>
                                {this.getLabel('total-assets')}
                            </span>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                    </Grid>
                </div>);
        }
    }

    render() {
        const { classes } = this.props;
        const { desktopContent, desktopTabValue } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <Grid container className={classes.mainGrid}>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>{this.getLabel('fortune-center')}</span>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                            <div className={classes.leftPane}>
                                <Button className={(desktopTabValue === 'total-assets') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                    onClick={() => this.props.history.push('/p/fortune-center/total-assets')}>
                                    <AccountBalanceOutlined style={{ marginRight: 8 }} />
                                    {this.getLabel('total-assets')}
                                </Button>
                                <Button className={(desktopTabValue === 'deposit') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                    onClick={() => this.props.history.push('/p/fortune-center/deposit')}>
                                    <FlightLandOutlined style={{ marginRight: 8 }} />
                                    {this.getLabel('deposit-label')}
                                </Button>
                                <Button className={(desktopTabValue === 'withdrawal') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                    onClick={() => this.props.history.push('/p/fortune-center/withdrawal')}>
                                    <FlightTakeoffOutlined style={{ marginRight: 8 }} />
                                    {this.getLabel('title-withdrawal')}
                                </Button>
                                <Button className={(desktopTabValue === 'transfer') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                    onClick={() => this.props.history.push('/p/fortune-center/transfer')}>
                                    <LoopOutlined style={{ marginRight: 8 }} />
                                    {this.getLabel('title-transfer')}
                                </Button>
                            </div>
                            <div className={classes.content}>
                                {desktopContent === 'deposit' && <DepositMain />}
                                {desktopContent === 'total-assets' && <TotalAssets />}
                                {desktopContent === 'transfer' && <Transfer />}
                                {desktopContent === 'withdrawal' && <Withdrawal />}
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
                    {this.getMobileContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        subProp: ownProps.match.params.sub
    };
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(FortuneCenter))));