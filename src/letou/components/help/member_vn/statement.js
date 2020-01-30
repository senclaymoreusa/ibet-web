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
    logoHeader: {
        height: '20px',
        padding: '10px'
    },
    header : {
        fontSize: '24px',
        color: '#333333',
        position: 'relative',
        width: '100%',
        height: '75px',
        backgroundColor: '#f5f5f5',
        marginBottom: '50px',
        paddingLeft: 300,
        paddingTop: 20
      
    },
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

export class StatementVn extends React.Component {
    
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
                                <a href="/vi/for_member">Dành cho Đối tác >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Chia sẻ kế hoạch  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>Chương trình đại lý của LETOU là như thế nào?</h2>
						
                        Chào mừng bạn gia nhập hệ thống đại lý của LETOU!
						
                        <p> LETOU là một trong những nhà cái hàng đầu về lĩnh vực trò chơi trực tuyến tại Châu Á, cung cấp những trò chơi giải trí
                            hấp dẫn nhất trên thị trường Châu Á. Chúng tôi cung cấp đến Quý khách hệ thống hỗ trợ trực tuyến 24/7 giàu kinh nghiệm.
                            Chúng tôi cung cấp nền tảng giải trí chất lượng cao với dịch vụ khách hàng 24/7. Phần thưởng giành cho bạn mà không có bất
                            kì sự rủi ro hay chi phí nào thật đơn giản khi bạn chỉ cần giới thiệu bạn bè tham gia chơi trên trang web chúng tôi. 
							<a href="https://www.letou1.com">www.letou1.com</a> </p>
                        <p> LETOU được cung cấp hệ thống quản lý trong ngành ổn định và an toàn nhất. Mục tiêu hướng đến của chúng tôi đó là chia 
						sẻ lợi nhuận cao nhất có thể đến hệ thống đại lý của LETOU. Chúng tôi hoan nghênh chào đón các đại lý gia nhập hệ thống LETOU. 
						Letou có quyền quyết định cuối cùng cho các vấn đề tài chính đối với đại lý chi nhánh cho chiết khấu gian lận.</p>
                        <h2>Chiết khấu Hoa hồng</h2>
                        <p>Áp dụng cho các sản phẩm: Thể thao, Casino trực tuyến, Trò chơi &amp; Keno</p>
                        <div class="TableStyle3 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">Số thành viên hoạt động</td>
                                        <td class="Title">Số thành viên lệnh gửi tiền đầu tiên</td>
                                        <td class="Title">Lợi nhuận ròng</td>
                                        <td class="Title">Tỷ lệ % Hoa hồng</td>
                                    </tr>
                                    <tr>
                                        <td>5 thành viên </td>
                                        <td>Không yêu cầu</td>
                                        <td>1-128 triệu</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>6-30 thành viên</td>
                                        <td>3-15</td>
										<td>128 triệu-1,9 tỷ </td>
                                        <td>38%</td>
                                    </tr>
                                    <tr>
                                        <td>31-51 Thành viên</td>
                                        <td>16 - 34 Thành viên</td>
                                        <td>1,9 - 3,5 tỷ</td>
                                        <td>48% </td>
                                    </tr>
									<tr>
									    <td> 51 Thành viên trở lên </td>
										<td> 35 Thành viên trở lên </td>
										<td> 3,5 tỷ trở lên </td>
										<td> 55%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
								
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


StatementVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(StatementVn))));