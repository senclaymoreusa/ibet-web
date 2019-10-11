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

export class Privacy extends React.Component {
    
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
                    <InfoSelect/>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">Bảo mật duy trì tài khoản >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Thu thập dữ liệu </h2>
                        <p>LETOU có quyền lưu giữ thông tin cá nhân của người chơi bất cứ khi nào bạn truy cập vào trang đại lý, đăng ký tài khoản, theo dõi sản phẩm và các dịch vụ của chúng tôi, trả lời các mẫu câu hỏi, mở tài khoản ngân hàng, đóng góp cho bất kỳ trò chơi nào hoặc tham gia vào các hoạt động Khuyến mãi của chúng tôi.<br />
                        <br />
                        Bất cứ khi nào người chơi thực hiện giao dịch trên trang Web của chúng tôi, người chơi sẽ được yêu cầu hiển thị các thông tin cá nhân như Tên, Ngày sinh, Giới tính, Địa chỉ email, Số điện thoại, Nghề nghiệp và sở thích.<br />
                        <br />
                        Khi giao dịch gửi tiền và rút tiền, người chơi cần điền thông tin địa chỉ, thẻ ngân hàng và các số bảo mật khác.<br />
                        <br />
                        Tuy nhiên, bạn cũng có thể vào trang Web chúng tôi dưới dạng ẩn danh.</p>
                        <p>&nbsp;</p>
                        <h2>Sử dụng thông tin</h2>
                        <p>Bất cứ thông tin chúng tôi thu thập từ bạn sẽ được sử dụng trong các trường hợp sau:<br />
                        ．Đáp ứng như cầu chơi Game của người chơi.<br />
                        ．Giúp nâng cao dịch vụ khách hàng của LETOU.<br />
                        ．Giúp nâng cao nội dung và cấu trúc trang Web, và các tính năng giao diện người dùng.<br />
                        ．Giúp xử lý các giao dịch chơi Game và tiền tệ<br />
                        ．Giúp tăng cường dòng sản phẩm và dịch vụ.<br />
                        ．Phát triển các cuộc thi, quảng cáo, khảo sát, quảng cáo có mục tiêu và các tính năng bổ sung hỗ trợ. <br />
                        ．Quản lý các báo cáo ẩn danh cho khách hàng nội bộ và khách hàng bên ngoài.<br />
                        <br />
                        Người chơi hoàn toàn có thể yên tâm các thông tin cá nhân sẽ không bị giao dịch, buôn bán hay trao đổi cho bất cứ công ty nào khác dưới bất cứ lý do nào mà không có sự đồng ý của người chơi, ngoại trừ việc phân phối sản phẩm hoặc các dịch vụ khác được yêu cầu.</p>
                        <p>&nbsp;</p>
                        <h2>Bảo mật và An ninh</h2>
                        <p>Chúng tôi thực hiện không có gì ngoài việc đảm bảo mức độ bảo mật các thông tin cá nhân khách hàng.<br />
                        <br />
                        Thông tin thẻ tín dụng được cung cấp cho chúng tôi thông qua công nghệ bảo mật Socket Layer (SSL), và được mã hóa vào cổng dữ liệu mà nhà cung cấp gửi. Quyền truy cập chỉ được sử dụng cho các cá nhân được ủy quyền.</p>
                        <p>&nbsp;</p>
                        <h2>Cookies</h2>
                        <p>Cookies là các tệp nhỏ được chuyển bởi một trang nào đó hoặc nhà cung cấp dịch vụ đến ổ cứng máy tính của bạn thông qua trình duyệt Web (nên có), và đủ điều kiện để nhà cung cấp dịch vụ hoặc trang Web nhận dạng trình duyệt của bạn cũng như nắm bắt và ghi nhớ những thông tin nhất định.<br />
                        <br />
                        Đối với hướng dẫn cho người chơi, LETOU  sử dụng cookies để biết và lưu lại các lịch sử ghé thăm của bạn, kiểm duyệt quảng cáo và thu thập dữ liệu về tương tác trang Web, vì vậy chúng tôi có thể nâng cấp công cụ và cấu trúc.<br />
                        <br />
                        Tùy theo lựa chọn của người chơi, bạn có thể cài đặt trình duyệt của mình để cảnh báo mỗi khi cookie được chuyển đổi hoặc tắt nó đi.<br />
                        <br />
                        Tuy nhiên, nếu bạn lựa chọn sau đó, sẽ có một vài dịch vụ của LETOU sẽ không hoạt động tương ứng. Trong trường hợp đó bạn có thể liên hệ bộ phận chăm sóc Khách hàng của chúng tôi để đáp ứng yêu cầu của bạn.</p>
                        <p>&nbsp;</p>
                        <h2>Lưu ý:</h2>
                        <p>Theo như hướng của LETOU, thông báo về thị trường sẽ được cập nhật thường xuyên. Người chơi có thể lựa chọn để vô hiệu hóa tính năng này. Mặt khác, LETOU có quyền cung cấp các dịch vụ liên quan đến thông báo như quản lý thông tin, thông tin dịch vụ, những điều này thì đều liên quan đến tài khoản của người chơi với chúng tôi. Do đó, người chơi không thể tắt chúng.<br />
                        <br />
                        Người chơi có thể liên hệ với bộ phận chăm sóc Khách hàng nếu muốn xóa tài khoản LETOU.  Thông tin sẽ vẫn được lưu giữ trong hệ thống LETOU dù tài khoản đã bị xóa bỏ.</p>
                        <p>&nbsp;</p>
                        <h2>Bảo mật</h2>
                        <p>LETOU ngăn chặn tất cả các dịch vụ bán, trao đổi hoặc chuyển giao thông tin cá nhân của các thành viên cho bên ngoài, ngoại trừ bên thứ 3 có đủ tin cậy và là đối tác trong hoạt động của Website và kinh doanh nói chung.<br />
                        <br />
                        Điều đó cũng đồng nghĩa với việc bên đối tác thứ 3 có nghĩa vụ cam kết duy trì bảo mật các thông tin cá nhân.<br />
                        <br />
                        Lưu ý chúng tôi có thể sử dụng thông tin của khách hàng trong các trường hợp được coi là phù hợp như tuân thủ theo pháp luật để phục vụ cho các chính sách trang Web, bảo vệ quyền lợi của chúng tôi hoặc tài sản, sự an toàn của cá nhân hay tổ chức.<br />
                        <br />
                        Tuy nhiên, các thông tin không mang tính chất cá nhân sẽ được sử dụng cho mục đích quảng bá sẽ được gửi đến bên các đối tác.</p>
                        <p>&nbsp;</p>
                        <h2>Các đường truyền đến các trang Web khác</h2>
                        <p>Chúng tôi thường xuyên cung cấp các sản phẩm của các đối tác thứ 3 và các dịch vụ trên trang Web.<br />
                        <br />
                        Các bên đối tác thứ 3 được quản lý bới chính sách riêng biệt và độc lập. <br />
                        <br />
                        Do đó, chúng tôi không chịu trách nhiệm về các nội dung và hoạt động có trong các đường truyền liên kết với trang Web.<br />
                        <br />
                        Để bảo vệ tính toàn vẹn trang Web, chúng tôi hoan nghênh các phản hồi từ các thành viên của LETOU.</p>
                        <p>&nbsp;</p>
                        <h2>Sửa đổi thông tin tài khoản</h2>
                        <p>LETOU có chức năng kiểm tra, biên tập và sửa đổi các thông tin cá nhân.<br />
                        <br />
                        Để sửa đổi tài khoản, người chơi đăng nhập tại trang chủ LETOU và chọn mục “Tài khoản” để sửa đổi thông tin tài khoản.</p>
                        <p>&nbsp;</p>
                        <h2>Sự hài lòng người chơi</h2>
                        <p>Sự hài lòng của người chơi với chính sách bảo mật của chúng tôi khi đăng ký và gửi thông tin cá nhân.</p>
                        <p>&nbsp;</p>
                        <h2>Thay đổi cho các bảo mật</h2>
                        <p>LETOU có quyền cập nhật các thay đổi bảo mật bất cứ khi nào được coi là cần thiết.<br />
                        <br />
                        Khi có sự thay đổi, chúng tôi sẽ gửi email thông báo và được đăng tải trên trang chủ. Nếu có bất cứ phản hồi nào, vui lòng gửi bảng mẫu hoặc liên hệ bộ phận Chăm sóc Khách hàng.</p>
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


Privacy.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Privacy))));