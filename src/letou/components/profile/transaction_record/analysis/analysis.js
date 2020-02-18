/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    sendingLog
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Line } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map'
import CircularProgress from '@material-ui/core/CircularProgress';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            paddingBottom: 70
        }
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            maxWidth: 1400,
            backgroundColor: '#fff'
        }
    },
    desktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    mobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    grow: {
        flexGrow: 1
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    progress: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: 20,
        marginLeft: -20,
        zIndex: 2
    },
    prevLabel: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        marginLeft: 8
    },
    currentLabel: {
        fontSize: 16,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: '#212121',
        marginTop: 10
    },
    nextLabel: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        marginRight: 8
    },
    barRow: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            marginBottom: 20
        }
    },
    currentCell: {
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            height: 80,
            paddingTop: 20
        }
    },
    prevCell: {
        paddingLeft: 10,
        paddingTop: 4,
        alignItems: 'left',
        [theme.breakpoints.up('md')]: {
            height: 80,
            paddingTop: 20
        }
    },
    nextCell: {
        paddingRight: 10,
        paddingTop: 4,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            height: 80,
            paddingTop: 20
        }
    },
    chart: {
        height: 20,
        [theme.breakpoints.down('md')]: {
            height: 100
        }
    },
    titleButton: {
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    chartPane: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 50,
            paddingRight: 50
        },
        paddingTop: 40
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30
    },
    titleLabel: {
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
            marginBottom: 10
        },
        fontSize: 22,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.79,
        color: '#212121',
        display: 'inline'
    },
    buttonsCell: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 20,
            paddingRight: 20
        }
    },
    titleValue: {
        fontSize: 22,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.79,
        textAlign: 'center',
        color: '#212121',
        display: 'inline',
        marginLeft: 4
    },
    button: {
        borderRadius: 6,
        boxShadow: '5px 5px 9px 3px rgba(203, 203, 203, 0.5)',
        backgroundColor: '#ffffff',
        textTransform: 'capitalize',
        marginBottom: 8,
        paddingTop: 4,
        paddingBottom: 4,
        [theme.breakpoints.up('md')]: {
            height: 75,
            marginBottom: 15,
            padding: 14
        }
    },
    buttonText: {
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        },
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.7,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.85)',
        marginLeft: 10
    },
    betValue: {
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        },
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.7,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.85)',
    },
    negativeValue: {
        color: '#ff0000'
    },
    positiveValue: {
        color: '#6dd400'
    },
    value: {
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        },
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.7,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.85)',
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
    }
});

export class Analysis extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment(new Date()),
            chartData: [],
            chartLabels: [],
            type: 'turnover',
            loading: false,

            turnover: 0,
            sportBets: 0,
            casinoSpins: 0,
            liveCasinoBets: 0,
            deposit: 0,
            withdraw: 0
        };

        this.setChartData = this.setChartData.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.authCheckState().then(async res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                if (this._isMounted) {
                    this.setChartData();
                }
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    setChartData() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        let username = 'kevin';
        let startTime = this.state.currentDate.startOf('month').format('YYYY-MM-DD');
        let endTime = this.state.currentDate.endOf('month').format('YYYY-MM-DD');

        let apiURL = `system/api/history-analysis?username=${username}&type=${this.state.type}&start_time=${startTime}&end_time=${endTime}`;

        this.setState({ loading: true });

        axios
            .get(API_URL + apiURL, config)
            .then(res => {
                let dataList = res.data.data.sort((a, b) => moment(a.data).isAfter(b.data)).map(({ bet_amount }) => parseInt(bet_amount));
                let labelList = res.data.data.sort((a, b) => moment(a.data).isAfter(b.data)).map(({ data }) => moment(data).format('D/MM'));

                this.setState({
                    loading: false,
                    sportBets: res.data.overall_bet_sport,
                    casinoSpins: res.data.overall_bet_games,
                    liveCasinoBets: res.data.overall_bet_casino,
                    deposit: res.data.overall_deposit,
                    withdraw: res.data.overall_withdraw,
                    turnover: res.data.overall_turnover,
                    chartData: dataList,
                    chartLabels: labelList
                });
            })
            .catch(err => {
                sendingLog(err);
                this.setState({
                    loading: false
                });
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes, user } = this.props;
        const {
            type,
            loading,
            currentDate,
            turnover,
            sportBets,
            casinoSpins,
            liveCasinoBets,
            deposit,
            withdraw } = this.state;

        const prevButton = (
            <Button
                className={classes.titleButton}
                onClick={() => {
                    this.setState(
                        {
                            currentDate: moment(currentDate).startOf('month').subtract(1, 'months')
                        },
                        () => {
                            this.setChartData();
                        }
                    );
                }}
            >
                <img
                    src={images.src + 'letou/prev_step.svg'}
                    alt=""
                    height="24"
                />
                <span className={classes.prevLabel}>
                    {moment(currentDate).startOf('month').subtract(1, 'month').format('MMM')}
                </span>
            </Button>
        );

        const nextButton = (
            <Button
                className={classes.titleButton}
                onClick={() => {
                    this.setState(
                        {
                            currentDate: moment(currentDate).startOf('month').add(1, 'months')
                        },
                        () => {
                            this.setChartData();
                        }
                    );
                }}
                disabled={
                    currentDate.month() === moment().month() &&
                    currentDate.year() === moment().year()
                }
            >
                <span className={classes.nextLabel}>
                    {currentDate.month() === moment().month() &&
                        currentDate.year() === moment().year()
                        ? this.getLabel('life-time')
                        : moment(currentDate).startOf('month').add(1, 'month').format('MMM')
                    }
                </span>
                <img
                    src={images.src + 'letou/next_step.svg'}
                    alt=""
                    height="24"
                />
            </Button>
        );

        const data = {
            labels: this.state.chartLabels,
            datasets: [
                {
                    fill: true,
                    fillColor: 'rgba(50, 197, 255,0.3)',
                    lineTension: 0.4,
                    backgroundColor: 'rgba(50, 197, 255, 0.41)',
                    borderColor: 'rgba(50, 197, 255, 1)',
                    borderCapStyle: 'butt',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    label: 'dfvdb',
                    pointBorderColor: 'rgba(50, 197, 255, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(50, 197, 255, 1)',
                    pointHoverBorderColor: 'rgba(50, 197, 255, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 5,
                    strokeColor: 'rgba(50, 197, 255,0.3)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    data: this.state.chartData,
                    legend: {
                        display: false
                    }
                }
            ]
        };

        const options = {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['datasets'][0]['data'][
                            tooltipItem['index']
                        ];
                    }
                },
                titleFontSize: 0,
                bodyFontSize: 20,
                xPadding: 5,
                yPadding: 2,
                cornerRadius: 3,
                backgroundColor: '#fff',
                borderColor: '#32c5ff',
                borderWidth: 1,
                bodyFontColor: '#6dd400',
                displayColors: false,
                position: 'average',
                maintainAspectRatio: true
            }
        };

        return (
            <div className={classes.root}>
                {loading && <CircularProgress className={classes.progress} />}
                <div className={classes.main} style={(loading === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                    <Grid container>
                        <Grid item xs={12} className={classes.barRow}>
                            <div className={classes.prevCell}>{prevButton}</div>
                            <div className={classes.grow} />
                            <div className={classes.currentCell}>
                                <span className={classes.currentLabel}>
                                    {this.getLabel(
                                        'month-' +
                                        currentDate
                                            .format('MMMM')
                                            .toLowerCase()
                                    )}{' '}
                                    {currentDate.format('YYYY')}
                                </span>
                            </div>
                            <div className={classes.grow} />
                            <div className={classes.nextCell}>{nextButton}</div>
                        </Grid>
                        <Grid item md={3} className={classes.desktop}>
                            <Button
                                className={clsx({
                                    [classes.leftTypeButton]: true,
                                    [classes.activeLeft]: type === 'turnover'
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            type: 'turnover'
                                        },
                                        () => {
                                            this.setChartData();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('turn-over')}
                            </Button>
                            <Button
                                className={clsx({
                                    [classes.rightTypeButton]: true,
                                    [classes.activeRight]: type === 'deposit'
                                })}
                                onClick={() => {
                                    this.setState(
                                        {
                                            type: 'deposit'
                                        },
                                        () => {
                                            this.setChartData();
                                        }
                                    );
                                }}
                            >
                                {this.getLabel('deposit-label')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.titleCell}>
                            <div>
                                <span className={classes.titleLabel}>
                                    {type === 'turnover'
                                        ? this.getLabel('turn-over')
                                        : this.getLabel('deposit-label')}
                                </span>
                                <span className={clsx({
                                    [classes.titleValue]: true,
                                    [classes.negativeValue]: parseFloat(liveCasinoBets) < 0,
                                    [classes.positiveValue]: parseFloat(liveCasinoBets) > 0
                                })}>

                                    {getSymbolFromCurrency(user.currency)}{(type === 'turnover') ? turnover : deposit}
                                </span>
                            </div>
                        </Grid>
                        <Grid item md={3} className={classes.desktop}></Grid>
                        <Grid item xs={12} className={classes.chartPane}>
                            <Line data={data} options={options} className={classes.chart} height={70} />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.mobile}
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 20
                            }}
                        >
                            <div>
                                <Button
                                    className={clsx({
                                        [classes.leftTypeButton]: true,
                                        [classes.activeLeft]:
                                            type === 'turnover'
                                    })}
                                    onClick={() => {
                                        this.setState({ type: 'turnover' });
                                    }}
                                >
                                    {this.getLabel('turn-over')}
                                </Button>
                                <Button
                                    className={clsx({
                                        [classes.rightTypeButton]: true,
                                        [classes.activeRight]:
                                            type === 'deposit'
                                    })}
                                    onClick={() => {
                                        this.setState({ type: 'deposit' });
                                    }}
                                >
                                    {this.getLabel('deposit-label')}
                                </Button>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className={classes.buttonsCell}
                        >
                            <span className={classes.titleLabel}>
                                {this.getLabel('bets-label')}
                            </span>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.history.push(`/p/transaction-records/analysis/sports?date=${moment(currentDate).format('MM-YYYY')}`);
                                }}
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/soccer_in_analysis.svg'
                                    }
                                    alt=""
                                />
                                <div className={classes.buttonText}>
                                    {this.getLabel('sports-bets')}
                                </div>
                                <div className={classes.grow} />
                                <span className={clsx({
                                    [classes.betValue]: true,
                                    [classes.negativeValue]: parseFloat(sportBets) < 0,
                                    [classes.positiveValue]: parseFloat(sportBets) > 0
                                })}>{getSymbolFromCurrency(user.currency)}{sportBets}</span>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.history.push(`/p/transaction-records/analysis/casino-spins?date=${moment(currentDate).format('MM-YYYY')}`);
                                }}
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/slots_in_analysis.svg'
                                    }
                                    alt=""
                                />
                                <div className={classes.buttonText}>
                                    {this.getLabel('casino-spins')}
                                </div>
                                <div className={classes.grow} />
                                <span className={clsx({
                                    [classes.betValue]: true,
                                    [classes.negativeValue]: parseFloat(casinoSpins) < 0,
                                    [classes.positiveValue]: parseFloat(casinoSpins) > 0
                                })}>{getSymbolFromCurrency(user.currency)}{casinoSpins}</span>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.history.push(`/p/transaction-records/analysis/live-casino-bets?date=${moment(currentDate).format('MM-YYYY')}`);
                                }}
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/casino_in_analysis.svg'
                                    }
                                    alt=""
                                />
                                <div className={classes.buttonText}>
                                    {this.getLabel('live-casino-bets')}
                                </div>
                                <div className={classes.grow} />
                                <span className={clsx({
                                    [classes.betValue]: true,
                                    [classes.negativeValue]: parseFloat(liveCasinoBets) < 0,
                                    [classes.positiveValue]: parseFloat(liveCasinoBets) > 0
                                })}>{getSymbolFromCurrency(user.currency)}{liveCasinoBets}</span>
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className={classes.buttonsCell}
                        >
                            <span className={classes.titleLabel}>
                                {this.getLabel('banking-label')}
                            </span>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.history.push(`/p/transaction-records/analysis/deposit-withdraw?date=${moment(currentDate).format('MM-YYYY')}`);
                                }}
                            >
                                <img
                                    src={images.src + 'letou/deposit-arrow.svg'}
                                    alt=""
                                />
                                <div className={classes.buttonText}>
                                    {this.getLabel('deposit-label')}
                                </div>
                                <div className={classes.grow} />
                                <span className={classes.value}>{getSymbolFromCurrency(user.currency)}{deposit}</span>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.history.push(`/p/transaction-records/analysis/deposit-withdraw?date=${moment(currentDate).format('MM-YYYY')}`);
                                }}
                            >
                                <img
                                    src={
                                        images.src + 'letou/withdraw-arrow.svg'
                                    }
                                    alt=""
                                />
                                <div className={classes.buttonText}>
                                    {this.getLabel('withdraw-label')}
                                </div>
                                <div className={classes.grow} />
                                <span className={classes.value}>{getSymbolFromCurrency(user.currency)}{withdraw}</span>
                            </Button>
                        </Grid>
                    </Grid>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(Analysis))
    )
);
