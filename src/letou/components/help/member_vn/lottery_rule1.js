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

export class LotteryRuleOneVn extends React.Component {
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
                                <a href="/vi/for_member">Luật chơi Sổ xố >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)} >
                                <a href="/">Bảng chú giải</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)} >
                                <a href="/">Xổ Số HK</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)} >
                                <a href="/">Xổ Số Singaporean</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)} >
                                <a href="/">Xổ Số Trung Quốc</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)} >
                                <a href="/">Xổ Số New Zealand</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} onClick={this.onClick.bind(this,6)} >
                                <a href="/">Xổ Số Đức</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} onClick={this.onClick.bind(this,7)} >
                                <a href="/">Xổ Số British</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} onClick={this.onClick.bind(this,8)} >
                                <a href="/">Xổ Số Spanish</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} onClick={this.onClick.bind(this,9)} >
                                <a href="/">Xổ Số South African</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} onClick={this.onClick.bind(this,10)} >
                                <a href="/">Xổ Số Canada</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} onClick={this.onClick.bind(this,11)} >
                                <a href="/">Xổ Số American</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    {/* <!-- please only edit HelperCenterDetail's contain --> */}
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1} >
                        <h2>Bảng chú giải</h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            <p> Số đặc biệt là một cách thức chơi xố số, nơi mà 7 trái bóng ghi số được rút từ bộ 49 số từ 1 tới 49. Các kết quả được rút
                                theo thứ tự từ bóng 1 tới bóng 6 với bóng số 7 được gọi là Số Đặc Biệt. Người chơi thắng nếu số đặc biệt thắng hiện tại
                                giống với con số cược.</p>
                            <h1>【Số Thường/Số Đặc Biệt】</h1>
                            <p> Người chơi thắng nếu khu vực cược và số trùng với thứ tự và khu vực của bóng 1 tới bóng 6 (không bao gồm bóng đặc biệt).
                                Trái bóng đầu tiên được rút gọi là “Đặc biệt thường 1” và bóng thứ hai gọi là “Đặc biệt thường 2” và còn lại được trừ
                                tương tự.</p>
                            <h1>【Số Thường】</h1>
                            <p> Người chơi cược trên số bất kì trong nhóm 49 số từ 1 tới 49. Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1
                                tới bóng 6.</p>
                            <h1>【Hai Bên】</h1>
                            <p> Hai bên là thuật ngữ chung dùng cho lớn/nhỏ/chẵn/lẻ.</p>
                            <h1>【Số Thường 1-6】</h1>
                            <p> Cách thức này tức là cược trên thứ tự từ bóng 1 tới bóng 6 áp dụng “Hai Bên” và “Màu Sắc”. Người chơi thắng nếu kết quả trùng
                                với điều kiện đặt cược.</p>
                            <h1>【Cược Kết Hợp】</h1>
                            <p> Người chơi có thể cược bằng cách chọn hơn 2 bóng thành một nhóm như trúng cả 2 hoặc trúng cả 3.</p>
                            <h1>【Điểm】</h1>
                            <p> Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                            <h1>【Màu Sắc】</h1>
                            <p>Người chơi cược trên màu sắc của bất kì bóng số đặc biệt. Chỉ có xổ số HK có cách chơi này.</p>
                            <h1>【Con Giáp】</h1>
                            <p> Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49. Nếu năm hiện tại là năm “con rắn”,
                                chúng sẽ bắt đầu từ năm con rắn và xếp theo thứ tự 12 con giáp.</p>
                            <h1>【Chữ số Hàng Chục/Hàng Đơn Vị】</h1>
                            <p>Xổ số có 49 số từ giá trị 1 tới 49. Chữ số hang chục có thể là 0, 1, 2, 3, or 4. Chữ số hàng đơn vị có thể từ 0 tới 9.</p>
                            <h1>【Số rút ra】</h1>
                            <p>Xổ số có một con số rút ra cho kêt quả bốc thăm, nhưng ở một số nước không có con số rút ra này, ngày hiện tại sẽ được dùng
                                như là con số rút ra.</p>
                            <h1>【Hoàn Trả】</h1>
                            <p> Hoàn Trả= Tỉ số cược (bao gồm tiền cược), ngoài việc để cho người chơi tham khảo, nó cũng được dùng để tính toán rủi ro của
                                hệ thống.</p>
                            <h1>【Thắng/Thua】</h1>
                            <p> Số tiền thắng/thua của người chơi sẽ được hiển thị sau khi thanh toán cược mà người chơi cược trong xổ số hiện tại. Nếu kết
                                quả là thua, người chơi sẽ mất tiền cược và nó sẽ hiển thị [-tiền cược]. Nếu kết quả là thắng, nó sẽ hiển thị tiền cược
                                và tiền thắng [tiền thắng].</p>
                            <h1>【Nhóm ngẫu nhiên】</h1>
                            <p> Nhóm ngẫu nhiên là một cách chơi trong cược kết hợp. Cược ngẫu nhiên sẽ tự động tạo tất cả những kết hợp có thể có từ các
                                số được chọn từ người chơi.</p>
                            <h1>【Nhóm đặc biệt 1】</h1>
                            <p> Nhóm đặc biệt 1 là một cách chơi khác của cược kết hợp. Người chơi chọn các số từ mỗi cột, và sử dụng những số này để kết
                                hợp thành nhóm, tuy nhiên các số trong cùng một cột không được kết hợp với nhau thành nhóm.</p>
                            <h1>【Nhóm đặc biệt 2】</h1>
                            <p> Nhóm đặc biệt 2 là một cách chơi khác của cược kết hợp. Người chơi sẽ chọn “Số Đặc Biệt” và “Số Ngẫu Nhiên” và tạo nên kết
                                hợp dựa trên “Số Đặc Biệt”. Ví dụ: Người chơi chọn số 1 là số đặc biệt, chọn 2, 3 và 4, 5 là số ngẫu nhiên. Kết hợp chỉ
                                có thể là [1,2],[1,3] và [1,4] nếu người chơi cược trúng cả 2.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2> Xổ số HK </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p>Kết quả xổ số được rút theo thứ tự bóng 1 tói bóng 6 với bóng thứ 7 được gọi là bóng đặc biệt. Người chơi thắng nếu số đặc
                                biệt hiện tại trùng với con số cược. </p>
                            &nbsp;
                            <h1>【Số Thường/Đặc Biệt】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu khu vực cược và số trùng với thứ tự và khu vực của bóng 1 tới bóng 6.</p>
                            &nbsp;
                            <h1>【Số Thường】</h1>
                            &nbsp;
                            <p>Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1 tới bóng 6.</p>
                            &nbsp;
                            <h1>【Cược Kết Hợp】</h1>
                            &nbsp;
                            <p>Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 3 trúng 2：
                                <br /> √ Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 2 số trúng một số đặc biệt：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường.
                                <br /> √ Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt.
                            </p>
                            &nbsp;
                            <h1>【Con Giáp】</h1>
                            &nbsp;
                            <p> Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br />Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.
                            </p>
                            &nbsp;
                            <h1>【Hai Bên】</h1>
                            &nbsp; c &nbsp;
                            <h1>【Số Thường 1-6】</h1>
                            &nbsp;
                            <p>Cách chơi này là những cược dựa trên két quả rừ bóng 1 tới bóng 6 áp dụng các cược ""Hai Bên,"" ""Màu Sắc,"" ""Số hàng đơn
                                vị"" và ""Con Giáp.""
                                <br /> - Lớn/Nhỏ： Nếu số rút ra lớn hơn hoặc bằng 25, kết quả là “”lớn;”” nhỏ hơn hoặc bằng 24 là “”nhỏ””. Nếu số rút ra bằng
                                49 là ""hòa."”
                                <br /> - Chẵn/lẻ : Nếu số rút ra là một số chẵn, kết quả là “”chẵn;”” số lẻ kết quả là “”lẻ””. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Màu sắc ： Người chơi thắng nếu cược của họ trùng với màu sắc của bóng ở một vị trí cụ thể.
                                <br /> √ Đỏ：01，02，07，08，12，13，18，19，23，24，29，30，34，35，40，45，46
                                <br /> √ Xanh dương：03，04，09，10，14，15，20，25，26，31，36，37，41，42，47，48
                                <br /> √ Xanh lá：05，06，11，16，17，21，22，27，28，32，33，38，39，43，44，49
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> - Số hàng đơn vị lớn/nhỏ：Nếu số hàng đơn vị lớn hơn hoặc bằng 5, kết quả sẽ là “”Số hàng đơn vị lớn;”” Nếu số hàng đơn
                                vị nhỏ hơn hoặc bằng 4, kết quả sẽ là “”Số hàng đơn vị nhỏ;”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ：： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra
                                là chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”</p>
                            &nbsp;
                            <h1>【Màu Sắc】</h1>
                            &nbsp;
                            <p>Người chơi cược trên màu sắc của bất kì bóng cụ thể.
                                <br /> √ Đỏ：01，02，07，08，12，13，18，19，23，24，29，30，34，35，40，45，46
                                <br /> √ Xanh dương：03，04，09，10，14，15，20，25，26，31，36，37，41，42，47，48
                                <br /> √ Xanh lá：05，06，11，16，17，21，22，27，28，32，33，38，39，43，44，49
                                <br /> √ Đỏ lớn：29，30，34，35，40，45，46
                                <br /> √ Đỏ nhỏ小：01，02，07，08，12，13，18，19，23，24
                                <br /> √ Đỏ lẻ：01，07，13，19，23，29，35，45
                                <br /> √ Đỏ chẵn：02，08，12，18，24，30，34，40，46
                                <br /> √Xanh dương lớn：25，26，31，36，37，41，42，47，48
                                <br /> √Xanh dương nhỏ：03，04，09，10，14，15，20
                                <br /> √Xanh dương lẻ：03，09，15，25，31，37，41，47
                                <br /> √Xanh dương chẵn：04，10，14，20，26，36，42，48
                                <br /> √Xanh lá lớn：27，28，32，33，38，39，43，44
                                <br /> √Xanh lá nhỏ：05，06，11，16，17，21，22
                                <br /> √Xanh lá lẻ：05，11，17，21，27，33，39，43
                                <br /> √Xanh lá chẵn：06，16，22，28，32，38，44
                                <br /> √ Đỏ lớn lẻ：29，35，45
                                <br /> √ Đỏ lớn chẵn：30，34，40，46
                                <br /> √ Đỏ nhỏ lẻ：01，07，13，19，23
                                <br /> √ Đỏ nhỏ chẵn：02，08，12，18，24
                                <br /> √Xanh dương lớn lẻ：25，31，37，41，47
                                <br /> √Xanh dương lớn chẵn：26，36，42，48
                                <br /> √Xanh dương nhỏ lẻ：03，09，15
                                <br /> √Xanh dương nhỏ chẵn：04，10，14，20
                                <br /> √Xanh lá lớn lẻ：27，33，39，43
                                <br /> √Xanh lá lớn chẵn：28，32，38，44
                                <br /> √Xanh lá nhỏ lẻ：05，11，17，21
                                <br /> √Xanh lá nhỏ chẵn：06，16，22</p>
                            &nbsp;
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            &nbsp;
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.</p>
                            <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                            <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng chục
                            của số được rút ra.
                            <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với chữ
                            số hàng hàng đơn vị của số được rút ra.
                            <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị của
                            bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra. 
                            &nbsp;
                            <h1>【Điểm】</h1>
                            &nbsp;
                            <p>Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>

                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2> Xổ Số Singaporean </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số đặc biệt hiện tại trùng với con số cược.</p>
                            &nbsp;
                            <h1>【Số thường】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng số 1 tới bóng số 6.</p>
                            &nbsp;
                            <h1>【Cược Kết Hợp】</h1>
                            &nbsp;
                            <p>- Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> - Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> - 3 trúng 2：
                                <br /> √Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> - Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> - Trúng cả 2：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường..
                                <br /> √Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> - Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt.</p>
                            &nbsp;
                            <h1>【Con Giáp】</h1>
                            &nbsp;
                            <p> Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br /> Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.
                            </p>
                            &nbsp;
                            <h1>【Hai Bên】</h1>
                            &nbsp;
                            <p> Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 26 sẽ là “lớn”; bằng hoặc nhỏ hơn 25 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rútra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> Kết hợp Chẵn/Lẻ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rútra. Nếu tổng đó là
                                một số lẻ, kết quả sẽ là “”kết hợp lẻ;”” nếu tổng nhỏ là một số chẵn, kết quả sẽ là “”kết hợp chẵn;”” Nếu số rút ra bằng
                                49 là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ.</p>
                            &nbsp;
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            &nbsp;
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.
                                <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                                <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng
                                chục của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với
                                chữ số hàng hàng đơn vị của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị
                                của bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra. </p>
                            &nbsp;
                            <h1>【Điểm】</h1>
                            &nbsp;
                            <p> Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2> Xổ số Trung Quốc </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p>Người chơi thắng nếu số đặc biệt hiện tại trùng với con số cược. </p>
                            &nbsp;
                            <h1>【Số thường】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng số 1 tới bóng số 7.</p>
                            &nbsp;
                            <h1>【Hai bên】</h1>
                            &nbsp;
                            <p>Hai bên là thuật ngữ chung dùng cho lớn/nhỏ/chẵn/lẻ.
                                <br /> - Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 16 sẽ là “lớn”; bằng hoặc nhỏ hơn 15 là “nhỏ”.
                                <br /> - Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ.
                                <br /> - Một Chữ Số Lớn/Nhỏ：nếu một chữ số bằng hoặc lớn hơn 5 sẽ là “”Một chữ số big; nếu một chữ số bằng hoặc nhỏ hơn 4 sẽ
                                là “”Một chữ số nhỏ.””</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                        <h2> Xổ số Zealand Mới </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số đặc biệt hiện tại trùng với con số cược ..</p>
                            &nbsp;
                            <h1>【Số Thường】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu khu vực cược và số trùng với thứ tự và khu vực của bóng 1 tới bóng 6.</p>
                            &nbsp;
                            <h1>【Hai Bên】</h1>
                            &nbsp;
                            <p> Hai bên là thuật ngữ chung dùng cho lớn/nhỏ/chẵn/lẻ.
                                <br /> - Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 21 sẽ là “lớn”; bằng hoặc nhỏ hơn 20 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ.
                                <br /> - Chữ số hàng đơn vị lớn/nhỏ：Nếu chữ số hàng đơn vị lớn hơn hoặc bằng 5, kết quả sẽ là “Chữ số hàng đơn vị lớn;”” Nếu
                                chữ số hàng đơn vị nhỏ hơn hoặc bằng 4, kết quả sẽ là “Chữ số hàng đơn vị nhỏ.""</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 6}>
                        <h2> Xổ số Đức </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số đặc biệt thắng hiện tại trùng với con số cược.</p>
                            &nbsp;
                            <h1>【Số thường 】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng số 1 tới bóng số 6.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 7}>
                        <h2>Xổ Số British</h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            <p>Người chơi thắng nếu số đặc biệt hiện tại trùng với con số cược .</p>
                            <h1>【Số đặc biệt】</h1>
                            <p>Người chơi thắng nếu số đặc biệt hiện tại trùng với con số cược.</p>
                            <h1>【Cược Kết Hợp】</h1>
                            <p>Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 3 trúng 2：
                                <br /> √ Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 2 số trúng một số đặc biệt：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường.
                                <br /> √ Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt.</p>
                            <h1>【Con Giáp】</h1>
                            <p>Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br /> Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.</p>
                            <h1>【Hai Bên】</h1>
                            <p>Big/Small：Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 25 sẽ là “lớn”; bằng hoặc nhỏ hơn 24 là “nhỏ”. Nếu số rút ra bằng 49 là
                                ""hòa."”
                                <br /> -Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Chẵn/Lẻ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                là một số lẻ, kết quả sẽ là “”kết hợp lẻ;”” nếu tổng nhỏ là một số chẵn, kết quả sẽ là “”kết hợp chẵn;”” Nếu số rút ra
                                bằng 49 là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ.</p>
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.
                                <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                                <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng
                                chục của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với
                                chữ số hàng hàng đơn vị của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị
                                của bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra.</p>
                            <h1>【Điểm】</h1>
                            <p>Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 8}>
                        <h2>Xổ Số Spanish</h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            <p>Kết quả xổ số được rút theo thứ tự bóng 1 tói bóng 6 với bóng thứ 7 được gọi là bóng đặc biệt. Người chơi thắng nếu số đặc
                                biệt hiện tại trùng với con số cược.</p>
                            <h1>【Số Thường】</h1>
                            <p>Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1 tới bóng 6.</p>
                            <h1>【Cược Kết Hợp】</h1>
                            <p>Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 3 trúng 2：
                                <br /> √ Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 2 số trúng một số đặc biệt：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường.
                                <br /> √ Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt.</p>
                            <h1>【Con Giáp】</h1>
                            <p>Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br /> Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.</p>
                            <h1>【Hai Bên】</h1>
                            <p>Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 26 sẽ là “lớn”; bằng hoặc nhỏ hơn 25 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br
                                /> -Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Chẵn/Lẻ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                là một số lẻ, kết quả sẽ là “”kết hợp lẻ;”” nếu tổng nhỏ là một số chẵn, kết quả sẽ là “”kết hợp chẵn;”” Nếu số rút ra
                                bằng 49 là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ.</p>
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.
                                <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                                <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng
                                chục của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với
                                chữ số hàng hàng đơn vị của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị
                                của bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra.</p>
                            <h1>【Điểm】</h1>
                            <p>Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 9}>
                        <h2>Xổ Số South African</h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            <p>Người chơi thắng nếu số đặc biệt hiện tại giống với con số cược.</p>
                            <h1>【Số Thường/Số Đặc Biệt】</h1>
                            <p>Người chơi thắng nếu khu vực cược và số trùng với thứ tự và khu vực của bóng 1 tới bóng 6.</p>
                            <h1>【Số Thường】</h1>
                            <p>Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1 tới bóng 6.</p>
                            <h1>【Cược Kết Hợp】</h1>
                            <p>Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 3 trúng 2：
                                <br /> √ Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 2 số trúng một số đặc biệt：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường.
                                <br /> √ Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt</p>
                            <h1>【Con Giáp】</h1>
                            <p>Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br /> Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.</p>
                            <h1>【Hai Bên】</h1>
                            <p>Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 26 sẽ là “lớn”; bằng hoặc nhỏ hơn 25 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br
                                /> -Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Chẵn/Lẻ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                là một số lẻ, kết quả sẽ là “”kết hợp lẻ;”” nếu tổng nhỏ là một số chẵn, kết quả sẽ là “”kết hợp chẵn;”” Nếu số rút ra
                                bằng 49 là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ.</p>
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.
                                <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                                <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng
                                chục của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với
                                chữ số hàng hàng đơn vị của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị
                                của bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra.</p>
                            <h1>【Điểm】</h1>
                            <p>Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 10}>
                        <h2> Xổ Số Canadian</h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p> Kết quả xổ số được rút theo thứ tự bóng 1 tói bóng 6 với bóng thứ 7 được gọi là bóng đặc biệt. Người chơi thắng nếu số đặc
                                biệt hiện tại trùng với con số cược.</p>
                            &nbsp;
                            <h1>【Số Thường】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1 tới bóng 6.</p>
                            &nbsp;
                            <h1>【Cược Kết Hợp】</h1>
                            &nbsp;
                            <p> Trúng cả 4：Người chơi thắng nếu tất cả 4 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 3：Người chơi thắng nếu tất cả 3 số trùng với 6 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 3 trúng 2：
                                <br /> √ Trúng 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> √Trúng 3：Người chơi thắng nếu tất cả 3 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> Trúng cả 2：Người chơi thắng nếu tất cả 2 số trùng với 3 số được rút. (Không bao gồm bóng đặc biệt).
                                <br /> 2 số trúng một số đặc biệt：
                                <br /> √Trúng 2：Tất cả cược trúng 2 số rút thường.
                                <br /> √ Trúng số đặc biệt: Tất cả cược trúng 1 số đặc biệt và 1 số thường.
                                <br /> Cược xiên đặc biệt：Người chơi thắng nếu 6 số rút ra hiện tại và 1 số đặc biệt trùng với 1 số thường và 1 số đặc biệt.
                            </p>
                            &nbsp;
                            <h1>【Con Giáp】</h1>
                            &nbsp;
                            <p> Con Giáp là cách chơi dựa trên con giáp của năm hiện tại để xét với bóng 1 đến bóng 49.
                                <br /> Con Giáp thường：Người chơi thắng nếu 1 số cược trùng với con giáp rút được (không tính bóng đặc biệt). Nếu có hơn 1
                                số trong dãy con giáp, tiền thưởng sẽ tự động được tăng lên.
                                <br />Con Giáp đặc biệt：Người chơi thắng nếu kết quả cho số trái bóng được chọn trùng với bất kì con số đại diện cho con giáp
                                đã chọn.
                                <br /> Một con giáp：Người chơi thắng nếu con số đại diện cho con giáp là kết quả từ bất kì bóng nào từ 1 tới 6, không bao gồm
                                bóng đặc biệt.
                            </p>
                            &nbsp;
                            <h1>【Hai Bên】</h1>
                            &nbsp;
                            <p> Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 26 sẽ là “lớn”; bằng hoặc nhỏ hơn 25 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> -Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Lớn/Nhỏ ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                lớn hơn hoặc bằng 7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu
                                số rút ra bằng 49 là ""hòa."”
                                <br /> - Kết hợp Chẵn/Lẻ： Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó
                                là một số lẻ, kết quả sẽ là “”kết hợp lẻ;”” nếu tổng nhỏ là một số chẵn, kết quả sẽ là “”kết hợp chẵn;”” Nếu số rút ra
                                bằng 49 là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ.</p>
                            &nbsp;
                            <h1>【Chữ số hàng chục/hàng đơn vị】</h1>
                            &nbsp;
                            <p>- Chữ số hàng chục：Người chơi cược trên chữ số hàng chục của bất kì số cụ thể. Chữ số hang chục có thể là 0, 1, 2, 3, or
                                4.
                                <br /> - Chữ số hàng đơn vị：Chữ số hàng đơn vị có thể từ 0 tới 9.
                                <br /> - Chữ số hàng chục của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng chục trùng với chữ số hàng
                                chục của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị trùng với
                                chữ số hàng hàng đơn vị của số được rút ra.
                                <br /> - Chữ số hàng hàng đơn vị của một số thường/số đặc biệt：Người chơi thắng nếu cược của họ trên chữ số hàng hàng đơn vị
                                của bất kì số nào bao gồm số thường và số đặc biệt trùng với với chữ số hàng hàng đơn vị của số được rút ra. </p>
                            &nbsp;
                            <h1>【Điểm】</h1>
                            &nbsp;
                            <p> Người chơi dự đoán tổng của bóng đặc biệt và bóng thường và kết quả sẽ rơi vào khoảng nào. Tổng điểm sẽ được chia ra 6 khoảng
                                từ 28 điểm tới 322 điểm.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 11}>
                        <h2> Xổ Số American </h2>
                            &nbsp;
                            <h1>【Số đặc biệt】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số đặc biệt thắng hiện tại trùng với con số cược .</p>
                            &nbsp;
                            <h1>【Số Thường】</h1>
                            &nbsp;
                            <p> Người chơi thắng nếu số cược trùng với bóng bất kì từ bóng 1 tới bóng 6.</p>
                            &nbsp;
                            <h1>【Hai Bên】</h1>
                            &nbsp;
                            <p> Lớn/Nhỏ：Nếu số rút ra bằng hoặc lớn hơn 25 sẽ là “lớn”; bằng hoặc nhỏ hơn 24 là “nhỏ”. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chẵn/Lẻ：Kết quả được quyết định bởi số đó là số chẵn hay số lẻ. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Chữ Số hàng đơn vị Lớn/Nhỏ：nếu chữ Số hàng đơn vị bằng hoặc lớn hơn 5 sẽ là “”Chữ Số hàng đơn vị lớn; nếu chữ Số hàng
                                đơn vị bằng hoặc nhỏ hơn 4 sẽ là “”Chữ Số hàng đơn vị nhỏ,”” Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Con Giáp Lớn/Nhỏ： Kết quả sẽ là con giáp lớn nếu số rút ra là ngựa, khỉ, gà hoặc heo. Con giáp nhỏ nếu số rút ra là
                                chuột, trâu, rồng hoặc rắn. Nếu số rút ra bằng 49 là ""hòa."”
                                <br /> - Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó lớn hơn hoặc bằng
                                7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu số rút ra bằng 49
                                là ""hòa."”
                                <br /> - Cược của người chơi dựa trên tổng của các số hàng chục và hàng đơn vị của số rút ra. Nếu tổng đó lớn hơn hoặc bằng
                                7, kết quả sẽ là “”kết hợp lớn;”” nếu tổng nhỏ hơn hoặc bằng 6, kết quả sẽ là “”kết hợp nhỏ;”” Nếu số rút ra bằng 49
                                là ""hòa."”
                                <br /> - Tổng kết quả lớn/nhỏ ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả lớn/nhỏ. Nếu tổng của kết quả lớn hơn hoặc bằng 175, tổng kết quả là lớn; Nếu tổng của kết quả nhỏ hơn
                                hoặc bằng 174, tổng kết quả là nhỏ.
                                <br /> - Tổng kết quả chẵn/lẻ： Kết quả dựa trên tổng của 7 số được rút ra bao gồm 6 số thường và 1 số đặc biệt để xác định
                                tổng của kết quả chẵn/lẻ. Nếu tổng của kết là một số chẵn, tổng kết quả là chẵn; Nếu tổng của kết quả là một số lẻ, tổng
                                kết quả là lẻ .</p>
                            &nbsp;
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


LotteryRuleOneVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleOneVn))));