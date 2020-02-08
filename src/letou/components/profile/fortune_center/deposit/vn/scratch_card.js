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

const providers = [
    { value: 'vms', label: 'Mobifone', img: 'letou/mobifone.png' },
    { value: 'vtt', label: 'Viettel', img: 'letou/vettel.svg' },
    { value: 'vnp', label: 'Vinaphone', img: 'letou/vinaphone.png' }
];

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

const amounts = Object.freeze([
    '10,000',
    '20,000',
    '50,000',
    '100,000',
    '200,000',
    '500,000',
    '1,000,000'
]);

class ScratchCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 'none',
            operator: 'none',

            pinNumber: '',
            pinNumberFocused: false,
            pinNumberInvalid: true,

            serialNumber: '',
            serialNumberFocused: false,
            numberInvalid: true,
            isFavorite: false
        };
    }

    // componentWillReceiveProps(props) {
    //     this.props.authCheckState().then(res => {
    //         if (res === AUTH_RESULT_FAIL) {
    //             this.props.history.push('/');
    //         } else {
    //             const token = localStorage.getItem('token');
    //             config.headers['Authorization'] = `Token ${token}`;
    //             axios.get(API_URL + 'users/api/user/', config).then(res => {
    //                 this.setState({ data: res.data });
    //                 this.setState({
    //                     isFavorite:
    //                         res.data.favorite_payment_method === 'scratchcard'
    //                 });
    //             });
    //         }
    //     });
    // }

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
                            res.data.favorite_payment_method === 'scratchcard'
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

    handleClick(event) {
        let currentComponent = this;
        currentComponent.setState({ showLinearProgressBar: true });
        event.preventDefault();
        const { serialNumber, pinNumber, amount, operator, data } = this.state;

        const token = localStorage.getItem('token');

        if (!token) {
            console.log('no token -- user is not logged in');
        }
        config.headers['Authorization'] = `Token ${token}`;

        let postData = {
            serial: serialNumber.replace(/\s/g, ''),
            pin: pinNumber.replace(/\s/g, ''),
            operator: operator,
            amount: amount
        };
        console.log(postData);
        axios
            .post(
                API_URL + 'accounting/api/scratchcard/deposit',
                postData,
                config
            )
            .then(res => {
                console.log('result of deposit: ');
                console.log(res);
                if (res.data.errorCode) {
                    console.log(res.data);
                    currentComponent.props.callbackFromParent(
                        'error',
                        'Something is wrong.'
                    );
                }
                if (res.status === 200) {
                    if (res.data.status === 6) {
                        this.setState({
                            receive_response: true,
                            response_msg:
                                'Deposit request is processing. Please check your transaction history for updates to your balance once we finish processing',
                            error: false,
                            error_msg: ''
                        });
                    } else if (res.data.status === 1) {
                        const body = JSON.stringify({
                            type: 'add',
                            username: data.username || '',
                            balance: amount
                        });
                        axios
                            .post(
                                API_URL + 'users/api/addorwithdrawbalance/',
                                body,
                                config
                            )
                            .then(res => {
                                if (res.data === 'Failed') {
                                    this.setState({ error: true });
                                } else if (
                                    res.data === 'The balance is not enough'
                                ) {
                                    alert('cannot withdraw this amount');
                                } else {
                                    alert('your balance is updated');
                                    // window.location.reload();
                                }
                            });
                    } else {
                        currentComponent.props.callbackFromParent(
                            'error',
                            res.data.msg.eng + ' | ' + res.data.msg.vn
                        );
                    }
                    currentComponent.setState({ showLinearProgressBar: false });
                } else {
                    this.setState({
                        error: true,
                        error_msg:
                            'Could not communicate with iBet servers. Error code: ' +
                            res.status
                    });
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
                payment: event.target.checked ? 'scratchcard' : null
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
        const {
            amount,
            operator,
            pinNumber,
            serialNumber,
            isFavorite
        } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.contentGrid}>
                    {/* <Grid
                        item
                        xs={12}
                        className={classes.detailRow}
                        style={{ marginBottom: 30 }}
                    >
                        <span className={classes.info}>
                            {this.getLabel('fgo-enter')}
                        </span>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Select
                            className={classes.select}
                            placeholder={this.getLabel('select-operator')}
                            value={operator}
                            onChange={event => {
                                this.setState({ operator: event.target.value });
                            }}
                            input={
                                <BootstrapInput
                                    name="operator"
                                    id="provider-select"
                                />
                            }
                        >
                            <MenuItem key="none" value="none" disabled>
                                <span>{this.getLabel('select-operator')}</span>
                            </MenuItem>
                            {providers.map(p => (
                                <MenuItem key={p.value} value={p.value}>
                                    <div style={{ width: 100 }}>
                                        <img
                                            src={images.src + p.img}
                                            alt=""
                                            width="80"
                                        />
                                    </div>
                                    <span className={classes.info}>
                                        {p.label}
                                    </span>
                                </MenuItem>
                            ))}
                        </Select>
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
                                    id="amount-select"
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
                            placeholder={this.getLabel('serial-number')}
                            onChange={event => {
                                this.setState({
                                    serialNumberFocused: true,
                                    serialNumber: event.target.value,
                                    numberInvalid:
                                        event.target.value.toString().length <
                                            10 ||
                                        event.target.value.toString().length >
                                            17
                                });
                            }}
                            value={serialNumber}
                            error={
                                this.state.serialNumberFocused &&
                                this.state.numberInvalid
                            }
                            helperText={
                                this.state.serialNumberFocused &&
                                this.state.numberInvalid
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
                    <Grid
                        item
                        xs={12}
                        className={classes.detailRow}
                        style={{ marginBottom: 30 }}
                    >
                        <TextField
                            className={classes.detailText}
                            placeholder={'PIN'}
                            onChange={event => {
                                this.setState({
                                    pinNumberFocused: true,
                                    pinNumber: event.target.value,
                                    pinNumberInvalid:
                                        event.target.value.toString().length <
                                            10 ||
                                        event.target.value.toString().length >
                                            17
                                });
                            }}
                            value={pinNumber}
                            error={
                                this.state.pinNumberFocused &&
                                this.state.pinNumberInvalid
                            }
                            helperText={
                                this.state.pinNumberFocused &&
                                this.state.pinNumberInvalid
                                    ? this.getLabel('invalid-pin')
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
                                this.state.provider === 'none' ||
                                this.state.amount === 'none' ||
                                this.state.pinNumberInvalid ||
                                this.state.numberInvalid
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
                    {/* <Grid
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
                    </Grid> */}
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
            })(ScratchCard)
        )
    )
);
