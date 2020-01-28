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

export class Game21dian extends React.Component {
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">21点</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">国际轮盘</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                            <h2>21点</h2>
                            <p>游戏目的是取得越接近21点且不超过21点的点数，最终比庄家点数高即可获胜。黑杰克〔Blackjack〕为一张A和任一张点数为10的牌组合而成，点数总和一样是21点，但黑杰克〔Blackjack〕比一般点数总和为21点的牌还要大。
                                <br />
                                <br /> ‘无限21点’为无限制人数的21点游戏，游戏中会员可同时押注于同一位置。如果2位会员在同一位置下注，其中的一位会员选择【停牌】，而另一位会员选择继续【要牌】。这种情况下，荷官将会继续发牌，而选择【停牌】的会员将不会再加上荷官后面发牌的点数。
                            </p>
                            <h1>【游戏玩法】</h1>
                            <p>• 一开始将发给闲家各两张明牌，庄家一张明牌一张暗牌。
                                <br /> • 庄家将依序询问闲家是否要牌，闲家可根据手上牌点数和庄家已翻开的明牌，决定是否要补牌。
                                <br /> • 庄家牌面总点数16点以下时需要牌；牌面总点数17点以上时则不能要牌。
                                <br /> • 黑杰克(Blackjack)比总点数是21点的牌型大。
                                <br /> • 如果闲家手上的牌比庄家的更接近21点且不超过21点的点数，将赢得该局游戏。
                                <br /> • 如果闲家得到黑杰克〔Blackjack〕，不须与庄家比拚直接赢得1.5倍下注分数，除非庄家也是黑杰克〔Blackjack〕，那么结果为和局，下注分数将全部退还。</p>
                            <h1>【游戏规则】</h1>
                            <p>游戏使用5副标准52张牌，由真人荷官进行发牌。游戏者的目标是使手中的牌的点数之和不超过21点且尽量大，或者是荷官手中的牌爆掉。
                                <br />
                                <br /> 玩家需将赌注置于其桌面上。然后，庄家给每个玩家各发两张牌，牌面朝上；给自己发两张牌，一张牌面朝上，一张牌面朝下。如果玩家拿到的前两张牌是一张A和一张10点牌，就拥有黑杰克。黑杰克是最大牌型，除非庄家同样拥有黑杰克。若没有拿到黑杰克，玩家可以继续拿牌，以使总点数尽可能接近但不超过21点。玩家牌点在21点以下，可自由选择拿牌或停牌。如果超过21点，玩家就会“爆牌”并输掉赌金。如果庄家的总点数等于或少于16点，则必须拿牌；如果庄家的总点数等于或多于17点，则必须停牌。
                            </p>
                            <h1>【计算方式】</h1>
                            <p>- K、Q、J和10字样的牌都算作10点。
                                <br /> - A牌既可算作1点也可算作11点，由玩家自己决定。</p>
                            <h1>【赔率】</h1>
                            <p>- 21点：3赔2
                                <br /> - 标准赢盘：1赔1
                                <br /> - 保险赢盘：2赔1</p>
                            <h1>【下注】</h1>
                            <p>如果荷官手中的牌超过21点，玩家拥有21点或更少的牌面，庄家就会“爆牌”并输掉赌金。如果玩家拿到的前两张牌是一张A和一张10点牌，就拥有二十一点。此时，如果庄家没有二十一点，玩家就能赢得牌局；如果庄家有黑杰克，双方打平。玩家下注的金额会被自动退回。</p>
                            <h1>【分牌】</h1>
                            <p>玩家再下一注与原赌注相等的赌金，并将前两张牌分为两副单独的牌。这两张牌的点数必须相同。但分牌后的黑杰克，只能作普通21点计算，其赔率只是1赔1。</p>
                            <h1>【加倍】</h1>
                            <p>玩家在拿到前两张牌之后，如果两张牌总计牌值为9，10或11时，可以选择“加倍”，获得与原赌注加倍的注金。“加倍”后只能再要一张牌。如果拿到二十一点，再拿一张牌时就会自动爆牌，因此不许加倍下注。每一局游戏只能加倍一次。</p>
                            <h1>【保险】</h1>
                            <p>在该游戏中，如果玩家认为庄家可以拿到二十一点，玩家则可以购买保险。也就是相当于原赌注一半的额外赌金。如果庄家确实有二十一点，玩家将赢得2倍的保险赌金；如果庄家没有二十一点，玩家将输掉保险赌金，游戏照常继续。二十一点要大于其它总点数为21点的牌。</p>
                            <p>- 下注选择项目
                                <br /> 押注：每局发牌前的投注项目，闲家押注后才能参与牌局。
                                <br />
                                <br /> - 游戏选择项目
                                <br /> 要牌：选择多要一张牌。
                                <br /> 停牌：选择不再拿牌，以当时的手牌点数与庄家对抗。
                                <br /> 保险：庄家明牌是A时，闲家可用初始注金的一半投注保险，庄家是BJ时，保险注金一赔二。
                                <br /> ※ 如庄家不是黑杰克〔Blackjack〕则失去保险金。
                                <br /> 加倍：闲家初始两张牌面值相同可进行分牌，两张牌将分开为两手牌，分牌的投注金与原下注金额相同。
                                <br /> ※ 分牌后不可再分牌。如闲家分牌后任何一手牌获得10点+A牌组合的手牌，并不以黑杰克〔Blackjack〕计算，只按普 通21点1:1赔付。
                                <br /> ※ A分牌后仅能要一张牌，分牌后不可再分牌。
                                <br />
                                <br /> - 牌面点数
                                <br /> 点数大小：
                                <br />
                                <img src="http://i.imgur.com/Kwo93CF.png" alt=""/>
                                <br /> ※ A（软牌）只有在该局持牌点数和大于21点的情况下方可视为1点。
                                <br />
                                <br /> - 牌型大小
                                <br /> 牌值大小：黑杰克〔Blackjack〕＞　21点　＞　任何点数　＞　爆牌
                                <br /> 黑杰克〔Blackjack〕：简称BJ，首两张牌的组合为一张A牌及一张10点的牌所组成的21点，初始注金按1赔1.5派彩。
                                <br /> 21点：多于两张牌所组成的21点。
                                <br /> 爆牌：手上所有牌点数加起来超过21点称为爆牌。闲家输掉所有初始及加倍的金额。
                                <br /> 和局：闲家与庄家同时获得BJ或闲家与庄家同时非BJ但点数相同时，该局视为和局，初始注金及加倍注金退回。
                                <br />
                                <br /> - 派彩
                                <br /> 不同平台的同一游戏玩法，赔率可能不一样，具体以各游戏厅界面所展示的赔率为准。以下赔率以波音厅为例：
                                <br />
                                <img src="http://i.imgur.com/Ela2eb8.png" alt=""/>
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2>疯狂21点</h2>
                            <h1>【游戏规则】</h1>
                            <p>疯狂21点与传统的21点玩法相似，玩家想要赢得牌局，手上的牌点数必须比庄家的牌点数大，尽量接近21点但不可超过21点。游戏不需理会其他玩家的牌点数，玩家只与庄家的牌点数作对抗，所有玩家的牌均是牌面向上的。</p>
                            <h1>【纸牌点数】</h1>
                            <p>- 2至10点按牌面值计算。
                                <br /> - J，Q，K按10点计算。
                                <br /> - A作1或11点计算，若加上11点后成为爆牌，则按1点计算。</p>
                                <h1>【词汇解释】</h1>
                            <p>♦ Blackjack：简称BJ，一张A牌及一张10点的牌所组成的21点，初始注金按1赔1.5派彩。
                                <br /> ♦ 21点：多于两张牌所组成的21点。
                                <br /> ♦ 爆牌：手上所有牌点数加起来超过21点称为爆牌。玩家会即时输掉所有初始及加注的金额。
                                <br /> ♦ 7龙：玩家一局手上有7张但非爆牌的牌局，如庄家非BJ不论玩家手上的牌点数是否大於庄家，初始注金按1赔1派彩。
                                <br /> ♦ 和局：玩家与庄家同时获得BJ或玩家与庄家同时非BJ但点数相同时，该局视为和局，初始注金及加注金退回。
                                <br /> ♦ 硬牌：该手牌没有A牌，或A牌只能按1点计算。
                                <br /> ♦ 软牌：该手牌A牌可按1点或11点计算。</p>
                            <h1>【玩家选择项目】</h1>
                            <p>初始下注：每局发牌前的投注项目，玩家必须对该牌局，根据玩家的喜好及赌桌可接受的投注上下限内，作出相应的投注金额。
                                <br />
                                <br /> ♦ 对子：每局发牌前的投注项目，玩家首两张牌是对子可按1赔11派彩，10，J，Q及K视为不同牌。
                                <br /> ♦ 要牌：玩家选择要下一张牌。
                                <br /> ♦ 不要牌：玩家选择不再要牌，以当时的手牌点数与庄家对抗。
                                <br /> ♦ 保险：庄家首张牌面是A时，用初始注金的一半投注保险，庄家是BJ时，保险注金一赔二。
                                <br /> ♦ 投降：投降该手牌输一半初始注金，另一半退回玩家。
                                <br /> ♦ 加注：发了首两张牌后可以把初始注金增加一倍作投注，但只能要一张牌，所有注金一赔一。
                                <br /> ♦1赔1：如玩家该局牌是BJ而庄家的牌面是A的话，可以选择注金即时以1倍派彩，即放弃手牌BJ获得1.5倍派彩的权利。
                            </p>
                            <h1>【庄家要牌规则】</h1>
                            <p>任何情况下庄家不可自行选择是否要牌，只能根据21点牌例而强制性是否要牌，疯狂21点采用庄家牌点数等於或小於16点必须要牌，牌点数等於或大於17点（包括软17点或硬17点）均不得博牌。</p>
                            <h1>【公牌使用】</h1>
                            <p>玩家是独立与庄家的手牌对抗，当荷官派了第一轮牌后，即庄家一张牌，五位玩家各两张牌后，之后所派的全是公牌，公牌的使用规则是当玩家选择不要牌后，公牌会按序派给庄家，庄家按牌例要牌或不要牌直至每位玩家最后分出该局结果为止。</p>
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


Game21dian.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Game21dian))));