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

export class MemberRuleSix extends React.Component {
    
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
                                <a href="/for_partner">Dành cho Đối tác >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_partner">Giới Thiệu Về Letou>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Lợi thế của LETOU</h2>
                        <h1>Các lợi thế từ Sòng Bài Casino trực tuyến tuyệt đỉnh chuẩn quốc tế</h1>
                        <p>LETOU đã được thành lập từ năm 2004 và giữ giấy phép hợp lệ của PAGCOR tại Philippines</p>
                        <h1>Chương trình hợp tác Đại Lý mang tính cạnh tranh</h1>
                        <p>Bốn bước tới thành công
                            <br /> 1. Đăng ký và điền đầy đủ các thông tin của bạn để trở thành đại lý cấp cao với chúng tôi.
                            <br /> 2. Liên hệ với bộ phận Hỗ trợ đại lý của chúng tôi thông qua QQ.
                            <br /> 3. Thảo luận chi tiết về sự hợp tác này và tham gia vào Chương trình đại lý với lợi nhuận cao.
                            <br /> 4. Kích hoạt ngay tài khoản đại lý để nhận ngay các ưu đãi liên kết tiếp thị độc quyền.</p>
                        <h1>Nền tảng tốt nhất</h1>
                        <p>Hơn 10 năm kinh nghiệm trong việc thiết lập sự tin tưởng của khách hàng.
                            <br /> Lụa chọn hàng đầu của mọi khách hàng VIP – rút các khoản tiền lớn chỉ trong vài giây.
                            <br /> Cung cấp phong phú nhiều loại trò chơi từ các nền tảng khác nhau .
                            <br />
                            <br />
                            <img src="http://i.imgur.com/dUnTJ3C.png" />
                            <img src="http://i.imgur.com/2E0DHdC.png" />
                            <img src="http://i.imgur.com/VFe5GuY.png" />
                            <br />
                            <img src="http://i.imgur.com/5bJpJZr.png" />
                            <img src="http://i.imgur.com/ddSTWzD.png" />
                            <img src="http://i.imgur.com/IkaG8hp.png" />
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


MemberRuleSix.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleSix))));