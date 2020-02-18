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
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: 10
        }
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
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
    paper: {
        width: '100%',
        maxWidth: 455,
        display: 'flex',
        flexDirection: 'column',
    }

});

export class DepositWithdrawDetails extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            item: null
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {
        this.getTransaction();
    }

    getTransaction() {
        const values = queryString.parse(this.props.location.search);
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let apiURL = `accounting/api/transactions/get_transaction_by_id?transaction_id=${values.id}`;

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
        const { classes } = this.props;
        const { item } = this.state;
        return (
            <div className={classes.root}>
                {item != null && <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {item.transaction_type} - {moment(item.request_time).format('DD/MM/YYYY HH:mm')}
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
                        <Paper className={classes.paper}>
                            <div className={classes.row}>
                                <span className={classes.label}>
                                    {this.getLabel('date-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.value}>
                                    {moment(item.request_time).format('DD/MM/YYYY HH:mm')}
                                </span>
                            </div>
                            <Divider variant="fullWidth" light={true} style={{marginLeft:10, marginRight:10}}/>
                            <div className={classes.row}>
                                <span className={classes.label}>
                                    {this.getLabel('id-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.value}>
                                    {item.transaction_id}
                                </span>
                            </div>
                            <Divider variant="fullWidth" light={true}  style={{marginLeft:10, marginRight:10}}/>
                            <div className={classes.row}>
                                <span className={classes.label}>
                                    {this.getLabel('type-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.value}>
                                    {item.channel}
                                </span>
                            </div>
                            <Divider variant="fullWidth" light={true}  style={{marginLeft:10, marginRight:10}}/>
                            <div className={classes.row}>
                                <span className={classes.label}>
                                    {this.getLabel('amount-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.value}>
                                    {getSymbolFromCurrency(
                                        item.currency
                                    )}
                                    {Number(item.amount).toFixed(
                                        2
                                    )}
                                </span>
                            </div>
                            <Divider variant="fullWidth" light={true}  style={{marginLeft:10, marginRight:10}}/>
                            <div className={classes.row}>
                                <span className={classes.label}>
                                    {this.getLabel('balance-label')}
                                </span>
                                <div className={classes.grow} />
                                <span className={classes.value}>
                                    {getSymbolFromCurrency(
                                        item.currency
                                    )}
                                    {Number(item.balance).toFixed(
                                        2
                                    )}
                                </span>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                }
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
            connect(mapStateToProps, { authCheckState, sendingLog })(DepositWithdrawDetails)
        )
    )
);
