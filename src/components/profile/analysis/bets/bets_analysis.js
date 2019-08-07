import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import MainAnalysis from './main_analysis';
import SportsBetsAnalysis from './sports_bets_analysis';
import BetAnalysisDetail from './bet_analysis_detail';
import SlotsBetsAnalysis from './slots_spins_analysis';
import CasinoBetsAnalysis from './casino_bets_analysis';

const styles = theme => ({
    root: {
        width: '100%',
    },
});

export class BetsAnalysis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: 1
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({ stepValue: dataFromChild });
    }

    render() {
        const { classes } = this.props;
        const {stepValue} = this.state;

        return (
            <div className={classes.root}>
                {stepValue === 1 && <MainAnalysis callbackFromParent={this.myCallback}/>}
                {stepValue === 2 && <SportsBetsAnalysis callbackFromParent={this.myCallback}/>}
                {stepValue === 4 && <SlotsBetsAnalysis callbackFromParent={this.myCallback}/>}
                {stepValue === 5 && <CasinoBetsAnalysis callbackFromParent={this.myCallback}/>}
                {stepValue === 3 && <BetAnalysisDetail callbackFromParent={this.myCallback}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(BetsAnalysis)));