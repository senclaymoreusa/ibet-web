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

export class GameGubaoVn extends React.Component {
    
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
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <p>1. Game Sic bo – Xí Ngầu
                            <br /> Sic-Bo hay còn được gọi là Tài/Xỉu. Mỗi người chơi chọn loại cược để đặt và dự đoán tổng số điểm của các viên xí ngầu
                            được gieo sau khi máy lắc .
                            <br /> Bắt đầu ván mới Khi bắt đầu 1 ván mới, bạn chọn các thẻ tiền và đặt cược vào ô bạn dự đoán kết quả. Kết thúc cược Quá
                            trình đặt cược kết thúc sau khi bộ đếm thời gian ngược kết thúc, Nhà cái sẽ bắt đầu nhấn nút và lắc các con xí ngầu tự
                            động bằng máy. Kết quả Màn hình được đèn rọi sáng nhằm mục đích nhìn rõ các cược thắng và thua. Điều này quyết định bởi
                            cách đặt cược của người chơi.
                            <br /> Quy tắc Trò Chơi
                            Các thẻ tiền được đặt cược trên các khung lưới cược khác nhau, và bạn có thể đặt cược vào bất cứ khung lưới cược nào trong
                            suốt thời gian đặt cược.
                        </p>
                        <div class="TableStyle3 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">Điểm tối thiểu </td>
                                        <td class="Title">Điểm tối đa</td>
                                        <td class="Title">Cược Tài/Xỉu, Kết quả là 810</td>
                                        <td class="Title"> % Hoa Hồng</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>600</td>
                                        <td>Cược Hoàn Lại</td>
                                        <td>5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         &nbsp;
                        <p>2. Thanh Toán
                            <br /> Tài/Xỉu Thanh Toán tỷ lệ 1:1 Tài: Tổng điểm của các con xí ngầu là 11 đến 17, Xỉu: Tổng điểm của các con xí ngầu là
                            4 đến 10 (Chú thích thêm:Trong bất cứ trường hợp 3 viên xí ngầu được gieo ra) Cược bộ Ba Đồng Nhất Thanh toán tỷ lệ 1
                            : 150 Đặt cược dựa trên kết quả ba viên xí ngầu giống nhau được gieo ra (VD: 3 viên xí ngầu 6 điểm). Cược Any Triple
                            Thanh toán tỷ lệ 1 : 24 Cược vào 6 khả năng có 3 số giống nhau.
                            <br /> Cược đơn từng loại: One Dice: Tỷ lệ thanh toán 1 : 1 Cược dự đoán số điểm của một con xí ngầu được gieo ra (lựa chọn
                            từ 1 đến 6 điểm). Two Dices: Tỷ lệ thanh toán 1 : 2 Cược dự đoán số điểm của hai con xí ngầu được gieo ra (lựa chọn từ
                            1 đến 6 điểm). Three Dices Tỷ lệ thanh toán 1 : 3 Cược dự đoán số điểm của ba con xí ngầu được gieo ra (lựa chọn từ 1
                            đến 6 điểm). Specific Double Tỷ lệ thanh toán 1 : 8 Cược dự đoán trong kết quả sẽ có 1 cặp xí ngầu đôi. Two Dice Combination
                            - Cược 2 con xí ngầu kết hơp Tỷ lệ thanh toán 1 : 5 Cược số điểm cụ thể của 2 con xí ngầu. Có 15 loại của cược 2 con
                            xí ngầu trên bàn cược.
                            <br /> Sum of Points(Cược tổng số điểm): 4 cho đến 17 điểm: Tỷ lệ thanh toán 1 : 50 Tổng cộng 4 điểm hoặc tổng cộng 17 điểm
                            5 hoặc 16 điểm Tỷ lệ thanh toán 1 : 18 Tổng cộng 5 điểm hoặc 16 điểm 6 hoặc 15 điểm Tỷ lệ thanh toán 1 : 14 Tổng cộng
                            6 điểm hoặc 15 điểm 7 hoặc 14 điểm Tỷ lệ thanh toán 1 : 12 Tổng cộ 7 hoặc 14 điểm 8 hoặc 13 điểm Tỷ lệ thanh toán 1：8
                            Tổng cộng 8 điểm hoặc 13 điểm 9,10,11 và 12 điểm Tỷ lệ thanh toán 1 : 6 Tổng cộng 9,10, 11 và 12 điểm
                            <br /> Lẻ/Chẵn Lẻ Tỷ lệ thanh toán 1 : 1 Tổng điểm các xí ngầu là 5, 7, 9, 11, 13, 15, 17 ( Không thanh toán nếu kết quả là
                            3 viên xí ngầu giống nhau ) Chẵn Tỷ lệ thanh toán 1 : 1 Tổng điểm các xí ngầu là 4, 6, 8, 10, 12, 14, 16 ( Không thanh
                            toán nếu kết quả là 3 viên xí ngầu giống nhau)
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


GameGubaoVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameGubaoVn))));