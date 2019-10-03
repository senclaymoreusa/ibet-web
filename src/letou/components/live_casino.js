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
                <div className="PgHallTitle">{this.getLabel('ag-title')}</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ag.jpg" style={{opacity: 1}} className="PgHallPicImg"/>
                </div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('ag-words')}</p>
                  <ul>
                    
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-baccarat')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Jingmi')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Package')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-led')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Suibao')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Roulette')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Internationalhall')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Flagshiphall')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-JingmiHall')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}><a><span>{this.getLabel('Real-money')}</span></a></div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('ag-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ab.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('ab-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Julong')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Super')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Vip')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Jingmi')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('EA-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ea.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('EA-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-commission')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-Super')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-Dragon')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-Longbao')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-Pair')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-Multi')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn Active FloatLeft" style={{cursor:'pointer'}}>
                    <a><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('pc-version')}</font></font></span></a>
                  </div>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('Real-money')}</font></font></span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('n2live-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/n2live.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('n2live-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-baccarat')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-commission')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Suibao')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Roulette')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a onClick={()=> window.open("https://666.claymoreasia.com/", "n2live")}><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle">{this.getLabel('OPUS-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/opus.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('OPUS-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-baccarat')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Roulette')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Suibao')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('OPUS-Qixi')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('OPUS-Texas')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('OPUS-21')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall">
                <div className="PgHallTitle Color3">{this.getLabel('gd-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gd.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('gd-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-baccarat')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gd-Mi')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Roulette')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Suibao')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle Color3">{this.getLabel('bbin-title')}</div>
                <div className="PgHallPic">
                  <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/bbin.jpg" style={{opacity: 1}} className="PgHallPicImg"/>
                </div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('bbin-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('bbin-words')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('bbin-Two')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('bbin-Sangong')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Wenzhou')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('bbin-Texas')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('bbin-Color')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
              <div className="PgHall MarginLeft">
                <div className="PgHallTitle Color3">{this.getLabel('gpi-title')}</div>
                <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gpi.jpg" style={{opacity: 1}} className="PgHallPicImg"/></div>
                <div className="PgHallArticle">
                  <p>{this.getLabel('gpi-words')}</p>
                  <ul>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-baccarat')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gpi-Qixi')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gpi-Dai')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gpi-Sangong')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gpi-Black')}</font></font></a></li>
                    <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('gpi-Super')}</font></font></a></li>
                  </ul>
                  <div className="PgHallBtn FloatRight" style={{cursor:'pointer'}}>
                    <a><span>{this.getLabel('Real-money')}</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ClearBoth"></div>
          <div>
            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('game-rule')}</font></font></h3>
            <div class="PgHallListBox">
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Traditional')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-No')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Super')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Package')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Jingmi')}</font></font></a></li>
            </ul>
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Serial')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Longbao')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Pair')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Playboy')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Dragon')}</font></font></a></li>
              </ul><ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Two')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Sangong')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Wenzhou')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Color')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Texas')}</font></font></a></li>
            </ul>
            <ul class="List">
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Blackjack')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('rule-Cattle')}</font></font></a></li>
              <li><a><i></i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('ag-Roulette')}</font></font></a></li>
            </ul>
            <ul class="PgHallBrand">
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo4.png" alt="HG platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('HG-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo3.png" alt="OPUS platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('OPUS-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo2.png" alt="EA platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EA-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo1.png" alt="AG platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('AG-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo8.png" alt="GD platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('GD-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo7.png" alt="EV platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('EV-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo6.png" alt="PT platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('PT-platform')}</font></font></p>
                </a>
              </li>
              <li><a>
                <div class="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo5.png" alt="W88 platform"/></div>
                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.getLabel('W88-platform')}</font></font></p>
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