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

export class GameRuleOneVn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          hide: true,
          current: 1
        }
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    onClick(index) {
        this.setState({
          hide: false,
          current: index
          
        })
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
                                <a href="/vi/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">Marvel Jackpot</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">5-10 Hàng thanh toán</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a href="/">15-20 Hàng thanh toán</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a href="/">25+ Hàng thanh toán</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a href="/">Luật chơi</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                   
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Marvel Jackpot</h2>
                            <h1>Rules</h1>
                            <p>- Một mệnh giá đặt cược (giá trị đồng xu) có thể được chọn bằng cách nhấp vào nút “ Nhấp để Thay đổi” mệnh giá ở góc dưới
                                bên trái của màn hình.
                                <br />
                                <br /> - Các hàng đặt cược được chọn bằng cách nhấp vào Đặt cược mỗi hàng. Mỗi lần nhấp chuột thêm một đồng tiền vào cược.
                                Khi đạt được số tiền tối đa (10 đồng tiền của mệnh giá đặt cược đã chọn), nhấp vào nút một lần nữa đặt lại số tiền đặt
                                cược vào một đồng tiền.
                                <br />
                                <br />
                                <br /> -Các đường thanh toán được chọn bằng cách nhấp vào các hàng. Mỗi nhấp chuột kích hoạt một đường thanh toán. Khi tất
                                cả các đường thanh toán trả tiền được kích hoạt, hãy nhấp vào nút một lần nữa để đặt lại nó cho một đường thanh toán
                                đang hoạt động. đường thanh toán cũng có thể được kích hoạt bằng cách sử dụng các nút số ở hai bên cuộn. Chọn một đường
                                thanh toán cao bao gồm tất cả những đường thấp hơn. Ví dụ: chọn đường thanh toán 6 cũng kích hoạt các đường thanh toán
                                từ 1 đến 5. Nhấp vào cược Max sẽ kích hoạt tất cả các đường thanh toán với cược tối đa cho mỗi dòng và quay vòng cuộn.
                                <br
                                />
                                <br />
                                <br /> - Tổng số đặt cược cho mỗi vòng đấu = đặt cược X dòng tiền cược hoạt động.
                                <br />
                                <br /> - Nhấp vào Spin quay các cuộn với lựa chọn hiện tại của hàng và cược hàng. Trong cuộn quay, nút Spin sẽ thay đổi thành
                                Stop. Nhấp vào Dừng kết thúc hoạt hình quay và ngay lập tức hiển thị kết quả quay
                                <br />
                                <br /> Cuộn cũng có thể được kéo bằng chức năng Auto Start. Nhấp vào “+ “hoặc” –“ trên Tự động bắt đầu chọn số lần quay tiếp
                                theo để được kích hoạt. Nhấp vào Tự động bắt đầu quay. Nút Auto Start sẽ thay đổi thành Stop trong suốt chế độ khởi động
                                tự động của cuộn quay. Chế độ Tự động bắt đầu kết thúc khi cuộn đã được quay số lần xác định bởi người chơi hoặc khi
                                người chơi nhấp vào Dừng.
                                <br />
                                <br /> - Chiến thắng được tính theo bảng trả thưởng. Tiền thắng = tiền đặt cược x tỷ lệ nhân tương ứng theo bảng trả thưởng.
                                Biểu tượng chiến thắng = tổng số tiền cược x tỷ lệ nhân tương ứng theo bảng trả thưởng. Bảng thanh toán có thể được truy
                                cập thông qua trang Thông tin.
                                <br />
                                <br /> - Trên một đường thanh toán trả tiền nhất định, chỉ có kết hợp thắng cược cao nhất trả tiền trong khi số tiền thắng
                                cược đồng thời trên các đường thanh toán khác nhau được cộng lại.
                                <br />
                                <br /> - Trong trường hợp thắng cược, Biểu tượng chiến thắng hiển thị số tiền thắng tích lũy. Bạn có thể dừng lại vé chiến
                                thắng bằng cách nhấp vào bất cứ nơi nào trên màn hình.
                                <br />
                                <br /> - Đường chiến thắng và tổng số chiến thắng cũng được hiển thị trên dải nằm ở dưới cùng của thanh cuộn hoặc cửa sổ trò
                                chơi.
                                <br />
                                <br /> - Một chiến thắng kích hoạt nút Gamble, khi nhấp vào, bắt đầu tính năng Gamble. Bạn có thể tìm thêm thông tin về tính
                                năng Gamble bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Info Page</h1>
                            &nbsp;
                            <p> - Nhấp vào Info mở màn hình tham chiếu mô tả các thành phần trò chơi khác nhau. Nhấp vào các nút mũi tên ở góc dưới bên phải
                                của màn hình cho phép điều hướng giữa các màn hình thông tin khác nhau.
                                <br />
                                <br /> ► Màn hình bàn thanh toán hiển thị tất cả các cược thắng. Khi mở ra sau khi giành chiến thắng , các ký hiệu chiến thắng
                                sẽ kết hợp (số ký hiệu và hệ số cá cược)sẽ được đánh dấu và nhấp nháy.
                                <br /> ► Màn hình Trò chơi Miễn phí mô tả các kết hợp biểu tượng cần thiết để nhập tính năng Trò chơi miễn phí và mô tả các
                                quy tắc tính năng Trò chơi miễn phí.
                                <br />- Màn hình Gamble mô tả cách thử tăng gấp đôi số tiền thưởng và mô tả các quy tắc tăng gấp đôi.
                                <br />- Nhấp vào Hiển thị các Đường thanh toán trên trang Paytable page, mở một màn hình minh hoạ tất cả các đường thanh toán
                                có thể xảy ra. Nhấn Hide Paylines đóng màn hình này và trở về trang Paytable.
                                <br /> - Nhấp vào Quay lại để thoát khỏi màn hình Thông tin và quay trở lại trò chơi.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> PAYLINES </h1>
                            &nbsp;
                            <p>- Các đường thanh toán hoạt động được thể hiện bằng các đường xuất hiện trên các cuộn. Các đường thanh toán có thể được kích
                                hoạt và chúng được hiển thị bằng cách nhấp vào các đường.
                                <br />
                                <br /> - Chỉ có các đường thanh toán có hiệu lực mới có thể đăng ký chiến thắng.
                                <br />
                                <br /> - Có sự khác nhau giữa đặt cược theo hàng và tổng cược. Đặt cược hàng cho biết số tiền đang đặt cược trên một đường
                                thanh toán. Tổng số tiền đặt cược cho thấy số tiền đặt cược trong tổng số trận đấu. Khoản thanh toán được hiển thị trong
                                bảng trả thưởng được nhân với số tiền đặt cược.
                                <br />
                                <br /> - Biểu tượng Scatter là một ngoại lệ đối với các quy tắc này. Thông tin thêm về Scatter có thể được tìm thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> ABOUT PAYOUTS </h1>
                            &nbsp;
                            <p>- Khoản thanh toán được liệt kê trên màn hình Paytable. Để tìm số tiền có thể thắng cược, số tiền đặt cược phải được nhân
                                với số tiền thanh toán.
                                <br />
                                <br /> - Nếu kết hợp hai đường chiến thắng xảy ra trên cùng một đường thanh toán, đường thanh toán cao hơn trong đó được thanh
                                toán. Nếu nhiều hơn một đường thanh toán đang hoạt động đều thắng, tiền thắng sẽ được cộng thêm.
                                <br />
                                <br /> - Kết hợp chiến thắng phải bắt đầu từ cuộn bên trái, và các ký hiệu phải được liên tiếp.
                                <br />
                                <br /> - Biểu tượng Scatter là một ngoại lệ đối với các quy tắc này. Thông tin thêm về biểu tượng Scatter có thể được tìm thấy
                                bên dưới.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>5-10 Hàng thanh toán</h2>
                            &nbsp;
                            <h1>Luật chơi</h1>
                            &nbsp;
                            <p>- Một đơn vị cược (giá trị đồng xu) có thể được chọn bằng cách nhấn vào Change denomination (thay đổi đơn vị cược) ở phía
                                góc trái bên dưới màn hình.
                                <br />
                                <br /> - Hàng cược được chọn bằng cách nhấn vào Bet per Line (số cược cho một hàng). Mỗi nhấn sẽ cộng thêm vào một xu vào hàng
                                cược. Khi đạt được số lượng tối đa (10 xu của đơn vị cược đã chọn), nhấn lại vào nút đó để bắt đầu lại hàng cược với
                                một xu.
                                <br />
                                <br />
                                <br /> -Hàng thanh toán được chọn bằng cách nhấn vào nút Lines. Mỗi lần nhấn vào sẽ kích hoạt một hàng thanh toán. Khi tất
                                cả hàng thanh toán được kích hoạt, nhấn lại vào nút này để bắt đầu kích hoạt lại một hàng thanh toán. Hàng thanh toán
                                cũng có thể được kích hoạt bằng cách dùng những nút số ở phía các trục quay. Chọn một hàng thanh toán cao sẽ bao gồm
                                tất cả các hàng thanh toán thấp hơn. Ví dụ, chọn hàng thanh toán 6 sẽ bao gồm hàng thanh toán từ 1 tới 5. Nhấn vào Bet
                                Max (cược tối đa) sẽ kích hoạt tất cả các hàng thanh toán với cược tối đa cho một hàng và bắt đầu quay trục quay.
                                <br
                                />
                                <br />
                                <br /> - Tổng số cược một vòng chơi = Cược của một hàng X số hàng thanh toán kích hoạt.
                                <br />
                                <br /> - Nhấn nút Spin (quay)để quay các trục quay với số hàng đã chọn và số hàng cược. Trong khi quay thì nút Spin sẽ chuyển
                                thành nút Stop (dừng). Nhấn vào Stop để kết thúc vòng quay và hiển thị ngay kết của của vòng quay.
                                <br />
                                <br /> - Các trục quay cũng có thể được quay bằng cách sử dụng tính năng tự động quay (Auto Start). Nhấn + hoặc – bên trên
                                nút tự động quay để chọn số vòng quay tự động. Nhấn vào nút Auto Start để bắt đầu quay. Nút Auto Start sẽ chuyển thành
                                Stop trong suốt chế độ tự động quay. Chế độ tự động quay kết thúc khi quay đủ số vòng quay tự động được chọn bởi người
                                chơi, hoặc khi ngườ chơi nhấn dừng lại (Stop).
                                <br />
                                <br /> - Tiền thắng sẽ được tính theo bảng thanh toán. Wins are calculated according to the paytable. Thắng theo hàng = hàng
                                cược X bội số theo bảng thanh toán. Thắng phân tán = tổng số cược X bội số theo bảng thanh toán. Có thể truy cập bảnh
                                thanh toán thông qua trang Info (thông tin).
                                <br />
                                <br /> - Với hàng thanh toán cho trước, chỉ kết hợp thắng của hàng thanh toán cao nhất được cộng lại đồng thời khi thắng trên
                                hàng thanh toán khác.
                                <br />
                                <br /> - Trong trường hợp thắng vòng quay, mục Win sẽ hiển thị tiền thắng đã được tính. Biểu tượng thắng có thể được dùng lại
                                bằng cách nhấn vào bất kì vị trí nào trên màn hình.
                                <br />
                                <br /> - Hàng thanh toán thắng và tổng thắng cũng được hiển thị bên dưới trục quay hoặc cửa sổ trò chơi.
                                <br />
                                <br /> - Một chiến thắng sẽ kích hoạt nút Gamble mà khi nhấn vào sẽ bắt đầu tính năng Gamble. Thông tin về các tính năng Gamble
                                có thể được tìm thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Trang thông tin</h1>
                            &nbsp;
                            <p>- Nhấp vào nút Info sẽ mở ra màn hình tham khảo mô tả các thành phần trò chơi khác nhau. Nhấn vào nút mũi tên ở góc dưới
                                bên phải màn hình cho phép điều hướng giữa các màn hình thông tin khác nhau.
                                <br />
                                <br /> ► Màn hình bảng thanh toán hiển thị tất cả các kết hợp thắng. Nếu mở ra sau một vòng quay thắng, các kết hợp thắng (số
                                lượng biểu tượng và bội số) sẽ được tô đậm và nhấp nháy.
                                <br /> ► Màn hình các trò chơi miễn phí mô tả các biểu tượng kết hợp cần có để truy cập được vào tính năng trò chơi miễn phí
                                đồng thời mô tả luật chơi của các trò chơi miễn phí.
                                <br />- Màn hình Gamble miêu tả cách nhân đôi chiến thắng bằng các cược với họ và miêu tả luật nhân đôi.
                                <br />-Nhấn vào xem bảng thanh toán trong trang bảng thanh toán sẽ mở ra màn hình thể hiện tất cả các kết hợp hàng thanh toán
                                có thể có. Nhấn ẩn bảng thanh toán (hide paylines) để đóng lại màn hình và quay về trang bảng thanh toán
                                <br /> - Nhấn Quay lại (Back) để thoát khỏi màn hình và quay về trò chơi.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> HÀNG THANH TOÁN </h1>
                            &nbsp;
                            <p>- Các hàng thanh toán kích hoạt đưuọc đại diện bởi những hàng xuất hiện trên trục quay. Hàng thanh toán có thể được kích
                                hoạt và hình dáng của chúng thể hiện bằng cách liên tục nhấn vào nút Lines.
                                <br />
                                <br /> - Chỉ những hàng thanh toán đã kích hoạt mới có thể chiến thắng.
                                <br />
                                <br /> - Có một sự khác biệt giữa hàng cược và tổng cược. Hàng cược cho thấy số tiền cược cho một hành thanh toán. Tổng cược
                                cho thấy tổng số cược cho một vòng chơi. Tiền thanh toán được thể hiện trong bảng thanh toán sẽ được nhân bởi hàng cược.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> THANH TOÁN </h1>
                            &nbsp;
                            <p>- Thanh toán được lấy danh sách từ bảng thanh toán. Để tìm ra số tiền thắng phù hợp, hàng cược phải nhân lên với bội số thanh
                                toán.
                                <br />
                                <br /> - Nếu hai kết hợp hàng thanh toán cùng xảy ra trên một hàng, kết hợp cao hơn sẽ được thanh toán. Nếu có hơn một hàng
                                thanh toán đã kích hoạt có kết hợp thắng, tiền thắng sẽ được cộng thêm vào.
                                <br />
                                <br /> - Kết hợp thắng phải tính từ bên trái trục quay và các biểu tượng phải ở vị trí liên tiếp.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2>15-20 Hàng thanh toán</h2>
                            &nbsp;
                            <h1>Luật chơi</h1>
                            &nbsp;
                            <p>- Một đơn vị cược (giá trị đồng xu) có thể được chọn bằng cách nhấn vào Change denomination (thay đổi đơn vị cược) ở phía
                                góc trái bên dưới màn hình.
                                <br />
                                <br /> - Hàng cược được chọn bằng cách nhấn vào Bet per Line (số cược cho một hàng). Mỗi nhấn sẽ cộng thêm vào một xu vào hàng
                                cược. Khi đạt được số lượng tối đa (10 xu của đơn vị cược đã chọn), nhấn lại vào nút đó để bắt đầu lại hàng cược với
                                một xu.
                                <br />
                                <br />
                                <br /> -Hàng thanh toán được chọn bằng cách nhấn vào nút Lines. Mỗi lần nhấn vào sẽ kích hoạt một hàng thanh toán. Khi tất
                                cả hàng thanh toán được kích hoạt, nhấn lại vào nút này để bắt đầu kích hoạt lại một hàng thanh toán. Hàng thanh toán
                                cũng có thể được kích hoạt bằng cách dùng những nút số ở phía các trục quay. Chọn một hàng thanh toán cao sẽ bao gồm
                                tất cả các hàng thanh toán thấp hơn. Ví dụ, chọn hàng thanh toán 6 sẽ bao gồm hàng thanh toán từ 1 tới 5. Nhấn vào Bet
                                Max (cược tối đa) sẽ kích hoạt tất cả các hàng thanh toán với cược tối đa cho một hàng và bắt đầu quay trục quay.
                                <br
                                />
                                <br />
                                <br /> - Tổng số cược một vòng chơi = Cược của một hàng X số hàng thanh toán kích hoạt.
                                <br />
                                <br /> - Nhấn nút Spin (quay)để quay các trục quay với số hàng đã chọn và số hàng cược. Trong khi quay thì nút Spin sẽ chuyển
                                thành nút Stop (dừng). Nhấn vào Stop để kết thúc vòng quay và hiển thị ngay kết của của vòng quay.
                                <br />
                                <br /> - Các trục quay cũng có thể được quay bằng cách sử dụng tính năng tự động quay (Auto Start). Nhấn + hoặc – bên trên
                                nút tự động quay để chọn số vòng quay tự động. Nhấn vào nút Auto Start để bắt đầu quay. Nút Auto Start sẽ chuyển thành
                                Stop trong suốt chế độ tự động quay. Chế độ tự động quay kết thúc khi quay đủ số vòng quay tự động được chọn bởi người
                                chơi, hoặc khi ngườ chơi nhấn dừng lại (Stop).
                                <br />
                                <br /> - Tiền thắng sẽ được tính theo bảng thanh toán. Wins are calculated according to the paytable. Thắng theo hàng = hàng
                                cược X bội số theo bảng thanh toán. Thắng phân tán = tổng số cược X bội số theo bảng thanh toán. Có thể truy cập bảnh
                                thanh toán thông qua trang Info (thông tin).
                                <br />
                                <br /> - Với hàng thanh toán cho trước, chỉ kết hợp thắng của hàng thanh toán cao nhất được cộng lại đồng thời khi thắng trên
                                hàng thanh toán khác.
                                <br />
                                <br /> - Trong trường hợp thắng vòng quay, mục Win sẽ hiển thị tiền thắng đã được tính. Biểu tượng thắng có thể được dùng lại
                                bằng cách nhấn vào bất kì vị trí nào trên màn hình
                                <br />
                                <br /> - Hàng thanh toán thắng và tổng thắng cũng được hiển thị bên dưới trục quay hoặc cửa sổ trò chơi.
                                <br />
                                <br /> Một chiến thắng sẽ kích hoạt nút Gamble mà khi nhấn vào sẽ bắt đầu tính năng Gamble. Thông tin về các tính năng Gamble
                                có thể được tìm thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Trang thông tin</h1>
                            &nbsp;
                            <p>- Nhấp vào nút Info sẽ mở ra màn hình tham khảo mô tả các thành phần trò chơi khác nhau. Nhấn vào nút mũi tên ở góc dưới
                                bên phải màn hình cho phép điều hướng giữa các màn hình thông tin khác nhau.
                                <br />
                                <br /> ► Màn hình bảng thanh toán hiển thị tất cả các kết hợp thắng. Nếu mở ra sau một vòng quay thắng, các kết hợp thắng (số
                                lượng biểu tượng và bội số) sẽ được tô đậm và nhấp nháy.
                                <br /> ► Màn hình các trò chơi miễn phí mô tả các biểu tượng kết hợp cần có để truy cập được vào tính năng trò chơi miễn phí
                                đồng thời mô tả luật chơi của các trò chơi miễn phí.
                                <br />- Màn hình Gamble miêu tả cách nhân đôi chiến thắng bằng các cược với họ và miêu tả luật nhân đôi.
                                <br />-Nhấn vào xem bảng thanh toán trong trang bảng thanh toán sẽ mở ra màn hình thể hiện tất cả các kết hợp hàng thanh toán
                                có thể có. Nhấn ẩn bảng thanh toán (hide paylines) để đóng lại màn hình và quay về trang bảng thanh toán
                                <br /> - Nhấn Quay lại (Back) để thoát khỏi màn hình và quay về trò chơi.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> HÀNG THANH TOÁN </h1>
                            &nbsp;
                            <p>- Các hàng thanh toán kích hoạt đưuọc đại diện bởi những hàng xuất hiện trên trục quay. Hàng thanh toán có thể được kích
                                hoạt và hình dáng của chúng thể hiện bằng cách liên tục nhấn vào nút Lines.
                                <br />
                                <br /> - Chỉ những hàng thanh toán đã kích hoạt mới có thể chiến thắng.
                                <br />
                                <br /> - Có một sự khác biệt giữa hàng cược và tổng cược. Hàng cược cho thấy số tiền cược cho một hành thanh toán. Tổng cược
                                cho thấy tổng số cược cho một vòng chơi. Tiền thanh toán được thể hiện trong bảng thanh toán sẽ được nhân bởi hàng cược.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> THANH TOÁN </h1>
                            &nbsp;
                            <p>- Thanh toán được lấy danh sách từ bảng thanh toán. Để tìm ra số tiền thắng phù hợp, hàng cược phải nhân lên với bội số thanh
                                toán.
                                <br />
                                <br /> - Nếu hai kết hợp hàng thanh toán cùng xảy ra trên một hàng, kết hợp cao hơn sẽ được thanh toán. Nếu có hơn một hàng
                                thanh toán đã kích hoạt có kết hợp thắng, tiền thắng sẽ được cộng thêm vào.
                                <br />
                                <br /> - Kết hợp thắng phải tính từ bên trái trục quay và các biểu tượng phải ở vị trí liên tiếp.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2>25+ Hàng thanh toán </h2>
                            &nbsp;
                            <h1> Luật chơi </h1>
                            &nbsp;
                            <p>- Một đơn vị cược (giá trị đồng xu) có thể được chọn bằng cách nhấn vào Change denomination (thay đổi đơn vị cược) ở phía
                                góc trái bên dưới màn hình.
                                <br />
                                <br /> - Hàng cược được chọn bằng cách nhấn vào Bet per Line (số cược cho một hàng). Mỗi nhấn sẽ cộng thêm vào một xu vào hàng
                                cược. Khi đạt được số lượng tối đa (10 xu của đơn vị cược đã chọn), nhấn lại vào nút đó để bắt đầu lại hàng cược với
                                một xu.
                                <br />
                                <br />
                                <br /> -Hàng thanh toán được chọn bằng cách nhấn vào nút Lines. Mỗi lần nhấn vào sẽ kích hoạt một hàng thanh toán. Khi tất
                                cả hàng thanh toán được kích hoạt, nhấn lại vào nút này để bắt đầu kích hoạt lại một hàng thanh toán. Hàng thanh toán
                                cũng có thể được kích hoạt bằng cách dùng những nút số ở phía các trục quay. Chọn một hàng thanh toán cao sẽ bao gồm
                                tất cả các hàng thanh toán thấp hơn. Ví dụ, chọn hàng thanh toán 6 sẽ bao gồm hàng thanh toán từ 1 tới 5. Nhấn vào Bet
                                Max (cược tối đa) sẽ kích hoạt tất cả các hàng thanh toán với cược tối đa cho một hàng và bắt đầu quay trục quay.
                                <br
                                />
                                <br />
                                <br /> - Tổng số cược một vòng chơi = Cược của một hàng X số hàng thanh toán kích hoạt.
                                <br />
                                <br /> - Nhấn nút Spin (quay)để quay các trục quay với số hàng đã chọn và số hàng cược. Trong khi quay thì nút Spin sẽ chuyển
                                thành nút Stop (dừng). Nhấn vào Stop để kết thúc vòng quay và hiển thị ngay kết của của vòng quay.
                                <br />
                                <br /> - Các trục quay cũng có thể được quay bằng cách sử dụng tính năng tự động quay (Auto Start). Nhấn + hoặc – bên trên
                                nút tự động quay để chọn số vòng quay tự động. Nhấn vào nút Auto Start để bắt đầu quay. Nút Auto Start sẽ chuyển thành
                                Stop trong suốt chế độ tự động quay. Chế độ tự động quay kết thúc khi quay đủ số vòng quay tự động được chọn bởi người
                                chơi, hoặc khi ngườ chơi nhấn dừng lại (Stop).
                                <br />
                                <br /> - Tiền thắng sẽ được tính theo bảng thanh toán. Wins are calculated according to the paytable. Thắng theo hàng = hàng
                                cược X bội số theo bảng thanh toán. Thắng phân tán = tổng số cược X bội số theo bảng thanh toán. Có thể truy cập bảnh
                                thanh toán thông qua trang Info (thông tin).
                                <br />
                                <br /> - Với hàng thanh toán cho trước, chỉ kết hợp thắng của hàng thanh toán cao nhất được cộng lại đồng thời khi thắng trên
                                hàng thanh toán khác.
                                <br />
                                <br /> - Trong trường hợp thắng vòng quay, mục Win sẽ hiển thị tiền thắng đã được tính. Biểu tượng thắng có thể được dùng lại
                                bằng cách nhấn vào bất kì vị trí nào trên màn hình.
                                <br />
                                <br /> - Hàng thanh toán thắng và tổng thắng cũng được hiển thị bên dưới trục quay hoặc cửa sổ trò chơi.
                                <br />
                                <br /> - Một chiến thắng sẽ kích hoạt nút Gamble mà khi nhấn vào sẽ bắt đầu tính năng Gamble. Thông tin về các tính năng Gamble
                                có thể được tìm thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Trang thông tin</h1>
                            &nbsp;
                            <p>- Nhấp vào nút Info sẽ mở ra màn hình tham khảo mô tả các thành phần trò chơi khác nhau. Nhấn vào nút mũi tên ở góc dưới
                                bên phải màn hình cho phép điều hướng giữa các màn hình thông tin khác nhau.
                                <br />
                                <br /> ► Màn hình bảng thanh toán hiển thị tất cả các kết hợp thắng. Nếu mở ra sau một vòng quay thắng, các kết hợp thắng (số
                                lượng biểu tượng và bội số) sẽ được tô đậm và nhấp nháy.
                                <br /> ► Màn hình các trò chơi miễn phí mô tả các biểu tượng kết hợp cần có để truy cập được vào tính năng trò chơi miễn phí
                                đồng thời mô tả luật chơi của các trò chơi miễn phí.
                                <br />- Màn hình Gamble miêu tả cách nhân đôi chiến thắng bằng các cược với họ và miêu tả luật nhân đôi.
                                <br />-Nhấn vào xem bảng thanh toán trong trang bảng thanh toán sẽ mở ra màn hình thể hiện tất cả các kết hợp hàng thanh toán
                                có thể có. Nhấn ẩn bảng thanh toán (hide paylines) để đóng lại màn hình và quay về trang bảng thanh toán
                                <br /> - Nhấn Quay lại (Back) để thoát khỏi màn hình và quay về trò chơi.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> HÀNG THANH TOÁN </h1>
                            &nbsp;
                            <p>- Các hàng thanh toán kích hoạt đưuọc đại diện bởi những hàng xuất hiện trên trục quay. Hàng thanh toán có thể được kích
                                hoạt và hình dáng của chúng thể hiện bằng cách liên tục nhấn vào nút Lines.
                                <br />
                                <br /> - Chỉ những hàng thanh toán đã kích hoạt mới có thể chiến thắng.
                                <br />
                                <br /> - Có một sự khác biệt giữa hàng cược và tổng cược. Hàng cược cho thấy số tiền cược cho một hành thanh toán. Tổng cược
                                cho thấy tổng số cược cho một vòng chơi. Tiền thanh toán được thể hiện trong bảng thanh toán sẽ được nhân bởi hàng cược.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> THANH TOÁN </h1>
                            &nbsp;
                            <p>- Thanh toán được lấy danh sách từ bảng thanh toán. Để tìm ra số tiền thắng phù hợp, hàng cược phải nhân lên với bội số thanh
                                toán.
                                <br />
                                <br /> - Nếu hai kết hợp hàng thanh toán cùng xảy ra trên một hàng, kết hợp cao hơn sẽ được thanh toán. Nếu có hơn một hàng
                                thanh toán đã kích hoạt có kết hợp thắng, tiền thắng sẽ được cộng thêm vào.
                                <br />
                                <br /> - Kết hợp thắng phải tính từ bên trái trục quay và các biểu tượng phải ở vị trí liên tiếp.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                            Còn tiếp tục.
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                        <h2>Đa vòng quay</h2>
                            &nbsp;
                            <h1> Luật chơi </h1>
                            <p>- Một đơn vị cược (giá trị đồng xu) có thể được chọn bằng cách nhấn vào Change denomination (thay đổi đơn vị cược) ở phía
                                góc trái bên dưới màn hình.
                                <br />
                                <br /> - Hàng cược được chọn bằng cách nhấn vào Bet per Line (số cược cho một hàng). Mỗi nhấn sẽ cộng thêm vào một xu vào hàng
                                cược. Khi đạt được số lượng tối đa (10 xu của đơn vị cược đã chọn), nhấn lại vào nút đó để bắt đầu lại hàng cược với
                                một xu.
                                <br />
                                <br />
                                <br /> -Hàng thanh toán được chọn bằng cách nhấn vào nút Lines. Mỗi lần nhấn vào sẽ kích hoạt một hàng thanh toán. Khi tất
                                cả hàng thanh toán được kích hoạt, nhấn lại vào nút này để bắt đầu kích hoạt lại một hàng thanh toán. Hàng thanh toán
                                cũng có thể được kích hoạt bằng cách dùng những nút số ở phía các trục quay. Chọn một hàng thanh toán cao sẽ bao gồm
                                tất cả các hàng thanh toán thấp hơn. Ví dụ, chọn hàng thanh toán 6 sẽ bao gồm hàng thanh toán từ 1 tới 5. Nhấn vào Bet
                                Max (cược tối đa) sẽ kích hoạt tất cả các hàng thanh toán với cược tối đa cho một hàng và bắt đầu quay trục quay.
                                <br
                                />
                                <br />
                                <br /> - Tổng số cược một vòng chơi = Cược của một hàng X số hàng thanh toán kích hoạt.
                                <br />
                                <br /> - Nhấn nút Spin (quay)để quay các trục quay với số hàng đã chọn và số hàng cược. Trong khi quay thì nút Spin sẽ chuyển
                                thành nút Stop (dừng). Nhấn vào Stop để kết thúc vòng quay và hiển thị ngay kết của của vòng quay.
                                <br />
                                <br /> - Các trục quay cũng có thể được quay bằng cách sử dụng tính năng tự động quay (Auto Start). Nhấn + hoặc – bên trên
                                nút tự động quay để chọn số vòng quay tự động. Nhấn vào nút Auto Start để bắt đầu quay. Nút Auto Start sẽ chuyển thành
                                Stop trong suốt chế độ tự động quay. Chế độ tự động quay kết thúc khi quay đủ số vòng quay tự động được chọn bởi người
                                chơi, hoặc khi ngườ chơi nhấn dừng lại (Stop).
                                <br />
                                <br /> - Tiền thắng sẽ được tính theo bảng thanh toán. Wins are calculated according to the paytable. Thắng theo hàng = hàng
                                cược X bội số theo bảng thanh toán. Thắng phân tán = tổng số cược X bội số theo bảng thanh toán. Có thể truy cập bảnh
                                thanh toán thông qua trang Info (thông tin).
                                <br />
                                <br /> - Với hàng thanh toán cho trước, chỉ kết hợp thắng của hàng thanh toán cao nhất được cộng lại đồng thời khi thắng trên
                                hàng thanh toán khác.
                                <br />
                                <br /> - Trong trường hợp thắng vòng quay, mục Win sẽ hiển thị tiền thắng đã được tính. Biểu tượng thắng có thể được dùng lại
                                bằng cách nhấn vào bất kì vị trí nào trên màn hình.
                                <br />
                                <br /> - Hàng thanh toán thắng và tổng thắng cũng được hiển thị bên dưới trục quay hoặc cửa sổ trò chơi.
                                <br />
                                <br /> - Một chiến thắng sẽ kích hoạt nút Gamble mà khi nhấn vào sẽ bắt đầu tính năng Gamble. Thông tin về các tính năng Gamble
                                có thể được tìm thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Trang thông tin</h1>
                            &nbsp;
                            <p>- Nhấp vào nút Info sẽ mở ra màn hình tham khảo mô tả các thành phần trò chơi khác nhau. Nhấn vào nút mũi tên ở góc dưới
                                bên phải màn hình cho phép điều hướng giữa các màn hình thông tin khác nhau.
                                <br />
                                <br /> ► Màn hình bảng thanh toán hiển thị tất cả các kết hợp thắng. Nếu mở ra sau một vòng quay thắng, các kết hợp thắng (số
                                lượng biểu tượng và bội số) sẽ được tô đậm và nhấp nháy.
                                <br /> ► Màn hình các trò chơi miễn phí mô tả các biểu tượng kết hợp cần có để truy cập được vào tính năng trò chơi miễn phí
                                đồng thời mô tả luật chơi của các trò chơi miễn phí.
                                <br />- Màn hình Gamble miêu tả cách nhân đôi chiến thắng bằng các cược với họ và miêu tả luật nhân đôi.
                                <br />-Nhấn vào xem bảng thanh toán trong trang bảng thanh toán sẽ mở ra màn hình thể hiện tất cả các kết hợp hàng thanh toán
                                có thể có. Nhấn ẩn bảng thanh toán (hide paylines) để đóng lại màn hình và quay về trang bảng thanh toán
                                <br /> - Nhấn Quay lại (Back) để thoát khỏi màn hình và quay về trò chơi.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> HÀNG THANH TOÁN </h1>
                            &nbsp;
                            <p>- Các hàng thanh toán kích hoạt đưuọc đại diện bởi những hàng xuất hiện trên trục quay. Hàng thanh toán có thể được kích
                                hoạt và hình dáng của chúng thể hiện bằng cách liên tục nhấn vào nút Lines.
                                <br />
                                <br /> - Chỉ những hàng thanh toán đã kích hoạt mới có thể chiến thắng.
                                <br />
                                <br /> - Có một sự khác biệt giữa hàng cược và tổng cược. Hàng cược cho thấy số tiền cược cho một hành thanh toán. Tổng cược
                                cho thấy tổng số cược cho một vòng chơi. Tiền thanh toán được thể hiện trong bảng thanh toán sẽ được nhân bởi hàng cược.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
                            <br />
                            <br /> &nbsp;
                            <h1> THANH TOÁN </h1>
                            &nbsp;
                            <p>- Thanh toán được lấy danh sách từ bảng thanh toán. Để tìm ra số tiền thắng phù hợp, hàng cược phải nhân lên với bội số thanh
                                toán.
                                <br />
                                <br /> - Nếu hai kết hợp hàng thanh toán cùng xảy ra trên một hàng, kết hợp cao hơn sẽ được thanh toán. Nếu có hơn một hàng
                                thanh toán đã kích hoạt có kết hợp thắng, tiền thắng sẽ được cộng thêm vào.
                                <br />
                                <br /> - Kết hợp thắng phải tính từ bên trái trục quay và các biểu tượng phải ở vị trí liên tiếp.
                                <br />
                                <br /> - Biêu tượng Phân tán (Scatter symbol) là một ngoại lệ của luật chơi. Thông tin thêm về biểu tượng phân tán có thể tìm
                                thấy bên dưới.</p>
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


GameRuleOneVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleOneVn))));