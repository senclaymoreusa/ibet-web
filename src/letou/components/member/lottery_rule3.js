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

export class LotteryRuleThree extends React.Component {
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
                    <InfoSelect/>
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
                                <a href="/for_member">彩票规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>时时彩介绍</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>时时彩规则</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
              
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                            <h2>时时彩</h2>
                            &nbsp;
                            <p>时时彩是从3个或5个位数中，随机摇出一组号码作为开奖结果的彩票游戏。
                                <br />
                                <br /> 每个位数是从0~9的10个号码随机摇出1个号码，3个位数以百、十、个作为结果，5个位数以万、千、百、十、个作为结果，再根据这组随机号码设置丰富的玩法，并且每个玩法提供不同的赔率与奖金设置。
                                <br />
                                <br /> 此游戏的开奖来源包含北京（福彩3D），上海，重庆，江西，天津，新疆，及欧洲自然机率开奖系统的超高频盘口（注），提供您多样丰富的选择。
                                <br />
                                <br /> - 快速开奖盘口：我们从欧洲博彩公司，引进了先进的自然机率开奖系统，分别为"1分钟"与"1分30秒"开奖一次，此开奖系统经过菲律宾博彩执照公司的审核监控，保证公平公正，提供您更丰富有趣的投注选择
                                <br /> - 长龙提示：任何一种玩法中，开奖连续超过4次以上相同时，以”旗帜”标示
                                <br /> - 取消注单：当开奖来源未公布某期开奖结果时，如在1小时之后仍未更新，我们会斟酌进行取消该期投注单</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                            <h2>时时彩玩法與交易規則</h2>
                            &nbsp;
                            <h1>1.大小</h1>
                            &nbsp;
                            <p>在五个（万、千、百、十、个）或三个位数（百、十、个）上，进行"大（5，6，7，8，9）”、”小（0，1，2，3，4）"投注。投注的号码位置与开奖号码相同时即中奖。
                                <br />
                                <br /> ► 例如：投注百位数”小”，当期开奖号码为36258，百位数2为”小”，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>2.单双</h1>
                            &nbsp;
                            <p>在五个（万、千、百、十、个）或三个位数（百、十、个）上，进行"单（1，3，5，7，9）、双（0，2，4，6，8）"投注。投注的号码位置与开奖号码相同时即中奖。
                                <br />
                                <br /> ► 例如：投注百位数”双”，当期开奖号码为36258，百位数2为”双”，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>3.大小单双串关</h1>
                            &nbsp;
                            <p>在大小与单双玩法中，同时对两个以上位数选择投注项目，即可进行串关投注。
                                <br />
                                <br /> ► 例如：百位选择”大”、个位选择”小”，在过关投注项目中，即可选择2x1的串关选项。</p>
                            &nbsp;
                            <h1>4.总和值</h1>
                            &nbsp;
                            <p>此玩法以三个位数的数值总和为结果，在五个位数盘口时可分为前三（万千百）、中三（千百十）、后三（百十个）三组，可自由选择投注位置。投注项目为0~27其中任何1个号码，投注号码符合当期开奖号码的总和值即中奖。
                                <br />
                                <br /> ► 例如：投注后三（百十个）15号，当期开奖号码为36258，后三位数加总为15，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>5.总和大小单双</h1>
                            &nbsp;
                            <p>此玩法以三个位数的数值总和为结果，在五个位数盘口时可分为前三（万千百）、中三（千百十）、后三（百十个）三组，可自由选择投注位置。投注项目为大（14~27）、小（0~13）、单（1、3、5、7、9、11、13、15、17、19、21、23、25、27）、双（0、2、4、6、8、10、12、14、16、18、20、22、24、26）等其中一个项目，投注项目符合当期开奖号码的总和值即中奖。
                                <br />
                                <br /> ► 例如：投注后三（百十个）大，当期开奖号码为36258，后三位数加总为15，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>6.七彩</h1>
                            &nbsp;
                            <p>此玩法以三个位数的数值总和为结果，在五个位数盘口时可分为前三（万千百）、中三（千百十）、后三（百十个）三组，可自由选择投注位置。投注项目为红（0-3）、橙（4-7）、黄（8-11）、绿（12-15）、蓝（16-19）、靛（20-23）、紫（24-27）等其中一个项目，投注项目符合当期开奖号码的总和值即中奖。
                                <br />
                                <br /> ► 例如：投注后三（百十个）绿，当期开奖号码为36258，后三位数加总为15，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>7.珠仔</h1>
                            &nbsp;
                            <p>在五个（万、千、百、十、个）或三个位数（百、十、个）上，进行号码（0~9）投注，投注的号码位置与开奖号码相同时即中奖。
                                <br />
                                <br /> ► 例如：投注千位6号，当期开奖号码为36258，千位数字为6号，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>8.珠仔串关</h1>
                            &nbsp;
                            <p>此玩法以珠仔的位数进行串关，在五个（万、千、百、十、个）或三个位数（百、十、个）上，进行不同位数的号码（0~9）投注，投注两个位数称为二星串关，投注三个位数以上，分别为三星串关、四星串关、最多为五星串关，所投注的串关号码与开奖号码相同时即中奖。
                                <br />
                                <br /> ► 例如：投注万位3号、百位2号、个位8号的珠仔-三星串关，当期开奖号码为36258，结果万位=3号、百位=2号、个位=8号，故本次投注结果为中奖</p>
                            &nbsp;
                            <h1>9.二星组选</h1>
                            &nbsp;
                            <p>在5个位数盘口的前二（万千）、后二（十个）两组，或3个位数盘口的前二（百十）、后二（十个）两组位数上，进行组选数字0~9的选择投注，并分为”复式”及”单式”两种投注方式：
                                <br />
                                <br />
                                <strong>√ 复式：从0~9个号码中选择号码，每两个数字组合为一注，比对开奖结果的前二或后二数字，不需要位数相同，只要数字相同即算中奖。</strong>
                                <br /> ► 例如：投注后二-二星组选8号、5号，当期开奖号码为36258，开奖结果的后二为58号，故本次投注结果为中奖。
                                <br />
                                <br />
                                <strong>√ 单式：从前二或后二两个位数中，分别选择0~9的数字号码投注，比对开奖结果的前二或后二个数字，不需要位置相同，只要数字相同即算中奖，此种投注方式的特别处在于可选择相同号码，并且相同号码的赔率较高。</strong>
                                <br /> ► 例如1：投注二星组选（后二）十位8号、个位5号，当期开奖号码为36258，开奖结果的后二分别为5号、8号，故本次投注结果为中奖。
                                <br /> ► 例如2：投注二星组选（后二）十位8号、个位8号，当期开奖号码为36288，开奖结果的后二分别为8号、8号，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>10.三星组选三</h1>
                            &nbsp;
                            <p>开奖结果中的3个数字有两个相同，即为组选三， 在5个位数盘口的前三(万千百)、中三(千百十)、后三(百十个)三组，或3个位数盘口的百十个位数上，进行组选数字0~9中任选3个且其中两个数字需相同的选择投注, 比对开奖结果的三个位数数字相同即中奖，不限定位置。并分为”单式”及”复式”两种投注方式：
                                <br />
                                <br />
                                <strong>√ 单式：在位数上分别选择号码，必须要有一个数选择相同，但比对开奖结果时无需比对位置。</strong>
                                <br /> ► 例如：单式投注三星组选三（后三）百位8号、十位8号、个位2号，当期开奖号码为36288，开奖结果的后三为288号，与投注号码虽然位置不同但号码相同，故本次投注结果为中奖。
                                <br />
                                <br />
                                <strong>√ 复式：在0~9个号码中选择2个以上号码进行投注，比对开奖结果的三个号码，与投注号码吻合即中奖。</strong>
                                <br /> ► 例如：复式投注三星组选三（后三）2号、8号，当期开奖号码为36288，开奖结果的后三为288号，故本次投注结果为中奖。补充：开奖号码为828、882、282、228、822时，也都算中奖。</p>
                            &nbsp;
                            <h1>11.三星组选六</h1>
                            &nbsp;
                            <p>在5个位数盘口的前三（万千百）、中三（千百十）、后三（百十个）三组，或3个位数盘口的百十个位数上，进行组选数字0~9的选择投注，比对开奖结果的三个位数数字相同即中奖，不限定位置。
                                <br />
                                <br /> ► 例如：投注三星组选六（后三）2号、8号、5号，当期开奖号码为36258，开奖结果的后三为2号、5号、8号，开奖号码与投注号码相同，故本次投注结果为中奖。</p>
                            &nbsp;
                            <h1>12.追号与倍投</h1>
                            &nbsp;
                            <p>追号定义：将一注或一组号码进行两期或两期以上的投注。最多可进行连续50期。
                                <br />
                                <br /> 倍投定义：将目前的投注金额，以倍率的方式进行投注，由1.0为起始，最高为3倍。
                                <br />
                                <br /> 追号终止条件：
                                <br /> ♦ 当达到玩家指定的追号期数，或设定的终止条件时
                                <br /> ♦ 当帐户余额不足于购买的投注项目时
                                <br /> ♦ 当下一期追号注单，预期返还金额超过当期最大获利金额时
                                <br /> ♦ 当购买的注单未进行开奖时
                                <br /> ♦ 玩家手动停止追号时
                                <br />
                                <br /> 追号起始时间点：
                                <br /> ♦ 追号从当前需要追号的订单开始，作为第一期追号，直到符合玩家设定的终止条件时停止追号。
                                <br />
                                <br /> ► 例：重慶和值大小【大】投注金10元，追号10期，倍投2倍</p>
                            <div className="TableStyle3 MarginBottom20">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="Title">期数</td>
                                            <td className="Title">开奖结果</td>
                                            <td className="Title">赔率</td>
                                            <td className="Title">注金</td>
                                            <td className="Title">结果</td>
                                        </tr>
                                        <tr>
                                            <td>第一期</td>
                                            <td>重慶和值 大小【小】</td>
                                            <td>1.96</td>
                                            <td>10</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>第二期</td>
                                            <td>重慶和值 大小【小】</td>
                                            <td>1.96</td>
                                            <td>20</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>第三期</td>
                                            <td>重慶和值 大小【小】</td>
                                            <td>1.96</td>
                                            <td>40</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>第四期</td>
                                            <td>重慶和值 大小【大】</td>
                                            <td>1.96</td>
                                            <td>80</td>
                                            <td>156</td>
                                        </tr>
                                        <tr>
                                            <td>第五期</td>
                                            <td colspan="4">第四期开奖赢，故系统自动停止后续注单追号。</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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


LotteryRuleThree.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleThree))));