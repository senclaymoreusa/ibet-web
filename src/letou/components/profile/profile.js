/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Footer from '../footer';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    logout,
    postLogout,
    sendingLog
} from '../../../actions';
import { config } from '../../../util_config';
import clsx from 'clsx';

import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import AccountManagement from './account_management/account_management';
import FortuneCenter from './fortune_center/fortune_center';
import IconButton from '@material-ui/core/IconButton';
import SharingPlan from './sharing_plan/sharing_plan';
import Button from '@material-ui/core/Button';
import TransactionRecord from './transaction_record/transaction_record';
import { images } from '../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/Person';
import Smartphone from '@material-ui/icons/PhoneAndroid';
import Email from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

import MobileMainProfile from '../mobile/mobile_profile';
import MobileAccountInfo from '../mobile/mobile_account_info';
import SecuritySettings from './account_management/security_settings';
import Suggestions from './account_management/suggestions';
import DepositMain from './fortune_center/deposit/deposit_main';
import Withdrawal from './fortune_center/withdrawal';
import Transfer from './fortune_center/transfer';
import TotalAssets from './fortune_center/total_assets';

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
    content: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
    mobileContent: {
        flexGrow: 1
    },
    indicator: {
        backgroundColor: 'white'
    },
    appBar: {
        backgroundColor: '#3c3c3c',
        color: '#fff'
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#3c3c3c'
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%'
    },
    grow: {
        flexGrow: 1
    },
    topLinkButton: {
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        cursor: 'pointer',
        maxHeight: 32,
        color: '#fff'
    },
    logo: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    icon: {
        margin: theme.spacing(2)
    },
    verifiedIcon: {
        color: '#4DA9DF'
    },
    profileLogo: {
        width: 64,
        height: 64,
        backgroundColor: '#d3d4d6',
        margin: '0 auto',
        borderRadius: 32,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    mobileHeader: {
        background: 'linear-gradient(to bottom, #59d8ff, #02aee3)',
        paddingTop: 20,
        paddingBottom: 20
    },
    mobileUsername: {
        color: 'white'
    },
    masterAccount: {
        backgroundColor: '#ffc412',
        borderRadius: 13,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        display: 'inline'
    },
    mobileTabTitleButton: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'red',
        '& > div': {
            width: '100%',
            backgroundColor: 'red'
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'capitalize',
        color: '#fff',
        opacity: 1,
        margin: 'auto',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 20,
        outline: 'none',
        width: '16.6%',
        minWidth: 280,
        maxWidth: '16.6%',
        height: '100%',
        borderBottom: '2px solid #3c3c3c',
        whiteSpace: 'nowrap',
        '&:focus': {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000'
        },
        '&:hover': {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000'
        },
        '&:selected': {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000'
        }
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
    value: PropTypes.any.isRequired
};

export class Profile extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            desktopTabValue: 'none',
            desktopContent: '',
            mobileContent: '',
            showProfileMenu: false,
            anchorEl: null,

            emailVerified: false,
            phoneVerified: false,
            nameVerified: false,

            currency: 'CNY',
            mainWallet: 0.00,
            username: ''
        };
    }

    async handleCategoryChange(category) {
        var url = this.state.urlPath;
        var parts = url.split('/');

        if (parts.length >= 2) {
            url = '/';
            var path = parts.slice(1, 2).join('/');
            url = url + path;
        }
        url = url + '/' + category;
        this.props.history.push(url);
    }

    componentWillReceiveProps(props) {

        if (this._isMounted)
            this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        axios
            .get(API_URL + 'users/api/user/', config)
            .then(res => {
                if (this._isMounted) {
                    this.setState({ username: res.data.username });
                    this.setState({ mainWallet: res.data.main_wallet });
                    this.setState({ currency: res.data.currency });
                }
            })
            .catch(function (err) {
                sendingLog(err);
            });

        if (this._isMounted)
            this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            let path = parts[2];
            this.setState({ mobileContent: parts[parts.length - 1] });
           
            if (path.length > 0) {
                if (this._isMounted)
                    this.setState({ desktopTabValue: parts[2] });
            }
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { classes } = this.props;
        const {
            showProfileMenu,
            anchorEl,
            nameVerified,
            phoneVerified,
            emailVerified,
            desktopTabValue
        } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <AppBar position="static" className={classes.firstRow}>
                        <Toolbar className={classes.firstBar}>
                            <IconButton href="/" className={classes.logo}>
                                <img
                                    src={images.src + 'letou/logo2.png'}
                                    alt="LETOU"
                                    height="24"
                                />
                            </IconButton>
                            <div className={classes.grow} />
                            {this.props.isAuthenticated ? (
                                <div>
                                    <Button
                                          size="small"
                                          onClick={() => {
                                              this.props.history.push('/p/account-management/message-notification')
                                          }}
                                      >
                                          <div>
                                              <img src={images.src + 'email2.png'} alt="" />
                                          </div>
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.logout();
                                            postLogout();
                                        }}
                                    >
                                        {this.getLabel('log-out')}
                                    </Button>
                                </div>
                            ) : null}
                        </Toolbar>
                    </AppBar>
                    <AppBar position="static" className={classes.appBar}>
                        <StyledTabs centered value={desktopTabValue}>
                            <StyledTab
                                label={this.getLabel('fortune-center')}
                                value="fortune-center"
                                onClick={() => {
                                    if (desktopTabValue !== 'fortune-center') {
                                        this.handleCategoryChange(
                                            'fortune-center'
                                        );
                                        this.setState({
                                            anchorEl: null
                                        });
                                        this.setState({
                                            showProfileMenu: false
                                        });
                                    }
                                }}
                            />
                            <StyledTab
                                label={this.getLabel('transaction-records')}
                                value="transaction-records"
                                onClick={() => {
                                    if (desktopTabValue !== 'transaction-records') {
                                        this.handleCategoryChange(
                                            'transaction-records'
                                        );
                                        this.setState({
                                            anchorEl: null
                                        });
                                        this.setState({
                                            showProfileMenu: false
                                        });
                                    }
                                }}
                            />
                            <StyledTab
                                label="Profile"
                                value="profile"
                                onMouseEnter={event => {
                                    this.setState({ anchorEl: event.target });
                                    this.setState({ showProfileMenu: true });
                                }}
                            />
                            <StyledTab
                                value="account-management"
                                label={this.getLabel('account-management')}
                                onClick={() => {
                                    if (desktopTabValue !== 'account-management') {
                                        this.handleCategoryChange(
                                            'account-management'
                                        );
                                        this.setState({
                                            anchorEl: null
                                        });
                                        this.setState({
                                            showProfileMenu: false
                                        });
                                    }
                                }}
                            />
                            <StyledTab
                                value="sharing-plan"
                                label={this.getLabel('sharing-plan')}
                                onClick={() => {
                                    if (desktopTabValue !== 'sharing-plan') {
                                        this.handleCategoryChange(
                                            'sharing-plan'
                                        );
                                        this.setState({
                                            anchorEl: null
                                        });
                                        this.setState({
                                            showProfileMenu: false
                                        });
                                    }
                                }}
                            />
                            <StyledTab
                                style={{
                                    width: 0,
                                    minWidth: 0,
                                    maxWidth: 0,
                                    padding: 0
                                }}
                                value="none"
                            />
                        </StyledTabs>
                    </AppBar>
                    <Popper
                        id="porfile-popper"
                        open={showProfileMenu}
                        anchorEl={anchorEl}
                        transition
                    >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <Tooltip
                                        title={
                                            nameVerified
                                                ? this.getLabel('name-verified')
                                                : this.getLabel(
                                                    'verify-name-asap'
                                                )
                                        }
                                    >
                                        <IconButton
                                            className={clsx({
                                                [classes.icon]: true,
                                                [classes.verifiedIcon]: nameVerified
                                            })}
                                            onClick={() => {
                                                if (!nameVerified) {
                                                    this.handleCategoryChange(
                                                        'account-management/verify-name'
                                                    );
                                                    this.setState({
                                                        anchorEl: null
                                                    });
                                                    this.setState({
                                                        showProfileMenu: false
                                                    });
                                                }
                                            }}
                                        >
                                            <Person />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        title={
                                            phoneVerified
                                                ? this.getLabel(
                                                    'phone-verified'
                                                )
                                                : this.getLabel(
                                                    'verify-phone-asap'
                                                )
                                        }
                                    >
                                        <IconButton
                                            className={clsx({
                                                [classes.icon]: true,
                                                [classes.verifiedIcon]: phoneVerified
                                            })}
                                            onClick={() => {
                                                if (!phoneVerified) {
                                                    this.handleCategoryChange(
                                                        'account-management/verify-phone'
                                                    );
                                                    this.setState({
                                                        anchorEl: null
                                                    });
                                                    this.setState({
                                                        showProfileMenu: false
                                                    });
                                                }
                                            }}
                                        >
                                            <Smartphone />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        title={
                                            emailVerified
                                                ? this.getLabel(
                                                    'email-verified'
                                                )
                                                : this.getLabel(
                                                    'verify-email-asap'
                                                )
                                        }
                                    >
                                        <IconButton
                                            className={clsx({
                                                [classes.icon]: true,
                                                [classes.verifiedIcon]: emailVerified
                                            })}
                                            onClick={() => {
                                                if (!emailVerified) {
                                                    this.handleCategoryChange(
                                                        'account-management/verify-email'
                                                    );
                                                    this.setState({
                                                        anchorEl: null
                                                    });
                                                    this.setState({
                                                        showProfileMenu: false
                                                    });
                                                }
                                            }}
                                        >
                                            <Email />
                                        </IconButton>
                                    </Tooltip>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                    <div className={classes.content}>
                        {this.state.desktopTabValue === 'fortune-center' && (
                            <FortuneCenter />
                        )}
                        {this.state.desktopTabValue === 'transaction-records' && (
                            <TransactionRecord />
                        )}
                        {this.state.desktopTabValue === 'account-management' && (
                            <AccountManagement
                                activeContent={this.state.desktopContent}
                            />
                        )}
                        {this.state.desktopTabValue === 'sharing-plan' && (
                            <SharingPlan />
                        )}
                    </div>
                    <Footer />
                </div>
                <div className={classes.rootMobile}>
                    {this.state.mobileContent === '' && <MobileMainProfile />}
                    {this.state.mobileContent === 'account-management' && (
                        <MobileAccountInfo />
                    )}
                    {this.state.mobileContent === 'security-settings' && (
                        <SecuritySettings />
                    )}
                    {this.state.mobileContent === 'fortune-center' && (
                        <FortuneCenter />
                    )}
                     {this.state.mobileContent === 'deposit' && (
                        <DepositMain />
                    )}
                     {this.state.mobileContent === 'withdrawal' && (
                        <Withdrawal />
                    )}
                     {this.state.mobileContent === 'transfer' && (
                        <Transfer />
                    )}
                     {this.state.mobileContent === 'total-assets' && (
                        <TotalAssets />
                    )}
                     {this.state.mobileContent === 'suggestions' && (
                        <Suggestions />
                    )}
                    <div className={classes.grow} />
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, logout, postLogout })(
                Profile
            )
        )
    )
);
