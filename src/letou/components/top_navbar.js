/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Flag from 'react-flagkit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Announcements from './announcements';
import Login from './login-register/login';
import ForgotPassword from './login-register/forgot_password';
import NewReleases from '@material-ui/icons/NewReleases';
import Clear from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import getSymbolFromCurrency from 'currency-symbol-map';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dehaze from '@material-ui/icons/Dehaze';
import Fab from '@material-ui/core/Fab';
import Person from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { config } from '../../util_config';
import Typography from '@material-ui/core/Typography';

import {
    logout,
    postLogout,
    setLanguage,
    authCheckState,
    show_letou_announcements,
    show_letou_login,
    show_letou_forgot_password,
    show_letou_mobile_menu,
    hide_letou_mobile_menu,
    sendingLog
} from '../../actions';

import '../css/top_navbar.scss';
import { errors } from './errors';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%'
    },
    rootDesktop: {
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%'
    },
    mobileBar: {
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    },
    secondRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mobileRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    secondBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 60,
        minHeight: 60,
        maxWidth: 1400,
        width: '100%'
    },
    mobileMenuPaper: {
        height: '100%',
        width: '100%',
        borderRadius: 0
    },
    grow: {
        flexGrow: 1
    },
    langButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        }
    },
    topLinkButton: {
        margin: 4,
        textTransform: 'capitalize',
        cursor: 'pointer',
        maxHeight: 32
    },
    usernameText: {
        display: 'inline-block',
        color: '#212121',
        fontWeight: 600,
        fontSize: 13
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        }
    },
    signUpButton: {
        borderRadius: 18,
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        backgroundColor: '#ff9e00',
        color: 'white',
        '&:hover': {
            backgroundColor: '#FF7E05'
        }
    },
    loginButton: {
        borderRadius: 18,
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        backgroundColor: '#64bced',
        color: 'white',
        '&:hover': {
            backgroundColor: '#36A3E6'
        }
    },
    secondRowDropdown: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 0,
        boxShadow: 'none',
        borderTop: '5px solid #fff',
        borderBottom: '5px solid #fff',
        textTransform: 'capitalize',
        '&:hover': {
            borderTop: '5px solid #ff9e00',
            backgroundColor: '#fff',
            borderBottom: '5px solid #fff'
        }
    },
    activeSecondRowDropdown: {
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        borderTop: '5px solid #ff9e00',
        backgroundColor: '#fff',
        borderBottom: '5px solid #fff',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#fff',
            borderBottom: '5px solid #fff'
        }
    },
    onSelectSecondRowDropdown: {
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none'
    },
    logo: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    newIcon: {
        marginLeft: 10
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    mobileModal: {
        display: 'flex',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileIcon: {
        margin: theme.spacing(1),
        marginLeft: 20,
        backgroundColor: '#F1941A',
        color: 'white',
        height: 40,
        width: 40,
        '&:hover': {
            backgroundColor: '#F1941A'
        }
    },
    depositIcon: {
        marginLeft: 5,
        backgroundColor: '#F1941A',
        textTransform: 'capitalize',
        color: 'white',
        '&:hover': {
            backgroundColor: '#FF7E05'
        }
    },
    depositValue: {
        fontSize: 13,
        fontWeight: 'normal'
    },
    margin: {
        margin: theme.spacing(1)
    },
    paper: {
        position: 'absolute',
        padding: 0,
        '&:focus': {
            outline: 'none'
        }
    },
    langControl: {
        minWidth: 140
    },
    itemList: {
        backgroundColor: '#fff',

        paddingLeft: 10,
        paddingRight: 10
    },
    listItem: {
        borderRadius: 4,
        '&:hover': {}
    },
    listItemSelected: {
        borderRadius: 4,
        backgroundColor: '#cdcdcd'
    },
    listItemFlag: {
        display: 'inline-block'
    },
    listItemText: {
        marginLeft: 10,
        color: '#212121',
        display: 'inline-block'
    }
});

class TopNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            anchorElLang: null,
            dropdownMenu: 'none',
            kyUrl: null,
            currency: 'USD'
        };

        this.getLabel = this.getLabel.bind(this);
        // this.handleOnebookClick = this.handleOnebookClick.bind(this);
    }

    componentDidUpdate(prev) {
        if (this.props.isAuthenticated !== prev.isAuthenticated) {
            this.props.authCheckState();
        }
    }

    componentDidMount() {
        this.props.authCheckState();
    }

    langMenuClicked(langValue) {
        this.props.setLanguage(langValue).then(() => {
            // localStorage.setItem("lang", lang);
        });
        this.setState({ anchorElLang: null });
    }

    closeMainMenu() {
        this.setState({ dropdownMenu: 'none' });
        this.setState({ anchorEl: null });
    }

    openMainMenu(event, menu) {
        this.setState({ dropdownMenu: menu });
        this.setState({ anchorEl: event.currentTarget });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    chessOptions(game_id) {
        if (!this.props.isAuthenticated) {
            this.props.show_letou_login();
        } else {
            let token = localStorage.getItem('token');
            config.headers['Authorization'] = `Token ${token}`;
            axios
                .get(API_URL + 'users/api/user/', config)
                .then(res => {
                    let user_name = res.data.username;
                    axios
                        .post(
                            API_URL + 'games/api/ky/games/',
                            {
                                s: 0,
                                account: String(user_name),
                                money: '0',
                                KindID: String(game_id)
                            },
                            config
                        )
                        .then(res => {
                            // console.log("response: ", res);
                            if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                                // this.props.logout();
                                this.props.postLogout();
                                return;
                            }

                            if (res.status === 200) {
                                // console.log(res.data);
                                this.setState({ kyUrl: res.data.d.url });
                                window.open(this.state.kyUrl, 'kaiyuan gaming');
                            }
                        })
                        .catch(err => {
                            sendingLog(err);
                        });
                })
                .catch(err => {
                    sendingLog(err);
                });
        }
    }

    // handleOnebookClick() {

    //     var url = "";
    //     if(!this.props.isAuthenticated){
    //         url = 'http://sbtest.claymoreasia.com/NewIndex';

    //         window.open(url, "onebook_url");
    //     }else{
    //         let token = localStorage.getItem('token');
    //         config.headers['Authorization'] = `Token ${token}`;
    //         axios.get(API_URL + 'users/api/user/', config).then(res => {
    //             let user_data = res.data

    //             var postData = {
    //                 "username": user_data.username
    //             }
    //             var formBody = [];
    //             for (var pd in postData) {
    //                 var encodedKey = encodeURIComponent(pd);
    //                 var encodedValue = encodeURIComponent(postData[pd]);
    //                 formBody.push(encodedKey + "=" + encodedValue);
    //             }
    //             formBody = formBody.join("&");

    //             return fetch(API_URL + 'games/api/onebook/login', {
    //                 method: "POST",
    //                 headers: {
    //                     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //                 },
    //                 body: formBody
    //             }).then(function (res){

    //                 return res.json();
    //             }).then(function(data){
    //                 //console.log(data);
    //                 url = data.login_url;
    //                 //console.log(url)
    //                 window.open(url, "onebook_url")
    //             });
    //         });
    //     }
    // }
    // game_url(event, gamename){
    //     event.preventDefault();
    //     var token = localStorage.getItem('token')
    //     if (this.props.isAuthenticated){
    //         config.headers["Authorization"] = `Token ${token}`;
    //         var URL = API_URL + 'games/api/gb/generategameurl/?game=' + gamename
    //         axios.get(URL, config)
    //         .then(res => {
    //             var Game_URL = res.data.game_url
    //             window.open(Game_URL)
    //         })
    //     }else{
    //         var URL = API_URL + 'games/api/gb/generatefakeusergameurl/?game=' + gamename
    //         axios.get(URL, config)
    //         .then(res => {
    //             var Game_URL = res.data.game_url
    //             window.open(Game_URL)
    //         })
    //     }

    // }
    render() {
        const { classes } = this.props;
        const { anchorEl, anchorElLang, dropdownMenu } = this.state;
        

        let flag = '';

        switch (this.props.lang) {
            case 'en':
                flag = 'US';
                break;
            case 'zh-hans':
                flag = 'CN';
                break;
            case 'zh':
                flag = 'CN';
                break;
            case 'th':
                flag = 'TH';
                break;
            case 'vi':
                flag = 'VN';
                break;
            default:
                flag = 'US';
                break;
        }

        const LangDropdown = (
            <div>
                <IconButton
                    className={classes.langButton}
                    aria-haspopup="true"
                    onClick={event => {
                        this.setState({ anchorElLang: event.currentTarget });
                    }}
                >
                    <Flag country={flag} className={classes.listItemFlag} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElLang}
                    keepMounted
                    open={Boolean(anchorElLang)}
                    onClose={() => {
                        this.setState({ anchorElLang: null });
                    }}
                >
                    <MenuItem
                        value={'en'}
                        onClick={() => {
                            this.langMenuClicked('en');
                        }}
                        selected={this.props.lang === 'en'}
                        className={classes.listItem}
                    >
                        <Flag country="US" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {/* {this.getLabel('lang-english')} */}
                            English
                        </div>
                    </MenuItem>
                    <MenuItem
                        value={'zh'}
                        onClick={() => {
                            this.langMenuClicked('zh');
                        }}
                        selected={
                            this.props.lang === 'zh-hans' ||
                            this.props.lang === 'zh'
                        }
                        className={classes.listItem}
                    >
                        <Flag country="CN" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {/* {this.getLabel('lang-chinese')} */}
                            中文
                        </div>
                    </MenuItem>
                    <MenuItem
                        value={'th'}
                        onClick={() => {
                            this.langMenuClicked('th');
                        }}
                        selected={this.props.lang === 'th'}
                        className={classes.listItem}
                    >
                        <Flag country="TH" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {/* {this.getLabel('lang-thai')} */}
                            ประเทศไทย
                        </div>
                    </MenuItem>
                    <MenuItem
                        value={'vi'}
                        onClick={() => {
                            this.langMenuClicked('vi');
                        }}
                        selected={this.props.lang === 'vi'}
                        className={classes.listItem}
                    >
                        <Flag country="VN" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {/* {this.getLabel('lang-vietnamese')} */}
                            Tiếng Việt
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.rootDesktop}>
                    <AppBar position="static" className={classes.firstRow}>
                        <Toolbar className={classes.firstBar}>
                            {LangDropdown}
                           
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                target="_blank"
                                href= {this.props.lang === 'en' ? '/zh/about_us' : '/' + this.props.lang + '/about_us'}
                            >
                                {this.getLabel('about-letou')}
                            </Button>
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                target="_blank"
                                href="https://affiliates.letou.com"
                            >
                                {this.getLabel('become-partner')}
                            </Button>
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                target="_blank"
                                href="https://letou.one/"
                            >
                                {this.getLabel('line-center')}
                            </Button>
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                target="_blank"
                                href="https://www.letou.rocks/"
                            >
                                {this.getLabel('downloads-link')}
                            </Button>
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                onClick={() => {
                                    this.props.show_letou_announcements();
                                }}
                            >
                                {this.getLabel('latest-announcement')}
                            </Button>
                            <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={this.props.showAnnouncements}
                                className={classes.modal}
                            >
                                <Paper className={classes.paper}>
                                    <Announcements />
                                </Paper>
                            </Modal>

                            <div className={classes.grow} />
                            {this.props.isAuthenticated && (
                                <div className={classes.topLinkButton}>
                                    <Typography
                                        className={classes.usernameText}
                                    >
                                        Hi,{' '}
                                    </Typography>
                                    <Typography
                                        className={classes.usernameText}
                                    >
                                        {this.props.username}
                                    </Typography>
                                </div>
                            )}
                            {this.props.isAuthenticated && (
                                <div>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            this.props.history.push(
                                                '/p/account-management/message-notification'
                                            );
                                        }}
                                    >
                                        <div>
                                            <img
                                                src={images.src + 'email.png'}
                                                alt=""
                                            />
                                        </div>
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.history.push(
                                                '/p/fortune-center/withdraw'
                                            );
                                        }}
                                    >
                                        {this.getLabel('withdraw-label')}
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.history.push(
                                                '/p/fortune-center/transfer'
                                            );
                                        }}
                                    >
                                        {this.getLabel('transfer-label')}
                                    </Button>
                                </div>
                            )}
                            <Button
                                size="small"
                                className={classes.topLinkButton}
                                target="_blank"
                                href="https://www.letou.com/cn/chat"
                            >
                                {this.getLabel('online-service')}
                            </Button>
                            {this.props.isAuthenticated && (
                                <div>
                                    <Button
                                        size="small"
                                        className={classes.topLinkButton}
                                        onClick={() => {
                                            this.props.postLogout();
                                        }}
                                    >
                                        {this.getLabel('log-out')}
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <AppBar position="static" className={classes.secondRow}>
                        <Toolbar className={classes.secondBar}>
                            <IconButton
                                className={classes.logo}
                                onClick={() => {
                                    this.props.history.push('/');
                                }}
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/logo_' +
                                        this.props.lang +
                                        '.png'
                                    }
                                    alt="LETOU"
                                    height="42"
                                />
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href="https://www.inter.it/en/news/2018/08/8/fc-internazionale-milano-announces-letou-as-first-asian-online-gaming-partner.html"
                                className={classes.logo}
                            >
                                <img
                                    src={
                                        images.src +
                                        'letou/inter_' +
                                        this.props.lang +
                                        '.png'
                                    }
                                    alt="Inter"
                                    height="42"
                                />
                            </IconButton>
                            <div className={classes.grow} />
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'sports'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onMouseEnter={event => {
                                    this.openMainMenu(event, 'sports');
                                }}
                                onMouseLeave={() => {
                                    this.closeMainMenu.bind(this);
                                }}
                            >
                                {this.getLabel('sports-label')}
                            </Button>
                            <Popper
                                open={dropdownMenu === 'sports'}
                                anchorEl={anchorEl}
                                placement="top-start"
                                transition
                            >
                                {({ TransitionProps }) => (
                                    <ClickAwayListener
                                        onClickAway={this.closeMainMenu.bind(
                                            this
                                        )}
                                    >
                                        <Fade
                                            {...TransitionProps}
                                            timeout={350}
                                        >
                                            <Paper id="menu-list-grow">
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbsports'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'letou-sports'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/btisports'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'international-sports'
                                                        )}
                                                        <NewReleases
                                                            className={
                                                                classes.newIcon
                                                            }
                                                        />
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={
                                                            // this.handleOnebookClick
                                                            () => {
                                                                this.props.history.push(
                                                                    '/onebook'
                                                                );
                                                            }
                                                        }
                                                    >
                                                        {this.getLabel(
                                                            'sabah-sports'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={this.closeMainMenu.bind(
                                                            this
                                                        )}
                                                    >
                                                        {this.getLabel(
                                                            'sports-tutorial'
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Fade>
                                    </ClickAwayListener>
                                )}
                            </Popper>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'gaming'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onMouseEnter={event => {
                                    this.openMainMenu(event, 'gaming');
                                }}
                                onMouseLeave={() => {
                                    this.closeMainMenu.bind(this);
                                }}
                            >
                                {this.getLabel('gaming-label')}
                            </Button>
                            <Popper
                                open={dropdownMenu === 'gaming'}
                                anchorEl={anchorEl}
                                placement="top-start"
                                transition
                            >
                                {({ TransitionProps }) => (
                                    <ClickAwayListener
                                        onClickAway={this.closeMainMenu.bind(
                                            this
                                        )}
                                    >
                                        <Fade
                                            {...TransitionProps}
                                            timeout={350}
                                        >
                                            <Paper id="menu-list-grow">
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbesports'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'letou-esports'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={this.closeMainMenu.bind(
                                                            this
                                                        )}
                                                    >
                                                        {this.getLabel(
                                                            'letou-esports-pro'
                                                        )}
                                                        <NewReleases
                                                            className={
                                                                classes.newIcon
                                                            }
                                                        />
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/eonebook'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'sabah-esports'
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Fade>
                                    </ClickAwayListener>
                                )}
                            </Popper>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'live-casino'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onClick={() => {
                                    this.props.history.push('/live_casino');
                                }}
                            >
                                {this.getLabel('live-casino')}
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'chess'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onMouseEnter={event => {
                                    this.openMainMenu(event, 'chess');
                                }}
                                onMouseLeave={() => {
                                    this.closeMainMenu.bind(this);
                                }}
                            >
                                {this.getLabel('nav-chess')}
                            </Button>
                            <Popper
                                open={dropdownMenu === 'chess'}
                                anchorEl={anchorEl}
                                placement="top-start"
                                transition
                            >
                                {({ TransitionProps }) => (
                                    <ClickAwayListener
                                        onClickAway={this.closeMainMenu.bind(
                                            this
                                        )}
                                    >
                                        <Fade
                                            {...TransitionProps}
                                            timeout={350}
                                        >
                                            <Paper id="menu-list-grow">
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.chessOptions(
                                                                220
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'fried-golden'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.chessOptions(
                                                                600
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            '21-oclock'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.chessOptions(
                                                                830
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'grab-cattle'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.chessOptions(
                                                                620
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'texas-holdem'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.chessOptions(
                                                                0
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'games-lobby'
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Fade>
                                    </ClickAwayListener>
                                )}
                            </Popper>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'lottery'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onMouseEnter={event => {
                                    this.openMainMenu(event, 'lottery');
                                }}
                                onMouseLeave={() => {
                                    this.closeMainMenu.bind(this);
                                }}
                            >
                                {this.getLabel('nav-lottery')}
                            </Button>
                            <Popper
                                open={dropdownMenu === 'lottery'}
                                anchorEl={anchorEl}
                                placement="top-start"
                                transition
                            >
                                {({ TransitionProps }) => (
                                    <ClickAwayListener
                                        onClickAway={this.closeMainMenu.bind(
                                            this
                                        )}
                                    >
                                        <Fade
                                            {...TransitionProps}
                                            timeout={350}
                                        >
                                            <Paper id="menu-list-grow">
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gblotto'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'nav-lotto'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbkeno'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'happy-color'
                                                        )}
                                                        <NewReleases
                                                            className={
                                                                classes.newIcon
                                                            }
                                                        />
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbssc'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'time-color'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbpk10'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'pick-up'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                '/gbk3'
                                                            );
                                                        }}
                                                    >
                                                        {this.getLabel(
                                                            'fast-3'
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Fade>
                                    </ClickAwayListener>
                                )}
                            </Popper>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'games'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onClick={() => {
                                    this.props.history.push('/game/all');
                                }}
                            >
                                {this.getLabel('nav-games')}
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    dropdownMenu === 'offer'
                                        ? classes.activeSecondRowDropdown
                                        : classes.secondRowDropdown
                                }
                                onMouseEnter={event => {
                                    this.openMainMenu(event, 'offer');
                                }}
                                onMouseLeave={() => {
                                    this.closeMainMenu.bind(this);
                                }}
                            >
                                {this.getLabel('nav-offer')}
                            </Button>
                            <Popper
                                open={dropdownMenu === 'offer'}
                                anchorEl={anchorEl}
                                placement="top-start"
                                transition
                            >
                                {({ TransitionProps }) => (
                                    <ClickAwayListener
                                        onClickAway={this.closeMainMenu.bind(
                                            this
                                        )}
                                    >
                                        <Fade
                                            {...TransitionProps}
                                            timeout={350}
                                        >
                                            <Paper id="menu-list-grow">
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={this.closeMainMenu.bind(
                                                            this
                                                        )}
                                                    >
                                                        {this.getLabel(
                                                            'latest-offer'
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={this.closeMainMenu.bind(
                                                            this
                                                        )}
                                                    >
                                                        {this.getLabel(
                                                            'daily-discount'
                                                        )}
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Fade>
                                    </ClickAwayListener>
                                )}
                            </Popper>
                            {this.props.isAuthenticated ? (
                                <div>
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: '#fff7ec',
                                            borderRadius: 18,
                                            padding: 5
                                        }}
                                    // style={{ backgroundColor: "#64bced", color: "white" }}
                                    >
                                        <div
                                            style={{
                                                float: 'left',
                                                display: 'inline',
                                                color: 'black',
                                                paddingTop: '8px'
                                            }}
                                        >
                                            <span
                                                className={classes.depositValue}
                                            >
                                                {getSymbolFromCurrency(
                                                    this.props.currency
                                                )}
                                                {this.props.balance}
                                            </span>
                                        </div>
                                        <div style={{ display: 'inline' }}>
                                            <Fab
                                                variant="extended"
                                                size="small"
                                                className={classes.depositIcon}
                                                onClick={() => {
                                                    this.props.history.push(
                                                        '/p/fortune-center/deposit'
                                                    );
                                                }}
                                            >
                                                {this.getLabel('deposit-label')}
                                            </Fab>
                                        </div>
                                    </div>
                                    <div style={{ display: 'inline' }}>
                                        <Fab
                                            className={classes.profileIcon}
                                            onClick={() => {
                                                this.props.history.push(
                                                    '/p/fortune-center/deposit'
                                                );
                                            }}
                                        >
                                            <Person />
                                        </Fab>
                                    </div>
                                </div>
                            ) : (
                                    <div style={{ marginLeft: 20 }}>
                                        <Button
                                            variant="contained"
                                            className={classes.signUpButton}
                                            onClick={() => {
                                                this.props.history.push(
                                                    '/register'
                                                );
                                            }}
                                        >
                                            {this.getLabel('sign-up')}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={classes.loginButton}
                                            onClick={() => {
                                                this.props.show_letou_login();
                                            }}
                                        >
                                            {this.getLabel('log-in')}
                                        </Button>
                                    </div>
                                )}
                        </Toolbar>
                    </AppBar>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.props.showLogin}
                        className={classes.modal}
                    >
                        <Paper className={classes.paper}>
                            <Login />
                        </Paper>
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.props.showForgotPassword}
                        className={classes.modal}
                    >
                        <Paper className={classes.paper}>
                            <ForgotPassword />
                        </Paper>
                    </Modal>
                </div>
                <div className={classes.rootMobile}>
                    <AppBar position="static" className={classes.mobileRow}>
                        <Toolbar className={classes.mobileBar}>
                            <IconButton
                                className={classes.mobileMenuButton}
                                onClick={() => {
                                    this.props.show_letou_mobile_menu();
                                }}
                            >
                                <Dehaze />
                            </IconButton>
                            <div className={classes.grow} />
                            <IconButton href="/" className={classes.logo}>
                                <img
                                    src={
                                        images.src +
                                        'letou/logo_' +
                                        this.props.lang +
                                        '.png'
                                    }
                                    alt="LETOU"
                                    height="42"
                                />
                            </IconButton>
                            <div className={classes.grow} />
                            {LangDropdown}
                        </Toolbar>
                    </AppBar>
                    <Modal
                        aria-labelledby="mobile-menu"
                        aria-describedby="mobile-menu-description"
                        open={this.props.showMobileMenu}
                        className={classes.mobileModal}
                    >
                        <Paper className={classes.mobileMenuPaper}>
                            <AppBar
                                position="static"
                                className={classes.mobileRow}
                            >
                                <Toolbar className={classes.mobileBar}>
                                    <IconButton
                                        className={classes.mobileMenuButton}
                                        onClick={() => {
                                            this.props.hide_letou_mobile_menu();
                                        }}
                                    >
                                        <Clear />
                                    </IconButton>
                                    <div className={classes.grow} />
                                    <span>Menu</span>
                                    <div className={classes.grow} />
                                </Toolbar>
                            </AppBar>
                            <List
                                style={{
                                    overflow: 'auto',
                                    maxHeight: 'calc(100% - 60px)'
                                }}
                            >
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_home.png'
                                                }
                                                alt="Home"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('back-home')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbsports');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_sports.png'
                                                }
                                                alt="Sports"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('letou-sports')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/btisports');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_international.png'
                                                }
                                                alt="International"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'international-sports'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/onebook');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_sabah.png'
                                                }
                                                alt="Sabah"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('sabah-sports')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbesports');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_pro.png'
                                                }
                                                alt="Pro"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel(
                                            'letousports-pro'
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/live_casino');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_casino.png'
                                                }
                                                alt="Live Casino"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('live-casino')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/game/all');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_small.png'
                                                }
                                                alt="Small"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('small-game')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        
                                        this.chessOptions(
                                            0
                                        );
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_chess.png'
                                                }
                                                alt="Chess"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('chess-label')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbkeno');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_happy.png'
                                                }
                                                alt="Happy"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('happy-game')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gblotto');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_lotto.png'
                                                }
                                                alt="Lotto"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('lotto-label')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbssc');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_alltime.png'
                                                }
                                                alt="All Time"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('all-time')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbpk10');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_pk.png'
                                                }
                                                alt="PK"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('pk-pick')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/gbk3');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_fast3.png'
                                                }
                                                alt="Fast 3"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('fast-3')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/');
                                        this.props.hide_letou_mobile_menu();
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={
                                                    images.src +
                                                    'letou/icon_offers.png'
                                                }
                                                alt="Offers"
                                                height="40"
                                                width="40"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={this.getLabel('latest-offers')}
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.props.history.push('/');
                                    }}
                                >
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                        primary={this.getLabel(
                                            'become-partner'
                                        )}
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token, user } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        user: user,
        error: state.auth.error,
        lang: state.language.lang,
        showAnnouncements: state.general.show_letou_announcements,
        showLogin: state.general.show_letou_login,
        showForgotPassword: state.general.show_letou_forgot_password,
        showMobileMenu: state.general.show_letou_mobile_menu,
        balance: user ? Number(user.balance).toFixed(2) : '',
        username: user ? user.username : '',
        currency: user ? user.currency : 'USD'
    };
};

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func
};

export default withStyles(styles)(
    injectIntl(
        withRouter(
            connect(mapStateToProps, {
                logout,
                postLogout,
                setLanguage,
                authCheckState,
                show_letou_announcements,
                show_letou_login,
                show_letou_forgot_password,
                show_letou_mobile_menu,
                hide_letou_mobile_menu
            })(TopNavbar)
        )
    )
);
