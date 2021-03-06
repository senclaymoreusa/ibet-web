import React, { Component } from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import ChatTool from "../chat_tool";

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Banking from './banking/banking';
import Analysis from './analysis/analysis';
import Settings from './settings/settings';
import ResponsibleGaming from './responsible_gaming/responsible_gaming';
import Account from './account/account';
import Rewards from './rewards/rewards';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    content: {
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 50
    },
    indicator: {
        backgroundColor: 'white',
    },
    appBar: {
        zIndex: 0,
    }
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
        textTransform: "uppercase",
        color: "#474747",
        opacity: 1,
        margin: 'auto',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 20,
        outline: 'none',
        width: '16.6%',
        minWidth: 280,
        maxWidth: '16.6%',
        height: '100%',
        borderBottom: '2px solid #d8d8d8',
        whiteSpace: 'nowrap',
        "&:focus": {
            height: '100%',
            backgroundColor: '#c5c5c5',
            borderBottom: '2px solid #ff0000',
        },
        "&:hover": {
            height: '100%',
            backgroundColor: '#c5c5c5',
            borderBottom: '2px solid #ff0000',
        },
        "&:selected": {
            height: '100%',
            backgroundColor: '#c5c5c5',
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

// const muiSubMenuBarTheme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#d8d8d8',
//         },
//     },
//     appBar: {
//         height: 72,
//     },
//     typography: {
//         useNextVariants: true,
//     },
// });

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: ''
        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, newValue) {
        this.setState({ tabValue: newValue })
    }

    async handleCategoryChange(category, sub) {
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

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let bankingMessage = formatMessage({ id: "profile-nav.banking" });
        let analysisMessage = formatMessage({ id: "profile-nav.analysis" });
        let accountMessage = formatMessage({ id: "profile-nav.account" });
        let responsibleMessage = formatMessage({ id: "profile-nav.responsible" });
        let settingsMessage = formatMessage({ id: "profile-nav.settings" });
        let rewardsMessage = formatMessage({ id: "profile-nav.rewards" });

        return (
            <div className={classes.root}>
                <TopNavbar currentMenu='' />
                {/* <MuiThemeProvider theme={muiSubMenuBarTheme}> */}
                    <AppBar position="static" className={classes.appBar}>
                        <StyledTabs centered
                            value={this.props.match.params.type}
                            onChange={this.handleTabChange}>
                            <StyledTab
                                label={bankingMessage}
                                value="banking"
                                onClick={() => {
                                    if (this.props.match.params.type !== 'banking') {
                                        this.handleCategoryChange('banking');
                                    }
                                }}
                            />
                            <StyledTab
                                label={analysisMessage}
                                value="analysis"
                                onClick={() => {
                                    if (this.props.match.params.type !== 'analysis') {
                                        this.handleCategoryChange('analysis');
                                    }
                                }}
                            />
                            <StyledTab
                                value="account"
                                label={accountMessage}
                                onClick={() => {
                                    if (this.props.match.params.type !== 'account') {
                                        this.handleCategoryChange('account');
                                    }
                                }}
                            />
                            <StyledTab
                                value="responsible_gaming"
                                label={responsibleMessage}
                                onClick={() => {
                                    if (this.props.match.params.type !== 'responsible_gaming') {
                                        this.handleCategoryChange('responsible_gaming');
                                    }
                                }}
                            />
                            <StyledTab
                                value="settings"
                                label={settingsMessage}
                                onClick={() => {
                                    if (this.props.match.params.type !== 'settings') {
                                        this.handleCategoryChange('settings');
                                    }
                                }}
                            />
                            <StyledTab
                                value="rewards"
                                label={rewardsMessage}
                                onClick={() => {
                                    if (this.props.match.params.type !== 'rewards') {
                                        this.handleCategoryChange('rewards');
                                    }
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                {/* </MuiThemeProvider> */}
                <div className={classes.content}>
                    {this.state.tabValue === 'banking' && <Banking />}
                    {this.state.tabValue === 'analysis' && <Analysis />}
                    {this.state.tabValue === 'settings' && <Settings />}
                    {this.state.tabValue === 'responsible_gaming' && <ResponsibleGaming />}
                    {this.state.tabValue === 'account' && <Account />}
                    {this.state.tabValue === 'rewards' && <Rewards />}
                </div>
                <Footer />
                <ChatTool />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Profile))));