import React, { Component } from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../css/banner.css';
import { withRouter } from 'react-router-dom';



const API_URL = process.env.REACT_APP_DEVELOP_API_URL


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
  },
  
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
          <div className='PgSmallBanner'>
            <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/banner.jpg" style={{opacity: 1}} className="BannerImg"/>
          </div>
          <div className="PgMain" > 
          {/* main */}
            <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
             {this.getLabel('Live-casino')}
            </font></font></h2>
            
            <div>
              <div className="PgHall"> 
                <div className="PgHallTitle">AG Extreme Square</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ag.jpg" style={{opacity: 1}} className="PgHallPicImg"/>
                </div>
                <div className="PgHallArticle">
                  <p>The world's first six-card starter, the beauty anchor hotline teasing, winning opportunities will never miss.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jingmi Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Package table baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>LED package table baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suibao</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Roulette</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>International hall</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Flagship hall</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jingmi Hall</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}><a><span>Real money</span></a></div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">AB Clear</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ab.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>The first super multi-brick baccarat once viewed 12 tables and roads, which is closer to the players' habits.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Julong Hall</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Super multi-office</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Vip hall</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jingmi Hall</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>Real money</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">EA Ruibao Pavilion</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ea.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>The longest operating platform in the industry, the operational experience of the sense of the scene, the original free-to-play game.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>No commission baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Super baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Dragon and Phoenix Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Longbao Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Pair of baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Multi-door dragon tiger</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn Active FloatLeft" style={{cursor:'pointer'}}>
                    <a><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>PC version</font></font></span></a>
                  </div>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Real money</font></font></span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">N2Live New Ruibao Pavilion</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/n2live.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>Exclusive new mobile, smooth operating experience, high quality gaming platform.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>No commission baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suibao</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Roulette</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a onClick={()=> window.open("https://666.claymoreasia.com/", "n2live")}><span>Real money</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">OPUS Fortune Hall</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/opus.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>2D mini game, 3D real person experience, exclusive music investment VIP baccarat hall.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Roulette</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suibao</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Qixi Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Texas Hold'em</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>21 o'clock</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>Real money</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall">
                <div className="PgHallTitle Color3">GD Panlong Temple</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gd.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>A simple operating platform, experience a new scene mode, a variety of baccarat at a time.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mi brand baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Roulette</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suibao</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>Real money</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle Color3">BBIN Boeing Hall</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/bbin.jpg" style={{opacity: 1}} className="PgHallPicImg"/>
                </div>
                <div className="PgHallArticle">
                  <p>The old-fashioned gaming platform, the highest share of the game platform, the original golden arm bet special gameplay.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Two bars</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sangong</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Wenzhou Pai Gow</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suibao</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Texas Hold'em</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Color dish</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>Real money</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle Color3">GPI Jin Yucheng</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gpi.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>Exclusive Super 98 Baccarat, innovative high odds, technical ability leading the industry.</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Qixi Baccarat</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>斗色骰宝</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sangong</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Black jack</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Super stall</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>Real money</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ClearBoth"></div>
          <div>
            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Learn about game rules and platform introduction</font></font></h3>
            <div class="PgHallListBox">
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Traditional baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>No commission baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Super baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Package table baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jingmi Baccarat</font></font></a></li>
            </ul>
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Serial baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Longbao Baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Pair of baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Playboy Baccarat</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Dragon tiger</font></font></a></li>
              </ul><ul class="List"><li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Two bars</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sangong</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Wenzhou Pai Gow</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Color dish</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Texas Hold'em</font></font></a></li>
            </ul>
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Blackjack</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cattle</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Roulette</font></font></a></li>
            </ul>
            <ul class="PgHallBrand">
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo4.png" alt="HG platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>HG platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo3.png" alt="OPUS platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>OPUS platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo2.png" alt="EA platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>EA platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo1.png" alt="AG platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>AG platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo8.png" alt="GD platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>GD platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo7.png" alt="EV platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>EV platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo6.png" alt="PT platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>PT platform</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo5.png" alt="W88 platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>W88 platform</font></font></p>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
          </div>
          {/* main end */}
          
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