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
   
    content: {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
       
    },
    infoSelect: {
        paddingLeft: 300,
        display: 'flex',
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

export class MemberRuleOne extends React.Component {
    
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
                                    <li>
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li className="Active">
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/zh/for_partner">供合作伙伴使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/zh/for_partner">分享计划 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>何为乐投国际LETOU的合作伙伴计划</h2>
                        <p>尊敬的用户，欢迎您加入成为乐投国际LETOU的合作伙伴！
                            <br/>
                            <br/> LETOU將为您带来亚洲最流行的娱乐平台之余，更为亚洲用户提供最适合和习惯的博彩游戏与玩法。
                            <br/> 我们提供优质的娱乐平台，专业且全面的全天候服务，只要您介绍有效玩家来到乐投网站参与游戏，不需要承担任何风险和手续费就能获得丰厚的佣金提成。
                            <br/>
                            <br/> 乐投国际拥有业界公认最稳定，最安全的合作伙伴管理系统。保障合作用户权益共创双赢是我们的宗旨。我司欢迎所有真实的合作伙伴加入，对于有操纵下线投注、不当套利行为的代理，我司拥有最终的裁定权。
                        </p>
                        <p>&nbsp;</p>
                        <h2>佣金计算范围</h2>
                        <p>全平台开放合营：体育，真人娱乐场，游戏，基诺，扑克等等。</p>
						<div className="TableStyle3 MarginBottom20">任何佣金和代理咨询请联系在线客服</div>
                        <div className="TableStyle3 MarginBottom20">佣金计算方式请咨询乐投代理部:</div>
                        <div className="TableStyle3 MarginBottom20">代理专员QQ：3007282086</div>
                        <div className="TableStyle3 MarginBottom20">代理专员Skype：swifind</div>
                        <div className="TableStyle3 MarginBottom20">&nbsp;</div>
                        <p>甲方保留改变上述所有条款之最终决定权（请紧记任何使用不诚实的方法以骗取佣金将会永久冻结账户，所有佣金一概不予发还。）诚信合作，健康发展，是我们共创辉煌的最终目标。*代理人不得操控下线进行投注，否则将取消代理资格并锁定佣金！</p>
                        <p>&nbsp;</p>
                        <h2>子合作伙伴佣金计划</h2>
                        <p>代理人成功介绍朋友来注册成为LETOU合作伙伴，将会获得额外10%佣金；介绍的朋友越多，更有机会获得更丰厚的佣金！以下为详细的子合作伙伴计划说明：
                            <br/>
                            <br/> 假定您为LETOU代理人A，下线代理人数无上限。B级代理人为A级的直接下线伙伴，C级代理人为B级的直接下线伙伴，依此类推，各代理人均可发展会员及下线代理人且数量无上限。您拥有的下线代理人越多，您从下线获取的额外佣金就越多。您可从您的直接下线代理人当月所获得的佣金获取最高10%的额外提成，对于您下线的下线代理人，您可以获得他们当月佣金提成的10%×10%的额外提成,
                            以此类推。综上述，发展越多的有效会员会给您带来越多的佣金提成，同时，拥有越多的下线代理人，可使您获得越多的额外佣金提成。
                            <br/>
                            <br/> 实例计算：
                            <br/> 所有的佣金=下级会员的佣金+下级代理佣金百分10%+二级下线佣金的10%*10%+三级下线佣金的10%*10%*10%
                        </p>
                        <div className="TableStyle1 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>D1佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>D2佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>=</span> 负10000</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>D3佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>D4佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>=</span> 负10000</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>C1佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>=</span> 负10000
                                            <span style={{color:'#FF9300'}}>+ [(D1=10000)*10%] +</span> [(D2=负10000)]
                                            <span style={{color:'#FF9300'}}>=</span> 负9000</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>C2佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 + [(D3=10000*10%)] +</span> [(D4=负10000)]
                                            <span style={{color:'#FF9300'}}>= 11000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>C3佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(C1在抽取下线的10%后仍为负值，则上级B1也无法抽取下下级D1和D2的佣金)</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>B1佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 +</span> (C1负值不抽佣
                                            <span style={{color:'#FF9300'}}>+ C2*10% + C3*10% +</span> D1*10%*10%
                                            <span style={{color:'#FF9300'}}>+</span> D2*10%*10%
                                            <span style={{color:'#FF9300'}}>+ D3*10%*10% +</span> D4*10%*10%)
                                            <span style={{color:'#FF9300'}}>=</span> 12100</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(D4本身为负佣金,则上级C2与上上级B1也无法抽取1%佣金)</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">&nbsp;</td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 +</span> 0
                                            <span style={{color:'#FF9300'}}>+ 10000*10% + 10000*10% +</span> 0
                                            <span style={{color:'#FF9300'}}>+</span> 0
                                            <span style={{color:'#FF9300'}}>+ 10000*10%*10% +</span> 0
                                            <span style={{color:'#FF9300'}}>= 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">&nbsp;</td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 +</span> 0
                                            <span style={{color:'#FF9300'}}>+ 1000 + 1000 +</span> 0
                                            <span style={{color:'#FF9300'}}>+</span> 0
                                            <span style={{color:'#FF9300'}}>+ 100 +</span> 0
                                            <span style={{color:'#FF9300'}}>= 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>B2佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>=</span> 负5000</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(C1在抽取下线的10%后仍为负值，则上级A也无法抽取下下级D1和D2的佣金)</td>
                                    </tr>
                                    <tr>
                                        <td className="Title">
                                            <span style={{color:'#FF9300'}}>A佣金收入</span>
                                        </td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 + (B1*10% +</span> B2负值
                                            <span style={{color:'#FF9300'}}>+ B3*10% +</span> C1负值
                                            <span style={{color:'#FF9300'}}>+ C2*10%*10% +</span> C3*10%*10%
                                            <span style={{color:'#FF9300'}}>+</span> D1
                                            <span style={{color:'#FF9300'}}>+</span> D2
                                            <span style={{color:'#FF9300'}}>+ D3*10%*10% +</span> D40
                                            <span style={{color:'#FF9300'}}>) = 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">&nbsp;</td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 + (10000*10% +</span> 0
                                            <span style={{color:'#FF9300'}}>+ 10000*10% +</span> 0
                                            <span style={{color:'#FF9300'}}>+ 10000*10%*10% +</span> 10000*10%*10%
                                            <span style={{color:'#FF9300'}}>+</span> 0
                                            <span style={{color:'#FF9300'}}>+</span> 0
                                            <span style={{color:'#FF9300'}}>+ 10000*10%*10%*10% +</span> 0
                                            <span style={{color:'#FF9300'}}>) = 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="Title">&nbsp;</td>
                                        <td>
                                            <span style={{color:'#FF9300'}}>= 10000 + ( 1000 + 0 + 1000 + 0 ) + 100 +</span> 100
                                            <span style={{color:'#FF9300'}}>+</span> 10
                                            <span style={{color:'#FF9300'}}>+</span> 0
                                            <span style={{color:'#FF9300'}}>)= 12100</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>&nbsp;</p>
                        <h2>佣金结算规则</h2>
                        <ul className="HelpCenterArticleColumn">
                            <li>1.合作伙伴每月的佣金提成为正值时，等于或大于6个活跃会员才能启动领取佣金。乙方每月的佣金提成为负值时，不会启动领取佣金，所有负值金额会累积计算（与活跃客户数无关）。</li>
                            <li>2.当乙方正式成为甲方合作伙伴之日起算，直到当月最后一日，为合作伙伴运营收益计算时间段。之后按每月计算收益。</li>
                            <li>3.每月5-9号系统将自动生成上个月代理佣金账单。10-19号为对账时间。如代理对佣金账单无异议，每月20号可以申请提款上一个月的佣金。（1月份佣金，2月5-9号生成佣金账单，2月10日-2月19日为对账时间。2月20号，代理可登陆平台申请提取佣金。）</li>
                            <li>4.合作伙伴可根据帐户显示的提款余额申请提款，每月申请提款额度需大于或等于100RMB。如余额不足100RMB，将会累积到100RMB才能提取自动申请领取。</li>
                            <li>5.代理净盈利=（所有平台输赢*85%）－系统红利－调帐－用户存提款总金额*1.5%
                                <br/> 佣金=代理净盈利*佣金率
                                <br/> 如当月的收入为负值，佣金则不产出，累计之下月可计算出正值佣金为止。如当月的结算为盈利，及能达到提款要求佣金将在解锁后，乙方即可申请领取。
                            </li>
                            <li>6.合作伙伴除了需达到上述的活跃会员数以外，我们有一套完整的针对会员质量进行审核的标准（存款指标，投注指标，客户存活率指标等）会针对会员的质量进行考核。对于部份会员质量达标，且未能达到最低自身活跃玩家要求的合作伙伴，我们将不会发放佣金。</li>
                            <li>7.合作伙伴需在注册成为高级代理3个月内满足活跃下线数要求，乐投有权随时冻结或取消其合作伙伴权限，而不需要任何理由或者提前通知。</li>
                            <li>8.高级代理人连续3个月未发展任何有效充值用户，第三个月佣金不于发放。完成代理部指定任务后可申请补发佣金。如果持续3个月均未满足任务要求，视代理自动放弃领取佣金。</li>
                            <li>9.合作伙伴本身的游戏账号不可以在自己的合作伙伴旗下。如有上述情况发生，我们将按会扣除该账户所得到的输赢，并将该账户从您合作伙伴下线里移除。多次违规者将直接取消高级代理权限。</li>
                            <li>10.代理人不得操控下线会员任何操作行为，否则将取消代理资格并锁定佣金！不允许代理的行为如下：
                                <br/> a. 批量注册下线会员以满足活跃用户数。
                                <br/> b. 操纵下线会员投注行为。
                                <br/> c. 操纵活跃下线会员。</li>
                        </ul>
                        <p></p>
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


MemberRuleOne.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleOne))));