import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { images } from '../../../../util_config';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
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

import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const styles = theme => ({
    root: {
        width: 925,
        minHeight: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797'
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
        marginTop: 28
    },
    activePoints: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.92,
        color: '#6d7278'
    },
    steps: {
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.55,
        color: '#6d7278'
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
        color: 'black'
    },
    betContainer: {
        marginTop: 20,
        objectFit: 'contain',
        border: 'solid 1px rgba(172, 172, 172, 0.25)',
        backgroundColor: '#f7f7f7',
        padding: 20
    },
    betTitleRow: {
        display: 'flex',
        borderBottom: 'solid 1px rgba(172, 172, 172, 0.25)',
        height: 32
    },
    betDetailRow: {
        display: 'flex',
        borderBottom: 'solid 1px rgba(172, 172, 172, 0.25)',
        height: 32,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    betDetailContainer: {
        border: 'solid 1px rgba(172, 172, 172, 0.25)',
        marginBottom: 30
    },
    betName: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.45,
        color: '#6d7278'
    },
    grow: {
        flexGrow: 1
    },
    untilText: {
        fontSize: 17,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.38,
        color: '#6d7278'
    },
    detailText: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2.87,
        letterSpacing: 0.29,
        color: '#000'
    },
    placeBetText: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 0.29,
        color: '#000'
    },
    placeBetButton: {
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }
    },
    placeLiveBetButton: {
        width: '100%',
        marginTop: 10,
        color: '#fff',
        textTransform: 'capitalize',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }
    },
    stepper: {
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
        backgroundColor: '#f7f7f7'
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
    rewardHelp: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.47,
        color: '#6d7278',
        display: 'block'
    },
    activatedDetailText: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.47,
        color: '#000',
        display: 'block',
        letterSpacing: 0.34
    },
    boldText: {
        fontSize: 18,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.61,
        color: '#000',
        display: 'block',
        letterSpacing: 0.34
    },
    heading: {
        borderBottom: '1px solid #fdfdfd'
    },
    placedBetContainer: {},
    plainText: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.61,
        color: '#000',
        display: 'block',
        letterSpacing: 0.34
    },
    paper: {
        padding: theme.spacing(3, 2),
        textAlign: 'center'
    },
    progress: {
        height: 168,
        margin: 0
    },
    progressText: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        color: 'rgba(0, 0, 0, 0.5)',
        letterSpacing: 0.63
    },
});

const IbetConnector = withStyles({
    alternativeLabel: {
        top: 15
    },
    active: {
        '& $line': {
            backgroundColor: '#21e496'
        }
    },
    completed: {
        '& $line': {
            backgroundColor: '#21e496'
        }
    },
    line: {
        height: 9,
        border: 0,
        backgroundColor: '#d8d8d8',
        borderRadius: 1
    }
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
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#dfdfdf'
    },
    completed: {
        backgroundColor: '#21e496'
    }
});

function IbetStepIcon(props) {
    const classes = IbetStepIconStyles();
    const { active, completed } = props;

    const icons = {
        3: <img src={images.src + 'progress60.svg'} alt="" />,
        4: <img src={images.src + 'progress100.svg'} alt="" />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {active && icons[String(props.icon)]}
            {props.icon === 3 && completed ? icons[4] : null}
        </div>
    );
}

IbetStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node
};

export class ActiveRewards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            stepLabels: ['Accept', 'Play', 'Progress'],
            betPlaced: false
        };
    }

    render() {
        const { classes } = this.props;
        const { activeStep, stepLabels, betPlaced } = this.state;



        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Active Rewards</span>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <Grid container>
                            <Grid item xs={12}>
                                <span className={classes.activePoints}>
                                    Active Points
                                </span>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    height: 200,
                                    borderBottom: '1px solid #d8d8d8'
                                }}
                            ></Grid>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    height: 200,
                                    borderBottom: '1px solid #d8d8d8',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <CircularProgressbar
                                    className={classes.progress}
                                    value={60}
                                    minValue={0}
                                    maxValue={100}
                                    text={60}
                                    circleRatio={0.75}
                                    strokeWidth={6}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        trailColor: '#eee',
                                        pathColor: '#21e496',
                                        textColor: 'rgba(0, 0, 0, 0.5)'
                                    })}
                                />
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 90, paddingRight: 90, marginTop: -20 }}>
                                    <span className={classes.progressText}>0</span>
                                    <div className={classes.grow} />
                                    <span className={classes.progressText}>100</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <span className={classes.progressText}> Level 2 requires 1000 points  </span>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    height: 200,
                                    borderBottom: '1px solid #d8d8d8',
                                    textAlign: 'right',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div className={classes.grow} />
                                <span className={classes.rewardHelp}>
                                    Opt Out
                                </span>
                                <span className={classes.rewardHelp}>
                                    What are Reward Points?
                                </span>
                                <span className={classes.rewardHelp}>
                                    How to Redeem Reward Points?
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{ paddingTop: 20 }}>
                                <span className={classes.rewardHelp}>
                                    You have the following rewards activated.
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    className={classes.betContainer}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        className={classes.betTitleRow}
                                    >
                                        <span className={classes.betName}>
                                            $5 Risk Free Bet
                                        </span>
                                        <div className={classes.grow} />
                                        <span className={classes.untilText}>
                                            Expires in: 22/12/2019
                                        </span>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        style={{
                                            paddingTop: 20,
                                            paddingRight: 10
                                        }}
                                    >
                                        <span className={classes.boldText}>
                                            Reward activated
                                        </span>
                                        <span
                                            className={
                                                classes.activatedDetailText
                                            }
                                            style={{ marginBottom: 20 }}
                                        >
                                            You have $5 Risk Fee Bet reward
                                            already
                                        </span>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography
                                                    className={classes.heading}
                                                >
                                                    Terms Apply
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    This promotion is valid from
                                                    12 August 2019 00:00 UTC,
                                                    until 01 September 2019
                                                    23:59 UTC. Any deposits and
                                                    wagering completed outside
                                                    of these dates will not be
                                                    considered for the purpose
                                                    of this promotion. The
                                                    promotion ID for this offer
                                                    is 181059. This promotion is
                                                    open for selected ibet
                                                    customers only. NOTE:
                                                    customers are required to
                                                    opt in to this Promotion via
                                                    the website. There are Cash
                                                    Prizes available for players
                                                    who place 1st - 4th in the
                                                    competition. There are Bonus
                                                    Credits available for
                                                    players who place 5th – 8th
                                                    in the competition.
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <Stepper
                                            className={classes.stepper}
                                            alternativeLabel
                                            activeStep={activeStep}
                                            connector={<IbetConnector />}
                                        >
                                            {stepLabels.map((label, index) => {
                                                return (
                                                    <Step key={label}>
                                                        <StepLabel
                                                            StepIconComponent={
                                                                IbetStepIcon
                                                            }
                                                        >
                                                            {label}
                                                        </StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </Stepper>

                                        <span className={classes.stepperText}>
                                            Rewards steps:{' '}
                                        </span>
                                        <span className={classes.stepperText}>
                                            1. Accept Rewards
                                        </span>
                                        <span className={classes.stepperText}>
                                            2. Place bets.{' '}
                                        </span>
                                        <span className={classes.stepperText}>
                                            3. Get rewards money if you lose{' '}
                                        </span>
                                        <span className={classes.stepperText}>
                                            4. Play to convert rewards to cash.{' '}
                                        </span>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            paddingTop: 20,
                                            paddingLeft: 10
                                        }}
                                    >
                                        {activeStep === 3 ? (
                                            <div>
                                                <Paper
                                                    className={classes.paper}
                                                >
                                                    <span
                                                        className={
                                                            classes.boldText
                                                        }
                                                    >
                                                        Congratulations!
                                                    </span>
                                                    <span
                                                        className={
                                                            classes.plainText
                                                        }
                                                    >
                                                        You have completed the
                                                        wagering requirement.
                                                    </span>
                                                </Paper>

                                                <span
                                                    className={classes.boldText}
                                                    style={{ marginTop: 20 }}
                                                >
                                                    This reward process is done
                                                </span>
                                                <span
                                                    className={
                                                        classes.plainText
                                                    }
                                                >
                                                    Your reward has been
                                                    converted to cash and has
                                                    been added to your balance,
                                                    it can now be withdrawn or
                                                    played as real cash.
                                                </span>
                                            </div>
                                        ) : (
                                                <div>
                                                    <Grid
                                                        container
                                                        className={
                                                            classes.betDetailContainer
                                                        }
                                                    >
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            className={
                                                                classes.betDetailRow
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                Minimum Bet
                                                        </span>
                                                            <div
                                                                className={
                                                                    classes.grow
                                                                }
                                                            />
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                $10
                                                        </span>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            className={
                                                                classes.betDetailRow
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                Potential rewards
                                                                money
                                                        </span>
                                                            <div
                                                                className={
                                                                    classes.grow
                                                                }
                                                            />
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                $30
                                                        </span>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            className={
                                                                classes.betDetailRow
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                Wagering required?
                                                        </span>
                                                            <div
                                                                className={
                                                                    classes.grow
                                                                }
                                                            />
                                                            <span
                                                                className={
                                                                    classes.detailText
                                                                }
                                                            >
                                                                Yes
                                                        </span>
                                                        </Grid>
                                                    </Grid>
                                                    {!betPlaced ? (
                                                        <div>
                                                            <span
                                                                className={
                                                                    classes.boldText
                                                                }
                                                            >
                                                                Place a Bet
                                                        </span>
                                                            <span
                                                                className={
                                                                    classes.placeBetText
                                                                }
                                                            >
                                                                Place a Sports bet
                                                                and get bonus money
                                                                back if you lose.
                                                        </span>
                                                            <Button
                                                                variant="contained"
                                                                className={
                                                                    classes.placeBetButton
                                                                }
                                                                style={{
                                                                    marginTop: 20
                                                                }}
                                                                onClick={() => {
                                                                    this.setState({
                                                                        activeStep: 2
                                                                    });
                                                                    this.setState({
                                                                        betPlaced: true
                                                                    });
                                                                    this.setState(
                                                                        prevState => ({
                                                                            stepLabels: prevState.stepLabels.map(
                                                                                obj =>
                                                                                    obj ===
                                                                                        'Progress'
                                                                                        ? '60% Progress'
                                                                                        : obj
                                                                            )
                                                                        })
                                                                    );
                                                                }}
                                                            >
                                                                Place Bet
                                                        </Button>
                                                            <Button
                                                                variant="contained"
                                                                className={
                                                                    classes.placeLiveBetButton
                                                                }
                                                            >
                                                                Place Live Bet
                                                        </Button>
                                                        </div>
                                                    ) : (
                                                            <Grid
                                                                container
                                                                className={
                                                                    classes.placedBetContainer
                                                                }
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={12}
                                                                    className={
                                                                        classes.betDetailRow
                                                                    }
                                                                >
                                                                    <span
                                                                        className={
                                                                            classes.detailText
                                                                        }
                                                                    >
                                                                        Qualifying Bets
                                                            </span>
                                                                    <div
                                                                        className={
                                                                            classes.grow
                                                                        }
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.detailText
                                                                        }
                                                                    >
                                                                        Amount ($)
                                                            </span>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={12}
                                                                    style={{
                                                                        display: 'flex'
                                                                    }}
                                                                >
                                                                    <span
                                                                        className={
                                                                            classes.plainText
                                                                        }
                                                                    >
                                                                        Live Betting -
                                                                        Open
                                                            </span>
                                                                    <div
                                                                        className={
                                                                            classes.grow
                                                                        }
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.plainText
                                                                        }
                                                                    >
                                                                        $50.00
                                                            </span>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <span
                                                                        className={
                                                                            classes.plainText
                                                                        }
                                                                    >
                                                                        12/23/2019 16:43
                                                            </span>
                                                                    <div
                                                                        className={
                                                                            classes.grow
                                                                        }
                                                                    />
                                                                    <Button
                                                                        onClick={() => {
                                                                            this.setState(
                                                                                {
                                                                                    activeStep: 3
                                                                                }
                                                                            );
                                                                            this.setState(
                                                                                prevState => ({
                                                                                    stepLabels: prevState.stepLabels.map(
                                                                                        obj =>
                                                                                            obj ===
                                                                                                '60% Progress'
                                                                                                ? '100% Progress'
                                                                                                : obj
                                                                                    )
                                                                                })
                                                                            );
                                                                        }}
                                                                    >
                                                                        finish
                                                            </Button>
                                                                </Grid>
                                                            </Grid>
                                                        )}
                                                </div>
                                            )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ActiveRewards.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState }
        )(ActiveRewards)
    )
);
