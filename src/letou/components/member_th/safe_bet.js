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
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class SafeBetTh extends React.Component {
    
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">การรักษาความปลอดภัยบัญชี  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p>ปรัชญา LETOU</p>
                        <p>การเล่นการพนันเป็นเรื่องสนุกตื่นเต้นและสนุกสนานแทนที่จะเป็นวิธีง่ายๆในการได้รับเงินสด ที่นี่ที่ LETOU เราขอแนะนำให้ทุกคนรับรู้ในลักษณะเดียวกัน</p>
                        <p>เรายึดถือหลักเกณฑ์และหลักการต่างๆเพื่อเพิ่มการเล่นเกมที่มีความรับผิดชอบและแตะที่ผู้เล่นแต่ละรายเพื่อดูพฤติกรรมการเล่นเกมของตน</p>
                        <p>การป้องกันการพนันเยาวชน</p>
                        <p>เฉพาะบุคคลที่มีอายุอย่างน้อย 18 ปีเท่านั้นที่ได้รับอนุญาตให้เข้าใช้บริการเกมของ LETOU</p>
                        <p>การยืนยันอายุต้องใช้เมื่อมีการลงทะเบียนและการปลอมแปลงข้อมูลส่วนบุคคลถือว่าไม่เหมาะสม ในกรณีเช่นนี้ LETOU ขอสงวนสิทธิ์ในการริบเงินรางวัล</p>
                        <p>เพื่อประโยชน์สูงสุดของผู้เยาว์อย่า:
                            <br /> ฝากข้อมูลธนาคารของคุณและเข้าสู่ระบบโดยไม่ต้องแจ้ง
                            <br /> ให้เด็กเล็ก ๆ เดินรอบในขณะที่ซอฟต์แวร์เกมกำลังทำงานอยู่ และ
                            <br /> ลืมที่จะติดตั้งซอฟต์แวร์กรองอินเทอร์เน็ตบนคอมพิวเตอร์ของคุณเพื่อ จำกัด การเข้าถึงเว็บไซต์เกม</p>
                        <p>การยกเว้นโดยสมัครใจ</p>
                        <p>ที่นี่ที่ LETOU เราให้ความสำคัญกับผู้เล่นของลูกค้าของเรา เราได้พัฒนาโปรแกรมพิเศษสำหรับผู้ที่พบพฤติกรรมการพนันเกินกว่าที่จะควบคุมและต้องการยกเว้นตัวเองจากบริการเกมทั้งหมดของเรา</p>
                        <p>เราให้ความช่วยเหลือในการให้คำปรึกษา หากคุณต้องการใช้คุณลักษณะการยกเว้นโดยสมัครใจโปรดติดต่อศูนย์บริการลูกค้าของเรา</p>
                        <p>การตั้งค่าขีด จำกัด ของคุณ</p>
                        <p>เมื่อคุณเล่นการพนันคุณต้องเตรียมพร้อมรับมือทุกสถานการณ์ คุณชนะบาง คุณสูญเสียบ้าง เป็นที่รู้กันว่าทั้งสนุกและมีกำไรคุณต้องรับผิดชอบในสิ่งที่คุณทำ
                            ดังนั้น LETOU ช่วยให้คุณสามารถตั้งค่าขีด จำกัด ของคุณเองได้เกี่ยวกับเวลาและค่าใช้จ่าย สิ่งที่เราพยายามมอบให้คุณคือสภาพแวดล้อมในการเล่นเกมที่มีสุขภาพดี</p>
                        <p>ดังนั้นจึงมีประสบการณ์ในการเล่นเกมสนุกสนานและเต็มไปด้วยความรับผิดชอบ!</p>
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


SafeBetTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(SafeBetTh))));