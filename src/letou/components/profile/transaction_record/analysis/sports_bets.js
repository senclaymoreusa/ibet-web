/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { images } from '../../../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#f28f22',
        color: theme.palette.common.white,
        padding: 10
    },
    body: {
        fontSize: 14,
        padding: 10
    }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow);

const styles = theme => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            paddingBottom: 70
        }
    },
    titleRow: {
        [theme.breakpoints.up('md')]: {
            height: 70
        },
        backgroundColor: 'rgba(228, 228, 228, 0.25)',
        display: 'flex',
        flexDirection: 'row'
    },
    contentRow: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 10,
            paddingRight: 10
        }
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
    contentPaper: {
        marginTop: 15
    },
    gridTitleRow: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f28f22',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    },
    gridRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    link: {
        cursor: 'pointer',
        color: 'blue',
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal'
    },
    titleLabel: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#fff'
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
    }
});

export class SportsBets extends Component {
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

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getSportsBet() {
        const { classes } = this.props;

        return (
            <TableContainer component={Paper} className={classes.contentPaper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <span className={classes.titleLabel}>
                                    15 Jul
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.titleLabel}>
                                    {this.getLabel('sports-bet-total')}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.titleLabel}>200</span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.titleLabel}>500</span>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={Math.random()}>
                            <StyledTableCell>
                                <span className={classes.subtitleLabel}>
                                    {this.getLabel('placed-label')}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.subtitleLabel}>
                                    {this.getLabel('category-label')}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.subtitleLabel}>
                                    {this.getLabel('win-loss')}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.subtitleLabel}>
                                    {this.getLabel('balance-label')}
                                </span>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow
                            key={Math.random()}
                            onClick={() => {
                                this.props.callbackFromParent('sports-detail');
                            }}
                        >
                            <StyledTableCell>
                                <span className={classes.label}>15:00</span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.link}>
                                    Single NBA Knicks vs Celtics
                                </span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.label}>100</span>
                            </StyledTableCell>
                            <StyledTableCell>
                                <span className={classes.label}>200</span>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('sports-bets')}
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
                    <Grid item xs={12} className={classes.contentRow}>
                        {this.getSportsBet()}
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        {this.getSportsBet()}
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        {this.getSportsBet()}
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        {this.getSportsBet()}
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
    injectIntl(connect(mapStateToProps, { authCheckState })(SportsBets))
);
