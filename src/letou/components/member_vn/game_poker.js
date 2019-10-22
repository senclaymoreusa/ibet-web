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

export class GamePokerVn extends React.Component {
    
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
                    <div id="HelperCenterDetail">
                    <h2> Poker Texas Hold'em </h2>
                        &nbsp;
                        <p>Bài Poker Texas Hold'em là một trò chơi sòng bài có người chia bài trực tiếp. Sử dụng 52 lá bài. Ngươi chơi sử dụng 2 lá
                            bài úp của mình (hole cards) và 5 lá bài chung (community cards) thì sẽ có 7 lá bài và chọn 5 lá bài tốt nhất cho ván
                            bài. Người chơi đơn thuần chỉ so lá bài to nhỏ với người chia bài mà không xem xét tới màu hoa.Đây là một trò chơi bài
                            thử nghiệm trí tuệ và vận may.</p>
                        &nbsp;
                        <p>- Cách Chơi
                            <br /> Sau khi người chơi đặt cược Ante, thì người chia bài và người chơi luân phiên được chia 2 lá bài riêng, rồi chia đợt
                            đặt cược theo 5 lá bài công khai trên bàn, cuối cùng người chia bài cùng với người chơi so sánh tổ hợp bài to bé để phân
                            thắng thua..
                            <b/> Khi người chơi đặt cược Ante, đồng thời cũng có thể đặt cược Bonus. Khi bài riêng mà người chơi phù hợp với kiểu bài
                            của Bonus thì căn cứ vào tổ hợp nhóm bài sẽ giành được tiền thưởng có tỷ lệ thưởng từ 3-30 lần hoặc hơn thế..
                            <br />
                            <br />
                            <br />
                            <br /> - Quy tắc trò chơi
                            <br /> Bắt đầu ván bài, người chơi cần đặt cược trong thời hạn và quyết đinh theo (call) hay không:
                            <br /> Đặt Cược Số tiền Cược Nội Dung Cược Ante Số tiền cược Ante cần phù hợp với mức cược tối đa và tối thiểu của mỗi ván
                            Vòng Flop 2 lần tiền cược Ante Người chơi có thể theo (raise) hoặc rút lui (fold). Rút lui sẽ thua cược Ante. Sau khi
                            đặt cược Ante 3 là bài chung được chia trên bàn. Vòng Turn 1 lần tiền cược Ante Người chơi có thể đặt cược và bỏ qua.
                            Nếu Bỏ qua thì sẽ không cược thêm khi ván bài tiếp tục. Một lá bài chung thứ 4 sẽ được chia trên bàn cược. Vòng River
                            1 lần tiền cược Ante Người chơi có thể đặt cược và bỏ qua Nếu Bỏ qua thì sẽ không cược thêm khi ván bài tiếp tục. Một
                            lá bài chung thứ 5 sẽ được chia trên bàn cược.
                            <br />
                            <br /> Sau khi xì bài, người chơi và người chia bài lấy 2 lá bài riêng và 5 lá bài công khai trên bàn , trong 7 bài đó rút
                            ra tổ hợp 5 lá bài lớn nhất để phân thắng thua.
                            <br />
                            <br /> • Nếu tổ hợp bài của người chơi là Straight – Sảnh ( một dãy liên kết năm quân bài) trở lên thì thắng tiền (ví dụ 1:1)
                            tại vòng Ante, Flop, Turn Và River. Ante, Flop, Turn, River.Nếu nhóm bài từ bộ ba trở xuống thì khi thắng sẽ giành được
                            tiền thưởng có tỷ lệ cược lần lượt 1:1 Flop, Turn, River
                            <br /> • Khi nhóm bài của người chia bài với người chơi giống nhau thì sẽ phân thắng thua theo lá bài có số lớn nhất trong
                            nhóm bài , nếu số đó giống nhau thì ván đó là hòa, người chơi sẽ lấy về toàn bộ giá trị đặt cược. nhưng không bao gồm
                            giá trị đặt cược Bonus
                            <br />
                            <br />
                            <br />
                            <br /> - Thanh toán tỷ lệ Tiền Thưởng - BOnus
                            <br /> Tổ hợp bài riêng được tiền thưởng theo giá trị cược và tỷ lệ cược , bất kể kết quả ván đó thua hay thắng.
                            <br /> Tổ hợp Cặp các lá bài A-A tỷ lệ thanh toán 1︰30 A-K（con hình） tỷ lệ thanh toán 1：25 A-Q or A-J（con hình） tỷ lệ thanh
                            toán 1：20 A-K（không có quân hình） tỷ lệ thanh toán 1：15 K-K or Q-Q or J-J tỷ lệ thanh toán 1：10 A-Q or A-J（con hình）
                            tỷ lệ thanh toán 1：5 Bất cứ đôi nào trong 2~10 tỷ lệ thanh toán 1：3
                            <br />
                            <br /> - Thắng kết hợp
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


GamePokerVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GamePokerVn))));