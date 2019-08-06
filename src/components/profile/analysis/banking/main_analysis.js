import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl, FormattedNumber } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { ReactComponent as PrevStepIcon } from '../../../../assets/img/svg/prev_step.svg';
import { ReactComponent as NextStepIcon } from '../../../../assets/img/svg/next_step.svg';

import { ReactComponent as DepositIcon } from '../../../../assets/img/svg/deposit_in_analysis.svg';
import { ReactComponent as WithdrawIcon } from '../../../../assets/img/svg/withdraw_in_analysis.svg';

import { Line } from 'react-chartjs-2';

import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { config } from '../../../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797'
    },
    prevLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        marginLeft: 8,
    },
    currentLabel: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: '#212121',
        marginTop: 8,
    },
    nextLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
        marginRight: 8,
    },
    currentCell: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80

    },
    prevCell: {
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80

    },
    nextCell: {
        paddingRight: 10,
        paddingTop: 20,
        textAlign: 'right',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    prevButton: {
        textTransform: 'capitalize',
    },
    nextButton: {
        textTransform: 'capitalize',
    },
    chartPane: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 40
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
    },
    titleLabel: {
        fontSize: 22,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.79,
        textAlign: 'center',
        color: '#212121',
        display: 'inline',
    },
    buttonsCell: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 40,
        textAlign: 'center',

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
        marginLeft: 4,
    },
    button: {
        width: 334,
        height: 142.5,
        borderRadius: 6,
        boxShadow: '5px 5px 9px 3px rgba(203, 203, 203, 0.5)',
        backgroundColor: '#ffffff',
        display: 'inline',
        textTransform: 'capitalize',
        margin: 15,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.7,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.85)',
    },
    withdrawValue: {
        fontSize: 30,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#000000',
    },
    depositValue: {
        fontSize: 30,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#000000',
    },
});

const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];

export class MainAnalysis extends Component {

    constructor(props) {
        super(props);

        let thisMonth = new Date();
        thisMonth.setDate(1);

        this.state = {
            currency: 'USD',
            currentMonth: thisMonth,
            chartData: [],
            chartLabels: [],
        }

        this.goToPreviousMonth = this.goToPreviousMonth.bind(this);
        this.goToNextMonth = this.goToNextMonth.bind(this);
        this.setChartLabels = this.setChartLabels.bind(this);
        this.setChartData = this.setChartData.bind(this);

        this.goToDailyAnalysis = this.goToDailyAnalysis.bind(this);
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

    componentDidMount() {

        if (this.props.isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ currency: res.data.currency });
                })

            this.setChartData(this.state.currentMonth);
            this.setChartLabels(this.state.currentMonth);
        }
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
        if (newMonth == 12) {
            newMonth -= 12;
            d.setYear(d.getFullYear() + 1);
        }
        d.setMonth(newMonth);

        return d;
    }

    goToDailyAnalysis() {
        this.props.callbackFromParent(2);
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let prevMonth = this.getPreviusMonth(this.state.currentMonth);
        let prevText = monthNames[prevMonth.getMonth()];
        let prevLabel = formatMessage({ id: "analysis." + prevText }) + ' ' + prevMonth.getFullYear();

        let nextLabel = '';
        let today = new Date();
        if (this.state.currentMonth.getMonth() === today.getMonth()) {
            nextLabel = formatMessage({ id: "analysis.lifetime" });
        } else {
            let nextMonth = this.getNextMonth(this.state.currentMonth);
            let nextText = monthNames[nextMonth.getMonth()];
            nextLabel = formatMessage({ id: "analysis." + nextText }) + ' ' + nextMonth.getFullYear();
        }
        let currentText = monthNames[this.state.currentMonth.getMonth()];
        let currentLabel = formatMessage({ id: "analysis." + currentText }) + ' ' + this.state.currentMonth.getFullYear();

        const prevButton = (
            <Button className={classes.prevButton} onClick={this.goToPreviousMonth}>
                <PrevStepIcon />
                <span className={classes.prevLabel}>{prevLabel}</span>
            </Button>);

        const nextButton = (
            <Button className={classes.nextButton} onClick={this.goToNextMonth} disabled={this.state.currentMonth.getMonth() === (new Date()).getMonth()}>
                <span className={classes.nextLabel}>{nextLabel}</span>
                <NextStepIcon />
            </Button>);


        let totalNetMessage = formatMessage({ id: "analysis.total_net_position" });
        let withdrawMessage = formatMessage({ id: "accountmenu.withdraw" });
        let depositMessage = formatMessage({ id: "accountmenu.deposit" });

        const data = {
            labels: this.state.chartLabels,
            datasets: [
                {
                    fill: true,
                    fillColor: "rgba(50, 197, 255,0.3)",
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
                    strokeColor: "rgba(50, 197, 255,0.3)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",

                    data: this.state.chartData,
                    legend: {
                        display: false,
                    }
                }
            ]
        };

        const options = {
            legend: {
                display: false,
            },
        };

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={3} className={classes.prevCell}>
                        {prevButton}
                    </Grid>
                    <Grid item xs={6} className={classes.currentCell}>
                        <span className={classes.currentLabel}>{currentLabel}</span>
                    </Grid>
                    <Grid item xs={3} className={classes.nextCell}>
                        {nextButton}
                    </Grid>
                    <Grid item xs={12} className={classes.titleCell}>
                        <div>
                            <span className={classes.titleLabel}>{totalNetMessage}</span>
                            <div className={classes.titleValue}>
                                <FormattedNumber
                                    maximumFractionDigits={2}
                                    value={395}
                                    style='currency'
                                    currency={this.state.currency}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.chartPane}>
                        <Line data={data} width={825} height={240}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonsCell}>
                        <Button className={classes.button} onClick={this.goToDailyAnalysis}>
                            <DepositIcon />
                            <div className={classes.buttonText}>
                                {depositMessage}
                            </div>
                            <div className={classes.depositValue}>
                                <FormattedNumber
                                    maximumFractionDigits={2}
                                    value={400}
                                    style='currency'
                                    currency={this.state.currency}
                                />
                            </div>
                        </Button>
                        <Button className={classes.button} onClick={this.goToDailyAnalysis}>
                            <WithdrawIcon />
                            <div className={classes.buttonText}>
                                {withdrawMessage}
                            </div>
                            <div className={classes.withdrawValue}>
                                <FormattedNumber
                                    maximumFractionDigits={2}
                                    value={-5}
                                    style='currency'
                                    currency={this.state.currency}
                                />
                            </div>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;

    return {
        isAuthenticated: token !== null && token !== undefined,
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(MainAnalysis)));