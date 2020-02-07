/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    sendingLog
} from '../../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import Bank_Info from '../../../../../../commons/bank_info';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = () => ({
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
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    addButton: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#53abe0'
    },
    passwordField: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 36,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        border: 'solid 1px #7a7a7a',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
    },
    grow: {
        flexGrow: 1
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
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
    successRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 800,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
        marginTop: 44
    },
    completeCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    completeDiv: {
        height: 160,
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: '#cffcea',
        justifyContent: 'center'
    },
    accountRow: {
        cursor: 'pointer',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    accountInfo: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.15,
        color: '#252525'
    },
    forgot: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#53abe0',
        marginTop: 3,
        textTransform: 'capitalize'
    }
});

class BankAccounts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 4,
            cards: [],
            card: null,

            alreadyHaveWithdrawPassword: false,
            withdrawPassword: '',
            showWithdrawPassword: false,
            confirmWithdrawPassword: '',

            name: '',
            bankAccountNumber: '',
            password: ''
        };
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        this.getBankCards();

        // const token = localStorage.getItem('token');
        // config.headers['Authorization'] = `Token ${token}`;
        // axios.get(API_URL + 'users/api/user/', config).then(res => {
        //     console.log(res.data);
        //     this.setState({
        //         name:
        //             res.data.first_name.trim() + ' ' + res.data.last_name.trim()
        //     });

        //     this.setState({
        //         alreadyHaveWithdrawPassword:
        //             res.data.withdraw_password.length > 0
        //     });
        // });
    }

    getBankCards() {
        const { user } = this.props;
        let requestURL = `accounting/api/transactions/get_withdraw_accs?id=${user.userId}`;

        axios
            .get(API_URL + requestURL)
            .then(res => {
                if (res.status === 200) {
                    let items = res.data.results;

                    for (const card of items) {
                        let bi = Bank_Info['Bank_Info']
                            .filter(b => {
                                return b.CardLength == card.account_no.length;
                            })
                            .filter(b => {
                                return (
                                    b.BINCode ==
                                    card.account_no.substring(
                                        0,
                                        b.BINCodeLength
                                    )
                                );
                            })[0];

                        if (bi) {
                            card.BankName = bi.BankName;
                        } else {
                            card.BankName = this.getLabel('my-card');
                        }
                    }

                    this.setState({
                        cards: items
                    });
                }
            })
            .catch(err => {
                this.setState({ cards: [] });
                sendingLog(err);
            });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    addAccountClicked() {
        if (this.state.alreadyHaveWithdrawPassword)
            this.setState({ activeStep: 2 });
        else this.setState({ activeStep: 1 });
    }

    cancelClicked() {
        this.setState({ activeStep: 0 });
    }

    createPassword() {
        this.setState({ activeStep: 2 });
    }

    deleteCard(id) {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let requestURL = `accounting/api/transactions/del_withdraw_acc`;

        axios
            .post(
                API_URL + requestURL,
                {
                    user_id: this.props.user.userId,
                    acc_id: id
                },
                config
            )
            .then(() => {
                this.getBankCards();
            })
            .catch(err => {
                sendingLog(err);
            });
    }

    getContent() {
        const { classes, user } = this.props;
        const {
            activeStep,
            cards,
            withdrawPassword,
            showWithdrawPassword,
            confirmWithdrawPassword,
            name,
            bankAccountNumber,
            password
        } = this.state;

        switch (activeStep) {
            case 0:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('bank-account')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginBottom: 10 }}
                            >
                                {this.getLabel('add-bank-account-text')}
                            </span>
                            {cards.length > 0 && (
                                <Divider
                                    variant="fullWidth"
                                    light={true}
                                    style={{ width: '100%' }}
                                />
                            )}

                            {cards.map(card => (
                                <div
                                    key={card.account_no}
                                    className={classes.column}
                                    onClick={() => {
                                        this.setState({
                                            activeStep: (user.hasWithdrawPassword ? 3 : 1)
                                        });
                                    }}
                                >
                                    <div className={classes.accountRow}>
                                        <span className={classes.accountInfo}>
                                            {card.BankName}
                                            {' - '}
                                            {card.account_no.substring(
                                                card.account_no.length - 3
                                            )}
                                        </span>
                                        <div className={classes.grow} />
                                        <Button
                                            className={classes.action}
                                            onClick={() => {
                                                this.deleteCard(card.id);
                                            }}
                                        >
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/delete-btn.svg'
                                                }
                                                alt=""
                                            />
                                        </Button>
                                    </div>
                                    <Divider
                                        variant="fullWidth"
                                        light={true}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            ))}
                            <Button
                                className={classes.addButton}
                                onClick={event => {
                                    this.addAccountClicked(event);
                                }}
                            >
                                <img
                                    src={images.src + 'letou/plus.svg'}
                                    alt=""
                                    style={{ marginRight: 5 }}
                                />
                                {this.getLabel('add-bank-account')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: 30
                            }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('create-withdrawal-password')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel(
                                    'create-withdrawal-password-text'
                                )}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={{
                                marginBottom: 40,
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <TextField
                                className={classes.passwordField}
                                value={withdrawPassword}
                                onChange={event => {
                                    this.setState({
                                        withdrawPassword: event.target.value
                                    });
                                }}
                                type={
                                    this.state.showWithdrawPassword
                                        ? ''
                                        : 'password'
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={
                                                    withdrawPassword.length ===
                                                    0
                                                }
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showWithdrawPassword: !state.showWithdrawPassword
                                                    }));
                                                }}
                                            >
                                                {this.state
                                                    .showWithdrawPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Tooltip
                                title={this.getLabel(
                                    'eight-characters-warning'
                                )}
                            >
                                <img
                                    style={{ marginLeft: 5 }}
                                    src={images.src + 'letou/info-orange.svg'}
                                    alt=""
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6} style={{ marginBottom: 40 }}>
                            <TextField
                                className={classes.passwordField}
                                value={confirmWithdrawPassword}
                                onChange={event => {
                                    this.setState({
                                        confirmWithdrawPassword:
                                            event.target.value
                                    });
                                }}
                                type="password"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {withdrawPassword ===
                                                confirmWithdrawPassword &&
                                            confirmWithdrawPassword.length ===
                                                8 ? (
                                                <img
                                                    src={
                                                        images.src +
                                                        'letou/confirmation-ok.svg'
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <span></span>
                                            )}
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
                                onClick={this.createPassword.bind(this)}
                            >
                                {this.getLabel('next-label')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span className={classes.selectLabel}>
                                {this.getLabel('bank-account')}
                            </span>
                            <Divider style={{ marginTop: 10 }} />
                            <span
                                className={classes.desc}
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel('bank-details-withdraw')}
                            </span>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.detailRow}
                            style={{ marginTop: 30 }}
                        >
                            <TextField
                                className={classes.detailText}
                                placeholder={this.getLabel('name-label')}
                                value={name}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Tooltip
                                                title={this.getLabel(
                                                    'account-name-tooltip'
                                                )}
                                                placement="bottom"
                                            >
                                                <img
                                                    src={
                                                        images.src +
                                                        'letou/info-icon.svg'
                                                    }
                                                    alt=""
                                                    height="20"
                                                />
                                            </Tooltip>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.detailRow}>
                            <TextField
                                className={classes.detailText}
                                placeholder={this.getLabel('bank-number')}
                                onChange={event => {
                                    this.setState({
                                        bankAccountNumber: event.target.value
                                    });
                                }}
                                value={bankAccountNumber}
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
                        <Grid item xs={6} style={{ marginBottom: 30 }}>
                            <TextField
                                className={classes.passwordField}
                                value={withdrawPassword}
                                onChange={event => {
                                    this.setState({
                                        withdrawPassword: event.target.value
                                    });
                                }}
                                type={
                                    this.state.showWithdrawPassword
                                        ? ''
                                        : 'password'
                                }
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                disabled={
                                                    withdrawPassword.length ===
                                                    0
                                                }
                                                aria-label="Toggle password visibility"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        showWithdrawPassword: !state.showWithdrawPassword
                                                    }));
                                                }}
                                            >
                                                <Tooltip
                                                    title={this.getLabel(
                                                        'withdraw-password-tooltip'
                                                    )}
                                                    placement="bottom"
                                                >
                                                    {this.state
                                                        .showWithdrawPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </Tooltip>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Button className={classes.forgot}>
                                {this.getLabel('forgot-password')}
                            </Button>
                        </Grid>
                        <Grid item xs={6} style={{ marginBottom: 30 }}></Grid>
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
                                onClick={event => {
                                    this.setState({ activeStep: 3 });
                                }}
                            >
                                {this.getLabel('next-label')}
                            </Button>
                        </Grid>
                    </Grid>
                );
            case 3:
                return (
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid item xs={12} className={classes.completeCell}>
                            <div className={classes.completeDiv}>
                                <img src={images.src + 'letou/ok.svg'} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.successRow}>
                            <span className={classes.title}>
                                {this.getLabel('account-added')}
                            </span>
                        </Grid>
                    </Grid>
                );
        }
    }

    render() {
        const { classes } = this.props;

        return <div className={classes.root}>{this.getContent()}</div>;
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
        injectIntl(
            connect(mapStateToProps, { authCheckState, sendingLog })(
                BankAccounts
            )
        )
    )
);
