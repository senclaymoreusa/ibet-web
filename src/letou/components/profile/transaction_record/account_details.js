/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import moment from 'moment';


import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

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
    active: {
        backgroundColor: '#3c3c3c',
        color: '#fff'
    }
});

export class AccountDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(new Date()),
            endDate: moment(new Date()),
            filterType: 'all',
            filterStatus: 'all'
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { startDate, endDate, filterType } = this.state;
        var today = moment(new Date());

        console.log(today)
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
                                        startDate
                                            .startOf('day')
                                            .isSame(today.startOf('day')) &&
                                        endDate
                                            .startOf('day')
                                            .isSame(today.startOf('day'))
                                })}
                            >
                                {this.getLabel('today-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]:
                                        today
                                            .startOf('day')
                                            .diff(
                                                startDate.startOf('day'),
                                                'day'
                                            ) &&
                                        endDate
                                            .startOf('day')
                                            .isSame(today.startOf('day'))
                                })}
                            >
                                {this.getLabel('this-week')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'all'
                                })}
                            >
                                {this.getLabel('this-month')}
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
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'all'
                                    });
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'deposit'
                                    });
                                }}
                            >
                                {this.getLabel('deposit-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'withdraw'
                                    });
                                }}
                            >
                                {this.getLabel('withdraw-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'transfer'
                                    });
                                }}
                            >
                                {this.getLabel('transfer-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'bonus'
                                    });
                                }}
                            >
                                {this.getLabel('bonus-label')}
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
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'all'
                                    });
                                }}
                            >
                                {this.getLabel('all-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'success'
                                    });
                                }}
                            >
                                {this.getLabel('success-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'all'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'cancelled'
                                    });
                                }}
                            >
                                {this.getLabel('cancelled-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'failed'
                                    });
                                }}
                            >
                                {this.getLabel('failed-label')}
                            </Button>
                            <Button
                                variant="contained"
                                className={clsx({
                                    [classes.filterButton]: true,
                                    [classes.active]: filterType === 'game'
                                })}
                                onClick={() => {
                                    this.setState({
                                        filterType: 'inprogress'
                                    });
                                }}
                            >
                                {this.getLabel('inprogress-label')}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}></div>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(AccountDetails))
    )
);
