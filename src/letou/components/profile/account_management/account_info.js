/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { config } from '../../../../util_config';
import axios from 'axios';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = () => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    label: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap'
    },
    value: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#999'
    },
    row: {
        padding: 20,
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    editButton: {
        textTransform: 'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap',
        minWidth: 140
    }
});

export class AccountInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actualName: '',
            email: '',
            phone: '',
            username: '',
            registrationDate: ''
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                this.props.history.push('/');
            } else {
                const { user } = this.props;

                this.setState({
                    actualName: user.firstName + ' ' + user.lastName,
                    email: user.email,
                    phone: user.phone,
                    username: user.username,
                    registrationDate: moment(user.registrationTime).format(
                        'llll'
                    )
                });
            }
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('actual-name')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.actualName}
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row}></Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('email-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.email}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            disabled={true}
                            className={classes.editButton}
                        >
                            {this.getLabel('edit-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('phone-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.phone}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.editButton}
                            onClick={() => {
                                this.props.callbackFromParent('edit-phone');
                            }}
                        >
                            {this.getLabel('edit-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('username-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.username}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    ></Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('login-password')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.getLabel('password-you-need-login')}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.editButton}
                            onClick={() => {
                                this.props.callbackFromParent('reset-password');
                            }}
                        >
                            {this.getLabel('reset-label')}
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('withdrawal-password')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.getLabel('password-you-need-withdrawing')}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => {
                                this.props.callbackFromParent(
                                    'set-withdrawal-password'
                                );
                            }}
                            className={classes.editButton}
                        >
                            {this.getLabel('setup-now')}
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('registration-time')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.registrationDate}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.editButton}
                            target="_blank"
                            href="https://help.letou.com/cn/member_maintain/seq4.html"
                        >
                            {this.getLabel('gaming-responsibility')}
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('bank-card')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>Bind bank card</span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        className={classes.row}
                        style={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => {
                                this.props.callbackFromParent('bank-cards');
                            }}
                            className={classes.editButton}
                        >
                            {this.getLabel('binding-card-number')}
                        </Button>
                    </Grid>
                </Grid>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(AccountInfo))
    )
);
