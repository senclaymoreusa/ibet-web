/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../../actions';
import { injectIntl, FormattedNumber } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Line } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            paddingBottom: 70
        }
    },
    main: {
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#f2f3f5',
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
        color: '#6dd400',
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
    value: {
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        },
        fontSize: 16,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#6dd400'
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

const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

export class Analysis extends Component {
    constructor(props) {
        super(props);

        let thisMonth = new Date();
        thisMonth.setDate(1);

        this.state = {
            currency: 'USD',
            currentMonth: thisMonth,
            chartData: [],
            chartLabels: [],
            type: 'turnover'
        };

        this.goToPreviousMonth = this.goToPreviousMonth.bind(this);
        this.goToNextMonth = this.goToNextMonth.bind(this);
        this.setChartLabels = this.setChartLabels.bind(this);
        this.setChartData = this.setChartData.bind(this);
    }

    goToPreviousMonth() {
        let month = this.getPreviusMonth(this.state.currentMonth);
        this.setState({ currentMonth: month });
        this.setChartData(month);
        this.setChartLabels(month);
    }

    goToNextMonth() {
        let month = this.getNextMonth(this.state.currentMonth);
        this.setState({ currentMonth: month });
        this.setChartData(month);
        this.setChartLabels(month);
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(async res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
            config.headers['Authorization'] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config).then(res => {
                this.setState({ currency: res.data.currency });
            });

            this.setChartData(this.state.currentMonth);
            this.setChartLabels(this.state.currentMonth);
            }
        })
    }

    componentDidMount() {
        this.props.authCheckState().then(async res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            } else {
                const token = localStorage.getItem('token');
            config.headers['Authorization'] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config).then(res => {
                this.setState({ currency: res.data.currency });
            });

            this.setChartData(this.state.currentMonth);
            this.setChartLabels(this.state.currentMonth);
            }
        })
    }

    setChartData(month) {
        let data = [];

        let loopDate = new Date();
        loopDate.setDate(month.getDate());
        loopDate.setMonth(month.getMonth());
        loopDate.setFullYear(month.getFullYear());
        const min = 0;
        const max = 100;

        let today = new Date();
        while (loopDate < this.getNextMonth(month)) {
            if (loopDate < today) {
                const rand = min + Math.random() * (max - min);
                data.push(Number(rand.toFixed(0)));
            } else {
                data.push(0);
            }
            loopDate.setDate(loopDate.getDate() + 1);
        }

        this.setState({ chartData: data });
    }

    setChartLabels(month) {
        let labels = [];

        let loopDate = new Date();
        loopDate.setDate(1);
        loopDate.setMonth(month.getMonth());
        loopDate.setFullYear(month.getFullYear());

        while (loopDate < this.getNextMonth(month)) {
            labels.push(loopDate.getDate() + '/' + (loopDate.getMonth() + 1));
            loopDate.setDate(loopDate.getDate() + 1);
        }

        this.setState({ chartLabels: labels });
    }

    getPreviusMonth(month) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(month.getMonth());
        d.setFullYear(month.getFullYear());

        var newMonth = d.getMonth() - 1;
        if (newMonth < 0) {
            newMonth += 12;
            d.setYear(d.getFullYear() - 1);
        }
        d.setMonth(newMonth);

        return d;
    }

    getNextMonth(month) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(month.getMonth());
        d.setFullYear(month.getFullYear());

        var newMonth = d.getMonth() + 1;
        if (newMonth === 12) {
            newMonth -= 12;
            d.setYear(d.getFullYear() + 1);
        }
        d.setMonth(newMonth);

        return d;
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { type } = this.state;

        let prevMonth = this.getPreviusMonth(this.state.currentMonth);
        let prevText = monthNames[prevMonth.getMonth()];
        let prevLabel = this.getLabel('month-' + prevText.toLowerCase());

        let nextLabel = '';
        let today = new Date();
        if (this.state.currentMonth.getMonth() === today.getMonth()) {
            nextLabel = this.getLabel('life-time');
        } else {
            let nextMonth = this.getNextMonth(this.state.currentMonth);
            let nextText = monthNames[nextMonth.getMonth()];
            nextLabel = this.getLabel('month-' + nextText.toLowerCase());
        }

        let currentText = monthNames[this.state.currentMonth.getMonth()];
        let currentLabel =
            this.getLabel('month-' + currentText.toLowerCase()) +
            ' ' +
            this.state.currentMonth.getFullYear();

        const prevButton = (
            <Button
                className={classes.titleButton}
                onClick={this.goToPreviousMonth}
            >
                <img
                    src={images.src + 'letou/prev_step.svg'}
                    alt=""
                    height="24"
                />
                <span className={classes.prevLabel}>{prevLabel}</span>
            </Button>
        );

        const nextButton = (
            <Button
                className={classes.titleButton}
                onClick={this.goToNextMonth}
                disabled={
                    this.state.currentMonth.getMonth() === new Date().getMonth()
                }
            >
                <span className={classes.nextLabel}>{nextLabel}</span>
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
                position: 'average'
            }
        };

        return (
            <div className={classes.root}>
                <div className={classes.main}>
                    <Grid container>
                        <Grid item xs={12} className={classes.barRow}>
                            <div className={classes.prevCell}>{prevButton}</div>
                            <div className={classes.grow} />
                            <div className={classes.currentCell}>
                                <span className={classes.currentLabel}>
                                    {currentLabel}
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
                                    this.setState({ type: 'turnover' });
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
                                    this.setState({ type: 'deposit' });
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
                                <div className={classes.titleValue}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={395}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3} className={classes.desktop}></Grid>
                        <Grid item xs={12} className={classes.chartPane}>
                            <Line data={data} options={options} />
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
                                    this.props.callbackFromParent('sports');
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
                                <div className={classes.sportValue}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={400}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.callbackFromParent(
                                        'casino-spins'
                                    );
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
                                <div className={classes.value}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={-5}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.callbackFromParent(
                                        'live-casino-bets'
                                    );
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
                                <div className={classes.value}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={0}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
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
                                    this.props.callbackFromParent(
                                        'deposit-withdraw'
                                    );
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
                                <div className={classes.sportValue}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={400}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
                            </Button>
                            <Button
                                className={classes.button}
                                onClick={() => {
                                    this.props.callbackFromParent(
                                        'deposit-withdraw'
                                    );
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
                                <div className={classes.value}>
                                    <FormattedNumber
                                        maximumFractionDigits={2}
                                        value={-5}
                                        style={`currency`}
                                        currency={this.state.currency}
                                    />
                                </div>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token } = state.auth;

    return {
        isAuthenticated: token !== null && token !== undefined,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(connect(mapStateToProps, { authCheckState })(Analysis))
    )
);
