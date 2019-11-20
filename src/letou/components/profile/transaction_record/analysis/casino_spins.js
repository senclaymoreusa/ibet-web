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
    leftTypeButton: {
        textTransform: 'capitalize',
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        color: '#cdcbcc',
        borderColor: '#e4e4e4',
    },
    rightTypeButton: {
        textTransform: 'capitalize',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e4e4e4',
        color: '#cdcbcc',

    },
    activeLeft: {
        borderRightWidth: 1,
        borderColor: '#53abe0',
        color: '#53abe0',
    },
    activeRight: {
        borderLeftWidth: 1,
        borderColor: '#53abe0',
        color: '#53abe0',
    },
    contentPaper: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
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
    loss: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#ff0000'
    },
    win: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#21e496'
    },
});



export class CasinoSpins extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 'game'
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
                        <span className={classes.title}>{this.getLabel('casino-spins')}</span>
                        <div className={classes.grow} />
                        <Button className={classes.prevButton}
                            onClick={() => {
                                this.props.callbackFromParent('main');
                            }}>
                            <img src={images.src + 'letou/close.svg'} alt="" />
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Button className={clsx({
                            [classes.leftTypeButton]: true,
                            [classes.activeLeft]: type === 'game'
                        })}
                            onClick={() => {
                                this.setState({ type: 'game' })
                            }}>{this.getLabel('by-game')}</Button>
                        <Button className={clsx({
                            [classes.rightTypeButton]: true,
                            [classes.activeRight]: type === 'day'
                        })}
                            onClick={() => {
                                this.setState({ type: 'day' })
                            }}
                        >{this.getLabel('by-day')}</Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }} >
                        <Paper className={classes.contentPaper}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('game-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('spins-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('r-t-p')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('bet-amount')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('win-amount')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.subtitleLabel}>{this.getLabel('p-l')}</span>
                                </Grid>
                            </Grid>
                            <Grid container style={{borderTop:'1px solid #ededed', marginTop:20, paddingTop:20}}>
                                <Grid item xs={2}>
                                    <span className={classes.label}>Book of dead</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>{this.getLabel('spins-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>750</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>95%</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>1,200</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.loss}>27</span>
                                </Grid>
                            </Grid>
                            <Grid container style={{borderTop:'1px solid #ededed', marginTop:20, paddingTop:20}}>
                                <Grid item xs={2}>
                                    <span className={classes.label}>Book of dead</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>{this.getLabel('spins-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>750</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>95%</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>1,200</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.win}>27</span>
                                </Grid>
                            </Grid>
                            <Grid container style={{borderTop:'1px solid #ededed', marginTop:20, paddingTop:20}}>
                                <Grid item xs={2}>
                                    <span className={classes.label}>Book of dead</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>{this.getLabel('spins-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>750</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>95%</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>1,200</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.loss}>27</span>
                                </Grid>
                            </Grid>
                            <Grid container style={{borderTop:'1px solid #ededed', marginTop:20, paddingTop:20}}>
                                <Grid item xs={2}>
                                    <span className={classes.label}>Book of dead</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>{this.getLabel('spins-label')}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>750</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>95%</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.label}>1,200</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span className={classes.loss}>27</span>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(CasinoSpins))));