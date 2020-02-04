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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { config } from '../../../../../util_config';
import TableContainer from '@material-ui/core/TableContainer';
import queryString from 'query-string';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this._isMounted = true;

        this.getSportsBet();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getSportsBet() {
        if (!this._isMounted) return;

        const { user } = this.props;
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        let apiURL = `games/api/bets/getall?userid=${user.userId}`;

        let startStr = `&start=${moment()
            .startOf('month')
            .format('YYYY/MM/DD')}`;
        let endStr = `&end=${moment()
            .endOf('month')
            .format('YYYY/MM/DD')}`;

        const values = queryString.parse(this.props.location.search);

        if (values.date) {
            startStr = `&start=${moment(values.date, 'MM-YYYY')
                .startOf('month')
                .format('YYYY/MM/DD')}`;
            endStr = `&end=${moment(values.date, 'MM-YYYY')
                .endOf('month')
                .format('YYYY/MM/DD')}`;
        }

        let requestURL = API_URL + apiURL + startStr + endStr;

        axios
            .get(requestURL, config)
            .then(res => {
                if (res.status === 200) {
                    let itemArray = [];
                    console.log('items')
                    console.log(res.data.results)
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
                            if (temp1 && temp2) {
                                temp1['amount_wagered'] =
                                    temp2['amount_wagered'];
                                temp1['date'] = temp2['date'];
                                itemArray.push(temp1);
                            }
                        }
                        return null;
                    });

                    const cats = itemArray.reduce(
                        (itemSoFar, { date, ref_no, amount_won }) => {
                            let d = moment(date).format('DD-MM-YYYY');
                            if (!itemSoFar[d]) itemSoFar[d] = [];
                            itemSoFar[d].push({ date, ref_no, amount_won });
                            return itemSoFar;
                        },
                        {}
                    );

                    this.setState({ items: cats });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    render() {
        const { classes } = this.props;
        const { items } = this.state;
        const currentComponent = this;

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
                                this.props.history.push(`/p/transaction-records/analysis/`);
                            }}
                        >
                            <img src={images.src + 'letou/close.svg'} alt="" />
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        {Object.keys(items).map(function (d) {
                            return (<TableContainer
                                key={d}
                                component={Paper}
                                className={classes.contentPaper}
                            >
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>
                                                <span
                                                    className={classes.titleLabel}
                                                >
                                                    {moment(d, 'DD-MM-YYYY').format('DD MMM')}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={classes.titleLabel}
                                                >
                                                    {currentComponent.getLabel(
                                                        'sports-bet-total'
                                                    )}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={classes.titleLabel}
                                                >
                                                    200
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={classes.titleLabel}
                                                >
                                                    500
                                                </span>
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow key={Math.random()}>
                                            <StyledTableCell>
                                                <span
                                                    className={
                                                        classes.subtitleLabel
                                                    }
                                                >
                                                    {currentComponent.getLabel('placed-label')}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={
                                                        classes.subtitleLabel
                                                    }
                                                >
                                                    {currentComponent.getLabel(
                                                        'category-label'
                                                    )}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={
                                                        classes.subtitleLabel
                                                    }
                                                >
                                                    {currentComponent.getLabel('win-loss')}
                                                </span>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <span
                                                    className={
                                                        classes.subtitleLabel
                                                    }
                                                >
                                                    {currentComponent.getLabel('balance-label')}
                                                </span>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        {items[d].map(item => (
                                            <StyledTableRow key={item.ref_no}>
                                                <StyledTableCell>
                                                    <span
                                                        className={
                                                            classes.label
                                                        }
                                                    >
                                                        {moment(item.date).format('HH:mm')}
                                                    </span>
                                                </StyledTableCell>
                                                <StyledTableCell
                                                style={{cursor:'pointer'}}
                                                    onClick={() => {
                                                        currentComponent.props.history.push(`/p/transaction-records/analysis/sports-detail?id=${item.transaction_id}`);
                                                    }}>
                                                    <span
                                                        className={
                                                            classes.label
                                                        }
                                                    >
                                                        {item.ref_no}
                                                    </span>
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <span
                                                        className={
                                                            classes.label
                                                        }
                                                    >
                                                        {Number(item.amount_won).toFixed(2)}
                                                    </span>
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <span
                                                        className={
                                                            classes.label
                                                        }
                                                    >
                                                        {Number(item.amount_won).toFixed(2)}
                                                    </span>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>);
                        })
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;
    return {
        user: user
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, sendingLog })(SportsBets)
        )
    )
);
