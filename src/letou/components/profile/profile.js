/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Footer from '../footer';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    logout,
    postLogout
} from '../../../actions';
import clsx from 'clsx';
import Menu from '@material-ui/core/Menu';
import getSymbolFromCurrency from 'currency-symbol-map';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
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
import Person from '@material-ui/icons/Person';
import Smartphone from '@material-ui/icons/PhoneAndroid';
import Email from '@material-ui/icons/Email';

import MobileMainProfile from '../mobile/mobile_profile';
import MobileAccountInfo from '../mobile/mobile_account_info';
import MobileSetup from '../mobile/mobile_setup';
import SecuritySettings from './account_management/security_settings';
import Suggestions from './account_management/suggestions';
import { Grid } from '@material-ui/core';

import '../../css/profile.css';

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: '#1e1b29',
        color: '#fff',
        fontSize: 12,
        marginTop: 13,
        maxWidth: 220,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
}))(Tooltip);

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
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
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#1e1b29'
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%'
    },
    secondRow: {
        height: 125,
        alignItems: 'center',
        backgroundColor: '#1e1b29'
    },
    secondBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 125,
        minHeight: 125,
        maxWidth: 1400,
        width: '100%'
    },
    usernameText: {
        display: 'inline-block',
        color: '#fff',
        fontWeight: 600,
        fontSize: 13
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
        color: '#fff'
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
    },
    Omoveh: {
        cursor: 'pointer',
        fontSize: 18,
        width: 98,
        backgroundColor: '#1e1b29',
        float: 'left',
        transition: 'all ease- out .1s'
    },
    OmoveBg: {
        position: 'relative',
        width: 98,
        height: 98
    },
    rateContainer: {
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    rate: {
        fontSize: 24,
        color: '#ffd4fe'
    },
    rateText: {
        fontSize: 11,
        color: '#ffd4fe'
    }
});

const StyledTabs = withStyles({
    root: {
        minHeight: 125
    },
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
        borderBottom: '2px solid #1e1b29',
        whiteSpace: 'nowrap',
        minHeight: 125,
        '&:focus': {
            height: '100%',
            backgroundColor: '#1e1b29',
            borderBottom: '2px solid #ff0000'
        },
        '&:hover': {
            height: '100%',
            backgroundColor: '#1e1b29',
            borderBottom: '2px solid #ff0000'
        },
        '&:selected': {
            height: '100%',
            backgroundColor: '#1e1b29',
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
        this.rateRef = React.createRef();
        this.state = {
            desktopContent: '',
            mobileContent: '',
            anchorEl: null,
            show: false,

            popperMoreCount: 0,
            popperType: 'hover',
            position: 'bottom',
            targetType: 'hover'
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({ anchorEl: null });
    }

    handleCategoryChange(category) {
        this.props.history.push('/p/' + category);

        this.setState({ anchorEl: null });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) this.props.history.push('/');
        });
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            this.setState({ mobileContent: parts[parts.length - 1] });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getMobileContent() {
        const { typeProp } = this.props;

        switch (typeProp) {
            case 'account-management':
                return <MobileAccountInfo />;
            case 'transaction-records':
                return <TransactionRecord />;
            case 'security-settings':
                return <SecuritySettings />;
            case 'fortune-center':
                return <FortuneCenter />;
            case 'suggestions':
                return <Suggestions />;
            case 'setup':
                return <MobileSetup />;
            default:
                return <MobileMainProfile />;
        }
    }

    render() {
        const {
            classes,
            typeProp,
            currency,
            balance,
            username,
            user
        } = this.props;

        const { show } = this.state;

        let rate = 0;

        if (user && user.emailVerified) rate += 33;
        if (user && user.nameVerified) rate += 33;
        if (user && user.nameVerified) rate += 33;
        if (rate === 99) rate = 100;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <AppBar position="static" className={classes.firstRow}>
                        <Toolbar className={classes.firstBar}>
                            <IconButton
                                onClick={() => {
                                    this.props.history.push('/');
                                }}
                                className={classes.logo}
                            >
                                <img
                                    src={images.src + 'letou/logo2.png'}
                                    alt="LETOU"
                                    height="24"
                                />
                            </IconButton>
                            <div className={classes.grow} />
                            {this.props.isAuthenticated && (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            color: '#fff',
                                            marginTop: 12
                                        }}
                                    >
                                        <Typography
                                            className={classes.usernameText}
                                        >
                                            Hi,{' '}
                                        </Typography>
                                        <Typography
                                            className={classes.usernameText}
                                        >
                                            {username}
                                        </Typography>
                                    </div>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            this.props.history.push(
                                                '/p/account-management/message-notification'
                                            );
                                        }}
                                    >
                                        <div>
                                            <img
                                                src={images.src + 'email2.png'}
                                                alt=""
                                            />
                                        </div>
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.history.push(
                                                '/p/fortune-center/deposit'
                                            );
                                        }}
                                    >
                                        {this.getLabel('balance-label')}{' '}
                                        {getSymbolFromCurrency(currency)}
                                        {this.props}
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.postLogout();
                                        }}
                                    >
                                        {this.getLabel('log-out')}
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <AppBar position="static" className={classes.secondRow}>
                        <Toolbar className={classes.secondBar}>
                            <StyledTabs
                                centered
                                value={
                                    typeProp === 'fortune-center' ||
                                        typeProp === 'transaction-records'
                                        ? typeProp
                                        : 'none'
                                }
                            >
                                <StyledTab
                                    label={this.getLabel('fortune-center')}
                                    value="fortune-center"
                                    onClick={() => {
                                        if (typeProp !== 'fortune-center') {
                                            this.handleCategoryChange(
                                                'fortune-center'
                                            );
                                        }
                                    }}
                                />
                                <StyledTab
                                    label={this.getLabel('transaction-records')}
                                    value="transaction-records"
                                    onClick={() => {
                                        if (
                                            typeProp !== 'transaction-records'
                                        ) {
                                            this.handleCategoryChange(
                                                'transaction-records'
                                            );
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
                            <div className={classes.grow} />
                            <div ref={this.rateRef} className={classes.Omoveh}>
                                <HtmlTooltip
                                    title={
                                        <React.Fragment>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <span>{username}</span>
                                                <span>
                                                    {this.getLabel(
                                                        'verification-status'
                                                    )}
                                                </span>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row'
                                                    }}
                                                >
                                                    <Tooltip
                                                        title={
                                                            user &&
                                                                user.nameVerified
                                                                ? this.getLabel(
                                                                    'name-verified'
                                                                )
                                                                : this.getLabel(
                                                                    'verify-name-asap'
                                                                )
                                                        }
                                                    >
                                                        <IconButton
                                                            className={clsx({
                                                                [classes.icon]: true,
                                                                [classes.verifiedIcon]:
                                                                    user &&
                                                                        user.nameVerified
                                                                        ? user.nameVerified
                                                                        : false
                                                            })}
                                                            onClick={() => {
                                                                if (
                                                                    !user.nameVerified
                                                                ) {
                                                                    this.handleCategoryChange(
                                                                        'account-management/verify-name'
                                                                    );
                                                                    this.setState(
                                                                        {
                                                                            anchorEl: null
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <Person />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip
                                                        title={
                                                            user &&
                                                                user.phoneVerified
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
                                                                [classes.verifiedIcon]:
                                                                    user &&
                                                                        user.phoneVerified
                                                                        ? user.phoneVerified
                                                                        : false
                                                            })}
                                                            onClick={() => {
                                                                if (
                                                                    !user.phoneVerified
                                                                ) {
                                                                    this.handleCategoryChange(
                                                                        'account-management/verify-phone'
                                                                    );
                                                                    this.setState(
                                                                        {
                                                                            anchorEl: null
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <Smartphone />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip
                                                        title={
                                                            user &&
                                                                user.emailVerified
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
                                                                [classes.verifiedIcon]:
                                                                    user &&
                                                                        user.emailVerified
                                                                        ? user.emailVerified
                                                                        : false
                                                            })}
                                                            onClick={() => {
                                                                if (
                                                                    !user.emailVerified
                                                                ) {
                                                                    this.handleCategoryChange(
                                                                        'account-management/verify-email'
                                                                    );
                                                                    this.setState(
                                                                        {
                                                                            anchorEl: null
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <Email />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    }
                                    interactive
                                >
                                    <div
                                        className={classes.OmoveBg}
                                        style={{
                                            backgroundImage: `url(${images.src +
                                                'letou/membero1.png'})`
                                        }}
                                    >
                                        <div
                                            className="Omove"
                                            style={{
                                                backgroundImage: `url(${images.src +
                                                    'letou/membero2.png'})`
                                            }}
                                        />
                                        <div className={classes.rateContainer}>
                                            <span className={classes.rate}>
                                                {rate}
                                                {'%'}
                                            </span>
                                            <span className={classes.rateText}>
                                                {' '}
                                                {this.getLabel('safety-rate')}
                                            </span>
                                        </div>
                                    </div>
                                </HtmlTooltip>
                            </div>

                            <div className={classes.grow} />
                            <StyledTabs
                                centered
                                value={
                                    typeProp === 'account-management' ||
                                        typeProp === 'sharing-plan'
                                        ? typeProp
                                        : 'none'
                                }
                            >
                                <StyledTab
                                    style={{
                                        width: 0,
                                        minWidth: 0,
                                        maxWidth: 0,
                                        padding: 0
                                    }}
                                    value="none"
                                />
                                <StyledTab
                                    value="account-management"
                                    label={this.getLabel('account-management')}
                                    onClick={() => {
                                        if (typeProp !== 'account-management') {
                                            this.handleCategoryChange(
                                                'account-management'
                                            );
                                        }
                                    }}
                                />
                                <StyledTab
                                    value="sharing-plan"
                                    label={this.getLabel('sharing-plan')}
                                    onClick={() => {
                                        if (typeProp !== 'sharing-plan') {
                                            this.handleCategoryChange(
                                                'sharing-plan'
                                            );
                                        }
                                    }}
                                />
                            </StyledTabs>
                        </Toolbar>
                    </AppBar>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.rateRef.current}
                        keepMounted
                        open={show}
                        onClose={this.closeMenu}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        MenuListProps={{ onMouseLeave: this.closeMenu }}
                    ></Menu>
                    <Grid container>
                        <Grid item xs={12} className={classes.content}>
                            {typeProp === 'fortune-center' && <FortuneCenter />}
                            {typeProp === 'transaction-records' && (
                                <TransactionRecord />
                            )}
                            {typeProp === 'account-management' && (
                                <AccountManagement
                                    activeContent={this.state.desktopContent}
                                />
                            )}
                            {typeProp === 'sharing-plan' && <SharingPlan />}
                        </Grid>
                        <Grid item xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
                    {this.getMobileContent()}
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { token, user } = state.auth;
    return {
        user: user,
        isAuthenticated: token !== null && token !== undefined,
        typeProp: ownProps.match.params.type,
        balance: user ? Number(user.balance).toFixed(2) : '',
        username: user ? user.username : '',
        currency: user ? user.currency : 'USD'
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
