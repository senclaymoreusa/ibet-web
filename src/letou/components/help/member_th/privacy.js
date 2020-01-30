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

export class PrivacyTh extends React.Component {
    
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
                                    <a href="/th/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/th/for_partner">{this.getLabel('for-partner')}</a>
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
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
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <p>การเก็บรวบรวมข้อมูล</p>
                        <p>LETOU ขอสงวนสิทธิ์ในการเก็บรวบรวมข้อมูลที่สามารถระบุตัวตนได้จากคุณเมื่อใดก็ตามที่คุณเข้าถึงเว็บไซต์ของเราหรือเว็บไซต์ของ
                            บริษัท ในเครือของเราลงทะเบียนบัญชีสมัครสมาชิกผลิตภัณฑ์และบริการใด ๆ ของเรากรอกแบบฟอร์มตอบคำถามสำรวจเปิดบัญชีธนาคาร
                            บริจาคให้กับเกมของเราหรือเข้าร่วมกิจกรรมส่งเสริมการขายของเรา</p>
                        <p>เมื่อใดก็ตามที่ทำธุรกรรมบนเว็บไซต์ของเราคุณจะถูกขอให้แสดงข้อมูลส่วนบุคคลต่อไปนี้: ชื่อวันเกิดเพศที่อยู่อีเมลที่อยู่ทางไปรษณีย์รหัสไปรษณีย์หมายเลขโทรศัพท์อาชีพอุตสาหกรรมและความสนใจส่วนตัวอื่น
                            ๆ
                        </p>
                        <p>เมื่อทำการฝากหรือถอนเงินคุณจะต้องป้อนที่อยู่ข้อมูลบัตรเครดิตหรือหมายเลขประกันสังคมของคุณ</p>
                        <p>อย่างไรก็ตามคุณสามารถเยี่ยมชมเว็บไซต์ของเราได้โดยไม่ระบุชื่อ</p>
                        <p>การใช้ข้อมูล</p>
                        <p>ข้อมูลใดที่เรารวบรวมมาจากคุณอาจใช้ในกรณีต่อไปนี้:</p>
                        <p>เพื่อเติมเต็มความต้องการในการเล่นเกมของคุณ</p>
                        <p>เพื่อปรับปรุงการบริการลูกค้าของ LETOU</p>
                        <p>. เพื่อเพิ่มเนื้อหาและโครงสร้างเว็บไซต์และคุณลักษณะของอินเทอร์เฟซสำหรับผู้ใช้</p>
                        <p>เพื่อประมวลผลการเล่นเกมและการทำธุรกรรมทางการเงิน</p>
                        <p>เพื่อยกระดับผลิตภัณฑ์และบริการของ LETOU</p>
                        <p>เพื่อพัฒนาการประกวดการโปรโมตการสำรวจการโฆษณาที่กำหนดเป้าหมายและคุณลักษณะเพิ่มเติมของไซต์</p>
                        <p>จัดการรายงานที่ไม่ระบุตัวตนสำหรับลูกค้าทั้งภายในและภายนอก</p>
                        <p>โปรดมั่นใจว่าข้อมูลส่วนบุคคลของคุณจะไม่ถูกขายขายแลกเปลี่ยนหรือมอบให้กับ บริษัท อื่นไม่ว่าจะด้วยเหตุใด ๆ โดยไม่ได้รับความยินยอมจากคุณยกเว้นการส่งมอบผลิตภัณฑ์หรือบริการที่ซื้อหรือขอ</p>
                        <p>ความลับและความปลอดภัย</p>
                        <p>เราใช้อะไรนอกเหนือจากชุดมาตรการรักษาความปลอดภัยที่เข้มงวดเพื่อให้มั่นใจถึงความลับของข้อมูลส่วนบุคคลของคุณ</p>
                        <p>ข้อมูลเครดิตที่จัดส่งให้เราจะถูกส่งผ่านเทคโนโลยี Secure Socket Layer (SSL) อันทันสมัยและเข้ารหัสเป็นฐานข้อมูลผู้ให้บริการเกตเวย์การชำระเงินของ
                            legit ของเรา การเข้าถึงข้อมูลนี้มีให้กับบุคคลที่ได้รับอนุญาตเท่านั้น</p>
                        <p>คุ้กกี้</p>
                        <p>คุกกี้เป็นไฟล์ขนาดเล็กที่เว็บไซต์หรือผู้ให้บริการโอนย้ายมายังคอมพิวเตอร์ของคุณผ่านฮาร์ดไดรฟ์ของเว็บเบราว์เซอร์ (ซึ่งคุณควรอนุญาต)
                            และทำให้ไซต์หรือผู้ให้บริการมีคุณสมบัติในการจดจำเบราว์เซอร์ของคุณรวมทั้งจับและจดจำข้อมูลบางอย่าง
                        </p>
                        <p>คำแนะนำของคุณ LETOU ใช้คุกกี้เพื่อรู้จักและจดจำค่ากำหนดของคุณสำหรับการเข้าชมในอนาคตติดตามการโฆษณาและรวบรวมข้อมูลเกี่ยวกับการโต้ตอบและการเข้าชมเว็บไซต์เพื่อให้เราสามารถปรับปรุงเครื่องมือและโครงสร้างของเรา</p>
                        <p>คุณอาจตั้งค่าเบราว์เซอร์เพื่อเตือนคุณทุกครั้งที่มีการโอนคุกกี้หรือปิดเครื่องทั้งนี้ขึ้นอยู่กับทางเลือกของคุณ</p>
                        <p>อย่างไรก็ตามหากคุณเลือกหลังบริการของ LETOU อาจไม่สามารถใช้งานได้ ในกรณีเช่นนี้คุณสามารถขอความช่วยเหลือจากตัวแทนฝ่ายบริการลูกค้าของเราเพื่อจัดเรียงคำสั่งซื้อของคุณ</p>
                        <p>หมายเหตุ:</p>
                        <p>เมื่อพิจารณาตามที่เห็นสมควรของ LETOU ข้อความทางการตลาดอาจปรากฏขึ้นเป็นครั้งคราว ผู้ใช้สามารถเลือกที่จะปิดการใช้งานคุณลักษณะนี้ได้ในทางกลับกัน
                            LETOU ขอสงวนสิทธิ์ในการจัดหาข้อความที่เกี่ยวข้องกับบริการเช่นบริการประกาศและข้อมูลการจัดการซึ่งถือเป็นส่วนหนึ่งของบัญชีของคุณกับเรา
                            ดังนั้นผู้ใช้จึงไม่สามารถปิดการใช้งานได้
                        </p>
                        <p>หากคุณตัดสินใจที่จะลบบัญชี LETOU ของคุณโปรดติดต่อฝ่ายบริการลูกค้าของเรา บัญชีที่ถูกนำออกอาจถูกเก็บไว้ในคลังข้อมูลของเรา</p>
                        <p>ไม่เปิดเผย</p>
                        <p>LETOU ควบคุมโดยการขายการซื้อขายหรือการถ่ายโอนข้อมูลส่วนบุคคลของลูกค้าของเราไปยังบุคคลภายนอกโดยไม่คำนึงถึงบุคคลที่สามที่เชื่อถือได้และได้รับอนุญาตซึ่งเป็นคู่ค้าของเราเพื่อให้การดำเนินงานของเว็บไซต์และธุรกิจของเราเป็นไปอย่างราบรื่น</p>
                        <p>ด้วยเหตุนี้บุคคลที่สามเหล่านี้จึงมีหน้าที่รักษาความลับของข้อมูลส่วนบุคคลของคุณ</p>
                        <p>โปรดทราบว่าเราอาจเปิดเผยข้อมูลของคุณเมื่อเห็นว่าเหมาะสมเช่นการปฏิบัติตามกฎหมายสำหรับการใช้นโยบายเว็บไซต์ของเราในการปกป้องสิทธิของเราหรือสิทธิทรัพย์สินและความปลอดภัยของ
                            บริษัท อื่น ๆ</p>
                        <p>อย่างไรก็ตามข้อมูลที่ไม่ใช่ข้อมูลส่วนบุคคลอาจระบุถึงบุคคลอื่นเพื่อจุดประสงค์ทางการตลาด</p>
                        <p>ลิงก์ไปยังเว็บไซต์อื่น ๆ</p>
                        <p>บางครั้งเราอาจมีผลิตภัณฑ์และบริการของบุคคลที่สามบนเว็บไซต์ของเรา</p>
                        <p>ไซต์ของบุคคลที่สามถูกควบคุมโดยนโยบายส่วนบุคคลที่แยกต่างหากและเป็นอิสระ</p>
                        <p>ดังนั้นเราจึงไม่สามารถรับผิดชอบต่อเนื้อหาหรือกิจกรรมที่มีอยู่ในไซต์ที่เชื่อมโยง</p>
                        <p>เพื่อเป็นการปกป้องความสมบูรณ์ของเว็บไซต์ของเราเรายินดีต้อนรับความคิดเห็นของผู้ใช้ LETOU</p>
                        <p>การปรับเปลี่ยนข้อมูลบัญชี</p>
                        <p>LETOU ช่วยให้สมาชิกทุกคนสามารถตรวจสอบแก้ไขหรือแก้ไขข้อมูลส่วนบุคคลได้</p>
                        <p>หากต้องการแก้ไขบัญชีของคุณให้เข้าสู่หน้าแรกของ Vwin คลิก "แก้ไข" และคลิกที่ไอคอนดินสอเพื่อเริ่มแก้ไขข้อมูลบัญชีของคุณ</p>
                        <p>ความยินยอมของผู้ใช้</p>
                        <p>สันนิษฐานว่าคุณยินยอมให้นโยบายความเป็นส่วนตัวของเราเมื่อลงทะเบียนและส่งข้อมูลส่วนบุคคลของคุณให้เรา</p>
                        <p>การเปลี่ยนแปลงคำแถลงความเป็นส่วนตัวของเรา</p>
                        <p>LETOU มีดุลยพินิจในการปรับปรุงแถลงการณ์ความเป็นส่วนตัวฉบับนี้เมื่อใดก็ตามที่เห็นว่าจำเป็น</p>
                        <p>ในทำนองเดียวกันเราจะส่งอีเมลแจ้งเตือนหรือประกาศถึงคุณซึ่งจะโพสต์ไว้ในโฮมเพจ สำหรับความคิดเห็นโปรดกรอกแบบฟอร์มหรือใช้บริการอีเมลลูกค้าของเรา</p>
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


PrivacyTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(PrivacyTh))));