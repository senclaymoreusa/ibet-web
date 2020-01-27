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

export class MemberRuleFourTh extends React.Component {
    
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
                                <a href="/th/for_partner">แบ่งปันแพลน >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2> โปรแกรมพาร์ทเนอร์นานาชาติ </h2>
                        <p> ในทุกแพลตฟอร์มเลอออกเสียงลงคะแนนในเดือนคุณจะได้รับถึงร้อยละ 40 ของกำไรสูงและสม่ำเสมอส่งในแต่ละเดือน การเพิ่ม "เลอออกเสียงลงคะแนนโครงการความร่วมมือระหว่างประเทศ"
                            ถ้าคุณมีคำถามใด ๆ โปรดปรึกษาหน่วยงานที่ทุ่มเท QQ: 3309889296 306820689 หรือหน่วยงานที่ทุ่มเท SKYPE: swifind </p>
                        &nbsp;
                        <strong>เงื่อนไข</strong> คณะกรรมการการสกัด
                        <ul class="HelpCenterArticleColumn">
                            <li> 1. สำหรับผู้ใช้แบบออฟไลน์อย่างน้อยหกเดือนเดิมพันที่ใช้งาน </li>
                            <li> 2. วิธีการอื่นใดที่จะเป็นอุปสรรคต่อการดำเนินงานปกติของ บริษัท ควรจะห้ามเราจะระงับความร่วมมือระหว่างการตรวจสอบหากมีการละเมิดใด
                                ๆ จะเป็นอย่างถาวรแช่แข็งบัญชี </li>
                            ข้อตกลง
                            <li> 3. หากพันธมิตรภายในหกเดือนไม่เป็นไปตามคาดว่าผลการดำเนินงาน LETOU จะถูกยกเลิกโดยตรง รักษาการผู้บัญชาการตำรวจจะทำสัมภาษณ์กับคุณเพื่อช่วยในการรับงวดสามเดือน
                            </li>
                            <li> 4. 5-9 ต่อเดือนระบบจะสร้างการเรียกเก็บเงินโดยอัตโนมัติเดือนที่ผ่านมาคณะกรรมการหน่วยงาน 10-19 สำหรับเวลาประนีประนอม
                                เช่นตัวแทนคณะกรรมการคัดค้านการเรียกเก็บเงินที่ไม่ต่อเดือน 20 สามารถใช้สำหรับหนึ่งเดือนในคณะกรรมการการถอนเงิน
                                (คณะกรรมการมกราคมกุมภาพันธ์ 5-9 สร้างการเรียกเก็บเงินค่าคอมมิชชั่นที่ 10 กุมภาพันธ์ - 19 กุมภาพันธ์ - 20 กุมภาพันธ์เวลาคืนดีเลขที่ตัวแทนสามารถใช้สำหรับแพลตฟอร์มเชื่อมโยงในคณะกรรมการ
                                .. ) </li>
                            <li> 5. พร็อกซี่ยอดเงินในบัญชีผู้ใช้เป็น $ 100 น้อยกว่า 100 หยวนถึง 100 หยวนคณะกรรมการจะสะสมก่อนที่พวกเขาสามารถถอน ผู้ใช้ที่ใช้งานที่มีประสิทธิภาพหมายถึง:
                                ผู้เล่นผ่านพร็อกซี่เชื่อมโยงพิเศษของคุณเพื่อลงชื่อ LETOU หรือกรอกตัวแทนพิเศษของคุณเข้ารหัสในการลงทะเบียนและนี่เป็นครั้งแรกที่ลงทะเบียนเรียบร้อยแล้วฝาก
                                LETOU ให้ถือว่าสมาชิกที่ลงทะเบียนใหม่ที่มีประสิทธิภาพ </li>
                            <li> ※เดือนเป็นรายได้ค่านายหน้าเป็นลบ ,, ไม่ได้ส่งออกจนกระทั่งในเดือนถัดไปค่าที่คำนวณสะสมของคณะกรรมการ . ในฐานะที่เป็นเดือนของการตั้งถิ่นฐานเพื่อหากำไรและเพื่อให้บรรลุขั้นต่ำที่จำเป็นต้องถอน
                                LETOU จะได้รับเงินค่านายหน้า </li>
                        </ul>
                        &nbsp;
                        <h2> การอ้างอิงการชำระเงินค่าคอมมิชชั่น </h2>
                        <p> LETOU ทุกเดือนกำไรสุทธิของแต่ละแพลตฟอร์ม LETOU คำนวณเป็นค่านายหน้าร้อยละขึ้นอยู่กับสมาชิกหุ้นส่วนจูเนียร์
                            <br /> คุณจะดึงดูดลูกค้าเรียกว่ากำไรสุทธิของคุณความร่วมมือ 30% ถึง 40% ของค่าใช้จ่ายในตัวกลาง
                            <br />
                            <br /> กำไรสุทธิหมายถึง: จำนวนของจำนวนเงินทั้งหมดของลูกค้าของเราคือการที่เราได้รับเกี่ยวกับการเดิมพันตัดสินหลังจากหักรายการต่อไปนี้
                        </p>
                        <ul class="HelpCenterArticleColumn">
                            <li> •รางวัลที่ได้รับจาก co-clients </li>
                            <li> • 2. การชำระเงินภาษีการพนัน (หรือบทบัญญัติที่เหมาะสมที่เกี่ยวข้อง) ในรูปแบบของการชำระเงิน </li>
                            <li> 3. 3. หนี้สูญ </li>
                            <li> • 4. การชำระเงินที่เป็นการฉ้อโกง </li>
                            <li> 5. จำนวนเงินที่ได้รับคืน </li>
                            <li> การทำธุรกรรม• 6. การชำระเงินที่ทิศทางของผู้ถือบัตรเครดิตธนาคารของธนาคารที่ยึดคืน (ธนาคารทั่วไปชำระเงินเหล่านั้นจะกู้คืนได้)
                            </li>
                            <li> •เดิมพันไม่ถูกต้องและ </li>
                            <li> • 8. เดิมพัน / โบนัสเงินฝาก </li>
                        </ul>
                        <p> คู่ค้ามีสิทธิ์ที่จะได้รับพวกเขาในการพนันกีฬาคณะกรรมการคาสิโนจำนวนของเกมหรือคีโนที่ได้รับ ไม่ว่าจะในการเดิมพันกีฬา, คาสิโนโป๊กเกอร์เกมหรือคีโนจำนวนเชิงลบจะถูกหักออกจากค่านายหน้าค่าคอมมิชชั่นที่มีประสิทธิภาพ
                            </p>
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


MemberRuleFourTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleFourTh))));