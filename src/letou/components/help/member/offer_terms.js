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


const styles = () => ({
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

export class OfferTerms extends React.Component {
    
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
                                    <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/zh/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/zh/for_member">优惠活动条款  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>优惠活动条款</h2>

                        <p>乐投国际会定期与不定期举办各种优惠活动，在您参与前，您必须完全同意以下规则和遵循以下义务：</p>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li>1. 您必须已经是乐投国际会员且必须同意我们的“乐投国际服务条款”方有参与本活动资格。</li>
                            <li>2. 活动资格与奖励无法转让。</li>
                            <li>3. 同一帐户／家庭／户籍地址／电邮地址／电话号码／付款账号（如借记卡／信用卡账号等）／ IP地址／共享计算机环境，仅限于优惠一次。</li>
                            <li>4. 领取该红利用户在完成相应红利流水活动期间，必须从本机物理IP地址登陆，凡是隐藏客户真实身份，使用VPN，代理服务器或云服务器登陆者，一律没收所发放红利。</li>
                            <li>5. 小游戏平台的桌面游戏、21点类游戏以及视频扑克均不计算为有效流水。</li>
                            <li>6. 乐投国际有权单方面决定会员是否利用优惠活动进行异常或无风险投注。对会员行为做出严格监视，发现有任何违背、欺骗、或利用规则与条款进行非法获利的会员，乐投国际有权终止会员的登陆、暂停会员使用网站和没收奖金及赢利的权力，无须特别通知。</li>
                            <li>7. 活动如有任何异动，乐投国际有权在任何时间，修改、暂停或取消优惠活动。</li>
                            <li>8. 会员参与本活动时，乐投国际将默认同意并遵守活动条款等相关规定，若用户有异议，可申请放弃此活动参加资格。</li>
                            <li>9. 乐投国际具有解释奖金授予事项及规则与条款的权力。</li>
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


OfferTerms.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(OfferTerms))));