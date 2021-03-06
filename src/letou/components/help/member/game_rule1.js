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

export class GameRuleOne extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          hide: true,
          current: 1
        }
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    
    onClick(index, e) {
            e.preventDefault()
            this.setState({
              hide: false,
              current: index
              
            })
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
                                <a href="/zh/for_member">小游戏规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""}>
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}>奇迹大奖</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""}>
                                <a href="/" onClick={(e) => {this.onClick(2, e);}}>5-10条线</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""}>
                                <a href="/" onClick={(e) => {this.onClick(3, e);}}>15-20条线</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""}>
                                <a href="/" onClick={(e) => {this.onClick(4, e);}}>25+条线</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""}>
                                <a href="/" onClick={(e) => {this.onClick(5, e);}}>多旋转</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                   
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                            <h2>奇迹大奖</h2>
                            &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 选择线注的方法是：点击 “ 线注 ” 下面的＋和－来增加或减少线注数额。
                                <br />
                                <br /> - 每游戏局总赌注 = 赔付线赌注 x 启动的赔付线数。
                                <br />
                                <br /> - 单击 “ 旋转 ” 以当前选择的赔付线数和赔付线赌注旋转转轴。在转轴旋转中 “ 旋转 ” 按钮变为 “ 停止 ” 。点击 “ 停止 ” 结束旋转并立刻显示旋转结果。
                                <br />
                                <br /> - 也可使用 “ 自动游戏 ” 功能转动转轴。将鼠标放到自动游戏按钮上面显示选项列表。选择您想要自动游戏的旋转次数，或选择 “ 直到功能 ” ，旋转到触发了狂暴战士之怒功能或艾德曼合金免费游戏为止。点击一个选项开始自动游戏功能。在自动游戏模式下，
                                “ 自动游戏 ” 按钮变为停止。自动游戏模式在转轴旋转了使用者确定的次数之后结束，或在您选择了 “ 直到功能 ” 的情况下，触发了狂暴战士之怒功能或艾德曼合金免费游戏后结束，或在您点击了 “ 停止 ” 之后结束。
                                <br />
                                <br /> - 点击 “ 快速模式 ” 按钮打开或关闭快速模式，以此打开或关闭一些赢奖动画从而使转轴较快或较慢旋转。
                                <br />
                                <br /> - 奖金根据赔率表计算。赔付线奖金 = 赔付线赌注 x 赔率表上相应的系数。彩派奖金 = 总赌注 x 赔率表上相应的系数。赔付表可通过 “ 信息 ” 页面。
                                <br />
                                <br /> - 不同赔付在线同时赢得的奖金在以下情况下，在给定赔付在线只赢得最高的赔付线赢奖组合：累加在一起。
                                <br />
                                <br /> - 旋转获胜时， “ 赢 ” 字段显示累加的奖金。随便单击屏幕任何地方都可停止奖金指示器，立即显示总奖金金额。
                                <br />
                                <br /> - 赔付线奖金和总奖金也显示在转轴或游戏窗口底部的条上。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>信息页面</h1>
                            &nbsp;
                            <p>- 单击 “ 信息 ” 可打开描述不同游戏组件的参考屏幕。单击屏幕右下角的箭头按钮，可在不同信息屏幕间浏览。
                                <br />
                                <br /> ► “ 赔率表 ” 屏幕显示所有赢奖组合。在赢奖旋转后，当赢奖符号组合（符号的数目以及赌注乘数）被翻开后是呈高亮和闪光的。
                                <br /> ► “ 堆栈Wilds ” 屏幕解释了游戏中的堆栈Wilds的特别行为。
                                <br /> ► “ 狂暴战士之怒功能 ” 屏幕描述了触发该功能所需的符号组合及其规则。
                                <br /> ► The “ 艾德曼合金免费游戏 ” 屏幕描述了如何触发艾德曼合金免费游戏及其玩法。
                                <br /> ► “ 神奇的多级神秘累积奖池 ” 屏幕介绍如何进入 “ 神奇的多级神秘累积奖池 ” 游戏的方法和规则，玩家在游戏中可赢得四个奖池的其中一个。
                                <br /> ► “ 赔付线 ” 屏幕描述了所有可能的赔付线组合，并解释了游戏中的赔付规则。
                                <br />
                                <br /> 点击 “ 返回 ” 退出信息屏幕，返回游戏。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>赌付线</h1>
                            &nbsp;
                            <p>- 活跃赔付线由出现在转轴上面的线条代表，具体见 “ 信息 ” 页的 “ 赔付线 ” 屏幕。
                                <br />
                                <br /> - 所有25条活跃线都可登记奖金。
                                <br />
                                <br /> - 赔付线赌注和总赌注有所不同。赔付线赌注是指在单条赔付在线投放的赌注。总赌注显示所有将投放在游戏局中的赌注。赔率表中显示的赔率将乘以赔付线赌注。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>关于赔率</h1>
                            &nbsp;
                            <p>- 赔率列在 “ 赔率表 ” 屏幕上。可能赢得的奖金金额计算方法：该赔付线赌注乘以赔率。
                                <br />
                                <br /> - 如果两个赢奖组合出现在同一条赔付在线时，玩家将按奖金较高的组合获得赔彩。如果多条启动的赔付在线均出现赢奖组合，奖金将会累计。
                                <br />
                                <br /> - 赢奖组合必须从最左边转轴开始，并且这些符号必须是连续的。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2>5-10条线</h2>
                            &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 选择线注的方法是：点击 “ 线注 ” 下面的＋ 和－来增加或减少线注数额。
                                <br />
                                <br /> - 点击 “ 赔付线 ” 下面的＋ 和 – 按钮启动赔付线并连续显示它们的形状。通过使用在转轴两侧的数字按钮也可以启动赔付线。每当选择较高的赔付线时，也就同时选择了所有较低的赔付线。例如：如果选择赔付线6，同时也就启动了赔付线1至5。单击
                                “ 赌最大 ” 的每条赔付线赌注启动所有赔付线，并旋转转轴。
                                <br />
                                <br /> - 每游戏局总赌注 = 赔付线赌注 x 启动的赔付线数。
                                <br />
                                <br /> - 单击 “ 旋转 ” 以当前选择的赔付线数和赔付线赌注旋转转轴。在转轴旋转中 “ 旋转 ” 按钮变为 “ 停止 ” 。点击 “ 停止 ” 结束旋转并立刻显示旋转结果。
                                <br />
                                <br /> - 也可使用 “ 自动游戏 ” 功能转动转轴。将鼠标放到自动游戏按钮上面显示选项列表。选择要自动玩的旋转次数。点击一个选项开始自动游戏功能。在自动游戏模式下， “ 自动游戏 ” 按钮变为停止。自动游戏模式在转轴旋转了使用者指定的次数之后结束，或在您点击了
                                “ 停止 ” 之后结束。
                                <br />
                                <br /> - 点击 “ 快速模式 ” 按钮打开或关闭快速模式，以此打开或关闭一些赢奖动画从而使转轴较快或较慢旋转。
                                <br />
                                <br /> - 奖金根据赔率表计算。赔付线奖金 = 赔付线赌注 x 赔率表上相应的系数。彩派奖金 = 总赌注 x 赔率表上相应的系数。赔付表可通过 “ 信息 ” 页面。
                                <br />
                                <br /> - 不同赔付在线同时赢得的奖金在以下情况下，在给定赔付在线只赢得最高的赔付线赢奖组合：累加在一起。
                                <br />
                                <br /> - 旋转获胜时， “ 赢 ” 字段显示累加的奖金。随便单击屏幕任何地方都可停止奖金指示器，立即显示总奖金金额。
                                <br />
                                <br /> - 赔付线奖金和总奖金也显示在转轴或游戏窗口底部的条上。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>信息页面</h1>
                            &nbsp;
                            <p>- 单击 “ 信息 ” 可打开描述不同游戏组件的参考屏幕。单击屏幕右下角的箭头按钮，可在不同信息屏幕间浏览。
                                <br />
                                <br /> ► 赔率表 ” 屏幕显示所有赢奖组合。在赢奖旋转后，当赢奖符号组合（符号的数目以及赌注乘数）被翻开后是呈高亮和闪光的。
                                <br /> ► “ 赔付线 ” 屏幕描述了所有可能的赔付线组合，并解释了游戏中的赔付规则。
                                <br />
                                <br /> - 点击 “ 返回 ” 退出信息屏幕，返回游戏。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>赌付线</h1>
                            &nbsp;
                            <p>- 活跃赔付线由出现在转轴上面的线条代表，具体见 “ 信息 ” 页的 “ 赔付线 ” 屏幕。
                                <br />
                                <br /> - 只有启动的赔付线才能登记奖金。
                                <br />
                                <br /> - 赔付线赌注和总赌注有所不同。赔付线赌注是指在单条赔付在线投放的赌注。总赌注显示所有将投放在游戏局中的赌注。赔率表中显示的赔率将乘以赔付线赌注。
                                <br />
                                <br /> - 这些规则不适用于彩派符号。有关彩派符号的更多信息，请见下文。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>关于赔率</h1>
                            &nbsp;
                            <p>- 赔率列在 “ 赔率表屏幕上。可能赢得的奖金金额计算方法：该赔付线赌注乘以赔率。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                            <h2>15-20条线</h2>
                            &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 选择线注的方法是：点击 “ 线注 ” 下面的＋和－来增加或减少线注数额。
                                <br />
                                <br /> - 每游戏局总赌注 = 线注 x 活跃赔付线 x 机器数目（4）。
                                <br />
                                <br /> - 点击 “ 旋转 ” 使用当前选择的线注同时旋转所有四台机器的转轴。每台机器上的转轴一个接一个停转，顺序见以上描述。
                                <br />
                                <br /> - 转轴可以自动旋转。将鼠标放到自动游戏按钮上面显示选项列表。选择自动旋转的次数，或选择直到奖励功能，使旋转到触发了免费游戏为止。点击一个选项开始自动游戏功能。在自动游戏模式下， “ 自动游戏 ” 按钮变为停止。当转轴转动了玩家选定的次数之后，或在您选择了直到奖励功能，触发了免费游戏之后，或者您点击了
                                “ 停止 ” ， “ 自动游戏 ” 模式结束。
                                <br />
                                <br /> - 点击 “ 快速模式 ” 按钮打开或关闭快速模式，以此打开或关闭一些赢奖动画从而使转轴较快或较慢旋转。
                                <br />
                                <br /> - 奖金根据赔率表计算。赔付线奖金 = 赔付线赌注 x 赔率表上相应的系数。Scatter奖金 = 特定机器 x 上总赌注按赔付表对应的翻倍乘数。赔付表可通过 “ 信息 ” 页面。
                                <br />
                                <br /> - 不同赔付在线同时赢得的奖金在以下情况下，在给定赔付在线只赢得最高的赔付线赢奖组合：累加在一起。
                                <br />
                                <br /> - 出现赢奖旋转的情况下， “ 奖金 ” 域会显示所有机器上累积的奖金。随便单击屏幕任何地方都可停止奖金指示器，立即显示总奖金金额。
                                <br />
                                <br /> - 总奖金也会显示在转轴底部工具条上面。
                                <br />
                                <br /> - 鼠标移动在一台有赢奖的机器上，可以显示该机器上次旋转的总奖金。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>信息页面</h1>
                            &nbsp;
                            <p>- 单击 “ 信息 ” 可打开描述不同游戏组件的参考屏幕。单击屏幕右下角的箭头按钮，可在不同信息屏幕间浏览。
                                <br />
                                <br /> ► “ 赔率表 ” 屏幕显示所有赢奖组合。在赢奖旋转后，当赢奖符号组合（符号的数目以及赌注乘数）被翻开后是呈高亮和闪光的。
                                <br /> ► “ 多机器 ” 屏幕概述了游戏的大致规则。
                                <br /> ► “ 免费游戏 ” 屏幕解释了触发免费游戏功能的符号组合，并描述了其规则。
                                <br /> ► “ 赔付线 ” 屏幕描述了赔付线，并解释了计算赔付线奖金的方法。
                                <br />
                                <br /> - 点击 “ 返回 ” 退出信息屏幕，返回游戏。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>赌付线</h1>
                            &nbsp;
                            <p>- 赔付线由转轴上面的线代表。所有20条赔付线都在 “ 赔付线 ” 页面有详细介绍。
                                <br />
                                <br /> - 所有20条赔付线都处于活跃状态，都可注册赢奖。
                                <br />
                                <br /> - 赔付线赌注和总赌注有所不同。赔付线赌注是指在单条赔付在线投放的赌注。总赌注显示所有将投放在游戏局中的赌注。赔率表中显示的赔率将乘以赔付线赌注。
                                <br />
                                <br /> - 这些规则不适用于彩派符号。有关彩派符号的更多信息，请见下文。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>关于赔率</h1>
                            &nbsp;
                            <p>- 赔付列于 “ 赔付 ” 屏幕上的赔付表中。可能赢得的奖金金额计算方法：该赔付线赌注乘以赔率。
                                <br />
                                <br /> - 如果两个赢奖组合出现在同一条赔付在线时，玩家将按奖金较高的组合获得赔彩。如果多条启动的赔付在线均出现赢奖组合，奖金将会累计。
                                <br />
                                <br /> - 赢奖组合必须从最左边转轴开始，并且这些符号必须是连续的。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                            <h2>25+条线</h2>
                            &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 选择线注的方法是：点击 “ 线注 ” 下面的＋ 和－来增加或减少线注数额。
                                <br />
                                <br /> - 点击 “ 赔付线 ” 下面的+和–按钮启动赔付线并连续显示它们的形状。通过使用在转轴两侧的数字按钮也可以启动赔付线。每当选择较高的赔付线时，也就同时选择了所有较低的赔付线。例如：如果选择赔付线6，同时也就启动了赔付线1至5。单击
                                “ 全押 ” 以的每条赔付线赌注启动所有赔付线，并旋转转轴。
                                <br />
                                <br /> - 每游戏局总赌注 = 赔付线赌注 x 启动的赔付线数。
                                <br />
                                <br /> - 单击 “ 旋转 ” 以当前选择的赔付线数和赔付线赌注旋转转轴。在转轴旋转中 “ 旋转 ” 按钮变为 “ 停止 ” 。点击 “ 停止 ” 结束旋转并立刻显示旋转结果。
                                <br />
                                <br /> - 也可使用 “ 自动游戏 ” 功能转动转轴。将鼠标放到自动游戏按钮上面显示选项列表。选择自动旋转的次数，或选择直到奖励功能，使旋转到触发了免费游戏为止。点击一个选项开始自动游戏功能。在自动游戏模式下， “ 自动游戏 ” 按钮变为停止。当转轴转动了玩家选定的次数之后，或在您选择了直到奖励功能，触发了免费游戏之后，或者您点击了
                                “ 停止 ” ， “ 自动游戏 ” 模式结束。
                                <br />
                                <br /> - 点击 “ 快速模式 ” 按钮打开或关闭快速模式，以此打开或关闭一些赢奖动画从而使转轴较快或较慢旋转。
                                <br />
                                <br /> - 奖金根据赔率表计算。赔付线奖金 = 赔付线赌注 x 赔率表上相应的系数。彩派奖金 = 总赌注 x 赔率表上相应的系数。赔付表可通过 “ 信息 ” 页面。
                                <br />
                                <br /> - 不同赔付在线同时赢得的奖金在以下情况下，在给定赔付在线只赢得最高的赔付线赢奖组合：累加在一起。
                                <br />
                                <br /> - 旋转获胜时， “ 赢到 ” 字段显示累加的奖金。随便单击屏幕任何地方都可停止奖金指示器，立即显示总奖金金额。
                                <br />
                                <br /> - 赔付线奖金和总奖金也显示在转轴或游戏窗口底部的条上</p>
                            <br />
                            <br /> &nbsp;
                            <h1>信息页面</h1>
                            &nbsp;
                            <p>- 单击 “ 信息 ” 可打开描述不同游戏组件的参考屏幕。点击屏幕右下角的 “ 前一页和 “ 下一页按钮可在不同的信息页之前切换。点击屏幕下方的箭头按钮，可在不同的显示屏幕间切换。
                                <br />
                                <br /> ► “ 赔率表 ” 屏幕显示所有赢奖组合。在赢奖旋转后，当赢奖符号组合（符号的数目以及赌注乘数）被翻开后是呈高亮和闪光的。
                                <br /> ► “ 免费游戏 ” 屏幕解释了免费游戏的触发条件及其规则。
                                <br /> ► “ 加倍 ” 屏幕介绍如何通过下赌注使奖金翻倍和翻倍规则。
                                <br /> ► “ 赔付线 ” 屏幕描述了所有可能的赔付线组合，并解释了游戏中的赔付规则。
                                <br />
                                <br /> - 点击 “ 返回 ” ，退出 “ 信息 ” 屏幕，并回到游戏。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>赌付线</h1>
                            &nbsp;
                            <p>- 启动的赔付线用显示在转轴上方的线来表示。点击 “ 赔付线 ” 下面的+和–按钮启动赔付线并连续显示它们的形状。
                                <br />
                                <br /> - 只有启动的赔付线才能登记奖金。
                                <br />
                                <br /> - 赔付线赌注和总赌注有所不同。赔付线赌注是指在单条赔付在线投放的赌注。总赌注显示所有将投放在游戏局中的赌注。赔率表中显示的赔率将乘以赔付线赌注。
                                <br />
                                <br /> - 这些规则不适用于彩派符号。有关彩派符号的更多信息，请见下文。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>关于赔率</h1>
                            &nbsp;
                            <p>- 赔率列在 “ 赔率表 ” 屏幕上。可能赢得的奖金金额计算方法：该赔付线赌注乘以赔率。
                                <br />
                                <br /> - 如果两个赢奖组合出现在同一条赔付在线时，玩家将按奖金较高的组合获得赔彩。如果多条启动的赔付在线均出现赢奖组合，奖金将会累计。
                                <br />
                                <br /> - 赢奖组合必须从最左边转轴开始，并且这些符号必须是连续的。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                            <h2>多旋转</h2>
                            &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 点击屏幕右边的 “＋” 和 “－” 按钮来选择每局您想投注的币值。
                                <br />
                                <br /> - 点击押一或全押来选中您想下注的币码数。每点击一次 “ 押一 ” 按钮就会增加一个币码的投注。按下 “ 最大投注 ” 按钮将使您全部下注－即所有五枚币码（或如果不够的话，有多少算多少），然后卷轴自动开始旋转。记住您的总投注为一行上投注额的三倍。您可以在游戏机卷轴左侧看到您的余额、下注额和奖金额。
                                <br />
                                <br /> - 点击 “ 转动 ” （如果您没有按下 “ 全押 ” 按钮）来转动卷轴。
                                <br />
                                <br /> - 在卷轴停止转动后，您可以点击卷轴下面的 “ 停转 ” 按钮或卷轴本身来停止转动卷轴。再点击 “ 旋转 ” 以旋转未停转的卷轴。
                                <br />
                                <br /> - 如果在卷轴停止后在任何一行显示有获胜组合，则您就可以根据奖金表赢取您的奖金。如果您愿意的话，可以点击 “ 奖金表 ” 按钮来查看表中的内容。按 “ 下一页／上一页 ” 按钮进行翻页，按 “ 关闭 ” 按钮退出奖金表。您也可以再次按下奖金表按钮来关闭奖金表。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>关于奖金表</h1>
                            &nbsp;
                            <p>- 赌桌上显示了可获胜的每种符号组合的奖金金额。支付表中显示的彩金将乘以支付线赌注。如果您在一条在线有多个奖励组合（很少出现，但有可能），则只会计算最大的奖金。如果您在多条在线都有奖励组合，则它们将被累加。
                                <br />
                                <br /> - 带有 “ 百搭 ” 两字的红色钻石是一个百搭图案，象纸牌游戏里的大小王一样可以代替任何其他图案。
                                <br />
                                <br /> - 请注意：赔付线赌注和总赌注有所不同。赔付线赌注显示您在单个赔付在线下了多少赌注。
                                <br />
                                <br /> - 总赌注显示您在这局游戏中总共下了多少赌注。赔率表中显示的赔率将乘以赔付线赌注，而不是总赌注。如果您在多条赔付在线获得赢奖组合，每条赔付在线的奖金将会累加。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>奖金游戏</h1>
                            &nbsp;
                            <p>- 地妖之穴有奖金游戏。只有在一在线获得三个灯笼以上才能进入奖金游戏。如果您在两在线同时分别获得三个灯笼，那么您就可以连玩两局奖金游戏。同时发生在三在线，那么就连续玩三局奖金游戏。在奖金游戏中，您可以选择六个藏宝箱中的一个，那里有给您的奖品。</p>
                        </div>
                    
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


GameRuleOne.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleOne))));