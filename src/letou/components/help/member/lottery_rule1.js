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

export class LotteryRuleOne extends React.Component {
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
                                <a href="/zh/for_member">彩票规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)} >
                                <a>名词解释</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)} >
                                <a>香港六合彩</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)} >
                                <a>新加坡多多</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)} >
                                <a>中国七乐彩</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)} >
                                <a>新西兰乐透</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)} >
                                <a>德国乐透</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)} >
                                <a>英国国家乐透</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} onClick={this.onClick.bind(this,8)} >
                                <a>西班牙乐透</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} onClick={this.onClick.bind(this,9)} >
                                <a>南非国家乐透</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} onClick={this.onClick.bind(this,10)} >
                                <a>加拿大乐透</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} onClick={this.onClick.bind(this,11)} >
                                <a>美国纽约乐透</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    {/* <!-- please only edit HelperCenterDetail's contain --> */}
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1} >
                            <h2>名词解释 </h2>
                            <h1>【特码】</h1>
                            <p>为乐透的玩法之一，指开奖时最后会开出的特别号，玩法为购买1~49其中一个号码，比对当期开奖之特别号，相同即算中奖。</p>
                            <h1>【正码特】</h1>
                            <p>为乐透的玩法之一，又可称正特，在乐透中名称为正码特，玩法为根据开奖"顺序"选出的1~6个号码不含特别码，下注1~49其中一个号码，若下注号码与该顺序开奖的号码相同时中奖，开奖顺序的名称第一球称为正1特，第二球为正2特，依此类推。</p>
                            <h1>【平码】</h1>
                            <p>为乐透的玩法之一，又可称正码，在乐透中名称为平码，玩法购买1~49其中一个号码，比对当期开奖之前6个正码号码，其中一个号码相同即算中奖。</p>
                            <h1>【两面】</h1>
                            <p>有50%机率的意思，乐透中通常指大、小、单、双玩法统称。</p>
                            <h1>【正码1-6】</h1>
                            <p>用同上正码特顺序的方式，分别对顺序1-6购买两面及色波，比对当期开奖顺序球号，如符合下注条件即中奖。</p>
                            <h1>【连码】</h1>
                            <p>指单一注签两个以上球号，像是2全中、3全中…都称连码。</p>
                            <h1>【总分】</h1>
                            <p>将总和分数从最小28到最大322分为6个区间，会员可对6个分段其中1段下注，如当期开奖7个号码总和落在下注范围，即算中奖。</p>
                            <h1>【色波】</h1>
                            <p>香港六合彩号码有固定对应的颜色称为色波，此玩法仅有香港特有，在其他国家乐透中没有此项目。</p>
                            <h1>【生肖】</h1>
                            <p>以年龄对照49个号码，今年是蛇年，就以蛇为开始，依续排列12生肖。</p>
                            <h1>【头尾数】</h1>
                            <p>头数即为10位数的意思，乐透共有49个号码，因此头数为0、1、2、3、4等五个号码，尾数即为个位数的意思，在乐透共有0~9十个号码。</p>
                            <h1>【期号】</h1>
                            <p>乐透每期的编号号码，有部分国家的乐透是没有期号的，则以日期作为期号。</p>
                            <h1>【返还】</h1>
                            <p>下注金额乘以赔率后的结果（含本金），除了提供玩家参考，也用来计算平台风险。</p>
                            <h1>【输赢】</h1>
                            <p>用于结算后显示玩家该注在当期乐透的输或赢的金额，假如结果为输，则玩家损失本金，故显示为[-本金]；假如结果为赢，则显示玩家除了本金之外，额外赢得的[盈利]。</p>
                            <h1>【连碰】</h1>
                            <p>连码的一种下注方式之一，将选择号码自动凑成全部可能产生的组合。</p>
                            <h1>【立柱】</h1>
                            <p>连码的一种下注方式之一，在每一柱中分别选择号码，在用各柱的号码凑成可以组合，同一柱下的号码不会被凑成一组。</p>
                            <h1>【胆拖】</h1>
                            <p>连码的一种下注方式之一，以"胆"的号码为主要，"拖"的号码为次要，选择好胆与拖的号码后，将以胆为基础凑出组合，例如：选择1为胆，2、3、4为拖，2全中的下注只会产生3组，分别为[1、2]、[1、3]、[1、4]。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2>香港六合彩 </h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【正码特】</h1>
                            &nbsp;
                            <p>当期开奖第1~6球抽出顺序与号码，符合下注位置与号码即算中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>4全中：当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> 3全中：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> 2全中：当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> 2中特：
                                <br /> √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> 特串：当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。
                            </p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> 正肖：当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> 特肖：当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> 一肖：当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。
                            </p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【正码1-6】</h1>
                            &nbsp;
                            <p>用两面、色波、尾数、生肖等项目，在[正码1]~[正码6]的开奖顺序球中各自下注的一种玩法。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 色波：香港六合彩特有球色，当开出号码的球色等于下注颜色时中奖。
                                <br /> √ 红：01，02，07，08，12，13，18，19，23，24，29，30，34，35，40，45，46
                                <br /> √ 蓝：03，04，09，10，14，15，20，25，26，31，36，37，41，42，47，48
                                <br /> √ 绿：05，06，11，16，17，21，22，27，28，32，33，38，39，43，44，49
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖。</p>
                            &nbsp;
                            <h1>【色波】</h1>
                            &nbsp;
                            <p>香港六合彩特有球色，当开出号码的球色等于下注颜色时中奖。
                                <br /> √ 红：01，02，07，08，12，13，18，19，23，24，29，30，34，35，40，45，46
                                <br /> √ 蓝：03，04，09，10，14，15，20，25，26，31，36，37，41，42，47，48
                                <br /> √ 绿：05，06，11，16，17，21，22，27，28，32，33，38，39，43，44，49
                                <br /> √ 红大：29，30，34，35，40，45，46
                                <br /> √ 红小：01，02，07，08，12，13，18，19，23，24
                                <br /> √ 红单：01，07，13，19，23，29，35，45
                                <br /> √ 红双：02，08，12，18，24，30，34，40，46
                                <br /> √ 蓝大：25，26，31，36，37，41，42，47，48
                                <br /> √ 蓝小：03，04，09，10，14，15，20
                                <br /> √ 蓝单：03，09，15，25，31，37，41，47
                                <br /> √ 蓝双：04，10，14，20，26，36，42，48
                                <br /> √ 绿大：27，28，32，33，38，39，43，44
                                <br /> √ 绿小：05，06，11，16，17，21，22
                                <br /> √ 绿单：05，11，17，21，27，33，39，43
                                <br /> √ 绿双：06，16，22，28，32，38，44
                                <br /> √ 红大单：29，35，45
                                <br /> √ 红大双：30，34，40，46
                                <br /> √ 红小单：01，07，13，19，23
                                <br /> √ 红小双：02，08，12，18，24
                                <br /> √ 蓝大单：25，31，37，41，47
                                <br /> √ 蓝大双：26，36，42，48
                                <br /> √ 蓝小单：03，09，15
                                <br /> √ 蓝小双：04，10，14，20
                                <br /> √ 绿大单：27，33，39，43
                                <br /> √ 绿大双：28，32，38，44
                                <br /> √ 绿小单：05，11，17，21
                                <br /> √ 绿小双：06，16，22</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数：即下注号码的十位数0~4。
                                <br /> - 特码头数：当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数：即号码的个位数0~9。
                                <br /> - 特码尾数：当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数：当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                            <h2>新加坡多多</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>- 4全中：当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> - 3全中：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 2全中：当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> - 2中特：
                                <br /> √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> - 特串：当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。</p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> - 正肖：当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> - 特肖：当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> - 一肖：当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数：即下注号码的十位数0~4。
                                <br /> - 特码头数：当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数：即号码的个位数0~9。
                                <br /> - 特码尾数：当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数：当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                            <h2>中国七乐彩</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~7球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于16时为大，小于或等于15时为小。
                                <br /> - 单双：号码单数时为单，双数时为双。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                            <h2>新西兰乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于21时为大，小于或等于20时为小。
                                <br /> - 单双：号码单数时为单，双数时为双。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 6}>
                            <h2>德国乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。（德国乐透之特码从0~9号中抽出1球）</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 7}>
                            <h2>英国国家乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>- 4全中：当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> - 3全中：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 2全中：当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> - 2中特：
                                <br /> √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> - 特串：当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。</p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> - 正肖：当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> - 特肖：当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> - 一肖：当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数：即下注号码的十位数0~4。
                                <br /> - 特码头数：当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数：即号码的个位数0~9。
                                <br /> - 特码尾数：当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数：当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 8}>
                            <h2>西班牙乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>- 4全中：当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> - 3全中：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 2全中：当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> - 2中特：
                                <br /> √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> - 特串：当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。</p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> - 正肖：当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> - 特肖：当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> - 一肖：当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数：即下注号码的十位数0~4。
                                <br /> - 特码头数：当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数：即号码的个位数0~9。
                                <br /> - 特码尾数：当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数：当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 9}>
                            <h2>南非国家乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【正码特】</h1>
                            &nbsp;
                            <p>当期开奖第1~6球抽出顺序与号码，符合下注位置与号码即算中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>- 4全中：当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> - 3全中：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 2全中：当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> - 2中特： √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> - 特串：当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。</p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> - 正肖：当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> - 特肖：当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> - 一肖：当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双：当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【正码1-6】</h1>
                            &nbsp;
                            <p>用两面、尾数、生肖等项目，在[正码1]~[正码6]的开奖顺序球中各自下注的一种玩法。
                                <br /> - 大小：大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双：号码单数时为单，双数时为双，开出49为和。
                                <br /> - 合大小：十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双：十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖：落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖。</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数：即下注号码的十位数0~4。
                                <br /> - 特码头数：当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数：即号码的个位数0~9。
                                <br /> - 特码尾数：当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数：当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 10}>
                            <h2>加拿大乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【连码】</h1>
                            &nbsp;
                            <p>- 4全中： 当期开奖的前6个号码不含特别号，其中4球符合所下注的4个球号时中奖。
                                <br /> - 3全中： 当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 3中2：
                                <br /> √ 中二：当期开奖的前6个号码不含特别号，其中2球符合所下注的3个球号时中奖。
                                <br /> √ 中三：当期开奖的前6个号码不含特别号，其中3球符合所下注的3个球号时中奖。
                                <br /> - 2全中： 当期开奖的前6个号码不含特别号，其中2球符合所下注的2个球号时中奖。
                                <br /> - 2中特：
                                <br /> √ 中二：所下注球号符合当期开奖号码的2正码时中奖。
                                <br /> √ 中特：所下注球号符合当期开奖号码的1特码及1正码时中奖。
                                <br /> - 特串： 当期开奖的前6个号码及特别号，符合所下注范围的「1正码&amp;1特码」时中奖。</p>
                            &nbsp;
                            <h1>【生肖】</h1>
                            &nbsp;
                            <p>用十二生肖当年的年龄，对应1~49球号的一种玩法。
                                <br /> - 正肖： 当期开奖的前6个号码不含特别号，其中一球号在下注的生肖范围即算中奖。如超过1个正码落在下注生肖范围内，派彩将自动倍增。
                                <br /> - 特肖： 当期开奖的特别号码，在下注的生肖范围即算中奖。
                                <br /> - 一肖： 当期开奖的全部号码，包含前6个号码及特别号，其中一球号在下注的生肖范围即算中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小： 大于或等于25时为大，小于或等于24时为小，开出49为和。
                                <br /> - 单双： 号码单数时为单，双数时为双，开出49为和。
                                <br /> - 尾大小： 个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出49为和。
                                <br /> - 大小肖： 落在生肖中的：马、羊、猴、鸡、狗、猪等范围为大肖，落在生肖中的：鼠、牛、虎、兔、龙、蛇等范围为小肖，开出49为和。
                                <br /> - 合大小： 十位数与个位数相加后大于等于7时为合大，十位数与个位数相加后小于等于6时为合小，开出49为和。
                                <br /> - 合单双： 十位数与个位数相加后为单数即为合单，相加后为双数则为合双，开出49为和。
                                <br /> - 总和大小： 当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数大于等于175时为总和大，全部相加后总分数小于等于174时为总和小。
                                <br /> - 总和单双： 当期开奖的全部号码，包含前6个号码及特别号，全部相加后总分数为单数时为总和单，全部相加后总分数为双数时为总和双。</p>
                            &nbsp;
                            <h1>【头尾数】</h1>
                            &nbsp;
                            <p>- 头数： 即下注号码的十位数0~4。
                                <br /> - 特码头数： 当期开奖特别号，开出号码的十位数符合下注项目时中奖。
                                <br /> - 尾数： 即号码的个位数0~9。
                                <br /> - 特码尾数： 当期开奖特别号，开出号码的个位数符合下注项目时中奖。
                                <br /> - 正特尾数： 当期开奖的全部号码，包含前6个号码及特别号，开出的全部号码中，任一号码的个位数符合下注项目时中奖。</p>
                            &nbsp;
                            <h1>【总分】</h1>
                            &nbsp;
                            <p>将6个号码及特别号，全部相加后的总分数28~322分成六个区间，当期开奖的[总分]，符合所投注的[区间]时中奖。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 11}>
                            <h2>美国纽约乐透</h2>
                            &nbsp;
                            <h1>【特码】</h1>
                            &nbsp;
                            <p>当期开奖的特别号码，与下注的号码相同时中奖。</p>
                            &nbsp;
                            <h1>【平码】</h1>
                            &nbsp;
                            <p>第1~6球其中1号相同即中奖。</p>
                            &nbsp;
                            <h1>【两面】</h1>
                            &nbsp;
                            <p>指大小单双的统称。
                                <br /> - 大小：大于或等于30时为大，小于或等于29时为小，开出59为和。 - 单双：号码单数时为单，双数时为双，开出59为和。 - 尾大小：个位数大于等于5时为尾大，个位数小于等于4时为尾小，开出59为和。</p>
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


LotteryRuleOne.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleOne))));