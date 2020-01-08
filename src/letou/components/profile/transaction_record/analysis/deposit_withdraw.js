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
    paper: {
        overflowX: 'scroll',
        width: '100%'
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

export class DepositWithdraw extends Component {
    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
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
        const { paperWidth } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('deposit-withdraw')}
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
                        <Paper
                            className={classes.paper}
                            style={{ maxWidth: paperWidth }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>
                                            <span
                                                className={classes.titleLabel}
                                            >
                                                {this.getLabel('date-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={classes.titleLabel}
                                            >
                                                {this.getLabel('time-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={classes.titleLabel}
                                            >
                                                {this.getLabel(
                                                    'category-label'
                                                )}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={classes.titleLabel}
                                            >
                                                {this.getLabel('amount-label')}
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span
                                                className={classes.titleLabel}
                                            >
                                                {this.getLabel('balance-label')}
                                            </span>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow
                                        key={Math.random()}
                                        onClick={() => {
                                            this.props.callbackFromParent(
                                                'deposit-withdraw-detail'
                                            );
                                        }}
                                    >
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                15 Jul
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                15:00
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                Deposit
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥200
                                            </span>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <span className={classes.label}>
                                                ¥1,425
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
        injectIntl(
            connect(mapStateToProps, { authCheckState })(DepositWithdraw)
        )
    )
);
