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

export class MemberRuleFive extends React.Component {
    
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
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_partner">供合作伙伴使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_partner">分享计划 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>代理FAQ</h2>

                        <p>LETOU加盟计划作为一种营销计划，一项寻找“合作伙伴”的活动，鼓励拥有自己网站的个人及公司，推广我们这个最为创新的博彩公司。成为乐投国际代理商，您只需向您的客户群推广我们的产品，如：体育项目、在线真人娱乐场、小游戏、快乐彩KENO和香港乐透KENO。为LETOU提供客户，您即可从中获得相应的回报，并在我们每一个产品上下注的客户，可得相当的利润回馈。您介绍的会员越多，您所得到的回报也越大，且沒有最高限制的。作为LETOU的加盟商，您将与业内最新品牌合作，并根据您推荐的每一个客户进行回馈。
                            <br/>
                            <br/> 乐投国际合作伙伴计划”是乐投博彩交易所推出的一项寻找“合作伙伴”的活动。“合作伙伴”为乐投国际提供客户，即可从中获得相应的回报。我们的活动绝不需要任何费用，也无须承担任何风险。您只需要介绍会员加入我们的网站，您将能从我们的纯利润中得到您的回报，您介绍的会员越多，所得到的回报也越大，且没有最高限额。
                        </p>
                        &nbsp;

                        <p>Q：我如何加入LETOU合作计划？
                            <br/> A：点击立即加入并用几分钟时间填写申请表格。请详阅合作协定，并确认同意条款, 提申请表后，请联系代理专员。
							<br/>• 代理专员QQ：3007282086
							<br/>• 代理专员Skype：swifind</p>

                        <p>Q：为什么我要成为LETOU的合作计划伙伴？
                            <br/> A：
                            <br/> 1. 佣金比率最高可达40%，另可再获得下线代理额外10%，下线代理人数无上限！代理也能自由投注平台游戏，赢取更多盈利!
                            <br/> 2. 出款安全稳妥，并提供准确的在线业绩查询系统，随时随地掌握会员的最新动态。
                            <br/> 3. 提供最为便捷的咨询服务通道，通过Skype、QQ、微信、电话等即时工具全天候提供即时的服务。
                            <br/> 4. 我们有最丰富的产品：双体育平台，9大真人平台，3种热门彩票游戏，保证满足您的所有会员。</p>

                        <p>Q：成为乐投国际LETOU的合作伙伴需要支付费用吗？
                            <br/> A：LETOU的合作伙伴计划是无需支付任何费用的。当您确认愿意加入成为乐投国际LETOU合作伙伴后，只要按我司要求【真实】填写合作伙伴申请数据提交即可。
                        </p>

                        <p>Q：如何能加入乐投国际LETOU的合作伙伴计划？
                            <br/> A：只要您拥有广博的人脉，或拥有极佳的网络宣传和推广能力。阅读并同意《乐投国际LETOU合作伙伴计划协议》，立即点击“加入我们”，当您完成申后，请主动联系代理专员（QQ、Skype），代理专员会与你进行沟通，在72小时内对您的数据进行审核并给予回复。
                        </p>

                        <p>Q：成为乐投国际LETOU合作伙伴后你能获得的利益
                            <br/> A：一旦成为乐投国际LETOU的合作伙伴，您向LETOU所推荐的有效会员为LETOU带来盈利，您将可以永久获得最高达40%的佣金提成。而且我们作为一个在线娱乐国际品牌，将会你所在的区域市场开展品牌业务推广，让您事半功倍。
                        </p>

                        <p>Q：如何查看我的资料统计？
                            <br/> A：只要您登录LETOU的代理系统。登录后您就可以查看每天的会员投注情况‘与’相对应的报表，报表内容：涉及其投注、输赢、存取，资料行为分析等明细。
                        </p>

                        <p>Q：代理佣金的发放与领取
                            <br/> A：我们会在每月5-9号进行上个月佣金的结算，佣金结算完成后，每月20日可直接从帐户申请提领。
                        </p>

                        <p>Q：如何构成一个新的注册？
                            <br/> A：LETOU定义为首次注册一个或更多LETOU 的产品，并进行首次存款及使用公司允许支付系统支持的客户。</p>

                        <p>Q：如何定义一个有效新注册会员？
                            <br/> A：玩家通过您的代理专属链接登录乐投官网，或在注册过程中填写您的专属代理编码，并且该用户是首次注册乐投国际LETOU并成功存款的，视为合作伙伴您的一个有效新注册会员。
                        </p>

                        <p>Q：新的子玩家如何连结到我？
                            <br/> A：您的子玩家将以您的加盟编号进行标签。
                        </p>

                        <p>Q：我在推荐会员时需要注意什么？
                            <br/> A：
                            <br/> 1. 所推荐的会员注册时间须在您正式成为代理之后。
                            <br/> 2. 所推荐的会员在LETOU的账号为可以正常使用的账号，即账号为真实有效，启动状态且该账号是此会员在LETOU的唯一账号。
                            <br/> 3. 代理本人的投注帐户不能纳入其代理业务的范畴。
                            <br/> 4. 所推荐的会员必须为自然会员，所谓自然会员是指未成为其他代理的下线会员。</p>

                        <p>Q：我同时拥有公司的会员和代理账号，是否能将此会员账号发展成为本人代理的线下会员？
                            <br/> A：代理用户帐户不能进行存款、投注以及转账等业务。代理用户如需要投注，需另外注册一个投注账户，投注帐户不能成为自己代理用户帐户的下线。如利用代理帐户资金投注者的，本公司有权取消其代理资格。
                        </p>

                        <p>Q：我已成为公司正式代理并且推荐了10位会员，若当月只有2位会员下注，是否能提取代理佣金？
                            <br/> A：代理获得当月佣金的前提条件有两条（都需符合）：
                            <br/> 1. 当月保持至少6位活跃下线用户投注
                            <br/> 2. 代理用户帐户余额必须满足100元，不足100元佣金会累积到100元才可以提款。（如当月的收入为负值，负值款项会于账户中扣除。如当月的结算为盈利，且收到佣金确认邮件后，将为您办理。）</p>

                        <p>Q：如果我的“合作经营”帐户显示负值将如何处理？
                            <br/> A：如果您的下级会员赢多输少，您的“合作伙伴”账户将出现负数。这是有可能发生的，如果您某日的利润显示为负值，将在您现有资金的基础上扣除，直至账户资金出现正数（并且账户余额超过500元，这样您就可以提取佣金）。
                        </p>

                        <p>Q：什么情况下账户会被冻结？
                            <br/> A：
                            <br/> 1. 合作伙伴需要在加入合作伙伴计划后3个月及3个月以上没有达到至少每月有6名有效投注会员，合作伙伴经理会以QQ或SKYPE通知，观察2-3个月后依然不可以达到最低的标准。
                            <br/> 2. 在有需要联系合作伙伴解决问题的过程，尝试所有合作伙伴留下的联系方式无法联系到的时候，LETOU会冻结账户直到联系到后会解冻账户。
                            <br/> 3. 违反LETOU中规定的合作伙伴的权利和义务。</p>

                        <p>Q：如果我自己拥有网站，可否通过刊登网站广告的形式来发展自己的会员计划？
                            <br/> A：可以，当您成功成为乐投国际LETOU的代理后，可以在您的网站上刊登广告来推广您的会员计划但必须遵循LETOU与合作伙伴的权利和义务。
                        </p>

                        <p>Q：若人在英国范围外，仍能加入 LETOU 计划？
                            <br/> A：是的，除了来自法国、香港、荷兰、菲律宾、新加坡、土耳其、瑞士外，LETOU欢迎世界各地的加盟商。
                        </p>

                        <p>Q：是否对我居住地有任何的限制？
                            <br/> A：乐投国际LETOU只针对中国内地的合作伙伴开展业务。
                        </p>

                        <p>Q：针对我的定居点有任何的限制吗？
                            <br/> A：LETOU欢迎世界各地的加盟商。我们对加盟商的定居点不存在任何的限制。 如果您有更多问题或需要协助，请联系在线客服，我们很乐意为您服务。
                        </p>
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


MemberRuleFive.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleFive))));