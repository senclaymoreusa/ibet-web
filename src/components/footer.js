import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState } from '../actions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Flag from 'react-flagkit';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { ReactComponent as IbetLogo } from '../assets/img/svg/ibet_logo.svg';
import { ReactComponent as BetIcon } from '../assets/img/svg/bet.svg';
import { ReactComponent as SlotsIcon } from '../assets/img/svg/slots.svg';
import { ReactComponent as LotteryIcon } from '../assets/img/svg/lottery.svg';
import { ReactComponent as SoccerIcon } from '../assets/img/svg/soccer.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2,
  },
  lang_button: {
    padding: 0,
    minWidth: 0
  },
  lang_menu_list: {
    backgroundColor: '#363636',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  lang_menu_list_item: {
    border: '1px solid #363636',
    "&:hover": {
      borderRadius: 4,
      border: '1px solid #868686',
    },
  },
  lang_menu_list_item_selected: {
    borderRadius: 4,
    border: '1px solid #ffffff',
  },
  lang_menu_list_item_text: {
    marginLeft: 10,
    color: 'white',
  },
  footer: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'column'
  },
  footer_menu_container: {
    display: 'inline',
    marginTop: 20
  },
  lang_container: {
    display: 'inline',
    marginLeft: 30,
  },
  footer_link_container: {
    marginTop: 20
  },
  footer_link: {
    marginRight: 20,
    color: 'white',
    fontSize: 14,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
      textDecoration: 'none'

    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  contact_title: {
    fontSize: 18,
    color: 'white',
    textAlign: "right",

  },
  contact_text: {
    fontSize: 14,
    color: 'white',
    marginTop: 20,
    textAlign: "right"
  },
  contact_email: {
    fontSize: 14,
    color: 'red'
  },
  menuButton: {
    fontSize: 20
  },
  a: {
    color: 'white'
  }
});

export class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      showLangMenu: false,
    };
  }

  handleLanguageMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.setState({ showLangMenu: !this.state.showLangMenu });
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


  render() {
    let { anchorEl, showLangMenu } = this.state;
    let { classes } = this.props;

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

    const FooterLinks = (
      <div className={classes.footer_link_container}>
        <Link href='/terms_conditions' className={classes.footer_link}>
          <FormattedMessage id="footer.terms_conditions" defaultMessage='Terms and Conditions' />
        </Link>
        <Link href='/cookie_policy' className={classes.footer_link}>
          <FormattedMessage id="footer.cookie_policy" defaultMessage='Cookie Policy' />
        </Link>
        <Link href='/privacy_policy' className={classes.footer_link}>
          <FormattedMessage id="footer.privacy_policy" defaultMessage='Privacy Policy' />
        </Link>
        <Link href='/' className={classes.footer_link}>
          <FormattedMessage id="footer.game_rules" defaultMessage='Game Rules' />
        </Link>
        <Link href='/' className={classes.footer_link}>
          <FormattedMessage id="footer.investory_relations" defaultMessage='Investor Relations' />
        </Link>
        <Link href='/' className={classes.footer_link}>
          <FormattedMessage id="footer.visit_gambler_anonymous" defaultMessage='Visit Gamblers Anonymous' />
        </Link>
        <Link href='/' className={classes.footer_link}>
          <FormattedMessage id="footer.visit_gamcare_newsroom" defaultMessage='Visit GamCare Newsroom' />
        </Link>
      </div>
    );

    const LangDropdown = (
      <div className={classes.lang_container}>
        <Button className={classes.lang_button} onClick={this.handleLanguageMenuOpen}>{langButtonIcon}</Button>
        <Popper open={showLangMenu} anchorEl={anchorEl} placement='top-start' transition>
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
      </div>
    );


    const FooterMenu = (
      <div className={classes.footer_menu_container}>
        <Button className={this.props.activeMenu === 'sports' ? 'mainButtonActive' : 'mainButton'} href='/sports_type/'>
          <SoccerIcon className="soccer" />
          <span className="Sports">
            <FormattedMessage id="nav.sports" defaultMessage='Sports' />
          </span>
        </Button>
        <Button className={this.props.activeMenu === 'live-casino' ? 'mainButtonActive' : 'mainButton'} href='/live_casino_type/'>
          <BetIcon className="bet" />
          <span className="Live-Casino">
            <FormattedMessage id="nav.live-casino" defaultMessage='Live Casino' />
          </span>
        </Button>
        <Button className={this.props.activeMenu === 'slots' ? 'mainButtonActive' : 'mainButton'} href='/slot_type/'>
          <SlotsIcon className="games-icon" />
          <span className="Slots">
            <FormattedMessage id="nav.slots" defaultMessage='Slots' />
          </span>
        </Button>
        <Button className={this.props.activeMenu === 'lottery' ? 'mainButtonActive' : 'mainButton'} href='/lottery_type/'>
          <LotteryIcon className="lottery" />
          <span className="Lottery">
            <FormattedMessage id="nav.lottery" defaultMessage='Lottery' />
          </span>
        </Button>
      </div>
    );

    return (
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <IconButton href='/'>
              <IbetLogo />
            </IconButton>
            <div>
              {FooterMenu}
              {LangDropdown}
              {FooterLinks}
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Typography className={classes.contact_title}>
              <FormattedMessage id="footer.contact_support_title" defaultMessage='Contact Support' />
            </Typography>
            <Typography className={classes.contact_text}>
              <FormattedMessage id="footer.contact_support_text" defaultMessage='Our friendly customer service team is on hand to answer any questions you may have 24 hours a day, 7 days a week.' />
            </Typography>
            <Typography className={classes.contact_text}>
              <FormattedMessage id="footer.contact_support_email" defaultMessage='Contact us today at' /> <a className={classes.contact_email} href="mailto:hello@ibet.com?subject = Feedback&body = Message">hello@ibet.com</a>
            </Typography>
          </Grid>
        </Grid>
      </footer>
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

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(Footer)));