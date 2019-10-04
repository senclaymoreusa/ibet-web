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

export class MemberRuleFour extends React.Component {
    
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
                        <h2>乐投国际合作伙伴计划</h2>
                        <p>在乐投的所有平台中，每月您将得到最高40%的高额利润且每月定期发送。 加入“乐投国际合作伙伴计划”若有任何疑问，请咨询代理专员。</p>
                        &nbsp;
                        <h2>佣金提取的条件</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>1. 当月保持至少6位活跃下线用户投注。</li>
                            <li>2. 任何阻碍公司正常营运等手段都要禁止，审核期间将暂停合作关系，若有违规行为，将永久冻结账户。</li>
                            <li>3. 如果合作伙伴在6个月内未达到预期表现，LETOU将会直接取消合作协议。代理专员会在3个月期间与您做专访协助。</li>
                            <li>4. 每月5-9号系统将自动生成上个月代理佣金账单。10-19号为对账时间。如代理对佣金账单无异议，每月20号可以申请提款上一个月的佣金。（1月份佣金，2月5-9号生成佣金账单，2月10日-2月19日为对账时间。2月20号，代理可登陆平台申请提取佣金。）</li>
                            <li>5. 代理用户帐户余额必须满100元，不足100元佣金会累积到100元才可以提款。有效活动用户定义为：玩家通过您的代理专属链接登录LETOU，或在注册过程中填写您的专属代理编码，并且该用户是首次注册LETOU并成功存款的，视为有效新注册会员。</li>
                            <li>※ 如当月的收入为负值，，佣金则不产出，累计之下月可计算出正值佣金为止。。如当月的结算为盈利，及能达到提款的最小要求，LETOU将会支付佣金。</li>
                        </ul>
                        &nbsp;
                        <h2>佣金支付参考</h2>
                        <p>LETOU会根据合作伙伴下级会员每月在LETOU的各个平台的净赢利，按百分比计算佣金。
                            <br/> 您将抽取您所推荐的合作客户的纯利润30%~40%的中介费用。
                            <br/>
                            <br/> 纯利润被界定为：所有被我们收到的合作客户的有关已结算投注的总金额数在扣除以下项目后
                        </p>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. 支付给合作客户的所赢得的彩金</li>
                            <li>• 2. 以博彩税收（或相关合理条款）形式所支付的款项</li>
                            <li>• 3. 坏账款项</li>
                            <li>• 4. 欺诈款项</li>
                            <li>• 5. 被返还的本金金额</li>
                            <li>• 6. 在银行卡持有人银行的指示下被收回的款项交易（一般来说指那些被银行收回的付款）</li>
                            <li>• 7. 无效投注和</li>
                            <li>• 8. 投注／存款奖金</li>
                        </ul>
                        <p>合作者有资格领取他们在体育投注、娱乐场、游戏或快乐彩金额中所获得的佣金。无论是在体育投注、娱乐场、扑克牌、游戏或快乐彩，负值的佣金额将会被从有效的佣金中扣除。</p>
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


MemberRuleFour.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleFour))));