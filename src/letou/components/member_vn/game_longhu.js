import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import InfoSelect from "../info_select";
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

export class GameLongHu extends React.Component {
    
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
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">Nguyên tắc Casino>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p> Rồng hổ là một loại của bài Poker ( Xì Tố). Các chơi của Game là phía Nhà Cái chia một thẻ bài lần lượt cho các cửa Rồng
                            và Hổ để so sánh điểm số
                            <br /> Cách bắt đầu Game Chọn số tiền mà bạn muốn cược và đặt cược vào các cửa “Rồng”,”Hổ” hoặc “Hòa” trong bàn trò Rồng Hổ.
                            Khi đếm ngược là kết thúc Nhà Cái chia 2 lá bài. Hai lá bài sẽ được chia mặt phải, bên Rồng được phát bài trước, sau
                            đó đến Hổ, bên nào có lá bài lớn hơn bên đó thắng. Kết quả
                            <br />Màn hình được rọi sáng với ánh đèn, cho phép xem được rõ ràng về các cược thắng và các tỷ lệ thua. Xác định bởi các đặt cược
                            của người chơi.
                            <br /> Quy tắc Trò Chơi 1. Cây già (K) là cây bài có điểm cao nhất và cây Xì (A) được tính điểm nhỏ nhất. 2. Khi người chia bài
                            chia các lá bài, hệ thống có thể hoặc không có thể nhìn thấy các lá bài, nếu hệ thống không nhìn thấy lá bài, người chia
                            bài sẽ chiếu lá bài lại một làn nữa cho đến khi hệ thống đọc thấy lá bài (nếu hệ thống vẫn không đọc được lá bài, vòng chơi
                            hiện tại sẽ bị hủy và các cược sẽ được hoàn lại) ).
                        </p>
                        <div class="MarginBottom20 tableFontStyle">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td class="Title">B/O</td>
                                        <td class="Title">S/O</td>
                                        <td class="Title">B/E</td>
                                        <td class="Title">S/E</td>
                                        <td class="Title">Giá trị tổng cộng là 810</td>
                                    </tr>
                                    <tr>
                                        <td>Các tỷ lệ</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>Cược đã được hoàn trả</td>
                                    </tr>
                                </tbody>
                            </table>
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


GameLongHu.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameLongHu))));