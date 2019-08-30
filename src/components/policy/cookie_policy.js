import React from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { authCheckState } from '../../actions';
import { FormattedMessage } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { images } from '../../util_config';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,

    },
    container: {
        flexGrow: 1,
        backgroundColor: '#f1f1f1',
        paddingBottom: 30,
    },
    contentPaper: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        padding: theme.spacing.unit * 3,
    },
    titleContainer: {
        display: 'flex',
    },
    page_icon: {
        display: 'inline',
        marginTop: 8,

    },
    page_title: {
        display: 'inline',
        marginLeft: 20,
        marginTop: 12,
        opacity: 0.7,
        fontSize: 28,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: 'normal',
        color: '#212121',
    },
    closeButton: {
        display: 'inline',
        float: 'right',
    },
    grow: {
        flexGrow: 1,
    },
    paragraph: {
        marginTop: 8,
    }

});

export class CookiePolicy extends React.Component {


    async componentDidMount() {

    }


    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TopNavbar />
                <Grid container spacing={0}
                    justify="center"
                    className={classes.container}>
                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <Paper className={classes.contentPaper}>
                            <div className={classes.titleContainer}>
                            <img src={images.src + 'ibet_logo.svg'}  className={classes.page_icon}  alt=""/>
                                <div className={classes.page_title}>
                                    <FormattedMessage id="privacy_policy.title" defaultMessage='Cookie Policy' />
                                </div>
                                <div className={classes.grow}></div>
                                <div className={classes.closeButton}>
                                    <IconButton href='/'>
                                    <img src={images.src + 'close_page.svg'}  alt=""/>
                                    </IconButton>
                                </div>
                            </div>
                            <Typography component="p" paragraph={true}>
                                Like many other websites, Mr Green utilises ‘cookies’ to improve your gaming experience.
                            </Typography>
                            {'\n'}{'\n'}
                            <Typography component="p" paragraph={true}>
                                Cookies are small text files stored on your computer by your browser. They're used for many things, such as remembering whether you've visited the site before, so that you remain logged in - or to help us work out how many new website visitors we get each month. They contain information about the use of your computer but don't include personal information about you (they don't store your name, for instance).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Mr Green’s Casino Cookies
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Our cookies allow you to navigate through our website efficiently, they remember your preferences to enhance your user experience and they help us pick the most relevant promotions and offers that match your interests.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Mr Green recommends that you do not change your cookie setting, as this may affect the quality of your user experience, performance and special features of the site.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                You can easily adjust the settings of your browser to block all cookies. You can also delete the cookies through your browser, but please bear in mind that this will delete ALL cookies including those for other webpages. Please note that we cannot be held responsible for the cookie content of webpages outside of the Mr Green domain.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                By accessing the Website, you agree that this Cookie Policy will apply, as stated in item 5.8 of our general terms and conditions, whenever you access the Website on any device.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState })(CookiePolicy));