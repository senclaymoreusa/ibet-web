/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

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
            activeStep: 0,

            withdrawPassword: '',
            showWithdrawPassword: false,
            confirmWithdrawPassword: '',

            name: '',
            bankAccountNumber: '',
            password: ''
        };
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        // const token = localStorage.getItem('token');
        // config.headers['Authorization'] = `Token ${token}`;
        // axios.get(API_URL + 'users/api/user/', config).then(res => {
        //     this.setState({
        //         name:
        //             res.data.first_name.trim() + ' ' + res.data.last_name.trim()
        //     });
        // });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({
                name:
                    res.data.first_name.trim() + ' ' + res.data.last_name.trim()
            });
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    addAccountClicked(event) {
        this.setState({ activeStep: 1 });
    }

    cancelClicked() {
        this.setState({ activeStep: 0 });
    }

    createPassword() {
        this.setState({ activeStep: 2 });
    }

    getContent() {
        const { classes } = this.props;
        const {
            activeStep,
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
                                style={{ marginTop: 10, marginbottom: 20 }}
                            >
                                {this.getLabel('add-bank-account-text')}
                            </span>
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
                        <Grid item xs={6} style={{ marginBottom: 40, display: 'flex', flexDirection: 'row' }}>
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
                                <img style={{ marginLeft: 5 }}
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
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(
                mapStateToProps,
                { authCheckState }
            )(BankAccounts)
        )
    )
);
