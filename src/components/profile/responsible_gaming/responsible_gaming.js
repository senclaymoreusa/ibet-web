import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { withRouter } from 'react-router-dom';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        color: theme.palette.text.secondary,
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.2)',
        minHeight: 415
    },
    container: {
        maxWidth: 1444,
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 48,
        paddingTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: '#000'
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    button: {
        height: 40,
        minWidth: 300,
        borderRadius: 20,
        backgroundColor: '#d8d8d8',
        paddingLeft: 20,
        paddingRight: 20
    },
    limitButton: {
        width: '33%',
        height: 36,
        borderRadius: 0,
        textTransform: 'capitalize',
        backgroundColor: '#d8d8d8',
        "&:hover": {
            backgroundColor: '#d8d8d8',
        },
    },
    activeLimitButton: {
        width: '33%',
        height: 36,
        borderRadius: 0,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },
    timeCell: {
        paddingTop: 60,
        paddingLeft: 72,
        paddingRight: 72
    },
    decrementButton: {
        height: 44,
        width: 44,
        minWidth: 44,
        maxWidth: 44,
        padding: 0,
    },
    incrementButton: {
        height: 44,
        width: 44,
        minWidth: 44,
        maxWidth: 44,
        padding: 0,
    },
    inputRow: {
        paddingLeft: 72,
        paddingRight: 72,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    labelRow: {
        paddingLeft: 132,
        paddingRight: 132,
        paddingTop: 10,
    },
    limitLabel: {
        fontSize: 12,
        fontWeight: 500,
        float: 'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#2e2f2e',
    },
    limitValueLabel: {
        fontSize: 12,
        fontWeight: 500,
        float: 'right',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#2e2f2e',
    },
    textField: {
        height: 44,
        marginLeft: 17,
        marginRight: 17,
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    activityTitleRow: {
        paddingTop: 20,
        paddingLeft: 72,
        paddingRight: 72,
        display: 'flex',
        flexDirection: 'column',
    },
    activityRow: {
        paddingTop: 20,
        paddingLeft: 72,
        paddingRight: 72
    },
    activitySubTitle: {
        fontSize: 14,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    activityText: {
        display: 'block',
        fontSize: 12,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#212121',
        opacity: 0.5
    },
    activityRemindText: {
        fontSize: 12,
        float: 'left',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    activityButtonRow: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
    },
    timeButton: {
        height: 44,
        width: 72,
        padding: 0,
        textTransform: 'capitalize',

    },
    lockRow: {
        paddingLeft: 150,
        paddingRight: 150
    },
    lockText: {
        marginTop: 40,
        display: 'block',
        fontSize: 12,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#212121',
        opacity: 0.5
    },
    lockSubTitle: {
        fontSize: 14,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    leftLock: {
        paddingLeft: 150,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
    },
    rightLock: {
        paddingRight: 150,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
    },
    lockButtonContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "left",
    },
    lockButton: {
        height: 44,
        //  padding: 0,
        textTransform: 'capitalize',
    },
    understandText:{
        fontSize: 16,
        float: 'left',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#212121',
    }
});

export class ResponsibleGaming extends Component {

    constructor(props) {
        super(props);

        this.state = {
            depositLimitDuration: 'daily',
            lossLimitDuration: 'daily',
        }
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })
    }

    dailyDepositLimitClicked() {

    }

    decreaseDepositLimitClicked() {

    }

    increaseDepositLimitClicked() {

    }

    render() {
        const { classes } = this.props;
        const { depositLimitDuration } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.container}>
                    <Grid item xs={4}>
                        <div className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} className={classes.titleCell}>
                                    <span className={classes.title}>Deposit Limit</span>
                                </Grid>
                                <Grid item xs={12} className={classes.timeCell}>
                                    <Button onClick={this.dailyDepositLimitClicked}
                                        className={(depositLimitDuration === 'daily') ? classes.activeLimitButton : classes.limitButton} >
                                        Daily
                                    </Button>
                                    <Button onClick={this.weeklyDepositLimitClicked}
                                        className={(depositLimitDuration === 'weekly') ? classes.activeLimitButton : classes.limitButton}>
                                        Weekly
                                    </Button>
                                    <Button onClick={this.monthDepositLimitClicked}
                                        className={(depositLimitDuration === 'monthly') ? classes.activeLimitButton : classes.limitButton} >
                                        Daily
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.labelRow}>
                                    <span className={classes.limitLabel}>Current Limit</span>
                                    <span className={classes.limitValueLabel}>$0 out of $0</span>

                                </Grid>
                                <Grid item xs={12} className={classes.inputRow}>
                                    <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseDepositLimitClicked}>-</Button>
                                    <TextField
                                        className={classes.textField}
                                        InputProps={{
                                            disableUnderline: true,
                                            inputProps: {
                                                style: {
                                                    textAlign: 'center',
                                                    paddingTop: 0,
                                                    fontSize: 22,
                                                    fontWeight: 500,
                                                    fontStyle: 'normal',
                                                    fontStretch: 'normal',
                                                    lineHeight: 'normal',
                                                    letterSpacing: 'normal',
                                                    textAlign: 'center',
                                                    color: '#2e2f2e'
                                                }
                                            }
                                        }}
                                    />
                                    <Button variant="contained" className={classes.incrementButton} onClick={this.increaseDepositLimitClicked}>+</Button>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.button}
                                    // onClick={this.backClicked}
                                    >Save My Deposit Limit</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} className={classes.titleCell}>
                                    <span className={classes.title}>Loss Limit</span>
                                </Grid>
                                <Grid item xs={12} className={classes.timeCell}>
                                    <Button onClick={this.dailyDepositLimitClicked}
                                        className={(depositLimitDuration === 'daily') ? classes.activeLimitButton : classes.limitButton} >
                                        Daily
                                    </Button>
                                    <Button onClick={this.weeklyDepositLimitClicked}
                                        className={(depositLimitDuration === 'weekly') ? classes.activeLimitButton : classes.limitButton}>
                                        Weekly
                                    </Button>
                                    <Button onClick={this.monthDepositLimitClicked}
                                        className={(depositLimitDuration === 'monthly') ? classes.activeLimitButton : classes.limitButton} >
                                        Daily
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.labelRow}>
                                    <span className={classes.limitLabel}>Current Limit</span>
                                    <span className={classes.limitValueLabel}>$0 out of $0</span>
                                </Grid>
                                <Grid item xs={12} className={classes.inputRow}>
                                    <Button variant="contained" className={classes.decrementButton} onClick={this.decreaseDepositLimitClicked}>-</Button>
                                    <TextField
                                        className={classes.textField}
                                        InputProps={{
                                            disableUnderline: true,
                                            inputProps: {
                                                style: {
                                                    textAlign: 'center',
                                                    paddingTop: 0,
                                                    fontSize: 22,
                                                    fontWeight: 500,
                                                    fontStyle: 'normal',
                                                    fontStretch: 'normal',
                                                    lineHeight: 'normal',
                                                    letterSpacing: 'normal',
                                                    textAlign: 'center',
                                                    color: '#2e2f2e'
                                                }
                                            }
                                        }}
                                    />
                                    <Button variant="contained" className={classes.incrementButton} onClick={this.increaseDepositLimitClicked}>+</Button>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.button}
                                    // onClick={this.backClicked}
                                    >Save My Loss Limit</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} className={classes.titleCell}>
                                    <span className={classes.title}>Activity Check</span>
                                </Grid>
                                <Grid item xs={12} className={classes.activityTitleRow} >
                                    <span className={classes.activitySubTitle} >Activity Check</span>
                                    <Divider light />
                                </Grid>
                                <Grid item xs={12} className={classes.activityRow}>
                                    <span className={classes.activityText}>Time can fly when you are having fun! make sure it doesn’t get away from you with our Activity Check. Adjustable notification alerts informing you of the time spent on both Casino & Sportsbook from the moment you log in, your very own player alarm clock.</span>
                                </Grid>
                                <Grid item xs={12} className={classes.activityRow}>
                                    <span className={classes.activityRemindText}>Remind me every...</span>
                                </Grid>
                                <Grid item xs={12} className={classes.activityButtonRow}>
                                    <Button variant="contained" className={classes.timeButton}>5 Min</Button>
                                    <Button variant="contained" className={classes.timeButton} style={{ marginLeft: 12, marginRight: 12 }}>30 Min</Button>
                                    <Button variant="contained" className={classes.timeButton} style={{ marginLeft: 12, marginRight: 12 }}>60 Min</Button>
                                    <Button variant="contained" className={classes.timeButton}> 120 Min</Button>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.button}
                                    // onClick={this.backClicked}
                                    >Save My Activity Reminder</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} className={classes.titleCell}>
                                    <span className={classes.title}>Lock My Account</span>
                                </Grid>
                                <Grid item xs={12} className={classes.lockRow}>
                                    <span className={classes.lockText}>It’s important for us that you have fun playing online. So should you ever be in doubt that you are playing more than you can really afford; lock your account a period of time. You will be able to reopen your account by contacting Customer Support. </span>
                                </Grid>
                                <Grid item xs={5} className={classes.leftLock}>
                                    <span className={classes.lockSubTitle}>Lock my account for a short time</span>
                                    <div className={classes.lockButtonContainer}>
                                        <Button variant="contained" className={classes.lockButton}>1 day</Button>
                                        <Button variant="contained" className={classes.lockButton} style={{ marginLeft: 12, marginRight: 12 }}>7 days</Button>
                                        <Button variant="contained" className={classes.lockButton} >30 days</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={7} className={classes.rightLock}>
                                    <span className={classes.lockSubTitle}>Or for a long period of time</span>
                                    <div className={classes.lockButtonContainer}>
                                        <Button variant="contained" className={classes.lockButton}>6 Months</Button>
                                        <Button variant="contained" className={classes.lockButton} style={{ marginLeft: 12, marginRight: 12 }}>1 Year</Button>
                                        <Button variant="contained" className={classes.lockButton} style={{ marginRight: 12 }}>3 Years</Button>
                                        <Button variant="contained" className={classes.lockButton} style={{ marginRight: 12 }}>5 Years</Button>
                                        <Button variant="contained" className={classes.lockButton} >Indefinite (Min. 1 Year)</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.lockRow} style={{paddingTop: 20}}>
                                    <FormControlLabel value="understand" control={<Radio />} className={classes.understandText} label="By checking this box I understand that I'm locking my account for the selected period of time. " />
                                </Grid>
                                <Grid item xs={12} className={classes.lockRow}>
                                    <Button className={classes.button}
                                    // onClick={this.backClicked}
                                    >Lock My Account</Button>
                                </Grid>
                            </Grid>
                        </div>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(ResponsibleGaming))));