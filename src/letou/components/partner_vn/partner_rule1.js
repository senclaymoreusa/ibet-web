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

export class MemberRuleOne extends React.Component {
    
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
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_partner">Dành cho Đối tác >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_partner">Chia sẻ kế hoạch >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Chương trình đại lý của LETOU là như thế nào?</h2>
						<p>Chào mừng bạn gia nhập hệ thống đại lý của letou!</p>
						Letou là một trong những nhà cái hàng đầu về lĩnh vực trò chơi trực tuyến tại Châu Á, cung cấp những trò chơi giải trí
                        hấp dẫn nhất trên thị trường Châu Á. Chúng tôi cung cấp đến Quý khách hệ thống hỗ trợ trực tuyến 24/7 giàu kinh nghiệm.
                        Chúng tôi cung cấp nền tảng giải trí chất lượng cao với dịch vụ khách hàng 24/7. Phần thưởng giành cho bạn mà không có bất
                        kì sự rủi ro hay chi phí nào thật đơn giản khi bạn chỉ cần giới thiệu bạn bè tham gia chơi trên trang web chúng tôi.<a href="https://www.letou1.com">www.letou1.com</a>
                        Letou được cung cấp hệ thống quản lý trong ngành ổn định và an toàn nhất. Mục tiêu hướng đến của chúng tôi đó là chia 
						sẻ lợi nhuận cao nhất có thể đến hệ thống đại lý của Letou. Chúng tôi hoan nghênh chào đón các đại lý gia nhập hệ thống Letou. Letou có quyền quyết định cuối cùng cho các vấn đề tài chính đối với đại lý chi nhánh cho chiết khấu gian lận.
                        <h2>Chiết khấu Hoa hồng</h2>
                        <p>Áp dụng cho các sản phẩm: Thể thao, Casino trực tuyến, Trò chơi &amp; Keno</p>
                        <div class="TableStyle3 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">Số thành viên hoạt động </td>
                                        <td class="Title">Số thành viên lệnh gửi tiền đầu tiên</td>
                                        <td class="Title">Lợi nhuận ròng</td>
                                        <td class="Title">Tỷ lệ % Hoa hồng</td>
                                    </tr>
                                    <tr>
                                        <td>5 thành viên </td>
                                        <td>Không yêu cầu</td>
                                        <td>1 - 220 triệu</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>6 - 30 thành viên</td>
                                        <td>3 - 15</td>
										<td>220 triệu - 2,340 tỷ </td>
                                        <td>38%</td>
                                    </tr>
                                    <tr>
                                        <td>31 - 51 Thành viên</td>
                                        <td>16 - 34 Thành viên</td>
                                        <td>2,340 tỷ - 3,800 tỷ</td>
                                        <td> 48% </td>
                                    </tr>
									<tr>
									    <td> 51 Thành viên trở lên </td>
										<td> 35 Thành viên trở lên </td>
										<td> 3,800 tỷ trở lên </td>
										<td> 55%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
								<p>  Công thức tính Hoa hồng </p>
								<p> Lợi nhuận ròng = [(Tiền thắng/thua của khách x 85%) - (Tiền gửi + Tiền rút) x 1,5%) - Tiền thưởng] </p>
								<p> Tiền hoa hồng = Lợi nhuận ròng  x  Tỷ lệ % hoa hồng. </p>
								<p> 1. Để duy trì 1 tài khoản đại lý, Đại lý cần phải có ít nhất (05) năm thành viên gửi tiền và đặt cược hàng tháng. Nếu đại lý 
								có ít hơn (5) năm thành viên hoạt động thì không nhận được hoa hồng.</p>
								<p> 2. Đại lý không được nhận hoa hồng từ chính tài khoản thành viên của mình. Nếu đại lý tạo một tài khoản người chơi cho
								riêng cá nhân mình thì tài khoản người chơi này sẽ được tách khỏi danh sách thành viên dưới quyền Đại lý.</p>
                                <p>3. Số tiền hoa hồng của Đại lý là dương với thành viên hoạt động tích cực từ (05) năm thành viên trở lên đại lý sẽ được nhận tiền hoa hồng.</p>
                                <p>4. Số tiền hoa hồng là âm Đại lý sẽ không được nhận tiền hoa hồng. Hoa hồng âm sẽ được cộng dồn sang tháng tiếp theo.</p>
                                <p>5. Hệ thống sẽ tự động tính tiền hoa hồng đại lý trong khoảng từ ngày 05 đến ngày 09 hàng háng cho hoạt động Đại lý. Ngày 10 đến 19 là thời
								điểm kiểm duyệt và Đại lý sẽ nhận dược Báo cáo chi tiết hoạt động của đại lý trong tháng đó. Ngày 20 Đại lý có thể làm lệnh rút tiền cho hoa hồng tháng trước đó.</p>
                                <p>6. Đại lý có thể yêu cầu rút tiền dựa trên số dư trong tài khoản. Số tiền trong lệnh rút tiền hoàng tháng cần lớn hơn hoặc bằng 500,000 VNĐ. Nếu số dư dưới 500,000 VNĐ.
								Số tiền hoa hồng sẽ được tích lũy cho đủ 500,000 VNĐ để có thể làm lệnh rút tiền.</p>
                                <p>7. Ngoài số lượng thành viên tích cực cần có, chúng tôi có tiêu chuẩn đánh giá chất lượng thành viên của chúng tôi (Tiền gửi, chỉ số cá cược,
								chỉ số gian lận,vv...) Để đánh gia chất lượng thành viên. Nếu thành viên của Đại lý không đủ các tiêu chuẩn chất lượng hay không đạt được yêu cầu tối thiểu cho Đại lý. 
								Tháng đó Đại lý sẽ không được nhận tiền hoa hồng </p>
                                <p>8. Các thành viên hoạt động dưới quyền đại lý chỉ được duy nhất 1 số điện thoại, địa chỉ email, địa chỉ nhà, thẻ ngân hàng, địa chỉ IP máy tính và các 
								thiết bị điện tử khác. Nếu phát hiện thành viên hoạt động dưới quyền đại lý có hành vi, vi phạm các nguyên tắc của chúng tôi, letou có quyền từ chối thanh toán hoa
								hồng và đồng thời sẽ tạm ngừng và khóa tài khoản vĩnh viễn. </p>
                                <p>9. Các đại lý có 3 tháng để hoàn thành chỉ tiêu về số lượng thành viên hoạt động và hợp lệ, hoặc quyền đại lý sẽ bị hủy và trở thành thành viên thông thường. </p>
                                <p>10.Các Đại lý cấp cao nếu không có thành viên hợp lệ nào trong 3 tháng hoạt động liên tục, hoa hồng tháng thứ 3 sẽ không được tính cho đến khi hoàn thành đủ chỉ tiêu.</p>
                                <p>11.Đại lý không được phép can thiệp vào hoạt động của thành viên tuyến dưới, trong trường hợp vi phạm, quyền đại lý sẽ bị hủy bỏ và tiền hoa hồng sẽ bị khóa.
								Không được phép có những hành vi như dưới đây.</p>
                                <p>- Tạo nhiều tài khoản thành viên đăng ký tuyến dưới để đáp ứng đủ số lượng thành viên hoạt động.</p>
                                <p> - Can thiệp vào hành vi cá cược của tuyến dưới.</p>
                                <p>- Quản lý các thành viên ngoại tuyến đang hoạt động </p>
								<p>Letou cung cấp các điều kiện và điều khoản như trên. Tài khoản đại lý và hoa hồng sẽ bị đình chỉ hoặc khóa vĩnh viễn nếu đại lý có hành vi không phù hợp đối với khoản hoa hồng). Chúng tôi khuyến khích các Đại lý hoạt động lành mạnh. Đại lý tuyệt đối không được liên kết với các thành viên tham gia các hoạt động cá cược, trường hợp bị phát hiện tài khoản sẽ bị treo và chấm dứt hoạt động ngay tức thì.</p>
								<h2> Hoa hồng Đại lý tuyến dưới</h2>
								<p> Đại lý sẽ được nhận 10% hoa hồng từ các hệ thống chi nhánh trực tuyến. Càng nhiều chi nhánh trực tuyến, cơ hội lợi nhuận của bạn càng cao. Tham khảo chi tiết thông tin dưới đây:
								Giả sử bạn đang là đại lý A với LETOU, sẽ không có giới hạn số lượng đại lý tuyến dưới. Đại lý B là tuyến dưới đại lý A,trong khi đại lý C lại là tuyến dưới đại lý B và cứ như vậy.</p>
								<p> Mỗi đại lý đều có thể tuyển những đại lý nhỏ của mình mà không có bất cứ giới hạn nào. Càng nhiều nhánh đại lý dưới, bạn lại càng nhận được nhiều chiết khấu. Đại lý tổng có hể thu về từ các đại lý nhánh nhỏ lên đến 10% chiết khấu mỗi tháng cũng như từ những chiết khấu mà các nhánh đại lý nhỏ thu về được. Tóm lại, bạn sẽ kiếm được doanh thu từ tất cả các nhánh đại lý và cả những thành viên của các đại lý.</p>
								 <p>Công thức tính:</p>
								 <p>Tổng chiết khấu = Hoa hồng từ các thành viên hoạt động trên đại lý + 10% + 10% x 10% + 10% x 10% x 10% </p>
                                 <p>Ví dụ cách tính:</p>
							<div class="TableStyle1 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">D1 Hoa hồng </span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">D2 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">=</span> Âm 10000</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">D3 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">D4 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">=</span> Âm 10000</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">C1 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">=</span> Âm 10000
                                            <span style="color:#FF9300">+ [(D1=10000)*10%] +</span> [(D2=Âm 10000)]
                                            <span style="color:#FF9300">=</span> Âm 9000</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">C2 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 + [(D3=10000*10%)] +</span> [(D4=Âm 10000)]
                                            <span style="color:#FF9300">= 11000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">C3 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(Nếu hoa hồng C1 là âm, B1 không đủ điều kiện để nhận hoa hồng D1 và D2)</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">B1 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 +</span> (C1 không nhận hoa hồng nếu giá trị là âm
                                            <span style="color:#FF9300">+ C2*10% + C3*10% +</span> D1*10%*10%
                                            <span style="color:#FF9300">+</span> D2*10%*10%
                                            <span style="color:#FF9300">+ D3*10%*10% +</span> D4*10%*10%)
                                            <span style="color:#FF9300">=</span> 12100</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(Nếu D4 hoa hồng là âm, C2 và B1 không đủ điều kiện nhận hoa hồng)</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 +</span> 0
                                            <span style="color:#FF9300">+ 10000*10% + 10000*10% +</span> 0
                                            <span style="color:#FF9300">+</span> 0
                                            <span style="color:#FF9300">+ 10000*10%*10% +</span> 0
                                            <span style="color:#FF9300">= 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 +</span> 0
                                            <span style="color:#FF9300">+ 1000 + 1000 +</span> 0
                                            <span style="color:#FF9300">+</span> 0
                                            <span style="color:#FF9300">+ 100 +</span> 0
                                            <span style="color:#FF9300">= 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">B2 Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">=</span> Âm 5000</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">(Nếu hoa hồng C1 là âm, A không đủ điều kiện nhận hoa hồng D1 và D2)</td>
                                    </tr>
                                    <tr>
                                        <td class="Title">
                                            <span style="color:#FF9300">A Hoa hồng</span>
                                        </td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 + (B1*10% +</span> B2 negative
                                            <span style="color:#FF9300">+ B3*10% +</span> C1 negative
                                            <span style="color:#FF9300">+ C2*10%*10% +</span> C3*10%*10%
                                            <span style="color:#FF9300">+</span> D1
                                            <span style="color:#FF9300">+</span> D2
                                            <span style="color:#FF9300">+ D3*10%*10% +</span> D40
                                            <span style="color:#FF9300">) = 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 + (10000*10% +</span> 0
                                            <span style="color:#FF9300">+ 10000*10% +</span> 0
                                            <span style="color:#FF9300">+ 10000*10%*10% +</span> 10000*10%*10%
                                            <span style="color:#FF9300">+</span> 0
                                            <span style="color:#FF9300">+</span> 0
                                            <span style="color:#FF9300">+ 10000*10%*10%*10% +</span> 0
                                            <span style="color:#FF9300">) = 12100</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td>
                                            <span style="color:#FF9300">= 10000 + ( 1000 + 0 + 1000 + 0 ) + 100 +</span> 100
                                            <span style="color:#FF9300">+</span> 10
                                            <span style="color:#FF9300">+</span> 0
                                            <span style="color:#FF9300">)= 12100</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        	<p><h2> Phương thức thanh toán:</h2>
						 <p> - Tiền hoa hồng sẽ được thanh toán theo tiền tệ VĐN.</p>
							 - Tiền hoa hồng sẽ được thanh toán cho Đại lý vào ngày 20 hàng tháng.</p>
							 - Letou có quyền thay đổi hoặc chỉnh sửa các điều khoản bên trên hoặc thêm bất kỳ điều khoản nào trong trường hợp cần thiết.
							 - Letou có quyền hủy bỏ quyền Đại lý tại bất kỳ thời điểm nào mà không cần thông báo trước trong trường hợp các tài khoản đại lý không đáp ứng được yêu cầu của Letou đưa ra trong một thời gian nhất định.
						     - Letou không chấp nhận gian lận, nếu phát hiện Đại lý có hành vi,vi phạm các nguyên tắc của chúng tôi. Letou có quyền hủy bỏ quyền Đại lý tại bất kỳ thời điểm nào mà không cần báo trước 
                        
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


MemberRuleOne.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleOne))));