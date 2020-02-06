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

export class MemberRuleSix extends React.Component {
    
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
                                <a href="/zh/for_partner">品牌介绍 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>乐投优势</h2>
                        <h1>优秀的国际专业博彩品牌优势</h1>
                        <p>乐投国际LETOU于2004年在菲律宾成立，公司的经营由菲律宾政府卡格杨河经济特区所授权和监管。10年老品牌，信誉优良，值得信赖，大额存提款轻松到位，大户首选，稳定安全，是您网上博彩的首选。</p>
                        <h1>极具竞争力代理制度</h1>
                        <p>只要四步骤，立即品味生活，享受成就。
                            <br /> 1. 注册账号后，申请成为高级代理人，完善个人信息。
                            <br /> 2. 联系代理专用QQ
                            <br /> 3. 洽谈合作细节，获取高收益分红计划。
                            <br /> 4. 完成开通账号，获取推广链结。</p>
                        <h1>全球最优质平台</h1>
                        <p>十年老品牌，值得您信赖。
                            <br /> 大额存提款轻松到位，大客户必选平台。
                            <br /> 提供业内所有优质游戏平台，精彩时光，瞬间开启。
                            <br />
                            <br />
                            <img src="http://i.imgur.com/dUnTJ3C.png" alt=""></img>
                            <img src="http://i.imgur.com/2E0DHdC.png" alt=""></img>
                            <img src="http://i.imgur.com/VFe5GuY.png" alt=""> </img>
                            <br />
                            <img src="http://i.imgur.com/5bJpJZr.png" alt=""></img>
                            <img src="http://i.imgur.com/ddSTWzD.png" alt=""></img>
                            <img src="http://i.imgur.com/IkaG8hp.png" alt=""></img>
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


MemberRuleSix.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleSix))));