import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import InfoSelect from "../info_select";
import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


const styles = theme => ({
   
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

export class GameSangong extends React.Component {
    
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
                        <h2>三公</h2>
                        <p>三公(3 Face / 3 Picture)是百家乐玩法的一种变形。会员与庄家赌点数、赌公牌数，还可以赌特殊牌型。下注简单、节奏明快，在新兴的游戏中受到欢迎。</p>
                        <p>• 游戏中共设计1门庄家及3门闲家，会员可任意进行投注。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> • 使用1副扑克牌，下注结束后开始发牌，发牌时先开头牌决定发牌顺序，再以逆时钟方向进行，每门连续发3张牌。
                            </li><li> • 游戏主旨为闲家与庄家比较牌的点数高低来决定胜负。
                            </li><li>
                            </li><li> • 会员可以有以下的下注选择：
                            </li><li> 闲1：赢、输、和、三公、对牌以上
                            </li><li> 闲2：赢、输、和、三公、对牌以上
                            </li><li> 闲3：赢、输、和、三公、对牌以上
                            </li><li> 庄家：对牌以上
                            </li><li> 注：各下注以及对牌以上赔率请见派彩说明。
                            </li><li>
                            </li><li> • 头牌：荷官每局开始会先开「头牌」，依据头牌点数〔从庄家方位逆时针方向算起〕决定开牌位置。
                            </li><li> • 开牌顺序：以逆时针方向开牌〔如下〕
                            </li><li>
                            <img src="http://i.imgur.com/GRE2cCX.png "></img>
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 牌面点数
                            </li><li> • 三公以牌面点数的总和来比较大小，加上公牌(J，Q，K)来变化大小牌型。
                            </li><li> • 公牌及10点以「0」点计，其它牌则以牌面点数来计算，总和超过10或20则取其个位数字来看。
                            </li><li> • 公牌以「P」来代表，1张公牌显示为「P」，2张公牌显示为「2P」，3张公牌（三公）显示为「3P」。
                            </li><li> • 牌面的显示方法为「公牌+点数」，例如拿到1张公牌与点数和为8，则显示「P8」，2张公牌与点数和为0，则显示 「2P0」。
                            </li><li> • 最大牌型为「三公」，其次为「双公9」；牌型中若无公牌，则最大牌型为9点，扑克牌的花色无任何影响。
                            </li><li> • 双方点数与公牌数相同时则为和，出现和牌时，会员若下注「输」或「赢」则退回注额。
                            </li><li>
                            </li><li> • 基本的牌型大小：
                            </li><li>
                            <img src="http://i.imgur.com/7zb3zUo.png"></img>
                            </li><li>
                            </li><li> 「对牌以上」的定义：
                            </li><li>
                            <img src="http://i.imgur.com/lsYfRbb.png"></img>
                            </li><li>
                            </li><li> 注：「同花顺／顺子」最大牌型为「Q，K，A」，最小牌型为「A，2，3」，无「K，A，2」这个组合。
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 派彩
                            </li><li> 不同平台的同一游戏玩法，赔率可能不一样，具体以各游戏厅界面所展示的赔率为准。以下赔率以波音厅为例：
                            </li><li>
                            <img src="http://i.imgur.com/M1WCXw5.png"></img>
                            </li><li>
                            </li><li> 无抽水的设计，但下列两种状况有特殊赔率：
                            </li><li> 1. 投注「赢」，闲家以6点的任意牌型组合胜出，则获1赔0.5。
                            </li><li> 2. 投注「输」，庄家以6点的任意牌型组合胜出，则获1赔0.5。
                            </li><li>
                            </li><li> 对牌以上的赔率设定如下：
                            </li><li>
                            <img src="http://i.imgur.com/JPVX1c8.png"></img></li>
                            </ul>
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


GameSangong.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameSangong))));