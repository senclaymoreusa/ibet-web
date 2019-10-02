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

export class FootballRules extends React.Component {
    
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
                                <a href="/for_member">体育规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>重要提醒</h2>

                        <p>※所有盘口若无特别声明，只限于规定时间内(regular time)之结果（如果有标注半场、上半场、加时赛或点球对决时不在此限）。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> ※如比赛中断并在开球后的48小时之内复赛，所有盘口按最终结果进行结算。若不在48小时内，则所有未结算之盘口将取消。</li>
                            <li> ※除非有特别声明，否则所有赛事的盘口都基于90分钟规定时间比赛的结果。在此，90分钟赛事包括伤停补时，但不包括加时赛、金球(golden goal)和点球(penalty shootout)所用时间。</li>
                            <li> ※若球赛原定的比赛时间异于常规时间（如各种锦标赛，青年队，后备队或友谊赛的特别比赛时间），所有投注将依照该场比赛的最终完场时间来结算。</li>
                            <li> ※本公司提供信息（例如中立场地、红牌、计时、统计信息、日期、生效日期等）服务，同时不接受任何相关责任。客户有责任确认任何比赛的正确信息。</li>
                            <li> ※对于现场投注，在一场比赛中，本公司可自行全权认定可能会影响一支球队或一名球员的得分、结果、表现的危险行为；或者批准改变赔率/赌金或赌盘或投注信息（“危险比赛”），本公司有权暂停接受投注并且可以在“危险比赛”后接受或拒绝投注。在一场比赛中的所有其它行为都被视为安全比赛，投注仍会被接受。</li>
                            <li> ※对于大多数比赛（由本公司决定）的现场投注，可在第90分钟以及任何伤停时间内下注。但在比赛进行后的第85分钟或常规比赛时间结束前的最后五分钟（以适用于一场比赛者为准），任何除了本节中所述行为以外的行为将被视作安全比赛，因此所有待定的投注都可被接受：在大禁区中或附近进行比赛；判罚点球；以及本公司认定为危险（可能进球）的任意球。</li>
                            <li>※对于现场投注，在裁判宣布半场以及/或者全场比赛时间结束的一刻，所有待定的投注都会被自动拒绝。</li>
                            </ul>
                        </p>

                        <p>&nbsp;</p>

                        <h2>罚牌分(bookings)</h2>

                        <p>※一张黄牌计数为1分，一张红牌或黄牌转红牌计数为2分。第二张黄牌或第二张黄牌转红牌给同一球员则不计算。因此一名球员不能有超过三张罚牌数。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> ※根据常规赛时90分钟内现有的罚牌进行结算。</li>
                            <li> ※任何在比赛完场结束后出示的罚牌不计入内。</li>
                            <li> ※对非参赛球员（例如：已下场队员、球队经理或没有上场的替补队员）所出示的罚牌不计入总罚牌分。</li>              
                            </ul>
                        </p>

                        <p>&nbsp;</p>

                        <h2>罚牌点数(booking points)</h2>

                        <p>※一张黄牌计分为10点，一张红牌或黄牌转红牌计分为25点。第二张黄牌或第二张黄牌转红牌给同一球员则不计算。因此一名球员不能有超过35分罚牌分。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> ※根据常规赛时90分钟内现有的罚牌进行结算。</li>
                            <li> ※任何在比赛完场结束后出示的罚牌不计入内。</li>
                            <li> ※对非参赛球员（例如：已下场队员、球队经理或没有上场的替补队员）所出示的罚牌不计入总罚牌点数。</li>
                            </ul>
                        </p>

                        <p>&nbsp;</p>

                        <h2>角球盘口</h2>

                        <p>※判罚后未开出的角球不计入内。</p>

                        <p>&nbsp;</p>

                        <h2>下一得分球员</h2>

                        <p>※乌龙球将不予计入结算。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> ※从开球后所有参与比赛或此前进球的球员视为参赛者。</li>
                            <li> ※所有参与比赛的球员都计入在内，如因任何原因未列球员进球，所有就列明球员投注继续有效。</li>
                            <li> ※如没有明确的证据证明英国国家通讯社的资料有误，投注结算将以英国国家通讯社（Press Association）公布的资料为根据。</li>
                            
                        </ul>
                        </p>
                        <p>&nbsp;</p>

                        <h2>进球区间盘口</h2>

                        <p>※盘口的结算基于电视中显示的时钟时间为准。如果无法取得，进球时间根据比赛时间来考虑。</p>
                            <li> ※盘口的结算基于球越过线，而不是造成进球的时间。</li>
                        

                        <p>&nbsp;</p>

                        <h2>结算与取消规则</h2>

                        <p>※如发生下列情况：进球，红牌或黄牌及罚球，盘口仍开放，我们有权利宣布投注无效。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> ※如果开出的盘口有遗漏或错误的罚牌，我们有权利宣布投注无效。</li>
                            <li> ※如在错误的比赛时间（超过五分钟）开出赔率，我们有权利宣布投注无效。</li>
                            <li> ※如果显示结果错误，我们有权宣布取消这一时间的所有盘口。</li>
                            <li> ※如比赛中断并未能在开球后的48小时之内复赛，所有投注视为无效。</li>
                            <li> ※如球队名称或类别显示错误，我们有权利宣布投注无效。</li>
                            </ul>
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


FootballRules.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(FootballRules))));