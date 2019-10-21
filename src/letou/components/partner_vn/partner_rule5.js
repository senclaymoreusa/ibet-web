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

export class MemberRuleFiveVn extends React.Component {
    
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
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vn/for_partner">Dành cho Đại lý  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vn/for_partner">Chia sẻ kế hoạch >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Câu hỏi thường gặp</h2>
                        <p>Chương trình Đại lý LETOU là chương trình hợp tác tiếp thị. Chúng tôi hoan nghênh chào đón các cá nhân và công ty cùng các
                            kênh thông tin riêng của họ để quảng bá thúc đẩy nền tảng cá cược trực tuyến chất lượng cao của chúng tôi. Gia nhập hệ
                            thống đại lý LETOU và bắt đầu hưởng lợi nhuận từ những thành viên mà bạn giới thiệu cược trên từng sản phẩm như: Thể
                            thao, Casino trực tuyến, RNG, Keno và Sổ xố. Số thành viên tham gia chơi càng nhiều, bạn càng có cơ hội nhận hoa hồng
                            – không giới hạn mức tối đa. Trở thành đại lý của LETOU, cùng hợp tác với một trong những công ty hàng đầu về Game online
                            và tìm kiếm hoa hồng vô giới hạn.</p>
							Chương trình Đại lý LETOU giành tặng bạn mức hoa hồng khủng mà không có bất cứ sự rủi ro hay lệ phí nào, đơn giản chỉ
                            bằng cách giới thiệu thành viên mới tham gia trang web của chúng tôi.
                        <p>	Hỏi：Làm cách nào tôi có thể gia nhập Đại lý của LETOU?
                            Trả lời: Nhấp chuột vào mục “Đăng ký” và điền thông tin đầy đủ yêu cầu. Vui lòng đọc kỹ và đồng ý các Điều kiện 
                            Điều khoản trong mục. Để biết thêm thông tin chi tiết, vui lòng liên hệ Bộ phận Đại lý theo số Zalo: +84 374785501 hoặc Skype: vn.affiliate@letou.com​.
							Bạn có thể đăng ký thông qua địa chỉ email: vn.affiliate@letou.com </p>
                        <p>Hỏi：Lý do để tôi gia nhập Đại lý LETOU là gì ?</p>
                            Trả lời： 
							1. Lợi nhuận hoa hồng lên đến 55% và 10% lợi nhuận từ các hệ thống đại lý cấp dưới của bạn. Các đại lý có thể tham gia đặt cược và
                            trải nghiệm giành cơ hội chiến thắng trên trang web của chúng tôi.
							2. Chúng tôi hỗ trợ giao dịch ngân hàng an toàn và dữ liệu thành viên chính xác để thuận lợi trong việc theo dõi liên kết.
                            3. Chúng tôi hỗ trợ dịch vụ chăm sóc Khách hàng 24/7 thông qua các kênh trực tuyến như Skype, Zalo, Hotline, etc.
							4. Chúng tôi hiện có các phương thức thanh toán rất đa dạng: 
								- Help2pay.
								- Tài khoản ATM online.
								- Online Internet banking.
								- Momopay.
								- ZaloPay.
								- Thẻ cào.
									+ Thẻ cào điện thoại:
									+ Thẻ cào Fgo
								
                           5. Chúng tôi hỗ trợ các sản phẩm trò chơi đa dạng nhằm đáp ứng nhu cầu Khách hàng, bao gồm: Thể thao, Casino trực tuyến,
                            RNG Casino và Keno.
						<p>	Hỏi：Có mất phí khi đăng ký làm Đại lý của LETOU?</p>
                            Trả lời：Khi tham gia chương trình Đại lý của LETOU là hoàn toàn miễn phí và đơn giản. Bạn chỉ việc đăng ký tài khoản đại lý sau đó 
							bạn liên hệ với chúng tôi qua Zalo: +84 374785501 hoặc Skype: vn.affiliate@letou.com​. Chúng tôi sẽ xác nhận trong vòng 24h. 
                        <p>Hỏi：Đăng ký làm Đại lý của LETOU cần những yêu cầu gì? </p>
							Trả lời： Chúng tôi chào đón những cá nhân có mạng lưới mở rộng trên mạng lưới xã hội, công khai và khả năng quảng cáo
                            để hợp tác cùng chúng tôi. Tìm hiểu và đồng ý các điều kiện cho chương trình Đại lý theo mẫu quy định. Vui lòng liên
                            hệ bộ phận hỗ trợ Đại lý thông qua Zalo: +84 374785501 hoặc Skype: vn.affiliate@letou.com​. Chúng tôi sẽ xác nhận trong vòng 24h.
                        <p>Hỏi：Tôi sẽ nhận được lợi ích gì khi đăng ký làm Đại lý của LETOU?</p>
                            Trả lời：Khi là Đại lý của LETOU, bạn sẽ có cơ hội nhận 55% hoa hồng từ đóng góp của các thành viên bên dưới đại lý của
                            bạn. Chúng tôi cũng sẽ phát triển và thúc đẩy LETOU thông qua các thị trường để tăng đại lý nhánh nhỏ tiềm năng nhiều
                            hơn nữa, góp phần thúc đẩy sự tìm kiếm hoa hồng của bạn.
                        <p>Hỏi：Tôi có thể xem số liệu thống kê của mình như thế nào?</p>
							Trả lời： Truy cập vào trang website: <a href="https://affiliates.letou.com/">affiliates.letou1.com</a> sau đó bạn đăng nhập tài khoản đại lý của bạn
							và bạn có thể xem được các hoạt động cá cược hàng ngày từ các thành viên và báo cáo chi tiết. Nội dung chi tiết bao gồm thông tin cược, lợi nhuận ròng, Số lượng thành viên hoạt động, giao dịch, đánh giá dữ liệu mọi thông tin đều rất cụ thể.
                        <p>Hỏi：Tôi sẽ được nhận tiền hoa hồng vào ngày nào ?</p>
                           Trả lời： Hoa hồng tháng trước đó sẽ được tính từ ngày 05 đến ngày 09 hàng tháng. Do đó, các đại lý có thể thực hiện giao
                            dịch rút tiền vào ngày 20 hàng tháng.
                        <p>Hỏi：Đăng ký tài khoản mới là gì ?</p>
                           Trả lời：Là những tài khoản đăng ký lần đầu tiên trên LETOU và có giao dịch gửi tiền thành công thông qua hệ thống ngân
                            hàng của LETOU.
                        <p>Hỏi：Thành viên hợp lệ là như thế nào?</p>
                           Trả lời：Bất cứ thành viên đăng ký thông qua link đại lý hoặc mã đại lý có giao dịch gửi tiền đầu tiên thành công sẽ được coi là thành viên mới hợp lệ.
                        <p>Hỏi：Thành viên mới được gắn với tài khoản đại lý của tôi như thế nào?</p>
                        <p>Trả lời： Mỗi thành viên mới sẽ gắn liên kết với mã đại lý của bạn.</p>
                        <p>Hỏi：Khi giới thiệu thành viên mới tôi cần phải lưu ý những mục gì?</p>
                           Trả lời：
                           <p> 1. Sau khi hệ thống đại lý của bạn được kích hoạt, tài khoản đăng ký mới dựa trên đó mới được coi là thành công.</p>
                           <p>2. Mỗi thành viên mới chỉ được có duy nhất 1 tài khoản trên LETOU.</p>
                           <p>3. Số vòng cược yêu cầu cho các thành viên đại lý sẽ không được tính vào khoản hoa hồng.</p>
                           <p>4. Các thành viên mới tuyệt đối không được là thành viên của đại lý khác.</p>
                        <p>Hỏi：Tôi có thể đăng ký tài khoản cá nhân cho mình dưới hệ thống đại lý của tôi được không?</p>
                         Trả lời： Các hệ thống đại lý không được phép tham gia các giao dịch và hoạt động cá cược. Đại lý có thể đăng ký tài khoản
                            thành viên cho mục đích cá cược nhưng không được đăng ký dưới hình thức thành viên của đại lý. Tài khoản đại lý không được phép thực hiện
							các giao dịch và hoạt động cá cược. Các chi nhánh có thể đăng ký tài khoản thành viên cho mục đích cá cược nhưng không được đăng ký thành 
							viên của đại lý. Tài khoản đại lý của bạn có thể sẽ bị chấm dứt nếu có bất cứ hành vi sai trái nào.
                        <p>Hỏi： Tôi chỉ có 2 thành viên thường xuyên có đặt cược hàng thàng trên tổng 10 thành viên mới đăng ký, như vậy tôi có được
                            nhận hoa hồng không? </p>
                         Trả lời： Đại lý sẽ được nhận hoa hồng hàng tháng nếu thỏa mãn 2 điều kiện dưới đây: 
                         <p>1. Có tối thiểu  năm thành viên hoạt động.</p>
                         <p> 2. Đại lý cần duy trì tối thiểu số dư 500,000 VNĐ để thực hiện giao dịch rút tiền. Letou chấp nhận lệnh rút tiền được cung
                            cấp bởi đại lý có lợi nhuận. Tuy nhiên sẽ có khấu trừ vào hoa hồng nếu có bất cứ sự tổn thất hay mất mát gì. </p>
                        <p>Hỏi： Hoa hồng đại lý có số dư bị âm thì có vấn đề gì không? </p>
                         Trả lời： Khi các thành viên của bạn có tỉ lệ thắng nhiều hơn thua, lúc đó hoa hồng của bạn sẽ bị âm số dư. Số dư hàng
                            ngày nếu bị âm sẽ được trừ vào tài khoản hiện tại của bạn cho đến khi số dư dương. (Bạn chỉ có thể thực hiện giao dịch
                            rút khoản hoa hồng nếu số dư trong tài khoản của bạn lớn hơn 500,000 VNĐ.)
                        <p> Hỏi：Tài khoản sẽ bị ngưng hoạt động dựa trên những yếu tố nào?  </p>
                           Trả lời：
                           <p> 1. Đại lý không duy trì được tối thiểu 5 thành viên hoạt động mỗi tháng trong vòng từ 3 tháng trở lên. LETOU sẽ thông
                            báo tới đại lý thông qua điện thoại, zalo hoặc Skype về điều này.</p> 
                            <p>2. Chúng tôi không thể liên hệ với đại lý để giải quyết các vấn đề được nêu ở trên.</p>
                            <p>3. Hành vi sai trái chống lại quyền và nghĩ vụ hợp tác với LETOU.</p>
                        <p>Hỏi：Tôi có thể quảng cáo và phát triển hệ thống đại lý của tôi trên các kênh thông tin cá nhân được không? </p>
                           Trả lời： Được. Khi là đại lý chính thức của LETOU, bạn có thể quảng cáo và thúc đẩy trang đại lý của mình trên các kênh
                            thông tin cá nhân mà không có bất cứ hành vi sai trái nào chống lại quyền và nghĩa vụ hợp tác với LETOU.
                        <p> Hỏi： Nếu tôi không sống ở Việt Nam, tôi có thể đăng ký đại lý với LETOU được không? </p>
                            Trả lời： Được.LETOU chào đón tất cả các đại lý đến trên toàn thế giới ngoại trừ đăng ký ở các nước: Hong Kong, Philippines
                            &amp; Singapore.
                        <p>Hỏi： Có hạn chế khu vực đối với người chơi của đại lý không?
                            Trả lời： LETOU khuyến khích người chơi cư trú và sinh sống tại Việt Nam.</p>
                        <p>Hỏi：Có hạn chế cho các đối tượng thường trú ở đất nước tôi không?
                             Trả lời：LETOU hoan nghênh tất cả các đại lý trên toàn quốc. Chúng tôi không có bất cứ một hạn chế nào đối với các cư
                            dân tạm trú tại nước sở tại. Nếu bạn có bất cứ thắc mắc nào có thể liên hệ với nhân viên đại lý LETOU thông qua điện
                            thoại,Zalo hoặc Skype. Chúng tôi rất hân hạnh được phục vụ Quý khách.</p>
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


MemberRuleFiveVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleFiveVn))));