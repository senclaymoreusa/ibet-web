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
    }
})

export class AboutUs extends React.Component {
    
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
                    <InfoSelect/>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">เรื่องราวของLetou  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Typography component="p" variant="h6">
                    เกี่ยวกับ LETOU
                    </Typography>
                    {'\n'}{'\n'}
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    LETOU.COM เป็นหนึ่งในกลุ่มออนไลน์เกมมิ่งชั้นนำของเอเชียซึ่งให้บริการทั้ง Sports Betting, Live Casinos, Slot Games, Digital
                            Lotteries และมีการนำเสนอโบนัสที่ดีที่สุด  
                    </Typography>
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    LETOU ก่อตั้งในปี 2004 เป็นครั้งแรกในเอเชียที่เปิดให้บริการการเล่นแบบเงินสด ที่ใช้ในการเล่นออนไลน์เกมมิ่งต่างๆ และมีการเข้าร่วมกับกลุ่มบริษัทที่ให้บริการความบันเทิง
                            เมย์แฟร์ จำกัด จัดตั้งเป็นกลุ่มบริษัทในปี 2006 ที่ประเทศฟิลิปปินส์ เพื่อให้ขยายการดำเนินงานในต่างประเทศ. โดย Mayfair
                            Technologies Inc. เป็นผู้รับผิดชอบในการดำเนินงานและเป็นเจ้าของโดยรัฐบาลของประเทศฟิลิปปินส์ ได้รับอนุญาตจากรัฐบาล Curacao
                            สำหรับการดำเนินงานของการพนันกีฬาและผลิตภัณฑ์คาสิโน - หมายเลขใบอนุญาต: 365 / JAZ (GLH-OCCHKTW07003112018) ในการให้ดำเนินงานและการสนับสนุนการบริการ  
                    </Typography>
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    เราดำเนินการโดยสุจริต ซึ่งเป็นปรัชญาการดำเนินธุรกิจของเรา ในทางปฏิบัติการนั้น เรายึดมั่นในหลักการบริการที่ดี ทำให้มีผู้ใช้งานจากทั่วโลกเพิ่มขึ้นอย่างมากซึ่งถือเป็นเพื่อนๆของเรา และด้วยการสนับสนุนของเพื่อนๆของเรานั้น
                            ทำให้เราเติบโตและพัฒนาทีละขั้นตอนขึ้นมาได้ จนถึงวันนี้ LETOU ยินดีต้อนรับเพื่อนใหม่ และในขณะเดียวกันเรายังจับมือกันแน่นกับเพื่อนเก่าๆของเรา!
                            ทั้งเพื่อนเก่าและใหม่ของเราในวันนี้เป็นผลมาจากการสนับสนุนที่แข็งแกร่งที่ LETOU จะยังคงความพยายามและการอุทิศตนเพื่อเพื่อนของเราที่จะให้ประสบการณ์การเล่นที่ดีกว่าใคร!                    </Typography>
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    LETOU เปิดตลอด 365 วันต่อปี ตลอด 24 ชั่วโมง เพื่อให้ลูกค้ามีความต่อเนื่องในการเล่น และเราพร้อมให้บริการสำหรับลูกค้าในการแก้ปัญหาต่างๆ
                            LETOU มีกีฬาพร้อมให้บริการกว่า 500 ชนิดที่แตกต่างกัน จากทุกลีกดังๆทั่วโลก ครอบคลุมกีฬาที่สำคัญๆรวมทั้งฟุตบอล, บาสเกตบอล,
                            เทนนิส, เบสบอล เทเบิลเทนนิส, กอล์ฟ ฯลฯ ในขณะเดียวกัน ยังมีให้บริการเกมดิจิตอลเกมเสมือนจริง, เกมสบายๆ และบริการคาสิโนออนไลน์สด
                            อีกด้วย; LETOU ปฏิบัติตามกฏของรัฐบาลฟิลิปปินส์อย่างเคร่งครัด กับข้อกำหนดที่ระบุเงินฝากสำหรับการวางมัดจำตามคำขอของเจ้าหน้าที่การจัดการทางการเงินของรัฐบาล บริษัทต้องการแสดงให้เห็นถึงความเป็นมืออาชีพ
                            เพื่อให้ลูกค้าแน่ใจว่า เรามีความมั่นคงทางการเงินและการปฏิบัติตามกฎหมายว่าด้วยการป้องกันการฟอกเงิน (AML) และดำเนินงานตามหลักการของในรัฐบาลที่จะกำหนดให้มีสภาพแวดล้อมทางการเงินที่โปร่งใส
                            ตามกฎระเบียบของรัฐบาล และเพื่อเป็นการทำให้แน่ใจว่า LETOU ปกป้องผลประโยชน์ของลูกค้าอย่างเต็มที่ ในขณะเดียวกัน เรายังมีการสร้างเครือข่ายพันธมิตร
                            สำหรับผู้ที่มีความคิดสร้างสรรค์นั้น อาจสร้างรายได้ขึ้นมาจากการทำงานอดิเรกได้ด้วย   
                    </Typography>
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    ประสบการณ์ความเป็นสุดยอดของลูกค้า เป็นหลักการของเราเสมอ!LETOU ยินดีที่จะให้บริการ สำหรับทุกคนต้องการมาเป็นสมาชิกกับเรา และร่วมมือกันสร้างความยั่งยืน เพื่อวันพรุ่งนี้ที่ดีกว่า!
                    </Typography>
                    <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                    เว็บไซต์นี้ได้รับการอนุญาตภายใต้กฎหมายของคูราเซา เพื่อการพนันกีฬาและคาสิโน ภายใต้ใบอนุญาต 365 / JAZ (GLH-OCCHKTW07003112018)
                    </Typography>

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


AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(AboutUs))));