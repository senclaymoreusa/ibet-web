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
    }
})

export class AboutUsVn extends React.Component {
    
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
                                <a href="/vi/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Lịch sử LETOU  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>Về LETOU</h2>
                        <p>Công ty LETOU được thành lập từ năm 2004, là công ty hoạt động về lĩnh vực giải trí với các trò chơi trực tuyến (Game online) bằng tiền thật đầu tiên ở Châu Á. Gia nhập tập đoàn Wilshire Worldwide vào năm 2008 dưới sự quản lý và cấp giấy phép hoạt động trong lĩnh vực Game online từ CURACAO.<br />
                        <br />
                        Chúng tôi luôn cam kết cung cấp đến khách hàng sự công bằng, hợp lý, bảo mật, tin cậy, chính xác và hệ thống giao dịch tiền mặt hiệu quả nhất, cũng như đội ngũ chăm sóc Khách hàng 24/7. LETOU cung cấp hơn 500 các thể loại Game khác nhau bao gồm các giải đấu Thể thao, Number Games, Thể thao ảo và Casino trực tuyến.<br />
                        <br />
                        LETOU tuân thủ nghiêm ngặt các quy định tiền gửi và quản lý tài chính của chính phủ, rút tiền công ty chuyên nghiệp, để đảm bảo an ninh tài chính đến khách hàng và phù hợp với pháp luật về phòng chống rửa tiền (AML), tối đa hóa môi trường tài chính minh bạch theo quy định của chính phủ và đặt các lợi ích của khách hàng lên hàng đầu. Đảm bảo sự bảo mật của người chơi một cách tốt nhất. Chúng tôi duy trì những luật lệ và quy tắc giúp người chơi có trách nhiệm trong quá trình tham gia, khuyến khích người chơi có tinh thần giải trí tốt nhất, chơi Game chỉ mang tính chất giải trí có giới hạn.<br />
                        <br />
                        LETOU không chỉ mang đến người người chơi những trải nghiệm không giới hạn mà còn hơn thế nữa đó là sự thú vị và sáng tạo, tạo dựng những giới hạn cá nhân trong mỗi trò chơi. LETOU luôn đồng hành cùng bạn để tạo dựng hình ảnh LETOU xa hơn nữa!<br />
                        <br />
                        Địa chỉ giấy phép hoạt động của Công ty:<a href="http://www.pagcor.ph/regulatory/pdf/offshore/list-of-approved-offshore-operators.pdf">http://www.gaming-curacao.com</a></p>
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


AboutUsVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(AboutUsVn))));