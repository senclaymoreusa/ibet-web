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


const styles = () => ({
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

export class IdentityTh extends React.Component {
    
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้ >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">การรักษาความปลอดภัยบัญชี >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p>การยืนยัน ID</p>
                        <p>ข้อกำหนดรูปภาพและรูปแบบ:</p>
                        <p>
                            <br /> 1. หลักฐานการพิสูจน์ตัวตนต้องเป็นสำเนาต้นแบบที่ชัดเจนโดยมีการแก้ไขด้านเดียวที่สมบูรณ์หากจำเป็นต้องมีภาพลายน้ำเนื้อหาภาพและหมายเลขประจำตัวที่ชัดเจน
                            <br /> 2. ลูกค้าต้องส่งภาพและบัตรประจำตัวประชาชน
                            <br /> 3. ต้องมีตราประทับที่ชัดเจนในบัตรประจำตัวประชาชนรุ่นแรก
                            <br /> 4. บัตรประจำตัวประชาชนจะไม่ได้รับการยอมรับหากความถูกต้องภายในสาม (3) เดือน
                            <br /> 5. สำหรับการลงทะเบียนในครัวเรือนควรส่งหน้าเว็บที่มีแสตมป์สองใบและข้อมูลส่วนบุคคล
                            <br /> 6. ชื่อจริงของผู้สมัครในบัญชีจะต้องตรงกับชื่อในบัตรประชาชนที่ได้รับ
                            <br /> 7. บัตรประจำตัวประชาชนควรเป็นรูปดิจิตอลโครเมี่ยมต้นฉบับ</p>
                        <p>
                            <br /> การแจ้งเตือน
                        </p>
                        <p>1. หากคุณไม่มีบัตรประจำตัวประชาชนคุณสามารถส่งรูปถ่ายที่ชัดเจนของบัตรประจำตัวชั่วคราวหรือหลักฐานชั่วคราวการลงทะเบียนสำหรับใช้ในครัวเรือนหนังสือเดินทางบัตรประจำตัวตำรวจฮ่องกงมาเก๊าและบัตรประจำตัวของไต้หวันใบอนุญาตเดินทางออกจากฮ่องกงและฮ่องกง
                            ฮ่องกงและมาเก๊าภายในระยะเวลาที่ถูกต้อง
                            <br /> 2. คุณสามารถถ่ายภาพบัตรประจำตัวประชาชนของคุณผ่านกล้องดิจิตอลกล้องมือถือหรือพิกเซลสูงและบันทึกในรูปแบบ jpg, gif,
                            png หรือ jpeg และส่งให้เราทางอีเมล
                            <br /> 3. โปรดระบุปัญหาที่คุณต้องดำเนินการเมื่อคุณส่งภาพ รูปภาพที่คุณส่งจะใช้เฉพาะกับปัญหาที่คุณพูดถึงในครั้งนี้เท่านั้น
                            ไม่ต้องกังวล Vwin จะไม่เปิดเผยข้อมูลการระบุตัวตนของคุณ</p>
                        <p>
                            <br /> ระบุรูปภาพที่ชัดเจน (ใช้บัตรประจำตัวประชาชนรุ่นที่ 2)</p>
                        <p>ชัดเจน (ด้านหน้า):</p>
                        <p>
                            <br /> เบลอ (ด้านหน้า):</p>
                        <p>
                            <br /> ล้าง (กลับ):</p>
                        <p>
                            <br /> เบลอ (ย้อนกลับ):</p>
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


IdentityTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(IdentityTh))));