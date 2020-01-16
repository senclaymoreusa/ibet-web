/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import BetDetails from './bet_details';
import AccountDetails from './account_details';
import Main from './analysis/main';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    rootDesktop: {
        maxWidth: 1400,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
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
    mainGrid: {
        width: '100%',
        maxWidth: 1400
    },
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%'
    },
    tabLabel: {
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000'
    },
    titleRow: {
        borderBottom: '1px solid #4DA9DF',
        paddingBottom: 12
    },
    content: {
        borderTop: 'solid 1px #efefef',
        [theme.breakpoints.up('md')]: {
            paddingTop: 20,
            paddingBottom: 10
        }
    }
});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            width: '100%',
            backgroundColor: '#53abe0'
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#474747',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        // marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: -0.06,
            textAlign: 'center'
        },
        '&:active': {
            height: '100%'
        }
    },
    selected: {
        backgroundColor: 'rgba(228, 228, 228, 0.4)'
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

export class TransactionRecord extends Component {
    componentDidMount() {
        const { subProp } = this.props;

        if (!subProp)
            this.props.history.push('/p/transaction-records/account-details');
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes, subProp } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <Grid container className={classes.mainGrid}>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {this.getLabel('transaction-records')}
                            </span>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: 20 }}>
                            <StyledTabs
                                value={subProp ? subProp : 'none'}
                                onChange={this.handleTabChange}
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
                                    label={this.getLabel('account-details')}
                                    value="account-details"
                                    onClick={() => {
                                        if (
                                            this.props.match.params.type !==
                                            'account-details'
                                        ) {
                                            this.props.history.push(
                                                '/p/transaction-records/account-details'
                                            );
                                        }
                                    }}
                                />
                                <StyledTab
                                    label={this.getLabel('bet-details')}
                                    value="bet-details"
                                    onClick={() => {
                                        if (
                                            this.props.match.params.type !==
                                            'bet-details'
                                        ) {
                                            this.props.history.push(
                                                '/p/transaction-records/bet-details'
                                            );
                                        }
                                    }}
                                />
                                <StyledTab
                                    label={this.getLabel('analysis-label')}
                                    value="analysis"
                                    onClick={() => {
                                        if (
                                            this.props.match.params.type !==
                                            'analysis'
                                        ) {
                                            this.props.history.push(
                                                '/p/transaction-records/analysis'
                                            );
                                        }
                                    }}
                                />
                            </StyledTabs>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.content}>
                                {subProp === 'account-details' && (
                                    <AccountDetails />
                                )}
                                {subProp === 'bet-details' && <BetDetails />}
                                {subProp === 'analysis' && <Main />}
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
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
                                        {this.getLabel('transaction-records')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <StyledTabs
                        variant="fullWidth"
                        value={subProp ? subProp : 'none'}
                        onChange={this.handleTabChange}
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
                            className={classes.tabLabel}
                            label={this.getLabel('account-details')}
                            value="account-details"
                            onClick={() => {
                                if (
                                    this.props.match.params.type !==
                                    'account-details'
                                ) {
                                    this.props.history.push(
                                        '/p/transaction-records/account-details'
                                    );
                                }
                            }}
                        />
                        <StyledTab
                            className={classes.tabLabel}
                            label={this.getLabel('bet-details')}
                            value="bet-details"
                            onClick={() => {
                                if (
                                    this.props.match.params.type !==
                                    'bet-details'
                                ) {
                                    this.props.history.push(
                                        '/p/transaction-records/bet-details'
                                    );
                                }
                            }}
                        />
                        <StyledTab
                            className={classes.tabLabel}
                            label={this.getLabel('analysis-label')}
                            value="analysis"
                            onClick={() => {
                                if (
                                    this.props.match.params.type !== 'analysis'
                                ) {
                                    this.props.history.push(
                                        '/p/transaction-records/analysis'
                                    );
                                }
                            }}
                        />
                    </StyledTabs>
                    <div className={classes.content}>
                        {subProp === 'account-details' && <AccountDetails />}
                        {subProp === 'bet-details' && <BetDetails />}
                        {subProp === 'analysis' && <Main />}
                    </div>
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

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState })(TransactionRecord)
        )
    )
);
