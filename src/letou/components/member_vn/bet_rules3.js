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

export class BetRuleThree extends React.Component {
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
                                <a href="/for_member">Luật chơi Thể thao >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                  
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>Cược chấp Châu Á</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>Bàn thắng hợp lệ</a>
                            </li>
                            <li className={this.state.current == 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a>Điểm thắng</a>
                            </li>
                            <li className={this.state.current == 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a>Nửa hiệp / Cả hiệp</a>
                            </li>
                            <li className={this.state.current == 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a>Cược phạt góc</a>
                            </li>
                            <li className={this.state.current == 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)}>
                                <a>Cược thẻ phạt</a>
                            </li>
                            <li className={this.state.current == 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)}>
                                <a>Bàn thắng hơn bất cứ cầu thủ nào</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>

                    <div id="HelperCenterDetail" >
                        <div className="centerDetail" hidden={this.state.current != 1}>
                        <h2> Cược chấp Châu Á</h2>
                        <p>Cược chấp Châu Á (bao gồm cược hiệp 1 & cược hiệp 2)
                            <br />
                            <br /> Có hai lựa chọn cho cho đội chủ nhà và đội khách, nếu trận đấu diễn ra ở sân trung lập, đội chủ nhà và đội khách
                            sẽ được phân biệt trên màn hình. Chỉ có 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 0 trái
                            <br />
                            <br /> Nếu một đội thắng với bất kì sẽ được thanh toán như là lựa chọn thắng cuộc. Trong trường hợp hòa, tất cả cược
                            sẽ được hủy và tiền cược sẽ được hoàn trả.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 0,5 trái
                            <br />
                            <br /> Đội chấp 0.5 trái khi bắt đầu:
                            <br /> - Thắng bởi bất kì điểm số – Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa – Một nửa tiền cược được hoàn trả cho lựa chọn này. Một nửa tiền cược còn lại được tính thua.
                            <br /> - Thua bởi bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Đội được chấp 0.5 trái khi bắt đầu:
                            <br /> - Thắng bởi bất kì điểm số – Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa – Một nửa tiền cược thanh toán theo giá tiền của cược. Một nửa còn lại được hoàn trả về cho khách hàng.
                            <br /> - Thua bởi bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 0,5 trái
                            <br />
                            <br /> Đội chấp 0.5 trái khi bắt đầu:
                            <br /> - Thắng bởi bất kì điểm số – Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa - Tất cả cược cho lựa chọn này thua.
                            <br /> - Thua bởi bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Đội được chấp 0.5 trái khi bắt đầu:
                            <br /> - Thắng bởi bất kì điểm số – Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa – Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thua bởi bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 0.5,1 Trái
                            <br />
                            <br /> Đội chấp 0.5,1 trái khi bắt đầu:
                            <br /> - Thắng 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng chính xác 1 điểm - Một nửa tiền cược thanh toán theo giá tiền của cược. Một nửa còn lại được hoàn trả
                            về cho khách hàng.
                            <br /> - Thua bởi bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Đội được chấp 0.5,1 trái khi bắt đầu:
                            <br /> - Hòa hoặc thắng ở bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thua chính xác 1 điểm - Một nửa còn lại được hoàn trả về cho khách hàng. Một nửa tiền cược còn lại được tính
                            thua.
                            <br /> - Thua 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 1 Trái
                            <br />
                            <br /> Đội chấp 1 trái khi bắt đầu:
                            <br /> - Thắng 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng chính xác 1 điểm – Tất cả cược cho lựa chọn này được hủy và hoàn trả lại cho khách hàng.
                            <br /> - Hòa hoặc thua - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Đội được chấp 1 trái khi bắt đầu:
                            <br /> - Thắng bất kì điểm số hoặc hòa - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thua chính xác 1 điểm - Tất cả cược cho lựa chọn này được hủy và hoàn trả lại cho khách hàng.
                            <br /> - Thua 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thua.</p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                        <h2>Các cược châu Á</h2>
                        <p>Các cược châu Á (Bao gồm hiệp 1 và hiệp 2.)
                            <br />
                            <br /> Cược sẽ bị hủy nếu trận đấu bị hủy. Chỉ chơi 90 phút, thêm giờ và phạt không tính.
                            <br />
                            <br /> Với 1 bàn thắng
                            <br />
                            <br /> Số bàn thắng trên 1
                            <br /> Cược giành chiến thắng nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác 1 bàn thắng cược sẽ được trả lại.
                            <br /> Cược thua nếu trận đấu không ghi bàn
                            <br /> Số bàn thắng dưới 1
                            <br /> Cược chiến thắng nếu trận đấu mà không có bàn thắng được ghi.
                            <br /> Nếu có chính xác 1 bàn thắng cược sẽ được trả lại.
                            <br /> Các cược bị thua nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu
                            <br />
                            <br />
                            <br />
                            <br /> Số bàn từ 1/1.5
                            <br />
                            <br /> Số bàn thắng trên khoảng 1/1.5
                            <br /> Cược giành chiến thắng nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác một bàn thắng thì một nửa số cổ phần sẽ được trả lại và một nửa sẽ bị mất.
                            <br /> Cược thua nếu trận đấu không ghi bàn
                            <br /> Số bàn thắng dưới khoảng 1/1.5
                            <br /> Cược chiến thắng nếu trận đấu mà không có bàn thắng.
                            <br /> Nếu có chính xác một bàn thắng thì một nửa số cổ phần sẽ giành chiến thắng và một nửa được trả lại.
                            <br /> Các cược bị thua nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu .
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số bàn là 1.5
                            <br />
                            <br /> Số bàn trên dòng 1.5
                            <br /> Cược giành chiến thắng nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Cược thua nếu có 0 hoặc 1 bàn thắng ghi được trong trận đấu.
                            <br />
                            <br /> Số bàn dưới dòng 1.5
                            <br /> Cược thắng nếu có 0 hoặc 1 bàn thắng ghi được trong trận đấu.
                            <br /> Cược thua nếu có hai hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số bàn từ 1.5/2.0
                            <br />
                            <br /> Số bàn trên khoảng 1.5/2
                            <br /> Cược giành chiến thắng nếu có ba hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác hai bàn thì một nửa số cổ phần sẽ giành chiến thắng và một nửa sẽ được trả lại.
                            <br /> Các cược thua nếu có 0, 1 hoặc 2 bàn thắng ghi được trong trận đấu
                            <br /> Số bàn dưới khoảng 1.5/2
                            <br /> Cược giành chiến thắng nếu 0 có hoặc 1 bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác hai bàn thì một nửa số cổ phần sẽ được trả lại và một nửa sẽ bị mất
                            <br /> Các cược bị mất nếu có từ ba bàn thắng trở lên trong trận đấu.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Với 2 bàn thắng
                            <br />
                            <br /> Số bàn thắng trên 2
                            <br /> Cược giành chiến thắng nếu có ba hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác 2 bàn thắng cược sẽ được trả lại.
                            <br /> Cược thua nếu trận đấu không ghi bàn hoặc có một bàn thắng được ghi.
                            <br /> Số bàn thắng dưới 2
                            <br /> Cược chiến thắng nếu trận đấu mà không có bàn thắng hoặc 1 bàn thắng được ghi.
                            <br /> Nếu có chính xác 2 bàn thắng cược sẽ được trả lại.
                            <br /> Các cược bị thua nếu có ba hoặc nhiều bàn thắng ghi được trong trận đấu
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số bàn từ 2/2.5
                            <br />
                            <br /> Số bàn thắng trên khoảng 2/2.5
                            <br /> Cược giành chiến thắng nếu có ba hoặc nhiều bàn thắng ghi được trong trận đấu.
                            <br /> Nếu có chính xác hai bàn thắng thì một nửa số cổ phần sẽ được trả lại và một nửa sẽ bị mất.
                            <br /> Cược thua nếu trận đấu không ghi bàn hoặc có 1 bàn thắng được ghi .
                            <br />
                            <br /> Số bàn thắng dưới khoảng 2/2.5
                            <br /> Cược chiến thắng nếu trận đấu mà không có bàn thắng hoặc có 1 bàn thắng được ghi.
                            <br /> Nếu có chính xác hai bàn thắng thì một nửa số cổ phần sẽ giành chiến thắng và một nửa được trả lại.
                            <br /> Các cược bị thua nếu có ba hoặc nhiều bàn thắng ghi được trong trận đấu
                            
                        </p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 3}>
                        <h2>Cược Chấp Châu Âu</h2>
                        <p> Cược Chấp Châu Âu (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Có ba lựa chọn cho đội chủ nhà, hòa và đội khách. Nếu trận đấu diễn ra ở sân trung lập, đội chủ nhà và đội khách
                            sẽ được phân biệt trên màn hình như thông thường. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được
                            tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 1 trái – Đội chấp 1 trái khi bắt đầu
                            <br />
                            <br /> Cược đội chủ nhà thắng:
                            <br /> - Thắng 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:1, đội chủ nhà thua, cược thua.
                            <br /> Kết quả trận đấu 1:0 - 1:1, hòa, cược thua.
                            <br /> Kết quả trận đấu 2:0 - 2:1, đội chủ nhà thắng, cược thắng.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược hòa:
                            <br />
                            <br /> -Thắng chính xác 1 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:1, đội chủ nhà thua, cược thua.
                            <br /> Kết quả trận đấu 1:0 - 1:1, hòa, cược thắng.
                            <br /> Kết quả trận đấu 2:0 - 2:1, đội chủ nhà thắng, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược đội khách thắng:
                            <br />
                            <br /> - Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:1, đội chủ nhà thua, cược thắng.
                            <br /> Kết quả trận đấu 1:0 - 1:1, hòa, cược thua.
                            <br /> Kết quả trận đấu 2:0 - 2:1, đội chủ nhà thắng, cược thua.
                            <br /> Cược chấp 1 trái – Đội chấp 1 trái khi bắt đầu
                            <br />
                            <br /> Cược đội chủ nhà thắng:
                            <br /> -Hòa hoặc thắng ở bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Thua 2 hoặc hơn 2 điểm - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 1:0, đội chủ nhà thắng, cược thắng.
                            <br /> Kết quả trận đấu 0:1 - 1:1, hòa, cược thua.
                            <br /> Kết quả trận đấu 0:2 - 1:2, đội chủ nhà thua, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược đội khách thắng:
                            <br />
                            <br /> -Thua chính xác 1 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Thắng bởi bất kì điểm số hoặc thua bởi 2 điểm hoặc hơn - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 1:0, đội chủ nhà thắng, cược thua.
                            <br /> Kết quả trận đấu 0:1 - 1:1, hòa, cược thắng.
                            <br /> Kết quả trận đấu 0:2 - 1:2, đội chủ nhà thua, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược hòa:
                            <br />
                            <br /> -Thua bởi 2 điểm hoặc hơn - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa hoặc thắng ở bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 1:0, đội chủ nhà thắng, cược thua.
                            <br /> Kết quả trận đấu 0:1 - 1:1, hòa, cược thua.
                            <br /> Kết quả trận đấu 0:2 - 1:2, đội chủ nhà thua, cược thắng.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 2 trái – Đội chấp 2 trái khi bắt đầu
                            <br />
                            <br /> Cược đội chủ nhà thắng:
                            <br /> -Thắng 3 hoặc hơn 3 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:2, đội chủ nhà thua, cược thua.
                            <br /> Kết quả trận đấu 2:0 - 2:2, hòa, cược thua.
                            <br /> Kết quả trận đấu 3:0 - 3:2, đội chủ nhà thắng, cược thắng.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược hòa:
                            <br />
                            <br /> - Thắng chính xác 2 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:2, đội chủ nhà thua, cược thua.
                            <br /> Kết quả trận đấu 2:0 - 2:2, hòa, cược thắng.
                            <br /> Kết quả trận đấu 3:0 - 3:2, đội chủ nhà thắng, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược đội khách thắng:
                            <br />
                            <br /> - Hòa hoặc thua ở bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng 3 hoặc hơn 3 điểm - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 0:2, đội chủ nhà thua, cược thắng.
                            <br /> Kết quả trận đấu 2:0 - 2:2, hòa, cược thua.
                            <br /> Kết quả trận đấu 3:0 - 3:2, đội chủ nhà thắng, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp 2 trái – Đội được chấp 2 trái khi bắt đầu
                            <br />
                            <br /> Cược đội chủ nhà thắng:
                            <br /> -Thắng ở bất kì điểm số hoặc hòa - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Thua 3 hoặc hơn 3 điểm - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 2:0, đội chủ nhà thắng, cược thắng.
                            <br /> Kết quả trận đấu 0:2 - 2:2, hòa, cược thua.
                            <br /> Kết quả trận đấu 0:3 - 2:3, đội chủ nhà thua, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược đội khách thắng:
                            <br />
                            <br /> - Thua chính xác 2 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng bởi bất kì điểm số hoặc thua bởi 3 điểm hoặc hơn - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Example:
                            <br /> Kết quả trận đấu 0:0 - 2:0, đội chủ nhà thắng, cược thắng.
                            <br /> Kết quả trận đấu 0:2 - 2:2, hòa, cược thắng.
                            <br /> Kết quả trận đấu 0:3 - 2:3, đội chủ nhà thua, cược thua.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược hòa:
                            <br />
                            <br /> - Thua 3 hoặc hơn 3 điểm - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thắng ở bất kì điểm số hoặc hòa - Tất cả cược cho lựa chọn này thua.
                            <br />
                            <br /> Ví dụ:
                            <br /> Kết quả trận đấu 0:0 - 2:0, đội chủ nhà thắng, cược thua.
                            <br /> Kết quả trận đấu 0:2 - 2:2, hòa, cược thua.
                            <br /> Kết quả trận đấu 0:3 - 2:3, đội chủ nhà thua, cược thắng.</p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 4}>
                        <h2>Thị trường chung</h2>
                        <p>Cơ hội nhân đôi (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Dự đoán kết quả cuối cùng, với cơ hội nhân đôi. Các lựa chọn cược như sau:
                            <br /> 1 hoặc 2 – Nếu kết quả là đội chủ nhà hoặc đội khách thì cược ho lựa chọn này thắng.
                            <br /> 1 hoặc X - Nếu kết quả là đội chủ nhà hoặc hòa thì cược ho lựa chọn này thắng.
                            <br /> X hoặc 2 - Nếu kết quả là hòa hoặc đội khách thì cược ho lựa chọn này thắng.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Thắng Cách Biệt
                            <br />
                            <br /> Dự đoán điểm số cuối cùng của cả hai bên trong toàn bộ thời gian thi đấu, một thống kê dựa trên số điểm được
                            ghi bởi đội chiến thắng và số điểm được ghi bởi đội thua. Các lựa chọn cược như sau:
                            <br /> Cược cho đội chủ nhà thắng, và điểm số thắng lớn hơn 2 điểm (không bao gồm điểm 2).
                            <br /> Cược đội chủ nhà thắng, thắng cách biệt 2 điểm.
                            <br /> Cược đội chủ nhà thắng, thắng cách biệt 1 điểm.
                            <br />
                            <br /> The two teams tied.
                            <br />
                            <br /> Cược cho đội khách thắng, và điểm số thắng lớn hơn 2 điểm (không bao gồm điểm 2).
                            <br /> Cược đội khách thắng, thắng cách biệt 2 điểm.
                            <br /> Cược đội khách thắng, thắng cách biệt 1 điểm.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Nửa trận/Cả trận
                            <br />
                            <br /> Nửa trận/Cả trận nghĩa là cược dự đoán kết quả của cả nửa trận và cả trận của một sự kiện. Các lựa chọn cược
                            là:
                            <br /> Đội chủ nhà / Đội chủ nhà: Đội chủ nhà thắng ở nửa trận đấu và ở cả trận đấu.
                            <br /> Đội chủ nhà / Hòa: Đội chủ nhà thắng ở nửa trận đấu và kết quả cả trận là hai đội hòa.
                            <br /> Đội chủ nhà / Đội khách: Đội chủ nhà thắng ở nửa trận và đội khách thắng cả trận.
                            <br /> Hòa / Đội chủ nhà: Hai đội hòa nhau ở nửa trận đấu và đội chủ nhà thắng cả trận.
                            <br /> Hòa / Hòa: Ở cả nửa trận và cả trận, hai đội hòa.
                            <br /> Hòa / Đội khách: Hai đội hòa ở nửa trận đấu và đội khách thắng cả trận.
                            <br /> Đội khách / Đội chủ nhà: Đội khách thắng ở nửa trận đấu và đội chủ nhà thắng cả trận
                            <br /> Đội khách / Hòa: Đội khách thắng ở nửa trận đấu và hai đội hòa cuối trận.
                            <br /> Đội khách / Đội khách: Đội khách thắng ở cả nửa trận và cả trận đấu.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng số bàn thắng (khoảng)
                            <br />
                            <br /> Tổng số bàn thắng của cả hai đội trong một trận đấu được tính tổng. Các lựa chọn cược là: 0-1 goals, 2-3 trái,
                            4-5 trái, và 6 trái và nhiều hơn nữa. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng số bàn thắng (Cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Tổng số bàn thắng của cả hai đội trong một hiệp đấu được tính tổng. Các lựa chợn cược là: 0 trái, 1 trái và
                            nhiều hơn nữa.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng số bàn thắng của đội chủ nhà/đội khách
                            <br />
                            <br /> Thanh toán bởi tổng số bàn thắng của đội chủ nhà/đội khách. Các lựa chợn cược là: 0 trái, 1 trái, 2 trái, 3
                            trái và nhiều hơn nữa. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng số bàn thắng (chính xác)
                            <br />
                            <br /> Tổng số bàn thắng của cả hai đội trong trận đấu được tính tổng. Các lựa chợn cược là 1, 2, 3, 4, 5, và 6 trái,
                            và nhiều hơn nữa and more. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng số (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Cược được xác định bằng tổng số điểm trong kết quả cuối cùng của một sự kiện. Nếu tổng số lớn hơn một số Trên/Dưới
                            cho trước, kết quả thắng là Trên; nếu tổng số nhỏ hơn một số Trên/Dưới cho trước, kết quả thắng là Dưới. Chỉ
                            tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng điển Chủ nhà/Đội khách (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Dự đoán kết quả cuối cùng của đội. Nếu điểm số của đội chủ nhà/đội khách lớn hơn một số Trên/Dưới cho trước,
                            kết quả thắng là Trên; nếu điểm số của đội chủ nhà/đội khách nhỏ hơn một số Trên/Dưới cho trước, kết quả thắng
                            là Dưới. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Bàn thắng Chẵn/Lẻ (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Bàn thắng chẵn và lẻ, được xác định bởi kết quả cuối cùng của tổng số bàn thắng. Chỉ tính 90 phút thi đấu, hiệp
                            phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Chẵn/Lẻ Đội chủ nhà/Đội khách
                            <br />
                            <br /> Được tính bởi tổng số bàn thắng của đội chủ nhà/đội khách. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu
                            không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược không hòa (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Nếu kết quả cuối cùng sau thời gian thi đấu thông thường của trận đấu hoặc khi kết thức thời gian là hòa, tất
                            cả các cược sẽ được hoàn trả.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Trận đấu sẽ được quyết định như thế nào?
                            <br />
                            <br /> Dự đoán đội chủ nhà hoặc đội khách chiến thắng; và trong thời gian thi đấu thông thường hoặc bù giờ hoặc đã
                            luân lưu để thắng trò chơi.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược tỉ số chính xác (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Cược tỉ số chính xác nghĩa là cược dự đoán điểm số cuối cùng khi kết thúc cả trận đấu. Lựa chọn “Khác” chỉ ra
                            rằng nếu kết quả nằm ngoài những lựa chọn không có, cược cho “khác” thắng. Chỉ tính thời gian chính thời gian
                            chính thức, bù giờ, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tỉ số chính xác Nửa trận/Cả trận
                            <br />
                            <br /> Tỉ số chính xác Nửa trận/Cả trận nghĩa là cược dự đoán điểm số của nửa trận đấu và cả trận đấu. Chỉ tính thời
                            gian chính thời gian chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược trận đấu và điểm số (Bao gồm cược hiệp 1 và hiệp 2)
                            <br />
                            <br /> Cược trận đấu và điểm số nghĩa là cược cho cả hai lựa chọn: kết quả trận đấu sẽ là đội chủ nhà thắng hoặc đội
                            khách thắng hoặc hòa; và tổng bàn thắng trong kết quả cuối cùng của trận đấu là trên hay dưới.
                            <br />
                            <br /> Dưới đây là những lựa chọn cược có thể:
                            <br /> Đội khách &amp; Trên – Cược đội khách thắng và tổng số bàn thắng trên số dự đoán.
                            <br /> Hòa &amp; Trên - Cược kết quả trận đấu hòa và tổng số bàn thắng trên số dự đoán.
                            <br /> Đội chủ nhà &amp; Trên - Cược đội chủ nhà thắng và tổng số bàn thắng trên số dự đoán.
                            <br /> Đội khách &amp; Dưới - Cược đội khách thắng và tổng số bàn thắng dưới số dự đoán.
                            <br /> Hòa &amp; Dưới - Cược kết quả trận đấu hòa và tổng số bàn dưới số dự đoán.
                            <br /> Đội chủ nhà &amp; Dưới - Cược đội chủ nhà thắng và tổng số bàn thắng dưới số dự đoán.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Hai Đội Ghi Bàn
                            <br />
                            <br /> Hai đội cùng ghi bàn. Cược sẽ đưuọc hủy nếu trận đấu hủy, trừ những cược đã xác định vô điều kiện.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Bàn Thắng Đầu Tiên Trong Vòng 10 phút
                            <br />
                            <br /> Dự đoán bàn thắng đầu tiên của trận đấu trong những khoảng phút cho trước. Thời gian chấn thương được tính là
                            45/90. Khoảng thời gian cược là 10 phút. Nếu thời gian không được hiển thị, hãy áp dụng thời gian trên truyền
                            hình. Các lựa chọn cược là:
                            <br /> 00:00 - 10:00 phút
                            <br /> 10:01 - 20:00 phút
                            <br /> 20:01 - 30:00 phút
                            <br /> 30:01 - 40:00 phút
                            <br /> 40:01 - 50:00 phút
                            <br /> 50:01 - 60:00 phút
                            <br /> 60:01 - 70:00 phút
                            <br /> 70:01 - 80:00 phút
                            <br /> 80:01 - 90:00 phút
                            <br /> Không bàn thắng
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Bàn Thắng Đầu Tiên Trong Vòng 15 phút
                            <br />
                            <br /> Dự đoán bàn thắng đầu tiên của trận đấu trong những khoảng phút cho trước. Thời gian chấn thương được tính là
                            45/90. Khoảng thời gian cược là 15 phút. Nếu thời gian không được hiển thị, hãy áp dụng thời gian trên truyền
                            hình. Các lựa chọn cược là:
                            <br /> 00:00 - 15:00 phút
                            <br /> 16:00 - 30:00 phút
                            <br /> 31:00 - 45:00 phút
                            <br /> 46:00 - 60:00 phút
                            <br /> 61:00 - 75:00 phút
                            <br /> 76:00 - 90:00 phút
                            <br />
                            <br /> Không bàn thắng
                            <br /> Nếu trận đấu hủy sau khi bàn thắng đầu tiên được ghi, tất cả các cược vẫn có hiệu lực.
                            <br /> Nếu trận đấu hủy trước khi bàn thắng đầu tiên được ghi, tất cả các cược sẽ bị hủy.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Không cược Đội Chủ Nhà
                            <br />
                            <br /> Dự đoán trò chơi sẽ hòa hoặc đội khách thắng cuộc. Nếu đội chủ nhà thắng, các cược sẽ bị hủy. Chỉ tính 90 phút
                            thi đấu chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Không cược Đội Khách
                            <br />
                            <br /> Dự đoán trò chơi sẽ hòa hoặc đội chủ nhà thắng cuộc. Nếu đội khách thắng, các cược sẽ bị hủy. Chỉ tính 90 phút
                            thi đấu chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Matchflow
                            <br />
                            <br /> Dự đoán bàn thắng đầu tiên của đội và kết quả cuối cùng. Các lựa chọn cược là:
                            <br /> Đội chủ nhà ghi bàn đầu tiên và đội chủ nhà thắng
                            <br /> Đội chủ nhà ghi bàn đầu tiên và hòa
                            <br /> Đội chủ nhà ghi bàn đầu tiên và đội khách thắng
                            <br /> Đội khách ghi bàn đầu tiên và đội chủ nhà thắng
                            <br /> Đội khách ghi bàn đầu tiên và hòa
                            <br /> Đội khách ghi bàn đầu tiên và đội khách thắng
                            <br /> Không có bàn thắng nào
                            <br /> Đội nào ghi bàn
                            <br />
                            <br /> Dự đoán đội ghi bàn. Các lựa chọn cược là: Chỉ có đội chủ nhà, Chỉ có đội khách, Cả hai đội hoặc không có đội
                            nào. Chỉ tính 90 phút thi đấu chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cả trận và Hai đội ghi bàn (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Matchbet and Both Teams to Score nghĩa là cược cho cả hai dự đoán: Đội nào thắng trong thời gian thi đấu thông
                            thường và cả hai đội sẽ ghi bàn ít nhất một trái. Chỉ tính 90 phút thi đấu chính thức, hiệp phụ và đá luân lưu
                            không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Hai đội ghi bàn và Tổng điểm
                            <br />
                            <br /> Hai đội ghi bàn và Tổng điểm nghĩa là cược cho cả hai dự đoán: cả hai đội sẽ ghi bàn ít nhất một trái will the
                            và điểm số cuối cùng lớn hơn hay nhỏ hơn tổng điểm dựu đoán trước sau thời gian thi đấu chính thức. Chỉ tính
                            90 phút thi đấu chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cầu thủ ghi bàn bất kì
                            <br />
                            <br /> Cược cầu thủ ghi bàn trong trận đấu. Bàn thắng phản lưới nhà không được tính. Chỉ tính 90 phút thi đấu chính
                            thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cầu thủ ghi bàn cuối cùng
                            <br />
                            <br /> Cược cầu thủ ghi bàn cuối cùng trong trận đấu. Bàn thắng phản lưới nhà không được tính. Chỉ tính 90 phút thi
                            đấu chính thức, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Mười phút đầu tiên – 1X2
                            <br />
                            <br /> 1X2 (3way), Cược đội nào thắng. Loại cược này chỉ tinh từ phút thứ 1 tới phút thứ 10.
                            <br /> 1: Nếu đội chủ nhà thắng, cược cho lựa chọn này thắng.
                            <br /> X: nếu hai đội hòa, cược cho lựa chọn này thắng.
                            <br /> 2: Nếu đội khách thắng, cược cho lựa chọn này thắng.</p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 5}>
                        <h2>Cược phạt góc</h2>
                        <p>Tổng số phạt góc (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược tổng số phạt góc được xác định bởi tổng số phạt góc ở kết quả cuối cùng của một trận đấu. Chỉ tính 90 phút
                            thi đấu, hiệp phụ không được tính. Nếu tổng số phạt góc lớn hơn một số Trên/Dưới cho trước, kết quả thắng là
                            Trên; nếu tổng số nhỏ hơn một số Trên/Dưới cho trước, kết quả thắng là Dưới.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược phạt góc Chẵn/Lẻ (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Phạt góc chẵn và lẻ, được xác định bằng kết quả cuối cùng của một giải đấu cộng với tổng số phạt góc . Chỉ tính
                            90 phút thi đấu, hiệp phụ không được tính. Chẵn và lẻ nghĩa là cược trên kết quả của hiệp đầu tiên từ tổng số
                            phạt góc hiệp 1 để quyết định..
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng phạt góc (Khoảng)
                            <br />
                            <br /> Tổng số phạt góc của hai đội cộng với tổng tính toán. Các lựa chọn là 0-8 trái, 9-11 trái và 12 trái. Chỉ tính
                            90 phút thi đấu, hiệp phụ không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Hiệp 1 - Tổng phạt góc (Khoảng)
                            <br />
                            <br /> Tổng số phạt góc của hai đội cộng với tổng tính toán. Các lựa chọn là 0-4 trái, 5-6 trái và 7 trái và hơn nữa.
                            Kết quả được thanh toán trên tổng số của hiệp 1.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Đội chủ nhà/Đội khách số phạt góc
                            <br />
                            <br /> Cược đội chủ nhà/đội khách với tổng số phạt góc. Các lựa chọn cược là 0-2 trái, 3-4 trái, 5-6 trái, 7 trái và
                            hơn nữa. Chỉ tính 90 phút thi đấu, hiệp phụ không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Hiệp 1 - Đội chủ nhà/Đội khách số phạt góc
                            <br />
                            <br /> Cược đội chủ nhà/đội khách thắng tổng số phạt góc. Các lựa chọn cược là 0-1 trái, 2 trái, 3 trái, 4 trái và
                            hơn nữa. Kết quả được thanh toán trên tổng số của hiệp 1.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược đội phạt góc nhiều nhất (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược đội có nhiều trái phạt góc nhất trong thời gian thi đấu thông thường. Các lựa chọn cược là đội chủ nhà,
                            đội khách và hòa. Nếu trận đấu diễn ra ở sân trung lập, đội được nêu tên trước được coi là đội chủ nhà cho mục
                            đích tham khảo. Chỉ tính 90 phút thi đấu, hiệp phụ không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Cược chấp phạt góc (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Có hai lựa chọn cho đội chủ nhà và đội khách, Nếu trận đấu diễn ra ở sân trung lập, đội chủ nhà và đội khách
                            được phân biệt trên màn hình Chỉ tính 90 phút thi đấu, hiệp phụ không được tính.
                            <br />
                            <br /> Cược chấp phạt góc 0,5 trái
                            <br /> Đội chấp 0.5 trái khi bắt đầu:
                            <br /> -Thắng với bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa - Tất cả cược cho lựa chọn này thua.
                            <br /> -Thua với bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br /> Đội được chấp 0.5 trái khi bắt đầu:
                            <br /> - Thắng với bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Hòa - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thua với bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br /> Cược chấp phạt góc 1,5 trái
                            <br />
                            <br /> Đội chấp 1.5 trái khi bắt đầu:
                            <br /> -Thắng bởi 2 điểm hoặc hơn - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa - Tất cả cược cho lựa chọn này thua.
                            <br /> -Thua với bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br /> Đội được chấp 1.5 trái khi bắt đầu:
                            <br /> -Thắng với bất kì điểm số - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Thua bởi 2 điểm hoặc hơn - Tất cả cược cho lựa chọn này thua.
                            <br /> Cược chấp phạt góc 2,5 trái
                            <br />
                            <br /> Đội chấp 2.5 trái khi bắt đầu:
                            <br /> -Thắng bởi 3 điểm hoặc hơn - Tất cả cược cho lựa chọn này thắng.
                            <br /> -Hòa - Tất cả cược cho lựa chọn này thua.
                            <br /> - Thua với bất kì điểm số - Tất cả cược cho lựa chọn này thua.
                            <br /> Đội được chấp 2.5 trái khi bắt đầu:
                            <br /> -Thắng với bất kì điểm số - Tất cả cược cho lựa chọn này thắng
                            <br /> -Hòa - Tất cả cược cho lựa chọn này thắng.
                            <br /> - Thua bởi 3 điểm hoặc hơn - Tất cả cược cho lựa chọn này thua.</p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 6}>
                        <h2>Cược thẻ phạt</h2>
                        <p>Tổng số thẻ phạt (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược được xác định bằng tổng số thẻ phạt trong kết quả cuối cùng của một trận đấu. Nếu tổng số lớn hơn một số
                            Trên/Dưới cho trước, kết quả thắng là Trên; nếu tổng số nhỏ hơn một số Trên/Dưới cho trước, kết quả thắng là
                            Dưới. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Tổng điểm thẻ phạt (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược được xác định bằng tổng số điểm thẻ phạt trong kết quả cuối cùng của một trận đấu. Nếu tổng số lớn hơn
                            một số Trên/Dưới cho trước, kết quả thắng là Trên; nếu tổng số nhỏ hơn một số Trên/Dưới cho trước, kết quả thắng
                            là Dưới. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số thẻ phạt Đội chủ nhà/Đội khách
                            <br />
                            <br /> Cược cho đội chủ nhà hoặc đội khách sẽ nhận được bao nhiêu thẻ phạt. Các lựa chọn cược là: 0-1, 2, 3, 4 và hơn
                            nữa. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số thẻ phạt Đội chủ nhà/Đội khách Hiệp 1
                            <br />
                            <br /> Cược cho đội chủ nhà hoặc đội khách sẽ nhận được bao nhiêu thẻ phạt trong hiệp 1. Các lựa chọn cược là: 0-1,
                            2, 3 và hơn nữa.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Đội nhận thẻ phạt đầu tiên (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược đội nào nhận thẻ phạt đầu tiên trong thời gian thi đấu thông thường hoặc trong hiệp 1. Các lựa chọn cược
                            là: đôị khách, đội chủ nhà và không đội nào.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Đội nhận thẻ phạt nhiều nhất (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược đội sẽ nhận thẻ phạt nhiều nhất. Các lựa chọn cược là: đôị khách, đội chủ nhà và không đội nào.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Khoảng điểm thẻ phạt
                            <br />
                            <br /> Khoảng điểm thẻ phạt của cả hai đội trong thời gian thi đấu thông thường. Các lựa chọn cược là: 0-30, 31-45,
                            46-60, 61-75 và 76 và hơn nữa. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân lưu không được tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Khoảng điểm thẻ phạt Hiệp 1
                            <br />
                            <br /> Khoảng điểm thẻ phạt của cả hai đội trong hiệp 1. Các lựa chọn cược là: 0-10, 11-25, 26-40 và 41 và hơn nữa.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> Số thẻ phạt chính xác (Bao gồm cược hiệp 1)
                            <br />
                            <br /> Cược số thẻ phạt chính xác của cả hai đội trong suôt trận đấu. Chỉ tính 90 phút thi đấu, hiệp phụ và đá luân
                            lưu không được tính. Cược hiệp 1 được xác định bằng kết quả quả hiệp 1.</p>
                    </div>
                        <div className="centerDetail" hidden={this.state.current != 7}>
                        <h2>In-Play Markets</h2>
                        <p>In-Play - 3-way (Chỉ có trong thời gian thêm giờ!)
                            <br />
                            <br /> 1X2 (3way), Cá cược đội thắng. Sự kiện cá cược chỉ bao gồm thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Hiệp phụ thứ nhất 3-way
                            <br />
                            <br /> 1X2 (3way), Cá cược đội thắng. Sự kiện cá cược chỉ có thời gian nửa đầu thời gian thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Kết quả(Tính lúc thêm giờ)
                            <br />
                            <br /> Tổng được xác định bởi số điểm giải đấu để xác định số lần đặt cược. Sự kiện cá cược chỉ bao gồm thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play - Ai thắng phần còn lại của trận đấu (chỉ tính thêm giờ!)?
                            <br />
                            <br /> Các cược sẽ được chấp nhận sau thời gian giải quyết, thời gian còn lại trong chiến thắng sẽ được áp dụng. Trong
                            bất kỳ cược chấp nhận trước khi bóng vào không có tính. Có thể đặt cược các lựa chọn là: đội chủ nhà, đội khách
                            và hòa. Sự kiện cá cược chỉ bao gồm thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Cược chấp châu Á trong thêm giờ
                            <br />
                            <br /> Tất cả cược đặt trên thị trường Handicap In-Play Châu Á được giải quyết theo điểm số cho phần còn lại của trận
                            đấu / một nửa trận sau khi cược đã đánh, ví dụ: bất kỳ bàn thắng nào trước khi cược được đặt sẽ bị bỏ qua cho
                            mục đích giải quyết. Sự kiện cá cược chỉ bao gồm thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Cược chấp Châu Á trong thời gian thêm giờ ở nửa đầu
                            <br />
                            <br /> Tất cả cược đặt trên thị trường Handicap In-Play Châu Á được giải quyết theo điểm số cho phần còn lại của trận
                            đấu / một nửa trận sau khi cược đã đánh, ví dụ: bất kỳ bàn thắng nào trước khi cược được đặt sẽ bị bỏ qua cho
                            mục đích giải quyết. Sự kiện cá cược chỉ bao gồm thêm giờ ở nửa đầu.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play - Đội nào sẽ giành chiến thắng trong loạt đá luân lưu phạt?
                            <br />
                            <br /> Cá cược rằng đội giành được hình phạt. Có thể đặt cược các lựa chọn là: đội nhà, đội khách.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Bàn thắng
                            <br />
                            <br /> Cược bắt đầu từ thời điểm bóng lăn, đội nào đạt được bàn thắng tiếp theo. Có thể đặt cược các lựa chọn là: đội
                            nhà, đội khách và không có mục tiêu. Chỉ chơi 90 phút, thêm giờ và phạt không tính .
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Bàn thắng ( chỉ tính thêm giờ)
                            <br />
                            <br /> Cược bắt đầu từ thời điểm bóng lăn, đội nào đạt được bàn thắng tiếp theo. Có thể đặt cược các lựa chọn là: đội
                            nhà, đội khách và không có mục tiêu. Chỉ tính trong thời gian thêm giờ.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Bàn thắng (Tính penalty )
                            <br />
                            <br /> Cược bắt đầu từ thời điểm bóng lăn, đội nào đạt được bàn thắng tiếp theo. Có thể đặt cược các lựa chọn là: đội
                            nhà, đội khách và không có mục tiêu. Chỉ tính penalty shootout.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Khi nào có bàn thắng
                            <br />
                            <br /> Cược bắt đầu từ thời điểm bóng lăn, thời gian có bàn thắng. Có thể đặt cược tùy chọn là: 00:00 - 15:00 phút
                            16:00 - 30:00 phút 31:00 - 45:00 phút 46:00 - 60:00 phút 61:00 - 75:00 phút 76:00 - 90 : 00 phút Không có bàn
                            thắng
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play – Tổng số phạt góc đội chủ nhà/đội khách (Có thể cược trong hiệp 1)
                            <br />
                            <br /> Tổng số phạt góc được xác định bởi các quả đá phạt góc của sự kiện để xác định số lần đặt cược. Bạn có thể đặt
                            cược đội chủ nhà hoặc đội khách. Chỉ tính trong 90 phút, thêm giờ và phạt không tính. Cược nửa hiệp tính kết
                            quả được xác định bởi giờ nghỉ giải lao .
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play -Đặt cược
                            <br />
                            <br /> 1X2 (3way), Cá cược đặt đội để giành chiến thắng. Chỉ chơi 90 phút, thêm giờ và phạt không tính.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> In-Play - Đặt đội nhà / đội khách (Bao gồm cược 1 nửa hiệp)
                            <br />
                            <br /> Đặt đội chủ nhà / đội khách được xác định bằng các sự kiện để xác định số lần đặt cược. Bạn có thể đặt cược
                            đội chủ nhà hoặc đội khách. Chỉ tính trong 90 phút, thêm giờ và phạt không tính. Cược nửa giờ đề cập đến kết
                            quả được xác định bởi giờ nghỉ giải lao.</p>
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


BetRuleThree.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRuleThree))));