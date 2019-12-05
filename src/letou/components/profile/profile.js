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

import { injectIntl, FormattedNumber } from 'react-intl';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Subject from '@material-ui/icons/Subject';
import AccountBalance from '@material-ui/icons/AccountBalance';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import Security from '@material-ui/icons/Security';
import Message from '@material-ui/icons/Message';
import HeadsetMic from '@material-ui/icons/HeadsetMic';
import LiveHelp from '@material-ui/icons/LiveHelp';
import SettingsApplications from '@material-ui/icons/SettingsApplications';

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
    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: '',
            content: '',
            showProfileMenu: false,
            anchorEl: null,

            emailVerified: false,
            phoneVerified: false,
            nameVerified: false,

            currency: 'CNY',
            mainWallet: 0.00,
            username: ''
        };

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue });
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
        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    componentDidMount() {
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
                this.setState({ username: res.data.username });
                this.setState({ mainWallet: res.data.main_wallet });
                this.setState({ currency: res.data.currency });
            })
            .catch(function (err) {
                sendingLog(err);
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            if (parts[1].length > 0) {
                this.setState({ tabValue: parts[2] });
            }
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const {
            showProfileMenu,
            anchorEl,
            nameVerified,
            phoneVerified,
            emailVerified
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
                            ) : null}
                        </Toolbar>
                    </AppBar>
                    <AppBar position="static" className={classes.appBar}>
                        <StyledTabs
                            centered
                            value={this.props.match.params.type}
                            onChange={this.handleTabChange}
                        >
                            <StyledTab
                                label={this.getLabel('fortune-center')}
                                value="fortune-center"
                                onClick={() => {
                                    if (
                                        this.props.match.params.type !==
                                        'fortune-center'
                                    ) {
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
                                    if (
                                        this.props.match.params.type !==
                                        'transaction-records'
                                    ) {
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
                                    if (
                                        this.props.match.params.type !==
                                        'account-management'
                                    ) {
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
                                    if (
                                        this.props.match.params.type !==
                                        'sharing-plan'
                                    ) {
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
                        {this.state.tabValue === 'fortune-center' && (
                            <FortuneCenter />
                        )}
                        {this.state.tabValue === 'transaction-records' && (
                            <TransactionRecord />
                        )}
                        {this.state.tabValue === 'account-management' && (
                            <AccountManagement
                                activeContent={this.state.content}
                            />
                        )}
                        {this.state.tabValue === 'sharing-plan' && (
                            <SharingPlan />
                        )}
                    </div>
                    <Footer />
                </div>
                <div className={classes.rootMobile}>
                    <Grid container className={classes.mobileHeader}>
                        <Grid
                            item
                            xs={12}
                            style={{ textAlign: 'center', paddingBottom: 15 }}
                        >
                            <span className={classes.mobileUsername}>
                                {this.state.username}
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.profileLogo} >
                                <img
                                    src={
                                        images.src + 'letou/mymember-idimg.jpg'
                                    }
                                    alt="LETOU"
                                    height="64"
                                    width="64"
                                    className={classes.profileLogo}
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: 'center',
                                paddingBottom: 30,
                                paddingTop: 30
                            }}
                        >
                            <div className={classes.masterAccount}>
                                <span>
                                    {this.getLabel('master-account')} {' | '}
                                </span>
                                <FormattedNumber
                                    maximumFractionDigits={2}
                                    value={this.state.mainWallet}
                                    style={`currency`}
                                    currency={this.state.currency}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }}>
                            <Button className={classes.mobileTabTitleButton}>
                                <div className={classes.column}>
                                    <img
                                        src={images.src + 'letou/deposit-icon.png'}
                                        alt="LETOU"
                                        height="20"
                                    />
                                    {this.getLabel('deposit-label')}
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }}>
                            <Button className={classes.mobileTabTitleButton}>
                                <div className={classes.column}>
                                    <img
                                        src={
                                            images.src + 'letou/withdrawal-icon.png'
                                        }
                                        alt="LETOU"
                                        height="20"
                                    />
                                    {this.getLabel('title-withdrawal')}
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }}>
                            <Button className={classes.mobileTabTitleButton}>
                                <div className={classes.column}>
                                    <img
                                        src={
                                            images.src +
                                            'letou/transfers-icon.png'
                                        }
                                        alt="LETOU"
                                        height="20"
                                    />
                                    {this.getLabel('title-transfer')}
                                </div>
                            </Button>
                        </Grid>
                    </Grid>
                    <div className={classes.mobileContent}>
                        <Grid container>
                            <Grid item xs={12}>
                                <List
                                    style={{
                                        overflow: 'auto'
                                    }}
                                >
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#03dffc' }}>
                                                <Subject />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel(
                                                'transaction-records'
                                            )}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/gbsports');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#fcb503' }}>
                                                <AccountBalance />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel(
                                                'fortune-center'
                                            )}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#fc6203' }}>
                                                <PersonOutlineOutlined />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel('account-info')}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#0388fc' }}>
                                                <Security />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel(
                                                'security-settings'
                                            )}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#4e03fc' }}>
                                                <Message />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel(
                                                'message-notification'
                                            )}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#07db58' }}>
                                                <HeadsetMic />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel(
                                                'customer-service'
                                            )}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#db07cd' }}>
                                                <LiveHelp />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel('help-center')}
                                        />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => {
                                            // this.props.history.push('/');
                                            // this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: '#e4f00e' }}>
                                                <SettingsApplications />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={this.getLabel('set-up')}
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </div>
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
