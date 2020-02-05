/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, sendingLog } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { images } from '../../../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { config } from '../../../../../util_config';
import axios from 'axios';
import getSymbolFromCurrency from 'currency-symbol-map';
import moment from 'moment';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: 10
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
    row: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
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
    },
    paper: {
        width: '100%',
        maxWidth: 455,
        display: 'flex',
        flexDirection: 'column'
    }
});

export class BetDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transaction: null
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {
        this.getBet();
    }

    getBet() {
        const values = queryString.parse(this.props.location.search);
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let apiURL = `games/api/bets/getbet?ref_no=${values.id}`;

        axios
            .get(API_URL + apiURL, config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ item: res.data.results });
                }
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    render() {
        const { classes, user } = this.props;
        const { item } = this.state;
        return (
            <div className={classes.root}>
                {item != null && (
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <span className={classes.title}>
                                {item.category}
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
                                <img
                                    src={images.src + 'letou/close.svg'}
                                    alt=""
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.content}>
                            <Paper className={classes.paper}>
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('placed-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {moment(item.date).format(
                                            'DD/MM/YYYY HH:mm'
                                        )}
                                    </span>
                                </div>
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('id-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {item.ref_no}
                                    </span>
                                </div>
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('out-come')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {item.outcome}
                                    </span>
                                </div>
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('provider-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {item.provider}
                                    </span>
                                </div>
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('settled-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {moment(item.resolved_time).format(
                                            'DD/MM/YYYY HH:mm'
                                        )}
                                    </span>
                                </div>

                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('amount-wagered')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {getSymbolFromCurrency(user.currency)}
                                        {Number(item.amount_wagered).toFixed(2)}
                                    </span>
                                </div>
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <div className={classes.row}>
                                    <span className={classes.label}>
                                        {this.getLabel('amount-won')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {getSymbolFromCurrency(user.currency)}
                                        {Number(item.amount_won).toFixed(2)}
                                    </span>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
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
            connect(mapStateToProps, { authCheckState, sendingLog })(BetDetails)
        )
    )
);
