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

export class Game21dianVn extends React.Component {
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
                                <a href="/vi/for_member">Dành cho Thành viên >
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
                                <a>Blackjack</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>Crazy Blackjack</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2> Blackjack </h2>
                            &nbsp;
                            <p> Mục đích của Blackjack là đạt được số điểm cáo hơn người chia bài, nhưng không quá 21. Tốt nhất là Blackjack – khi tổng giá
                                trị của 2 lá bài đầu tiên là chính xác 21. Bạn chỉ cạnh tranh với người chia bài, chứ không phải chống lại những người
                                chơi khác.
                                <br />
                            </p>
                            &nbsp;
                            <h1>【Hướng dẫn】</h1>
                            &nbsp;
                            <p>• Người chơi đặt cược
                                <br /> • Người chia bài sẽ chia bài lật sẵn cho người chơi, theo chiều kim đồng hồ
                                <br /> • Người chia bài sau đó chia thêm một quân bài lật sẵn cho người chơi, và sau đó thêm một quân cho bản thân
                                <br /> • Người chơi chọn một hành động
                                <br /> • Cuối cùng người chia bài mở lá bài úp và dừng nếu lớn hơn 17
                                <br /> • Trò chơi kết thúc, Người chơi so sánh tổng điểm với người chia bài</p>
                            &nbsp;
                            <h1>【Luật chơi】</h1>
                            &nbsp;
                            <p> 1. Chơi với 8 bộ bài. 2. Người chia bài luôn dừng khi lớn hơn 17. 3. Gấp đôi chỉ khi trên tay có 2 lá. 4. Tách bài khi có
                                đôi. 5. Chỉ tách bài 1 lần tại mỗi tụ. 6. Chỉ thêm một lá khi tách đôi Ace. 7. Không gấp đôi sau khi tách. 8. Bảo hiểm
                                được cung cấp khi người chia bài lật ra Ace. 9. Blackjack trả tiền 2:3. 10. Bảo hiểm trả tiền 1:2. 11. Ván chơi có kết
                                quả hòa khi người chia bài bằng điểm với người chơi.
                            </p>
                            &nbsp;
                            <h1>【Điểm của các lá bài】</h1>
                            &nbsp;
                            <p>
                                <br /> - 10, J, Q, K tính là 10 điểm
                                <br /> - 2 đến 9 tính điểm theo giá trị 2 đến
                                <br /> - Ace được tính là 1 hoặc 11 điểm &nbsp;
                            </p>
                            <h1>【Xếp hạng cao thấp】</h1>
                            &nbsp;
                            <p> Cao nhất : Blackjack – lớn hơn tụ bài 21 gồm 3 lá hoặc nhiều hơn. Blackjack cũng lớn hơn một tụ bài 21 điểm từ tách bài.
                                Thứ hai: 21 điểm – nhiều hơn 2 lá bài kết hợp lại với tổng số điểm là 21 hoặc sau khi tách không được tính là Blackjack
                                21 khi so sánh với tụ của người chia bài. Thứ ba: bất kỳ tổng số điểm – nếu người chia bài không bị quắc, mỗi cược còn
                                lại sẽ thắng nếu tụ của người chơi nào cao hơn người chia bài và thua nếu thấp hơn. Thứ tư: Hòa – nếu tổng điểm của bạn
                                bằng với người chia bài, ván chơi kết thúc và tiền cược của bạn sẽ được hoàn trả. Cuối cùng: quắc (thối) – Nếu tổng điểm
                                vượt quá 21, sẽ là quắc và tất cả tiền cược sẽ bị mất.</p>
                            &nbsp;
                            <h1>【Thanh toán và tùy chọn cược】</h1>
                            &nbsp;
                            <p>Side Bet: </p>
                            &nbsp;
                            <p> - Cho phép tất cả người chơi chính hoặc không có chỗ ngồi đặt cược vào một bài của một người chơi.
                            <br /> - Người chơi cược bên cạnh cho phép đặt cược tại bất kỳ vị trài đặt cược nào có mở cược.
                            <br /> - người chơi chính không được phép cược cạnh ở bài của mình.</p>
                            <p>Split: </p>
                            &nbsp;
                            <p> - Nếu 2 lá bài đầu tiên trên tay bạn là một đôi, bạn có thể tách ra làm 2 tay riêng biệt, mỗi phần tách ra sẽ có tiền đặt
                            cược bằng với cược chính ban đầu.
                            <br /> - 1. Không được gấp đôi sau khi tách bài.
                            <br /> - 2. Nếu bạn tách đôi Ace từ ban đầu thì bạn sẽ chỉ nhận được thêm 1 lá bài tại mỗi tụ bài, không được phép rút thêm.
                            <br /> - 3. Sau khi tách bài, người chia bài sẽ chia mỗi tụ 1 quân bài.
                            <br /> - 4. Nếu bạn tách bài và một tụ rút được Ace hoặc 10, sẽ tính kết quả như 21 từ một cặp chia.</p>
                            <p>Blackjack: </p>
                            &nbsp;
                            <p> - A & Q Trả thưởng 2:3.</p>
                            <p>Kết quả tốt nhất: </p>
                            &nbsp;
                            <p> - K & A & Q Trả thưởng 1:1.</p>
                            <p>Bảo hiểm: </p>
                            &nbsp;
                            <p> - Nếu người chia bài có blackjack, thanh toán: 1:2.</p>
                            <p>Cược chính: </p>
                            &nbsp;
                            <p>- Người chơi ngồi ghế, chọn chip và đặt cược chính và nhấn nút xác nhận để bắt đầu trò chơi.</p>
                            <p>Perfect Pairs: </p>
                            &nbsp;
                            <p> Perfect Pairs – 2 lá giống nhau Thanh toán 1:25.</p>
                            <p> Colored Pair – Cùng bộ khác chất Thanh toán 1:12.</p>
                            <p> Mixed Pair – Khác màu cùng bộ Thanh toán 1:6.</p>
                            <h1>【Attention】</h1>
                            &nbsp;
                            <p> 1. Tất cả người chơi phải đặt cược sau đó có thể đặt cược vào Perfect pairs và 21+3 tùy chọn cược khác. 2. Chức năng cược
                                lặp lại chỉ có giá trị cho cược, perfect pairs và 21 + 3 nhưng không cho cược cạnh. 3. Nếu tất cả người chơi trong ván
                                chơi có kết quả quắc hoặc Blackjack, sau đó người chia bài sẽ tiết lộ tất cả các lá bài của mình và kết thúc trò chơi,
                                không có vấn đề người chia bài đạt 17 điểm hay không. 4. Cược tối thiểu và cược tối đa dựa trên bảng giới hạn cược. người
                                chơi có thể đặt cược trong phạm vi kết hợp của giới hạn cược của bảng và giới hạn cược của người chơi. Nếu bạn muốn điều
                                chính giới hạn cược cá nhân, vui lòng liên hệ chăm sóc khách hàng. 5. Khi bài bắt đầu được chia bởi người chia bài, hệ
                                thống có thể hoặc không thể đọc được các lá bài, người chia bài sẽ quét lại các lá bài cho đến khi hệ thống đọc được
                                những lá bài (Nếu hệ thống vẫn không đọc được được bài, ván chơi hiện tại sẽ bị hủy và tất cả cược sẽ được hoàn trả).
                                6. Trong trường hợp giải quyết không chính xác, các khoản thanh toán sẽ được giải quyết dựa trên kết quả video hiện tại.
                                7. Do kết nối mạng thất bại dẫn đến ván chơi không thể hoàn thành, hệ thống sẽ hủy bỏ ván chơi hiện tại và hoàn trả tất
                                cả các cược. ( nếu sau khi người chơi có Blackjack sau khi kết nối mạng thất bại, hệ thống sẽ dựa trên cơ sở tỷ lệ cược
                                2:3 để thanh toán cho người chơi
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2> Crazy Blackjack </h2>
                            &nbsp;
                            <p> Giống như mục đích của những trò chơi Blackjack khác, Người chơi Crazy Blackjack cần phải đánh bại người chia bài bằng cách
                                tích lũy các quân bài mà giá trị của nó không vượt quá 21 nhưng sẽ phải cao hơn số điểm của người chia bài.</p>
                            &nbsp;
                            <h1>【Hướng dẫn】</h1>
                            &nbsp;
                            <p>• Người chơi đặt cược
                                <br /> • Người chia bài chia bài lật cho người chơi, theo chiều kim đồng hồ
                                <br /> • Người chia bài chia những lá bài lật khác cho những người chơi, và sau đó chia một lá bài up cho bản thân
                                <br /> • Người chơi chọn một hành động
                                <br /> • Cuối cùng người chia bài mở lá bài úp và dừng nếu lớn hơn 17 điểm
                                <br /> • Trò chơi kết thúc, Người chơi so sánh điểm với người chia bài </p>
                            &nbsp;
                            <h1>【Quy tắc trò chơi】</h1>
                            &nbsp;
                            <p> 1. Chơi với 8 bộ bài. 2. Người chia bài luôn dừng khi lớn hơn 17. 3. Gấp đôi chỉ khi trên tay có 2 lá. 4. Tách bài khi có
                                đôi. 5. Chỉ tách bài 1 lần tại mỗi tụ. 6. Chỉ thêm một lá khi tách đôi Ace. 7. Không gấp đôi sau khi tách. 8. Bảo hiểm
                                được cung cấp khi người chia bài lật ra Ace. 9. Blackjack trả tiền 2:3. 10. Bảo hiểm trả tiền 1:2. 11. Ván chơi có kết
                                quả hòa khi người chia bài bằng điểm với người chơi.
                            </p>
                            &nbsp;
                            <h1>【Điểm của các lá bài】</h1>
                            &nbsp;
                            <br /> - 10, J, Q, K tính là 10 điểm
                            <br /> - 2 đến 9 tính điểm theo giá trị 2 đến
                            <br /> - Ace được tính là 1 hoặc 11 điểm &nbsp;
                            <h1>【Xếp hạng cao thấp】</h1>
                            &nbsp;
                            <p> Cao nhất : Blackjack – lớn hơn tụ bài 21 gồm 3 lá hoặc nhiều hơn. Blackjack cũng lớn hơn một tụ bài 21 điểm từ tách bài.
                                Thứ hai: 21 điểm – nhiều hơn 2 lá bài kết hợp lại với tổng số điểm là 21 hoặc sau khi tách không được tính là Blackjack
                                21 khi so sánh với tụ của người chia bài. Thứ ba: bất kỳ tổng số điểm – nếu người chia bài không bị quắc, mỗi cược còn
                                lại sẽ thắng nếu tụ của người chơi nào cao hơn người chia bài và thua nếu thấp hơn. Thứ tư: Hòa – nếu tổng điểm của bạn
                                bằng với người chia bài, ván chơi kết thúc và tiền cược của bạn sẽ được hoàn trả. Cuối cùng: quắc (thối) – Nếu tổng điểm
                                vượt quá 21, sẽ là quắc và tất cả tiền cược sẽ bị mất.</p>
                            &nbsp;
                            <h1>【Trả tiền và tùy chọn cược】</h1>
                            &nbsp;
                            <p>Cược bên: </p>
                            &nbsp;
                            <p> - Cho phép tất cả người chơi chính hoặc không có chỗ ngồi đặt cược vào một bài của một người chơi.</p>
                            <p> - Người chơi cược bên cạnh cho phép đặt cược tại bất kỳ vị trài đặt cược nào có mở cược.</p>
                            <p> - người chơi chính không được phép cược cạnh ở bài của mình.</p>
                            <p>Tách bài: </p>
                            &nbsp;
                            <p>
                                - Nếu 2 lá bài đầu tiên trên tay bạn là một đôi, bạn có thể tách ra làm 2 tay riêng biệt, mỗi phần tách ra sẽ có tiền đặt
                                cược bằng với cược chính ban đầu.
                                <br /> - 1. Không được gấp đôi sau khi tách bài.
                                <br /> - 2. Nếu bạn tách đôi Ace từ ban đầu thì bạn sẽ chỉ nhận được thêm 1 lá bài tại mỗi tụ bài, không được phép rút thêm.
                                <br /> - 3. Sau khi tách bài, người chia bài sẽ chia mỗi tụ 1 quân bài.
                                <br /> - 4. Nếu bạn tách bài và một tụ rút được Ace hoặc 10, sẽ tính kết quả như 21 từ một cặp chia
                            </p>
                            <p>Blackjack: </p>
                            &nbsp;
                            <p> - A & Q Trả thưởng 2:3.</p>
                            <p>Kết quả tốt nhất: </p>
                            &nbsp;
                            <p> - K & A & Q Trả thưởng 1:1.</p>
                            <p>bảo hiểm: </p>
                            &nbsp;
                            <p> - Nếu người chia bài có blackjack, thanh toán: 1:2.</p>
                            <p>Cược chính: </p>
                            &nbsp;
                            <p> - Người chơi ngồi ghế, chọn chip và đặt cược chính và nhấn nút xác nhận để bắt đầu trò chơi.</p>
                            <p>Perfect Pairs: </p>
                            &nbsp;
                            <p>Perfect Pairs – 2 lá giống nhau Thanh toán 1:25.</p>
                            <p>Colored Pair – Cùng bộ khác chất Thanh toán 1:12.</p>
                            <p>Mixed Pair – Khác màu cùng bộ Thanh toán 1:6.</p>
                            <h1>【Chú ý】</h1>
                            &nbsp;
                            <p>1. Tất cả người chơi phải đặt cược sau đó có thể đặt cược vào Perfect pairs và 21+3 tùy chọn cược khác. 2. Chức năng cược
                                lặp lại chỉ có giá trị cho cược, perfect pairs và 21 + 3 nhưng không cho cược cạnh. 3. Nếu tất cả người chơi trong ván
                                chơi có kết quả quắc hoặc Blackjack, sau đó người chia bài sẽ tiết lộ tất cả các lá bài của mình và kết thúc trò chơi,
                                không có vấn đề người chia bài đạt 17 điểm hay không. 4. Cược tối thiểu và cược tối đa dựa trên bảng giới hạn cược. người
                                chơi có thể đặt cược trong phạm vi kết hợp của giới hạn cược của bảng và giới hạn cược của người chơi. Nếu bạn muốn điều
                                chính giới hạn cược cá nhân, vui lòng liên hệ chăm sóc khách hàng. 5. Khi bài bắt đầu được chia bởi người chia bài, hệ
                                thống có thể hoặc không thể đọc được các lá bài, người chia bài sẽ quét lại các lá bài cho đến khi hệ thống đọc được
                                những lá bài (Nếu hệ thống vẫn không đọc được được bài, ván chơi hiện tại sẽ bị hủy và tất cả cược sẽ được hoàn trả).
                                6. Trong trường hợp giải quyết không chính xác, các khoản thanh toán sẽ được giải quyết dựa trên kết quả video hiện tại.
                                7. Do kết nối mạng thất bại dẫn đến ván chơi không thể hoàn thành, hệ thống sẽ hủy bỏ ván chơi hiện tại và hoàn trả tất
                                cả các cược. ( nếu sau khi người chơi có Blackjack sau khi kết nối mạng thất bại, hệ thống sẽ dựa trên cơ sở tỷ lệ cược
                                2:3 để thanh toán cho người chơi
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


Game21dianVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Game21dianVn))));