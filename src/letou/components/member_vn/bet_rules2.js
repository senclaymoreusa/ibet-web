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

export class BetRuleTwoVn extends React.Component {
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
                                <a href="/vi/for_member">Luật chơi Thể thao >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">Điều khoản chung</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">Cược xiên</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Những Điều Khoản Chung</h2>
                            <p>Cược Thắng (Outright)<br />
                            Cược Thắng (outright) nghĩa là đặt cược vào người thắng trong một trận thi đấu, một cuộc đua hoặc một cuộc đấu. Ví Dụ: Giải Liên Đoàn Bóng Đá hoặc Giải tranh cúp F1. Số vị trí chiến thắng sẽ được chỉ rõ trong tiêu đề của Thị trường. Nếu một đấu thủ/cầu thủ không bắt đầu một Sự kiện, cuộc đua hoặc trận đấu thì tất cả các khoản cược Thắng cho đấu thủ/cầu thủ đó sẽ vô hiệu trừ phi có quy định khác trong quy tắc cá cược thể thao cụ thể.. Thuật ngữ “Bất kỳ người chơi nào khác” hoặc “Bất kỳ đội nào khác sẽ ứng với tất cả các người/đội chơi chưa được nêu danh trong Thị trường.<br />
                            <br />
                            <br />
                            Cược 3 Loại<br />
                            1X2 (Cược 3 loại), Cược cho đội thắng cuộc.<br />
                            - 1: Nếu đội chủ nhà thắng, thì lựa chọn cược này sẽ thắng.<br />
                            - X: Nếu hai đội có tỷ số hòa nhau, thì lựa chọn cược này sẽ thắng.<br />
                            - 2: Nếu đội khách thắng, thì lựa chọn cược này sẽ thắng.<br />
                            Nếu trận đấu diễn ra tại một sân trung lập, đội được liệt kê tên đầu tiên được coi là đội chủ nhà cho các mục đích đặt cược.<br />
                            <br />
                            <br />
                            Cược 2 loại<br />
                            Cược 2 loại có nghĩa là đặt cược vào đội sẽ thắng cuộc(không có tỷ số hòa).<br />
                            <br />
                            <br />
                            Cược chấp Handicap (HDP)<br />
                            Cược Chấp là đặt cược khi người hoặc đội thi đấu được chấp thực tế ban đầu (dẫn đầu hiệu quả do được chấp trước khi cuộc thi đấu bắt đầu). Người/đội thắng sẽ là người/đội thi đấu có số điểm cao hơn sau khi đã cộng thêm số điểm được chấp vào kết quả. Các quy định còn lại của Handicap sẽ được trình bày trong Quy định cá cược cho các trận đấu riêng biệt.<br />
                            <br />
                            <br />
                            Chấp banh Châu Âu (Handicap Châu Âu)<br />
                            Các cược sẽ được thanh toán dựa theo tỷ số trận đấu thực tế handicap đã được ấn định bởi tỷ lệ cược có sẵn.<br />
                            <br />
                            <br />
                            Tài/Xỉu (OU)<br />
                            Over/Under là sự cá cược được xác định bằng tổng số điểm (số bàn thắng, trò chơi) theo kết quả cuối cùng của trận đấu. Nếu tổng số điểm nhiều hơn một mức OU định trước thì Trên(Over) là kết quả thắng. Nếu tổng số điểm ít hơn một mức OU định trước thì Dưới (Under) là kết quả thắng.<br />
                            <br />
                            <br />
                            Tổng số bàn thắng lẻ/chẵn, Tổng số bàn thắng lẻ/chẵn - nửa trận(hiệp đầu tiên)<br />
                            Tổng số bàn thắng là số lẻ hay chẵn, được xác định bằng tổng số kết quả bàn thắng chung cuộc của một giải đấu kể cả tổng số điểm ( tổng số bàn thắng, tổng số điểm,..) để xác định cược.<br />
                            Cược Lẻ và chẵn có nghĩa là đặt cược vào kết quả của hiệp đầu tiên và dựa vào điểm số của hiệp đầu tiên để quyết định. Nếu trận đấu bị hủy trong suốt hiệp đầu tiên, tất cả cược sẽ bị hủy. Nếu trận đấu bị hủy ở hiệp hai, tất cả cược tại Cược Hiệp Đầu Tiên sẽ có hiệu lực.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>Tùy chọn cược nhiều cược</h2>
                            <p>Người chơi có thể chọn bất kì khu vực để đăt cược xiên, tỷ lệ cược được nhân lên. Bạn không thể cược xiên với cùng trận đấu hoặc đối đầu trực tiếp.</p>
                            <div class="MarginBottom20 tableFontStyle">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="Title">Chiến thắng 1</td>
                                            <td class="Title">Chiến thắng 2</td>
                                            <td class="Title">Chiến thắng 3</td>
                                            <td class="Title">Chiến thắng 4</td>
                                            <td class="Title">Chiến thắng 5</td>
                                            <td class="Title">Chiến thắng 6</td>
                                            <td class="Title">Chiến thắng 7</td>
                                            <td class="Title">Chiến thắng 8</td>
                                            <td class="Title">Chiến thắng 9</td>
                                        </tr>
                                        <tr>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">2x1</td>
                                            <td class="Title">3x1</td>
                                            <td class="Title">4x1</td>
                                            <td class="Title">5x1</td>
                                            <td class="Title">6x1</td>
                                            <td class="Title">7x1</td>
                                            <td class="Title">8x1</td>
                                            <td class="Title">9x1</td>
                                        </tr>
                                        <tr>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">3x3</td>
                                            <td class="Title">4x4</td>
                                            <td class="Title">5x5</td>
                                            <td class="Title">6x6</td>
                                            <td class="Title">7x7</td>
                                            <td class="Title">8x8</td>
                                            <td class="Title">9x9</td>
                                        </tr>
                                        <tr>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">3x4</td>
                                            <td class="Title">4x6</td>
                                            <td class="Title">5x10</td>
                                            <td class="Title">6x15</td>
                                            <td class="Title">7x21</td>
                                            <td class="Title">8x28</td>
                                            <td class="Title">9x36</td>
                                        </tr>
                                        <tr>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">4x5</td>
                                            <td class="Title">5x6</td>
                                            <td class="Title">6x7</td>
                                            <td class="Title">7x8</td>
                                            <td class="Title">8x9</td>
                                            <td class="Title">9x10</td>
                                        </tr>
                                        <tr>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">&nbsp;</td>
                                            <td class="Title">4x11</td>
                                            <td class="Title">5x16</td>
                                            <td class="Title">6x22</td>
                                            <td class="Title">7x29</td>
                                            <td class="Title">8x37</td>
                                            <td class="Title">9x46</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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


BetRuleTwoVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRuleTwoVn))));