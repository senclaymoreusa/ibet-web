import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconHeader from "../icon_header";


import {
    show_letou_announcements
} from '../../../actions';
import { InfoSelect } from '../info_select';


const styles = theme => ({
    logoHeader: {
        height: '20px',
        padding: '10px'
    },
    header : {
        fontSize: '24px',
        color: '#333333',
        position: 'relative',
        width: '100%',
        height: '75px',
        backgroundColor: '#f5f5f5',
        marginBottom: '50px',
        paddingLeft: 300,
        paddingTop: 20
      
    },
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

export class DisclaimerVn extends React.Component {
    
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
                                <a href="/vn/for_member">Bảo mật duy trì tài khoản  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2> Từ chối </h2>
                        <p> LETOU không cho phép – cố tình hay vô tình – tất cả các thông tin được đăng tải trên trang Web hoặc đường truyền liên kết đến LETOU.com bởi đối tác trung gian. Chúng tôi đã cố gắng cung cấp nội dung chính xác 100% về thông tin và  cập nhật nội dung phản ánh từ người chơi, LETOU.com không chịu trách nhiệm trước những thông tin sai lệch trong việc sử dụng trang Web </p>
                        <p>&nbsp;</p>
                        <p>Tất cả nội dung chỉ mang tính chất tin tức và giải trí, không có mục đích sử dụng trong tư vấn pháp luật.</p>
                        <p>&nbsp;</p>
                        <p> Quá trình chuyển khoản trực tuyến cá cược tại các quốc gia đều mang tính chất không hợp pháp. Do vậy người chơi đảm bảo trách nhiệm khi tham gia các giao dịch trực tuyến trong phạm vị cư trú của nước sở tại cũng như các chính sách quy định hạn chế bởi cơ quan quản lý.</p>
                        <p>&nbsp;</p>
                        <p>LETOU không chịu trách nhiệm trước những hậu quả gây ra từ việc tham gia cá cược trực tuyến trên trang Web từ phía người chơi như thiệt hại về tài chính, suy sụp về tâm lý hay bất kỳ những hậu quả trước pháp luật khác nào phát sinh trong quá trình tham gia cá cược.</p>
                        <p>&nbsp;</p>
                        <p>Tất cả các nội dung trên trang Web đều có bản quyền hợp pháp. LETOU.com không cho phép có bất cứ sự phân phối hay sao chép nội dung được đăng tải trên LETOU.com mà không có sự đồng ý bằng văn bản. Việc vi phạm bản quyền sẽ được xử lý theo đúng pháp luật.</p>
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


DisclaimerVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(DisclaimerVn))));