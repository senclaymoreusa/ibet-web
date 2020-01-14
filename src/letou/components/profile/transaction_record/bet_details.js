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
import InputBase from '@material-ui/core/InputBase';

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
        color: '#fff',
        '&:hover': {
            color: '#000'
        }
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

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 2px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        display: 'flex',
        flexDirection: 'row',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}))(InputBase);

export class BetDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(new Date()),
            endDate: moment(new Date()),
            filterRange: '',

            categories: [],
            filterCategory: -1,

            filterStatus: -1,

            providers: [],
            filterProvider: -1,

            items: [],
            userId: ''
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
                this.fillDropDowns();
            }
        });
    }

    fillDropDowns() {
        axios
            .get(API_URL + 'games/api/bets/getprovandcats', config)
            .then(res => {
                this.setState({
                    providers: res.data.providers.sort((a, b) =>
                        a.provider_name > b.provider_name ? 1 : -1
                    )
                });
                this.setState({
                    categories: res.data.categories.sort((a, b) =>
                        a.name > b.name ? 1 : -1
                    )
                });
            });
    }

    getTransactions() {
        const { user } = this.props;

        let apiURL = `games/api/bets/getall?userid=${user.userId}`;

        let statusStr =
            this.state.filterStatus !== -1
                ? `&status=${this.state.filterStatus}`
                : '';

        let providerStr =
            this.state.filterProvider !== -1
                ? `&provider=${this.state.filterProvider}`
                : '';

        let categoryStr =
            this.state.filterCategory !== -1
                ? `&category=${this.state.filterCategory}`
                : '';

        let startStr = `&start=${this.state.startDate.format('YYYY/MM/DD')}`;
        let endStr = `&end=${this.state.endDate.format('YYYY/MM/DD')}`;

        let requestURL =
            API_URL +
            apiURL +
            statusStr +
            providerStr +
            categoryStr +
            startStr +
            endStr;

        axios
            .get(requestURL, config)
            .then(res => {
                if (res.status === 200) {
                    let itemArray = [];
                    Object.keys(res.data.results).map(function (refNum) {
                        let result = res.data.results[refNum];

                        if (result.length === 1) {
                            itemArray.push(result[0]);
                        } else if (result.length > 1) {
                            let temp1 = result.filter(r => {
                                return r.outcome != null;
                            })[0];

                            let temp2 = result.filter(r => {
                                return r.outcome == null;
                            })[0];

                            temp1['amount_wagered'] = temp2['amount_wagered'];
                            temp1['date'] = temp2['date'];

                            itemArray.push(temp1);
                        }
                    });
                    this.setState({ items: itemArray });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    render() {
        const { classes } = this.props;
        const {
            startDate,
            endDate,
            filterRange,
            filterCategory,
            filterStatus,
            filterProvider,
            items,
            categories,
            providers
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
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            style={{ paddingTop: 10, paddingBottom: 20 }}
                        >
                            <span
                                className={classes.label}
                                style={{ marginRight: 20 }}
                            >
                                {this.getLabel('category-label')}
                            </span>
                            <FormControl className={classes.formControl}>
                                <Select
                                    input={
                                        <BootstrapInput
                                            name="category"
                                            id="category-select"
                                        />
                                    }
                                    id="category-select"
                                    value={filterCategory}
                                    onChange={event => {
                                        this.setState(
                                            {
                                                filterCategory:
                                                    event.target.value
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                >
                                    <MenuItem key={-1} value={-1}>
                                        <span className={classes.selectLabel}>
                                            {this.getLabel('all-label')}
                                        </span>
                                    </MenuItem>
                                    {categories.map(categoryItem => (
                                        <MenuItem
                                            key={categoryItem.category_id}
                                            value={categoryItem.category_id}
                                        >
                                            {categoryItem.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <span
                                className={classes.label}
                                style={{ marginRight: 20, marginLeft: 20 }}
                            >
                                {this.getLabel('provider-label')}
                            </span>
                            <FormControl className={classes.formControl}>
                                <Select
                                    input={
                                        <BootstrapInput
                                            name="provider"
                                            id="provider-select"
                                        />
                                    }
                                    id="provider-select"
                                    value={filterProvider}
                                    onChange={event => {
                                        this.setState(
                                            {
                                                filterProvider:
                                                    event.target.value
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                >
                                    <MenuItem key={-1} value={-1}>
                                        <span className={classes.selectLabel}>
                                            {this.getLabel('all-label')}
                                        </span>
                                    </MenuItem>
                                    {providers.map(providerItem => (
                                        <MenuItem
                                            key={providerItem.id}
                                            value={providerItem.id}
                                        >
                                            {providerItem.provider_name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <span
                                className={classes.label}
                                style={{ marginRight: 20, marginLeft: 20 }}
                            >
                                {this.getLabel('status-label')}
                            </span>
                            <FormControl className={classes.formControl}>
                                <Select
                                    input={
                                        <BootstrapInput
                                            name="status"
                                            id="status-select"
                                        />
                                    }
                                    id="status-select"
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
                                    <MenuItem key={-1} value={-1}>
                                        <span className={classes.selectLabel}>
                                            {this.getLabel('all-label')}
                                        </span>
                                    </MenuItem>
                                    <MenuItem key={'close'} value={'close'}>
                                        {this.getLabel('settled-label')}
                                    </MenuItem>
                                    <MenuItem key={'open'} value={'open'}>
                                        {this.getLabel('not-settled')}
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
                                        {this.getLabel('transaction-number')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('time-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('category-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('provider-label')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('out-come')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-wagered')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-won')}
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map(row => (
                                    <StyledTableRow key={row.ref_no}>
                                        <StyledTableCell>
                                            {row.ref_no}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {moment(row.date).format('llll')}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.category}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.provider}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.outcome}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.amount_wagered}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.amount_won}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
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
                                    autoOk={true}
                                    disableToolbar
                                    maxDate={endDate}
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
                                    input={
                                        <BootstrapInput
                                            name="category"
                                            id="category-select"
                                        />
                                    }
                                    id="category-select"
                                    value={filterCategory}
                                    onChange={event => {
                                        this.setState(
                                            {
                                                filterCategory:
                                                    event.target.value
                                            },
                                            () => {
                                                this.getTransactions();
                                            }
                                        );
                                    }}
                                >
                                    <MenuItem key={-1} value={-1}>
                                        <span className={classes.selectLabel}>
                                            {this.getLabel('all-label')}
                                        </span>
                                    </MenuItem>
                                    {categories.map(categoryItem => (
                                        <MenuItem
                                            key={categoryItem.category_id}
                                            value={categoryItem.category_id}
                                        >
                                            {categoryItem.name}
                                        </MenuItem>
                                    ))}
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
                                    input={
                                        <BootstrapInput
                                            name="status"
                                            id="status-select"
                                        />
                                    }
                                    id="status-select"
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
                                    <MenuItem key={-1} value={-1}>
                                        <span className={classes.selectLabel}>
                                            {this.getLabel('all-label')}
                                        </span>
                                    </MenuItem>
                                    <MenuItem key={'close'} value={'close'}>
                                        {this.getLabel('settled-label')}
                                    </MenuItem>
                                    <MenuItem key={'open'} value={'open'}>
                                        {this.getLabel('not-settled')}
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
                                        {this.getLabel('out-come')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-wagered')}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {this.getLabel('amount-won')}
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map(row => (
                                    <StyledTableRow key={row.ref_no}>
                                        <StyledTableCell>
                                            {moment(row.date).format('llll')}
                                        </StyledTableCell>
                                       <StyledTableCell>
                                            {row.outcome}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.amount_wagered}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.amount_won}
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
            })(BetDetails)
        )
    )
);
