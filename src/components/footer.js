import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState } from '../actions';
import Typography from '@material-ui/core/Typography';
import Flag from 'react-flagkit';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { images } from '../util_config';
import InputBase from '@material-ui/core/InputBase';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
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
  root: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: theme.spacing() * 2,
    paddingBottom: theme.spacing() * 2,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainGrid: {
    maxWidth: 1400,
  },
  mainRow: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  imageGridCell: {
    direction: "column",
    justify: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    minHeight: 44,
  },
  image: {
    display: 'inline',
    verticalAlign: 'middle',
  },
  policyLink: {
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.29,
    letterSpacing: -0.24,
    color: '#cdcbcc',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  footer_menu_container: {
    display: 'inline',
    marginTop: 20
  },
  lang_button: {
    // padding: 0,
    // minWidth: 0
    border: '1px solid #363636',
    height: 48,
    borderRadius: 4,
    "&:hover": {
      borderRadius: 4,
      border: '1px solid #868686',
    },
  },
  itemList: {
    backgroundColor: '#363636',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  listItem: {
    border: '1px solid #363636',   
    borderRadius: 4,
    "&:hover": {
      border: '1px solid #868686',
    },
  },
  listItemSelected: {
    borderRadius: 4,
    border: '1px solid #ffffff',
  },
  listItemFlag:{
    display: 'inline-block'
  },
  listItemText: {
    marginLeft: 10,
    color: 'white',
    display: 'inline-block'
  },
  footerLink: {
    cursor: 'pointer',
    color: '#d3d1d2',
    fontSize: 15,
    fontWeight: 800,
    fontStyle: 'normal',
    whiteSpace: 'nowrap',
    marginRight: 30,
    "&:hover": {
      opacity: 1,
      textDecoration: 'none'

    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  contact_title: {
    fontSize: 18,
    color: 'white',
    textAlign: "right",

  },
  contactText: {
    fontSize: 14,
    color: '#e5e4e5',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.57
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
  },
  langLabel:{
    color:  '#cdcbcc',
    fontSize:14,
  },
  langControl: {
    minWidth: 140,
    marginTop: -20,
  },
});

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing() * 3,
    },
  },
  input: {
    borderRadius: 3,
    position: 'relative',
    backgroundColor: '#212121',
    opacity:0.5,
    alignItems:'center',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 16px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 3,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      showLangMenu: false,
    };
  }

  langMenuClicked = (event) => {
    this.setState({ anchorEl: null });
    this.setState({
      lang: event.currentTarget.dataset.myValue
    })

    this.changeLanguage(event.currentTarget.dataset.myValue);
    this.setState({ showLangMenu: false });
  }

  languageChanged(evt){
    this.setState({ lang: evt.target.value  });
    this.changeLanguage(evt.target.value);
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
    let { classes } = this.props;

    const LangDropdown = (
      <div className={classes.lang_container} style={{float: 'right'}}>
        <FormControl className={classes.langControl}>
          <InputLabel htmlFor="age-customized-select" className={classes.langLabel}>Language</InputLabel>
          <Select    
            value={this.props.lang}
            onChange={this.languageChanged.bind(this)}
            input={<BootstrapInput name="age" id="age-customized-select" />}
            MenuProps={{ classes: { paper: classes.itemList } }}
          >
             <MenuItem value={'en'} onClick={this.langMenuClicked}
              selected={this.props.lang === 'en'}
              className={classes.listItem}>
              <Flag country="US" className={classes.listItemFlag}/>
              <div className={classes.listItemText}>
                <FormattedMessage id="lang.english" defaultMessage='English' />
              </div>
            </MenuItem>
            <MenuItem value={'zh'} onClick={this.langMenuClicked}
              selected={this.props.lang === 'zh-hans' || this.props.lang === 'zh'}
              className={classes.listItem}>
              <Flag country="CN"  className={classes.listItemFlag}/>
              <div className={classes.listItemText}>
                <FormattedMessage id="lang.chinese" defaultMessage='Chinese' />
              </div>
            </MenuItem>
            <MenuItem value={'fr'} onClick={this.langMenuClicked}
              selected={this.props.lang === 'fr'}
              className={classes.listItem}>
              <Flag country="FR"  className={classes.listItemFlag}/>
              <div className={classes.listItemText}>
                <FormattedMessage id="lang.french" defaultMessage='French' />
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    );

    return (
      <footer className={classes.root}>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.mainRow} style={{ borderBottom: '1px solid #cdcbcc' }}>
            <Grid container style={{ height: 48 }} alignItems="center">
              <Grid item xs={12} sm={2}>
                <IconButton href='/' style={{ padding: 0 }}>
                  <img src={images.src + 'ibet_logo.svg'} alt="" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div className={classes.sectionDesktop}>
                  <Link className={classes.footerLink}>
                    GX4
                    </Link>
                  <Link className={classes.footerLink}>
                    Gamblers Anonymous
                    </Link>
                  <Link className={classes.footerLink}>
                    GameCare
                    </Link>
                  <Link className={classes.footerLink}>
                    Game Stop
                    </Link>
                  <Link className={classes.footerLink}>
                    Support
                    </Link>
                  <Link className={classes.footerLink}>
                    Affiliate
                    </Link>
                </div>
                <Grid container className={classes.sectionMobile}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  style={{ height: 48, marginTop: 20 }}>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      GX4
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      Gamblers Anonymous
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      GameCare
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      Game Stop
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      Support
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.footerLink}>
                      Affiliate
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={2} >
                {LangDropdown}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.mainRow} style={{ borderBottom: '1px solid #cdcbcc' }}>
            <Grid container>
              <Grid item xs={12} sm={4} clas={classes.imageGridCell}>
                <div className={classes.imageContainer}>
                  <img src={images.src + '18.svg'} alt="" height="34" width="34" className={classes.image} />
                  <img src={images.src + 'mga-logo.png'} alt="" width="87" height="34" hspace="45" className={classes.image} />
                  <img src={images.src + 'ecogra.png'} alt="" height="34" width="87" className={classes.image} />
                </div>
                <div className={classes.imageContainer}>
                  <img src={images.src + 'visa-footer.svg'} alt="" className={classes.image} />
                  <img src={images.src + 'master-footer.svg'} alt="" hspace="20" className={classes.image} />
                  <img src={images.src + 'bank-footer.svg'} alt="" height="38" className={classes.image} />
                  <img src={images.src + 'paypal-footer.svg'} alt="" hspace="20" className={classes.image} />
                  <img src={images.src + 'neteller.svg'} alt="" className={classes.image} />
                  <img src={images.src + 'skrill.svg'} alt="" hspace="20" className={classes.image} />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4}>
                <Typography className={classes.contactText} style={{ textAlign: "right" }}>
                  <span>The main priority for us at ibet is to provide an enjoyable and entertaining gaming experience. We are committed to protecting our players and offer several different tools and resources to ensure that your gambling is conducted within safe limits. Please visit these at [RG Link] and if you are in any doubt contact our trained customer service at any time.</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.mainRow}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.contactText}>
                  <span>The operator of this website is The Claymore Group Ltd, a Maltese company registration number C-90400, having its registered address at Level4, Ewropa Business Centre, Triq Dun Karm, Birkirkara BKR 9034, Malta. The Claymore Group Ltd is licensed and regulated by the Malta Gaming Authority under license XXXXXX issued on XXXXX (TBD). </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}  >

                <div className={classes.sectionDesktop} style={{ float: "right" }}
                >
                  <Link className={classes.policyLink}>
                    Privacy Policy
                </Link>
                  <Link className={classes.policyLink} style={{ marginLeft: 30, marginRight: 30 }}>
                    Cookie Policy
                    </Link>
                  <Link className={classes.policyLink}>
                    Terms & Conditions
                    </Link>
                </div>

                <Grid container className={classes.sectionMobile}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  style={{ height: 48, marginTop: 20 }}>
                  <Grid item xs={12}>
                    <Link className={classes.policyLink}>
                      Privacy Policy
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.policyLink}>
                      Cookie Policy
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.policyLink}>
                      Terms & Conditions
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer >
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