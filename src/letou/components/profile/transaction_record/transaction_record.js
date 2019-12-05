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
import Typography from '@material-ui/core/Typography';

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
    mainGrid: {
        maxWidth: 1400
    },
    leftPane: {
        backgroundColor: '#f0f0f0',
        minHeight: 500,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    rightPane: {},
    leftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#f1f1f1'
        }
    },
    activeLeftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        backgroundColor: '#d1d1d1',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#dfdfdf'
        }
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
        flexGrow: 1,
        borderTop: 'solid 1px #efefef',
        paddingTop: 20,
        paddingBottom: 10,

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
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: -0.06,
            textAlign: 'center',
        },
        '&:active': {
            height: '100%',
        }
    },
    selected: {
        backgroundColor: 'rgba(228, 228, 228, 0.4)',
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
    constructor(props) {
        super(props);

        this.state = {
            tabValue: 'analysis'
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.mainGrid}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('transaction-records')}
                        </span>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <StyledTabs
                            value={tabValue}
                            onChange={this.handleTabChange}
                        >
                            <StyledTab
                                label={this.getLabel('account-details')}
                                value="account-details"
                                onClick={() => {
                                    if (
                                        this.props.match.params.type !== 'account-details'
                                    ) {
                                        this.setState({ tabValue: 'account-details' });
                                    }
                                }}
                            />
                            <StyledTab
                                label={this.getLabel('bet-details')}
                                value="bet-details"
                                onClick={() => {
                                    if (
                                        this.props.match.params.type !== 'bet-details'
                                    ) {
                                        this.setState({ tabValue: 'bet-details' });
                                    }
                                }}
                            />
                            <StyledTab
                                label={this.getLabel('analysis-label')}
                                value="analysis"
                                onClick={() => {
                                    if (
                                        this.props.match.params.type !== 'analysis'
                                    ) {
                                        this.setState({ tabValue: 'analysis' });
                                    }
                                }}
                            />
                        </StyledTabs>
                        <div className={classes.content}>
                            {tabValue === 'account-details' && <AccountDetails />}
                            {tabValue === 'bet-details' && <BetDetails />}
                            {tabValue === 'analysis' && <Main />}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(
                mapStateToProps,
                { authCheckState }
            )(TransactionRecord)
        )
    )
);
