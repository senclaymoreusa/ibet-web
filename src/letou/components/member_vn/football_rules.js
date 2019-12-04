import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


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

export class FootballRulesVn extends React.Component {
    
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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vi/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi Thể thao >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Nguyên tắc Thể thao</h2>
                        <p>LƯU Ý<br />
                        <br />
                        ※ Tất cả các loại cược (ngoại trừ nửa trận, những cược hiệp đầu tiên, quá giờ và sút phạt đền) chỉ được tính trong thời gian chính thức.<br />
                        ※ Nếu trận đấu bị hoãn, nhưng sau đó khởi hành trong vòng 48 giờ kể từ thời gian lịch định, các cá cược vẫn có hiệu lực. Ngược lại, mọi cá cược đều vô hiệu. .<br />
                        ※ Thời gian chính thức 90 phút: Các thị trường cược được tính dựa trên kết quả cuối cùng vào thời gian 90 phút chơi theo lịch trình, trừ khi có quy định khác. Điều này bao gồm bất kỳ thời gian chấn thương hoặc hiệp phụ nào nhưng không bao gồm thời gian bù giờ, thời gian dành cho một lượt đá luân lưu hoặc bàn thắng vàng.<br />
                        ※ Nhà Cái cung cấp thông tin (ví dụ như sân trung lập, thẻ đỏ, giờ giấc, thông tin thống kê, ngày tháng, bắt đầu, v.v…) như một dịch vụ mang tính chất tham khảo và không chịu bất kỳ trách nhiệm nào. Khách hàng phải có trách nhiệm tự nhận thức được những thông tin chính xác cho bất kỳ trận đấu nào.<br />
                        ※ Với cá cược trực tiếp, trong một trò chơi, liên quan đến các hành động mà Công ty cá cược tùy ý và tuyệt đối có quyền, xét thấy nguy hiểm ở tỷ số, kết quả, màn trình diễn của một đội hay cầu thủ có thể bị ảnh hưởng; hoặc cam kết thay đổi tỷ lệ cược / giá hoặc thị trường hoặc Thông tin Cược (“Cuộc chơi Nguy hiểm”) Công ty cá cược có quyền ngừng chấp nhận cược và có thể chấp nhận hoặc từ chối cược sau Cuộc chơi nguy hiểm. Tất cả các hành động khác trong một trò chơi được coi là Chơi An toàn và các cược sẽ tiếp tục được xem xét chấp nhận.<br />
                        ※ Đối với cược trực tiếp, cược được phép đặt tới phút thứ 90 hoặc tới phút cuối cùng của thời gian chính thức cộng thời gian bù giờ cho hầu hết các trận đấu. Tuy nhiên trong 5 phút cuối cùng trước khi kết thúc 85 phút đầu tiên của thời gian thi đấu chính thức trong một trận đấu (trong một trận đấu, tùy điều kiện nào áp dụng) bất kỳ tình huống nào khác không được nhắc đến trong phần này, sẽ được xem là Safe Play(Tình huống an toàn) và vì vậy tất cả những cược chờ được đặt có thể được cân nhắc nhận: Chơi trong hoặc quanh khu vực nữa vòng tròn cách cầu môn 11 mét, khu vực 11 mét ,đá luân lưu và những quả đá phạt trực tiếp được nhà cái xem là nguy hiểm (dễ có bàn thắng).<br />
                        ※ Đối với cược trực tiếp, tất cả những cược chờ sẽ tự động bị từ chối vào thời điểm trọng tài thổi còi kết thúc hiệp đấu hoặc trận đấu trong nửa hiệp/nguyên trận.<br />
                        <br />
                        <br />
                        <br />
                        Cược Thẻ Phạt<br />
                        <br />
                        ※ Thẻ vàng được tính là 1 điểm, thẻ đỏ được tính như 2 điểm. Thẻ vàng thứ hai cho cầu thủ dẫn đến thẻ đỏ thì không được tính được tính. Tổng số thẻ tối đa mỗi cầu thủ nhận là 3 điểm.<br />
                        ※ Thanh toán cược sẽ được tính theo tất cả các thẻ được rút trong suốt 90 phút chơi chính thức.<br />
                        ※ Các thẻ được rút sau trận đấu thì không được không tính.<br />
                        ※ Thẻ được rút cho những người không phải là cầu thủ chính thức (cầu thủ dự bị, người quản lý, huấn luyện viên, v.v..) không được tính .<br />
                        <br />
                        <br />
                        <br />
                        Cược Điểm Thẻ Phạt<br />
                        <br />
                        ※ Thẻ vàng được tính là 10 điểm, thẻ đỏ được tính như 25 điểm. Thẻ vàng thứ hai cho cầu thủ dẫn đến thẻ đỏ thì không được tính được tính. Tổng số thẻ tối đa mỗi cầu thủ nhận là 35 điểm.<br />
                        ※ Thanh toán cược sẽ được tính theo tất cả các thẻ được rút trong suốt 90 phút chơi chính thức.<br />
                        ※ Các thẻ được rút sau trận đấu thì không được không tính.<br />
                        ※ Thẻ được rút cho những người không phải là cầu thủ (cầu thủ dự bị, người quản lý, huấn luyện viên, v.v..) không được tính.<br />
                        <br />
                        <br />
                        <br />
                        Cược Phạt Góc<br />
                        <br />
                        ※ Những quả phạt góc được trao nhưng không được thực hiện thì không tính..<br />
                        <br />
                        <br />
                        <br />
                        Cược Cầu thủ ghi bàn<br />
                        <br />
                        ※ Cược không bao gồm bàn thắng tự ghi vào lưới nhà và xem như không được tính.<br />
                        ※ Tất cả các cầu thủ tham gia trận đấu từ khi giao bóng hoặc trước bàn thắng được tính như là người chơi.<br />
                        ※ Tất cả các cầu thủ đang tham gia trận đấu đều được xem là hợp lệ. Nếu vì bất cứ lý do nào đó, một cầu thủ không được xem là hợp lệ ghi một bàn thắng thì tất cả các cược cho các cầu thủ hợp lệ vẫn được giữ nguyên.<br />
                        ※ Các thị trường cược sẽ được thanh toán dựa trên kết quả Tivi và các số liệu thống kê từ Hiệp Hội Báo Chí cung cấp trừ khi có các bằng chứng rõ ràng rằng những thống kê này là không chính xác.<br />
                        <br />
                        <br />
                        <br />
                        Cược Thời Gian Ghi Bàn<br />
                        <br />
                        ※ Cược được thanh toán dựa trên thời gian ghi bàn được thông báo trên TV. Nếu không có, thời gian ghi bàn sẽ được tính theo đồng hồ trận đấu.<br />
                        ※ Cược được thanh toán dựa trên thời gian ghi bàn, chứ không phải thời điểm sút bóng..<br />
                        <br />
                        <br />
                        <br />
                        Các Điều Khoản Thanh Toán Và Hủy Cược<br />
                        <br />
                        ※ Nếu các thị trường cược vẫn mở trong khi trận đấu đã diễn ra với: các bàn thắng, thẻ đỏ hoặc thẻ vàng, các cú đá luân lưu, chúng tôi cái sẽ bảo lưu quyền vô hiệu hóa các cược.<br />
                        ※Nếu thị trường cược đã được mở ra nhưng thiếu hoặc không chính xác thẻ đỏ, chúng tôi cái sẽ bảo lưu quyền vô hiệu hóa các cược.<br />
                        ※ Nếu các tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (nhiều hơn 5 phút), chúng tôi cái sẽ bảo lưu quyền vô hiệu hóa các cược.<br />
                        ※ Nếu nhập sai số điểm, tất cả các thị trường sẽ bị hủy trong thời gian đặt cược tại lúc điểm không chính xác được hiển thị.<br />
                        ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày đá phạt đầu tiên, các cược sẽ bị hủy.<br />
                        ※ Nếu tên các đội và hạng mục được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.</p>
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


FootballRulesVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(FootballRulesVn))));