import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { images } from '../../../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

const styles = () => ({
    root: {
        width: '100%',
    },
    titleRow: {
        height: 70,
        backgroundColor: 'rgba(228, 228, 228, 0.25)',
        display: 'flex',
        flexDirection: 'row',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        marginTop: 25,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
    },
    contentPaper: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridTitleRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
    },
    gridRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    link: {
        cursor: 'pointer',
        color: 'blue',
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
    },
    titleLabel: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#bebebe'
    },
    subtitleLabel: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#bebebe'
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121'
    },
    cell:
    {
        minWidth: 100
    }
});

export class DepositWithdraw extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }


    render() {
        const { classes } = this.props;
        const { type } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>{this.getLabel('deposit-withdraw')}</span>
                        <div className={classes.grow} />
                        <Button className={classes.prevButton}
                            onClick={() => {
                                this.props.callbackFromParent('main');
                            }}>
                            <img src={images.src + 'letou/close.svg'} alt="" />
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }} >
                        <Paper className={classes.contentPaper}>
                            <Grid container>
                                <Grid item xs={12} className={classes.gridTitleRow}>
                                    <div className={classes.cell} ><span className={classes.titleLabel}>{this.getLabel('date-label')}</span> </div>
                                    <div className={classes.cell}  ><span className={classes.titleLabel}>{this.getLabel('time-label')}</span> </div>
                                    <div className={classes.cell}  ><span className={classes.titleLabel}>{this.getLabel('category-label')}</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} > <span className={classes.titleLabel}>{this.getLabel('amount-label')}</span> </div>
                                    <div className={classes.cell} > <span className={classes.titleLabel}>{this.getLabel('balance-label')}</span> </div>
                                </Grid>
                                <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <Divider variant="fullWidth" light={true} />
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.cell} >  <span className={classes.label}>15 Jul</span> </div>
                                    <div className={classes.cell} >  <span className={classes.label}>15:00</span> </div>
                                    <div className={classes.cell} onClick={() => {
                                        this.props.callbackFromParent('deposit-withdraw-detail');
                                    }}>   <span className={classes.link}>Deposit</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} >   <span className={classes.label}>100</span> </div>
                                    <div className={classes.cell} >   <span className={classes.label}>200</span> </div>
                                </Grid>
                                <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <Divider variant="fullWidth" light={true} />
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.cell} >  <span className={classes.label}>15 Jul</span> </div>
                                    <div className={classes.cell} >  <span className={classes.label}>15:00</span> </div>
                                    <div className={classes.cell} onClick={() => {
                                        this.props.callbackFromParent('deposit-withdraw-detail');
                                    }}>   <span className={classes.link}>Withdraw</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} >   <span className={classes.label}>100</span> </div>
                                    <div className={classes.cell} >   <span className={classes.label}>200</span> </div>
                                </Grid>
                                <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <Divider variant="fullWidth" light={true} />
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.cell} >  <span className={classes.label}>15 Jul</span> </div>
                                    <div className={classes.cell} >  <span className={classes.label}>15:00</span> </div>
                                    <div className={classes.cell} onClick={() => {
                                        this.props.callbackFromParent('deposit-withdraw-detail');
                                    }}>   <span className={classes.link}>Deposit</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} >   <span className={classes.label}>100</span> </div>
                                    <div className={classes.cell} >   <span className={classes.label}>200</span> </div>
                                </Grid>
                                <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <Divider variant="fullWidth" light={true} />
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.cell} >  <span className={classes.label}>15 Jul</span> </div>
                                    <div className={classes.cell} >  <span className={classes.label}>15:00</span> </div>
                                    <div className={classes.cell} onClick={() => {
                                        this.props.callbackFromParent('deposit-withdraw-detail');
                                    }}>   <span className={classes.link}>Withdraw</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} >   <span className={classes.label}>100</span> </div>
                                    <div className={classes.cell} >   <span className={classes.label}>200</span> </div>
                                </Grid>
                                <Grid item xs={12} style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <Divider variant="fullWidth" light={true} />
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.cell} >  <span className={classes.label}>15 Jul</span> </div>
                                    <div className={classes.cell} >  <span className={classes.label}>15:00</span> </div>
                                    <div className={classes.cell} onClick={() => {
                                        this.props.callbackFromParent('deposit-withdraw-detail');
                                    }}>   <span className={classes.link}>Withdraw</span> </div>
                                    <div className={classes.grow} />
                                    <div className={classes.cell} >   <span className={classes.label}>100</span> </div>
                                    <div className={classes.cell} >   <span className={classes.label}>200</span> </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(DepositWithdraw))));