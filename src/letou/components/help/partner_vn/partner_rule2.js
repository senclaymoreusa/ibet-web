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

export class MemberRuleTwoVn extends React.Component {
    
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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
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
                                <a href="/vi/for_partner">Dành cho Đối tác >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_partner">Chia sẻ kế hoạch >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>Chương trình đại lý</h2>
                        <p>Chương trình Đại lý là gì? Nó được định nghĩa là quan hệ đối tác lẫn nhau giữa Letou và Đại lý. 
						   Bắt đầu kiếm hoa hồng bằng cách mời thành viên mới chơi trên trang web. Letou sẽ chia sẻ lợi nhuận với bạn dựa trên hiệu suất của bạn
						   Letou luôn khuyến khích các đại lý của letou phát triển mạng lưới thành viên của mình. Bằng cách cung cấp dịch vụ tốt nhất </p>
						<ol class="HelpCenterArticleColumn">
                            <p>1. Nhiều nền tảng chơi game
							   2. Dịch vụ độc quyền
							   3. Dịch vụ hoa hồng Đại lý an toàn và nhanh chóng 
                               4. Giao diện quản lý tài khoản thân thiện với người dùng 
                               5. Các nguồn thông tin thị trường và kênh quảng cáo mới nhất</p>
							
						</ol>&nbsp;
                        <h2>Làm thế nào để tôi bắt đầu?</h2>
						
                        <ol class="HelpCenterArticleColumn">   
                            <p>1.Truy cập vào trang website: <a href="https://affiliates.letou.com/">affiliates.letou1.com</a>. Đăng ký ngay tài khoản Đại lý để trở thành đối tác của Letou
                               2. Letou sẽ liên hệ với bạn trong vòng 48h để xác minh thông tin và kích hoạt tài khoản đại lý cho bạn
							   3. Bạn cần hỗ trợ thông tin đại lý có thể liên hệ với chúng tôi qua</p>
						<ul>
									<p>* Zalo: +84374785501 
									   * Skype: vn.affiliate@letou.com 
									   * Email: vn.affiliate@letou.com  </p>
						</ul>
                        </ol>
						
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


MemberRuleTwoVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleTwoVn))));