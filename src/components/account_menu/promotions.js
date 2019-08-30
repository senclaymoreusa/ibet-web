import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, show_account_menu, hide_promotions } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { config, images } from '../../util_config';

import '../../css/account_menu.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 44,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    backButton: {
        width: 32,
        height: 32,
        minWidth: 32,
        marginTop: 6,
        marginBottom: 6,
    },
    logo: {
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 20,
    },
    userButton: {
        border: '1px solid #fe0000',
        minWidth: 32,
        height: 32,
        padding: 0,
        marginTop: 6,
        marginBottom: 6,

    },
    balanceButton: {
        backgroundColor: '#fe0000',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#fe0000',
        },
        height: 32,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    depositIcon: {
        marginRight: 5,
        marginTop: -4,
    },
    title: {
        display: 'inline',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 6,
        height: 30,
        marginTop: 12,

    },
    spaceRow: {
        backgroundColor: '#f1f1f1',
        height: 30,
    },
    bottomRow: {
        marginTop: 1,
        backgroundColor: '#f1f1f1',
        height: 30,
        borderRadius: 5,
    },
    helpPaper: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    gridRow: {
        padding: 10,
        borderBottom: '1px solid #f1f1f1',
    },
    row: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    semiboldText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        marginTop: 20,
    },
    timeText: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    promotionPaper: {
        width: '100%',
    },
    getStartedRow: {
        padding: 10,
        borderBottom: '1px solid #f1f1f1',
        textAlign: 'center',

    },
    getStartedButton: {
        marginTop: 13,
        marginBottom: 15,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

        fontSize: 14,
        height: 32,
        width: 150,
        paddingTop: 2,
        color: '#ffffff',
        backgroundColor: '#000000',
        borderRadius: 22,
        border: 'solid 2px #000000',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#000000",
            color: '#ffffff',
        }
    },
    readMoreRow: {
        padding: 10,
        textAlign: 'center',

    },
    readMoreButton: {
        textTransform: 'capitalize',
        display: 'inline-block',
    },
    downIcon: {
        marginLeft: 5,
    },
    termsRow: { paddingLeft: 10, paddingRight: 10, paddingBottom: 10 },
    termslink: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        textDecoration: 'underline',
        paddingBottom: 15,
    },
    promotionTitleRow: {
        height: 152,
        backgroundColor: '#212121',
        textAlign: 'center',

        paddingTop: 120,
    },
    promotionTitle: {
        textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        fontSize: 18,
        fontWeight: 600,
        fontstyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#ffffff',
    },
    infoIcon: {
        display: 'inline',
        marginRight: 5,
        marginBottom: -5,
    },
});


export class Promotions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balance: 0.00,
            balanceCurrency: "USD",

        };
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ balance: res.data.main_wallet });
                    this.setState({ balanceCurrency: res.data.currency });
                })
        }
    }

    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_promotions();
    }


    render() {
        const { classes } = this.props;
      
        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <img src={images.src + 'account-menu-back.svg'} alt=""/>
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.promotions" defaultMessage="Promotions" />
                        </div>
                        <div className={classes.grow} />
                        <Button variant="contained" className={classes.balanceButton}>
                            <img src={images.src + 'deposit.svg'} className={classes.depositIcon}  alt=""/>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={this.state.balance}
                                style={"currency"}
                                currency={this.state.balanceCurrency}
                            />
                        </Button>
                        <Button variant="outlined" className={classes.userButton}>
                            <img src={images.src + 'red-user.svg'}  alt=""/>
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.spaceRow}>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper className={classes.promotionPaper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className={classes.promotionTitleRow}>
                                    <span className={classes.promotionTitle}>24 Hour BLIND Roulette Cash Race</span>
                                </Grid>
                                <Grid item xs={12} className={classes.getStartedRow}>
                                    <Button
                                        variant="outlined"
                                        className={classes.getStartedButton}>
                                        <FormattedMessage id="promotions.get-started" defaultMessage="Get Started" />
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.readMoreRow}>
                                    <span className={classes.desc}>24-hours, €1,000 Cash and NO leaderboard – this June we are mixing things up. Every Monday we will be hosting a 24-hour Cash Race on Blaze Roulette in which you’ll have to solely rely on your instincts to secure a share of the €1,000 prize pool.</span>
                                    <Button className={classes.readMoreButton}>
                                        <FormattedMessage id="promotions.read-more" defaultMessage="Read more" />
                                        <img src={images.src + 'down.svg'} className={classes.downIcon}  alt=""/>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <span className={classes.timeText}>Campaign period: Monday June 3, 2019 - Monday 24 June, 2019</span>
                                </Grid>
                                <Grid item xs={12} className={classes.termsRow}>
                                    <Link href='/' className={classes.termslink}>
                                    <img src={images.src + 'oval-info.svg'} className={classes.infoIcon}  alt=""/>
                                        <FormattedMessage id="footer.terms_conditions" defaultMessage='Terms & Conditions' />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} className={classes.spaceRow}>
                    </Grid>

                </Grid>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
    }
}

Promotions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_account_menu, hide_promotions })(Promotions))));