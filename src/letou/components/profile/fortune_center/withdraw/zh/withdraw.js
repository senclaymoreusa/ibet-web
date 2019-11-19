import React, { Component } from 'react';
import { injectIntl, FormattedNumber } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import getSymbolFromCurrency from 'currency-symbol-map'

import Checkbox from '@material-ui/core/Checkbox';
import { authCheckState } from '../../../../../../actions';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contentGrid: {
        width: 430,
    },
    contentRow: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    actionButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
        "&:focus": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
        textTransform: 'capitalize',

    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
    },
    rememberCell: {
        paddingTop: 20,
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1',
    },
    infoCell: {
        paddingTop: 15,
    },
    infoRow: {
        display: 'block',

    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
    },
    infoValue: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
        marginLeft: 3,
    },
    detailRow: {
        paddingBottom: 15
    },
    labelRow: {
        paddingBottom: 15
    },
    valueRow: {
        paddingBottom: 15,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    balanceRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#f28f22',
        marginBottom: 15,
        width: 90,
        height: 44,
        fontSize: 15,
        color: '#fff',
        opacity: 0.5,
        "&:hover": {
            backgroundColor: '#f28f22',
            opacity: 1,
        },
        "&:focus": {
            backgroundColor: '#f28f22',
            opacity: 1
        },
    },
    selected: {
        opacity: 1,
    },
    amountText: {
        fontSize: 14,
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
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: '1px solid #717171',
        },
        "&:focus": {
            border: '1px solid #717171',
        },
    },
    amountRow: {
        height: 40,
        borderBottom: '4px solid #5e5e5e'
    },
    amountRightRow: {
        height: 40,
        textAlign: 'right',
        borderBottom: '4px solid #5e5e5e'
    },
    checkbox: {
        margin: theme.spacing()
    },
    inputLabel: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: 6,
        color: '#cdcdcd',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12,
        whiteSpace: 'nowrap'
    },
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.15,
        color: '#cdcbcc',
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#2e2e2e',
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
    },
    balance: {
        fontSize: 32,
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#545454',
        marginTop: 15,
        marginBottom: 20,
    },
    feeText: {
        fontSize: 14,
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
        width: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: '1px solid #717171',
        },
        "&:focus": {
            border: '1px solid #717171',
        },
    },
    receiveText: {
        fontSize: 14,
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
        width: '100%',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderLeft: 'solid 1px #e4e4e4',
        borderRight: 'solid 1px #e4e4e4',
        borderBottom: 'solid 1px #e4e4e4',
        "&:hover": {
            border: '1px solid #717171',
        },
        "&:focus": {
            border: '1px solid #717171',
        },
    },
});


const amounts = Object.freeze(['25%', '50%', '75%', '100%']);

function NumberFormatCustom(props) {
    const { currency, inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            prefix={currency}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

class ChinaWithdraw extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            balance: 0.00,
            withdrawalBalance: 0.00,
            lockedBalance: 0.00,
            freeWithrawalsRemaining: 0,
            fee: 0,
            receiveAmount: 0,
            balanceCurrency: "CNY",
        };
    }

    componentWillReceiveProps(props) {
        // const token = localStorage.getItem('token');
        // config.headers["Authorization"] = `Token ${token}`;
        // axios.get(API_URL + 'users/api/user/', config)
        //     .then(res => {
        //         this.setState({ data: res.data });
        //         this.setState({ balance: res.data.main_wallet });
        //             this.setState({ balanceCurrency: res.data.currency });
        //     });
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ balance: res.data.main_wallet });
                this.setState({ balanceCurrency: res.data.currency });

                this.setState({ withdrawalBalance: res.data.main_wallet });
                this.setState({ lockedBalance: res.data.main_wallet });
                this.setState({ freeWithrawalsRemaining: 7 });
            });
    }

    amountChanged = event => {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            const re = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

            if (re.test(event.target.value)) {
                this.setState({ amount: event.target.value });
                this.setState({ amountInvalid: (parseFloat(event.target.value) < 100 || parseFloat(event.target.value) > 100000) });
            }
            else {
                this.setState({ amountInvalid: true });
            }
        }
    };

    handleClick() {

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { amount, currency, balance, balanceCurrency, withdrawalBalance, lockedBalance, freeWithrawalsRemaining, fee, receiveAmount } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid} >
                    <Grid item xs={12} className={classes.detailRow} style={{ borderBottom: '1px solid #e7e7e7' }}>
                        银行名称在这里 2 - 0714
                    </Grid>
                    <Grid item xs={12} className={classes.balanceRow}>
                        <span className={classes.text}>{this.getLabel('total-balance')}
                            <Tooltip
                                title={this.getLabel(
                                    'total-withdrawal-tooltip'
                                )}
                                placement="bottom"
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/info-icon.svg'
                                    }
                                    style={{ marginLeft: 5 }}
                                    alt=""
                                    height="14"
                                />
                            </Tooltip>
                        </span>

                        <div className={classes.balance}>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={balance}
                                style={`currency`}
                                currency={balanceCurrency}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={7} className={classes.labelRow}>
                        <span className={classes.label}>{this.getLabel('withdrawal-balance')}
                            <Tooltip
                                title={this.getLabel(
                                    'withdrawal-tooltip'
                                )}
                                placement="bottom"
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/info-icon.svg'
                                    }
                                    style={{ marginLeft: 5 }}
                                    alt=""
                                    height="14"
                                />
                            </Tooltip>
                        </span>
                    </Grid>
                    <Grid item xs={5} className={classes.valueRow}>
                        <div className={classes.value}>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={withdrawalBalance}
                                style={`currency`}
                                currency={balanceCurrency}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={7} className={classes.labelRow}>
                        <span className={classes.label}>{this.getLabel('locked-balance')}
                            <Tooltip
                                title={this.getLabel(
                                    'locked-balance-tooltip'
                                )}
                                placement="bottom"
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/info-icon.svg'
                                    }
                                    style={{ marginLeft: 5 }}
                                    alt=""
                                    height="14"
                                />
                            </Tooltip>
                        </span>
                    </Grid>
                    <Grid item xs={5} className={classes.valueRow}>
                        <div className={classes.value}>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={lockedBalance}
                                style={`currency`}
                                currency={balanceCurrency}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={7} className={classes.labelRow} style={{ borderBottom: '1px solid #e7e7e7', marginBottom: 20 }}>
                        <span className={classes.label}>{this.getLabel('free-withdrawals')}
                        <Tooltip
                                title={this.getLabel(
                                    'free-withdrawal-tooltip'
                                )}
                                placement="bottom"
                            >
                                <img
                                src={
                                    images.src +
                                    'letou/info-icon.svg'
                                }
                                style={{ marginLeft: 5 }}
                                alt=""
                                height="14"
                            />
                            </Tooltip>
                            </span>
                    </Grid>
                    <Grid item xs={5} className={classes.valueRow} style={{ borderBottom: '1px solid #e7e7e7', marginBottom: 20 }}>
                        <span className={classes.value}>{freeWithrawalsRemaining}</span>
                    </Grid>

                    {amounts.map((x, i) => {
                        return (
                            <Grid item xs={3} key={i}>
                                <Button
                                    className={clsx({
                                        [classes.button]: true,
                                        [classes.selected]: (x === amount)
                                    })}

                                    onClick={() =>
                                        this.setState({
                                            amount: x,
                                            amountInvalid: false,
                                            amountFocused: false
                                        })}>
                                    {x}
                                </Button>
                            </Grid>
                        );
                    })}
                    <Grid item xs={12} className={classes.detailRow} style={{ marginBottom: 20 }}>
                        <span className={classes.desc}>{this.getLabel('withdrawal-amount-allowed')}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.amountText}
                            placeholder={this.getLabel('china-withdrawal-placeholder')}
                            onChange={this.amountChanged.bind(this)}
                            value={amount}
                            error={
                                this.state.amountInvalid &&
                                this.state.amountFocused
                            }
                            helperText={
                                this.state.amountInvalid &&
                                    this.state.amountFocused
                                    ? this.getLabel('valid-amount')
                                    : ' '
                            }
                            InputProps={{
                                disableUnderline: true,
                                inputComponent: NumberFormatCustom,
                                inputProps: {
                                    step: 1,
                                    min: 100,
                                    style: { textAlign: 'right' },
                                    currency: currency
                                },
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <span className={classes.inputLabel}>{this.getLabel('amount-label')}</span>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.feeText}
                            //onChange={this.amountChanged.bind(this)}
                            value={fee}

                            InputProps={{
                                disableUnderline: true,
                                inputComponent: NumberFormatCustom,
                                inputProps: {
                                    style: { textAlign: 'right' },
                                },
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <span className={classes.inputLabel}>{this.getLabel('fees-label')}</span>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.receiveText}
                            //onChange={this.amountChanged.bind(this)}
                            value={receiveAmount}

                            InputProps={{
                                disableUnderline: true,
                                inputComponent: NumberFormatCustom,
                                inputProps: {
                                    style: { textAlign: 'right' },
                                },
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <span className={classes.inputLabel}>{this.getLabel('receive-amount')}</span>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow} style={{ marginBottom: 40 }}>
                        <span className={classes.desc}>{this.getLabel('china-withdrawal-message')}</span>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.handleClick}
                        >{this.getLabel('cancel-label')}</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button className={classes.actionButton}
                            onClick={this.backClicked}
                        >{this.getLabel('confirm-label')}</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(ChinaWithdraw)));