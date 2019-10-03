import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    show_withdraw_main_menu,
    show_deposit_main_menu
} from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DepositMain from './deposit/deposit_main';
import WithdrawMain from './withdraw/withdraw_main';

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
    }
});

export class Banking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: ''
        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    async handleTabChange(event, newValue) {
        this.setState({ tabValue: newValue });

        this.props.show_withdraw_main_menu();
        this.props.show_deposit_main_menu();

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

        if (parts.length > 3) {
            if (parts[1].length > 0) {
                this.setState({ tabValue: parts[3] })
            }
        } else
            this.setState({ tabValue: 'deposit' })
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root} >
                <Grid container>
                    <Grid item xs={4} className={classes.leftPane}>
                        <Button className={(tabValue === 'deposit') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'deposit')}>Deposit</Button>
                        <Button className={(tabValue === 'withdraw') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'withdraw')}>Withdraw</Button>
                    </Grid>
                    <Grid item xs={8} className={classes.leftPane}>
                        {tabValue === 'deposit' && <DepositMain />}
                        {tabValue === 'withdraw' && <WithdrawMain />}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, {
    authCheckState,
    show_withdraw_main_menu,
    show_deposit_main_menu
})(Banking))));