import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Analysis from './analysis';
import SportsBets from './sports_bets';
import CasinoSpins from './casino_spins';
import LiveCasinoBets from './live_casino_bets';
import Deposit from './deposit';
import Withdraw from './withdraw';

const styles = theme => ({
    root: {
        width: '100%',
    },
});

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentValue: 'main'
        }
    }

    setContent = (dataFromChild) => {
        this.setState({ contentValue: dataFromChild });
    }

    render() {
        const { classes } = this.props;
        const {contentValue} = this.state;

        return (
            <div className={classes.root}>
                {contentValue === 'main' && <Analysis callbackFromParent={this.setContent}/>}
                {contentValue === 'sports' && <SportsBets callbackFromParent={this.setContent}/>}
                {contentValue === 'casino-spins' && <CasinoSpins callbackFromParent={this.setContent}/>}
                {contentValue === 'live-casino-bets' && <LiveCasinoBets callbackFromParent={this.setContent}/>}
                {contentValue === 'deposit' && <Deposit callbackFromParent={this.setContent}/>}
                {contentValue === 'withdraw' && <Withdraw callbackFromParent={this.setContent}/>}
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