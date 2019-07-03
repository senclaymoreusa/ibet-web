import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Person from '@material-ui/icons/Person';
import Input from '@material-ui/icons/Input';
import Language from '@material-ui/icons/Language';

import PeopleOutline from '@material-ui/icons/PeopleOutline';
import DirectionsRun from '@material-ui/icons/DirectionsRun';

import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, postLogout, show_change_password, show_user_profile, show_deposit, show_withdraw } from '../../actions';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as LockIcon } from '../../assets/img/svg/lock.svg';
import { ReactComponent as DepositIcon } from '../../assets/img/svg/account-menu-deposit.svg';
import { ReactComponent as WithdrawIcon } from '../../assets/img/svg/account-menu-withdraw.svg';
import { ReactComponent as OpenBetsIcon } from '../../assets/img/svg/account-menu-open-bets.svg';
import { ReactComponent as SettledBetsIcon } from '../../assets/img/svg/account-menu-settled-bets.svg';
import { ReactComponent as PromotionsIcon } from '../../assets/img/svg/account-menu-promotions.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/svg/account-menu-settings.svg';
import { ReactComponent as HelpIcon } from '../../assets/img/svg/account-menu-help.svg';
import { ReactComponent as ResponsibleIcon } from '../../assets/img/svg/account-menu-responsible.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/svg/account-menu-logout.svg';
import { ReactComponent as UserIcon } from '../../assets/img/svg/user.svg';
import { ReactComponent as CheckIcon } from '../../assets/img/svg/account-menu-check.svg';
import { ReactComponent as OvalIcon } from '../../assets/img/svg/oval-info.svg';
import { ReactComponent as UserPlusIcon } from '../../assets/img/svg/user-plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/svg/red-close.svg';


import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Flag from 'react-flagkit';
import Paper from '@material-ui/core/Paper';


import '../../css/account_menu.scss';
import { isNullOrUndefined } from 'util';


const styles = theme => ({
    root: {
        width: '100%',
    },
    hi: {
        display: 'inline',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    firstNameLabel: {
        display: 'inline',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 5,
    },
    balanceLabel: {
        display: 'inline',
        float: 'right',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    firstRow: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundImage: 'linear-gradient(#dddddd, #ffffff)'
    },
    secondRow: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    usernameLabel: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    balanceValue: {
        display: 'inline',
        float: 'right',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 5,
    },

    closeButton: {
        height: 20,
        width: 20,
        padding: 0,
        display: 'inline',
        float: 'right',
    },
    cashLabel: {
        display: 'inline',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    cashValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    bonusLabel: {
        display: 'inline',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    bonusValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    cashBetValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    allAboutBonus: {
        fontSize: 13.5,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.67,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: '#212121',
        textDecoration: 'underline',
        marginBottom: 10,
        marginTop: 10,
    },
    feeBetPaper: {
        textAlign: 'center',

        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 15,
    },
    feeBetLabel: {
        display: 'inline',
        textAlign: 'center',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
    },
    feeBetValue: {
        display: 'inline',
        textAlign: 'center',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
    },
    achievedLabel: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    achievedStart: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#212121',
    },
    achievedEnd: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#212121',
    },
    achievedProgress: {
        width: '100%',
        height: 24,
    },
    achievedProgressBar: {
        display: 'inline',
        width: 278,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        height: 17,
        borderRadius: 9.3,
        border: 0,
        backgroundImage: 'linear-gradient(95deg, #40bea5, #98e2a8)',
    },
    lock: {
        display: 'inline',
    },
    leftGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        borderRight: '1px solid #cdcdcd',
        height: 90,
    },
    rightGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        height: 90,
    },
    mergedGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        height: 60,
    },
    gridButton: {
        height: '100%',
        width: '100%',
    },
    blockButtonLabel: {
        position: 'relative',
    },
    menuIcon: {
        width: '100%',
    },
    editProfileIcon: {
        width: '100%',
        height: 20,
    },
    responsibleButton: {
        height: '100%',
        width: '100%',
        color: '#212121',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    logoutButton: {
        height: '100%',
        width: '100%',
        color: '#212121',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    changePasswordButton: {
        height: '100%',
        width: '100%',
        color: '#04599a',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        width: '90%',
        margin: theme.spacing.unit,
        textTransform: 'capitalize'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    grow: {
        flexGrow: 1,
    },
    help: {
        width: 20,
        height: 11.7,
    },
    infoIcon:{
        display: 'inline',
        marginLeft: 5,
        marginBottom:-3,
    },
    closeButton: {
        width: 32,
        height: 32,
        minWidth: 32,
        marginTop: 6,
        marginBottom: 6,
    },
    oval: {
        marginLeft: 8,
        width: 20,
        height: 20,
        minWidth: 20,
        boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.18)',
        border: 'solid 2.3px #1e1e1e',
        backgroundColor: '#2b2b2b',
        borderRadius: 20,
        display: 'inline',
    },
    chart: {
        marginTop: 10,
        marginBottom: 10
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
    myAccountText:{
        color: '#04599a',
        fontSize: 15.8,
        textTransform: 'capitalize',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        marginTop: 12,
        marginLeft: 5,
    },
});

export class AccountMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,

            lang: 'en',
            showLeftPanel: false,
            showRightPanel: false,
            showLangListItems: false,
            term: '',
            facebooklogin: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        };

        this.openBetsClicked = this.openBetsClicked.bind(this);

    }

    toggleSidePanel = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleLanguageMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleLanguageMenuClose = (ev) => {
        this.setState({ anchorEl: null });
        this.changeLanguage(ev.nativeEvent.target.dataset.myValue);
    };

    changeLanguage = (lang) => {
        this.props.setLanguage(lang)
            .then((res) => {
                // console.log("language change to:" + res.data);
            });
    };

    componentWillReceiveProps(props) {
        this.setState({ term: '' });
    }

    componentDidMount() {
        var facebooklogin = localStorage.getItem('facebook')
        this.setState({ facebooklogin: facebooklogin })
        var facebookObj = JSON.parse(localStorage.getItem('facebookObj'));
        console.log(facebooklogin);
        if (facebooklogin === 'true') {
            this.setState({
                userID: facebookObj.userID,
                name: facebookObj.name,
                email: facebookObj.email,
                picture: facebookObj.picture
            })
        }
    }

    closeClicked = (event) => {
        this.props.onCloseItemClicked();
    }

    toggleLanguageListItem = () => {
        this.setState(state => ({ showLangListItems: !state.showLangListItems }));
    };

    handleMenuClose = (ev) => {
        // this.setState({ this.props.showProfilePopper: false });
    };

    depositClicked = event => {
        //this.props.onMenuItemClicked('deposit');
        this.props.show_deposit();
        this.props.onCloseItemClicked();
    }
    
    withdrawClicked = event => {
        //this.props.onMenuItemClicked('withdraw');
        this.props.show_withdraw();
        this.props.onCloseItemClicked();
    }

    openBetsClicked = (ev) => {
        this.props.onMenuItemClicked('open-bets');
    }

    settledBetsClicked = event => {
        this.props.onMenuItemClicked('settled-bets');
    }

    promotionsClicked = event => {
        this.props.onMenuItemClicked('promotions');
    }
    settingsClicked = event => {
        this.props.onMenuItemClicked('settings');
    }

    helpClicked = event => {
        this.props.onMenuItemClicked('help');
    }

    responsibleGamblingClicked = event => {
        this.props.onMenuItemClicked('responsible-gambling');
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        let languagesMessage = formatMessage({ id: "accountmenu.languages" });

        var LineChart = require("react-chartjs").Line;

        var chartData = {
            labels: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [28, 48, 60, 30, 45, 30, 20]
                }
            ]
        };

        const chartOptions = {
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,
            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,
            //Boolean - Whether to show a dot for each point
            pointDot: true,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,
        };

        return (
            <div className={classes.root}>
                <div className={classes.sectionDesktop}>
                    <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.closeClicked} className={classes.closeButton}>
                            <CloseIcon />
                        </Button>
                        <div className={classes.myAccountText}>
                                <FormattedMessage id="accountmenu.my-account" defaultMessage="My Account" />
                            </div>
                    </Grid>
                    <Grid item xs={12} className={classes.firstRow}>
                            <div className={classes.hi}>
                                <FormattedMessage id="accountmenu.hi" defaultMessage="Hi" />
                            </div>
                            <span className={classes.firstNameLabel}>{this.state.userID + "David"}</span>
                            <span className={classes.balanceValue}>$345.00</span>
                            <div className={classes.balanceLabel}>
                                <FormattedMessage id="accountmenu.balance" defaultMessage="Balance:" />
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <span className={classes.usernameLabel}>{this.state.name + "---Docallaghan86"}</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <LineChart className={classes.chart} data={chartData} options={chartOptions} width="340" height="150" />
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <div className={classes.cashLabel}>
                                <FormattedMessage id="accountmenu.cash-label" defaultMessage="Cash" />
                                <span>(100%)</span>
                                <span>:</span>
                            </div>
                            <span className={classes.cashValue}>$345.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <div className={classes.bonusLabel}>
                                <FormattedMessage id="accountmenu.bonus-label" defaultMessage="Bonus" />
                                <span>(0%)</span>
                                <span>:</span>
                            </div>
                            <span className={classes.bonusValue}>$0.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <div className={classes.bonusLabel}>
                                <FormattedMessage id="accountmenu.next-bet-split" defaultMessage="Next Bet Split:" />
                            </div>
                            <OvalIcon className={classes.infoIcon}/>
                            <span className={classes.cashBetValue}>$0.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <div className={classes.allAboutBonus}>
                                <FormattedMessage id="accountmenu.all-about-bonus" defaultMessage="All you need to know about your bonus." />
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.secondRow}>
                            <Paper className={classes.feeBetPaper}>
                                <div className={classes.feeBetLabel}>
                                    <FormattedMessage id="accountmenu.fee-bet" defaultMessage="Fee Bet" />
                                </div>
                                <span className={classes.feeBetValue}> - </span>
                                <span className={classes.feeBetValue}>$0.00</span>
                                <OvalIcon className={classes.infoIcon}/>

                                <Grid container className={classes.root} spacing={0}>
                                    <Grid item xs={3}>
                                        <span className={classes.achievedStart}>$0.00</span>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={classes.achievedLabel}>
                                            <FormattedMessage id="accountmenu.achieved" defaultMessage="Achieved" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span className={classes.achievedEnd}>$0.00</span>
                                    </Grid>
                                </Grid>
                                <div className={classes.achievedProgress}>
                                    <LockIcon className={classes.lock} />
                                    <input className={classes.achievedProgressBar}>
                                    </input>
                                    <CheckIcon className={classes.lock} />
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.depositClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <DepositIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.withdrawClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <WithdrawIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.withdraw" defaultMessage="Withdraw" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.openBetsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <OpenBetsIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.open-bets" defaultMessage="Open Bets" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.settledBetsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <SettledBetsIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.settled-bets" defaultMessage="Settled Bets" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.promotionsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <PromotionsIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.promotions" defaultMessage="Promotions" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.settingsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <SettingsIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.settings" defaultMessage="Settings" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.helpClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <HelpIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.help" defaultMessage="Help" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.responsibleButton} onClick={this.responsibleGamblingClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <ResponsibleIcon className={classes.menuIcon} />
                                    <FormattedMessage id="accountmenu.responsible-gaming" defaultMessage="Responsible Gaming" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={1} className={classes.mergedGridButton}>
                        </Grid>
                        <Grid item xs={3} className={classes.mergedGridButton}>
                            <Button className={classes.logoutButton}
                                onClick={() => {
                                    //this.props.onCloseItemClicked();
                                    //this.props.show_user_profile();
                                    this.props.history.push('/profile/')
                                }}
                                //href="/update_profile/"
                            >
                                <div className={classes.blockButtonLabel}>
                                    <UserIcon className={classes.editProfileIcon} />
                                    <FormattedMessage id="accountmenu.edit-profile" defaultMessage="Edit Profile" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={4} className={classes.mergedGridButton}>
                            <Button className={classes.logoutButton}
                                href="/referral/">
                                <div className={classes.blockButtonLabel}>
                                    <UserPlusIcon className={classes.editProfileIcon} />

                                    <FormattedMessage id="accountmenu.refer-friend" defaultMessage="Refer Friend" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={3} className={classes.mergedGridButton}>
                            <Button className={classes.logoutButton}
                                onClick={() => {
                                    this.props.logout()
                                    postLogout();
                                }}>
                                <div className={classes.blockButtonLabel}>
                                    <LogoutIcon className={classes.menuIcon} />

                                    <FormattedMessage id="accountmenu.logout" defaultMessage="Logout" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={1} className={classes.mergedGridButton}>
                        </Grid>
                        <Grid item xs={12} className={classes.mergedGridButton}>
                            <Button 
                                onClick={() => {
                                    this.props.onCloseItemClicked();
                                    this.props.show_change_password();
                               }} 
                                className={classes.changePasswordButton}>
                                <FormattedMessage id="accountmenu.change-password" defaultMessage="Change Password ›" />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.sectionMobile}>
                    <div className={classes.list}>
                        <List>
                            {
                                this.props.isAuthenticated || this.state.facebooklogin === 'true' ?
                                    <div>
                                        <ListItem button component="a" href="/profile/">
                                            <ListItemIcon>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <FormattedMessage id="accountmenu.profile" defaultMessage='Profile' />
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem button component="a" href="/referral/">
                                            <ListItemIcon>
                                                <PeopleOutline />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <FormattedMessage id="accountmenu.referral" defaultMessage='Refer new user' />
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem onClick={() => {
                                            this.props.logout()
                                            window.location.reload()
                                        }}>
                                            <ListItemIcon>
                                                <DirectionsRun />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <FormattedMessage id="nav.logout" defaultMessage='Logout' />
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                                    :
                                    <div>
                                        <ListItem button component="a" href="/signup/">
                                            <ListItemIcon>
                                                <PersonAdd />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <FormattedMessage id="nav.signup" defaultMessage='Signup' />
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem button component="a" href="/login/">
                                            <ListItemIcon>
                                                <Input />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <FormattedMessage id="nav.login" defaultMessage='Login' />
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                            }
                            <div>
                                <Divider />
                                <ListItem button onClick={this.toggleLanguageListItem}>
                                    <ListItemIcon>
                                        <Language />
                                    </ListItemIcon>
                                    <ListItemText inset primary={languagesMessage} />
                                    {this.state.showLangListItems ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={this.state.showLangListItems} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon>
                                                <Flag country="US" />
                                            </ListItemIcon>
                                            <ListItemText inset primary="English" onClick={() => this.changeLanguage('en')} />
                                        </ListItem>
                                        <ListItem button className={classes.nested} onClick={() => this.changeLanguage('zh-hans')}>
                                            <ListItemIcon>
                                                <Flag country="CN" />
                                            </ListItemIcon>
                                            <ListItemText inset primary="簡體中文" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon>
                                                <Flag country="FR" />
                                            </ListItemIcon>
                                            <ListItemText inset primary="Français" onClick={() => this.changeLanguage('fr')} />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </div>
                        </List>
                    </div>
                </div>
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

AccountMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_change_password, show_user_profile, show_deposit, show_withdraw })(AccountMenu))));