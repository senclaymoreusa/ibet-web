import React, { Component } from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import ChatTool from "../chat_tool";

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Banking from './banking/banking';
import Analysis from './analysis/analysis';

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
    appBar:{
        zIndex:0,
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
        width: '20%',
        minWidth:280,
        maxWidth: '20%',
        height:'100%',
        borderBottom: '2px solid #d8d8d8',
        whiteSpace: 'nowrap',
        "&:focus": {
            height:'100%',
            backgroundColor: '#c5c5c5',
            borderBottom: '2px solid #ff0000',
        },
        "&:hover": {
            height:'100%',
            backgroundColor: '#c5c5c5',
            borderBottom: '2px solid #ff0000',
        },
        "&:selected": {
            height:'100%',
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

const muiSubMenuBarTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#d8d8d8',
        },
    },
    appBar: {
        height: 72,
    },
    typography: {
        useNextVariants: true,
    },
});

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: 'banking'
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

    async componentWillReceiveProps(props) {

    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const { type } = this.props.match.params;
        const { sub } = this.props.match.params;

        this.setState({ urlPath: this.props.history.location.pathname });
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let bankingMessage = formatMessage({ id: "profile-nav.banking" });
        let analysisMessage = formatMessage({ id: "profile-nav.analysis" });
        let accountMessage = formatMessage({ id: "profile-nav.account" });
        let responsibleMessage = formatMessage({ id: "profile-nav.responsible" });
        let settingsMessage = formatMessage({ id: "profile-nav.settings" });

        return (
            <div className={classes.root}>
                <TopNavbar currentMenu=''/>
                <MuiThemeProvider theme={muiSubMenuBarTheme}>
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
                                value="responsible"
                                label={responsibleMessage}
                                onClick={() => {
                                    if (this.props.match.params.type !== 'responsible') {
                                        this.handleCategoryChange('responsible');
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
                        </StyledTabs>
                    </AppBar>
                </MuiThemeProvider>
                <div className={classes.content}>
                    {this.state.tabValue === 'banking' && <Banking />}
                    {this.state.tabValue === 'analysis' && <Analysis />}
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