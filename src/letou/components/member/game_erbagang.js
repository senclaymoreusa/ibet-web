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

export class GameErbagang extends React.Component {
    
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
                                    <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/zh/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/zh/for_member">娱乐场规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>二八杠</h2>
                        <h1>【游戏规则】</h1>
                        <p>二八杠游戏，是利用中国麻将中，单一色筒子牌〔一筒到九筒，每一种花色4张牌，一共36张牌〕，外加白皮4张牌，共有40张牌。</p>
                        <p>- 游戏玩法
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> 玩法很简单，区分为庄家〔1方〕跟闲家〔3方〕，总共四方，游戏开始前，需将40张牌洗干净，然后掷出3个骰子所得数字依庄家是1、上门是2、中门是3、下门是4、庄家是5、上门是6, …依此类推。
                            </li><li>
                            </li><li> - 牌面点数
                            </li><li> 开始发开牌，每家发两张牌来比点数大小，两张牌的点数相加后，取其个位数字，每家单独跟庄家比输赢，然后直接比大小，正所谓一番两瞪眼，庄家必须跟三个闲家比大小，庄家的点数，如果比闲家小，则庄家输了该赌局；反之，庄家的点数，如果比闲家大，则庄家赢了该赌局。
                            </li><li>
                            </li><li> - 大小
                            </li><li> 在游戏中，先比对子大小，再比数字大小。
                            </li><li> 比点数时有一特例，即二筒配八筒，该组合除对子外为点数最大。
                            </li><li> 详细大小比较请看图示。
                            </li><li>
                            </li><li> 图示点数大小：
                            </li><li> 点数大小如下图所示：〔排序由最大点数依次排由左至右到最下方最小点数〕
                            </li>
                            <img src="http://i.imgur.com/xXkvekX.jpg" alt=""></img>
                            <li>
                            </li><li> 和局：庄家与闲家所持牌的组合完全相同时，该局即为和局，退还本金。
                            </li><li>
                            </li><li> - 派彩
                            </li><li> • 下注上门赢，1赔0.97
                            </li><li> • 下注上门输，1赔0.97
                            </li><li> • 下注中门赢，1赔0.97
                            </li><li> • 下注中门输，1赔0.97
                            </li><li> • 下注下门赢，1赔0.97
                            </li><li> • 下注下门输，1赔0.97
                            </li><li> • 下注上门和局，1赔60
                            </li><li> • 下注中门和局，1赔60
                            </li><li> • 下注下门和局，1赔60
                            </li><li> • 下注上门对子，1赔6
                            </li><li> • 下注中门对子，1赔6
                            </li><li> • 下注下门对子，1赔6</li>
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


GameErbagang.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameErbagang))));