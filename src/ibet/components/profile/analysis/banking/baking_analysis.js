import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import MainAnalysis from './main_analysis';
import DailyAnalysis from './daily_analysis';
import BankingAnalysisDetail from './banking_analysis_detail';

const styles = theme => ({
    root: {
        width: '100%',
    },
});

export class BankingAnalysis extends Component {

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
            {stepValue === 2 && <DailyAnalysis callbackFromParent={this.myCallback}/>}
            {stepValue === 3 && <BankingAnalysisDetail callbackFromParent={this.myCallback}/>}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(BankingAnalysis)));