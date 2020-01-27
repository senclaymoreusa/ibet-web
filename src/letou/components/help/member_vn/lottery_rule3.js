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

export class LotteryRuleThreeVn extends React.Component {
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
                                <a>SSC Introduction</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>Luật Chơi SSC</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
              
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>SSC</h2>
                            &nbsp;
                            <p>SSC là trò chơi xổ số với những con số được xổ ra ngẫu nhiên gồm 3 hoặc 5 số.
                                <br />
                                <br /> Mỗi dãy số sẽ có các số ngẫu nhiên từ 0 đến 9. Mỗi kết quả xổ ra bao gồm 3 hoăc 5 chữ số (thứ tự chính xác) (Từ phải
                                (1 chữ số) sang trái (3 hoặc 5 chữ số), người chơi lựa chọn một số từ 0 đến 9 cho mỗi chữ số (5 chữ số, 4 chữ số, 3 chữ
                                số, 2 chữ số, 1 chữ số). Có nhiều cách chơi khác nhau dựa vào từng nhóm số ngẫu nhiên tương ứng với kèo cược và giải
                                thưởng khác nhau.
                                <br />
                                <br /> Các thị trường cược Bắc Kinh (Xổ số 3D Trung Quốc Phúc Lợi Xã Hội), Thượng Hải, Trùng Khánh, Giang Tây, Thiên Tân, Tân
                                Cương và Quick KENO nguồn cung cấp cho quý khách những kèo cược hấp dẫn nhất.
                                <br />
                                <br /> - Keno nhanh: Kết quả xổ thưởng trong vòng 75s - 90s được chứng nhận bởi công ty cá cược giải trí châu Âu và kiểm toán
                                độc lập bởi các công ty tại Philippines sẽ mang lại cho quý khách trải nghiệm cược hấp dẫn, chính xác và công bằng nhất.
                                <br
                                /> - Nối rồng: Biểu tượng "Lá cờ" xuất hiện cho 4 kết quả cược liên tiếp.
                                <br /> - Hủy cược: Nếu kết quả không được công bố trong vòng 1 (một) giờ thì phiên cược đó xem như bị huỷ.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Luật Chơi SSC</h2>
                            &nbsp;
                            <h1>1. Tài/Xỉu</h1>
                            <p>Cược Tài (các con số 5, 6, 7, 8, 9), Cược Xỉu (các con số 0, 1, 2, 3, 4) là cược đặt vào một số bất kỳ trong dãy 5 chữ số
                                hoặc 3 chữ số. Người chơi thắng nếu kết quả đặt cược trùng với kết quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược Xỉu vào chữ số ở vị trí thứ 3 và kết quả là 36258. Chữ số thứ 3 là 2 - Xỉu, như vậy vé
                                cược thắng.</p>
                            <h1>2. Chẵn/Lẻ</h1>
                            <p>Cược Lẻ (các con số 1, 3, 5, 7, 9) hoặc Cược Chẵn (các con số 0, 2, 4, 6, 8) là cược đặt vào một số bất kỳ trong dãy 5 chữ
                                số hoặc 3 chữ số. Người chơi thắng nếu kết quả đặt cược trùng với kết quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược “Chẵn” vào số ở vị trí thứ 3 và kết quả là 36258. Số ở vị trí thứ 3 là số 2 - Chẵn, như
                                vậy vé cược thắng.</p>
                            <h1>3. Cược xiên Tài/Xỉu hoặc cược xiên Lẻ/Chẵn</h1>
                            <p>Cược xiên là cược kết hợp giữa Tài/Xỉu, Lẻ/Chẵn của 1 con số trong 1 đơn cược.
                                <br />
                                <br /> ► Ví dụ: cược số thứ 3 là “Lớn” và cược số thứ nhất là “Nhỏ”, bạn có thể chọn nhóm xiên của 2x1 trong mục đặt cược.</p>
                            <h1>4. Tổng ba chữ số</h1>
                            <p>Là kết quả của tổng ba chữ số. với kết quả của 5 chữ số thì ra có Ba số đầu (Vị trí tương ứng 5, 4, 3). Ba số giữa (vị trí
                                tương ứng 4, 3, 2), Ba số cuối (vị trí tương ứng 3, 2, 1). Cược đặt vào tổng kết quả chính xác của 3 chữ số liên tiếp
                                (từ 0 đến 27). Bạn sẽ chiến thắng nếu số của bạn đặt cược giống với tổng ba số kết quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược tổng của 3 số cuối là 15. Kết quả dãy số là 36258, tổng 3 số cuối là 2+5+8=15, như vậy
                                vé cược thắng.</p>
                            <h1>5. Tài/Xỉu/Lẻ/Chẵn</h1>
                            <p>Kết quả của tổng ba chữ số. Với kết quả là 5 chữ số thì ta có Ba số đầu (vị trí tương ứng 5, 4, 3), Ba số giữa (vị trí tương
                                ứng 4, 3, 2), Ba số cuối (vị trí tương ứng 3, 2, 1). Cược Tài (tổng của 3 chữ số liên tiếp trong dãy kết quả từ 14-27),
                                Cược Xỉu (tổng của 3 chữ số liên tiếp trong dãy kết quả từ 0-13). Tổng 3 chữ số liên tiếp trong dãy kết quả là Lẻ (1,3,5,7,9,11,13,15,17,19,21,23,25,27),
                                hoặc Chẵn (0,2,4,6,8,10,12,14,16,18,20,22,24,26), Bạn sẽ chiến thắng nếu số của bạn đặt cược giống với tổng ba số kết
                                quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược Tài cho tổng 3 chữ số cuối. Kết quả là 36258. 2+5+8=15 như vậy vé cược thắng.</p>
                            <h1>6. Cược tổng dãy số</h1>
                            <p>Với kết quả là dãy 5 chữ số thì ta có Ba số đầu (vị trí tương ứng 5, 4, 3), Ba số giữa (vị trí tương ứng 4, 3, 2), Ba số
                                cuối (vị trí tương ứng 3, 2, 1). Các loại cược là cược Đỏ (0-3), Cam (4-7), Vàng (8-11), Xanh lá (12-15), Xanh dương
                                (16-19), Chàm (20-23), Tím (24-27). Vé cược thắng nếu màu mà bạn chọn trùng với tổng 3 chữ số kết quả.
                                <br />
                                <br /> ► Ví dụ: Người chơi chọn cược Xanh lá cho tổng 3 chữ số cuối. Kết quả là 36258, 2+5+8=15 như vậy vé cược thắng.</p>
                            <h1>7. Xổ số</h1>
                            <p>Người chơi lựa chọn số đơn từ 0 đến 9 trong dãy kết quả 5 số hoặc 3 số. Người chơi sẽ thắng nếu kết quả đặt trùng với kết
                                quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược “6” cho số ở vị trí thứ 4, kết quả là 36528. Vị trí thứ 4 là số 6 cho nên vé cược thắng.</p>
                            <h1>8. Nhóm cược xiên</h1>
                            <p>Đây là loại cược chuỗi các con số và cược vào các số khác nhau từ 0-9 trong dãy số kết quả. Dãy số kết quả gồm 5 hoặc 3 chữ
                                số. Chuỗi hai số gọi là Cược xiên nhóm 2. Chuỗi 3 số gọi là Cược xiên nhóm 3. Chuỗi cược xiên nhóm 5 là lớn nhất. Người
                                chơi sẽ thắng nếu tất cả những số đặt cược trùng với kết quả của hệ thống.
                                <br />
                                <br /> ► Ví dụ: Người chơi đặt cược số 3 ở vị trí thứ 5, số 2 ở vị trí thứ 3, số 8 ở vị trí thứ nhất, đây được gọi là cược
                                xiên nhóm 3. Kết quả là 36258. Như vậy ở vị trí thứ 5 là số 3, vị trí thứ ba là số 2 và vị trí thứ 1 là số 8 trùng với
                                kết quả đã đặt nên vé cược thắng.</p>
                            <h1>9. Nhóm 2</h1>
                            <p>Chọn hai số bất kỳ từ 0-9 và đặt cược vào hai số đầu hoặc hai số cuối. Với kết quả là dãy số có 5 chữ số thì hai số đầu tương
                                ứng với hai chữ số ở vị trí thứ 5 và thứ 4, hai số cuối tương ứng với hai chữ số ở vị trí thứ 2 và thứ 1. Với kết quả
                                là dãy số có 3 chữ số thì ta sẽ có hai số đầu tương ứng với số ở vị trí thứ 3 và thứ 2, hai số cuối tương ứng với hai
                                số ở vị trí thứ 2 và thứ 1. Như vậy chúng ta sẽ có 2 loại cược: Cược Đôi và cược Đơn.
                                <br />
                                <br />
                                <br />
                                <strong>► Ví dụ: Người chơi cược số 8 và số 5 là hai số cuối cùng trong dãy số kết quả. Kết quả ra là 36258, như vậy hai số cuối
                                    cùng là 5 và 8 giống với con số đã đặt nên vé cược thắng.</strong>
                                <br />
                                <br />
                                <br />
                                <strong>► Ví dụ 1: Người chơi đặt số 8 cho vị trí thứ 2 và số 5 cho vị trí thứ 1, kết quả là 36258. Như vậy hai số cuối cùng
                                        là 5 và 8, người chơi thắng với tỷ lệ cược số không cùng cặp
                                        <br /> ► Ví dụ 2: Người chơi đặt số 8 cho vị trí thứ 2 và số 8 cho vị trí thứ 1, kết quả là 36288. Như vậy kết quả
                                        hai số cuối là 8 và 8, người chơi thắng với kết quả tỷ lệ cược số cùng cặp.</strong>
                                
                            </p>
                            <h1>10. Nhóm 3x3</h1>
                            <p>
                                <strong>
                                    Chọn 3 số bất kỳ từ 0-9 và đặt cược vào 3 số ở vị trí đầu, giữa hoặc cuối. Như vậy với dãy kết quả 5 số chúng ta
                                    sẽ có 3 số ở vị trí đầu (tương ứng với vị trí thứ 5, 4, 3), 3 số ở vị trí giữa (tương ứng với vị trí thứ 4, 3,
                                    2), 3 số ở vị trí cuối (tương ứng với vị trí 3, 2, 1). Đối với dãy kết quả có 3 chữ số (số ở vị trí thứ 3,2,1)
                                    thì cũng như vậy. Chúng ta có hai loại cược gồm cược Đôi và cược Đơn.
                                    <br />
                                    <br />
                                    Cược Đơn: Chỉ chọn một trong mỗi số cho số thứ 3, số thứ 2 và số thứ 1. Hai số phải trùng nhau, không yêu cầu
                                        thứ tự. Người chơi thắng nếu 3 chữ số cuối cùng trong dãy số kết quả trùng với con số đã đặt cược.
                                    <br
                                    /> ► Ví dụ: Người chơi đặt số 8 cho vị trí thứ 3, số 8 cho vị trí thứ 2 và số 2 cho vị trí đầu tiên. Kết quả là
                                    36288, như vậy 3 số cuối là 288. Vé cược thắng mặc dù vị trí các con số không giống với kết quả.
                                    <br />
                                    <br />
                                    <br />
                                    ► Ví dụ : Người chơi chọn số 2 và số 8 có trong 3 chữ số cuối. Kết quả là 36288, như vậy 3 số cuối là 288, người
                                        chơi thắng. Chú ý người chơi vẫn thắng nếu kết quả là 828, 882, 282, 228, 822.
                                </strong>
                            </p>
                            <h1>11. Nhóm 3x6 </h1>
                            <p>
                                <br />► Ví dụ: Người chơi chọn số 2, 8 và 5 cho vị trí 3 số cuối. Kết quả là 36258, như vậy 3 số cuối là 258. Vé cược
                                            thắng.
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


LotteryRuleThreeVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleThreeVn))));