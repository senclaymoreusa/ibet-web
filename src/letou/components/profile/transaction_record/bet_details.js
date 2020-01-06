/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { authCheckState, sendingLog } from '../../../../actions';
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

            filterStatus: 1,

            providers: [],
            filterProvider: '',

            items: [],
            userId: ''
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        await axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ userId: res.data.pk });

            // this.getTransactions();
        });

        this.fillDropDowns();
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
        let requestURL = `accounting/api/transactions/get_transactions?user_id=${this.state.userId}`;
        let typeStr =
            this.state.filterCategory !== -1
                ? `&type=${this.state.filterCategory}`
                : '';

        let statusStr =
            this.state.filterStatus !== -1
                ? `&status=${this.state.filterStatus}`
                : '';

        let fromStr = `&time_from=${this.state.startDate.format('l')}`;
        let toStr = `&time_to=${this.state.startDate.format('l')}`;

        axios
            .get(API_URL + requestURL + typeStr + statusStr + fromStr + toStr)
            .then(res => {
                if (res.status === 200)
                    this.setState({ items: res.data.results });
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
                                        this.getTransactions();
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
                                        this.getTransactions();
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
                                    this.getTransactions();
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
                                    this.getTransactions();
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
                                    this.getTransactions();
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
                                {/* <InputLabel id="category-label">
                                    {this.getLabel('type-label')}
                                </InputLabel> */}
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
                                        this.setState({
                                            filterCategory: event.target.value
                                        });
                                        //this.getTransactions();
                                    }}
                                >
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
                                {/* <InputLabel id="category-label">
                                    {this.getLabel('type-label')}
                                </InputLabel> */}
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
                                        this.setState({
                                            filterProvider: event.target.value
                                        });
                                        //this.getTransactions();
                                    }}
                                >
                                    {providers.map(providerItem => (
                                        <MenuItem
                                            key={providerItem.provider_id}
                                            value={providerItem.provider_id}
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
                                {/* <InputLabel id="category-label">
                                    {this.getLabel('type-label')}
                                </InputLabel> */}
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
                                        this.setState({
                                            filterStatus: event.target.value
                                        });
                                        //this.getTransactions();
                                    }}
                                >
                                    <MenuItem key={1} value={1}>
                                        {this.getLabel('settled-label')}
                                    </MenuItem>
                                    <MenuItem key={2} value={2}>
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
                                {items.map(row => (
                                    <StyledTableRow key={row.transaction_id}>
                                        <StyledTableCell>
                                            {row.transaction_id}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.arrive_time.toDateString()}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.transaction_type}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.method}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.amount}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.status}
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
                                        this.getTransactions();
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
                                        this.getTransactions();
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
                                    this.setState({
                                        filterRange: 'today'
                                    });
                                    this.setState({
                                        startDate: moment(new Date())
                                    });
                                    this.setState({
                                        endDate: moment(new Date())
                                    });
                                    this.getTransactions();
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
                                    this.getTransactions();
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
                                    this.getTransactions();
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
                                    value={filterCategory}
                                    onChange={event => {
                                        this.setState({
                                            filterCategory: event.target.value
                                        });
                                        this.getTransactions();
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
                                        this.setState({
                                            filterStatus: event.target.value
                                        });
                                        this.getTransactions();
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
                                            {row.arrive_time.toDateString()}
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
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, sendingLog })(BetDetails)
        )
    )
);
