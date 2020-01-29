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

export class MemberRuleThree extends React.Component {
    
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
                        <h2>LETOU的权利</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. LETOU加盟计划属于一种合作营销计划，一项寻找“合作伙伴”的活动，鼓励拥有自己网站的个人及公司，推广我们这个最优质且具高度信用的博彩公司。成为乐投国际代理商为LETOU提供客户，即可从中获得相应的回报。</li>
                            <li>• 2. 在任何时间里，LETOU可以修改协议书上的任何条例，LETOU会以电邮、刊登公告或新协议等方法通知合作伙伴。修改内容可包括如下：现有的净输／赢范围、佣金回报百分比、付款程序、及参考计划条例。如协议有任何修改而合作伙伴不接受，合作伙伴可终止合同。如修改后合作伙伴不作任何异议，将视作默认所有修改，合作伙伴便必须遵守更改内容所列举的事项。</li>
                            <li>• 3. LETOU可根据本公司的发展，需要及发现合作伙伴有任何有损LETOU利益的行为发生，随时终止与合作伙伴的合作关系，或者在任何使用不诚实的方法以骗取LETOU佣金将会被永久冻结账户，所有佣金一概不予发还。</li>
                            <li>• 4. LETOU有权要求合作伙伴在一些问题处理过程中提供相关的有效证明及证件。</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>LETOU的义务</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. LETOU会对合作伙伴的表现定期审核，审核时间是从接受申请加入计划的时间开始计算，若多月无法持续满足相关条件，将由公司代理计划组进行审核，审核之结果将以邮件形式通知，提醒合作伙伴对于该代理帐户的维护。</li>
                            <li>• 2. LETOU会登记合作伙伴的下级会员并会观察他们的投注状况，并且绝不会泄漏合作伙伴与下级会员的个人资料。</li>
                            <li>• 3. 每月初LETOU会以邮件的形式通知合作伙伴的佣金金额，在合作伙伴回复邮件确认无误后，LETOU会为合作伙伴支付到其银行账户中。</li>
                            <li>• 4. 有关合作伙伴对于一些问题的提出及建议，LETOU给予解答帮助和收集整合建议。</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>合作伙伴的权利</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. 合作伙伴若对自己账户有任何质疑可进行咨询，并要求LETOU给予合理的解释。</li>
                            <li>• 2. 合作伙伴对于自身的发展需要可对LETOU进行合理化建议。</li>
                            <li>• 3. 合作伙伴提出合理理由后有权要求LETOU负责专员对其帐户进行信息修改。</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>合作伙伴的义务</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. 代理必须对线下的会员数据进行保密，不得发布下线会员的姓名数据、下注情况以及输赢情况等，代理所推荐的会员不能开设多于一个的账户。</li>
                            <li>• 2. 合作伙伴需尽其责任及力量广泛地宣传、销售及推广LETOU，以求使合作伙伴及LETOU利润最大化。合作伙伴必须在不违反法律情况下，以正面形象宣传、销售及推广LETOU。</li>
                            <li>• 3. 代理／合作伙伴需自行承担对其会员宣传、销售及推广LETOU的费用并且不得使用未被授权的LETOU广告（广告词）及连接。</li>
                            <li>• 4. 代理不能在自己名下重复注册账号，成为自己的下线，如经发现，冻结处理。</li>
                            <li>• 5. 代理不得利用对冲或群体对冲之模式套取佣金，该情况稽查不限于本公司内网发生之情况，还包含系统供货商之所有营运网站。此行为将被认定为不诚实骗取LETOU佣金的行为。</li>
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


MemberRuleThree.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleThree))));