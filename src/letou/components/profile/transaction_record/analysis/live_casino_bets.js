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
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
    head: {
        color: theme.palette.common.white,
        padding: 4,
        whiteSpace: 'nowrap'
    },
    body: {
        fontSize: 14,
        whiteSpace: 'nowrap',
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 8,
        paddingTop: 8
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
    grow: {
        flexGrow: 1
    },
    title: {
        marginLeft: 20,
        marginTop: 4,
        [theme.breakpoints.up('md')]: {
            marginTop: 25
        },
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black'
    },
    content: {
        width: '100%',
        marginTop: 10,
        [theme.breakpoints.down('md')]: {
            padding: 10
        }
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
        borderColor: '#e4e4e4'
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
        color: '#cdcbcc'
    },
    activeLeft: {
        borderRightWidth: 1,
        borderColor: '#53abe0',
        color: '#53abe0'
    },
    activeRight: {
        borderLeftWidth: 1,
        borderColor: '#53abe0',
        color: '#53abe0'
    },
    paper: {
        overflowX: 'scroll',
        width: '100%'
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
    by: {
        marginTop: 20,
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    }
});

export class LiveCasinoBets extends Component {
    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            type: 'game',
            paperWidth: 0
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ paperWidth: window.innerWidth - 20 });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { type, paperWidth } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('live-casino-bets')}
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
                    <Grid item xs={12} className={classes.by}>
                        <Button
                            className={clsx({
                                [classes.leftTypeButton]: true,
                                [classes.activeLeft]: type === 'game'
                            })}
                            onClick={() => {
                                this.setState({ type: 'game' });
                            }}
                        >
                            {this.getLabel('by-game')}
                        </Button>
                        <Button
                            className={clsx({
                                [classes.rightTypeButton]: true,
                                [classes.activeRight]: type === 'day'
                            })}
                            onClick={() => {
                                this.setState({ type: 'day' });
                            }}
                        >
                            {this.getLabel('by-day')}
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <Paper
                            className={classes.paper}
                            style={{ maxWidth: paperWidth }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('game-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('spins-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('r-t-p')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('bet-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('win-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('p-l')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('biggest-win')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={
                                                    classes.subtitleLabel
                                                }
                                            >
                                                {this.getLabel('bonuses-label')}
                                            </span>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow key={Math.random()}>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                Book of dead
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                750
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                95%
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,5000
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,425
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥75
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥300
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥3
                                            </span>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key={Math.random()}>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                Book of dead
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                750
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                95%
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,5000
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,425
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥75
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥300
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥3
                                            </span>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key={Math.random()}>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                Book of dead
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                750
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                95%
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,5000
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,425
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥75
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥300
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥3
                                            </span>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key={Math.random()}>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                Book of dead
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                750
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                95%
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,5000
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,425
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥75
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥300
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.loss}>
                                                -¥3
                                            </span>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
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
    withRouter(
        injectIntl(connect(mapStateToProps, { authCheckState })(LiveCasinoBets))
    )
);
