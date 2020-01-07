/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState,
    AUTH_RESULT_FAIL,
    logout,
    postLogout,
    sendingLog
} from '../../../actions';
import { config } from '../../../util_config';

import { injectIntl, FormattedNumber } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { images } from '../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Subject from '@material-ui/icons/Subject';
import AccountBalance from '@material-ui/icons/AccountBalance';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import Security from '@material-ui/icons/Security';
import Message from '@material-ui/icons/Message';
import HeadsetMic from '@material-ui/icons/HeadsetMic';
import LiveHelp from '@material-ui/icons/LiveHelp';
import SettingsApplications from '@material-ui/icons/SettingsApplications';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 60px)'
    },
    content: {
        flexGrow: 1
    },
    indicator: {
        backgroundColor: 'white'
    },
    appBar: {
        backgroundColor: '#3c3c3c',
        color: '#fff'
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#3c3c3c'
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%'
    },
    grow: {
        flexGrow: 1
    },
    topLinkButton: {
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        cursor: 'pointer',
        maxHeight: 32,
        color: '#fff'
    },
    logo: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    icon: {
        margin: theme.spacing(2)
    },
    verifiedIcon: {
        color: '#4DA9DF'
    },
    profileLogo: {
        width: 64,
        height: 64,
        backgroundColor: '#d3d4d6',
        margin: '0 auto',
        borderRadius: 32,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    header: {
        background: 'linear-gradient(to bottom, #59d8ff, #02aee3)',
        paddingTop: 20,
        paddingBottom: 20
    },
    mobileUsername: {
        color: 'white'
    },
    masterAccount: {
        backgroundColor: '#ffc412',
        borderRadius: 13,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        display: 'inline'
    },
    mobileTabTitleButton: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export class MobileMainProfile extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            urlPath: '',
            tabValue: '',
            content: '',
            mainWallet: 0,
            currency: 'CNY'
        };

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue });
    }

    async handleCategoryChange(category) {
        var url = this.state.urlPath;
        var parts = url.split('/');

        if (parts.length >= 2) {
            url = '/';
            var path = parts.slice(1, 2).join('/');
            url = url + path;
        }
        url = url + '/' + category;
        this.props.history.push(url);
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        axios
            .get(API_URL + 'users/api/user/', config)
            .then(res => {
                if (this._isMounted) {
                    this.setState({ username: res.data.username });
                    this.setState({ mainWallet: res.data.main_wallet });
                    this.setState({ currency: res.data.currency });
                }
            })
            .catch(function (err) {
                sendingLog(err);
            });
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.header}>
                    <Grid
                        item
                        xs={12}
                        style={{ textAlign: 'center', paddingBottom: 15 }}
                    >
                        <span className={classes.mobileUsername}>
                            {this.state.username}
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.profileLogo}>
                            <img
                                src={images.src + 'letou/mymember-idimg.jpg'}
                                alt="LETOU"
                                height="64"
                                width="64"
                                className={classes.profileLogo}
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            textAlign: 'center',
                            paddingBottom: 30,
                            paddingTop: 30
                        }}
                    >
                        <div className={classes.masterAccount}>
                            <span>
                                {this.getLabel('master-account')} {' | '}
                            </span>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={this.state.mainWallet}
                                style={`currency`}
                                currency={this.state.currency}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                        <Button className={classes.mobileTabTitleButton}>
                            <div className={classes.column}>
                                <img
                                    src={images.src + 'letou/deposit-icon.png'}
                                    alt="LETOU"
                                    height="20"
                                />
                                {this.getLabel('deposit-label')}
                            </div>
                        </Button>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                        <Button className={classes.mobileTabTitleButton}>
                            <div className={classes.column}>
                                <img
                                    src={
                                        images.src + 'letou/withdrawal-icon.png'
                                    }
                                    alt="LETOU"
                                    height="20"
                                />
                                {this.getLabel('title-withdrawal')}
                            </div>
                        </Button>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                        <Button className={classes.mobileTabTitleButton}
                        onClick={() => {
                             this.props.history.push('/p/fortune-center/transfer');
                        }}>
                            <div className={classes.column}>
                                <img
                                    src={
                                        images.src + 'letou/transfers-icon.png'
                                    }
                                    alt="LETOU"
                                    height="20"
                                />
                                {this.getLabel('title-transfer')}
                            </div>
                        </Button>
                    </Grid>
                </Grid>
                <div className={classes.content}>
                    <Grid container>
                        <Grid item xs={12}>
                            <List
                                style={{
                                    overflow: 'auto'
                                }}
                            >
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push(
                                            '/p/transaction-records'
                                        );
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#03dffc'
                                            }}
                                        >
                                            <Subject />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'transaction-records'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push(
                                            '/p/fortune-center'
                                        );
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#fcb503'
                                            }}
                                        >
                                            <AccountBalance />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'fortune-center'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push(
                                            '/p/account-management'
                                        );
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#fc6203'
                                            }}
                                        >
                                            <PersonOutlineOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('account-info')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push(
                                            '/p/account-management/security-settings'
                                        );
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#0388fc'
                                            }}
                                        >
                                            <Security />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'security-settings'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#4e03fc'
                                            }}
                                        >
                                            <Message />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'message-notification'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push(
                                            '/p/account-management/suggestions'
                                        );
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#07db58'
                                            }}
                                        >
                                            <HeadsetMic />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'customer-service'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        // this.props.history.push('/');
                                        // this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#db07cd'
                                            }}
                                        >
                                            <LiveHelp />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('help-center')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        // this.props.history.push('/');
                                        // this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#e4f00e'
                                            }}
                                        >
                                            <SettingsApplications />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('set-up')}
                                    />
                                </ListItem>
                            </List>
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
        error: state.auth.error,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, logout, postLogout })(
                MobileMainProfile
            )
        )
    )
);
