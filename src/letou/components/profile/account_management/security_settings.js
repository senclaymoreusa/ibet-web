/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { config, images } from '../../../../util_config';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

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
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        },
        textTransform: 'capitalize'
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%'
    },
    grow: {
        flexGrow: 1
    },
    mobileAppBar: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap'
    },
    value: {
        fontSize: 13,
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
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        display: 'inline-block',
        verticalAlign: 'middle',
        color: '#212121',
        justifyContent: 'center'
    },
    settingContent: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 60
    },
    paper: {
        padding: 10,
        marginBottom: 15
    },
    mobileTitle: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        display: 'inline-block',
        verticalAlign: 'middle',
        color: '#ee3d3b'
    },
    desc: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#999',
        wordBreak: 'break-word',
        marginTop: 5
    },
    mobileRow: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    mobileButton: {
        textTransform: 'capitalize',
        backgroundColor: '#19bc6c',
        color: 'white',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        minHeight: 44,
        width: '100%',
        '&:focus': {
            backgroundColor: '#0de079'
        },
        '&:hover': {
            backgroundColor: '#0de079'
        }
    }
});

export class SecuritySettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastLoginTime: '',
            securityQuestionHasBeenset: false,
            withdrawalPasswordHasBeenset: false
        };
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentWillReceiveProps(prevProps) {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ lastLoginTime: res.data.last_login_time });
                });
            }
        });  
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                this.props.history.push('/');
            } else {
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ lastLoginTime: res.data.last_login_time });
                    this.setState({
                        securityQuestionHasBeenset: res.data.security_question
                            ? true
                            : false
                    });
                    this.setState({
                        withdrawalPasswordHasBeenset: res.data.withdraw_password
                            ? true
                            : false
                    });
                });

            }
        
        });
    }

    render() {
        const { classes } = this.props;
        const {
            lastLoginTime,
            securityQuestionHasBeenset
        } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <Grid container>
                        <Grid item xs={3} className={classes.row}>
                            <span className={classes.label}>
                                {this.getLabel('last-login-time')}
                            </span>
                        </Grid>
                        <Grid item xs={9} className={classes.row}>
                            <span className={classes.value}>
                                {moment(lastLoginTime).format('llll')}
                            </span>
                        </Grid>

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
                                    this.props.callbackFromParent(
                                        'reset-password'
                                    );
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
                                {securityQuestionHasBeenset
                                    ? this.getLabel('you-have-set-password')
                                    : this.getLabel(
                                        'password-you-need-withdrawing'
                                    )}
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
                                    this.props.callbackFromParent(
                                        'set-withdrawal-password'
                                    );
                                }}
                            >
                                {securityQuestionHasBeenset
                                    ? this.getLabel('edit-label')
                                    : this.getLabel('setup-now')}
                            </Button>
                        </Grid>
                        <Grid item xs={3} className={classes.row}>
                            <span className={classes.label}>
                                {this.getLabel('security-question')}
                            </span>
                        </Grid>
                        <Grid item xs={6} className={classes.row}>
                            <span className={classes.value}>
                                {securityQuestionHasBeenset
                                    ? this.getLabel('you-have-set-question')
                                    : this.getLabel(
                                        'set-security-question-text'
                                    )}
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
                                        'security-question'
                                    );
                                }}
                                className={classes.editButton}
                            >
                                {securityQuestionHasBeenset
                                    ? this.getLabel('edit-label')
                                    : this.getLabel('setup-now')}
                            </Button>
                        </Grid>
                        <Grid item xs={3} className={classes.row}>
                            <span
                                className={classes.label}
                                style={{ wordBreak: 'break-all' }}
                            >
                                {this.getLabel('jiufu-password')}
                            </span>
                        </Grid>
                        <Grid item xs={6} className={classes.row}>
                            <span className={classes.value}>
                                {this.getLabel('not-set')}
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
                                        'jiufu-temple'
                                    );
                                }}
                                className={classes.editButton}
                            >
                                {this.getLabel('setting-label')}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
                    <AppBar position="sticky" className={classes.mobileAppBar}>
                        <Toolbar className={classes.mobileBar}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Button
                                        className={classes.mobileMenuButton}
                                        onClick={() => {
                                            this.props.history.push('/p/');
                                        }}
                                    >
                                        <ArrowBackIos style={{ width: 16 }} />
                                        {this.getLabel('back-label')}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}
                                >
                                    <span className={classes.title}>
                                        {this.getLabel('security-settings')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.settingContent}>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 10
                                    }}
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/safesetting1.png'
                                        }
                                        alt=""
                                        height="36"
                                        width="36"
                                        style={{
                                            minWidth: 36,
                                            marginRight: 10
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span className={classes.mobileTitle}>
                                            {this.getLabel('no-verification')}
                                        </span>
                                        <span className={classes.desc}>
                                            {this.getLabel(
                                                'be-sure-verifications'
                                            )}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.mobileRow}
                                >
                                    <span className={classes.label}>
                                        {this.getLabel('actual-name')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {this.state.actualName}
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.mobileRow}
                                >
                                    <span className={classes.label}>
                                        {this.getLabel('email-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {this.state.email}
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.mobileRow}
                                >
                                    <span className={classes.label}>
                                        {this.getLabel('phone-label')}
                                    </span>
                                    <div className={classes.grow} />
                                    <span className={classes.value}>
                                        {this.state.phone}
                                    </span>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.mobileButton}>
                                        {this.getLabel('verify-immediately')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/safesetting2.png'
                                        }
                                        alt=""
                                        height="36"
                                        width="36"
                                        style={{
                                            minWidth: 36,
                                            marginRight: 10
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span className={classes.mobileTitle}>
                                            {this.getLabel(
                                                'withdrawal-password'
                                            )}
                                        </span>
                                        <span className={classes.desc}>
                                            {this.getLabel(
                                                'withdrawal-password-desc'
                                            )}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.mobileButton}>
                                        {this.getLabel('change-password')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/safesetting3.png'
                                        }
                                        alt=""
                                        height="36"
                                        width="36"
                                        style={{
                                            minWidth: 36,
                                            marginRight: 10
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span className={classes.mobileTitle}>
                                            {this.getLabel(
                                                'set-security-question'
                                            )}
                                        </span>
                                        <span className={classes.desc}>
                                            {this.getLabel(
                                                'security-question-desc'
                                            )}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.mobileButton}>
                                        {this.getLabel(
                                            'modify-security-issues'
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/safesetting4.png'
                                        }
                                        alt=""
                                        height="36"
                                        width="36"
                                        style={{
                                            minWidth: 36,
                                            marginRight: 10
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span className={classes.mobileTitle}>
                                            {this.getLabel(
                                                'set-login-password'
                                            )}
                                        </span>
                                        <span className={classes.desc}>
                                            {this.getLabel(
                                                'set-login-password-desc'
                                            )}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.mobileButton}>
                                        {this.getLabel('modify-login-password')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}
                                >
                                    <img
                                        src={
                                            images.src +
                                            'letou/safesetting4.png'
                                        }
                                        alt=""
                                        height="36"
                                        width="36"
                                        style={{
                                            minWidth: 36,
                                            marginRight: 10
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span className={classes.mobileTitle}>
                                            {this.getLabel(
                                                'pt-password-not-set'
                                            )}
                                        </span>
                                        <span className={classes.desc}>
                                            {this.getLabel('pt-password-desc')}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.mobileButton}>
                                        {this.getLabel('set-up')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </div>
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
        injectIntl(
            connect(mapStateToProps, { authCheckState })(SecuritySettings)
        )
    )
);
