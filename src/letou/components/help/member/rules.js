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

export class Rules extends React.Component {
    
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
                                <a href="/zh/for_member">体育规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>投注规则与规定</h2>

                        <p>某些赛事和赌盘有不同的规则，下述内容为适用于所有赛事和赌盘/投注类型的一般规则，必须完全遵守。在适用的情况下，本公司网站公布的“条款和条件”中所列规定与定义应当适用于本“投注规则与规定”。</p>

                        <p>&nbsp;</p>

                        <h2>一般投注规则与规定</h2>

                        <p>※本公司的所有投注信息都是出于诚意提供的。 不过，本公司不对有关日期、时间、地点、竞争对手、赔率、结果、统计数据、团队制服（显示在实时比分中）或其它投注信息的任何错误或遗漏负责。本公司保留纠正任何明显错误的权利，并且应当采取所有合理行动确保以诚信透明的方式管理赌盘，赌盘定义为针对某一体育赛事所提供的不同的投注类型。公司保留做出最终性决定的权利。
                         </p>
                         <ul className={classes.helpCenterArticleColumn}>
                             <p></p>
                            <li> ※如果盘口结果不能确定为官方结果，本公司有权延迟结算直至官方结果确定。</li>
                            <p></p>
                            <li> ※如果盘口结果在公布前已被公众知晓结果，本公司有权宣布投注无效。 </li>
                            <p></p>
                             <li> ※如有任何明显的比分显示错误，或者价格计算错误本公司有权宣布投注无效,包括如赔率高出盘口平均值的100%的显示错误。
                            </li>
                            <p></p>
                            <li> ※如盘口关盘，比赛正常进行， 所有盘口以最终结果进行结算。如果盘口结果不为官方结果，本公司有权宣布赛果无效。
                            </li>
                            <p></p>
                            <li> ※如结算错误，本公司有权在任何时间进行更正。
                            </li>
                            <p></p>
                            <li> ※如违反一般体育规则，本公司有权宣布投注无效（如不正常的比赛时间长度，计分方式以及比赛形式等）。
                            </li>
                            <p></p>
                            <li> ※任何与我们提供的比赛信息规则或形式不同，我们有权宣布投注无效。
                            </li>
                            <p></p>
                            <li> ※就未完成比赛或未能如期举行比赛（如取消资格，中断，退出比分更改等）所有未决定的比赛将视为无效。
                            </li>
                            <p></p>
                            <li> ※如果网站对赛事所用的英语和非英语名称之间有任何差异，以英语版本为准。
                            </li>
                            <p></p>
                            <li> ※在任何时候，客户有责任了解比赛分数和所有相关的比赛信息，并且建议客户在下注之前确认比赛状况。
                            </li>
                            <p></p>
                            <li> ※本公司有权在任何时候出于任何原因修改这些规则。一旦在网站上发布，任何此类修改都是具有约束性和立即生效的。
                            </li>
                            <p></p>
                            <li> ※客户承认网站上提供的当前分数、所用时间及其它数据虽然是由第三方以“直播”形式提供，但仍会有时间延迟以及/或者可能不准确的情况，并且根据这些资料做任何投注时，客户应自行承担所有风险。本公司提供这些数据时，不保证其准确性、完整性或及时性，并且不对客户因依赖这些数据而遭受的任何损失（直接或间接损失）负责。
                            </li>
                            <p></p>
                            <li> ※如因官方赛果更改或其他原因导致的注单结算错误，本公司有权在合理时间內依据最终赛果进行二次结算。
                            </li>
                            <p>&nbsp;</p>
                            <li> ※ 当以下情况出现时，本公司有权宣布投注无效或扣留返还资金： </li>
                            <p>&nbsp;</p>
                            <li> 1.赛事被幕后操纵或公平及公正程度受到质疑 </li>
                            <li> 2.赔率或彩池受到操控 </li>
                            <li> 3.同一个或同一组人进行相同选项的一连串投注行为 </li>
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


Rules.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Rules))));