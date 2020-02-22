/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Footer from './footer';
import TopNavbar from './top_navbar';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  authCheckState,
  handle_referid,
  hide_landing_page,
  postLogout,
  show_letou_login,
  sendingLog
} from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import { Fade } from 'react-slideshow-image';
import { config, images } from '../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';

import axios from 'axios';
import { errors } from './errors';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  rootDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  rootMobile: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#f2f3f5',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mobileSection: {
    marginBottom: 10,
    paddingTop: 10,
    borderBottom: '1px solid #ebebeb',
    backgroundColor: '#fff'
  },
  mobileButton: {
    textTransform: 'capitalize',
    width: '100%'
  },
  bannerContainer: {
    height: 'auto',
  },
  mobileBannerContainer: {
    height: 160
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: 500
  },
  mobileBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: 156
  },
  container: {
    width: '100%',
    paddingTop: 10,
    paddinBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },
  contentDesktop: {
    maxWidth: 1400,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  menuLabel: {
    overflowWrap: 'break-word',
    fontSize: 14,
    color: '#212121',
    fontWeight: 500,
    fontStyle: 'normal'
  },
  leftColumn: {
    width: 260
  },
  rightColumn: {
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: 260,
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  subTitle: {
    fontSize: 18,
    color: '#212121',
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.57
  },
  desc: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 500,
    fontStyle: 'normal',
  },
  text: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.57
  },
  row: {
    border: '1px solid #f0f0f0',
    marginBottom: 10,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  },
  searchContainer: {
    width: '100%',
    height: 140,
    position: 'absolute',
    bottom: 0,
    margin: 0,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchColumn: {
    width: 600,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  searchBar: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  searchRow: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff'
  },
  searchButton: {
    backgroundColor: '#ff9e00',
    color: 'white',
    width: 35,
    height: 45,
    marginLeft: 20,
    '&:hover': {
      backgroundColor: '#FF7E05'
    }
  },
  searchField: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#292929',
    backgroundColor: '#fff',
    height: 44,
    paddingLeft: 6,
    paddingRight: 10,
    paddingTop: 6,
    width: '100%',
    borderRadius: 4,
    border: 'solid 1px #e4e4e4',
    "&:hover": {
      border: '1px solid #717171',
    },
    "&:focus": {
      border: '1px solid #717171',
    },
  },
  playground: {
    fontSize: 15,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff9e00',
  },
  playgorundText: {
    fontSize: 15,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#fff',
    marginLeft: 10
  },
  leftRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8
  },
  more: {
    fontSize: 12,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#grey',
  },
  firstColorRow: {
    borderTop: '1px solid #3eace9',
    borderLeft: '1px solid #3eace9',
    borderRight: '1px solid #3eace9',
    color: '#3eace9',
    height: 43,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#dfdfdf',
    },
  },
  secondColorRow: {
    border: '1px solid #3eace9',
    color: '#3eace9',
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#dfdfdf',
    },
  },
  topRow: {
    paddingLeft: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #dfdfdf',
    alignItems: 'center',
  },
  pro: {
    position: 'absolute',
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    
    bottom: 0,
    overflow: 'hidden',
    transition: ' all ease-out .2s',
    "&:hover": {
      height: 100,
    },
  },
  proText: {
    height: 40,
    fontSize: 14,
    marginBottom: 5,
    overflow: 'hidden',
    transition: ' all ease-out .2s',
    lineHeight: 1.57
  },
  proColumn:{
    position: 'relative', 
    display: 'flex', 
    flexDirection: 'column',
  },
});

const ColorButton = withStyles(theme => ({
  root: {
    color: 'white',
    backgroundColor: '#ff9e00',
    '&:hover': {
      backgroundColor: '#ff9e00',
    },
  },
}))(Button);

const SearchRadio = withStyles({
  root: {
    color: '#ff9e00',
    '&$checked': {
      color: '#FF7E05',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export class Home extends Component {

  constructor(props) {
    super(props);

    this.searchDiv = React.createRef();

    this.state = {
      width: 800,
      search: '',
      searchType: 'all'
    };
  }

  handleResize = () => {
    this.setState({ height: window.innerHeight, width: window.innerWidth })
  };

  componentWillReceiveProps(props) {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });

    window.addEventListener("resize", this.handleResize);
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
              if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                this.props.postLogout();
                return;
              }

              if (res.status === 200) {
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

  render() {
    const { classes } = this.props;
    const { search, searchType } = this.state;

    const bannerImages = [
      images.src + 'letou/banner1.jpg',
      images.src + 'letou/banner2.jpg',
      images.src + 'letou/banner3.jpg',
      images.src + 'letou/banner4.jpg',
      images.src + 'letou/banner5.jpg',
    ];

    const bannerProperties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false
    }

    const leftProperties = {
      duration: 2500,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false,
      autoplay: true
    }

    return (
      <div className={classes.root}>
        <TopNavbar />
        <div className={classes.rootDesktop}>
          <Grid container>
            <Grid item sm={12} style={{ position: 'relative' }}>
              <div className={classes.bannerContainer}>
                <Fade {...bannerProperties}>
                  {bannerImages.map(item => (
                    <div key={item} className={classes.banner} style={{ 'backgroundImage': `url(${item})` }} />
                  ))}
                </Fade>
              </div>
              <div className={classes.searchContainer}>
                <div className={classes.searchColumn}>
                  <div className={classes.searchBar}>
                    <div className={classes.searchRow}>
                      <RadioGroup aria-label="search" name="searchType" value={searchType} onChange={event => {
                        this.setState({ searchType: event.target.value });
                      }}>
                        <div className={classes.searchRow}>
                          <FormControlLabel value="all" control={<SearchRadio />} label={this.getLabel('all-label')} />
                          <FormControlLabel value="slot" control={<SearchRadio />} label={this.getLabel('slot-machine')} />
                          <FormControlLabel value="jackpot" control={<SearchRadio />} label={this.getLabel('jackpot-label')} />
                          <FormControlLabel value="poker" control={<SearchRadio />} label={this.getLabel('video-poker')} />
                        </div>
                      </RadioGroup>
                    </div>
                    <div className={classes.searchRow}>
                      <TextField
                        className={classes.searchField}
                        placeholder={this.getLabel('search-placeholder')}
                        onChange={event => {
                          this.setState({ search: event.target.value });
                        }}
                        value={search}
                        InputProps={{
                          disableUnderline: true
                        }}
                      />
                      <Button className={classes.searchButton}>
                        <Search style={{ height: 30 }} />
                      </Button>
                    </div>
                  </div>
                  <div className={classes.searchRow} style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <span className={classes.playground}>{this.getLabel('play-ground')}</span>
                    <span className={classes.playgorundText}>{this.getLabel('playground-text')}</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} style={{ alignItems: 'center' }}>
              <div className={classes.container}>
                <div className={classes.contentDesktop}>
                  <div className={classes.leftColumn}>
                    <Grid container>
                      <Grid item xs={12} style={{ paddingBottom: 20, borderBottom: '3px solid #ff9e00' }}>
                        <Fade {...leftProperties}>
                          <div className={classes.left} style={{ 'backgroundImage': `url(${images.src + 'letou/left1.jpg'})` }} />
                          <div className={classes.left} style={{ 'backgroundImage': `url(${images.src + 'letou/left2.jpg'})` }} />
                        </Fade>
                      </Grid>
                      <Grid item xs={12} className={classes.leftRow}>
                        <span className={classes.subTitle}>{this.getLabel('coming-soon')} </span>
                        <div className={classes.grow} />
                        <Link className={classes.more} onClick={() => {
                          this.props.history.push('/gbsports');
                        }} >{this.getLabel('more-matches')} </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={
                            images.src +
                            'letou/left3.jpg'
                          }
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={12} style={{ backgroundColor: '#fafafa', padding: 10 }}>
                        <span className={classes.desc}>Boston Celtics v Detroit Pistons</span>
                      </Grid>
                      <Grid item xs={12} style={{ border: '1px solid #f3f3f3', padding: 10 }}>
                        <span className={classes.desc}>Boston Celtics</span>
                      </Grid>
                      <Grid item xs={12} style={{ border: '1px solid #f3f3f3', padding: 10 }}>
                        <span className={classes.desc}>Boston Celtics</span>
                      </Grid>
                      <Grid item xs={12} style={{ borderBottom: '3px solid #ff9e00', height: 20 }}>
                      </Grid>
                      <Grid item xs={12} className={classes.leftRow}>
                        <span className={classes.subTitle}>{this.getLabel('digital-color')} </span>
                        <div className={classes.grow} />
                        <Link className={classes.more} onClick={() => {
                          this.props.history.push(
                            '/gblotto'
                          );
                        }} >{this.getLabel('bet-now')} </Link>
                      </Grid>
                      <Grid item xs={12} className={classes.firstColorRow}>
                        <img
                          src={
                            images.src +
                            'letou/degitalpic1.jpg'
                          }
                          height={42}
                          width={130}
                          alt=""
                        />
                        <span style={{ marginLeft: 5 }}>{this.getLabel('happy-color')} </span>
                        <div className={classes.grow} />
                        <RightIcon />
                      </Grid>
                      <Grid item xs={12} className={classes.secondColorRow}>
                        <img
                          src={
                            images.src +
                            'letou/degitalpic2.jpg'
                          }
                          height={42}
                          width={130}
                          alt=""
                        />
                        <span style={{ marginLeft: 5 }}>{this.getLabel('nav-lotto')} </span>
                        <div className={classes.grow} />
                        <RightIcon />
                      </Grid>
                      <Grid item xs={12} style={{ borderBottom: '3px solid #ff9e00', height: 20 }}>
                      </Grid>
                      <Grid item xs={12} className={classes.leftRow}>
                        <span className={classes.subTitle}>{this.getLabel('live-dealer')} </span>
                        <div className={classes.grow} />
                        <Link className={classes.more} onClick={() => {
                          this.props.history.push('/casino');
                        }} >{this.getLabel('more-play')} </Link>
                      </Grid>
                      <Grid item xs={12} className={classes.secondColorRow}>
                        <img
                          src={
                            images.src +
                            'letou/pgbanner1.jpg'
                          }
                          height={42}
                          width={130}
                          alt=""
                        />
                        <span style={{ marginLeft: 5 }}>{this.getLabel('baccarat-label')} </span>
                        <div className={classes.grow} />
                        <RightIcon />
                      </Grid>

                      <Grid item xs={12} style={{ borderBottom: '3px solid #ff9e00', height: 20 }}>
                      </Grid>
                      <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10 }}>
                        <span className={classes.subTitle}>{this.getLabel('latest-announcement')}</span>
                      </Grid>
                      <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10, borderTop: '2px solid #f3f3f3' }}>
                        <span className={classes.desc}>¥ Central People’s Bank of China...</span>
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.rightColumn}>
                    <Grid container spacing={3} style={{marginLeft: 10}}>
                      <Grid item xs={12} className={classes.searchRow}>
                        <span className={classes.subTitle}>{this.getLabel('featured-promotions')}</span>
                        <div className={classes.grow} />
                        <span className={classes.desc} style={{ cursor: 'pointer' }} onClick={() => {
                          this.props.history.push('/promotions');
                        }}>{this.getLabel('more-offers')}</span>
                      </Grid>
                      <Grid item xs={4} className={classes.proColumn}>
                        <img
                          src={
                            images.src +
                            'letou/c1.jpg'
                          }
                          alt=""
                          height={147}
                        />
                        <div className={classes.pro}>
                          <span className={classes.proText}>LeTou crazy football! All the leagues in all countries have made every week's winnings and fully upgraded!</span>
                        </div>
                      </Grid>
                      <Grid item xs={4} className={classes.proColumn} >
                        <img
                          src={
                            images.src +
                            'letou/c2.jpg'
                          }
                          height={147}
                          alt=""
                        />
                        <div className={classes.pro}>
                          <span className={classes.proText}>Cheer for Inter Milan Gifts! Blue and black with extraordinary vibes can be extraordinary!</span>
                        </div>
                      </Grid>
                      <Grid item xs={4} className={classes.proColumn} >
                        <img
                          src={
                            images.src +
                            'letou/c3.jpg'
                          }
                          alt=""
                          height={147}
                        />
                        <div className={classes.pro}>
                          <span className={classes.proText}>NBA new season king returns with weekly SOS bailout</span>
                        </div>
                      </Grid>
                      <Grid item xs={12} className={classes.topRow}>
                        <span className={classes.subTitle} style={{ color: '#ff9e00' }}>{this.getLabel('top-games')}</span>
                        <span className={classes.subTitle} style={{ fontSize: 14, marginLeft: 10 }}>{this.getLabel('high-bonuses')}</span>
                        <div className={classes.grow} />
                        <ColorButton style={{ marginBottom: 10 }}>More</ColorButton>
                      </Grid>
                      <Grid item xs={12} className={classes.row} style={{ padding: 20, display: 'flex', flexDirection: 'row', cursor: 'pointer' }}>
                        <img
                          src={
                            images.src +
                            'letou/ct1.jpg'
                          }
                          style={{ minWidth: 221 }}
                          height={168}
                          width={221}
                          alt=""
                        />
                        <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                          <span className={classes.subTitle}>Captain's Treasure</span>
                          <span className={classes.text}>Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times!</span>
                        </div>
                      </Grid>
                      <Grid item xs={12} className={classes.row} style={{ padding: 20, display: 'flex', flexDirection: 'row', cursor: 'pointer' }}>
                        <img
                          src={
                            images.src +
                            'letou/ct2.jpg'
                          }
                          style={{ minWidth: 221 }}
                          height={168}
                          width={221}
                          alt=""
                        />
                        <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                          <span className={classes.subTitle}>Line 5-Fruit Festival</span>
                          <span className={classes.text}>The full fruit carnival party has begun! This is a five-reel, 15-payline game with various winning combinations. You can use the payline to create your own way of winning. When someone gets a jackpot, players in the game will be notified!</span>
                        </div>
                      </Grid>
                      <Grid item xs={12} className={classes.row} style={{ padding: 20, display: 'flex', flexDirection: 'row', cursor: 'pointer', '&:hover': { backgroundColor: 'orange' } }}>
                        <img
                          src={
                            images.src +
                            'letou/ct3.jpg'
                          }
                          style={{ minWidth: 221 }}
                          height={168}
                          width={221}
                          alt=""
                        />
                        <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                          <span className={classes.subTitle}>More than every year</span>
                          <span className={classes.text}>Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times!</span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.rootMobile}>
          <div className={classes.mobileBannerContainer}>
            <Fade {...bannerProperties}>
              {bannerImages.map(item => (
                <div key={item} className={classes.mobileBanner} style={{ 'backgroundImage': `url(${item})` }} />
              ))}
            </Fade>
          </div>
          <div className={classes.mobileSection}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbsports');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_sports.png'
                      }
                      alt="Sports"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel} >
                      {this.getLabel('letou-sports')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton} style={{ minWidth: 100 }}
                  onClick={() => {
                    this.props.history.push('/btisports');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_international.png'
                      }
                      alt="International"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel} >
                      {this.getLabel('international-sports')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/onebook');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_sabah.png'
                      }
                      alt="Sabah"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel} >
                      {this.getLabel('sabah-sports')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbesports');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_pro.png'
                      }
                      alt="Pro"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('letousports-pro')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/live_casino');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_casino.png'
                      }
                      alt="Live Casino"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('live-casino')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbkeno');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_happy.png'
                      }
                      alt="Happy"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('happy-game')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gblotto');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_lotto.png'
                      }
                      alt="Lotto"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('lotto-label')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbssc');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_alltime.png'
                      }
                      alt="All Time"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('all-time')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={3}>
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbpk10');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_pk.png'
                      }
                      alt="PK"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('pk-pick')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/gbk3');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_fast3.png'
                      }
                      alt="Fast 3"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('fast-3')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {

                    this.chessOptions(
                      0
                    );
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_chess.png'
                      }
                      alt="Chess"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('chess-label')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/game/all');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_small.png'
                      }
                      alt="Small"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('small-game')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              alignItems="stretch"
            >
              <Grid item xs={3} >
                <Button className={classes.mobileButton}
                  onClick={() => {
                    this.props.history.push('/');
                  }}>
                  <div className={classes.column}>
                    <img
                      src={
                        images.src +
                        'letou/icon_offers.png'
                      }
                      alt="Offers"
                      height="40"
                      width="40"
                    />
                    <span className={classes.menuLabel}>
                      {this.getLabel('latest-offers')}
                    </span>
                    <div className={classes.grow} />
                  </div>
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state.language.lang
  };
};

export default withStyles(styles)(
  injectIntl(
    withRouter(
      connect(mapStateToProps, {
        authCheckState,
        handle_referid,
        hide_landing_page,
        postLogout,
        show_letou_login,
        sendingLog
      })(Home)
    )
  )
);
