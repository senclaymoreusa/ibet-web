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
  hide_landing_page
} from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import { images } from '../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';

document.body.style = 'background: #f1f1f1;';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper
  },
  bannerContainer: {
    height: 504
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: 500
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentDesktop: {
    maxWidth: 1400,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
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

    

    var bbData = window.IGLOO.getBlackbox();
    
    if (bbData.finished) {
      // clearTimeout(timeoutId);
      var blackBoxString = bbData.blackbox;
      axios
          .get(
              API_URL + 'users/api/login-device-info?bb=' + blackBoxString
          ).then(
            res => {
              //console.log(res.data);
              const ip = res.data.details.realIp.address;
              const countryCode = res.data.details.realIp.ipLocation.countryCode;
              
              localStorage.setItem('ip', ip);
              localStorage.setItem('countryCode', countryCode);

              // var user_ip = localStorage.getItem('ip');
              // console.log(user_ip);

            }
          );
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
                <Grid item xs={12} style={{ paddingLeft: 20, marginBottom:20, display: 'flex', flexDirection: 'row', borderBottom: '2px solid #f3f3f3' }}>
                  <span className={classes.subTitle}>Top Games</span>
                  <div className={classes.grow} />
                  <ColorButton style={{marginBottom:10}}>More</ColorButton>
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
        <Footer />
      </div>
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
        hide_landing_page
      })(Home)
    )
  )
);
