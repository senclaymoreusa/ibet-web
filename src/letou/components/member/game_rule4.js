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

export class GameRuleFour extends React.Component {
    
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
                                <a href="/zh/for_member">小游戏规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>刮刮乐</h2>
                        <h1>游戏玩法</h1>
                        <ul className={classes.helpCenterArticleColumn}>
                            <li>- 选择您的赌注，根据 “ 牌面分值 ” ，方法是点击游戏窗口右下角牌面分值域旁边的＋或－。 </li>

                            <li>
                            </li><li> - 若您想要选择不同的刮刮卡，请单击 “ 洗牌 ” 。请注意，每局游戏您最多可以洗牌三次。
                            </li><li>
                            </li><li> - 单击游戏窗口右下角的 “ 开始玩 ” 购买刮刮卡。
                            </li><li>
                            </li><li> - 单击 “ 摇骰 ” 显示摇奖号码。然后，刮开您的宾果卡，核对卡上的三组五个数字组合。若摇奖结果包含任意一组五个数字组合的全部号码，您将赢得相应的奖金。
                            </li><li>
                            </li><li> - 单击 “ 刮开所有 ” 从罐子中抽取号码并自动刮开卡片。
                            </li><li>
                            </li><li> - 您还可以使用自动玩功能来玩游戏。单击自动玩字段旁边的＋或－，选择连续刮卡的次数。单击 “ 开始玩 ” 始按钮可启动自动玩。在自动玩中，刮刮卡将自动被刮开。点击 “ 停止 ” 停止活动中自动玩戏会话。
                       
                            </li><li> &nbsp;</li>
                        </ul>
                        
                        <h1>游戏窗口包含下列具体的游戏选项</h1>
                        <ul className={classes.helpCenterArticleColumn}>
                            <li>► 牌 #</li>
                            <li> 刮刮卡的序号。
                            </li><li>
                            </li><li> ► 洗牌
                            </li><li> 此按钮用于在游戏开始前，选择另一张卡替换当前的刮刮卡。每局游戏开始前，您最多可以洗牌三次。
                            </li><li>
                            </li><li> ► 牌面分值
                            </li><li> 每一个刮刮卡的赌注。每张刮刮卡赌注。点击此区域旁边的＋或－相应地增加或减少赌注。
                            </li><li>
                            </li><li> ► 开始玩／刮开所有
                            </li><li> 点击 “ 开始玩 ” 按钮，您即购买了该卡。点击活动游戏局期间显示的 “ 刮开所有 ” 按钮，刮开刮刮卡上所有的域，并显示以下的符号。
                            </li><li>
                            </li><li> ► 自动玩
                            </li><li> 单击该字段旁边的＋或－可增加或减少连续刮卡的次数。单击 “ 开始玩 ” 按钮可启动自动玩。点击 “ 停止 ” 停止活动中自动玩戏会话。
                            </li><li>
                            </li><li> ► 最高奖金
                            </li><li> 此刮刮卡的最大奖金数目。此域根据卡价格的改变而动态改变。</li>
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


GameRuleFour.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleFour))));