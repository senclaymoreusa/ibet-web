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
    aboutUsDetail : {
       fontSize: '14px',
    },
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class MemberRuleTwo extends React.Component {
    
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
                    <div id="HelperCenterDetail">
                        <h2>合作经营</h2>
                        <p>合营计划是什么？简单来说，就是您与乐投国际之间的一种互会的合作伙伴关系。通过推荐有效的客户来到乐投国际进行投注，便可以获得相应收益和提成。当然，操作起来也是非常容易的，只要根据您所介绍的客源来分摊收益，乐投国际将根据您推荐来的客户所产生的收益来支付您的合营酬金！</p>
                        <p>&nbsp;</p>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 乐投国际鼓励所有代理全力发展自己的下线业务，并且为您提供最贴心的5项优质服务！</li>
                            <li>• 1. 七大平台服务</li>
                            <li>• 2. 人性化的专人服务</li>
                            <li>• 3. 安全迅捷的代理提成服务</li>
                            <li>• 4. 人性化的管理页面服务</li>
                            <li>• 5. 最新市场信息及推广资源服务</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>
                            <br/> &nbsp;
                        </p>
                        <p>&nbsp;</p>
                        <h2>我要如何开始实行？</h2>
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>• 1. 立即
                                {/* <a style="cursor: pointer" onclick="getAffDomain()">成为合作伙伴</a>  */}
								<a href="https://affiliates.letou.com/cn/" target="_blank">成为合作伙伴</a>
                            </li>
                            {/* <!--<li>• 2. 任何代理咨询请联系在线客服 </li>--> */}
							<li>• 2. 代理专员QQ：3007282086</li>
                            <li>• 3. 代理专员Skype：swifind</li>
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


MemberRuleTwo.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleTwo))));