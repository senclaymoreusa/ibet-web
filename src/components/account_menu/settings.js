import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, show_account_menu, hide_settings } from '../../actions';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

import Button from '@material-ui/core/Button';

import { ReactComponent as BackIcon } from '../../assets/img/svg/account-menu-back.svg';
import { ReactComponent as RedUserIcon } from '../../assets/img/svg/red-user.svg';
import { ReactComponent as DepositIcon } from '../../assets/img/svg/deposit.svg';

import axios from 'axios';
import { config } from '../../util_config';

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
        padding: 10,
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
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        marginTop: 20,
    },
    switch: {
        height: 20,
    },
    selectOddsDisplay: {
        width: 90,
        height: 30,
        paddingTop: 0,
        marginBottom: 10,
        paddingBottom: 0,
        float: 'right',
        display: 'inline',
    },
});

const StyledSwitch = withStyles({
    root: {
        height: 20,
    },
    switchBase: {
        height: 20,
        color: 'primary',
        '&$checked': {
            color: 'primary',
        },
    }
})(Switch);

export class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkEmail: false,
            checkSMS: false,
            checkPost: false,
            checkPhone: false,
            checkEmailNotification: false,

            checkMarketingEmail: false,
            checkMarketingSMS: false,
            checkMarketingPost: false,
            checkMarketingPhone: false,
            checkMarketingEmailNotification: false,

            balance: 0.00,
            balanceCurrency: "USD",

            oddsDisplay: 'decimal',
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSMSChange = this.handleSMSChange.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailNotificationChange = this.handleEmailNotificationChange.bind(this);
        this.handleMarketingEmailChange = this.handleMarketingEmailChange.bind(this);
        this.handleMarketingSMSChange = this.handleMarketingSMSChange.bind(this);
        this.handleMarketingPostChange = this.handleMarketingPostChange.bind(this);
        this.handleMarketingPhoneChange = this.handleMarketingPhoneChange.bind(this);
        this.handleMarketingEmailNotificationChange = this.handleMarketingEmailNotificationChange.bind(this);

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
        this.props.hide_settings();
    }

    handleEmailChange(event) {
        this.setState({ checkEmail: event.target.checked });
    };

    handleSMSChange(event) {
        this.setState({ checkSMS: event.target.checked });
    };

    handlePostChange(event) {
        this.setState({ checkPost: event.target.checked });
    };

    handlePhoneChange(event) {
        this.setState({ checkPhone: event.target.checked });
    };

    handleEmailNotificationChange(event) {
        this.setState({ checkEmailNotification: event.target.checked });
    };

    handleMarketingEmailChange(event) {
        this.setState({ checkMarketingEmail: event.target.checked });
    };

    handleMarketingSMSChange(event) {
        this.setState({ checkMarketingSMS: event.target.checked });
    };

    handleMarketingPostChange(event) {
        this.setState({ checkMarketingPost: event.target.checked });
    };

    handleMarketingPhoneChange(event) {
        this.setState({ checkMarketingPhone: event.target.checked });
    };

    handleMarketingEmailNotificationChange(event) {
        this.setState({ checkMarketingEmailNotification: event.target.checked });
    };

    handleOddsDisplayChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { checkEmail,
            checkSMS,
            checkPost,
            checkPhone,
            checkEmailNotification,

            checkMarketingEmail,
            checkMarketingSMS,
            checkMarketingPost,
            checkMarketingPhone,
            checkMarketingEmailNotification,

            oddsDisplay } = this.state;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <BackIcon />
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.Settings" defaultMessage="Settings" />
                        </div>
                        <div className={classes.grow} />
                        <Button variant="contained" className={classes.balanceButton}>
                            <DepositIcon className={classes.depositIcon} />
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={this.state.balance}
                                style='currency'
                                currency={this.state.balanceCurrency}
                            />
                        </Button>
                        <Button variant="outlined" className={classes.userButton}>
                            <RedUserIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.spaceRow}>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.helpPaper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.boldText}>
                                        <FormattedMessage id="accountmenu.Settings" defaultMessage="Settings" />
                                    </div>
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.settings.offer-via-email" defaultMessage="Offer and news through e-mail" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkEmail}
                                        onChange={this.handleEmailChange}
                                        value="checkEmail"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-sms" defaultMessage="Offer and news through SMS" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkSMS}
                                        onChange={this.handleSMSChange}
                                        value="checkSMS"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-post" defaultMessage="Offer and news by post" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkPost}
                                        onChange={this.handlePostChange}
                                        value="checkPost"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-phone" defaultMessage="Offer and news through phone" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkPhone}
                                        onChange={this.handlePhoneChange}
                                        value="checkPhone"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.email-notifications" defaultMessage="Email notifications about approved withdraws" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkEmailNotification}
                                        onChange={this.handleEmailNotificationChange}
                                        value="checkEmailNotification"
                                    />
                                </Grid>
                                <Grid item xs={8} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.odds-display" defaultMessage="Odds display" />
                                    </div>
                                </Grid>
                                <Grid item xs={4} className={classes.row}>
                                    <select
                                        value={oddsDisplay}
                                        onChange={this.handleOddsDisplayChange}
                                        className={classes.selectOddsDisplay}
                                    >
                                        <option value={'decimal'}>Decimal</option>
                                        <option value={'float'}>Float</option>
                                        <option value={'double'}>Double</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.boldText}>
                                        <FormattedMessage id="settings.marketing-preferences" defaultMessage="Marketing Preferences" />
                                    </div>
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.settings.offer-via-email" defaultMessage="Offer and news through e-mail" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkMarketingEmail}
                                        onChange={this.handleMarketingEmailChange}
                                        value="checkMarketingEmail"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-sms" defaultMessage="Offer and news through SMS" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkMarketingSMS}
                                        onChange={this.handleMarketingSMSChange}
                                        value="checkMarketingSMS"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-post" defaultMessage="Offer and news by post" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkMarketingPost}
                                        onChange={this.handleMarketingPostChange}
                                        value="checkMarketingPost"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.offer-via-phone" defaultMessage="Offer and news through phone" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkMarketingPhone}
                                        onChange={this.handleMarketingPhoneChange}
                                        value="checkMarketingPhone"
                                    />
                                </Grid>
                                <Grid item xs={9} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="settings.email-notifications" defaultMessage="Email notifications about approved withdraws" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.row}>
                                    <StyledSwitch
                                        checked={checkMarketingEmailNotification}
                                        onChange={this.handleMarketingEmailNotificationChange}
                                        value="checkMarketingEmailNotification"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.bottomRow}>
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

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_account_menu, hide_settings })(Settings))));