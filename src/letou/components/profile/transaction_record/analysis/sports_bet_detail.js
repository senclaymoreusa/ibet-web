/* eslint-disable react/prop-types */
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

const styles = theme => ({
    root: {
        width: '100%'
    },
    titleRow: {
        [theme.breakpoints.up('md')]: {
            height: 70
        },
        backgroundColor: 'rgba(228, 228, 228, 0.25)',
        display: 'flex',
        flexDirection: 'row'
    },
    grow: {
        flexGrow: 1
    },
    title: {
        marginLeft: 20,
        marginTop: 4,
        [theme.breakpoints.up('md')]: {
            marginTop: 25
        },
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black'
    },
    content: {
        marginTop: 15,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 10,
            paddingRight: 10
        }
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'right'
    },
    link: {
        cursor: 'pointer',
        color: 'blue',
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal'
    },
    label: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#bebebe',
        marginTop: 10,
        marginBottom: 5
    },
    value: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        marginTop: 10,
        marginBottom: 5
    },
    cell: {
        minWidth: 100
    }
});

export class SportsBetDetails extends Component {
    constructor(props) {
        super(props);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            Single NBA Kinick vs Celtics
                        </span>
                        <div className={classes.grow} />
                        <Button
                            className={classes.prevButton}
                            onClick={() => {
                                this.props.callbackFromParent('main');
                            }}
                        >
                            <img src={images.src + 'letou/close.svg'} alt="" />
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <Paper>
                            <Grid container>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.leftColumn}
                                >
                                    <span className={classes.label}>
                                        {this.getLabel('placed-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('id-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('type-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('event-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('line-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('settled-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('result-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('stake-label')}
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.label}>
                                        {this.getLabel('return-label')}
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.rightColumn}
                                >
                                    <span className={classes.value}>
                                        7/5/19 13:00
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>
                                        1234-ascd
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>
                                        Single
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>
                                        Knicks vs Celtics
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>
                                        Knicks 2.0
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>
                                        7/5/19 17:00
                                    </span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>Won</span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>50</span>
                                    <Divider variant="fullWidth" light={true} />
                                    <span className={classes.value}>100</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(connect(mapStateToProps, { authCheckState })(SportsBetDetails))
);
