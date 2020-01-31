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

export class GameRuleThreeVn extends React.Component {
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

    onClick(index, e) {
        e.preventDefault()
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
                                <a href="/vi/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi RNG>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}>Blackjack (Xì-zách)</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(2, e);}}>Roulette</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2> Blackjack( Xì-zách) </h2>
                            &nbsp;
                            <p>- Mục tiêu của bài Blackjack là các lá bài của người chơi phải đạt tới gần 21 điểm so với bài của nhà Cái, nhưng không thể
                                quá 21 điểm (quắc). Trong bài Blackjack, Còn A (Xì) được tính như 1 hoặc 11 điểm, bài tây thì tính là 10 điểm, và các
                                lá bài số tính theo số điểm tương ứng. Nếu trong 2 lá bài đầu tiên người chơi có 1 quân bài A (Xì) và 1 lá bài tương
                                đương 10 điểm, thì người đó đã có Blackjack và thắng cược với tỷ lệ 1.5 lần (nếu đặt 10$,nhận được 25). Nếu các lá bài
                                của người chơi có tổng số điểm gần 21 hơn so với nhà cái,người chơi thắng tiền cược (cược 10$, nhận 20$). Nếu tổng các
                                lá bài của người chơi nhiều hơn 21 điểm, người chơi bị”bust” (bù hoặc quắc) và thua cược. Nếu người chơi và Nhà Cái có
                                tổng điểm các lá bài giống nhau (17 điểm trở lên) , cả 2 đều không thắng cược và cược của người chơi được trả lại kết
                                quả sẽ là “Push” (Hòa). Bài Blackjack phải đạt được số điểm là 21.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Luật chơi</h1>
                            &nbsp;
                            <p>- Nhấp vào thẻ chip tiền cược để đặt cược. Nhấp chuột vào các cửa có sẵn ( vòng tròn cược được sắp xếp theo hình bán nguyệt
                                tại bàn cược). Mỗi cú nhấp chuột vào tiền chip cược tương đương tăng tiền đặt cược của người chơi tính theo giá trị của
                                tiền chip. Người chơi có thể đặt vào 1 cửa duy nhất hoặc có thể cược lên đến 5 cửa cùng 1 lúc. Để giảm tiền cược, nhấp
                                chuột phải vào tiền chip cược để chọn số tiền cược mong muốn.
                                <br />
                                <br /> - Nếu người chơi đang chơi một ván bài tại 1 cửa, nhấp vào chip tiền để tăng tiền cược. Mỗi cú nhấp chuột vào tiền chip
                                cược tương đương tăng tiền đặt cược của người chơi tính theo giá trị của tiền chip, mỗi cú nhấp chuột phải để giảm tiền
                                cược
                                <br />
                                <br /> - Người chơi có thể nhấp vào “Clear Bets” (Làm mới các cược) để xóa các cược tại bàn cược.
                                <br />
                                <br /> - Giới hạn đặt cược tối thiểu và tối đa tại mỗi ván bài phụ thuộc vào cấp độ VIP của người chơi được hiển thị rõ tại
                                bàn chơi. Các giới hạn chỉ áp dụng cho lần cược đầu tiên. Các lựa chon như Split (Tách bài, vv) yêu cầu phải người chơi
                                phải đặt thêm cược dù người chơi đã đặt cược với số tiền tối đa.
                                <br />
                                <br /> - Nhấp vào nút “Deal” (Chia bài) để bắt đầu chia bài. Hai lá bài được chia cho người chơi và nhà Cái. Các lá bài được
                                chia từng lá một tới từng cửa chơi theo mỗi vòng, lá bài thứ nhất được chia cho người chơi. Lá bài cuối cùng sẽ là lá
                                bài úp được chia cho Nhà Cái.
                                <br />
                                <br /> - Nếu người chơi đang chơi tại nhiều cửa chơi, các hành động của từng cửa cược được thực hiện riêng biệt, bắt đầu từ
                                cửa đầu tiên bên phải.
                                <br />
                                <br /> - If the dealer's face up card is an Ace, you are offered insurance. Click the Insurance button to insure against the
                                dealer having Blackjack. Nếu Nhà Cái có lá bài ngửa là quân A (Xì), người chơi có quyền chọn cược “Bảo Hiểm”. Nhấp vào
                                nút Bảo Hiểm để giảm tiền thua cho người chơi khi nhà cái thật sự có BlackJack (Xì-zách)
                                <br />
                                <br /> - Sử dụng các nút sau để chơi: Hit (Rút bài), Stand (Đứng), Double (Cược gấp đôi) và Split (Tách bài)
                                <br />
                                <br /> - Vui lòng lưu ý khi đặt Cược Bảo Hiểm (insurance), Cược gấp đôi (Double) và Tách bài (Split) người chơi được yêu cầu
                                đặt thêm tiền cược. Nếu người chơi không còn đủ tiền cược để tham gia các cược trên, người chơi cần nạp tiền thêm để
                                tham gia.
                                <br />
                                <br /> - Người chơi công khai các là bài úp và các lá bài rút thêm theo luật chơi.
                                <br />
                                <br /> - Các cây bài của người chơi sẽ được so với Nhà Cái.
                                <br />
                                <br /> - Nếu người chơi muốn chơi ván khác, nhấp vào “New Game” (Ván Mới). Cách đặt cược được nêu như thông tin phía trên hoặc
                                nhấp vào Rebet để đặt các cược tương tự tại ván trước tiếp đến nhấp vào nút “Deal”(Chia Bài) để chia bài.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>Nhiều cửa</h1>
                            &nbsp;
                            <p>- Tại chế độ đặt nhiều cửa, người chơi có thể đặt vào các cược nằm trong hình bán nguyệt trên bàn cược. Người chơi có thể
                                đặt cươc chơi tại 1 cửa duy nhất hoặc tối đa là 5 cửa. Mỗi cửa có thể cược các số tiền khác nhau.
                                <br />
                                <br /> - Từng lá bài được chia từng lá một theo thứ tự theo ngược chiều kim đồng hồ bắt đầu từ người ngoài cùng bên phải và
                                Nhà Cái sẽ là người nhận lá bài cuối cùng trong ván bài. Khi các lá bài đã được chia, từng người chơi sẽ chơi các lá
                                bài riêng của mình, bắt đầu từ người chơi ngoài cùng bên phải.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Roulette</h2>
                            &nbsp;
                            <h1>Americal Roulette</h1>
                            <p>- Mục tiêu của trò này là dự đoán chính xác ô số mà quả bóng sẽ lăn vào. Vòng quay Roulette bao gồm các số
                                từ 1 đến 36, xen kẽ nhau là các màu đỏ và đen, cả số 0 và 00 thì màu xanh.</p>
                            <p>Luật chơi</p>
                            <p>- Nhấp vào xu tiền cược (hình đồng xu có số tiền) để lựa chọn trị giá tiền cược muốn đặt.</p>
                            <p>- Nhấp vào con số bạn muốn cược trên bàn Roulette để đặt cược. Mỗi cú nhấp tại khu vực cược sẽ tăng tiền cược tương đương
                                theo trị giá xu tiền cược. </p>
                            <p>Giới hạn đặt cược tối thiểu và tối đa tại mỗi ván bài phụ thuộc vào cấp độ VIP của người chơi. Nếu người chơi đặt cược ít
                                hơn giới hạn tối thiểu, một tin nhắn thông báo về tiền cược chưa đủ sẽ hiện ra và các xu tiền cược tương ứng trên bàn
                                sẽ phát sáng 3 lần. Di chuột hoặc nhấp vào các ký hiệu trên bảng cược để biết thêm các thông tin chi tiết về giới hạn
                                cược cho các vị trí.</p>
                            <p>- Để tăng số tiền cược, chọn xu tiền cược và nhấp vào khu vực cược.</p>
                            <p>- Nhấp chuột phải vào khu vực đặt cược để bỏ bớt xu tiền cược có cùng trị giá đã đặt tại ván cược đó hoặc của cả ván cược
                                nếu đã lựa chọn các xu tiền cược nhiều hơn ván cược đã đặt.</p>
                            <p>- Bạn có thể đặt nhiều xu tiền cược cùng 1 lúc tại nhiều ô cược khác nhau.</p>
                            <p>- Sau khi đặt cược, Nhấp vào “Spin” (Quay) để quay bóng. Nhấp vào “Clear Bets” để bỏ các cược đã đặt trên bàn. Sau khi quay
                                bóng, click vào ”re-bet” (cược lại) để cược lại các cược đã giống tại ván cược trước và nhấp vào Spin để tiếp tục quay
                                bóng. Nhấp vào Double (Cược gấp đôi) để cược gấp đôi cược mà bạn đã đặt tại bàn.</p>
                            <p>- Các cược thắng sẽ được hiển thị trên bàn. Người chơi có thể xóa hoặc giữ lại tại bàn cho ván chơi tiếp theo. Sòng bài của
                                Nhà Cái Letou có quyền đình chỉ chức năng này của bàn cược. Nếu vậy, các cược thắng sẽ được lại cho người chơi với tiền
                                thắng.</p>
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


GameRuleThreeVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleThreeVn))));