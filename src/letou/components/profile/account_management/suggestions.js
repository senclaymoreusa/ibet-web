/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { images } from '../../../../util_config';
import Link from '@material-ui/core/Link';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

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
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#f2f3f5',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    titleRow: {
        paddingBottom: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#4DA9DF'
    },
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%'
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        },
        textTransform: 'capitalize'
    },
    grow: {
        flexGrow: 1
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
    headerRow: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column'
    },
    orangeLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        marginTop: 20,
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#ff9202',
        textAlign: 'center'
    },
    value: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        marginTop: 5,
        letterSpacing: -0.24,
        color: '#3eace9'
    },
    subLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#4DA9DF'
    },
    subText: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#F1941A'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mobileColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            textDecoration: 'underline #4DA9DF'
        },
        '&:focus': {
            textDecoration: 'underline #4DA9DF'
        }
    }
});

export class Suggestions extends Component {
    constructor(props) {
        super(props);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <Grid container>
                        <Grid item xs={12} className={classes.titleRow}>
                            <img
                                src={images.src + 'letou/contact-support.svg'}
                                alt=""
                                height="50"
                                style={{ marginLeft: 30, marginRight: 30 }}
                            />
                            <span className={classes.title}>
                                {this.getLabel('suggestion-text')}
                            </span>
                        </Grid>
                        <Grid item xs={4} className={classes.column}>
                            <span
                                className={classes.subTitle}
                                style={{ marginBottom: 20 }}
                            >
                                {this.getLabel('online-service')}
                            </span>
                            <img
                                src={images.src + 'letou/sup-24web.png'}
                                alt=""
                                style={{ marginBottom: 20 }}
                            />
                            <Link chref="#" className={classes.link}>
                                <span className={classes.subLabel}>
                                    {this.getLabel('exclusive-support')}
                                </span>
                                <span className={classes.subText}>
                                    {this.getLabel('click-online-service')}
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={4} className={classes.column}>
                            <span
                                className={classes.subTitle}
                                style={{ marginBottom: 20 }}
                            >
                                {this.getLabel('domestic-line')}
                            </span>
                            <img
                                src={images.src + 'letou/sup-24tel.png'}
                                alt=""
                                style={{ marginBottom: 20 }}
                            />
                            <span className={classes.subLabel}>
                                {this.getLabel('24-hours')}
                            </span>
                            <span className={classes.subText}>
                                400-120-8588
                            </span>
                        </Grid>
                        <Grid item xs={4} className={classes.column}>
                            <span
                                className={classes.subTitle}
                                style={{ marginBottom: 20 }}
                            >
                                {this.getLabel('send-email')}
                            </span>
                            <img
                                src={images.src + 'letou/sup-24mail.png'}
                                alt=""
                                style={{ marginBottom: 20 }}
                            />
                            <Link
                                className={classes.link}
                                href="mailto:cs@letou.me?subject = Feedback&body = Message"
                            >
                                <span className={classes.subLabel}>
                                    {this.getLabel('send-email')}
                                </span>
                                <span className={classes.subText}>
                                    cs@letou.me
                                </span>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.rootMobile}>
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
                                        {this.getLabel('feedback-label')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container style={{ marginTop: 15 }}>
                        <Grid item xs={12} className={classes.headerRow}>
                            <div className={classes.profileLogo}>
                                <img
                                    src={images.src + 'letou/question.png'}
                                    alt="Feedback"
                                    height="64"
                                    width="64"
                                    className={classes.profileLogo}
                                />
                            </div>
                            <span className={classes.orangeLabel}>
                                {this.getLabel('any-question-label')}
                            </span>
                        </Grid>
                        <Grid item xs={12} className={classes.row}>
                            <span className={classes.label}>
                                {this.getLabel('online-service')}
                            </span>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            onClick={() => {
                                window.open('tel:+400-120-8588');
                            }}
                        >
                            <div className={classes.mobileColumn}>
                                <span className={classes.label}>
                                    {this.getLabel('dedicated-line')}
                                </span>
                                <span className={classes.value}>
                                    400-120-8588
                                </span>
                            </div>
                            <div className={classes.grow} />

                            <KeyboardArrowRight />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.row}
                            onClick={() => {
                                window.open('mailto:cs@letou.me');
                            }}
                        >
                            <div className={classes.mobileColumn}>
                                <span className={classes.label}>
                                    {this.getLabel('email-label')}
                                </span>
                                <span className={classes.value}>
                                    cs@letou.me
                                </span>
                            </div>
                            <div className={classes.grow} />
                            <KeyboardArrowRight />
                        </Grid>
                    </Grid>
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
        injectIntl(connect(mapStateToProps, { authCheckState })(Suggestions))
    )
);
