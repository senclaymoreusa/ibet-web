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

export class Baijiale extends React.Component {
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

    onClick(index) {
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
                    <div className="HelpCenterList">
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>免佣百家乐</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>传统百家乐</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a>超级百家乐</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a>对子百家乐</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a>14座甩牌百家乐</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)}>
                                <a>经典百家乐</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)}>
                                <a>包桌百家乐</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} onClick={this.onClick.bind(this,8)}>
                                <a>竞咪百家乐</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} onClick={this.onClick.bind(this,9)}>
                                <a>连环百家乐</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} onClick={this.onClick.bind(this,10)}>
                                <a>龙宝百家乐</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} onClick={this.onClick.bind(this,11)}>
                                <a>Playboy百家乐</a>
                            </li>
                            <li className={this.state.current === 12 ? "Active" : ""} onClick={this.onClick.bind(this,12)}>
                                <a>免佣点数百家乐</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                            <h2>免佣百家乐</h2>
                            <p>免佣百家乐是由传统百家乐演变而来，兩者的玩法非常相似，不同的是免佣百家乐增加了一项超6的特别投注，庄家的赔率也有别于传统百家乐。
                                <br />
                                <br /> - 免佣百家乐游戏平台：AG旗舰厅、AG国际厅、EA厅、OPUS厅、MG厅
                                <br />
                                <br /> - 游戏规则
                                <br /> 免佣百家乐玩法的博牌规则和投注种类与经典百家乐基本一致，但投注庄的派彩方式有区别。其投注种类与派彩如下：
                                <br />
                                <img src="http://i.imgur.com/TZHuRBw.png" />
                                <br />
                                <br /> - 派彩赔率
                                <br /> ♦ 选择押庄赢1赔1免抽水（如庄6点赢，1赔0.5。）
                                <br /> ♦ 选择押闲赢1赔1免抽水
                                <br /> ♦ 选择押和局1赔8免抽水时
                                <br /> ♦ 选择押超6（即庄6点赢）1赔12免抽水
                                <br />
                                <br /> - 大小、庄／闲对子
                                <br /> 大小：指根据当局所开之牌张数的总和为依据，4张牌为小，5张牌或6张牌为大。游戏中，若庄家及闲家各只发两张牌，合共4张牌，即押注「小」者为胜。相反，若庄、闲任一方有博牌，令总牌数为5或6张，即押注「大」者为胜。
                                <br /> 庄／闲对子：指根据当局所开之牌的庄／闲前两张牌的牌面（数字或字母，不计花式。）为依据，牌面相同为对子。游戏中，庄家前两张牌的牌面相同，为庄对子，即押注「庄对」者为胜。闲家前两张牌牌面相同，为闲对子，即押注「闲对」者为胜。
                                <br />
                                <br /> 温馨提示：以上资料来源于AG国际，各玩法赔率设置以具体的游戏厅公示为准。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}> 
                            <h2>传统百家乐</h2>
                            <p>游戏采用8副牌来进行，游戏牌数合计416张，9点或以下的牌按面值点数，A牌是1点，10点及公仔牌则是0点计算。
                                <br />
                                <br /> 闲丶庄家各先派两张牌，以闲家先发，如第一轮末分出胜负需再按牌例发第二轮的牌，最多每方３张牌，谁最接近9点即为胜方，而相同点数即和局。
                                <br />
                                <br /> - 百家乐博牌规例
                                <br />
                                <img src="http://i.imgur.com/HOhyidy.png" />
                                <br />
                                <br /> 庄家0-5点的时候，闲家没有第三张牌（6、7点），庄家需要补牌，若6点的话，就为和局。
                                <br /> 庄闲任何一方两牌合计8丶9点为例牌，对方不须博牌，即定胜负。
                                <br /> 庄闲两方各得6丶7点，即和局。
                                <br />
                                <br /> ♦ 选择押庄赢1赔0.95抽水5%
                                <br /> ♦ 选择押闲赢1赔1免抽水
                                <br /> ♦ 选择押和局1赔8免抽水</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 3}>
                            <h2>超级百家乐</h2>
                            <p>超级百家乐投注方式与传统百家乐无异，对子投注的结算方式亦与对子百家乐一样。不同的是超级百家乐增加了六项特别投注：
                                <br />
                                <img src="http://i.imgur.com/GWynoVc.png" />
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 4}>
                            <h2>对子百家乐</h2>
                            <p>对子百家乐投注方式与传统百家乐无异，然而其投注种类则加有「庄对子」「闲对子」「庄对子」「闲对子」是指首先两张牌组成一对，即派彩。不包括第三张牌。百家乐博牌规例：
                                <br />
                                <br /> ♦ 选择押庄对子1赔11免抽水
                                <br /> ♦ 选择押闲对子1赔11免抽水</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 5}>
                            <h2>14座甩牌百家乐</h2>
                            <p>“14座甩牌百家乐”与“对子百家乐”的玩法和规则相同，但增加了令玩家更加紧张刺激的甩牌元素，令玩家仿似置身于真实赌场内，享受博彩所带来的欢乐。
                                <br />
                                <br /> - 游戏特色
                                <br /> ♦ 玩家咪牌功能，现场感媲美真实赌场。
                                <br /> ♦ 独有14座功能，每张虚拟枱可容纳14名玩家在线投注，互动感直迫真实赌场。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 6}>
                            <h2>经典百家乐</h2>
                            <p>在每一局开始前，荷官会将百家乐最大发牌数也就是6张，放置在桌枱上，然后再接受玩家投注，投注完毕后，将之前发的6张牌，按照百家乐补牌规则，进行发牌。
                                <br />
                                <br /> - 简介
                                <br /> 长期以来，百家乐是亚洲、欧洲和拉丁美洲最受欢迎的游戏之一，玩法简单，却刺激紧张！
                                <br />
                                <br /> - 如何胜出
                                <br /> 百家乐中将发两份牌&lt; &lt;庄家&gt; &gt;和&lt; &lt;闲家&gt; &gt;，总数得9点或最接近9点的一家胜出。
                                <br />
                                <br /> - 操作及下注指南
                                <br /> 1、点击下注的筹码，再点击桌上下注任何一块〔闲家、庄家或平局〕。
                                <br /> 2、闲家和庄家将获发两张牌，加起来等於10作0点，总和超过9，则只算总数中的个位。
                                <br /> 3、任何一家拿到9点（天生赢家），牌局就算结束，不再补牌。
                                <br /> 4.、派出两张牌後，如果任何一手牌的头两张牌的牌面为0至7，将依照补牌规则多发一张牌，不可以任选补牌。
                                <br /> 5、没有任何一手牌获得超过三张牌。
                                <br />
                                <br /> - 游戏玩法
                                <br /> 本游戏采用8副牌（每副牌52张）来进行，游戏牌数合计416张。“闲家”“庄家”各先派两张牌，以“闲家”先发，如第一轮未分出胜负需再按“牌例”发第二轮的牌，最多每方3张牌，谁最接近9点即为胜方，而相同点数即和局。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 7}>
                            <h2>包桌百家乐</h2>
                            <p>包桌百家乐集结"网络"与"陆地"赌场的双重优势，特有的“独占桌台／独享游戏／高额下注／任意飞牌／咪牌／更换荷官／更换牌靴”，能非常自主的掌控整个游戏进程，更多独有权限，为您的桌枱设置密码，邀约好友同台落座。
                                <br />
                                <br /> - 游戏玩法
                                <br /> 游戏玩法、赔率、补牌规则遵循经典百家乐玩法。
                                <br />
                                <br /> - 桌主的特别权限
                                <br /> 1、咪牌：在庄／闲下注之后，可以咪庄或者闲家牌；
                                <br /> 2、飞牌：未下注的情况下直接开牌；
                                <br /> 3、设定包桌：包桌玩家可以设置“是否咪牌”，“是否竖向咪牌”，以及“是否设置密码”；
                                <br /> 4、更换荷官：更换当前荷官；
                                <br /> 5、更换牌靴：若该靴满30局，玩家可以选择换靴。
                                <br />
                                <br /> - 下注模式
                                <br /> 1、包桌（VIP）百家乐有旁观下注，进桌下注，进入包桌三种方式；
                                <br /> 2、当桌台没玩家，人数为0时，玩家只能选择进入包桌成为桌主；
                                <br /> 3、当桌台人数已满（7人）时，玩家只能选择旁观下注；
                                <br /> 4、当桌台还有座位时，玩家可以选择进桌下注或者旁观下注；
                                <br /> 5、若包桌桌主退出游戏厅其他玩家也会自动退出。
                                <br />
                                <br /> - 下注限红
                                <br /> 1、“进入包桌”／“进桌下注”：下注限红是游戏桌台定义的限红，不受个人限红的限制。
                                <br /> 2、“旁观下注”：下注限红是玩家的个人限红与对应不同玩法限红的交集。
                                <br />
                                <br /> 温馨提示：以上资料来源于AG国际，各玩法赔率设置以具体的游戏厅公示为准。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 8}>
                            <h2>竞咪百家乐</h2>
                            <p>首创竞咪互动百家乐新玩法，投注额最高者享咪牌权利；“等我”功能让您掌控牌局节奏；配合玩家与中或英文荷官即时互动，边聊天边下注，创造实地赌场无可比拟的升级体验。
                                <br />
                                <br /> - 下注模式
                                <br /> 游戏玩法、赔率、补牌规则遵循经典百家乐玩法。
                                <br />
                                <br /> - 桌主的特别权限
                                <br /> 1、竞咪（LED）百家乐有“旁观下注”和“进桌下注”两种方式；
                                <br /> 2、当桌台为空（人数为0）时，玩家只能选择进桌下注，进桌下注有最低VIP 额度, 低于此额度的只能选择旁观下注；
                                <br /> 3、当桌台人数已满（7人）时，玩家只能选择旁观下注，旁观下注玩家所在桌台，如果其他进桌玩家都离开了。若此局旁观下注的玩家有下注，那么此局结算完之后旁观玩家会被踢出桌台；若此局旁观玩家没有下注，会立刻被踢出桌台；
                                <br /> 4、其他情况玩家可以自由选择旁观下注或者进桌下注。
                                <br />
                                <br /> - 下注限红
                                <br /> 1、进桌下注：下注限红是游戏桌台定义的限红，不受个人限红的限制；
                                <br /> 2、旁观下注：下注限红是玩家的个人限红与对应不同玩法限红的交集。
                                <br />
                                <br /> - 咪牌（竞咪）
                                <br /> 1、只有“进桌下注”的玩家才有咪牌资格；
                                <br /> 2、不同玩家下注庄／闲，下注金额多的玩家获得对应庄／闲的咪牌资格；
                                <br /> 3、不同玩家下注庄／闲相同的金额，先下注成功的玩家拥有咪庄／闲家牌的资格；
                                <br /> 4、同一玩家，如果一局中下注庄和闲的金额一样，那么默认该玩家咪闲家牌；（前提：其他玩家没有下注庄／闲，或者下注金额没有高于这一玩家）
                                <br />
                                <br /> - 其他功能
                                <br /> 等我：在下注倒数计时内，玩家可以点击“等我”按键，请求荷官延长下注时间；
                                <br /> 开牌：
                                <br /> 1、只有进座下注的玩家才有开牌的权限；
                                <br /> 2、当玩家点击“开牌”申请荷官开牌时，荷官会根据桌面上玩家投注情况决定是否直接开牌或提示其他玩家继续下注。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 9}>
                            <h2>连环百家乐</h2>
                            <p>玩家入座“连环百家乐”或“多台百家乐”（不同平台叫法不一）可根据自己的喜好，随时组合各不同游戏种类，例如百家乐+骰宝+轮盘，让您同时畅游多款游戏，赢利翻倍；不同平台组合的要求和枱桌数不一样，具体以各平台为公示为准。
                                <br />
                                <br /> - 连环百家乐游戏平台：AG旗舰厅、AG国际厅、OPUS厅
                                <br />
                                <br /> - 简介
                                <br /> 长期以来，百家乐是亚洲、欧洲和拉丁美洲最受欢迎的游戏之一，玩法简单，却刺激紧张！
                                <br />
                                <br /> - 如何胜出
                                <br /> 百家乐中将发两份牌&lt; &lt;庄家&gt; &gt;和&lt; &lt;闲家&gt; &gt;，总数得9点或最接近9点的一家胜出。
                                <br />
                                <br /> - 操作及下注指南
                                <br /> 1、点击下注的筹码，再点击桌上下注任何一块（闲家、庄家或平局）。
                                <br /> 2、闲家和庄家将获发两张牌，加起来等於10作0点，总和超过9，则只算总数中的个位。
                                <br /> 3、任何一家拿到9点（天生赢家），牌局就算结束，不再补牌。
                                <br /> 4.、派出两张牌後，如果任何一手牌的头两张牌的牌面为0至7，将依照补牌规则多发一张牌，不可以任选补牌。
                                <br /> 5、没有任何一手牌获得超过三张牌。
                                <br />
                                <br /> - 游戏玩法
                                <br /> 本游戏采用8副牌（每副牌52张）来进行，游戏牌数合计416张。“闲家”“庄家”各先派两张牌，以“闲家”先发，如第一轮未分出胜负需再按“牌例”发第二轮的牌，最多每方3张牌，谁最接近9点即为胜方，而相同点数即和局。
                                <br />
                                <br /> 温馨提示：以上资料来源于AG国际，各玩法赔率设置以具体的游戏厅公示为准。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 10}>
                            <h2>龙宝百家乐</h2>
                            <p>龙宝百家乐是由传统百家乐演变而来，投注方式与传统百家乐无异，对子投注的结算方式亦与对子百家乐一样。不同的是龙宝百家乐增加了额外的「龙宝」特别投注。
                                <br />
                                <br /> - 龙宝百家乐游戏平台：AG旗舰厅、AG国际厅、EA真人厅、MG真人厅
                                <br />
                                <br /> - 游戏规则
                                <br /> 如玩家于庄家龙宝或闲家龙宝下注，派彩会根据不同的”胜出点数差距”而有所不同。
                                <br />
                                <img src="http://i.imgur.com/InlXhsz.png" />
                                <br />
                                <br /> 非例牌：庄或闲首两张牌的点数总和并非8或9点，所有庄或闲需要博第三张牌的情况亦属于非例牌；
                                <br /> 例牌：庄或闲首两张牌的点数总和为8或9点。
                                <br /> 例子：庄家以非例牌赢9点，投注庄龙宝1赔30。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 11}>
                            <h2>Playboy百家乐</h2>
                            <p>投注玩法与游戏规则与普通百家基本一致，在投注风格上独树一帜，特有的花花公子系列深得百家乐爱好者追捧，大胆的界面风格，西式的美女荷官，让您在经典游戏中，体会出不一样的风情。
                                <br />
                                <br /> - Playboy百家乐游戏平台：MG厅
                                <br />
                                <br /> - 玩法介绍
                                <br /> 博牌规则和投注种类与经典百家乐基本一致
                                <br />
                                <br /> - 一般规则
                                <br /> 1、必须在下注时间内放置并确认所有赌注。
                                <br /> 2、如果在下注时间内未确认赌注，则在当前游戏中不能对其进行计算。
                                <br /> 3、始终是先派玩家的第一张牌后才派发庄家的第一张牌。
                                <br /> 4、K、Q、J和10点数为零。
                                <br /> 5、如果庄家的手牌和您的手牌点数相同，则为平局。
                                <br /> 6、故障会使所有游戏和支付无效。
                                <br />
                                <br /> - 下注和奖金规则
                                <br /> 1、您可以在平局赌注和庄家赌注或玩家赌注上下双重赌注。每个赌注会被独立处理；
                                <br /> 2、如果您下了平局赌注并且获胜，您将按常规赌注金额以8:1的赔率获得奖金；
                                <br /> 3、如果您仅下了玩家赌注或庄家赌注，并且牌为平手，则您的赌注会归还给您；
                                <br /> 4、庄家赌注奖金会扣除5%佣金；
                                <br /> 5、仅赢赏赌注会扣除5%佣金；
                                <br /> 6、常规赢赏被添加到红利赢赏。
                                <br />
                                <br /> 温馨提示：以上资料来源于MG真人厅，各玩法赔率设置以具体的游戏厅公示为准。
                            </p>
                        </div>
                        <div className="centerDetai" hidden={this.state.current != 12}>
                            <h2>免佣点数百家乐</h2>
                            <p>免佣点数百家乐是由免佣百家乐演变而来，不同的是免佣点数百家乐增加了「庄例牌赢」、「闲例牌赢」、「庄总点数0 」～「庄总点数9」以及「闲总点数0」～「闲总点数9」投注项目，庄／闲总点数为独立派彩，不受该牌局胜／负／和的影响。
                                <br />
                                <br /> - 游戏规则
                                <br /> 免佣百家乐是由传统百家乐演变而来，两者的玩法非常相似，不同的是免佣百家乐庄家的赔率有别于传统百家乐。
                                <br />
                                <br /> - 在免佣百家乐中
                                <br /> • 选择押庄赢1赔1免抽水（如庄6点赢，1赔0.5）
                                <br /> • 选择押闲赢1赔1免抽水
                                <br /> • 选择押和局1赔8免抽水
                                <br />
                                <br /> 庄例牌赢：庄首两张牌的点数总和为8或9点并胜出该牌局。
                                <br /> 闲例牌赢：闲首两张牌的点数总和为8或9点并胜出该牌局。
                                <br />
                                <br /> 庄／闲总点数投注：指庄或闲在该牌局中获得的点数总和，根据相对应的赔率派彩，并不计算庄／闲在该牌局中的胜负。
                                <br />
                                <br /> - 对战百分比区域
                                <br /> 该区域的显示是依据所有身处同一伺服器之玩家在「庄」、「闲」投注位所投注的总金额比例来显示。
                                <br /> 对战百分比区域的百分比为即时更新，即当有玩家投注庄、闲投注位并确认投注后，就立即更新百分比比例。
                                <br /> 当开始新的一局，且还没有玩家投注时，对战百分比区域的庄、闲百分比率分别为50%。
                                <br />
                                <img src="http://i.imgur.com/D9Xkcnd.png" />
                            </p>
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


Baijiale.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Baijiale))));