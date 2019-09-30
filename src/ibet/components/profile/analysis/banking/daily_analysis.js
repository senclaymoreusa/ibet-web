import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { images } from '../../../../../util_config';
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
    }
});


export class DailyAnalysis extends Component {

    constructor(props) {
        super(props);

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

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let dateLabel = formatMessage({ id: "analysis.date" });
        let timeLabel = formatMessage({ id: "analysis.time" });
        let categoryLabel = formatMessage({ id: "analysis.category" });
        let amountLabel = formatMessage({ id: "analysis.amount" });
        let balanceLabel = formatMessage({ id: "analysis.balance" });

        const backButton = (
            <Button className={classes.prevButton} onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} alt="" />
                <span className={classes.backLabel}>Back</span>
            </Button>);

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.backCell}>
                        {backButton}
                    </Grid>
                    <Grid item xs={8} className={classes.titleCell}>
                        <span className={classes.title}>Deposit & Withdraw</span>
                    </Grid>
                    <Grid item xs={2} className={classes.backCell}>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.contentPaper}>
                            <Grid container>
                                <Grid item xs={2} className={classes.gridTitleCell}>
                                    {dateLabel}
                                </Grid>
                                <Grid item xs={2} className={classes.gridTitleCell}>
                                    {timeLabel}
                                </Grid>
                                <Grid item xs={4} className={classes.gridTitleCell}>
                                    {categoryLabel}
                                </Grid>
                                <Grid item xs={2} className={classes.titleRightCell}>
                                    {amountLabel}
                                </Grid>
                                <Grid item xs={2} className={classes.titleRightCell}>
                                    {balanceLabel}
                                </Grid>


                                <Grid item xs={2} className={classes.contentCell}>
                                    15 Jul
                                </Grid>
                                <Grid item xs={2} className={classes.contentCell}>
                                    11:00
                                </Grid>
                                <Grid item xs={4} className={classes.contentCell}>
                                    <Link className={classes.link} onClick={this.goToDetailAnalysis} >
                                        Withdrawal
                                    </Link>
                                </Grid>
                                <Grid item xs={2} className={classes.balanceCell}>
                                    200
                                </Grid>
                                <Grid item xs={2} className={classes.balanceCell}>
                                    500
                                </Grid>

                                <Grid item xs={2} className={classes.contentCell}>
                                    15 Jul
                                </Grid>
                                <Grid item xs={2} className={classes.contentCell}>
                                    13:00
                                </Grid>
                                <Grid item xs={4} className={classes.contentCell}>
                                    <Link className={classes.link} onClick={this.goToDetailAnalysis} >
                                        Deposit
                                    </Link>
                                </Grid>
                                <Grid item xs={2} className={classes.balanceCell}>
                                    100
                                </Grid>
                                <Grid item xs={2} className={classes.balanceCell}>
                                    300
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DailyAnalysis)));