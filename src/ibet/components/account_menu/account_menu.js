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
import {
    logout,
    handle_search,
    setLanguage,
    postLogout,
    show_change_password,
    show_user_profile,
    show_deposit,
    show_withdraw,
    show_refer_user,
    show_open_bets,
    show_settled_bets,
    show_promotions,
    show_settings,
    show_help,
    show_responsible_gambling,
    hide_account_menu
} from '../../../actions';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Flag from 'react-flagkit';
import Paper from '@material-ui/core/Paper';
import { images } from '../../../util_config';

import '../../css/account_menu.scss';

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
        alignItems: 'center',
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
        display: 'block',
        width: '100%',
        height: 24
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
        margin: theme.spacing(),
        textTransform: 'capitalize'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    },
    help: {
        width: 20,
        height: 11.7,
    },
    infoIcon: {
        display: 'inline',
        marginLeft: 5,
        marginBottom: -3,
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
    myAccountText: {
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
            lang: 'en',
            showLeftPanel: false,
            showRightPanel: false,
            showLangListItems: false,
            term: '',
            facebooklogin: false,
            userID: "",
            name: "",
            email: "",
            picture: "",

            height: window.innerHeight,
            width: window.innerWidth,
        };

        this.openBetsClicked = this.openBetsClicked.bind(this);
        this.depositClicked = this.depositClicked.bind(this);
    }

    toggleSidePanel = (side, open) => () => {
        this.setState({
            [side]: open,
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
        this.props.hide_account_menu();
    }

    toggleLanguageListItem = () => {
        this.setState(state => ({ showLangListItems: !state.showLangListItems }));
    };

    depositClicked = event => {
        this.props.hide_account_menu();
        this.props.show_deposit();
    }

    withdrawClicked = event => {
        this.props.hide_account_menu();
        this.props.show_withdraw();
    }

    openBetsClicked = event => {
        this.props.hide_account_menu();
        this.props.show_open_bets();
    }

    settledBetsClicked = event => {
        this.props.hide_account_menu();
        this.props.show_settled_bets();
    }

    promotionsClicked = event => {
        this.props.hide_account_menu();
        this.props.show_promotions();
    }
    settingsClicked = event => {
        this.props.hide_account_menu();
        this.props.show_settings();
    }

    helpClicked = event => {
        this.props.hide_account_menu();
        this.props.show_help();
    }

    responsibleGamblingClicked = event => {
        this.props.hide_account_menu();
        this.props.show_responsible_gambling();
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        let languagesMessage = formatMessage({ id: "accountmenu.languages" });

        return (
            <div className={classes.root}>
                <div className={classes.sectionDesktop}>
                    <Grid container className={classes.root} spacing={0}>
                        <Grid item xs={12} className={classes.titleRow}>
                            <Button onClick={this.closeClicked} className={classes.closeButton}>
                                <img src={images.src + 'red-close.svg'} alt=""/>
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
                            {/* <LineChart className={classes.chart} data={chartData} options={chartOptions} width="340" height="150" /> */}
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
                            <img src={images.src + 'oval-info.svg'} className={classes.infoIcon}  alt=""/>
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
                                <img src={images.src + 'oval-info.svg'} className={classes.infoIcon}  alt=""/>

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
                                    <img src={images.src + 'lock.svg'} className={classes.lock}  alt=""/>
                                    <input className={classes.achievedProgressBar}>
                                    </input>
                                    <img src={images.src + 'account-menu-check.svg'} className={classes.lock}  alt=""/>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.depositClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-deposit.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.withdrawClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-withdraw.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.withdraw" defaultMessage="Withdraw" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.openBetsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-open-bets.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.open-bets" defaultMessage="Open Bets" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.settledBetsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-settled-bets.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.settled-bets" defaultMessage="Settled Bets" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.promotionsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-promotions.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.promotions" defaultMessage="Promotions" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.gridButton} onClick={this.settingsClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-settings.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.settings" defaultMessage="Settings" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.leftGridButton}>
                            <Button className={classes.gridButton} onClick={this.helpClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-help.svg'} className={classes.menuIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.help" defaultMessage="Help" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.rightGridButton}>
                            <Button className={classes.responsibleButton} onClick={this.responsibleGamblingClicked}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'account-menu-responsible.svg'} className={classes.menuIcon}  alt=""/>
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
                                    <img src={images.src + 'user.svg'} className={classes.editProfileIcon}  alt=""/>
                                    <FormattedMessage id="accountmenu.edit-profile" defaultMessage="Edit Profile" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={4} className={classes.mergedGridButton}>
                            <Button className={classes.logoutButton}
                                onClick={() => {
                                    this.props.hide_account_menu();
                                    this.props.show_refer_user()
                                }}>
                                <div className={classes.blockButtonLabel}>
                                    <img src={images.src + 'user-plus.svg'} className={classes.editProfileIcon}  alt=""/>

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
                                    <img src={images.src + 'account-menu-logout.svg'} className={classes.menuIcon}  alt=""/>

                                    <FormattedMessage id="accountmenu.logout" defaultMessage="Logout" />
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={1} className={classes.mergedGridButton}>
                        </Grid>
                        <Grid item xs={12} className={classes.mergedGridButton}>
                            <Button
                                onClick={() => {
                                    this.props.hide_account_menu();
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
        showDeposit: state.general.show_deposit,
    }
}

AccountMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, {
    logout,
    handle_search,
    setLanguage,
    show_change_password,
    show_user_profile,
    show_deposit,
    show_withdraw,
    show_open_bets,
    show_settled_bets,
    show_promotions,
    show_settings,
    show_help,
    show_responsible_gambling,
    hide_account_menu,
    show_refer_user
})(AccountMenu))));