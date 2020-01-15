/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {
    authCheckState,
    sendingLog,
    AUTH_RESULT_FAIL
} from '../../../../actions';
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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { config } from '../../../../util_config';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    rootDesktop: {
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
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
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
    mobileFilterButton: {
        height: 32,
        fontSize: 14,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        marginTop: 16,
        marginBottom: 8,
        textTransform: 'capitalize',
        '&:focus': {
            backgroundColor: '#f28f22',
            color: '#fff'
        }
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000'
    },
    titleRow: {
        borderBottom: '1px solid #4DA9DF',
        paddingBottom: 12
    },
    active: {
        backgroundColor: '#3c3c3c',
        color: '#fff'
    },
    mobileActive: {
        backgroundColor: '#f28f22',
        color: '#fff'
    },
    formControl: {
        marginLeft: 20,
        marginRight: 20,
        width: '100%'
    }
});

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#3c3c3c',
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
            filterType: -1,
            filterStatus: -1,
            items: [],
            userId: '',
            loading: false
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                sendingLog('authentication failure!!!');
            } else {
                this.getTransactions();
            }
        });
    }

    getTransactions() {
        const { user } = this.props;

        let requestURL = `accounting/api/transactions/get_transactions?user_id=${user.userId}`;
        let typeStr =
            this.state.filterType !== -1
                ? `&type=${this.state.filterType}`
                : '';

        let statusStr =
            this.state.filterStatus !== -1
                ? `&status=${this.state.filterStatus}`
                : '';

        let fromStr = `&time_from=${this.state.startDate.format('l')}`;
        let toStr = `&time_to=${this.state.endDate.format('l')}`;

        axios
            .get(API_URL + requestURL + typeStr + statusStr + fromStr + toStr)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ items: res.data.results });
                } else {
                    this.setState({ items: [] });
                }
            })
            .catch(err => {
                this.setState({ items: [] });
                sendingLog(err);
            });
    }

    render() {
        const { classes } = this.props;
        const {
            startDate,
            endDate,
            filterRange,
            filterType,
            filterStatus,
            items
        } = this.state;
        var today = moment(new Date());

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
                                    autoOk={true}
                                    disableToolbar
                                    variant="inline"
                                    className={classes.date}
                                    maxDate={endDate}
                                    margin="normal"
                                    id="start-date"
                                    format="MM/dd/yyyy"
                                    value={startDate}
                                    onChange={date => {
                                        this.setState(
                                            {
                                                startDate: moment(date)
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <KeyboardDatePicker
                                    maxDate={new Date()}
                                    minDate={startDate}
                                    autoOk={true}
                                    disableToolbar
                                    variant="inline"
                                    className={classes.date}
                                    margin="normal"
                                    id="end-date"
                                    format="MM/dd/yyyy"
                                    value={endDate}
                                    onChange={date => {
                                        this.setState(
                                            {
                                                endDate: moment(date)
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
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
                                    this.setState(
                                        {
                                            filterRange: 'today',
                                            startDate: moment(new Date()),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
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
                                    this.setState(
                                        {
                                            filterRange: 'oneweek',
                                            startDate: moment(new Date()).add(
                                                'days',
                                                -7
                                            ),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
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
                                    this.setState(
                                        {
                                            filterRange: 'onemonth',
                                            startDate: moment(new Date()).add(
                                                -30,
                                                'days'
                                            ),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
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
                                    [classes.active]: filterType === -1
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: -1
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 0
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 0
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('deposit-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 1
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 1
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('withdraw-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 2
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 2
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('transfer-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 3
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 3
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('bonus-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 4
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 4
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('adjustment-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 5
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterType: 5
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('commission-label')}
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
                                    [classes.active]: filterStatus === -1
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterStatus: -1
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 0
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterStatus: 0
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('success-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 1
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterStatus: 1
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('pending-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 2
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterStatus: 2
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('fail-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterStatus === 3
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterStatus: 3
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('cancelled-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <Paper style={{ marginTop: 20 }}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>
                                                {this.getLabel(
                                                    'transaction-number'
                                                )}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {this.getLabel('time-label')}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {this.getLabel(
                                                    'transaction-type'
                                                )}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {this.getLabel('channel-label')}
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
                                        {items.map(row => (
                                            <StyledTableRow
                                                key={row.transaction_id}
                                            >
                                                <StyledTableCell>
                                                    {row.transaction_id}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {moment(
                                                        row.request_time
                                                    ).format('llll')}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {row.transaction_type}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {row.channel}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {row.amount}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {row.provider}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                            className={classes.row}
                            style={{ paddingTop: 10, paddingLeft: 20 }}
                        >
                            <span className={classes.label}>
                                {this.getLabel('start-date')}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className={classes.row}
                            style={{ paddingTop: 10 }}
                        >
                            <span className={classes.label}>
                                {this.getLabel('end-date')}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            style={{ paddingLeft: 20 }}
                        >
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
                                        this.setState(
                                            {
                                                startDate: moment(date)
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
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
                                        this.setState(
                                            {
                                                endDate: moment(date)
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            style={{ justifyContent: 'center' }}
                        >
                            <Button
                                className={clsx({
                                    [classes.mobileFilterButton]: true,
                                    [classes.mobileActive]:
                                        filterRange === 'today' ||
                                        (startDate
                                            .startOf('day')
                                            .isSame(today.startOf('day')) &&
                                            endDate
                                                .startOf('day')
                                                .isSame(today.startOf('day')))
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            filterRange: 'today',
                                            startDate: moment(new Date()),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('today-label')}
                            </Button>
                            <Button
                                className={clsx({
                                    [classes.mobileFilterButton]: true,
                                    [classes.mobileActive]:
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
                                    this.setState(
                                        {
                                            filterRange: 'oneweek',
                                            startDate: moment(new Date()).add(
                                                'days',
                                                -7
                                            ),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('one-week')}
                            </Button>
                            <Button
                                className={clsx({
                                    [classes.mobileFilterButton]: true,
                                    [classes.mobileActive]:
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
                                    this.setState(
                                        {
                                            filterRange: 'onemonth',
                                            startDate: moment(new Date()).add(
                                                'days',
                                                -30
                                            ),
                                            endDate: moment(new Date())
                                        },
                                        () => {
                                            this.getTransactions();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('one-month')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{
                            backgroundColor: '#fff',
                            paddingBottom: 10,
                            paddingTop: 10
                        }}
                    >
                        <Grid item xs={12} className={classes.row}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">
                                    {this.getLabel('type-label')}
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterType}
                                    onChange={event => {
                                        this.setState(
                                            {
                                                filterType: event.target.value
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                >
                                    <MenuItem value={-1}>
                                        {this.getLabel('all-label')}
                                    </MenuItem>
                                    <MenuItem value={0}>
                                        {this.getLabel('deposit-label')}
                                    </MenuItem>
                                    <MenuItem value={1}>
                                        {this.getLabel('withdraw-label')}
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        {this.getLabel('transfer-label')}
                                    </MenuItem>
                                    <MenuItem value={3}>
                                        {this.getLabel('bonus-label')}
                                    </MenuItem>
                                    <MenuItem value={4}>
                                        {this.getLabel('adjustment-label')}
                                    </MenuItem>
                                    <MenuItem value={5}>
                                        {this.getLabel('commission-label')}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            style={{ marginTop: 20 }}
                        >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">
                                    {this.getLabel('status-label')}
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterStatus}
                                    onChange={event => {
                                        this.setState(
                                            {
                                                filterStatus: event.target.value
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                >
                                    <MenuItem value={-1}>
                                        {this.getLabel('all-label')}
                                    </MenuItem>
                                    <MenuItem value={0}>
                                        {this.getLabel('success-label')}
                                    </MenuItem>
                                    <MenuItem value={1}>
                                        {this.getLabel('pending-label')}
                                    </MenuItem>
                                    <MenuItem value={2}>
                                        {this.getLabel('fail-label')}
                                    </MenuItem>
                                    <MenuItem value={3}>
                                        {this.getLabel('cancelled-label')}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Paper style={{ marginTop: 20 }}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        {this.getLabel('time-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('transaction-type')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-label')}
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map(row => (
                                    <StyledTableRow key={row.transaction_id}>
                                        <StyledTableCell>
                                            {moment(row.request_time).format(
                                                'llll'
                                            )}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.transaction_type}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.amount}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token, user } = state.auth;

    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, {
                authCheckState,
                sendingLog,
                AUTH_RESULT_FAIL
            })(AccountDetails)
        )
    )
);
