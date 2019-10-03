import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        minHeight: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
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
    pleased: {
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.53,
        letterSpacing: 0.45,
        color: '#6d7278',
    },
    steps: {
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.55,
        color: '#6d7278',
    },
    content: {
        padding: 28
    },
    noEligible: {
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.55,
        color: 'black',
    },
    betContainer: {
        marginTop:20,
        objectFit: 'contain',
        border: 'solid 1px rgba(172, 172, 172, 0.25)',
        backgroundColor: '#f7f7f7',
        padding: 20,

    },
    betTitleRow: {
        display: 'flex',
        borderBottom: 'solid 1px rgba(172, 172, 172, 0.25)',
        height: 32,
    },
    betDetailRow: {
        display: 'flex',
        borderBottom: 'solid 1px rgba(172, 172, 172, 0.25)',
        height: 32,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
    },
    betDetailContainer: {
        border: 'solid 1px rgba(172, 172, 172, 0.25)',
    },
    betName: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.45,
        color: '#6d7278',
    },
    grow: {
        flexGrow: 1,
    },
    untilText: {
        fontSize: 17,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.38,
        color: '#6d7278',
    },
    detailText: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2.87,
        letterSpacing: 0.29,
        color: '#000',
    },
    acceptButton: {
        width: '100%',
        marginTop: 40,
    },
    stepper: {
        marginTop:20,
        marginBottom:20,
        padding: 0,
        backgroundColor: '#f7f7f7',
    },
    stepperText: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.47,
        color: '#6d7278',
        display: 'block'
    },
});

const IbetConnector = withStyles({
    alternativeLabel: {
        top: 12,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 9,
        border: 0,
        backgroundColor: '#d8d8d8',
        borderRadius: 1,
    },
})(StepConnector);

const IbetStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#d8d8d8',
        zIndex: 1,
        color: '#fff',
        width: 38,
        height: 38,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function IbetStepIcon(props) {
    const classes = IbetStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

IbetStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

export class EligibleRewards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: -1,
        }
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        const stepLabels = ['Accept', 'Play', 'Progress']

        return (
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Eligible Rewards</span>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <span className={classes.pleased}>We are pleased you are interested in our rewards. Please note we change these on occasion to offer you the best options. Below is what is available to you today.</span>

                        <Grid container className={classes.betContainer} >
                            <Grid item xs={12} className={classes.betTitleRow}>
                                <span className={classes.betName}>$5 Risk Free Bet</span>
                                <div className={classes.grow} />
                                <span className={classes.untilText}>Available until:  22/12/2019</span>
                            </Grid>
                            <Grid item xs={8} style={{paddingTop:20, paddingRight:10}}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Terms Apply</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                        This promotion is valid from 12 August 2019 00:00 UTC, until 01 September 2019 23:59 UTC. Any deposits and wagering completed outside of these dates will not be considered for the purpose of this promotion. The promotion ID for this offer is 181059.

This promotion is open for selected ibet customers only. NOTE: customers are required to opt in to this Promotion via the website.
There are Cash Prizes available for players who place 1st - 4th in the competition.

There are Bonus Credits available for players who place 5th – 8th in the competition.

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<IbetConnector />}>
                                    {stepLabels.map((label, index) => {
                                        return (
                                            <Step key={label}>
                                                <StepLabel StepIconComponent={IbetStepIcon}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>

                                <span className={classes.stepperText}>Rewards steps: </span>
                                <span className={classes.stepperText}>1. Accept Rewards</span>
                                <span className={classes.stepperText}>2. Place bets. </span>
                                <span className={classes.stepperText}>3. Get rewards money if you lose </span>
                                <span className={classes.stepperText}>4. Play to convert rewards to cash.  </span>
                            </Grid>
                            <Grid item xs={4} style={{paddingTop:20, paddingLeft:10}}>
                                <Grid container className={classes.betDetailContainer}>
                                    <Grid item xs={12} className={classes.betDetailRow}>
                                        <span className={classes.detailText}>Minimum Bet</span>
                                        <div className={classes.grow} />
                                        <span className={classes.detailText}>$10</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.betDetailRow}>
                                        <span className={classes.detailText}>Potential rewards money</span>
                                        <div className={classes.grow} />
                                        <span className={classes.detailText}>$30</span>
                                    </Grid>
                                    <Grid item xs={12} className={classes.betDetailRow}>
                                        <span className={classes.detailText}>Wagering required?</span>
                                        <div className={classes.grow} />
                                        <span className={classes.detailText}>Yes</span>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" className={classes.acceptButton}>Accept</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

EligibleRewards.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(EligibleRewards)));