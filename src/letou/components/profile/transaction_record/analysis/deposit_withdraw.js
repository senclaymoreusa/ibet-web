/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, sendingLog } from '../../../../../actions';
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
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map';
import { config } from '../../../../../util_config';
import axios from 'axios';
import queryString from 'query-string';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
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
    },
    typeLabel: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#0091ff'
    },
    tableRow: {
        cursor: 'pointer'
    }
});

export class DepositWithdraw extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            paperWidth: 0,
            items: []
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this._isMounted = true;

        this.getTransactions();
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ paperWidth: window.innerWidth - 20 });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getTransactions() {
        if (!this._isMounted) return;

        const { user } = this.props;
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let requestURL = `accounting/api/transactions/get_transactions?user_id=${user.userId}`;

        let startStr = `&time_from=${moment()
            .startOf('month')
            .format('l')}`;
        let endStr = `&time_to=${moment()
            .endOf('month')
            .format('l')}`;

        const values = queryString.parse(this.props.location.search);

        if (values.date) {
            startStr = `&time_from=${moment(values.date, 'MM-YYYY').startOf('month').format('l')}`;
            endStr = `&time_to=${moment(values.date, 'MM-YYYY').endOf('month').format('l')}`;
        }

        axios
            .get(API_URL + requestURL + startStr + endStr)
            .then(res => {
                if (res.status === 200) {
                   this.setState({ items: res.data.results.filter(item => item.transaction_type.toLowerCase() == 'withdrawal' || item.transaction_type.toLowerCase() == 'deposit') });
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
        const { classes, user } = this.props;
        const { paperWidth, items } = this.state;

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
                                this.props.history.push(
                                    `/p/transaction-records/analysis/`
                                );
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
                                    {items.map(row => (
                                        <TableRow
                                            key={row.transaction_id}
                                            onClick={() => {
                                                this.props.history.push(`/p/transaction-records/analysis/transaction-detail?id=${row.transaction_id}`);
                                            }}
                                            className={classes.tableRow}
                                        >
                                            <StyledTableCell>
                                                <span className={classes.label}>
                                                    {moment(
                                                        row.request_time
                                                    ).format('DD MMM')}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span className={classes.label}>
                                                    {moment(
                                                        row.request_time
                                                    ).format('HH:mm')}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={
                                                        classes.typeLabel
                                                    }
                                                >
                                                    {row.transaction_type}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span className={classes.label}>
                                                    {getSymbolFromCurrency(
                                                        user.currency
                                                    )}
                                                    {Number(row.amount).toFixed(
                                                        2
                                                    )}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span className={classes.label}>
                                                {getSymbolFromCurrency(
                                                        user.currency
                                                    )}
                                                    {Number(row.balance).toFixed(
                                                        2
                                                    )}
                                                </span>
                                            </StyledTableCell>
                                        </TableRow>
                                    ))}
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
    const { token, user } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user
    };
};
export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, sendingLog })(
                DepositWithdraw
            )
        )
    )
);
