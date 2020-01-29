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

export class MemberRuleFourVn extends React.Component {
    
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
                                <a href="/vi/for_partner">Dành cho Đối tác  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_partner">Chia sẻ kế hoạch>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>Chương trình đại lý LETOU </h2>
                        <p>Với chương trình Đại lý Letou, các đại lý sẽ có cơ hội để nhận được chiết khấu hoa hồng lên đến 55% hàng tháng
						Phần trăm hoa hồng đại lý sẽ được dựa vào doanh thu từ tất cả các khách hàng của đại lý đang đặt cược tại Letou 
						và thỏa mãn những điều kiện để nhận thanh toán hoa hồng 
						Với 55% hoa hồng đại lý, lợi nhuận hoa hồng sẽ dựa vào 55% và được tính trên tổng số tiền thắng cược ròng của 
						Công ty (tiền cược sau khi trừ đi mọi chi phí) sẽ là số tiền hoa hồng đại lý. 
						Ít nhất 05 thành viên hoạt động trong tháng (Nếu số thành viên hoạt động ít hơn 5 thành viên sẽ không được 
						tính hoa hồng) thì đại lý sẽ có cơ hội nhận được hoa hồng từ Letou. Phần trăm hoa hồng tăng hay giảm phụ thuộc vào số
						lượng thành viên hoạt động và số tiền thua cược từ tất cả các khách mà đại lý kiếm được trong tháng. 
						Nếu tài khoản đại lý có lợi nhuận hoa hồng là số âm trong tháng (Lợi nhuận số âm: Là số tiền nợ của Đại lý với Công ty).
						Thì số tiền âm đó sẽ được chuyển sang những tháng tiếp theo để khấu trừ cho đến hết thì đại lý mới được tiếp tục nhận hoa hồng.</p>
							
                     <h2>Kế hoạch hoa hồng</h2>
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
                                        <td>6 - 30 thành viên</td>
                                        <td>3 - 15</td>
										<td>128 triệu - 1,9 tỷ </td>
                                        <td>38%</td>
                                    </tr>
                                    <tr>
                                        <td>31 - 51 Thành viên</td>
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
                        
                            <p>Công thức tính hoa hồng.
                             Lợi nhuận ròng = [(Tiền thua của khách x 85%)- (Tiền gửi + tiền rút)x 1,5%) - Tiền thưởng khách nhận
							 Tiền hoa hồng = Lợi nhuận ròng x tỷ lệ % hoa hồng </p>
                        
                        <h2>Phương thức thanh toán </h2>
						<p> - Tiề  n hoa hồng sẽ được thanh toán theo tiền tệ VĐN.
						    - Tiền hoa hồng sẽ được thanh toán cho Đại lý vào ngày 20 hàng tháng.
						    - Letou có quyền thay đổi hoặc chỉnh sửa các điều khoản bên trên hoặc thêm bất kỳ điều khoản nào trong trường hợp cần thiết.
						    - Letou có quyền hủy bỏ quyền Đại lý tại bất kỳ thời điểm nào mà không cần thông báo trước trong trường hợp các tài khoản đại lý không đáp ứng được yêu cầu của Letou đưa ra trong một thời gian nhất định.
						    - Letou không chấp nhận gian lận, nếu phát hiện Đại lý có hành vi,vi phạm các nguyên tắc của chúng tôi. Letou có quyền hủy bỏ quyền Đại lý tại bất kỳ thời điểm nào mà không cần báo trước
                        </p>
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


MemberRuleFourVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleFourVn))));