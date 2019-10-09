import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import AccountMessage from './account_message';
import MessageNotification from './message_notification';
import SecuritySettings from './security_settings';
import Suggestions from './suggestions';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    leftPane: {
        paddingTop: 50,
        minWidth: 260,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightPane: {
        paddingTop: 50,
    },
    leftPaneButton: {
        width: 250,
        maxWidth: 250,
        height: 76,
        backgroundColor: '#f1f1f1',
        marginTop: 2,
        "&:hover": {
            backgroundColor: '#f1f1f1',
        },
    },
    activeLeftPaneButton: {
        width: 250,
        maxWidth: 250,
        height: 76,
        backgroundColor: '#dfdfdf',
        marginTop: 2,
        "&:hover": {
            backgroundColor: '#dfdfdf',
        },
    },
    text: {
        marginLeft: 0,
    }
});

export class AccountManagement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            contentValue: '',
            userInformationEditMessage: '',
            message: '',
        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, newValue) {
        this.setState({ contentValue: newValue })
    }

    componentWillReceiveProps(props) {
        // this.props.authCheckState().then(res => {
        //     if (res === AUTH_RESULT_FAIL) {
        //         this.props.history.push('/')
        //     }
        // })

        this.setState({ urlPath: this.props.history.location.pathname });

        // this.initializeContent();
    }

    componentDidMount() {
        // this.props.authCheckState().then(res => {
        //     if (res === AUTH_RESULT_FAIL) {
        //         this.props.history.push('/')
        //     }
        // })

        this.setState({ urlPath: this.props.history.location.pathname });

        // this.initializeContent();
    }

    initializeContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length > 3) {
            if (parts[1].length > 0) {
                this.setState({ contentValue: parts[3] })
            }
        } else
            this.setState({ contentValue: 'user_information' })
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
        const { contentValue } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={4} className={classes.leftPane}>
                        <Button className={(contentValue === 'account-message') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'account-message')}>{this.getLabel('account-message')}</Button>
                        <Button className={(contentValue === 'message-notification') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'message-notification')}>{this.getLabel('message-notification')}</Button>

                        <Button className={(contentValue === 'security-settings') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'security-settings')}>{this.getLabel('security-settings')}</Button>
                        <Button className={(contentValue === 'suggestions') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'suggestions')}>{this.getLabel('suggestions-feedback')}</Button>
                    </Grid>
                    <Grid item xs={8} className={classes.rightPane}>
                        {contentValue === 'account-message' && <AccountMessage />}
                        {contentValue === 'message-notification' && <MessageNotification />}
                        {contentValue === 'security-settings' && <SecuritySettings />}
                        {contentValue === 'suggestions' && <Suggestions />}
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