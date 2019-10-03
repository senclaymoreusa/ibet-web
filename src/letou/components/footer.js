import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState } from '../../actions';
import Typography from '@material-ui/core/Typography';
import Flag from 'react-flagkit';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage, injectIntl } from 'react-intl';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { images } from '../../util_config';
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
    backgroundColor: '#3c3c3c',
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
    display: 'flex',
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
  listItemFlag: {
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
  langLabel: {
    color: '#cdcbcc',
    fontSize: 14,
  },
  langControl: {
    minWidth: 140,
    marginTop: -20,
  },
  column: {
    direction: "column",
    justify: "flex-start",
    alignItems: "center",
  },
  title: {
    color: '#F1941A',
    fontSize: 15,
    lineHeight: 1.5,
    letterSpacing: 0.08,
    fontWeight: 'normal'
  },
  grow: {
    flexGrow: 1,
  },
  flexRowDiv: {
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
  },
  flexColumnDiv: {
    direction: "column",
    justify: "flex-start",
    alignItems: "center",
  },
});


export class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.getLabel = this.getLabel.bind(this);
  }
  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }

  render() {
    let { classes } = this.props;

    return (
      <footer className={classes.root}>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.mainRow} style={{ borderBottom: '1px solid #cdcbcc' }}>
            <div className={classes.column}>
              <span className={classes.title}>{this.getLabel('operation-license')}</span>
            </div>
            <div className={classes.column}>
              <span className={classes.title}>{this.getLabel('seriea-sponsorship')}</span>
            </div>
            <div className={classes.column}>
              <span className={classes.title}>{this.getLabel('esport-sponsorship')}</span>
            </div>
            <div className={classes.grow} />
            <div className={classes.column}>
              <span className={classes.title}>{this.getLabel('title-responsibility')}</span>
            </div>
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(Footer))));