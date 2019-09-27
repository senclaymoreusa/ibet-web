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
import { images } from '../../../util_config';
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
        padding: theme.spacing(3),
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
    },
    bold_text:{
      fontWeight: 'bold'
    }

});

export class PrivacyPolicy extends React.Component {


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
                            <img src={images.src + 'ibet_logo.svg'} className={classes.page_icon}  alt=""/>
                                <div className={classes.page_title}>
                                    <FormattedMessage id="privacy_policy.title" defaultMessage='Privacy Policy' />
                                </div>
                                <div className={classes.grow}></div>
                                <div className={classes.closeButton}>
                                    <IconButton href='/'>
                                    <img src={images.src + 'close_page.svg'}  alt=""/>
                                    </IconButton>
                                </div>
                            </div>
                            <Typography component="p" variant="h6" paragraph={true}>
                                Privacy policy for services provided by ibet
                                </Typography>
                            <Typography component="p" paragraph={true} variant="subtitle1" className={classes.bold_text }>
                                Introduction and contact details
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                In this privacy policy, we explain how it is ensured that your personal data is processed in a responsible manner and in accordance with applicable data protection legislation when you are a customer of Mr Green.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                The policy is designed to help you understand what data we collect, why we collect it, and how we use it in connection with you using our services. This is important; we hope you will take time to read it carefully.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Mr Green Ltd is the data controller and thereby responsible for the processing of your personal data carried out by us or on our behalf. If you have any questions regarding the processing, you are welcome to contact our Data Protection Officer: dpo@mrgreen.com.
                            </Typography>
                            <Typography component="p" paragraph={true} variant="subtitle1" className={classes.bold_text }>
                                What personal data do we process?
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Personal data is all information that may be associated with you as an individual. We process the following personal data during the customer relationship:
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Name, address, contact details, year of birth and gender, customer ID.
                                Documentation verifying your identity and address (e.g. ID card (incl. social security number) or similar, utility bills).
                                Copy of credit card (excl. CVC code) and bank statement and another person’s credit card and contact details if such person’s credit card is connected to your account.
                                Your transaction history (e.g. logins, gaming frequency, deposits, winnings, bonuses and games played, promotions and services you have taken part in – i.e. if you have received, read and acted on an email, sms or ad).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Your correspondence with customer service (email, phone and/or chat conversations relating to any matters you have registered with our customer service).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Data collected via social networks/media (provided that you have an open/public account/profile, i.e. not restricted your settings to private).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Information about the device you are using (e.g. IP address, operating system and mac address).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Information collected via cookies, read more about cookies and for what purpose we use them in our cookie policy.
                            </Typography>
                            <Typography component="p" paragraph={true} variant="subtitle1" className={classes.bold_text }>
                                For what purposes do we process your personal data?
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                We use the personal data listed above for the purpose of:
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Administrating and managing our customer relationship, i.e. providing our games and services to you.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Providing various tools in order to enable you to control and monitor your gaming habits, e.g. setting deposit or loss limitations. We also check against self-excluding registers (whether applicable) if you have self-excluded.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Carrying out operations relevant for your participation in the games or use of our services, e.g. providing our customer service function incl. assisting and following-up on matters discussed with customer service.
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Conducting know your customer investigations (e.g. verifying identity, age, address and if you are a politically exposed person) and other investigations during the customer relationship (e.g. an in case your accumulative withdrawals exceed a certain amount) for the purpose of preventing and mitigating fraud and complying with anti-money laundering legislation and applicable licence requirements (e.g. by verifying source of wealth, creating suspicious activity reports and disclosing such reports to relevant supervisory authorities).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Sending you marketing material, e.g. information about new services and promotions that we believe you may find of interest based on promotions and services you have taken part in (e.g. if you have received, read and acted on an email, sms or ad).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Customizing the marketing material and your website experience, e.g. by recommending relevant games/services and presenting you with targeted bonus offers and similar. Such customization is based on gaming history and promotions and services you have taken part in (e.g. if you have received, read and acted on an email, sms or ad).
                            </Typography>
                            <Typography component="p" paragraph={true}>
                                Performing statistical analysis in order to improve and develop our current games and services, and develop new and exciting features. When performing such analysis, we will mainly use data in an aggregated form.
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

export default withStyles(styles)(connect(mapStateToProps, { authCheckState })(PrivacyPolicy));