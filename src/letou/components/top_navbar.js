import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { config, images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
=======
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
    hide_profile_menu,
    handle_inbox_value,
} from '../actions';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from './account_menu/account_menu';
>>>>>>> cd2b0197709969b4ff17f151dd3be07bbfa86046
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Fade from '@material-ui/core/Fade';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Announcements from "./announcements";
import NewReleases from '@material-ui/icons/NewReleases';

import {
    show_letou_announcements
} from '../actions';

import '../css/top_navbar.scss';

const styles = theme => ({
    root: {
        width: '100%',
    },
    firstRow: {
        height: 32,
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
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
});

export class TopNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            dropdownMenu: 'none',
        };

        this.getLabel = this.getLabel.bind(this);
    }

    closeMainMenu(event) {
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

    render() {
        const { classes, showAnnouncements } = this.props;
        const { anchorEl, dropdownMenu } = this.state;

        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.firstRow}>
                    <Toolbar className={classes.firstBar}>
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="https://help.letou.com/cn/member_brand/seq1.html">
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
                        <Button size="small" className={classes.topLinkButton} target="_blank" href="">
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
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.secondRow}>
                    <Toolbar className={classes.secondBar}>
                        <IconButton href='/' className={classes.logo}>
                            <img src={images.src + 'letou/letou-logo.png'} alt="LETOU" height="42" />
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
                                                <MenuItem onClick={this.closeMainMenu.bind(this)}>{this.getLabel('sabah-sports')}</MenuItem>
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
                            onMouseEnter={(event) => { this.openMainMenu(event, 'live-casino'); }}>
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
                            onMouseEnter={(event) => { this.openMainMenu(event, 'games'); }}>
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
                        <Button variant="contained" className={classes.secondRowButton}>
                            {this.getLabel('sign-up')}
                        </Button>
                        <Button variant="contained" className={classes.secondRowButton}>
                            {this.getLabel('sign-in')}
                        </Button>
                    </Toolbar>
                </AppBar>
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
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(TopNavbar))));