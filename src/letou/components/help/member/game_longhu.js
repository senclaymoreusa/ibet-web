import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../../icon_header";
import '../../../css/help.css'

import { show_letou_announcements} from '../../../../actions';


const styles = theme => ({
   
    content : {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            display: 'none' 
        }
    },
    detail: {
        fontSize: '14px',
        color: '#666666',
        fontFamily: 'Microsoft YaHei'
    },
 
    mobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row'
         
        }
    },
    mainCont: {
        paddingLeft: 20,
        paddingRight: 20
    },
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class GameLongHu extends React.Component {
    
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
                <Grid item md={5} className={classes.infoSelect}>
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
            
                <Grid item md={7} xs={12} className={classes.mainCont}>
                    <div className={classes.mobile}>
                            <div className="HelpCenter">
                                <ul >
                                    <li className="Active">
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li>
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
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
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>龙虎</h2>
                        <p>一个以牌面点数大小来决定输赢的博彩游戏，简单易学，让玩家完全体验赌场的趣味！</p>
                        <h1>【游戏规则】</h1>
                        <p>正确预计两家「龙」 和「虎」 的点数比较大。点击下注的筹码，再点击桌上下注任何一块 （ 龙、虎或平局 ）。荷官只派两门牌，每门各派一只牌，即龙与虎，双方斗大。牌面的大小不比花色，只比点数，K为最大牌，A为最小。荷官先派发第一张牌于龙的位置，而第二张牌派发到虎的位置，牌面全是向上的，点数较大的胜出。</p>
                        <h1>【派彩】</h1>
                        <ul className={classes.helpCenterArticleColumn}>
                        <p>不同平台的同一游戏玩法，赔率可能不一样，具体以各游戏厅界面所展示的赔率为准。以下赔率以AG国际厅为例：
                            
                            <li> - 龙：1赔1（开和局时，退回一半下注金额。）</li>
                            <li> - 虎：1赔1（开和局时，退回一半下注金额。）</li>
                            <li> - 合局：1赔8</li></p>
                        <p>请注意：
                            <li> • 桌台限红是本游戏桌台主要玩法的最小、最大玩法限红。玩家在每个玩法的可押注限额是玩法限红与玩家个人限红的交集。如需调节个人限红，请联系网站客服。</li>
                            <li> • 荷官发牌时，偶有系统无法判读状况时，此时荷官将重新扫描，直到系统能够完整判读(如遇故障因素将注销所有相关注单／派彩)。</li>
                            <li> • 如遇结算错误，按照当期视频结果重新结算。</li>
                        </p>
                        </ul>
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


GameLongHu.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameLongHu))));