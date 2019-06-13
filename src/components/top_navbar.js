import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';

import { AUTH_RESULT_FAIL } from '../actions';


import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import { FormattedMessage, FormattedNumber } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState } from '../actions';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from './account_menu';
import Fab from '@material-ui/core/Fab';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Flag from 'react-flagkit';
import { ReactComponent as IbetLogo } from '../assets/img/svg/ibet_logo.svg';
import { ReactComponent as BetIcon } from '../assets/img/svg/bet.svg';
import { ReactComponent as SlotsIcon } from '../assets/img/svg/slots.svg';
import { ReactComponent as LotteryIcon } from '../assets/img/svg/lottery.svg';
import { ReactComponent as SoccerIcon } from '../assets/img/svg/soccer.svg';
import { ReactComponent as DepositIcon } from '../assets/img/svg/deposit.svg';

import Fade from '@material-ui/core/Fade';


import ClickAwayListener from '@material-ui/core/ClickAwayListener';


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

        this.state = {
            open: false,
            subMenuType: null,
            showSubMenu: false,
            expandSearchBar: false,
            anchorEl: null,
            lang: langProperty ? langProperty : 'en',
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

            showSearchResultPopper: false,

        };

        this.handleSearch = this.handleSearch.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    handleSearch = () => {
        this.setState({ expandSearchBar: !this.state.expandSearchBar });

        if (this.refs.searchBarRef)
            if (!this.state.expandSearchBar)
                this.refs.searchBarRef.focusInput();
            else
                this.refs.searchBarRef.blurInput();
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
    };

    langMenuClicked = (event) => {
        this.setState({ anchorEl: null });
        this.setState({
            lang: event.currentTarget.dataset.myValue
        })
        //console.log(this.state.lang)
        this.changeLanguage(event.currentTarget.dataset.myValue);
    }

    handleLanguageMenuClose = (ev) => {
        this.setState({ anchorEl: null });

        if (ev.nativeEvent.target.dataset.myValue)
            this.changeLanguage(ev.nativeEvent.target.dataset.myValue);
    };

    changeLanguage = (lang) => {
        this.props.setLanguage(lang)
            .then((res) => {
                localStorage.setItem("lang", lang);
            });
    };

    onFormSubmit(event) {
        event.preventDefault();
        //this.setState({ term: '' });
    }

    componentWillReceiveProps(props) {
        //this.setState({ term: '' });
    }

    componentDidMount() {
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

    }

    getCurrencySymbol(currnecy) {

    }

    toggleLanguageListItem = () => {
        this.setState(state => ({ showLangListItems: !state.showLangListItems }));
    };


    handleClickAway = () => {
        this.setState(state => ({ expandSearchBar: false }));
        // this.search.blurInput();
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        let countryCode = '';
        switch (this.state.lang) {
            case 'en':
                countryCode = 'US';
                break;
            case 'zh-hans':
                countryCode = 'CN';
                break;
            case 'fr':
                countryCode = 'FR';
                break;
            default:
                countryCode = 'US';
        }
        const langButtonIcon = (<Flag country={countryCode} />);

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

        if (this.state.expandSearchBar) {
            searchClass.push('open');
        }

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
                                        <IconButton
                                            className={classes.menuButton}
                                            aria-owns={Boolean(anchorEl) ? 'material-appbar' : undefined}
                                            aria-haspopup="true"
                                            onClick={this.handleLanguageMenuOpen}
                                            color="inherit"
                                        >
                                            {langButtonIcon}
                                        </IconButton>
                                        <Menu className={classes.langMenu}
                                            value={this.state.lang}
                                            onChange={this.langMenuClicked}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                            open={Boolean(anchorEl)}
                                        >
                                            <MenuItem onClick={this.langMenuClicked} data-my-value={'en'}>
                                                <ListItemIcon className={classes.icon}>
                                                    <Flag country="US" />
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="English">
                                                </ListItemText>
                                            </MenuItem>
                                            <MenuItem onClick={this.langMenuClicked} data-my-value={'zh-hans'}>
                                                <ListItemIcon className={classes.icon}>
                                                    <Flag country="CN" />
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="簡體中文" >
                                                </ListItemText>
                                            </MenuItem>
                                            <MenuItem onClick={this.langMenuClicked} data-my-value={'fr'}><ListItemIcon className={classes.icon}>
                                                <Flag country="FR" />
                                            </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="Français" >
                                                </ListItemText>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                    :
                                    this.state.show_loggedin_status && <div className={classes.sectionDesktop}>
                                        <Fab
                                            variant="extended"
                                            size="small"
                                            color="primary"
                                            aria-label="Add"
                                            className={classes.signupButton}
                                            onClick={() => { this.props.history.push('/signup/') }}
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
                                            onClick={() => { this.props.history.push('/login/') }}
                                        >
                                            <PersonOutline className={classes.extendedIcon} />
                                            <FormattedMessage id="nav.login" defaultMessage='Login' />
                                        </Fab>
                                        <IconButton
                                            aria-owns={Boolean(anchorEl) ? 'material-appbar' : undefined}
                                            aria-haspopup="true"
                                            onClick={this.handleLanguageMenuOpen}
                                            color="inherit"
                                        >
                                            {langButtonIcon}
                                        </IconButton>
                                        <Menu className={classes.langMenu}
                                            value={this.state.lang}
                                            onChange={this.langMenuClicked}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                            open={Boolean(anchorEl)}
                                            onClose={this.handleLanguageMenuClose}
                                        >
                                            <MenuItem data-my-value={'en'} onClick={this.langMenuClicked}>
                                                <ListItemIcon className={classes.icon}>
                                                    <Flag country="US" />
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="English" >
                                                </ListItemText>
                                            </MenuItem>
                                            <MenuItem data-my-value={'zh-hans'} onClick={this.langMenuClicked}>
                                                <ListItemIcon className={classes.icon}>
                                                    <Flag country="CN" />
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="簡體中文" >
                                                </ListItemText>
                                            </MenuItem>
                                            <MenuItem data-my-value={'fr'} onClick={this.langMenuClicked}>
                                                <ListItemIcon className={classes.icon}>
                                                    <Flag country="FR" />
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary="Français" >
                                                </ListItemText>
                                            </MenuItem>
                                        </Menu>

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
                                <ClickAwayListener onClickAway={this.handleClickAway}>
                                    <div className={searchClass.join(' ')}>
                                        <div className="search-box">
                                            <div className="search-container">
                                                <SearchBar ref="searchBarRef" className={classes.grow} activeMenu={this.props.activeMenu} loaded={this.state.expandSearchBar}></SearchBar>
                                            </div>
                                        </div>
                                        <span className="search-button" onClick={this.handleSearch}>
                                            <span className="search-icon"></span>
                                        </span>
                                    </div>
                                </ClickAwayListener>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
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
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(TopNavbar)));