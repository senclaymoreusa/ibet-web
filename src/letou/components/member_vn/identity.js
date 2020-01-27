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
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class IdentityVn extends React.Component {
    
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
                                <a href="/vi/for_member">Bảo mật duy trì tài khoản >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Xác minh ID</h2>
                        <p>Ảnh chứng minh nhân dân và định dạng yêu cầu:<br />
                        &nbsp;</p>
                        <ul class="HelpCenterArticleColumn">
                            <li>1. Chứng từ xác minh phải là một bản sao có tổng thể rõ ràng bao gồm nội dung, hình ảnh và số chứng minh nhân dân.</li>
                            <li>2. Khách hàng cần cung cấp hình ảnh mặt trước và mặt sau của thẻ chứng minh nhân dân.</li>
                            <li>3. Trên hình cần có con dấu hiệu lực của chứng từ cung cấp ở bản đầu tiên.</li>
                            <li>4. Chứng minh nhân dân sẽ không được chấp nhận nếu hết hạn trong vòng ba (3) tháng.</li>
                            <li>5. Với hộ khẩu, khách hàng cần cung cấp hình ảnh chứng từ với đủ hai dấu mộc và thông tin cá nhân.</li>
                            <li>6. Họ tên đăng ký tài khoản phải trùng với họ tên trên ảnh chứng minh nhân dân đã cung cấp.</li>
                            <li>7. Ảnh chứng minh nhân dân phải là ảnh kỹ thuật số bản gốc.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>Lưu ý</h2>
                        <p>&nbsp;</p>
                        <ul class="HelpCenterArticleColumn">
                            <li>1. Nếu bạn không có chứng minh nhân dân, bạn cần cung cấp hình ảnh rõ ràng của một giấy nhận dạng hoặc chứng minh thư tạm thời, hộ khẩu, hộ chiếu</li>
                            <li>2. Bạn có thể chụp ảnh chứng minh nhân dân qua máy ảnh kỹ thuật số, điện thoại hoặc camera với độ phân giải cao và lưu trên định dạng jpg, gif, png hoặc jpeg và gửi đến chúng tôi thông qua email.</li>
                            <li>3. Vui lòng ghi rõ vấn đề cần xác minh khi Quý khách gửi hình đến chứng tôi. HÌnh ảnh Quý khách gửi chỉ được dùng với mục đích mà Quý khách đề cập. Đừng lo lắng. Letou sẽ không tiết lộ thông tin cá nhân của Quý khách.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>Xóa bỏ hình ảnh xác nhận (sử dụng chứng minh nhân dân thứ hai)</h2>
                        <p>Rõ ràng (trước)：<br />
                        <img src="http://i.imgur.com/3OJMHCO.jpg" alt="" /></p>
                        <p>Mờ (trước)：<br />
                        <img src="http://i.imgur.com/GBZgmPI.jpg"alt="" /></p>
                        <p>Rõ ràng (sau):<br />
                        <img src="http://i.imgur.com/m33bGbm.jpg" alt=""/></p>
                        <p>Mờ (sau):<br />
                        <img src="http://i.imgur.com/uuWYLSQ.jpg"alt="" /></p>
                        
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


IdentityVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(IdentityVn))));