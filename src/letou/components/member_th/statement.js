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

export class StatementTh extends React.Component {
    
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
                        <p>ข้อตกลงและเงื่อนไข</p>
                         <p>คุณสามารถดาวน์โหลดข้อกำหนดในการให้บริการโดย บริษัท Wilshire Worldwide จำกัด (เรียกว่า "Operator") สำหรับการจัดการและใช้บริการแก่ผู้ใช้ปลายทาง
                            (เรียกว่า "ผู้ใช้") ที่ www.letou.com เพื่อบรรลุข้อตกลงที่มีผลผูกพัน ทั้งสองฝ่ายและถูกต้องตามกฎหมาย</p>
                         <p>บริษัท Wilshire Worldwide จำกัด มีที่อยู่จดทะเบียนที่สำนักงานปลัดฯ กล่อง 957, Offshore Incorporations Centre, Road Town,
                            Tortola, หมู่เกาะบริติชเวอร์จิน</p>
                         <p>ขอแนะนำให้ผู้ใช้อ่านข้อกำหนดในการให้บริการ (T &amp; C) อย่างระมัดระวังการเข้าถึงและใช้งานเว็บไซต์นี้ด้วยการลงทะเบียนบัญชีของคุณประสบความสำเร็จแสดงให้เห็นว่าคุณเข้าใจและยอมรับข้อกำหนดในการให้บริการ</p>
                         <p>หากคุณไม่เห็นด้วยกับข้อกำหนดในการให้บริการโปรดใช้เว็บไซต์นี้อย่างระมัดระวัง</p>
                         <p>ข้อตกลงในการยอมรับ</p>
                         <p>ข้อตกลงครอบคลุมข้อกำหนดและเงื่อนไขฉบับสมบูรณ์ (T &amp; C) และผู้ใช้ทุกคนควรปฏิบัติตามกฎพื้นฐานเมื่อใช้เว็บไซต์</p>
                         <p>ข้อกำหนดในการให้บริการจะมีผลทันทีกับผู้ใช้เว็บไซต์นี้</p>
                         <p>เว็บไซต์นี้เป็นกรรมสิทธิ์และดำเนินงานโดย Wilshire Worldwide Company Limited และตามที่ระบุไว้ในข้อกำหนด "เรา" หมายถึง Wilshire
                            Worldwide Company Limited (เรียกอีกอย่างว่าโอเปอเรเตอร์) "คุณ" และ "ของคุณ" หมายถึงผู้ใช้</p>
                         <p>นโยบายและกฎระเบียบอื่น ๆ</p>
                         <p>นอกเหนือจากข้อกำหนดในการให้บริการทั่วไปแล้วผู้ใช้ต้องตรวจสอบข้อกำหนดอื่น ๆ ในเว็บไซต์ด้วย:</p>
                         <p>กฎกติกามารยาท</p>
                         <p>นโยบายส่วนบุคคล</p>
                         <p>นโยบายการจัดการสมาชิก</p>
                         <p>คำประกาศในเงื่อนไขการใช้งาน</p>
                         <p>ผู้ดำเนินการขอสงวนสิทธิ์ในการอัปเดตและแก้ไขข้อกำหนดและเงื่อนไข (รวมถึงกฎระเบียบหรือนโยบายอื่น ๆ ) เป็นระยะ ๆ</p>
                         <p>หลังจากอัปเดตและแก้ไขข้อตกลงและเงื่อนไขทั้งหมดแล้วจะมีการโพสต์บนเว็บไซต์และจะมีผลทันที</p>
                         <p>ผู้ใช้ควรตรวจสอบข้อกำหนดในการให้บริการล่าสุด</p>
                         <p>การใช้เว็บไซต์นี้อย่างต่อเนื่องระบุว่าผู้ใช้ยอมรับข้อกำหนดในการให้บริการใหม่ ขอแนะนำให้ผู้ใช้พิมพ์หรือเก็บสำเนาข้อกำหนดในการให้บริการของเรา</p>
                         <p>ช่วยเหลือ</p>
                         <p>เว็บไซต์นี้มีให้ผู้ใช้ผลิตภัณฑ์เกมออนไลน์คาสิโนเกมโป๊กเกอร์และการพนันกีฬามากมายรวมทั้งการเดิมพันสด</p>
                         <p>ผู้ใช้ไม่ต้องกังวลเกี่ยวกับความปลอดภัยของข้อมูลส่วนบุคคลของตนเนื่องจากลิงก์และข้อมูลอ้างอิงทั้งหมดมาจากไซต์พาร์ทเนอร์ของ
                            บริษัท อื่น ๆ ของเรา</p>
                         <p>ไซต์คู่ค้าของบุคคลที่สามทั้งหมดมีนโยบายส่วนบุคคลและข้อตกลงในการใช้งานของตนเองดังนั้นเราจึงไม่ต้องรับผิดชอบในกรณีที่คุณเรียกดูเนื้อหาของไซต์และพบกับซอฟต์แวร์ไวรัสหรือความเสียหายอื่น
                            ๆ
                            <br /> ผู้ใช้ควรยอมรับผู้ให้บริการอื่น ๆ ได้แก่ :</p>
                         <p>โฆษณาและบริการอื่น ๆ ของเกมใหม่</p>
                         <p>บริการที่เกี่ยวกับการตลาด และ</p>
                         <p>ผู้ดูแลระบบและบริการด้านการจัดการไซต์พาร์ทเนอร์ของบุคคลที่สาม</p>
                         <p>ข้อมูลการลงทะเบียน</p>
                         <p>เมื่อผู้ใช้ลงทะเบียนบัญชีผู้ใช้ต้องระบุข้อมูลต่อไปนี้:</p>
                         <p>ชื่อจริงที่อยู่อาศัยอีเมลที่ถูกต้องหมายเลขติดต่อและชื่อผู้ใช้ (หรือชื่อบัญชี)</p>
                         <p>ผู้ใช้ต้องมีอายุอย่างน้อย 18 ปีหรือมีอายุครบตามกฎหมายในเขตอำนาจศาลเพื่อลงทะเบียนและใช้เว็บไซต์นี้</p>
                         <p>ผู้ใช้ต้องมั่นใจว่าข้อมูลที่ได้รับมีให้ครบถ้วนและมีประสิทธิภาพ ผู้ประกอบการต้องได้รับการแจ้งให้ทราบทันทีเกี่ยวกับการเปลี่ยนแปลงข้อมูลเหล่านี้</p>
                         <p>ผู้ดูแลระบบมีสิทธิ์ในการตรวจสอบความถูกต้องของข้อมูลและขอให้ผู้ใช้จัดเตรียมเอกสารประจำตัวเพื่อให้เป็นไปตามข้อกำหนด</p>
                         <p>ผู้ใช้ต้องรับผิดชอบต่อชื่อผู้ใช้รหัสผ่านและความปลอดภัยของข้อมูลบัญชีอื่น ๆ</p>
                         <p>ผู้ใช้ต้องยินยอมที่จะไม่ส่งเวิร์มมัลแวร์หรือไวรัสที่เป็นอันตรายใด ๆ ในระหว่างการเข้าชมไซต์และไซต์พาร์ทเนอร์ของบุคคลที่สามเมื่อรวบรวมข้อมูลจะได้รับการควบคุมโดยข้อ
                            จำกัด ของข้อกำหนดและเงื่อนไขและนโยบายส่วนบุคคล</p>
                         <p>ผู้ใช้สามารถเปิดบัญชีได้ (1) เท่านั้น เราจะปฏิเสธหรือปิดบัญชีเพิ่มเติมที่จะระบุและผู้ประกอบการอาจตัดสินใจระงับหรือชะลอการคืนเงินจากบัญชีดังกล่าวหากมีความจำเป็นในการตรวจสอบต่อไป</p>
                         <p>ในเขตอำนาจศาลการพนันออนไลน์ที่ได้รับอนุญาตบางประเภทผู้ใช้มีหน้าที่รับผิดชอบในการปฏิบัติตามกฎหมายของเขตอำนาจศาลที่มีอยู่ก่อนที่จะใช้ไซต์นี้</p>
                         <p>ผู้ประกอบการไม่รับผิดชอบทางกฎหมายในการละเมิดเขตอำนาจศาลรัฐหรือประเทศที่ตนอาศัยอยู่</p>
                         <p>ห้ามมิให้ผู้ประกอบการบริการไปยังที่อยู่อาศัยของฟิลิปปินส์สหรัฐอเมริกาฮ่องกงหวันส์และพื้นที่อื่นที่ห้ามไม่ให้บริการการพนันออนไลน์</p>
                         <p>นโยบายการจัดการสมาชิก</p>
                         <p>ข้อกำหนดและเงื่อนไขที่ใช้บังคับกับผู้ใช้เว็บไซต์นี้รวมทั้งผู้ประกอบการมีดังนี้:</p>
                         <p>เราจะพยายามสร้างข้อมูลที่ถูกต้องบนเว็บไซต์ แต่เว็บไซต์ไม่ยอมรับความรับผิดชอบใด ๆ สำหรับข้อมูลที่ไม่ถูกต้องหรือไม่ถูกต้อง</p>
                         <p>หากผู้ใช้มีการฉ้อโกงหรือการกระทำที่ผิดกฎหมายหรือการฉ้อฉลต่อผู้ใช้รายอื่นผู้ดำเนินการมีสิทธิ์ระงับหรือยกเลิกบัญชีผู้ใช้</p>
                         <p>ในการรักษาความเป็นระเบียบเรียบร้อยของเว็บไซต์นี้และการกำหนดลักษณะพฤติกรรมของผู้ใช้โปรดปฏิบัติตามหลักเกณฑ์เหล่านี้ คุณไม่สามารถ
                            :</p>
                         <p>สร้างอัตลักษณ์หรือเลียนแบบ;</p>
                         <p>โพสต์เนื้อหาที่เป็นอันตรายหมิ่นประมาทหมิ่นประมาทหมิ่นประมาทผิดกฎหมายหรือเป็นอันตรายต่อการโจมตี</p>
                         <p>คุกคามล่วงประเวณีแอบแฝงผู้ใช้รายอื่นและละเมิดสิทธิ์ที่ถูกต้องตามกฎหมายของผู้ใช้รายอื่น</p>
                         <p>ใช้การโอนเงินทางออนไลน์หรือแบ่งปันไวรัสและรหัสที่อาจส่งผลต่อผู้ใช้รายอื่น</p>
                         <p>เก็บวัสดุที่ได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์</p>
                         <p>. เนื้อหาหรือ demonize เนื้อหาของ letou.com รวมทั้งการใช้เนื้อหาแบนเนอร์ที่เป็นอันตรายภาพและข้อมูลการสื่อสารอื่น ๆ</p>
                         <p>นโยบายส่วนบุคคล</p>
                         <p>ความเป็นส่วนตัวของผู้ใช้มีความสำคัญกับผู้ดำเนินการ ดังนั้นโดยปราศจากความยินยอมเป็นลายลักษณ์อักษรของคุณเราจะไม่เปิดเผยหรือขายต่อข้อมูลผู้ใช้ใด
                            ๆ ต่อคู่ค้าบุคคลที่สาม ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับเนื้อหาที่มีการป้องกันข้อมูลส่วนบุคคลหรือไม่? โปรดไปที่หน้านโยบายความเป็นส่วนตัว</p>
                         <p>การทำขวัญ</p>
                         <p>เมื่อใช้บริการและผลิตภัณฑ์ของเว็บไซต์นี้ผู้ใช้ตกลงที่จะชดใช้ค่าเสียหายและยกเว้นผู้ประกอบการและ บริษัท แม่ผู้ร่วมงานผู้จัดการผู้บริหารพนักงาน
                            บริษัท ในเครือและคู่ค้าของความรับผิดใด ๆ ความรับผิดดังกล่าวถือเป็นการเรียกร้องค่าเสียหายและค่าใช้จ่ายใด ๆ จากบุคคลที่สาม</p>
                         <p>การชดใช้ค่าเสียหายรวมถึงการเล่นแบ่งปันหรืออัปโหลดข้อมูลบนไซต์ที่อาจเกิดความเสียหาย แต่ยังรวมถึงความเสียหายที่เกิดขึ้นจากการละเมิดข้อตกลงของผู้ใช้หรือการละเมิดผลประโยชน์ของนิติบุคคลอื่น.</p>
                         <p>การสิ้นสุด</p>
                         <p>ผู้ประกอบการขอสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีผู้ใช้ทันที</p>
                         <p>หากผู้ใช้ละเมิดข้อกำหนดและเงื่อนไขเหล่านี้หรือข้อกำหนดและนโยบายอื่น ๆ ผู้ประกอบการมีสิทธิ์ระงับหรือยกเลิกบัญชีผู้ใช้ทันทีและยกเลิกโบนัสรูปแบบใด
                            ๆ หรือเก็บหรือระงับผู้ใช้จากการถอนบัญชี</p>
                         <p>ในกรณีนี้ผู้ดำเนินการอาจพิจารณาว่าจะคืนเงินคงเหลือในบัญชีให้กับผู้ใช้หรือไม่</p>
                         <p>สิทธิในทรัพย์สินทางปัญญา</p>
                         <p>ผู้ให้บริการอนุญาตให้คุณมีสิทธิ์ในการเข้าถึงและใช้เนื้อหาและบริการบนเว็บไซต์ได้อย่าง จำกัด และสามารถเพิกถอนได้</p>
                         <p>เมื่อใช้เว็บไซต์นี้คุณจะได้รับทราบถึงสิทธิคุณสมบัติและความถูกต้องครบถ้วนของผลประโยชน์ที่มีอยู่ในทรัพย์สินทางปัญญานี้</p>
                         <p>นอกเหนือจากข้อตกลงที่กำหนดไว้อย่างชัดแจ้งแล้วคุณจะไม่สามารถรับสิทธิ์ชื่อหรือความสนใจทั้งหมดในเว็บไซต์นี้</p>
                         <p>คุณไม่สามารถแก้ไขแก้ไขแปลเขียนเนื้อหาที่คล้ายคลึงกันและไม่สามารถแปลแยกวิศวกรรมย้อนกลับและการสลายตัวของรหัสแหล่งที่มาหรือวิธีอื่น
                            ๆ ได้รับซอร์สโค้ดจากบริการซอฟต์แวร์หรือไฟล์ของผู้ให้บริการ</p>
                         <p>การแก้ปัญหาข้อพิพาท</p>
                         <p>หากผู้ใช้เว็บไซต์มีข้อโต้แย้งในบริการที่ให้ไว้โปรดติดต่อผู้ดูแลเว็บและส่งเรื่องร้องเรียนผ่านสายด่วนและอีเมลบริการลูกค้า</p>
                         <p>หากคุณมีข้อร้องเรียนใด ๆ ที่ไม่ได้รับการแก้ไขอย่างน่าพอใจผู้ใช้มีสิทธิ์ที่จะติดต่อ บริษัท First Cagayan Leisure and Resort
                            Corporation ผ่านทางเว็บไซต์อย่างเป็นทางการที่ http://www.firstcagayan.com/home.php</p>
                         <p>บัญชีที่ระงับหรือเปิดใช้งาน</p>
                         <p>หากบัญชีผู้ใช้ไม่มีเงินฝากถอนเงินหรือโอนเงินดำเนินการเดิมพันจะได้รับการพิจารณาในสถานะที่อยู่เฉยๆ</p>
                         <p>ด้วยเหตุนี้ผู้ดำเนินการมีสิทธิ์ระงับบัญชีชั่วคราวโดยจะมีการหักล้างคะแนนสมาชิกและสถานะ Affiliate โดยอัตโนมัติ</p>
                         <p>หากบัญชีอยู่ในสถานะที่ไม่ใช้งานนานกว่า 12 เดือนผู้ดำเนินการมีสิทธิ์ปิดบัญชีและมีสิทธิ์ในการจัดการกับเงินที่เหลืออยู่ในบัญชี</p>
                         <p>เกมที่มีความรับผิดชอบ</p>
                         <p>ผู้ประกอบการมีส่วนร่วมในการให้บริการแพลตฟอร์มเกมที่ยุติธรรมและเชื่อถือได้</p>
                         <p>ผู้ใช้ควรตรวจสอบหน้านโยบายการเล่นเกมที่มีความรับผิดชอบเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับมุมมองและตำแหน่งสำหรับการเล่นเกมที่มีความรับผิดชอบ</p>
                         <p>ข้อผิดพลาดหรือข้อผิดพลาด</p>
                         <p>ในกรณีที่เกิดข้อผิดพลาดที่เห็นได้ชัด mis-pricings หรือการละเว้นอื่น ๆ ผู้ให้บริการจะพยายามทุกวิถีทางในการตรวจสอบและแก้ไขข้อผิดพลาดที่เกิดขึ้นทันที</p>
                         <p>เมื่อผู้ใช้พบข้อผิดพลาดหรือการละเลยเขาจะต้องแจ้งให้ผู้ดำเนินการทราบทันที</p>
                         <p>ผู้ใช้อาจไม่ได้รับผลกำไรจากข้อผิดพลาดหรือการละเว้นใด ๆ</p>
                         <p>สำหรับเหตุผลของข้อผิดพลาดหรือการละเว้นที่จำนวนเงินถูกบันทึกไว้ในยอดคงเหลือบัญชีผู้ใช้ต้องส่งคืนทันทีตามข้อกำหนดของผู้ดำเนินการ</p>
                         <p>สำหรับเหตุผลของข้อผิดพลาดหรือการละเว้นที่จำนวนเงินถูกบันทึกไว้ในยอดคงเหลือบัญชีผู้ใช้จำนวนเงินดังกล่าวจะต้องไม่สามารถเล่นหรือเดิมพันในเกมได้</p>
                         <p>เมื่อเล่นหรือเดิมพันในเกมผู้ดำเนินการสามารถยกเลิกเกมหรือรายการเดิมพันและ / หรือหักโบนัสที่เกี่ยวข้องทั้งหมด</p>
                         <p>หากผู้ดำเนินการได้จ่ายโบนัสดังกล่าวตามข้อกำหนดผู้ใช้ต้องคืนเงินโบนัสนี้ให้กับผู้ดำเนินการทันที.</p>
                         <p>ขั้นตอนการระบุ</p>
                         <p>ผู้ประกอบการมีความมุ่งมั่นและจำเป็นต้องปฏิบัติตามข้อบังคับ First Cagayan Leisure and Resort Corporation เกี่ยวกับการดำเนินธุรกิจการพนันออนไลน์</p>
                         <p>ผู้ใช้ต้องตรวจสอบให้แน่ใจว่าข้อมูลการลงทะเบียนถูกต้องและครบถ้วนและเมื่อมีการปรับข้อมูลผู้ดำเนินการจะต้องได้รับแจ้งทันที</p>
                         <p>ผู้ประกอบการมีหน้าที่ตรวจสอบข้อมูลส่วนบุคคลของผู้ใช้ผ่านเว็บไซต์และบริการที่เกี่ยวข้องและเพื่อวัตถุประสงค์ในการตรวจสอบตัวตนมีสิทธิ์ที่จะขอเอกสารประจำตัว
                            (เช่นหนังสือเดินทางหรือบัตรประจำตัวประชาชน)</p>
                         <p>รูปแบบการรับตัวตนที่ยอมรับได้ ได้แก่ รูปถ่ายในเอกสาร (ภายในระยะเวลาที่ถูกต้อง) เช่นบัตรประจำตัวหนังสือเดินทาง ใบอนุญาตขับขี่,
                            ใบขับขี่, ภาพประจำวัน ฯลฯ</p>
                         <p>หลักฐานการพำนักที่ยอมรับได้ ได้แก่ การเรียกเก็บเงินจากธนาคาร / บัตรเครดิตภายใน 90 วันหรือค่าสาธารณูปโภคค่าโทรศัพท์มือถือ
                            ฯลฯ หากผู้ดำเนินการไม่สามารถตรวจสอบอายุเอกลักษณ์หรือสถานที่พำนักของผู้ใช้บัญชีนี้จะถูกระงับและหักออกสำหรับการชำระเงินจนกว่าผู้ใช้จะให้
                            ข้อมูลที่ถูกต้อง</p>
                         <p>คำปฏิเสธ</p>
                         <p>คุณจะเสี่ยงต่อการใช้เว็บไซต์นี้ เราให้เนื้อหาของเว็บไซต์นี้กับหลักการของความถูกต้องและความถูกต้อง</p>
                         <p>เราขอสงวนสิทธิ์ในการ จำกัด หรือยกเลิกสิทธิการเข้าถึงเว็บไซต์หรือส่วนอื่น ๆ ของคุณได้ตลอดเวลา</p>
                         <p>บริษัท Wilshire Worldwide จำกัด ระบุโดยชัดแจ้งหรือโดยนัยรวมถึง แต่ไม่ จำกัด เพียงการรับประกันโดยนัยของการค้าและการปฏิบัติจริงของวัตถุประสงค์พิเศษและวัสดุที่ไม่ละเมิดในการรับประกันเว็บไซต์รวมถึงการเป็นตัวแทนหรือการค้าการรับประกันโดยนัย
                            ตรวจสอบการเข้าถึงเว็บไซต์ของคุณโดยไม่หยุดชะงักและไม่มีข้อผิดพลาด ว่าเว็บไซต์นี้ปลอดภัยและเชื่อถือได้ เว็บไซต์และเว็บเซิร์ฟเวอร์ไม่มีไวรัส;
                            มีข้อมูลที่สมบูรณ์ถูกต้องและเป็นปัจจุบันบนเว็บไซต์ และด้วยการดาวน์โหลดเนื้อหาจากเว็บไซต์นี้คุณจะต้องรับผิดชอบต่อการกระทำทั้งหมดของคุณ
                            คุณจะต้องเสียค่าใช้จ่ายในการดาวน์โหลดและความเสียหายต่อระบบคอมพิวเตอร์หรือข้อมูลสูญหาย</p>
                         <p>คำแนะนำหรือคำปรึกษาในรูปแบบปากเปล่าหรือแบบเขียนใด ๆ ที่ได้รับจากผู้ดำเนินการหรือเว็บไซต์จะไม่มีการรับประกันใด ๆ</p>
                         <p>ผู้ดำเนินการเว็บไซต์ไม่รับประกันหรือมุ่งมั่นในความสมบูรณ์ความถูกต้องความถูกต้องเพียงพอประสิทธิผลทันเวลาและความน่าเชื่อถือของข้อกำหนดในการให้บริการ</p>
                         <p>การใช้หรือไม่สามารถใช้ข้อมูลเว็บไซต์นี้ได้</p>
                         <p>การเข้าถึงข้อมูลบนเว็บไซต์นี้ไม่ได้รับอนุญาตและ / หรือผิดกฎหมาย</p>
                         <p>การคัดลอกเนื้อหาที่มีลิขสิทธิ์อย่างสมเหตุสมผลคุณเข้าใจและยอมรับว่า บริษัท Wilshire Worldwide Company Limited และ บริษัท แม่คู่สัญญาร่วมทุน
                            บริษัท ย่อยพนักงานผู้บริหารพนักงาน บริษัท ในเครือผู้รับจ้างคู่ค้าและผู้ลงโฆษณาไม่ถือหุ้นใด ๆ เหตุผลข้างต้นลงโทษชดเชยความเสียหายโดยบังเอิญหรือโดยอ้อม</p>
                         <p>เขตอำนาจศาลและกฎหมายที่ใช้บังคับ</p>
                         <p>ข้อกำหนดและเงื่อนไขนี้อยู่ภายใต้กฎหมายและข้อบังคับซึ่งได้รับการจัดการโดย Cagayan Economic Authority ของฟิลิปปินส์</p>
                         <p>ข้อพิพาทใด ๆ ที่เกิดขึ้นจากข้อกำหนดและเงื่อนไขของบริการทั้งรางวัลเว็บไซต์ซอฟต์แวร์ผู้ดำเนินการนักพัฒนาซอฟต์แวร์หรือ บริษัท
                            จัดการการชำระเงินของผู้ดำเนินการจะอยู่ภายใต้การพิจารณาของ Cagayan Economic Zone Authority ของฟิลิปปินส์</p>
                         <p>อีกครั้งผู้ดำเนินการที่ได้รับอนุญาตจาก Cagayan Economic Zone Authority ของฟิลิปปินส์เป็นธุรกิจการพนันออนไลน์ที่ถูกกฎหมาย</p>
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


StatementTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(StatementTh))));