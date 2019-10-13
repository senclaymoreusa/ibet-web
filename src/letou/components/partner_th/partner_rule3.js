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

export class MemberRuleThree extends React.Component {
    
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
                                <a href="/for_partner">สำหรับคู่ค้า  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_partner">แบ่งปันแพลน >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>ข้อผูกพันของ Affiliate</h2>
                        <p>ภาระผูกพัน LETOU</p>
                        <p>• 1. Letou จะตรวจสอบประสิทธิภาพ Affiliate เป็นระยะ ๆ โดยการตรวจสอบจะเริ่มจากวันที่มีผลบังคับใช้ของ Affiliate ฝ่ายพันธมิตรของ
                            Letou จะดำเนินการตรวจสอบแจ้งผลทางอีเมลและระงับบัญชีหากพันธมิตรไม่ปฏิบัติตามข้อกำหนดสำหรับเดือนที่ติดต่อกัน
                            <br /> • 2. Letou จะดูสมาชิกกิจกรรมการเดิมพันโดยไม่เปิดเผยข้อมูลส่วนบุคคลของสมาชิก
                            <br /> • 3. เราจะแจ้งให้ บริษัท ในเครือทราบจำนวนเงินค่าคอมมิชชั่นผ่านทางอีเมลและโอนเงินค่านายหน้าไปยังบัญชีธนาคารของพันธมิตรเมื่อได้รับการยืนยันจากพันธมิตร
                            <br /> • 4. Letou จะให้คำอธิบายและรวบรวมคำแนะนำพันธมิตรทั้งหมด</p>
                        <p>Affiliate Right</p>
                        <p>• 1. บริษัท ในเครืออาจขอให้ Letou ให้คำอธิบายที่สมเหตุสมผลสำหรับคำถามเกี่ยวกับบัญชีของ Affiliate
                            <br /> • 2. พันธมิตรอาจเสนอคำแนะนำที่ถูกต้องตามกฎหมายเกี่ยวกับการพัฒนาบัญชี
                            <br /> • 3. บริษัท ในเครืออาจขอให้แก้ไขข้อมูลบัญชีที่ให้มาด้วยเหตุผลอันชอบด้วยกฎหมายซึ่งเป็นที่ยอมรับของ Letou</p>
                        <p>ภาระผูกพันของ Affiliate</p>
                        <p>• 1. พันธมิตรต้องเก็บข้อมูลส่วนบุคคลของสมาชิกไว้เป็นความลับ บริษัท ในเครือไม่ได้รับอนุญาตให้เปิดเผยข้อมูลส่วนบุคคลของสมาชิกกิจกรรมการเดิมพันชนะ
                            / แพ้เป็นต้นสมาชิกของ Affiliate ไม่ได้รับอนุญาตให้มีบัญชีมากกว่าหนึ่งบัญชี
                            <br /> • 2 บริษัท ในเครือควรเป็นผู้รับผิดชอบในการส่งเสริม Letou เพื่อสร้างผลกำไรให้กับทั้งสองฝ่ายโดยไม่ทำลายกฎหมายท้องถิ่น
                            <br /> 3. พันธมิตรต้องรับผิดชอบค่าใช้จ่ายในการส่งเสริมการขายและไม่อนุญาตให้ใช้โฆษณาหรือเว็บไซต์ใด ๆ โดยไม่ได้รับอนุญาตจาก Letou
                            <br /> 4. บัญชีพันธมิตรไม่ได้รับอนุญาตให้ทำกิจกรรมการทำธุรกรรมและเดิมพัน บริษัท ในเครือสามารถลงทะเบียนบัญชีสมาชิกเพื่อทำการเดิมพันได้
                            แต่ต้องไม่ลงทะเบียนเป็นสมาชิกของ Affiliate
                            <br /> • 5. บริษัท ในเครือไม่ได้รับอนุญาตให้ทำ cross betting เพื่อสร้างคอมมิชชั่นภายในแพลตฟอร์มของ Letou และผู้ให้บริการเกม
                            การดำเนินการนี้จะถือว่าเป็นการฉ้อโกงของคณะกรรมการ</p>
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


MemberRuleThree.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleThree))));