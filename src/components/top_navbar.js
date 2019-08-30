import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { errors } from './errors';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    AUTH_RESULT_SUCCESS,
    logout,
    handle_search,
    authLogin,
    postLogout,
    setLanguage,
    authCheckState,
    show_login,
    show_signup,
    hide_login,
    show_signup_finish,
    hide_user_profile,
    hide_update_profile,
    show_account_menu,
    hide_account_menu,
    show_profile_menu,
    hide_profile_menu
} from '../actions';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from './account_menu/account_menu';
import Promotions from './account_menu/promotions';
import Settings from './account_menu/settings';
import MyBets from './account_menu/my_bets';
import ResponsibleGambling from './account_menu/responsible_gambling';
import DepositSuccess from './new_deposit_success';
import WithdrawSuccess from './new_withdraw_success';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import Login from './login_2.js';
import Signup from './signup_2.js';
import SignupEmail from './signup_email';
import SignupDetail from './signup_detail';
import SignupContact from './signup_contact';
import SignupPhone from './signup_phone';
import CompleteRegistration from './complete_registration';
import PhoneVerification from './signup_phone_verification';
import OneClickFinish from './one_click_finish';
import RegisterFinish from './register_finish';
import ChangePassword from './change_password_new';
import New_Profile from './new_profile';
import New_Deposit from './new_deposit';
import NewDepositConfirm from './new_deposit_confirm';
import New_Deposit_Wechat from './new_deposit_amount_wechat';
import New_Deposit_paypal from './new_deposite_amount_paypal';
import New_Withdraw from './new_withdraw';
import New_Withdraw_Confirm from './new_withdraw_confirm';
import Help from './account_menu/help';
import New_Forget_Password from './forget_password_new';
import Forget_Password_Validation from './forget_password_validation';
import Refer_User from './refer_user';

import axios from 'axios';
import { config, images } from '../util_config';

import '../css/top_navbar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        height: 5,
        backgroundColor: "transparent",
        "& > div": {
            width: "100%",
            backgroundColor: "#ff0000",
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(() => ({
    root: {
        textTransform: "uppercase",
        height: 60,
        minWidth: 250,
        fontSize: 22,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 1.02,
        color: '#ffffff',
        "&:focus": {
            opacity: 1,
        },
        "&:hover": {
            color: "white",
            opacity: 1,
        },
    }
}))(props => <Tab disableRipple {...props} />);



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
        height: 60,
        boxShadow: '0 8px 18px 0 rgba(0, 0, 0, 0.4)',
    },
    list: {
        width: 250,
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
        height: 60,
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
        marginTop: 16,
        marginBottom: 16,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fontSize: 17,
        height: 40,
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 6,
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: '#ffffff',
        }
    },
    loginButton: {
        marginTop: 16,
        marginBottom: 16,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        paddingLeft: 6,
        fontSize: 17,
        height: 40,
        color: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        border: 'solid 2px rgba(0, 0, 0, 0.5)',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#ffffff",
            color: 'rgba(0, 0, 0, 0.5)',
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
        marginTop: 16,
        marginBottom: 16,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        paddingTop: 4,
        fontSize: 17,
        height: 40,
        color: '#6a6a6a',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        border: 'solid 2px rgba(0, 0, 0, 0.5)',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#ffffff",
            color: 'rgba(0, 0, 0, 0.5)',
        }
    },
    balanceDepositText: {
        fontSize: 17,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#ffffff',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        marginLeft: 16,
    },
    profileButton: {
        marginTop: 16,
        marginBottom: 16,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        paddingTop: 4,
        fontSize: 17,
        height: 40,
        color: '#6a6a6a',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        border: 'solid 2px rgba(0, 0, 0, 0.5)',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#ffffff",
            color: 'rgba(0, 0, 0, 0.5)',
        }
    },
    profileLabel: {
        fontSize: 17,
        fontWeight: 500,
        textTransform: 'capitalize',
        letterSpacing: 0.66,
        color: '#6a6a6a',
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
    langButton: {
        height: '100%',
        borderRadius: 6,
        padding: 0,
    },

    flag: {
        width: 64,
        height: 38,
        borderRadius: 6,
    },
    langContainer: {
        display: 'inline',
        marginLeft: theme.spacing.unit,
        marginTop: 16,
        marginBottom: 16,
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
    profileMenuPaper: {
        padding: 0,
        width: 210,
        backgroundColor: '#ffffff',

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
    profilePopper: {
        width: 360,
    },
    profileMenuPopper: {
        width: 210,
    },
    margin: {
        margin: 'auto',
    },
    userIcon: {
        '&:hover': {
            fillRule: '#fe0000',
        }
    },
    separator: {
        width: 1.6,
        height: 25,
        marginTop: 20,
        opacity: 1,
        marginLeft: 10,
        backgroundColor: '#212121',
    },
    subMenu: {
        backgroundColor: '#dedede',
        width: '99%',
        marginTop: 15
    },
    mainMenuItem: {
        "&:hover": {
            backgroundColor: '#ffffff',
        },
        "&:focus": {
            backgroundColor: '#ffffff',
        },
    }
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
    appBar: {
        height: 62,
        paddingBottom: 2,

    },
    typography: {
        useNextVariants: true,
    },
});

const SVG = ({
    style = {},
    width = "32px",
    viewBox = "0 0 26 27",
    className = "userIcon",
}) => (
        <svg
            width={width}
            style={style}
            height="20px"
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Nav" stroke="none" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="navigation" transform="translate(-1304.000000, -21.000000)" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="1.9625">
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
    _isMounted = false;
    constructor(props) {
        super(props);

        this.searchDiv = React.createRef();

        this.state = {
            open: false,
            subMenuType: null,
            showSubMenu: false,
            expandSearchBar: false,
            anchorEl: null,
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
            showBankingProfileSubMenu: false,
            showAnalysisProfileSubMenu: false,
            showUserAccountProfileSubMenu: false,
            showSettingsProfileSubMenu: false,

            mainTabValue: 'none',
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.onInputChange_username = this.onInputChange_username.bind(this);
        this.onInputChange_password = this.onInputChange_password.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.onloginFormSubmit = this.onloginFormSubmit.bind(this);
        this.toggleSidePanel = this.toggleSidePanel.bind(this);
        this.profileIconClicked = this.profileIconClicked.bind(this);
        this.bankingProfileMenuItemClick = this.bankingProfileMenuItemClick.bind(this);
        this.navBarItemChanged = this.navBarItemChanged.bind(this);
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

    handleLoginMenuOpen = event => {
        this.setState({ username: '', password: '', anchorElLogin: event.currentTarget })
        this.props.show_login()
    };

    handleShowChangePasswordMenuOpen = event => {
        this.setState({ username: '', password: '', anchorElLogin: event.currentTarget })
        this.props.show_login()
    };

    handleSignupMenuOpen = () => {
        this.setState({ username: '', password: '' })

        this.props.show_signup()
    };

    handleLoginMenuClose() {
        this.props.hide_login()
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

    onInputChange_checkbox = async () => {
        await this.setState({ check: !this.state.check })
    }

    handleResize = () => {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
    };

    componentWillReceiveProps(props) {
        this.setMainMenuIndicator();

        window.addEventListener("resize", this.handleResize);

        this.props.authCheckState()
            .then((res) => {
                if (this._isMounted)
                    this.setState({ show_loggedin_status: true });
            })

        this.setUserDetails();

        const remember_check = localStorage.getItem('remember_check');
        if (remember_check) {
            this.setState({ check: true })
        }

        this.checkFacebookLogin();

        this.checkOneClickLogin();
    }

    componentDidMount() {
        this._isMounted = true;

        this.setMainMenuIndicator();

        window.addEventListener("resize", this.handleResize);

        this.props.authCheckState()
            .then((res) => {
                if (this._isMounted)
                    this.setState({ show_loggedin_status: true });
            })

        this.setUserDetails();

        const remember_check = localStorage.getItem('remember_check');
        if (remember_check) {
            this.setState({ check: true })
        }

        this.checkFacebookLogin();

        this.checkOneClickLogin();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    setMainMenuIndicator() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 2) {
            if (parts[1].length > 0) {
                let path = parts[1];
                if (path === 'sports_type' || path === 'liveCasino_type' || path === 'slot_type' || path === 'lottery_type')
                    if (this._isMounted)
                        this.setState({ mainTabValue: parts[1] })
            }
        }
    }

    setUserDetails() {
        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_SUCCESS) {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            if (this._isMounted) {
                                this.setState({ username: res.data.username });
                                this.setState({ balance: res.data.main_wallet });
                                this.setState({ balanceCurrency: res.data.currency });
                            }
                        })
                }
            });
    }

    checkFacebookLogin() {
        var fackbooklogin = localStorage.getItem('facebook')
        this.setState({ facebooklogin: fackbooklogin })
        var fackbookObj = JSON.parse(localStorage.getItem('facebookObj'))
        if (fackbooklogin === 'true') {
            if (this._isMounted)
                this.setState({
                    userID: fackbookObj.userID,
                    name: fackbookObj.name,
                    email: fackbookObj.email,
                    picture: fackbookObj.picture
                })
        }
    }

    checkOneClickLogin() {
        const check = localStorage.getItem('one-click');
        if (check) {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            localStorage.removeItem('one-click');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            if (this._isMounted)
                this.setState({ username: username, password: password, button_disable: false, button_type: 'login-button' })
        } else {
            const remember_check = localStorage.getItem('remember_check');
            if (remember_check) {
                const username = localStorage.getItem('remember_username');
                const password = localStorage.getItem('remember_password');
                if (this._isMounted)
                    this.setState({ username: username, password: password, button_disable: false, button_type: 'login-button' })
            }
        }
    }

    handleClickAway = () => {
        this.actualChild.blurInput();
        this.setState(() => ({ expandSearchBar: false }));
    };

    profileMenuClickAway = () => {
        this.props.hide_profile_menu();
    }

    profileIconClicked = event => {
        if (this.props.showProfileMenu) {
            this.props.hide_profile_menu();
        } else {
            this.setState({ anchorEl: event.currentTarget });
            this.props.show_profile_menu();
        }

        this.setState(() => ({ showAnalysisProfileSubMenu: false }));
        this.setState(() => ({ showBankingProfileSubMenu: false }));
        this.setState(() => ({ showSettingsProfileSubMenu: false }));
        this.setState(() => ({ showUserAccountProfileSubMenu: false }));
    }

    bankingProfileMenuItemClick = () => {
        this.props.show_profile_menu();
        this.setState(state => ({ showBankingProfileSubMenu: !state.showBankingProfileSubMenu }));

        this.setState(() => ({ showAnalysisProfileSubMenu: false }));
        this.setState(() => ({ showUserAccountProfileSubMenu: false }));
        this.setState(() => ({ showSettingsProfileSubMenu: false }));
    };

    analysisProfileMenuItemClick = () => {
        this.props.show_profile_menu();
        this.setState(state => ({ showAnalysisProfileSubMenu: !state.showAnalysisProfileSubMenu }));

        this.setState(() => ({ showBankingProfileSubMenu: false }));
        this.setState(() => ({ showSettingsProfileSubMenu: false }));
        this.setState(() => ({ showUserAccountProfileSubMenu: false }));
    };

    userAccountProfileMenuItemClick = () => {
        this.props.show_profile_menu();
        this.setState(state => ({ showUserAccountProfileSubMenu: !state.showUserAccountProfileSubMenu }));

        this.setState(() => ({ showBankingProfileSubMenu: false }));
        this.setState(() => ({ showAnalysisProfileSubMenu: false }));
        this.setState(() => ({ showSettingsProfileSubMenu: false }));
    };

    settingsProfileMenuItemClick = () => {
        this.props.show_profile_menu();
        this.setState(state => ({ showSettingsProfileSubMenu: !state.showSettingsProfileSubMenu }));

        this.setState(() => ({ showBankingProfileSubMenu: false }));
        this.setState(() => ({ showAnalysisProfileSubMenu: false }));
        this.setState(() => ({ showUserAccountProfileSubMenu: false }));
    };

    handleProfileMenuClose = () => {
        this.setState(() => ({ anchorEl: null }));
    };

    navBarItemChanged(newValue) {
        this.setState(() => ({ mainTabValue: newValue }));
    }

    render() {
        const { anchorEl, mainTabValue, balance, balanceCurrency } = this.state;
        const { classes } = this.props;

        const ProfileMenu = (
            <div >
                <ClickAwayListener onClickAway={this.profileMenuClickAway}>
                    <Button
                        className={classes.profileButton}
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.profileIconClicked}>
                        <SVG className="profileIcon" />
                        <div className={classes.profileLabel} >
                            <FormattedMessage id="nav.hello" defaultMessage='Hello' />
                        </div>
                        <span>, </span>
                        {this.state.username}
                        {this.props.showProfileMenu ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                </ClickAwayListener>
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

        const { formatMessage } = this.props.intl;
        let sportsMessage = formatMessage({ id: "nav.sports" });
        let liveCasinoMessage = formatMessage({ id: "nav.live-casino" });
        let slotsMessage = formatMessage({ id: "nav.slots" });
        let lotteryMessage = formatMessage({ id: "nav.lottery" });

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={muiLogoBarTheme} >
                    <AppBar position="static" >
                        <Toolbar className={classes.appBar}>
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
                                <img src={images.src + 'ibet_logo.svg'} alt="" />
                            </IconButton>
                            <div className={classes.grow} />
                            {
                                this.props.isAuthenticated || this.state.facebooklogin === 'true' ?
                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Button
                                            variant="outlined"
                                            className={classes.balanceButton}
                                            onClick={() => {
                                                this.setState({ mainTabValue: 'none' });
                                                this.props.history.push('/p/banking/deposit')
                                            }}
                                        >
                                            <FormattedNumber
                                                maximumFractionDigits={2}
                                                value={balance}
                                                style={'currency'}
                                                currency={balanceCurrency}
                                            />
                                            <div className={classes.balanceDepositText} >
                                                <FormattedMessage id="accountmenu.deposit" defaultMessage='Deposit' />
                                            </div>
                                        </Button>
                                        {ProfileMenu}
                                    </div>
                                    :
                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Button
                                            variant="outlined"
                                            className={classes.signupButton}
                                            onClick={
                                                this.handleSignupMenuOpen
                                            }
                                            onMouseEnter={this.handleSignupOnEnter}
                                            onMouseLeave={this.handleSignupOnLeave}
                                        >
                                            <FormattedMessage id="nav.register" defaultMessage='Register' />
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            className={classes.loginButton}
                                            onClick={
                                                this.handleLoginMenuOpen
                                            }
                                        >
                                            <SVG className="userIcon" />

                                            <FormattedMessage id="nav.signin" defaultMessage='Sign in' />
                                        </Button>
                                    </div>
                            }
                            <div className={classes.sectionMobile}>
                                <IconButton
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
                                    }}
                                    transition>
                                    {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                            <Paper>
                                                <AccountMenu />
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
                        <StyledTabs className={classes.appBar} value={mainTabValue} style={{ backgroundColor: '#212121' }}>
                            <StyledTab
                                style={{ outline: 'none' }}
                                value="sports_type"
                                label={<div> <img src={images.src + 'soccer.svg'} className="soccer" />{sportsMessage}</div>}
                                onClick={() => {
                                    this.setState({ mainTabValue: 'sports_type' });
                                    this.props.history.push("/sports_type/sports");
                                }} />
                            <StyledTab
                                style={{ outline: 'none' }}
                                value="liveCasino_type"
                                label={<div><img src={images.src + 'bet.svg'} className="bet" />{liveCasinoMessage}</div>}
                                onClick={() => {
                                    this.setState({ mainTabValue: 'liveCasino_type' });
                                    this.props.history.push("/liveCasino_type/live-casino/all");
                                }} />
                            <StyledTab
                                style={{ outline: 'none' }}
                                value="slot_type"
                                label={<div><img src={images.src + 'slots.svg'} className="games-icon" />{slotsMessage}</div>}
                                onClick={() => {
                                    this.setState({ mainTabValue: 'liveCasino_type' });
                                    this.props.history.push("/slot_type/slots/all");
                                }} />
                            <StyledTab
                                style={{ outline: 'none' }}
                                value='lottery_type'
                                label={<div><img src={images.src + 'lottery.svg'} className="lottery_type" />{lotteryMessage}</div>}
                                onClick={() => {
                                    this.setState({ mainTabValue: 'lottery_type' });
                                    this.props.history.push("/lottery_type/lottery");
                                }} />
                            <StyledTab
                                style={{ width: 0, minWidth: 0, }}
                                value='none'
                            />
                        </StyledTabs>
                    </AppBar>
                </MuiThemeProvider>

                <div className='overlay' style={searchBackgroundStyle}></div>

                <Popper
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                    open={this.props.showLogin}
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
                        <SignupEmail />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupDetail}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <SignupDetail />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupContact}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <SignupContact />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupPhone}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 662) / 2 : 0 }}
                >
                    <Paper>
                        <SignupPhone />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showCompleteRegistration}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <CompleteRegistration />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showPhoneVerification}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 662 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <PhoneVerification />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showOneclickFinish}
                    style={{ position: 'absolute', top: this.state.height > 600 ? (this.state.height - 600) / 2 : 0, left: this.state.width > 770 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <OneClickFinish />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showSignupFinish}
                    style={{ position: 'absolute', top: this.state.height > 650 ? (this.state.height - 650) / 2 : 0, left: this.state.width > 770 ? (this.state.width - 770) / 2 : 0 }}
                >
                    <Paper>
                        <RegisterFinish />
                    </Paper>
                </Popper>

                <Popper
                    open={this.props.showChangePassword}
                    style={{ position: 'absolute', top: 70, left: this.state.width > 380 ? this.state.width - 410 : 0 }}
                >
                    <Paper>
                        <ChangePassword />
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
                                <NewDepositConfirm depositInfo={this.state.depositInfo} />
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
                                <New_Deposit_Wechat />
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
                                <New_Withdraw onChange={withdrawInfo => { this.setState({ withdrawInfo }) }} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showWithdrawConfirm}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <New_Withdraw_Confirm withdrawInfo={this.state.withdrawInfo} />
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popper
                    open={this.props.showWithdrawSuccess}
                    anchorEl={anchorEl}
                    className={classes.profilePopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <WithdrawSuccess />
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

                <Popper open={this.props.showProfileMenu}
                    anchorEl={anchorEl}
                    className={classes.profileMenuPopper}
                    placement="top-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.profileMenuPaper}>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    <ListItem button onClick={this.bankingProfileMenuItemClick} className={classes.mainMenuItem}>
                                        <ListItemText primary="Banking" />
                                        {this.state.showBankingProfileSubMenu ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={this.state.showBankingProfileSubMenu} timeout="auto" unmountOnExit className={classes.subMenu}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/banking/deposit')
                                                }}
                                            >
                                                <ListItemText primary="Deposit" />
                                            </ListItem>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/banking/withdraw')
                                                }}>
                                                <ListItemText primary="Withdraw" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItem button onClick={this.analysisProfileMenuItemClick} className={classes.mainMenuItem}>
                                        <ListItemText primary="Analysis" />
                                        {this.state.showAnalysisProfileSubMenu ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={this.state.showAnalysisProfileSubMenu} timeout="auto" unmountOnExit className={classes.subMenu}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/analysis/bets')
                                                }}>
                                                <ListItemText primary="Bets" />
                                            </ListItem>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/analysis/banking')
                                                }}>
                                                <ListItemText primary="Banking" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItem button onClick={this.userAccountProfileMenuItemClick} className={classes.mainMenuItem}>
                                        <ListItemText primary="Account" />
                                        {this.state.showUserAccountProfileSubMenu ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={this.state.showUserAccountProfileSubMenu} timeout="auto" unmountOnExit className={classes.subMenu}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemText primary="User Information" />
                                            </ListItem>
                                            <ListItem button className={classes.nested}>
                                                <ListItemText primary="Inbox" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItem button onClick={this.responsibleGamingMenuItemClick} className={classes.mainMenuItem}>
                                        <ListItemText primary="Responsible Gaming" />
                                    </ListItem>
                                    <ListItem button onClick={this.settingsProfileMenuItemClick} className={classes.mainMenuItem}>
                                        <ListItemText primary="Settings" />
                                        {this.state.showSettingsProfileSubMenu ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={this.state.showSettingsProfileSubMenu} timeout="auto" unmountOnExit className={classes.subMenu}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/settings/marketing')
                                                }}>
                                                <ListItemText primary="Marketing" />
                                            </ListItem>
                                            <ListItem button className={classes.nested}
                                                onClick={() => {
                                                    this.setState({ mainTabValue: 'none' });
                                                    this.props.history.push('/p/settings/privacy')
                                                }}>
                                                <ListItemText primary="Privacy" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItem button
                                        onClick={() => {
                                            this.props.logout()
                                            postLogout();
                                        }} className={classes.mainMenuItem}>
                                        <ListItemText primary="Logout" />
                                    </ListItem>
                                </List>
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
        showWithdrawSuccess: state.general.show_withdraw_success,
        showWithdraw: state.general.show_withdraw,
        showWithdrawConfirm: state.general.show_withdraw_confirm,
        showForgetPassword: state.general.show_forget_password,
        showForgetPasswordValidation: state.general.show_forget_password_validation,
        showReferUser: state.general.show_refer_user,
        showAccountMenu: state.general.show_account_menu,
        showProfileMenu: state.general.show_profile_menu,
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
    hide_account_menu,
    show_profile_menu,
    hide_profile_menu
})(TopNavbar))));