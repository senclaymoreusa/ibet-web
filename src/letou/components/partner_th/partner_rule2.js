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

export class MemberRuleTwoTh extends React.Component {
    
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
                                    <a href="/th/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/th/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/th/for_partner">สำหรับคู่ค้า  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_partner">แบ่งปันแพลน>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Affiliate Program</h2>
                        <p>โปรแกรม Affiliate คืออะไร? มันหมายถึงการเป็นหุ้นส่วนระหว่าง Letou และ บริษัท ในเครือ เริ่มต้นสร้างรายได้โดยการเชิญสมาชิกใหม่มาเล่นในเว็บไซต์ของเรา
                            Letou จะแบ่งปันผลกำไรกับคุณตามประสิทธิภาพของคุณ</p>
                        <p>•• Letou ส่งเสริมให้ บริษัท ในเครือของเราพัฒนาเครือข่ายสมาชิกโดยให้บริการที่ดีที่สุด
                            <br /> • 1 แพลตฟอร์มเกมหลาย
                            <br /> 2. บริการพิเศษ
                            <br /> • 3. บริการด้านค่าคอมมิชชั่นที่ปลอดภัยและรวดเร็ว
                            <br /> 4. อินเตอร์เฟซการจัดการบัญชีที่เป็นมิตร
                            <br /> 5. ข้อมูลตลาดล่าสุดและแหล่งข้อมูลช่องทางการส่งเสริมการขาย</p>
                        <p>ฉันจะเริ่มต้นอย่างไร?</p>
                        <p>1. ลงทะเบียนเดี๋ยวนี้เพื่อเป็นพันธมิตรของ LETOU
                            <br /> 2. แบ่งปันโปรแกรมที่ทุ่มเทให้กับ QQ: 3309889296 306820689
                            <br /> • 3 แผนการแบ่งปัน SKYPE: swifind</p>
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


MemberRuleTwoTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleTwoTh))));