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

export class SafeBetVn extends React.Component {
    
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
                                <a href="/vi/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Bảo mật duy trì tài khoản  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2> Triết lý của LETOU</h2>
                        <p> Cá cược chỉ mang tính chất giải trí, giúp người chơi cảm thấy hào hứng và thú vị nhiều hơn là hình thức kiếm tiền. Tại LETOU, chúng tôi khuyến khích mỗi người chơi đều có nhận thức riêng theo về điều này.<br />
                        <br />
                        Chúng tôi duy trì một bộ quy tắc giúp người chơi tăng cường trách nhiệm trong mỗi trò chơi của mình cũng như theo dõi hành vi trò chơi của họ.</p>
                        <p>&nbsp;</p>
                        <h2> Nghiêm cấm hành vi cá cược với tuổi vị thành niên </h2>
                        <p> Chỉ những cá nhân trên 18 tuổi mới được phép tham gia trò chơi cá cược tại LETOU.<br />
                        <br />
                        Xác minh độ tuổi sẽ được thông qua việc đăng ký tài khoản tại LETOU. Nếu trường hợp vi phạm gian lận về độ tuổi, LETOU có quyền tịch thu lại tiền thưởng.<br />
                        <br />
                        Vì quyền lợi tốt nhất của vị thành niên, KHÔNG NÊN:<br />
                        ．Để ngẫu nhiên các thông tin ngân hàng <br />
                        ．Cho trẻ đi xung quanh khu vực phần mềm trò chơi đang chạy; và<br />
                        ．Quên cài đặt phần mềm Internet trên máy tính để hạn chế quyền truy cập tới các trang trò chơi.</p>
                        <p>&nbsp;</p>
                        <h2> Tự nguyện đóng tài khoản </h2>
                        <p>Tại LETOU, chúng tôi đánh giá cao khách hàng. Chúng tôi xây dựng một hệ thống chương trình đặc biệt giúp cho những người vượt quá sự kiểm soát hành vi cá cược của mình và từ đó có mong muốn dừng các dịch vụ trò chơi của chúng tôi.<br />
                        <br />
                        Chúng tôi có đội ngũ nhân viên chăm sóc Khách hàng, trường hợp khách hàng mong muốn đóng tài khoản ngừng tham gia trên trang Web, vui lòng liên hệ tại hỗ trợ trực tuyến.</p>
                        <p>&nbsp;</p>
                        <h2> Thiết lập định mức</h2>
                        <p>Khi tham gia trò chơi, người chơi cần sẵn sàng đối mặt với mọi hoàn cảnh. Có thể thắng hoặc cũng có thể thua. Song tất cả đều mang tính chất giải trí thú vị và mang lại lợi nhuận, vì vậy người chơi cần cân nhắc những gì mình đang trải nghiệm. Do đó, LETOU giúp người chơi thiết lập định mức thời gian và tiền bạc. Những gì chúng tôi cung cấp cho bạn là một môi trường trò chơi lành mạnh.<br />
                        <br />
                        Vì vậy, hãy cùng trải nghiệm trò chơi một cách đầy thú vị và có tính trách nhiệm! </p>
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


SafeBetVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(SafeBetVn))));