import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';

import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import blue from '@material-ui/core/colors/blue';

import { errors } from './errors';


import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout,
    handle_search,
    setLanguage,
    authCheckState,
    AUTH_RESULT_FAIL,
    authLogin,
    show_login,
    show_signup,
    hide_login,
    show_signup_finish,
    hide_user_profile,
    hide_update_profile,
    show_account_menu,
    hide_account_menu
} from '../actions';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from './account_menu/account_menu';
import Deposit from './account_menu/deposit';
import Withdraw from './account_menu/withdraw';
import Help from './account_menu/help';
import Promotions from './account_menu/promotions';
import Settings from './account_menu/settings';
import MyBets from './account_menu/my_bets';
import ResponsibleGambling from './account_menu/responsible_gambling';
import DepositSuccess from './new_deposit_success';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';


import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Flag from 'react-flagkit';
import { ReactComponent as IbetLogo } from '../assets/img/svg/ibet_logo.svg';
import { ReactComponent as BetIcon } from '../assets/img/svg/bet.svg';
import { ReactComponent as SlotsIcon } from '../assets/img/svg/slots.svg';
import { ReactComponent as LotteryIcon } from '../assets/img/svg/lottery.svg';
import { ReactComponent as SoccerIcon } from '../assets/img/svg/soccer.svg';
import { ReactComponent as DepositIcon } from '../assets/img/svg/deposit.svg';


import Login from './login_2.js';
import Signup from './signup_2.js';
import Signup_Email from './signup_email';
import Signup_Detail from './signup_detail';
import Signup_Contact from './signup_contact';
import Signup_Phone from './signup_phone';
import Complete_Registration from './complete_registration';
import Phone_Verification from './signup_phone_verification';
import One_Click_Finish from './one_click_finish';
import Register_Finish from './register_finish';
import Change_Password from './change_password_new';
import New_Profile from './new_profile';
import New_Update_Profile from './new_update_profile';
import New_Deposit from './new_deposit';
import New_Deposit_Confirm from './new_deposit_confirm';
import New_Deposit_Wechat from './new_deposit_amount_wechat';
import New_Deposit_paypal from './new_deposite_amount_paypal';
import New_Withdraw from './new_withdraw';
import New_Forget_Password from './forget_password_new';
import Forget_Password_Validation from './forget_password_validation';
import Refer_User from './refer_user';

import axios from 'axios';
import { config } from '../util_config';

import SearchBar from './search_bar';

import '../css/top_navbar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
    },
    soccer: {
        width: 28,
        height: 28,
        backgroundColor: '#ffffff'
    },
    appBar: {
        height: 72,
        boxShadow: '0 8px 18px 0 rgba(0, 0, 0, 0.4)',
    },
    list: {
        width: 250,
    },
    subMenu: {
        width: '99%',
        marginTop: 15
    },
    grow: {
        flexGrow: 1,
    },
    mobileLeftMenuButton: {
        marginLeft: -12,
        marginRight: 2,
    },
    mobileMenuButton: {
        marginLeft: 0,
        marginRight: -12,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    mainMenu: {
        display: 'none',
        height: 72,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    logoButton: {
        "&:hover": {
            backgroundColor: "#ffffff",
        },
        "&:active": {
            backgroundColor: "#ffffff",
        }
    },
    sectionDesktop: {
        display: 'none',
        height: '100%',
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
        margin: theme.spacing.unit,
        color: 'white'
    },
    subbutton: {
        margin: theme.spacing.unit
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    signupButton: {
        marginTop: 13,
        marginBottom: 15,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

        width: 220,
        fontSize: 18,
        height: 44,
        color: '#212121',
        backgroundColor: '#ffffff',
        borderRadius: 22,
        border: 'solid 2px #212121',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#212121",
            color: '#ffffff',
        }
    },
    loginButton: {
        marginTop: 13,
        marginBottom: 15,
        width: 100,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fontSize: 18,
        height: 44,
        color: '#212121',
        backgroundColor: '#ffffff',
        borderRadius: 22,
        border: 'solid 2px #212121',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#212121",
            color: '#ffffff',
        }
    },
    textField: {
        marginTop: 13,
        marginBottom: 15,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 13,
        paddingBottom: 13,
        fontSize: 18,
        outline: 'none',
        width: 180,
        height: 44,
        objectFit: 'contain',
        borderRadius: 22,
        border: 'solid 1px #e8e8e8',
        backgroundColor: '#f1f1f1',
    },
    balanceButton: {
        marginTop: 13,
        marginBottom: 15,
        width: 130,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fontSize: 18,
        height: 44,
        color: '#ffffff',
        backgroundColor: '#fe0000',
        borderRadius: 22,
        border: 'solid 2px #fe0000',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#fe0000",
            color: '#ffffff',
        }
    },
    balanceIcon: {
        marginRight: theme.spacing.unit,
    },
    profileButton: {
        display: 'inline',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        "&:hover": {
            backgroundColor: "#ffffff",
        },
        "&:active": {
            backgroundColor: "#ffffff",
        }
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    searchResult: {
        width: 400,
        height: 100,
        marginTop: 42,
        marginLeft: 0,
        marginRight: 0

    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {

    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    search: {
        display: 'inline-block',
        flexGrow: 1,
    },
    langMenu: {
        zIndex: 5000
    },
    lang_button: {
        marginTop: 17,
        minWidth: 0
    },
    lang_menu_list: {
        backgroundColor: '#ffffff',
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
    },
    lang_menu_list_item: {
        border: '1px solid #ffffff',
        "&:hover": {
            borderRadius: 4,
            border: '1px solid #868686',
            backgroundColor: '#ffffff',
        },
    },
    lang_menu_list_item_selected: {
        borderRadius: 4,
        border: '1px solid #000000',
        backgroundColor: '#ffffff',

    },
    lang_menu_list_item_text: {
        marginLeft: 10,
        color: 'black',
    },
    accountMenuPaper: {
        padding: 0,
        width: 360,
    },
    footer: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 20,
        backgroundColor: '#212121',
    },
    footer_menu_container: {
        display: 'inline',
        marginTop: 20
    },
    lang_container: {
        display: 'inline',
        marginLeft: 0,
    },
    langPopper: {
        zIndex: 2002,
    },
    profilePopper: {
        //zIndex: 2002,
        width: 360,
    },
    margin: {
        margin: 'auto',
    },
    userIcon: {
        '&:hover': {
            fillRule: '#fe0000',
        }
    },
    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
            backgroundColor: blue[800],
        },
    },
    separator: {
        width: 1.6,
        height: 25,
        marginTop: 20,
        opacity: 1,
        marginLeft: 10,
        backgroundColor: '#212121',
    },
});

const muiLogoBarTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
    },
    appBar: {
        height: 72,
    },
    typography: {
        useNextVariants: true,
    },
});

const muiMenuBarTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121'
        },
    },
    appBar: {
        height: 72,
    },
    typography: {
        useNextVariants: true,
    },
});

const SVG = ({
    style = {},
    fill = "transparent",
    width = "36px",
    viewBox = "0 0 26 27",
    className = "userIcon",
}) => (
        <svg
            width={width}
            style={style}
            height="27px"
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Nav" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="navigation" transform="translate(-1304.000000, -21.000000)" stroke="#212121" strokeWidth="1.5625">
                    <g id="Login-Elements">
                        <g transform="translate(1280.000000, 13.000000)">
                            <g id="Open-Account">
                                <path d="M43,14.6367187 C43,17.5362187 40.6495,19.8867188 37.75,19.8867188 C34.8505,19.8867188 32.5,17.5362187 32.5,14.6367187 C32.5,11.7372188 34.8505,9.38671875 37.75,9.38671875 C40.6495,9.38671875 43,11.7372188 43,14.6367187 Z M37,24.3867187 C40.8128,24.3867187 44.2816,25.7412188 46.4976,26.8602187 C48.032,27.6372188 49,29.1792188 49,30.8757188 L49,31.6992187 C49,32.6307187 48.2336,33.3867187 47.2864,33.3867187 L26.7136,33.3867187 C25.7664,33.3867187 25,32.6307187 25,31.6992187 L25,30.8757188 C25,29.1792188 25.968,27.6372188 27.5024,26.8602187 C29.7184,25.7412188 33.1872,24.3867187 37,24.3867187 Z" id="User"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );


export class TopNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.profileRef = React.createRef();

        let langProperty = localStorage.getItem('lang');

        this.searchDiv = React.createRef();
        this.profileRef = React.createRef();

        this.state = {
            open: false,
            subMenuType: null,
            showSubMenu: false,
            expandSearchBar: false,
            anchorEl: null,
            showProfilePopper: false,
            currentAccountMenuItem: '',
            anchorElLogin: null,
            anchorElChangePassowrd: null,
            showTopPanel: false,
            showLeftPanel: false,
            showRightPanel: false,
            showLangListItems: false,
            term: '',
            facebooklogin: false,
            userID: "",
            name: "",
            email: "",
            picture: "",
            showLangMenu: false,
            show_loggedin_status: false,


            balance: 0.00,
            balanceCurrency: "USD",

            username: '',
            password: '',
            showPassword: false,
            button_disable: true,
            check: false,

            height: window.innerHeight,
            width: window.innerWidth,

            errorCode: '',

        };

        this.handleSearch = this.handleSearch.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange_username = this.onInputChange_username.bind(this);
        this.onInputChange_password = this.onInputChange_password.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.onloginFormSubmit = this.onloginFormSubmit.bind(this);
        this.toggleSidePanel = this.toggleSidePanel.bind(this);
        this.profileIconClicked = this.profileIconClicked.bind(this);
    }

    handleSignupOnEnter = (event) => {
        if (!event.currentTarget.children[0].classList.contains('userIconHover')) {
            event.currentTarget.children[0].classList.add('userIconHover');
        }

        event.currentTarget.children[1].style.visibility = "visible";
    };

    handleSignupOnLeave = (event) => {
        if (event.currentTarget.children[0].classList.contains('userIconHover')) {
            event.currentTarget.children[0].classList.remove('userIconHover');
        }

        event.currentTarget.children[1].style.visibility = "hidden";

    };

    handleUserProfileOnEnter = (event) => {
        if (!event.currentTarget.children[0].classList.contains('profileIconHover')) {
            event.currentTarget.children[0].classList.add('profileIconHover');
        }

        event.currentTarget.children[1].style.visibility = "visible";
    };

    handleUserProfileLeave = (event) => {
        if (event.currentTarget.children[0].classList.contains('profileIconHover')) {
            event.currentTarget.children[0].classList.remove('profileIconHover');
        }

        event.currentTarget.children[1].style.visibility = "hidden";

    };

    handleSearch = () => {
        if (!this.state.expandSearchBar)
            this.actualChild.focusInput();
        else
            this.actualChild.blurInput();

        this.setState({ expandSearchBar: !this.state.expandSearchBar });
    }

    handleSubMenuToggle = (param) => {
        if (this.state.subMenuType === param) {
            this.setState({ showSubMenu: false });
            this.setState({ subMenuType: null });
        } else {
            this.setState({ showSubMenu: false });
            this.setState({ showSubMenu: true });
            this.setState({ subMenuType: param });
        }
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) { return; }

        this.setState({ showSubMenu: false });
        this.setState({ subMenuType: null });
    };

    submenuHandleChange = (event, submenu) => {
        this.setState({ submenu });
    };

    toggleSidePanel(event, side, open) {
        const { currentTarget } = event;
        this.setState({
            anchorEl: currentTarget,
            [side]: open,
        });
    };

    handleProfilePopper = event => {
        this.setState({ anchorEl: event.currentTarget });
        this.setState({ showProfilePopper: !this.state.showProfilePopper });

    }

    handleLanguageMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
        this.setState({ showLangMenu: !this.state.showLangMenu });
    };

    handleLoginMenuOpen = event => {
        this.setState({ username: '', password: '', anchorElLogin: event.currentTarget })
        this.props.show_login()
    };

    handleShowChangePasswordMenuOpen = event => {
        this.setState({ username: '', password: '', anchorElLogin: event.currentTarget })
        this.props.show_login()
    };

    handleSignupMenuOpen = event => {
        //this.setState({ anchorEl2: event.currentTarget });
        this.setState({ username: '', password: '' })

        this.props.show_signup()
    };

    langMenuClicked = (event) => {
        this.setState({ anchorEl: null });
        this.setState({
            lang: event.currentTarget.dataset.myValue
        })

        this.changeLanguage(event.currentTarget.dataset.myValue);
        this.setState({ showLangMenu: false });
    }

    handleLanguageMenuClose = (ev) => {
        this.setState({ showLangMenu: false });
    };

    // handleProfileMenuClose = (ev) => {
    //     this.setState({ showProfilePopper: false });
    //     this.setState({ currentAccountMenuItem: '' });

    // };

    handleLoginMenuClose() {
        this.props.hide_login()
    }

    changeLanguage = (lang) => {
        this.props.setLanguage(lang)
            .then((res) => {
                // localStorage.setItem("lang", lang);
            });
    };

    onFormSubmit(event) {
        event.preventDefault();
        //this.setState({ term: '' });
    }

    onInputChange_username(event) {
        if (event.target.value && this.state.password) {
            this.setState({ button_disable: false })
        } else {
            this.setState({ button_disable: true })
        }
        this.setState({ username: event.target.value });
    }

    onInputChange_password(event) {
        if (event.target.value && this.state.username) {
            this.setState({ button_disable: false })
        } else {
            this.setState({ button_disable: true })
        }
        this.setState({ password: event.target.value });
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onloginFormSubmit(event) {
        event.preventDefault();

        if (!this.state.username) {
            this.setState({ errorCode: errors.USERNAME_EMPTY_ERROR });
        } else if (!this.state.password) {
            this.setState({ errorCode: errors.PASSWORD_EMPTY_ERROR });
        } else {
            this.props.authLogin(this.state.username, this.state.password)
                .then(() => {
                    if (this.state.check) {
                        localStorage.setItem('remember_username', this.state.username);
                        localStorage.setItem('remember_password', this.state.password);
                        localStorage.setItem('remember_check', 'checked')
                    } else {
                        localStorage.removeItem('remember_username');
                        localStorage.removeItem('remember_password');
                        localStorage.removeItem('remember_check');
                    }
                    this.props.history.push('/');
                })
                .catch(err => {
                    this.setState({ errorCode: err });
                });
        }
    }

    onInputChange_checkbox = async (event) => {
        await this.setState({ check: !this.state.check })
    }

    handleResize = e => {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
    };

    componentWillReceiveProps(props) {
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

    async componentDidMount() {

        if (this.props.isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ balance: res.data.main_wallet });
                    this.setState({ balanceCurrency: res.data.currency });
                })
        }

        window.addEventListener("resize", this.handleResize);

        this.props.authCheckState()
            .then((res) => {
                this.setState({ show_loggedin_status: true });
            })

        var fackbooklogin = localStorage.getItem('facebook')
        this.setState({ facebooklogin: fackbooklogin })
        var fackbookObj = JSON.parse(localStorage.getItem('facebookObj'))
        if (fackbooklogin === 'true') {
            this.setState({
                userID: fackbookObj.userID,
                name: fackbookObj.name,
                email: fackbookObj.email,
                picture: fackbookObj.picture
            })
        }

        const remember_check = localStorage.getItem('remember_check');
        if (remember_check) {
            await this.setState({ check: true })
        }

        const check = localStorage.getItem('one-click');
        if (check) {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            localStorage.removeItem('one-click');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            this.setState({ username: username, password: password, button_disable: false, button_type: 'login-button' })
        } else {
            const remember_check = localStorage.getItem('remember_check');
            if (remember_check) {
                const username = localStorage.getItem('remember_username');
                const password = localStorage.getItem('remember_password');
                this.setState({ username: username, password: password, button_disable: false, button_type: 'login-button' })
            }
        }
    }

    toggleLanguageListItem = () => {
        this.setState(state => ({ showLangListItems: !state.showLangListItems }));
    };

    handleClickAway = () => {
        this.actualChild.blurInput();
        this.setState(state => ({ expandSearchBar: false }));
    };

    setCurrentAccountMenuItem = (menuItem) => {
        this.setState({ showProfilePopper: true });
        this.setState({ currentAccountMenuItem: menuItem });
        //this.props.history.push('/deposit/')
    }

    profileIconClicked = event => {

        if (this.props.showAccountMenu) {
            //this.setState({ anchorEl: null });
            this.props.hide_account_menu();
        } else {
            this.setState({ anchorEl: event.currentTarget });
            this.props.show_account_menu();
        }
        //this.props.onCloseItemClicked();
    }

    render() {
        const { anchorEl, showProfilePopper, showLangMenu, anchorEl2, showRightPanel } = this.state;

        const { classes } = this.props;

        let countryCode = '';
        switch (this.props.lang) {
            case 'en':
                countryCode = 'US';
                break;
            case 'zh-hans':
                countryCode = 'CN';
                break;
            case 'zh':
                countryCode = 'CN';
                break;
            case 'fr':
                countryCode = 'FR';
                break;
            default:
                countryCode = 'US';
        }
        const langButtonIcon = (<Flag country={countryCode} />);

        // let currentMenu = <div></div>;
        // switch (this.state.currentAccountMenuItem) {
        //     case 'open-bets':
        //         currentMenu = <MyBets onMenuItemClicked={this.setCurrentAccountMenuItem} tabValue={0} />;
        //         break;
        //     case 'deposit':
        //         currentMenu = <Deposit onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'withdraw':
        //         currentMenu = <Withdraw onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'help':
        //         currentMenu = <Help onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'promotions':
        //         currentMenu = <Promotions onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'responsible-gambling':
        //         currentMenu = <ResponsibleGambling onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'settings':
        //         currentMenu = <Settings onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        //         break;
        //     case 'settled-bets':
        //         currentMenu = <MyBets onMenuItemClicked={this.setCurrentAccountMenuItem} tabValue={2} />;
        //         break;
        //     default:
        //         currentMenu = <AccountMenu onCloseItemClicked={this.handleProfileMenuClose} onMenuItemClicked={this.setCurrentAccountMenuItem} />;
        // }


        const ProfileMenu = (
            <div ref={this.profileRef} >
                <IconButton
                    className={classes.profileButton}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.profileIconClicked}
                    onMouseEnter={this.handleUserProfileOnEnter}
                    onMouseLeave={this.handleUserProfileLeave}

                >
                    <SVG className="profileIcon" />
                </IconButton>
            </div>
        );

        const LangMenu = (
            <div className={classes.lang_container}>
                <Button className={classes.lang_button} onClick={this.handleLanguageMenuOpen}>{langButtonIcon}</Button>
                <Popper className={classes.langPopper} open={showLangMenu} anchorEl={anchorEl} placement='top-start' transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper id="menu-list-grow" className={classes.lang_menu_list}>
                                <ClickAwayListener onClickAway={this.handleLanguageMenuClose}>
                                    <Menu>
                                        <MenuItem data-my-value={'en'} onClick={this.langMenuClicked}
                                            selected={this.props.lang === 'en'}
                                            classes={{
                                                root: classes.lang_menu_list_item,
                                                selected: classes.lang_menu_list_item_selected
                                            }}>
                                            <Flag country="US" />
                                            <div className={classes.lang_menu_list_item_text}>
                                                <FormattedMessage id="lang.english" defaultMessage='English' />
                                            </div>
                                        </MenuItem>
                                        <MenuItem data-my-value={'zh-hans'} onClick={this.langMenuClicked}
                                            selected={this.props.lang === 'zh-hans' || this.props.lang === 'zh'}
                                            classes={{
                                                root: classes.lang_menu_list_item,
                                                selected: classes.lang_menu_list_item_selected
                                            }}>
                                            <Flag country="CN" />
                                            <div className={classes.lang_menu_list_item_text}>
                                                <FormattedMessage id="lang.chinese" defaultMessage='Chinese' />
                                            </div>
                                        </MenuItem>
                                        <MenuItem data-my-value={'fr'} onClick={this.langMenuClicked}
                                            selected={this.props.lang === 'fr'}
                                            classes={{
                                                root: classes.lang_menu_list_item,
                                                selected: classes.lang_menu_list_item_selected
                                            }}>
                                            <Flag country="FR" />
                                            <div className={classes.lang_menu_list_item_text}>
                                                <FormattedMessage id="lang.french" defaultMessage='French' />
                                            </div>
                                        </MenuItem>
                                    </Menu>
                                </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

            </div>
        );

        const leftMobileSideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button component="a" href="/">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="nav.sports" defaultMessage='Sports' />
                        </ListItemText>
                    </ListItem>
                    <ListItem button component="a" href="/">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="nav.live-casino" defaultMessage='Live Casino' />
                        </ListItemText>
                    </ListItem>
                    <ListItem button component="a" href="/">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="nav.slots" defaultMessage='Slots' />
                        </ListItemText>
                    </ListItem>
                    <ListItem button component="a" href="/">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>
                            <FormattedMessage id="nav.lottery" defaultMessage='Lottery' />
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        );

        let searchClass = ["search"];
        let searchButtonClass = ["search-button"];
        if (this.state.expandSearchBar) {
            searchClass.push('open');
            searchButtonClass.push('open');
        }

        const searchBackgroundStyle = !this.state.expandSearchBar ? {} : { 'display': 'block' };

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={muiLogoBarTheme} >
                    <AppBar position="static" >
                        <Toolbar variant="dense" className={classes.appBar}>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    className={classes.mobileLeftMenuButton}
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={(event) => { this.toggleSidePanel(event, 'showLeftPanel', true) }}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer open={this.state.showLeftPanel} onClose={(event) => { this.toggleSidePanel(event, 'showLeftPanel', false) }}>
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={(event) => { this.toggleSidePanel(event, 'showLeftPanel', false) }}
                                        onKeyDown={(event) => { this.toggleSidePanel(event, 'showLeftPanel', false) }}
                                    >
                                        {leftMobileSideList}
                                    </div>
                                </Drawer>
                            </div>
                            <IconButton href='/' className={classes.logoButton}>
                                <IbetLogo />
                            </IconButton>
                            <div className={classes.grow} />
                            {
                                this.props.isAuthenticated || this.state.facebooklogin === 'true' ?

                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Button
                                            variant="outlined"
                                            className={classes.balanceButton}

                                        >
                                            <DepositIcon className={classes.balanceIcon} />
                                            <FormattedNumber
                                                maximumFractionDigits={2}
                                                value={this.state.balance}
                                                style='currency'
                                                currency={this.state.balanceCurrency}
                                            />
                                        </Button>
                                        <div className={classes.separator} />
                                        {ProfileMenu}
                                    </div>
                                    :
                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Button
                                            variant="outlined"
                                            className={classes.signupButton}
                                            onClick={
                                                //this.props.history.push('/signup/') 
                                                this.handleSignupMenuOpen
                                            }
                                            onMouseEnter={this.handleSignupOnEnter}
                                            onMouseLeave={this.handleSignupOnLeave}
                                        >
                                            <SVG className="userIcon" />
                                            <FormattedMessage id="nav.open-account" defaultMessage='Open Account' />
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className={classes.loginButton}
                                            onClick={
                                                this.handleLoginMenuOpen
                                            }
                                        >
                                            <FormattedMessage id="nav.login" defaultMessage='Login' />
                                        </Button>
                                    </div>
                            }
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    ref={this.profileRef}
                                    className={classes.mobileMenuButton}
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.profileIconClicked}>
                                    <MoreIcon />
                                </IconButton>
                                <Popper open={this.props.showAccountMenu} anchorEl={anchorEl} className={classes.profilePopper}
                                    placement="top-start"
                                    modifiers={{
                                        flip: {
                                            enabled: true,
                                        },
                                        preventOverflow: {
                                            enabled: true,
                                            boundariesElement: 'scrollParent',
                                        },
                                        // arrow: {
                                        //     enabled: true,
                                        //     element: this.profileRef,
                                        // },
                                    }}
                                    transition>
                                    {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                            <Paper>
                                                <AccountMenu onCloseItemClicked={this.handleProfileMenuClose}
                                                    onMenuItemClicked={this.setCurrentAccountMenuItem}
                                                    anchorElProfileIcon={this.ProfileMenu} />
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <MuiThemeProvider theme={muiMenuBarTheme}>
                    <AppBar position="static" >
                        <Toolbar variant="dense" className={classes.appBar}>
                            <div className={classes.mainMenu}>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'sports' ? 'mainButtonActive' : 'mainButton'}
                                        onClick={() => { this.props.history.push("/sports_type") }}>
                                        <SoccerIcon className="soccer" />
                                        <span className="Sports">
                                            <FormattedMessage id="nav.sports" defaultMessage='Sports' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'live-casino' ? 'mainButtonActive' : 'mainButton'}
                                        onClick={() => { this.props.history.push("/live_casino_type") }}>
                                        <BetIcon className="bet" />
                                        <span className="Live-Casino">
                                            <FormattedMessage id="nav.live-casino" defaultMessage='Live Casino' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'slots' ? 'mainButtonActive' : 'mainButton'}
                                        onClick={() => { this.props.history.push("/slot_type") }}>
                                        <SlotsIcon className="games-icon" />
                                        <span className="Slots">
                                            <FormattedMessage id="nav.slots" defaultMessage='Slots' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'lottery' ? 'mainButtonActive' : 'mainButton'}
                                        onClick={() => { this.props.history.push("/lottery_type") }}>
                                        <LotteryIcon className="lottery" />
                                        <span className="Lottery">
                                            <FormattedMessage id="nav.lottery" defaultMessage='Lottery' />
                                        </span>
                                    </Button>
                                </Fade>
                            </div>

                            <div className={classes.grow} />
                            <ClickAwayListener onClickAway={this.handleClickAway}>
                                <div className={classes.sectionDesktop}>
                                    <span className={searchButtonClass.join(' ')} onClick={this.handleSearch}>
                                        <span className="search-icon"></span>
                                    </span>
                                    <div className={searchClass.join(' ')} ref={this.searchDiv}>
                                        <div className="search-box">
                                            <div className="search-container">
                                                <SearchBar onRef={actualChild => this.actualChild = actualChild} className={classes.grow} activeMenu={this.props.activeMenu} loaded={this.state.expandSearchBar}></SearchBar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ClickAwayListener>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <div className='overlay' style={searchBackgroundStyle}></div>

                <Popper
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                    open={this.props.showLogin}
                // anchorEl={this.state.anchorElLogin}
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'left',
                // }}
                // transformOrigin={{
                //     vertical: 'top',
                //     horizontal: 'center',
                // }}
                >
                    <ClickAwayListener onClickAway={this.handleLoginMenuClose.bind(this)}>
                        <Paper>
                            <Login />
                        </Paper>
                    </ClickAwayListener>
                </Popper>

                <Popper
                    open={this.props.showSignup}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Signup />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupEmail}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Signup_Email />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupDetail}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Signup_Detail />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupContact}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Signup_Contact />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupPhone}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Signup_Phone />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showCompleteRegistration}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <Complete_Registration />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showPhoneVerification}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <Phone_Verification />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showOneclickFinish}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 770 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <One_Click_Finish />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupFinish}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 770 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <Register_Finish />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showChangePassword}
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                >
                    <Paper>
                        <Change_Password />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showUserProfile}
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                >
                    <Paper>
                        <New_Profile />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showUpdateProfile}
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                >
                    <Paper>
                        <New_Update_Profile />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showDeposit}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Deposit onChange={depositInfo => { this.setState({ depositInfo }) }} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showDepositConfirm}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Deposit_Confirm depositInfo={this.state.depositInfo} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showDepositAmount}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Deposit_Wechat  />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showDepositPaypal}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Deposit_paypal />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showWithdraw}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Withdraw />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showDepositSuccess}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <DepositSuccess />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showForgetPassword}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <New_Forget_Password />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showForgetPasswordValidation}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <Forget_Password_Validation />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showReferUser}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}

                >
                    <Paper>
                        <Refer_User />
                    </Paper>
                </Popper>

                <Popper open={this.props.showAccountMenu}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <AccountMenu />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showOpenBets}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <MyBets tabValue={0} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showSettledBets}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <MyBets tabValue={2} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showPromotions}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <Promotions />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showSettings}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <Settings />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showHelp}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <Help />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper open={this.props.showResponsibleGambling}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.accountMenuPaper}>
                                <ResponsibleGambling />
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        error: state.auth.error,
        lang: state.language.lang,
        showLogin: state.general.show_login,
        showSignup: state.general.show_signup,
        showSignupEmail: state.general.show_signup_email,
        showSignupDetail: state.general.show_signup_detail,
        showSignupContact: state.general.show_signup_contact,
        showSignupPhone: state.general.show_signup_phone,
        showCompleteRegistration: state.general.show_complete_registration,
        showPhoneVerification: state.general.show_phone_verification,
        showOneclickFinish: state.general.show_oneclick_finish,
        showSignupFinish: state.general.show_signup_finish,
        showChangePassword: state.general.show_change_password,
        showUserProfile: state.general.show_user_profile,
        showUpdateProfile: state.general.show_update_profile,
        showDeposit: state.general.show_deposit,
        showDepositAmount: state.general.show_deposit_amount,
        showDepositPaypal: state.general.show_deposit_paypal,
        showDepositConfirm: state.general.show_deposit_confirm,
        showDepositSuccess: state.general.show_deposit_success,
        showWithdraw: state.general.show_withdraw,
        showForgetPassword: state.general.show_forget_password,
        showForgetPasswordValidation: state.general.show_forget_password_validation,
        showReferUser: state.general.show_refer_user,
        showAccountMenu: state.general.show_account_menu,

        showOpenBets: state.general.show_open_bets,
        showSettledBets: state.general.show_settled_bets,
        showPromotions: state.general.show_promotions,
        showSettings: state.general.show_settings,
        showHelp: state.general.show_help,
        showResponsibleGambling: state.general.show_responsible_gambling,

    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    logout,
    handle_search,
    setLanguage,
    authCheckState,
    authLogin,
    show_login,
    show_signup,
    hide_login,
    show_signup_finish,
    hide_user_profile,
    hide_update_profile,
    show_account_menu,
    hide_account_menu
})(TopNavbar))));