/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, postLogout } from '../../../actions';
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
    logoutGrid: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 20
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

export class MobileSetup extends Component {
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
                    this.setState({
                        registrationDate: res.data.time_of_registration
                    });
                });
            }
        });
    }

    getLangLabel() {
        const { lang } = this.props;

        switch (lang) {
            case 'zh':
                return this.getLabel('lang-chinese');
            case 'en':
                return this.getLabel('lang-english');
            case 'th':
                return this.getLabel('lang-thai');
            case 'vn':
                return this.getLabel('lang-vietnamese');
            default:
                return '';
        }
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
                                    {this.getLabel('set-up')}
                                </span>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container style={{ marginTop: 15 }}>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('language-label')}
                        </span>
                        <div className={classes.grow} />
                        <span className={classes.value}>
                            {this.getLangLabel()}
                        </span>
                    </Grid>
                </Grid>
                <Grid container className={classes.logoutGrid}>
                    <Grid item xs={12}>
                        <Button
                            className={classes.button}
                            onClick={() => {
                                this.props.postLogout();
                            }}
                        >
                            {this.getLabel('log-out')}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;

    return {
        user: user,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(mapStateToProps, { authCheckState, postLogout })(
                MobileSetup
            )
        )
    )
);
