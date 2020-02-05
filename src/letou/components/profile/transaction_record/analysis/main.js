import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Analysis from './analysis';
import SportsBets from './sports_bets';
import SportsBetDetails from './sports_bet_detail';
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
        const { contentValue, dateValue, operationType } = this.state;

        return (
            <div className={classes.root}>
                {(operationProp == undefined || operationProp == '') && <Analysis callbackFromParent={this.setContent} />}
                {operationProp === 'sports' && <SportsBets />}
                {operationProp === 'sports-detail' && <SportsBetDetails />}
                {operationProp === 'deposit-withdraw' && <DepositWithdraw />}
                {operationProp === 'transaction-detail' && <DepositWithdrawDetails />}

                {/* 
                {contentValue === 'casino-spins' && <CasinoSpins callbackFromParent={this.setContent} />}
                {contentValue === 'live-casino-bets' && <LiveCasinoBets callbackFromParent={this.setContent} />}
                {contentValue === 'deposit-withdraw' && <DepositWithdraw callbackFromParent={this.setContent} date={dateValue} opType={operationType}/>}
                {contentValue === 'deposit-withdraw-detail' && <DepositWithdrawDetails callbackFromParent={this.setContent} />} */}
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
