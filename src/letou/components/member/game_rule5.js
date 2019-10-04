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

export class GameRuleFive extends React.Component {
    
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
                    <InfoSelect/>
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
                                <a href="/for_member">小游戏规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>
                            <span>多玩家游戏</span>
                        </h2>
                        &nbsp;
                        <h1>多玩家</h1>
                        &nbsp;
                        <p>- 多玩家牌桌允许观众观看和多达四个玩家游戏。当您加入多玩家牌桌时，您首先是一名观众。作为观众，您可以看到游戏的进度和其他玩家的对话，但您不能投放赌注或进行聊天。
                            <br />
                            <br /> - 如果牌桌有空座位，点击 “ 加入 ” 在牌桌上坐下并开始游戏。
                            <br />
                            <br /> - 请牢记，没有参加游戏的玩家和观众可以观看的牌桌游戏局数是有限制的。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>游戏玩法</h1>
                        &nbsp;
                        <p>- 单击选择含有所需值的筹码。
                            <br />
                            <br /> - 将鼠标指针放在桌子布局的任何位置，会弹出工具提示，显示该下注区已放置的赌注类型、该赌注类型的赔率、最大和最小限制以及您在该位置旋转的赌注数额。此外，赌注将包括的数字也会在桌子布局上加亮显示。
                            <br />
                            <br /> - 点击轮盘赌桌上的数字或赌注区放置您的赌注。每点击一次赌注区，赌注即添加选定数额的筹码。
                            <br />
                            <br /> - 最小和最大下注限额取决于您的VIP等级。如果赌注小于最低限制，则显示信息提示赌注不足，牌桌上相应的筹码闪动三次。关于所有位置下注限额的详细信息，点击牌桌上的限额标志。
                            <br />
                            <br /> - 玩家使用的筹码颜色取决于其位置，该颜色与玩家的名称标签颜色一样。
                            <br />
                            <br /> - 若要增加其他金额的赌注，请选择其他筹码并单击需要的下注区域。
                            <br />
                            <br /> - Shift点击（按住Shift点击）赌注区，从赌注中去除与选中筹码相同数额的筹码，如果选定筹码比已放置赌注数额大，则去除整个赌注。
                            <br />
                            <br /> - 您可同时将多个筹码放置在不同的下注区。
                            <br />
                            <br /> - 您必须在限定的时间内下注。定时器显示了可投注的剩余时间。投放赌注后，请点击 “ 确认赌注 ” 以确认您的赌注。一旦确认后，赌注就不能从牌桌上删除。确认部分赌注后，只要定时器中仍有时间剩余，您就可以投放额外赌注，但是您必须再次点击
                            “ 确认赌注 ” 。只有经确认的赌注才能加入游戏，所有未确认的赌注将被退回。
                            <br />
                            <br /> - 您可以点击 “ 清除赌注 ” 从牌桌上移除所有未确认的筹码。点击 “ 加倍 ” 将您已经投放在牌桌的赌注加倍。
                            <br />
                            <br /> - 旋转结束后，点击 “ 重下注 ” 投放与上局旋转相同的赌注。您仍需点击 “ 确认赌注 ” 以确认赌注。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>桌子和桌子功能</h1>
                        &nbsp;
                        <p>- 轮盘桌有两个部分－轮盘转盘和轮盘布局。轮盘布局指的是玩家放置赌注的区域。此桌使用欧洲风格布局，为单零。轮盘含数字1到36，红色与黑色间隔排列，另外还有0，颜色为绿色。点击 “ 颜色 ” 按钮，可改变轮盘布局的桌面颜色。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>跑道</h1>
                        &nbsp;
                        <p>- 跑道是轮盘布局的延伸，您可以在那里放置以下announce赌注，方法是点击跑道上对应的部分－Tier，Orphelins，VoisinsduZero和Neighbours。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>我喜欢的赌注</h1>
                        &nbsp;
                        <p>- 您可以把四套赌注设置为我喜欢的赌注，这样，点击一下按钮，您就可以在桌子上下注。要保存赌注，在桌子上任意位置放置任意数目的筹码，然后点击 “ 我喜欢的赌注 ” 按钮，然后点击 “ 保存赌注 ” 按钮。保存赌注后，该按钮变为 “ 赌注1－4
                            ” 按钮。点击任何一个保存的赌注的按钮，就可以在保存赌注时同样位置放置同样的筹码。Shift＋点击按钮，可能的话，会从桌子的同一位置去除同样数额的筹码。
                            <br />
                            <br /> - 如果您已保存了四个喜欢的赌注，如果想再继续保存，您必须清空其中一个，才能在其位置保存赌注。清空赌注，点击您想去除的赌注旁边的 “ X ” 按钮。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>更多赌注</h1>
                        &nbsp;
                        <p>- 更多赌注对话框包含了额外的下注选项，通过相应设置，您可以点击一下按钮，就可以迅速地放置多个赌注。
                            <br />
                            <br /> ► “ 终尾赌注 ” 允许您在该数字，及以该数字结束的任何数字上放置赌注。例如，点击1按钮将在1，11，21和31上放置赌注。
                            <br /> ► “ 补全 ” 和 “ 半补全 ” 选项允许您放置包含同一数字的所有赌注。如果选中了以上两个选项的任意一个，在您放置单数赌注时，以下的内注被放置在该特定数字上。
                            <br />
                            <img src="http://i.imgur.com/Nf8aAQo.png" />
                            <br />
                            <br /> - 例如，如果您在数字20上放置了一个单数赌注筹码，并选中了补全选项，那么两个筹码放置在双数17-20，19-20，20-21和20-23；三个筹码放置在三数19-20-21；四个筹码放置在四数16-17-19-20，17-18-20-21，19-20-22-23和20-21-23-24；6个筹码放置在线16-17-18-19-20-21和19-20-21-22-23-24。</p>
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


GameRuleFive.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleFive))));