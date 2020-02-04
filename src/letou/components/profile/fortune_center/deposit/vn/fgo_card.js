/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    authCheckState,
    sendingLog,
    AUTH_RESULT_FAIL,
    logout,
    authUserUpdate
} from '../../../../../../actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    contentGrid: {
        width: 430
    },
    contentRow: {
        paddingTop: 50,
        paddingBottom: 50
    },
    // actionButton: {
    //     width: 324,
    //     height: 44,
    //     borderRadius: 22,
    //     backgroundColor: '#4DA9DF',
    //     color: '#fff',
    //     '&:hover': {
    //         backgroundColor: '#57b9f2',
    //         color: '#fff'
    //     },
    //     '&:focus': {
    //         backgroundColor: '#57b9f2',
    //         color: '#fff'
    //     },
    //     textTransform: 'capitalize'
    // },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
    },
    rememberCell: {
        paddingTop: 20
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1'
    },
    infoCell: {
        paddingTop: 15
    },
    infoRow: {
        display: 'block'
    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a'
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
        marginLeft: 3
    },
    detailRow: {
        marginBottom: 3
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
        '&:hover': {
            backgroundColor: '#f28f22',
            opacity: 1
        },
        '&:focus': {
            backgroundColor: '#f28f22',
            opacity: 1
        }
    },
    select: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        maxHeight: 44,
        width: '100%'
    },
    detailText: {
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
        '&:hover': {
            border: '1px solid #717171'
        },
        '&:focus': {
            border: '1px solid #717171'
        }
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
    actionButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        '&:focus': {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        textTransform: 'capitalize'
    },
    cancelButton: {
        width: '100%',
        height: 44,
        borderRadius: 22,

        textTransform: 'capitalize'
    },
    info: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.15,
        color: '#212121'
    },
    label: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: -6,
        width: 80,
        color: '#212121',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12
    },
    selectLabel: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    }
});

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

const CustomCheckbox = withStyles({
    root: {
        color: '#21e496',
        '&$checked': {
            color: '#21e496'
        }
    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);

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

const amounts = Object.freeze([
    '50,000',
    '100,000',
    '200,000',
    '500,000',
    '1,000,000',
    '2,000,000'
]);

class FgoCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 'none',
            cardNumber: '',
            serialNumber: '',
            isFavorite: false
        };
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ data: res.data });
                    this.setState({
                        isFavorite:
                            res.data.favorite_payment_method === 'fgocard'
                    });
                });
            }
        });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ data: res.data });
                    this.setState({
                        isFavorite:
                            res.data.favorite_payment_method === 'fgocard'
                    });
                });
            }
        });
    }

    bankAccountNumberChanged(event) {
        this.setState({ bankAccountNumberFocused: true });

        const re = /^[0-9\b]+$/;

        if (re.test(event.target.value))
            this.setState({ bankAccountNumber: event.target.value });
        else if (event.target.value.length === 0)
            this.setState({ bankAccountNumber: '' });
    }

    handleClick() {
        let currentComponent = this;

        var postData = {
            pin: this.state.cardNumber,
            user: this.state.data.username,
            serial: this.state.serialNumber
        };
        const token = localStorage.getItem('token');
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        return fetch(API_URL + 'accounting/api/fgate/chargeCard', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
                Authorization: 'Token ' + token
            },
            body: formBody
        })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if (data.errorCode) {
                    currentComponent.props.postLogout();
                    return;
                }
                if (data.error_code === '00' && data.status === '0') {
                    currentComponent.props.callbackFromParent(
                        'error',
                        data.message
                    );
                } else if (data.error_code === '00' && data.status === '1') {
                    const body = JSON.stringify({
                        type: 'add',
                        username: currentComponent.state.data.username,
                        balance: data.amount
                    });
                    axios
                        .post(
                            API_URL + `users/api/addorwithdrawbalance/`,
                            body,
                            config
                        )
                        .then(res => {
                            if (res.data === 'Failed') {
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Transaction failed.'
                                );
                            } else if (
                                res.data === 'The balance is not enough'
                            ) {
                                currentComponent.props.callbackFromParent(
                                    'error',
                                    'Cannot deposit this amount.'
                                );
                            } else {
                                currentComponent.props.authUserUpdate();
                                currentComponent.props.callbackFromParent(
                                    'success',
                                    data.amount
                                );
                            }
                        });
                } else {
                    currentComponent.props.callbackFromParent(
                        'error',
                        data.error_message
                    );
                }
            })
            .catch(function(err) {
                currentComponent.props.callbackFromParent(
                    'error',
                    'Something is wrong.'
                );
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    setAsFavorite(event) {
        axios
            .post(API_URL + `users/api/favorite-payment-setting/`, {
                user_id: this.state.data.pk,
                payment: event.target.checked ? 'fgocard' : null
            })
            .then(() => {
                this.props.authUserUpdate();
                this.setState({ isFavorite: !this.state.isFavorite });
                this.props.checkFavoriteMethod();
            })
            .catch(function(err) {
                sendingLog(err);
            });
    }

    cancelClicked() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 4).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    render() {
        const { classes } = this.props;
        const { amount, cardNumber, serialNumber, isFavorite } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    <Grid
                        item
                        xs={12}
                        className={classes.detailRow}
                        style={{ marginBottom: 30 }}
                    >
                        <span className={classes.info}>
                            {this.getLabel('fgo-enter')}
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            className={classes.select}
                            placeholder={this.getLabel('select-amount')}
                            value={amount}
                            onChange={event => {
                                this.setState({ amount: event.target.value });
                            }}
                            input={
                                <BootstrapInput
                                    name="amount"
                                    id="bank-select"
                                />
                            }
                        >
                            <MenuItem key="none" value="none" disabled>
                                <span>{this.getLabel('select-amount')}</span>
                            </MenuItem>
                            {amounts.map(a => (
                                <MenuItem key={a} value={a}>
                                    <span className={classes.info}>{a}</span>
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('card-number')}
                            onChange={event => {
                                this.setState({ cardNumberFocused: true });
                                this.setState({
                                    cardNumber: event.target.value
                                });
                            }}
                            value={cardNumber}
                            error={
                                this.state.cardNumberFocused &&
                                cardNumber.length === 0
                            }
                            helperText={
                                this.state.cardNumberFocused &&
                                cardNumber.length === 0
                                    ? this.getLabel('invalid-card-number')
                                    : ' '
                            }
                            InputProps={{
                                disableUnderline: true,

                                endAdornment: (
                                    <InputAdornment position="end">
                                        <img
                                            src={
                                                images.src +
                                                'letou/info-icon.svg'
                                            }
                                            alt=""
                                            height="20"
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={classes.detailRow}
                        style={{ marginBottom: 30 }}
                    >
                        <TextField
                            className={classes.detailText}
                            placeholder={this.getLabel('serial-number')}
                            onChange={event => {
                                this.setState({ serialNumberFocused: true });
                                this.setState({
                                    serialNumber: event.target.value
                                });
                            }}
                            value={serialNumber}
                            error={
                                this.state.serialNumberFocused &&
                                serialNumber.length === 0
                            }
                            helperText={
                                this.state.serialNumberFocused &&
                                serialNumber.length === 0
                                    ? this.getLabel('invalid-serial-number')
                                    : ' '
                            }
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <img
                                            src={
                                                images.src +
                                                'letou/info-icon.svg'
                                            }
                                            alt=""
                                            height="20"
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            variant="contained"
                            className={classes.cancelButton}
                            onClick={this.cancelClicked.bind(this)}
                        >
                            {this.getLabel('cancel-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.actionButton}
                            onClick={this.handleClick.bind(this)}
                            disabled={
                                this.state.cardNumber.length === 0 ||
                                this.state.serialNumber.length === 0
                            }
                        >
                            {this.getLabel('deposit-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <CustomCheckbox
                                    checked={isFavorite}
                                    value="checkedA"
                                    onClick={event => {
                                        this.setAsFavorite(event);
                                    }}
                                />
                            }
                            label={this.getLabel('add-favourite-deposit')}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={classes.detailRow}
                        style={{ marginBottom: 30 }}
                    >
                        <span className={classes.info}>
                            {this.getLabel('fgo-ensure')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.detailRow}>
                        <span className={classes.info}>
                            {this.getLabel('fgo-wrong')}
                        </span>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, {
                authCheckState,
                logout,
                authUserUpdate
            })(FgoCard)
        )
    )
);
