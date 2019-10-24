import React, { Component } from 'react';
import Footer from "../footer";
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    logout,
    postLogout,
} from '../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
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
import Smartphone from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';


const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    content: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
    indicator: {
        backgroundColor: 'white',
    },
    appBar: {
        backgroundColor: '#3c3c3c',
        color: '#fff',
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#3c3c3c',
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    topLinkButton: {
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        cursor: 'pointer',
        maxHeight: 32,
        color: '#fff',
    },
    logo: {
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    icon: {
        margin: theme.spacing(2),
    },
});

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        "& > div": {
            width: "100%",
            backgroundColor: "red"
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "capitalize",
        color: "#fff",
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
        "&:focus": {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000',
        },
        "&:hover": {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000',
        },
        "&:selected": {
            height: '100%',
            backgroundColor: '#3c3c3c',
            borderBottom: '2px solid #ff0000',
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

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: '',
            content: '',
            showProfileMenu: false,
            anchorEl: null,
        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue })
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
                this.props.history.push('/')
            }
        })

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            if (parts[1].length > 0) {
                this.setState({ tabValue: parts[2] })
            }
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { showProfileMenu, anchorEl } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.firstRow}>
                    <Toolbar className={classes.firstBar}>
                        <IconButton href='/' className={classes.logo}>
                            <img src={images.src + 'letou/logo2.png'} alt="LETOU" height="24" />
                        </IconButton>
                        <div className={classes.grow} />
                        {this.props.isAuthenticated ?
                            <Button size="small" className={classes.topLinkButton} onClick={() => {
                                this.props.logout()
                                postLogout();
                            }}>
                                {this.getLabel('log-out')}</Button>
                            : null}
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.appBar}>
                    <StyledTabs centered
                        value={this.props.match.params.type}
                        onChange={this.handleTabChange}>
                        <StyledTab
                            label={this.getLabel('fortune-center')}
                            value="fortune-center"
                            onClick={() => {
                                if (this.props.match.params.type !== 'fortune-center') {
                                    this.handleCategoryChange('fortune-center');
                                }
                            }}
                        />
                        <StyledTab
                            label={this.getLabel('transaction-record')}
                            value="transaction-record"
                            onClick={() => {
                                if (this.props.match.params.type !== 'transaction-record') {
                                    this.handleCategoryChange('transaction-record');
                                }
                            }}
                        />
                        <StyledTab
                            label="Profile"
                            value="profile"
                            onClick={(event) => {
                                this.setState({ anchorEl: event.target });
                                this.setState({ showProfileMenu: true });
                            }}
                        />
                        <StyledTab
                            value="account-management"
                            label={this.getLabel('account-management')}
                            onClick={() => {
                                if (this.props.match.params.type !== 'account-management') {
                                    this.handleCategoryChange('account-management');
                                }
                            }}
                        />
                        <StyledTab
                            value="sharing-plan"
                            label={this.getLabel('sharing-plan')}
                            onClick={() => {
                                if (this.props.match.params.type !== 'sharing-plan') {
                                    this.handleCategoryChange('sharing-plan');
                                }
                            }}
                        />
                    </StyledTabs>
                </AppBar>
                <Popper id="porfile-popper" open={showProfileMenu} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <IconButton className={classes.icon}
                                    onClick={(event) => {
                                        this.handleCategoryChange('account-management/verify-name');
                                        this.setState({ anchorEl: null });
                                        this.setState({ showProfileMenu: false });
                                    }}>
                                    <Person />
                                </IconButton>
                                <IconButton className={classes.icon}
                                    onClick={(event) => {
                                        this.handleCategoryChange('account-management/verify-phone');
                                        this.setState({ anchorEl: null });
                                        this.setState({ showProfileMenu: false });
                                    }}>
                                    <Smartphone />
                                </IconButton>
                                <IconButton className={classes.icon}
                                    onClick={(event) => {
                                        this.handleCategoryChange('account-management/verify-email');
                                        this.setState({ anchorEl: null });
                                        this.setState({ showProfileMenu: false });
                                    }}>
                                    <Email />
                                </IconButton>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <div className={classes.content}>
                    {this.state.tabValue === 'fortune-center' && <FortuneCenter />}
                    {this.state.tabValue === 'transaction-record' && <TransactionRecord />}
                    {this.state.tabValue === 'account-management' && <AccountManagement activeContent={this.state.content} />}
                    {this.state.tabValue === 'sharing-plan' && <SharingPlan />}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        error: state.auth.error,
        lang: state.language.lang,
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, logout, postLogout, })(Profile))));