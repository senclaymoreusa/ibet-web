/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { images } from '../../../../util_config';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

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
    }
});

class CreateWithdrawalPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            showPassword: false,
            confirmPassword: '',
            showConfirmPassword: false
        };
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    addAccountClicked(event) {}

    render() {
        const { classes } = this.props;
        const { password, confirmPassword } = this.state;
        return (
            <div className={classes.root}>
                <Grid container className={classes.contentGrid} spacing={2}>
                    <Grid
                        item
                        xs={12}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <span className={classes.selectLabel}>
                            {this.getLabel('create-withdrawal-password')}
                        </span>
                        <Divider style={{ marginTop: 10 }} />
                        <span
                            className={classes.desc}
                            style={{ marginTop: 10, marginbottom: 20 }}
                        >
                            {this.getLabel('create-withdrawal-password-text')}
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
                    <Grid item xs={16}>
                        <TextField
                            className={classes.passwordField}
                            value={password}
                            onChange={event => {
                                this.setState({ password: event.target.value });
                            }}
                            type={this.state.showNewPassword ? '' : 'password'}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            size="small"
                                            disabled={password.length === 0}
                                            aria-label="Toggle password visibility"
                                            onClick={() => {
                                                this.setState(state => ({
                                                    showPassword: !state.showPassword
                                                }));
                                            }}
                                        >
                                            {this.state.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
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
            connect(
                mapStateToProps,
                { authCheckState }
            )(CreateWithdrawalPassword)
        )
    )
);
