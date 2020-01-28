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

export class LotteryRuleTwoVn extends React.Component {
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
                                <a href="/vi/for_member">Luật chơi Sổ xố >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">KENO Introduction</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">Luật Chơi KENO</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    {/* <!-- please only edit HelperCenterDetail's contain --> */}
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>KENO</h2>
                            &nbsp;
                            <p>Keno là một trò cá cược xổ số được chơi ở các sòng bài hiện đại và cũng được cung cấp như một trò chơi vé số. Người chơi
                                đặt cược bằng cách chọn các số từ 1 tới (thường là) 80. Sau khi tất cả người chơi đã đặt cược, 20 số (một số phiên bản
                                rút ít hơn) được rút tự động, hoặc với máy móng, máy này giống máy được dùng trong xổ số là bingo, hoặc với phần mềm
                                chọn số tự động.
                                <br />
                                <br /> Từ “Keno” có nguồn gốc từ Pháp hoặc La-tinh nhưng được dùng ở tất cả các nơi tổ chức trò chơi này ở Trung Quốc. Truyền
                                thuyết kể rằng sự phát minh ra trò chơi đã cứu một thành phố cổ khỏi chiến tranh. Tại Trung Quốc thời đó, ý tưởng tổ
                                chức chơi xổ số ở nơi công cộng không được cho phép cho tới cuối thế kỉ 19. Cuối cùng, người Trung Quốc nhập cư đã giới
                                thiệu keno đến phương Tây khi họ băng qua Thái Bình Dương để giúp xây dựng đường tàu lửa xuyên châu lục đầu tiên vào
                                thế kỉ 19. Vào năm 1866 trò chơi trở thành trò cá cược phổ biến rộng rãi khắp Houston, Texas dưới tên 'Keno'.
                                <br />
                                <br /> Thanh toán của Keno dựa trên số lượng con số mà người chơi đã chọn và bao nhiêu trong những số đó trùng, chúng được
                                nhân lên bởi tỉ lệ cược của người chơi với “tỉ lệ cơ sở” của bảng thanh toán, mặc dù một số bảng thanh toán trả cho cược
                                trùng ít hơn số điểm. Ví dụ, hiếm khi thấy casino trả $500 hay thậm chí $1,000 cho 1 cược trùng của 0 trong số 20 của
                                20 vé với một cược $5.00. Cách thanh toán khá đa dạng bởi các sòng bài. Đa số các casino cho phép cược 1 đến 20 số nhưng
                                một số sẽ giới hạn lựa chọn chỉ từ 1 tới 10, 12 và 15 số, hoặc “điểm” như là cách gọi các số được chọn của những người
                                đam mê keno.
                                <br />
                                <br /> LETOU KENO được dựa trên luật chơi của chính phủ Trung Quốc, Hàn Quốc, Canada, Slovakia  Malta và có tất cả 7 kết
                                hợp theo thứ tự: Lớn/Nhỏ/Chẵn/Lẻ; Tổng số Chẵn/Lẻ/ Trên/Dưới; PB; B/S O/E Cược Xiên; B/S lx / Ngũ Hành; Cược Xiên
                                Tổng Hợp; Ngọc Cầu, so sánh với sự kết hợp duy nhất của KENO ban hành bởi chính phủ.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Luật Chơi KENO</h2>
                            &nbsp;
                            <h1>1. Tài/Xỉu</h1>
                            <p>Tổng giá trị của 20 số là kết quả của trò chơi. Nếu tổng của 20 số là 810, trên 810 là kết quả "Tài" và dưới 810 sẽ là "Xỉu."
                                Ví dụ: Kết quả xổ thưởng: 02,03,07,08,11,16,17,26,29,32,33,35,39,43,50,56,68,72,74 và 80. Tổng giá trị của 20 số là 710.
                                Như vậy, kết quả của trò chơi là "Xỉu" Người chơi đặt cược "Xỉu" thắng. Người chơi đặt cược "Tài" thua.</p>
                            <h1>2. Lẻ/Chẵn</h1>
                            <p>Tổng giá trị của 20 số là kết quả của trò chơi. Một khi tổng giá trị là số lẻ, thì kết quả sẽ là "Lẻ" Một khi tổng giá trị
                                là số chẵn, thì kết quả sẽ là "Chẵn" Ví dụ: Kết quả là: 02,03,07,08,11,16,17,26,29,32,33,35,39,43,50,56,68,72,74 và 80.
                                Tổng giá trị của 20 số là 701. Như vậy, kết quả của trò chơi là "Lẻ". Người chơi đặt cược "Lẻ" thắng. Người chơi đặt
                                cược "Chẵn" thua.</p>
                            <h1>3. Tổng các số Lẻ/Chẵn</h1>
                            <p>Nếu có nhiều số lẻ hơn số chẵn trong 20 số trúng, vậy nên kết quả của trò chơi sẽ là "Lẻ." Các người chơi đặt "Lẻ" sẽ thắng.
                                Ở mặt khác, nếu có nhiều số chẵn hơn số lẻ trong 20 số trúng, vậy nên kết quả của trò chơi sẽ là "Chẵn". Các người chơi
                                đặt "Chẵn" sẽ thắng. Tuy nhiên, nếu có 10 số lẻ và 10 số chẵn, thì trò chơi này sẽ là "Hòa." Các người chơi đặt "Hòa"
                                sẽ thắng.</p>
                            <h1>4. Tổng các số Lớn/Hòa/Nhỏ</h1>
                            <p>Dãy số từ 1-40 sẽ là các số Lớn. 41-80 là các số Nhỏ. Nếu một nửa các số trong 20 số được rút thăm là các số Lớn, thì kết
                                quả của trò chơi sẽ là "Lớn". Nếu có nhiều số Nhỏ, thì kết quả của trò chơi sẽ là "Nhỏ". Nếu có 10 số Trên và 10 số Nhỏ,
                                thì trò chơi này sẽ là "Hòa".</p>
                            <h1>5. Pearl Ball</h1>
                            <p>Pearl Ball là sự lựa chọn số để cược. Luật chơi cho Ngọc Cầu, người chơi tùy chọn trong khoảng từ 1 đến 5 bi số trong phạm
                                vi từ 01 đến 80 bi số và kết hợp lại làm số để cược. Người chơi sẽ so sánh các số được chọn với các số được rút thăm
                                bất kể thứ tự của các số. Tỷ lệ thanh tóan căn cứ vào kết quả của các bi số đôí chiếu trên các bi số đã chọn của người
                                chơi. Các mức thắng sẽ được chia thành "Đặt cược " , "Đặt cược chống lại, "Ăn tất".</p>
                            <h1>6. Cược xiên Tài/Xỉu  Chẵn/Lẻ</h1>
                            <p>Tổng giá trị của 20 số thanh toán là kết quả của trò chơi, và có thể được phân ra là : "Tài  Lẻ", "Xỉu  Lẻ ", "Tài
                                 Chẵn " và " Xỉu  Chẵn." Một tổng giá trị mà hơn 810 và là số lẻ thì kết quả sẽ là "Tài  Lẻ." Một tổng
                                giá trị mà hơn 810 và là số chẵn thì kết quả sẽ là "Tài  Chẵn". Một tổng giá trị mà thấp hơn 810 và là số lẻ thì
                                kết quả sẽ là "Xỉu  Lẻ". Một tổng giá trị mà thấp hơn 810 và là số chẵn thì kết quả sẽ là "Xỉu  Chẵn".</p>
                            <h1>7. Tài/Xỉu Lx / Ngũ Hành</h1>
                            <p>Tài/Xỉu Lx -- Tổng giá trị của 20 số thanh toán là kết quả của trò chơi. Một kết quả lớn hơn 810 sẽ là "Tăng", thấp hơn 810
                                sẽ là "Giảm" và 810 là "Giữ lại". Ví dụ: Khi tổng giá trị của 20 số là 860, thì ở đây tăng thêm 50 điểm. Nếu người chơi
                                cược cho "Tăng" và nếu người chơi thắng, tính toán cho số tiền đặt cược cho mỗi điểm. Nếu thiết lập là 40 VND là 1 điểm,
                                cho chiến thắng 50 điểm, thì số tiền thưởng sẽ là 20 000VND. Nếu người chơi đặt "Giảm," người chơi sẽ thua 20 000VND.
                                Nếu giới hạn trên là 3000 VND, tiền thắng/thua sẽ nhiều nhất là 3000 VND</p>
                            <p>Cược Ngũ Hành (Kim/Mộc/Thủy/Hỏa/Thổ) -- Các Ngũ Hành sau đây và các giá trị tương ứng cung cấp phạm vi liên quan của 20 số
                                với tổng giá trị là: Kim (210~695), Mộc (696~763), Thủy(764~855), Hỏa(856~923), và Thổ(924~1410). Ví dụ: Các con số được
                                xổ thưởng: 01,02,05,09,10,17,18,26,28,33,34,35,41,43,50,57,68,73,76 và 80. Tổng giá trị là 706 mà nằm trong phạm vi (696~763).
                                Suy ra, kết quả là "Mộc". Cược vào "Mộc" thắng trong khi cược vào bốn (4) loại khác sẽ thua.</p>
                            <h1>8. Cược xiên</h1>
                            <p>Người Chơi có thể chọn các loại cược bất kỳ từ bảng đặt.
                                <br />
                                <br /> Những loại cược sau không đươc phép tại Cược Xiên:
                                <br /> * Bất kể nguồn thanh toán, Tài/Xỉu không được chấp nhận tại Cược Xiên.
                                <br /> * Đối với nguồn thanh toán khác nhau, tất cả loại cược đều được chấp nhận tại cược Xiên ngoại trừ Tài/Xỉu.
                                <br /> * Đối với nguồn thanh toán giống nhau, Trúng sẽ không được chấp nhận để cược Xiên với các loại khác.
                                <br /> * Đối với nguồn thanh toán giống nhau , Tài/Xỉu không được chấp nhận để cược Xiên với Trên/Dưới, Lẻ/Chẵn và Tài/Xỉu,
                                và Ngũ Hành.
                                <br /> * Đối với nguồn thanh toán giống nhau , Lẻ/Chẵn không được chấp nhận cho cược Xiên với Lẻ/Chẵn và Tài/Xỉu.
                                <br /> * Đối với nguồn thanh toán giống nhau , Trên/Dưới không được chấp nhận để cược Xiên với Lẻ/Chẵn và Tài/Xỉu, và Ngũ Hành.
                                <br
                                /> * Đối với nguồn thanh toán giống nhau , Lẻ/Chẵn và Tài/Xỉu không được chấp nhận để cược Xiên với Ngũ Hành.
                                <br /> * Đối với nguồn thanh toán giống nhau , Lẻ/Chẵn không được phép để cược Xiên với các số Lẻ/Chẵn và Lẻ/Chẵn Tài/Xỉu.</p>
                            <h1>9. Cược theo</h1>
                            <p>Cược Theo có nghĩa là chọn 1 loại cược hoặc 1 nhóm các con số như 2 vòng hoặc hơn 2 vòng cược, và cao nhất lên đến 10 vòng
                                liên tục.
                                <br />
                                <br /> Điều khoản để chấm dứt Cược Theo:
                                <br /> * Khi người chơi đạt được đến vòng Cược Theo nhất định hoặc các điều khoản về việc chấm dứt đã hoàn toàn đầy đủ.
                                <br
                                /> * Nếu số dư tài khoản của người chơi thấp hơn số tiền cược dự kiến.
                                <br /> * Nếu tiền thưởng vượt quá giới hạn tiền theo cược thắng cho ván cược sau..
                                <br /> * Nếu kết quả cược vẫn chưa được xử lý.
                                <br /> * Nếu người chơi tự hủy cược theo.
                                <br />
                                <br /> Thời gian để bắt đầu Cược Theo:
                                <br /> Mức tăng đầu tiên sẽ bắt đầu từ thứ tự tăng hiện tại và sẽ kết thúc sau khi các điều khoản về việc chấm dứt đã hoàn
                                toàn đầy đủ.</p>
                            <h1>10. Nhân đôi</h1>
                            <p>Nhân đôi có nghĩa là đặt cược số tiền hiện tại thông qua các phương pháp tỷ lệ cược, bắt đầu từ 1.0, cho tối đa là 3 lần
                                cược liên tiếp.</p>
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


LotteryRuleTwoVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleTwoVn))));