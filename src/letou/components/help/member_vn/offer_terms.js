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
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class OfferTermsVn extends React.Component {
    
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
                                <a href="/vi/for_member">Kế hoạch Khuyến mãi  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Điều kiện và Điều khoản của Khuyến mãi</h2>
                        <p>Letou thường xuyên đưa ra các chương trình Khuyến mãi. Vui lòng đọc và đồng ý các Điều kiện &amp; Điều khoản dưới đây trước khi tham gia Khuyến mãi:</p>
                        <ul class="HelpCenterArticleColumn">
                            <li>1. Khi tham gia Khuyến mãi, thành viên cần đồng ý và chấp nhận các Điều kiện &amp; Điều khoản. Nếu bạn không đồng ý với các Điều kiện và Điều khoản trên, thành viên sẽ bị coi là không hợp lệ.</li>
                            <li>2. Tiền thưởng không được chuyển nhượng.</li>
                            <li>3.Cược tất tay (cược toàn bộ số tiền gửi và Khuyến mãi) trong lần cược đầu tiên sẽ không được coi là hợp lệ tại Letou. Tiền cược tối đa cho lần cược đầu tiên sau khi nhận Khuyến mãi&nbsp;phải thấp hơn hoặc bằng với số tiền gốc gửi vào. Các tài khoản vi phạm sẽ bị tịch thu toàn bộ tiền Khuyến mãi cũng như các khoản tiền thắng khác.&nbsp;</li>
                            <li>4. Duy nhất 1: Số điện thoại, địa chỉ email, địa chỉ nhà, thẻ ngân hàng, địa chỉ IP &amp; thiết bị được sử dụng cho Khuyến mãi.</li>
							<li>5. Tiền hoàn trả sẽ dựa trên tổng số tiền đặt cược hợp lệ (doanh thu cược) của thành viên tại từng sản phẩm theo từng kèo, từng trận đấu và từng cấp độ thành viên như sau: </li>
							<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Thua hết - Hoàn trả trên tiền cược </li>
                            <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Thua ít hơn tiền cược - Hoàn trả trên Thắng/Thua </li>
                            <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Thắng >=75% - Hoàn trả trên tiền cược </li>
                            <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Thắng 75% - Hoàn trả trên tiền thắng</li>
                            <li>6. Letou không chấp nhận gian lận, nếu phát hiện người chơi có hành vi vi phạm các nguyên tắc của chúng tôi, Letou có quyền đóng tài khoản và tịch thu số dư trong tài khoản của người chơi.</li>
                            <li>7. LETOU có quyền đưa ra quyết định cuối cùng về các hành vi gian lận của người chơi ở mức độ cao hay có sự trao đổi. Hành vi cá cược của người chơi được theo dõi chặt chẽ và nếu chúng tôi có bất cứ sự phát hiện về gian lận, lợi dụng Điều kiện &amp; Điều khoản Khuyến mãi nhằm trục lợi, LETOU sẽ đóng tài khoản ngay lập tức của người chơi, thu hồi toàn bộ tiền thưởng hoặc tiền thắng mà không cần có bất cứ sự thông báo nào.</li>
                            <li>8. Việc tính doanh thu cược sẽ được căn cứ theo các mục sau: Giới hạn rút tiền &gt; Giới hạn gửi tiền &gt; không bao gồm tặng tiền Khuyến mãi &gt; tiền Khuyến mãi đặc biệt. Khi người dùng sử dụng Khuyến mãi gửi tiền lần đầu tiên, hệ thống sẽ yêu cầu doanh thu cược yêu cầu được tính theo số tiền gửi vào lần đầu và sau đó người chơi sẽ phải đạt được doanh số theo yêu cầu để có thể nhận được Khuyến mãi, hệ thống sẽ tính tiền Khuyến mãi đặc biệt/ Khuyến mãi không bao gồm dựa trên doanh thu cược yêu cầu.</li>
                            <li>9. Letou có quyền đưa ra giải thích và quyết định cuối cùng về vấn đề tiền thưởng dựa trên các Điều kiện và Điều khoản.</li>
                            <li>10. Letou có quyền hủy bỏ chương trình Khuyến mãi hoặc sự kiện bất cứ lúc nào mà không cần có thông báo.</li>
                        </ul>
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


OfferTermsVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(OfferTermsVn))));