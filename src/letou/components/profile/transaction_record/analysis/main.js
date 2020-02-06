import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Analysis from './analysis';
import SportsBets from './sports_bets';
import BetDetails from './bet_detail';
import CasinoSpins from './casino_spins';
import LiveCasinoBets from './live_casino_bets';
import DepositWithdraw from './deposit_withdraw';
import DepositWithdrawDetails from './deposit_withdraw_detail';

const styles = () => ({
    root: {
        width: '100%'
    },
});

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentValue: 'main',
            dateValue: null,
            operationType: ''
        }
    }

    setContent = (content, date, operation) => {
        this.setState({ contentValue: content, dateValue: date, operationType: operation });
    }

    render() {
        const { classes, operationProp } = this.props;

        return (
            <div className={classes.root}>
                {(operationProp === undefined || operationProp === '') && <Analysis callbackFromParent={this.setContent} />}
                {operationProp === 'sports' && <SportsBets />}
                {operationProp === 'bet-detail' && <BetDetails />}
                {operationProp === 'deposit-withdraw' && <DepositWithdraw />}
                {operationProp === 'transaction-detail' && <DepositWithdrawDetails />}
                {operationProp === 'casino-spins' && <CasinoSpins />}
                {operationProp === 'live-casino-bets' && <LiveCasinoBets />}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state.auth;

    return {
        user: user,
        operationProp: ownProps.match.params.operation
    };
}

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState })(Main)
        )
    )
);
