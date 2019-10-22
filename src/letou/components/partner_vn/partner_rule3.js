import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import InfoSelect from "../info_select";
import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


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

export class MemberRuleThreeVn extends React.Component {
    
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
                                    <a href="/vn/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vn/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vn/for_partner">Dành cho Đối tác >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vn/for_partner">Chia sẻ kế hoạch>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Nghĩa vụ của LETOU</h2>
                        <ul class="HelpCenterArticleColumn">
                            <p>	1. Letou sẽ xem xét lại các hoạt động theo định kỳ từ ngày Đại lý hoạt động. Bộ phận Đại lý của Letou sẽ tiến hành
                                xem xét, thông báo kết quả thông qua email và tạm ngưng tài khoản nếu Đại lý không đáp ứng các yêu cầu trong nhiều
                                tháng liên.</p>
								<br/>2. Letou sẽ theo dõi các hoạt động cá cược của các thành viên, đảm bảo thông tin cá nhân tuyệt đối.
								<br/>3. Letou sẽ thông báo tới các Đại lý khoản hoa hồng thông qua email hoặc chuyển trực tiếp đến số tài khoản ngân hàng
                                xác nhận của Đại lý.
								<br/>4. Đại lý trở thành đối tác của Letou. Đại lý sẽ nhận được % hoa hồng từ 30% đến 55% dựa trên số lượng khách tham gia đặt cược
								Và dựa trên số tiền thua cược của các thành viên..
								<br/>6. Với 5 thành viên hoạt động trở lên, Lợi nhuận ròng đại lý dương. Đại lý sẽ được xét duyệt tỷ lệ % hoa hồng. Nếu Lợi nhuận ròng của bạn là âm
								như vậy tiền hoa hồng của bạn âm. Hoa hồng âm của bạn sẽ được cộng dồn sang tháng tiếp theo..
								<br/>7. Hoa hồng đại lý sẽ tự động chốt danh sách hoa hồng của tháng trước ngày 05 đến ngày 09 sẽ gửi đối chiếu lại với các đại lý từ ngày 10 đến 19
								hàng tháng. Ngày 20 hàng tháng đại lý có thể làm lệnh rút tiền hoa hồng của tháng trước đó.
								<br/>8. Letou sẽ giải đáp và tổng hợp các đề xuất từ các Đại lý.
                        </ul>
                        <h2>Quyền lợi Đại lý</h2>
                        <ul class="HelpCenterArticleColumn">
                            <p>	1. Đại lý có thể yêu cầu Letou cung cấp các giải đáp hợp lý cho bất cứ tài khoản liên kết nào với Đại lý.
								2. Đại lý có thể gợi ý các đề xuất để phát triển tài.
								3. Đại lý có thể yêu cầu sửa đổi thông tin tài khoản được cung cấp với lý do chính đáng mà Letou chấp .
								4. Đại lý có số lượng thành viên hoạt động tích cực từ 5 (năm) thành viên trở lên Đại lý sẽ được nhận tiền hoa hồng..</p>
                        </ul>
                        <h2>Nghĩa vụ của Đại lý</h2>
                        <ul class="HelpCenterArticleColumn">
                            <p>	1. Đại lý phải tuyệt đối giữ kín thông tin cá nhân của các thành viên tham gia trên trang Web. Đại lý không được phép
                                tiết lộ thông tin cá nhân, hoạt động cá cược, Thắng/thua,…Các thành viên trên Đại lý không được sử dụng nhiều tài
                                khoản.
								2. Đại lý chịu trách nhiệm thúc đẩy trang Letou giúp mang lại lợi nhuận cao cho cả hai bên mà không vi phạm bất cứ
                                pháp luật nào.
								3. Đại lý chịu trách nhiệm chi phí quảng cáo và không được sử dụng bất cứ quảng cáo nào mà chưa có sự đồng ý từ phía
                                Letou.
								4. Tài khoản Đại lý không được phép thực hiện các giao dịch hoặc có hoạt động cá cược. Đại lý có thể đăng ký là thành
                                viên cho mục đích cá cược mà không phải là thành viên đại lý.
								5. Đại lý không được phép thực hiện các cược chéo để tạo tiền hoa hồng trong mạng lưới các nhà cung cấp trò chơi của
                                Letou. Hành động này sẽ bị coi là gian lận. </p>
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


MemberRuleThreeVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleThreeVn))));