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
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
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
    }
})

export class Identity extends React.Component {
    
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
                                <a href="/zh/for_member">维护账户安全 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>身份核实</h2>

                        <p>当客户遇到无法自行通过身份验证或其它特殊问题无法正常解决，需要通过人工服务方法进行处理时，我们将对您的身份进行核实。当需要您发送身份证数据时，针对身份证数据的内容及格式要求如下：
                            
                        </p>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li>1. 证件要求原件拍摄，照片不得涂改，需确保完整、水印、文字、图片、证件号码清晰可辨。</li>
                            <li>2. IC版证件需要同时提交正反二面。</li>
                            <li>3. 如是一代身份证，证件上需有有效盖章。</li>
                            <li>4. 证件有效期在3个月内的不予受理。</li>
                            <li>5. 户口本需要正面打开盖有两个章的那页,及本人信息的那页。</li>
                            <li>6. 申请人帐户真实姓名和证件号码与提交的证件信息一致。</li>
                            <li>7. 证件都需要彩色原件的数码照片。</li>
                        </ul>

                        <p>&nbsp;</p>

                        <h2>温馨提示</h2>

                        <p>&nbsp;</p>

                        <ul className={classes.helpCenterArticleColumn}>
                            <li>1. 如果您没有身份证，则可提供在有效期内的临时身份证、户口本、护照、军人身份证、武装警察身份证、港澳台身份证、港澳台通行证等有效证件的清晰照片。</li>
                            <li>2. 您可以使用数码相机、手机或较高像素摄像头拍下身份证，并上传到您的计算机保存为jpg、gif、png或jpeg的格式，就可以是有您的电子邮箱发送邮件给我们了。</li>
                            <li>3. 发送证件照片时，请说明您需要处理的事项，此次发送照片，仅会处理您此次所需处理的事项。乐投公司绝不会泄露您的证件信息，请您放心！</li>
                        </ul>

                        <p>&nbsp;</p>

                        <h2>证件清晰度图示（以二代证为例）</h2>

                        <p>正面清晰：</p>
                            
                            <img src="http://i.imgur.com/3OJMHCO.jpg" alt = ""></img>
                        <p>正面不清晰：</p>
                           
                            <img src="http://i.imgur.com/GBZgmPI.jpg" alt = ""></img>
                        

                        <p>背面清晰： </p>
                            
                            <img src="http://i.imgur.com/m33bGbm.jpg" alt = ""></img>
                       

                        <p>背面不清晰：</p>
                           
                            <img src="http://i.imgur.com/uuWYLSQ.jpg" alt = ""></img>
                        
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


Identity.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Identity))));