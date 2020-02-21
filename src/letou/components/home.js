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
import { Slide } from 'react-slideshow-image';
import { config, images } from '../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    height: 504
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
    marginLeft: 5
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: 260
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

export class Home extends Component {

  constructor(props) {
    super(props);

    this.searchDiv = React.createRef();

    this.state = {
      width: 800
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

  render() {
    const { classes } = this.props;

    const bannerImages = [
      images.src + 'letou/banner1.jpg',
      images.src + 'letou/banner2.jpg',
      images.src + 'letou/banner3.jpg',
      images.src + 'letou/banner4.jpg',
      images.src + 'letou/banner5.jpg',
    ];

    const bannerProperties = {
      duration: 2000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    }

    const leftProperties = {
      duration: 3000,
      transitionDuration: 50,
      infinite: true,
      indicators: false,
      arrows: false,
      autoplay: true
    }

    return (
      <div className={classes.root}>
        <TopNavbar />
        <div className={classes.rootDesktop}>
          <div className={classes.bannerContainer}>
            <Slide {...bannerProperties}>
              {bannerImages.map(item => (
                <div key={item} className={classes.banner} style={{ 'backgroundImage': `url(${item})` }} />
              ))}
            </Slide>
          </div>
          <div className={classes.container}>
            <div className={classes.contentDesktop}>
              <div className={classes.leftColumn}>
                <Grid container>
                  <Grid item xs={12} style={{ paddingBottom: 20, borderBottom: '3px solid #ff9e00' }}>
                    <Slide {...leftProperties}>
                      <div className={classes.left} style={{ 'backgroundImage': `url(${images.src + 'letou/left1.jpg'})` }} />
                      <div className={classes.left} style={{ 'backgroundImage': `url(${images.src + 'letou/left2.jpg'})` }} />
                    </Slide>
                  </Grid>
                  <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10 }}>
                    <span className={classes.subTitle}>Coming soon</span>
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
                  <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10 }}>
                    <span className={classes.subTitle}>Digital color</span>
                  </Grid>
                  <Grid item xs={6} style={{ borderTop: '1px solid #3eace9', borderLeft: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 32 }}>
                    <img
                      src={
                        images.src +
                        'letou/degitalpic1.jpg'
                      }
                      height={42}
                      width={130}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} style={{ borderTop: '1px solid #3eace9', borderRight: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 42, color: '#3eace9', paddingTop: 8, paddingLeft: 10 }}>
                    <span >Happy color</span>
                  </Grid>
                  <Grid item xs={6} style={{ borderLeft: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 42 }}>
                    <img
                      src={
                        images.src +
                        'letou/degitalpic2.jpg'
                      }
                      height={42}
                      width={130}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} style={{ borderRight: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 42, color: '#3eace9', paddingTop: 8, paddingLeft: 10 }}>
                    <span >Lotto</span>
                  </Grid>
                  <Grid item xs={12} style={{ borderBottom: '3px solid #ff9e00', height: 20 }}>
                  </Grid>
                  <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10 }}>
                    <span className={classes.subTitle}>Live dealer</span>
                  </Grid>
                  <Grid item xs={6} style={{ borderTop: '1px solid #3eace9', borderLeft: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 42 }}>
                    <img
                      src={
                        images.src +
                        'letou/pgbanner1.jpg'
                      }
                      height={42}
                      width={130}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} style={{ borderTop: '1px solid #3eace9', borderRight: '1px solid #3eace9', borderBottom: '1px solid #3eace9', height: 42, color: '#3eace9', paddingTop: 8, paddingLeft: 10 }}>
                    <span >Baccarat</span>
                  </Grid>
                  <Grid item xs={12} style={{ borderBottom: '3px solid #ff9e00', height: 20 }}>
                  </Grid>
                  <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10 }}>
                    <span className={classes.subTitle}>Latest Announcement</span>
                  </Grid>
                  <Grid item xs={12} style={{ paddingBottom: 10, paddingTop: 10, borderTop: '3px solid #f3f3f3' }}>
                    <span className={classes.desc}>¥ Central People’s Bank of China...</span>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.rightColumn}>
                <Grid container>
                  <Grid item xs={12} style={{ padding: 20, display: 'flex', flexDirection: 'row', backgroundColor: 'white' }}>
                    <span className={classes.subTitle}>Letou Featured Promotions</span>
                    <span className={classes.desc} style={{ marginLeft: 20, marginTop: 6 }}>Various offers to support you</span>
                  </Grid>
                  <Grid item xs={4} style={{ padding: 20, display: 'flex', flexDirection: 'column', }}>
                    <img
                      src={
                        images.src +
                        'letou/c1.jpg'
                      }
                      alt=""
                      height={147}
                    />
                    <span className={classes.text} style={{ marginTop: 20 }}>Le Tou crazy football! All the leagues in all countries have made every week's winnings and fully upgraded!</span>
                  </Grid>
                  <Grid item xs={4} style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                    <img
                      src={
                        images.src +
                        'letou/c2.jpg'
                      }
                      height={147}
                      alt=""
                    />
                    <span className={classes.text} style={{ marginTop: 20 }}>Le Tou crazy football! All the leagues in all countries have made every week's winnings and fully upgraded!</span>
                  </Grid>
                  <Grid item xs={4} style={{ padding: 20, display: 'flex', flexDirection: 'column', }}>
                    <img
                      src={
                        images.src +
                        'letou/c3.jpg'
                      }
                      alt=""
                      height={147}
                    />
                    <span className={classes.text} style={{ marginTop: 20 }}>Le Tou crazy football! All the leagues in all countries have made every week's winnings and fully upgraded!</span>
                  </Grid>
                  <Grid item xs={12} style={{ paddingLeft: 20, marginBottom: 20, display: 'flex', flexDirection: 'row', borderBottom: '2px solid #f3f3f3' }}>
                    <span className={classes.subTitle}>Top Games</span>
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
                      <span className={classes.text}>Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times! Take a sea adventure with Captain Pirate! The game line can be up to 50 and can be up to 25 lines. The highest multiple is 10,000 times!</span>
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
        </div>
        <div className={classes.rootMobile}>
          <div className={classes.mobileBannerContainer}>
            <Slide {...bannerProperties}>
              {bannerImages.map(item => (
                <div key={item} className={classes.mobileBanner} style={{ 'backgroundImage': `url(${item})` }} />
              ))}
            </Slide>
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
