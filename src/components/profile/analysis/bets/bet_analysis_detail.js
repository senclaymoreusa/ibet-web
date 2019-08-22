import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { ReactComponent as PrevStepIcon } from '../../../../assets/img/svg/prev_step.svg';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    backCell: {
        paddingLeft: 10,
        paddingTop:20,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28,
    },
    contentPaper: {

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
    },
    leftCell: {
        display: 'flex',
        alignItems: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',

    },
    rightCell: {
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',

    },
});


export class BetAnalysisDetail extends Component {

    constructor(props) {
        super(props);

        this.backClicked = this.backClicked.bind(this);
    }

    componentDidMount() {

    }

    backClicked(ev) {
        this.props.callbackFromParent(2);
    }

    render() {
          const { classes } = this.props;

        const backButton = (
            <Button className={classes.prevButton} onClick={this.backClicked}>
                <PrevStepIcon />
            </Button>);

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.backCell}>
                        {backButton}
                    </Grid>
                    <Grid item xs={8} className={classes.titleCell}>
                        <span className={classes.title}>Single NBA Knick vs Celtics</span>
                    </Grid>
                    <Grid item xs={2} className={classes.backCell}>
                  </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.contentPaper}>
                            <Grid container>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Placed
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    7/15/19 13:00
                            </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    ID
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    1234-ascsd
                            </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Type
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    Single
                            </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Event
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    Knick vs Celtics
                                </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Line
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    Knick @ 2.0
                            </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Settled
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    7/15/19 17:00
                                </Grid>
                                <Grid item xs={6} className={classes.leftCell}>
                                    Result
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    Won
                            </Grid>

                                <Grid item xs={6} className={classes.leftCell}>
                                    Stake
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    50
                            </Grid>

                                <Grid item xs={6} className={classes.leftCell}>
                                    Return
                            </Grid>
                                <Grid item xs={6} className={classes.rightCell}>
                                    100
                            </Grid>
                            </Grid>
                        </Paper>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(BetAnalysisDetail)));