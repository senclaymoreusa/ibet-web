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

export class LotteryRuleTwo extends React.Component {
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
                                <a href="/zh/for_member">彩票规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">快乐彩介绍</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">快乐彩规则</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    {/* <!-- please only edit HelperCenterDetail's contain --> */}
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                            <h2>快乐彩</h2>
                            &nbsp;
                            <p>是依照北京、韩国、加拿大、澳洲、斯洛伐克、马耳他等国家或地区KENO的官方开奖结果所规划的游戏。由1至80的号码中随机摇出20个数字作为开奖号码，依这20个号码变化成各式不同的玩法，在根据猜中的号码个数或玩法可以获得不同等级的奖金。此游戏的开奖时间和相对应地区的KENO完全同步。
                                <br />
                                <br /> 据记载，基诺（Keno）游戏起源于2000多年前的中国，并由中国移民于19世纪晚期带入美国。在旧金山等城市基诺（Keno）被称为“中国彩票”（Chinese Lottery）。但因为当时基诺仍使用中国汉字当作下注号码，它没能很快融入美国的主流文化。直到19世纪汉字被相应的数字代替时，基诺（Keno）的历史才有了进一步的发展。
                                <br />
                                <br /> 现在世界上很多国家和地区发行的KENO游戏，已经成为一种流行的大众数字游戏，普通的官方玩法通常从01-80个数字中任选1-10个数字组成一注，开奖时，随机摇出20个数字作为开奖号码，根据选中号码的个数获得不同等级的奖金，通常选中数字越多，奖金越高。
                                <br />
                                <br /> LETOU的快乐彩（KENO）游戏是以北京、韩国、加拿大、澳洲、斯洛伐克、马耳他等各地区官方开奖号码为依据，对号码进行分类和组合，共有“大小”、“单双”、“奇偶”、“上下”、“五行”、“珠仔”和“大小单双过关”等七项，相对官方的单一玩法，LETOU的KENO游戏玩法更丰富，更高返奖更高赔率，中奖率更高，为LETOU用户提供更加刺激的体验。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2>快乐彩玩法與交易規則</h2>
                            &nbsp;
                            <h1>1.大小</h1>
                            <p>开出的20个号码的总数值为游戏结果。当20个号码总和为810时，810以上为大，810以下为小。</p>
                            &nbsp;
                            <h1>2.单双</h1>
                            <p>开出的20个号码的总数值为游戏结果。总数值为奇数，为单；总数值为偶数，为双。</p>
                            &nbsp;
                            <h1>3.奇偶</h1>
                            <p>在开出20个中奖号码当中，如奇数号码数目比偶数的数目多时，则为奇局，投注"奇"者中奖；如偶数号码数目比奇数的数目多时，则为偶局，投注"偶"者中奖；如奇数和偶数数目相同时（均为10个），则为和，投注"和"者中奖。</p>
                            &nbsp;
                            <h1>4.上中下</h1>
                            <p>号码1至40为上盘号码，41至80为下盘号码。开出的20个开奖号码中，如上盘号码占多数时，此局为上盘局；下盘号码占多数时为下盘局；上盘号码和下盘号码在此局开出的数目相同时（各10个数字），此局为和盘。</p>
                            &nbsp;
                            <h1>5.五行</h1>
                            <p>即总和数值范围。开出20个号码的总和分在五个数段中，五个数段以金、木、水、火、土命名：金（210~695）、木（696~763）、水（764~855）、火（856~923）和土（924~1410）。</p>
                            &nbsp;
                            <h1>6.珠仔</h1>
                            <p>即選號玩法。珠仔玩法是在80個號碼中選出1至5個號碼組合成一組進行的投注。玩家將選投注號碼與中獎號碼對照，不需按照順序，根據所選號碼與中獎號碼相符的個數多少，來確定相應的中獎級別。分為正賭、反賭、全中三種下法，並且其中只有”正賭”玩法，有提供單一投注多重中獎機會。</p>
                            &nbsp;
                            <h1>7.大小单双过关</h1>
                            <p>开出20个号码的总和数值为游戏结果，分为"大单"、"小单"、"大双"、"小双"。总和数值大于810为"大"，总和数值小于810为"小"；总和数值为奇数为"单"，总和数值为偶数为"双"。通过大小和单双组合产生"大单"、"小单"、"大双"、"小双"四种结果。</p>
                            &nbsp;
                            <h1>8.混合过关</h1>
                            <p>玩家可选择任何地区的投注选项进行过关投注，混和过关的赔率固定为相乘。
                                <br />
                                <br /> 不可混合过关之投注项目：
                                <br /> *不分开奖来源，大小指数皆不可串关。
                                <br /> *不同开奖来源，除大小指数其余皆可进行串关。
                                <br /> *同一开奖来源，「珠仔」不可和其余玩法选项串关。
                                <br /> *同一开奖来源，「大小」不可和「上下」、「大小单双」、「五行」串关。
                                <br /> *同一开奖来源，「单双」不可和「大小单双」串关。
                                <br /> *珠仔反赌来源，「上下」不可和「大小单双」、「五行」串关。
                                <br /> *同一开奖来源，「大小单双」不可和「五行」串关。
                                <br /> *同一开奖来源，「奇偶」不可与「大小单双」、「单双」串关。
                            </p>
                            &nbsp;
                            <h1>9.追号</h1>
                            <p>将一注或一组号码进行两期或两期以上的投注。最多可进行连续10期。
                                <br />
                                <br /> 追号终止条件：
                                <br /> *当达到玩家指定的追号期数，或设定的终止条件时。
                                <br /> *当帐户余额不足于购买的投注项目时。
                                <br /> *当下一期追号注单，预期返还金额超过当期最大获利金额时。
                                <br /> *当购买的注单未进行开奖时。
                                <br /> *玩家手动停止追号时。
                                <br />
                                <br /> 追号起始时间点：
                                <br /> 追号从当前需要追号的订单开始，作为第一期追号，直到符合玩家设定的终止条件时停止追号。
                            </p>
                            &nbsp;
                            <h1>10.倍投</h1>
                            <p>将目前的投注金额，以倍率的方式进行投注，由1.0为起始，最高为3倍。</p>
                            &nbsp;
                            <p>
                                <strong>以上方法仅供参考，可根据自身的特点及喜好来选择投注，也许能在实战中总结出自己特有的投注方法。</strong>
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


LotteryRuleTwo.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleTwo))));