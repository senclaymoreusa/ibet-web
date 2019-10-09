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

export class OfferTerms extends React.Component {
    
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
                                <a href="/for_member">แผนการส่งเสริมการขาย  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>ข้อตกลงและเงื่อนไขการส่งเสริมการขาย</h2>
                         <p>Letou จัดระเบียบและเผยแพร่โปรโมชันเป็นประจำ โปรดอ่านและให้ความยินยอมอย่างเต็มที่จากข้อกำหนดในการให้บริการด้านล่างนี้ก่อนเข้าร่วม:</p>
                         <ul class="HelpCenterArticleColumn">
                            <li>1. สมาชิกระบุว่าเข้าใจและยอมรับข้อตกลงและเงื่อนไขเมื่อเข้าร่วมโปรโมชัน หากคุณไม่เห็นด้วยกับข้อกำหนดนี้คุณจะถือว่าไม่มีคุณสมบัติสำหรับคุณสมบัติ</li>
                            <li>2. โบนัสไม่สามารถโอนได้</li>
                            <li>3. สามารถใช้หมายเลขโทรศัพท์มือถืออีเมล์แอดเดรสที่อยู่อาศัยบัตรธนาคารที่อยู่ IP และอุปกรณ์ได้ตามโปรโมชั่นเท่านั้น</li>
                            <li>4. Letou ไม่ยอมทุจริตหากคุณพบว่ามีการละเมิดกฎของเรา Letou ขอสงวนสิทธิ์ในการยกเลิกบัญชีของคุณและยึดยอดเงินของคุณ</li>
                            <li>5. LETOU ขอสงวนสิทธิ์ในการตัดสินใจขั้นสุดท้ายว่าพฤติกรรมการเดิมพันของผู้ใช้ถือเป็นความเสี่ยงสูงหรือการเก็งกำไรหรือไม่
                                พฤติกรรมการพนันของสมาชิกจะได้รับการตรวจสอบอย่างเคร่งครัดและหากเราพบผู้ใช้ที่เกี่ยวข้องกับการละเมิดการฉ้อโกงการเอารัดเอาเปรียบ
                                T &amp; C เพื่อใช้ประโยชน์จากผลกำไร LETOU มีสิทธิ์ที่จะปิดการใช้งานบัญชีผู้ใช้ยุติการเป็นสมาชิกและยึดเงินโบนัสหรือเงินรางวัลที่ได้รับการปล่อยตัวโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
                            <li>6. การคำนวณการหมุนเวียนของ LETOU platform ตามลำดับดังนี้: วงเงินการถอนเงิน&gt; วงเงินการโอน&gt; โปรโมชั่นโบนัสพิเศษ&gt;
                                โปรโมชั่นโบนัสพิเศษ เมื่อผู้ใช้สมัครโบนัส FTD ระบบจะคำนวณความต้องการในการหมุนเวียนโบนัส FTD และหลังจากที่ผู้ใช้มีคุณสมบัติตรงตามข้อกำหนดที่จะได้รับโบนัส
                                FTD ระบบจะคำนวณโบนัสโปรโมชั่นเฉพาะพิเศษอื่น ๆ ตามข้อกำหนดการหมุนเวียนอื่น ๆ หลังจากนั้น</li>
                            <li>7. Letou ขอสงวนสิทธิ์ในการตีความบทสุดท้ายและการตัดสินใจเกี่ยวกับการออกโบนัสตามข้อกำหนดและเงื่อนไข</li>
                            <li>8. Letou ขอสงวนสิทธิ์ในการยกเลิกกิจกรรมหรือโปรโมชันโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
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


OfferTerms.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(OfferTerms))));