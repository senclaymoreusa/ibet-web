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
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class SafeBet extends React.Component {
    
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
                                <a href="/for_member">维护账户安全  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>理性博彩</h2>

                        <p>我们以提供最佳在线博彩，并为此提供竭诚的服务，倾全力为顾客营造一个良好的网上娱乐环境并且衷心希望顾客能在这里获得最佳娱乐体验。</p>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li> 作为有声誉有责任感的博彩公司，我们希望阁下您在尽情享受网站服务的同时调整好您的心态。</li>
                            <li> 为了协助您进行理性博彩，我们确保工作人员接受理性博彩意识的培训。如需更多信息或协助请联系客户服务部。</li>
                        </ul>
                        <h2>未满博彩年龄</h2>

                        <p>未满18岁的人士进行博彩属非法行为，LETOU会在此方面绝对严格执行。我们会对客户进行年龄验证，并可能要求其上交补充档。对任何未满18岁人士使用此网站所获得的彩金，一旦发现，将被没收并上报有关部门处理。阁下必须超过18岁（或在阁下居住的管辖范围内不被视为未成年人）才可进入此网站。任何未满18岁的人不得在我们网站开户和投注，LETOU以严谨的态度看待和处理此问题。
                         </p>
                         <ul className={classes.helpCenterArticleColumn}>
                            <li> 以下是为预防未成年人访问在线游戏网站的一些参考网站：
                            </li>
                            <li>
                            <a href="http://www.gamblock.com">www.gamblock.com</a></li>
                            <li>
                            <a href="http://www.safekids.com">www.safekids.com</a>
                            </li>
                            <li>
                            <a href="http://www.surfcontrol.com">www.surfcontrol.com</a></li>
                            <li>
                            <a href="http://www.netnanny.com">www.netnanny.com</a></li>
                        </ul>

                        <h2>不适用人群</h2>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li>另请注意，我们网站不适用于以下人群：</li>
                            <li>1. 年龄在18周岁以下。</li>
                            <li>2. 在所属司法中，低于其合法年龄。</li>
                            <li>3. 当地司法规定，访问我们网站属不合法行为。LETOU无法辨认客户行为在当地司法是否属合法，客户本人有责任自行甄别。</li>
                            <li>4. LETOU员工与LETOU员工亲属（"亲属"指配偶，伴侣，父母，子女或兄弟姐妹），或在离职6个月期限内的任何LETOU相关前雇员，前雇员亲属。（包括任何与LETOU关联的）</li>
                        </ul>

                        <p>&nbsp;</p>

                        <h2>赌博问题防护</h2>

                        <p>我们强烈建议阁下定期审视您的博彩行为，检验自己是否投入过度。如果您感到可能会有博彩方面的问题，请首先回答以下问题：</p>
                        <ul className={classes.helpCenterArticleColumn}>
                              <li> - 有否曾因赌博而耽误工作时间？</li>
                              <li> - 有无人曾经批评过您进行赌博？</li>
                              <li> - 赌博有否令您的生活不愉快？</li>
                              <li> - 赌博有否影响您的声望？</li>
                              <li> - 赌博之后，您是否感到自责？</li>
                              <li> - 阁下有否曾经用赌博所赢得的钱来还债，或者解决财政因难？</li>
                              <li> - 赌博有否导致您的抱负及效率减低？</li>
                              <li> - 输钱后，您是否感觉您必须一定要尽快回来赚回您所失去的？</li>
                              <li> - 赢钱后，您是否有一种强烈的欲望，回来赢得更多？</li>
                              <li> - 是否时常赌博至分文都用尽？</li>
                              <li> - 您是否借钱，作赌博之用？</li>
                              <li> - 您是否出卖任何对象，作赌博之用？</li>
                              <li> - 您是否不愿意用 "赌本" 来付正常的开支？</li>
                              <li> - 您是否很不情愿将赌博用的钱使用在其他地方？</li>
                              <li> - 赌博是否令您疏忽您自己及您家人的健康快乐？</li>
                              <li> - 您是或否独自一人长时间赌博？</li>
                              <li> - 您是否花比预计更多的时间在赌博上？</li>
                              <li> - 您是否曾经因为试图掩饰您在赌博方面花费的时间和金钱而撒谎？</li>
                              <li> - 您是否以赌博来逃避忧虑及困难？</li>
                              <li> - 您是否犯罪或考虑犯罪，为赌博筹备资金？</li>
                              <li> - 赌博有否令您有睡眠的困难？</li>
                              <li> - 围绕您的争执、失望或挫败有否造成赌博的推动力？</li>
                              <li> - 您是否为数小时的赌博而有冲动去庆祝好运？</li>
                              <li> - 您是否因赌博的结果而自毁或自杀？</li>

                              <li> 若您对至少7个以上的问题的回答是"是"，您可能在博彩上存在风险，请寻求家庭支持和专业网站进行咨询。</li>
                        </ul>
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


SafeBet.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(SafeBet))));