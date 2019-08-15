import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import BetsAnalysis from './bets/bets_analysis';
import BankingAnalysis from './banking/baking_analysis';



import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    leftPane: {
        paddingTop: 50,
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



  
export class Analysis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabValue: 'bets'
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
                        <Button className={(tabValue === 'bets') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'bets')}>Bets</Button>
                        <Button className={(tabValue === 'banking') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'banking')}>Banking</Button>
                    </Grid>
                    <Grid item xs={8} className={classes.rightPane}>
                        {tabValue === 'bets' && <BetsAnalysis />}
                        {tabValue === 'banking' && <BankingAnalysis />}
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Analysis)));