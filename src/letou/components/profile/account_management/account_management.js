import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import AccountInfo from './account_info';
import MessageNotification from './message_notification';
import MessageDetail from './message_detail';
import SecuritySettings from './security_settings';
import Suggestions from './suggestions';
import EditPhone from './edit_phone';
import ResetPassword from './reset_password';
import BankCards from './bank_cards';
import SetSecurityQuestion from './set_security_question';
import JiufuPasswordSet from './jiufu_password_set';
import SetWithdrawalPassword from './set_withdrawal_password';

import VerifyActualName from '../verification/verify_actual_name';
import VerifyPhone from '../verification/verify_phone';
import VerifyEmail from '../verification/verify_email';


import { withStyles } from '@material-ui/core/styles';

import PersonOutlineRounded from '@material-ui/icons/PersonOutlineRounded';
import LockOutlined from '@material-ui/icons/LockOutlined';
import MessageOutlined from '@material-ui/icons/MessageOutlined';
import FeedbackOutlined from '@material-ui/icons/FeedbackOutlined';


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
        paddingTop: 10,
        paddingBottom: 10
    }
});

export class AccountManagement extends Component {

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
            this.setState({ contentValue: 'account-info' })
            this.setState({ activeTab: 'account-info' })

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

    setPage = (page, msg) => {
        this.setState({ contentValue: page });

        //if (msg) this.setState({ depositMessage: msg });
    };

    render() {
        const { classes } = this.props;
        const { contentValue, activeTab } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.mainGrid}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>{this.getLabel('account-management')}</span>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <div className={classes.leftPane}>
                            <Button className={(activeTab === 'account-info') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'account-info')}>
                                <PersonOutlineRounded style={{ marginRight: 8 }} />
                                {this.getLabel('account-info')}
                            </Button>
                            {/* <Button className={(contentValue === 'inbox' || contentValue === 'inbox_detail') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'inbox')}>Inbox</Button> */}

                            <Button className={(activeTab === 'message-notification') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'message-notification')}>
                                <MessageOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('message-notification')}
                            </Button>
                            <Button className={(activeTab === 'security-settings') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'security-settings')}>
                                <LockOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('security-settings')}
                            </Button>
                            <Button className={(activeTab === 'suggestions') ? classes.activeLeftPaneButton : classes.leftPaneButton}
                                onClick={(evt) => this.handleTabChange(evt, 'suggestions')}>
                                <FeedbackOutlined style={{ marginRight: 8 }} />
                                {this.getLabel('suggestions-feedback')}
                            </Button>
                        </div>
                        <div className={classes.content}>
                            {contentValue === 'account-info' && <AccountInfo callbackFromParent={this.setPage} />}
                            {contentValue === 'message-notification' && <MessageNotification callbackFromParent={this.setMessageContent} />}
                            {contentValue === 'message-detail' && <MessageDetail callbackFromParent={this.setPage} message={this.state.message} />}
                            {contentValue === 'security-settings' && <SecuritySettings callbackFromParent={this.setPage}/>}
                            {contentValue === 'suggestions' && <Suggestions />}
                            {contentValue === 'edit-phone' && <EditPhone callbackFromParent={this.setPage} />}
                            {contentValue === 'reset-password' && <ResetPassword callbackFromParent={this.setPage} />}
                            {contentValue === 'bank-cards' && <BankCards callbackFromParent={this.setPage} />}
                            {contentValue === 'security-question' && <SetSecurityQuestion callbackFromParent={this.setPage} />}
                            {contentValue === 'jiufu-temple' && <JiufuPasswordSet callbackFromParent={this.setPage} />}
                            {contentValue === 'set-withdrawal-password' && <SetWithdrawalPassword callbackFromParent={this.setPage} />}
                            {contentValue === 'verify-name' && <VerifyActualName callbackFromParent={this.setPage} />}
                            {contentValue === 'verify-phone' && <VerifyPhone callbackFromParent={this.setPage} />}
                            {contentValue === 'verify-email' && <VerifyEmail callbackFromParent={this.setPage} />}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(AccountManagement))));