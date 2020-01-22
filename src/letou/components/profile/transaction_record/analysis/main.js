import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

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
        const { classes } = this.props;
        const { contentValue, dateValue, operationType } = this.state;

        return (
            <div className={classes.root}>
                {contentValue === 'main' && <Analysis callbackFromParent={this.setContent} />}
                {contentValue === 'sports' && <SportsBets callbackFromParent={this.setContent} date={dateValue} />}
                {contentValue === 'sports-detail' && <SportsBetDetails callbackFromParent={this.setContent} />}
                {contentValue === 'casino-spins' && <CasinoSpins callbackFromParent={this.setContent} />}
                {contentValue === 'live-casino-bets' && <LiveCasinoBets callbackFromParent={this.setContent} />}
                {contentValue === 'deposit-withdraw' && <DepositWithdraw callbackFromParent={this.setContent} date={dateValue} opType={operationType}/>}
                {contentValue === 'deposit-withdraw-detail' && <DepositWithdrawDetails callbackFromParent={this.setContent} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Main)));