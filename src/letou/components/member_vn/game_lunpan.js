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

export class LunpanVn extends React.Component {
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
                                <a href="/vi/for_member">Nguyên tắc Casino >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>Asian Roulette</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>International Roulette</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Roulette Châu Á </h2>
                            <p>- Đây là trò chơi kiểu Châu Âu bao gồm 1 số 0 Roulette. Có 37 ô số riêng biệt có màu trên bàn xoay. Bao gồm 1 ô số màu
                                xanh và các ô số còn lại trong bàn xoay từ số 1 đến 36. Từ số 1 đến số 10 và từ 19 đến 28, các số chẵn màu đen và
                                lẻ màu đỏ. Từ số 11 đến 18 và 29 đến 36, số chẵn màu đỏ và số lẻ màu đen.</p>
                            <br />
                            <h1>Cách chơi </h1>
                            <p>♦ Khi trò chơi bắt đầu, bạn có thể chọn xu tiền cược để tiến hành đặt cược dựa trên việc dự đoán số sẽ quay ra hoặc các
                                kiểu cược khác trên bàn cược. Quá trình đặt cược sẽ kết thúc sau khi kết thúc đồng hồ đếm ngược.
                                <br />
                                <br />♦ Khi đồng hồ đếm ngược kết thúc, người điều khiển vòng xoay sẽ bắt đầu quay số bằng cách tung quả bóng theo một
                                hướng ngược lại hướng của vòng quay đang quay tròn.
                                <br />
                                <br />
                                <br />♦ Khi quả bóng rớt vào 1 số, người điều khiển vòng xoay sẽ nhập số kết quả và việc thanh toán cược sẽ được hiển thị
                                tại bàn của người chơi.</p>
                            <h1>Luật chơi</h1>
                            <p>♦ Các xu tiền cược được đặt cược trên các ô cược khác nhau, và người chơi có thể đặt cược vào bất kỳ ô cược nào trong
                                suốt thời gian đặt cược.</p>
                            <h1>Cược Phụ </h1>
                            <p>♦ Cược đặc biệt: Người chơi có thể lưu sẵn 4 cược yêu thích của mình sau đó tiến hành đặt chỉ với một cú nhấp chuột.
                                <br />
                                <br />♦ Cược số hàng đơn vị: bao gồm các cược cho số hàng đơn vị của số dự đoán bao gồm từ 0 đến 9 hay các số đơn như vậy.
                                Để đặt cược này, nhấp chuột vào cược muốn chọn tại các số trong khoảng từ 0 đến 9 trong cược kiểu Pháp. Các cược
                                sẽ tự động được đặt tại các vị trí liên quan.
                                <br />
                                <br />♦ Cược lân cận: Bảng láng giềng cho phép bạn trừ số được lựa chọn của riêng bạn cũng đặt cược giữa các con số trên
                                hai bên của nó. Có tổng số từ 1 đến 5 loại cược lân cận. để đặt cược lân cận, nhấp vào một loại mong muốn trong phần
                                bên cạnh, sau đó nhập vào số bạn mong muốn trên bảng cược của Pháp. Ví dụ: lựa chọn những cược lân cận loại 5, sau
                                đó nhấp vào số 7, thì bảng cược tương ứng sẽ đặt vào: 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26.
                                <br />
                                <br />♦Cược kiểu Pháp: Có một số khác biệt trong Roulette có tên đặc biệt gắn liền với chúng (ví dụ như “third cylinder”,
                                “neighbors of zero” và “so on”), và mỗi loại bào gồm một phần của vòng quay. Có 5 loại cược trong cược kiểu Pháp.
                                Phương thức đặt cược: đặt cược vào bảng roulette hình elip, và hiển thị các con chip trên một bảng roulette khác.
                                Và sau đó, nhấp vào “Sure” để xác nhận cược của bạn.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Roulette Quốc tế</h2>
                            <p>- Trò chơi này là theo phong cách Châu Âu, Roulette chỉ có một số 0. Có 37 ô màu và đánh số trên bánh xe. Có một ô màu xanh
                                lá cây được đánh số 0 và các ô khác được đánh số từ 1 đến 36. Trong khoảng số từ 1 đến 10 và 19 đến 28, số lẻ là màu
                                đỏ, số chẵn là màu đen. Trong khoảng từ 11 đến 18 và từ 29 đến 36, số lẻ là màu đen và số chẵn là màu đỏ .
                                <br /> Sự khác nhau giữa Châu Á và Roulette quốc tế là cách đặt cược và trả tiền.</p>
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
        isAuthenticated: (token != null && token != undefined),
        error: state.auth.error,
        lang: state.language.lang,
        showAnnouncements: state.general.show_letou_announcements,
    }
}


LunpanVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LunpanVn))));