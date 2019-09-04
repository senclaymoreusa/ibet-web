import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 4,
        border: 'solid 1px rgba(0, 0, 0, 0.2)',
        
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
        paddingTop:15,
    },
    title:{
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
        paddingBottom:20,
    },
    button: {
         height: 40,
        borderRadius: 20,
        backgroundColor: '#d8d8d8',
        paddingLeft:20,
        paddingRight:20
    },
    limitButton: {
        width: 109,
        height: 36,
        borderRadius:0,
        textTransform: 'capitalize',
        backgroundColor: '#d8d8d8',
        "&:hover": {
            backgroundColor: '#d8d8d8',
        },
    },
    activeLimitButton: {
        width: 109,
        height: 36,
        borderRadius:0,
        textTransform: 'capitalize',
        backgroundColor: '#bebebe',
        "&:hover": {
            backgroundColor: '#bebebe',
        },
    },
    timeCell:{
        paddingTop:20,
    },
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

    dailyDepositLimitClicked(){

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
                                <Grid item xs={12} >
                                    <span >content</span>
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
                                <Grid item xs={12} >
                                    <span >content</span>
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
                                <Grid item xs={12} >
                                    <span >content</span>
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
                                <Grid item xs={12} >
                                    <span >content</span>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
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