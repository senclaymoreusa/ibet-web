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

export class RulesVn extends React.Component {
    
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
                                <a href="/vn/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vn/for_member">Luật chơi thể thao OW >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>2. Luật doanh thu cược</h2>
                        <p>
                            <br /> Tổng Quát
                            <br /> 2.1.1
                            <br /> Cược Thắng
                            <br /> 2.1.1.1
                            <br /> Cược Thắng nghĩa là cược cho người thắng cuộc của một sự kiện, một cuộc đua hoặc một giải đấu.
                            <br /> 2.1.1.2
                            <br /> Cược Thắng nghĩa là cược cho người thi đấu/đội đã được điiền vào nơi quy định của một sự kiện, một cuộc đua hoặc một
                            giải đấu. Số vị trí được thanh toán như là người chiến thắng sẽ được ghi trên tiêu đề của thị trường cược.
                            <br /> 2.1.1.3
                            <br /> Trong trường hợp trận đấu/cầu thủ không bắt đầu thi đấu, cuộc đua hoặc giải đấu, cược thắng cho các trận đấu/cầu thụ
                            sẽ được hủy.
                            <br /> 2.1.1.4
                            <br /> Nếu có hơn hai người thắng cuộc, hoặc luật “Dead Heat” được dùng cho bất kì thị trường cược thắng nào, tỉ lện thanh
                            toán (nhỏ hơn tiền cược) sẽ dược chia cho số người thắn và thanh toán với tiền cược.
                            <br /> Đây là ví dụ cho khách hàng chưa rõ luật này, nếu giải ENGLISH PREMIER LEAGUE – Cầu thủ ghi bàn nhiều nhất có 2 cầu
                            thủ, Nhà Cái Letou sẽ thanh toán như thế nào.
                            <br /> Tiền được trả sẽ là: Tiền cược người thắng x(tỉ lệ cược-1) = tiền trả về (Nếu cầu thủ ghi bàn nhiều nhất có hơn 2 cầu
                            thủ = Tiền cược/ (số người thắng)
                            <br /> Ví Dụ:
                            <br /> ENGLISH PREMIER LEAGUE - Cầu thủ ghi bàn nhiều nhất
                            <br /> Dimitar Berbatov 1.40
                            <br /> Carlos Tevez 3.50
                            <br /> Nếu tôi cược 100 cho Dimitar Berbatovwith tỉ lệ 1.40.
                            <br /> Nếu cầu thủ ghi bàn nhiều nhất có 2 cầu thủ.
                            <br /> Tiền thắng của tôi sẽ bằng: = Tiền cược 100/2 x (Tỉ lện cược - 1) = 20
                            <br /> Nếu tôi cược 100 cho Carlos Tevez with odds 3.50.
                            <br /> Nếu cầu thủ ghi bàn nhiều nhất có 2 cầu thủ.
                            <br /> Tiền thắng của tôi sẽ bằng: = Tiền cược 100/2 x (Tỉ lện cược - 1) = 125
                            <br /> 2.1.1.5
                            <br /> Thuật ngữ “Bất kỳ cầu thủ khác” (Bất kỳ … Nhóm khác v.v ) đề cập đến tất cả các đối thủ cạnh tranh không có tên trong
                            thị trường.
                            <br /> 2.1.2
                            <br /> Cược thắng thua
                            <br /> 2.1.2.1
                            <br /> Cược thắng thua (Moneyline) có nghĩa là đặt cược cho một cầu thủ hay một đội sẽ đánh bại cầu thủ hay một đội khác trong
                            một sự kiện hoặc có vị trí cao hơn trong một sự kiện. Những luật cược thắng thua còn lại được đặt ra trong luật cược
                            của từng sự kiện cụ thể.
                            <br /> 2.1.2.2
                            <br /> Thuật ngữ “Đối thủ khác” (The Field) đề cập đến tất cả các đối thủ cạnh tranh khác so với các đối thủ cạnh tranh có
                            tên trong Cược thắng thua tương ứng.
                            <br /> 2.1.3
                            <br /> Cược Chấp (HDP), Cược Chấp Hiệp 1 &amp; Cược Chấp Hiệp 2
                            <br /> 2.1.3.1
                            <br /> Cươc chấp nghĩa là cược cho một cầu thủ/một đội có dẫn trước một tỉ số ảo (tỉ số này có hiệu lực ngay khi trận đấu diễn
                            ra). Người chiến thắng là tuyển thủ hoặc đội có tỉ số tốt hơn sau khi cộng thêm điểm chấp vào kết quả. Các quy tắc Cược
                            chấp còn lại được quy định trong các quy tắc Cược chấp của trận đấu cụ thể.
                            <br /> 2.1.3.2
                            <br /> Cược Chấp Hiệp 1 nghĩa là cược cho một cầu thủ/một đội có tỉ số tốt hơn sau khi cộng thêm điểm chấp vào kết quả của
                            Hiệp 1 của một sự kiện.
                            <br /> 2.1.3.3
                            <br /> Cược Chấp Hiệp 2 nghĩa là cược cho một cầu thủ/một đội có tỉ số tốt hơn sau khi cộng thêm điểm chấp vào kết quả của
                            Hiệp 2 của một sự kiện.
                            <br /> 2.1.4
                            <br /> Trên/Dưới (OU), Trên/Dưới Hiệp 1 &amp; Trên/Dưới Hiệp 2
                            <br /> 2.1.4.1
                            <br /> Trên/Dưới có nghĩa là đặt cược được xác định theo tổng số điểm (Bàn thắng, điểm thắng, v/v… ) trong kết quả cuối cùng
                            của một trận đấu. Nếu tổng số điểm lớn hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Trên, nếu tổng số điểm
                            ít hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Dưới..
                            <br /> 2.1.4.2
                            <br /> Trên/Dưới Hiệp 1 có nghĩa là đặt cược được xác định theo tổng số điểm (Bàn thắng, điểm thắng, v/v… ) trong kết quả hiệp
                            1 của một trận đấu. Nếu tổng số điểm lớn hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Trên, nếu tổng số điểm
                            ít hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Dưới.
                            <br /> 2.1.4.3
                            <br /> Trên/Dưới Hiệp 2 có nghĩa là đặt cược được xác định theo tổng số điểm (Bàn thắng, điểm thắng, v/v… ) trong kết quả hiệp
                            2 của một trận đấu. Nếu tổng số điểm lớn hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Trên, nếu tổng số điểm
                            ít hơn số Trên/Dưới đặt trước đó thì kết quả chiến thắng là Dưới.
                            <br /> 2.1.5
                            <br /> Chẵn/Lẻ (OE), Chẵn/Lẻ Hiệp 1 &amp; Chẵn/Lẻ Hiệp 2
                            <br /> 2.1.5.1
                            <br /> nghĩa là cược tổng số kết quả cuối cùng (bàn thắng, điểm) của trận đấu là con số chẵn hoặc con số lẻ.
                            <br /> 2.1.5.2
                            <br /> Chẵn /Lẻ Hiệp 1 nghĩa là cược tổng số kết quả cuối cùng (bàn thắng, điểm) của hiệp 1 trận đấu là con số chẵn hoặc con
                            số lẻ.
                            <br /> 2.1.5.3
                            <br /> Chẵn /Lẻ Hiệp 2 nghĩa là cược tổng số kết quả cuối cùng (bàn thắng, điểm) của hiệp 2 trận đấu là con số chẵn hoặc con
                            số lẻ.
                            <br /> 2.1.5.4
                            <br /> Cược cho hiệp 1 sẽ được hủy nếu sự kiện hủy trước khi kết thúc hiệp 1. Nếu sự kiện hủy sau khi hiệp 1 kết thúc, tất
                            cả cược cho hiệp 1 vẫn có giá trị.
                            <br /> 2.1.6
                            <br /> Tỉ số Lẻ/ Chẵn Từng Đội
                            <br /> 2.1.6.1
                            <br /> Cược tỉ số Lẻ/ Chẵn từng đội là cược dự đoán cho tỉ số từng đội trong thời gian thi đấu chính thức của một trận đấu
                            sẽ là Lẻ hay Chẵn.
                            <br /> 2.1.6.2
                            <br /> Tỉ số trong thời gian thi đấu hiệp phụ sẽ không được tính mà chỉ tính tỉ số của từng đội trong thời gian thi đấu chính
                            thức.
                            <br /> 2.1.7
                            <br /> Cược Hiệp 1/ Toàn Trận Lẻ/Chẵn
                            <br /> 2.1.7.1
                            <br /> Cược Hiệp 1/ Toàn Trận Lẻ/Chẵn là loại cược dự đoán kết quả Hiệp 1 và kết quả Toàn Trận của trận đấu là Lẻ và Lẻ tương
                            ứng, hay là Lẻ và Chẵn, Chẵn và Lẻ, hoặc Chẵn và Chẵn.
                            <br /> 2.1.7.2
                            <br /> Có bốn (4) lựa chọn khác nhau:
                            <br /> *Lẻ/Lẻ
                            <br /> *Lẻ/Chẵn
                            <br /> *Chẵn/Chẵn
                            <br /> *Chẵn/Chẵn
                            <br /> 2.1.7.3
                            <br /> Trong loại cược này, Tỉ số trong thời gian thi đấu hiệp phụ sẽ không được tính mà chỉ tính tỉ số của từng đội trong
                            thời gian thi đấu chính thức.
                            <br /> 2.1.8
                            <br /> Cược Hỗn Hợp (Mix Parlay0
                            <br /> 2.1.8.1
                            <br /> Cược hỗn hợp là là kiểu cá cược trong một tổ hợp ít nhất là 2 sự chọn lựa được đưa ra như một sự đánh cuộc.Nếu tất cả
                            các lựa chọn thắng thì Parlay sẽ thắng và sẽ được chi trả theo Tỷ số (Odds)tổ hợp của cả hai sự lựa chọn. Nếu một sự
                            lựa chọn (hoặc hơn) không thắng thì Parlay thua.Nếu một (hoặc hơn) trong các lựa chọn bị dừng lại thì tỷ số của lựa chọn
                            đó sẽ trở lại odds 1.00.
                            <br /> 2.1.8.2
                            <br /> Trong Cựơc hỗn hợp cho các trận trực tiếp, nếu bất kỳ lựa chọn nào bị Hủy thì Vé cược tổng hợp đó sẽ Không được tính.
                            <br
                            /> 2.1.8.3
                            <br /> Vui lòng tham khảo mục "Trợ Giúp" trên trang Cá cựơc tổng hợp để biết thêm chi tiết.
                            <br /> 2.1.8.4
                            <br /> Kiểu cược Trixie là cựơc gồm 4 kiểu kết hợp của 3 lựa chọn ở mỗi sự kiện khác nhau, 3 kết hợp Đôi và 1 kết hợp Ba. Nếu
                            bất kì 2 lựa chọn trong đó thắng sẽ được thanh toán. Nếu bất kỳ 2 lựa chọn thắng, 1 kết hợp Đôi sẽ được thanh toán. Nếu
                            thắng tất cả 3 lựa chọn, tất cả 3 kết hợp Đôi và 1 kết hợp Ba sẽ đựơc thanh tóan. Nếu một (hoặc nhiều) lựa chọn bị hõan
                            thì tỷ lệ của lựa chọn đó sẽ đựơc tính là 1.
                            <br /> 2.1.8.5
                            <br /> Kiểu cược Yankee bao gồm 11 kiểu kết hợp của 4 lựa chọn ở mỗi sự kiện khác nhau, 6 kết hợp Đôi, 4 kết hợp Ba và 1 kết
                            hợp Bốn. Bất kì 2 lựa chọn trong đó thắng sẽ được thanh tóan. Nếu bất kỳ 2 lựa chọn thắng, 1 kết hợp Đôi sẽ được thanh
                            toán. Nếu thắng bất kỳ 3 lựa chọn, tất cả 3 kết hợp Đôi và 1 kết hợp Ba sẽ đựơc thanh tóan. Nếu thắng tất cả 4 lựa chọn,
                            tất cả 6 kết hợp Đôi, 4 kết hợp Ba và 1 kết hợp Bốn sẽ đựơc thanh tóan. Nếu một (hoặc nhiều) lựa chọn bị hõan thì tỷ
                            lệ của lựa chọn đó sẽ đựơc tính là 1.
                            <br /> 2.1.8.6
                            <br /> Kiểu cược Canadian bao gồm 26 kiểu kết hợp của 5 lựa chọn ở mỗi sự kiện khác nhau, 10 kết hợp Đôi, 10 kết hợp Ba, 5
                            kết hợp Bốn và 1 kết hợp Năm. Bất kì 2 lựa chọn trong đó thắng sẽ được thanh tóan. Nếu bất kỳ 2 lựa chọn thắng, 1 kết
                            hợp Đôi sẽ được thanh toán. Nếu thắng bất kỳ 4 lựa chọn, tất cả 6 kết hợp Đôi, 4 kết hợp Ba và 1 kết hợp Bốn sẽ đựơc
                            thanh tóan. Nếu thắng tất cả 5 lựa chọn, thì tất cả 10 kết hợp Đôi, 10 kết hợp Ba, 5 kết hợp Bốn và 1 kết hợp Năm sẽ
                            đựơc thanh tóan. Nếu một (hoặc nhiều) lựa chọn bị hõan thì tỷ lệ của lựa chọn đó sẽ đựơc tính là 1.
                            <br /> 2.1.8.7
                            <br /> Kiểu cược Heinz bao gồm 57 kiểu kết hợp của 6 lựa chọn ở mỗi sự kiện khác nhau, 15 kết hợp Đôi, 20 kết hợp Ba, 15 kết
                            hợp Bốn, 6 kết hợp Năm và 1 kết hợp Sáu. Bất kì 2 lựa chọn trong đó thắng sẽ được thanh toán. Nếu bất kỳ 2 lựa chọn thắng,
                            1 kết hợp Đôi sẽ được thanh toán. Nếu thắng bất kỳ 5 lựa chọn, tất cả 10 kết hợp Đôi, 10 kết hợp Ba, 5 kết hợp Bốn và
                            1 kết hợp Năm sẽ đựơc thanh tóan. Nếu thắng tất cả 6 lựa chọn, tất cả 15 kết hợp Đôi, 20 kết hợp Ba, 15 kết hợp Bốn,
                            6 kết hợp Năm và 1 kết hợp Sáu sẽ đựơc thanh tóan. Nếu một (hoặc nhiều) lựa chọn bị hõan thì tỷ lệ của lựa chọn đó sẽ
                            đựơc tính là 1.
                            <br /> 2.1.8.8
                            <br /> Kiểu cược Super heinz bao gồm 120 kiểu kết hợp của 7 lựa chọn ở mỗi sự kiện khác nhau, 21 kết hợp Đôi , 35 kết hợp Ba,
                            35 kết hợp Bốn, 21 kết hợp Năm, 7 kết hợp Sáu và 1 kết hợp Bảy. Bất kì 2 lựa chọn trong đó thắng sẽ được thanh tóan.
                            Nếu bất kỳ 2 lựa chọn thắng, 1 kết hợp Đôi sẽ được thanh toán. Nếu thắng bất kỳ 6 lựa chọn, tất cả 15 kết hợp Đôi, 20
                            kết hợp Ba, 15 kết hợp Bốn, 6 kết hợp Năm và 1 kết hợp Sáu sẽ đựơc thanh tóan. Nếu thắng tất cả 7 lựa chọn, tất cả 21
                            kết hợp Đôi, 35 kết hợp Ba, 35 kết hợp Bốn, 21 kết hợp Năm, 7 kết hợp Sáu và 1 kết hợp Bảy sẽ đựơc thanh tóan. Nếu một
                            (hoặc nhiều) lựa chọn bị hõan thì tỷ lệ của lựa chọn đó sẽ đựơc tính là 1.
                            <br /> 2.1.8.9
                            <br /> Kiểu cược Goliath bao gồm 247 kiểu kết hợp của 8 lựa chọn ở mỗi sự kiện khác nhau, 28 kết hợp Đôi, 56 kết hợp Ba, 70
                            kết hợp Bốn, 56 kết hợp Năm, 28 kết hợp Sáu, 8 kết hợp Bảy và 1 kết hợp Tám. Bất kì 2 lựa chọn trong đó thắng sẽ được
                            thanh tóan. Nếu bất kỳ 2 lựa chọn thắng, 1 kết hợp Đôi sẽ được thanh tóan. Nếu thắng bất kỳ 7 lựa chọn, tất cả 21 kết
                            hợp Đôi, 35 kết hợp Ba, 35 kết hợp Bốn, 21 kết hợp Năm, 7 kết hợp Sáu và 1 kết hợp Bảy sẽ đựơc thanh tóan. Nếu thắng
                            tất cả 8 lựa chọn, tất cả 28 kết hợp Đôi, 56 kết hợp Ba, 70 kết hợp Bốn, 56 kết hợp Năm, 28 kết hợp Sáu, 8 kết hợp Bảy
                            và 1 kết hợp Tám sẽ đựơc thanh tóan. Nếu một (hoặc nhiều) lựa chọn bị hõan thì tỷ lệ của lựa chọn đó sẽ đựơc tính là
                            1..
                            <br /> 2.1.8.10
                            <br /> Cược cho các trận trực tiếp không được áp dụng cho các kiểu cược Trixie, Yankee, Canadian, Heinz, Super Heinz và Goliath.
                            <br
                            /> 2.1.8.11
                            <br /> Vui lòng tham khảo biểu tượng " " ở mục Menu trên trang Cược Hỗn Hợp để xem thêm chi tiết..
                            <br /> 2.1.9
                            <br /> Cược Trong Trận (“Trực Tiếp)
                            <br /> 2.1.9.1
                            <br /> Cược Trong Trận (“Trực Tiếp) chỉ có sẵn cho những môn thể thao mà Nhà Cái Letou chỉ định có kèo cược trực tiếp và chỉ
                            tương ứng với các trận đấu có đánh dấu “trực tiếp” hoặc “cược trực tiếp” hoặc bằng kí hiệu TRỰC TIẾP ở danh sách các
                            trận đấu hoặc ở trong một tệp đặc biệt được đánh dấu “TRỰC TIẾP (LIVE)” trên trang web..
                            <br /> 2.1.9.2
                            <br /> Cược Trong Trận (“Trực Tiếp) là khi Người dùng Cuối cùng được phép đặt cược trong một trận đấu hoặc một sự kiện đang
                            diễn ra đến một khoảng thời gian khi mà Nhà Cái Letou ngừng đặt cược tại trận đấu hoặc sự kiện đó..
                            <br /> 2.1.9.3
                            <br /> Ở một Cược Trong Trận Đấu (“Trực Tiếp) cho cược Chấp Châu Á, có hai kiểu hệ thống ghi điểm được hiển thị trên trang
                            web:
                            <br /> Nơi mà tỉ số hoặc điểm số hiện tại được cập nhật hoặc hiển thị (“Ghi điểm Kiểu A”). Việc xác định kết quả của một cược
                            được quyết định bởi kết quả của tỉ số cuối cùng (bao gồm cược chấp) khi kết thúc trận đấu hoặc cược giai đoạn (phụ thuộc
                            vào bản chất của cược này), trừ cho điểm số hiện tại ở thời điểm đặt cược và chấp nhận cược này.
                            <br /> Nơi mà tỉ số hoặc kết quả hiện tại không được hiển thị và thay vào đó, tỉ số 0-0 sẽ được hiển thị (“Ghi điểm Kiểu B”).
                            Việc xác định kết quả của một cược được quyết định bởi kết quả của tỉ số cuối cùng (bao gồm cược chấp) khi kết thúc trận
                            đấu hoặc cược giai đoạn (phụ thuộc vào bản chất của cược này). Chúng tôi khuyên Người dùng Cuối cùng nên kiểm tra trạng
                            thái trận đấu trước khi đặt cược.
                            <br /> 2.1.9.4
                            <br /> Tùy thuộc vào môn thể thao cụ thể, Nhà Cái Letou có toàn quyền đưa ra các kèo được chọn để đặt cược. Nhà Cái Letou không
                            thừa nhận hoặc chấp nhận bất kì trách nhiệm nào nếu người chơi không thể đặt cược hoặc việc cập nhật tỉ số trực tiếp
                            không chính xác. Chỉ có tỉ số hoặc kết quả được hiển thị vào lúc kết thúc trận đấu là có hiệu lực.
                            <br /> 2.1.9.5
                            <br /> Trong mọi trường hợp, Người chơi Cuối cùng có trách nhiệm tìm hiểu về tỉ số và được khuyên nên kiểm tra trạng thái trước
                            khi đặt cược.
                            <br /> 2.1.9.6
                            <br /> Trừ khi được nêu ở Quy định Thể thao Cụ thể, bất kì thông tin, số liệu và thông tin biên tập (ví dụ tỉ số, đồng hồ tính
                            giờ hoặc kết quả) được hiển thị trên trang web trong một trận đấu đang diễn ra (“Trực tiếp”) vì mục đích thông tin chung
                            và không nên bị phụ thuộc dựa vào mục đích cá cược.
                            <br /> 2.1.9.7
                            <br /> Cũng giống như các cược không trực tiếp, người chiến thắng của sự kiện này sẽ được quyết định khi kết thúc trận đấu.
                            Những quyết định phản đối, kiện tụng, hoặc đảo ngược kết quả sẽ không được công nhận cho mục đích đặt cược và những thay
                            đổi tiếp đó sẽ không ảnh hưởng đến kết quả của cược đặt.
                            <br /> 2.1.9.8
                            <br /> Nhà Cái Letou có quyền hoãn một loại cược hoặc không chấp nhập cược đặt ở bất kì thời gian nào mà không cần báo trước.
                            Khi một kèo bị hoãn, bất kìa cược nào đặt vào kèo đó nhưng trước khi được chấp nhận bởi Nhà Cái Letou đều có thể bị từ
                            chối. Bất kì cược nào đã được chấp nhận trước khi hoãn cược trực tiếp sẽ vẫn có hiệu lực, trong khi bất kì cược khác
                            được đặt sau khi cược trực tiếp đã hoãn sẽ không được chấp nhận trừ khi điều này được nêu trong Quy định Thể theo Cụ
                            thể.
                            <br /> 2.1.9.9
                            <br /> Trong điều kiện Cược Trong Trận đấu (“Trực tiếp), các cược đặt sẽ được giữ ở hình thức chờ trong các khoảng thời gian
                            nguy hiểm/nguy cơ cao trong một trận đấu. Những cược như vậy sẽ được xem là “Chờ” ở mỗi phiếu cược cho đến khoảng thời
                            gian khi cược này được chấp nhận hoặc từ chối bởi Nhà Cái Letou. Những khoảng thời gian Nguy hiểm/Nguy cơ cao được định
                            nghĩa như sau:
                            <br /> Phạt góc
                            <br /> Sút phạt đền
                            <br /> Pha đá phạt cho đội tấn công gần khu vực cấm địa của đối thủ;
                            <br /> Ném biên cho đội tấn công gần khu vực cấm địa của đối thủ;
                            <br /> Bất cứ khi nào một đội bóng đang ở tình huống ghi bàn trong một pha tấn công nguy hiểm,
                            <br /> 2.1.9.10
                            <br /> Tất cả các cược Chấp Châu Á và Tài/Xỉu ở trạng thái Chờ (trừ những cược vào Tổng số thẻ phạt, Tổng số phạt góc, Tổng
                            số việt vị, Tổng số thay người và/hoặc các cược không có tác động đến kết quả chung cuộc trận đấu) sẽ bị hủy nếu một
                            trong những trường hợp sau xảy ra:
                            <br /> Một bàn thắng được ghi
                            <br /> Một cầu thủ bị đuổi khỏi sân
                            <br /> 2.1.9.11
                            <br /> Tất cả các cược khác như Tổng số thẻ phạt, Tổng số phạt góc, Tổng số việt vị, Tổng số thay người và/hoặc các cược không
                            có tác động đến kết quả chung cuộc trận đấu có thể được chấp nhận tùy theo Nhà Cái Letou.
                            <br /> 2.1.9.12
                            <br /> Nhà Cái Letou có toàn quyền quyết định thời gian mà bất kì bàn thắng hoặc điểm số được ghi. Những quy chiếu đến thời
                            gian mà bàn thắng hoặc điểm số được ghi như được nêu trên trang web chính thức của câu lạc bộ/giải đấu, trang web truyền
                            thông, hoặc trang web “tỉ số trực tiếp (live score)” có thể được xem xét cho mục đích hướng dẫn nhưng sẽ không ràng buộc
                            bởi Nhà Cái Letou trong việc quyết định thời gian.
                            <br /> 2.1.9.13
                            <br /> Khi Nhà Cái Letou có lí do tin hoặc nghi ngờ rằng một cược trực tiếp đã được đặt sau khi kết quả của sự kiện trực tiếp
                            đã được biết hoặc nếu sự phát sóng trực tiếp bị trì hoãn dẫn đến một cược trực tiếp được đặt ở một tỉ lệ không chính
                            xác sau khi những người tham gia được chọn đã có được lợi thế (Nhà Cái Letou có toàn quyền quyết định), Nhà Cái Letou
                            sẽ có quyền quyết định cược này là vô hiệu mà không cần có bất kì lí do nào cả.
                            <br /> 2.1.9.14
                            <br /> Trong tình huống bị sự cố kĩ thuật, bao gồm việc trang web bị sập hoặc những yếu tố cản trở, trì hoãn và ngăn cản Nhà
                            Cái Letou truy cập trang web để cập nhật tỉ số, tỉ lệ cược hoặc tỉ lệ chấp, Nhà Cái Letou có quyền hủy tất cả các cược
                            đang chờ tại thời điểm sự cố xảy ra.
                            <br /> 2.1.9.15
                            <br /> Liên quan đến đặt cược trực tiếp, luật chung liên quan đến việc đánh giá kết quả được áp dụng. Khi một sự kiện trực
                            tiếp bị ngắt quãng trong chuỗi sự việc, khiến sự kiện bị trì hoãn hoặc hủy bỏ, bất kì cược được đặt ở các sự kiện bị
                            hủy hoặc trì hoãn mà không được khởi động lại trong vòng 12 tiếng đồng hồ từ lúc thời gian bắt đầu sự kiện (trừ khi được
                            nêu cụ thể tại luật cá cược của các môn thể thao đặc biệt) sẽ được xem là vô hiệu. Trường hợp ngoại lệ cho những cược
                            mà được quyết định vô điều kiện trước sự ngắt quãng của chuỗi sự việc. Trong những trường hợp như vậy, các cược này sẽ
                            có hiệu lực.
                            <br />
                            <br /> Trở lại đầu trang
                            <br /> 2.2
                            <br /> Cược Bóng Đá
                            <br /> 2.2.1
                            <br /> Trừ khi kết quả của các thể loại bóng đá tham khảo dựa trên tỉ số vào cuối thời gian thi đấu thông thường (bao gồm bất
                            kỳ phút bù giờ nào được thêm bở trọng tài). Không tính hiệp phụ.
                            <br /> 2.2.2
                            <br /> 1X2, Cược 1X2 hiệp 1 &amp; Cược 1X2 hiệp 2
                            <br /> 2.2.2.1
                            <br /> 1X2 là cá cược vào 1 trong 3 kết quả thắng có thế của mỗi trận đắu: 1 ứng với đội được nêu tên đầu tiên (thông thường
                            là đội chủ nhà); X ứng với trận đầu kết thúc hòa hoặc kết thúc ngang điểm; 2 ứng với đội được nêu tên thứ hai (thường
                            là đội khách.
                            <br /> 2.2.2.2
                            <br /> Cược 1X2 hiệp 1 nghĩa là cược bất kỳ một trong ba khả năng thắng, thua hoặc hòa theo tỉ số hiệp 1 của trận đấu. 1 chỉ
                            đội được nhắc đến đầu tiên (thường là đội nhà); X chỉ kết quả hòa; 2 chỉ đội được nhắc đến thứ hai (thường là đội khách).
                            <br
                            /> 2.2.2.3
                            <br /> Cược 1X2 hiệp 2 nghĩa là cược bất kỳ một trong ba khả năng thắng, thua hoặc hòa theo tỉ số hiệp 2 của trận đấu. 1 chỉ
                            đội được nhắc đến đầu tiên (thường là đội nhà); X chỉ kết quả hòa; 2 chỉ đội được nhắc đến thứ hai (thường là đội khách).
                            <br
                            /> 2.2.2.4
                            <br /> Cược 1X2 cho 10 phút đầu tiên
                            <br /> 2.2.2.4.1.
                            <br /> Cược 1X2 cho 10 phút đầu tiên nghĩa là cược dự đoán một trong ba khả năng có kết quả thắng, thua hoặc hòa trong 10 phút
                            thi đấu chính thức đầu tiên của một trận đấu. .
                            <br /> 2.2.3
                            <br /> Tỷ số Chính xác
                            <br /> 2.2.3.1
                            <br /> Tỷ số chính xác có nghĩa là cá cược dự đoán tỷ số cuối cùng vào lúc kết thúc thời gian thi đấu chính thức của trận đấu.
                            <br
                            /> 2.2.3.2
                            <br /> Tỷ số Chính xác thắng "AOS" có nghĩa là đội đã chọn phải thắng với tỷ số không được liệt kê trong lựa chọn.
                            <br /> 2.2.3.3
                            <br /> Các cược sẽ vô hiệu nếu trận đấu bị hủy trừ khi các cược đã được quyết định thắng thua.
                            <br /> 2.2.4
                            <br /> Tổng số bàn thắng &amp; Tổng số bàn thắng trong hiệp 1, Hiệp 2
                            <br /> 2.2.4.1
                            <br /> Cược Tổng Số Bàn Thắng được xác minh bởi tống số bàn thắng được ghi trong một trận đấu..
                            <br /> 2.2.4.2
                            <br /> Tổng số bàn thắng trong hiệp 1 nghĩa là cá cược được xác định dựa trên tổng số bàn thắng được ghi trong hiệp 1 của trận
                            đấu.
                            <br /> 2.2.4.3
                            <br /> Cược tỷ số Chính xác Hiệp 1 với Hiệp 2
                            <br /> 2.2.4.3.1.
                            <br /> Cược tổng số bàn thắng trong hiệp 1 và cược tổng số bàn thắng trong Hiệp 2 nghĩa là dự đoán tổng số bàn thắng ghi được
                            của cả 2 đội trong hiệp đầu tiên và hiệp thứ hai của trận đấu.
                            <br /> 2.2.4.3.2
                            <br /> Cược tổng số bàn thắng trong hiệp 1 của đội Chủ Nhà và cược tổng số bàn thắng trong Hiệp 2 đội Chủ Nhà nghĩa là dự đoán
                            tổng số bàn thắng ghi được của đội chủ nhà trong hiệp đầu tiên và hiệp thứ hai của trận đấu.
                            <br /> 2.2.4.3.3
                            <br /> Cược tổng số bàn thắng trong hiệp 1 của đội Khách và cược tổng số bàn thắng trong Hiệp 2 đội Khách nghĩa là dự đoán
                            tổng số bàn thắng ghi được của đội Khách trong hiệp đầu tiên và hiệp thứ hai của trận đấu.
                            <br /> 2.2.4.4
                            <br /> Cược tổng số bàn thắng trong Hiệp 2 nghĩa là dự đoán tổng số bàn thắng ghi được của cả 2 đội trong hiệp thứ hai của
                            trận đấu.
                            <br /> 2.2.4.5
                            <br /> Các cược sẽ vô hiệu nếu trận đấu bị hủy trừ khi các cược đã được quyết định thắng thua.
                            <br /> 2.2.5
                            <br /> Hiệp 1 / Toàn Trận (HT.FT)
                            <br /> 2.2.5.1
                            <br /> Hiệp 1/Toàn Trận (Half-time/Full-time) nghĩa là đặt cược để dự đoán kết quả Hiệp 1 và Toàn Trận trong một trận đấu (không
                            tính thời gian thi đấu thêm). Loại cược này sẽ được diễn giải như sau: H dùng để chỉ tên đội đầu tiên (thường là đội
                            chủ nhà); D dùng để chỉ một trận hòa; A dùng để chỉ tên đội thứ hai (thường là đội khách).
                            <br /> 2.2.5.2
                            <br /> Ví dụ - HA có nghĩa là tên của đội đầu tiên (Sân nhà) sẽ dẫn trước ở thời gian hiệp 1, và tên đội thứ hai (Đội khách)
                            sẽ được dẫn đầu vào lúc kết thúc trận đấu.
                            <br /> 2.2.6
                            <br /> Bàn thắng Đầu Tiên / Bàn Thắng Cuối Cùng
                            <br /> 2.2.6.1
                            <br /> Bàn thắng đầu tiên/ Bàn thắng cuối cùng nghĩa là đặt cược vào đội nào sẽ ghi bàn thắng đầu tiên hay cuối cùng trong
                            một trận đấu. Đối với thị trường này, những chữ cái viết tắt được diễn giải như sau: HF dùng để chỉ tên đội được gọi
                            tên trước (thường là đội chủ nhà) ghi bàn đầu tiên. HL dùng để chỉ tên của đội được gọi tên trước ghi bàn cuối cùng.
                            AF dùng để chỉ đội được gọi tên sau (thường là đội khách) ghi bàn đầu tiên. AL dùng để chỉ đội được gọi tên sau ghi bàn
                            cuối cùng. NG đề cập đến không có bàn thắng được ghi trong suốt trận đấu.
                            <br /> 2.2.6.2
                            <br /> Bàn thắng đầu tiên/Bàn thắng cuối cùng trong hiệp 1 nghĩa là cá cược đội nào sẽ ghi bàn thắng đầu tiên hoặc bàn thắng
                            cuối cùng trong hiệp 1 của trận đấu. Trong hình thức chơi này, những từ sau có ý nghĩa như sau: HF là đội được nhắc đến
                            tên trước (thông thường là đội nhà) đã ghi bàn thắng đầu tiên. HL chỉ đội được nhắc đến tên đầu tiên đã ghi bàn thắng
                            cuối cùng. AF chỉ đội được nhắc đến tên thứ hai (thông thường là đội khách) đã ghi bàn thắng đầu tiên. AL chỉ đội được
                            nhắc đến tên thứ hai đã ghi bàn thắng cuối cùng. NG nghĩa là không có bàn thắng nào được ghi trong suốt thời gian diễn
                            ra sự kiện.
                            <br /> 2.2.6.3
                            <br /> Bàn thắng phản lưới nhà vẫn được tính vào tỉ số của đối phương.
                            <br /> 2.2.6.4
                            <br /> Nếu một trận đấu bị hủy bỏ sau khi một bàn thắng được ghi, tất cả các phiếu cược vào bàn thắng đầu tiên(và không có
                            bàn thắng) sẽ được giữ nguyên trong khi đặt cược vào cuối bàn thắng sẽ bị vô hiệu. Nếu một trận đấu bị hủy bỏ mà không
                            có bàn thắng nào được ghi thì tất cả đặt cược vào bàn thắng đầu tiên, bàn thắng cuối cùng và không có bàn thắng sẽ bị
                            vô hiệu.
                            <br /> 2.2.7
                            <br /> Đội giao bóng đầu tiên
                            <br /> 2.2.7.1
                            <br /> Đội giao bóng đầu tiên có nghĩa là đặt cược vào đội nào sẽ thực hiện quả giao bóng đầu tiên trong trận đấu.
                            <br /> 2.2.7.2
                            <br /> Nếu một trận đấu bị hủy bỏ sau khi đã thực hiện quả giao bóng thì tất cả phiếu cược vẫn còn hiệu lực.
                            <br /> 2.2.8
                            <br /> Tổng số của đội chủ nhà và tổng số của đội khách
                            <br /> 2.2.8.1
                            <br /> Tổng số bàn thắng của đội chủ nhà và tổng số bàn thắng của đội khách
                            <br /> 2.2.8.1.1.
                            <br /> Tổng số bàn thắng của đội chủ nhà và tổng số bàn thắng của đội khách có nghĩa là tổng số bàn thắng được ghi bởi đội
                            chủ nhà so với tổng số bàn thắng được ghi bởi đội khách trong những trận đấu thuộc một giải đấu cụ thể được chơi trong
                            một ngày nhất định.
                            <br /> 2.2.8.2
                            <br /> Tổng số phạt góc của đội chủ nhà và tổng số phạt góc của đội khách
                            <br /> 2.2.8.2.1.
                            <br /> Tổng số phạt góc của đội chủ nhà và tổng số phạt góc của đội khách có nghĩa là dự đoán tổng số bàn thắng được thực hiện
                            bởi đội chủ nhà so với tổng số được thực hiện bởi bởi đội khách trong những trận đấu thuộc một giải đấu cụ thể được chơi
                            trong một ngày nhất định.
                            <br /> 2.2.8.3
                            <br /> Tổng số thẻ phạt của đội chủ nhà và tổng số bàn thắng của đội khách
                            <br /> 2.2.8.3.1.
                            <br /> Tổng số thẻ phạt của đội chủ nhà và tổng số bàn thắng của đội khách nghĩa là dự Tổng số thẻ phạt được trao cho đội chủ
                            nhà so với Tổng số thẻ phạt được trao cho đội khách trong những trận đấu thuộc một giải đấu cụ thể được chơi trong một
                            ngày nhất định.
                            <br /> 2.2.8.4
                            <br /> Đội được nêu tên đầu tiên là đội chủ nhà và thứ 2 là đội khách.
                            <br /> 2.2.8.5
                            <br /> Nếu 1 (hoặc nhiều hơn) trận đấu bị hoãn lại hoặc hủy thì các cược sẽ bị vô hiệu.
                            <br /> 2.2.9
                            <br /> Tài/Xỉu của một đội và Tài/Xỉu hiệp một của một đội
                            <br /> 2.2.9.1
                            <br /> Tài/xỉu cho một đội có nghĩa là đặt cược cho số bàn thắng được ghi bởi một đội nào đó trong một trận đấu.
                            <br /> 2.2.9.2
                            <br /> Nếu tổng số bàn thắng lớn hơn mức OU thì kết quả thắng là tài; nếu tổng số bàn thắng nhỏ hơn dòng OU thì kết quả thắng
                            là xỉu.
                            <br /> 2.2.9.3
                            <br /> Nếu tổng số cao hơn chỉ số OU khi đó kết quả thắng là Tài; nếu tổng số ít hơn chỉ số OU, khi đó kết quả thắng là Xỉu.
                            <br
                            /> 2.2.10
                            <br /> Quả phạt góc đầu tiên, Quả phạt góc đầu tiên của hiệp 1 và Quả phạt góc đầu tiên của hiệp 2
                            <br /> 2.2.10.1
                            <br /> Phạt góc được trao nhưng không thực hiện thì không tính
                            <br /> 2.2.10.2
                            <br /> Số Lượng Quả Phạt Góc
                            <br /> 2.2.10.2.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.10.2.1.1
                            <br /> Cược chấp có nghĩa là đặt cược vào đội nào được hưởng nhiều quả phạt góc nhất trong suốt một trận đấu bao gồm cả tỉ
                            lệ chấp.
                            <br /> 2.2.10.2.1.2
                            <br /> Nếu1 trận đấu bị hoãn lại hoặc hủy thì các cược sẽ bị vô hiệu.
                            <br /> 2.2.10.2.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.10.2.2.1
                            <br /> Tài/ xỉu nghĩa là đặt cược về tổng số quả phạt góc được thực hiện bởi cả hai đội trong một trận đấu.
                            <br /> 2.2.10.2.2.2
                            <br /> Nếu tổng số cao hơn chỉ số OU khi đó kết quả thắng là Tài; nếu tổng số ít hơn chỉ số OU, khi đó kết quả thắng là Xỉu.
                            <br
                            /> Nếu tổng số phạt góc 2.2.10.2.2.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì sau đó tất cả cá cược sẽ vô hiệu.
                            <br /> 2.2.10.3
                            <br /> Quả phạt góc đầu tiên
                            <br /> 2.2.10.3.1
                            <br /> Quả phạt góc đầu tiên có nghĩa là đặt cược vào đội nào sẽ có thực hiện quả phạt góc đầu tiên trong một trận đấu.
                            <br
                            /> 2.2.10.3.2
                            <br /> Quả phạt góc đầu tiên tại Hiệp 1 có nghĩa là đặt cược vào đội nào sẽ có thực hiện quả phạt góc đầu tiên trong Hiệp 1.
                            <br
                            /> 2.2.10.3.3
                            <br /> Quả phạt góc đầu tiên tại Hiệp 2 có nghĩa là đặt cược vào đội nào sẽ có thực hiện quả phạt góc đầu tiên trong Hiệp 2.
                            <br
                            /> 2.2.10.3.4
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi việc thanh toán tiền cược đã được thanh toán.
                            <br /> 2.2.10.4
                            <br /> Cược Quả phạt góc cuối cùng và Quả phạt góc cuối cùng tại Hiệp 1
                            <br /> 2.2.10.4.1
                            <br /> Cược Quả phạt góc cuối cùng nghĩa là dự đoán cho đội được hưởng quả phạt góc cuối cùng.
                            <br /> 2.2.10.4.2
                            <br /> Nếu trận đấu bị hủy hoặc hoãn thì toàn bộ cược đều sẽ bị hủy.
                            <br /> 2.2.10.4.3
                            <br /> Cược Quả phạt góc cuối cùng tại Hiệp 1sẽ không có giá trị nếu trận đấu bị bỏ dở trong suốt thời gian diễn ra hiệp 1
                            của trận đấu. Khoản cược của Quả phạt góc cuối cùng hiệp 1 sẽ vẫn có giá trị nếu trận đấu bị bỏ dở trong suốt thời gian
                            diễn ra hiệp 2 của trận đấu.
                            <br /> 2.2.10.5
                            <br /> Phạt góc tiếp theo
                            <br /> 2.2.10.5.1
                            <br /> Phạt góc tiếp theo có nghĩa là cược vào đội nào sẽ được hưởng quả phạt góc tiếp theo của trận đấu.
                            <br /> 2.2.10.5.2
                            <br /> Tất cả các cược được tính là Hợp lệ nếu quả phạt góc đó đã được thực hiện.
                            <br /> 2.2.11
                            <br /> Tổng số thẻ phạt
                            <br /> 2.2.11.1
                            <br /> Một thẻ vàng được tính là một điểm và một thẻ đỏ là hai điểm. Số điểm tối đa mà một cầu thủ có thể nhận được trong một
                            trận đấu là ba (một cho một thẻ vàng và hai cho một thẻ đỏ, thẻ vàng thứ hai không được tính).
                            <br /> 2.2.11.2
                            <br /> Thẻ được rút cho những người không phải là cầu thủ (người quản lý, huấn luyện viên, cầu thủ dự bị, v.v..) không được
                            tính.
                            <br /> 2.2.11.3
                            <br /> Số thẻ
                            <br /> 2.2.11.3.1
                            <br /> Cược chấp
                            <br /> 2.2.11.3.1.1
                            <br /> Cược chấp có nghĩa là đặt cược cho đội nào phải nhận nhiều thẻ nhất trong một trận đấu bao gồm mọi tỷ lệ chấp.
                            <br /> 2.2.11.3.1.2
                            <br /> Nếu trận đấu bị hủy thì toàn bộ cược đều sẽ bị hủy.
                            <br /> 2.2.11.3.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.11.3.2.1
                            <br /> Tài/xỉu có nghĩa là đặt cược cho tổng số thẻ cả hai đội nhận trong một trận đấu.
                            <br /> 2.2.11.3.2.2
                            <br /> Nếu tổng số thẻ nhiều hơn chỉ số Tài Xỉu (OU), khi đó kết quả thắng là Tài; nếu tổng số ít hơn chỉ số OU, khi đó kết
                            quả thắng là Xỉu.
                            <br /> 2.2.11.3.2.3
                            <br /> Nếu trận đấu bị hủy thì toàn bộ cược đều sẽ bị hủy.
                            <br /> 2.2.11.4
                            <br /> Thẻ phạt đầu tiên
                            <br /> 2.2.11.4.1
                            <br /> Thẻ Phạt Đầu Tiên nghĩa là đặt vào đội sẽ nhận thẻ vàng hoặc đỏ đầu tiên trong trận đấu.
                            <br /> 2.2.11.4.2
                            <br /> Nếu 2 hoặc hơn nhiều cầu thủ nhận thẻ của trọng tài thì cầu thủ mà nhận thẻ đầu tiên được xem như là người thắng.
                            <br
                            /> 2.2.11.4.3
                            <br /> Nếu trận đấu bị huỷ bỏ sau khi thẻ đầu tiên đã được rút ra thì tất cả mọi phiên cược vẫn có hiệu lực. Nếu trận đấu bị
                            huỷ bỏ trước khi thẻ đầu tiên được rút ra thì tất cả mọi phiên cược sẽ bị vô hiệu lực.
                            <br /> 2.2.11.5
                            <br /> Thẻ cuối cùng
                            <br /> 2.2.11.5.1
                            <br /> Thẻ Cuối cùng có nghĩa là đặt cược cho đội sẽ nhận thẻ cuối cùng (Thẻ vàng hoặc Thẻ đỏ) trong một trận đấu.
                            <br /> 2.2.11.5.2
                            <br /> Nếu có hai hoặc nhiều cầu thủ cùng nhận thẻ trong một pha va chạm thì cầu thủ bị trọng tài giơ thẻ cuối cùng sẽ được
                            cho là người thắng.
                            <br /> 2.2.11.5.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì sau đó các vé cược là vô hiệu..
                            <br /> 2.2.12
                            <br /> Lỗi việt vị
                            <br /> 2.2.12.1
                            <br /> Số lần việt vị
                            <br /> 2.2.12.1.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.12.1.1.1
                            <br /> Cược chấp Handicap có nghĩa là đặt cược cho đội nào bị bắt việt vị nhiều lần nhất trong một trận đấu bao gồm mọi tỷ
                            lệ cược chấp.
                            <br /> 2.2.12.1.1.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu lực.
                            <br /> 2.2.12.1.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.12.1.2.1
                            <br /> Tài/xỉu có nghĩa là đặt cược cho tổng số lần quyết định việt vị trong một trận đấu.
                            <br /> 2.2.12.1.2.2
                            <br /> Tài/Xỉu hiệp một có nghĩa là tổng số pha việt vị trong hiệp một của trận đấu.
                            <br /> 2.2.12.1.2.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì sau đó tất cả phiếu cược sẽ vô hiệu.
                            <br /> 2.2.12.2
                            <br /> Việt vị đầu tiên
                            <br /> 2.2.12.2.1
                            <br /> Lỗi Việt vị Đầu tiên có nghĩa là đặt cược cho đội sẽ bị bắt việt vị đầu tiên trong một trận đấu.
                            <br /> 2.2.12.2.2
                            <br /> Nếu trận đấu bị bỏ dở sau khi đã có quyết định lỗi việt vị đầu tiên, lúc ấy tất cả các khoản cược đều có giá trị. Nếu
                            trận đấu bị bỏ dở sau khi có quyết định lỗi việt vị đầu tiên, lúc ấy tất cả các khoản cược đều không có giá trị.
                            <br /> 2.2.12.3
                            <br /> Lỗi việt vị cuối cùng
                            <br /> 2.2.12.3.1
                            <br /> Lỗi Việt vị Cuối cùng có nghĩa là đặt cược cho đội sẽ bị bắt việt vị cuối cùng trong một trận đấu.
                            <br /> 2.2.12.3.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu lực.
                            <br /> 2.2.13
                            <br /> Thay Người
                            <br /> 2.2.13.1
                            <br /> Số Lần Thay Người
                            <br /> 2.2.13.1.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.13.1.1.1
                            <br /> Cược chấp có nghĩa là đặt cược vào đội nào sẽ thay người nhiều nhất trong suốt trận đấu, bao gồm cả tỉ lệ chấp.
                            <br /> 2.2.13.1.1.2
                            <br /> Nếu một trận đấu bị hủy bỏ thì tất cả các vé cược sẽ vô hiệu.
                            <br /> 2.2.13.1.2
                            <br /> Tài/xỉu
                            <br /> 2.2.13.1.2.1
                            <br /> Tài/xỉu nghĩa là cá cược về tổng số lần thay thế người trong suốt một trận đấu.
                            <br /> 2.2.13.1.2.2
                            <br /> Nếu tổng số lần thay người lớn hơn mức OU thì kết quả thắng là tài; nếu tổng số lần thay người nhỏ hơn mức OU thì kết
                            quả thắng là xỉu.
                            <br /> 2.2.13.1.2.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì sau đó toàn bộ phiếu cược sẽ vô hiệu.
                            <br /> 2.2.13.2
                            <br /> Thay Người Đầu Tiên
                            <br /> 2.2.13.2.1
                            <br /> Thay người đầu tiên nghĩa là cược đội nào sẽ có sự thay người đầu tiên trong một trận đấu..
                            <br /> 2.2.13.2.2
                            <br /> Nếu có hai hay nhiều cầu thủ được thay thế tại cùng một thời gian thì cầu thủ mang số áo hiển thị đầu tiên từ trọng
                            tài thứ 4 sẽ được công nhận.
                            <br /> 2.2.13.2.3
                            <br /> Nếu một trận đấu bị hủy bỏ sau khi thay thế người đầu tiên đã được thực hiện thì sau đó tất cả các phiếu cược là hợp
                            lệ. Nếu một trận đấu bị hủy bỏ trước khi thay thế người đầu tiên được thực hiện thì sau đó tất cả các phiếu cược sẽ vô
                            hiệu.
                            <br /> 2.2.13.3
                            <br /> Thay Người Cuối Cùng
                            <br /> 2.2.13.3.1
                            <br /> Sự thay thế người cuối cùng có nghĩa là đặt cược vào đội nào sẽ có sự thay người cuối cùng trong suốt một trận đấu.
                            <br
                            /> 2.2.13.3.2
                            <br /> Nếu có từ hai hay nhiều cầu thủ được thay thế cùng một thời gian thì cầu thủ mang số áo hiển thị cuối cùng từ trọng
                            tài thứ 4 sẽ được công nhận.
                            <br /> 2.2.13.3.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì sau đó tất cả các phiếu cược sẽ vô hiệu
                            <br /> 2.2.14
                            <br /> Sạch lưới
                            <br /> 2.2.14.1
                            <br /> Giữ sạch lưới nghĩa là cược vào đội có thể giữ sạch lưới (không nhận một bàn thắng vào lưới)
                            <br /> Một vài lựa chọn bên dưới:
                            <br /> Đội Nhà sạch lưới: trong trận đấu 90 phút, Đội Nhà không để cho Đội Khách ghi bất kỳ bàn thắng nào. Ví dụ, kết quả là
                            0-0, 1-0, 2-0 v.v =&gt; cho đến khi Đội Khách không có bàn thắng nào, cược của bạn sẽ thắng.
                            <br /> Đội Nhà không giữ sạch lưới: trong trận đấu 90 phút, Đội Nhà để cho Đội Khách ghi bất kỳ bàn thắng nào. Ví dụ, kết quả
                            là 0-1, 1-1, 2-1 v.v =&gt; cho đến khi Đội Khách có bất kỳ bàn thắng nào, cược của bạn sẽ thắng.
                            <br /> Đội Khách sạch lưới: trong trận đấu 90 phút, Đội Khách không để cho Đội Nhà ghi bất kỳ bàn thắng nào. Ví dụ, kết quả
                            là 0-0, 0-1, 0-2 v.v =&gt; cho đến khi Đội Nhà không có bàn thắng nào, cược của bạn sẽ thắng.
                            <br /> Đội Khách không giữ sạch lưới: trong trận đấu 90 phút, Đội Khách để cho Đội Nhà ghi bất kỳ bàn thắng nào. Ví dụ, kết
                            quả là 1-0, 1-1, 1-2 v.v =&gt; cho đến khi Đội Nhà có bất kỳ bàn thắng nào, cược của bạn sẽ thắng.
                            <br /> Loại cược Đội nhà sạch lưới Đội nhà không sạch lưới Đội khách sạch lưới Đội khách không sạch lưới
                            <br /> Nghĩa của loại cược Đội chủ nhà không để đội khách ghi bàn Đội chủ nhà bị đội khách ghi bàn thắng Đội khách không để
                            đội khách ghi bàn Đội khách bị đội chủ nhà ghi bàn thắng
                            <br /> Thắng cược Đội khách – không ghi bàn Đội khách: Có ghi bàn Đội chủ nhà: không ghi bàn đội chủ nhà: có ghi bàn
                            <br /> Thua cược: Đội khách: Có ghi bàn Đội khách – không ghi bàn Đội khách nhà: không ghi bàn đội chủ nhà: có ghi bàn Đội
                            chủ nhà: không ghi bàn – không ghi bàn
                            <br /> 2.2.14.2
                            <br /> Nếu một trận đấu bị hủy bỏ thì các vé cược sẽ vô hiệu.
                            <br /> 2.2.15
                            <br /> Phạt đền
                            <br /> 2.2.15.1
                            <br /> Phạt có nghĩa là đặt cược cho quả phạt điền được trao hoặc được thực hiện trong một trận đấu.
                            <br /> 2.2.15.2
                            <br /> Nếu một trận đấu bị huỷ bỏ sau khi quả phạt đền đã được trao hoặc được thực hiện thì tất cả mọi phiên cược vẫn có hiệu
                            lực.
                            <br /> 2.2.15.3
                            <br /> Nếu một trận đấu bị huỷ bỏ trước khi quả phạt đền được trao hoặc được thực hiện thì tất cả mọi phiên cược sẽ bị vô hiệu
                            lực.
                            <br /> 2.2.16
                            <br /> Phạt loạt đá luân lưu
                            <br /> 2.2.16.1
                            <br /> Phạt loạt đá luân lưu nghĩa là đặt cược đội nào sẽ giành chiến thắng trong loạt sút luân lưu.
                            <br /> 2.2.16.2
                            <br /> Trong cược chấp, kết quả bao gồm tất cả các quả phạt đền được thực hiện trong loạt đá luân lưu, bao gồm cả bàn thắng
                            vàng.
                            <br /> Trong cược tài/xỉu, kết quả chỉ bao gồm mười quả đá phạt đền theo quy định trong loạt đá luân lưu và không bao gồm bàn
                            thắng vàng.
                            <br /> 2.2.17
                            <br /> Fantasy League – Giải đấu Ảo
                            <br /> 2.2.17.1
                            <br /> Giải đấu ảo là các cặp đấu của các đội từ những trận đấu khác nhau..
                            <br /> 2.2.17.2
                            <br /> Mọi sân thi đấu sẽ chỉ hoàn toàn nhằm mục đích tham khảo.
                            <br /> 2.2.18
                            <br /> Tài/Xỉu (OU) Trong mỗi 15 Phút cụ thể
                            <br /> 2.2.18.1
                            <br /> Tài/Xỉu Trong mỗi 15 Phút có nghĩa là cược được xác định bằng tổng số điểm (bàn thắng, số ván, v.v..) tại thời điểm
                            kết thúc 15 phút thi đấu một lần của một trận đấu.
                            <br /> 2.2.18.2
                            <br /> Nếu tổng số điểm lớn hơn giá trị Tài/Xỉu được chỉ định từ trước thì kết quả thắng là Tài; nếu tổng số điểm nhỏ hơn giá
                            trị Tài/Xỉu được chỉ định từ trước thì kết quả thắng là Xỉu.
                            <br /> 2.2.18.3
                            <br /> Ví dụ:
                            <br /> OU (Tài/Xỉu) của Phút thứ 15
                            <br /> 00:00–15:00 OU: Tổng số điểm được ghi từ phút 00:00 đến 15:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 15.
                            <br /> OU (Tài/Xỉu) của Phút thứ 30
                            <br /> 15:01–30:00 OU: Tổng số điểm được ghi từ phút 15:01 đến 30:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 30.
                            <br /> OU (Tài/Xỉu) của phút thứ 45
                            <br /> 30:01- 45:00 OU: Tổng số điểm được ghi từ phút 30:01 đến 45:00. Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 45.
                            <br /> OU (Tài/Xỉu) của Phút thứ 60
                            <br /> 45:01–60:00 OU: Tổng số điểm được ghi từ phút 45:01 đến 60:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 60.
                            <br /> OU (Tài/Xỉu) của Phút thứ 75
                            <br /> 60:01–75:00 OU: Tổng số điểm được ghi từ phút 60:01 đến 75:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 75.
                            <br /> OU (Tài/Xỉu) của phút thứ 90
                            <br /> 75:01 – 90:00 OU: Tổng số điểm được ghi từ phút 75:01 đến 90:00. Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 90.
                            <br /> 2.2.18.4
                            <br /> Đối với OU (Tài/Xỉu) Trong mỗi 15 Phút, các cược được dàn xếp vào thời gian chính xác mà bàn thắng được ghi (bóng lăn
                            qua vạch gôn) như được hiển thị trên đồng hồ được công bố qua truyền hình trực tiếp.
                            <br /> 2.2.18.5
                            <br /> Nếu trận đấu bị tạm dừng hoặc huỷ bỏ thì cược được đặt cho OU Trong 15 Phút chưa chấm dứt sẽ bị coi là vô hiệu lực.
                            Nếu OU trong 15 Phút chỉ định được hoàn thành thì cược sẽ có hiệu lực.
                            <br /> 2.2.18.6
                            <br /> Trong hai (2) phút cuối của bất kỳ phiên đặt cược trực tiếp O/U 15 phút cụ thể, mọi hành động ngoài những hành động
                            được đề cập dưới đây trong văn bản này, sẽ được coi là Lối chơi An toàn và do đó, mọi phiếu cược đang chờ quyết định
                            có thể được xem xét để chấp nhận: một bàn thắng, đá phạt đền và thẻ đỏ.
                            <br /> 2.2.18.7
                            <br /> Đối với 30:01 - 45:00 &amp; 75:01 – 90:00, các cược được xác định dựa vào thời gian chính xác mà bàn thắng được ghi
                            (bóng lăn qua vạch gôn), số quả phạt góc (được thực hiện) và tổng số thẻ (thẻ do trọng tài chính rút) được xác định bởi
                            thời gian trên đồng hồ hiển thị tường thuật trực tiếp, trừ khoản thời gian thêm hoặc bù giờ.
                            <br /> 2.2.19
                            <br /> Đá phạt
                            <br /> 2.2.19.1
                            <br /> Một quả đá phạt sẽ không được tính cho đến khi nó thực sự được thực hiện.
                            <br /> 2.2.19.2
                            <br /> Đá phạt tức là đá phạt trực tiếp hoặc gián tiếp. (Ngoại trừ đá phạt đền &amp; quả phát bóng)
                            <br /> 2.2.19.3
                            <br /> Số quả đá phạt
                            <br /> 2.2.19.3.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.19.3.1.1
                            <br /> Cược chấp có nghĩa là đặt cược cho đội nào được hưởng nhiều quả đá phạt nhất trong một trận đấu bao gồm mọi tỷ lệ cược.
                            <br
                            /> 2.2.19.3.1.2
                            <br /> Nếu một trận đấu bị hủy bỏ thì các vé cược sẽ vô hiệu.
                            <br /> 2.2.19.3.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.19.3.2.1
                            <br /> Tài/Xỉu có nghĩa là đặt cược cho tổng số quả đá phạt được thực hiện bởi cả hai đội trong một trận đấu.
                            <br /> 2.2.19.3.2.2
                            <br /> Nếu tổng số quả đá phạt nhiều hơn chỉ số OU, khi đó kết quả thắng là Tài; nếu tổng số ít hơn chỉ số OU, khi đó kết quả
                            thắng là Xỉu.
                            <br /> 2.2.19.3.2.3
                            <br /> Nếu một trận đấu bị hủy bỏ thì các vé cược sẽ vô hiệu.
                            <br /> 2.2.19.3.2.4
                            <br /> Đá phạt đầu tiên
                            <br /> 2.2.19.3.2.4.1
                            <br /> Quá đá phạt đầu tiên có nghĩa là đặt cược cho đội sẽ thực hiện quả đá phạt đầu tiên trong một trận đấu.
                            <br /> 2.2.19.3.2.4.2
                            <br /> Nếu trận đấu bị bỏ dở sau khi đã có cú đá phạt đền đầu tiên, lúc ấy tất cả các khoản cược đều có giá trị. Nếu trận đấu
                            bị bỏ dở trước khi có một cú đá phạt đền, lúc ấy tất cả các khoản cược đều không có giá trị.
                            <br /> 2.2.19.3.2.5
                            <br /> Quả đá phạt cuối cùng
                            <br /> 2.2.19.3.2.5.1
                            <br /> Quá đá phạt cuối cùng có nghĩa là đặt cược cho đội sẽ thực hiện quả đá phạt cuối cùng trong một trận đấu.
                            <br /> 2.2.19.3.2.5.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu.
                            <br /> 2.2.20
                            <br /> Quả phát bóng
                            <br /> 2.2.20.1
                            <br /> Một cú sút khung thành được trao cho các đội phòng thủ nếu quả bóng hoàn toàn vượt qua đường kết thúc, vi` thế tiếp
                            xúc với một cầu thủ đối phương.
                            <br /> 2.2.20.2
                            <br /> Quả phát bóng của thủ môn sau một pha cứu thua không được tính.
                            <br /> 2.2.20.3
                            <br /> Số quả phát bóng
                            <br /> 2.2.20.3.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.20.3.1.1
                            <br /> Cược chấp có nghĩa là đặt cược cho đội nào thực hiện nhiều quả phát bóng nhất trong một trận đấu bao gồm mọi tỷ lệ chấp.
                            <br
                            /> 2.2.20.3.1.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu.
                            <br /> 2.2.20.3.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.20.3.2.1
                            <br /> Tài/Xỉu có nghĩa là đặt cược cho tổng số quả phát bóng được thực hiện bởi cả hai đội trong một trận đấu.
                            <br /> 2.2.20.3.2.2
                            <br /> Nếu tổng số quả phát bóng nhiều hơn chỉ số OU, khi đó kết quả thắng là Tài; nếu tổng số ít hơn chỉ số OU, khi đó kết
                            quả thắng là Xỉu .
                            <br /> 2.2.20.3.2.3
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu.
                            <br /> 2.2.20.4
                            <br /> Quả phát bóng đầu tiên.
                            <br /> 2.2.20.4.1
                            <br /> Quả phát bóng đầu tiên có nghĩa là đặt cược cho đội sẽ thực hiện quả phát bóng đầu tiên trong một trận đấu.
                            <br /> 2.2.20.4.2
                            <br /> Nếu trận đấu bị bỏ dở sau khi đã có quả phát bóng đầu tiên, lúc ấy tất cả các khoản cược đều có giá trị. Nếu trận đấu
                            bị bỏ dở trước khi có một cú đá phạt đền, lúc ấy tất cả các khoản cược đều không có giá trị.
                            <br /> 2.2.20.5
                            <br /> Quả phát bóng cuối cùng
                            <br /> 2.2.20.5.1
                            <br /> Quả phát bóng cuối cùng có nghĩa là đặt cược cho đội sẽ thực hiện quả phát bóng cuối cùng trong một trận đấu.
                            <br /> 2.2.20.5.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu.
                            <br /> 2.2.21
                            <br /> Ném biên
                            <br /> 2.2.21.1
                            <br /> Ném biên được trao cho một đội nếu bóng đã hoàn toàn vượt qua đường biên dọc do chạm vào người của một cầu thủ của đội
                            kia.
                            <br /> 2.2.21.2
                            <br /> Số quả ném biên
                            <br /> 2.2.21.2.1
                            <br /> Cược chấp Handicap
                            <br /> 2.2.21.2.1.1
                            <br /> Cược chấp có nghĩa là đặt cược cho đội nào được thực hiện nhiều quả ném biên nhất trong một trận đấu bao gồm mọi tỷ
                            lệ cược.
                            <br /> 2.2.21.2.1.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu.
                            <br /> 2.2.21.2.2
                            <br /> Tài/Xỉu
                            <br /> 2.2.21.2.2.1
                            <br /> Tài/Xỉu hiệp một có nghĩa là cược vào tổng số pha ném biên được hai đội thực hiện trong hiệp một của trận đấu.
                            <br /> 2.2.21.2.2.2
                            <br /> Nếu tổng số quả ném biên lớn hơn mức OU thì kết quả thắng là Tài; nếu tổng số quả ném biên nhỏ hơn mức OU thì kết quả
                            thắng là Xỉu.
                            <br /> 2.2.21.2.2.3
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu lực.
                            <br /> 2.2.21.3
                            <br /> Ném biên đầu tiên
                            <br /> 2.2.21.3.1
                            <br /> Quả ném biên đầu tiên có nghĩa là đặt cược cho đội sẽ thực hiện quả ném biên đầu tiên trong một trận đấu.
                            <br /> 2.2.21.3.2
                            <br /> Nếu trận đấu bị bỏ dở sau khi đã có quả ném biên đầu tiên, lúc ấy tất cả các khoản cược đều có giá trị. Nếu trận đấu
                            bị bỏ dở trước khi có quả ném biên đầu tiên, lúc ấy tất cả các khoản cược đều không có giá trị.
                            <br /> 2.2.21.4
                            <br /> Quả ném biên cuối cùng
                            <br /> 2.2.21.4.1
                            <br /> Quả ném biên cuối cùng có nghĩa là đặt cược cho đội sẽ thực hiện quả ném biên cuối cùng trong một trận đấu.
                            <br /> 2.2.21.4.2
                            <br /> Nếu trận đấu bị huỷ bỏ thì tất cả mọi vé cược sẽ bị vô hiệu lực.
                            <br /> 2.2.22
                            <br /> Tài/Xỉu (OU) trong 10 Phút
                            <br /> 2.2.22.1
                            <br /> Tài/Xỉu (OU) trong 10 Phút cụ thể:
                            <br /> 2.2.22.1.1
                            <br /> Cược (Trên/Dưới) cho mỗi Phút thứ 10 nghĩa là việc cược được xác định bằng tổng số điểm ghi được (bàn thắng, các quả
                            phạt góc, các trận, thẻ, v.vv…) vào thời điểm kết thúc của từng Phút thứ 10 [KHOẢNG GIỮA CỦA] thời gian trongmột trận
                            đấu.
                            <br /> 2.2.22.1.2
                            <br /> Nếu tổng số nhiều hơn số bàn mà cược Tài/Xỉu đã định trước thì kết quả thắng là Trên; Nếu tổng số ít hơn số bàn mà Kèo
                            Tài/Xỉu đã định thì kết quả thắng là Dưới..
                            <br /> 2.2.22.1.3
                            <br /> Ví dụ:
                            <br /> OU (Tài/Xỉu) của Phút thứ 10
                            <br /> 00:00–10:00 O/U : Tổng số điểm được ghi từ phút 00:00 đến 10:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 10.
                            <br /> OU (Tài/Xỉu) của Phút thứ 20
                            <br /> 10:01–20:00 O/U: Tổng số điểm được ghi từ phút 10:01 đến 20:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 20.
                            <br /> OU (Tài/Xỉu) của Phút thứ 30
                            <br /> 20:01 – 30:00 O/U: Tổng số điểm được ghi từ phút 20:01 đến 30:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 30.
                            <br /> OU (Tài/Xỉu) của Phút thứ 40
                            <br /> 30:01 – 40:00 O/U: Tổng số điểm được ghi từ phút 30:01 đến 40:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 40.
                            <br /> OU (Tài/Xỉu) của Phút thứ 60
                            <br /> 50:01 – 60:00 O/U: Tổng số điểm được ghi từ phút 50:01 đến 60:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 60.
                            <br /> OU (Tài/Xỉu) của Phút thứ 70
                            <br /> 60:01 – 70:00 O/U: Tổng số điểm được ghi từ phút 60:01 đến 70:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 70.
                            <br /> OU (Tài/Xỉu) của Phút thứ 80
                            <br /> 70:01 – 80:00 O/U: Tổng số điểm được ghi từ phút 70:01 đến 80:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 80.
                            <br /> OU (Tài/Xỉu) của Phút thứ 90
                            <br /> 80:01 – 90:00 O/U: Tổng số điểm được ghi từ phút 80:01 đến 90:00 Tất cả cược phải được đặt vào hoặc trước khi kết thúc
                            phút thứ 90.
                            <br /> 2.2.22.2
                            <br /> Đối với OU Trong 10 Phút, các cược được dàn xếp vào thời gian chính xác mà bàn thắng được ghi (bóng lăn qua vạch gôn),
                            số quả phạt góc (đã được thực hiện) và tổng thẻ Phạt (do trong tài chính đưa ra) như được hiển thị trên đồng hồ được
                            công bố qua truyền hình trực tiếp.
                            <br /> 2.2.22.3
                            <br /> Nếu trận đấu bị tạm dừng hoặc huỷ bỏ thì cược được đặt cho OU Trong 10 Phút chưa chấm dứt sẽ bị coi là vô hiệu. Nếu
                            O/U Trong 10 Phút chỉ định được hoàn thành thì cược sẽ có hiệu lực..
                            <br /> 2.2.22.4
                            <br /> Trong hai (2) phút cuối của bất kỳ phiên đặt cược trực tiếp O/U 10 Phút Cụ thể, mọi hành động ngoài những hành động
                            được đề cập dưới đây trong văn bản này, sẽ được coi là Lối chơi An toàn và do đó, mọi vé cược đang chờ quyết định có
                            thể được xem xét để chấp nhận: một bàn ghi, đá phạt đền và thẻ đỏ.
                            <br /> 2.2.22.5
                            <br /> Đối với khoảng thời gian từ phút 80:01đến phút thứ 90:00, các trận cược được phân giải vào đúng thời gian mà bàn thắng
                            được ghi (bóng bay qua cửa gôn vào lưới), số lượng trái phạt góc (các quả góc bị phạt) và Tổng số thẻ Phạt (do trọng
                            tài chính đưa ra) như hiện ra trên đồng hồ và như đài phát trực tiếp công bố không tính bất cứ thời gian bù giờ hoặc
                            thời gian bị thương.
                            <br /> 2.2.23
                            <br /> Quy Tắc Bóng Đá Trong Nhà
                            <br /> 2.2.23.1
                            <br /> Tất cả các phiếu cược được dựa trên kết quả cuối cùng theo lịch trình 40 phút (2 × 20 phút) để điều chỉnh thời gian.
                            Thời gian thêm giờ hoặc đá phạt luân lưu không tính.
                            <br /> 2.2.23.2
                            <br /> Nếu trận đấu bị hoãn lại, hoặc ngưng, và không trở lại cùng ngày, tất cả các cược sẽ được coi là không hợp lệ.
                            <br /> 2.2.23.3
                            <br /> Nếu trận đấu bắt đầu trước thời gian dự kiến thì tất cả cược được đặt trước thời gian phát bóng sẽ được coi là hợp lệ.
                            Tất cả các phiếu cược sau thời gian bắt đầu sẽ được coi là không hợp lệ, ngoài trừ Cược Trực Tiếp.
                            <br /> 2.2.24
                            <br /> Vua phá lưới
                            <br /> 2.2.24.1
                            <br /> Chung Cuộc
                            <br /> 2.2.24.1.1
                            <br /> Phản lưới nhà và bàn thắng sút phạt luân lưu sẽ không tính.
                            <br /> 2.2.24.1.2
                            <br /> Tất cả các kết quả được đưa ra khi có kết quả chính thức công khai ở phần cuối của giải đấu bởi bộ phận trọng tài.
                            <br
                            /> 2.2.24.2
                            <br /> Giải Đấu Vua Phá Lưới cầu thủ một chọi một.
                            <br /> 2.2.24.2.1
                            <br /> Phản lưới nhà và bàn thắng sút lượt đá luân lưu sẽ không tính. Tuy nhiên, các bàn thắng được ghi trong thời gian thêm
                            giờ thì được tính.
                            <br /> 2.2.24.2.2
                            <br /> Nếu một cầu thủ không tham gia tại giải đấu, tất cả cá cược sẽ xem như hủy bỏ.
                            <br /> 2.2.24.2.3
                            <br /> Tất cả các kết quả được đưa ra khi có kết quả chính thức công khai ở phần cuối của giải đấu bởi bộ phận trọng tài.
                            <br
                            /> 2.2.24.3
                            <br /> Trận đấu Vua phá lưới cầu thủ một chọi một
                            <br /> 2.2.24.3.1
                            <br /> Phản lưới nhà và bàn thắng sút phạt luân lưu sẽ không tính. Thời gian thêm giờ bị loại trừ và không được tính cho mục
                            đích cá cược.
                            <br /> 2.2.24.3.2
                            <br /> Nếu một cầu thủ không bắt đầu/tham gia tại trận đấu, tất cả cá cược sẽ xem như hủy bỏ.
                            <br /> 2.2.24.3.3
                            <br /> Tất cả các kết quả được đưa ra khi có kết quả chính thức công khai ở phần cuối của trận đấu bởi bộ phận trọng tài.
                            <br
                            /> 2.2.25
                            <br /> Thời gian bù giờ
                            <br /> 2.2.25.1
                            <br /> Thời gian bù giờ là thời gian được bù thêm giờ cho thời gian giành cho cầu thủ bị chấn thương trong trận đấu. Thời gian
                            bù giờ được bù giờ cuối hiệp 1 hoặc cuối hiệp 2 với thời gian như sau:
                            <br /> Không có
                            <br /> 1 phút
                            <br /> 2 phút
                            <br /> 3 phút
                            <br /> 4 +phút
                            <br /> 2.2.25.2
                            <br /> Thời gian bù giờ tại cuối Hiệp 1
                            <br /> 2.2.25.2.1
                            <br /> Tất cả các cược được đặt trong 45 phút đầu của trận đấu không bao gồm thời gian bù giờ. Những cược được đặt vào thời
                            gian bù thời gian chấn thương do trọng tài thứ 4 quyết định, được tính sau 45 phút của trận đấu hoặc vào cuối hiệp 1.
                            <br
                            /> 2.2.25.2.2
                            <br /> Nếu như trận đấu bị ngừng tại một thời điểm nào đó trong hiệp 1, tất cả các cược trên Thời Gian Bù Giờ tại cuối Hiệp
                            1 sẽ được coi là vô hiệu và tiền đặt cược sẽ được hoàn trả vào tài khoản của người chơi..
                            <br /> 2.2.25.3
                            <br /> Thời gian bù giờ tại cuối Hiệp 2
                            <br /> 2.2.25.3.1
                            <br /> Tất cả các cược được đặt trong 90 phút của trận đấu không bao gồm thời gian bù giờ. Những cược được đặt vào thời gian
                            bù thời gian chấn thương do trọng tài thứ 4 quyết định, được tính sau 90 phút của trận đấu hoặc vào cuối hiệp 2.
                            <br /> 2.2.25.3.2
                            <br /> Nếu như trận đấu bị ngừng tại một thời điểm nào đó, tất cả các cược trên Thời Gian Chấn Thương tại cuối Hiệp 2 sẽ được
                            coi là vô hiệu và tiền đặt cược sẽ được hoàn trả vào tài khoản của người chơi.
                            <br /> 2.2.25.4
                            <br /> Nhà Cái Letou sẽ giải quyết các cược dựa trên kết quả chính thức được đưa ra bởi cơ quan thẩm quyển tổ chức trận đấu.
                            <br
                            /> 2.2.26
                            <br /> Cơ hội kép
                            <br /> 2.2.26.1
                            <br /> Có các lựa chọn sau đây:
                            <br /> 1 hoặc X - Nếu tỷ số nghiêng về là đội chủ nhà hoặc tỷ số hòa thì cược vào lựa chọn này sẽ thắng.
                            <br /> X hoặc 2 - Nếu tỷ số hòa hoặc nghiêng về đội khách thì cược vào lựa chọn này sẽ thắng.
                            <br /> 1 hoặc 2 - Nếu tỷ số nghiêng về đội chủ nhà hoặc nghiêng về đội khách thì cược vào lựa chọn này sẽ thắng.
                            <br /> Nếu một trận đấu được chơi tại một địa điểm trung lập, đội được ghi trước được coi là đội chủ nhà cho những mục đích
                            cá cược.
                            <br /> 2.2.27
                            <br /> Cược hòa được hoàn trả
                            <br /> 2.2.27.1
                            <br /> Dự đoán đội giành chiến thắng trong trận đấu là đội chủ nhà hay đội khách trong trận đấu. Nếu kết quả cuối cùng sau
                            thời gian chính thức hoặc ở cuối của khoảng thời gian dự kiến là một trận hòa, tất cả các cược sẽ được hoàn trả.
                            <br /> 2.2.28
                            <br /> Cả hai / Một đội / Không đội nào ghi bàn
                            <br /> Cả hai = cả hai đội đều ghi bàn
                            <br /> Một = chỉ một đội ghi bàn
                            <br /> Không đội nào = cả hai đội đều không ghi bàn
                            <br /> 2.2.29
                            <br /> Thắng Vẫn Giữ Sạch Lưới
                            <br /> 2.2.29.1
                            <br /> Dự đoán liệu đội bạn chọn có thể giành chiến thắng trong trận đấu mà không thủng lưới bàn nào sau khi kết thúc thời
                            gian thi đấu chính hoặc vào cuối trận dự kiến, không bao gồm thời gian thêm giờ hoặc đá luân lưu ra ngoài
                            <br /> 2.2.30
                            <br /> Cược chấp 3 cửa (Cược chấp 3 cửa)
                            <br /> 2.2.30.1
                            <br /> Việc thanh toán sẽ dựa trên tỷ lệ cược hiển thị sử dụng bằng cách sử dụng số bàn thắng thực tế trong trận đấu điều chỉnh
                            với cược chấp.
                            <br /> 2.2.31
                            <br /> Thắng một trong hai hiệp
                            <br /> 2.2.31.1
                            <br /> Dự đoán đội bạn chọn có thể ghi bàn nhiều hơn đội đối thủ trong một trong hai hiệp đấu hay không.
                            <br /> 2.2.32
                            <br /> Thắng cả 2 Hiệp
                            <br /> 2.2.32.1
                            <br /> Dự đoán đội bạn chọn có thể ghi bàn nhiều hơn đội đối thủ trong một trong cả 2 hiệp không.
                            <br /> Ví dụ: Nếu đội bạn lựa chọn đặt cược ghi bàn ở Hiệp 1 và trận đấu kết thúc với tỷ số 1-0, mặc dù Hiệp 1 đội bạn thắng
                            1-0 và tỷ được ghi tại phút 45 của trận đấu, tỷ số của Hiệp 2 là hòa 0-0. Nếu điều đó xảy ra, thì chỉ có Hiệp 1 được
                            xem là thắng, và do đó bạn sẽ thua trong kèo này.
                            <br /> 2.2.33
                            <br /> Cược Vào Đội Có Điểm Số Cao Nhất
                            <br /> Đội có số bàn thắng nhiều nhất là đội chiến thắng.
                            <br /> Chênh lệch tỷ số bàn thắng không được tính.
                            <br /> Nếu các đội bằng điểm nhau thì áp dụng quy tắc Dead Heat.
                            <br /> Hủy trận đấu và hoãn trận đấu.
                            <br /> Các cược đặt vào đội bóng có 1 trận đấu bị hủy hoặc hoãn (nhưng không được thay đổi lịch thi đấu trong thời hạn quy
                            định) sẽ được hủy bỏ..
                            <br /> Ví dụ:
                            <br /> Man city 4 Swansea 4
                            <br /> Liverpool 4 Sunderland 1
                            <br /> Lúc ấy, Liverpool, Man city và Swansea là đội thắng cuộc.2.2.34
                            <br /> Dự đoán tỷ số chính xác tại Hiệp 1
                            <br /> 2.2.34.1
                            <br /> Dự đoán tỷ số chính xác tại Hiệp 1 có nghĩa là tiên đoán tổng số bán thắng được ghi bởi cả 2 đội vào cuối Hiệp 1.
                            <br
                            /> 2.2.34.2
                            <br /> Nếu trận đấu bị cấm thi đấu trước khi kết thúc Hiệp 1, tất cả các cược sẽ bị hủy bỏ.
                            <br /> 2.2.35
                            <br /> Điểm Đội Nhóm:
                            <br /> 2.2.35.1
                            <br /> Có nghĩa đặt cược vào số điểm của một đội kết thúc có số điểm kết thúc vòng cao hơn tại mùa giải.
                            <br /> 2.2.36
                            <br /> Cược đội có điểm số cao hơn
                            <br /> 2.2.36.1
                            <br /> Nghĩa là đặt cược để tiên đoán tổng số bàn thắng được ghi bởi một đội tại một ngày xác định.
                            <br /> 2.2.36.2
                            <br /> Nếu các nhóm có tỷ số bằng nhau, thì luật Dead Heat sẽ được áp dụng.
                            <br /> Ví dụ:
                            <br /> Nhóm A
                            <br /> Poland đá với Greece 2-1 = 3 bàn thắng
                            <br /> Russia đá với Czech 3-2 = 5 bàn thắng
                            <br /> Nhóm A tổng cộng 8 bàn
                            <br /> Nhóm B tổng cộng 7 bàn
                            <br /> Nhóm C tổng cộng 7 bàn
                            <br /> Nhóm D tổng cộng 6 bàn
                            <br /> Vậy thì nhóm A sẽ chiến thắng
                            <br /> 2.2.37
                            <br /> Điểm Đội Nhóm
                            <br /> 2.2.37.1
                            <br /> Cược trên tổng điểm số tại mùa giải có nghĩa là điểm số phải đáp ứng được các yêu cầu, “Dưới”, “Trong khoảng” và “Trên”.
                            <br
                            /> Ví dụ:
                            <br /> Tổng số điểm của nhóm X là 5 điểm
                            <br /> Nếu cược:
                            <br /> Dưới 3 điểm – thua
                            <br /> Trong khoảng 3-4 điểm – thua
                            <br /> Trên 4 điểm – thắng 2.2.38
                            <br /> Dự Đoán Nhóm Nào Sẽ Thắng
                            <br /> 2.2.38.1
                            <br /> Nghĩa là cược tiên đoán xem đội nào sẽ đứng nhất hoặc nhì trong bảng xếp hạng của mùa giải khi mùa giải kết thúc.
                            <br
                            /> 2.2.39
                            <br /> Thời gian bù giờ tại kèo Tài/Xỉu
                            <br /> 2.2.39.1
                            <br /> Thời gian bù giờ cuối hiệp 1 của Tài/Xỉu:
                            <br /> 2.2.39.1.1
                            <br /> Thời gian bù giờ cuối hiệp 1 của Tài/Xỉu là cược vào Tài/Xỉu trong khoảng thời gian bù giờ cuối hiệp 1.
                            <br /> 2.2.39.1.2
                            <br /> Nếu tổng số là nhiều hơn quy tắc OU khi đó kết quả thắng cược là Tài; nếu tổng số là ít hơn quy tắc OU khi đó kết quả
                            thắng cược là Xỉu
                            <br /> 2.2.39.1.3
                            <br /> Tất cả các cược được thanh toán dựa trên thời gian bù giờ do trọng tài thứ tư của trận đấu đưa ra sau 45 phút thi đấu
                            hoặc vào cuối hiệp 1
                            <br /> 2.2.39.2
                            <br /> Thời gian bù giờ cuối hiệp 2 của Tài/Xỉu
                            <br /> 2.2.39.2.1
                            <br /> Thời gian bù giờ cuối hiệp 2 của Tài/Xỉu là cược vào Tài/Xỉu trong khoảng thời gian bù giờ cuối hiệp 2.
                            <br /> 2.2.39.2.2
                            <br /> Nếu tổng số là nhiều hơn quy tắc OU khi đó kết quả thắng cược là Tài; nếu tổng số là ít hơn quy tắc OU khi đó kết quả
                            thắng cược là Xỉu.
                            <br /> 2.2.39.2.3
                            <br /> Tất cả các cược được thanh toán dựa trên thời gian bù giờ do trọng tài thứ tư của trận đấu đưa ra sau 90 phút thi đấu
                            hoặc vào cuối hiệp 2.
                            <br /> 2.2.40
                            <br /> Cách ghi bàn đầu tiên của mỗi đội
                            <br /> 2.2.40.1
                            <br /> Nghĩa là dự đoán cách một trong hai đội sẽ ghi bàn thắng đầu tiên trong trận đấu.
                            <br /> 2.2.40.1.1
                            <br /> Quả đá phạt – bàn thắng sẽ được ghi trực tiếp từ quả đá phạt, nếu cầu thủ ghi bàn cho quả đá phạt sẽ được tính vào,
                            bao gồm quả phạt góc.
                            <br /> 2.2.40.1.2
                            <br /> Đá phạt luân lưu: bàn thắng được ghi trực tiếp từ cầu thủ với quả đá phạt luân lưu.
                            <br /> 2.2.40.1.3
                            <br /> Phản lưới nhà: Nếu bàn thắng được sút vào khung thành lưới nhà thì được công nhận là bàn thắng phản lưới nhà.
                            <br /> 2.2.40.1.4
                            <br /> Đội đầu: bàn thắng được ghi bằng cú đội đầu.
                            <br /> 2.2.40.1.5
                            <br /> Sút: tất cả các loại bàn thắng khác không bao gồm ở trên.
                            <br /> 2.2.40.1.6
                            <br /> Không có bàn thắng
                            <br /> 2.2.40.2
                            <br /> Nhà Cái Letou Letou sẽ xác định các cược dựa vào kết quả chính thức cuối cùng bởi bộ phận có thẩm quyền chịu trách nhiệm
                            tổ chức trận đấu.
                            <br /> 2.2.41
                            <br /> Đá Phạt Luân Lưu – Liệu các quả phạt đền này có ghi bàn thắng?
                            <br /> 2.2.41.1
                            <br /> Có nghĩa là cược để dự đoán cầu thủ thực hiện quả đá phạt sẽ thành công hay thất bại trong đá luân lưu.
                            <br /> 2.2.41.2
                            <br /> Nếu không có đá phạt luân lưu xuất hiện trong trận đấu, tất cả các cược sẽ bị hủy bỏ.
                            <br /> 2.2.42
                            <br /> Dự Đoán Song Hành
                            <br /> 2.2.42.1
                            <br /> Dự đoán song hành có nghĩa là tiên đoán cả 2 đội sẽ nằm trong Top 2, vị trí trước sau không xác định, tại cuối mùa giải.
                            <br
                            /> 2.2.43
                            <br /> Dự Đoán Chính Xác
                            <br /> 2.2.43.1
                            <br /> Dự đoán chính xác có nghĩa là tiên đoán cả 2 đội sẽ nằm trong Top 2, vị trí trước sau phải xác định chính xác, tại cuối
                            mùa giải.
                            <br /> 2.2.44
                            <br /> Dự Đoán Thành Viên Mới
                            <br /> 2.2.44.1
                            <br /> Dự đoán đội có nghĩa là tiên đoán đội nào sẽ trở thành thành viên mới trong Top của một mùa giải. “Thành viên mới” là
                            đội được nâng hạng tham gia trong một mùa giải.
                            <br /> 2.2.45
                            <br /> Dự Đoán Đội Chiến Thắng Theo Vùng
                            <br /> 2.2.45.1
                            <br /> Dự đoán đội chiến thắng theo vùng có nghĩa là đặt cược vào đội nào sẽ thắng trong mùa giải, được phân theo vùng.
                            <br
                            /> Tất cả kết quả được lấy từ kết quả chính thức công bố bởi cơ quan có thẩm quyền của mùa giải.
                            <br /> 2.2.46
                            <br /> Đội nhà Thắng Cược Hoàn trả (Home no bet)
                            <br /> 2.2.46.1
                            <br /> Dự đoán Hòa hoặc Đội khách thắng trong một trận đấu. Nếu kết quả cuối cùng sau thời gian chính thức thi đấu hoặc thời
                            gian dự kiến là Đội Nhà thắng, tất cả vé cược sẽ hoàn tiền.
                            <br /> 2.2.47
                            <br /> Đội Khách Thắng, cược Hoàn Trả (Away No Bet)
                            <br /> 2.2.47.1
                            <br /> Dự đoán Hòa hoặc Đội Nhà thắng trong một trận đấu. Nếu kết quả cuối cùng sau thời gian chính thức thi đấu hoặc thời
                            gian dự kiến là Đội Khách thắng, tất cả vé cược sẽ hoàn tiền.
                            <br /> 2.2.48
                            <br /> Hòa /Không Hòa
                            <br /> 2.2.48.1
                            <br /> Dự đoán Hòa hoặc Không hòa dựa trên kết quả cuối cùng sau thời gian chính thức thi đấu hoặc thời gian dự kiến.
                            <br /> 2.2.49
                            <br /> Tỷ số Chính xác của Hiệp 1 và Hiệp 2
                            <br /> 2.2.49.1
                            <br /> Tỷ số chính xác của Hiệp Một có nghĩa là cá cược dự đoán điểm số cuối cùng khi kết thúc Hiệp Một.
                            <br /> 2.2.49.2
                            <br /> Tỷ số chính xác của Hiệp 2 có nghĩa là cá cược dự đoán điểm số cuối cùng khi kết thúc Hiệp 2 của 1 giải đấu.
                            <br /> 2.2.49.3
                            <br /> Các cược sẽ vô hiệu nếu trận đấu bị hủy trừ khi các cược đã được quyết định thắng thua.
                            <br /> 2.2.50
                            <br /> Kết quả/Tổng bàn thắng
                            <br /> 2.2.50.1
                            <br /> Kết quả/Tổng bàn thắng có nghĩa đặt cược dự đoán cả hai ý sau:
                            <br /> Một trận đấu với kết quả đội chủ nhà thắng, đội khách thắng hay hòa; và
                            <br /> Tổng số bàn thắng trong kết quả cuối cùng của một trận đấu là Tài hay Xỉu.
                            <br /> 2.2.50.2
                            <br /> Có những lựa chọn cá cược như sau:
                            <br /> Đội nhà thắng &amp; Tài – thắng khi đội nhà thắng và tổng số bàn thắng trên tỷ lệ tài-xỉu được quy định.
                            <br /> Đội nhà thắng&amp; Xỉu – thắng khi đội nhà thắng và tổng số bàn thắng dưới tỷ lệ tài-xỉu được quy định.
                            <br /> Đội khách thắng &amp; Tài – thắng khi đội khách thắng và tổng số bàn thắng trên tỷ lệ tài-xỉu được quy định.
                            <br /> Đội khách thắng &amp; Xỉu – thắng khi đội khách thắng và tổng số bàn thắng dưới tỷ lệ tài-xỉu được quy định.
                            <br /> Hòa &amp; Tài – thắng khi trận đấu kết thúc với tỷ số hòa và tổng số bàn thắng trên tỷ lệ tài-xỉu được quy định.
                            <br
                            /> Hòa &amp; Xỉu – thắng khi trận đấu kết thúc với tỷ số hòa và tổng số bàn thắng dưới tỷ lệ tài-xỉu được quy định.
                            <br
                            /> 2.2.51
                            <br /> Team to Win From Behind
                            <br /> 2.2.51. Đội bị dẫn trước thắng
                            <br /> 2.2.51.1. Đội bị dẫn trước thắng có nghĩa là đặt cược vào đội bóng đang bị dẫn trước ở bất cứ thời điểm nào trong trận
                            đấu nhưng cuối cùng lội ngược dòng và giành chiến thắng khi kết thúc 90 phút.
                            <br /> 2.2.52. Cầu thủ ghi bàn đầu tiên
                            <br /> 2.2.52.1. Cầu thủ ghi bàn đầu tiên có nghĩa là đặt vào cầu thủ nào sẽ ghi bàn thắng đầu tiên trong trận đấu.
                            <br /> 2.2.52.2 Cược đặt vào bất kỳ cầu thủ nào không tham gia trong trận đấu sẽ được xem là vô hiệu và được hoàn tiền.
                            <br
                            /> 2.2.52.3
                            <br /> Cược đặt vào bất kỳ cầu thủ nào ra sân từ băng ghế dự bị sau khi bàn thắng đầu tiên được ghi sẽ được xem là vô hiệu
                            và được hoàn tiền.
                            <br /> 2.2.52.4
                            <br /> Bàn phản lưới nhà không được tính là bàn thắng đầu tiên. Trong trường hợp này, cầu thủ ghi bàn tiếp theo sẽ được coi
                            là cầu thủ ghi bàn mở tỷ số.
                            <br /> 2.2.52.5
                            <br /> Thời điểm cầu thủ được chọn sau khi bàn mở tỷ số được ghi, cược vào cầu thủ này sẽ được xem là vô hiệu trừ khi bàn mở
                            tỷ số là bàn phản lưới nhà, khi đó phần đặt cược vẫn được tính.
                            <br /> 2.2.52.6
                            <br /> Đặt cược vào các cầu thủ dự bị hay bị truất quyền thi đấu trước bàn mở tỷ số sẽ được coi là thua cược.
                            <br /> 2.2.52.7
                            <br /> Đặt cược vào “không có cầu thủ ghi bàn” sẽ thắng khi không có cầu thủ nào ghi bàn trong trận đấu. Nếu một bàn phản lưới
                            nhà là bàn duy nhất trong trận đấu, đặt cược vào “không có cầu thủ ghi bàn” vẫn thắng.
                            <br /> 2.2.53
                            <br /> Đội đầu tiên ghi 2 bàn thắng
                            <br /> 2.2.53.1
                            <br /> Có nghĩa là đặt cược vào đội bóng nào sẽ là đội ghi 2 bàn thắng trước trong một trận đấu.
                            <br /> *Đội nhà
                            <br /> *Đội khách
                            <br /> *Không có đội nào
                            <br /> 2.2.53.2
                            <br /> Nếu một trận đấu bị hủy sau khi một đội bóng ghi được 2 bàn thắng, tất cả các cược sẽ được giữ nguyên.
                            <br /> 2.2.53.3
                            <br /> Nếu một trận đấu bị hủy trước khi có đội bóng ghi được 2 bàn, tất cả các cược sẽ được xem là vô hiệu.
                            <br /> 2.2.54
                            <br /> Đội bóng đầu tiên ghi được 3 bàn thắng
                            <br /> 2.2.54.1
                            <br /> Có nghĩa là đặt cược vào đội bóng nào sẽ ghi 3 bàn thắng trước trong một trận đấu..
                            <br /> * Đội nhà
                            <br /> * Đội khách
                            <br /> * Không có đội nào
                            <br /> 2.2.54.2
                            <br /> Nếu một trận đấu bị hủy sau khi một đội bóng ghi được 3 bàn, tất cả các cược sẽ được giữ nguyên.
                            <br /> 2.2.54.3
                            <br /> Nếu một trận đấu bị hủy trước khi có đội bóng ghi được 3 bàn thắng, , tất cả các cược sẽ được xem là vô hiệu.
                            <br /> 2.2.55
                            <br /> Thời điểm ghi bàn thắng đầu tiên
                            <br /> 2.2.55.1
                            <br /> Có nghĩa là đặt cược dự đoán thời điểm bàn thắng đầu tiên được ghi..
                            <br /> 2.2.55.2
                            <br /> Các lựa chọn trong đặt cược thời gian ghi bàn:
                            <br /> · 00:00 - 10:00
                            <br /> · 10:01 - 20:00
                            <br /> · 20:01 - 30:00
                            <br /> · 30:01 - 40:00
                            <br /> · 40:01 - 50:00
                            <br /> · 50:01 - 60:00
                            <br /> · 60:01 - 70:00
                            <br /> · 70:01 - 80:00
                            <br /> · 80:01 – Hết trận
                            <br /> · Không có bàn thắng
                            <br /> 2.2.55.3
                            <br /> Nếu một trận đấu bị hủy sau khi bàn thắng đầu tiên được ghi, tất cả các cược được giữ nguyên.
                            <br /> 2.2.55.4
                            <br /> Nếu một trận đấu bị hủy trước khi bàn thắng đầu tiên được ghi, tất cả các cược sẽ được xem là vô hiệu..
                            <br /> 2.2.56
                            <br /> Bàn thắng đầu tiên được ghi trong hiệp nào
                            <br /> 2.2.56.1
                            <br /> Có nghĩa là đặt cược vào hiệp đấu mà bàn thắng đầu tiên được ghi.
                            <br /> 2.2.56.2
                            <br /> Các lựa chọn đặt cược như sau:
                            <br /> · Hiệp một
                            <br /> · Hiệp hai
                            <br /> · Không có bàn thắng
                            <br /> 2.2.56.3
                            <br /> Nếu một trận đấu bị hủy sau khi bàn thắng đầu tiên được ghi trong hiệp một, tất cả các cược sẽ được giữ nguyên.
                            <br /> 2.2.56.4
                            <br /> Nếu một trận đấu bị hủy ở bất kỳ thời điểm nào trước khi bàn thắng đầu tiên được ghi, tất cả các cược sẽ được xem là
                            vô hiệu..
                            <br /> 2.2.56.5
                            <br /> Trong 2 phút cuối của bất kì 15 phút cố định đặt cược chấp trực tiếp, bất kỳ hành động đặt cược nào ngoài các trường
                            hợp dưới đây, sẽ được coi là hành động đặt cược an toàn (Safe play) và các cược đang chờ có thể được chấp nhận: một bàn
                            thắng, một quả phạt đền và thẻ đỏ.
                            <br /> 2.2.56.6
                            <br /> Từ phút 30:01 đến 45:00 và từ phút 75:01 đến 90:00, cược được quyết định vào thời gian chính xác bàn thắng được ghi
                            (bóng lăn qua vạch cầu môn), số quả phạt góc và tổng số thẻ (được trọng tài rút ra) được thể hiện trên đồng hồ khi trận
                            đấu trực tiếp, không tính thời gian bù giờ.
                            <br /> 2.2.57
                            <br /> Cả hai đội đều ghi bàn/Kết quả nguyên trận và cả 2 đội ghi bàn/kết quả nửa trận
                            <br /> 2.2.57.1
                            <br /> Cả hai đội ghi bàn / kết quả tức là đặt cược dự đoán cả hai:
                            <br /> (A) Cả hai đội sẽ ghi bàn trong trận đấu và;
                            <br /> (B) Kết quả trận đấu sẽ là Đội nhà thắng hoặc Đội khách thắng hoặc Hòa.
                            <br /> 2.2.57.2
                            <br /> Những tùy chọn cược như sau:
                            <br /> · Đúng &amp; Đội nhà – cược thắng khi cả hai đội ghi bàn và Đội nhà thắng.
                            <br /> · Đúng &amp; Đội khách – cược thắng khi cả hai đội ghi bàn và Đội khách thắng.
                            <br /> . Đúng &amp; Hòa – cược thắng khi cả hai đội ghi bàn và Hòa.
                            <br /> 2.2.57.3
                            <br /> Cược cả hai đội ghi bàn/Kết quả hiệp một nghĩa là cược để dự đoán kết quả hiệp một của trận đấu và liệu cả hai đội có
                            ghi bàn trong hiệp một hay không.
                            <br /> 2.2.57.4
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi việc thanh toán tiền cược đã được xác định.
                            <br /> 2.2.58
                            <br /> Chẵn/lẻ cho nửa trận/cả trận
                            <br /> 2.2.58.1
                            <br /> Chẵn/lẻ cho nửa trận/cả trận nghĩa là cá cược dự đoán kết quả của nửa trận và kết quả của cả trận đấu là lẻ/lẻ, lẻ/chẵn,
                            chẵn/lẻ hay chẵn/chẵn.
                            <br /> 2.2.58.2
                            <br /> Có bốn (4) phương án cược:
                            <br /> · Lẻ/Lẻ
                            <br /> · Lẻ/Chẵn
                            <br /> · Chẵn/Lẻ
                            <br /> · Chẵn/Chẵn
                            <br /> 2.2.58.3
                            <br /> Đối với kiểu cá cược này, tất cả mọi thời gian bù giờ sẽ không được tính để xác định kết quả của cả trận đấu.
                            <br /> 2.2.58.4
                            <br /> Khoản cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ, trừ trường hợp đã xác định từ trước việc thanh toán cá cược.
                            <br
                            /> 2.2.59
                            <br /> Cả hai đội ghi bàn/kết quả và cả hai đội ghi bàn/kết quả hiệp một
                            <br /> 2.2.59.1
                            <br /> Cả hai đội ghi bàn/kết quả có nghĩa đặt cược dự đoán cả hai ý sau:
                            <br /> (A) một trận đấu mà cả hai đội ghi bàn và;
                            <br /> (B) một trận đấu có kết quả đội nhà thắng hoặc đội khách thắng hoặc hòa.
                            <br /> 2.2.59.2
                            <br /> Các trường hợp đặt cược sau:
                            <br /> · Có &amp; Đội nhà – thắng khi cả hai đội ghi bàn và đội nhà thắng.
                            <br /> · Có &amp; Đội khách – thắng khi cả hai đội ghi bàn và đội khách thắng.
                            <br /> · Có &amp; Hòa – thắng khi cả hai đội ghi bàn và trận đấu kết thúc với tỷ số hòa.
                            <br /> 2.2.59.3
                            <br /> Cả hai đội ghi bàn/Kết quả hiệp một có nghĩa là đặt cược vào kết quả hiệp một của trận đấu và cả hai đội có ghi bàn
                            trong hiệp một hay không.
                            <br /> 2.2.59.4
                            <br /> Các cược sẽ vô hiệu nếu trận đấu bị hoãn trừ khi việc đặt cược đã được quyết định.
                            <br /> 2.2.60
                            <br /> Cược Hiệp mà mà đội nhà ghi bàn thắng trước
                            <br /> 2.2.60.1
                            <br /> Có nghĩa là dự đoán vào hiệp đấu nào của trận mà đội nhà ghi bàn thắng đầu tiên.
                            <br /> 2.2.60.2
                            <br /> Một số trường hợp đặt cược như sau:
                            <br /> * Hiệp một
                            <br /> * Hiệp hai
                            <br /> * Không có bàn thắng
                            <br /> 2.2.61
                            <br /> Hiệp đấu mà đội khách ghi bàn thắng đầu tiên
                            <br /> 2.2.61.1
                            <br /> Có nghĩa là đặt cược vào hiệp đấu mà đội khách ghi bàn thắng đầu tiên.
                            <br /> 2.2.61.2
                            <br /> Các lựa chọn đặt cược như sau:
                            <br /> * Hiệp một
                            <br /> * Hiệp hai
                            <br /> * Không có bàn thắng
                            <br /> 2.2.62
                            <br /> Tỷ lệ đặt cược 15 phút cố định (HDP)
                            <br /> 2.2.62.1
                            <br /> Tỷ lệ đặt cược 15 phút cụ thể có nghĩa là đặt cược khi một đối thủ hay đội bóng có lợi thế ảo. Đội thắng sẽ là đối thủ
                            hay đội bóng ghi bàn nhiều hơn sau khi cộng tỉ lệ chấp vào kết quả vào cuối mỗi 15 phút của hiệp đấu hoặc trận đấu.
                            <br
                            /> 2.2.62.2
                            <br /> Ví dụ:
                            <br />
                            <br /> Phút thứ 15 HDP
                            <br /> 00:00 đến 15:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 00:00 cho đến phút 15:00.Tất cả
                            cược cần được đặt vào hoặc trước khi kết thúc phút thứ 15.
                            <br />
                            <br /> Phút thứ 30 HDP
                            <br /> 15:01 đến 30:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 15:01 đến phút thứ 30:00.Tất cả
                            cược cần được đặt vào hoặc trước khi kết thúc phút thứ 30.
                            <br />
                            <br /> Phút thứ 45 HDP
                            <br /> 30:01 đến 45:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 30:01 đến phút thứ 45:00.Tất cả
                            cược cần được đặt vào hoặc trước khi kết thúc phút thứ 45.
                            <br />
                            <br /> Phút thứ 60 HDP
                            <br /> 45:01 đến 60:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 45:01 đến phút thứ 60:00.Tất cả
                            phần cược sẽ được thay thế trong hoặc trước khi kết thúc phút thứ 60.
                            <br />
                            <br /> Phút thứ 75 HDP
                            <br /> 60:01 – 75:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 60:01 đến phút thứ 75:00.Tất cả
                            cược cần được đặt vào hoặc trước khi kết thúc phút thứ 75.
                            <br />
                            <br /> Phút thứ 90 HDP
                            <br /> 75:01- 90:00 HDP: Đội thắng là đối thủ hoặc đội bóng ghi bàn nhiều hơn từ phút thứ 75:01 đến phút thứ 90:00.Tất cả cược
                            cần được đặt vào hoặc trước khi kết thúc phút thứ 90.
                            <br /> 2.2.62.3
                            <br /> Trong 15 phút cụ thể, các cược đặt vào thời gian chính xác bàn thắng được ghi (bóng lăn qua vạch cầu môn), số quả phạt
                            góc và tổng số thẻ (được trọng tài chính rút ra) được thể hiện trên đồng hồ trong trận đấu trực tiếp.
                            <br /> 2.2.62.4
                            <br /> Nếu một trận đấu bị hoãn hay hủy, các cược được đặt vào khoảng thời gian trong 15 phút cố định chưa kết thúc sẽ được
                            coi là vô hiệu. Nếu 15 phút cố định đã hoàn tất thì phần cược sẽ có giá trị.
                            <br /> 2.2.62.5
                            <br /> Trong 2 phút cuối của bất kỳ 15 phút cố định HDP trực tiếp nào, bất kỳ hành động nào ngoài các trường hợp dưới đây sẽ
                            được coi là hành động đặt cược an toàn và do đó sẽ chờ phần cược được thay thế có thể như: một bàn thắng, đá luân lưu
                            hay thẻ đỏ./p&gt;
                            <br /> 2.2.62.6
                            <br /> Trong thời gian từ phút 30:01 đến 45:00 và 75:01 đến 90:00, các cược được đặt vào thời gian chính xác bàn thắng được
                            ghi (bóng qua vạch cầu môn), số quả phạt góc, tổng số thẻ (được trọng tài chính rút ra) được thể hiện trên đồng hồ phát
                            sóng trực tiếp trừ thời gian bù giờ.
                            <br /> 2.2.63
                            <br /> Trận đấu kinh điển: Đội bóng ghi bàn trước
                            <br /> 2.2.63.1
                            <br /> Trận đấu kinh điển: Đội bóng ghi bàn trước có nghĩa là đặt cược vào đội bóng ghi bàn đầu tiên trong một trận đấu kinh
                            điển.
                            <br />
                            <br /> Ví dụ:
                            <br /> Các trận đấu: Man City và Liverpool; Chelsea và Man United Fantasy Match: Man City và Chelsea Man City ghi bàn đầu tiên
                            ở phút thứ 25:10 Chelsea ghi bàn đầu tiên ở phút 25:48 Cược thắng: Man City.
                            <br /> 2.2.63.2
                            <br /> Nếu cả hai trận đấu kết thúc cùng giờ (phút và giây) hay không có bàn thắng nào từ cả hai trận đấu, trận đấu kinh điển
                            sẽ được coi là hòa.
                            <br /> 2.2.63.3
                            <br /> Nếu một trận đấu bị hủy hoặc bị hoãn sau khi bàn thắng đầu tiên được ghi trong một trận đấu còn lại, tất cả phần cược
                            sẽ được giữ nguyên. Nếu một trận đấu bị hủy hoặc bị hoãn trước khi bàn thắng đầu tiên trong trận đấu còn lại được ghi,
                            tất cả phần cược sẽ được xem là vô hiệu.
                            <br />
                            <br /> Ví dụ:
                            <br /> Các trận đấu: Man City và Liverpool; Chelsea và Man United
                            <br /> Fantasy Match: Man City và Chelsea
                            <br /> Man City ghi bàn thắng đầu tiên ở phút 25:10
                            <br /> Trận đấu của Chelsea bị hủy hoặc bị hoãn trước phút 25:10
                            <br /> Kết quả: tất cả phần cược được bỏ trống.2.2.63.4
                            <br /> Nếu cả hai trận đấu bị hủy mà không có bàn thắng, tất cả các cược sẽ được xem là vô hiệu.
                            <br /> 2.2.63.5
                            <br /> Bất kỳ bàn thắng nào được ghi trong hiệp phụ sẽ không được tính.
                            <br /> 2.2.64
                            <br /> Đội châu Âu đứng đầu
                            <br /> 2.2.64.1
                            <br /> Cược đội châu Âu đứng đầu nghĩa là cược đội châu Âu nào sẽ tiến xa nhất trong giải đấu FIFA World Cup.
                            <br /> 2.2.64.2
                            <br /> Nếu hai đội châu Âu thi đấu trong trận chung kết hoặc tranh hạng ba, đội chiến thắng trận đấu sẽ được xem là Đội châu
                            Âu đứng đầu.
                            <br /> 2.2.64.3
                            <br /> Trong các trường hợp khác khi có nhiều đội châu Âu rời giải đấu trong cùng một vòng xa nhất, quy tắc "Đồng hạng" (Dead
                            Heat) sẽ được áp dụng và tỷ lệ trả (trừ tiền đặt cược) được chia cho số người chiến thắng và được thanh toán tương ứng
                            với tiền đặt cược được trả lại.
                            <br /> 2.2.64.4
                            <br /> Tất cả các khoản cược cho Đội châu Âu đứng đầu sẽ được thanh toán khi FIFA công bố đội chiến thắng chính thức trận chung
                            kết hoặc tranh hạng ba hoặc khi đội châu Âu cuối cùng rời khỏi giải đấu.
                            <br /> 2.2.65
                            <br /> Đội Nam Mỹ đứng đầu
                            <br /> 2.2.65.1
                            <br /> Cược Đội Nam Mỹ đứng đầu nghĩa là cược đội Nam Mỹ nào sẽ tiến xa nhất trong giải đấu FIFA World Cup.
                            <br /> 2.2.65.2
                            <br /> Nếu hai đội Nam Mỹ thi đấu trong trận chung kết hoặc tranh hạng ba, đội chiến thắng trận đấu sẽ được xem là Đội Nam
                            Mỹ đứng đầu.
                            <br /> 2.2.65.3
                            <br /> Trong các trường hợp khác khi có nhiều đội Nam Mỹ rời giải đấu trong cùng một vòng xa nhất, quy tắc "Đồng hạng" (Dead
                            Heat) sẽ được áp dụng và tỷ lệ trả (trừ tiền đặt cược) được chia cho số người chiến thắng và được thanh toán tương ứng
                            với tiền đặt cược được trả lại.
                            <br /> 2.2.65.4
                            <br /> Tất cả các khoản cược cho Đội Nam Mỹ đứng đầu sẽ được thanh toán khi FIFA công bố đội chiến thắng chính thức trận chung
                            kết hoặc tranh hạng ba hoặc khi đội Nam Mỹ cuối cùng rời khỏi giải đấu.
                            <br /> 2.2.66
                            <br /> Đội Châu Phi đứng đầu
                            <br /> 2.2.66.1
                            <br /> Cược Đội Châu Phi đứng đầu nghĩa là cược đội Châu Phi nào sẽ tiến xa nhất trong giải đấu FIFA World Cup.
                            <br /> 2.2.66.2
                            <br /> Nếu hai đội Châu Phi thi đấu trong trận chung kết hoặc tranh hạng ba, đội chiến thắng trận đấu sẽ được xem là Đội Châu
                            Phi đứng đầu.
                            <br /> 2.2.66.3
                            <br /> Trong các trường hợp khác khi có nhiều đội Châu Phi rời giải đấu trong cùng một vòng xa nhất, quy tắc "Đồng hạng" (Dead
                            Heat) sẽ được áp dụng và tỷ lệ trả (trừ tiền đặt cược) được chia cho số người chiến thắng và được thanh toán tương ứng
                            với tiền đặt cược được trả lại.
                            <br /> 2.2.66.4
                            <br /> Tất cả các khoản cược cho Đội Châu Phi đứng đầu sẽ được thanh toán khi FIFA công bố đội chiến thắng chính thức trận
                            chung kết hoặc tranh hạng ba hoặc khi đội Châu Phi cuối cùng rời khỏi giải đấu.
                            <br /> 2.2.67
                            <br /> Cả hai đội ghi bàn
                            <br /> 2.2.67.1
                            <br /> Cược cả hai đội ghi bàn nghĩa là cược để dự đoán liệu một trận đấu sẽ có kết quả là cả hai đội ghi bàn hay không.
                            <br
                            /> 2.2.67.2
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp vé cược đã được quyết định.
                            <br /> 2.2.68
                            <br /> Cả hai đội ghi bàn trong hiệp một
                            <br /> 2.2.68.1
                            <br /> Cược cả hai đội ghi bàn trong hiệp một nghĩa là cược để dự đoán liệu cả hai đội sẽ ghi bàn trong hiệp một của trận đấu.
                            <br
                            /> 2.2.68.2
                            <br /> Nếu một trận đấu bị hủy bỏ sau khi cả hai đội đã ghi bàn trong hiệp một, thì cược ‘Có’ sẽ được xác định là thắng cuộc
                            và cược ‘Không’ là thua cuộc. Nếu trận đấu bị hoãn hoặc hủy bỏ trước khi kết thúc Hiệp Một mà cả hai đội không ghi bàn,
                            tất cả các khoản cược sẽ vô hiệu.
                            <br /> 2.2.69
                            <br /> Cả hai đội ghi bàn trong Hiệp Hai
                            <br /> 2.2.69.1
                            <br /> Cược cả hai đội sẽ ghi bàn trong Hiệp Hai nghĩa là cược để dự đoán liệu cả hai đội có ghi bàn trong hiệp hai của một
                            trận đấu hay không.
                            <br /> 2.2.69.2
                            <br /> Nếu một trận đấu bị hủy bỏ sau khi cả hai đội đã ghi bàn trong hiệp hai, thì các khoản cược ‘Có’ sẽ được xác định là
                            thắng cuộc và cược ‘Không’ là thua cuộc. Nếu trận đấu bị hoãn lại hoặc hủy bỏ mà cả hai đội đều không ghi bàn thì tất
                            cả các khoản cược sẽ vô hiệu.
                            <br /> 2.2.70
                            <br /> Cả hai đội sẽ ghi bàn trong hiệp một và/hoặc hiệp hai
                            <br /> 2.2.70.1
                            <br /> Cược cả hai đội sẽ ghi bàn trong Hiệp Một và/hoặc Hiệp Hai nghĩa là cược để dự đoán liệu cả hai đội có ghi bàn trong
                            hiệp một và liệu cả hai đội có ghi bàn trong hiệp hai của trận đấu hay không.
                            <br /> 2.2.70.2
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi cả hai đội đã ghi bàn trong hiệp một và hiệp hai của trận đấu.
                            <br
                            /> 2.2.71
                            <br /> Cả hai đội sẽ ghi bàn/Tổng số bàn thắng
                            <br /> 2.2.71.1
                            <br /> Cược cả hai đội sẽ ghi bàn/Tổng số bàn thắng nghĩa là cược để dự đoán tổng số bàn thắng trong trận đấu và liệu cả hai
                            đội có ghi bàn trong trận đấu hay không.
                            <br /> 2.2.71.2
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi việc thanh toán tiền cược đã được xác định.
                            <br /> 2.2.72
                            <br /> Kết quả hiệp một/Tổng số bàn thắng
                            <br /> 2.2.72.1
                            <br /> Cược kết quả hiệp một/Tổng số bàn thắng nghĩa là cược để dự đoán kết quả của hiệp một của trận đấu và tổng số bàn thắng
                            của hiệp một.
                            <br /> 2.2.72.2
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trong hiệp một của trận đấu. Các khoản cược sẽ giữ nguyên giá trị nếu
                            trận đấu bị hủy bỏ trong hiệp hai của trận đấu.
                            <br /> 2.2.73
                            <br /> Đội nhà ghi bàn trong Hiệp Một/ghi bàn trong Hiệp Hai
                            <br /> 2.2.73.1
                            <br /> Cược Đội nhà sẽ ghi bàn trong Hiệp Một/ghi bàn trong Hiệp Hai nghĩa là cược để dự đoán liệu Đội nhà có ghi bàn trong
                            hiệp một và hiệp hai của trận đấu hay không.
                            <br /> 2.2.73.2
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi việc thanh toán tiền cược đã được xác định.
                            <br /> 2.2.74
                            <br /> Đội khách ghi bàn trong Hiệp Một/ghi bàn trong Hiệp Hai
                            <br /> 2.2.74.1
                            <br /> Cược Đội khách sẽ ghi bàn trong Hiệp Một/ghi bàn trong Hiệp Hai nghĩa là cược để dự đoán liệu Đội khách có ghi bàn trong
                            hiệp một và hiệp hai của trận đấu hay không.
                            <br /> 2.2.74.2
                            <br /> Các khoản cược sẽ vô hiệu nếu trận đấu bị hủy bỏ trừ khi việc thanh toán tiền cược đã được xác định.
                            <br /> 2.2.75
                            <br /> 15 phút cụ thể 1X2
                            <br /> 2.2.75.1
                            <br /> 15 phút cụ thể 1X2 nghĩa là đặt cược để dự đoán 3 kết quả chiến thắng bất kỳ có thể xảy ra vào cuối mỗi phút thứ 15
                            (chu kỳ) của trận đấu. 1 là đội được xướng tên trước (thường là đội nhà); X là trận đấu dẫn đến kết quả hòa; 2 là đội
                            được xướng tên sau (thường là đội khách).
                            <br /> 2.2.75.2
                            <br /> Ví dụ:
                            <br /> Phút thứ 15 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 00:00 – 15:00 Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 15.
                            <br />
                            <br /> Phút thứ 30 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 15:01 – 30:00. Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 30.
                            <br />
                            <br /> Phút thứ 45 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 30:01 – 45:00. Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 45.
                            <br />
                            <br /> Phút thứ 60 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 45:01 – 60:00. Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 60.
                            <br />
                            <br /> Phút thứ 75 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 60:01 – 75:00. Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 75.
                            <br />
                            <br /> Phút thứ 90 1X2
                            <br /> Dự đoán một trong ba kết quả chiến thắng bất kỳ giữa 1X2 từ 75:01 – 90:00. Tất cả giá trị cược phải được đặt trước khi
                            kết thúc phút thứ 90
                            <br />
                            <br /> 2.2.75.3
                            <br /> Đối với 15 phút cụ thể 1X2, các giá trị cược được chung chi ngay tại thời điểm bàn thắng được ghi (bóng qua vạch cầu
                            môn), số lần đá phạt góc và tổng số thẻ phạt (từ trọng tài) theo như thông số tường thuật trực tiếp.
                            <br /> 2.2.75.4
                            <br /> Nếu trận đấu bị gián đoạn hoặc hủy bỏ, các giá trị cược đã đặt cho khoảng thời gian 15 phút chưa kết thúc giữa 1X2 sẽ
                            bị hủy. Nếu khoảng thời gian 15 phút đã xác định giữa 1X2 đã kết thúc thì giá trị cược sẽ được tính.
                            <br /> 2.2.75.5
                            <br /> Đối với việc đặt cược trực tiếp trong (2) phút cuối của loại cược 15 phút cụ thể 1X2, bất kỳ tình huống nào ngoài các
                            tình huống được đề cập sau đây sẽ được xem là Chơi an toàn và vì vậy, tất cả giá trị cược đang chờ xử lý sẽ được xem
                            xét chấp nhận: ghi bàn, phạt đền và thẻ đỏ.
                            <br /> 2.2.75.6
                            <br /> . Đối với phút 30:01 – 45:00 &amp; 75:01 – 90:00, các giá trị cược được chung chi ngay tại thời điểm bàn thắng được
                            ghi (bóng qua vạch cầu môn), số lần đá phạt góc và tổng số thẻ phạt (từ trọng tài) theo như thông số tường thuật trực
                            tiếp ngoại trừ thời gian bù giờ hoặc chấn thương.
                            <br /> 2.2.76
                            <br /> Đội Sẽ Lọt Vào Vòng Tiếp Theo Của Giải Đấu
                            <br /> 2.2.76.1
                            <br /> Đội nào sẽ lọt vào vòng tiếp theo là loại cược dự đoán đội nào sẽ lọt vào vòng tiếp theo của giải đấu.
                            <br /> 2.2.77
                            <br /> Cược chấp 10 phút xác định (Specific 10-Minute Handicap)
                            <br /> 2.2.77.1
                            <br /> Cược chấp 10 phút xác định có nghĩa là đặt cược khi một đối thủ hay đội bóng đã có được lợi thế dẫn trước ảo. Đội thắng
                            là đối thủ hay đội bóng có tỷ số cao hơn sau khi đã cộng tỷ lệ chấp vào kết quả vào 10 phút cuối mỗi hiệp của trận đấu.
                            <br
                            /> 2.2.77.2
                            <br /> Ví dụ:
                            <br /> Cược chấp phút thứ 10
                            <br /> Dự đoán một trong ba kết quả 1X2 có thể xảy ra từ 00:00 – 15:00. Tất cả các cược cần được đặt đúng vào hoặc trước phút
                            thứ 15.
                            <br />
                            <br /> Cược chấp phút thứ 20
                            <br /> 10:01 – 20:00: Đội thắng là đối thủ hay đội bóng có tỷ số cao hơn từ phút thứ 10:01 đến phút thứ 20:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 20.
                            <br />
                            <br /> Cược chấp phút thứ 30
                            <br /> 20:01 – 30:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 20:01 đến phút thứ 30:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 30.
                            <br />
                            <br /> Cược chấp phút thứ 40
                            <br /> 30:01 – 40:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 30:01 đến phút thứ 40:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 40.
                            <br />
                            <br /> Cược chấp phút thứ 50
                            <br /> 40:01 – 50:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 40:01 đến phút thứ 50:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 50.
                            <br />
                            <br /> Cược chấp phút thứ 60
                            <br /> 50:01 – 60:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 50:01 đến phút thứ 60:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 60.
                            <br />
                            <br /> Cược chấp phút thứ 70
                            <br /> 60:01 – 70:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 60:01 đến phút thứ 70:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 70.
                            <br />
                            <br /> Cược chấp phút thứ 80
                            <br /> 70:01 – 80:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 70:01 đến phút thứ 80:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 80.
                            <br />
                            <br /> Cược chấp phút thứ 90
                            <br /> 80:01 – 90:00: Đội thắng là đối thủ hoặc đội bóng có tỷ số cao hơn từ phút thứ 80:01 đến phút thứ 90:00. Tất cả vé cược
                            phải được xác nhận trong hoặc trước khi kết thúc phút thứ 90.
                            <br />
                            <br /> 2.2.77.3
                            <br /> Với cược chấp 10 phút xác định, vé cược sẽ được xác định vào thời gian chính xác bàn thắng được ghi (bóng lăn qua vạch),
                            số pha phạt góc (phạt góc được thực hiện) và tổng số thẻ (thẻ được trọng tài rút ra) được thể hiện trên đồng hồ công
                            khai trên phát sóng trực tiếp..
                            <br /> 2.2.77.4
                            <br /> Nếu trận đấu bị hủy hoặc bị hoãn, các vé cược sẽ được xác định là chưa kết thúc trong cược chấp 10 phút xác định sẽ
                            bị bỏ trống. Nếu cược chấp 10 phút xác định đã có kết quả, các vé cược sẽ được giữ nguyên hiệu lực.
                            <br /> 2.2.77.5
                            <br /> Trong 2 phút cuối của bất kỳ cược chấp 10 phút xác định trực tiếp nào, bất kỳ hành vi nào ngoài các quy định trong và
                            dưới đây, sẽ được coi là cược an toàn và do đó tất cả vé cược chờ duyệt sẽ được xem xét chấp nhận: một bàn thắng, một
                            quả phạt đền và thẻ đỏ.
                            <br /> 2.2.77.6
                            <br /> Phút thứ 80:01 đến phút thứ 90:00, các vé cược được xác định vào thời gian chính xác bàn thắng được ghi (bóng lăn qua
                            vạch vôi), số pha phạt góc (được thực hiện) và tổng số thẻ (được trọng tài rút ra) được thể hiện trên đồng hồ công khai
                            trên phát sóng trực tiếp không tính thời gian bù giờ và hiệp phụ.
                            <br /> 2.2.78
                            <br /> Phạt đền đầu tiên được ghi và không được ghi
                            <br /> 2.2.78.1
                            <br /> Phạt đền đầu tiên được ghi và không được ghi có nghĩa là đặt cược vào dự đoán pha phạt đền đầu tiên của đội bóng thành
                            công hay thất bại. .
                            <br /> 2.2.79
                            <br /> Nhà tài trợ áo đấu số một
                            <br /> 2.2.79.1
                            <br /> Nhà tài trợ áo đấu số một có nghĩa là đặt cược vào dự đoán nhà tài trợ áo đấu nào tài trợ đội bóng vô địch.
                            <br /> 2.2.80
                            <br /> Châu lục của huấn luyện viên trưởng đội vô địch
                            <br /> 2.2.80.1
                            <br /> Châu lục của huấn luyện viên trưởng đội vô địch có nghĩa là đặt cược vào dự đoán quốc tịch của huấn luyện viên trưởng
                            đội bóng sẽ giành chức vô địch.
                            <br /> 2.2.81
                            <br /> Cách biệt chiến thắng
                            <br /> 2.2.81.1
                            <br /> Cách biệt chiến thắng có nghĩa là đặt cược vào đội thắng trong trận đấu và cách biệt bàn thắng giữa đội nhà và đội khách.
                            <br
                            /> 2.2.81.2
                            <br /> Các lựa chọn cho thể loại đặt cược này được thể hiện trên website. Ví dụ:
                            <br /> • Đội nhà thắng 1 bàn
                            <br /> • Đội nhà thắng 2 bàn
                            <br /> • Đội nhà thắng từ 3 bàn trở lên
                            <br /> • Bất kỳ bàn thắng nào mang lại kết quả hòa
                            <br /> • Đội khách thắng 1 bàn
                            <br /> • Đội khách thắng 2 bàn
                            <br /> • Đội khách thắng từ 3 bàn trở lên2.2.81.3
                            <br /> Với thể loại cược này, thời gian hiệp phụ sẽ không được tính vào cách biệt bàn thắng.
                            <br /> 2.2.82
                            <br /> Bàn thắng tiếp theo, Bàn thắng tiếp tại Hiệp 1 &amp; và Bàn thắng tiếp theo tại Hiệp Phụ
                            <br /> 2.2.82.1
                            <br /> Bàn thắng tiếp theo có nghĩa là đặt cược vào dự đoán đội bóng ghi được bàn thắng tiếp theo trong trận đấu.
                            <br /> 2.2.82.2
                            <br /> Bàn thắng tiếp theo trong hiệp 1 nghĩa là cược dự đoán đội nào sẽ ghi bàn thắng tiếp theo trong hiệp 1 của trận đấu.
                            <br
                            /> 2.2.82.3
                            <br /> Bàn thắng tiếp theo trong thời gian đá bù giờ nghĩa là cược dự đoán đội nào sẽ ghi bàn thắng tiếp theo trong thời gian
                            đá bù giờ của trận đấu.
                            <br /> 2.2.82.4
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị hủy bỏ, trừ trường hợp việc thanh toán tiền cược đã cược xác định.
                            <br /> 2.2.83
                            <br /> Đá phạt penalty
                            <br /> 2.2.83.1
                            <br /> Đá phạt penalty có nghĩa là đặt cược dự đoán liệu sẽ có quả phạt penalty ở trong trận đấu. .
                            <br /> 2.2.83.2
                            <br /> Có các lựa chọn sau:
                            <br /> • Có
                            <br /> • Không
                            <br /> 2.2.84
                            <br /> Hiệp đấu có nhiều bàn thắng nhất
                            <br /> 2.2.84.1
                            <br /> Hiệp đấu có nhiều bàn thắng nhất nghĩa là đặt cược dự đoán hiệp nào của trận đấu sẽ có tổng số bàn thắng nhiều hơn hiệp
                            còn lại.
                            <br /> 2.2.84.2
                            <br /> Có các tuỳ chọn sau:
                            <br /> 1. Hiệp 1
                            <br /> 2. Hiệp 2
                            <br /> 3. Hòa
                            <br /> 2.2.84.3
                            <br /> Khoản cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp khoản cược đã được quyết định.
                            <br /> 2.2.84.4
                            <br /> Đội nhà ghi được nhiều bàn thắng nhất ở hiệp nào
                            <br />
                            <br /> 2.2.84.4.1 Đội nhà ghi được nhiều bàn thắng nhất ở hiệp nào nghĩa là đặt cược dự đoán đội nhà sẽ có tổng số bàn thắng
                            ở hiệp nào nhiều hơn.
                            <br />
                            <br /> 2.2.84.4.2 Khoản cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp khoản cược đã được quyết định.
                            <br
                            /> 2.2.84.5
                            <br /> Đội khách ghi được nhiều bàn thắng nhất ở hiệp nào
                            <br />
                            <br /> 2.2.84.5.1 Đội khách ghi được nhiều bàn thắng nhất ở hiệp nào nghĩa là đặt cược dự đoán đội khách sẽ có tổng số bàn
                            thắng ở hiệp nào nhiều hơn.
                            <br />
                            <br /> 2.2.84.5.2 Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.85
                            <br /> Tỉ số chính xác của hiệp 1/cả trận
                            <br /> 2.2.85.1
                            <br /> Tỉ số chính xác của hiệp 1/ cả trận nghĩa là đặt cược dự đoán tỉ số chính xác sau khi kết thúc hiệp 1 và tỉ số cuối
                            cùng chính xác sau khi kết thúc trận đấu.
                            <br /> 2.2.85.2
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định. Đối với cược tổng
                            tỷ số chính xác “4+” quy định trận đấu trong gian thi đấu chính thức phải có ít nhất 4 ghi bàn để có thể thắng được vé
                            cược.
                            <br /> 2.2.85.3
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.86
                            <br /> Cầu thủ ghi bàn - Bất kỳ lúc nào
                            <br /> 2.2.86.1
                            <br /> Cược cầu thủ ghi bàn - bất cứ lúc nào nghĩa là cược cầu thủ nào sẽ ghi bàn vào bất cứ lúc nào trong thời gian diễn ra
                            trận đấu. Không tính thời gian hiệp phụ.
                            <br /> 2.2.86.2
                            <br /> Không tính các ghi bàn phản lưới nhà.
                            <br /> 2.2.86.3
                            <br /> Vé cược sẽ có giá trị bất kể thời gian cầu thủ đó vào tham gia thi đấu trong trận đấu được bao lâu.
                            <br /> 2.2.86.4
                            <br /> Vé cược vào bất kỳ cầu thủ nào không tham gia vào trận đấu sẽ bị vô hiệu và được trả lại.
                            <br /> 2.2.86.5
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.87
                            <br /> Cược cầu thủ bị đuổi ra khỏi sân &amp; Cược cầu thủ bị đuổi ra khỏi sân trong hiệp 1
                            <br /> 2.2.87.1
                            <br /> Cược cầu thủ bị đuổi ra khỏi sân nghĩa là cược cầu thủ nào sẽ bị đuổi ra khỏi sân trong thời gian thi đấu chính thức
                            của trận đấu.
                            <br /> 2.2.87.2
                            <br /> Cược cầu thủ bị đuổi ra khỏi sân trong hiệp 1 nghĩa là cược cầu thủ nào sẽ bị đuổi ra khỏi sân trong hiệp 1 của trận
                            đấu.
                            <br /> 2.2.87.3
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.87.4
                            <br /> Cược cầu thủ đội nhà sẽ bị đuổi ra khỏi sân &amp; Cược cầu thủ đội nhà sẽ bị đuổi ra khỏi sân trong hiệp 1
                            <br />
                            <br /> 2.2.87.4.1. Cược cầu thủ đội nhà sẽ bị đuổi ra khỏi sân nghĩa là cược cầu thủ nào của đội nhà sẽ bị đuổi ra khỏi sân
                            trong thời gian thi đấu chính thức của trận đấu.
                            <br />
                            <br /> 2.2.87.4.2. Cược cầu thủ đội nhà sẽ bị đuổi ra khỏi sân trong hiệp 1 nghĩa là cược cầu thủ nào của đội nhà sẽ bị đuổi
                            ra khỏi sân trong hiệp 1 của trận đấu.
                            <br />
                            <br /> 2.2.87.4.3. Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.87.5
                            <br /> Cược cầu thủ đội khách sẽ bị đuổi ra khỏi sân &amp; Cược cầu thủ đội khách sẽ bị đuổi ra khỏi sân trong hiệp 1
                            <br />
                            <br /> 2.2.87.5.1. Cược cầu thủ đội khách sẽ bị đuổi ra khỏi sân nghĩa là cược cầu thủ nào của đội khách sẽ bị đuổi ra khỏi
                            sân trong thời gian thi đấu chính thức của trận đấu.
                            <br />
                            <br /> 2.2.87.5.2. Cược cầu thủ đội khách sẽ bị đuổi ra khỏi sân trong hiệp 1 nghĩa là cược cầu thủ nào của đội khách sẽ bị
                            đuổi ra khỏi sân trong hiệp 1 của trận đấu.
                            <br />
                            <br /> 2.2.87.5.3. Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.88
                            <br /> Cược hiệp phụ có hay/không.
                            <br /> 2.2.88.1
                            <br /> Cược hiệp phụ có/không nghĩa là cược trận đấu có đá hiệp phụ hay không
                            <br /> 2.2.88.2
                            <br /> Khoản cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ trước thời gian thi đấu chính thức của trận đấu.
                            <br /> 2.2.89
                            <br /> Cược hiệp phụ/Bàn thắng
                            <br /> 2.2.89.1
                            <br /> Cược hiệp phụ/Bàn thắng nghĩa là vừa cược trận đấu có đá hiệp phụ hay không vừa cược có bàn thắng nào được ghi trong
                            thời gian hiệp phụ.
                            <br /> 2.2.89.2
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.90
                            <br /> Cược tài &amp; xỉu cho cả 2 hiệp có/không
                            <br /> 2.2.90.1
                            <br /> Cược tài 1.5 cho cả 2 hiệp có/không nghĩa là đặt cược dự đoán liệu mỗi hiệp của trận đấu có từ hai (2)bàn thắng trở
                            lên hay không.
                            <br /> 2.2.90.2
                            <br /> Cược xỉu 1.5 cho cả 2 hiệp có/không nghĩa là đặt cược dự đoán liệu mỗi hiệp của trận đấu có ít hơn hai (2) bàn thắng
                            hay không.
                            <br /> 2.2.90.3
                            <br /> Các cược sẽ bị vô hiệu nếu trận đấu bị hủy trừ khi các cược đã được quyết định.
                            <br /> 2.2.91
                            <br /> Cược thời gian cụ thể ghi bàn thắng đầu tiên
                            <br /> 2.2.91.1
                            <br /> Cược thời gian cụ thể ghi bàn thắng đầu tiên nghĩa là đặt cược dự đoán liệu có bàn thắng nào được ghi trong từng khoảng
                            thời gian cố định 10 phút hay 15 phút.
                            <br /> 2.2.91.2
                            <br /> Bàn thắng phản lưới nhà không được xem là bàn thắng đầu tiên.
                            <br /> 2.2.91.3
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br /> 2.2.92
                            <br /> Cách thức xác định kết quả trận đấu
                            <br /> 2.2.92.1
                            <br /> Cược Cách thức xác định kết quả trận đấu có nghĩa là cược để dự đoán người chiến thắng và cách thức chiến thắng trận
                            đấu.
                            <br /> 2.2.92.2
                            <br /> Có các tùy chọn cược sau đây:
                            <br /> • Đội nhà/Thời gian thi đấu chính thức
                            <br /> • Đội nhà/Hiệp Phụ
                            <br /> • Đội nhà/Sút luân lưu
                            <br /> • Đội khách/Thời gian thi đấu chính thức
                            <br /> • Đội khách/Hiệp Phụ
                            <br /> • Đội khách/Sút luân lưu
                            <br /> 2.2.92.3
                            <br /> Tất cả các vé cược sẽ vô hiệu nếu trận đấu bị hủy bỏ..
                            <br /> 2.2.93
                            <br /> Tổng số bàn thắng hiệp 1 so với Tổng số bàn thằng hiệp 2
                            <br /> 2.2.93.1
                            <br /> Tổng số bàn thắng hiệp 1 so với Tổng số bàn thằng hiệp 2
                            <br />
                            <br /> 2.2.93.1.1. Tổng số bàn thắng hiệp 1 so với Tổng số bàn thắng hiệp 2 nghĩa là đặt cược để dự đoán tổng số bàn thắng
                            được ghi trong Hiệp 1 và Hiệp 2 của một sự kiện.
                            <br />
                            <br /> 2.2.93.1.2. Thời gian bù giờ không được áp dụng để tính tổng số bàn thắng được ghi.
                            <br />
                            <br /> 2.2.93.1.3. Tổng số bàn thắng hiệp 1 so với Tổng số bàn thắng hiệp 2 nghĩa là đặt cược để dự đoán tổng số bàn thắng
                            được ghi trong Hiệp 1 và Hiệp 2 của một sự kiện.
                            <br /> 2.2.93.2
                            <br /> Tổng số quả phạt góc hiệp 1 so với Tổng số quả phạt góc hiệp 2
                            <br />
                            <br /> 2.2.93.2.1 Tổng số quả phạt góc hiệp 1 so với Tổng số quả phạt góc hiệp 2 nghĩa là đặt cược để dự đoán tổng số quả phạt
                            góc được thực hiện trong Hiệp 1 và Hiệp 2 của một sự kiện.
                            <br />
                            <br /> 2.2.93.2.2. Thời gian bù giờ không được áp dụng để tính tổng số quả phạt góc được thực hiện.
                            <br />
                            <br /> 2.2.93.2.3. Cược sẽ không có giá trị nếu trận đấu bị bỏ dở trước khi kết thúc thời gian thi đấu thông thường.
                            <br /> 2.2.93.3
                            <br /> Tổng số thẻ phạt hiệp 1 so với Tổng số thẻ phạt hiệp 2
                            <br />
                            <br /> 2.2.93.3.1. Tổng số thẻ phạt hiệp 1 so với Tổng số thẻ phạt hiệp 2 nghĩa là đặt cược để dự đoán tổng số thẻ phạt được
                            nhận trong Hiệp 1 và Hiệp 2 của một sự kiện.
                            <br />
                            <br /> 2.2.93.3.2. Thời gian bù giờ không được áp dụng để tính tổng số thẻ phạt được nhận.
                            <br />
                            <br /> 2.2.93.3.3. Cược sẽ không có giá trị nếu trận đấu bị bỏ dở trước khi kết thúc thời gian thi đấu thông thường.
                            <br /> 2.2.94
                            <br /> Thời gian ghi bàn thắng tiếp theo
                            <br /> 2.2.94.1
                            <br /> Thời gian ghi bàn thắng tiếp theo là cược trên khoảng thời gian khi bàn thắng tiếp theo sẽ được ghi trong suốt khoảng
                            thời gian cố định với các khoảng thời gian 10 phút hoặc 15 phút.
                            <br /> 2.2.94.2
                            <br /> Thời gian ghi bàn thắng tiếp theo là cược trên khoảng thời gian khi bàn thắng tiếp theo sẽ được ghi trong suốt khoảng
                            thời gian cố định với các khoảng thời gian 10 phút hoặc 15 phút.
                            <br /> 2.2.94.3
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị huỷ bỏ ngoại trừ trường hợp Vé cược đã được quyết định.
                            <br />
                            <br /> 2.2.95
                            <br /> Tổng số phút của bàn thắng
                            <br /> 2.2.95.1
                            <br /> Tổng số phút ghi bàn là đặt cược để dự đoán tổng số phút tương ứng với thời gian cụ thể lúc cả hai đội ghi bàn trong
                            một trận đấu.
                            <br /> 2.2.95.2
                            <br /> Để quyết định phút của bàn thắng, số lẻ của phút (1-59 giây) sẽ được làm tròn thành phút gần nhất.
                            <br />
                            <br /> Ví dụ:
                            <br /> Các bàn thắng được ghi ở phút 22,55 phút (23 phút) + 34,35 phút (35 phút) + 55,05 phút (56 phút) = 114 phút.
                            <br /> 2.2.95.3
                            <br /> Tất cả mọi bàn thắng được ghi trong thời gian đá bù giờ của hiệp một sẽ được tính là vào phút thứ 45. Tất cả mọi bàn
                            thắng được ghi trong thời gian đá bù giờ của hiệp hai sẽ được tính là vào phút thứ 90.
                            <br /> 2.2.95.4
                            <br /> Thời gian hiệp phụ và đá luân lưu không được tính khi tính toán tổng số phút của bàn thắng.
                            <br /> 2.2.95.5
                            <br /> Bàn thắng phản lưới nhà được tính khi tính toán tổng số phút của bàn thắng.
                            <br /> 2.2.95.6
                            <br /> Tổng số phút của bàn thắng chỉ thời gian ghi bàn hiện trên chương trình phát sóng của truyền hình. Trong trường hợp
                            xảy ra tranh chấp về thời gian ghi bàn của bất kỳ bàn thắng nào, thời gian do Trang web thi đấu chính thức công bố sẽ
                            được xem là căn cứ để giải quyết tranh chấp.
                            <br /> 2.2.95.7
                            <br /> Vé cược sẽ không có giá trị nếu trận đấu bị hủy bỏ, trừ trường hợp việc thanh toán vé cược đã được quyết định.
                            <br /> 2.2.96
                            <br /> Cược các tình huống cố định sẽ xảy ra tiếp theo
                            <br /> 2.2.96.1
                            <br /> Dự đoán sự kiện sẽ xảy ra sau một thời gian cụ thể nhất định trong trận đấu bao gồm các sự kiện này trong 4 sự kiện
                            sau – (1) Đá phạt góc, (2) Ném Biên, (3) Pha Giao Bóng và (4) Đá phạt .
                            <br /> 2.2.96.2
                            <br /> Khi có loại cược các tình huống cố định sẽ xảy ra tiếp theo, sẽ đi kèm hiển thị 1 mốc thời gian xác định. Ví dụ: “Cược
                            các tình huống cố định sẽ xảy ra tiếp sau phút 02:39".
                            <br /> 2.2.96.3
                            <br /> Chức năng đặt cược sẽ đóng 10 giây trước khi thời gian cố định của trận đấu diễn ra. Sau khi hết 10 giây tất cả các
                            cược sẽ có hiệu lực và sự kiện tiếp theo xảy ra sau mốc thời gian cố định vừa cược sẽ quyết định kết quả.
                            <br /> 2.2.96.4
                            <br /> Các hành động và quyết định của trong tài chính sẽ là Kết quả cuối cùng bao gồm sự quyết định của bất cứ trong tài viên
                            nào hoặc căn cứ theo băng ghi hình được chơi lại.
                            <br /> 2.2.96.5
                            <br /> Cược được đặt trong suốt hiệp một mà không được xử lý sau hiệp một sẽ được chuyển sang hiệp hai.
                            <br /> 2.2.96.6
                            <br /> Cược được đặt trong suốt trận đấu mà không được xử lý khi kết thúc thời gian chính thức của một trận đấu sẽ được hoàn
                            trả.
                            <br /> 2.2.96.7
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.97
                            <br /> Ghi bàn trong vòng 60 giây
                            <br /> 2.2.97.1
                            <br /> Ghi bàn trong vòng 60 giây nghĩa là cược dự đoán một bàn thắng có được ghi trong vòng 60 giây hay không như (1) phạt
                            đền, (2) phạt góc hoặc (3) cú đá phạt – tất cả được coi là “Bàn thắng nguy hiểm”.
                            <br /> 2.2.97.2
                            <br /> Cược được chấp nhận nếu tiếng còi được thổi cho một Bàn thắng nguy hiểm và cược sẽ được đóng lại một vài giây trước
                            khi Bàn thắng nguy hiểm chính thức được thực hiện.
                            <br /> 2.2.97.3
                            <br /> Ghi bàn trong vòng 60 giây sẽ bắt đầu từ khoảnh khắc Bàn thắng nghuy hiểm chính thức được thực hiện.
                            <br /> 2.2.97.4
                            <br /> Nếu trọng tài chính trao phạt đền trong suốt thời gian 60 giây trong trận, quả đá phạt sẽ được cói là đã xảy ra trong
                            thời gian 60 giây trong trận dù nó có thật sự được diễn ra hoặc bất kì bàn thắng nào cũng sẽ được ghi điểm trong 60 giây
                            trong trận chính thức.
                            <br />
                            <br /> Ví dụ:
                            <br /> Trọng tài chính trao phạt đền ở phút thứ 59 theo một cược sớm Bàn thắng nguy hiểm và quả đá phạt thành công thì khi
                            quả đá phạt chính thức được thực hiện, bàn thắng sẽ được tính điểm trong thời gian 60 giây trong trận chính thức để xác
                            định cược thắng.
                            <br /> 2.2.97.5
                            <br /> Nhằm mục đích xác định cược thắng, cú sút bóng được coi là đã được thực hiện nếu nó thực sự được trao bởi trọng tài
                            chính, không phụ thuộc vào bất kì hành động nào của trọng tài phụ hay những gì được phát lại bởi video.
                            <br /> 2.2.97.6
                            <br /> Loại cược này không áp dụng cho đá luân lưu.
                            <br /> 2.2.97.7
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.98
                            <br /> Cược mỗi phút
                            <br /> 2.2.98.1
                            <br /> Cược mỗi phút nghĩa là cược dự đoán một sự kiện cụ thể sẽ diễn ra trong suốt phút dự đoán hoặc trong 60 giây như phạt
                            góc, ném biên, phát bóng từ vạch 5m50, đá phạt, ghi bàn, việt vị hoặc tất cả những sự kiện khác có thể liệt kê.
                            <br /> 2.2.98.2
                            <br /> Khi loại cược này được mở ra, thành viên có thể sự đoán với thời gian cụ thể. Ví dụ: “Cược mỗi phút tại 02:00”
                            <br /> 2.2.98.3
                            <br /> Cược sẽ đóng 10 giây trước thười gian thi đấu chính thức.
                            <br /> 2.2.98.4
                            <br /> Sau khi hết thời gian 10 giây, tất cả cược được mở và sự kiện xảy ra tiếp theo trong một phút từ thời gian thi đấu sẽ
                            được xác định kết quả.
                            <br /> 2.2.98.5
                            <br /> Nhằm mực đích xác định sự kiện thắng cuộc, phạt góc và ném biên được xem là đã diễn ra ở thời điểm được trao. Đá phạt
                            được xem là xảy ra tại thời điểm trọng tài thổi còi báo hiệu một quả đá phạt.
                            <br /> 2.2.98.6
                            <br /> Hành động và quyết định củai trọng tài chính là quyết định cuối cùng, không phụ thuộc vào bất kì hành động nào của trọng
                            tài phụ hay những gì được phát lại bởi video.
                            <br /> 2.2.98.7
                            <br /> Cược được đặt trong suốt hiệp một mà không được xử lý sau hiệp một sẽ được chuyển sang hiệp hai.
                            <br /> 2.2.98.8
                            <br /> Cược được đặt trong suốt trận đấu mà không được xử lý khi kết thúc thời gian chính thức của một trận đấu sẽ được hoàn
                            trả .
                            <br /> 2.2.98.9
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.99
                            <br /> Bàn thắng đầu tiên
                            <br /> 2.2.99.1
                            <br /> Cược Bàn thắng đầu tiên nghĩa là dự đoán thời gian mà bàn thắng đầu tiên được ghi trong trận.
                            <br /> 2.2.99.2
                            <br /> Nếu không có bàn thắng nào được ghi, tất cả các cược sẽ thua.
                            <br /> 2.2.99.3
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.100
                            <br /> Thời gian kiểm soát bóng
                            <br /> 2.2.100.1
                            <br /> Cược Thời gian kiểm soát bóng nghĩa là dự đoán thời gian kiểm soát bóng của một đội cụ thể sẽ trên hay dưới tỉ số phần
                            trăm được đưa ra.
                            <br /> 2.2.100.2
                            <br /> Tất cả kết quả được dựa trên dữ liệu từ nhà cung cấp dữ liệu thứ ba chính thức.
                            <br /> 2.2.100.3
                            <br /> Nếu trận đấu hủy trước khi chính thức bắt đầu, tất cả các cược sẽ được hủy.
                            <br /> 2.2.101
                            <br /> Đội chủ nhà ghi bàn cả hai hiệp đấu
                            <br /> 2.2.101.1
                            <br /> Dự đoán đội chủ nhà sẽ ghi ít nhất một bàn thắng ở mỗi hiệp của một trận đấu 90 phút.
                            <br /> 2.2.101.2
                            <br /> Nếu đội được chọn chỉ ghi bàn ở một hiệp hoặc không ghi bàn ở cả hai hiệp, cược sẽ được xác định là cược thua.
                            <br /> 2.2.101.3
                            <br /> Nếu có bàn thắng phản lưới nhà, bàn thắng chỉ được tính cho đội đối thủ với cược tương ứng.
                            <br /> 2.2.101.4
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.102
                            <br /> Đội khách ghi bàn cả hai hiệp đấu
                            <br /> 2.2.102.1
                            <br /> Dự đoán đội khách sẽ ghi ít nhất một bàn thắng ở mỗi hiệp của một trận đấu 90 phút.
                            <br /> 2.2.102.2
                            <br /> Nếu đội được chọn chỉ ghi bàn ở một hiệp hoặc không ghi bàn ở cả hai hiệp, cược sẽ được xác định là cược thua.
                            <br /> 2.2.102.3
                            <br /> Nếu có bàn thắng phản lưới nhà, bàn thắng chỉ được tính cho đội đối thủ với cược tương ứng.
                            <br /> 2.2.102.4
                            <br /> Cược sẽ được hủy nếu trận đấu hủy, ngoại trừ những cược đã được xác định.
                            <br /> 2.2.103
                            <br /> Đội khách ghi bàn cả hai hiệp đấu
                            <br /> 2.2.103.1
                            <br /> Cược dự đoán hai đội nào sẽ đạt top 2 nhóm hoàn thành.
                            <br /> 2.2.104
                            <br /> Đội loại khỏi bảng
                            <br /> 2.2.104.1
                            <br /> Dự đoán đội nào sẽ bị loại khỏi cuộc thi ở một giai đoạn.
                            <br /> 2.2.105
                            <br /> Đội bét bảng
                            <br /> 2.2.105.1
                            <br /> Dự đoan đội sẽ bét bảng đấu.
                            <br /> 2.2.106
                            <br /> Đội được đề cử
                            <br /> 2.2.106.1
                            <br /> Dự đoán đội sẽ hoàn thành vòng cuối cùng của một giải đấu.
                            <br /> 2.2.107
                            <br /> Đội vào trung kết
                            <br /> 2.2.107.1
                            <br /> Cược dự đoán đội được chọn có vào được tới trung kết của một giải đấu hay không.
                            <br /> 2.2.107.2
                            <br /> Loại cược này dựa trên điểm số cả trận và bao gồm thời gian bù giờ hoặc phạt đền nếu cần để xác định đội thắng cuộc.
                            <br
                            /> 2.2.108
                            <br /> Đội vào bán kết
                            <br /> 2.2.108.1
                            <br /> Cược dự đoán đội được chọn có vào được tới bán kết của một giải đấu hay không.
                            <br /> 2.2.108.2
                            <br /> Loại cược này dựa trên điểm số cả trận và bao gồm thời gian bù giờ hoặc phạt đền nếu cần để xác định đội thắng cuộc.
                            <br
                            /> 2.2.109
                            <br /> Đội vào tứ kết
                            <br /> 2.2.109.1
                            <br /> Cược dự đoán đội được chọn có vào được tới tứ kết của một giải đấu hay không.
                            <br /> 2.2.109.2
                            <br /> Loại cược này dựa trên điểm số cả trận và bao gồm thời gian bù giờ hoặc phạt đền nếu cần để xác định đội thắng cuộc.
                            <br
                            /> 2.2.110
                            <br /> Which Team from Group to Qualify
                            <br /> 2.2.110.1
                            <br /> Dự đoán đội nào đủ điều kiện và được vào vòng tiếp theo của một giả đấu.
                            <br /> 2.2.110.2
                            <br /> Loại cược này dựa trên điểm số cả trận và bao gồm thời gian bù giờ hoặc phạt đền nếu cần để xác định đội thắng cuộc.
                            <br
                            /> 2.2.111
                            <br /> Nhóm bảng thắng cuộc
                            <br /> 2.2.111.1
                            <br /> Cược Nhóm bảng thắng cuộc là cược dự đoán nhóm bảng nào sẽ thắng giải đấu.
                            <br /> 2.2.112
                            <br /> Châu lục thắng cuộc
                            <br /> 2.2.112.1
                            <br /> Châu lục thắng cuộc nghĩa là cược dự đoán đội đến từ châu lục nào sẽ thắng giải đấu.
                            <br /> 2.2.113
                            <br /> League – Đội xuống hạng
                            <br /> 2.2.113.1
                            <br /> Dự đoán đội sẽ bị xuống hạng trong giải đấu.
                            <br /> 2.2.113.2
                            <br /> Loại cược này bao gồm cả những vị trí xuống hạng tự động cũng như xuống hạng do bất kì trận đấu giành vé vớt nào được
                            tổ chức cho một giải đấu cụ thể.
                            <br /> 2.2.113.3
                            <br /> Nếu một đội ngưng hoặc bị loại khỏi một giải đấu, các cược cho đội đó sẽ bị hủy. Nếu nó diễn ra trước khi bắt đầu mùa
                            giải, toàn bộ thị trường cược này sẽ được hủy và một thị trường cược khác sẽ được mở ra.
                            <br /> 2.2.114
                            <br /> League – Đội đứng bét
                            <br /> 2.2.114.1
                            <br /> Dự đoán đội nào sẽ đứng bét trong giải đấu cụ thể của cả mùa giải.
                            <br /> 2.2.114.2
                            <br /> Nếu một đội ngưng hoặc bị loại khỏi một giải đấu, các cược cho đội đó sẽ bị hủy. Nếu nó diễn ra trước khi bắt đầu mùa
                            giải, toàn bộ thị trường cược này sẽ được hủy và một thị trường cược khác sẽ được mở.
                            <br /> 2.2.115
                            <br /> League – Đội đứng bét hai vị trí
                            <br /> 2.2.115.1
                            <br /> Dự đoán đội nào sẽ đứng bét hai vị trí trong mùa giải này.
                            <br /> 2.2.115.2
                            <br /> Nếu một đội ngưng hoặc bị loại khỏi một giải đấu, các cược cho đội đó sẽ bị hủy. Nếu nó diễn ra trước khi bắt đầu mùa
                            giải, toàn bộ thị trường cược này sẽ được hủy và một thị trường cược khác sẽ được mở.
                            <br /> 2.2.116
                            <br /> League – Đội tăng hạng
                            <br /> 2.2.116.1
                            <br /> Dự đoán đội sẽ tăng thứ hạng trong giải đấu.
                            <br /> 2.2.116.2
                            <br /> Loại cược này bao gồm cả những vị trí tăng hạng tự động cũng như tăng hạng do bất kì trận đấu giành vé vớt nào được
                            tổ chức cho một giải đấu cụ thể.
                            <br /> 2.2.116.3
                            <br /> Nếu một đội ngưng hoặc bị loại khỏi một giải đấu, các cược cho đội đó sẽ bị hủy. Nếu nó diễn ra trước khi bắt đầu mùa
                            giải, toàn bộ thị trường cược này sẽ được hủy và một thị trường cược khác sẽ được mở.
                            <br /> 2.2.117
                            <br /> Đội thắng cuộc và cầu thủ ghi bàn nhiều nhất
                            <br /> 2.2.117.1
                            <br /> Dự đoán đội nào sẽ thắng trận đấu và cầu thủ nào sẽ ghi bàn nhiều nhất.
                            <br /> 2.2.117.2
                            <br /> Tất cả cược áp dụng cho “90 phút” của trận đấu và thời gian bù giờ theo trận đấu chính thức và cộng thêm bất kì khoảng
                            tạm dừng.
                            <br /> 2.2.117.3
                            <br /> Bàn thắng được ghi trong lượt đá luân lưu không được tính.
                            <br /> 2.2.117.4
                            <br /> Nếu có hơn một cầu thủ cùng có nhiều bàn thắng nhất thì luật dead heat sẽ được áp dụng.
                            <br /> 2.2.118
                            <br /> League - Tricast
                            <br /> 2.2.118.1
                            <br /> League - Tricast nghĩa là cược dự đoán đội về nhất, nhì và ba theo thứ tự cụ thể khi kết thúc giải đấu.
                            <br /> 2.2.118.2
                            <br /> Ví dụ: Manchester City/Manchester United/Chelsea phải thắng theo thứ tự cụ thể khi kết thức giải đấu.
                            <br /> 2.2.118.3
                            <br /> Bảng trung kết được thông báo bởi hội đồng chính thức của giải là kết quả cuối cùng.
                            <br /> 2.2.119
                            <br /> League – Đội không bị đánh bại
                            <br /> 2.2.119.1
                            <br /> Đội phải thắng giải đấu hoàn toàn mà không để thua bất kì trận nào.
                            <br /> 2.2.120
                            <br /> To Win Title
                            <br /> 2.2.120.1
                            <br /> Dự đoán đội nào sẽ giành danh hiệu ở cuối giải đấu.
                            <br /> 2.2.121
                            <br /> Đội/ Cầu thủ nào sẽ tiến xa nhất trong giải đấu.
                            <br /> 2.2.121.1
                            <br /> Cược Đội/ Cầu thủ nào sẽ tiến xa nhất trong giải đấu nghĩa là cược dự đoán đội choặc cầu thủ đã chọn sẽ tiến xa nhất
                            trong giải đấu cụ thể.
                            <br /> 2.2.121.2
                            <br /> Hai đội/ cầu thủ sẽ được bắt cặp trong lựa chọn cược, đội/ cầu thủ thuộc về những nhóm khác nhau cũng có thể được bắt
                            cặp lựa chọn cược.
                            <br /> 2.2.121.3
                            <br /> Nếu hai đội/ cầu thủ lựa chọn đủ điều kiện vào vòng trong, tất cả cược cho hai đội/ cầu thủ sẽ được chuyển qua vòng
                            mới.
                            <br /> 2.2.121.4
                            <br /> Các cược sẽ được xem là hòa nếu hai đội/ cầu thủ bị loại ở cùng một vòng..
                            <br />
                            <br /> Lội ngược dòng
                            <br /> 3.
                            <br /> Luật cược cho sự kiện cụ thể
                            <br /> 3.1
                            <br /> Luật bóng đá
                            <br /> 3.1.1
                            <br /> Trường hợp trận đấu được tiến hành khác với thời gian dự kiến lúc đầu (ví dụ như khoảng thời gian đặc biệt của trận
                            đấu thuộc các giải đấu khác nhau hoặc các trận đấu giao hữu) tất cả các cược sẽ được giải quyết vào cuối của khoảng thời
                            gian dự kiến.
                            <br /> 3.1.1.1
                            <br /> Trường hợp thời gian thi đấu ít hơn so với thời gian chuẩn, nhà tổ chức sẽ có quyền đình chỉ giải quyết tất cả các cược
                            trong khi chờ kết quả chính thức của trận đấu đó.
                            <br /> 3.1.1.2
                            <br /> Trừ các trận đấu có thời gian thi đấu đặc biệt được công bố trên trang web trước tất cả các trận đấu khác, các cược
                            được thực hiện vào trận đấu này sẽ được xem là hủy bỏ.
                            <br /> 3.1.2
                            <br /> Nếu một trận đấu bóng đá bị hoãn lại, hoặc là bị huỷ bỏ hoặc bị đình chỉ và không trở lại thi đấu trong vòng 12 giờ
                            kể từ thời điểm bắt đầu dự kiến, thì trận đấu bị bãi bỏ (không phân biệt bất kỳ quyết định chính thức nào khi công bố
                            kết quả). Kết quả của tất cả các cược vào các trận đấu bị huỷ bỏ /đình chỉ là quyết định riêng của Nhà Cái.
                            <br /> 3.1.3
                            <br /> Cược trên Hiệp 1 chỉ áp dụng duy nhất cho Hiệp 1. Nếu trận đấu bị hủy bỏ giữa Hiệp 1, thì tất cả các cược được xem như
                            vô hiệu. Nếu trận đấu bị hủy bỏ vào Hiệp 2 thì tất cả các cược ở Hiệp 1 vẫn còn hiệu lực.
                            <br /> 3.1.4
                            <br /> Nhà Cái cung cấp thông tin (ví dụ như sân trung lập, Thẻ Đỏ, giờ, số liệu thống kê, ngày tháng, thời gian bắt đầu, vv)
                            như một dịch vụ cộng thêm và không chịu trách nhiệm về thông tin đó. Đó là trách nhiệm của khách hàng trong việc nhận
                            thức các thông tin chính xác cho bất cứ trận đấu nào.
                            <br /> 3.1.5
                            <br /> Trừ khi có quy định khác, nếu một trận đấu dự kiến sẽ được tổ chức trên sân trung lập (nhưng được chơi trên sân phi
                            trung lập hoặc ngược lại) tất cả các cược coi là hợp lệ.Trong trường hợp có sự thay đổi địa điểm (đội chủ nhà chơi trên
                            sân khách hoặc ngược lại), tất cả các cược vào trận đấu sẽ bị hủy. Cược cũng sẽ bị hủy nếu tên đội chủ nhà và đội khách
                            được sắp xếp ngược lại theo quy định.
                            <br /> 3.1.6
                            <br /> Điểm số sẽ được cập nhật vào phần Cá Cược Bóng Đá Trực Tiếp và các Kèo sẽ được hiện ra trong quá trình giao dịch trực
                            tiếp để tham khảo tại thời gian đặt cược. Bảng đếm thời gian và thông báo thẻ đỏ được đưa ra cho mục đích tham khảo.
                            <br
                            /> 3.1.7
                            <br /> Đối với đặt cược trực tuyến, trong một trận đấu, Nhà Cái sẽ có thẩm quyền duy nhất và tuyệt đối với các hành động tùy
                            ý và tuyệt đối của Nhà Cái, nếu xét thấy nguy hiểm khi điểm số, kết quả, hiệu suất của một đội bóng hoặc cầu thủ có thể
                            bị ảnh hưởng; hoặc đảm bảo thay đổi tỷ lệ cược/ giá hoặc Kèo hoặc Thông Tin Cá Cược ("Trường hợp Nguy hiểm") của Nhà
                            Cái có quyền tạm ngưng chấp nhận cược và có thể chấp nhận hoặc từ chối cược sau khi giai đoạn nguy hiểm đã qua. Tất cả
                            các hành động khác, trong trận đấu được coi là an toàn thi đấu; đặt cược sẽ tiếp tục được chấp nhận.
                            <br /> 3.1.8
                            <br /> Đối với đặt cược trực tuyến, đặt cược được cho phép đến phút 90 kể cả thời gian bù giờ chấn thương trong toàn thời gian
                            của trận đầu áp dụng cho hầu hết các trận (theo quyết định của Nhà Cái). Tuy nhiên từ phút 85 trở đi của trận đấu hay
                            trong năm phút cuối cùng trước khi kết thúc thời gian quy định, tuỳ điều kiện được áp dụng trong trận đấu, bất cứ hành
                            động khác hơn so với những điều được đề cập trong phần 3.1.8 này, sẽ được coi là an toàn và do đó tất cả các phiếu cược
                            đang chờ có thể được chấp nhận; chơi trong hoặc xung quanh vùng cấm địa; phạt đền; và phạt đền trực tiếp được coi là
                            nguy hiểm đối với Nhà Cái (khả năng vào banh).
                            <br /> 3.1.9
                            <br /> Đối với đặt cược trực tuyến, tất cả các phiếu cược đang chờ sẽ tự động bị từ chối lúc thời điểm trọng tài kết thúc trận
                            đấu trong nửa hiệp đầu và/hoặc toàn thời gian.
                            <br /> 3.1.10
                            <br /> Để đặt cược thêm thú vị, đặt cược được chấp nhận đến phút 90 và có thể thêm tùy theo thời gian chấn thương
                            (theo quyết định của Nhà Cái). Từ thời gian phát bóng (00:00) trở đi cho đến khi trước khi thời gian kết thúc theo quy
                            định (phút thứ 90), tuỳ điều kiện được áp dụng trong trận đấu, bất cứ hành động khác hơn so với những điều được đề cập
                            trong phần 3.1.8 này, sẽ được coi là an toàn và do đó tất cả các phiếu cược đang chờ có thể được chấp nhận; chơi trong
                            hoặc xung quanh vùng cấm địa; phạt đền; và phạt đền trực tiếp được coi là nguy hiểm đối với Nhà Cái (khả năng vào banh).
                            <br
                            /> 3.2
                            <br /> Bóng rổ
                            <br /> 3.2.1
                            <br /> Với cược cả trận, bao gồm cược trong trận, sẽ được thanh toán dựa trên kết quả cuối cùng bao gồm bù giờ nếu có (trừ
                            khi có quy định khác).
                            <br /> 3.2.2
                            <br /> Nếu trận đấu không diễn ra theo thời gian của lịch thi đấu thì tất cả cược sẽ bị hủy (trừ khi có quy định khác).
                            <br
                            /> 3.2.3
                            <br /> Nếu một trận đấu đã bắt đầu nhưng bị hoãn hoặc hủy trong vòng 12 tiếng của lịch thi đấu thì tất cả các cược cả trận
                            được coi là có giá trị nếu ít nhất bốn mươi ba (43) phút của một trận NBA hoặc ba mươi lăm (35) phút của các trận đấu
                            khác đã được hoàn tất. Các cược khác cho những trận đấu hủy hoặc hoãn sẽ bị hủy, ngoại trừ những cược đã được xác định
                            vô điều kiện.
                            <br /> 3.2.4
                            <br /> Kết quả hiệp 1 là tổng của quarter 1 và quarter 2. Kết quả hiệp 2 là tổng của quarter 3 và quarter 4, bao gồm bù giờ
                            nếu có.
                            <br /> 3.2.5
                            <br /> Kết quả của bốn quarter không bao gồm bất kì thời gian bù giờ nếu có.
                            <br /> 3.2.6
                            <br /> Nếu một trận đấu bị tạm ngưng hoặc hủy bỏ thì các cược đặt vào một nửa trận đấu hoặc các quarter chưa hoàn thành sẽ
                            được coi là vô hiệu. Nếu một nửa trận đấu hoặc các quarter đã cược được hoàn thành thì các cược sẽ như hợp lệ.
                            <br /> 3.2.7
                            <br /> Điểm số sẽ không được cập nhật cho đặt cược bóng rổ trong trận và diễn biến sẽ được hiển thị trong giao dịch trực tiếp
                            đề cập đến tỷ số của trận đấu, ví dụ 0-0. Thời gian và điểm số được hiển thị chỉ mang tính chất tham khảo.
                            <br /> 3.2.8
                            <br /> Cược Đội ghi bàn đầu tiên được tính cho đội ghi điểm đầu tiên. Nếu trận đấu bị hoãn hoặc hủy sau khi điểm đầu tiên được
                            ghi, các cược vẫn có hiệu lực.
                            <br /> 3.2.9
                            <br /> Cược Đội ghi bàn cuối cùng được tính cho đội ghi điểm cuối cùng (bao gồm thời gian bù giờ). Nếu trận đấu bị hoãn hoặc
                            hủy, các cược sẽ bị hủy.
                            <br /> 3.2.10
                            <br /> Các loại cược đặc biệt (bao gồm number game, Bật bóng, trợ giúp, Ba-điểm, Ném banh tự do v.v….) là hợp lệ nếu cả hai
                            cầu thủ tham gia trận đấu. Nếu một hoặc cả hai cầu thủ không tham gia vào trận đấu thì tất cả các phiếu cược như vô hiệu.
                            Kết quả cho loại cược đặc biệt bao gồm bù giờ, trừ khi có quy định khác. Tất cả các kết quả được đưa ra khi kết quả chính
                            thức được công bố ở phần cuối của trận đấu bởi tổ trọng tài (NBA.com, FIBA.com vv) và bất kỳ thay đổi sau đó là không
                            hợp lệ đối với cá cược.
                            <br /> 3.2.11
                            <br /> Vị trí Đội chủ nhà / Đội khách của trận đấu NCAA được cung cấp như một tham khảo.
                            <br /> 3.2.12
                            <br /> Cược bóng rổ giải Fantasy là cặp các đội từ các trận đấu khác nhau. Các trận liên quan đến cả hai đội phải tiến hành
                            tổ chức trong cùng một ngày, nếu không các phiếu cược được coi là vô hiệu. Các địa điểm trong cược bóng rổ giải Fantasy
                            chỉ mang mục đích tham khảo.
                            <br /> 3.2.13
                            <br /> Cược thắng phần lớn Quarters được tính trên đội chiếm được điểm số nhiều nhất của các hiệp đấu trong một trận đấu bóng
                            rổ. Nếu kết quả của quarter cụ thể là hòa thì cũng không có đội nào thắng trong quarter đó. Bù giờ sẽ không đưuọc tính
                            trong loại cược này. Nếu một trận đấu bị tạm ngưng hoặc hủy bỏ thì tất cả các phiếu cược sẽ vô hiệu.
                            <br /> 3.3
                            <br /> Bóng đá Mỹ
                            <br /> 3.3.1
                            <br /> Các thị trường Đủ thời gian, bao gồm cả cá cược trực tiếp, được xác lập theo kết quả kết quả cuối cùng, bao gồm cả thêm
                            giờ (trừ khi có xác định khác).
                            <br /> 3.3.2
                            <br /> Nếu trận đấu không được bắt đầu vào đúng ngày giờ lịch định tất cả các cá cược bị coi là vô hiệu (trừ khi có xác định
                            khác).
                            <br /> 3.3.3
                            <br /> Nếu một trận đấu đã bắt đầu và bị dừng hoặc bị treo trong vòng 12 giờ kể từ thời điểm bắt đầu lịch định thì các cá cược
                            kiểu Đủ thời gian vẫn được coi là có hiệu lực nếu như ít nhất đã có 55 phút thi đấu trọn vẹn. Các cá cược cũng được coi
                            là có hiệu lực khi có kết quả chính thức do một Hội đồng thích hợp công bố. Các cá cược vào trận đấu bị dừng hoặc bị
                            treo sẽ vô hiệu, trừ những cá cược vào thị trường đã được xác định vô điều kiện.
                            <br /> 3.3.4
                            <br /> Kết quả hiệp 1 là tổng của quarter 1 và quarter 2. Kết quả hiệp 2 là tổng của quarter 3 và quarter 4, bao gồm bù giờ
                            nếu có.
                            <br /> 3.3.5
                            <br /> Kết quả của bốn quarter không bao gồm bất kì thời gian bù giờ nếu có.
                            <br /> 3.2.6
                            <br /> Nếu một trận đấu bị tạm ngưng hoặc hủy bỏ thì các cược đặt vào một nửa trận đấu hoặc các quarter chưa hoàn thành sẽ
                            được coi là vô hiệu. Nếu một nửa trận đấu hoặc các quarter đã cược được hoàn thành thì các cược sẽ như hợp lệ.
                            <br /> 3.3.7
                            <br /> Điểm số sẽ được cập nhật cho cược trực tuyến đá banh Mỹ và sẽ được hiển thị trong suôt giao dịch trong trận tại thời
                            điểm mà cược đươc đặt.
                            <br /> 3.3.8
                            <br /> Cược Đội ghi bàn đầu tiên được tính cho đội ghi điểm đầu tiên. Nếu trận đấu bị hoãn hoặc hủy sau khi điểm đầu tiên được
                            ghi, các cược vẫn có hiệu lực.
                            <br /> 3.3.9
                            <br /> Cược Đội ghi bàn cuối cùng được tính cho đội ghi điểm cuối cùng (bao gồm thời gian bù giờ). Nếu trận đấu bị hoãn hoặc
                            hủy, các cược sẽ bị hủy.
                            <br /> 3.3.10
                            <br /> Vị trí Đội chủ nhà / Đội khách của trận đấu NCAA được cung cấp như một tham khảo.
                            <br /> 3.4
                            <br /> Bóng Chày
                            <br /> 3.4.1
                            <br /> Tên người ném bóng chính thức chỉ dành cho mục đích tham khảo. Tất cả các phiếu cược bóng chày vẫn được coi là hợp lệ
                            bất kể người bắt đầu ném bóng.
                            <br /> 3.4.2
                            <br /> Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến sẽ được giải quyết theo kết quả cuối cùng bao gồm
                            cả giờ thêm hiệp (trừ trường hợp quy định tại các quy định này). Trong bóng chày Nhật Bản kết quả được công báo với tỷ
                            số hòa thì trong trường hợp này các phiếu cược moneyline sẽ được hoàn lại.
                            <br /> 3.4.3
                            <br /> Nếu 1 trận đấu không được bắt đầu như thời gian dự kiến ban đầu thì tất cả các cược sẽ bị hủy (trừ khi có quy định cụ
                            thể khác).
                            <br /> 3.4.4
                            <br /> Đối với phiếu cược bóng chày được coi là hợp lệ sau khi trận đấu phải đi 9 (chín) hiệp (hoặc 8,5 hiệp nếu đội chủ nhà
                            đang dẫn đầu). Nếu trận đấu bị tạm ngưng và được hoàn tất vào ngày tiếp theo thì tất cả các cược (trừ những điều đó đã
                            được vô điều kiện xác định) sẽ được coi là vô hiệu.
                            <br /> 3.4.5
                            <br /> Nếu một trận đầu bị tạm ngưng hoặc được yêu cầu thêm hiệp đấu thì điểm số sẽ được xác định sau khi hiệp cuối cùng nhất,
                            trừ khi đội chủ nhà ghi điểm gỡ hòa hoặc dẫn đầu trong nửa lượt dưới, trong trường hợp này điểm số được xác định tại
                            thời điểm trận đấu được yêu cầu..
                            <br /> 3.4.6
                            <br /> Các phiếu cược trước hiệp thứ 5 thì được giải quyết theo kết quả của cuối hiệp thứ 5. Nếu năm hiệp vẫn không hoàn thành
                            vì lý do gì, khi đó tất cả các phiếu cược sẽ được coi là vô hiệu.
                            <br /> 3.4.7
                            <br /> Tỉ số sẽ được cập nhật cho cược bóng chày trong trận và được hiển thị dựa theo tỉ số tại thời điểm đặt cược.
                            <br /> 3.4.8
                            <br /> Những trận đấu Kinh điển Bóng Chày Thế Giới có thể kết thúc sớm nếu sau khi một đội đang dẫn đầu bởi mười hoặc có điểm
                            chạy(runs) nhiều hơn trong ít nhất bảy phiên so đội đối lập đã ghi điểm, hoặc nếu sau khi một đội đang dẫn đầu nhiều
                            hơn mười lăm điểm chạy (runs) trong ít nhất năm hiệp so với đội đối lập đã ghi điểm. Nếu điều này xảy ra thì tất cả các
                            phiếu cược sẽ được coi là hợp lệ.
                            <br /> 3.4.9
                            <br /> Cược bóng chày Quốc tế (ví dụ như Olympic, vv) có thể được gọi sớm và cho để cược hợp lệ thì trận đấu đã phải hoàn thành
                            ít nhất 6.5 ván.
                            <br /> 3.5
                            <br /> Khúc Côn Cầu Sân Băng
                            <br /> 3.5.1
                            <br /> Cược cả trận (cược chấp ván và cược trên-dưới nhưng không phải cược trog trận) sẽ được thanh toán dựa trên kết quả cuối
                            cùng vào gồm bù giờ và luân lưu (đội chiến thắng luân lưu sẽ được cộng thêm một điểm vào điểm số để xác định kết quả
                            cuối cùng).
                            <br /> 3.5.2
                            <br /> Nếu 1 trận đấu không được bắt đầu như thời gian dự kiến ban đầu thì tất cả các cược sẽ bị hủy (trừ khi có quy định cụ
                            thể khác).
                            <br /> 3.5.3
                            <br /> Nếu một trận đấu đã bắt đầu nhưng bị hoãn hoặc hủy trong vòng 12 tiếng của lịch thi đấu thì tất cả các cược cả trận
                            được coi là có giá trị nếu phút thứ 55 của trận đấu đã hoàn tất. Các cược cũng được coi là có giá trị nếu kết quả chính
                            thức được công bố bởi cơ quan thẩm quyển tổ chức trận đấu. Các cược khác cho những trận đấu hủy hoặc hoãn sẽ bị hủy,
                            ngoại trừ những cược đã được xác định vô điều kiện.
                            <br /> 3.5.4
                            <br /> Với cược cho hiệp đấu, một hiệp phải được hoàn tất để các cược cho hiệp đó được coi là có giá trị.
                            <br /> 3.5.5
                            <br /> Hiệp ba không bao gồm bù giờ và luân lưu nếu có.
                            <br /> 3.5.6
                            <br /> Cược trong trận trong khúc côn cầu sân băng được thanh toán dựa trên kết quả khi kết thúc thời gian thi đấu thông thường
                            (3 hiệp đấu). Luân lưu và bù giờ không được tính.
                            <br /> 3.5.7
                            <br /> Điểm số sẽ được cập nhật cho cược khúc côn cầu sân băng trong trận và được hiển thị dựa theo tỉ số tại thời điểm đặt
                            cược.
                            <br /> 3.6
                            <br /> Tennis
                            <br /> 3.6.1
                            <br /> Moneyline markets refer to the winner of the match or specified set. Handicap markets are based either on sets or games
                            (please refer to market title); Over/Under and Odd/Even markets based on games (unless otherwise stated).
                            <br /> 3.6.2
                            <br /> Nếu một tay vợt không bắt đầu một giải đấu hay một trận đấu, tất cả cược cho tay vợt này sẽ bị hủy.
                            <br /> 3.6.3
                            <br /> Nếu tay vợt hoặc đồng đội rút lui hoặc bị truất quyền thi đấu trong thời gian thi đấu, những cược đặt cho trận này sẽ
                            bị hủy, ngoại trừ những loại cược mà kết quả đã được xác định vô điều kiện.
                            <br /> 3.6.4
                            <br /> Nếu trận đấu bị hoãn hoặc treo, tất cả cược đặt vẫn có hiệu lực khi trấn đấu hoàn tất.
                            <br /> 3.6.5
                            <br /> Tất cả cược vẫn có hiệu lực không phụ thuộc vào sự thay đổi của địa điểm hoặc sân thi đấu (bao gồm việc chuyển trận
                            đấu từ thi đấu trong nhà ra thi đấu ngoài trời và ngược lại).
                            <br /> 3.6.6
                            <br /> Nếu thời gian thi đấu của một trận theo lịch thi đấu có thay để phân chia thắng bại, tất cả cược đặt cho trận đó sẽ
                            bị hủy, ngoại trừ những loại cược mà kết quả đã được xác định vô điều kiện.
                            <br /> 3.6.7
                            <br /> Cược Người Thắng Ván Đầu Tiên (Người Thắng Ván Thứ Hai, Thứ Ba, vv) nhằm dự đoán kết quả của ván cụ thể. Tất cả cược
                            sẽ được coi là hủy nếu ván cụ thể đó không được hoàn tất.
                            <br /> 3.6.8
                            <br /> Cược Quần Vợt trong trận được thanh toán dựa trên kết quả của trận đấu (hoặc ván cụ thể). Điểm số sẽ không được cập
                            nhật cho cược quần vợt trong trận.
                            <br /> 3.6.9
                            <br /> Cược Most Aces (lỗi giao bóng kép vv) được thanh toán dựa trên kết quả chính thức của trận đấu. Nếu người chơi rút lui
                            hoặc bị truất quyền thi đấu trước khi trận đấu kết thức thì tất cả cược sẽ bị hủy.
                            <br /> 3.6.10
                            <br /> First Ace (lỗi giao bóng kép vv) được thanh toán dựa trên kết quả chính thức của trận đấu. Nếu first Ace (lỗi giao bóng
                            kép vv) được xác định, tất cả các cược vẫn có hiệu lực nếu thậm chí trận đấu chưa được hoàn tất do người chơi rút lui
                            hoặc bị truất quyền thi đấu. Nếu không có Ace (lỗi giao bóng kép vv) tại thời điểm của việc rút lui hoặc bị truất quyền
                            thi đấu, tất cả các cược sẽ được coi là hủy.
                            <br /> 3.6.11
                            <br /> Cược Tay Vợt Thắng Game dự đoán tay vợt thắng cuộc của một game cụ thể, ví dụ Hiệp 1 Game 1; Hiệp 1 Game 2 vv. Khi một
                            hiệp đi đến tie-break, loại cược này sẽ được ghi là Hiệp 1 TB; Hiệp 2 TB vv. Nếu người chơi rút lui hoặc bị truất quyền
                            thi đấu khi một game chưa kết thúc, tất cả các cược cho game đó sẽ được coi là hủy. Nếu một game kết thúc bởi một game
                            phạt được trao, tất cả cược cho game đó sẽ bị hủy (mặc dù game kết thúc bởi một điểm phạt thì tất cả các cược vẫn có
                            hiệu lực). Nếu một game bị hoãn thì các cược cho game đó vẫn có hiệu lực nếu game đó được hoàn thành.
                            <br /> 3.7
                            <br /> Cầu Lông
                            <br /> 3.7.1
                            <br /> Cược dòng tiền dự đoán tay vợt thắng của một trận đấu hoặc một hiệp cụ thể. Cược chấp được dựa trên dựa vào các chiến
                            thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa trên cặp đấu của các ván set hoặc trận đấu (vui lòng
                            tham khảo Tiêu đề thị trường); Thị trường Lớn/ Nhỏ và Đơn/ Chẵn dựa trên điểm số (trừ khi có quy định khác).
                            <br /> 3.7.2
                            <br /> Nếu một tay vợt không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ coi như vô
                            hiệu.
                            <br /> 3.7.3
                            <br /> Nếu một tay vợt (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược sẽ như vô
                            hiệu, ngoại trừ các thị trường đã được vô điều kiện xác định.
                            <br /> 3.7.4
                            <br /> Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận đấu tiếp
                            tục trước khi hết mười hai tiếng.
                            <br /> 3.7.5
                            <br /> Người chiến thắng ván sec đầu tiên (ngưới chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec cụ thể. Tất
                            cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                            <br /> 3.7.6
                            <br /> Cá cược Cầu Lông trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ không được cập
                            nhật cho cá cược Cầu Lông trực tuyến.
                            <br /> 3.8
                            <br /> Bóng bàn
                            <br /> 3.8.1
                            <br /> Thị trường moneyline dựa vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa trên cặp đấu
                            của các ván set hoặc trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/ Nhỏ và Đơn/ Chẵn dựa trên điểm
                            số (trừ khi có quy định khác).
                            <br /> 3.8.2
                            <br /> Nếu một tay vợt không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ coi như vô
                            hiệu.
                            <br /> 3.8.3
                            <br /> Nếu một tay vợt (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược sẽ như vô
                            hiệu, ngoại trừ các thị trường đã được vô điều kiện xác định.
                            <br /> 3.8.4
                            <br /> Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận đấu tiếp
                            tục trước khi hết mười hai tiếng.
                            <br /> 3.8.5
                            <br /> Người chiến thắng ván sec đầu tiên (ngưới chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec cụ thể. Tất
                            cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                            <br /> 3.8.6
                            <br /> Cá cược Bóng bàn trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ không được cập
                            nhật cho cá cược Bóng bàn trực tuyến.
                            <br /> 3.9
                            <br /> Bóng chuyền và bóng chuyền bãi biển
                            <br /> 3.9.1
                            <br /> Thị trường Moneyline dựa vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa trên cặp đấu
                            của các ván set hoặc trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/Nhỏ và Đơn/Chẵn dựa trên trận đấu
                            (trừ khi có quy định khác).
                            <br /> 3.9.2
                            <br /> Nếu một đội không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ coi như vô hiệu.
                            <br
                            /> 3.9.3
                            <br /> Nếu một đội rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược sẽ như vô hiệu, ngoại trừ các
                            thị trường đã được vô điều kiện xác định.
                            <br /> 3.9.4
                            <br /> Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận đấu tiếp
                            tục trước khi hết mười hai tiếng.
                            <br /> 3.9.5
                            <br /> Đội chiến thắng ván sec đầu tiên (đội chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec cụ thể. Tất cả
                            các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                            <br /> 3.9.6
                            <br /> Cá cược Bóng Chuyền trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ không được
                            cập nhật cho cá cược Bóng Chuyền trực tuyến.
                            <br /> 3.10
                            <br /> Khúc côn cầu sân cỏ
                            <br /> 3.10.1
                            <br /> Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến sẽ được giải quyết trên kết quả cuối cùng vào cuối
                            thời gian chính thức. Thêm giờ, bàn thắng vàng và loạt sút luân lưu không tính cho các thị trường toàn thời gian. (Thị
                            trường cụ thể cho thêm giờ (ET) và loạt sút luân lưu (PEN) có thể sẽ được cung cấp đặt cược)
                            <br /> 3.10.2
                            <br /> Nếu một trận đấu bị hoãn lại, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt đầu
                            khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những kèo đã được xác định vô điều kiện. Các phiếu cược cũng sẽ
                            được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi tổ trọng tài có liên quan.
                            <br /> 3.10.3
                            <br /> Thị trường nửa hiệp đầu dựa theo các kết quả của nửa hiệp đầu. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu nửa
                            hiệp một không hoàn thành.
                            <br /> 3.10.4
                            <br /> Cá cược Khúc Côn Cầu Sân cỏ trực tuyến được giải quyết theo kết quả của trận đấu vào cuối thời gian chính thức.
                            <br /> 3.10.5
                            <br /> Điểm số kết quả sẽ được cập nhật vào cá cược Khúc Côn Cầu trực tiếp và thị trường được hiện ra trong quá trình giao
                            dịch trực tiếp để tham khảo tại thời gian đặt cược.
                            <br /> 3.11
                            <br /> Snooker &amp; Pool (Bi-da)
                            <br /> 3.11.1
                            <br /> Thị trường Moneyline và chấp banh dựa vào các chiến thắng của trận đấu. Thị trường Lớn /Nhỏ và Đơn /Chẵn được dựa trên
                            điểm số khung điểm / bảng điểm (trừ khi có quy định khác).
                            <br /> 3.11.2
                            <br /> Nếu một cơ thủ không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ coi như vô
                            hiệu.
                            <br /> 3.11.3
                            <br /> Nếu một trận đấu bắt đầu nhưng không hoàn thành khi đó tất cả các phiếu cược xem như vô hiệu, ngoại trừ các thị trường
                            đã được vô điều kiện xác định.
                            <br /> 3.11.4
                            <br /> Cá cược Bida trực tuyến được giải quyết dựa vào kết quả của trận đấu (hoặc cụ thể trên khung điểm/ bảng điểm). Điểm
                            số sẽ không được cập nhật trên cá cược bida trực tuyến.
                            <br /> 3.12
                            <br /> Golf (Gôn)
                            <br /> 3.12.1
                            <br /> Tất cả các vé cược Gôn được giải quyết theo kết quả của giải đấu chính thức.
                            <br /> 3.12.2
                            <br /> Nếu một gôn thủ không tham gia một giải đấu hoặc vòng đấu cụ thể khi đó tất cả các phiếu cược trên gôn thủ này sẽ vô
                            hiệu. Nếu một gôn thủ rút lui hoặc là bị trút quyền thi đấu trong một giải đấu hoặc vòng đấu thì tất cả các phiếu cược
                            coi như bị thua.
                            <br /> 3.12.3
                            <br /> Nếu một giải đấu hoặc vòng đấu bị trì hoãn hoặc tạm ngưng khi đó tất cả các phiếu cược sẽ vẫn còn hiệu lực đối với bốn
                            mươi tám giờ sau khi kết thúc thời gian dự kiến.
                            <br /> 3.12.4
                            <br /> Cược kết quả (Người thắng cuộc giải đấu)
                            <br /> 3.12.4.1
                            <br /> "Bất kỳ cầu thủ khác" hoặc "Sân cỏ" dựa vào tất cả các gôn thủ không có tên trong thị trường cược kết quả.
                            <br /> 3.12.4.2
                            <br /> Thị trường cược kết quả giải quyết dựa trên người chiến thắng giải đấu và kết quả của bất kỳ play-off sẽ đưa vào tài
                            khoản.
                            <br /> 3.12.4.3
                            <br /> Nếu một giải đấu được rút ngắn bởi các trọng tài (tức là số điểm(Lỗ) dự kiến chưa hoàn tất) thì tất cả các phiếu cược
                            vẫn còn hiệu lực nếu một người chiến thắng chính thức được khai báo. Tuy nhiên, nếu sau khi không có tiếp tục thì phiếu
                            cược đã được đặt sau đó sẽ vô hiệu. Nếu không có người chiến thắng chính thức được khai báo khi đó tất cả các phiếu cược
                            sẽ được coi là vô hiệu.
                            <br /> 3.12.5
                            <br /> Giải đấu đối đầu
                            <br /> 3.12.5.1
                            <br /> Giải đấu đối đầu dựa vào số lần đánh ít nhất của gôn thủ trong một giải đấu (thường là 72 lỗ). Nếu số lượng lỗ cần đánh
                            ít hơn dự kiến khi đó các phiếu cược vẫn còn giá trị nếu một kết quả giải đấu chính thức được khai báo.
                            <br /> 3.12.5.2
                            <br /> Cả hai gôn thủ phải phát bóng thì phiếu cược mới hợp lệ. Các gôn thủ hoàn thành các lỗ nhiều nhất (không bao gồm play-off)
                            sẽ là người chiến thắng. Nếu những gôn thủ hoàn thành cùng chung số lỗ (vẫn không bao gồm play-off) thì gôn thủ có số
                            lần đánh ít nhất là người chiến thắng.
                            <br /> 3.12.5.3
                            <br /> Nếu gôn thủ rút lui hoặc là bị trút quyền thi đấu sau khi phát bóng ra thì gôn thủ khác được coi là người chiến thắng.
                            Tuy nhiên, nếu một gôn thủ rút lui hoặc là bị trút quyền thi đấu sau khi gôn thủ khác cũng bị trút quyền, khi đó gôn
                            thủ đánh vào lỗ nhiều nhất vẫn xem như chiến thắng.
                            <br /> 3.12.5.4
                            <br /> Nếu cả hai gôn thủ cùng rút lui hoặc bị trút quyền cùng một vòng đấu khi đó tất cả các phiếu cược xem như vô hiệu, không
                            phân biệt gôn thủ đã hoàn thành bao nhiêu lỗ đánh.
                            <br /> 3.12.6
                            <br /> Vòng đấu đối đầu
                            <br /> 3.12.6.1
                            <br /> Vòng đấu đối đầu dựa trên gôn thủ có lần đánh ít nhất trong 18 lỗ theo quy định. Không bao gồm Play-off.
                            <br /> 3.12.6.2
                            <br /> Cả hai gôn thủ phải phát bóng thì phiếu cược là hợp lệ. Nếu một gôn thủ rút lui hoặc là bị trút quyền thi đấu sau khi
                            phát bóng ra, khi đó gôn thủ khác được coi là người chiến thắng. Tuy nhiên, nếu một gôn thủ bị trút quyền được tiếp tục
                            vòng tiếp theo khi đó điểm ban đầu vẫn còn hợp lệ.
                            <br /> 3.12.7
                            <br /> Vòng đấu Lớn/ Nhỏ
                            <br /> 3.12.7.1
                            <br /> Thị trường vòng đấu Lớn/ Nhỏ dựa trên một một gôn thủ (hoặc những gôn thủ) với thành tích 18 lỗ theo quy định. Không
                            bao gồm Play-Off.
                            <br /> 3.12.7.2
                            <br /> Một gôn thủ phải phát bóng thì phiếu cược mới hợp lệ. Nếu một gôn thủ không hoàn thành 18 lỗ quy định thì tất cả các
                            phiếu cược được coi là vô hiệu.
                            <br /> 3.12.8
                            <br /> Điểm(Lỗ) cá nhân Lớn/ Nhỏ
                            <br /> 3.12.8.1
                            <br /> Thị trường điểm(Lỗ) cá nhân Lớn/ Nhỏ chỉ một gôn thủ (hoặc những gôn thủ) có điểm qua lỗ cá nhân cụ thể của một vòng
                            quy định.
                            <br /> 3.12.8.2
                            <br /> Nếu lỗ không phải là hoàn thành vào tay golf (hoặc người chơi golf) sau đó tất cả các cược sẽ có hiệu lực.
                            <br /> 3.13
                            <br /> Đua Xe Mô tô
                            <br /> 3.13.1
                            <br /> Đua xe Mô tô bao gồm, không giới hạn, F1, Mô tô GP và A1GP.
                            <br /> 3.13.2
                            <br /> Vị trí đăng quang là kết quả được tính theo phán quyết của trọng tài, bất kể nguyên nhân nào tiếp theo, sửa đổi kết
                            quả cuộc đua. Nếu không lễ đăng quang khi đó kết quả dựa theo khai báo của tổ trọng tài có liên quan ngay sau khi kết
                            thúc cuộc đua. Thị trường Xếp hạng dựa trên các vòng loại vị trí cuối cùng được tuyên bố bởi tổ trọng tài ngay sau khi
                            kết thúc vòng loại.
                            <br /> 3.13.3
                            <br /> Nếu các địa điểm dự kiến được thay đổi sau đó tất cả các cược sẽ được coi là vô hiệu.
                            <br /> 3.13.4
                            <br /> Nếu một cuộc đua là bị hoãn lại khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu cuộc đua được bắt đầu trước
                            khi kết thúc bốn mươi tám giờ, nếu không tất cả các phiếu cược sẽ được coi là vô hiệu. Nếu cuộc đua bắt đầu nhưng không
                            được hoàn thành sau đó tất cả các phiếu cược sẽ vẫn có hiệu lực nếu một kết quả được khai báo bởi trọng tài. Nếu không
                            có kết quả chính thức được khai báo khi đó tất cả các phiếu cược sẽ có hiệu lực.
                            <br /> 3.13.5
                            <br /> Một cuộc đua mô tô được coi là đã bắt đầu khi tín hiệu được đưa ra để bắt đầu khởi động. Nếu tuyển thủ chưa sẵn sàng
                            để bắt đầu từ đường vạch ô (hoặc trạm tiếp nhiên liệu), sau đó các phiếu cược vào tay đua này sẽ vô hiệu. Nếu tuyển thủ
                            không thể bắt đầu vòng loại chính thức của cuộc đua thì các phiếu cược vào tay đua nay sẽ được coi là vô hiệu.
                            <br /> 3.13.6
                            <br /> Trong kèo Head to Head cả hai tay đua phải bắt đầu cuộc đua (hay chính thức của vòng loại) thì các phiếu cược là hợp
                            lệ. Các tay đua với vị trí hoàn thành tốt hơn sẽ được công bố là người chiến thắng. Nếu cả hai tay đua không hoàn thành
                            khi đó các tuyển thủ hoàn thành vòng đua nhiều nhất được coi là người chiến thắng. Nếu trong cuộc đua có cùng một số
                            được ghi nhận cho cả hai tay đua khi đó tất cả các phiếu cược sẽ như vô hiệu, trừ khi vị trí chiến thắng chính thức được
                            tuyên bố.
                            <br /> 3.13.7
                            <br /> Thị trường vòng đua nhanh nhất được quyết định trên tay đua hoặc đội với thời gian nhanh nhất trong vòng đua.
                            <br /> 3.13.8
                            <br /> Thị trường phân loại số của người thắng cuộc được quyết định theo kết quả chính thức tuyên bố bởi các trọng tài.
                            <br
                            /> 3.13.9
                            <br /> Cá cược Đua xe mô tô trực tuyến là giải quyết trên kết quả chính thức của cuộc đua.
                            <br /> 3.13.10
                            <br /> Thị trường Đơn/ Chẵn được dựa trên những vị trí cuối cùng bởi tuyên bố của trọng tài. Ví dụ nếu tay đua A kết thúc vào
                            vị trí số 1 khi đó kết quả là Đơn, nếu tay đua B kết thúc ở vị trí 2 thì kết quả là Chẵn, v.v… Nếu một tay đua không
                            nhận được một phân loại chính thức khi đó các phiếu cược sẽ được coi là vô hiệu và sẽ được hoàn lại tiền.
                            <br /> 3.13.11
                            <br /> Thị trường Winning Margin được dựa trên sự khác biệt thời gian (tính bằng giây) giữa các tay đua được chọn bởi tuyên
                            bố của trọng tài. Cược Lớn có nghĩa là sự khác biệt thời gian sẽ lớn hơn Cược chấp, trong khi Cược Nhỏ có nghĩa là sự
                            khác biệt thời gian sẽ ít hơn so với Cược chấp được cung cấp. Nếu sự khác biệt thời gian giống chính xác như Cược chấp
                            khi đó các phiếu cược sẽ bị vô hiệu và sẽ được hoàn lại tiền.
                            <br /> 3.14
                            <br /> Bóng ném
                            <br /> 3.14.1
                            <br /> Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến sẽ được giải quyết trên kết quả cuối cùng vào cuối
                            thời gian bình thường. Thời gian thêm giờ và loạt sút luân lưu sẽ không tính cho các thị trường toàn thời gian.
                            <br /> 3.14.2
                            <br /> Nếu một trận đấu được hoãn lại, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt
                            đầu khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những thị trường đã được vô điều kiện xác định. Các phiếu cược
                            cũng sẽ được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi trọng tài có liên quan.
                            <br /> 3.14.3
                            <br /> Cá cược Bóng ném trực tuyến được giải quyết trên kết quả vào cuối thời gian chính thức của trận đấu.
                            <br /> 3.14.4
                            <br /> Điểm số sẽ không được cập nhật cho cá cược Bóng ném sống trực tuyến.
                            <br /> 3.15
                            <br /> Bóng nước
                            <br /> 3.15.1
                            <br /> Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến, sẽ được giải quyết trên kết quả cuối cùng vào cuối
                            thời gian chính thức (bốn hiệp). Thời gian bù giờ và loạt sút luân lưu không được tính cho các thị trường toàn thời gian.
                            <br
                            /> 3.15.2
                            <br /> Nếu trận đấu được hoãn lại, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt đầu
                            khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những thị trường đã được vô điều kiện xác định. Các phiếu cược
                            cũng sẽ được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi trọng tài có liên quan.
                            <br /> 3.15.3
                            <br /> Thị trường nửa trận đầu dựa vào kết quả của hiệp thứ nhất và thứ hai. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu
                            nửa trận đấu không hoàn thành.
                            <br /> 3.15.4
                            <br /> Cá cược Bóng nước trực tuyến được giải quyết trên kết quả vào cuối thời gian chính thức của trận đấu.
                            <br /> 3.15.5
                            <br /> Điểm số sẽ không được cập nhật cho cá cược polo dưới nước trực tiếp.
                            <br /> 3.16
                            <br /> Boxing - Quyền Anh
                            <br /> 3.16.1
                            <br /> Phiếu cược đặt vào trận đấu bị trì hoãn sẽ vẫn được coi là hợp lệ nếu cuộc đấu diễn ra trong vòng mười bốn ngày kể từ
                            ngày bắt đầu.
                            <br /> 3.16.2
                            <br /> Đối với thị trường moneyline (trường hợp không có lựa chọn Hòa đối với cá cược) tất cả các phiếu cược sẽ bị vô hiệu
                            nếu kết quả là một trận đấu là Hòa. Nếu tỷ lệ cược cho Hòa được cung cấp như là một lựa chọn cá độ thứ ba, và trận đấu
                            kết thúc Hòa, khi đó phiếu cược vào lựa chọn Hòa sẽ coi như là thắng và phiếu cược vào hai võ sĩ coi như là thua.
                            <br
                            /> 3.16.3
                            <br /> Trận đấu được coi là đã bắt đầu khi tiếng chuông báo bắt đầu của vòng đầu tiên. Nếu một hoặc cả hai võ sĩ không bắt
                            đầu trận chiến khi đó tất cả các phiếu cược sẽ vô hiệu. Nếu một võ sĩ quyền Anh không trả lời chuông bắt đầu của vòng
                            một, hoặc là bị trút quyền thi đấu từ vòng đấu, đối thủ được coi là đã thắng ở vòng trước.
                            <br /> 3.16.4
                            <br /> Tất cả các phiếu cược sẽ được giải quyết trên quyết định chính thức đưa ra ngay sau khi trận đấu. Các thay đổi kết quả
                            tiếp theo sẽ không được công nhận dành cho các mục đích cá cược.
                            <br /> 3.16.5
                            <br /> Chiến thắng nốc ao (KO) cũng bao gồm một nốc ao kỹ thuật (TKO) hoặc giành chiến thắng bởi bị trút quyền thi đấu (DSQ).
                            Điểm quyết định bao gồm quyết định kỹ thuật (TD) và bao gồm hòa kỹ thuật.
                            <br /> 3.16.6
                            <br /> Cá cược Lớn/ Nhỏ là số vòng diễn ra trong thời gian chiến đấu, ví dụ: Cược Nhỏ 9,5 có nghĩa là trận đấu kết thúc trước
                            khi một phút ba mươi giây của vòng 9, trong khi Cược Lớn 9,5 có nghĩa là trận đấu kết thúc sau khi một phút ba mươi giây
                            của vòng 9 (bao gồm cả điểm quyết định).
                            <br /> 3.16.7
                            <br /> UFC
                            <br /> 3.16.7.1
                            <br /> Quy tắc UFC này cũng áp dụng cho trận đấu thúc đẩy bởi tổ chức các nghệ thuật võ pha trộn (MMA).
                            <br /> 3.16.7.2
                            <br /> Cá cược vào trận đấu bị trì hoãn vẫn được coi là hợp lệ nếu cuộc chiến diễn ra trong vòng mười bốn ngày kể từ ngày bắt
                            đầu.
                            <br /> 3.16.7.3
                            <br /> Nếu một trận đấu kết thúc bằng Hòa khi đó tất cả các phiếu cược sẽ vô hiệu.
                            <br /> 3.17
                            <br /> Darts - Phi Tiêu
                            <br /> 3.17.1
                            <br /> Thị trường Moneyline được tính dựa trên tham khảo các chiến thắng của trận đấu. Thị trường Cược chấp và Lớn/ Nhỏ được
                            dựa trên số lượng các ván (trừ khi có quy định khác).
                            <br /> 3.17.2
                            <br /> Nếu một trận đấu được hoãn lại và không bắt đầu trong vòng mười hai giờ từ thời gian bắt đầu khi đó tất cả các phiếu
                            cược được coi là vô hiệu.
                            <br /> 3.17.3
                            <br /> Nếu người phóng phi tiêu không bắt đầu một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào phi tiêu thủ này
                            sẽ vô hiệu.
                            <br /> 3.17.4
                            <br /> Nếu một trận đấu bắt đầu nhưng không được hoàn thành khi đó tất cả các phiếu cược sẽ được coi là vô hiệu.
                            <br /> 3.17.5
                            <br /> Cá cược Phi tiêu trực tuyến được giải quyết theo kết quả của trận đấu. Điểm số sẽ không được cập nhật cho Cá cược Ném
                            phi tiêu trực tuyến.
                            <br /> 3.18
                            <br /> Cricket
                            <br /> 3.18.1
                            <br /> Để trận đấu hạn chế kết quả Lớn (bao gồm ODI và Twenty20) với tất cả các phiếu cược sẽ giải quyết theo kết quả chính
                            thức của các quy tắc cạnh tranh. Tuy nhiên, nếu kết quả được xác định bởi một kết quả siêu-Lớn, bóng ra ngoài, tung đồng
                            xu, v.v… khi đó tất cả các phiếu cược của trận đấu sẽ được coi là vô hiệu.
                            <br /> 3.18.2
                            <br /> Nếu "Không Kết quả" là kết quả chính thức hoặc theo quy tắc cạnh tranh, không có tuyên bố bất kỳ một chiến thắng nào
                            khi đó tất cả các phiếu cược sẽ vô hiệu.
                            <br /> 3.18.3
                            <br /> Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược được coi là hợp lệ nếu trận đấu được tiếp
                            tục trong thời hạn 48 giờ.
                            <br /> 3.18.4
                            <br /> Thị trường trận đấu thử thách sẽ được cung cấp với dạng 1x2. "1" đề cập đến những đội có tên đầu tiên (thường là đội
                            chủ nhà); "X" đề cập đến kết quả trận đấu là Hòa, "2" đề cập đến đội có đặt tên thứ hai (thường là đội khách). Nếu một
                            trận đấu thử thách cuối cùng trong một tỷ số "Hòa" (khác biệt với "Hòa"), sau đó tất cả các phiếu cược trận đấu sẽ được
                            coi là vô hiệu. Nếu một trận đấu là bị hủy bỏ do sự can thiệp bên ngoài thì tất cả phiếu cược có thể được tuyên bố vô
                            hiệu.
                            <br /> 3.18.5
                            <br /> Cá cược điểm chạy nhiều nhất là dựa theo các tuyển thủ có số lượng ghi bàn điểm chạy nhiều nhất trong một trận đấu hay
                            hiệp đấu cụ thể. Cả hai đội tuyển thủ phải đứng trên vạch khu vực đánh cầu và phải ít nhất đánh trúng một quả bóng, phiếu
                            cược mới được xem là hợp lệ.
                            <br /> 3.18.6
                            <br /> Cá cược Tam trụ môn nhiều nhất là dựa theo các tuyển thủ có số điểm tam trụ môn nhiều nhất trong một trận đấu hay hiệp
                            đấu cụ thể. Cả hai đội tuyển thủ phải ít nhất ném trúng một quả bóng thì phiếu cược là hợp lê.
                            <br /> 3.18.7
                            <br /> Cược 6 điểm nhiều nhất dựa theo các đội có số điểm 6 điểm nhiều nhất trong một trận đấu hay hiệp đấu quy định. Các cược
                            sẽ hợp lệ nếu một kết quả chính thức được công bố. Nếu kết quả chính thức là " Không Kết quả " thì tất cả cược tại trận
                            này sẽ vô hiệu.
                            <br /> 3.18.8
                            <br /> Kèo người kế tiếp ra ngoài dựa theo cầu thủ bị đuổi ra ngoài đầu tiên trong một trận đấu hay hiệp đấu. Nếu một VĐV rút
                            lui khi đó phiếu cược sẽ được xem là vô hiệu. Nếu VĐV không bị đuổi ra ngoài khi đó tất cả các phiếu cược sẽ cũng được
                            xem là vô hiệu. Tất cả các cược trên kèo này sẽ được xem là có hiệu lực, thậm chí nếu kết quả chính thức của trận đấu
                            là “Không có kết quả.
                            <br /> 3.18.9
                            <br /> Kèo tổng điểm chạy nhiều nhất là tổng số điểm chạy được ghi bởi cầu thủ hoặc đội trong suốt trận đấu hoặc hiệp đấu.
                            Tuyển thủ phải đứng trên vạch khu vực đánh cầu và phải ít nhất đánh trúng một quả bóng, phiếu cược mới được xem là hợp
                            lệ. Nếu kết quả chính thức là "Không Kết quả" khi đó tất cả các phiếu cược vào thị trường này sẽ vô hiệu.
                            <br /> 3.19
                            <br /> Bóng Rugby Union
                            <br /> 3.19.1
                            <br /> Tất cả các thị trường cược tại toàn trận, bao gồm cả Cá cược trực tuyến sẽ được giải quyết theo kết quả cuối cùng vào
                            cuối thời gian chính thức (80 phút). Thời gian them giờ không tính cho thị trường toàn thời gian.
                            <br /> 3.19.2
                            <br /> Nếu trận đầu được trì hoãn, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt đầu
                            khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những kèo đã được xác định vô điều kiện. Phiếu cược cũng sẽ được
                            coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi các trọng tài có liên quan.
                            <br /> 3.19.3
                            <br /> Thị trường cược nửa trận đầu chỉ dựa theo kết quả của nửa trận đầu. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu
                            nửa trận đấu không hoàn thành.
                            <br /> 3.19.4
                            <br /> Cá cược Bóng Rugby Union trực tuyền được giải quyết theo kết quả vào cuối thời gian chính thức của trận đấu.
                            <br /> 3.19.5
                            <br /> Điểm số kết quả sẽ được cập nhật vào cá cược bóng bầu dục trực tiếp và thị trường được hiện ra trong quá trình giao
                            dịch trực tiếp để tham khảo tại thời gian đặt cược.
                            <br /> 3.20
                            <br /> Giải đấu bóng bầu dục (Rugby)
                            <br /> 3.20.1
                            <br /> Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến, sẽ được giải quyết theo kết quả cuối cùng của cuối
                            trận đấu, bao gồm bất kỳ thời gian them giờ trong trận đấu.
                            <br /> 3.20.2
                            <br /> Nếu một trận đấu được trì hoãn, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt
                            đầu khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những thị trường đã được vô điều kiện xác định. Phiếu cược
                            cũng sẽ được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi các trọng tài có liên quan.
                            <br /> 3.20.3
                            <br /> Thị trường nửa trận đầu chỉ dựa theo kết quả của nửa trận đầu. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu nửa
                            hiệp đấu không hoàn thành.
                            <br /> 3.20.4
                            <br /> Cá cược Giải đấu bóng bầu dục(Rugby) trực tuyến được giải quyết theo kết quả của trận đấu, bao gồm bất kỳ thời gian
                            thêm giờ trong trận đấu.
                            <br /> 3.20.5
                            <br /> Kết quả điểm số cập nhật vào các loại cược tại Giải đấu bóng bầu dục(Rugby) trực tiếp được hiện ra trong quá trình giao
                            dịch trực tiếp để tham khảo tại thời gian đặt cược.
                            <br /> 3.21
                            <br /> Điền kinh
                            <br /> 3.21.1
                            <br /> Loại cược người chiến thắng Outright chung cuộc (Giành Huy chương vàng) dựa theo người chiến thắng của mỗi sự kiện thể
                            thao.
                            <br /> 3.21.2
                            <br /> Loại cược Moneyline được xác định trên việc đặt cược trên từng tuyển thủ cạnh tranh với nhau với việc cược dự đoán tuyển
                            thủ tốt nhất trong một sự kiện (hoặc cuộc đua). Nếu chỉ có một vận động viên điền kinh về đích cuối cùng của một sự kiện
                            khi đó phiếu cược vào đối thủ cạnh tranh sẽ thắng cược. Nếu cả hai vận động viên không đạt được về đích cuối cùng thì
                            các đối thủ cạnh tranh đủ điều kiện trong thời gian với thành tích tốt hơn được tuyên bố là người chiến thắng.
                            <br /> 3.21.3
                            <br /> Vị trí xếp hạng được giải quyết theo kết quả chính thức với tất cả các phiếu cược. Bất kỳ VĐV bị tước quyền hoặc có
                            dấu hiệu sửa đổi kết quả sẽ không được tính cho mục đích thanh toán cược.
                            <br /> 3.21.4
                            <br /> Nếu một sự kiện được trì hoãn, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt
                            đầu khi đó tất cả các phiếu cược được coi là vô hiệu.
                            <br /> 3.21.5
                            <br /> Nếu vận động viên điền kinh không bắt đầu cuộc thi khi đó tất cả các phiếu cược sẽ vô hiệu. Một vận động viên điền kinh
                            được coi là đã bắt đầu một cuộc thi sự kiện nếu họ có tham gia cuộc thi và có ghi lại một kết quả chính thức hoặc được
                            phân loại (bao gồm cả DSQ (bị loại) nhưng loại trừ DNS (không bắt đầu).
                            <br /> 3.22
                            <br /> Bơi lội
                            <br /> 3.22.1
                            <br /> Loại cược Người Thắng Cuộc (Giành Huy chương vàng) dựa theo người chiến thắng của từng sự kiện bơi lội.
                            <br /> 3.22.2
                            <br /> Loại cược Moneyline được xác định trên việc đặt cược trên từng tuyển thủ cạnh tranh với nhau với việc cược dự đoán tuyển
                            thủ tốt nhất trong một sự kiện (hoặc cuộc đua). Nếu chỉ có một tay bơi đạt đến đích của cuộc thi khi đó các phiếu cược
                            vào đối thủ cạnh tranh được thắng cược. Nếu cả hai tay bơi không đạt được đến đích cuối cùng thì các đối đối thủ cạnh
                            tranh đủ điều kiện trong thời gian với thành tích tốt hơn được tuyên bố là người chiến thắng.
                            <br /> 3.22.3
                            <br /> Vị trí xếp hạng được giải quyết theo kết quả chính thức với tất cả các phiếu cược. Bất kỳ VĐV bị tước quyền hoặc sửa
                            đổi kết quả sẽ không được tính cho mục đích cá cược.
                            <br /> 3.22.4
                            <br /> Nếu một sự kiện được trì hoãn, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời gian bắt
                            đầu khi đó tất cả các phiếu cược được coi là vô hiệu.
                            <br /> 3.22.5
                            <br /> Nếu một tay bơi thất bại để bắt đầu một sự kiện khi đó tất cả các phiếu cược sẽ có hiệu lực.
                            <br /> 3.23
                            <br /> Bóng đá bãi biển
                            <br /> 3.23.1
                            <br /> Tất cả các phiếu cược sẽ được giải quyết sau khi có kết quả của ba hiệp đầy đủ của trận đấu (mỗi hiệp mười hai phút)
                            trừ trường hợp quy định tại văn bản của Nhà Cái.
                            <br /> 3.23.2
                            <br /> Nếu một trận đấu bắt đầu trước lịch thi đấu, bất kỳ các phiếu cược không trực tiếp được đặt sau khi trận đấu bắt đầu
                            sớm, nhưng lại bắt đầu trước lịch thi đấu sẽ được xem như VÔ HIỆU. Đặt cược trực tuyến được coi là hợp lệ và các cược
                            trực tuyến được coi là bắt đầu khi sự kiện này đã bắt đầu, thậm chí sớm hơn thời gian dự kiến.
                            <br /> 3.23.3
                            <br /> Thời gian thêm giờ và loạt sút luân lưu sẽ không được tính và giải quyết cho các mục đích cá cược, trừ trường hợp quy
                            định.
                            <br /> 3.23.4
                            <br /> Nếu trận đấu được tạm ngưng, hủy bỏ hoặc bị chấm dứt, thì toàn bộ trận đấu sẽ được coi là vô hiệu. Các trận đấu sẽ được
                            tuyên bố vô hiệu bất kể bất kỳ kết quả được quyết định chính thức. Việc giải quyết tất cả các phiếu cược vào trận vô
                            hiệu là tùy theo quyết định của Nhà Cái.
                            <br /> 3.23.5
                            <br /> Nhà Cái cung cấp thông tin địa điểm (ví dụ như sân trung lập) như các thông tin hữu ích và không chịu trách nhiệm gì
                            nếu những địa điểm trung lập có chính xác hay không. Đây là trách nhiệm của khách hàng vể nhận thức của chính xác các
                            địa điểm của trận đấu.
                            <br /> 3.23.6
                            <br /> Đối với các cược trực tuyến, trong một trận đấu, với các hành động tùy ý và tuyệt đối của Nhà Cái, nếu xét thấy là Các
                            tình huống nguy hiểm về điểm số, kết quả, hiệu suất của một đội bóng hoặc cầu thủ có thể bị ảnh hưởng; hoặc thay đổi
                            tỷ lệ cược/ giá hoặc thị trường hoặc thông tin cá cược ("Tình huống Nguy hiểm") Nhà Cái có quyền tạm ngưng chấp nhận
                            cược và có thể chấp nhận hoặc từ chối cược sau khi có tình huống Nguy Hiểm. Tất cả các tình huống khác, trong một trò
                            chơi được coi là an toàn và các cược sẽ tiếp tục được xem xét tiếp.
                            <br /> 3.23.7
                            <br /> Đối với loại cược trực tuyến, tất cả các phiếu cược chờ sẽ tự động bị từ chối lúc thời điểm trọng tài kết thúc trận
                            đấu ở cuối của từng hiệp đấu và / hoặc toàn thời gian.
                            <br /> 3.23.8
                            <br /> Các Loại Cược Bóng Đá Bãi Biển
                            <br /> 3.23.8.1
                            <br /> Nhà Cái cung cấp các loại cá cược sau đây:
                            <br /> 3.23.8.1.1
                            <br /> Loại cược không trực tiếp
                            <br /> 3.23.8.1.1.1
                            <br /> Cược chấp châu Á - có nghĩa là đặt cược vào đội có lợi thế sẽ có nhiều bàn thắng nhiều nhất dựa vào kết quả cuối cùng
                            của trận đấu bao gồm bất kỳ cược chấp.
                            <br /> 3.23.8.1.1.2
                            <br /> .Cược Chẵn/ Lẻ- có nghĩa là cá cược đó được xác định bởi tổng số bàn thắng của tổng ba hiệp đấu của trận đấu Mỗi hiệp
                            mười hai phút) là Lẻ hoặc Chẵn.
                            <br /> 3.23.8.1.1.3
                            <br /> Cược Tài/Xỉu- có nghĩa là cá cược về tổng số bàn thắng sẽ được ghi trong tổng ba hiệp đấu chính thức của trận đấu(Mỗi
                            hiệp mười hai phút) không bao gồm thời gian thêm giờ.
                            <br /> 3.23.8.1.2
                            <br /> Cược Không Trực Tiếp
                            <br /> 3.23.8.1.2.1
                            <br /> Cược chấp châu Á - có nghĩa là đặt cược vào đội có lợi thế sẽ có nhiều bàn thắng nhiều nhất dựa vào kết quả cuối cùng
                            của trận đấu bao gồm bất kỳ cược chấp.
                            <br /> 3.23.8.1.2.2
                            <br /> Cược Tài/Xỉu- có nghĩa là cá cược về tổng số bàn thắng sẽ được ghi trong tổng ba hiệp đấu chính thức của trận đấu(Mỗi
                            hiệp mười hai phút) không bao gồm thời gian thêm giờ.
                            <br /> 3.23.8.2
                            <br /> Để có danh sách đầy đủ hơn về các loại cá cược, vui lòng tham khảo Mục 2.2 nêu ở trên.
                            <br /> 3.24
                            <br /> Squash
                            <br /> 3.24.1
                            <br /> Cược Moneyline dự đoán cược dựa theo người chiến thắng của trận đấu hoặc trò chơi cụ thể. Thị trường Cược chấp dựa theo
                            trận đấu hoặc điểm (theo tên từng loại cược); Thị trường Lớn/ Nhỏ và Lẻ/ Chẵn dựa theo điểm (trừ khi có quy định khác).
                            <br
                            /> 3.24.2
                            <br /> Nếu một Vận Động Viên không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào VĐV này sẽ vô hiệu.
                            <br
                            /> 3.24.3
                            <br /> Nếu một Vận Động Viên (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược sẽ như
                            vô hiệu, ngoại trừ các Loại cược đã được xác định.
                            <br /> 3.24.4
                            <br /> Nếu một trận đấu được trì hoãn hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận đấu tiếp
                            tục lại trước khi hết mười hai tiếng.
                            <br /> 3.24.5
                            <br /> Người chiến thắng đầu tiên(Người chiến thắng Thứ hai, thứ ba Game v.v…) là cược dựa tên kết quả của trận đấu chính thức.
                            Tất cả các phiếu cược sẽ được coi là vô hiệu nếu các trận đấu chính thức không hoàn thành.
                            <br /> 3.24.6
                            <br /> Cá cược Squash trực tuyến được giải quyết theo kết quả của trận đấu (hoặc quy định trận đấu). Điểm số sẽ không được
                            cập nhật cho cá cược Squash trực tuyến.
                            <br /> 3.25
                            <br /> Loại cược đặc biệt về Đua ngựa
                            <br /> 3.25.1
                            <br /> Cược đặc biệt về Đua ngựa có tại các sự kiện lớn như Melbourne Cup.
                            <br /> 3.25.2
                            <br /> Cược Chung Cuộc
                            <br /> 3.25.2.1
                            <br /> Cược Chung Cuộc là cược vào ngựa nào sẽ thắng cuộc trong lượt đua .Khi trường đua công bố "tất cả rõ ràng – all clear
                            " , "đã được cân" hoặc "cân nặng chính xác" , và công bố kết quả chính thức , tức là cuộc đua đã có kết quả chính thức
                            .Bất cứ việc hủy bỏ tư cách hay sửa đổi kết qủa về sau đều không chấp nhận trong việc đặt cược.
                            <br /> 3.25.2.2
                            <br /> "Cược Chung Cuộc" là cược cho ngựa thắng trong cược dựa theo bảng xếp hạng. Số hạng trong bảng xếp hạng sẽ được công
                            bố trên bàn cược.
                            <br /> 3.25.2.3
                            <br /> Ngựa bỏ cuộc / chưa ra đua, nếu ngựa rút lui trước hay sau khi trọng tài thổi còi bắt đầu (hoặc chạy trước khi mở cửa
                            , làm cho cuộc đua không công bằng) , ngựa đó sẽ bị xem như chưa ra đua/ bỏ cuộc , số tiền đặt cược trên con ngựa này
                            sẽ được hoàn trả.
                            <br /> 3.25.2.4
                            <br /> Nếu kết quả công bố trên giải vô địch là" bất phân thắng bại" , số tiền vốn đặt cược sẽ chia một nữa cho tổng tỉ lệ
                            cược,còn một nữa sẽ toàn bộ bị mất . Nếu có trên 2 con ngựa "không phân thắng bại" , sẽ chia tiền vốn theo tỉ lệ.
                            <br
                            /> 3.25.3
                            <br /> Cược Đối Đầu (Head to head)
                            <br /> 3.25.3.1
                            <br /> "Cược đối đầu" là chỉ con ngựa được đặt cược trong cuộc đua dành được xếp hạng cao hơn so với con ngựa khác . Nếu một
                            trong hai con ngựa (hoặc cả hai con)đều nằm trong danh sách ngựa bỏ cuộc / chưa ra đua , toàn bộ đặt cược sẽ bị xem như
                            hủy bỏ và tiền vốn sẽ toàn bộ được hoàn trả . Nếu thành tích của hai con ngựa trong cuộc đua không phân thắng bại , tất
                            cả đặt cược sẽ bị xem như hủy bỏ.
                            <br /> 3.26
                            <br /> Quy tắc của Đua Ngựa
                            <br /> 3.26.1
                            <br /> Quy định chung
                            <br /> 3.26.1.1
                            <br /> Xuất phát/ Không chạy - Bất kể con ngựa nào rút lui khỏi cuộc đua trước hoặc sau sự bắt đầu theo hiệu lệnh của người
                            điều khiển (hoặc nếu một hoặc nhiều hơn các cổng bắt đầu không mở, vì để ngăn chặn một sự bắt đầu theo cặp), con ngựa
                            đó sẽ được coi là một con không chạy/bị xóa tên khỏi cuộc đua thì số tiền đã cược vào con đó sẽ được trả lại.
                            <br /> 3.26.1.2
                            <br /> Sự phân chia được bảo đảm tối thiểu - Có một sự phân chia được bảo đảm tối thiểu, cho tất cả các loại cược, tương tự
                            với đơn vị cược, ngoại trừ nơi một cuộc đấu loại trực tiếp diễn ra.
                            <br /> 3.26.1.3
                            <br /> Cược muộn - Nếu một cược được chấp nhận vì lỗi, sau một cuộc đua đã bắt đầu thì cược đó sẽ được công bố hủy và sẽ được
                            trả lại.
                            <br /> 3.26.1.4
                            <br /> Sự Phản đối - Bất cứ khi nào một sự phản đối chống lại kết quả của một cuộc đua đã được gửi đi, bất kỳ sự thanh toán
                            nào sẽ được thực hiện theo quyết định của Quan chức hoặc các nhà quản lý cuộc đua.
                            <br /> 3.26.1.5
                            <br /> Kết quả chính thức - kết quả của một cuộc đua sẽ là chính thức khi "tất cả rõ ràng" hoặc "kết cục" được công bố bởi
                            ban tổ chức cuộc đua và "kết quả chính thức" được công bố bởi nhà điều hành.
                            <br /> 3.26.1.6
                            <br /> Thanh toán phân chia - Thanh toán sẽ được bắt đầu ngay khi có thể sau mỗi cuộc đua đã được quyết định, kết quả đã xác
                            nhận và công bố "chính thức".
                            <br /> 3.26.1.7
                            <br /> Công ty có quyền quyết định và hoàn toàn định đoạt mà không cần lời giải thích hoặc thông báo trước cho khách hàng khi
                            từ chối cược, ngay cả khi cược được đặt trước khi sự kiện bắt đầu hoặc trong giới hạn đặt cược (ví dụ cược tối thiểu
                            / tối đa, đặt cược tối đa cho mỗi trận đấu).
                            <br /> 3.26.1.8
                            <br /> Điều khoản này áp dụng cho đua ngựa và đua chó. Cược hợp lệ được chấp nhận sẽ không được coi là vô hiệu trong trường
                            hợp có sự mâu thuẩn trong việc niêm yết tên các vận động viên. Đối với bất kỳ đường chạy hoặc cuộc đua nào, nếu có sự
                            chênh lệnh giữa tên và số vận động viên, hoặc bất cứ lúc nào họ tên được ghi không chính xác hoặc sai quy định hoặc ngược
                            lại, trong trường hợp này, sẽ được quyết định bằng số lượng vận động viên đang tham gia đua thực sự. Để giải quyết sự
                            khác biệt này, kết quả của cuộc đua được xác định dựa trên số vận động viên.
                            <br /> 3.26.1.9
                            <br /> Tên và số lượng Ngựa. Trong trường hợp tên con ngựa và số của con ngựa đó được dịch sang các ngôn ngữ khác, phiên bản
                            tiếng Anh sẽ được ưu tiên.
                            <br /> 3.26.1.10
                            <br /> Điều kiện thanh toán cho các thị trường đua ngựa như bên dưới::-
                            <br /> Điều kiện thanh toán Cho Đua Ngựa Anh và Ai-Len (Các Cổ Tức Thắng và Cược)
                            <br /> Số Đường đua chấp WIN Thanh toán Place cho vị trí
                            <br /> Thứ NhấtThứ hai Thứ 3 Thứ 4
                            <br /> 1 Có 4 hoặc ít hơn 4 CÓ KHÔNG KHÔNG KHÔNG KHÔNG
                            <br /> 2 5 đến 7 con ngựa YES CÓ CÓ KHÔNG KHÔNG
                            <br /> 3 8 đến 15 con ngựa CÓ CÓ CÓ CÓ KHÔNG
                            <br /> 4 Từ 16 con ngựa trở lên CÓ CÓ CÓ CÓ CÓ
                            <br /> Số Đường đua chấp WIN Thanh toán Place cho vị trí
                            <br /> Thứ Nhất Thứ hai Thứ 3 Thứ 4
                            <br /> 1 Có 4 hoặc ít hơn 4 CÓ KHÔNG KHÔNG KHÔNG KHÔNG
                            <br /> 2 5 đến 7 con ngựa CÓ CÓ CÓ KHÔNG KHÔNG
                            <br /> 3 Từ 8 con ngựa trở lên CÓ CÓ CÓ CÓ KHÔNG
                            <br /> Điều kiện thanh toán Cho Đua Ngựa Nam Phi (Các Cổ Tức SA Thắng và Cược)
                            <br /> Số Đường đua chấp WIN Thanh toán Place cho vị trí
                            <br /> Thứ NhấtThứ hai Thứ 3 Thứ 4
                            <br /> 1 5 con ngựa trở xuống CÓ KHÔNG KHÔNG KHÔNG KHÔNG
                            <br /> 2 6 đến 7 con ngựa CÓ CÓ CÓ KHÔNG KHÔNG
                            <br /> 3 8 đến 15 con ngựa CÓ CÓ CÓ CÓ KHÔNG
                            <br /> 4 Từ 16 con ngựa trở lên CÓ CÓ CÓ CÓ KHÔNG
                            <br /> Điều kiện thanh toán Cho Đua Ngựa Dubai(Các Cổ Tức Thắng và Cược)
                            <br /> Số Đường đua chấp WIN Thanh toán Place cho vị trí
                            <br /> Thứ NhấtThứ hai Thứ 3 Thứ 4
                            <br /> 1 Từ 5 con ngựa trở xuống CÓ KHÔNG KHÔNG KHÔNG
                            <br /> 2 Từ 6 con ngựa trở lên CÓ CÓ CÓ KHÔNG
                            <br /> Điều kiện thanh toán Cho Đua Ngựa Úc và Niu- Dơ Lân (New Zealand) (Các Cổ Tức Thắng và Cược)
                            <br /> Số Đường đua chấp WIN Thanh toán Place cho vị trí
                            <br /> Thứ NhấtThứ hai Thứ 3 Thứ 4
                            <br /> 1 4 hoặc ít hơn 4 CÓ KHÔNG KHÔNG KHÔNG
                            <br /> 2 5 đến 7 con ngựa CÓ CÓ KHÔNG KHÔNG
                            <br /> 3 Từ 8 con ngựa trở lên CÓ CÓ CÓ CÓ*
                            <br /> * Trường hợp ngoại lệ với quy định này xảy ra khi ngựa rút lui làm giảm số lượng ngựa xuống còn Bảy, thì tất cả ba ngựa
                            đứng đầu bảng xếp hạng sẽ được thanh toán.
                            <br /> 3.26.2
                            <br /> Đua Ngựa kiểu Nam Phi
                            <br /> 3.26.2.1
                            <br /> Đường đua Nam Phi
                            <br /> 3.26.2.1.1
                            <br /> Cược thắng (Win Pool)
                            <br /> 3.26.2.1.1.1
                            <br /> Mục đích là để chọn người thắng cuộc của một cuộc đua cụ thể..
                            <br /> 3.26.2.1.1.2
                            <br /> Cổ Tức sẽ được xác định bởi việc chia số tiền cược thực bởi số cược vào con ngựa thắng đó.
                            <br /> 3.26.2.1.1.3
                            <br /> Bất kể khi nào 2 hoặc nhiều hơn các con ngựa tham gia đấu loại trực tiếp có khả năng thanh toán phân chia sẽ được tính
                            theo sau. Tiền cá thực sẽ được chia làm hai nhiều phần bình đẳng khi có những cuộc đấu loại trực tiếp và mỗi phần kết
                            quả sẽ được chia bởi số tiền đã cược vào các cuộc đấu loại trực tiếp cá nhân.
                            <br /> 3.26.2.1.2
                            <br /> Cược xếp hạng (Place Pool)
                            <br /> 3.26.2.1.2.1
                            <br /> Mục đích là để chọn một con ngựa được đặt đầu tiên, thứ hai, thứ ba hoặc thứ tư trong một cuộc đua cụ thể..
                            <br /> 3.26.2.1.2.2
                            <br /> Nếu có 5 hoặc ít ngựa hơn thì sẽ không có vị trí cược và tất cả các cược sẽ được hoàn trả.
                            <br /> 3.26.2.1.2.3
                            <br /> Nếu có 6 hoặc 7 con ngựa, tiền thắng sẽ được thanh toán theo các con ngựa có vị trí thứ nhất và thứ hai (Không tính
                            tổng số ngựa đăng ký.
                            <br /> 3.26.2.1.2.4
                            <br /> Nếu có 8 đến 15 con, thắng sẽ được thanh toán theo các con ngựa có vị trí thứ nhất, thứ hai và thứ ba (Không tính tổng
                            số ngựa đăng ký).
                            <br /> 3.26.2.1.2.5
                            <br /> Nếu có 16 hoặc hơn, tiền thắng sẽ được thanh toán theo các con ngựa về đích ở vị trí thư nhất, thứ hai, thứ ba và thứ
                            tư (Không tính tổng số ngựa đăng ký).
                            <br /> 3.26.2.1.2.6
                            <br /> Tiền cược thực sẽ được chia theo nhiều phần bằng nhau cho các con ngựa đã đặt. Các phần này sẽ được chia bởi số cược
                            vào mỗi con ngựa đã được đặt và kết quả là những khoản tiền thưởng được chia ra.
                            <br /> 3.26.2.1.2.7
                            <br /> Với mục đích tính toán phân chia cổ tức, những con ngựa cùng về vị trí đầu tiên sẽ được xem là các vị trí thứ nhất và
                            thứ hai; các con ngựa cùng về vị trí thứ hai sẽ được coi là đã về ở vị trí thứ hai và thứ ba; các con ngựa cùng về vị
                            trí thứ ba sẽ được coi là đã về ở vị trí thứ ba và thứ tư; và những con ngựa cùng về vị trí thứ tư sẽ được xếp vào vị
                            trí thứ tư.
                            <br /> 3.26.2.2
                            <br /> Đường đua Dubai
                            <br /> 3.26.2.2.1
                            <br /> Cược thắng (Win Pool)
                            <br /> 3.26.2.2.1.1
                            <br /> • Mục đích là để chọn người thắng cuộc của một cuộc đua cụ thể..
                            <br /> 3.26.2.2.1.2
                            <br /> Cổ tức sẽ được xác định bởi việc chia số tiền cược thực bởi số cược vào con ngựa thắng đó..
                            <br /> 3.26.2.2.1.3
                            <br /> Bất kể khi nào 2 hoặc nhiều hơn các con ngựa tham gia đấu loại trực tiếp có khả năng thanh toán phân chia sẽ được tính
                            theo sau. Tiền cá thực sẽ được chia làm hai nhiều phần bình đẳng khi có những cuộc đấu loại trực tiếp và mỗi phần kết
                            quả sẽ được chia bởi số tiền đã cược vào các cuộc đấu loại trực tiếp cá nhân.
                            <br /> 3.26.2.2.2
                            <br /> Cược xếp hạng (Place Pool)
                            <br /> 3.26.2.2.2.1
                            <br /> Mục đích là để chọn một con ngựa được đặt đầu tiên, thứ hai hoặc thứ ba trong một cuộc đua cụ thể.
                            <br /> 3.26.2.2.2.2
                            <br /> Nếu có 5 hoặc ít ngựa hơn thì sẽ không có vị trí cược và tất cả các cược sẽ được hoàn trả.
                            <br /> 3.26.2.2.2.3
                            <br /> Nếu có hơn 5 con ngựa, tiền thắng sẽ được thanh toán theo các con ngựa có vị trí thứ nhất, thứ hai và thứ ba..
                            <br /> 3.26.2.2.2.4
                            <br /> Tiền cược thực sẽ được chia theo nhiều phần bằng nhau cho các con ngựa đã đặt. Các phần này sẽ được chia bởi số cược
                            vào mỗi con ngựa đã được đặt và kết quả là những khoản tiền thưởng được chia ra..
                            <br /> 3.26.2.2.2.5
                            <br /> Với mục đích tính toán phân chia khoản tiền thắng, những con ngựa cùng về vị trí đầu tiên sẽ được xem là các vị trí
                            thứ nhất và thứ hai; các con ngựa cùng về vị trí thứ hai sẽ được coi là đã về ở vị trí thứ hai và thứ ba; và những con
                            ngựa cùng về vị trí thứ ba sẽ được xếp vào vị trí thứ ba.
                            <br /> 3.26.2.3
                            <br /> Xuất phát/ Không chạy - Bất kể con ngựa nào rút lui khỏi cuộc đua trước hoặc sau sự bắt đầu theo hiệu lệnh của người
                            điều khiển (hoặc nếu một hoặc nhiều hơn các cổng bắt đầu không mở, vì để ngăn chặn một sự bắt đầu theo cặp), con ngựa
                            đó sẽ được coi là một con không chạy/bị xóa tên khỏi cuộc đua thì số tiền đã cược vào con đó sẽ được trả lại..
                            <br /> 3.26.2.4
                            <br /> Nếu kết quả "Đồng hạng/Dead head" được công bố cho thị trường Cược Chung Cược thì một nữa số tiền đặt cược sẽ được tính
                            dựa trên tỷ lệ cược đầy đủ và một nữa tiền đặt cược còn lại sẽ thua. Nếu có nhiều hơn hai con ngựa bất phân thắng bại
                            thì tiền đặt cược sẽ được chia theo tỷ lệ.
                            <br /> 3.26.3
                            <br /> Đua Ngựa kiểu Anh
                            <br /> 3.26.3.1
                            <br /> Đua ngựa kiểu Anh sẽ phụ thuộc vào luật Quản lý Đua ngựa Anh quốc.
                            <br /> 3.26.3.2
                            <br /> Cược thắng (Win Pool)
                            <br /> 3.26.3.2.1
                            <br /> Mục đích là để chọn một người thắng cuộc trong một cuộc đua cụ thể..
                            <br /> 3.26.3.2.2
                            <br /> Cổ Tức sẽ được xác định bởi việc chia số tiền thực cho số cược vào con ngựa thắng..
                            <br /> 3.26.3.2.3
                            <br /> Bất kể khi nào hai hoặc nhiều hơn số ngựa tham gia đấu loại trực tiếp có khả năng thanh toán sẽ được tính như dưới đây.
                            Tiền cá thực sẽ được chia làm nhiều phần bằng nhau khi có những cuộc đấu loại trực tiếp và mỗi phần kết quả sẽ được chia
                            bởi số tiền đã cược vào các cuộc đấu loại trực tiếp cá nhân.
                            <br /> 3.26.3.3
                            <br /> Cược xếp hạng (Place Pool)
                            <br /> 3.26.3.3.1
                            <br /> Mục đích là để chọn một con ngựa về ở vị trí đầu tiên, thứ hai, thứ ba hoặc thứ tư trong một cuộc đua cụ thể.
                            <br /> 3.26.3.3.2
                            <br /> Có nhiều quy tắc khác nhau cho Cược xếp hạng, cược phụ thuộc vào cuộc đua là một chấp hoặc không có chấp nào. Có nhiều
                            quy định khác nhau cho loại cược xếp hạng, Cược Xếp Hạng phụ thuộc vào một cuộc đua có tỷ lệ chấp hay không có tỷ lệ
                            chấp.
                            <br /> 3.26.3.4
                            <br /> Đường đua không chấp
                            <br /> 3.26.3.4.1
                            <br /> Nếu có 4 con ngựa đua hoặc ít hơn thì sẽ không có cược Xếp Hạng và tất cả các cược đã đặt sẽ được hoàn trả. .
                            <br /> 3.26.3.4.2
                            <br /> Nếu có 5 đến 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về vị trí nhất và nhì.
                            <br /> 3.26.3.4.3
                            <br /> Nếu có hơn 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì và ba.
                            <br /> 3.26.3.5
                            <br /> Đường đua chấp
                            <br /> 3.26.3.5.1
                            <br /> Nếu có 4 ngựa đua hoặc ít hơn thì sẽ không có cược đặt Xếp Hạng và tất cả tiền cược được hoàn trả.
                            <br /> 3.26.3.5.2
                            <br /> Nếu có 5 đến 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về vị trí nhất và nhì.
                            <br /> 3.26.3.5.3
                            <br /> Nếu có 8 đến 15 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì và ba..
                            <br /> 3.26.3.5.4
                            <br /> Nếu có 16 con ngựa đua hoặc hơn, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì, ba và tư.
                            <br /> 3.26.3.5.5
                            <br /> Số tiền đặt cược sẽ được chia thành nhiều phần bằng nhau tương ứng với số ngựa được xếp hạng. Các phần này sẽ được chia
                            tương ứng cho số đơn vị cược cho mỗi con ngựa được xếp hạng và kết quả là tiền phải thanh toán.
                            <br /> 3.26.3.5.6
                            <br /> Để tính tiền thanh toán, những con ngựa cùng về đầu tiên sẽ được coi là giành được vị trí nhất và nhì; những con ngựa
                            cùng về thứ 2 sẽ được coi là giành được vị trí về nhì và ba; những con ngựa cùng về thứ ba sẽ được coi là giành được
                            vị trí thứ ba và thứ tư; và những con ngựa cùng về thứ tư sẽ được coi là giành được vị trí thứ tư.
                            <br /> 3.26.4
                            <br /> Đua Ngựa kiểu Ailen
                            <br /> 3.26.4.1
                            <br /> Đua ngựa kiểu Ailen sẽ phụ thuộc vào luật Quản lý Đua ngựa của đất nước Ailen.
                            <br /> 3.26.4.2
                            <br /> Cược thắng (Win Pool)
                            <br /> 3.26.4.2.1
                            <br /> Mục đích là để chọn một người thắng cuộc trong một cuộc đua cụ thể.
                            <br /> 3.26.4.2.2
                            <br /> Cuộc phân chia sẽ được xác định bởi việc chia số tiền thực cho số cược vào con ngựa thắng.
                            <br /> 3.26.4.2.3
                            <br /> Bất kể khi nào hai hoặc nhiều hơn số ngựa tham gia đấu loại trực tiếp có khả năng thanh toán sẽ được tính như dưới đây.
                            Tiền cá thực sẽ được chia làm nhiều phần bằng nhau khi có những cuộc đấu loại trực tiếp và mỗi phần kết quả sẽ được chia
                            bởi số tiền đã cược vào các cuộc đấu loại trực tiếp cá nhân.
                            <br /> 3.26.4.3
                            <br /> Cược xếp hạng (Place Pool)
                            <br /> 3.26.4.3.1
                            <br /> Mục đích là để chọn một con ngựa về ở vị trí đầu tiên, thứ hai, thứ ba hoặc thứ tư trong một cuộc đua cụ thể.
                            <br /> 3.26.4.3.2
                            <br /> Có nhiều quy tắc khác nhau cho Cược xếp hạng, cược phụ thuộc vào cuộc đua là một chấp hoặc không có chấp nào. Có nhiều
                            quy định khác nhau cho loại cược xếp hạng, Cược Xếp Hạng phụ thuộc vào một cuộc đua có tỷ lệ chấp hay không có tỷ lệ
                            chấp.
                            <br /> 3.26.4.3.3
                            <br /> Đường đua không chấp
                            <br /> 3.26.4.3.3.1
                            <br /> Nếu có 4 con ngựa đua hoặc ít hơn thì sẽ không có cược Xếp Hạng và tất cả các cược đã đặt sẽ được hoàn trả.
                            <br /> 3.26.4.3.3.2
                            <br /> Nếu có 5 đến 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về vị trí nhất và nhì.
                            <br /> 3.26.4.3.3.3
                            <br /> Nếu có hơn 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì và ba.
                            <br /> 3.26.4.3.4
                            <br /> Đường đua chấp
                            <br /> 3.26.4.3.4.1
                            <br /> Nếu có 4 ngựa đua hoặc ít hơn thì sẽ không có cược đặt Xếp Hạng và tất cả tiền cược được hoàn trả.
                            <br /> 3.26.4.3.4.2
                            <br /> Nếu có 5 đến 7 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về vị trí nhất và nhì.
                            <br /> 3.26.4.3.4.3
                            <br /> Nếu có 8 đến 15 con ngựa đua, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì và ba.
                            <br /> 3.26.4.3.4.4
                            <br /> Nếu có 16 con ngựa đua hoặc hơn, tiền sẽ thanh toán cho các con ngựa về ví trí thứ nhất, nhì, ba và tư.
                            <br /> 3.26.4.3.4.5
                            <br /> Số tiền đặt cược sẽ được chia thành nhiều phần bằng nhau tương ứng với số ngựa được xếp hạng. Các phần này sẽ được chia
                            tương ứng cho số đơn vị cược cho mỗi con ngựa được xếp hạng và kết quả là tiền phải thanh toán.
                            <br /> '
                            <br /> 3.26.4.3.4.6
                            <br /> Để tính tiền thanh toán, những con ngựa cùng về đầu tiên sẽ được coi là giành được vị trí nhất và nhì; những con ngựa
                            cùng về thứ 2 sẽ được coi là giành được vị trí về nhì và ba; những con ngựa cùng về thứ ba sẽ được coi là giành được
                            vị trí thứ ba và thứ tư; và những con ngựa cùng về thứ tư sẽ được coi là giành được vị trí thứ tư.
                            <br /> 3.26.5
                            <br /> Quy Định của Đua Ngựa Úc, Đua Chó và Huấn Luyện Viên
                            <br /> Định Nghĩa Thuật Ngữ
                            <br /> "Backed" có nghĩa là đặt cược vào ngựa tham gia cuộc đua, ngựa về đích hoặc cũng có thể cược kết hợp.
                            <br /> "Ngựa tham gia cuộc đua"có nghĩa là một con ngựa hoặc con chó tham gia vào cuộc đua từ lúc bắt đầu chấp nhận đặt cược,
                            nhưng không bao gồm con ngựa hoặc con chó rút lui khỏi cuộc đua.
                            <br /> "Ngựa Về đích" có nghĩa là con ngựa/chó hoàn tất đường đua, nhưng không bao gồm con ngựa/chó không thỏa điều kiện hoặc
                            công bố là không tham gia trước khi có sự công bố chính thức về cân nặng.
                            <br /> "Nhà đầu tư" là người đặt cược và cược được chấp nhận bởi TAB hoặc câu lạc bộ đua ngựa đựa kiểm soát bởi hệ thống máy
                            tính.
                            <br /> 3.26.5.1
                            <br /> Đua Ngựa và đua chó kiểu Úc được quản lý bởi máy tính dưới sự kiểm soát của TAB.
                            <br /> 3.26.5.2
                            <br /> Cược thắng (Win Pool)
                            <br /> 3.26.5.2.1
                            <br /> Mục đích là để chọn ngựa chiến thắng trong một cuộc đua nhất định.
                            <br /> 3.26.5.2.2
                            <br /> Cược sẽ không được chấp nhận nếu số lượng ngựa tham gia nhỏ hơn 2.
                            <br /> 3.26.5.2.3
                            <br /> Nếu số lượng ngựa trong cuộc đua nhỏ hơn 2 tại bất kỳ thời điểm nào hoặc không có bất kỳ ngựa nào hoàn tất đường đua,
                            cược Thắng sẽ kết thúc và các vé cược sẽ được hoàn trả.
                            <br /> 3.26.5.2.4
                            <br /> Số tiền thắng cược (trừ đi các khoản khấu trừ theo quy định) sẽ được chia cho các vé cược đặt vào con ngựa về vị trí
                            đầu tiên.
                            <br /> 3.26.5.2.5
                            <br /> Nếu có vị trí đồng hạng nhất trong cuộc đua, tiền thắng được tính như sau: tiền thắng sẽ được chia thành nhiều phần
                            bằng nhau cho những con ngựa về đồng hạng và khoản tiền này sẽ tiếp tục được phân chia cho mỗi nhà đầu tư đặt vào con
                            ngựa về đồng hạng.
                            <br /> 3.26.5.3
                            <br /> Cược xếp hạng (Place Pool)
                            <br /> 3.26.5.3.1
                            <br /> Mục đích là để chọn ngựa về đích đầu tiên, nhì, hoặc cũng có thể là ba.
                            <br /> 3.26.5.3.2
                            <br /> Cược sẽ không được chấp nhận nếu số ngựa tham gia cuộc đua ít hơn 5.
                            <br /> 3.26.5.3.3
                            <br /> Nếu số lượng ngựa tham gia ít hơn 5 tại bất cứ lúc nào hoặc không có ngựa nào hoàn thành cuộc đua, cược Xếp Hạng sẽ
                            kết thúc và tất cả cược được hoàn trả.
                            <br /> 3.26.5.3.4
                            <br /> Sẽ diễn ra việc chia thưởng vị trí cho 2 cuộc đua nếu số lượng tham gia đăng ký trước hạn định chấp nhận bởi đơn vị
                            tổ chức hoặc các câu lạc bộ đua ngựa tổ chức cuộc đua liên quan ít hơn 8.
                            <br /> 3.26.5.3.5
                            <br /> Tiền thắng cược xếp hạng cho 2 vòng đua (trừ đi các khoản khác khấu trừ theo quy định) được chia thành 2 phần bằng nhau
                            trong đó có một phần để chia cho các nhà đầu tư đặt cược cho ngựa về đích đầu tiên trong cuộc đua và phần thứ hai để
                            chia cho các nhà đầu tư đặt cược vào ngựa về đích vị trí thứ hai trong cuộc đua.
                            <br /> 3.26.5.3.6
                            <br /> Nếu có vị trí đồng hạng nhất cho 2 vòng đua, tiền thắng được tính như sau: tiền đặt cược sẽ được chia thành nhiều phần
                            bằng nhau cho những ngựa về đồng hạng nhất và số tiền này sẽ được chia đều cho những nhà đầu tư đặt vào con ngựa về hạng
                            nhất.
                            <br /> 3.26.5.3.7
                            <br /> Sẽ xảy ra chia thưởng cược vị trí cho 2 cuộc đua nếu số đấu thủ tham dự cuộc đua đăng ký trước hạn được chấp thuận bởi
                            đơn vị tổ chức hoặc câu lạc bộ đua ngựa tổ chức cuộc đua liên quan là 8 hoặc nhiều hơn.
                            <br /> 3.26.5.3.8
                            <br /> Tiền thắng cược xếp hạng cho 3 vòng đua (trừ đi các khoản khấu trừ theo quy định) sẽ được chia thành 3 phần bằng nhau
                            trong đó có một phần để chia cho các nhà đầu tư đặt vào ngựa về đầu tiên, phần thứ hai để chia cho các nhà đầu tư đặt
                            cược vào ngựa về nhì và phần thứ ba chia cho các nhà đầu tư đặt cược vào ngựa về ba.
                            <br /> 3.26.5.3.9
                            <br /> Nếu có 2 con ngựa đồng hạng vị trí đầu tiên trong 3 vòng đua và cả hai con ngựa này đều được đặt cược vào, hai phần
                            ba số tiền thắng cược sẽ được chia thành 2 phần bằng nhau và khoản tiền này được tiếp tục chia cho các nhà đầu tư đặt
                            vào các con ngựa đồng hạng nhất và một phần ba số tiền còn lại sẽ được chia cho các nhà đầu tư đặt vào con ngựa về vị
                            trí thứ ba..
                            <br /> 3.26.5.3.10
                            <br /> Nếu có 2 con ngựa đồng hạng vị trí đầu tiên trong 3 vòng đua và chỉ có một con ngựa có nhà đầu tư đặt cược vào, tổng
                            số tiền thắng cược được chia thành 2 phần bằng nhau; một phần được chia cho các nhà đầu tư đặt cược vào ngựa đồng hạng
                            nhất và phần còn lại được chia cho các nhà đầu tư đặt vào con ngựa về vị trí thứ ba.
                            <br /> 3.26.5.3.11
                            <br /> Nếu có 2 con ngựa về đồng hạng nhất trong 3 vòng đua nhưng không có nhà đầu tư đặt cược vào cả hai con ngựa này, tổng
                            số tiền thắng cược sẽ được chia cho các nhà đầu tư đặt vào con ngựa về vị trí thứ ba.
                            <br /> 3.26.5.3.12
                            <br /> Nếu có 3 hoặc nhiều con ngựa về vị trí thứ nhất trong 3 vòng đua, tổng số tiền thắng cược sẽ được chia đều cho các con
                            ngựa đồng hạng nhất, và khoản tiền này sẽ tiếp tục được phân chia cho các nhà đầu tư đặt vào con ngựa về đồng hạng nhất.
                            <br
                            /> 3.26.5.3.13
                            <br /> Nếu có một con ngựa về vị trí đầu tiên và 2 hoặc nhiều con ngựa về vị trí thứ hai trong 3 vòng đua, một phần ba số tiền
                            thắng cược được chia cho các nhà đầu tư đặt vào ngựa về đích đầu tiên, hai phần ba số tiền còn lại sẽ được chia thành
                            nhiều phần bằng nhau cho những con ngựa về đồng hạng hai và khoản tiền này sẽ tiếp tục được phân chia cho mỗi nhà đầu
                            tư đặt vào con ngựa về đồng hạng hai.
                            <br /> 3.26.5.3.14
                            <br /> Nếu có 2 hoặc nhiều ngựa về đồng hạng hai nhưng chỉ có một ngựa trong số đồng hạng hai này được đặt cược, tổng số tiền
                            thắng cược sẽ được chia thành 2 phần bằng nhau. Một phần sẽ chia cho các nhà đầu tư đặt cược vào con ngựa về đích đầu
                            tiên và phần còn lại sẽ được chia cho các nhà đầu tư đặt vào con ngựa về đồng hạng hai.
                            <br /> 3.26.5.3.15
                            <br /> Nếu con ngựa được chọn về vị trí thứ nhất và thứ hai và có hai hoặc nhiều ngựa chọn đồng hạng vị trí thứ ba trong 3
                            vòng đua, một phần ba số tiền thắng cược được chia cho các nhà đầu tư đặt vào ngựa về đích đầu tiên và một phần ba số
                            tiền thắng cược được chia cho các nhà đầu tư đặt vào ngựa về đích thứ hai, một phần ba số tiền còn lại sẽ được chia thành
                            nhiều phần bằng nhau cho những con ngựa về đồng hạng ba và khoản tiền này sẽ tiếp tục được phân chia cho mỗi nhà đầu
                            tư đặt vào con ngựa về đồng hạng ba.
                            <br /> 3.27
                            <br /> Quy tắc và Quy chế Thế vận hội Olympic
                            <br /> 3.27.1
                            <br /> Tổng quan
                            <br /> 3.27.1.1
                            <br /> Tất cả các thị trường cược sẽ được quyết định dựa trên kết quả tuyên bố chính thức của IOC.
                            <br /> 3.27.1.2
                            <br /> Lễ trao huy chương ban đầu sẽ là kết quả chính thức để quyết định tất cả các cược. Bất kỳ vận động viên bị tước quyền
                            thi đấu hoặc trận đấu bị sửa đổi kết quả sẽ không được xem xét cho các mục đích cá cược.
                            <br /> 3.27.1.3
                            <br /> Tất cả cược được xem là có hiệu lực nếu trận đấu hay sự kiện được hoàn thành trong thời gian chính thức của Giải Đấu
                            Thế Vận Hội, bất kể thời gian bắt đầu thật sự. Khi một trận đấu hay sự kiện không được hoàn thành và không có kết quả
                            chính thức được công bố, thì tất cả các cược sẽ được xem là vô hiệu và sẽ hoàn trả lại.
                            <br /> 3.27.1.4
                            <br /> Bất kì cược nào đã được chấp nhận nhưng xảy ra lỗi sau khi sự kiện đã bắt đầu (ngoại trừ các cược trực tuyến) sẽ bị
                            hủy bỏ và hoàn trả lại.
                            <br /> 3.27.1.5
                            <br /> Nếu một đội hoặc đối thủ cạnh tranh không bắt đầu tham gia sự kiện thì tất cả cược trên sự lựa chọn đó bao gồm cược
                            thắng (thắng Huy Chương Vàng) sẽ được xem như vô hiệu và hoàn trả lại. Nếu một đội hay đối thủ cạnh tranh trong cược
                            thắng thua (một đấu một) không bắt đầu sự kiện thì tất cả cá cược trên kèo đó sẽ bị xem là vô hiệu và được hoàn trả lại.
                            <br
                            /> 3.27.1.6
                            <br /> Nếu tình trạng Dead Heat xảy ra ở cược Thắng Thua (để thắng Huy Chương Vàng) thì nửa số tiền đặt cược sẽ được áp dụng
                            cho tỉ lệ đặt cược hoàn toàn và một nửa còn lại sẽ bị mất đi. Nếu tình trạng Dead Heat xảy ra ở cược Thắng Thua (một
                            chọi một) thì kết quả sẽ hòa và cược vào cả hai đối thủ sẽ được hoàn trả.
                            <br /> 3.27.2
                            <br /> Huy chương Olympic
                            <br /> 3.27.2.1
                            <br /> Các Loại Thị Trường Cược sẽ có các lựa chọn cược như: số huy Chương cá nhân vận đông viên hoặc các nước có được tại
                            các Môn thi tại Đại Hội Olympic.
                            <br /> 3.27.2.2
                            <br /> Những thị trường cược này sẽ tính trên các giải Huy Chương đơn lè như Huy chương vàng, hoặc là Tổng số huy chương (vàng,
                            bạc và đồng kết hợp).
                            <br /> 3.27.2.3
                            <br /> Tất cả các thị trường sẽ được quyết định bởi danh sách huy chương chính thức phát hành bởi IOC ngay sau khi kết thúc
                            Thế vận hội Olympic. Bất kỳ thay đổi nào trong bảng huy chương sẽ không được xem xét cho các mục đích cá cược.
                            <br /> 3.27.3
                            <br /> Moneyline (Đối Đầu)
                            <br /> 3.27.3.1
                            <br /> Những vận động viên nào hoặc đội nào sẽ giành chiến thắng một trận đấu hoặc được đánh giá cao hơn trong một sự kiện?
                            <br
                            /> 3.27.3.1.1
                            <br /> Loại cược đặt người cuối cùng được quyết định bởi vận động nào viên nào tiến xa nhất trong sự kiện. Nếu cả tất cả vận
                            động viên bị loại bỏ ở cùng 1 giai đoạn thì vận động viên với thành tích chính thức cao hơn được tuyên bố là người chiến
                            thắng. Nếu các vận động viên bị loại bỏ ở cùng một giai đoạn, nhưng không có vận động viên nào được đưa vào bảng xếp
                            hạng chính thức, thì các đặt cược sẽ được coi là vô hiệu.
                            <br /> 3.27.4
                            <br /> Khúc Côn Cầu Trên Băng (Ice Hockey)
                            <br /> 3.27.4.1
                            <br /> Khúc côn cầu trên Băng trong kỳ Olympic sẽ tuân theo luật Khúc Côn cầu trên Băng (3.5) trên đây.
                            <br /> 3.27.4.2
                            <br /> Ngoại trừ điều 3.5.3 sẽ được thay thế bằng điều sau - Tất cả cược sẽ được xem là hợp lệ nếu trận đấu được hoàn thành
                            trong khuôn khổ thời gian chính thức của Thế Vận hội, bất kể thời gian bắt đầu thực tế. Cược sẽ được coi là hợp lệ nếu
                            một kết quả chính thức được công bố bởi IOC. Trường hợp một trận đấu không được hoàn thành, và không có kết quả chính
                            thức nào được đưa ra, thì tất cả các cược sẽ bị coi là hủy và sẽ được hoàn trả.
                            <br /> 3.27.4.3
                            <br /> Các thị trường bổ sung có thể được đề xuất (chẳng hạn Thời gian thêm giờ bao gồm hoặc người thắng cuộc) và các điều
                            khoản của thị trường này sẽ được công bố rõ ràng trong phần tiêu đề.
                            <br /> * Ghi chú: Thời gian thêm giờ sẽ không được tính trong các trận đấu thuộc vòng mở đầu, vì vậy kết quả hòa có thể xảy
                            ra.
                            <br /> 3.28
                            <br /> Netball – Bóng lưới
                            <br /> 3.28.1
                            <br /> Tất cả các thị trường cược toàn thời gian, bao gồm cả cược trực tiếp, sẽ được giải quyết trên kết quả cuối cùng bao
                            gồm cả thời gian vượt quá (trừ trường hợp có quy định khác).
                            <br /> 3.28.2
                            <br /> Nếu một trận đấu không bắt đầu vào ngày bắt đầu dự kiến thì tất cả các cược sẽ bị bãi bỏ (trừ khi được nêu khác đi).
                            Nếu trận đấu bị hoãn, đình chỉ hoặc bị hủy thì tất cả các cược sẽ bị bãi bỏ, trừ các cược ở thị trường được xác định
                            vô điều kiện.
                            <br /> 3.28.3
                            <br /> Kết quả Hiệp 1 (First-Half) là kết quả tổng hợp của Ván thứ Nhất và Ván thứ Hai. Kết quả Hiệp 2 (Second-Half) là kết
                            quả tổng hợp của Ván thứ Ba và Ván thứ Tư, bao gồm cả thời gian vượt quá nếu có. Kết quả Ván thứ Tư không bao gồm cả
                            thời gian vượt quá.
                            <br /> 3.28.4
                            <br /> Nếu trận đấu bị hoãn, đình chỉ hoặc bị hủy thì tất cả các cược đặt ở các Hiệp hoặc Ván chưa hoàn tất sẽ bị bãi bỏ. Nếu
                            các Hiệp hoặc Ván được chỉ định hoàn tất thì các cược sẽ có hiệu lực.
                            <br /> 3.28.5
                            <br /> Tỷ số sẽ được cập nhật cho Bóng lưới trên sân trực tiếp và thị trường cá cược theo điểm được hiển thị trong phần giao
                            dịch trực tiếp hiển thị tại thời điểm bắt đầu trận đấu, ví dụ 0-0. Thời gian và tỉ số thể hiện chỉ mang tính chất tham
                            khảo.
                            <br /> 3.29
                            <br /> Các Trò chơi tại Olympic
                            <br /> 3.29.1
                            <br /> Qui định chung
                            <br /> 3.29.1.1
                            <br /> Tất cả thị trường sẽ được thanh toán dựa trên kết quả chính thức từ IOC.
                            <br /> 3.29.1.2
                            <br /> Lễ trao huy chương ban đầu sẽ là kết quả chính thức để thanh toán các vé cược. Bất cứ vấn đề nào không hợp lệ, sửa đổi
                            kết quả sẽ không được tính.
                            <br /> 3.29.1.3
                            <br /> Tất cả các vé cược sẽ được xem là hợp lệ nếu trận đấu hoặc sự kiện hoàn tất trong khoảng thời gian chính thức của Thế
                            Vận Hội Olympic, không phân biệt thời gian bắt đầu thực tế (ngoại trừ Bóng Đá). Nếu trận đấu hoặc sự kiện không hoàn
                            tất, và không có kết quả chính thức nào được đưa ra, thì tất cả các vé cược sẽ được xem là vô hiệu và sẽ được hoàn trả
                            tiền.
                            <br /> 3.29.1.4
                            <br /> Các vé cược được xác định lỗi trong khi sự kiện bắt đầu (ngoại trừ cược trực tiếp trong trận đấu) sẽ được xem là vô
                            hiệu và sẽ được hoàn trả tiền
                            <br /> 3.29.1.5
                            <br /> Nếu 1 đội hoặc đối thủ không tham gia sự kiện thì các vé cược đã đặt vào đó (bao gồm cược chung cuộc (đội giành Huy
                            Chương Vàng)) sẽ được xem là vô hiệu và sẽ được hoàn trả tiền. Nếu 1 đội hoặc đối thủ trong thị trường cược Money Line
                            (Head to Head) không tham gia sự kiện, thì tất cả các vé cược sẽ được xem là vô hiệu và sẽ được hoàn trả tiền.
                            <br /> 3.29.1.6
                            <br /> Nếu luật Dead Heat được áp dụng cho Cược Chung Cuộc (đội giành Huy Chương Vàng), sự thanh toán sẽ chỉ tính dựa trên
                            nửa số tiền đặt cược cùng tỉ lệ cược đầy đủ, nửa số tiền đặt cược còn lại sẽ bị mất đi. Nếu luật Dead Heat được áp dụng
                            cho Cược Money Line (head to head) thì khi kết quả chung cuộc là Hòa, tất cả các cược đặt cho các đối thủ tham gia sẽ
                            được hoàn trả.
                            <br /> 3.29.2
                            <br /> Huy chương Olympic
                            <br /> 3.29.2.1
                            <br /> Thị trường được cung cấp dựa vào tổng số huy chương mà từng cá nhân hoặc cho từng nước tham gia Thế vận hội Olympic
                            2008 đạt được.
                            <br /> 3.29.2.2
                            <br /> Thị trường đưa ra chỉ dựa trên Huy Chương Vàng hoặc trên Tổng Số Huy Chương (Vàng, Bạc và Đồng cộng lại).
                            <br /> 3.29.2.3
                            <br /> Tất cả các thị trường sẽ được thanh toán dựa trên bảng tổng sắp huy chương chính thức từ IOC cung cấp ngay sau khi Thế
                            Vận Hội Olympic kết thúc. Bất kỳ thay đổi nào sau đó trên bảng tổng sắp huy chương đều sẽ không được tính vào mục đích
                            cá cược.
                            <br /> 3.29.3
                            <br /> MoneyLine (đối đầu)
                            <br /> 3.29.3.1
                            <br /> Cầu thủ hoặc đội nào sẽ giành chiến thắng tại một trận đấu hoặc xếp hạng cao hơn trong một sự kiện?
                            <br /> 3.29.3.2
                            <br /> Bảng xếp hạng cuối cùng được quyết định bởi cầu thủ hoặc đội được vào vòng trong. Nếu cả hai cùng bị loại tại cùng cấp
                            bậc thì cẩu thủ/đội có thứ hạng chính thức cao hơn được tuyên bố là người chiến thắng. Nếu cả hai cùng bị loại tại cùng
                            cấp bậc mà không được xếp hạng vào bảng xếp hạng của ban tổ chức đưa ra thì mọi đơn cược đó sẽ vô hiệu.
                            <br /> 3.30
                            <br /> Đua thuyền
                            <br /> 3.30.1
                            <br /> Cup Châu Mỹ (bao gồm cả Louis Vuitton Cup)
                            <br /> 3.30.2
                            <br /> Tất cả thị trường sẽ được tính dựa vào kết quả chính thức được công bố trên trang web chính thức sau mỗi cuộc đua. Bất
                            kỳ kết quả nào không đạt tiêu chuẩn hoặc sửa đổi sẽ không được tính cho các mục đích cá cược.
                            <br /> 3.30.3
                            <br /> Nếu một cuộc đua bị hoãn hoặc bị hủy bỏ thì tất cả các cược được coi là hợp lệ nếu cuộc đua được tiếp tục trong vòng
                            48 giờ.
                            <br /> 3.31
                            <br /> Chính Trị
                            <br /> 3.31.1
                            <br /> • Bầu cử Tổng Thống Mỹ
                            <br /> 3.31.1.1
                            <br /> • Bầu cử Đảng nào sẽ đắc cử trong bầu cử Tổng Thống Mỹ năm 2012 Tên ứng cử viên chỉ có mục đích tham khảo. Nếu không
                            phải Đảng Cộng Hòa hay Đảng Dân Chủ đắc cử, thì tất cả các cược sẽ bị hủy và hoàn trả.
                            <br /> 3.32
                            <br /> Đua Xe Đạp
                            <br /> 3.32.1
                            <br /> Tất cả thị trường sẽ được thanh toán dựa trên kết quả được tuyên bố tại trang web chính thức sau mỗi cuộc đua. Bất kỳ
                            trường hợp không đạt tiêu chuẩn để đi vào vòng tiếp theo, hoặc kết quả được sửa đổi sẽ không được xem xét cho mục đích
                            cá cược.
                            <br /> 3.32.2
                            <br /> Nếu một cuộc đua bị hoãn hoặc bị bỏ rơi thì tất cả các cược đặt được coi là hợp lệ nếu cuộc đua tiếp tục trở lại trong
                            vòng 24 giờ.
                            <br /> 3.32.3
                            <br /> Trong cược các thị trường đối đầu, cả hai tay đua phải bắt đầu cuộc đua thì cược đặt mới là hợp lệ. Tay đua hoàn thành
                            cuộc đua với kết quả xuất sắc hơn sẽ được tuyên bố là người chiến thắng. Nếu cả hai tay đua không hoàn thành cuộc đua
                            thì cược sẽ được tuyên bố vô hiệu và sẽ được hoàn trả.
                            <br /> 3.33
                            <br /> Cầu Mây
                            <br /> 3.33.1
                            <br /> Thị trường Moneyline sẽ lấy người chiến thắng của trận đấu hoặc hiệp đấu cụ thể làm chuẩn. Cược Chấp được đặt dựa trên
                            hiệp đấu hoặc số điểm (vui lòng tham khảo tiêu đề thị trường); Cược Trên/Dưới và Chẵn/Lẻ dựa trên số điểm (trừ khi có
                            những trường hợp qui định cụ thể khác).
                            <br /> 3.33.2
                            <br /> Nếu 1 đội rút lui hoặc bị loại trong suốt 1 trận đấu thì tất cả các vé cược sẽ được hủy bỏ, ngoại trừ những thị trường
                            được xác định vô điều kiện.
                            <br /> 3.33.3
                            <br /> Nếu 1 trận đấu bị hoãn lại hoặc bị ngừng thi đấu thì tất cả các vé cược vẫn có hiệu lực nếu trận đấu được tiếp tục trước
                            khi hết thời hạn 12 giờ.
                            <br /> 3.33.4
                            <br /> Người chiến thắng set đầu (Người chiến thắng set thứ 2,thứ 3, v.v...) dựa trên kết quả của hiệp đấu cụ thể. Tất cả các
                            vé cược sẽ bị hủy nếu hiệp đấu cụ thể không được hoàn thành.
                            <br /> 3.33.5
                            <br /> Tỷ số sẽ không cập nhật cho cược Trực Tiếp Cầu Mây.
                            <br /> 3.34
                            <br /> Tỉ lệ Đua ngựa đối đầu theo kiểu Anh và Ai-len
                            <br /> 3.34.1
                            <br /> Nếu cuộc đua không bắt đầu như dự kiến, tất cả cược bị hủy.
                            <br /> 3.34.2
                            <br /> Cả hai con ngựa phải bắt đầu cuộc đua. Nếu một hoặc cả hai con ngựa được coi là không tham gia thì tất cả cược sẽ bị
                            hủy và sẽ được hoàn trả.
                            <br /> 3.34.3
                            <br /> Nếu đặt cược được chấp nhận khi có lỗi xảy ra, sau khi một cuộc đua đã bắt đầu sau đó đặt cược sẽ được tuyên bố vô hiệu
                            và sẽ được hoàn trả.
                            <br /> 3.34.4
                            <br /> Con ngựa đạt được vị trí tốt hơn trong cuộc đua sẽ được tuyên bố là con thắng. Nếu một con ngựa không hoàn tất cuộc
                            đua thì con ngựa kia sẽ được tuyên bố là con thắng.
                            <br /> 3.34.5
                            <br /> Nếu cả hai con ngựa không hoàn tất cuộc đua thì tất cả cược sẽ bị hủy.
                            <br /> 3.34.6
                            <br /> Nếu hai con ngựa được tuyên bố là đồng hạng trong cuộc đua đối đầu thì tất cả cược sẽ được hoàn trả.
                            <br /> 3.34.7
                            <br /> Kết quả sẽ được quyết định khi "cân nhắc" hoặc "tất cả rõ ràng" được công bố và kết quả chính thức được tuyên bố.
                            <br
                            /> 3.34.8
                            <br /> Thuật ngữ "Ngựa dự thi" dùng để chỉ tất cả các con ngựa khác ngoài những con ngựa có tên trong cuộc đua đối đầu.
                            <br
                            /> 3.35
                            <br /> Thể thao điện tử (Esports)
                            <br /> 3.35.1
                            <br /> Dòng Tiền dùng dể chỉ đội hay cá nhân đánh bại đối thủ của mình hoặc được đặt ở cửa trên trong trận đấu sắp diễn ra.
                            Cược Người Chiến Thắng Trận Đấu dùng để chỉ số bản đồ.
                            <br /> 3.35.2
                            <br /> Người chiến thắng giải thi đấu chỉ đội hay đối thủ cá nhân chiến thắng trong trận chung kết của giải vô địch Thể thao
                            Điện tử.
                            <br /> 3.35.3
                            <br /> Tất cả mọi thị trường sẽ được thanh toán dựa trên kết quả chính thức do hiệp hội hay cơ quan tổ chức thi đấu bộ môn
                            Thể thao Điện tử liên quan công bố, có thể đăng trên trang web chính thức của hiệp hội hay cơ quan này. Mọi sự truất
                            quyền thi đấu hay thay đổi kết quả sẽ không được xem xét để phục vụ cho mục đích cá cược.
                            <br /> 3.35.4
                            <br /> Nếu trận đấu đối kháng bị hoãn thì mọi khoản cược đều sẽ vẫn được xem là có hiệu lực nếu trận đấu được nối lại trong
                            vòng 48 giờ so với lịch thi đấu ban đầu.
                            <br /> 3.35.5
                            <br /> Nếu trận đấu bắt đầu và kết quả chính thức được tuyên bố tất cả cược được coi là hợp lệ, bất kể cầu thủ không có sẵn,
                            cầu thủ ngắt kết nối hoặc gián đoạn. Nếu trận đấu không bắt đầu hoặc bắt đầu trận đấu nhưng không được hoàn thành và
                            kết quả chính thức không được khai báo thì tất cả cược sẽ bị hủy, ngoại trừ các trận đấu trên thị trường đã được xác
                            định vô điều kiện.
                            <br /> 3.35.6
                            <br /> Nếu trận đấu được phát lại do rút thăm, cầu thủ bị ngưng kết nối hoặc gián đoạn điện năng, thì tất cả cược sẽ bị vô
                            hiệu, ngoại trừ những trận đấu trên thị trường đã được xác định vô điều kiện. Trong trường hợp phát lại, trận đấu lại
                            được xem lại sẽ được coi là một thị trường riêng biệt và mới.
                            <br /> 3.35.7
                            <br /> Nếu số vòng / bản đồ được thay đổi từ lịch ban đầu, thì cược chấp và Tài/ Xỉu cược sẽ bị coi là vô hiệu, trong khi các
                            cuộc đặt cược theo dòng tiền vẫn được coi là hợp lệ.
                            <br /> 3.35.8
                            <br /> Chiến công đầu cung cấp đội nào giết người đầu tiên. Chỉ giết bởi người trong đội/ người chơi của đội đối phương.
                            <br
                            /> 3.35.9
                            <br /> First Tower/Turret markets refer to the team which takes the tower/turret first. Bets are valid even if it is destroyed
                            by a creep or was denied.
                            <br /> Tòa tháp đầu tiên/tháp pháo đề cập đến đội mà có tháp /tháp pháo đầu tiên. Các cược có giá trị ngay cả khi nó bị phá
                            hủy bởi binh lính hoặc bị từ chối.
                            <br /> 3.35.10
                            <br /> First Ten (10) Kill markets refer to the team which is first to record ten kills Mười (10) lượt giết người đầu tiên
                            cung cấp đội nào có 10 lượt giết người đầu tiên.
                            <br /> 3.35.11
                            <br /> Roshan đầu tiên/Baron cung cấp đội nào giết chết quái vật mạnh trung lập mạnh nhất trước.
                            <br /> 3.35.12
                            <br /> Thị trường số lượt giết người (cược theo dòng tiền, cược chấp, Tài/Xỉu và chẵn/lẻ) cung cấp số lượt giết người của một
                            đội hoặc cá nhân trong thời gian diễn ra trận đấu. nếu một đội đầu hàng trước khi trận đấu kết thúc thì tất cả lượt giết
                            người sau cuộc đầu hàng sẽ tình vào thị trường này. Giết NB từ tháp và đội quân lính sẽ tính vào tổng điểm chính thức
                            cũng như được hiển thị trên bảng điểm. Chết do phủ nhận, tự tử và quân lính trung lập không tính vào tổng điểm chính
                            thức.
                            <br /> 3.35.13
                            <br /> Chiến thắng theo vòng cung cấp người chiến thắng chính thức của vòng đấu hoặc đội chiến thắng vòng đấu. Điều này áp
                            dụng cho các trò chơi mà bản đồ chỉ được chia thành các vòng riêng biệt.
                            <br /> 3.35.14
                            <br /> Lượt giết người của người chơi cung cấp tổng số lượt giết người bởi một người cho một trận đấu cụ thể, bản đồ hoặc vòng
                            chơi.
                            <br /> 3.35.15
                            <br /> Counter Strike Cược theo dòng tiền, Tài/xỉu và chẵn/lẻ cung cấp số vòng đấu sẽ thắng và sẽ được giải quyết theo kết
                            quả cuối cùng, bao gồm cả thời gian bù giờ (trừ khi có quy định khác).
                            <br /> 3.36
                            <br /> Muay Thai
                            <br /> 3.36.1
                            <br /> Màu đỏ hoặc xanh của các đấu sĩ chỉ được dùng cho mục đích tham khảo. Tất cả các cược sẽ được coi là hợp lệ bất kể sự
                            thay đổi màu sắc của các đấu sĩ.&lt; br /&gt; 3.36.2
                            <br /> Cược chấp đề cập đến người chiến thắng cuộc đấu. Tất cả các cược Chấp sẽ bị coi là vô hiệu nếu trận đấu được tuyến bố
                            là hòa.
                            <br /> 3.36.3
                            <br /> Cược Tài/Xỉu đề cập đến số ván đấu được hoàn thành trong cuộc đấu. Do đó, nếu một cuộc đấu kết thúc ở Ván thứ 5 thì
                            số ván đã hoàn thành là 4. Nếu cuộc đấu được quyết định bởi ban giám khảo thì số ván đã hoàn thành là 5.
                            <br /> 3.36.4
                            <br /> Nếu một hoặc cả hai đấu sĩ bị loại bởi các trọng tài thì tất cả các cược sẽ được tuyên bố là vô hiệu.
                            <br /> 3.36.5
                            <br /> Nếu một cuộc chiến được hoãn lại và không bắt đầu trong vòng mười hai giờ sau thời gian đã định thì tất cả các cược
                            được coi là vô hiệu.
                            <br /> 3.36.6
                            <br /> Một trận đấu được coi là đã bắt đầu khi chuông được gióng lên báo hiệu bắt đầu ván đầu tiên. Nếu một hoặc cả hai đấu
                            sĩ không thể bắt đầu cuộc đấu thì tất cả cược sẽ bị hủy.
                            <br /> 3.36.7
                            <br /> Tất cả các cược sẽ dựa trên quyết định chính thức được đưa ra trong vòng đấu (ring) ngay sau khi cuộc đấu kết thúc.
                            Những thay đổi kết quả sau đó sẽ không được công nhận cho mục đích cá cược.
                            <br /> 3.37
                            <br /> Entertainment
                            <br /> 3.37.1
                            <br /> Sing! China – có nghĩa là cược vào Người chơi / đội sẽ tiến xa nhất trong cuộc thi.
                            <br />
                            <br /> • Hai đội/hai cầu thủ sẽ được chọn để so sánh, các đội /Người chơi thuộc các bảng đấu khác nhau cũng có thể được chọn
                            để so sánh.
                            <br />
                            <br /> • Nếu hai đội / hai cầu thủ đủ điều kiện cho vòng tiếp theo, các cược vào hai đội hai cầu thủ sẽ được chuyển tiếp sang
                            vòng tiếp theo.
                            <br />
                            <br /> • Các cược sẽ được xem là cược hòa nếu hai đội/ hai cầu thủ bị loại tại cùng vòng thi đấu.
                            <br /> 3.38
                            <br /> Quy Định và Quy Tắc Cá Cược Number Game
                            <br /> 3.38.1
                            <br /> Quy Tắc Cơ Bản
                            <br /> 3.38.1.1
                            <br /> Trò chơi này là dự đoán kết quả trái bóng được quay ra từ máy bingo.
                            <br /> 3.38.1.2
                            <br /> Nhà Cái cung cấp các kèo theo thời gian thực tế. Bạn có thể đặt cược nhiều loại cược dưới đây.
                            <br /> 3.38.2
                            <br /> Loại Cược
                            <br /> 3.38.2.1
                            <br /> Thông thường, Number Game được chia ra làm 2 loại.
                            <br /> (A) Trước khi lượt chơi bắt đầu – Người chơi có thể đặt cược trước khi lượt chơi bắt đầu, nhưng khi đã bắt đầu quay
                            thì không được chấp nhận đặt cược.
                            <br /> (B) Trong khi trò chơi đang tiến hành – Người chơi có thể đặt cược trong khi trò chơi đang tiến hành với các kèo khác
                            nhau.
                            <br /> 3.38.2.2
                            <br /> Quy tắc cược cho Trước khi lượt chơi bắt đầu:
                            <br /> (A) Tài/Xỉu, Trái bóng thứ nhất hoặc cuối cùng được quay ra
                            <br /> (B) Lẻ/Chẵn, Trái bóng thứ nhất hoặc cuối cùng được quay ra
                            <br /> (C) Lẻ/Chẵn, ( nguyên 1 lần quay) (Tổng số 3 trái bóng được quay ra)
                            <br /> (D) Warrio, so sánh với banh thứ hai hoặc thứ ba được quay ra.
                            <br />
                            <br /> “Last ball drawn” là quả bóng cuối cùng được quay ra. Nếu xảy ra sự cố gì mà không thể rút ra thì tất cả các đơn cược
                            cho quả bóng cuối cùng sẽ được xem là vô hiệu và hoàn trả tiền cược.
                            <br />
                            <br /> Khi lượt chơi kết thúc sẽ thanh toán đơn cược ngay. Và một trận đấu được xem là kết thúc khi 3 quả bóng quay ra không
                            gặp sự cố. Nếu có sự cố xảy ra Nhà Cái sẽ bảo luu quyền hủy bỏ và hoàn trả tiền cược.
                            <br /> 3.38.2.3
                            <br /> Tài/Xỉu, Trái bóng thứ nhất hoặc cuối cùng được quay ra.
                            <br /> Nhà Cái sẽ đưa ra loại kèo dự đoán số của trái bóng thứ nhất hoặc cuối cùng là “over”(lớn hơn) hoặc “under”(nhỏ hơn)
                            <br
                            /> Over (lớn hơn) _ số trái bóng từ 38 đến 75 được xem là lớn hơn.
                            <br /> Under (nhỏ hơn): số trái bóng từ 1 đến 37 được xem là nhỏ hơn.
                            <br /> Ví dụ: Trái bóng số 30 thì cược vào “under” (nhỏ hơn) sẽ thắng.
                            <br /> 3.38.2.4
                            <br /> Lẻ/Chẵn, Trái bóng thứ nhất hoặc cuối cùng được quay ra.
                            <br /> Nhà Cái sẽ đưa ra loại kèo dự đoán số của trái bóng thứ nhất hoặc cuối cùng là “odd”(lẻ) hoặc “even”(chẵn)
                            <br />
                            <br /> Odd – Số trái bóng thuộc số lẻ.
                            <br /> Even – Số trái bóng thuộc số chẵn.
                            <br /> Ví dụ: Trái bóng số 30 thì cược vào “Even” (chẵn) sẽ thắng.
                            <br /> 3.38.2.5
                            <br /> Lẻ/Chẵn, Trái bóng thứ nhất hoặc cuối cùng được quay ra.
                            <br /> Nhà Cái sẽ đưa ra loại kèo dự đoán tổng số của 3 trái bóng là “odd”(lẻ) hoặc “even”(chẵn).
                            <br /> Odd (FT) – Tổng số 3 trái bóng là số lẻ.
                            <br /> Even (FT) – Tổng số 3 trái bóng là số chẵn.
                            <br /> Ví dụ: Các trái bóng 07, 13, 20 phân biệt được quay ra, và tổng 3 trái bóng là 40. 40 là số chẵn, vậy nếu cược vào “Even(FT)”
                            sẽ thắng.
                            <br /> 3.38.2.6
                            <br /> Warrior, so sánh với banh thứ hai hoặc thứ ba được rút
                            <br /> 3.38.2.6.1
                            <br /> Số 1 sẽ là số thấp nhất và số 75 sẽ là con số lớn nhất.
                            <br /> 3.38.2.6.2
                            <br /> Nhà Cái sẽ cung cấp tỷ lệ cược cho loại đặt cược trước khi banh đầu tiên được rút ra. Người chơi có thể đặt cược bất
                            cứ lúc nào, nhưng phải trước khi banh đầu tiên được rút ra.
                            <br /> Ví dụ: Nếu banh thứ 2 rút ra là số 45 và banh thứ ba rút ra là số 60, thì người chơi cược vào bóng thứ 3 sẽ giành chiến
                            thắng trong trò chơi.
                            <br /> 4.
                            <br /> Quy Tắc Cá Cược Thể Thao Ảo
                            <br /> 4.1
                            <br /> Tổng Quan
                            <br /> 4.1.1
                            <br /> Các trò chơi thể thao ảo được điều hành bởi máy tính tạo ra các số ngẫu nhiên có thể quyết định đội nào thắng trong
                            trận đấu hay sự kiện hay các vòng đấu một, hai, ba hoặc trong một cuộc đua. Kết quả trận đấu, vòng đua hay sự kiện được
                            điều khiển bởi Bộ Máy phát số ngẫu nhiên (RNG) kiểm tra độc lập bởi một Nhà Cái uy tín.
                            <br /> 4.1.2
                            <br /> Bất cứ khi nào thực hiện, cược thể thao ảo sẽ được áp dụng bởi cùng một quy tắc so với cược trên một sự kiện thật..
                            <br
                            /> 4.1.3
                            <br /> Thể thao ảo là trò chơi dự đoán. Tất cả thành viên cược trên cùng một trận đấu, vòng đua hay sự kiện đều nhận kết quả
                            giống nhau.
                            <br />
                            <br /> 4.1.4
                            <br /> Trong trường hợp máy tính, thiết bị điện tử hay một sự cố xảy ra làm gián đoạn trận đấu, vòng đua hay sự kiện, những
                            cược ở nhựng trận đấu, vòng đua và sự kiện đó sẽ bị hủy và hoàn trả lại.
                            <br /> 4.1.5
                            <br /> Mặc dù các thông tin bình luận về trận đấu, vòng đua hay sự kiện không đồng bộ với video thể thao ảo, tất cả các cược
                            vẫn còn giá trị.
                            <br /> 4.1.6
                            <br /> Trong trường hợp trận đấu, vòng đua hay sự kiện không bắt đầu hoặc chưa hoàn thành và không thể xác định được kết quả,
                            trận đấu, vòng đua và sự kiện đó sẽ bị hủy. Các cược sẽ được hoàn trả theo Luật và Điều Kệ Cá Cược.
                            <br /> 4.1.7
                            <br /> Những cược trong các trận đấu, vòng đua, sự kiện, mùa giải dù đã được chấp nhận nhưng sẽ bị đình chỉ nếu người chơi
                            thoát ra khỏi website.
                            <br /> 4.2
                            <br /> Bóng Đá Ảo
                            <br /> 4.2.1
                            <br /> Bóng đá ảo nghĩa là cược trên những kết quả được tạo ra ngẫu nhiên ở một trận hay một sự kiện bóng đá. Bộ máy phát số
                            ngẫu nhiên sẽ quyết định kết quả của trận đấu hay sự kiện sử dụng hệ thống đánh giá cho từng đội. Có 5 đội được chọn,
                            xếp theo thứ tự từ quốc tế đến tiêu chuẩn theo câu lạc bộ. Hai đội sẽ thi đấu trong mỗi trận đấu.
                            <br /> 4.2.2
                            <br /> Có 6 loại kèo trong Bóng Đá Ảo:
                            <br />
                            <br /> 1. 1x2
                            <br /> 2. Tỷ số Chính Xác
                            <br /> 3. Tổng số bàn thắng
                            <br /> 4. Cơ hội Kép
                            <br /> 5. Tài/Xỉu 2.5 Tổng số bàn thắng
                            <br /> 6. Cược Chấp Châu Á
                            <br /> 4.2.3
                            <br /> Mỗi trận đấu hay sự kiện sẽ được diễn ra tại điều kiện nắng ấm với thời gian khoảng 60 giây. Mỗi một đoan phim sẽ có
                            4 lần để thi đấu mang đến các kết quả Ghi Bàn, Trượt hoặc Lưu Lại.
                            <br /> 4.2.4
                            <br /> Mỗi trận đấu hay sự kiện sẽ bắt đầu với hướng dẫn được thể hiện ở danh sách của 2 đội và số tiền đặt cược theo từng
                            loại kèo.
                            <br /> 4.2.5
                            <br /> Cược vào bất kỳ trận đấu hay sự kiện nào cũng sẽ không được chấp nhận nếu trận đấu đã được bắt đầu. Tất cả các cược
                            này đều bị hủy hoặc hoàn trả.
                            <br /> 4.2.6
                            <br /> . Khi trận đấu hay sự kiện kết thúc, kết quả trận đấu sẽ hiện ra với tỷ số và kết quả chiến thắng của từng loại kèo.
                            .
                            <br /> 4.2.7
                            <br /> Sau khi kết quả của trận đấu hay sự kiện được hiển thị, trận đấu hay sự kiện tiếp theo sẽ được giới thiệu. Kết quả của
                            từng trận đấu hay sự kiện sẽ được hiện ra trên website trong một khoảng thời gian nhất định.
                            <br /> 4.3
                            <br /> Đua Ngựa Ảo
                            <br /> 4.3.1
                            <br /> Đua Ngựa Ảo có nghĩa là đặt cược vào kết quả của một cuộc đua ngựa hoặc giải đấu tạo ra các con số ngẫu nhiên.
                            <br
                            /> 4.3.2
                            <br /> Có năm (5) loại đặt cược đua ngựa ảo:
                            <br />
                            <br /> 1. Thắng
                            <br /> 2. Đặt
                            <br /> 3. Thắng/Đặt
                            <br /> 4. Cược Dự đoán
                            <br /> 5. Cược Dự đoán 3 Vị Trí
                            <br /> 4.3.3
                            <br /> Số lượng ngựa đua có thể thay đổi trong mỗi cuộc đua hoặc sự kiện được tổ chức trong đường đua bằng phẳng, nhảy
                            vượt hoặc chạy nước rút trong điều kiện ngày nắng, ngày âm u và đêm.
                            <br /> 4.3.4
                            <br /> Bất kể số lượng ngựa chạy thi, điều khoản Mỗi Lượt (Each Way) cho đua ngựa ảo là đặt kèo cược ở 1, 2, 3.
                            <br /> 4.3.4.1
                            <br /> Con ngựa 8-11: Thị trường đặt tỷ lệ 1,2,3
                            <br /> 4.3.4.2
                            <br /> Con ngựa 12-15: Thị trường đặt tỷ lệ 1,2,3
                            <br /> 4.3.4.3
                            <br /> Con ngựa 16: Thị trường đặt tỷ lệ 1,2,3
                            <br /> 4.3.5
                            <br /> Mỗi cuộc đua hay giải đấu bắt đầu với lời giới thiệu hiển thị một danh sách của tất cả các ngựa đua và con số tương
                            ứng của chúng và giá cả cho từng loại cược.
                            <br /> 4.3.6
                            <br /> Mỗi cuộc đua hay giải đấu sẽ kéo dài từ 30 giây đến 45 giây.
                            <br /> 4.3.7
                            <br /> Một khi cuộc đua hoặc giải đấu đã kết thúc, hình ảnh về đích của những con ngựa sẽ được phát lại và theo
                            sau là kết quả nhóm 3 hoặc 4 con về đầu.
                            <br /> 4.3.8
                            <br /> Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu. Kết
                            quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> 4.4
                            <br /> Đua Chó Ảo
                            <br /> 4.4.1
                            <br /> Đua chó ảo có nghĩa là đặt cược vào kết quả của một cuộc đua chó hoặc giải đấu tạo ra các con số ngẫu nhiên.
                            <br
                            /> 4.4.2
                            <br /> Có năm (5) loại đặt cược đua chó ảo:
                            <br />
                            <br /> 1. Thắng
                            <br /> 2. Đặt
                            <br /> 3. Thắng/Đặt
                            <br /> 4. Cược Dự đoán
                            <br /> 5. Cược Dự đoán 3 Vị Trí
                            <br /> 4.4.3
                            <br /> Ở mỗi cuộc đua, sẽ có 8 chú chó đua ở đường đua phẳng hoặc có chướng ngại vật, trong điều kiện nắng, u ám hoặc ban đêm.
                            <br
                            /> 4.4.4
                            <br /> Điều khoản Một lượt (Each way) ở đua chó là các cược đặt ở tỉ lệ 1, 2, 3.
                            <br /> 4.4.5
                            <br /> Mỗi cuộc đua hay giải đấu bắt đầu với lời giới thiệu hiển thị một danh sách của tất cả các chó đua và con số tương
                            ứng của chúng và giá cả cho từng loại cược.
                            <br /> 4.4.6
                            <br /> Mỗi cuộc đua hay giải đấu sẽ kéo dài từ 30 giây đến 45 giây.
                            <br /> 4.4.7
                            <br /> Một khi cuộc đua hoặc giải đấu đã kết thúc, hình ảnh về đích của chó đua sẽ được phát lại và theo sau là
                            kết quả nhóm 3 con về đầu.
                            <br /> 4.4.8
                            <br /> Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu. Kết
                            quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> 4.5
                            <br /> Quần Vợt Ảo
                            <br /> 4.5.1
                            <br /> Quần vợt ảo có nghĩa là đặt cược vào kết quả của một trận đấu quần vợt hoặc giải đấu tạo ra các con số ngẫu
                            nhiên.
                            <br /> 4.5.2
                            <br /> Có hai (2) tay vợt trong mỗi trận đấu quần vợt được tổ chức trên sân cỏ quần vợt trong điều kiện trời
                            nắng.
                            <br /> 4.5.3
                            <br /> Có ba (3) loại đặt cược cho quần vợt ảo:
                            <br />
                            <br /> 1. Moneyline (cược theo dòng tiền)
                            <br /> 2. Điểm Số Chính Xác
                            <br /> 3. Tổng Số Điểm
                            <br /> 4.5.4
                            <br /> Mỗi trận đấu hoặc giải đấu bắt đầu với lời giới thiệu hiển thị hai đấu thủ và màu áo tương ứng và cờ của họ, bộ
                            phận chỉ báo phục vụ đấu thủ và giá cả cho từng loại cược.
                            <br /> 4.5.5
                            <br /> Mỗi trận đấu hoặc giải đấu sẽ gồm một ván đơn lên đến mười hai (12) điểm kéo dài từ 30 giây đến 120 giây.
                            <br
                            /> 4.5.6
                            <br /> Sau khi kết quả của cuộc đua hay giải đấu được hiển thị, cuộc đua hoặc giải đấu tiếp theo sẽ được giới thiệu. Kết
                            quả của mỗi cuộc đua hoặc giải đấu sẽ được hiển thị trên trang web trong một khoảng thời gian.
                            <br /> 4.6
                            <br /> Cược đua xe thể thao ảo (Xe hơi)
                            <br /> 4.6.1
                            <br /> Cược đua xe thể thao ảo nghĩa là đặt cược vào kết quả của một con số ngẫu nhiên được tạo ra trong một
                            sự kiện đua xe hơi.
                            <br /> 4.6.2
                            <br /> Có năm (5) loại cược trong đua xe ảo:
                            <br />
                            <br /> Có năm (5) loại đặt cược đua chó ảo:
                            <br />
                            <br /> 1. Thắng
                            <br /> 2. Đặt
                            <br /> 3. Thắng/Đặt
                            <br /> 4. Cược 2 xe về đầu (Forecast)
                            <br /> 5. Cược 3 xe về đầu (Tri-cast)
                            <br /> 4.6.3
                            <br /> Có mười hai (12) xe trong mỗi lượt đua xe được tổ chức trên đường đua xe lòng chảo khi điều kiện thời tiết
                            nắng ráo.
                            <br /> 4.6.4
                            <br /> Mỗi lượt đua bắt đầu bằng việc giới thiệu danh sách các xe tham dự cuộc đua, thông tin về giá cả, tên
                            vòng đua, đồng hồ đếm ngược, quãng đường đua và kiểu đua.
                            <br /> 4.6.5
                            <br /> Mỗi lượt đua sẽ kéo dài 60 giây.
                            <br /> 4.6.6
                            <br /> Sau khi lượt đua kết thúc, hình ảnh các xe cán vạch về đích sẽ được phát lại và sau đó là công bố
                            kết quả, trong đó có kết quả của 3 xe về đích đầu tiên.
                            <br /> 4.6.7
                            <br /> Sau khi kết quả lượt đua được công bố, lượt đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả sẽ
                            được công bố trên trang web trong một khoảng thời gian nhất định.
                            <br /> 4.7
                            <br /> Đua xe đạp ảo
                            <br /> 4.7.1
                            <br /> Đua xe đạp ảo nghĩa là cá cược dựa trên kết quả của một con số ngẫu nhiên do sự kiện đua xe đạp tạo ra.
                            <br /> 4.7.2
                            <br /> Có năm (5) loại đặt cược đua chó ảo:
                            <br />
                            <br /> 1. Thắng
                            <br /> 2. Đặt
                            <br /> 3. Thắng/Đặt
                            <br /> 4. Cược 2 xe về đầu (Forecast)
                            <br /> 5. Cược 3 xe về đầu (Tri-cast)
                            <br /> 4.7.3
                            <br /> Có từ sáu đến chín (6-9) vận động viên đua xe đạp thi đấu trên sân đua xe đạp hình bầu dục có đèn chiếu sáng.
                            <br /> 4.7.4
                            <br /> Mỗi sự kiện đua xe bắt đầu bằng thông tin giới thiệu cho biết danh sách vận động viên đua xe đạp, màu áo, thông tin
                            về mức giá đặt cược, tên đường đua, đồng hồ đếm ngược và quãng đường đua.
                            <br /> 4.7.5
                            <br /> Mỗi sự kiện đua xe đạp sẽ kéo dài 45 giây.
                            <br /> 4.7.6
                            <br /> Sau khi cuộc đua kết thúc, hình ảnh các vận động viên đua xe đạp cán đích sẽ được phát lại và sau đó là hình chụp vận
                            động viên ngay tại thời điểm cán vạch đích và bảng kết quả, trong đó có ba (3) người về đích đầu tiên.
                            <br /> 4.7.7
                            <br /> Sau khi kết quả của cuộc đua đã hiển thị xong, sự kiện đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả sẽ được
                            hiển thị trên trang web trong một khoảng thời gian nhất định.
                            <br /> 4.8
                            <br /> Đua Xe Mô Tô Ảo
                            <br /> 4.8.1
                            <br /> . Đua xe mô tô ảo nghĩa là cá cược dựa trên kết quả của một con số ngẫu nhiên do sự kiện đua xe mô tô tạo ra.
                            <br />
                            <br /> 4.8.2
                            <br /> Có hai (2) kiểu cược sẵn có đối với Đua xe mô tô ảo:
                            <br />
                            <br /> 1. Thắng (Win)
                            <br /> 2. Dự đoán hai vị trí đầu tiên (Forecast)
                            <br />
                            <br /> 4.8.3
                            <br /> Có bốn (4) vận động viên đua xe trong mỗi sự kiện đua xe mô tô được tổ chức trên đường đua bằng phẳng hình bầu dục vào
                            ban đêm hoặc trong điều kiện có đèn chiếu sáng.
                            <br />
                            <br /> 4.8.4
                            <br /> Mỗi sự kiện đua xe bắt đầu bằng thông tin giới thiệu cho biết danh sách vận động viên tham gia đua xe, thông tin về
                            mức giá đặt cược, tên đường đua, đồng hồ đếm ngược và quãng đường đua..
                            <br />
                            <br /> 4.8.5
                            <br /> Mỗi sự kiện đua xe mô tô ảo sẽ kéo dài 30 giây.
                            <br />
                            <br /> 4.8.6
                            <br /> Sau khi cuộc đua kết thúc, hình ảnh các vận động viên đua xe mô tô cán đích sẽ được phát lại và sau đó là hình chụp
                            vận động viên ngay tại thời điểm cán đích và bảng kết quả, trong đó có ba (3) người về đích đầu tiên.
                            <br />
                            <br /> 4.8.7
                            <br /> Sau khi kết quả cuộc đua được hiển thị xong, sự kiện đua tiếp theo sẽ được giới thiệu. Tất cả các kết quả sẽ được hiển
                            thị trên trang web trong một khoảng thời gian nhất định.
                            <br /> 5.
                            <br /> Casino Trực tuyến
                            <br /> 5.1
                            <br /> Quy tắc Chung
                            <br /> 5.1.1
                            <br /> Nhà Cái theo quy định riêng có toàn quyền thay đổi, hủy bỏ, tạm dừng, xóa bỏ, sửa đổi hoặc khởi động lại tất cả các
                            trò chơi hoặc giải đấu trong Casino Trực tuyến, tước quyền đặt cược vì lý do gian lận, từ chối hoặc hủy bỏ đặt cược do
                            biến cố, chiến tranh, thiên tai, mất điện, lỗi do con người hoặc do lỗi hay sơ suất của Nhà Cái hoặc nhân viên Nhà Cái
                            vi phạm các tiêu chuẩn ngành, lỗi phần mềm và bất kỳ các biến cố nào khác được xem là trường hợp bất khả kháng. Quyết
                            định của Nhà Cái là cuối cùng và ràng buộc khách hàng.
                            <br /> 5.1.2
                            <br /> Các kết quả ảo, nếu có, đối với tất cả các trò chơi Casino Trực tuyến chỉ để tham khảo và sẽ không được sử dụng để quyết
                            định kết quả của các trò chơi casino trực tuyến.
                            <br /> 5.1.3
                            <br /> Bộ tính giờ để cược hiển thị khoảng thời gian khách có thể đặt cược. Nhà Cái có toàn quyền quyết định thời gian của
                            bộ tính giờ. Khách sẽ không được phép đặt khoản cược sau khi hết thời gian. Khoản cược đặt sau khi thời gian đã hết được
                            xem là không hợp lệ.
                            <br />
                            <br /> 5.1.4
                            <br /> Bộ tính giờ để cược cược có thể gặp phải các vấn đề kỹ thuật. Tất cả khoản cược được đặt khi bộ bấm giờ gặp phải vấn
                            đề kỹ thuật là rủi ro của khách và Nhà Cái sẽ đưa ra quyết định cuối cùng liệu có chấp nhận hay từ chối những khoản cược
                            như thế. Quyết định của Nhà Cái là cuối cùng và ràng buộc khách hàng.
                            <br /> 5.1.5
                            <br /> Kết quả bị nhập sai do lỗi máy chơi trò chơi trực tuyến sẽ được điều chỉnh phù hợp dựa trên máy nhật ký video của Nhà
                            Cái. Cách tính khoản cược thắng/thua sẽ dựa trên kết quả được chỉnh sửa cuối cùng và quyết định của Nhà Cái là quyết
                            định cuối cùng và ràng buộc khách hàng.
                            <br /> 5.1.6
                            <br /> Nếu Khách hàng thấy các ván trò chơi tốc độ thường lại có kết quả rất nhanh. Trong trường hợp có sự khác biệt giữa kết
                            quả hiển thị trên video phát sóng trực tuyến và kết quả trong thiết bị chơi trực tuyến, Nhà Cái bảo lưu quyền dựa vào
                            kết quả của thiết bị chơi trực tuyến là kết quả cuối cùng và quyết định của Nhà Cái là quyết định sau cùng và ràng buộc
                            khách hàng.
                            <br /> 5.1.7
                            <br /> Nhà Cái có quyền thay đổi ván chơi hoặc quy trình chơi trong mọi điều kiện và có hiệu lực tức thời ngay cả trong thời
                            gian thông báo ngắn để tăng tính công bằng và minh bạch của trò chơi. Nhà Cái sẽ ban hành những thay đổi và cập nhật
                            về các quy tắc và quy định sau đó.
                            <br /> 5.1.8
                            <br /> Trong mọi trường hợp, quyết định của Nhà Cái là cuối cùng và ràng buộc khách hàng. Nếu có bất kỳ tranh chấp nào về việc
                            diễn giải các quy tắc này, cách diễn giải của Nhà Cái sẽ được áp dụng.
                            <br /> 5.1.9
                            <br /> Ngoài những quy tắc này, bản đầy đủ các quy tắc này có thể được tìm thấy ở đây: Điều Luật Sòng Bài Trực Tuyến.
                            <br /> Trở về đầu Trang
                            <br /> 6.
                            <br /> Quy Tắc Đặt Cược Của Colossus Bets
                            <br /> 6.1
                            <br /> Đặt Cược
                            <br /> 6.1.1
                            <br /> Chấp nhận Cược
                            <br /> 6.1.1.1
                            <br /> Letou là đại lý của Colossus Bets và tất cả các khoản cược (“Cược”) sẽ được đặt trực tiếp vào quỹ tiền cược của Colossus
                            Bets thông qua Letou trang (“Trang”). Trong trường hợp các khoản cược không được chuyển tới quỹ tiền cược có liên quan
                            của Letou khách hàng (“Người chơi”) sẽ được hoàn lại tiền cược và cả Letou lẫn Colossus Bets đều không phải chịu trách
                            nhiệm về việc mất tiền thắng cược được hưởng nếu khoản cược đã được chuyển tới quỹ tiền cược Mọi thắc mắc bạn có về việc
                            đặt cược của mình trong quỹ tiền cược của Colossus Bets phải được gửi tới Letou. Trong trường hợp không thể xử lý thắc
                            mắc của bạn, Letou sẽ liên hệ với Colossus Bets. Nếu có mâu thuẫn giữa bất kỳ quy định nào trong Quy tắc Đặt cược này
                            và các điều khoản tương đương trên trang colossusbets.com, bản Tiếng Anh về các điều khoản trên trang colossusbets.com
                            sẽ giữ quyền chi phối
                            <br /> 6.1.1.2
                            <br /> Người chơi có trách nhiệm kiểm tra xem các hướng dẫn Cược mình gửi đã đúng hay chưa trước khi xác nhận Cược. Colossus
                            Bets bảo lưu quyền từ chối mọi Cược vì bất kỳ lý do gì.
                            <br /> 6.1.1.3
                            <br /> Trong trường hợp có sự mâu thuẫn về chi tiết hoặc trạng thái của khoản Cược hoặc tiền cược, dữ liệu của Colossus sẽ
                            là nguồn bằng chứng chính để xem chi tiết/trạng thái của Cược.
                            <br />
                            <br /> 6.1.1.4
                            <br /> Colossus Bets có thể tùy ý hoãn việc đặt cược vào quỹ tiền cược bất kỳ lúc nào. Colossus Bets cũng bảo lưu quyền hủy
                            quỹ tiền cược có toàn bộ hoặc bất kỳ (các) Ván cược hay (các) khoản Cược nào: để khắc phục bất kỳ lỗi rõ ràng nào; để
                            duy trì tính liêm chính và công bằng trong các quỹ tiền cược của Colossus Bets; nếu có sự thay đổi về hình thức hoặc
                            sự kiện trong quỹ tiền cược; hoặc nếu Colossus Bets tin rằng bất kỳ khoản Cược được đặt nào đã vi phạm các Điều khoản
                            Chơi này.
                            <br /> 6.1.2
                            <br /> Cơ cấu Đặt cược
                            <br /> 6.1.2.1
                            <br /> Người chơi đặt cược vào kết quả của nhiều sự kiện có liên quan do Colossus Bets chọn trước (“Ván cược”) và quyết định
                            trong một khoảng thời gian xác định (“Thời gian Ván chơi”).
                            <br /> 6.1.2.2
                            <br /> Các Ván cược trong bất kỳ Thời gian Ván chơi nào sẽ được Colossus Bets tùy ý lựa chọn.
                            <br /> 6.1.2.3
                            <br /> Người chơi có thể chọn đặt một hoặc nhiều Cược, mỗi cược bao gồm ít nhất một lựa chọn trong mỗi Ván cược (vd: Arsenal
                            thắng Aston Villa 2-1, Liverpool thắng Newcastle 3-2 và Chelsea hòa Everton 1-1). Mỗi Cược được xác định bằng một số
                            tham chiếu riêng khi Cược đó được chấp nhận.
                            <br /> 6.1.2.4
                            <br /> Đối với mọi Ván cược được đưa ra, Người chơi có thể chọn một hoặc nhiều lựa chọn có các kết quả khác nhau. Ví dụ: nếu
                            bạn chọn 3-1 và 2-1 trong Ván cược 1 và 1-0 trong tất cả các Ván cược khác – Lựa chọn này sẽ bao gồm hai Cược (hay hai
                            “Dòng”). Mỗi Cược có đơn giá đầy đủ, ví dụ: £2 cho người chơi có tài khoản người chơi “Tài khoản”) là Letou được tính
                            bằng bảng Anh (GBP) và công cụ đặt cược của Colossus Bets sẽ thêm vào số Dòng nhân với khoản tiền cược mỗi Dòng để hiện
                            tổng số tiền đặt cược trong Cược của bạn.
                            <br /> 6.1.2.5
                            <br /> Cược bóng đá Mỹ được đặt cho kết quả bao gồm tất cả các thời gian làm thêm giờ và nếu một người Mỹ kết quả trận đấu
                            bóng đá trong một trận sau khi làm thêm giờ, tại các điểm đúng hồ lề các điểm biên thắng thấp nhất cho đội nhà và đội
                            cả hai sẽ được giải quyết như chiến thắng Lựa chọn. Trừ khi có quy định khác, tất cả các Cược được đặt để đoán kết quả
                            chính xác trong phần chơi thông thường theo kết quả chính thức của trận đấu bao gồm thời gian ngừng, nhưng không bao
                            gồm thời gian bù giờ, khoảng thời gian ghi bàn thắng vàng, phạt luân lưu hoặc tương tự (nếu có).
                            <br /> 6.1.3
                            <br /> Loại tiền tệ, Đơn vị Quỹ tiền cược và Chi trả
                            <br /> 6.1.3.1
                            <br /> Loại tiền tệ cơ sở cho tất cả các quỹ tiền cược của Colossus Bets là bảng Anh (GBP). Điều này có nghĩa là dữ liệu (bao
                            gồm nhưng không giới hạn đối với Đơn vị Quỹ tiền cược, Lịch sử Quỹ tiền cược, Phân phối Đơn vị và Đơn vị Thắng cuộc)
                            sẽ chỉ được hiển thị trên Trang bằng giá trị bảng Anh. Tuy nhiên, các giá trị mang tính xác định với Tài khoản của bạn,
                            kể cả giải thưởng bạn đang chơi, tùy chọn tiền cược của bạn và mọi ưu đãi rút tiền, sẽ đều được hiển thị bằng loại tiền
                            tệ trong Tài khoản của bạn.
                            <br /> 6.1.3.2
                            <br /> Trong quỹ tiền cược xác định, Colossus Bets cung cấp cho người chơi tùy chọn đặt Cược theo tỷ lệ của đơn giá đầy đủ
                            được xác định trước cho quỹ tiền cược. Ví dụ: nếu đơn giá đầy đủ trong quỹ tiền cược là £2 (giống trường hợp trong quỹ
                            tiền cược Tỷ số Chính xác Colossus của Lựa chọn 7), Colossus Bets có thể cho phép người chơi đặt Cược theo tỷ lệ của
                            đơn giá đầy đủ là £2 này. Cược theo tỷ lệ như thế này sẽ giúp Người chơi có quyền hưởng tương ứng với số phần được chia
                            nhận được vào thời điểm thanh toán tiền cược. Ví dụ: nếu Người chơi đặt Cược 50 penni vào quỹ tiền cược với đơn giá đầy
                            đủ là £2, Người chơi sẽ được hưởng phần chia là 1/4 (25%) của bất kỳ phần được chia nhận được nào trong quỹ tiền cược
                            này (kể cả mọi Quỹ Thưởng, nếu có). Người chơi đặt cược bằng loại tiền không phải là bảng Anh cũng có thể đặt Cược theo
                            tỷ lệ bằng loại tiền tệ địa phương, để được hưởng tương ứng với mọi phần được chia. Các tùy chọn đặt tiền cược dành cho
                            Người chơi bằng các loại tiền tệ khác nhau có thể khác nhau, nhưng trong mọi trường hợp, Người chơi sẽ chỉ được hưởng
                            phần được chia theo tỷ lệ của chi phí Cược của mình.
                            <br /> 6.1.3.3
                            <br /> Bất kỳ khoản trả thưởng nào (tiền thắng hay tiền thưởng) phải trả cho bạn sẽ được ghi có vào Tài Khoản của bạn tuân
                            theo các quy định sau đây:
                            <br /> A. Nhà Cái có toàn quyền quyết định cách trả tiền thắng hay tiền thưởng cho Người Chơi.
                            <br /> B. Nếu số tiền là GBP 30,000 trở xuống hoặc tương đương bằng tiền tệ được hiển thị trong tài khoản của Người Chơi bao
                            gồm phí dịch vụ, Nhà Cái sẽ ghi có tiền thắng hay tiền thưởng của Người Chơi trực tiếp vào tài khoản của Người Chơi..
                            <br
                            /> C. Nếu số tiền là trên GBP 30,000 hoặc tương đương bằng tiền tệ được hiển thị trong tài khoản của Người Chơi bao gồm
                            phí dịch vụ, Người Chơi nên liên hệ với bộ phận Hỗ Trợ Khách Hàng của Nhà Cái để xác minh và biết thông tin về thủ tục
                            trả tiền thắng hay tiền thưởng. Nhà Cái có quyền quyết định cách thức trả tiền thắng hay tiền thưởng cho Người Chơi.
                            Người Chơi sẽ chịu các chi phí, chi phí đi lại và ăn ở, nếu có, khi nhận tiền thắng hay tiền thưởng như mô tả trong Quy
                            Định 1.12.3 này. Người Chơi phải nhận tiền thắng hay tiền thưởng trong vòng ba (3) tháng kể từ ngày xác minh tiền thắng.
                            Nhà Cái có quyền quyết định cách thức trả tiền thắng hay tiền thưởng cho Người Chơi và có quyền quyết định về việc giải
                            quyết tiền thắng. Quyết định của Nhà Cái có giá trị cuối cùng và ràng buộc về vấn đề này.
                            <br /> D. Nếu Colossus Bets không hoặc từ chối trả tiền thưởng hay tiền thắng của Người Chơi, Người Chơi không thể nhận tiền
                            từ Nhà Cái và mọi khiếu kiện sẽ được gửi trực tiếp cho Colossus Bets.
                            <br /> E. Người Chơi có trách nhiệm thanh toán bất kỳ khoản phí ngân hàng nào áp dụng cho các giao dịch thanh toán tiền thắng
                            hay trả thưởng.
                            <br /> F. Bất kỳ giao dịch thanh toán nào như thế sẽ được thực hiện cho Người Chơi tham chiếu tiền GBP dùng tỉ giá hối đoái
                            giữa tiền tệ Người Chơi đã chơi (các) pool Colossus Bets liên quan và GBP, với tỉ giá được lấy vào ngày pool được Colossus
                            Bets tải lên trang web.
                            <br /> G. Người Chơi hoàn toàn chịu trách nhiệm giải trình với các cơ quan thuế phù hợp liên quan đến bất kỳ khoản thuế nào
                            có thể áp dụng cho hoạt động cá cược của Người Chơi trên trang web.
                            <br /> 6.1.4
                            <br /> Thanh toán, Hủy bỏ, Hoãn và Lỗi
                            <br /> 6.1.4.1
                            <br /> Tùy thuộc vào các quy định khác trong điều khoản 1 bên dưới, tất cả các cược sẽ được thanh toán dựa trên kết quả chính
                            thức của sự kiện có liên quan bất kể mọi sự loại bỏ hay sửa đổi xảy ra sau đối với kết quả..
                            <br /> 6.1.4.2
                            <br /> Trong trường hợp không chắc chắn về kết quả chính thức, Colossus Bets bảo lưu quyền hoãn việc thanh toán của bất kỳ
                            quỹ tiền cược nào cho đến khi chắc chắn trong chừng mực hợp lý.
                            <br /> 6.1.4.3
                            <br /> Colossus Bets bảo lưu quyền hủy việc thanh toán tiền thưởng nếu thanh toán nhầm (ví dụ: lỗi do con người hoặc kỹ thuật).
                            Nếu Colossus Bets thanh toán lại khoản tiền cược, việc thanh toán lại này có thể dẫn đến các sửa đổi số dư Tài khoản
                            của Người chơi để phản ánh các thay đổi trong việc thanh toán tiền thưởng.
                            <br /> 6.1.4.4
                            <br /> Bất kể mọi quy định trong các Điều khoản Chơi này, khi tiền thưởng đã được thanh toán trong vòng 72 giờ, khoản thanh
                            toán đó sẽ được xem là đầy đủ và cuối cùng.
                            <br /> 6.1.4.5
                            <br /> Nếu trận đấu không được hoàn tất (ví dụ: thời gian chơi đầy đủ, là 90 phút trong trường hợp là trận bóng đá theo kết
                            quả chính thức của trận đấu, cộng thêm thời gian ngừng) trong vòng 3 ngày kể từ ngày bắt đầu đã được lên lịch, trận đấu
                            đó sẽ được xem là Ván cược vô hiệu vì mục đích của toàn bộ quỹ tiền cược có trận đấu đó.
                            <br /> 6.1.4.6
                            <br /> Nếu trận đấu đang bắt đầu nhưng sau đó lại bị hủy bỏ hoặc hoãn nhưng vẫn được hoàn tất trong vòng 3 ngày kể từ ngày
                            bắt đầu đã được lên lịch, trận đấu đó sẽ được xem là Ván cược hợp lệ đối với tất cả các quỹ tiền cược có trận đấu này,
                            trừ khi trận đấu được bắt đầu lại từ đầu. Nếu trận đấu được bắt đầu lại từ đầu, lúc ấy điều khoản 1.17 ở trên sẽ được
                            áp dụng.
                            <br /> 6.1.4.7
                            <br /> Bất kể các quy định trong điều khoản 1 ở trên, trong trường hợp Colossus Bets có cơ sở để tin rằng một trận đấu (cho
                            dù đã được bắt đầu hay chưa) sẽ không được hoàn tất trong vòng 3 ngày kể từ ngày bắt đầu đã được lên lịch, Colossus Bets
                            bảo lưu quyền công bố trận đấu là Ván cược vô hiệu vào thời điểm đó vì mục đích của các quỹ tiền cược có liên quan (bất
                            luận là cuối cùng trận đấu có được hoàn tất hay không trong vòng 3 ngày kể từ ngày bắt đầu đã được lên lịch).
                            <br /> 6.1.4.8
                            <br /> Việc vô hiệu bất kỳ Cược hay Ván cược nào được mô tả ở trên liên quan đến các trận đấu bị hủy bỏ/hoãn sẽ không áp dụng
                            đối với Cược/Ván cược được quyết định vô điều kiện tại thời điểm hủy bỏ/hoãn. Ví dụ: nếu Colossus Bets đưa ra một Ván
                            cược dựa trên tỷ số của hiệp 1 trong một trận, việc hủy bỏ trận đấu đó vào bất kỳ thời điểm nào sau hiệp 1 sẽ không liên
                            quan tới việc hoàn tất của Ván cược đã được đề cập
                            <br /> 6.1.4.9
                            <br /> Các ví dụ tham khảo ở trên trong điều khoản 1 này đối với số “ngày” riêng có nghĩa là thời điểm cuối ngày tính theo
                            giờ địa phương (nơi trận đấu đang diễn ra) sau khi hết hạn số ngày đã xác định. Ví dụ: nếu một trận đấu được lên lịch
                            vào ngày 15 tháng 11 khi quỹ tiền cược đã được tải lên Trang, lúc ấy, quy tắc cho phép trận đấu được hoàn tất trong vòng
                            3 ngày sau ngày hoàn tất đã được lên lịch sẽ có nghĩa là hạn chót để hoàn tất trận đấu này là 23:59:59 giờ địa phương
                            vào ngày 18 tháng 11.
                            <br /> 6.1.4.10
                            <br /> Nếu có bất kỳ quỹ tiền cược nào được quyết định chọn có số Ván cược ít hơn như đã liệt kê, lúc ấy, Quỹ Thưởng và mọi
                            khoản bảo đảm hay quỹ luân chuyển có thể áp dụng với quỹ tiền cược, sẽ không được áp dụng. Trong những trường hợp như
                            vậy, các phần được chia trong Quỹ Tiền thưởng Tích lũy và Quỹ thưởng Khuyến khích sẽ chỉ được công bố dựa trên các khoản
                            tiền cược thực trong vé đã mua để hưởng khoản tiền thưởng cụ thể, mặc đầu Colossus Bets bảo lưu quyền áp dụng khoản bảo
                            đảm thay thế với mọi quỹ tiền cược như vậy.
                            <br /> 6.1.4.11
                            <br /> Giả sử có ít nhất là một Ván cược trong quỹ tiền cược, phần chia Quỹ thưởng Tích lũy sẽ được công bố. Nếu không có Ván
                            cược nào trong quỹ tiền cược được hoàn tất, thì tất cả các Cược trong quỹ đó sẽ bị vô hiệu và các khoản tiền đặt cược
                            sẽ được hoàn lại. Quỹ này không bao gồm các khoản tiền cược đã được chuyển tới từ các quỹ tiền cược trước, các quỹ này
                            sẽ được luân chuyển để sử dụng cho các quỹ tiền cược trong tương lai do Colossus Bets quyết định.
                            <br /> 6.1.4.12
                            <br /> Bất kể các điều khoản trong điều khoản 1.22 ở trên, trong chừng mực một quỹ tiền cược có (các) Quỹ thưởng Khuyến khích,
                            (các) phần chia sẽ được công bố cung cấp đầy đủ các Ván cược diễn ra để chỉ một số vé mới tự động có tối thiểu một Dòng
                            thắng cuộc. Ví dụ: nếu chỉ có 2 ván cược tỷ số chính xác của Lựa chọn 6 diễn ra, lúc ấy Quỹ thưởng Khuyến khích “4 trong
                            6/tất cả đúng ngoại trừ 2” sẽ bị vô hiệu nhưng phần chia Khuyến khích của “5 trong 6/tất cả đúng ngoại trừ 1” sẽ được
                            công bố.
                            <br /> 6.1.4.13
                            <br /> Nếu địa điểm đã lên lịch của Ván cược được thay đổi sau khi quỹ tiền cược đã được Colossus Bets tải lên, thì Ván cược
                            đó sẽ bị vô hiệu chỉ khi địa điểm mới là sân nhà của đội khách ban đầu. Với các trận đấu được chơi tại địa điểm trung
                            lập, các cược sẽ được giữ nguyên bất kể đội nào được liệt kê là đội nhà..
                            <br /> 6.1.4.14
                            <br /> Colossus Bets không chịu trách nhiệm về các lỗi nhập, truyền tải và/hoặc đánh giá. Colossus Bets cũng không chịu trách
                            nhiệm về sự thiếu chính xác hay không đầy đủ hoặc không đúng của các thông tin được cung cấp qua Trang, bao gồm (nhưng
                            không giới hạn) đối với mọi đồng hồ đếm ngược giờ tới thời điểm bắt đầu của phần chơi kế tiếp trong quỹ tiền cược, mọi
                            tỷ số hay kết quả trực tiếp.
                            <br /> 6.2
                            <br /> Tổ Chức Quỹ Tiền Cược Và Khấu Trừ Có Liên Quan
                            <br /> 6.2.1
                            <br /> Tất cả các Cược đều là cược tiền thưởng trong đó tiền thắng cược được xác định qua việc tham chiếu khoản tiền được đặt
                            cược và số mục nhập chính xác trong quỹ tiền cược.
                            <br /> 6.2.2
                            <br /> Cược dự đoán đúng tỷ số và/hoặc kết quả của số lượng Ván cược được yêu cầu sẽ giành được phần chia trong Quỹ thưởng
                            Tích lũy và trong Quỹ Khuyến khích và Quỹ Thưởng hiện hành.
                            <br /> 6.2.2.1 Quỹ thưởng Tích lũy” – Người chơi chọn kết quả chính xác (là tỷ số chính xác trong quỹ tiền cược tỷ số, cách
                            biệt chính xác trong quỹ tiền cược cách biệt điểm số và kết quả chính xác của đội nhà/hòa/đội khách trong các quỹ tiền
                            cược 1×2) của tất cả các Ván cược của một quỹ tiền cược sẽ giành được phần chia trong Quỹ thưởng Tích lũy.
                            <br /> “Quỹ Khuyến khích” – Trong một số quỹ tiền cược nhất định, Người chơi chọn tất cả các kết quả đúng ngoại trừ một, hai
                            hoặc ba kết quả nếu có, sẽ hưởng chung Quỹ Khuyến khích có liên quan.
                            <br /> “Quỹ Thưởng” – Người thắng Quỹ thưởng Tích lũy (miễn là họ không được rút hết toàn bộ tiền trong vé; xem quy tắc “rút
                            tiền” bên dưới), sẽ được tự do lựa chọn tỷ số của trận đấu bổ sung do Colossus Bets chọn và những người chọn tỷ số chính
                            xác trong trận đấu bổ sung đó sẽ hưởng chung Quỹ Thưởng.
                            <br /> 6.2.3
                            <br /> Quỹ thưởng Tích lũy và Thưởng sẽ tăng lên và được luân chuyển độc lập tùy thuộc vào việc liệu có người giành giải hay
                            không. Quỹ Khuyến khích sẽ được luân chuyển sang Quỹ thưởng Tích lũy tương ứng. Colossus Bets sẽ nỗ lực áp dụng tất cả
                            các khoản luân chuyển như vậy sang quỹ tiền cược tương ứng kế tiếp (ví dụ: việc luân chuyển quỹ tiền cược của Lựa chọn
                            6 trong Giải Bóng đá Ngoại hạng Anh sẽ thường được luân chuyển sang quỹ tiền cược của Lựa chọn 6 trong Giải Bóng đá Ngoại
                            hạng Anh của tuần tiếp theo), nhưng Colossus Bets có quyền tùy ý luân chuyển.
                            <br />
                            <br /> 6.2.4
                            <br /> Các khoản tiền cược của người chơi sẽ được phân bổ vào từng quỹ tiền cược như sau:
                            <br /> 6.2.4.1 Các khoản tiền cược vào ván chơi tỷ số chính xác của “Lựa chọn 7” và “Lựa chọn 6” sẽ được phân bổ như sau: :
                            <br
                            /> • 60% số tiền đặt cược sẽ được phân bổ vào Quỹ thưởng Tích lũy.
                            <br /> • 10% số tiền cược sẽ được phân bổ vào Quỹ Khuyến khích đối với tất cả ngoại trừ lựa chọn đúng 1.
                            <br /> • 15% số tiền cược sẽ được phân bổ vào Quỹ Khuyến khích đối với tất cả ngoại trừ lựa chọn đúng 2.
                            <br /> • 15% số tiền cược sẽ được phân bổ vào Quỹ Thưởng.
                            <br />
                            <br /> 6.2.4.2 Các khoản tiền đặt cược vào ván chơi 1×2 Lựa chọn 15 sẽ được phân bổ như sau:
                            <br /> • 40% số tiền đặt cược sẽ được phân bổ vào Quỹ tiền cược Tích lũy.
                            <br /> • 10% số tiền đặt cược sẽ được phân bổ vào Quỹ thưởng Khuyến khích với tất cả ngoại trừ lựa chọn đúng một.
                            <br /> • 15% số tiền cược sẽ được phân bổ vào Quỹ Khuyến khích đối với tất cả ngoại trừ lựa chọn đúng 2.
                            <br /> • 20% số tiền đặt cược sẽ được phân bổ vào Quỹ Khuyến khích đối với tất cả ngoại trừ lựa chọn đúng 3.
                            <br /> • 15% số tiền đặt cược sẽ được phân bổ vào Quỹ Thưởng.
                            <br />
                            <br /> 6.2.4.3 Nếu ván chơi được quyết định chọn ít hơn số lượng Ván cược được quảng cáo, lúc ấy Quỹ Thưởng sẽ không được áp
                            dụng và số tiền cược được phân bổ ban đầu vào Quỹ Thưởng sẽ được phân bổ vào Quỹ thưởng Tích lũy, ví dụ: để việc phân
                            bổ Quỹ thưởng Tích lũy của ván chơi tỷ số chính xác của Lựa chọn 6 sẽ là 75% tổng số tiền đặt cược. Quỹ này không bao
                            gồm số tiền đặt cược được kết chuyển từ số tiền đặt cược trong Quỹ Thưởng của các tuần trước, số tiền cược này sẽ được
                            luân chuyển trực tiếp vào Quỹ Thưởng sau đó do Colossus Bets quyết định. Nếu Quỹ Khuyến khích bị hủy như đã mô tả trong
                            điều khoản 1.24 ở trên, thì việc phân bổ các khoản tiền đặt cược cho Quỹ Khuyến khích đó sẽ được áp dụng cho Quỹ thưởng
                            Tích lũy.
                            <br />
                            <br /> 6.2.4.4 Với tất cả các ván chơi với 100% số tiền đặt cược khác sẽ được phân bổ vào Quỹ thưởng Tích lũy và sẽ không còn
                            quỹ tiền cược nào khác.
                            <br />
                            <br /> 6.2.5
                            <br /> Trừ khi có quy định khác, mỗi quỹ tiền cược đều bị khấu trừ 30%. Số tiền thực trong mỗi quỹ tiền cược là 70% số tiền
                            đặt cược và việc phân bổ số tiền đặt cược vào các quỹ khác nhau đã được đề cập ở trên là trước khi bị khấu.
                            <br /> 6.2.6
                            <br /> Mỗi một Dòng thắng cuộc trong vé chỉ hội đủ điều kiện giành được tiền thưởng có liên quan cao nhất được áp dụng đối
                            với Dòng đó. Ví dụ: một Dòng có tỷ số chính xác trong mỗi 6 Ván cược trong quỹ tiền cược tỷ số chính xác của Lựa chọn
                            6 sẽ được hưởng phần chia của giải thưởng Quỹ thưởng Tích lũy nhưng không có giải thưởng Quỹ Khuyến khích kèm theo quỹ
                            tiền cược của Lựa chọn 6 đó. Tương tự, một Dòng trong cùng quỹ tiền cược đó có 5 trong 6 tỷ số chính xác (chứ không phải
                            6/6 đúng) sẽ giành được phần chia của giải thưởng Quỹ Khuyến khích “tất cả ngoại trừ một” và vì vậy sẽ không hội đủ tiêu
                            chuẩn để giành giải thưởng trong Quỹ Khuyến khích “tất cả ngoại trừ hai”. .
                            <br /> 6.2.7
                            <br /> Bất kể các điều khoản trong điều khoản 2.6 ở trên, người chơi hội đủ tiêu chuẩn để nhận Quỹ Thưởng bằng cách giành Quỹ
                            thưởng Tích lũy (và người chưa rút hết tiền trong vé có liên quan) sẽ có thêm lựa chọn tự do để tham gia dự đoán tỷ số
                            chính xác cho một trận đấu sau đó do Colossus Bets tùy ý lựa chọn (“Ván cược Thưởng”). Tất cả Người chơi dự đoán chính
                            xác kết quả của Ván cược Thưởng sẽ hưởng chung Quỹ Thưởng.
                            <br /> 6.2.8
                            <br /> Tất cả các phần được chia của Colossus Bets và các giao dịch rút tiền từng phần sẽ được làm tròn xuống thành một penni
                            gần nhất (hoặc loại tiền tệ tương đương). Ví dụ: phần được chia £350,49764 sẽ được làm tròn xuống thành £350,49 và việc
                            rút ra 10% của một khoản ưu đãi €25,67 với 100% Vé Đang cược, sẽ được làm tròn xuống thành €2,56.
                            <br /> 6.3
                            <br /> Tham Gia Quỹ Thưởng
                            <br /> 6.3.1
                            <br /> Nếu bạn giành giải trong Quỹ thưởng Tích lũy (và chưa bán hết vé cược của mình), bạn sẽ được quyền tham gia Quỹ Thưởng
                            tương ứng nếu có. Sẽ chỉ được phép lựa chọn Một Ván cược Thưởng với mỗi Dòng giành giải trong vé thắng Quỹ thưởng Tích
                            lũy.
                            <br /> 6.3.2
                            <br /> Nếu hội đủ tiêu chuẩn nhận Quỹ Thưởng, bạn sẽ cần liên hệ qua điện thoại với Letou để cung cấp chi tiết về vé thắng
                            giải Quỹ Thắng cuộc và bạn sẽ được cung cấp một mã riêng, vốn được yêu cầu để lựa chọn Ván cược Thưởng. Bạn phải hoàn
                            tất quá trình đăng ký này trong vòng 72 giờ kể từ thời điểm kết thúc trận đấu cuối cùng trong Quỹ Thắng cuộc có liên
                            quan. Letou có thể yêu cầu bạn trải qua một số quy trình bảo mật nhất định trước khi chấp nhận đăng ký/lựa chọn của chúng
                            tôi.
                            <br /> 6.3.3
                            <br /> Ván cược Thưởng sẽ được thông báo cho bạn qua tài khoản người chơi “Tài khoản”, ít nhất 24 giờ trước thời điểm bắt đầu
                            đã được lên lịch – thường là vào trưa ngày Thứ sáu đối với trận đấu bóng đá cuối tuần hoặc 24 giờ trước thời điểm bắt
                            đầu đã được lên lịch của trận đấu giữa tuần chẳng hạn như trận đấu trong Giải Vô địch Bóng đá.
                            <br /> 6.3.4
                            <br /> Sau khi việc lựa chọn Trận đấu Thưởng đã được thực hiện, sẽ không thể sửa đổi được lựa chọn đó trừ khi Trận đấu Thưởng
                            bị hủy theo các điều khoản 1.17-1.18 ở trên. Trong các trường hợp như vậy, người chơi sẽ được yêu cầu nhập lại lựa chọn
                            cho sự kiện đã được lên lịch lại hoặc sự kiện thay thế.
                            <br />
                            <br /> 6.3.5
                            <br /> Mọi Người chơi hội đủ tiêu chuẩn không đăng ký vì bất kỳ lý do gì để tham gia Ván cược Thưởng trước thời gian ngừng
                            hiện hành được mô tả ở trên hoặc không thực hiện lựa chọn trước thời gian ngừng được quảng cáo (trước thời điểm bắt đầu
                            trận đấu đã lên lịch là 3 giờ đã được chọn là Ván cược Thưởng), sẽ được tự động phân bổ là hòa 1-1 trong trận đấu có
                            liên quan hoặc (trong quỹ tiền cược dựa trên các tỷ số cách biệt) trận thắng của đội nhà với tỷ số thắng cách biệt nhỏ
                            nhất thường được cung cấp trên phiếu Quỹ thưởng Tích lũy có liên quan.
                            <br /> 6.3.6
                            <br /> Trong trường hợp Colossus Bets sở hữu (hay sở hữu một phần) vé đã mua lại qua cơ chế rút tiền được mô tả bên dưới và
                            vé đó chứa Dòng thắng Quỹ thưởng Tích lũy, Colossus Bets sẽ có quyền tương ứng để tham gia Quỹ Thưởng. Trong những tình
                            huống như vậy, Colossus Bets sẽ chỉ định (và công bố trên trang web của mình) lựa chọn Ván cược Thưởng trước thời điểm
                            bắt đầu trận đấu có liên quan đã lên lịch là 24 giờ. Trong trường hợp Colossus Bets sở hữu toàn bộ hay một phần vé thắng
                            Quỹ thưởng Tích lũy như được mô tả trực tiếp ở trên, chúng tôi sẽ có quyền lựa chọn Ván cược Thưởng liên quan tới từng
                            vé đó.
                            <br /> 6.3.7
                            <br /> Trong trường hợp bạn đã rút một phần tiền trong Vé Đang cược, bạn sẽ được quyền thực hiện lựa chọn Ván cược Thưởng theo
                            cách thông thường, như đã mô tả ở trên, nhưng phần được chia tiềm năng trong Quỹ Thưởng của bạn sẽ bằng tham chiếu tới
                            phần còn lại trong vé gốc.
                            <br /> 6.3.8
                            <br /> Cả Colossus Bets lẫn tài khoản người chơi “Tài khoản”) là Letou đều không chịu trách nhiệm về bất kỳ điều gì liên quan
                            đến những Người chơi hợp tác với nhau để nâng cao xác xuất giành giải thưởng hoặc thực hiện việc rút tiền. Người chơi
                            tự chịu hoàn toàn rủi ro với sự sắp đặt đó..
                            <br /> 6.4
                            <br /> Rút Tiền
                            <br /> 6.4.1
                            <br /> Colossus Bets có thể cung cấp cho Người chơi cơ hội rút ra toàn bộ hay một phần tiền trong vé có chứa Dòng có thể thắng
                            cuộc (“Vé Đang cược”) vào bất kỳ lúc nào trong Thời gian Ván cược.
                            <br /> 6.4.2
                            <br /> Tính sẵn sàng của ưu đãi rút tiền có thể không được bảo đảm trong khoảng thời gian khi ưu đãi rút tiền có hiệu lực (sau
                            khi kết thúc một Ván cược trong quỹ tiền cược và trước thời điểm bắt đầu Ván cược tiếp theo hoặc trong khoảng thời gian
                            diễn ra hiệp 1 trong mọi Ván cược cho trước), ưu đãi rút tiền có thể không có hiệu lực vì lý do kỹ thuật, vận hành hoặc
                            bất kỳ lý do nào khác.
                            <br /> Định giá Vé Đang cược
                            <br /> 6.4.3
                            <br /> Trong ưu đãi mua Vé Đang cược (“Ưu đãi”) của chúng tôi , Colossus Bets sẽ cung cấp cho Người chơi giá ưu đãi để mua
                            10% tiền lời trong Vé Đang cược lên đến 100% (“Giá Ưu đãi”).
                            <br /> 6.4.4
                            <br /> Giá Ưu đãi sẽ được Colossus Bets tùy ý quyết định.
                            <br />
                            <br /> 6.4.5
                            <br /> Quy trình Ưu đãi
                            <br /> A. Người chơi sẽ được thông báo về Ưu đãi qua Tài khoản của mình..
                            <br /> B. Sau khi nhận được Ưu đãi, Người chơi sẽ có một khoảng thời gian trong khi Colossus Bets đang tạo Ưu đãi và khoảng
                            thời gian trôi qua của Ưu đãi để chờ quyết định CHẤP NHẬN Ưu đãi (C) hoặc TỪ CHỐI Ưu đãi (D). Colossus Bets bảo lưu quyền
                            sửa hoặc rút lại Ưu đãi chưa được chấp nhận. Mọi Ưu đãi sẽ tự động mất hiệu lực khi bắt đầu khoảng thời gian kế tiếp
                            của trò chơi trực tiếp.
                            <br /> C. Nếu Người chơi chấp nhận Ưu đãi với 100% trong Vé Đang cược, mọi quyền trong Vé sẽ được chuyển giao cho Colossus
                            Bets và Giá Ưu đãi sẽ được chuyển giao vào Tài khoản của Người chơi ngay khi có thể thực hiện được. Xem điều khoản 4.7
                            bên dưới về việc bán một phần Vé Đang cược.
                            <br /> D. Nếu Người chơi từ chối Ưu đãi (hoặc không có hành động gì với Ưu đãi), Người chơi sẽ giữ lại toàn bộ quyền sở hữu
                            của Vé đang cược đồng thời giữ lại cơ hội giành hoặc hưởng chung các khoản tiền thưởng liên quan.
                            <br /> 6.4.6
                            <br /> Để chắc chắn, sau khi Vé Đang cược được rút hết tiền, bạn sẽ không còn có thể giành được bất kỳ khoản tiền nào liên
                            quan tới vé đó nữa. Nếu bất kỳ Ván cược nào trên vé đó cuối cùng đoạt giải, Colossus Bets sẽ được hưởng phần được chia
                            trong Quỹ thưởng Tích lũy có liên quan (cùng với mọi quyền hưởng Quỹ Thưởng hoặc mọi phần được chia trong Quỹ Khuyến
                            khích) mà lẽ ra bạn sẽ được hưởng nếu bạn không bán Vé Đang cược..
                            <br /> 6.4.7
                            <br /> Trong Trường hợp chơi chấp nhận rút 1 phần của Vé Đang cược, người chơi sẽ được quyền chọn các lựa chọn Ưu Đãi trong
                            cách thông thường, như đã mô tả ở rên nhưng Những Ưu Đãi Tiềm Năng sẽ được chia đều theo tỷ lệ tương ướng của phần vé
                            còn giữ lại .
                            <br /> Rút tiền một phần trong Vé Đang cược
                            <br /> 6.4.8
                            <br /> Người chơi sẽ giữ lại quyền sở hữu phần còn lại trong Vé Đang cược và nếu Vé Đang cược đoạt giải, Người chơi sẽ được
                            hưởng tỷ lệ tương ứng như vậy với số tiền trong Quỹ thưởng Tích lũy (cùng với cùng tỷ lệ quyền hưởng Quỹ Thưởng hoặc
                            mọi Quỹ Khuyến khích) được áp dụng đối với phần còn lại của mình trong Vé Đang cược.
                            <br /> Ví dụ có thật:
                            <br /> Người chơi A rút một Phần là 20% và sau đó là Phần 30% (tổng cộng là 50%) trong Vé Đang cược với đơn vị đầy đủ. Vé Đang
                            cược là việc dự đoán đúng tỷ số của tất cả các Ván cược trong Thời gian Ván Chơi, thời gian này là để chứng thực là Cược
                            đã giành Quỹ thưởng Tích lũy. Còn có một Cược giành Quỹ thưởng Tích lũy với đơn vị đầy đủ khác trong Ván chơi (do Người
                            chơi B tổ chức).
                            <br /> Quỹ Tích lũy có £1.000.000 và Quỹ Thưởng thực có £2.000.000.
                            <br /> Quỹ Thưởng Tích lũy: £1.000.000 ÷ 2 (vì có 2 người thắng cuộc) = phần được chia là £500.000
                            <br /> 50% của £500.000 (Phần chia còn lại của Người chơi A trong Vé Đang cược) = £250.000
                            <br /> Phần chia trong Quỹ Tích lũy của Người chơi A: £250.000
                            <br /> Quỹ Thưởng: £2.000.000
                            <br /> Người chơi A có quyền thực hiện lựa chọn Ván cược Thưởng để cố giành tối đa thêm £1.000.000, bằng 50% Quỹ Thưởng. Người
                            chơi A chọn đúng tỷ số trong Ván cược Thưởng (và Người chơi B chọn sai tỷ số).
                            <br /> Phần chia trong Quỹ Thưởng của Người chơi A: £1.000.000
                            <br /> Trong ví dụ ở trên, nếu Người chơi B cũng chọn đúng tỷ số của Ván cược Thưởng (và Colossus Bets chọn sai tỷ số), sẽ
                            có 1,5 đơn vị giành Quỹ Thưởng. Điều này có nghĩa là Người chơi A, nắm giữ đơn vị giành Quỹ thưởng là 0,5 (1/3 trong
                            tổng số đơn vị thắng cuộc), sẽ nhận được Khoản tiền Thưởng là £666.666 (ví dụ: 1/3 Quỹ Thưởng). Nếu Colossus Bets cũng
                            chọn đúng tỷ số, sẽ có 2 Đơn vị thắng Ván cược Thưởng, vì vậy Người chơi A (có 1/4 trong tổng số đơn vị thắng cuộc) sẽ
                            giành được £500.000.
                            <br />
                            <br /> 6.4.9
                            <br /> Trong trường hợp Ưu đãi được Người chơi chấp nhận (toàn bộ hay một phần) đã được Colossus Bets đưa ra dựa trên thông
                            tin sai (ví dụ: dựa trên tỷ số hiệp 1 là 0-0 nhưng thực ra tỷ số là 0-2) hoặc do lỗi kỹ thuật, Colossus Bets bảo lưu
                            quyền hủy mọi Ưu đãi như vậy để điều chỉnh số tiền rút ra phải trả. Mọi khoản tiền rút ra được điều chỉnh như vậy đều
                            dựa trên tỷ số /kết quả chính xác vào thời điểm đưa ra Ưu đãi sai và giá trị được sửa sau đó của vé có liên quan tại
                            thời điểm đó.
                            <br /> 6.4.10
                            <br /> Trong trường hợp Ưu đãi được Người chơi chấp nhận (toàn bộ hay một phần) đã được Colossus Bets đưa ra trên cơ sở các
                            Ván cược đã lên lịch trong một quỹ tiền cược sẽ được hoàn tất (và vì vậy mọi khoản bảo đảm và luân chuyển được xem là
                            nhân tố trong một Ưu đãi như vậy), ngoại trừ tất cả các Ván cược không được hoàn tất, Colossus Bets bảo lưu quyền điều
                            chỉnh số tiền rút ra phải trả. Mọi khoản thanh toán rút tiền được điều chỉnh như vậy đều dựa trên giá trị đã sửa (giả
                            sử tổng lượng tiền có thể giành được trong các quỹ thưởng hiện hành và khả năng thắng cuộc đã sửa) của vé có liên quan
                            tại thời điểm Ưu đãi được đưa ra.
                            <br /> 6.4.11
                            <br /> Colossus Bets có thể tùy ý đưa ra Ưu đãi cho Vé Đang cược có Dòng thắng giải trong Quỹ thưởng Tích lũy và vì vậy có
                            quyền thực hiện tùy chọn Ván cược Thưởng. Mọi ưu đãi như vậy đối với quyền thực hiện lựa chọn Ván cược Thưởng sẽ không
                            được thực hiện theo hình thức tự động như đã mô tả trong lựa chọn rút tiền của các Điều khoản Chơi này, nhưng thay vào
                            đó sẽ được thực hiện (và kết thúc) bằng quá trình thủ công do Colossus Bets quyết định.
                            <br />
                            <br />
                            <br />
                            <br /> &nbsp;
                        </p>
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


RulesVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(RulesVn))));