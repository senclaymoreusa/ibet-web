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

export class GameSangongVn extends React.Component {
    
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
                    <div class="HelpCenterList">
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
                    <div id="HelperCenterDetail">
                    <p>
                            1. Những luật chơi:
                            <br /> “Picture cards” đề cập đến các quân Bài Jack (J) Bồi, Queen (Đầm) Q và Kings (K) Già. “Vòng chơi” có nghĩa là thời gian
                            trò chơi khi bắt đầu cược và kết thúc khi người chia bài thông báo kết quả và áp dụng để lấy các tiền thua và thanh toán
                            các tiền thắng. “Royal Picture”- Cược cạnh nghĩa là một cược sẽ được thanh toán bởi nhiều cược thắng kết hợp. Thanh toán
                            của Bài “Royal Pictures” – Cược cạnh không phụ thuộc vào kết quả chính của người chơi chính. Tức là: Thắng, Thua hoặc
                            Hòa. Các cược “Royal Picture” thắng nếu kết hợp các lá bài sau đây trên tay của người chơi: 1. “Three Kings”, Một tụ
                            của người chơi bao gồm 3 lá bài K (già). 2. “Three Queens”, Một tụ của người chơi bao gồm 3 lá bài Q (đầm). 3. “Three
                            Jacks”, Một tụ của người chơi bao gồm 3 lá bài J (bồi). 4. “Three Pictures”, Một tụ bài của người chơi bao gồm 3 quân
                            hình, ngoại “Three Kings”, “Three Queens” hoặc “Three Jacks”. 5. “Any Picture Pair”, Một tụ bài của người chơi bao gồm
                            một đôi và một không phải là quân hình. 6. “Any King”, một tụ bài của người chơi bao gồm: một quân K và hai lá bài không
                            phải hình; hoặc một quân K, một lá J và một lá không phải hình. “Tie” nghĩa là người chơi và người chia bài có cùng số
                            điểm.
                            <br />
                            <br /> 2. Cách chơi như thế nào:
                            <br /> - 2.1.Trò chơi sẽ bắt đầu khi người chia bài thông báo “vui lòng đặt cược của bạn”.
                            <br /> - 2.2. Việc đặt cược kết thúc khi người chia bài thông báo “Ngưng đặt cược”
                            <br />
                            <br />3. Mục tiêu của trò chơi là có điểm cao hơn người chia bài.
                            <br />
                            <br />4. Một cược đặt trên “Tie Bet” và/hoặc “Royal Pictures bet” có thể đặt được sau khi người chơi đặt cược ban đầu.
                            <br />
                            <br />5. Sau khi đặt cược xong, bắt đầu từ bên trái của người chia bài và tiếp tục theo chiều kim đồng hồ, Người chia bài sẽ
                            chia 3 lá bài cho mỗi khu vựa chơi. Người chia bài sẽ nhận được lá bài cuối cùng.
                            <br />
                            <br />6. Sau khi kiểm tra tất cả các lá bài, mỗi người chơi sẽ lật lá bài lên tại khi vực chơi của mình.
                            <br />
                            <br />7. Sau khi tất cả người chơi được hoàn trả, người chia bài sẽ mở và thông báo lá bài trên tay mình.
                            <br />
                            <br />8. Sau khi so sánh bài trên tay mình với mỗi người chơi, người chia bài sẽ tuyên bố mỗi người chơi giành chiến thắng,
                            thua hoặc hòa.
                            <br />
                            <br />9. Mỗi người chơi bao gồm ba lá bài với tổng điểm của mỗi người chơi được xác đinh bằng giá trị của mỗi lá bài đơn. Giá
                            trị điểm của mối lá bài là giá trị trên mặt của chúng, ngoại trừ:10, King, Queen, Jack, có giá trị bằng 0, nhưng chỉ
                            King, Queen và Jack, sẽ xếp hàng là “Picture card” với tổng điểm tương ứng.
                            <br />
                            <br />10. Tổng điểm của mỗi người chơi sẽ là: số của tổng các giá trị trên tay là từ số 0 đến 9, hoặc số bên phải của số đó
                            trong tổng giá trị của lá bài trong tay là số 10 hoặc cao hơn.
                            <br />
                            <br />11. Three Picture Cards là tụ bài được xếp hạng cao nhất. trong trường hợp cả người chơi và người chia bài đêu có ba
                            quân hình, sẽ được tuyên bố như là “hòa”
                            <br />
                            <br />12. Sau đó, các tụ bài được xác định dựa trên tổng điểm từ 0 đến 9.
                            <br />
                            <br />13. khi một người chơi và người chia bài có cùng số điểm, tụ bài có nhiều quân hình hơn sẽ thắng. Nếu cả người chơi và
                            người chia bài có cùng thứ hạng, sẽ được tuyên bố là “Hòa”.
                            <br />
                            <br />14. Khi người chơi và người chia bài có cùng số điểm, tiền cược hòa sẽ được thanh toán.
                            <br />
                            <br />15. Những quân hình không có thứ hạng, nghĩa là KK bằng với QJ và không cao hơn QJ.
                            <br />
                            <br />16. không có thứ hạng phù hợp trong trò chơi của Royal Three Pictures.
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


GameSangongVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameSangongVn))));