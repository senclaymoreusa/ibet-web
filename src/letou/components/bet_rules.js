import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "./icon_header";
import InfoSelect from "./infoSelect";
import '../css/help.css'

import {
    show_letou_announcements
} from '../../actions';


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

export class BetRules extends React.Component {
    
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
                                <a href="/for_member">维护账户安全 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>投注规则</h2>
                        <p>某些赛事和赌盘有不同的规则，这些规则列于本网站有关特定赛事或赌盘/投注类型的《特别赛事/赌盘投注规则》中。 下述内容为适用于所有赛事和赌盘/投注类型的一般规则，必须完全遵守。 在适用的情况下，本公司网站公布的《条款和条件》中所列规定与定义应当适用于本《投注规则与规定》。</p>
                        <h2>• 1.一般投注规则与规定</h2>
                        <h2>&nbsp;</h2>
                        <h1>• 1.1.总则</h1>
                        <p>• 1.1.1.本公司的所有投注信息都是出于诚意提供的。 不过，本公司不对有关日期、时间、地点、竞争对手、赔率、结果、统计数据、团队制服（显示在实时视频中）或其它投注信息的任何错误或遗漏负责。 本公司保留纠正任何明显错误的权利，并且应当采取所有合理行动确保以诚信透明的方式管理赌盘，赌盘定义为针对某一体育赛事所提供的不同的投注类型。
                            公司保留做出最终性决定的权利。
                            </p>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li> • 1.1.2.如果一项赛事在预定时间之前开始，则只有该项赛事开始之前所做投注（除指定的现场投注以外）会被视为有效投注，赛事的定义是两个团队或个人间有组织的体育比赛或活动。 如果一个赌盘未在正确时间关闭或中止，则本公司有权取消在实际开始时间之后进行的所有投注（除指定的现场投注以外）。
                            
                            </li><li> • 1.1.3.如果网站对赛事所用的英语和非英语名称之间有任何差异，以英语版本为准。
                            </li><li> • 1.1.4.在任何时候，客户有责任了解比赛分数和所有相关的比赛信息，并且建议客户在下注之前确认比赛状况。
                            </li><li> • 1.1.5.本公司有权在任何时候出于任何原因修改这些规则。 一旦在网站上发布，任何此类修改都是具有约束性和立即生效的。
                            </li><li> • 1.1.6.客户承认网站上提供的当前分数、所用时间及其它数据虽然是由第三方以“直播”形式提供，但仍会有时间延迟以及/或者可能不准确的情况，并且根据这些数据做任何投注时，客户应自行承担所有风险。 本公司提供这些数据时，不保证其准确性、完整性或及时性，并且不对客户因依赖这些数据而遭受的任何损失（直接或间接损失）负责。
                            </li><li> • 1.1.7.有以下情形之一的，本公司可全权决定取消或宣布投注无效或暂停某一客户的游戏，而无需提前发出通知：
                            </li><li> • 投注细节不完整或错误；
                            </li><li> • 所投之注超过了规则允许的限度；
                            </li><li> • 所投之注违反规则；
                            </li><li> • 人为的打字及传输错误导致不正确的游戏数据或概率；
                            </li><li> • 当出现异常或不规范使用游戏平台的情况，或出现过高的损失或收益。
                            </li><li> • 1.1.8.本公司保留暂停比赛游戏或特定产品的权利，以纠正任何明显错误，维持该游戏的诚信和公平性。
                            </li><li> • 1.1.9.一旦公司确认赌注，则客户不能修改或取消该赌注。
                            </li><li> • 1.1.10.如果客户存有任何疑问或怀疑系统错误，则建议客户停止游戏，并与本公司的客户支持部门相协调。如果客户继续游戏，该客户应对其赌注的结果负责，且公司有权决定是否解决这一问题。
                            </li><li> • 1.1.11.当开始现场比赛或游戏，且客户在其活动进行时予以投注，如果由于任何原因导致赌注断开的，不管断开的原因如何，或出现赌注冻结或崩溃，都将停止所有赌注，直到该活动完成并已知结果时才能进行结算。该一般规则不适用于某一游戏或产品拥有发生断开意外时具体规则的情形，适用该具体规则时的结果应以该规则对客户的约束力为基础。
                            </li><li> • 1.1.12.本公司保留暂停和/或随时关闭客户账户的权利，如果公司认为客户违反任何适用的规则和规章，或欺骗、黑客入侵、攻击、操纵或破坏了正常的投注程序，或如果该客户从事洗钱或其他非法活动，或者该客户低于其所在管辖区或实际区域参与赌博的法定年龄。一旦由于上述原因关闭客户帐户，包括客户账户余额在内的所有奖金和/或支出都将没收。
                            </li><li> • 1.1.13.本公司保留为其现有产品和即将提供的产品设置最大奖金额的权利。
                            </li><li> • 1.1.14.如果公司有证据表明价格或联营的操纵，或比赛、活动或竞赛中的作弊行为，则公司保留拒绝付款的权利。上述证据以所有投注渠道的投注大小、容量或模式为基础。如上述规则解释存有任何争议，以公司解释为准。
                            </li><li> • 1.1.15.本公司保留作废并取消涉及非法赌博活动的所有投注的权利。
                            </li><li> • 1.1.16.本公司保留拒绝客户进入游戏或将客户踢出游戏的权利。
                            </li><li> • 1.1.17.该软件不存在任何明示或暗示、法定或公司其他方面规定的保证、条件、承诺或声明。本公司不出于任何目的保证该软件适销性、质量及适合性，且不保证该软件能够满足客户的要求，不保证软件不会构成侵权。
                            </li><li> • 1.1.18.虽然公司承诺会合理且谨慎行事，公司并不保证该软件不会出现任何错误或中断，不保证会修正软件内的任何错误，也不保证软件或服务器无病毒。
                            </li><li> • 1.1.19.本公司对因账户结算相关的通信或系统错误造成的所有成本、费用、损失或索赔概不负责。本公司保留采取任何适当的措施，包括删除所有相关游戏软件以纠正此类错误的权利。
                            </li><li> • 1.1.20.当下注或使用该软件时，客户承认公司无法控制客户如何使用该软件。此外，客户应承担其下注及使用软件的所有风险，且公司对任何直接、间接、附加、偶然的或特殊的任何形式的伤害或损失概不负责。
                            </li><li> • 1.1.21.禁止客户披露软件内属于公司或软件供应商的任何机密信息。
                            </li><li> • 1.1.22.为进行游戏或投注，授予客户个人的、非排他的、不可转让的使用该软件的权利。
                            </li><li> • 1.1.23.禁止客户：
                            </li><li> • 将软件安装或加载至另一个设备的服务器上，或采取措施使其他人可在网络上获取该软件。
                            </li><li> • 再许可、转让、出租、出借、转移、复制或分发本软件的副本；
                            </li><li> • 以该软件、该软件或复制品的任何部分为基础，解码、还原工程、反汇编、修改或创造衍生软件，或适应性转录或合并软件的任何部分，转换软件或软件的任何部分或企图破解本软件的源代码；
                            </li><li> • 删除软件供应商的任何版权、专利或类似通知；和
                            </li><li> • 进入、访问，或试图进入、访问或以其他方式进入公司安全系统或以任何方式干扰软件、游戏和网站。
                            </li><li> • 1.1.24.使用该软件并不授予客户该软件任何知识产权的所有权。
                            </li><li> • 1.1.25.以上一般规则应仅使用于特殊游戏或产品缺乏特殊规则的情况。</li>
                            </ul>
                       
                           
                       
                        <h1>• 1.2.中止和延期</h1>
                        <p>• 1.2.1.如果一项赛事未在预定开始日期开始，并且未按特定体育规则的规定，在原先预定的完成日期完成，则所有的投注都将无效，除了对已获得无条件确定的赌盘所做的投注以外。
                            <ul className={classes.helpCenterArticleColumn}>
                            <li> • 1.2.2.如果一项赛事已经开始，但之后又中止，并且未按特定体育规则的规定，在原先预定的完成日期完成，则所有的投注都将无效，除了对无条件决定结果的赌盘所做的投注以外。
                            </li><li> • 1.2.3.如果一项赛事未按特定体育规则的规定，在原告预定的完成日期完成，而正式的比赛结果得以宣布，或者特定赛事的相关主管机构宣布了一个结果，则本公司有权认定这一比赛是正式有效的。 在此方面，本公司的决定是最终和具有结束性的。
                            </li>
                            </ul>
                        </p>
                           
                        
                        <h1>• 1.3.场地变更</h1>
                        <p>• 1.3.1.除非另有说明，如果一项比赛预计在一个中立性场地上展开，但却在非中立的场地上展开，所有的投注仍将被视为有效，反之亦然。如果主场团队打客场团队的场地变更，反之亦然，对该场比赛的所有投注都将被视为无效。如果主场和客场团队的名称被错误地颠倒，投注也会被视为无效。
                            <li> • 1.3.2.对于所有非团队赛事，如果预定的场地在赌盘开放后变更，则所有的投注仍将被视为有效。</li></p>
                        <p>
                            <li> &nbsp;</li>
                        </p>
                        <h1>• 1.4.赛事期间</h1>
                        <p>• 1.4.1.所显示的赛事进行时间仅供于参考。尽管赛事进行时间和所显示的有所差异，投注仍有可能被视为有效。
                            <li> • 1.4.2.在比赛伤停时间发生的任何情况都被视为在常规时间末时发生，例如一场足球比赛上半场伤停补时阶段的一个进球会被视为是在第45分钟时踢进的。
                        </li>
                            <li> &nbsp;</li>
                        </p>
                        <h1>• 1.5.赛果</h1>
                        <p>• 1.5.1.必要时，颁奖仪式的位次将被视为是正式赛果，不论之后是否出现取消或更改赛果的情况。 如果没有颁奖仪式，赛果将会依据相关主管机构在赌盘结算时提供的官方结果而定，不论之后是否出现取消或更改赛果的情况。 如果没有提供适用的官方结果，则将依据到赌盘结算时适用且已知的证据来确定赛果。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> • 1.5.2.赌盘通常会在一项赛事结束后不久进行结算。 完全出于服务客户的目的，一些赌盘可能会在正式结果公布之前结算。 如果一个赌盘结算错误，本公司有权撤销结算。
                            </li><li> • 1.5.3.如果无法确定赛事结果，公司保留暂停任何赌盘结算的权利。
                            </li><li> • 1.5.4.除了不存在的赛事以外，公司将不会因任何赛事结果，球队名称或该赛事任何细节上的修改而对已结算72小时的投注项目作出更改。
                            </li><li> • 1.5.5.当官方赛果与本公司网站赛果版块公布的赛果之间有冲突时，应当通过参考本公司的有关赛事视频记录来确定正确的结果，以便解决冲突。 然而，如果没有此类适用的视频记录，应当根据特定赛事的相关主管机构在其官方网站上公布的赛果确定正确的结果。
                            如果该官方网站无法提供这一结果或者官方网站公布的赛果明显有错，则本公司有权做出决定/修正，以便确定最终的结果。 在此方面，本公司的决定是最终和具有结束性的。
                            </li><li> • 1.5.6.无论任何的项目在结束后出现后续的决定更改、抗议或上诉而引致的成绩变动，项目的获胜者将就根据项目结束时的成绩来确定投注的胜负。</li>
                        </ul>
                        <p>
                            <li> &nbsp;</li>

                        </p>
                        <h1>• 1.6.自动计时器接受功能</h1>
                        <p>• 1.6.1.对于某些可由本公司确定的赛事，客户可以利用计时器接受功能进行投注，选择菜单上的“计时器接受”按钮即可。 利用计时器接受功能所做的每次投注将有自己的倒计时，其持续时间将由本公司独家决定。 在计时器倒数完毕时，若没有下文1.6.2节所述任何妨害的情况出现，投注将会被接受。
                         <ul className={classes.helpCenterArticleColumn}>
                            <li> • 1.6.2.如果在计时器倒数结束前发生任何本节所述的妨害情况，所有使用计时器接受功能所做投注都将立即被取消；
                            </li><li> • 如果很可能或确实领得一张红牌；
                            </li><li> • 如果可能或确实被判罚一个点球；
                            </li><li> • 如果任何球队可能入球或取得入球；
                            </li><li> • 偶发事件包括但不限于，影响正确地下注、接受投注、记录或通告投注的任何设备或通讯中断，操作或传输延误或中断，通讯线路故障等。
                            </li><li> • 1.6.3.在使用计时器接受功能时，客户承认本网站上提供的当前分数、所用时间及其它数据虽然是由第三方以直播形式提供，但仍会有时间延迟以及/或者可能不准确的情况，并且根据这些数据做任何投注时，客户应自行承担所有风险。 本公司提供这些数据，并且不对客户因依赖这些数据而遭受的任何损失（直接或间接损失）负责。</li>
                             </ul>
                        </p>
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


BetRules.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRules))));