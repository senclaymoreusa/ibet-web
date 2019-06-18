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
import PersonOutline from '@material-ui/icons/PersonOutline';

import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import blue from '@material-ui/core/colors/blue';

import { errors } from './errors';


import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState, AUTH_RESULT_FAIL, authLogin, show_login, show_signup } from '../actions';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from './account_menu';
import Fab from '@material-ui/core/Fab';

import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
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
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        fontSize: 20
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
        margin: theme.spacing.unit,
        color: '#ffffff',
        backgroundColor: '#ff0000',
        textTransform: 'capitalize',
        outline: 'none',
        "&:hover": {
            backgroundColor: "#ff3f00",
        }
    },
    loginButton: {
        margin: theme.spacing.unit,
        color: '#000000',
        backgroundColor: '#ffffff',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: "#f4f4f4",
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
    shadow: {
        boxShadow: '0 8px 18px 0 rgba(0, 0, 0, 0.4)'
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
        marginTop: 8,
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
    margin: {
        margin: 'auto',
    },

    textField: {
        flexBasis: 200,
        width: 300,
        backgroundColor: '#ffffff;'
    },

    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
            backgroundColor: blue[800],
        },
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

export class TopNavbar extends React.Component {

    constructor(props) {
        super(props);
        let langProperty = localStorage.getItem('lang');

        this.searchDiv = React.createRef();

        this.state = {
            open: false,
            subMenuType: null,
            showSubMenu: false,
            expandSearchBar: false,
            anchorEl: null,
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
    }


    handleSearch = () => {

        if (!this.state.expandSearchBar)
            this.actualChild.focusInput();
        else {
            this.actualChild.blurInput();
        }

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

    toggleSidePanel = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleLanguageMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
        this.setState({ showLangMenu: !this.state.showLangMenu });
    };

    handleLoginMenuOpen = event => {
        this.setState({ username: '', password: '' })
        this.props.show_login()
    };

    handleSignupMenuOpen = event => {
        this.setState({ username: '', password: ''})
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

    componentWillReceiveProps(props) {
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

    async componentDidMount() {

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

        this.props.authCheckState()
            .then(res => {
                if (res !== AUTH_RESULT_FAIL) {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            this.setState({ balance: res.data.main_wallet });
                            this.setState({ balanceCurrency: res.data.currency });
                        })
                }
            });

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

    render() {
        const { anchorEl, showLangMenu } = this.state;
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

        const LangDropdown = (
            <div className={classes.lang_container}>
                <Button className={classes.lang_button} onClick={this.handleLanguageMenuOpen}>{langButtonIcon}</Button>
                <Popper className={classes.langPopper} open={showLangMenu} anchorEl={anchorEl} placement='top-start' transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
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
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Popover
                    open={this.props.showLogin}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: (this.state.height - 600) / 2, left: (this.state.width - 700) / 2 }}
                >
                    <div className='login-window'>
                        <Login />
                    </div>
                </Popover>

                <Popover
                    open={this.props.showSignup} 
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: (this.state.height - 600) / 2, left: (this.state.width - 700) / 2 }}
                >
                    <div className='signup-window'> 
                      <Signup /> 
                    </div>
                </Popover>

                <Popover
                    open={this.props.showSignupEmail} 
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: (this.state.height - 600) / 2, left: (this.state.width - 700) / 2 }}
                >
                    <div className='signup-window'> 
                      <Signup_Email /> 
                    </div>
                </Popover>
                
                <Popover
                    open={this.props.showSignupDetail} 
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: (this.state.height - 600) / 2, left: (this.state.width - 700) / 2 }}
                >
                    <div className='signup-window'> 
                      <Signup_Detail /> 
                    </div>
                </Popover>

                <Popover
                    open={this.props.showSignupContact} 
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: (this.state.height - 600) / 2, left: (this.state.width - 700) / 2 }}
                >
                    <div className='signup-window'> 
                      <Signup_Contact /> 
                    </div>
                </Popover>
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
                <MuiThemeProvider theme={muiLogoBarTheme}>
                    <AppBar position="static" className={classes.shadow}>
                        <Toolbar variant="dense">
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    className={classes.mobileLeftMenuButton}
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.toggleSidePanel('showLeftPanel', true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer open={this.state.showLeftPanel} onClose={this.toggleSidePanel('showLeftPanel', false)}>
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={this.toggleSidePanel('showLeftPanel', false)}
                                        onKeyDown={this.toggleSidePanel('showLeftPanel', false)}
                                    >
                                        {leftMobileSideList}
                                    </div>
                                </Drawer>
                            </div>
                            <IconButton href='/'>
                                <IbetLogo />
                            </IconButton>
                            <div className={classes.grow} />
                            {
                                this.props.isAuthenticated || this.state.facebooklogin === 'true' ?

                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Button className={classes.menuButton} >
                                            <FormattedNumber
                                                maximumFractionDigits={2}
                                                value={this.state.balance}
                                                style='currency'
                                                currency={this.state.balanceCurrency}
                                            />
                                        </Button>
                                        <IconButton
                                            className={classes.menuButton}
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={this.toggleSidePanel('showRightPanel', true)}>
                                            <Person />
                                        </IconButton>
                                        <Drawer anchor="right" open={this.state.showRightPanel} onClose={this.toggleSidePanel('showRightPanel', false)}>
                                            <div
                                                tabIndex={0}
                                                role="button"
                                                onClick={this.toggleSidePanel('showRightPanel', false)}
                                                onKeyDown={this.toggleSidePanel('showRightPanel', false)}
                                            >
                                                <AccountMenu />
                                            </div>
                                        </Drawer>

                                        {LangDropdown}
                                    </div>
                                    :
                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Fab
                                            variant="extended"
                                            size="small"
                                            color="primary"
                                            aria-label="Add"
                                            className={classes.signupButton}
                                            onClick={ 
                                                //this.props.history.push('/signup/') 
                                                this.handleSignupMenuOpen
                                            }
                                        >
                                            <DepositIcon className={classes.extendedIcon} />
                                            <FormattedMessage id="nav.open-account" defaultMessage='Open Account' />
                                        </Fab>
                                        <Fab
                                            variant="extended"
                                            size="small"
                                            color="primary"
                                            aria-label="Add"
                                            className={classes.loginButton}
                                            //onClick={() => { this.props.history.push('/login/') }}
                                            onClick={this.handleLoginMenuOpen}
                                        >
                                            <PersonOutline className={classes.extendedIcon} />
                                            <FormattedMessage id="nav.login" defaultMessage='Login' />
                                        </Fab>

                                        {LangDropdown}
                                    </div>
                            }
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    className={classes.mobileMenuButton}
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.toggleSidePanel('showRightPanel', true)}>
                                    <MoreIcon />
                                </IconButton>
                                <Drawer anchor="right" open={this.state.showRightPanel} onClose={this.toggleSidePanel('showRightPanel', false)}>
                                    <div
                                        tabIndex={0}
                                        role="button"
                                    >
                                        <AccountMenu />
                                    </div>
                                </Drawer>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <MuiThemeProvider theme={muiMenuBarTheme}>
                    <AppBar position="static" className={classes.shadow}>
                        <Toolbar variant="dense">
                            <div className={classes.sectionDesktop}>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'sports' ? 'mainButtonActive' : 'mainButton'} href='/sports_type/'>
                                        <SoccerIcon className="soccer" />
                                        <span className="Sports">
                                            <FormattedMessage id="nav.sports" defaultMessage='Sports' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'live-casino' ? 'mainButtonActive' : 'mainButton'} href='/live_casino_type/'>
                                        <BetIcon className="bet" />
                                        <span className="Live-Casino">
                                            <FormattedMessage id="nav.live-casino" defaultMessage='Live Casino' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'slots' ? 'mainButtonActive' : 'mainButton'} href='/slot_type/'>
                                        <SlotsIcon className="games-icon" />
                                        <span className="Slots">
                                            <FormattedMessage id="nav.slots" defaultMessage='Slots' />
                                        </span>
                                    </Button>
                                </Fade>
                                <Fade in={!this.state.expandSearchBar} timeout={1000}>
                                    <Button className={this.props.activeMenu === 'lottery' ? 'mainButtonActive' : 'mainButton'} href='/lottery_type/'>
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
        showSignupContact: state.general.show_signup_contact
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState, authLogin, show_login, show_signup })(TopNavbar))));