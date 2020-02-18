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
                                <a href="/vi/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi thể thao OW  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>4. Luật chơi Thể Thao Ảo</h2>
                        <p>
                            <br /> • 4.1.Luật chung
                            <br /> • 4.1.1. Trò chơi thể thao ảo là sự hiển thị do máy tính tạo ra của kết quả rút thăm con số ngẫu nhiên quyết định đội
                            nào chiến thắng trong một trận đấu hay một sự kiện thi đấu hoặc quyết định đối thủ nào về nhất, nhì, ba… trong một cuộc
                            đua hay một sự kiện thi đấu. Kết quả của một trận đấu, cuộc đua hay sự kiện thi đấu do bộ tạo số ngẫu nhiên (RNG) kiểm
                            soát, RNG do một công ty kiểm tra có uy tín kiểm tra độc lập.
                            <br /> • 4.1.2. Vào bất cứ lúc nào có thể áp dụng được, các khoản cá cược trong thể thao ảo bị chi phối bởi các luật lệ giống
                            như cá cược đối với các sự kiện thể thao thật.
                            <br /> • 4.1.3. Thể thao ảo là trò chơi được phát rộng. Tất cả mọi thành viên cá cược trong cùng một trận đấu, cuộc đua hay
                            sự kiện thi đấu sẽ nhận được kết quả giống nhau.
                            <br /> • 4.1.4. Trong trường hợp xảy ra sự cố trục trặc máy tính, điện tử hay bất kỳ hỏng hóc nghiêm trọng nào khác làm gián
                            đoạn sự hiển thị của một trận đấu, cuộc đua hay sự kiện thi đấu thì các khoản đặt cược trong trận đấu, cuộc đua hay sự
                            kiện thi đấu bị ảnh hưởng sẽ không có giá trị và sẽ được hoàn lại.
                            <br /> • 4.1.5. Nếu thông tin bình luận trong một trận đấu, cuộc đua hay sự kiện thi đấu không khớp với dòng video trình chiếu
                            về thể thao ảo thì tất cả mọi khoản cược vẫn có giá trị.
                            <br /> • 4.1.6. Trong trường hợp trận đấu, cuộc đua hay sự kiện thi đấu không bắt đầu hoặc không kết thúc và không thể quyết
                            định kết quả thì trận đấu, cuộc đua hay sự kiện đó sẽ không có giá trị. Các khoản cược sẽ được hoàn lại tuỳ theo Luật
                            & quy định về cá cược này.
                            <br /> • 4.1.7. Các khoản cá cược đã được chấp nhận dùng để cá các trận đấu, cuộc đua, sự kiện thi đấu, tuần thi đấu hay mùa
                            giải thi đấu sẽ vẫn có giá trị ngay cả khi thành viên thoát khỏi trang web cá cược.
                            <br /> • 4.2. Bóng đá ảo
                            <br /> • 4.2.1. Bóng đá ảo là cá cược dựa trên kết quả của một trận đấu hay sự kiện thi đấu bóng đá tạo ra một con số ngẫu
                            nhiên. Bộ tạo số ngẫu nhiên sẽ quyết định kết quả của trận đấu hay sự kiện thi đấu bằng cách áp dụng đánh giá của hệ
                            thống cho từng đội tham gia thi đấu. Có năm (5) nhóm đội để chọn, từ cấp quốc tế đến cấp câu lạc bộ. Mỗi trận đấu sẽ
                            có hai (2) đội thi đấu với nhau.
                            <br /> • 4.2.2. Có sáu (6) kiểu đặt cược đối với môn bóng đá ảo:
                            <br /> 1. 1x2
                            <br /> 2. Tỷ số chính xác
                            <br /> 3. Tổng số bàn thắng
                            <br /> 4. Cơ hội kép
                            <br /> 5. Tài /Xỉu 2,5 số bàn thắng
                            <br /> 6. Tỉ lệ chấp kiểu châu Á (Asian Handicap)
                            <br /> • 4.2.3. Mỗi trận đấu hoặc sự kiện diễn ra trong điều kiện trời nắng trong khoảng sáu mươi (60) giây. Hình ảnh đánh
                            dấu điểm quan trọng thể hiện số lần sút Cầu môn sẽ được hiển thị, mỗi lần sút sẽ được phân vào loại Thành bàn, Trượt
                            cầu môn hoặc Bị cản phá.
                            <br /> • 4.2.4. Tất cả mọi trận đấu hay sự kiện thi đều bắt đầu bằng thông tin giới thiệu cho biết danh sách của cả hai (2)
                            đội và giá tiền tương ứng của kiểu cá cược cung cấp.
                            <br /> • 4.2.5. Không chấp nhận cược đối với tất cả mọi trận đấu hay sự kiện thi đấu sau khi có thông báo bóng đã lăn. Tất
                            cả mọi khoản cược được chấp nhận nhầm sau khi bóng lăn sẽ không có giá trị và sẽ được hoàn trả.
                            <br /> • 4.2.6. Sau khi trận đấu hay sự kiện thi đấu kết thúc, bảng thông báo kết quả trận đấu sẽ xuất hiện, cho biết tỷ số
                            bàn thắng và kết quả chiến thắng đối với từng kiểu cược.
                            <br /> • 4.2.7. Sau khi kết quả của trận đấu hay sự kiện thi đấu được hiển thị, trận đấu hay sự kiện thi đấu tiếp theo sẽ được
                            giới thiệu. Kết quả của từng trận đấu hay sự kiện thi đấu sẽ được hiển thị trên trang web trong một khoảng thời gian
                            nhất định.
                            <br /> • 4.3. Đua Ngựa Ảo
                            <br /> • 4.3.1. Đua Ngựa Ảo có nghĩa là đặt cược vào kết quả của một cuộc đua ngựa hoặc giải đấu tạo ra các con số ngẫu nhiên.
                            <br /> • 4.3.2. Có năm (5) loại đặt cược đua ngựa ảo:
                            <br /> 1. Cược Thắng.
                            <br /> 2. Cược Vị trí.
                            <br /> 3. Cược Thắng/Cược Vị trí.
                            <br /> 4. Cược Dự đoán.
                            <br /> 5. Cược Dự đoán Ba vị trí.
                            <br /> • 4.3.3. Số lượng ngựa đua có thể thay đổi trong mỗi cuộc đua hoặc sự kiện được tổ chức trong đường đua bằng phẳng,
                            nhảy vượt hoặc chạy nước rút trong điều kiện ngày nắng, ngày âm u và đêm.
                            <br /> • 4.3.4. ùy thuộc vào số lượng ngựa đua, cách Cược thắng/Cược vị trí đối với đua ngựa ảo được định nghĩa như sau:
                            <br
                            />  Có 8-11 ngựa đua: tỷ lệ cược 1/5 cho vị trí 1, 2, 3
                            <br />  Có 12-15 ngựa đua: tỷ lệ cược 1/4 cho vị trí 1, 2, 3
                            <br />  Có 16 ngựa đua: tỷ lệ cược 1/4 cho vị trí 1, 2, 3
                            <br /> • 4.3.5. Mỗi cuộc đua hay giải đấu bắt đầu với lời giới thiệu hiển thị một danh sách của tất cả các ngựa đua và con
                            số tương ứng của chúng và giá cả cho từng loại cược.
                            <br /> • 4.3.6. Mỗi cuộc đua hay giải đấu sẽ kéo dài từ 30 giây đến 45 giây.
                            <br /> • 4.3.7. Một khi cuộc đua hoặc giải đấu đã kết thúc, hình ảnh về đích của những con ngựa sẽ được phát lại và theo sau
                            là kết quả nhóm 3 hoặc 4 con về đầu.
                            <br /> • 4.3.8. Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu.
                            Kết quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> • 4.4. Đua Chó Ảo
                            <br /> • 4.4.1. Đua chó ảo có nghĩa là đặt cược vào kết quả của một cuộc đua chó hoặc giải đấu tạo ra các con số ngẫu nhiên.
                            <br
                            /> • 4.4.2. Có năm (5) loại đặt cược đua chó ảo:
                            <br /> 1) Cược Thắng
                            <br /> 2) Cược Vị trí
                            <br /> 3) Cược Thắng/Cược Vị trí
                            <br /> 4) Cược Dự đoán
                            <br /> 5) Cược Dự đoán Ba vị trí
                            <br /> • 4.4.3. Có sáu (6) chó đua trong mỗi cuộc đua hoặc giải đấu được tổ chức trong đường đua bằng phẳng hoặc nhảy vượt
                            trong điều kiện ngày nắng, ngày âm u và đêm.
                            <br /> • 4.4.4. Mỗi cuộc đua hay giải đấu bắt đầu với lời giới thiệu hiển thị một danh sách của tất cả các chó đua và con số
                            tương ứng của chúng và giá cả cho từng loại cược.
                            <br /> • 4.4.5. Mỗi cuộc đua hay giải đấu sẽ kéo dài từ 30 giây đến 45 giây.
                            <br /> • 4.4.6. Một khi cuộc đua hoặc giải đấu đã kết thúc, hình ảnh về đích của chó đua sẽ được phát lại và theo sau là kết
                            quả nhóm 3 con về đầu.
                            <br /> • 4.4.7. Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu.
                            Kết quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> • 4.5. Quần Vợt Ảo
                            <br /> • 4.5.1. Quần vợt ảo có nghĩa là đặt cược vào kết quả của một trận đấu quần vợt hoặc giải đấu tạo ra các con số ngẫu
                            nhiên.
                            <br /> • 4.5.2. Có hai (2) đấu thủ trong mỗi trận đấu quần vợt được tổ chức trên sân cỏ quần vợt trong điều kiện trời nắng.
                            <br
                            /> • 4.5.3. Có ba (3) loại đặt cược cho quần vợt ảo :
                            <br /> 1) Moneyline
                            <br /> 2) Cược Đúng Điểm
                            <br /> 3) Cược Tổng Điểm
                            <br /> • 4.5.4. Mỗi trận đấu hoặc giải đấu bắt đầu với lời giới thiệu hiển thị hai đấu thủ và màu áo tương ứng và cờ của họ,
                            bộ phận chỉ báo phục vụ đấu thủ và giá cả cho từng loại cược.
                            <br /> • 4.5.5. Mỗi trận đấu hoặc giải đấu sẽ gồm một ván đơn lên đến mười hai (12) điểm kéo dài từ 30 giây đến 120 giây.
                            <br
                            /> • 4.5.6. Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu.
                            Kết quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> • 4.6. Cược đua xe thể thao ảo (Xe hơi)
                            <br /> • 4.6.1. Cược đua xe thể thao ảo nghĩa là đặt cược vào kết quả của một con số ngẫu nhiên được tạo ra trong một sự kiện
                            đua xe hơi.
                            <br /> • 4.6.2. Có năm (5) kiểu đặt cược đua xe thể thao ảo:
                            <br /> 1) Thắng (Win)
                            <br /> 2) Đặt (Place)
                            <br /> 3) Thắng/Đặt (Win/Place)
                            <br /> 4) Cược 2 xe về đầu (Forecast)
                            <br /> 5) Cược 3 xe về đầu (Tri-cast)
                            <br /> • 4.6.3. Có mười hai (12) xe trong mỗi lượt đua xe được tổ chức trên đường đua xe lòng chảo khi điều kiện thời tiết
                            nắng ráo.
                            <br /> • 4.6.4. Mỗi lượt đua bắt đầu bằng việc giới thiệu danh sách các xe tham dự cuộc đua, thông tin về giá cả, tên vòng
                            đua, đồng hồ đếm ngược, quãng đường đua và kiểu đua.
                            <br /> • 4.6.5. Mỗi lượt đua sẽ kéo dài 60 giây.
                            <br /> • 4.6.6. Sau khi lượt đua kết thúc, hình ảnh các xe cán vạch về đích sẽ được phát lại và sau đó là công bố kết quả,
                            trong đó có kết quả của 3 xe về đích đầu tiên.
                            <br /> • 4.6.7. Sau khi kết quả lượt đua được công bố, lượt đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả sẽ được công
                            bố trên trang web trong một khoảng thời gian nhất định.
                            <br /> • 4.7. Đua xe đạp ảo
                            <br /> • 4.7.1. Đua xe đạp ảo nghĩa là cá cược dựa trên kết quả của một con số ngẫu nhiên do sự kiện đua xe đạp tạo ra.
                            <br
                            /> • 4.7.2. Có năm (5) kiểu cược sẵn có đối với Đua xe đạp ảo:
                            <br /> 1) Thắng (Win)
                            <br /> 2) Vị trí (Place)
                            <br /> 3) Thắng/Vị trí (Win/Place)
                            <br /> 4) Dự đoán hai vị trí đầu tiên (Forecast)
                            <br /> 5) Dự đoán ba vị trí đầu tiên (Tri-cast)
                            <br /> • 4.7.3. Có từ sáu đến chín (6-9) vận động viên đua xe đạp thi đấu trên sân đua xe đạp hình bầu dục có đèn chiếu sáng.
                            <br
                            /> • 4.7.4. Mỗi sự kiện đua xe bắt đầu bằng thông tin giới thiệu cho biết danh sách vận động viên đua xe đạp, màu áo, thông
                            tin về mức giá đặt cược, tên đường đua, đồng hồ đếm ngược và quãng đường đua.
                            <br /> • 4.7.5. Mỗi sự kiện đua xe đạp sẽ kéo dài 45 giây.
                            <br /> • 4.7.6. Sau khi cuộc đua kết thúc, hình ảnh các vận động viên đua xe đạp cán đích sẽ được phát lại và sau đó là hình
                            chụp vận động viên ngay tại thời điểm cán vạch đích và bảng kết quả, trong đó có ba (3) người về đích đầu tiên.
                            <br /> • 4.7.7. Sau khi kết quả của cuộc đua đã hiển thị xong, sự kiện đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả
                            sẽ được hiển thị trên trang web trong một khoảng thời gian nhất định.
                            <br /> • 4.8. Đua xe mô tô ảo
                            <br /> • 4.8.1. Đua xe mô tô ảo nghĩa là cá cược dựa trên kết quả của một con số ngẫu nhiên do sự kiện đua xe mô tô tạo ra.
                            <br
                            /> • 4.8.2. Có hai (2) kiểu cược sẵn có đối với Đua xe mô tô ảo:
                            <br /> 1) Thắng (Win)
                            <br /> 2) Dự đoán hai vị trí đầu tiên (Forecast)
                            <br /> • 4.8.3. Có bốn (4) vận động viên đua xe trong mỗi sự kiện đua xe mô tô được tổ chức trên đường đua bằng phẳng hình
                            bầu dục vào ban đêm hoặc trong điều kiện có đèn chiếu sáng.
                            <br /> • 4.8.4. Mỗi sự kiện đua xe bắt đầu bằng thông tin giới thiệu cho biết danh sách vận động viên tham gia đua xe, thông
                            tin về mức giá đặt cược, tên đường đua, đồng hồ đếm ngược và quãng đường đua.
                            <br /> • 4.8.5. Mỗi sự kiện đua xe mô tô ảo sẽ kéo dài 30 giây.
                            <br /> • 4.8.6. Sau khi cuộc đua kết thúc, hình ảnh các vận động viên đua xe mô tô cán đích sẽ được phát lại và sau đó là hình
                            chụp vận động viên ngay tại thời điểm cán đích và bảng kết quả, trong đó có ba (3) người về đích đầu tiên.
                            <br /> • 4.8.7. Sau khi kết quả cuộc đua được hiển thị xong, sự kiện đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả sẽ
                            được hiển thị trên trang web trong một khoảng thời gian nhất định.</p>
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