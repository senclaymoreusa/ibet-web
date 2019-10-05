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

export class Privacy extends React.Component {
    
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
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">维护账户安全 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>隐私权政策</h2>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li>1.LETOU 十分尊重及重视会员的私隐权，我们将竭力保证您的信息与数据安全，让客户无后顾之忧，这是我们一直遵循的隐私权政策宗旨。</li>
                            <li>2.LETOU 绝不会透露任何能识别个人身份的资料给任何第三方，除非收到法庭传票或应可行法律的要求及判决。我们有权通过网站向有关付款平台服务提供商以及金融保险机构提供必要的个人信息以完成付款要求。</li>
                            <li>3.会员提供的所有个人信息，其传送均通过128位SSL加密的安全端口，并存放在普通公众无法进入的保密环境之中。所有数据的内部出入将受到严格限制和严密监控。</li>
                        </ul>

                        <p>&nbsp;</p>

                       

                        <p>&nbsp;</p>

                        <p>以下为我们关于客户个人信息隐私权保护规则的内容：</p>

                        <h2>简介</h2>

                        <p>网站服务由LETOU提供。为了让客户在这能享受到安全愉悦的服务体验，我们征求客户仔细阅读此“隐私政策”，这将涉及到我们使用您个人信息的相关事项。对待客户的个人隐私，本公司本着严谨的态度。
                            
                            <li> 为了让客户享受进一步服务，有时我们可能需要客户提供个人信息。本政策将会涵盖相关客户个人信息的使用事项，同时也涉及相关信息的记录程序。有时，客户接受进一步服务前，可能需要客户提供个人信息（如：姓名，通信地址，邮箱地址，会员编号，电话或手机号码，出生日期或支付信息），任何情况下，我们都将对照此政策来处理您的个人信息。在使用您的个人信息时我们将适用现行的法律条款，并竭力采取最佳最稳妥的方式处理。
                            </li>
                            <li> 同时，我们也将监控您在本网站的活动内容，可能包括您的访问量，访问页面，网络服务的原始域名等，这将有助于我们建立客户个人文件数据。其中部分资料将被聚合统计，意旨我们将不能对其单独进行检验。
                            </li>
                        </p>

                        <h2>目的</h2>

                        <p>阁下在LETOU开户时，我们将要求您提供某些个人信息，如：姓名，通信地址，邮箱地址，密码及确认您是否已年满18周岁（LETOU只接收达到法定年龄18周岁或以上的客户）。我们可能需使用您的个人信息用来确认您的各种金融交易，定期发送公司实时简讯，提供客服支持及完善全面的博彩服务给您。如果您想中止接收公司实时简讯，您可根据提示在简讯接收选项做出相关选择。另须注意，您注册的姓名必须是您本人姓名，您所注册的数据为真实有效数据，因为这将用于随后的交易验证及前述的其它用途。</p>

                        <h2>访问信息</h2>

                        <p>在阁下访问我们网站页面的过程中，将会有个小的文本夹“信息记录程序”存储在您的计算机。很多网站都有类似设置，因为此设置对网站发行商是非常有用的，譬如可以记录该计算机（或用户）是否曾浏览过此网站。
                            
                            <li> LETOU将会对客户“信息记录程序”及IP地址进行存储记录，这些数据将有助于我们完善和提高我们的服务，并有助于我们分析客户的完整信息。这类数据并不是用于客户个人信息的建文件，因此将被定期清除。
                            </li>
                        </p>

                        <h2>机密性</h2>

                        <p>LETOU将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，除非此政策条款里有明文规定。所有LETOU员工都被要求遵循该政策条款。员工有义务严密的保守客户的个人信息，即使员工离开LETOU后仍须坚守此义务。阁下本人也须保护好您的个人信息。阁下应严守您的帐户密码，不应将此透露给其他人。</p>

                        <h2>客户信息的使用和存储</h2>

                        <p>当阁下提供任何个人资料给LETOU，我们对您负有关于如何使用您个人资料的法定义务，我们须有正当理由才可征集您的数据（关于为何征集客户个人资料，我们特定页面已有说明），告知征集您数据的用途以及如有必要将其传给其他任何人，我们将会通知您本人。
                            
                            <li> 我们使用客户个人资料的用途包括：用于确认您的身份以及您的账户行政服务统计分析欺诈预防及监测通知您可能将影响到您的我们网站或服务的任何更改安全审核服务完善正如下所列，如果我们因其它用途需用到您的个人信息，我们将会提前通知您。我们可能联系您关于您申请的我们任何服务功能，我们来信确认您选择接收更多的公司信函邀请您参加关于我们服务的调查活动（自愿加入）出于市场推销目的，并且您已特别认同（见下面）我们将一直严守客户个人信息不被外泄，除非有法定要求（如：政府部门及执法机构要求，或网站上带有攻击性或不妥的内容）或关系到我们的业务合作伙伴。一般情况我们只在LETOU内部使用客户的个人信息。然而，有时我们可能需借助第三方来处理客户的信息（如：网站主机或维护服务的提供商），我们将会要求第三方严格遵守我们的约定，要求他们将不得将客户个人信息用于他们的商业用途。在客户所申请使用我们服务这段期间，我们将一直保存您的个人信息于后台系统，直到申请期满或客户想注销会员账户，我们将把您的个人资料作删除处理。取决于数据保护立法与监管要求。出于安全原因，如果客户使用我们网站服务满一年，我们将会保存其信息记录文件（包括信息内容，会员姓名，时间和日期）。另外，如果客户并未注册为我们的会员，但参加了LETOU的其它服务（如：竞赛活动），其个人信息将保存到该服务顺利完成。
                            </li>
                        </p>

                        <h2>客户数据信息保护</h2>

                        <p>我们将使用高科技系统管理和保护客户个人信息数据，如只有使用客户独一无二的用户名和密码才可进入该客户账户客户信息数据储存在安控服务器内我们尽全力保护客户个人信息数据安全，但客户须认同目前网络并非百分百安全，因此，我们并不能保证客户发送信息给我们的网络传输过程的安全和完整性，也不担保我们发送给客户网络传输过程的安全和完整性。</p>

                        <h2>保密限制</h2>

                        <p>在某些情况下出于安全，立法和规章条例要求，LETOU不得不透漏客户个人信息。我们将尽全力保护客户个人信息，除非发生以下情况：出于担保，传审或其它法规要求，LETOU才透露客户信息。出于正当理由行使LETOU权利，需要对某客户或实体进行确认，联系或采取法定措施。另外，如果涉及诈欺，知识产权侵犯，权利侵犯，或其它非法行为或可能导致责任牵连的行为的调查，我们相信我们有必要和理由透露客户的信息（如：姓名，居住地址，城市，邮编，国家，电话号码，邮箱地址和公司）给LETOU第三方代理。</p>

                        <h2>客户信息的接收者</h2>

                        <p>除了上述法定要求说明，我们还可能将您的个人信息透露给我们的工作人员，其他相关公司的工作人员或LETOU的合作伙伴和为LETOU客户提供相关服务给我们的第三方网络服务供货商（包含但不局限于安全，信用和风险审核机构）。第三方网络服务供货商可以检查我们提供在公共数据库或私人数据库的任何详细数据及有机会获得和保留检查记录。我们同样可以通过第三方网络服务供货商得到您的个人信息。如果您提供您的个人资料给我们或我们从第三方网络服务供货商中收到您的个人资料，代表您已经同意我们可以处理、使用、记录和透露您的个人信息。我们保留权利，根据您或第三方网络服务供货商提供的信息，在任何时候冻结或关闭您的LETOU会员账户。</p>

                        <h2>监控</h2>

                        <p>出于服务质保，防止诈骗和法规遵循方面的原因，我们将对客户的通信记录进行保存和监控（如：电话和邮件记录）。客户有权要求我们勿将其个人信息直接用于市场推销。如果您想行使此权利，客户应准备以下；书面提交申请提供可以证明您身份的信息（如：账号，用户名，注册信息）写明个人信息哪里不正确及需修正的内容。隐私权保护规则的认同一旦阁下在LETOU注册开户就代表您认同此隐私权保护规则条款。我们将定期更新此政策条款，因此我们建议客户您也定期进行查阅。如果我们对该政策有所更改，我们将在相关网页上发布消息。政策更改后，客户持续使用LETOU网站将被视为客户认同该政策的更改。如果客户不接受此政策的更改，您可以选择停用我们的网站服务。如果该政策条款与其它局部特殊条款产生分歧，将适用局部特殊条款。</p>
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


Privacy.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Privacy))));