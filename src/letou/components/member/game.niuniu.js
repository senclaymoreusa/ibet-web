import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


const styles = () => ({
   
    content : {
        display: 'flex',
        paddingRight: 400,
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
    },
    aboutUsDetail : {
       fontSize: '14px',
    },
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class GameNiuniu extends React.Component {
    
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
  
      const { classes } = this.props;
  
      return (
       
        <div className={classes.root}> 
            <IconHeader/>
            <Grid container className={classes.content}>
                <Grid item xs={5} className={classes.infoSelect}>
                        <div className="HelpCenterLeftNav">
                            <ul>
                                <li>
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">娱乐场规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <p>-游戏玩法
                    <ul className={classes.helpCenterArticleColumn}>
                            <li> 游戏使用扑克牌中52张牌（不含鬼牌），每局每家派发5张牌，先从5张牌中找出3张可成10或10的倍数组合，剩余2张牌相 加，如遇点数相加超过10点则减去10点，为该局之点数，与庄家比点数大小决定胜负。
                            </li><li>
                            </li><li> 你有以下几种下注选择：
                            </li><li> ‘闲一’：平倍、翻倍。
                            </li><li> ‘闲二’：平倍、翻倍。
                            </li><li> ‘闲三’：平倍、翻倍。
                            </li><li> 注意：于翻倍中下注时，‘可用余额’必须高于下注额度的5倍（下注分数X5公赔率），详情请看‘其他补充说明’。
                            </li><li>
                            </li><li> 头牌：发牌员每局开始会先开“头牌”，依据头牌点数（从庄家方位逆时针方向算起）决定开牌位置。
                            </li><li>
                            <img src="http://i.imgur.com/sJzs2gw.jpg"></img>
                            </li><li>
                            </li><li> 开牌顺序：以逆时针方向开牌（如下）
                            </li><li>
                            <img src="http://i.imgur.com/dJmqONC.png"></img>
                            </li><li>
                            </li><li> - 大小
                            </li><li> 在游戏中，如遇点数相同时，将从5张牌中挑选牌值最大的比牌，牌值大的一方获胜。如点数与牌值都相同时，最后再比花色大小。 详细大小比较请看下表说明。
                            </li><li>
                            </li><li> 牌型：
                            </li><li>
                            <img src="http://i.imgur.com/kFgcRVR.png "></img>
                            </li><li>
                            </li><li> 大小：
                            </li><li>
                            <img src="http://i.imgur.com/sRZf7W7.png "></img>
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 派彩
                            </li><li> 不同平台的同一游戏玩法，赔率可能不一样，具体以各游戏厅界面所展示的赔率为准。以下赔率以波音厅为例： 赢赔率：
                            </li><li>
                            <img src="http://i.imgur.com/paep88b.png "></img>
                            </li><li>
                            </li><li> 输赔率：
                            </li><li>
                            <img src="http://i.imgur.com/Hnj7FPY.png "></img></li></ul>
                        </p>
                    </div>

                </Grid>
            </Grid>
            
        </div>
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


GameNiuniu.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameNiuniu))));