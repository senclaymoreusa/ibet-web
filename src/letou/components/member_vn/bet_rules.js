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

export class BetRulesVn extends React.Component {
    
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
                                <a href="/vn/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vn/for_member">Luật chơi Thể thao >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Quy tắc đặt cược và điều lệ</h2>
                        <p>Các sự kiện/trận đấu và kèo khác nhau sẽ có có những quy tắc và điều lệ khác nhau; và được liệt kê dưới đây trong mục “Quy Tắc Chung Cá Cược Thể Thao” trên mỗi Sự Kiện hay loại Kèo/cược được đề cập trong Website này. Dưới đây là các quy tắc cá cược chung đối với tất cả các Sự Kiện và loại cược, và cần được tuân thủ nghiêm ngặt. Trong trường hợp áp dụng, các quy định và định nghĩa nêu trong Điều khoản và Điều kiện sẽ được công bố trên website Letou và sẽ áp dụng đối với các Quy tắc và Điều Lệ này.<br />
                        • 1.Quy tắc và điều lệ chung đặt cược <br />
                        • 1.1.Tổng quan <br />
                        • 1.1.1.Tất cả các thông tin cá cược được cung cấp bởi Công ty đều được thực hiện với thiện chí tốt. Tuy nhiên công ty không thể nhận trách nhiệm đối với bất kỳ lỗi hoặc thiếu sót liên quan đến ngày tháng, thời gian, địa điểm, đối thủ cạnh tranh, tỷ lệ cược, kết quả, thống kê, áo cầu thủ (hiển thị tại Live Streaming) hoặc những thông tin Cá cược khác. Công ty có quyền sửa đổi bất kỳ các lỗi nghiễm nhiên và áp dụng mọi biện pháp hợp lý để đảm bảo rằng các loại kèo – được định nghĩa trong “Các Loại Cá Cược” khác nhau trong các sự kiện thể thao nhất định – được quản lý bởi tính toàn vẹn và minh bạch. Công ty có quyền đưa ra quyết định cuối cùng.<br />
                        • 1.1.2.Nếu một sự kiện được xem như là một trận đấu thể thao có tổ chức hay một sự kiện giữa hai đội hoặc giữa các cá nhân bắt đầu trước thời gian quy định thì những cược được đặt trước khi Sự Kiện Bắt Đầu (không bao gồm cược trực tiếp) sẽ được coi là hợp lệ. Nếu một loại Kèo không bị đóng hoặc bị tạm ngưng tại thời điểm chính xác thì Công ty có quyền vô hiệu hóa tất cả các cược đặt sau khi thời gian thực tế bắt đầu (ngoại trừ trường hợp cá độ trực tiếp).<br />
                        • 1.1.3.Trong trường hợp không thống nhất giữa tiếng Anh và tên phi tiếng Anh được sử dụng trong các trận đấu hoặc đội bóng trên Webite, phiên bản tiếng Anh sẽ được áp dụng làm cơ sở.<br />
                        • 1.1.4.Trong mọi thời điểm, người chơi có trách nhiệm nhận thức được về tỷ số trận đấu và tất cả các thông tin có liên quan; khách hàng nên nắm rõ tình trạng trận đấu trước khi đặt cược.<br />
                        • 1.1.5.Công ty có quyền sửa đổi những Quy tắc này tại bất kỳ thời điểm nào vì bất kỳ lý do gì. Bất kỳ các sửa đổi đó sẽ được ràng buộc và có hiệu quả ngay lập tức khi đăng tải trên Website.<br />
                        • 1.1.6.Khách hàng thừa nhận tỷ số hiện tại, thời gian trôi qua và các dữ liệu khác được cung cấp trên trang web, trong khi nếu như lấy từ “live feed” thì thông tin được cung cấp bởi một bên thứ ba và có thể dẫn đến thời gian chậm trễ và/ hoặc có thể không chính xác, tất cả cược đặt dựa trên dữ liệu này hoàn toàn có nguy cơ gây bất lợi cho khách hàng. Công ty cung cấp dữ liệu này nhưng không mang tính đảm bảo về sự chính xác, đầy đủ và kịp thời của dữ liệu đó và không chịu trách nhiệm cho bất kỳ tổn thất (trực tiếp hoặc gián tiếp) gây ra cho khách hàng nếu khách hàng phụ thuộc vào những thông tin này.<br />
                        • 1.1.7.Công ty, có quyền quyết định cuối cùng và duy nhất, về việc hủy bỏ hoặc tuyên bố vô hiệu hay đình chỉ bất kỳ người chơi nào mà không cần báo trước, trong bất kỳ trường hợp nào sau đây:<br />
                        • Các chi tiết đặt cược chưa đầy đủ hoặc có sai sót;<br />
                        • Cược đặt quá giới hạn được cho phép bởi luật chơi;<br />
                        • Cược đặt không đúng với các quy tắc;<br />
                        • Lỗi của con người trong việc đánh máy hoặc truyền đạt dẫn đến việc sử dụng một dữ liệu chơi game hoặc tỷ lệ cược không chính xác;<br />
                        • Nếu có và khi xuất hiện việc sử dụng một nên tảng chơi game bất thường hoặc không thường xuyên hoặc xuất hiện một số tiền thua hoặc thắng cao bất thường.<br />
                        • 1.1.8.Công ty bảo lưu quyền đình chỉ một trò chơi hoặc sản phẩm cụ thể để sửa chữa bất kỳ lỗi rõ ràng nào, để duy trì tính toàn vẹn và công bằng của trò chơi nói trên.<br />
                        • 1.1.9.Khi một cược được xác nhận bởi công ty, cược đó sẽ không thể được sửa đổi hoặc hủy bỏ bởi khách hàng.<br />
                        • 1.1.10.Nếu khách hàng có bất kỳ nghi ngại hay nghi ngờ rằng hệ thống có gì sai sót, khách hang sẽ được khuyên nên ngừng chơi và phối hợp với bộ phận hỗ trợ khách hàng của Công ty. Nếu khách hàng tiếp tục chơi, thì anh ấy/cô ấy đã chấp nhận trách nhiệm về kết quả của cược của mình và Công ty có toàn quyền quyết định việc giải quyết hay không để giải quyết vấn đề.<br />
                        • 1.1.11.Trong trường hợp trận đấu trực tiếp hoặc trận đấu bắt đầu và cược đã được thực hiện trong khi sự kiện này là trong hoạt động và nếu vì lý do nào đó mà các dòng bị ngắt kết nối, bất kể nguyên nhân ngắt kết nối là gì, hoặc đóng băng đường thông hoặc treo máy, bất kỳ và tất cả các cược được thực hiện vẫn sẽ được giữ nguyên và được giải quyết khi sự kiện này đã được hoàn thành và khi kết quả được công bố. Nguyên tắc chung này không áp dụng trong trường hợp một trò chơi hoặc một sản phẩm có một quy tắc cụ thể khi ngắt kết nối trong trường hợp này, phải áp dụng các quy tắc cụ thể và kết quả dựa trên các quy tắc cụ thể sẽ ràng buộc khách hàng.<br />
                        • 1.1.12.Công ty có quyền đình chỉ và / hoặc đóng tài khoản của khách hàng bất cứ lúc nào nếu người ta tin rằng các khách hàng vi phạm các quy tắc và quy định áp dụng hoặc lừa dối, bị tấn công, bị lấy cắp thông tin, bị thao túng hoặc bị hư hỏng các thủ tục cá độ bình thường hoặc nếu khách hàng tham gia vào các hoạt động rửa tiền hoặc các hoạt động bất hợp pháp khác hoặc là dưới tuổi pháp lý cần thiết để tham gia cá cược trong thẩm quyền của mình hoặc vị trí thực tế. Khi tài khoản của khách hàng bị đóng cửa vì những lý do nói trên, tất cả tiền thắng cược và / hoặc thanh toán bao gồm số dư trong tài khoản của khách hàng sẽ bị hủy bỏ<br />
                        • 1.1.13.Các Công ty có quyền để thiết lập số tiền thanh toán tối đa cho những sản phẩm đã có và những sản phẩm được giới thiệu.<br />
                        • 1.1.14.Công ty có quyền giữ khoản thanh toán nếu có bằng chứng cho thấy các tỷ lệ cược hoặc tổng giải thưởng đã được thao túng hoặc nơi một cuộc đua, sự kiện hoặc trận đấu đã được sắp đặt. Những bằng chứng kể trên có thể dựa trên kích thước, khối lượng hoặc mô hình của các cược được đặt trên bất kỳ hoặc tất cả các kênh cá cược của chúng tôi. Nếu có bất kỳ tranh chấp về việc giải thích các quy tắc này, giải thích của Công ty sẽ được áp dụng.<br />
                        • 1.1.15.Công ty có quyền từ chối và hủy bỏ tất cả các cược có dính líu với các hoạt động cá cược bất hợp pháp..<br />
                        • 1.1.16.Công ty bảo lưu quyền từ chối khách hàng tham gia các trò chơi hoặc hủy bỏ tư cách của người chơi trong trò chơi đó.<br />
                        • 1.1.17.Phần mềm này được cung cấp “nguyên vẹn” mà không có bất kỳ sự bảo đảm, điều kiện, cơ sở hoặc đại diện, rõ ràng hay ngụ ý, theo luật định hoặc theo một phần của Công ty. Công ty không đảm bảo khả năng bán hàng, chất lượng, phù hợp cho một mục đích cụ thể, rằng phần mềm sẽ đáp ứng yêu cầu của khách hàng và rằng phần mềm là không vi phạm.<br />
                        • 1.1.18.Trong khi Công ty cam kết rằng nó sẽ hoạt động với việc chăm sóc hợp lý, Công ty không đảm bảo rằng các phần mềm có lỗi hoặc không bị gián đoạn hoặc bất kỳ khiếm khuyết nào trong phần mềm sẽ được sửa chữa hoặc các phần mềm hoặc các máy chủ không có vi-rút.<br />
                        • 1.1.19.Công ty không chịu trách nhiệm cho tất cả các chi phí, tổn thất hoặc khiếu nại phát sinh từ hoặc do thông tin liên lạc hoặc lỗi hệ thống liên quan đến việc giải quyết các tài khoản. Công ty bảo lưu quyền thực hiện bất kỳ hành động thích hợp nào để sửa các lỗi đó bao gồm việc loại bỏ tất cả các trò chơi có liên quan từ phần mềm.<br />
                        • 1.1.20.Trong việc đặt cược và sử dụng phần mềm, khách hàng thừa nhận rằng Công ty sẽ không kiểm soát cách khách hàng sử dụng phần mềm. Hơn nữa, khách hàng đặt cược của mình và chịu trách nhiệm về việc sử dụng phần mềm của riêng mình và Công ty sẽ không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, là hậu quả, ngẫu nhiên hay đặc biệt nào.<br />
                        • 1.1.21.Khách hàng không được tiết lộ bất kỳ thông tin bí mật nào thuộc Công ty hoặc nhà cung cấp phần mềm có thể có trong phần mềm<br />
                        • 1.1.22.Để chơi các trò chơi và đặt cược, khách hàng được cung cấp quyền hạn cá nhân, không độc quyền, không được chuyển nhượng quyền để sử dụng phần mềm.<br />
                        • 1.1.23.Khách hàng sẽ bị cấm:<br />
                        • 1.1.23.1.Cài đặt hoặc tải các phần mềm trên máy chủ của một thiết bị khác hoặc thực hiện các bước để làm cho các phần mềm sẵn sàng cho bất kỳ người nào khác;<br />
                        • 1.1.23.2.Những bản sao giấy phép phụ, chuyển nhượng, cho thuê, cho mượn, chuyển nhượng, sao chép hoặc phát hành phần mềm;<br />
                        • 1.1.23.3.Giải mã, đảo ngược, tháo rời, dịch, biên soạn, chỉnh sửa, tạo ra các sản phẩm dựa trên phần mềm, bất kỳ phần nào hoặc bất kỳ bản sao nào, thích ứng phiên mã hoặc phần sáp nhập của phần mềm, chuyển đổi phần mềm hoặc bất kỳ phần nào của nó hay thực hiện bất kỳ nỗ lực để khám phá mã nguồn của phần mềm;<br />
                        • 1.1.23.4.Hủy bỏ bất kỳ quyền tác giả, quyền sở hữu hoặc tương tự từ các nhà cung cấp phần mềm; và<br />
                        • 1.1.23.5.Đăng nhập, truy cập hoặc cố gắng đăng nhập hay truy cập hoặc bỏ qua hệ thống an ninh của Công ty hoặc can thiệp bằng bất kỳ cách nào với các phần mềm, trò chơi và các trang web.<br />
                        • 1.1.24.Việc sử dụng phần mềm không cung cấp cho khách hàng quyền sở hữu của bất kỳ quyền sở hữu trí tuệ nào trong phần mềm.<br />
                        • 1.1.25.Những quy định chung chỉ được áp dụng trong trường hợp không có bất kỳ quy tắc đặc biệt nào áp dụng cho một trò chơi hoặc sản phẩm cụ thể.<br />
                        • 1.2. Hủy bỏ hoặc Trì Hoãn<br />
                        • 1.2.1.Nếu một Sự Kiện không bắt đầu vào đúng thời gian đã lên kế hoạch trước và không được hoàn thành trong ngày dự kiến hoàn thành và theo quy định trong các quy tắc thể thao cụ thể, thì tất cả các cược sẽ bị vô hiệu, ngoại trừ những Kèo đã được xác định vô điều kiện.<br />
                        • 1.2.2.Nếu một Sự Kiện bắt đầu nhưng sau đó bị hủy bỏ, và không hoàn thành trong ngày dự kiến hoàn thành theo quy định trong các quy tắc thể thao cụ thể, thì tất cả các cược sẽ bị vô hiệu, ngoại trừ những Kèo đã được xác định vô điều kiện.<br />
                        • 1.2.3.Nếu sự kiện không được hoàn thành như theo thời gian dự kiến ban đầu trong các quy tắc thể thao cụ thể mà kết quả chính thức được công bố, hay kết quả sẽ được công bố bởi nhà tổ chức sự kiện hoặc cơ quan quản lý có liên quan, Công ty có quyền xem đó là các trận đấu chính thức hợp lệ. Quyết định của Công ty là quyết định cuối cùng và có tính ràng buộc trong vấn đề này.<br />
                        • 1.3.Thay Đổi Địa Điểm<br />
                        • 1.3.1.Trừ khi có quy định khác, nếu trận đấu dự kiến được chơi trên sân trung lập nhưng lại được chơi trên sân không trung lập hoặc ngược lại, tất cả các cược sẽ vẫn được coi là hợp lệ. Trong trường hợp thay đổi địa điểm nơi mà đội chủ nhà đáng lý chơi hoặc ngược lại, tất cả các cược vào trận đấu này sẽ bị hủy. Cược cũng sẽ bị hủy nếu tên đội nhà và đội khách là đặt tên sai quy định.<br />
                        • 1.3.2.Đối với tất cả sự kiện không mang tính đồng đội, nếu các địa điểm dự kiến thay đổi sau khi các Kèo mở ra, thì tất cả các cược vẫn được coi là hợp lệ.<br />
                        • 1.4.Thời Gian Tiến Hành <br />
                        • 1.4.1.Nếu thời gian dự kiến tổ chức sự kiện bị thay đổi thì tất cả các cá cược sẽ vô hiệu.<br />
                        • 1.4.2.Bất kỳ sự cố xảy ra trong thời gian bù giờ hoặc thời gian tạm ngưng, được xem là xảy ra vào cuối thời gian chính thức, ví dụ: bàn thắng được ghi trong thời gian bù giờ của hiệp 1 trong một trận bóng đá được coi là đã ghi được trong 45 phút.<br />
                        • 1.5.Kết quả<br />
                        • 1.5.1.Trong trường hợp có liên quan, đội được trao giải sẽ được tính kết quả chính thức, bất kể kết quả xếp loại nào khác hoặc sửa đổi khác đối với kết quả. Nếu không có lễ đăng quang trao giải, kết quả sẽ được xác định theo kết quả chính thức của trọng tài có liên quan tại thời điểm kèo mở ra, bất kể kết quả xếp loại nào khác hoặc sửa đổi khác đối với kết quả. Nếu không có kết quả chính thức thì kết quả sẽ được xác định dựa theo bằng chứng thực sẵn có tại thời điểm kèo mở ra.<br />
                        • 1.5.2.Các Kèo nói chung được giải quyết ngay sau khi kết thúc một Sự Kiện. Được xem như một dịch vụ chăm sóc khách hàng hoàn hảo, một số Kèo có thể được giải quyết trước khi các kết quả chính thức được công bố. Công ty có quyền đảo ngược kết quả các sự kiện của một số kèo khi xuất hiện lỗi.<br />
                        • 1.5.3.Trong trận đấu không có kết quả chắc chắn thì chúng tôi có quyền từ chối các kèo cược liên quan.<br />
                        • 1.5.4.Ngoại trừ những trận đấu không tồn tại, Công ty sẽ không hủy bỏ hoặc hoàn tiền cho cược đã được xử lý vì bất kỳ sửa đổi hoặc thay đổi nòa với kết quả, tên đội bóng, hoặc bất kỳ chi tiết trận đấu khác được thực hiện 72 giờ sau thời gian bắt đầu Sự Kiện hoặc cho những cược đã được xử lý.<br />
                        • 1.5.5.Trường hợp có sự mâu thuẫn giữa các kết quả chính thức và kết quả được đăng trên Website của Công ty thì mâu thuẫn đó sẽ được giải quyết bằng cách dựa trên băng ghi hình sự kiện của Công ty để xác định kết quả chính xác. Tuy nhiên, nếu không có băng ghi hình thì kết quả chính xác sẽ được xác định theo kết quả của nhà tổ chức hoặc cơ quan quản lý có liên quan theo công bố của họ trên trang web chính thức. Nếu trang web chính thức không thể cung cấp kết quả hoặc kết quả được đăng tải trên trang web chính thức đó là sai, thì Công ty có quyền đưa ra quyết định/sửa đổi để xác định kết quả cuối cùng. Quyết định của Công ty là quyết định cuối cùng và có tính ràng buộc trong vấn đề này.<br />
                        • 1.5.6.Người chiến thắng của một Sự kiện được xác định vào lúc kết thúc Sự kiện để xác định số lần đặt cược trúng số bất kể quyết định đảo ngược quyết định hoặc kết quả của bất kỳ phản đối hoặc khiếu nại nào.<br />
                        • 1.6.Chức Năng Hẹn Giờ Tự Động<br />
                        • 1.6.1.Trong một vài trận đấu được xác định bởi Công Ty, khách hàng có thể đặt cược sử dụng chức năng Chấp Nhận Hẹn Giờ bằng cách chọn vào nút “Chấp Nhận Hẹn Giờ” trong phần menu. Mỗi cược được đặt sử dụng chức năng hẹn giờ sẽ tự động đếm ngược thời gian. Khi thời gian kết thúc, mà không có bất kỳ gián đoạn nào xảy ra ở mục 1.6.2 dưới đây thì cược này được chấp nhận.<br />
                        • 1.6.2.Nếu trường hợp gián đoạn đề cập trong phần này xảy ra trước thời gian đếm ngược kết thúc, tất cả cược đã đặt sử dụng chức năng Chấp Nhận Hẹn Giờ sẽ bị loại bỏ ngay lập tức;<br />
                        • 1.6.2.1.Nếu trận đấu có khả năng xuất hiện thẻ đỏ hay thẻ đỏ đã thực sự được đưa ra;<br />
                        • 1.6.2.2.Nếu trận đấu có khả năng xuất hiện quả phạt đền hay quả phạt đền thực sự xảy ra;<br />
                        • 1.6.2.3.Nếu trận đấu có khả năng xuất hiện bàn thắng ghi bàn hay bàn thắng đã thực sự được ghi bởi bất kỳ đội nào;<br />
                        • 1.6.2.4.Nếu những sự kiện không giới hạn nhưng ngẫu nhiên xảy ra như trục trặc về các thiết bị hoặc kỹ thuật viễn thông có thể ngăn cản việc đặt chình xác, chấp nhận, ghi hình hoặc thông báo của các cược, trì hoãn hoặc gián đoạn trong tổ chức hoặc truyền dẫn thông tin thất bại.<br />
                        • 1.6.3.Khi sử dụng chức năng Chấp Nhận Hẹn Giờ, khách hàng cần phải thừa nhận điểm số hiện tại, thời gian diễn ra và những dữ liệu được cung cấp bởi website này, trong khi nếu như lấy từ “live feed” thì thông tin được cung cấp bởi một bên thứ ba và có thể dẫn đến thời gian chậm trễ và/ hoặc có thể không chính xác, tất cả cược đặt dựa trên dữ liệu này hoàn toàn có nguy cơ gây bất lợi cho khách hàng. Công ty cung cấp dữ liệu này nhưng không chịu trách nhiệm cho bất kỳ tổn thất (trực tiếp hoặc gián tiếp) gây ra cho khách hàng nếu khách hàng phụ thuộc vào những thông tin này.<br />
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


BetRulesVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRulesVn))));