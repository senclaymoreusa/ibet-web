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

export class GameNiuniuVn extends React.Component {
    
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
                    <div class="HelpCenterList">
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
                    <h2> Bull Bull </h2>
                        &nbsp;
                        <p> Game Bull Bull trực tuyến là một loại trò chơi poker truyền thống phổ biến ở Quảng Đông, Quảng Tây, Hồ Nam, Giang Tô và tỉnh
                            Chiết Giang của Trung Quốc. Các quy tắc trò chơi của Game Bull rất đơn giản và dễ hiểu.</p>
                        &nbsp;
                        <p>-Cách chơi
                            <br /> Trò chơi sử dụng 52 lá bài (không bao gồm lá Joker). Chia 5 lá bài cho từng người chơi trong mỗi vòng trận đấu. Tìm
                            3 lá bài mà có tổng là 10 hoặc bội số của 10. Nếu 2 lá còn lại tổng là 10 hoặc lớn hơn 10 sẽ lấy giá trị đó trừ 10, tổng
                            còn lại sẽ so sánh với Nhà Cái .
                            <br />
                            <br /> Bạn có nhiều loại cược để chọn, vui lòng xem qua thông tin đi kèm như sau:
                            <br /> ”Người chơi 1”: Hòa, Đôi
                            <br /> ”Người chơi 2”: Hòa, Đôi
                            <br /> ”Người chơi 3”: Hòa, Đôi
                            <br /> Lưu ý: Khi đặt cược Double (Đôi), “Mức Tiền” còn lại của người chơi phải cao hơn mức tiền cược 5 lần (Mức tiền cược
                            x mức tỷ lệ cược của 5p). Vui lòng đọc mục ”Giải Thích” để biết thêm thông tin chi tiết.
                            <br />
                            <br /> Người chia bài sẽ cho bạn thấy “Lá bài đầu tiên” khi mỗi trận đấu bắt đầu. Theo thứ hạng của “Lá đầu tiên” quyết định
                            vị trí chia bài. (bắt đầu từ người chia bài theo ngược chiều kim đồng hồ)
                            <br />
                            <img src="http://i.imgur.com/sJzs2gw.jpg" alt="" />
                            <br />
                            <br /> Trình tự chia bài: Theo ngược chiều kim đồng hồ
                            <br />
                            <br /> -Cách đếm Lá bài Lớn và Nhỏ
                            <br /> Trong suốt ván bài, nếu các lá bài có điểm giống nhau, người chơi chọn lá bài có thứ tự cuối cùng từ 5 lá bài để so
                            sánh. Người chơi có lá bài với điểm cao nhất thì thắng. Nếu điểm và thứ tự của lá bài giống nhau, người chơi cần so sánh
                            con Hoa của bài (Pích, Cơ, Nhép, Rô). Vui lòng xem bàn dưới đây.
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


GameNiuniuVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameNiuniuVn))));