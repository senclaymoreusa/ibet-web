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

export class BetRuleFourVn extends React.Component {
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
                                <a href="/vi/for_member">Luật chơi Thể thao >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">Tennis</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">Bóng rổ</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a href="/">Bóng bầu dục Mỹ</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a href="/">Hockey trên băng</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a href="/">Bóng rổ</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)}>
                                <a href="/">Bóng ném</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)}>
                                <a href="/">Bóng chuyền</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} onClick={this.onClick.bind(this,8)}>
                                <a href="/">Bóng chuyền bãi biển</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} onClick={this.onClick.bind(this,9)}>
                                <a href="/">Futsal</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} onClick={this.onClick.bind(this,10)}>
                                <a href="/">Cầu lông</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} onClick={this.onClick.bind(this,11)}>
                                <a href="/">Rugby Union League</a>
                            </li>
                            <li className={this.state.current === 12 ? "Active" : ""} onClick={this.onClick.bind(this,12)}>
                                <a href="/">Phi tiêu</a>
                            </li>
                            <li className={this.state.current === 13 ? "Active" : ""} onClick={this.onClick.bind(this,13)}>
                                <a href="/">Bida</a>
                            </li>
                            <li className={this.state.current === 14 ? "Active" : ""} onClick={this.onClick.bind(this,14)}>
                                <a href="/">Table Tennis</a>
                            </li>
                            <li className={this.state.current === 15 ? "Active" : ""} onClick={this.onClick.bind(this,15)}>
                                <a href="/">Golf</a>
                            </li>
                            <li className={this.state.current === 16 ? "Active" : ""} onClick={this.onClick.bind(this,16)}>
                                <a href="/">Cricket</a>
                            </li>
                            <li className={this.state.current === 17 ? "Active" : ""} onClick={this.onClick.bind(this,17)}>
                                <a href="/">Bóng đá ảo League(VFL)</a>
                            </li>
                            <li className={this.state.current === 18 ? "Active" : ""} onClick={this.onClick.bind(this,18)}>
                                <a href="/">E-Sports</a>
                            </li>
                            <li className={this.state.current === 19 ? "Active" : ""} onClick={this.onClick.bind(this,19)}>
                                <a href="/">DOTA2</a>
                            </li>
                            <li className={this.state.current === 20 ? "Active" : ""} onClick={this.onClick.bind(this,20)}>
                                <a href="/">Counter Strike: GO</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Tennis</h2>
                            <p> QUAN TRỌNG
                                <br />
                                <br /> ※ Trong trường hợp bỏ cuộc và đi qua bất kỳ người chơi nào, tất cả các cược không xác định sẽ bị coi là vô hiệu
                                ※ Trong trường hợp có sự chậm trễ (mưa, bóng tối) tất cả các thị trường vẫn không ổn định và giao dịch sẽ được
                                tiếp tục ngay khi trận đấu tiếp tục.
                                <br /> ※ Trong trường hợp điểm phạt được trao cho trọng tài, mọi cược đặt cho trận đấu sẽ dừng.
                                <br /> ※ Trong trường hợp trận đấu kết thúc trước khi một số điểm / trò chơi kết thúc, tất cả các thị trường liên quan
                                đến điểm / trò chơi bị ảnh hưởng đều bị coi là vô hiệu.
                                <br />
                                <br />
                                <br />
                                <br />
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở cửa với điểm không chính xác có ảnh hưởng đáng kể đến trận đấu, chúng tôi bảo lưu quyền
                                hủy bỏ đặt cược.
                                <br /> ※ Nếu các cầu thủ / đội được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.
                                <br /> ※ Nếu một người chơi nghỉ bỏ cuộc tất cả các thị trường chưa quyết định được coi là vô hiệu.
                                <br /> ※ Nếu trận đấu được quyết định bởi trận đấu tie-break, nó sẽ được coi là hiệp thứ 3 ※ Mỗi tie-break hoặc Match
                                tie-break tính là 1 trò chơi.
                                <br /> ※ Đôi khi siêu tie-break được tính là 1 trò chơi
                                <br />
                                <br />
                                <br />
                                <br /> Các thị trường đặc biệt
                                <br />
                                <br /> Lẻ/ Chẵn số lượng của games
                                <br /> Lẻ và thậm chí là số lượng các trận đấu, được xác định bởi một đội kết quả trận chung kết cộng với tổng số trận
                                đấu để xác định số lần đặt cược.
                                <br />
                                <br /> Game chấp (Bao gồm cá cược đặt 1st Set)
                                <br /> Xử lý đặt cược sẽ dựa trên: Người chơi nào sẽ giành chiến thắng sau khi áp dụng Tỷ lệ Game vào điểm số cuối
                                cùng
                                <br /> Set chấp
                                <br /> Giải quyết đặt cược sẽ dựa trên: Người chơi nào sẽ giành chiến thắng sau khi Set Spread được áp dụng cho điểm
                                số cuối cùng.
                                <br />
                                <br /> Tổng số của set (với game 3 set)
                                <br /> Dự đoán trò chơi cho tổng số bao nhiêu set. Có thể lựa chọn đặt cược là: 2 và 3 set
                                <br /> Tổng số của set (với game 5 set)
                                <br /> Dự đoán trò chơi cho tổng số bao nhiêu set. Có thể lựa chọn đặt cược là: 3, 4 và 5set.
                                <br /> Tổng số (Bao gồm cược đặt set 1)
                                <br /> Cược được xác định bởi tổng số trận đấu trong kết quả cuối cùng của Sự kiện. Nếu tổng số vượt quá dòng trên/dưới
                                đã được chỉ định thì kết quả thắng kết thúc là trên: nếu tổng số ít hơn dòng Trên / dưới đường được chỉ định
                                thì kết quả trúng thưởng sẽ dưới.
                                <br /> Đặt kết quả chính xác(với game 3 set)
                                <br /> Dự đoán kết quả cuối cùng của trò chơi, Có thể đặt cược tùy chọn:
                                <br /> 2:1 - Đội chủ nhà 2 set, đội khách 1set.
                                <br /> 2:0 - Đội chủ nhà 2 set, đội khách 0set.
                                <br /> 0:2 - Đội chủ nhà 0 set, đội khách 2set.
                                <br /> 1:2 - Đội chủ nhà 1set, đội khách 2 set.
                                <br />
                                <br /> Đặt kết quả chính xác(với game 5 set)
                                <br /> Dự đoán kết quả cuối cùng của trò chơi, Có thể đặt cược tùy chọn:
                                <br /> 3:2 - Đội chủ nhà 3 set, đội khách 2set.
                                <br /> 3:1 - Đội chủ nhà 3 set, đội khách 1set.
                                <br /> 3:0 - Đội chủ nhà 3set, đội khách 0set.
                                <br /> 0:3 - Đội chủ nhà 0 set, đội khách 3set.
                                <br /> 1:3 - Đội chủ nhà 1set, đội khách 3set.
                                <br /> 2:3 - Đội chủ nhà 2 set, đội khách 3set.
                                <br />
                                <br /> In-Play - Tổng số game (Bao gồm 1-5 set))
                                <br /> Dự đoán trận đấu cuối cùng của đội. Nếu số game nhiều hơn đường Over / under line đã được chỉ định thì kết quả
                                thắng sẽ kết thúc; nếu số game nhỏ hơn đường Over / under line đã được chỉ định thì kết quả chiến thắng là dưới.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Bóng Rổ</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Thị trường không xem xét làm thêm giờ trừ khi có quy định khác.
                                <br />
                                <br /> Nguyên tắc Xử lý và Huỷ bỏ
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu đầu tiên,
                                cá cược sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi bảo lưu quyền
                                hủy bỏ cược.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi bảo lưu quyền
                                hủy bỏ cược.
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở với điểm không chính xác có ảnh hưởng đáng kể đến giá, chúng tôi bảo lưu quyền hủy bỏ
                                cược.
                                <br />
                                <br /> Thị trường đặc biệt
                                <br />
                                <br /> Hiệp 1/Cả trận
                                <br /> Half-time/Full-time có nghĩa là đặt cược để dự đoán cả kết quả Hiệp 1 và kết quả Cả trận của một Sự kiện. Có
                                thể đặt cược các tùy chọn là:
                                <br /> Đội chủ nhà/đội chủ nhà: Đội chủ nhà giành chiến thắng hiệp 1 và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Đội chủ nhà/hòa: Đội chủ nhà giành chiến thắng vào hiệp 1 và kết thúc trận đấu cả hai đội đều có kết quả hòa.
                                <br /> Đội chủ nhà/đội khách: Đội chủ nhà giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Hòa/đội chủ nhà: Hai đội hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Hòa/Hòa: Cả hai đội Hòa vào giờ nghỉ giải lao và kết thúc trận đấu vẫn là tỷ số hòa.
                                <br /> Hòa/đội khách: Hai đội hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Đội khách/Đội chủ nhà: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Đội khách/Hòa: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu cả hai đội hòa nhau.
                                <br /> Đội khách/Đội khách: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Điểm Chẵn/Lẻ (Bao gồm cả hiệp 1 và hiệp 2 và Quarter 1 đến 4)
                                <br /> Điểm lẻ và điểm chẵn, được xác định bởi một đội kết quả trận đấu cộng với tổng số điểm để xác định cược.
                                <br /> Điểm chấp (Bao gồm cả hiệp 1 /hiệp 2 và Quarter 1 đến 4)
                                <br /> Điểm chấp nghĩa là đặt cược khi một đối thủ hoặc đội được nhận một sự khởi đầu ảo (dẫn đầu bằng cách bắt đầu
                                trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ hoặc đội có điểm số tốt hơn sau khi thêm điểm chấp này
                                vào kết quả.
                                <br /> Tổng số chấp (Bao gồm cả hiệp 1 /hiệp 2 và Quarter 1 đến 4)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số vượt quá Trên/Dưới Đã được
                                chỉ định thì kết quả thắng sẽ là Trên; nếu tổng số ít hơn dòng Trên / dưới đường được chỉ định trước thì kết
                                quả chiến thắng là dưới.
                                <br /> Tổng đội nhà/đội khách
                                <br /> Dự đoán điểm số cuối cùng của đội. Nếu đội nhà đội khách ghi bàn nhiều hơn Trên/Dưới đường được chỉ định thì
                                kết quả thắng sẽ là Trên; nếu điểm số đội nhà/đội khách ít hơn Trên/Dưới thì kết quả thắng là dưới.
                                <br /> Cược trận đấu và tổng số
                                <br /> Matchbet và Totals có nghĩa là cá cược cho cả hai dự đoán: trận đấu sẽ dẫn đến thắng cho đội chỉ nhà hoặc đội
                                khách hay không; và liệu tổng số bàn thắng trong kết quả cuối cùng của một sự kiện sẽ là Trên/Dưới.
                                <br /> Các tùy chọn đặt cược sau có sẵn:
                                <br /> Đội chủ nhà &amp; Over- cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng nằm trên chỉ số chỉ định trước.
                                <br /> Đội chủ nhà &amp; Dưới - cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng nằm dưới chỉ số chỉ định trước.
                                <br /> Đội khách &amp; Trên – cược thắng nếu đội khách thắng và tổng số bàn thắng nằm trên đường chỉ định trước.
                                <br /> Đội khách &amp; Dưới - cược giành chiến thắng nếu đội khách thắng và tổng số bàn thắng nằm dưới đường được chỉ
                                định trước.
                                <br /> Cược thắng ngoài lề
                                <br /> Trong cả thời gian trò chơi trên cả hai mặt ở cuối của điểm số cuối cùng, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được bởi đội chiến thắng và số điểm ghi được của đội thua. Có thể đặt cược các tùy chọn là:
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm lớn hơn 10 điểm (không bao gồm 10).
                                <br /> Đặt đội chủ nhà để giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số 1-5 điểm.
                                <br /> Cược đội khách chiến thắng, và giành điểm lớn hơn 10 điểm (không bao gồm 10).
                                <br /> Cược đội khách giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội khách giành chiến thắng, và giành điểm số 1-5 điểm.
                                <br /> Hiệp đấu có điểm số cao nhất
                                <br /> Dự đoán số điểm cao nhất trong quarter 1, quarter 2, quarter 3, quarter 4 hoặc tương đương.
                                <br /> Không cược hòa (Bao gồm Hiệp 1/ Hiệp 2 và cược quarter 1 đến 4)
                                <br /> Nếu kết quả cuối cùng sau thời gian chơi chính thức hoặc khi kết thúc thời gian đã lên lịch là Hòa, mọi cược
                                sẽ được hoàn lại.
                                <br /> Total margins NBA-ranges
                                <br /> Dự đoán giới hạn điểm của tổng số hiệp. giới hạn được tối ưu cho các trận đấu của giải NBA.
                                <br /> Tổng số điểm thông thường- giới hạn
                                <br /> Dự đoán giới hạn điểm của tổng số hiệp. giới hạn được tối ưu cho các trận đấu không phải của giải NBA.
                                <br /> Tổng 3 khả năng
                                <br /> Điểm số dự đoán cuối cùng có tổng số điểm ít hơn hoặc bằng tổng số Điểm tích chấp.
                                <br /> Cược chấp Châu Âu
                                <br /> Có 3 lựa chọn là đội nhà, đội khách và hòa. Chỉ tính thời gian chính thức, không tính thời gian bù giờ.
                                <br /> Cược chấp 1 điểm – đội đưa ra 1 điểm bắt đầu
                                <br /> Cược đội nhà thắng :
                                <br /> - Chiến thắng cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng.
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thua.
                                <br /> Cược Hòa:
                                <br /> -Chiến thắng chính xác bởi 1 điểm – tất cả cược vào lựa chọn này sẽ chiến thắng.
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thua.
                                <br /> Cược đội khách chiến thắng:
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> - Chiến thắng cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược chấp 1 điểm – đội nhận được 1 điểm khi bắt đầu
                                <br /> Cược vào đội nhà thắng:
                                <br /> -Chiến thắng với bất kì điểm số nào hoặc Hòa - tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> - Thua cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược đội khách chiến thắng:
                                <br /> -Thua bởi chính xác 1 điểm - tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> -Chiến thắng bởi bất kì điểm số nào hoặc thua bởi 2 điểm hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược hòa:
                                <br /> - Thua cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay trận hòa nào - Tất cả các cược đặt cho lựa chọn này đều là thua.
                                <br /> Chấp 2 điểm - Đội đưa ra 2 điểm bắt đầu
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng..
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược hòa:
                                <br /> - Thắng bằng chính xác 2 - Tất cả cược đặt cho lựa chọn này là người chiến thắng - Hòa hoặc thua theo bất kỳ
                                số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược đội khách thắng - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những
                                người chiến thắng - Chiến thắng bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Chấp 2 điểm - Đội nhận được 2 điểm bắt đầu Đội chủ nhà giành chiến thắng - Chiến thắng bằng bất kỳ số điểm hay
                                hòa - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> -- Thua bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Đội khách chiến thắng - Thua chính xác 2 - Tất cả cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm nào hoặc thua 3 hoặc nhiều hơn - Tất cả cược đặt cho lựa chọn này đều là thua
                                Cược hòa:
                                <br /> - Thua 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay hòa - Tất cả các cược đặt cho lựa chọn này đều là thua In-Play - Đội nào
                                thắng cuộc đua tới điểm X
                                <br /> Dự đoán đội nào sẽ nhận được điểm X đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là để có được 20 điểm.
                                <br /> X là: 20, 30, 40 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.
                                <br /> In-Play - Ai đạt được điểm X
                                <br /> Dự đoán trò chơi mà đội có điểm X. Ví dụ: Điểm số hiện tại 20-19, đội khách đi được 1 điểm, đội khách có 40
                                điểm.
                                <br /> X là: 10,15,20,25 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2>Bóng bầu dục Mỹ</h2>
                            <p>Các Điều Quan Trọng
                                <br />
                                <br /> ※ Trong trường hợp cản trở (mưa, trời tối) tất cả các thị trường cược sẽ duy trì không ổn định do đó mọi giao
                                dịch sẽ tiếp tục ngay khi trận đấu tiếp tục.
                                <br />
                                <br /> ※ Các thị trường cược không tính thời gian thi đấu thêm giờ trừ khi được nêu ra.
                                <br />
                                <br /> Các Điều Luật Thanh Toán Và Hủy Cược
                                <br />
                                <br /> ※ Nếu thị trường cược vẫn mở để tiến hành đặt cược với số điểm không chính xác và làm ảnh hưởng đến giá trị
                                cược, Nhà Cái bảo lưu quyền hủy cược.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 89 giây), chúng tôi có quyền hủy
                                bỏ cược.
                                <br />
                                <br /> ※ Nếu một điểm sai được hiển thị, chúng tôi bảo lưu quyền vô hiệu cược cho khung thời gian này.
                                <br />
                                <br /> ※ Nếu các đội được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.
                                <br />
                                <br /> ※ Trong trường hợp trận đấu bị hủy hoặc hoãn lại thì tất cả các thị trường đều bị coi là vô hiệu, trừ khi trận
                                đấu tiếp tục trong cùng một lịch trình NFL (thứ năm – thứ tư sân vận động địa phương)).
                                <br />
                                <br /> Các thị trường đặc biệt
                                <br />
                                <br /> Giờ nghỉ giải lao / Toàn thời gian
                                <br /> Half-time / Full-time có nghĩa là đặt cược để dự đoán cả kết quả nửa trận và kết quả cả trận của một Sự kiện.
                                Có thể đặt cược được:
                                <br /> Đội chủ nhà / đội chủ nhà: Đội chủ nhà giành chiến thắng trong giờ nghỉ giải lao và kết thúc trận đấu đội chủ
                                nhà thắng.
                                <br /> Đội chủ nhà / hòa: đội chủ nhà giành chiến thắng tại thời gian nghỉ giải lao và kết thúc trận đấu cả hai đội
                                đều hòa.
                                <br /> Đội chủ nhà / đội khách: Đội chủ nhà giành chiến thắng trong giờ nghỉ giải lao và kết thúc trận đấu đội khách
                                thắng.
                                <br /> Hòa / đội chủ nhà: Cả hai đội đều hòa nhau vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Hòa / hòa: Cả hai đội đều hòa nhau vào giờ nghỉ giải lao và kết thúc trận đấu cả hai đội đều nhau Hòa / đội:
                                Cả hai đội đều hòa nhau vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Đội khách / Đội chủ nhà: Đội đi giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Đội khách / Đội hòa: Đội đi giành chiến thắng ở giờ nghỉ giải lao và kết thúc trận đấu cả hai đội đều hòa.
                                <br /> Đội khách / Đội khách: Đội đi giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng Số
                                lẻ/chẵn( Bao gồm cả hiệp1)
                                <br /> Các điểm lẻ và chẵn, được xác định bởi một đội kết quả trận chung kết cộng với tổng số điểm để xác định số lần
                                đặt cược. Chỉ có thời gian bình thường, không bao gồm thêm giờ.
                                <br /> Số lẻ/chẵn(thời gian thêm giờ)
                                <br /> Các điểm lẻ và chẵn, được xác định bởi một đội kết quả trận chung kết cộng với tổng số điểm để xác định số lần
                                đặt cược. Đặt cược này có tính thêm giờ.
                                <br /> Điểm kết quả hiệp 1
                                <br /> Điểm Phẳng nghĩa là đặt cược khi một đối thủ hoặc đội được nhận một sự khởi đầu ảo (dẫn đầu bằng cách bắt đầu
                                trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm số tốt hơn sau khi thêm
                                điểm cho kết quả.
                                <br /> 1st Half Points Spreads nghĩa là đặt cược vào kết quả của hiệp một từ điểm số giải đấu nửa đầu để quyết định.
                                <br /> Điểm phẳng ( Bao gồm cả hiệp 2/ thời gian thêm giờ)
                                <br /> Điểm Phẳng nghĩa là đặt cược khi một đối thủ hoặc đội được nhận một sự khởi đầu ảo (dẫn đầu bằng cách bắt đầu
                                trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm số tốt hơn sau khi thêm
                                điểm cho một kết quả. Đặt cược này có tính thêm giờ.
                                <br /> 1st Half - Total Spreads
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số vượt quá Trên/Dưới đã được
                                chỉ định thì kết quả thắng sẽ là Tài; nếu tổng số ít hơn Trên/dưới đường được chỉ định trước thì kết quả chiến
                                thắng là Dưới.
                                <br /> 1st Half - Total Spread nghĩa là cược vào kết quả của hiệp một từ số điểm giải đấu đầu tiên để quyết định.
                                <br /> Total Spreads (Bao gồm thời gian hiệp 2/bù giờ)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số vượt quá Trên/Dưới đã được
                                chỉ định thì kết quả thắng sẽ là Tài; nếu tổng số ít hơn Trên/dưới đường được chỉ định trước thì kết quả chiến
                                thắng là Dưới. cược này bao gồm cả thời gian bù giờ.
                                <br /> Chiến thắng ngoài lề
                                <br /> Trong cả thời gian trò chơi trên cả hai mặt ở cuối của điểm số cuối cùng, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được bởi đội chiến thắng và số điểm ghi được của đội thua. Có thể đặt cược các tùy chọn là:
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm lớn hơn 14 điểm (không bao gồm 14).
                                <br /> Đặt đội chủ nhà để giành chiến thắng, và giành điểm số của 8-14 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số 1-7 điểm.
                                <br /> Hai đội hòa.
                                <br /> Cược đội để giành chiến thắng, và giành điểm lớn hơn 14 điểm (không bao gồm 10).
                                <br /> Cược đội đi để giành chiến thắng, và giành điểm số của 8-14 điểm.
                                <br /> Cược đội đi để giành chiến thắng, và giành điểm số 1-7 điểm.
                                <br /> Hiệp đấu có số điểm cao nhất
                                <br /> Dự đoán số điểm cao nhất trong quarter 1, quarter2, quarter3, quarter 4 hoặc tương đương.
                                <br /> Tổng số điểm đội nhà / Tổng số điểm của đội khách
                                <br /> Dự đoán điểm số cuối cùng của đội. Nếu đội nhà/đội khách ghi bàn nhiều hơn Trên/Dưới đã được chỉ định thì kết
                                quả thắng sẽ là Trên; nếu điểm số của Đội nhà/Đội khách thấp hơn Trên/Dưới đã được chỉ định thì kết quả thắng
                                thắng là dưới.
                                <br /> Trong trận – cược ngoài lề Bóng đá Mỹ, bao gồm cả thời gian bù giờ
                                <br /> Vào cuối trò chơi, điểm số đội chủ nhà trừ đi khoảng cách điểm số đội khách. Cược này có tính thêm giờ. Có thể
                                đặt cược các tùy chọn là:
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm lớn hơn 13 điểm.
                                <br /> Đặt cược đội chủ nhà để giành chiến thắng, và giành chiến thắng 7-13 điểm.
                                <br /> Đặt cược đội chủ nhà để giành chiến thắng, và giành chiến thắng 1-6 điểm.
                                <br /> Cược hai đội hòa.
                                <br /> Đặt đội chủ nhà thua, và mất 1-6 điểm.
                                <br /> Đặt cược đội chủ nhà thua, và mất 7-13 điểm.
                                <br /> Cược đội chủ nhà thua, và mất điểm lớn hơn 13 điểm.
                                <br /> Trong trận đấu - Đội nào thắng cuộc đua đến điểm X
                                <br /> Dự đoán đội nào sẽ nhận được điểm X đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là đội có được điểm
                                thứ 20.
                                <br /> X là: 20, 30, 40 ... vv
                                <br /> Vào cuối trò chơi, không có đội nào có điểm X, tỷ lệ thắng cược sẽ bị hủy.
                                <br /> Trong trận - Điểm tiếp theo (đội), bao gồm cả thời gian làm thêm giờ
                                <br /> Cá cược bắt đầu từ thời điểm này, đội nào sẽ đến điểm tiếp theo. Có thể đặt cược các lựa chọn là: đội nhà, đội
                                khách và không có. Việc đặt cược này bao gồm cả thêm giờ.
                                <br /> In-Play - Các điểm tiếp theo (đội) của giờ nghỉ giải lao
                                <br /> Cá cược bắt đầu từ thời điểm này, đội nào sẽ đến điểm tiếp theo. Có thể đặt cược các lựa chọn là: đội nhà, đội
                                khách và không có. Sự kiện cá cược chỉ bao gồm giờ giải lao.
                                <br /> Trong trận - Điểm tiếp theo (loại), bao gồm cả làm thêm giờ
                                <br /> Cược bắt đầu từ thời điểm này, cách tiếp theo để ghi bàn. Có thể đặt cược các lựa chọn là: touchdown, field
                                goal, safety và không có. Việc đặt cược này bao gồm cả làm thêm giờ.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2>Hockey trên băng</h2>
                            <p>Quan Trọng
                                <br />
                                <br /> ※ Tất cả các thị trường (trừ thời gian, ngoài giờ và thị trường bắn súng) chỉ được xem xét cho thời gian bình
                                thường trừ khi nó được đề cập trên thị trường
                                <br /> ※ Nếu trận đấu bị gián đoạn và tiếp tục trong vòng 48 giờ sau khi tạm dừng thì tất cả các cược mở sẽ được giải
                                quyết với kết quả cuối cùng. Nếu không, tất cả các cược không xác định được coi là vô hiệu.
                                <br />
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở cửa khi các sự kiện sau đã diễn ra: bàn thắng và hình phạt, chúng tôi bảo lưu quyền
                                hủy bỏ cá cược.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi có quyền hủy bỏ
                                cược.
                                <br />
                                <br /> ※ Nếu điểm sai được nhập vào tất cả các thị trường sẽ bị hủy trong thời gian khi điểm không chính xác được hiển
                                thị.
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu đầu tiên
                                thì cá cược sẽ bị hủy.
                                <br />
                                <br /> Các thị trường đặc biệt
                                <br />
                                <br /> Điểm chính xác
                                <br /> Điểm chính xác có nghĩa là cá cược để dự đoán số điểm cuối cùng vào cuối toàn thời gian. Tùy chọn "Khác" chỉ
                                ra rằng nếu kết quả của không tùy chọn bên trong ra, tùy chọn "khác" sẽ thắng. Chỉ được tính thời gian bình thường,
                                giờ phụ trội và đá luân lưu không được tính.
                                <br /> Cược lẻ / chẵn (Bao gồm set 1/2/3)
                                <br /> Bàn thắng lẻ và chẵn, được xác định bởi kết quả trận chung kết cộng với tổng số điểm để xác định cược. Chỉ tính
                                thời gian thi đấu chính thức , hiệp phụ và đá luân lưu không được tính. Cược lẻ và chẵn có thể tính từ kết quả
                                của giai đoạn 1st / 2nd / 3rd trong suốt thời gian thi đấu để quyết định.
                                <br /> Cược lẻ/ chẵn( bao gồm thời gian hiệp phụ và đá luân lưu)
                                <br /> Bàn thắng lẻ và chẵn, được xác định bởi một đội kết quả trận chung kết cộng với tổng số điểm để xác định cược.
                                Bao gồm cả làm thêm giờ và loạt sút luân lưu.
                                <br /> Cơ hội kép (Bao gồm cả set1/2/3)
                                <br /> Dự đoán kết quả cuối cùng, với một cơ hội gấp đôi. Có thể đặt cược được:
                                <br /> 1 or 2 - Nếu kết quả lựa chọn lúc đầu là đội nhà hoặc đội khách sau đó đặt cược vào tùy chọn này là người chiến
                                thắng.
                                <br /> 1 or X - Nếu kết quả lựa chọn lúc đầu là đội nhà hoặc hòa sau đó đặt cược vào tùy chọn này là người chiến thắng.
                                <br /> X or 2 - Nếu kết quả lựa chọn lúc đầu là hòa hoặc đội khách sau đó đặt cược vào tùy chọn này là người chiến
                                thắng.
                                <br /> Hòa, hoàn trả( bao gồm cả set1/2/3 /.
                                <br /> Nếu kết quả cuối cùng sau thời gian thi đấu chính thức hoặc vào cuối thời gian dự kiến là hòa, tất cả cược sẽ
                                được hoàn trả.
                                <br /> Nếu thời gian của trận đấu hòa, tất cả cược sẽ được hoàn trả.
                                <br /> Goal Spreads (Including 1st/2nd/3rd Period Bets)
                                <br /> Đích Mục tiêu có nghĩa là đặt cược khi một đối thủ cạnh tranh hoặc nhóm nhận được sự khởi đầu ảo (dẫn đầu bằng
                                cách bắt đầu trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm số tốt hơn
                                sau khi tính cược chấp cho kết quả. Chỉ được tính thời gian bình thường, giờ phụ trội và đá luân lưu không được
                                tính.
                                <br /> Goal Spreads (incl. OT)
                                <br /> Đích Mục tiêu có nghĩa là đặt cược khi một đối thủ cạnh tranh hoặc nhóm nhận được sự khởi đầu ảo (dẫn đầu bằng
                                cách bắt đầu trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm số tốt hơn
                                sau khi thêm cược chấp cho kết quả. Bao gồm cả làm thêm giờ và loạt sút luân lưu.
                                <br /> Total Spreads (Including 1st/2nd/3rd Period Bets)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số điểm vượt quá dòng trên/
                                dưới đã được chỉ định thì kết quả thắng sẽ là trên ; nếu tổng số ít hơn dòng Trên / dưới đường được chỉ định
                                thì kết quả trúng thưởng sẽ dưới.
                                <br /> Chỉ được tính thời gian bình thường, hiệp phụ và đá luân lưu không được tính.
                                <br /> Total Spreads (incl. OT)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số tiền vượt quá dòng trên/
                                dưới đã được chỉ định thì kết quả thắng sẽ là trên; nếu tổng số ít hơn dòng Trên / dưới đường chỉ định trước
                                thì kết quả thắng sẽ nằm dưới. Bao gồm cả làm thêm giờ và loạt sút luân lưu.
                                <br /> Matchbet and Totals
                                <br /> Matchbet và Totals có nghĩa là cá cược cho cả hai dự đoán: trận đấu sẽ dẫn đến chiến thắng cho đội chủ nhà hay
                                đội khách hoặc hòa và tống số bàn thắng trong cả trận sẽ là trên hoặc dưới.
                                <br /> Các tùy chọn đặt cược sau có sẵn:
                                <br /> Cược đội khách-,trên :nếu đội khách thắng và tổng số bàn thắng vượt quá dòng được chỉ định.
                                <br /> Cược hòa -trên :nếu trận đấu hòa và tổng số bàn thắng vượt quá dòng được chỉ định.
                                <br /> Cược đội chủ nhà -trên: nếu đội chủ nhà thắng và tổng số bàn thắng vượt quá dòng được chỉ định.
                                <br /> Cược đội khách -dưới: nếu đội khách thắng và tổng số bàn thắng dưới dòng được chỉ định.
                                <br /> Cược hòa -dưới: nếu đội trận đấu hòa và tổng số bàn thắng dưới dòng được chỉ định.
                                <br /> Cược đội chủ nhà -dưới: nếu đội chủ nhà thắng và tổng số bàn thắng dưới dòng được chỉ định.
                                <br /> Winning Margins
                                <br /> Trong thời gian trận đấu điểm số cuối cùng của hai bên có thể được cược, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được bởi đội chiến thắng và số điểm ghi được của đội thua. Có thể đặt cược được Cược đội chủ
                                nhà để giành chiến thắng, và giành được điểm số lớn hơn 10 điểm (không bao gồm 10).
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số của 1-5 điểm.
                                <br /> Hai đội gắn liền.
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn hơn 10 điểm (không bao gồm 10)).
                                <br /> Cược đội khách giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số của 1-5 điểm.
                                <br /> 2 cách (bao gồm hiệp phụ)
                                <br /> 2 cách có nghĩa là đánh cược vào đội nào thắng (không có tie). Bao gồm cả làm thêm giờ và loạt sút luân lưu.
                                <br /> Tổng của đội nhà/ đội khách
                                <br /> Dự đoán điểm số cuối cùng của đội. Nếu đội nhà / đội khách ghi bàn nhiều hơn dòng trên / dưới được chỉ định
                                thì kết quả thắng sẽ là trên; nếu số điểm của đội nhà / đội khách ít hơn đường trên/dưới được chỉ định thì kết
                                quả thắng sẽ nằm dưới. Chỉ được tính thời gian bình thường, giờ phụ trội và đá luân lưu không được tính.
                                <br /> Chấp Châu Âu
                                <br /> Có ba lựa chọn cho đội chủ nhà, hòa và đội khách. Chỉ được tính thời gian bình thường, giờ phụ trội và đá luân
                                lưu không được tính.
                                <br /> Chấp 1 bóng- Đội bắt đầu có 1 bóng
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng 2 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược hòa:
                                <br /> - Thắng bằng chính xác 1 - Tất cả cược đặt cho lựa chọn này là người chiến thắng.
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Đội khách giành chiến thắng:
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thắng cuộc.
                                <br /> - Chiến thắng bằng 2 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người thua.
                                <br /> Chấp 1 bóng. Đội bắt đầu có đầy đủ bóng
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay hòa - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Thua 2 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này là thua.
                                <br /> Đội khách giành chiến thắng:
                                <br /> - Thua bởi chính xác 1 - Tất cả cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm nào hoặc thua bởi 2 hoặc nhiều hơn - Tất cả cược đặt cho lựa chọn này đều
                                là thua.
                                <br /> Ví dụ:
                                <br /> Cược hòa :
                                <br /> - Thua 2 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay trận đấu hòa - Tất cả các cược đặt cho lựa chọn này đều là thua.
                                <br /> Chấp 2 bóng- Đội bắt đầu có 2 bóng
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược hòa:
                                <br /> - Thắng bằng chính xác 2 - Tất cả cược đặt cho lựa chọn này là người chiến thắng.
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Đội khách giành chiến thắng:
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thắng cuộc.
                                <br /> - Chiến thắng bằng 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người thua.
                                <br /> Chấp 2 bóng. Đội bắt đầu có đầy đủ 2 bóng
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay hòa - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Thua 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này là thua.
                                <br /> Đội khách giành chiến thắng:
                                <br /> - Thua bởi chính xác 2 - Tất cả cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm nào hoặc thua bởi 3 hoặc nhiều hơn - Tất cả cược đặt cho lựa chọn này đều
                                là thua.
                                <br /> Cược hòa:
                                <br /> - Thua 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay trận đấu hòa - Tất cả các cược đặt cho lựa chọn này đều là thua.
                                <br /> In-Play – Bàn thắng tiếp theo( Chỉ tính trong hiệp phụ!)
                                <br /> Cược bắt đầu từ thời điểm hiệp phụ, đội nào có được bàn thắng tiếp theo. Có thể đặt cược các lựa chọn là: đội
                                nhà, đội khách và không có mục tiêu. Sự kiện cá cược chỉ bao gồm thêm giờ.
                                <br /> In-Play - Ai thắng phần còn lại của trận đấu (chỉ dành cho hiệp phụ)?
                                <br /> Các cược sẽ được chấp nhận sau thời gian giải quyết, thời gian còn lại trong chiến thắng sẽ được áp dụng. Trong
                                bất kỳ cược chấp nhận trước khi bóng vào không có tính. Có thể đặt cược các lựa chọn là: đội chủ nhà, đội khách
                                và hòa. Sự kiện cá cược chỉ bao gồm thêm giờ.
                                <br /> In-Play - Bàn thắng tiếp theo( Chỉ tính trong luân lưu)
                                <br /> Cược bắt đầu từ thời điểm này, đội nào đạt được bàn thắng tiêu tiếp theo. Có thể đặt cược các lựa chọn là: đội
                                nhà, đội khách và không có mục tiêu. Sự kiện cá cược chỉ trong luân lưu .
                                <br /> In-Play - Đội nào sẽ giành chiến thắng trong loạt đá luân lưu phạt?
                                <br /> Cá cược rằng đội giành được chiến thắng trong luân lưu. Có thể đặt cược các lựa chọn là: đội nhà, đội khách.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                        <h2>Bóng Rổ</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Thị trường không xem xét làm thêm giờ trừ khi có quy định khác.
                                <br />
                                <br /> Nguyên tắc Xử lý và Huỷ bỏ
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu đầu tiên,
                                cá cược sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi bảo lưu quyền
                                hủy bỏ cược.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi bảo lưu quyền
                                hủy bỏ cược.
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở với điểm không chính xác có ảnh hưởng đáng kể đến giá, chúng tôi bảo lưu quyền hủy bỏ
                                cược.
                                <br />
                                <br /> Thị trường đặc biệt
                                <br />
                                <br /> Hiệp 1/Cả trận
                                <br /> Half-time/Full-time có nghĩa là đặt cược để dự đoán cả kết quả Hiệp 1 và kết quả Cả trận của một Sự kiện. Có
                                thể đặt cược các tùy chọn là:
                                <br /> Đội chủ nhà/đội chủ nhà: Đội chủ nhà giành chiến thắng hiệp 1 và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Đội chủ nhà/hòa: Đội chủ nhà giành chiến thắng vào hiệp 1 và kết thúc trận đấu cả hai đội đều có kết quả hòa.
                                <br /> Đội chủ nhà/đội khách: Đội chủ nhà giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Hòa/đội chủ nhà: Hai đội hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Hòa/Hòa: Cả hai đội Hòa vào giờ nghỉ giải lao và kết thúc trận đấu vẫn là tỷ số hòa.
                                <br /> Hòa/đội khách: Hai đội hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Đội khách/Đội chủ nhà: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Đội khách/Hòa: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu cả hai đội hòa nhau.
                                <br /> Đội khách/Đội khách: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Điểm Chẵn/Lẻ (Bao gồm cả hiệp 1 và hiệp 2 và Quarter 1 đến 4)
                                <br /> Điểm lẻ và điểm chẵn, được xác định bởi một đội kết quả trận đấu cộng với tổng số điểm để xác định cược.
                                <br /> Điểm chấp (Bao gồm cả hiệp 1 /hiệp 2 và Quarter 1 đến 4)
                                <br /> Điểm chấp nghĩa là đặt cược khi một đối thủ hoặc đội được nhận một sự khởi đầu ảo (dẫn đầu bằng cách bắt đầu
                                trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ hoặc đội có điểm số tốt hơn sau khi thêm điểm chấp này
                                vào kết quả.
                                <br /> Tổng số chấp (Bao gồm cả hiệp 1 /hiệp 2 và Quarter 1 đến 4)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số vượt quá Trên/Dưới Đã được
                                chỉ định thì kết quả thắng sẽ là Trên; nếu tổng số ít hơn dòng Trên / dưới đường được chỉ định trước thì kết
                                quả chiến thắng là dưới.
                                <br /> Tổng đội nhà/đội khách
                                <br /> Dự đoán điểm số cuối cùng của đội. Nếu đội nhà đội khách ghi bàn nhiều hơn Trên/Dưới đường được chỉ định thì
                                kết quả thắng sẽ là Trên; nếu điểm số đội nhà/đội khách ít hơn Trên/Dưới thì kết quả thắng là dưới.
                                <br /> Cược trận đấu và tổng số
                                <br /> Matchbet và Totals có nghĩa là cá cược cho cả hai dự đoán: trận đấu sẽ dẫn đến thắng cho đội chỉ nhà hoặc đội
                                khách hay không; và liệu tổng số bàn thắng trong kết quả cuối cùng của một sự kiện sẽ là Trên/Dưới.
                                <br /> Các tùy chọn đặt cược sau có sẵn:
                                <br /> Đội chủ nhà &amp; Over- cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng nằm trên chỉ số chỉ định trước.
                                <br /> Đội chủ nhà &amp; Dưới - cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng nằm dưới chỉ số chỉ định trước.
                                <br /> Đội khách &amp; Trên – cược thắng nếu đội khách thắng và tổng số bàn thắng nằm trên đường chỉ định trước.
                                <br /> Đội khách &amp; Dưới - cược giành chiến thắng nếu đội khách thắng và tổng số bàn thắng nằm dưới đường được chỉ
                                định trước.
                                <br /> Cược thắng ngoài lề
                                <br /> Trong cả thời gian trò chơi trên cả hai mặt ở cuối của điểm số cuối cùng, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được bởi đội chiến thắng và số điểm ghi được của đội thua. Có thể đặt cược các tùy chọn là:
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm lớn hơn 10 điểm (không bao gồm 10).
                                <br /> Đặt đội chủ nhà để giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành điểm số 1-5 điểm.
                                <br /> Cược đội khách chiến thắng, và giành điểm lớn hơn 10 điểm (không bao gồm 10).
                                <br /> Cược đội khách giành chiến thắng, và giành điểm số của 6-10 điểm.
                                <br /> Cược đội khách giành chiến thắng, và giành điểm số 1-5 điểm.
                                <br /> Hiệp đấu có điểm số cao nhất
                                <br /> Dự đoán số điểm cao nhất trong quarter 1, quarter 2, quarter 3, quarter 4 hoặc tương đương.
                                <br /> Không cược hòa (Bao gồm Hiệp 1/ Hiệp 2 và cược quarter 1 đến 4)
                                <br /> Nếu kết quả cuối cùng sau thời gian chơi chính thức hoặc khi kết thúc thời gian đã lên lịch là Hòa, mọi cược
                                sẽ được hoàn lại.
                                <br /> Total margins NBA-ranges
                                <br /> Dự đoán giới hạn điểm của tổng số hiệp. giới hạn được tối ưu cho các trận đấu của giải NBA.
                                <br /> Tổng số điểm thông thường- giới hạn
                                <br /> Dự đoán giới hạn điểm của tổng số hiệp. giới hạn được tối ưu cho các trận đấu không phải của giải NBA.
                                <br /> Tổng 3 khả năng
                                <br /> Điểm số dự đoán cuối cùng có tổng số điểm ít hơn hoặc bằng tổng số Điểm tích chấp.
                                <br /> Cược chấp Châu Âu
                                <br /> Có 3 lựa chọn là đội nhà, đội khách và hòa. Chỉ tính thời gian chính thức, không tính thời gian bù giờ.
                                <br /> Cược chấp 1 điểm – đội đưa ra 1 điểm bắt đầu
                                <br /> Cược đội nhà thắng :
                                <br /> - Chiến thắng cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng.
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thua.
                                <br /> Cược Hòa:
                                <br /> -Chiến thắng chính xác bởi 1 điểm – tất cả cược vào lựa chọn này sẽ chiến thắng.
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thua.
                                <br /> Cược đội khách chiến thắng:
                                <br /> - Hòa hoặc thua với bất kì điểm số nào – tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> - Chiến thắng cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược chấp 1 điểm – đội nhận được 1 điểm khi bắt đầu
                                <br /> Cược vào đội nhà thắng:
                                <br /> -Chiến thắng với bất kì điểm số nào hoặc Hòa - tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> - Thua cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược đội khách chiến thắng:
                                <br /> -Thua bởi chính xác 1 điểm - tất cả cược vào lựa chọn này sẽ thắng.
                                <br /> -Chiến thắng bởi bất kì điểm số nào hoặc thua bởi 2 điểm hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Cược hòa:
                                <br /> - Thua cách biệt 2 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay trận hòa nào - Tất cả các cược đặt cho lựa chọn này đều là thua.
                                <br /> Chấp 2 điểm - Đội đưa ra 2 điểm bắt đầu
                                <br /> Đội chủ nhà giành chiến thắng:
                                <br /> - Chiến thắng bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thắng..
                                <br /> - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược hòa:
                                <br /> - Thắng bằng chính xác 2 - Tất cả cược đặt cho lựa chọn này là người chiến thắng - Hòa hoặc thua theo bất kỳ
                                số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những người thua cuộc.
                                <br /> Cược đội khách thắng - Hòa hoặc thua theo bất kỳ số điểm nào - Tất cả các cược đặt cho lựa chọn này đều là những
                                người chiến thắng - Chiến thắng bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Chấp 2 điểm - Đội nhận được 2 điểm bắt đầu Đội chủ nhà giành chiến thắng - Chiến thắng bằng bất kỳ số điểm hay
                                hòa - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> -- Thua bằng 3 hoặc nhiều hơn – tất cả cược ở lựa chọn này sẽ thua.
                                <br /> Đội khách chiến thắng - Thua chính xác 2 - Tất cả cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm nào hoặc thua 3 hoặc nhiều hơn - Tất cả cược đặt cho lựa chọn này đều là thua
                                Cược hòa:
                                <br /> - Thua 3 hoặc nhiều hơn - Tất cả các cược đặt cho lựa chọn này đều là những người chiến thắng.
                                <br /> - Chiến thắng bằng bất kỳ số điểm hay hòa - Tất cả các cược đặt cho lựa chọn này đều là thua In-Play - Đội nào
                                thắng cuộc đua tới điểm X
                                <br /> Dự đoán đội nào sẽ nhận được điểm X đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là để có được 20 điểm.
                                <br /> X là: 20, 30, 40 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.
                                <br /> In-Play - Ai đạt được điểm X
                                <br /> Dự đoán trò chơi mà đội có điểm X. Ví dụ: Điểm số hiện tại 20-19, đội khách đi được 1 điểm, đội khách có 40
                                điểm.
                                <br /> X là: 10,15,20,25 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 6}>
                        <h2>Bóng Ném</h2>
                            <p>CÁC ĐIỀU QUAN TRỌNG
                                <br />
                                <br /> ※ Tất cả các thị trường cược (ngoại trừ nửa hiệp, hiệp đầu ”Cược Cho Người Chơi ghi được điểm “X” “và “Đội nào
                                sẽ thắng trận đấu tới điểm “X” ) chỉ tính trong thời gian thi đấu chính thức.
                                <br /> ※ Nếu trận đấu diễn ra có một cú ném luân lưu ra 7 mét; Thị trường cược "Ai là người thứ mấy ghi điểm “X”?"
                                Và "Đội nào sẽ thắng trận đấu đến X điểm?" sẽ bị hủy.
                                <br />
                                <br /> Điều khoản Thanh Toán và Hủy Cược
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn và tiếp tục trong vòng 48 giờ sau cú giao bóng đầu tiên, tất cả các cược sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu các tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (nhiều hơn 3 phút), chúng tôi cái
                                sẽ bảo lưu quyền vô hiệu hóa các cược.
                                <br />
                                <br /> ※ Nếu thị trường đặt cược vẫn mở với số điểm không chính xác làm ảnh hưởng đáng kể đến giá cược, chúng tôi bảo
                                lưu quyền hủy bỏ cược.
                                <br />
                                <br /> Các Thị Trường Cược Đặc Biệt
                                <br />
                                <br /> Cược Nửa Trận/Nguyên Trận
                                <br /> Cược Nửa Trận/Nguyên Trận nghĩa là cược dự đoán kết quả nửa trận và nguyên trận của một trận đấu .Các lựa chọn
                                cược như:
                                <br /> Đội chủ nhà / đội chủ nhà: Đội chủ nhà giành chiến thắng trong nửa trận đầu và kết thúc trận đấu đội chủ nhà
                                thắng.
                                <br /> Đội chủ nhà / hòa: Đội chủ nhà thắng trong nửa trận đầu và kết thúc trận đấu hai đội hòa.
                                <br /> Đội chủ nhà/ đội khách: Đội chủ nhà giành chiến thắng ở nửa hiệp đẩu và kết thúc trận đấu đội khách thắng .
                                <br /> Hòa/đội chủ nhà: Cả hai đội hòa ở nửa trận đầu và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Hòa/Hòa: Cả hai đội hòa ở nửa trận và kết thúc trận đấu hai đội hòa.
                                <br /> Hòa/Đội khách: Cả hai đội hòa ở nửa trận đầu và kết thúc trận đấu đội chủ khách thắng.
                                <br /> Đội khách/ đội chủ nhà : Đội khách giành chiến thắng ở nửa hiệp đẩu và kết thúc trận đấu đội chủ nhà thắng .
                                <br /> Đội khách / hòa: Đội khách thắng trong nửa trận đầu và kết thúc trận đấu hai đội hòa.
                                <br /> Đội khách / đội khách: Đội khách giành chiến thắng trong nửa trận đầu và kết thúc trận đấu đội khách thắng.
                                <br /> Cược điểm tỷ số lẻ/chẵn (Bao gồm Hiệp 1/Hiệp 2)
                                <br /> Cược điểm tỷ số lẻ/chẵn được xác định bởi kết quả cuối cùng của trận đấu cộng với tổng tỷ số điểm để quyết định
                                các cược. Chỉ tính thời gian thi đấu chính thức. Không bao gồm thời gian Hiệp Phụ.
                                <br /> Cược lẻ và chẵn nghĩa là dựa trên kết quả tổng bàn thắng của trận đấu tại Hiệp 1/Hiệp 2 để quyết định
                                <br /> Cược Cơ Hội Kép ( Bao gồm cả Hiệp 1/ Hiệp 2)
                                <br /> Dự đoán kết quả cuối cùng, với một cơ hội gấp đôi. Có thể đặt cược các tùy chọn :
                                <br /> 1 hoặc 2 - Nếu kết quả là đội chủ nhà hoặc đội khách thắng thì các cược đặt tại lựa chọn này là thắng.
                                <br /> 1 hoặc X - Nếu kết quả là đội chủ nhà thắng hoặc hai đội hòa thì các cược đặt tại lựa chọn này là thắng.
                                <br /> X hoặc 2 - Nếu kết quả là hai đội hòa hoặc đội khách thắng thì các cược đặt tại lựa chọn này là thắng.
                                <br /> Cược Hòa không tính ( bao gồm Hiệp 1/Hiệp 2) .
                                <br /> Nếu kết quả cuối cùng sau thời gian chính thức thi đấu hoặc cuối thời gian dự kiến là Hòa, tất cả các cược sẽ
                                được hoàn trả.
                                <br /> Cược Hiệp đầu tiên –tỷ lệ điểm chấp ( điểm Spread) (Bao gồm cược Hiệp 1)
                                <br /> Cược tỷ lệ Điểm Chấp (Spread) là đặt cược khi một đấu thủ hoặc một đội nhận được một điểm chấp ảo (có sự bắt
                                đầu thuận lợi trước khi trận đấu diễn ra). Người chiến thắng là đấu thủ hoặc đội có điểm số tốt hơn sau khi kết
                                quả tỷ số cộng thêm điểm được chấp .
                                <br /> Tại hiệp 1 - Cược tỷ lệ Điểm Chấp (Spread) nghĩa là cược trên kết quả của nửa trận đầu tiên, lấy kết quả tỷ
                                số của nửa trận đấu để quyết định.
                                <br /> Cược hiệp đầu tiên – Tổng điểm chấp Cược được xác định bằng tổng số điểm trong kết quả cuối cùng của trận đấu.Nếu
                                tổng số điểm thì lớn hơn chỉ số đã cược tại Trên(Tài)/Dưới(Xỉu) thì kết quả thắng chung cuộc là trên. Nếu tổng
                                số điểm thì nhỏ hơn chỉ số đã cược tại Trên(Tài)/Dưới(Xỉu) thì kết quả thắng chung cuộc là dưới.
                                <br /> Tại Hiệp 1- Cược tổng Điểm Chấp (Spread) nghĩa là cược trên kết quả của nửa trận đầu tiên, lấy kết quả tỷ số
                                của nửa trận đấu để quyết định.
                                <br /> Cược điểm cao nhất nửa trận đầu
                                <br /> Dự đoán điểm số cao nhất của hiệp thứ nhất, hiệp thứ hai hoặc như vậy.
                                <br /> Cược Trận Đấu Và Tổng Bàn Thắng
                                <br /> Cược Trận Đấu Và Tổng Bàn Thắng có nghĩa là cược cho hai dự đoán: Nơi mà kết quả cuối cùng đội chủ nhà dành
                                chiến thắng hoặc đội khách thắng hoặc hòa; và tổng số bàn thắng trong kết quả cuối cùng của một trận đấu sẽ trên(tài)
                                hoặc dưới(xỉu) .
                                <br /> Các lựa chon đặt cược có sẵn như sau:
                                <br /> Đội khách &amp; Trên( Tài): Cược thắng nếu đội khách thắng và tổng số bàn thắng thì lớn hơn chỉ số cược đã đặt
                                cược trước đó.
                                <br /> Hòa và Trên (Tài) – Cược thắng nếu kết quả trận đấu là hòa tổng số bàn thắng thì lớn hơn chỉ số cược đã đặt
                                cược trước đó.
                                <br /> Đội chủ Nhà và Trên (Tài) – Cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng thì lớn hơn chỉ số cược đã
                                đặt cược trước đó.
                                <br /> Đội khách &amp; Dưới (Xỉu): Cược thắng nếu đội khách thắng và tổng số bàn thắng thì nhỏ hơn chỉ số cược đã đặt
                                cược trước đó.
                                <br /> Hòa và Dưới (Xỉu) – Cược thắng nếu kết quả trận đấu là hòa tổng số bàn thắng thì nhỏ hơn chỉ số cược đã đặt
                                cược trước đó.
                                <br /> Đội chủ Nhà và Dưới (Xỉu) – Cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng thì nhỏ hơn chỉ số cược đã
                                đặt cược trước đó.
                                <br /> Cươc Cách Biệt Tỷ Số ( Khoảng cách tỷ số bàn thắng)
                                <br /> Trong toàn bộ thời gian trận đấu,trên tỷ số cuối cùng của hai bên, Một thống kê dựa trên sự chênh lệch giữa
                                số điểm ghi được bởi đội chiến thắng và số điểm ghi được bởi đội thua.
                                <br /> Có thể đặt cược với các lựa chọn sau:
                                <br /> Cược đội nhà thắng, và thắng cách biệt hơn 10 điểm (ngoại trừ 10).
                                <br /> Cược đội nhà thắng, và thắng cách biệt 6 -10 điểm.
                                <br /> Cược đội nhà thắng, và thắng cách biệt 1 - 5 điểm.
                                <br /> Hai đội hòa
                                <br /> Cược đội khách thắng, và thắng cách biệt hơn 10 điểm (ngoại trừ 10).
                                <br /> Hai đội hòa
                                <br /> Cược đội khách thắng, và thắng cách biệt 6 -10 điểm.
                                <br /> Hai đội hòa
                                <br /> Cược đội khách thắng, và thắng cách biệt 1 - 5 điểm.
                                <br /> Hai đội hòa
                                <br /> Tổng số bàn thắng đội chủ nhà/ đội khách
                                <br /> Hai đội hòa
                                <br /> Dự đoán điểm số cuối cùng của đội. Nếu đội nhà / đội khách ghi bàn nhiều hơn đường trên / dưới được chỉ định
                                thì kết quả thắng khi kết thúc là trên ; nếu số điểm trên sân nhà / đội khách ít hơn đường Over / under line
                                được chỉ định thì kết quả thắng sẽ nằm dưới. Chỉ có thời gian bình thường, không bao gồm thêm giờ .
                                <br /> In-Play - Đội nào thắng cuộc đua tới điểm X
                                <br /> Dự đoán đội nào sẽ nhận được điểm X đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là để có được 20 điểm
                                .
                                <br /> X là: 20, 30, 40 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy .
                                <br /> In-Play - Ai điểm X điểm
                                <br /> ự đoán trò chơi mà đội có điểm X. Ví dụ: Điểm số hiện tại 20-19, đội khách đi được 1 điểm, đội khách có 40 điểm
                                .
                                <br /> X là: 10,15,20,25 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy .</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 7}>
                        <h2>Bóng chuyền</h2>
                            <p> QUAN TRỌNG
                                <br />
                                <br /> ※ Trong trường hợp trận đấu không kết thúc, tất cả các thị trường chưa quyết định đều bị coi là vô hiệu.
                                <br />
                                <br /> ※ Hiệp vàng không được xem xét ở bất kỳ thị trường nào
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu, cá cược
                                sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở cửa với điểm không chính xác có ảnh hưởng đáng kể đến giá, chúng tôi bảo lưu quyền hủy
                                bỏ đặt cược.
                                <br />
                                <br /> Các thị trường đặc biệt
                                <br />
                                <br /> Cược chấp(Bao gồm cược đặt hiệp 1)
                                <br /> Cược chấp có nghĩa là đặt cược khi một đối thủ hoặc đội được nhận một sự khởi đầu ảo (dẫn đầu bởi sự khởi đầu
                                đó trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm số tốt hơn sau khi thêm
                                chấp thêm cho kết quả.
                                <br /> Tổng số (Bao gồm cược đặt 1)
                                <br /> Cược được xác định bởi tổng số điểm trong kết quả cuối cùng của Sự kiện. Nếu tổng số điểm vượt quá trên / dưới
                                Đã được chỉ định thì kết quả thắng sẽ kết thúc cho trên; nếu tổng số ít hơn dòng Trên / dưới đường được chỉ định
                                thì kết quả thắng sẽ dưới .
                                <br /> Tổng số hiệp (tối đa là 5)
                                <br /> Dự đoán trò chơi sẽ là bao nhiêu hiệp. Có thể đặt cược các lựa chọn là 3, 4 và 5.
                                <br /> Điểm đặt chính xác
                                <br /> Dự đoán kết quả cuối cùng của trò chơi, Có thể đặt cược tùy chọn sau:
                                <br /> 3:0 – Chủ nhà 3 set, đội khách 0 set.
                                <br /> 3:1 - Chủ nhà 3 set, đội khách 1 set.
                                <br /> 3:2 - Chủ nhà 3 set, đội khách 2 set.
                                <br /> 0:3 - Chủ nhà 0 set, đội khách 3 set.
                                <br /> 1:3 - Chủ nhà 1 set, đội khách 3 set.
                                <br /> 2:3 - Chủ nhà 2 set, đội khách 3 set.
                                <br /> Có bao nhiêu hiệp vượt quá giới hạn điểm?
                                <br /> Dự đoán bao nhiêu hiệp, đội sẽ có nhiều hơn số điểm vượt quá 25 điểm (hiệp 5 là 15 điểm).
                                <br /> 1st Set Race to X
                                <br /> Dự đoán đội nào trong trò chơi đầu tiên có điểm X trong hiệp đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ
                                nhà là để có được 20 điểm.
                                <br /> X là: 20, 30, 40 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.
                                <br /> 1st đặt lẻ/chẵn
                                <br /> 1st đặt lẻ và chẵn,được xác định bởi điểm số đặt đầu tiên để xác định cá cược.
                                <br /> Ai thắng set đầu tiên (Bao gồm các Đặt 3/4/5))
                                <br /> Trong trường hợp trận đấu bắt đầu nhưng không được hoàn thành thì tất cả cược sẽ bị vô hiệu In-Play - Đội nào
                                thắng cuộc đua tới điểm X
                                <br /> Dự đoán đội nào sẽ nhận được điểm X đầu tiên. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là để có được 20 điểm.
                                <br /> X là: 20, 30, 40 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy.
                                <br /> In-Play - Ai điểm X điểm
                                <br /> Dự đoán trò chơi mà đội có điểm X. Ví dụ: Điểm số hiện tại 20-19, đội khách đi được 1 điểm, đội khách có 40
                                điểm.
                                <br /> X là: 10,15,20,25 ... etc.
                                <br /> Vào cuối trò chơi, không có đội nào có được điểm X, tỷ lệ cược sẽ được xem là bị hủy
                                </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 8}>
                        <h2>Bóng Chuyền Bãi Biển</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br />
                                <br /> ※ Trong trường hợp trận đấu không được hoàn tất, tất cả những loại cược chưa được xác định đều được xem là hủy.
                                <br />
                                <br /> ※ Golden set không được coi là một trong những loại cược kể trên.
                                <br />
                                <br /> Luật thanh toán và hủy cược
                                <br />
                                <br /> ※ Nếu một trận đấu bị bị gián đoạn hoặc hoãn và không tiếp tục lại trong vòng 48 giờ sau thời gian phát bóng
                                đầu tiên, các cược sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu các loại cược vẫn mở với một điểm số không chính xác và ảnh hưởng rõ ràng đến thanh toán, chúng tôi sẽ
                                hủy cược.
                                <br />
                                <br /> ※ Nếu một đội rút lui, tất cả cược chưa xác định sẽ được coi là hủy.
                                <br />
                                <br /> Các loại cược đặc biệt
                                <br />
                                <br /> Cược chấp (Bao gồm cược hiệp 1)
                                <br /> Cược chấp nghĩa là cược cho một cầu thủ hay một đội nhận trước một tỉ số ảo (dẫn trước trước khi trận đấu bắt
                                đầu). Người chiến thắng sẽ là cầu thủ hoặc đội có điểm số cao hơn sau khi cộng điểm chấp vào kết quả.
                                <br /> Cược tổng điểm (Bao gồm cược hiệp 1)
                                <br /> Cược được xác định bằng tổng số điểm trong kết quả cuối cùng của một sự kiện. Nếu tổng điểm cao hơn điểm Trên/Dưới
                                cho trước thì kết quả thắng là Trên; Nếu tổng điểm thấp hơn điểm Trên/Dưới cho trước thì kết quả thắng là Dưới.
                                <br /> Cược tổng số hiệp (cao nhất là 3)
                                <br /> Dự đoán trận đấu diễn ra trong bao nhiêu hiệp. Những lựa chọn có thể cược là 2 và 3.
                                <br /> Cược số hiệp chính xác
                                <br /> Dự đoán kết quả cuối cùng của trò chơi, những lựa chọn có thể là:
                                <br /> 2:0 – Đội chủ nhà 2 hiệp, đội khách 0 hiệp.
                                <br /> 2:1 - Đội chủ nhà 2 hiệp, đội khách 1 hiệp.
                                <br /> 0:2 - Đội chủ nhà 0 hiệp, đội khách 2 hiệp.
                                <br /> 1:2 - Đội chủ nhà 1 hiệp, đội khách 2 hiệp.
                                <br /> Có bao nhiêu hiệp vượt quá số điểm tối đa?
                                <br /> Dự đoán có bao nhiêu hiêp mà có đội có số điểm lớn hơn 21 điểm tối đa (hiệp thứ 3 15 điểm)
                                <br /> Hiệp 1 đạt được X
                                <br /> Dự đoán đội nào đạt được điểm X đầu tiên trong hiệp 1. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là đội đạt
                                20 điểm.
                                <br /> X là: 20, 30, 40 ... vv.
                                <br /> Khi kết thúc trò chơi, không có đội nào đạt X điểm, các cược sẽ được coi là hủy.
                                <br /> Cược Chẵn/Lẻ hiệp 1
                                <br /> Hiệp 1 chẵn và lẻ, được xác định bởi điểm số của hiệp đầu tiên để quyết định kết quả cược.
                                <br /> Đội thắng hiệp 1 (Bao gồm các cược hiệp 2, hiệp 3)
                                <br /> Trong trường hợp trận đấu được bắt đầu nhưng không hoàn thành, tất cả cược sẽ bị hủy.
                                <br /> Cược trong trận – Đội đạt được X điểm đầu tiên
                                <br /> Dự đoán đội đạt được X điểm đầu tiên trong trận đấu. Ví dụ: Điểm số hiện tại 20-19, đội chủ nhà là đội đạt 20
                                điểm.
                                <br /> X là: 20, 30, 40 ... vv.
                                <br /> Khi kết thúc trò chơi, không có đội nào đạt X điểm, các cược sẽ được coi là hủy.
                                <br /> Cược trong trận – Đội ghi điểm X
                                <br /> Cược này dự đoán đội nào ghi được điểm X. Ví dụ: Điểm số hiện tại 20-19, độ khách ghi 1 điểm, đội khách ghi
                                số điểm 40.
                                <br /> X là: 20, 30, 40 ... vv.
                                <br /> Khi kết thúc trò chơi, không có đội nào đạt X điểm, các cược sẽ được coi là hủy.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 9}>
                        <h2>Bóng Đá Trong Nhà</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Tất cả các thị trường cược (ngoại trừ nửa trận, các cược Hiệp thứ nhất, thời gian thi đấu thêm giờ và các
                                lượt luân lưu) được tính trong thời gian thi đấu chính thức.
                                <br />
                                <br /> Nếu trận đấu bị gián đoạn và tiếp tục trong vòng 48 giờ sau cú giao bóng đầu tiên, tất cả các cược mở sẽ được
                                thanh toán dựa trên kết quả cuối cùng của trận đấu. Nếu không, tất cả các cược không xác định sẽ bị hủy
                                <br />
                                <br /> Các điều khoản thanh toán và Hủy cược
                                <br />
                                <br /> ※ Nếu các thị trường cược vẫn mở trong khi trận đấu đã diễn ra với: các bàn thắng, thẻ đỏ hoặc thẻ vàng, các
                                cú đá luân lưu, chúng tôi cái sẽ bảo lưu quyền vô hiệu hóa các cược
                                <br />
                                <br /> Nếu thị trường cược đã được mở ra nhưng thiếu hoặc không chính xác thẻ đỏ, chúng tôi cái sẽ bảo lưu quyền vô
                                hiệu hóa các cược.
                                <br />
                                <br /> ※ Nếu các tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (nhiều hơn 2 phút), chúng tôi cái
                                sẽ bảo lưu quyền vô hiệu hóa các cược.
                                <br />
                                <br /> ※ Nếu tỷ số bị nhập sai, tất cả các thị trường sẽ bị hủy trong thời gian đặt cược tại lúc điểm không chính xác
                                được hiển thị.
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày cú giao bóng đầu
                                tiên, các cược sẽ bị hủy
                                <br />
                                <br /> Nếu tên các đội và hạng mục được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.
                                <br />
                                <br /> Các Thị Trường Cược Đặc Biệt
                                <br /> Cược chấp Châu Á HDP – Trong Trận
                                <br /> Tất cả các cược tại thị trường Cược Chấp Châu Á Trực Tiếp được thanh toán theo Tỷ Số của Hiệp/trận đấu còn lại
                                của giải đấu sau khi vé cược đã được đặt,Khi thanh toán cược bất cứ bàn thắng nào xảy ra trước khi vé cược được
                                đặt sẽ bị bỏ qua.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 10}>
                        <h2>Cầu lông</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Trong trường hợp trận đấu không kết thúc, tất cả các thị trường chưa quyết định đều bị coi là vô hiệu .
                                <br />
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> Nếu một trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu, đặt
                                cược sẽ bị hủy
                                <br />
                                <br /> Nếu thị trường vẫn mở cửa với điểm không chính xác có ảnh hưởng đáng kể đến giá, chúng tôi có quyền quyết định
                                cá cược
                                <br />
                                <br /> Nếu các cầu thủ / đội được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.
                                <br />
                                <br /> ※ Nếu một người chơi nghỉ không thi đấu tất cả các thị trường chưa được quyết định sẽ bị coi là vô hiệu.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 11}>
                        <h2>Rugby Union &amp; League</h2>
                            <p>Quan Trọng
                                <br />
                                <br /> ※ Tất cả các thị trường (ngoại trừ thời gian nghỉ giải lao, nửa đầu của mùa giải, thời gian làm thêm giờ và
                                sút phạt) được xem xét thường xuyên chỉ thời gian .
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn và tiếp tục trong vòng 48 giờ sau khi đá phạt đầu tiên, tất cả cược mở sẽ được giải
                                quyết bằng kết quả cuối cùng. Nếu không, tất cả các cược không xác định được coi là vô hiệu.
                                <br />
                                <br /> ※ Thường xuyên 80 phút: Các thị trường được dựa trên kết quả vào cuối thời gian chơi 80 phút theo lịch trình,
                                trừ khi nói. Điều này bao gồm thời gian bất kỳ chấn thương hoặc thời gian đình chỉ bổ sung nào nhưng không bao
                                gồm hiệp phụ thời gian, thời gian dành cho hình phạt hoặc thời gian chết..
                                <br />
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> ※ Nếu thị trường vẫn mở cửa khi các sự kiện sau đã diễn ra: thay đổi điểm hoặc thẻ đỏ, chúng tôi bảo lưu quyền
                                hủy bỏ cá cược.
                                <br />
                                <br /> ※ Nếu thị trường đã được mở ra với một thẻ đỏ bị thiếu hoặc không chính xác, chúng tôi bảo lưu quyền hủy bỏ
                                cá cược.
                                <br />
                                <br /> ※ Nếu tỷ lệ cược được cung cấp với thời gian trận đấu không chính xác (hơn 2 phút), chúng tôi có quyền hủy bỏ
                                cược
                                <br />
                                <br /> ※ Nếu trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày bắt đầu đá banh
                                sẽ bị hủy.
                                <br />
                                <br /> ※ Nếu tên nhóm hoặc đội hình được hiển thị không chính xác, chúng tôi bảo lưu quyền hủy bỏ cược.
                                <br />
                                <br /> Các thị trường đặc biệt
                                <br />
                                <br /> Nửa trận / Cả trận
                                <br /> Half-time / Full-time có nghĩa là đặt cược để dự đoán cả kết quả của nửa trận và kết quả cả trận của một Sự
                                kiện. Có thể đặt cược là:
                                <br /> Đội chủ nhà / đội chủ nhà: Đội chủ nhà giành chiến thắng trong giờ nghỉ giải lao và kết thúc trận đấu đội chủ
                                nhà thắng.
                                <br /> Đội chủ nhà / hòa: đội chủ nhà giành chiến thắng tại thời gian nghỉ giải lao và kết thúc trận đấu cả hai đội
                                đều hòa .
                                <br /> Đội chủ nhà / đội khách: Đội chủ nhà giành chiến thắng trong giờ nghỉ giải lao và kết thúc trận đấu đội khách
                                thắng.
                                <br /> Hòa/ đội chủ nhà: Hai đội kết thúc hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà thắng.
                                <br /> Hòa/ hòa: Hai đội kết thúc hòa vào giờ nghỉ giải lao và kết thúc trận đấu là hòa.
                                <br /> Hòa/ đội khách : Hai đội kết thúc hòa vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng .
                                <br /> Đội khách / Đội chủ nhà: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội chủ nhà
                                thắng.
                                <br /> Đội khách / hòa: Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu cả hai đội hòa .
                                <br /> Đội khách / Đội khách : Đội khách giành chiến thắng vào giờ nghỉ giải lao và kết thúc trận đấu đội khách thắng.
                                <br /> Điểm lẻ/ chẵn( Bao gồm cả nửa trận)
                                <br /> Điểm lẻ/chẵn , được xác định bởi một đội kết quả trận chung kết cộng với tổng số điểm để xác định cược. Chỉ
                                có thời gian bình thường, không bao gồm thêm giờ.
                                <br /> 1st Half Odd / Even Points nghĩa là cược vào kết quả của hiệp một đầu tiên từ điểm số hiệp 1 quyết định
                                <br /> Điểm chấp ( Bao gồm cả cược trong hiệp 1)
                                <br /> Các điểm chấp nghĩa là đặt cược khi một đối thủ cạnh tranh hoặc nhóm nhận được sự khởi đầu ảo (dẫn đầu một cách
                                hiệu quả bởi đầu đó bắt đầu trước khi sự kiện bắt đầu). Người chiến thắng là đối thủ cạnh tranh hoặc đội có điểm
                                số tốt hơn sau thêm điểm chấp tính vào kết quả .
                                <br /> 1st Half Points Spreads nghĩa là đặt cược chấp vào kết quả của hiệp một từ điểm số hiệp 1mà quyết định.
                                <br /> Nửa số điểm cao nhất
                                <br /> Dự đoán số điểm cao nhất trong hiệp 1, hiệp hai hoặc như vậy
                                <br /> Hiệp hội bóng bầu dục thắng lợi
                                <br /> Trong toàn bộ thời gian trò chơi trên cả hai mặt ở cuối điểm số cuối cùng, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được của đội thắng và số điểm ghi được của đội thua. Có thể đặt cược tùy chọn là :
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn hơn 14 điểm (trừ 14)
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn từ 8-14 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn từ 1-7 điểm.
                                <br /> Hai đội hòa
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn hơn 14 điểm (trừ 14).
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn từ 8-14 điểm.
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn từ 1-7 điểm.
                                <br /> Winning Margins Rugby League
                                <br /> Trong toàn bộ thời gian trò chơi trên cả hai mặt ở cuối điểm số cuối cùng, Một thống kê dựa trên sự khác biệt
                                giữa số điểm ghi được của đội thắng và số điểm ghi được của đội thua. Có thể đặt cược tùy chọn là
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn hơn 12 điểm (trừ 12).
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn từ 7-12 điểm.
                                <br /> Cược đội chủ nhà để giành chiến thắng, và giành được điểm số lớn từ 1-6 điểm.
                                <br /> Hai đội hòa.
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn hơn 12 điểm (trừ 12).
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn từ 7-12 điểm.
                                <br /> Cược đội khách giành chiến thắng, và giành được điểm số lớn từ 1-6 điểm.
                                <br /> In-Play - ai là người thắng phần còn lại của trận đấu?
                                <br /> Các cược sẽ được chấp nhận sau thời gian giải quyết, thời gian còn lại trong chiến thắng sẽ được áp dụng. Không
                                chấp nhận bất kỳ cược nào trước khi bóng vào. Có thể đặt cược các lựa chọn là: đội chủ nhà, đội khách và hòa.
                                /&gt; In-Play – Nửa trận - Ai thắng phần còn lại?
                                <br /> Các cược sẽ được chấp nhận sau thời gian giải quyết, thời gian còn lại trong chiến thắng sẽ được áp dụng. Không
                                chấp nhận bất kỳ cược nào trước khi bóng vào. Có thể đặt cược các lựa chọn là: đội chủ nhà, đội khách và hòa.
                                Cá cược sự kiện chỉ chứa nửa đầu.
                                <br /> In-Play - Tổng lợi số điểm của Rugby
                                <br /> Tổng số mục tiêu một trò chơi hai đội cộng với tính toán tổng cộng. Tùy chọn đặt cược là: dưới 28, 28-34, 35-41,
                                42-48, 49-55, 56-62 và hơn 62.
                                <br /> In-Play – Nửa hiệp - Tổng lợi số điểm của Rugby
                                <br /> Tổng số mục tiêu một trò chơi hai đội cộng với tính toán tổng cộng. Tùy chọn đặt cược là: dưới 7, 7-13, 14-20,
                                21-27, 28-34, 35-41 và nhiều hơn 41. Sự kiện cá cược chỉ chứa nửa đầu
                                <br /> In-Play - Matchbet and Totals
                                <br /> Matchbet và Totals có nghĩa là cá cược cho cả hai dự đoán: trận đấu sẽ dẫn đến chiến thắng cho đội chủ nhà hay
                                chiến thắng cho đội khách hay hòa; và liệu tổng số mục tiêu trong kết quả cuối cùng của một sự kiện sẽ vượt quá
                                hay dưới .
                                <br /> Các tùy chọn đặt cược sau có sẵn :
                                <br /> Đội khách – trên:cược thắng nếu đội khách thắng và tổng số bàn thắng vượt quá dòng được chỉ định .
                                <br /> Hòa – trên:cược thắng nếu trận đấu hòa và tổng số bàn thắng vượt quá dòng được chỉ định.
                                <br /> Đội chủ nhà – trên:cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng vượt quá dòng được chỉ định.
                                <br /> Đội khách – dưới :cược thắng nếu đội khách thắng và tổng số bàn thắng dưới dòng được chỉ định.
                                <br /> Hòa – dưới:cược thắng nếu trận đấu hòa và tổng số bàn thắng dưới dòng được chỉ định.
                                <br /> Đội chủ nhà – dưới :cược thắng nếu đội chủ nhà thắng và tổng số bàn thắng dưới dòng được chỉ định.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 12}>
                        <h2>Phi tiêu</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Trường hợp trận đấu chưa kết thúc, tất cả các giải đấu chưa quyết định đều bị coi là vô hiệu hóa.
                                <br />
                                <br /> Quy tắc hòa và hủy
                                <br />
                                <br /> ※ Nếu giải đấu vẫn với điểm không chính xác có ảnh hưởng đáng kể đến giá trị cược, chúng tôi có quyền hủy bỏ
                                đặt cược
                                <br />
                                <br /> ※ Nếu cầu thủ/ đội tuyển hiển thị không chính xác, chúng tôi có quyền hủy đặt cược.
                                <br />
                                <br /> ※ Nếu trận đấu không kết thúc, tất cả các giải đấu chưa quyết định đều bị coi là vô hiệu hóa..
                                <br />
                                <br /> ※ Sự kiện đặc biệt sẽ được tính bằng cách kiểm tra màu sắc .</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 13}>
                        <h2>Bida</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br /> ※ Trường hợp người chơi tạm nghỉ hoặc bị truất quyền thi đấu, giải đấu không được quyết định sẽ bị coi là vô
                                hiệu hóa.
                                <br />
                                <br /> Quy tắc hòa và hủy
                                <br />
                                <br /> ※ Nếu giải đấu vẫn với điểm không chính xác có ảnh hưởng đáng kể đến giá trị cược, chúng tôi có quyền hủy bỏ
                                đặt cược .
                                <br />
                                <br /> ※ Nếu cầu thủ/ đội tuyển hiển thị không chính xác, chúng tôi có quyền hủy đặt cược..
                                <br />
                                <br /> ※ Nếu trận đấu không kết thúc, tất cả các giải đấu chưa quyết định đều bị coi là vô hiệu hóa.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 14}>
                        <h2>Table Tennis</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br />
                                <br /> ※Trong trường hợp một trận đấu không kết thúc, tất cả các thị trường chưa quyết định đều bị coi là vô hiệu.
                                <br />
                                <br /> Quy tắc Giải quyết và Hủy
                                <br />
                                <br /> ※Nếu một trận đấu bị gián đoạn hoặc hoãn lại và không được tiếp tục trong vòng 48 giờ sau ngày khởi đầu, các
                                cược đặt sẽ bị hủy.
                                <br />
                                <br /> ※Nếu trận đấu vẫn mở với điểm số không chính xác và có ảnh hưởng đáng kể đến mức tiền, chúng tôi có quyền đúng
                                để hủy bỏ cược
                                <br />
                                <br /> ※Nếu các cầu thủ / đội được hiển thị không chính xác, chúng tôi có quyền đúng để hủy bỏ cược.
                                <br />
                                <br /> ※Nếu một người chơi rút lui thì tất cả các cược chưa quyết định được coi là vô hiệu.
                                <br />
                                <br /> Các cược đặc biệt
                                <br />
                                <br /> Có bao nhiêu séc sẽ vượt quá giới hạn về điểm
                                <br /> Có bao nhiêu séc có ít nhất vượt quá giới hạn 11 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 15}>
                        <h2>Golf</h2>
                            <p>QUAN TRỌNG
                                <br />
                                <br />
                                <br /> ※ Tất cả cược phù hợp với kết quả của giải đấu chính thức cho giải quyết.
                                <br />
                                <br /> ※ Nếu một người chơi không tham gia một giải đấu hoặc một vòng đấu nào đó, thì tất cả các cá cược sẽ bị hủy.
                                Nếu một vận động viên golf trong một giải đấu bỏ cuộc hoặc bị truất quyền thi đấu, tất cả các cược của người
                                chơi sẽ thua.
                                <br />
                                <br /> ※ Nếu một giải đấu hoặc vòng đấu cụ thể được hoãn hoặc bị treo thì tất cả cược sẽ có hiệu lực trong vòng 48
                                giờ sau khi thời gian kết thúc dự kiến..</p>
                        </div>
                        <div className="centerDetail"hidden={this.state.current !== 16}>
                        <h2>Cricket</h2>
                            &nbsp;
                            <h1>Các điều quan trọng </h1>
                            <p>※ Tất cả các thị trường cược sẽ bao gồm cược tại Các quả siêu cao trừ khi có các chú thích cụ thể khác được đề cập.
                                <br /> ※Vòng chạy phạt không được xem xét trong bất kỳ thị trường hoặc hình thức nào (thị trường cho nhiều lệnh không được
                                xem xét cho quy tắc này).
                                <br /> ※ Hai mươi 20: tất cả các lịch thi đấu có thời hạn phải được đưa ra cho các thị trường chưa quyết định được giải
                                quyết trừ khi các hiệp hội đã đạt được một cách tự nhiên.
                                <br /> ※ ODIs: tối thiểu 90% tổng số tiền chi trả được phân bổ cho một lần lượt phải được phát tại thời điểm đặt cược cho
                                các thị trường được giải quyết trừ khi các hiệp hội đã đạt được kết luận tự nhiên của nó.
                                <br /> ※ Các Quả Siêu cao: Hiệp phụ</p>
                            <h1>Quy tắc thanh toán và hủy cược</h1>
                            1.
                            <p>※ Nếu một trận đấu bị hoãn hoặc tạm dừng thì tất cả các cược được coi là hợp lệ nếu trận đấu được bắt đầu lại trong vòng
                                thời gian 48 giờ.
                                <br /> ※ Nếu trận đấu có kết quả hòa và các quy tắc cạnh tranh chính thức không xác định người thắng; hoặc nếu các quy
                                tắc cạnh tranh xác định người thắng cược bằng một đồng xu ném hoặc vẽ lô, thì tất cả các thị trường chưa quyết định
                                đều bị coi là vô hiệu.
                                <br /> ※Trong trường hợp không hoàn thành, tất cả các thị trường chưa xác định được kết quả sẽ bị coi là vô hiệu, trừ khi
                                các hiệp hội đã đạt được kết luận tự nhiên của nó, ví dụ: tuyên bố, tất cả đội bỏ cuộc, vv..
                                <br /> ※ Nếu thị trường vẫn mở với điểm không chính xác có ảnh hưởng đáng kể đến tỷ lệ cược, chúng tôi bảo lưu quyền hủy
                                bỏ cược. </p>
                            <h2>Những thị trường đặc biệt</h2>
                            &nbsp;
                            <h1>2 cửa</h1>
                            <p>2 way có nghĩa là đặt cược vào đội nào thắng, kể cả thắng cách biệt. Tất cả các cược đặt cược sẽ được giải quyết theo
                                luật chơi chính thức. Trong các trận đấu bị ảnh hưởng bởi thời tiết bất lợi, cược sẽ được giải quyết theo kết quả
                                chính.
                            </p>
                            <h1>Tổng số chấp</h1>
                            <p>Total Spreads means betting that is determined by the total number of runs in the result of a match. Regular time only,
                                super overs do not count. If the total is more than the Over/Under pre-designated line then the winning result is
                                Over; if the total is less than the Over/Under pre-designated line then the winning result is Under.</p>
                            <p> Tổng số chấp nghĩa là cược được xác định bởi tổng số lần chạy trong kết quả của một trận đấu. Chỉ tính thời gian chính
                                thức, thời gian bù giờ không được tính. Nếu tổng cộng nhiều hơn đường Trên/Dưới được chỉ định trước thì kết quả thắng
                                là Trên; nếu tổng số ít hơn đường Trên/Dưới được chỉ định trước thì kết quả thắng là Dưới.
                            </p>
                            <h1>Chẵn/lẻ của số lượt chạy</h1>
                            <p> Chẵn/Lẻ có nghĩa là cá cược được xác định bởi việc tổng số lần chạy trong kết quả của trận đấu là Chẵn hoặc Lẻ. Chỉ tính
                                thời gian chính thức, không tính supper over. </p>
                            <h1>Tổng số đội</h1>
                            <p> Cá cược có nghĩa là điểm số của đội vượt trội hoặc vượt trội so với tổng số dòng được phân bổ vào cuối thời gian thi
                                đấu chính thức. Chỉ tính thời gian chính thức, không tính supper over. </p>
                            <h1> Có bao nhiêu lượt chạy đạt được điểm số cao?</h1>
                            <p> Dự đoán điểm cao nhất để có được một vài lần chạy. Chỉ tính thời gian chính thức, không tính supper over.
                            </p>
                            <h1> Đội nào sẽ có số điểm vượt trội cao nhất?</h1>
                            <p> Dự đoán đội sẽ đạt được điểm cao nhất. Chỉ tính thời gian chính thức, không tính supper over.
                            </p>
                            <h1>Phạm vi của tổng số điểm</h1>
                            <p> Dự đoán phạm vi ghi điểm của một đội vào cuối thời gian thi đấu chính thức. Chỉ tính thời gian chính thức, không tính
                                supper over. </p>
                            <h1> Đội đạt được điểm 6/10 trước – 3 lựa chọn</h1>
                            <p> dự đoán kết quả sau 6/10 điểm đầu tiên. Có thể đặt cược các lựa chọn là: đội nhà, hòa và đội.
                            </p>
                            <h1> Đội đạt được điểm 6/10 trước – Tổng số</h1>
                            <p> Một cược được xác định bởi số điểm của một đội sau một số lần vượt qua. </p>
                            <h1> Đội đạt được điểm 6/10 trước – Phạm vi điểm</h1>
                            <p>Dự đoán phạm vi số điểm của một đọi khi kết thúc một vòng đặc biệt.</p>
                            <h1>Sẽ có super overs?</h1>
                            <p>Dự đoán trận đấu sẽ có kết quả hòa và để dẫn tới supper over.</p>
                            <h1>Trong trận – đội chạy</h1>
                            <p>Dự đoán phạm vi số điểm của một đội khi kết thúc thời gian thi đấu chính thức. chỉ tính thời gian thi đấu chính thức,
                                không tính supper over. </p>
                            <h1>Trong trận – số lượt chạy có số điểm cao?</h1>
                            <p>Dự đoán số điểm cao để đạt được vài lượt chạy. chỉ tính thời gian thi đấu chính thức, không tính supper over.</p>
                            <h1>Trong trận – đội nào sẽ dẫn đầu sau khi vượt qua “X” </h1>
                            <p> Dự đoán kết quả sau một số lượt cụ thể. Có thể đặt cược các lựa chọn là: đội nhà, hòa và đội khách.
                            </p>
                            <h1>Trong trận – Tổng số điểm của đội trước khi vượt qua “X”</h1>
                            <p> một cược được xác định bởi số điểm của đội sau lượt đặc biệt.</p>
                            <h1> Trong trận – Đội chạy sau khi vượt qua “X”</h1>
                            <p>Dự đoán giới hạn điểm của đội khi kết thúc lượt đặc biệt.</p>
                            <h1>Trong trận – Tổng số lượt chạy cho “X” vượt qua sự kiện “X” </h1>
                            <p>Một cược được xác định bởi số điểm của một đội sau lượt đặc biệt của sự kiện/lượt</p>
                            <h1>Trong trận – đội chẵn/lẻ của số lượt chạy “X” trên số lượt sự kiện “X”</h1>
                            <p>Một cược được xác đinh bởi số điểm của một đội sau lượt đặc biệt của sự kiện/lượt.</p>
                            <h1>Trong trận – tổng số lượt chạy trong lượt “X” của sự kiện “X”</h1>
                            <p> Một cược được xác định bởi số điểm của một đội đặc biệt sau sự kiện/lượt/giao bóng.</p>
                            <h1>Trong trận – Lượt bỏ lỡ tiếp theo</h1>
                            <p>Các lựa chọn có sẵn là: Caught, Bowled, LBW, Run Out, Stumped hoặc Any Other. Nếu không có bóng rơi xuống thì tất cả
                                cược sẽ bị hủy.</p>
                            <h1>Trong trận – lượt bỏ lỡ tiếp theo (bị bắt/không bị bắt)</h1>
                            <p>Các lựa chọn có sẵn là: Bị bắt và không bị bắt. Nếu không có bóng rơi xuống thì tất cả cược sẽ bị hủy.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 17}>
                        <h2>Bóng đá ảo League (VFL)</h2>
                            <h1>Cách chơi</h1>
                            <p>VFL cung cấp trải nghiệm cược tiền thật 24/7/365 cho bóng đá ảo. Giải đấu bao gồm 16 đội và mùa chạy liên tục. Mỗi
                                mùa bao gồm 30 ngày kết hợp (trận đấu trên sân nhà và trận đấu trên sân khách).
                                <br /> Có thể đặt cược vào bất kỳ lúc nào - ngay cả trong một mùa giải.</p>
                            <h1>Thông tin mùa giải</h1>
                            <p>Một mùa giải tổng cộng 141 phút, tách ra các giai đoạn trong một khoảng thời gian 'Pre League', 'Matchday Loop' và
                                'Post Season' . Giai đoạn 'Pre League' chạy trước khi bắt đầu một mùa và kéo dài 2:30 phút.
                                <br /> Tất cả các trận đấu phù hợp được tóm tắt là khoảng thời gian 'Matchday Loop' với tổng thời gian là 137: 30.
                                Vào cuối mỗi mùa có 60 giây 'Post Season'.</p>
                            <h1>Thông tin trận đấu</h1>
                            <p>Một trận đấu kéo dài 4:35 phút. Nó được tách ra các giai đoạn 'Pre Match', '1st Half', 'Halftime', '2nd Half' Giai
                                đoạn’ Post Match’ và giai đoạn 'Post Matchday'.
                                <br /> Giai đoạn 'Pre Match' chạy trước khi trận đấu bắt đầu trong 60 giây. Trận đấu kéo dài 1:30 phút cho mỗi một
                                nửa với khoảng nghỉ giải lao là 10 giây . Mỗi trận đấu sau đó được theo sau bởi giai đoạn 10 giây’ Post Match'
                                và cuối cùng là một khoảng thời gian 15 giây cho ‘ Post Matchday’.</p>
                            <h1>Đặt cược</h1>
                            <p>Cược vào một trận đấu VFL được cho phép lên đến 10 giây trước khi phát bóng. Cược cho những trận đấu chưa bắt đầu
                                và những trận hiện tại đang mở. Khi một trận đấu chưa diễn ra từ thanh công cụ 'Select Matchday' ở dưới cùng
                                được chọn, các trận đấu liên quan đến ngày đó cùng với tỷ lệ cược sẽ được hiển thị trong phần tỷ lệ cược thấp
                                hơn. Phù hợp với các lựa chọn cá cược có sẵn sau đây:
                                <br /> ‧Asian HDP
                                <br /> ‧Total (over; under)
                                <br /> ‧3way (home; draw; away)
                                <br /> ‧1st half 3way (home; draw; away)
                                <br /> ‧First goal (home; no goal; away)
                                <br /> ‧Handicap (home; draw; away)</p>
                            <h1>Thông tin khác</h1>
                            <p>Tất cả trận đấu được phát như luồng video trực tiếp thông qua trình phát media tích hợp trong trình duyệt của bạn.
                                <br /> Bạn có thể chuyển đổi tự do giữa tám trận có sẵn trong mỗi ngày hoặc cách khác theo trận đấu yêu thích của bạn.
                                Các mô phỏng trận đấu được tạo ra thông qua sự kết hợp của Trí tuệ Nhân tạo và các con số ngẫu nhiên và độc lập
                                với nhau. Đồng thời, thông số hoạt động của các cầu thủ VFL được dựa trên thông tin cầu thủ của bóng đá chuyên
                                nghiệp (ví dụ: về số bán thắng, thể lực, thống kê trận đấu liên tiếp, v.v.).</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 18}>
                        <h2>E-Sports</h2>
                            <h1> Quy tắc Chung </ h1>
                                <p>● Trường hợp có một sự kiện nào đó ảnh hưởng giống nhau đến 2 cầu thủ hoặc các đội và bản đồ, ví dụ: “best of
                                    3”, Và một hoặc nhiều trận đấu hoặc bản đổ không được bắt đầu bởi vì kết quả của trận đấu đã được xác định,
                                    cược trên các trận đó sẽ bị vô hiệu và hoàn lại tiền.</p>
                                <p>● Ngày và giờ bắt đầu được hiển thị chỉ với mục đích thông tin và có thể không chính xác. Trường hợp một sự kiện
                                    bị hủy bỏ, hoãn lại hoặc bị gián đoạn và không hoàn thành trong vòng 48 giờ kể từ thời gian bắt đầu ban đầu
                                    ban đầu, cược vào trận đó sẽ bị vô hiệu và trả lại tiền. Tuy nhiên, các trò chơi hoặc trận đấu được hoàn
                                    thành trong vòng 48 giờ được giải quyết bình thường ngay cả khi các trò chơi hoặc bản đồ bổ sung được cho
                                    là một phần của cùng một trận đấu bị hủy hoặc được hoãn lại.</p>
                                <p>● Các cược được giải quyết dựa trên việc phát hành chính thức của trò chơi bởi nhà xuất bản hoặc nhà tổ chức
                                    sự kiện. Nơi phát sóng cho thấy số lượng của vòng chiến thắng, giết chết, con rồng, tháp vv, điều này thường
                                    sẽ được sử dụng để giải quyết cược liên quan. Nếu kết quả của cược không rõ ràng từ chương trình phát sóng
                                    hoặc nếu không có chương trình phát sóng thì API số liệu thống kê trò chơi sẽ được sử dụng nếu có.</p>
                                <p>● Trong trường hợp cá trận đấu có thể chỉ mục hoặc đánh số ( chẳng hạn như người chiến thắng một vòng cụ thể
                                    trong Counter Strike: GO, hoặc đội được ghi số điểm giết chết trong League of Legends hoặc DOTA2), chỉ số
                                    xác định những lựa chọn này được đếm. Những từ như "next" trong tên giải đấu không được bảo đảm là chính
                                    xác, vì các chương trình phát sóng có thể bị trì hoãn và chúng ta không phải lúc nào cũng có thể chỉ trước
                                    một cách chính xác khi một mục tiêu được ghi điểm số hoặc một trận hoàn thành. Tất cả cược do đó được giải
                                    quyết theo một vòng tròn hoặc mục tiêu được đánh số cụ thể, bất kể các từ khác trong tên giải đấu hoặc thời
                                    gian của nó liên quan đến thời điểm đặt.</p>
                                <p>● Nếu số hiệp hoặc bản đồ đã được lên lịch thay đổi hoặc nếu trận đấu được cung cấp sai dựa trên số hiệp hoặc
                                    bản đồ từ số thực đã lên lịch, sau đó đặt cược trên biên thắng (bao gồm cả handicap), tổng số vòng / bản
                                    đồ, điểm chính xác vv .. đều bị hủy và hoàn trả. Người thắng cuộc chiến thắng trong trận đấu và đội thắng
                                    trận vẫn được giữ nguyên.</p>
                                <p>● Nếu bất kỳ trận đấu nào không được bắt đầu hoặc được trao cho một người chơi hoặc một đội một cách mặc định
                                    mà không cần phải bắt đầu chơi, tất cả các cược đặt trên bản đồ đó và trên toàn bộ trận đấu đều bị hủy và
                                    hoàn trả tiền. Các cược chỉ liên quan đến bản đồ được giữ nguyên. Một bản đồ được cho là đã bắt đầu ngay
                                    khi đồng hồ trò chơi bắt đầu hoặc đội hoặc người chơi có hành động trò chơi liên quan đến bản đồ đó, bao
                                    gồm chọn, lệnh cấm và mua vũ khí.</p>
                                <h1>League of Legends</h1>
                                <p>● Đối với cược liên quan đến tháp, tất cả các tháp bị phá hủy tính là đã bị phá hủy bởi đội đối lập ngay cả khi
                                    Đòn đánh cuối cùng là từ một con lính.</p>
                                <p>● Đối với cược liên quan nhà lính, tất cả các nhà lính bị phá hủy tính là đã bị phá hủy bởi đội đối lập ngay
                                    cả khi Đòn đánh cuối cùng là từ một con lính.</p>
                                <p> Đối với cược liên quan đến số lượng nhà lính bị phá hủy, mỗi sáu nhà lính chỉ đếm một lần, ngay cả khi nó bị phá hủy,
                                    trở lại và bị hủy hoại một lần nữa.</p>
                                    <p>● Đối với các cược liên quan đến nhà lính tiếp theo bị phá hủy, mỗi sự phá hủy của một nhà lính này được
                                        tính một cách riêng biệt, nó đã trở lại và đang bị phá hủy lần thứ hai hoặc lần tiếp theo.</p>
                                    <p>● Đối với các cược liên quan đến giết người (bao gồm cả "First Blood", trong League of Legends đồng nghĩa
                                        với vụ giết người đầu tiên trên bản đồ), việc phát hành chính thức hoặc API trò chơi nếu có là xác định
                                        cuối cùng để xác định xem cái chết của một Tướng được đếm như một vụ giết người.. Ví dụ, khi một Tướng
                                        bị giết bởi tháp hoặc lính mà không có sự tham gia của một Tướng của đối phương, điều này có thể không
                                        được đăng ký như một sự giết người, trong trường hợp đó nó không được tính là giết người vì mục đích
                                        giải quyết cược.</p>
                                    <p>● Đối với cược liên quan đến đội tiếp theo để ghi được điểm của một mục tiêu cụ thể hoặc đội ghi được nhiều
                                        điểm nhất , trong đó một lựa chọn "không" hoặc "rút thăm" được cung cấp và là kết quả chiến thắng, các
                                        cược đặt cho cả hai đội là kẻ thua cuộc. Trường hợp không có lựa chọn như vậy được cung cấp và không
                                        đội là người chiến thắng, tất cả các cược trên thị trường là vô hiệu và tiền được hoàn lại.</p>
                                    <p> ● Tất cả các lại rồng ( Elemental Dragon và Elder Dragon…) đều được tính toán trong thị trường rồng.</p>
                                    <p>● Trường hợp một đội đầu hàng, đặt cược giữ nguyên và được giải quyết như sau.
                                        <br /> I. Đối với cược liên quan đến người chiến thắng trên bản đồ, đội chiến thắng là đội không đầu hàng.
                                        <br /> II. Các giao dịch liên quan đến rồng, Baron và chỉ số hạ gục được giải quyết dựa trên tình huống tại
                                        thời điểm đầu hang có hiệu lực.
                                        <br /> III. Các cược liên quan đến tháp và nhà lính được giải quyết như thể đội chiến thắng đã phá hủy số lượng
                                        tối thiểu để bổ sung của tháp / hoặc nhà lính về mặt lý thuyết yêu cầu để giành chiến thắng trong trò
                                        chơi bình thường từ thời điểm việc đầu hàng xảy ra.
                                        <br /> IV. Ví dụ, nếu bất kỳ nhà lính nào của đội thua ở thời điểm đầu hàng bị phá và không có nhà lính bổ
                                        sung được coi là đã bị phá hủy. Nếu không có nhà lính nào của đội thua bị phá hủy thì đội thắng sẽ được
                                        coi là phá hủy thêm một nhà lính bổ sung, với ưu tiên cho một nhà lính đã bị phá hủy nếu như một nhà
                                        lính tồn tại và đã hồi trở lại.
                                        <br /> V. Nếu đội chiến thắng đã phá hủy tất cả các tháp cấp 1 và một tháp cấp 2, thì nó sẽ được coi là đã
                                        phá hủy ba tháp kế tiếp (tổng cộng bảy), vì nó cần phải tiêu diệt ít nhất một tháp cấp 3 và hai tháp
                                        nexus để có được chiến thắng bình thường từ vị trí đó.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 19}>
                        <h2>DOTA2</h2>
                            <p>● Đối với cược liên quan đến tháp, tất cả các tháp bị phá hủy tính là đã bị phá hủy bởi đội đối lập ngay cả khi đạt
                                được cuối cùng từ một quân lính.
                                <br /> ● Đối với các cược liên quan đến doanh trại, tất cả các doanh trại bị tiêu diệt tính là đã bị phá hủy bởi đội
                                đối phương ngay cả khi lần cuối cùng là từ một quân lính. Các trại lính khoảng cách và cận chiến trong mỗi cặp
                                được tính là doanh trại riêng biệt, do đó mỗi đội có tổng cộng sáu doanh trại.
                                <br /> ● Đối với cược liên quan đến giết người (trừ "First Blood"), chương trình phát sóng chính thức hoặc API trò
                                chơi nếu có sẵn là xác định cuối cùng để xác định xem cái chết của Champion có nghĩa là giết người hay không.
                                Ví dụ, khi một Champion bị giết bởi tháp hoặc đội quân thiệt hại mà không có sự tham gia của một Champion của
                                đối phương, điều này có thể không được đăng ký như một vụ giết người trên chương trình phát sóng, trong trường
                                hợp đó nó không được coi là giết người vì mục đích giải quyết cược.
                                <br /> Đối với cược First Blood, số điểm phát sóng chính thức của API phải đăng ký giết người như First Blood. Trường
                                hợp, ví dụ, giết người bị từ chối bởi một đồng đội, nó có thể không được tính là First Blood (bất kể nó được
                                đăng ký là giết người trên máy phát thanh truy cập truy cập), trong trường hợp nó sẽ không được tính là First
                                Blood cho mục đích đặt cược đặt cược. Để tránh nghi ngờ, tất cả các thị trấn giết ngoài "First Blood" đều được
                                định cư dựa vào bộ đếm sát thủ, nhưng một vụ giết người được đăng ký trên máy đếm sát sẽ được tính là First Blood
                                chỉ khi được thông báo như vậy.
                                <br /> ●Đối với cược vào Roshans, đội đánh bại cú đánh cuối cùng trên Roshan được xác định bởi API của chương trình
                                phát sóng hoặc trò chơi nếu có được coi là đã giết Roshan, bất kể người chơi nào đã chọn được uy quyền của bất
                                tử.
                                <br /> ● Đối với các cược liên quan đến đội bóng kế tiếp ghi được một mục tiêu cụ thể hoặc đội ghi được nhiều mục tiêu
                                cụ thể nhất, khi đó lựa chọn "không" hoặc "rút gọn" được đưa ra và là kết quả thắng, cược của cả hai đội đều
                                là những người thất bại. Trường hợp không có lựa chọn nào được đề nghị và không đội nào là người chiến thắng,
                                mọi cược đặt trên thị trường đều vô hiệu và hoàn trả tiền.
                                <br /> ● Trường hợp một đội đầu hàng, đặt cược và được giải quyết như sau.
                                <br /> I. Đối với cược liên quan đến người chiến thắng trên bản đồ, đội chiến thắng là đội không đầu hàng.
                                <br /> II. Các giao dịch liên quan đến Roshans, doanh trại và giết người được giải quyết dựa trên tình hình tại thời
                                điểm đầu hàng diễn ra.
                                <br /> III. Các cược liên quan đến tháp được giải quyết như thể đội chiến thắng đã phá hủy tối thiểu số tháp bổ sung
                                về mặt lý thuyết yêu cầu để giành chiến thắng trong trò chơi bình thường từ vị trí khi đầu hàng xảy ra.
                                <br /> IV. Ví dụ: nếu đội chiến thắng đã phá hủy tất cả các tháp cấp 1 và một tháp cấp 2, thì nó sẽ bị coi là đã phá
                                hủy ba tháp tiếp theo (tổng cộng bảy), vì nó cần phải phá hủy ít nhất một tháp cấp 3 và hai ngọn tháp cổ đã thắng
                                được trò chơi bình thường từ vị trí đó. </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 20}>
                        <h2>Counter Strike: GO</h2>
                            <p>● Hầu hết các đặt cược vào bản đồ đều dựa trên số vòng dự kiến (thường là 30) trừ các vòng chơi thêm trong trường
                                hợp hòa. Tuy nhiên, nếu một thị trường chiến thắng của bản đồ được cung cấp mà không có lựa chọn "được đội thắng"
                                thì điều này sẽ được giải quyết dựa trên tổng thể chiến thắng của bản đồ bao gồm cả thời gian nếu được chơi.</p>
                            <p>● Pistol round: Là vòng đầu tiên và mười sáu vòng trong bản đồ.</p>
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


BetRuleFourVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRuleFourVn))));