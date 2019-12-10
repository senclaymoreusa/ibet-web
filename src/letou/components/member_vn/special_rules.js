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

export class SpecialRulesVn extends React.Component {
    
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
                                <a href="/vi/for_member">Luật chơi thể thao OW >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>3. Luật đặt cược đặc biệt</h2>
                        <p>Các Quy tắc cược đặc biệt（1/4）</p>
                        <div class="HelpCenterArticle">
                            <div class="HelpCenterList">
                                <ul>
                                    <li ng-click="helpCtrl.goToUrl('help_about_rule')">Cách thức cược thế nào</li>
                                    <li ng-click="helpCtrl.goToUrl('help_about_rule_second')">Quy tắc đặt cược</li>
                                    <li ng-click="helpCtrl.goToUrl('help_about_rule_second03')">Quy tắc đặt cược đặc biệt
                                        <a href="javascript://">1/4）</a>
                                    </li>
                                </ul>
                                <div class="ClearBoth">&nbsp;</div>
                            </div>
                            <div class="HelpCenterSmNav">
                                <div class="ClearBoth">&nbsp;</div>
                            </div>
                            <p>3.Specific Event Betting Rules
                                <br /> • 3.1.Quy tắc bóng đá
                                <br /> • 3.1.1.Trường hợp trận đấu được tiến hành khác với thời gian dự kiến lúc đầu (ví dụ như khoảng thời gian đặc biệt
                                của trận đấu thuộc các giải đấu khác nhau hoặc các trận đấu giao hữu) tất cả các cược sẽ được giải quyết vào cuối
                                của khoảng thời gian dự kiến.
                                <br /> • 3.1.1.1.Trường hợp thời gian thi đấu ít hơn so với thời gian chuẩn, nhà tổ chức sẽ có quyền đình chỉ giải quyết
                                tất cả các cược trong khi chờ kết quả chính thức của trận đấu đó.
                                <br /> • 3.1.1.2.Trừ các trận đấu có thời gian thi đấu đặc biệt được công bố trên trang web trước tất cả các trận đấu khác,
                                các cược được thực hiện vào trận đấu này sẽ được xem là hủy bỏ.
                                <br /> • 3.1.2.Nếu một trận đấu bóng đá bị hoãn lại, hoặc là bị huỷ bỏ hoặc bị đình chỉ và không trở lại thi đấu trong
                                vòng 12 giờ kể từ thời điểm bắt đầu dự kiến, thì trận đấu bị bãi bỏ (không phân biệt bất kỳ quyết định chính thức
                                nào khi công bố kết quả). Kết quả của tất cả các cược vào các trận đấu bị huỷ bỏ /đình chỉ là quyết định riêng của
                                Công ty.
                                <br /> • 3.1.3.Cược trên Hiệp 1 chỉ áp dụng duy nhất cho Hiệp 1. Nếu trận đấu bị hủy bỏ giữa Hiệp 1, thì tất cả các cược
                                được xem như vô hiệu. Nếu trận đấu bị hủy bỏ vào Hiệp 2 thì tất cả các cược ở Hiệp 1 vẫn còn hiệu lực.
                                <br /> • 3.1.4.Công ty cung cấp thông tin (ví dụ như sân trung lập, Thẻ Đỏ, giờ, số liệu thống kê, ngày tháng, thời gian
                                bắt đầu, vv) như một dịch vụ cộng thêm và không chịu trách nhiệm về thông tin đó. Đó là trách nhiệm của khách hàng
                                trong việc nhận thức các thông tin chính xác cho bất cứ trận đấu nào.
                                <br /> • 3.1.5.Trừ khi có quy định khác, nếu một trận đấu dự kiến sẽ được tổ chức trên sân trung lập (nhưng được chơi trên
                                sân phi trung lập hoặc ngược lại) tất cả các cược coi là hợp lệ.
                                <br /> Trong trường hợp có sự thay đổi địa điểm (đội chủ nhà chơi trên sân khách hoặc ngược lại), tất cả các cược vào trận
                                đấu sẽ bị hủy. Cược cũng sẽ bị hủy nếu tên đội chủ nhà và đội khách được sắp xếp ngược lại theo quy định.
                                <br /> • 3.1.6.Điểm số sẽ được cập nhật vào phần Cá Cược Bóng Đá Trực Tiếp và các Kèo sẽ được hiện ra trong quá trình giao
                                dịch trực tiếp để tham khảo tại thời gian đặt cược. Bảng đếm thời gian và thông báo thẻ đỏ được đưa ra cho mục đích
                                tham khảo.
                                <br /> • 3.1.7.Đối với đặt cược trực tuyến, trong một trận đấu, công ty sẽ có thẩm quyền duy nhất và tuyệt đối với các
                                hành động tùy ý và tuyệt đối của Công ty, nếu xét thấy nguy hiểm khi điểm số, kết quả, hiệu suất của một đội bóng
                                hoặc cầu thủ có thể bị ảnh hưởng; hoặc đảm bảo thay đổi tỷ lệ cược/ giá hoặc Kèo hoặc Thông Tin Cá Cược (“Trường
                                hợp Nguy hiểm”) của Công ty có quyền tạm ngưng chấp nhận cược và có thể chấp nhận hoặc từ chối cược sau khi giai
                                đoạn nguy hiểm đã qua. Tất cả các hành động khác, trong trận đấu được coi là an toàn thi đấu; đặt cược sẽ tiếp tục
                                được chấp nhận.
                                <br /> • 3.1.8.Đối với đặt cược trực tuyến, đặt cược được cho phép đến phút 90 kể cả thời gian bù giờ chấn thương trong
                                toàn thời gian của trận đầu áp dụng cho hầu hết các trận (theo quyết định của Công ty). Tuy nhiên từ phút 85 trở
                                đi của trận đấu hay trong năm phút cuối cùng trước khi kết thúc thời gian quy định, tuỳ điều kiện được áp dụng trong
                                trận đấu, bất cứ hành động khác hơn so với những điều được đề cập trong phần 3.1.8 này, sẽ được coi là an toàn và
                                do đó tất cả các phiếu cược đang chờ có thể được chấp nhận; chơi trong hoặc xung quanh vùng cấm địa; phạt đền; và
                                phạt đền trực tiếp được coi là nguy hiểm đối với Công ty (khả năng vào banh).
                                <br /> • 3.1.9.Đối với đặt cược trực tuyến, tất cả các phiếu cược đang chờ sẽ tự động bị từ chối lúc thời điểm trọng tài
                                kết thúc trận đấu trong nửa hiệp đầu và/hoặc toàn thời gian.
                                <br /> • 3.1.10.Đối với cược trong trận nhưng không bao gồm 2 phút cuối của O-U Cụ thể 15 phút, O-U 10 Phút đặc biệt và
                                Cụ thể 15 Phút HDP, các cược đặt trước sẽ bị từ chối khi bàn thắng ghi được cũng như các cược đặt chờ sẽ được chấp
                                nhận dưới dạng thời gian an toàn khi đá hỏng penalty.
                                <br /> • 3.1.11.Trong cá cược trực tiếp cho các trận đấu kiểu fantasy, cho phép đặt lệnh cá cược đến phút thứ 90 và thêm
                                cả thời gian bù giờ, toàn bộ thời gian cho hầu hết các trận đấu (tùy theo quyết định của Công ty. Từ thời gian bắt
                                đầu phát bóng 00:00 cho đến hết thời gian thông lệ (phút thứ 90), áp dụng cho bất kỳ thời gian nào trong trận đấu,
                                bất kỳ hành động nào khác với các hành động sẽ nêu dưới đây, sẽ được coi là Chơi an toàn, và như vậy tất cả các cá
                                cược đặt trong quá trình sẽ được chấp nhận. Chơi tại hoặc quanh vùng điểm penalty, penalty và đá phạt được Công ty
                                coi là nguy hiểm (có khả năng ghi bàn).
                                <br /> • 3.1.12.Tất cả cược Trên/Dưới sẽ được thanh toán ngay sau khi xác định, thậm chí trước khi trận đấu kết thúc. Thanh
                                toán tức thì chỉ áp dụng cho một số giải đấu cụ thể do công ty cung cấp.
                                <br /> • 3.1.13.Cược sẽ mất hiệu lực nếu trận đấu bị hoãn, trừ khi việc thanh toán cho cược đã được xác định.
                                <br /> • 3.2.Bóng rổ
                                <br /> • 3.2.1.Tất cả toàn thời gian của các thị trường, bao gồm cả cá cược trực tuyến, sẽ được giải quyết trên kết quả
                                cuối cùng bao gồm cả thêm giờ (trừ khi có quy định khác).
                                <br /> • 3.2.2.Nếu một trận đấu không bắt đầu vào ngày lịch thi đấu thì tất cả các phiếu cược sẽ được bãi bỏ (trừ khi có
                                quy định khác).
                                <br /> • 3.2.3.Nếu trận đấu bắt đầu nhưng bị tạm ngưng hoặc hủy bỏ trong vòng mười hai giờ từ thời gian bắt đầu theo lịch
                                thi đấu thì các phiếu cược toàn thời gian vẫn được coi là hợp lệ khi có ít nhất bốn mươi ba (43) phút của một trận
                                đấu NBA, hoặc ba mươi lăm (35) phút của bất kỳ trận đấu bóng rổ khác đã được hoàn thành. Các phiếu cược cũng sẽ được
                                coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi tổ trọng tài có liên quan. Nếu không các phiếu cược của
                                trận đấu bị tạm ngưng hoặc hủy bỏ sẽ được bãi bỏ, ngoại trừ các thị trường đã được vô điều kiện xác định.
                                <br /> • 3.2.4.Kết quả nửa trận đầu là tổng của hiệp thứ nhất và thứ hai. Kết quả nửa trận sau là tổng của hiệp thứ ba
                                và thứ tư, bao gồm cả giờ thi đấu thêm.
                                <br /> • 3.2.5.Kết quả hiệp thứ tư sẽ không bao gồm giờ thi đấu thêm.
                                <br /> • 3.2.6.Nếu một trận đấu bị tạm ngưng hoặc hủy bỏ thì các phiếu cược đặt vào Một nửa trận đấu hoặc các hiệp đấu
                                chưa hoàn thành sẽ được coi là vô hiệu. Nếu được chỉ định Một nửa trận đấu hoặc Các hiệp đấu được hoàn thành thì
                                các phiếu cược sẽ như hợp lệ.
                                <br /> • 3.2.7.Điểm số sẽ không được cập nhật cho đặt cược trực tuyến bóng rổ và hành trình sẽ được hiển thị trong giao
                                dịch trực tiếp đề cập đến tỷ số của trận đấu, ví dụ 0-0.
                                <br /> • 3.2.8.Đội nào có điểm số đầu tiên sẽ được giải quyết trong thị trường ghi bàn đầu tiền. Nếu trận đấu được tạm
                                ngưng hoặc hủy bỏ sau khi các điểm đầu tiên được ghi thì các phiếu cược vẫn còn hợp lệ.
                                <br /> • 3.2.9.Đội nào có điểm số ghi ở kèo cuối cùng sẽ được nhìn nhận như đội ghi điểm cuối cùng của trận đấu (bao gồm
                                thêm giờ) hoặc đối với nửa trận/ một phần tư trận (không bao gồm thời gian bù giờ). Nếu một trận đấu bị tạm ngưng
                                hoặc hủy bỏ thì tất cả các phiếu cược sẽ như vô hiệu, ngoại trừ những trận trên kèo được xác định vô điều kiện.
                                <br
                                /> • 3.2.10.Thị trường đặc biệt (bao gồm số điểm, Bật bóng, trợ giúp, Ba-điểm, Ném banh tự do v.v….) là hợp lệ nếu
                                cả hai người chơi góp phần trong trận đấu. Nếu một hoặc cả hai người chơi không tham gia vào trận đấu thì tất cả
                                các phiếu cược như vô hiệu. Kết quả cho thị trường đặc biệt bao gồm thêm giờ, trừ khi có quy định khác. Tất cả các
                                kết quả được đưa ra khi kết quả chính thức được khai báo ở phần cuối của trận đấu bởi tổ trọng tài (NBA.com, FIBA.com
                                vv) và bất kỳ thay đổi tiếp theo thống kê là không hợp lệ đối với trường hợp cá cược.
                                <br /> • 3.2.11.Địa điểm Đội chủ nhà / Đội khách của trận đấu NCAA được cung cấp như một tham khảo.
                                <br /> • 3.2.12.Kèo Bóng rổ giải đấu Fantasy (bao gồm các kèo trực tiếp) là cặp các đội từ các trận đấu khác nhau. Các
                                trận liên quan đến cả hai đội phải tiến hành tổ chức trong cùng một ngày, nếu không các phiếu cược được coi là vô
                                hiệu. Các địa điểm trong kèo Bóng rổ giải đấu Fantasy chỉ với mục đích tham khảo.
                                <br /> • 3.2.13.Để giành chiến thắng hầu hết các thị trường các hiệp đấu sẽ được giải quyết trên đội chiếm được điểm số
                                nhiều nhất của các hiệp đấu trong một trận đấu bóng rổ. Nếu kết quả của hiệp đấu đặc biệt là hòa thì cũng không có
                                đội nào thắng trong hiệp đó. Thêm giờ sẽ không bao gồm trong thị trường này. Nếu một trận đấu bị tạm ngưng hoặc hủy
                                bỏ thì tất cả các phiếu cược sẽ vô hiệu.
                                <br /> • 3.3.American Football
                                <br /> • 3.3.1.Các thị trường Đủ thời gian, bao gồm cả cá cược trực tiếp, được xác lập theo kết quả kết quả cuối cùng,
                                bao gồm cả thêm giờ (trừ khi có xác định khác).
                                <br /> • 3.3.2.Nếu trận đấu không được bắt đầu vào đúng ngày giờ lịch định tất cả các cá cược bị coi là vô hiệu (trừ khi
                                có xác định khác).
                                <br /> • 3.3.3.Nếu một trận đấu đã bắt đầu và bị dừng hoặc bị treo trong vòng 12 giờ kể từ thời điểm bắt đầu lịch định
                                thì các cá cược kiểu Đủ thời gian vẫn được coi là có hiệu lực nếu như ít nhất đã có 55 phút thi đấu trọn vẹn. Các
                                cá cược cũng được coi là có hiệu lực khi có kết quả chính thức do một Hội đồng thích hợp công bố. Các cá cược vào
                                trận đấu bị dừng hoặc bị treo sẽ vô hiệu, trừ những cá cược vào thị trường đã được xác định vô điều kiện.
                                <br /> • 3.3.4.Kết quả của hiệp 1 là tổng kết quả của 15 phút thứ nhất và 15 phút thứ hai; kết quả của hiệp 2 là tổng kết
                                quả của 15 phút thứ ba và 15 phút thứ tư, bao gồm cả thời gian thi đấu thêm (có thể có).
                                <br /> • 3.3.5.Kết quả của 15 phút thứ tư không bao gồm bất kỳ thời gian thi đấu thêm nào.
                                <br /> • 3.3.6.Nếu như trận đấu bị dừng hoặc bị treo, các cá cược vào các hiệp đấu chưa kết thúc hoặc 15 phút thi đấu chưa
                                kết thúc sẽ bị vô hiệu hóa. Nếu hiệp đấu hoặc 15 phút thi đấu được chỉ định đã kết thúc thì các cá cược giữ nguyên
                                giá trị.
                                <br /> • 3.3.7.Trong cá cược trực tiếp cho bóng đá Mỹ, tỷ số được cập nhật vào Thị trường cho trong giao thương trực tiếp
                                ứng với tỷ số được hiển thị tại thời điểm cá cược được xác lập.
                                <br /> • 3.3.8.Đội nào sẽ ghi được bàn đầu tiên trong Thị trường là cá xem đội nào sẽ ghi bàn đầu tiên. Nếu trận đấu bị
                                dừng sau khi điểm đầu tiên đã được ghi thì tất cả các cá cược vẫn giữ nguyên hiệu lực.
                                <br /> • 3.3.9.Đội nào sẽ ghi được bàn cuối cùng là cá xem đội nào ghi được điểm cuối cùng của trận đấu, bao gồm cả thêm
                                giờ. Nếu trận đấu bị dừng hoặc bị treo các cá cược sẽ bị vô hiệu hóa.
                                <br /> • 3.3.10.Các địa điểm thi đấu của đội chủ nhà hay đội khách cho các trận đấu của NCAA chỉ để tham khảo.
                                <br /> • 3.3.11.Về việc cá độ trực tiếp trong trận đấu, thì đối với những hành động mà Công ty có toàn quyền đơn phương
                                coi là nguy hiểm khi nó tác động tới tỷ số, kết quả, thành tích của một đội hoặc của người chơi; hoặc đối với lời
                                đảm bảo thay đổi tỷ lệ tiền cược / giá hoặc thông tin thị trường hoặc thông tin cá độ (“Chơi Nguy hiểm”), Công ty
                                dành cho mình quyền hoãn việc công nhận cá độ và có thể công nhận hoặc loại bỏ cá độ sau Chơi Nguy hiểm. Tất cả những
                                hành động khác trong trận đấu được coi là Chơi An toàn và cá độ sẽ tiếp tục được xem xét công nhận.
                                <br /> • 3.4.Baseball
                                <br /> • 3.4.1.Tên người ném bóng chính thức chỉ dành cho mục đích tham khảo. Tất cả các phiếu cược bóng chày vẫn được
                                coi là hợp lệ bất kể người bắt đầu ném bóng.
                                <br /> • 3.4.2.Tất cả toàn thời gian của các thị trường, bao gồm cả cá cược trực tuyến, sẽ được giải quyết trên kết quả
                                cuối cùng bao gồm cả thêm giờ (trừ khi có quy định khác). Ở bóng rổ Nhật Bản một trận hòa có thể diễn ra và với trường
                                hợp này thì cược moneyline sẽ được hoàn trả.
                                <br /> • 3.4.3.Nếu một trận đấu không bắt đầu vào ngày lịch thi đấu thì tất cả các phiếu cược sẽ được bãi bỏ (trừ khi có
                                quy định khác).
                                <br /> • 3.4.4.Đối với phiếu cược bóng chày được coi là hợp lệ sau khi trận đấu phải đi 9 (chín) hiệp (hoặc 8,5 hiệp nếu
                                đội chủ nhà đang dẫn đầu). Nếu trận đấu bị tạm ngưng và được hoàn tất vào ngày tiếp theo thì tất cả các cược (trừ
                                những điều đó đã được vô điều kiện xác định) sẽ được coi là vô hiệu.
                                <br /> • 3.4.5.Nếu một trận đầu bị tạm ngưng hoặc được yêu cầu thêm hiệp đấu thì điểm số sẽ được xác định sau khi hiệp
                                cuối cùng nhất, trừ khi đội chủ nhà ghi điểm gỡ hòa hoặc dẫn đầu trong nửa lượt dưới, trong trường hợp này điểm số
                                được xác định tại thời điểm trận đấu được yêu cầu.
                                <br /> • 3.4.6.Các phiếu cược trước hiệp thứ 5 thì được giải quyết theo kết quả của cuối hiệp thứ 5. Nếu năm hiệp vẫn không
                                hoàn thành vì lý do gì, khi đó tất cả các phiếu cược sẽ được coi là vô hiệu.
                                <br /> • 3.4.7.Tỉ số sẽ được cập nhật cho cược bóng chày trong trận và được hiển thị dựa theo tỉ số tại thời điểm đặt cược.
                                <br
                                /> • 3.4.8.Những trận đấu Kinh điển Bóng Chày Thế Giới có thể kết thúc sớm nếu sau khi một đội đang dẫn đầu bởi mười
                                hoặc có điểm chạy(runs) nhiều hơn trong ít nhất bảy phiên so đội đối lập đã ghi điểm, hoặc nếu sau khi một đội đang
                                dẫn đầu nhiều hơn mười lăm điểm chạy (runs) trong ít nhất năm hiệp so với đội đối lập đã ghi điểm. Nếu điều này xảy
                                ra thì tất cả các phiếu cược sẽ được coi là hợp lệ.
                                <br /> • 3.4.9.Cược bóng chày Quốc tế (ví dụ như Olympic, vv) có thể được gọi sớm và cho để cược hợp lệ thì trận đấu đã
                                phải hoàn thành ít nhất 6.5 ván.
                                <br /> • 3.4.10.Đối với đặt cược trực tuyến, trong một trận đấu, Nhà Cái sẽ có thẩm quyền duy nhất và tuyệt đối với các
                                hành động tùy ý và tuyệt đối của Nhà Cái, nếu xét thấy nguy hiểm khi điểm số, kết quả, hiệu suất của một đội bóng
                                hoặc cầu thủ có thể bị ảnh hưởng; hoặc đảm bảo thay đổi tỷ lệ cược/ giá hoặc Kèo hoặc Thông Tin Cá Cược ("Trường
                                hợp Nguy hiểm") của Nhà Cái có quyền tạm ngưng chấp nhận cược và có thể chấp nhận hoặc từ chối cược sau khi giai
                                đoạn nguy hiểm đã qua. Tất cả các hành động khác, trong trận đấu được coi là an toàn thi đấu; đặt cược sẽ tiếp tục
                                được chấp nhận.
                                <br /> • 3.5.Hốc key trên băng
                                <br /> • 3.5.1.Kèo toàn thời gian có 3 lựa chọn: hoặc là “Thời Gian Thông Thường” hoặc “ Bao gồm Giờ Thi Đấu Thêm và Giờ
                                Phạt Luân Lưu” hoặc cả hai trường hợp trên. Người đặt cược phải chú ý về 3 lựa chọn đó. Đối với những trận đấu được
                                quyết định bằng đá luân lưu thì đội chiến thắng sẽ có một bàn thắng thêm vào điểm số của họ để xác định kết quả cuối
                                cùng.
                                <br /> • 3.5.2.Nếu một trận đấu không bắt đầu vào đúng lịch thi đấu khi đó tất cả các phiếu cược sẽ coi như vô hiệu(trừ
                                khi có quy định khác).
                                <br /> • 3.5.3.Nếu một trận đấu đã bắt đầu nhưng bị tạm ngưng hoặc hủy bỏ trong vòng mười hai giờ từ thời gian của lịch
                                thi đấu thì các phiếu cược toàn thời gian vẫn được coi là hợp lệ nếu đã được hoàn thành tại năm mươi lăm (55) phút
                                của trận đấu. Các phiếu cược cũng sẽ được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi trọng tài có
                                liên quan. Nếu phiếu cược được đặt cược vào trận đấu bị tạm ngưng hoặc hủy bỏ được coi như vô hiệu, ngoại trừ các
                                thị trường đã được vô điều kiện xác định.
                                <br /> • 3.5.4.Đối với giai đoạn cá cược, giai đoạn cá cược phải hoàn thành sẽ được coi là hợp lệ.
                                <br /> • 3.5.5.Kết quả giai đoạn thứ ba không bao gồm bất kỳ làm thêm giờ hoặc loạt đấu luân lưu trong trận đấu.
                                <br /> • 3.5.6.Cá cược Khúc Côn Cầu sân băng trực tuyến được giải quyết dựa trên kết quả cuối cùng của thời gian bình thường
                                (ba giai đoạn). Thời gian bù giờ và kết quả đấu luân lưu sẽ không tính.
                                <br /> • 3.5.7.Điểm số kết quả sẽ được cập nhật vào cá cược bóng đá trực tiếp và thị trường được hiện ra trong quá trình
                                giao dịch trực tiếp để tham khảo tại thời gian đặt cược.
                                <br /> • 3.5.8.Về việc cá độ trực tiếp trong trận đấu, thì đối với những hành động mà Công ty có toàn quyền đơn phương
                                coi là nguy hiểm khi nó tác động tới tỷ số, kết quả, thành tích của một đội hoặc của người chơi; hoặc đối với lời
                                đảm bảo thay đổi tỷ lệ tiền cược / giá hoặc thông tin thị trường hoặc thông tin cá độ (“Chơi Nguy hiểm”), Công ty
                                dành cho mình quyền hoãn việc công nhận cá độ và có thể công nhận hoặc loại bỏ cá độ sau Chơi Nguy hiểm. Tất cả những
                                hành động khác trong trận đấu được coi là Chơi An toàn và cá độ sẽ tiếp tục được xem xét công nhận.
                                <br /> • 3.6.Quần Vợt
                                <br /> • 3.6.1.Thị trường Moneyline dựa vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa
                                trên cặp đấu của các ván set hoặc trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/Nhỏ và Đơn/Chẵn
                                dựa trên trậnz đấu (trừ khi có quy định khác).
                                <br /> • 3.6.2.Nếu một tay vợt không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ
                                coi như vô hiệu.
                                <br /> • 3.6.3.Nếu một tay vợt (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược
                                sẽ như vô hiệu, ngoại trừ các thị trường đã được vô điều kiện xác định.
                                <br /> • 3.6.4.Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận
                                đấu được hoàn thành.
                                <br /> • 3.6.5.Tất cả các phiếu cược vẫn được coi là hợp lệ không phân biệt của bất kỳ thay đổi địa điểm hay bề mặt sân
                                (bao gồm cả trận đấu di chuyển từ ngoài trời vào trong nhà hoặc ngược lại).
                                <br /> • 3.6.6.Nếu số ván sec dự kiến cần thiết để giành chiến thắng một trận đấu được thay đổi từ ban đầu dự kiến khi
                                đó tất cả các phiếu cược sẽ như vô hiệu , ngoại trừ những điều đã được vô điều kiện xác định.
                                <br /> • 3.6.7.Người chiến thắng ván sec đầu tiên (ngưới chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec
                                cụ thể. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                                <br /> • 3.6.8.Cá cược Quần vợt trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ
                                không được cập nhật cho cá cược Quần vợt trực tuyến.
                                <br /> • 3.6.9.Thị trường cú giao bóng lấy điểm(Lỗi kép v.v…) được giải quyết theo các số liệu thống kê của trọng tài trong
                                trận đấu. Nếu một tay vợt rút lui hoặc bị tước quyền trước khi trận đấu kết thúc khi đó tất cả các phiếu cược sẽ
                                coi như vô hiệu.
                                <br /> • 3.6.10.Thị trường cú giao bóng lấy điểm đầu tiên(Lỗi kép v.v…) được giải quyết theo các số liệu thống kê của trọng
                                tài trong trận đấu. Nếu thị trường cú giao bóng lấy điểm đầu tiên(Lỗi kép v.v…) đã được quyết định, khi đó tất cả
                                các phiếu cược vẫn được coi là hợp lệ ngay cả khi trận đấu không hoàn thành do rút lui hoặc bị trút quyền thi đấu.
                                Nếu không có cú giao bóng lấy điểm (Lỗi kép v.v…) tại thời điểm rút lui/ bị truất quyền thi đấu khi đó tất cả các
                                phiếu cược sẽ coi như vô hiệu.
                                <br /> • 3.6.11.Thị trường người chiến thắng trận đấu dựa vào các chiến thắng của một trân đấu cụ thể, ví dụ: Ván Sec 1
                                hiệp đấu 1, Ván sec 1 hiệp đấu 2 v.v… Nếu một ván sec đi đến một hệ tính ván quyết thắng khi đó thị trường sẽ được
                                chỉ định như Hệ tính quyết thắng Ván séc 1 ; Hệ tính quyết thắng Ván Sec 2 v.v… Nếu có một tay vợt rút lui/ bị trút
                                quyền thi đấu trong một trận đấu chưa hoàn thành thì tất cả các phiếu cược sẽ được coi là vô hiệu. Nếu trận đấu được
                                hoàn thành bởi các trọng tài quyết định là một “hình phạt “, khi đó tất cả các phiếu cược trong trận đấu đó sẽ được
                                coi là vô hiệu (mặc dù trận đấu là hoàn thành bởi một “điểm phạt”, khi đó tất cả các phiếu cược vẫn còn hợp lệ).
                                Nếu trận đấu bị tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận đấu là hoàn thành.
                                <br /> • 3.6.12.Cược điểm số đúng của trận đấu nghĩa là cược số set chính xác mà mỗi người chơi thắng trong một trận đấu.
                                Nếu trận đấu không hoàn thành thì tất cả các khoản cược sẽ vô hiệu. Nếu số set đã lên lịch cần có để chiến thắng
                                trận đấu bị thay đổi thì tất cả các khoản cược sẽ vô hiệu.
                                <br /> • 3.6.13.Cược điểm số đúng của set X nghĩa là cược số ván chính xác mà mỗi người chơi thắng trong một trận đấu.
                                Nếu set đấu không hoàn thành thì tất cả các khoản cược sẽ vô hiệu. Nếu số ván đã lên lịch cần có để chiến thắng trận
                                đấu bị thay đổi thì tất cả các khoản cược sẽ vô hiệu.
                                <br /> • 3.7.Cầu lông
                                <br /> • 3.7.1. Cược dòng tiền dự đoán tay vợt thắng của một trận đấu hoặc một hiệp cụ thể. Cược chấp được dựa trên dựa
                                vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa trên cặp đấu của các ván set hoặc
                                trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/ Nhỏ và Đơn/ Chẵn dựa trên điểm số (trừ khi có quy
                                định khác).
                                <br /> • 3.7.2.Nếu một tay vợt không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ
                                coi như vô hiệu.
                                <br /> • 3.7.3.Nếu một tay vợt (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược
                                sẽ như vô hiệu, ngoại trừ các thị trường đã được vô điều kiện xác định.
                                <br /> • 3.7.4.Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận
                                đấu tiếp tục trước khi hết mười hai tiếng.
                                <br /> • 3.7.5.Người chiến thắng ván sec đầu tiên (ngưới chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec
                                cụ thể. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                                <br /> • 3.7.6.Cá cược Cầu Lông trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ
                                không được cập nhật cho cá cược Cầu Lông trực tuyến.
                                <br /> • 3.8.Bóng bàn
                                <br /> • 3.8.1.Thị trường moneyline dựa vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa
                                trên cặp đấu của các ván set hoặc trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/ Nhỏ và Đơn/ Chẵn
                                dựa trên điểm số (trừ khi có quy định khác).
                                <br /> • 3.8.2.Nếu một tay vợt không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ
                                coi như vô hiệu.
                                <br /> • 3.8.3.Nếu một tay vợt (hoặc đồng đội) rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược
                                sẽ như vô hiệu, ngoại trừ các thị trường đã được vô điều kiện xác định.
                                <br /> • 3.8.4.Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận
                                đấu tiếp tục trước khi hết mười hai tiếng.
                                <br /> • 3.8.5.Người chiến thắng ván sec đầu tiên (ngưới chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec
                                cụ thể. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành.
                                <br /> • 3.8.6.Cá cược Bóng bàn trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số sẽ
                                không được cập nhật cho cá cược Bóng bàn trực tuyến.
                                <br /> • 3.9.Bóng chuyền và bóng chuyền bãi biển
                                <br /> • 3.9.1.Thị trường Moneyline dựa vào các chiến thắng của trận đấu, hoặc ván sec cụ thể. Thị trường chấp banh dựa
                                trên cặp đấu của các ván set hoặc trận đấu (vui lòng tham khảo Tiêu đề thị trường); Thị trường Lớn/Nhỏ và Đơn/Chẵn
                                dựa trên trận đấu (trừ khi có quy định khác).
                                <br /> • 3.9.2.Nếu một đội không tham gia một giải đấu hoặc trận đấu khi đó tất cả các phiếu cược vào tay vợt này sẽ coi
                                như vô hiệu.
                                <br /> • 3.9.3.Nếu một đội rút lui hoặc là bị tước quyền trong trận đấu khi đó tất cả các phiếu cược sẽ như vô hiệu, ngoại
                                trừ các thị trường đã được vô điều kiện xác định.
                                <br /> • 3.9.4.Nếu một trận đấu được hoãn lại hoặc tạm ngưng khi đó tất cả các phiếu cược vẫn được coi là hợp lệ nếu trận
                                đấu tiếp tục trước khi hết mười hai tiếng.
                                <br /> • 3.9.5.Đội chiến thắng ván sec đầu tiên (đội chiến thắng Thứ hai, thứ ba v.v….) dựa trên kết quả của ván sec cụ
                                thể. Tất cả các phiếu cược sẽ được coi là vô hiệu nếu ván séc chỉ định không hoàn thành
                                <br /> • 3.9.6.Cá cược Bóng Chuyền trực tuyến được giải quyết theo kết quả của trận đấu (hoặc ván sec cụ thể). Điểm số
                                sẽ không được cập nhật cho cá cược Bóng Chuyền trực tuyến.
                                <br /> • 3.10.Khúc côn cầu sân cỏ
                                <br /> • 3.10.1. Tất cả các thị trường toàn thời gian, bao gồm cả cá cược trực tuyến sẽ được giải quyết trên kết quả cuối
                                cùng vào cuối thời gian chính thức. Thêm giờ, bàn thắng vàng và loạt sút luân lưu không tính cho các thị trường toàn
                                thời gian. (Thị trường cụ thể cho thêm giờ (ET) và loạt sút luân lưu (PEN) có thể sẽ được cung cấp đặt cược).
                                <br
                                /> • 3.10.2.Nếu một trận đấu bị hoãn lại, tạm ngưng hoặc hủy bỏ và không tiếp tục lại trong vòng mười hai giờ từ thời
                                gian bắt đầu khi đó tất cả các phiếu cược được coi là vô hiệu, trừ những kèo đã được xác định vô điều kiện. Các phiếu
                                cược cũng sẽ được coi là hợp lệ nếu một kết quả chính thức được tuyên bố bởi tổ trọng tài có liên quan.
                                <br /> • 3.10.3.Thị trường nửa hiệp đầu dựa theo các kết quả của nửa hiệp đầu. Tất cả các phiếu cược sẽ được coi là vô
                                hiệu nếu nửa hiệp một không hoàn thành.
                                <br /> • 3.10.4.Cá cược Khúc Côn Cầu Sân cỏ trực tuyến được giải quyết theo kết quả của trận đấu vào cuối thời gian chính
                                thức.
                                <br /> • 3.10.5.Điểm số kết quả sẽ được cập nhật vào cá cược Khúc Côn Cầu trực tiếp và thị trường được hiện ra trong quá
                                trình giao dịch trực tiếp để tham khảo tại thời gian đặt cược.
                                <br /> • 3.10.6.Đối với các cược trực tuyến, trong một trận đấu, với các hành động tùy ý và tuyệt đối của Nhà Cái, nếu
                                xét thấy là Các tình huống nguy hiểm về điểm số, kết quả, hiệu suất của một đội bóng hoặc cầu thủ có thể bị ảnh hưởng;
                                hoặc thay đổi tỷ lệ cược/ giá hoặc thị trường hoặc thông tin cá cược ("Tình huống Nguy hiểm") Nhà Cái có quyền tạm
                                ngưng chấp nhận cược và có thể chấp nhận hoặc từ chối cược sau khi có tình huống Nguy Hiểm. Tất cả các tình huống
                                khác, trong một trò chơi được coi là an toàn và các cược sẽ tiếp tục được xem xét tiếp.</p>
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


SpecialRulesVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(SpecialRulesVn))));