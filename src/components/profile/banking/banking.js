import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
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
       display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightPane: {
    },
    leftPaneButton: {
        width: 250,
        maxWidth: 250,
        height: 76,
        backgroundColor: '#f1f1f1',
        marginTop: 2,

    }
});

export class Banking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabValue: 'deposit'
        }

        this.handleTabChange = this.handleTabChange.bind(this);

    }

    handleTabChange(event, newValue) {
        this.setState({ tabValue: newValue })
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={4} className={classes.leftPane}>
                        <Button className={classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'deposit')}>Deposit</Button>
                        <Button className={classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'withdraw')}>Withdraw</Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Banking)));