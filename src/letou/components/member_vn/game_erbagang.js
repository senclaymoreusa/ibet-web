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

export class GameErbagangVn extends React.Component {
    
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
                    <h2>Pai gow (Bài Cửu)</h2>
                        <p>
                            <br /> Pai Gow (Bài Cửu) là một trò chơi cờ bạc Trung Hoa, chơi với một bộ 32 con Domino.
                            <br /> • Cách tính điểm cơ bản
                            <br /> Cái tên”pai gow” được tạm dịch như “tạo ra chín” hoặc” lá bài chín”. Theo phản ánh thực tế, với một vài số điểm mong
                            đợi cao nhất, điểm tối đa cho một tay là 9. Giá trị của một ván bài được tính bằng cách cộng tổng các điểm trên hai đường
                            dọc của thanh domino và bỏ đi chữ số hàng chục. Ví dụ: 1-3 với 2-3: giá trị 9 (chín điểm ) 2-3 với 5-6: giá trị 6 (16
                            điểm, bỏ giá trị hàng chục 10) 5-5 với 4-6: giá trị 0 (20 điểm, những chữ số hàng chục là 0)
                            <br /> • Gongs và Wongs
                            <br /> Đây là các cách đặt biệt để mà một lượt bài có thể nhiều điểm hơn 9 điểm. Gạch domino đôi 1 (2 điếm 1) và gạch domino
                            đôi 6 (có 2 điểm 6) được tính như là gạch Day và Teen khi kết hợp cộng các gạch này với các gạch domino 8 điểm(Gong),
                            thì giá trị tổng cộng là 10 điểm, trong khi đặt 1 trong 2 gạch này với 1 gạch 9 điểm được tạo(Wong) giá trị điểm tổng
                            cộng là 11. Tuy nhiên khi thanh gạch Day hoặc Teen được nối với gạch khác, áp dụng quy tắc điểm tiêu chuẩn.
                            <br /> •Gạch Gee Joon
                            <br /> Gạch 1-2 và gạch 2-4 được gọi là gạch Gee Joon và cách tính như các thẻ gạch giới hạn bình thường. khi sử dụng như 1
                            phần của ván bài, các gạch này có thể được tính điểm là 3 và 6, bất cứ kết quả nào mang lại điểm cao hơn cho ván bài.
                            Ví dụ, 1 ván bài có loại thẻ gạch 1-2 và 5-6 điểm được tính là 7 chứ không phải là 4 .
                            <br /> • Các Cặp
                            <br /> 32 gạch trong một domino bộ Trung Quốc có thể được sắp xếp thành 16 cặp, như thể hiện trong hình ở đầu bài viết này.
                            Có 11 gạch của các gạch đôi này giống hệt nhau, và năm của những cặp được tạo thành từ hai gạch mà có điểm giống nhau,
                            nhưng nhìn khác nhau. (Nhóm thứ hai bao gồm các gạch Gee Joon, có thể được tính điểm tương tự, cho dù là ba hoặc sáu.)
                            Nếu một ván bài được tạo thành một cặp, nó luôn luôn điểm cao hơn so với các thẻ gạch không phải cặp, không có vấn đề
                            gì về giá trị của các điểm. (Các Cặp thường được tính là 12 điểm mỗi cặp.) Khi người chơi và người chia bài đều có một
                            đôi gạch, cặp có điểm cao hơn xếp hạng thắng. Bảng xếp hạng được xác định không phải bằng tổng của cách điểm của gạch,
                            mà là bởi tính thẩm mỹ; trật tự phải được ghi nhớ. Các cặp cao nhất là gạch Gee Joon, các gạch Teens, các gạch Days,
                            và gạch 8 điểm đỏ Các cặp thấp nhất là không đủ 9 điểm, 8 điểm, 7 điểm và 5 điểm.
                            <br /> • Các gạch có điểm giống nhau
                            <br /> Khi các người chơi và người chia bài có các thẻ gạch với điểm giống nhau, với một thẻ gạch có giá trị cao nhất (dựa
                            trên các bảng xếp hạng cặp được mô tả ở trên) sẽ là người chiến thắng. Ví dụ, một người chơi với các thẻ 3-4, 2-2 và
                            thẻ bài của người chia bài 5-6, 5-5 có điểm giống nhau trên từng gạch bài. Tuy nhiên, vì thẻ gạch của người chia bài
                            5-5 mạnh hơn 3 thẻ gạch còn lại, người chia bài sẽ giành chiến thắng tay. Nếu có các gạch có điểm giống nhau , và người
                            chơi và người chia bài có một gạch có thứ hạng cao nhất giống hệt nhau, lượt bài đó được coi như là sao chép nhau và
                            người chia bài thắng. Ví dụ, nếu người chơi được chia các gạch 2-2 và 1-6, và người chia bài có gạch 2-2 và 3-4, người
                            chia bài sẽ giành chiến thắng vì có điểm gạch cao hơn (xét từng gạch) và gạch (2-2) đều giống nhau. Gạch xếp hạng thấp
                            hơn trong mỗi lượt bài không bao giờ được tính để thắng được các gạch có điểm số giống nhau. Có hai trường hợp ngoại
                            lệ với các phương pháp mô tả ở trên. Đầu tiên, mặc dù các gạch Gee Joon từ cặp gạch có thứ hạng cao nhất, nó được coi
                            là không có giá trị khi quy đổi với các gạch có điểm giống nhau. Thứ hai, bất kỳ gạch giống nhau zero – zero ( không
                            điểm nào trên gạch) thì người chia bài thắng, bất kể các gạch nằm trong quân bài của ai.</p>
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


GameErbagangVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameErbagangVn))));