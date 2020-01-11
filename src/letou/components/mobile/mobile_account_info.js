/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { config } from '../../../util_config';
import axios from 'axios';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 60px)',
        width: '100%'
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
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        textTransform: 'capitalize',
        backgroundColor: '#ff9202',
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        minHeight: 44,
        width: '100%',
        '&:focus': {
            backgroundColor: '#f59d2a'
        },
        '&:hover': {
            backgroundColor: '#f59d2a'
        }
    }
});

export class MobileAccountInfo extends Component {
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
                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ actualName: res.data.first_name });
                    this.setState({ email: res.data.email });
                    this.setState({ phone: res.data.phone });
                    this.setState({ username: res.data.username });
                    this.setState({ registrationDate: res.data.time_of_registration });
                });
            }
        });    
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.mobileRow}>
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
                                    {this.getLabel('account-info')}
                                </span>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container style={{ marginTop: 15 }}>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('actual-name')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {this.state.actualName}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('email-label')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {this.state.email}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('phone-label')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {this.state.phone}
                        </span>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: 15 }}>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('username-label')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {this.state.username}
                        </span>
                    </Grid>

                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('registration-time')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {moment(this.state.registrationDate).format('llll')}
                        </span>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: 15 }}>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('manage-bank-cards')}
                        </span>
                        <div className={classes.grow} />
                        <KeyboardArrowRight />
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: 15 }}>
                    <Grid item xs={12} style={{ padding: 15 }}>
                        <Button className={classes.button}
                            onClick={() => {
                                this.props.history.push('/p/account-management/security-settings')
                            }}>
                            {this.getLabel('compelete-dentity-info')}
                        </Button>
                    </Grid>
                </Grid>
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
            connect(mapStateToProps, { authCheckState })(MobileAccountInfo)
        )
    )
);
