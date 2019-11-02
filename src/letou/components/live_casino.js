import React from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../css/banner.css';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
  },
  font: {
    verticalAlign: 'inherit',
  },
  mainGrid: {
    maxWidth: 1400,
    padding: '35px 0',
  },
  PgSmallBanner: {
    height: 200,
    display: 'flex',
  },
  PgMain: {
    display: 'flex',
  },
  mainRow: {
    paddingBottom: 35,
    display: 'flex',
    margin: '0 auto',
  },
  titleRow: {
    marginBottom: 30,
    display: 'flex',
  },
  PgHall: {
    width: '20%',
    height: 340,
    border: '1px solid #f1f1f1',
    backgroundColor: '#fffdf8',
    marginBottom: 10,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 26,
    color: '#333',
    marginLeft: "auto",
    marginRight: "auto"
  },
  hallRow: {
    marginBottom: 30,
    display: 'flex',
  },
  listRow: {
    display: 'flex',
    marginBottom: 10,
  },
  ruleTitleRow:{
    padding: '35px 0 10px',
    display: 'flex',
  },
  rule: {
    fontSize: 14,
    color: '#333',
    marginLeft: "auto",
    marginRight: "auto"
  },
  PgHallBtn:{
    width: '80vw',
    height: 30,
    fontSize: '14vw',
    borderRadius: 3,
    lineHeight: 30,
    backgroundColor: '#ff6050',
    marginBottom: 10,
    float: "right",
  },
  PgHallBtnLeft:{
    float: "left",
  }


});

export class live_casino extends React.Component {
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

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        <div className={classes.grow} >
          <Grid container className={classes.mainGrid}>
            <Grid item xs={12} className={classes.mainRow}>
              <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/banner.jpg" alt="live-casino banner" style={{ opacity: 1 }} className="BannerImg" />
            </Grid>
            {/* main */}
            <Grid item xs={12} className={classes.titleRow}>
              {/* <div className="PgMain" >  */}
              <span className={classes.title}>{this.getLabel('Live-casino')}</span>
            </Grid>
            {/* pghall */}
            {/* <Grid item xs={12}  className={classes.hallRow}> */}
            <div className="content">
              <div className='PgHall'>

                <div className="PgHallTitle">{this.getLabel('ag-title')}</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ag.jpg" alt="ag" style={{ opacity: 1 }} className="PgHallPicImg" />
                </div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('ag-words')}</p>

                  <ul>

                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Jingmi')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Package')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-led')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Internationalhall')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Flagshiphall')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-JingmiHall')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>

              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('ag-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ab.jpg" alt="ab" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('ab-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Julong')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Super')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Vip')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Jingmi')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>

              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('EA-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ea.jpg" alt="ea" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('EA-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-commission')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Super')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Dragon')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Longbao')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Pair')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Multi')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtnLeft}>
                  <div className="PgHallBtn Active FloatLeft" style={{ cursor: 'pointer' }}>
                    <a><span><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('pc-version')}</font></span></a>
                  </div>
                  </Grid>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a onClick={() => window.open("https://178.claymoreasia.com/wkpibet/newlayout/index.php", "n2live")}><span><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('Real-money')}</font></span></a>
                  </div>
                  </Grid>
                </div>
              </div>

              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('n2live-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/n2live.jpg" alt="n2" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('n2live-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-commission')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a onClick={() => window.open("https://666.claymoreasia.com/", "n2live")}><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>

              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('OPUS-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/opus.jpg" alt="opus" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('OPUS-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-Qixi')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-Texas')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-21')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>
              {/* </Grid> 
           <Grid item xs={12}  className={classes.hallRow}> */}
              <div className="PgHall">
                <div className="PgHallTitle Color3">{this.getLabel('gd-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gd.jpg" alt="gd" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('gd-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gd-Mi')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>


              <div className="PgHall MarginLeft">
                <div className="PgHallTitle Color3">{this.getLabel('bbin-title')}</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/bbin.jpg" style={{ opacity: 1 }}  alt="bbin" className="PgHallPicImg" />
                </div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('bbin-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-words')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Two')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Sangong')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Wenzhou')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Texas')}</font></a></li>
                    <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Color')}</font></a></li>
                  </ul>
                  <Grid item xs={3} className={classes.PgHallBtn}>
                  <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                  </Grid>
                </div>
              </div>
         
              <div className="emptyHall">
                
              </div>
              <div className="emptyHall">
                
              </div>
              <div className="emptyHall">
                
              </div>
            
            </div>

            {/* </div> */}
            {/* </Grid> */}
            {/* pghall end */}

            <div className="ClearBoth"></div>
            <Grid item xs={12}  className={classes.ruleTitleRow}>
              <span className={classes.rule}>{this.getLabel('game-rule')}</span>
            </Grid>
            
              <div className="PgHallListBox">
                <ul className="List">
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Traditional')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-No')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Super')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Package')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Jingmi')}</font></a></li>
                </ul>
                <ul className="List">
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Serial')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Longbao')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Pair')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Playboy')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Dragon')}</font></a></li>
                </ul><ul className="List">
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Two')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Sangong')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Wenzhou')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Color')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Texas')}</font></a></li>
                </ul>
                <ul className="List">
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Blackjack')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Cattle')}</font></a></li>
                  <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                </ul>
                <ul className="PgHallBrand">
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo4.png" alt="HG platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('HG-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo3.png" alt="OPUS platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo2.png" alt="EA platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo1.png" alt="AG platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('AG-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo8.png" alt="GD platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('GD-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo7.png" alt="EV platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EV-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo6.png" alt="PT platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('PT-platform')}</font></p>
                  </a>
                  </li>
                  <li><a>
                    <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo5.png" alt="W88 platform" /></div>
                    <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('W88-platform')}</font></p>
                  </a>
                  </li>
                </ul>
              
            </div>
            
          
          </Grid>
          {/* main end */}
        </div>
        
        <Footer />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(live_casino))));