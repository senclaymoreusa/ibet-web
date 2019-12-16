/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    rootDesktop: {
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#f2f3f5',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        color: '#212121',
        display: 'inline-flex',
        alignItems: 'center'
    },
    date: {
        fontSize: 14,
        marginRight: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingLeft: 6,
        paddingRight: 10,
        paddingTop: 6,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
    },
    filterButton: {
        height: 44,
        marginRight: 20,
        fontSize: 14,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        marginTop: 16,
        marginBottom: 8,
        textTransform: 'capitalize'
    },
    active: {
        backgroundColor: '#3c3c3c',
        color: '#fff'
    }
});

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow);

export class AccountDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(new Date()),
            endDate: moment(new Date()),
            filterRange: '',
            filterType: 'all',
            filterStatus: 'all',
            // rows:[]
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    createData(number, time, typeoftrans, content, amount, statustrans) {
        return { number, time, typeoftrans, content, amount, statustrans };
    }
      
      

    render() {
        const { classes } = this.props;
        const {
            startDate,
            endDate,
            filterRange,
            filterType,
            filterStatus,
        } = this.state;
        var today = moment(new Date());

         let rows = [
            {'D191211150423435', new Date(), 'Deposit', '24', 40.0, 'Success'},
            {'D191211150423435', new Date(), 'Deposit', '24', 40.0, 'Success'},
            {'D191211150423435', new Date(), 'Deposit', '24', 400.0, 'Failed'},
            {'D191211150423435', new Date(), 'Deposit', '24', 90.0, 'In Progress'},
            {'D191211150423435', new Date(), 'Deposit', '24', 40.0, 'Cancelled'},
            {'D191211150423435', new Date(), 'Deposit', '24', 20.0, 'Success'},
            {'D191211150423435', new Date(), 'Deposit', '24', 650.0, 'Failed'},
            {'D191211150423435', new Date(), 'Deposit', '24', 10.0, 'Success'},
            {'D191211150423435', new Date(), 'Deposit', '24', 20.0, 'In Progress'},
            {'D191211150423435', new Date(), 'Deposit', '24', 90.0, 'Success'},
           
          ];

        console.log(today);
        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <Grid container>
                        <Grid item xs={12} className={classes.row}>
                            <span
                                className={classes.label}
                                style={{ marginRight: 20 }}
                            >
                                {this.getLabel('date-label')}
                            </span>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    className={classes.date}
                                    margin="normal"
                                    id="start-date"
                                    format="MM/dd/yyyy"
                                    value={startDate}
                                    onChange={date => {
                                        this.setState({
                                            startDate: moment(date)
                                        });
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    className={classes.date}
                                    margin="normal"
                                    id="end-date"
                                    format="MM/dd/yyyy"
                                    value={endDate}
                                    onChange={date => {
                                        this.setState({
                                            endDate: moment(date)
                                        });
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <Divider
                                orientation="vertical"
                                style={{ marginRight: 20 }}
                            />
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        filterRange === 'today' ||
                                        (startDate
                                            .startOf('day')
                                            .isSame(today.startOf('day')) &&
                                            endDate
                                                .startOf('day')
                                                .isSame(today.startOf('day')))
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterRange: 'today'
                                    });
                                    this.setState({
                                        startDate: moment(new Date())
                                    });
                                    this.setState({
                                        endDate: moment(new Date())
                                    });
                                }}
                            >
                                {this.getLabel('today-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        filterRange === 'oneweek' ||
                                        (today
                                            .startOf('day')
                                            .diff(
                                                startDate.startOf('day'),
                                                'day'
                                            ) === 7 &&
                                            endDate
                                                .startOf('day')
                                                .isSame(today.startOf('day')))
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterRange: 'oneweek'
                                    });
                                    this.setState({
                                        startDate: moment(new Date()).add(
                                            'days',
                                            -7
                                        )
                                    });
                                    this.setState({
                                        endDate: moment(new Date())
                                    });
                                }}
                            >
                                {this.getLabel('one-week')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        filterRange === 'onemonth' ||
                                        (today
                                            .startOf('day')
                                            .diff(
                                                startDate.startOf('day'),
                                                'day'
                                            ) === 30 &&
                                            endDate
                                                .startOf('day')
                                                .isSame(today.startOf('day')))
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterRange: 'oneweek'
                                    });
                                    this.setState({
                                        startDate: moment(new Date()).add(
                                            'days',
                                            -30
                                        )
                                    });
                                    this.setState({
                                        endDate: moment(new Date())
                                    });
                                }}
                            >
                                {this.getLabel('one-month')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span
                                className={classes.label}
                                style={{ marginRight: 20 }}
                            >
                                {this.getLabel('types-label')}
                            </span>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'all'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'all'
                                    });
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'deposit'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'deposit'
                                    });
                                }}
                            >
                                {this.getLabel('deposit-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'withdraw'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'withdraw'
                                    });
                                }}
                            >
                                {this.getLabel('withdraw-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'transfer'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'transfer'
                                    });
                                }}
                            >
                                {this.getLabel('transfer-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'bonus'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'bonus'
                                    });
                                }}
                            >
                                {this.getLabel('bonus-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span
                                className={classes.label}
                                style={{ marginRight: 20 }}
                            >
                                {this.getLabel('status-label')}
                            </span>

                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 'all'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterStatus: 'all'
                                    });
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 'success'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterStatus: 'success'
                                    });
                                }}
                            >
                                {this.getLabel('success-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        filterStatus === 'cancelled'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterStatus: 'cancelled'
                                    });
                                }}
                            >
                                {this.getLabel('cancelled-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 'failed'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterStatus: 'failed'
                                    });
                                }}
                            >
                                {this.getLabel('failed-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        filterStatus === 'inprogress'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterStatus: 'inprogress'
                                    });
                                }}
                            >
                                {this.getLabel('inprogress-label')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        {this.getLabel('transaction-number')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('time-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('transaction-type')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('content-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('status-label')}
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <StyledTableRow key={row.number}>
                                        <StyledTableCell>
                                            {row.number}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.time}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.typeoftrans}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.content}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.amount}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.statustrans}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div className={classes.rootMobile}></div>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(AccountDetails))
    )
);
