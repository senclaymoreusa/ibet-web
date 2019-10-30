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

export class BaijialeVn extends React.Component {
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
                                <a href="/vn/for_member">Nguyên tắc Casino >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>Super 6 Baccarat</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>Baccarat truyền thống</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a>Super Baccarat</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a>Baccarat Cặp</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a>Baccarat 14 người chơi</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)}>
                                <a>Classic Baccarat</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)}>
                                <a>VIP Baccarat</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} onClick={this.onClick.bind(this,8)}>
                                <a>Bid Baccarat</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} onClick={this.onClick.bind(this,9)}>
                                <a>Baccarat nhiều bàn chơi</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} onClick={this.onClick.bind(this,10)}>
                                <a>Dragon Bonus Baccarat</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} onClick={this.onClick.bind(this,11)}>
                                <a>Playboy Baccarat</a>
                            </li>
                            <li className={this.state.current === 12 ? "Active" : ""} onClick={this.onClick.bind(this,12)}>
                                <a>Points Baccarat</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Super 6 Baccarat</h2>
                            &nbsp;
                            <p> Bắt nguồn từ Ý vào những năm 1500 và được phổ biến tại các nước còn lại tại Châu Âu từ thế kỷ 19, Baccarat được coi là trò
                                chơi của các vị Vua. Baccarat còn được biết như là Lucky 9 (Số 9 may mắn) và Punto Banco (không có gì). Có hai biến thể
                                của Baccarat có thể chơi tại Resort World Manila, Mini Bacaccarat và Super Six. Mục đính của Trò chơi là đặt cược vào
                                ván bài có tổng 9 điểm hoặc gần 9 điểm nhất. Bạn có thể đặt cược tại cửa Người chơi, Nhà Cái và Hòa.
                                <br />
                                <br /> -Các sàn AG, EA, OPUS, MG
                                <br />
                                <br /> - Cách chơi
                                <br /> 1. Mục đính của Trò chơi là đặt cược vào ván bài có tổng 9 điểm hoặc gần 9 điểm nhất.
                                <br /> 2. Người chơi có thể đặt cược vào: “NGƯỜI CHƠI” hoặc ”NHÀ CÁI” với các lựa chọn cược thêm cho Người Chơi Pair /Nhà Cái
                                Pair (cược 2 lá bài có số điểm bằng nhau), Hòa hoặc Super Six theo mức tối thiểu và tối đa của bàn cược.
                                <br /> 3. Người chia bài chia 2 lá bài cho cửa”Người chơi” và”Nhà Cái”
                                <br /> Người có đặc quyền cao nhất có quyền yêu cầu hạn chế chia các lá bài hoặc để người chia bài thay mặt mở lá bài. Đại
                                diện là Người chơi/Nhà Cái hoặc lá bài thứ 3 sẽ được chia phụ thuộc vào từng hoàn cảnh ván bài (xem thông tin mở rộng
                                để hiểu thêm).
                                <br /> 5. Người chia bài thông báo người thắng sau khi các con bài của 2 bên đã được tiết lộ.
                                <br /> ♦ Các cược thắng tại Người chơi hay Nhà Cược được thanh toán tiền rõ rang.
                                <br /> ♦ Super Six thắng thanh toán tỷ lệ 12 cho 1 nếu Nhà Cái thắng 6 điểm và tất cả các cược tại tùy chọn Nhà Cái trả 1 nửa.
                                <br /> ♦ Hòa thanh toán tỷ lệ 8 cho 1 if Nếu cửa Người chơi và Nhà Cái có điểm của ván bài giống nhau.
                                <br /> ♦ Pair thanh toán tỷ lệ 11 cho 1 nếu các lá bài đầu tiên cho Người Chơi hoặc Nhà Cái có số điểm giống nhau.
                                <br /> ♦ Đặt cược vào các loại cược sẽ có nhiều cơ hội thắng hơn.”CƯỢC CÀNG NHIỀU,THẮNG CÀNG NHIỀU”
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}> 
                        <h2> Baccarat Truyền Thống</h2>
                            <p>Sử dụng 8 bộ bài 52 lá trong trò chơi này:
                                <br />
                                <br /> Người chia bài chia cho “Banker” và “Player”. Ai có được tổng là 8 hoặc 9 trong ván, được gọi là “Thắng tự nhiên” và
                                trò chơi kết thúc. Không cần chia lá bài thứ 3. Có 9 lựa chọn để bạn đặt cược: Banker (Nhà cái), Player (Người chơi),
                                Tie (Hòa), Banker pair, Player pair, Either Pair, Perfect pair, Big, Small. Sau khi 2 lá bài được chia ra, lá bài thứ
                                3 sẽ được chia theo luật chia bài thứ 3.
                                <br />
                                <br /> - Luật chia bài thứ 3
                                <br /> Player
                                <br /> Tổng số điểm là 0, chia lá bài thứ 3 Tổng số điểm là 1, chia lá bài thứ 3 Tổng số điểm là 2, chia lá bài thứ 3 Tổng
                                số điểm là 3, chia lá bài thứ 3 Tổng số điểm là 4, chia lá bài thứ 3 Tổng số điểm là 5, chia lá bài thứ 3 Tổng số điểm
                                là 6, dừng Tổng số điểm là 7, dừng Tổng số điểm là 8, “thắng tự nhiên” Tổng số điểm là 9, “thắng tự nhiên”
                                <br/> Banker
                                <br /> Tổng điểm là 0, chia lá bài thứ 3
                                <br /> Tổng điểm là 1, chia lá bài thứ 3
                                <br /> Tổng điểm là 2, chia lá bài thứ 3
                                <br /> Tổng điểm là 3, nếu Player rút lá 8 thì Banker dừng
                                <br /> Tổng điểm là 4, nếu Player rút lá 0, Ace, 8, 9 thì Banker dừng
                                <br /> Tổng điểm là 5, nếu Player rút lá 0, Ace, 2, 3, 8, 9 thì Banker dừng
                                <br /> Tổng điểm là 6, nếu Player rút lá 0, Ace, 2, 3, 4, 5, 8, 9 thì Banker dừng
                                <br /> Tổng số điểm là 7, dừng
                                <br/> Tổng số điểm là 8, “thắng tự nhiên”
                                <br/> Tổng số điểm là 9, “thắng tự nhiên”
                                <br/> - Hoàn trả
                                <br /> Đặt cược vào Banker Tỷ lệ cược 1 ： 0.95
                                <br /> Đặt cược vào Player Tỷ lệ cược 1 ： 1
                                <br /> Đặt cược vào Tie Tỷ lệ cược 1 ： 8
                                <br /> Đặt cược vào Banker Pair Tỷ lệ cược 1 ： 11
                                <br /> Đặt cược vào Player Pair Tỷ lệ cược 1 ： 11
                                <br /> Đặt cược vào Either Pair Tỷ lệ cược 1 ： 5
                                <br /> Đặt cược vào Prefect Pair Tỷ lệ cược 1 ： 25
                                <br /> Đặt cược vào Big Tỷ lệ cược 1 ： 0.54
                                <br /> Đặt cược vào Small Tỷ lệ cược 1 ： 1.50
                                <br /> ♦ Đối với mỗi ván có kết quả Hòa, các cược đặt cho Banker hoặc Player sẽ hoàn trả về cho người.
                                <br /> ♦ "Banker Pair" Nghĩa là 2 lá bài đầu tiên của Banker là một đôi.
                                <br /> ♦"Player Pair" Nghĩa là 2 lá bài đầu tiên của Player là một đôi.
                                <br /> ♦"Either Pair" Nghĩa là 2 lá đầu tiên của Player hoặc Banker là một đôi.
                                <br /> ♦"Prefect Pair" Nghĩa là 2 lá đầu tiên của Banker hoặc Player đều là đôi cùng màu
                                <br /> ♦"Big" Nghĩa là khi kết thúc ván bài có tổng số 5 hoặc 6 lá
                                <br /> ♦ "Small" Nghĩa là khi kết thúc ván bài có tổng số 4 lá.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2>Super Baccarat</h2>
                            &nbsp;
                            <p>Không có nhiều khác biệt giữa Baccarat truyền thống và Super Baccarat. Điểm khác biệt duy nhất trong Super Baccarat là có
                                hơn sáu cược đặc biệt:
                                <br />
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2> Baccarat Cặp </h2>
                            &nbsp;
                            <p> “Baccarat Cặp” là một cược bên của Punto Banco, cược này sẽ thắng nếu hai lá bài đầu tiên được chia cho Player hoặc Banker
                                (cược bởi người chơi) tạo thành một cặp (ví dụ 10,10 hoặc K,K) và thắng tất cả cá kể quả khác. Trò chơi được chơi như
                                bình thường nhung người chơi cũng có thể cược cho Player Pair, Banker Pair hoặc cả hai. Người chơi có thể cược thêm vào,
                                hoặc cược thay thể cho cược Player hoặc Banker.
                                <br />
                                <br /> ♦ Tỉ lệ thanh toán thông thường: Cặp chiến thắng 11:1
                                <br /> ♦ Chi tiết hoa hồng của nhà cái trong cược bên:
                                <br /> 8 Bộ bài – Thanh toán 11 : 1 – Xác suất của cặp là 7.47% -- Tỉ lệ hoa hồng 10.36%
                                <br /> 6 Bộ bài -- Thanh toán 11 : 1 -- Xác suất của cặp là 7.40% -- Tỉ lệ hoa hồng 11.25% </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                        <h2>Baccarat 14 người chơi</h2>
                            <p>Baccarat 14 người chơi có cùng luật chơi với Baccarat nhưng lại thú
                                vị hơn và khiến người chơi có thể cảm thấy như họ đang thật sự chơi ở casino thực tế để có thể tận hưởng niềm vui nhiều
                                hơn.</p>
                            <p>♦ Các tính năng trò chơi</p>
                            <p>♦ Chức năng trả giá để có thể say mê như
                                ở casino thực tế.</p>
                            <p>♦ Một bàn chơi lên tới 14 người có thể cược
                                và tương tác trực tuyến cùng một lúc.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 6}>
                        <h2> Classic Baccarat </h2>
                            &nbsp;
                            <p> Baccarat Cổ điển là trò đánh bài được chơi đấu lại nhà cái. Mục đích của trò chơi là dự đoán kết quả của những lá bài được
                                chia cho player và banker. Tất cả tay chơi sẽ có điểm bằng hoặc nhỏ hơn chín, hãy nhớ rằng tất cả lá bài trị giá 10 điểm
                                được tính bằng 0 và lá Ace tính bằng 1. Khi tổng giá trị các lá bài lớn hơn 10, 10 sẽ được trừ đi và số điểm có giá trị
                                sẽ bằng hoặc nhỏ hơn chín. Để chơi, bạn sẽ phải đặt cược cho Player hoặc Banker hoặc Tie. Bạn không thể cược hơn một
                                trong số đó. Luật rút bài có thể xem trong mục Luật chơi bên dưới. Bên thắng sẽ là bên có điểm gần nhất với chín sau
                                khi được chia bài. Bên thắng sẽ được thanh toán theo như bẳng thanh toán.
                                <br />
                                <br /> - Thông tin
                                <br /> 1. 6 bộ bài thông thường với mỗi bộ 52 lá bài và không có joker sẽ được dùng. 2. Bài sẽ được đảo trước mỗi trò chơi.
                                3. Tất cả các chất (bích, cơ, chuồn, rô) đều không phân biệt. 4. Luật chơi và thánh toán đều giống nhau ở cả phiên bản
                                tiền thật và phiên bản tiền chơi. 5. Tất cả những lá bài 10 điểm hoặc tổng điểm bằng 10 đều được tính bằng 0. Ví dụ,
                                nếu lá bảy và sáu được chia, tổng là 13, 10 điểm sẽ được trừ đi nên tổng điểm sẽ là ba.
                                <br /> - Luật chơi
                                <br /> 1. Nếu cả player hoặc banker có tổng điểm là 8 hoặc 9 thì đều dừng lại. Luật này sẽ bao gồm tất cả những luật chơi khác.
                                2. Nếu player có tổng điểm là 5 hoặc nhỏ hơn thì player sẽ rút tiếp, nếu không player sẽ dừng lại. 3. Nếu player dừng
                                lại, banker sẽ rút tiếp trên tổng điểm là 5 hoặc nhỏ hơn.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 7}>
                        <h2> VIP Baccarat </h2>
                            &nbsp;
                            <p> VIP Baccarat cơ bản là phiên bản với tiền cược cao hơn của trò chơi gốc, nơi mà người chơi có thể đặt những cược lớn nhất
                                cho cả Player và Banker để có cơ hội đạt mức tối đa các thẻ ẩn dấu và biết được kết quả trước những người chơi khác.
                                Ngoài cược cho Player, Banker hoặc Tie, VIP Baccarat cung cấp sáu cược bên khác để cung cấp cho khách hàng thêm nhiều
                                cơ hội đặt cược.
                                <br />
                                <br /> - Thông tin
                                <br /> Có tổng cộng sáu kích thước chip được cung cấp, bạn chỉ cần nhấn vào chúng sau đó đặt cược vào Player, Tie hoặc Banker.
                                Trong trường hợp bạn muốn cược thêm một số cược bên, nhấn vào Pair ở góc bên phải và cược Player Pair và Banker Pair
                                sẽ được thêm vào ba loại cược truyền thống.
                                <br /> Bảng lựa chọn của trò chơi sẽ được tìm thấy phía dưới màn hình bao gồm các tính năng rất hữu dụng cho phép người chơi
                                có thể điều chỉnh video và âm lượng, chuyển đổi giữ quan sát cổ điển và 3D, chat với người chia bài và ghi nhận lịch
                                sử trò chơi.
                                <br /> Lộ trình hiển thị ở góc trên bên trái chứa các chỉ số Big Road, Big Eye Boy, Small Road và Cockroac giúp người chơi
                                có bắt được các xu hướng gần nhất, mặc dù bạn có thể cần một số trợ giúp để hiểu được những con số này thực sự có nghĩa
                                gì.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 8}>
                        <h2> Bid Baccarat </h2>
                            &nbsp;
                            <p> Bid Baccarat là một trong những trò chơi cổ nhất và phổ biến nhất trong các casino trên khắp thế giới. Hơn nữa, tính năng
                                mới được thêm vào "Wait Me" mang lại cho người chơi trải nghiện chơi game đích thực hơn bao giờ hết! Một cơ hội tuyệt
                                vời hơn để nâng cao kinh nghiệm của toàn bộ người chơi bằng cách mang lại sự tương tác bằng chat trong thời gian thực
                                tế từ sàn casino đến thiết bị của người chơi.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 9}>
                        <h2>Multi-game Baccarat</h2>
                            <p>Trong trò chơi baccarat trực tuyến điển hình trong một casino, một người chơi có thể chuyển qua bàn chơi khác. Người chơi
                                có thể làm vậy khi đang chơi Oriental Game nhưng để giữ người chơi khỏi việc nhảy qua bàn chơi khác, chúng tối có tính
                                năng đa trò chơi. Tại đây, người chơi có thể chọn chơi tới sáu (6) bàn baccarat khác nhau ở cùng một thời điểm. Điểm
                                tốt của tính năng này là mọi bàn chơi trong nhóm vẫn giữ nguyên mọi tính năng như bàn chơi đơn; ví dụ, thời gian đặt
                                cược, bảng chỉ đường, tính năng Super Six, hiển thị bài,… Baccarat đa bàn chơi của Oriental Game có hai loại: baccarat
                                3 bàn chơi và baccarat 6 bàn chơi nói trên.
                                <br />
                                <br /> - Baccarat nhiều bàn chơi: AG, OPUS</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 10}>
                        <h2>Dragon Bonus Baccarat</h2>
                            <p>Dragon Bonus là một lựa chọn cược bên được cung cấp trong bàn Baccarat định sẵn. Một cược Dragon Bonus thắng nếu Player hoặc
                                Banker có điểm tổng tự nhiên cao hơn bên còn lại, hoặc nếu điểm tổng của bên thắng vượt qua bên còn lại 4 điểm hoặc hơn
                                4 điểm.
                                <br /> - 1. Khi bên bạn chọn thắng tự nhiên.
                                <br /> - 2. Khi bên bạn không chọn thắng cách biệt ít nhất bốn điểm.
                                <br /> - 3. Khi bên Player và Banker cách biệt ba điểm hoặc ít hơn sẽ được coi là thua.
                                <br /> - Dragon Bonus Baccarat: AG, EA, MG
                                <br />
                                <br /> - Chú ý
                                <br /> 1. Khi đạt tới vòng chơi 31 hoặc các vòng chơi sau khi chơi hết một cỗ bài thì không được phép cược các cược: Player
                                Dragon Bonus, Banker Dragon Bonus, Big và Small.
                                <br /> 2. Cược tối thiểu và tối đa dựa trên giới hạn bàn chơi. Người chơi có thể đặt cược trong giới hạn cược của loại bàn
                                chơi và giới hạn đặt cược của bản thân người chơi, hãy liên hệ bộ phận chăm sóc khách hàng để biêt rõ hơn.
                                <br /> 3. Khi bài đang được chia bởi người chia bài, hệ thống có thể hoặc không đọc được bài, nếu hệ thống không đọc được bài,
                                người chia bài sẽ quét bài lại cho đến khi hệ thống đọc được (nếu hệ thống vẫn không đọc được, vòng chơi đó sẽ được hủy
                                và cược sẽ được trả về).
                                <br /> 4. Trong trường hợp thanh toán sai, cược sẽ được thanh toán lại dựa trên kết quả của video.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 11}>
                        <h2>Playboy Baccarat</h2>
                            <p>Nếu bạn đang tìm kiếm sự hồi hộp cuối cùng trong khi chơi trò chơi bài phổ biến nhất ở châu Á, bạn phải thử tay tại Playboy
                                Live Baccarat. Trò chơi được chơi ở các bảng độc quyền trên sòng casino ở Toronto, nơi các chú thỏ Playboy chính hiệu
                                giả định vai trò của các tên cướp nhà băng.
                                <br />
                                <br /> - Playboy Baccarat: MG
                                <br />
                                <br /> - Các bàn trò chơi Baccarat của Playboy trông sang trọng và có thể chứa tối đa bảy người chơi cùng một lúc, trong khi
                                bạn có tùy chọn để chơi ở nhiều bảng cùng một lúc bằng cách nhấn vào nút Thêm bàn. Một khi bạn đã chọn kích thước chip
                                phù hợp, hãy nhấp vào P hoặc B ở phía trước vị trí ngồi của bạn để đặt cược vào Người chơi hoặc Nhà cái tương ứng.
                                <br
                                /> - Mỗi một bảng này cũng chứa một hộp Tiền thưởng nhỏ, nơi bạn có thể đặt cược Dragon Bonus. Bên cược xem bạn đặt cược
                                vào biên lợi nhuận của một trong hai bên là Người chơi hoặc Nhà cái, với khoản thanh toán có khi lên tới 30 và 1. Người
                                chơi hòa và Nhà cái hòa thắng cược lên tới 11-1, trong khi hòa trả từ 8 đến 1.
                                <br /> - Lịch sử đặt tay và Bản đồ đường chuẩn được hiển thị bên trái và bên phải của người tổ chức trò chơi, ở phần trên của
                                màn hình trò chơi. Trong khi đó, tất cả các tùy chọn trò chơi quan trọng có thể được tìm thấy dưới thẻ Menu.</p>
                        </div>
                        <div className="centerDetai" hidden={this.state.current !== 12}>
                        <h2> Points Baccarat </h2>
                            &nbsp;
                            <p> Points Baccarat là một dạng khác của “Baccarat không hoa hồng” – Super 6
                                <br/>
                                <br /> - Tính năng hấp dẫn mới: Tỉ lệ cược thời gian thực – Cho thấy tỉ lệ thực sự trong thời gian cược cho [Banker] và [Player],
                                tỉ lệ này được cập nhật mỗi khi một cược đơn được xác nhận.
                                <br /> - Nó thậm chí có nhiều hơn các cược bên được thêm vào cho banker và Player, như là [Banker thắng tự nhiên], [Player
                                thắng tự nhiên], từ [Banker 0 điểm] đến [Banker 9 điểm] và [Player 0 Point] đến [Player 9 điểm].
                                <br /> - Thanh toán điểm cho cược của banker và Player là mặt riêng không liên quan đến thắng thua của trò chơi.
                            </p>
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


BaijialeVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BaijialeVn))));