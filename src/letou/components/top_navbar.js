import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, } from 'react-intl';
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
import Announcements from "./announcements";
import Login from "./login-register/login";
import ForgotPassword from "./login-register/forgot_password";
import NewReleases from '@material-ui/icons/NewReleases';
import Fab from '@material-ui/core/Fab';
import Person from '@material-ui/icons/Person';
import { config } from '../../util_config';
import axios from 'axios';
import {
    logout,
    postLogout,
    setLanguage,
    authCheckState,
    show_letou_announcements,
    show_letou_login,
    show_letou_forgot_password
} from '../../actions';

import '../css/top_navbar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL
const styles = theme => ({
    root: {
        width: '100%',
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    firstBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 32,
        minHeight: 32,
        maxWidth: 1400,
        width: '100%',
    },
    secondRow: {
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    secondBar: {
        paddingLeft: 0,
        paddingRight: 0,
        height: 60,
        minHeight: 60,
        maxWidth: 1400,
        width: '100%',
    },
    grow: {
        flexGrow: 1,
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
    topLinkButton: {
        margin: theme.spacing(1),
        textTransform: 'capitalize',
        cursor: 'pointer',
        maxHeight: 32,
    },
    secondRowButton: {
        borderRadius: 18,
        margin: theme.spacing(1),
        textTransform: 'capitalize',
    },
    secondRowDropdown: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 0,
        boxShadow: 'none',
        borderTop: "5px solid #fff",
        borderBottom: "5px solid #fff",
        textTransform: 'capitalize',
        "&:hover": {
            borderTop: "5px solid #ff9e00",
            backgroundColor: "#fff",
            borderBottom: "5px solid #fff",
        }
    },
    activeSecondRowDropdown: {
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        borderTop: "5px solid #ff9e00",
        backgroundColor: "#fff",
        borderBottom: "5px solid #fff",
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: "#fff",
            borderBottom: "5px solid #fff",
        }
    },
    onSelectSecondRowDropdown: {
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
    },
    logo: {
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    newIcon: {
        marginLeft: 10,
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIcon: {
        margin: theme.spacing(1),
        marginLeft: 30,
        backgroundColor: '#F1941A',
        height: 30,
        width: 36,
        "&:hover": {
            backgroundColor: "#F1941A",
        }
    },
    paper: {
        position: 'absolute',
        padding: 0,
        "&:focus": {
            outline: 'none'
        }
    },
    langControl: {
        minWidth: 140,
    },
    itemList: {
        backgroundColor: '#fff',

        paddingLeft: 10,
        paddingRight: 10,
    },
    listItem: {
        borderRadius: 4,
        "&:hover": {

        },
    },
    listItemSelected: {
        borderRadius: 4,
        backgroundColor: '#cdcdcd',
    },
    listItemFlag: {
        display: 'inline-block'
    },
    listItemText: {
        marginLeft: 10,
        color: '#212121',
        display: 'inline-block'
    },
});

export class TopNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            anchorElLang: null,
            dropdownMenu: 'none',
            showLoggedinStatus: false,
        };

        this.getLabel = this.getLabel.bind(this);
        this.handleOnebookClick = this.handleOnebookClick.bind(this);
    }

    langMenuClicked(langValue) {
        this.props.setLanguage(langValue)
            .then(() => {
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

    componentWillReceiveProps(props) {
        this.props.authCheckState()
            .then(() => {
                this.setState({ showLoggedinStatus: true });
            })
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(() => {
                this.setState({ showLoggedinStatus: true });
            })
    }

    handleOnebookClick() {
        var url = "";
        if (!this.props.isAuthenticated) {
            url = 'http://sbtest.claymoreasia.com/NewIndex';

            window.open(url, "onebook_url");
        } else {
            let token = localStorage.getItem('token');
            config.headers['Authorization'] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config).then(res => {
                let user_data = res.data

                var postData = {
                    "username": user_data.username
                }
                var formBody = [];
                for (var pd in postData) {
                    var encodedKey = encodeURIComponent(pd);
                    var encodedValue = encodeURIComponent(postData[pd]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

                return fetch(API_URL + 'games/api/onebook/login', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    body: formBody
                }).then(function (res) {

                    return res.json();
                }).then(function (data) {
                    //console.log(data);
                    url = data.login_url;
                    //console.log(url)
                    window.open(url, "onebook_url")
                });
            });
        }
    }

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
                <Button aria-haspopup="true" onClick={event => {
                    this.setState({ anchorElLang: event.currentTarget })
                }}>
                    <Flag country={flag} className={classes.listItemFlag} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElLang}
                    keepMounted
                    open={Boolean(anchorElLang)}
                    onClose={() => {
                        this.setState({ anchorElLang: null })
                    }}
                >
                    <MenuItem value={'en'} onClick={() => { this.langMenuClicked('en') }}
                        selected={this.props.lang === 'en'}
                        className={classes.listItem}>
                        <Flag country="US" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {this.getLabel('lang-english')}
                        </div>
                    </MenuItem>
                    <MenuItem value={'zh'} onClick={() => { this.langMenuClicked('zh') }}
                        selected={this.props.lang === 'zh-hans' || this.props.lang === 'zh'}
                        className={classes.listItem}>
                        <Flag country="CN" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {this.getLabel('lang-chinese')}
                        </div>
                    </MenuItem>
                    <MenuItem value={'th'} onClick={() => { this.langMenuClicked('th') }}
                        selected={this.props.lang === 'th'}
                        className={classes.listItem}>
                        <Flag country="TH" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {this.getLabel('lang-thai')}
                        </div>
                    </MenuItem>
                    <MenuItem value={'vi'} onClick={() => { this.langMenuClicked('vi') }}
                        selected={this.props.lang === 'vi'}
                        className={classes.listItem}>
                        <Flag country="VN" className={classes.listItemFlag} />
                        <div className={classes.listItemText}>
                            {this.getLabel('lang-vietnamese')}
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        );

        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.firstRow}>
                    <Toolbar className={classes.firstBar}>
                        {LangDropdown}
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="/vn/about_us">
                            {this.getLabel('about-letou')}
                        </Button>
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="https://affiliates.letou.com">
                            {this.getLabel('become-partner')}
                        </Button>
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="https://letou.one/">
                            {this.getLabel('line-center')}
                        </Button>
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="https://www.letou.rocks/">
                            {this.getLabel('downloads-link')}
                        </Button>
                        <Button size="small" className={classes.topLinkButton}
                            onClick={() => {
                                this.props.show_letou_announcements();
                            }}>
                            {this.getLabel('latest-announcement')}
                        </Button>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.props.showAnnouncements}
                            className={classes.modal}>
                            <Paper className={classes.paper} >
                                <Announcements />
                            </Paper>
                        </Modal>
                        <div className={classes.grow} />
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="https://www.letou.com/cn/chat">
                            {this.getLabel('online-service')}
                        </Button>
                        {this.props.isAuthenticated ?
                            this.state.showLoggedinStatus &&
                            <Button size="small" className={classes.topLinkButton}
                                onClick={() => {
                                    this.props.logout()
                                    postLogout();
                                }}>
                                {this.getLabel('log-out')}
                            </Button> : null}
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.secondRow}>
                    <Toolbar className={classes.secondBar}>
                        <IconButton href='/' className={classes.logo}>
                            <img src={images.src + 'letou/logo_' + this.props.lang + '.png'} alt="LETOU" height="42" />
                        </IconButton>
                        <IconButton target="_blank"  href='https://www.inter.it/en/news/2018/08/8/fc-internazionale-milano-announces-letou-as-first-asian-online-gaming-partner.html' className={classes.logo} >
                            <img src={images.src + 'letou/inter_' + this.props.lang + '.png'} alt="Inter" height="42" />
                        </IconButton>
                        <div className={classes.grow} />
                        <Button variant="contained" className={(dropdownMenu === 'sports') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'sports'); }}>
                            {this.getLabel('nav-sports')}
                        </Button>
                        <Popper open={dropdownMenu === 'sports'} anchorEl={anchorEl} placement="top-start" transition>
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={this.closeMainMenu.bind(this)}>
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper id="menu-list-grow">
                                            <MenuList >
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('letou-sports')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('international-sports')}<NewReleases className={classes.newIcon} /></MenuItem>
                                                <MenuItem
                                                    onClick={
                                                        this.handleOnebookClick

                                                    }>
                                                    {this.getLabel('sabah-sports')}
                                                </MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('sports-tutorial')}</MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Fade>
                                </ClickAwayListener>
                            )}
                        </Popper>
                        <Button variant="contained" className={(dropdownMenu === 'gaming') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'gaming'); }}>
                            {this.getLabel('nav-gaming')}
                        </Button>
                        <Popper open={dropdownMenu === 'gaming'} anchorEl={anchorEl} placement="top-start" transition>
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={this.closeMainMenu.bind(this)}>
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper id="menu-list-grow">
                                            <MenuList>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('letou-esports')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('letou-esports-pro')}<NewReleases className={classes.newIcon} /></MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('sabah-esports')}</MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Fade>
                                </ClickAwayListener>
                            )}
                        </Popper>
                        <Button variant="contained" className={(dropdownMenu === 'live-casino') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'live-casino'); }}
                            onClick={() => {
                                this.props.history.push('/live_casino');

                            }}>
                            {this.getLabel('nav-live-casino')}
                        </Button>
                        <Button variant="contained" className={(dropdownMenu === 'chess') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'chess'); }}>
                            {this.getLabel('nav-chess')}
                        </Button>
                        <Popper open={dropdownMenu === 'chess'} anchorEl={anchorEl} placement="top-start" transition>
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={this.closeMainMenu.bind(this)}>
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper id="menu-list-grow">
                                            <MenuList>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('fried-golden')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('21-oclock')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('grab-cattle')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('texas-holdem')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('games-lobby')}</MenuItem>

                                            </MenuList>
                                        </Paper>
                                    </Fade>
                                </ClickAwayListener>
                            )}
                        </Popper>
                        <Button variant="contained" className={(dropdownMenu === 'lottery') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'lottery'); }}>
                            {this.getLabel('nav-lottery')}
                        </Button>
                        <Popper open={dropdownMenu === 'lottery'} anchorEl={anchorEl} placement="top-start" transition>
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={this.closeMainMenu.bind(this)}>
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper id="menu-list-grow">
                                            <MenuList>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('nav-lotto')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('happy-color')}<NewReleases className={classes.newIcon} /></MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('time-color')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('pick-up')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('fast-3')}</MenuItem>

                                            </MenuList>
                                        </Paper>
                                    </Fade>
                                </ClickAwayListener>
                            )}
                        </Popper>
                        <Button variant="contained" className={(dropdownMenu === 'games') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'games'); }}
                            onClick={() => {
                                this.props.history.push('/game');

                            }}>
                            {this.getLabel('nav-games')}
                        </Button>
                        <Button variant="contained" className={(dropdownMenu === 'offer') ? classes.activeSecondRowDropdown : classes.secondRowDropdown}
                            onMouseEnter={(event) => { this.openMainMenu(event, 'offer'); }}>
                            {this.getLabel('nav-offer')}
                        </Button>
                        <Popper open={dropdownMenu === 'offer'} anchorEl={anchorEl} placement="top-start" transition>
                            {({ TransitionProps }) => (
                                <ClickAwayListener onClickAway={this.closeMainMenu.bind(this)}>
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper id="menu-list-grow">
                                            <MenuList>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('latest-offer')}</MenuItem>
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('daily-discount')}</MenuItem>

                                            </MenuList>
                                        </Paper>
                                    </Fade>
                                </ClickAwayListener>
                            )}
                        </Popper>
                        {this.props.isAuthenticated ?
                            this.state.showLoggedinStatus &&
                            <Fab color="primary" aria-label="add" className={classes.profileIcon} onClick={
                                () => {
                                    // window.open(window.location.origin + "/p/fortune-center/deposit",
                                    //     "Letou profile",
                                    //     "resizable,scrollbars,status"); 
                                    this.props.history.push('/p/fortune-center/deposit')
                                }}>
                                <Person />
                            </Fab> : <div style={{ marginLeft: 20 }}>
                                <Button variant="contained" className={classes.secondRowButton}
                                    onClick={() => {
                                        this.props.history.push('/register')
                                    }}>
                                    {this.getLabel('sign-up')}
                                </Button>
                                <Button variant="contained" className={classes.secondRowButton}
                                    onClick={() => {
                                        this.props.show_letou_login()
                                    }}>
                                    {this.getLabel('log-in')}
                                </Button>
                            </div>}

                    </Toolbar>
                </AppBar>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.showLogin}
                    className={classes.modal}>
                    <Paper className={classes.paper} >
                        <Login />
                    </Paper>
                </Modal>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.showForgotPassword}
                    className={classes.modal}>
                    <Paper className={classes.paper} >
                        <ForgotPassword />
                    </Paper>
                </Modal>
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
        showAnnouncements: state.general.show_letou_announcements,
        showLogin: state.general.show_letou_login,
        showForgotPassword: state.general.show_letou_forgot_password,
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    logout, postLogout, setLanguage, authCheckState, show_letou_announcements, show_letou_login, show_letou_forgot_password
})(TopNavbar))));