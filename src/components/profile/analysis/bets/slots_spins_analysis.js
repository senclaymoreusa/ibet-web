import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { images } from '../../../../util_config';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797'
    },
    backCell: {
        paddingTop: 20,
        paddingLeft: 10,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80,
    },
    backLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        marginLeft: 8,
    },
    contentPaper: {

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
    },
    titleCell: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 80,
        paddingTop: 28,
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
    },
    titleRightCell: {
        textAlign: 'right',
    },
    contentCell: {
        borderBottom: '1px solid #212121',
        paddingTop: 5,
        paddingBottom: 5,
    },
    winlossCell: {
        borderBottom: '1px solid #212121',
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
    },
    balanceCell: {
        borderBottom: '1px solid #212121',
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
    },
    link: {
        cursor: 'pointer',
        color: 'blue',
    },
    buttonRow: {
        textAlign: 'right',
        paddingRight: 20,
        paddingTop: 10
    },
    slotButton: {
        width: 180,
        height: 36,
        textTransform: 'capitalize',
        backgroundColor: '#d8d8d8',
        "&:hover": {
            backgroundColor: '#d8d8d8',
        },
    },
    activeSlotButton: {
        width: 180,
        height: 36,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },

});


export class SlotsBetsAnalysis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabValue: 'game'
        }

        this.backClicked = this.backClicked.bind(this);
        this.goToDetailAnalysis = this.goToDetailAnalysis.bind(this);

    }

    backClicked(ev) {
        this.props.callbackFromParent(1);
    }

    goToDetailAnalysis() {
        this.props.callbackFromParent(3);
    }

    componentDidMount() {

    }

    handleTabChange(event, newValue) {
        this.setState({ tabValue: newValue })
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;



        const backButton = (
            <Button className={classes.prevButton} onClick={this.backClicked}>
                             <img src={images.src + 'prev_step.svg'} />\
                <span className={classes.backLabel}>Back</span>
            </Button>);

        const gameContent = (
            <Paper className={classes.contentPaper}>
                <Grid container>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Game
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Spins
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        RTP
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Bet Amount
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Win Amount
    </Grid>
                    <Grid item xs={2} className={classes.titleRightCell}>
                        P&L
    </Grid>

                    <Grid item xs={2} className={classes.contentCell}>
                        Book of Dead
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.winlossCell}>
                        $65
    </Grid>

                    <Grid item xs={2} className={classes.contentCell}>
                        Startburst
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.winlossCell}>
                        $65
    </Grid>

                    <Grid item xs={2} className={classes.contentCell}>
                        Dooms
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.winlossCell}>
                        $65
    </Grid>

                    <Grid item xs={2} className={classes.contentCell}>
                        Halo
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.winlossCell}>
                        $65
    </Grid>
                </Grid>
            </Paper>);

        const dayContent = (
            <Paper className={classes.contentPaper}>
                <Grid container>
                    <Grid item xs={1} className={classes.gridTitleCell}>
                        Day
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Spins
    </Grid>
                    <Grid item xs={1} className={classes.gridTitleCell}>
                        RTP
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Bet Amount
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Win Amount
    </Grid>
                    <Grid item xs={1} className={classes.gridTitleCell}>
                        P&L
    </Grid>
                    <Grid item xs={2} className={classes.gridTitleCell}>
                        Biggest Win
    </Grid>
                    <Grid item xs={1} className={classes.gridTitleCell}>
                        Bonuses
    </Grid>

                    <Grid item xs={1} className={classes.contentCell}>
                        1 Jul
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        Book of Dead
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $65
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        $5
    </Grid>


                    <Grid item xs={1} className={classes.contentCell}>
                        2 Jul
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        Dooms
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $65
    </Grid>

                    <Grid item xs={1} className={classes.contentCell}>
                        $2
    </Grid>

                    <Grid item xs={1} className={classes.contentCell}>
                        3 Jul
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        Halo
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        750
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        95%
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $1500
    </Grid>
                    <Grid item xs={1} className={classes.contentCell}>
                        $1234
    </Grid>
                    <Grid item xs={2} className={classes.contentCell}>
                        $65
    </Grid>

                    <Grid item xs={1} className={classes.contentCell}>
                        $1
    </Grid>
                </Grid>
            </Paper>);

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.backCell}>
                        {backButton}
                    </Grid>
                    <Grid item xs={8} className={classes.titleCell}>
                        <span className={classes.title}>Slots Spins</span>
                    </Grid>
                    <Grid item xs={2} className={classes.backCell}>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonRow}>
                        <Button onClick={(evt) => this.handleTabChange(evt, 'game')}
                            className={(tabValue === 'game') ? classes.activeSlotButton : classes.slotButton} >
                            By Game
                        </Button>
                        <Button onClick={(evt) => this.handleTabChange(evt, 'day')}
                            className={(tabValue === 'day') ? classes.activeSlotButton : classes.slotButton}>
                            By Day
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {tabValue === 'game' && <div>{gameContent}</div>}
                        {tabValue === 'day' && <div>{dayContent}</div>}
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(SlotsBetsAnalysis)));