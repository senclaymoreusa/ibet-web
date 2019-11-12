import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import DepositMain from './deposit/deposit_main';
import TotalAssets from './total_assets';
import Transfer from './transfer';
import WithdrawMain from './withdraw/withdraw_main';
import { withStyles } from '@material-ui/core/styles';


import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import FlightLandOutlined from '@material-ui/icons/FlightLandOutlined';
import FlightTakeoffOutlined from '@material-ui/icons/FlightTakeoffOutlined';
import LoopOutlined from '@material-ui/icons/LoopOutlined';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    rightPane: {
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
        paddingLeft: 10,
        //paddingTop: 10,
        paddingBottom: 10
    }
});

export class FortuneCenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            contentValue: '',
            activeTab: '',
            userInformationEditMessage: '',
            message: '',
        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, newValue) {
        this.setState({ contentValue: newValue });
        this.setState({ activeTab: newValue });

        var url = this.state.urlPath;
        var parts = url.split('/');

        url = '/';
        var path = parts.slice(1, 3).join('/');
        url = url + path;

        url = url + '/' + newValue;
        this.props.history.push(url);
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
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
                this.setState({ contentValue: parts[3] })
            }

            this.setState({ activeTab: parts[3] })
        } else {
            this.setState({ contentValue: 'total-assets' })
            this.setState({ activeTab: 'total-assets' })
        }
    }


    setContent = (page, msg) => {
        this.setState({ contentValue: page });

        if (msg)
            this.setState({ userInformationEditMessage: msg });
    }

    setMessageContent = (page, msg) => {
        this.setState({ contentValue: page });

        if (msg) {
            this.setState({ message: msg });
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { contentValue, activeTab } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.mainGrid}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>{this.getLabel('fortune-center')}</span>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <div className={classes.leftPane}>
                            <Button className={(activeTab === 'total-assets') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'total-assets')}>
                                <AccountBalanceOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('total-assets')}
                            </Button>
                            <Button className={(activeTab === 'deposit') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'deposit')}>
                                <FlightLandOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('title-deposit')}
                            </Button>
                            <Button className={(activeTab === 'withdrawal') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'withdrawal')}>
                                <FlightTakeoffOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('title-withdrawal')}
                            </Button>
                            <Button className={(activeTab === 'transfer') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'transfer')}>
                                <LoopOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('title-transfer')}
                            </Button>
                        </div>
                        <div className={classes.content}>
                            {contentValue === 'deposit' && <DepositMain />}
                            {contentValue === 'total-assets' && <TotalAssets />}
                            {contentValue === 'transfer' && <Transfer />}
                            {contentValue === 'withdrawal' && <WithdrawMain />}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(FortuneCenter))));