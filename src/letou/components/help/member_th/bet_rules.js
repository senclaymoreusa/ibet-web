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

export class BetRulesTh extends React.Component {
    
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้ >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">กติกาเกมส์กีฬา >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>กติกาและกฎการเดิมพัน</h2>
                        <p>บางเหตุการณ์และการตลาดมีกฎที่แตกต่างกันและมีการระบุไว้ด้านล่างในกฎการวางเดิมพันเหตุการณ์ / ตลาดเฉพาะสำหรับแต่ละเหตุการณ์หรือตลาด
                            <br/>/ ประเภทการเดิมพันในเว็บไซต์นี้ ต่อไปนี้เป็นกฎทั่วไปของการเดิมพันที่ใช้กับทุกเหตุการณ์และการเดิมพัน / ประเภทการเดิมพันซึ่งเป็นไปตามข้อบังคับ
                            <br/>ข้อกำหนดและคำจำกัดความที่กำหนดไว้ในข้อตกลงและเงื่อนไขที่เผยแพร่ในเว็บไซต์ของ บริษัท จะใช้บังคับกับกฎและกฎการเดิมพันเหล่านี้
                            <br/> • 1. หลักเกณฑ์การเดิมพันทั่วไปและกฎระเบียบ
                            <br/> • 1.1. ทั่วไป
                            <br/> • 1.1.1 ข้อมูลการเดิมพันทั้งหมดที่จัดทำโดย บริษัท จะกระทำโดยสุจริต อย่างไรก็ตาม บริษัท ไม่สามารถยอมรับความรับผิดสำหรับข้อผิดพลาดหรือการละเว้นใด
                            <br/>ๆ ที่เกี่ยวกับวันเวลาสถานที่คู่แข่งราคาผลสถิติ Jersey (แสดงที่ Live Streaming) หรือข้อมูลเดิมพันอื่น ๆ บริษัท ขอสงวนสิทธิ์ในการแก้ไขข้อผิดพลาดที่เห็นได้ชัดและจะดำเนินการตามขั้นตอนที่เหมาะสมเพื่อให้แน่ใจได้ว่าตลาดซึ่งกำหนดไว้ในประเภทการเดิมพันที่แตกต่างกันที่นำเสนอในการแข่งขันกีฬาบางประเภทจะได้รับการดูแลด้วยความซื่อสัตย์และโปร่งใส
                            <br/>บริษัท ขอสงวนสิทธิ์ในการตัดสินใจขั้นสุดท้าย
                            <br/> • 1.1.2. หากเหตุการณ์ซึ่งหมายถึงการแข่งขันหรือการแข่งขันกีฬาระหว่างสองทีมหรือระหว่างแต่ละบุคคลจะเริ่มขึ้นก่อนเวลาที่กำหนดไว้เฉพาะการเดิมพันที่วางไว้ก่อนการแข่งขัน
                            <br/>(ยกเว้นการเดิมพันสดที่ระบุ) จะถือว่าถูกต้อง . หากมีการปิดหรือระงับตลาดในเวลาที่ถูกต้อง บริษัท ขอสงวนสิทธิ์ในการยกเลิกการเดิมพันทั้งหมดหลังจากเวลาเริ่มต้นจริง
                            <br/>(ไม่รวมการเดิมพันสดที่ระบุ)
                            <br/> • 1.1.3 ในกรณีที่มีความไม่สอดคล้องกันระหว่างชื่อภาษาอังกฤษและชื่อที่ไม่ใช่ภาษาอังกฤษที่ใช้สำหรับเหตุการณ์หรือทีมงานบนเว็บไซต์เป็นภาษาอังกฤษที่มีผลเหนือกว่า
                            <br/> • 1.1.4 ตลอดเวลาเป็นความรับผิดชอบของลูกค้าที่จะต้องทราบเกี่ยวกับคะแนนการแข่งขันและข้อมูลการแข่งขันทั้งหมดที่เกี่ยวข้องและขอแนะนำให้ลูกค้าตรวจสอบสถานะการจับคู่ก่อนวางเดิมพัน
                            <br/> • 1.1.5. บริษัท ขอสงวนสิทธิ์ในการแก้ไขกฎเหล่านี้ได้ทุกเมื่อด้วยเหตุผลใดก็ตาม การแก้ไขดังกล่าวจะมีผลผูกพันทันทีและมีผลทันทีที่โพสต์ในเว็บไซต์
                            <br/> • 1.1.6. ลูกค้ายอมรับว่าคะแนนปัจจุบันเวลาที่ผ่านไปและข้อมูลอื่น ๆ ที่มีอยู่ในไซต์ในขณะที่ฟีด "สด" ที่มาจากบุคคลที่สามให้ไว้อาจมีการล่าช้าเป็นเวลาและ
                            / หรืออาจไม่ถูกต้องและ การเดิมพันใด ๆ ที่วางไว้บนพื้นฐานของข้อมูลนี้เป็นความเสี่ยงของลูกค้าเอง บริษัท ไม่ได้รับประกันความถูกต้องครบถ้วนหรือทันเวลาของข้อมูลดังกล่าวและไม่รับผิดชอบต่อความสูญเสีย
                            (โดยทางตรงหรือทางอ้อม) ของลูกค้าเนื่องจากลูกค้าต้องพึ่งพาข้อมูลดังกล่าว
                            <br /> • 1.1.7. บริษัท ขอสงวนสิทธิ์ในการยกเลิกหรือประกาศให้เป็นโมฆะของการเดิมพันหรือระงับการใช้งานของลูกค้าโดยไม่ต้องแจ้งให้ทราบล่วงหน้าภายใต้สถานการณ์ใด
                            ๆ ดังต่อไปนี้:
                            <br/> •รายละเอียดการเดิมพันไม่สมบูรณ์หรือผิดพลาด
                            <br/> •เงินเดิมพันวางอยู่เกินขีด จำกัด ที่กำหนดโดยกฎ;
                            <br/> •การเดิมพันถูกวางไว้ในการฝ่าฝืนกติกา
                            <br/> ข้อผิดพลาดของมนุษย์ในการพิมพ์หรือส่งผลให้เกิดการใช้ข้อมูลเกมหรืออัตราเดิมพันที่ไม่ถูกต้อง
                            <br/> •หากและเมื่อมีการใช้แท่นผลิตเกมผิดปกติหรือผิดปกติหรือมีจำนวนขาดทุนหรือเงินรางวัลที่สูงเกินไป
                            <br/> • 1.1.8 บริษัท ขอสงวนสิทธิ์ในการระงับเกมหรือผลิตภัณฑ์เฉพาะเพื่อแก้ไขข้อผิดพลาดที่เห็นได้ชัดเจนรักษาความซื่อสัตย์และความเป็นธรรมของเกมดังกล่าว
                            <br/> • 1.1.9 เมื่อ บริษัท ฯ ได้รับการยืนยันแล้ว บริษัท ฯ จะไม่สามารถแก้ไขหรือยกเลิกการเดิมพันได้อีกต่อไป
                            <br/> • 1.1.10. หากลูกค้ามีข้อสงสัยหรือสงสัยว่ามีบางอย่างผิดปกติในระบบลูกค้าควรหยุดเล่นและประสานงานกับฝ่ายสนับสนุนลูกค้าของ
                            บริษัท หากลูกค้ายังคงเล่นต่อไปเขาจะยอมรับความรับผิดชอบต่อผลของการเดิมพันของเขาและ บริษัท มีดุลยพินิจ แต่เพียงผู้เดียวว่าจะแก้ไขปัญหานี้หรือไม่
                            <br/> • 1.1.11 เมื่อการแข่งขันหรือการแข่งขันเริ่มต้นขึ้นและการเดิมพันเกิดขึ้นในขณะที่การแข่งขันกำลังดำเนินอยู่และหากเหตุใดก็ตามที่สตรีมถูกตัดการเชื่อมต่อโดยไม่คำนึงถึงสาเหตุของการถูกตัดการเชื่อมต่อหรือกระแสข้อมูลล่มหรือล่มใด
                            ๆ การเดิมพันจะยังคงอยู่และถูกตัดสินเมื่อเหตุการณ์เสร็จสิ้นและเมื่อผลเป็นที่รู้จัก กฎทั่วไปนี้จะไม่ใช้บังคับในกรณีที่เกมหรือผลิตภัณฑ์มีกฎเฉพาะเกี่ยวกับการตัดการเชื่อมต่อซึ่งในกรณีนี้จะต้องใช้กฎเฉพาะและผลจากกฎเฉพาะจะมีผลผูกพันกับลูกค้า
                            • 1.1.12 บริษัท ขอสงวนสิทธิ์ในการระงับและ / หรือปิดบัญชีลูกค้าเมื่อใดก็ได้หากเชื่อว่าลูกค้าละเมิดกฎและข้อบังคับใด ๆ ที่เกี่ยวข้องหรือถูกหลอกลวงถูกแฮ็กโจมตีจัดการหรือทำลายการพนันตามปกติ
                            ขั้นตอนหรือหากลูกค้ามีส่วนร่วมในการฟอกเงินหรือกิจกรรมที่ผิดกฎหมายอื่น ๆ หรือต่ำกว่าอายุที่กฎหมายกำหนดในการเล่นการพนันในเขตอำนาจศาลหรือสถานที่จริงของเขา
                            เมื่อบัญชีของลูกค้าถูกปิดด้วยเหตุผลดังกล่าวเงินรางวัลและ / หรือการจ่ายเงินทั้งหมดรวมทั้งยอดเงินในบัญชีของลูกค้าจะถูกริบ
                            <br/> • 1.1.13 บริษัท ขอสงวนสิทธิ์ในการกำหนดจำนวนเงินสูงสุดของการจ่ายเงินสำหรับผลิตภัณฑ์และผลิตภัณฑ์ที่มีอยู่ที่จะเสนอขาย
                            <br/> • 1.1.14 บริษัท ขอสงวนสิทธิ์ในการระงับการจ่ายเงินหากมีหลักฐานว่าราคาหรือพูลได้รับการจัดการหรือเมื่อมีการจัดแข่งขันการแข่งขันหรือการแข่งขัน
                            หลักฐานด้านบนอาจขึ้นอยู่กับขนาดความจุหรือรูปแบบของการวางเดิมพันในช่องการเดิมพันใด ๆ หรือทั้งหมดของเรา หากมีข้อพิพาทใด
                            ๆ เกี่ยวกับการตีความข้อบังคับเหล่านี้การตีความของ บริษัท จะมีผลบังคับใช้
                            <br/> • 1.1.15 บริษัท ขอสงวนสิทธิ์ในการยกเลิกและยกเลิกการเดิมพันทั้งหมดที่เกี่ยวข้องกับกิจกรรมการพนันที่ผิดกฎหมาย
                            <br/> • 1.1.16 บริษัท ขอสงวนสิทธิ์ในการปฏิเสธให้ลูกค้าเข้าร่วมเกมหรือเตะลูกค้าจากเกม
                            <br/> • 1.1.17. ซอฟต์แวร์มีให้ 'ตามสภาพ' โดยไม่มีการรับประกันเงื่อนไขหรือข้อผูกพันใด ๆ โดยชัดแจ้งหรือโดยนัยกฎหมายหรือที่อื่นใดในส่วนของ
                            บริษัท บริษัท ไม่รับประกันความสามารถเชิงพาณิชย์คุณภาพสมรรถนะเพื่อจุดประสงค์เฉพาะเจาะจงว่าซอฟต์แวร์จะเป็นไปตามความต้องการของลูกค้าและซอฟต์แวร์ไม่ละเมิด
                            <br/> • 1.1.18 ในขณะที่ บริษัท ฯ ยอมรับว่าจะดำเนินการด้วยความระมัดระวังตามสมควร บริษัท ฯ ไม่มีการรับประกันใด ๆ ว่าซอฟต์แวร์จะปราศจากข้อผิดพลาดหรือไม่ขัดข้องหรือข้อบกพร่องใด
                            ๆ ในซอฟต์แวร์จะได้รับการแก้ไขหรือซอฟต์แวร์หรือเซิร์ฟเวอร์เป็นไวรัส -ฟรี.
                            <br /> • 1.1.19 บริษัท ไม่ต้องรับผิดต่อค่าใช้จ่ายค่าใช้จ่ายการสูญเสียหรือการเรียกร้องใด ๆ ที่เกิดขึ้นจากหรือเกิดจากการสื่อสารหรือข้อผิดพลาดของระบบที่เกี่ยวข้องกับการชำระบัญชี
                            บริษัท ขอสงวนสิทธิ์ในการดำเนินการที่เหมาะสมเพื่อแก้ไขข้อผิดพลาดดังกล่าวรวมถึงการกำจัดเกมที่เกี่ยวข้องทั้งหมดออกจากซอฟต์แวร์
                            <br/> • 1.1.20. ในการวางเดิมพันและใช้ซอฟต์แวร์ลูกค้ายอมรับว่า บริษัท ไม่มีการควบคุมว่าลูกค้าจะใช้ซอฟต์แวร์นี้อย่างไร นอกจากนี้ลูกค้ายังวางเดิมพันของเขาและใช้ซอฟต์แวร์ในความเสี่ยงของตนเองและ
                            บริษัท จะไม่รับผิดชอบต่อความเสียหายโดยทางตรงทางอ้อมผลสืบเนื่องหรือพิเศษหรือการสูญเสียใด ๆ
                            <br/> • 1.1.21 ลูกค้าต้องห้ามเปิดเผยข้อมูลที่เป็นความลับของ บริษัท หรือผู้ให้บริการซอฟต์แวร์ซึ่งอาจรวมอยู่ในซอฟต์แวร์
                            <br/> • 1.1.22. ในการเล่นเกมและวางเดิมพันลูกค้าจะได้รับสิทธิส่วนบุคคลที่ไม่ จำกัด และไม่สามารถโอนสิทธิ์ได้ในการใช้ซอฟต์แวร์
                            <br/> • 1.1.23 ห้ามมิให้ลูกค้า:
                            <br /> • 1.1.23.1 ติดตั้งหรือโหลดซอฟต์แวร์ลงในเซิร์ฟเวอร์ของอุปกรณ์อื่นหรือทำตามขั้นตอนเพื่อทำให้ซอฟต์แวร์ออนไลน์พร้อมใช้งานแก่บุคคลอื่น
                            <br
                            /> • 1.1.23.2 อนุญาตให้ใช้สิทธิ์มอบหมายให้เช่าซื้อโอนยืมสำเนาหรือแจกจ่ายสำเนาซอฟต์แวร์
                            <br /> • 1.1.23.3 ถอดรหัสวิศวกรรมย้อนกลับถอดแยกแปลถอดรหัสดัดแปลงสร้างงานลอกเลียนแบบขึ้นอยู่กับซอฟต์แวร์ส่วนใดส่วนหนึ่งหรือคัดลอกใด
                            ๆ การถอดเสียงหรือการผสานรวมของซอฟต์แวร์แปลงซอฟต์แวร์หรือส่วนใดส่วนหนึ่งของ หรือพยายามตรวจค้นซอร์สโค้ดของซอฟต์แวร์
                            <br
                            /> • 1.1.23.4. นำออกประกาศลิขสิทธิ์ใด ๆ ที่เป็นกรรมสิทธิ์หรือคล้ายคลึงกันออกจากผู้ให้บริการซอฟต์แวร์ และ
                            <br /> • 1.1.23.5. ป้อน, เข้าถึงหรือพยายามที่จะเข้าหรือเข้าถึงหรือมิฉะนั้นโดยหลีกเลี่ยงระบบรักษาความปลอดภัยของ บริษัท หรือแทรกแซงในซอฟต์แวร์เกมและเว็บไซต์ใด
                            ๆ
                            <br/> • 1.1.24 การใช้ซอฟต์แวร์นี้ไม่ได้ทำให้ลูกค้าเป็นเจ้าของสิทธิ์ในทรัพย์สินทางปัญญาใด ๆ ในซอฟต์แวร์
                            <br/> • 1.1.25 กฎทั่วไปเหล่านี้จะใช้เฉพาะในกรณีที่ไม่มีกฎข้อบังคับเฉพาะสำหรับเกมหรือผลิตภัณฑ์ที่เฉพาะเจาะจง
                            <br/> • 1.2.Abandonments และ Postponements
                            <br/> • 1.2.1 หากกิจกรรมไม่เริ่มต้นในวันที่เริ่มต้นที่กำหนดและไม่สมบูรณ์ภายในวันที่เสร็จสิ้นตามกำหนดตามกำหนดในกฎกีฬาโดยเฉพาะการเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข
                            .
                            <br/> 1.2.2. หากเหตุการณ์เริ่มต้น แต่จะถูกยกเลิกในภายหลังและไม่เสร็จสิ้นภายในวันที่กำหนดตามกำหนดเวลาตามที่ระบุไว้ในกฎกีฬาข้อใดข้อหนึ่งการเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข
                            <br/>• 1.2.3. หากเหตุการณ์ไม่เสร็จสิ้นภายในระยะเวลาที่กำหนดไว้อย่างเป็นทางการตามที่กำหนดไว้ในกฎกีฬาเฉพาะที่ประกาศผลอย่างเป็นทางการหรือประกาศผลโดยหน่วยงานกำกับดูแลที่เกี่ยวข้องของเหตุการณ์ใด
                            บริษัท หนึ่งขอสงวนสิทธิ์ในการพิจารณา ตรงกับที่ถูกต้อง การตัดสินใจของ บริษัท ถือเป็นที่สิ้นสุดและมีผลผูกพันในเรื่องนี้
                            <br/> • 1.3. เปลี่ยนสถานที่
                            <br/> • 1.3.1 หากไม่มีการระบุไว้เป็นอย่างอื่นถ้าการแข่งขันมีกำหนดการเล่นบนพื้นสนามกลาง แต่เล่นบนสนามที่ไม่เป็นกลางหรือในทางกลับกันการเดิมพันทั้งหมดจะถือว่าถูกต้อง
                            ในกรณีที่มีการเปลี่ยนแปลงสถานที่ที่ทีมเจ้าบ้านเล่นหรือในทางกลับกันการเดิมพันทั้งหมดในการแข่งขันจะถือว่าเป็นโมฆะ การเดิมพันยังถือเป็นโมฆะถ้าชื่อทีมบ้านและทีมเยือนได้รับการระบุอย่างผิดพลาดในสิ่งที่ตรงกันข้าม
                            <br/> • 1.3.2. สำหรับกิจกรรมที่ไม่ใช่ทีมทั้งหมดหากสถานที่ตามกำหนดการมีการเปลี่ยนแปลงหลังจากเปิดตลาดแล้วการเดิมพันทั้งหมดจะถือว่าถูกต้อง
                            <br/> • 1.4 ระยะเวลาของเวลา
                            <br /> • 1.4.1. ระยะเวลาที่โพสต์ของกิจกรรมมีไว้เพื่อเป็นข้อมูลอ้างอิงเท่านั้น การเดิมพันจะใช้ได้แม้ว่าจะมีการเปลี่ยนแปลงในระยะเวลาที่กำหนด
                            <br
                            /> • 1.4.2 ทุกเหตุการณ์ที่เกิดขึ้นระหว่างการบาดเจ็บหรือเวลาหยุดที่เล่นจะถือว่าได้เกิดขึ้นเมื่อสิ้นสุดเวลาปกติเช่น เป้าหมายที่ทำประตูในช่วงทดเวลาบาดเจ็บครึ่งแรกของการแข่งขันฟุตบอลจะถือว่าได้รับการทำคะแนนใน
                            45 นาที
                            <br /> • 1.5 ผลสรุป
                            <br /> • 1.5.1 ในกรณีที่เกี่ยวข้องตำแหน่งในแท่นจะนับเป็นผลการแข่งขันอย่างเป็นทางการโดยไม่คำนึงถึงการถูกตัดสิทธิ์หรือการแก้ไขผลการแข่งขันที่ตามมา
                            หากไม่มีพิธีบูธผลลัพธ์จะได้รับการพิจารณาตามผลการตัดสินอย่างเป็นทางการของหน่วยงานกำกับดูแลที่เกี่ยวข้องในขณะที่การชำระบัญชีของตลาดโดยไม่คำนึงถึงการตัดสิทธิ์หรือการแก้ไขผลการแข่งขันในภายหลัง
                            หากไม่มีผลการแข่งขันอย่างเป็นทางการผลการแข่งขันจะถูกกำหนดโดยอ้างอิงถึงหลักฐานที่มีอยู่ในช่วงเวลาที่ Market settlement
                            <br/> • 1.5.2 ตลาดโดยทั่วไปจะตัดสินอย่างสงบหลังสิ้นสุดการแข่งขัน หมดจดในฐานะบริการลูกค้าบางตลาดอาจถูกตัดสินก่อนประกาศผลอย่างเป็นทางการ
                            บริษัท ขอสงวนสิทธิ์ในการหักล้างการตั้งถิ่นฐานในเหตุการณ์ที่เกิดขึ้นเนื่องจากข้อผิดพลาดในตลาด
                            <br/> • 1.5.3. ในเหตุการณ์ที่ไม่แน่นอนเกี่ยวกับผลการดำเนินงานใด ๆ บริษัท ฯ ขอสงวนสิทธิ์ในการระงับการชำระบัญชีของตลาดใด ๆ
                            <br/> • 1.5.4 ยกเว้นการแข่งขันที่ไม่มีอยู่จริง บริษัท จะไม่ถือเป็นโมฆะหรือคืนเงินเดิมพันที่ตัดสินเนื่องจากมีการแก้ไขหรือเปลี่ยนแปลงผลชื่อทีมหรือรายละเอียดการแข่งขันใด
                            ๆ ที่ทำขึ้น 72 ชั่วโมงหลังจากเวลาเริ่มต้นของการแข่งขันหรือสำหรับการเดิมพัน ที่ได้รับการตัดสินแล้ว
                            <br/> • 1.5.5 ในกรณีที่มีความขัดแย้งระหว่างผลการดำเนินการอย่างเป็นทางการกับผลการโพสต์ในส่วนของผลงานในเว็บไซต์ของ บริษัท ข้อขัดแย้งนี้จะต้องแก้ไขโดยการอ้างอิงถึงการบันทึกวิดีโอของ
                            บริษัท ฯ ในเหตุการณ์ใดเหตุการณ์หนึ่งเพื่อให้ได้ผลลัพธ์ที่ถูกต้อง อย่างไรก็ตามหากไม่มีการบันทึกวิดีโอดังกล่าวให้กำหนดผลลัพธ์ที่ถูกต้องตามผลการปกครองที่เกี่ยวข้องของเหตุการณ์ดังกล่าวตามที่เผยแพร่ในเว็บไซต์อย่างเป็นทางการ
                            หากเว็บไซต์อย่างเป็นทางการไม่สามารถให้ผลลัพธ์หรือผลการโพสต์ของเว็บไซต์อย่างเป็นทางการเป็นความผิดพลาดอย่างชัดแจ้ง บริษัท
                            ฯ ขอสงวนสิทธิ์ในการตัดสินใจ / แก้ไขเพื่อกำหนดผลการตัดสิน การตัดสินใจของ บริษัท ถือเป็นที่สิ้นสุดและมีผลผูกพันในเรื่องนี้
                            <br/> • 1.5.6. ผู้ชนะการแข่งขันจะถูกตัดสินในตอนท้ายของการแข่งขันเพื่อวัตถุประสงค์ในการพิจารณาเดิมพันที่ชนะโดยไม่คำนึงถึงการกลับรายการการตัดสินใจหรือผลของการประท้วงหรือการอุทธรณ์ใดๆ
                            <br/> • 1.6 การยอมรับตัวจับเวลาอัตโนมัติ
                            <br/> • 1.6.1. สำหรับเหตุการณ์บางอย่างที่ บริษัท ฯ กำหนดลูกค้าสามารถวางเดิมพันโดยใช้คุณลักษณะการยอมรับการจับเวลาโดยเลือกปุ่ม
                            "Timer Accept" บนเมนู การเดิมพันแต่ละครั้งที่วางไว้โดยใช้การจับเวลาจะมีตัวจับเวลาถอยหลังซึ่งจะอยู่ในความมุ่งมั่นของ บริษัท
                            แต่เพียงผู้เดียว ในตอนท้ายของการจับเวลาโดยไม่มีการขัดจังหวะใด ๆ ที่ระบุไว้ในหัวข้อ 1.6.2 ด้านล่างนี้การเดิมพันจะได้รับการยอมรับ
                            <br/> • 1.6.2 หากมีการหยุดชะงักใด ๆ ที่กล่าวถึงในส่วนนี้ก่อนที่เครื่องจับเวลาถอยหลังจะสิ้นสุดลงเดิมพันทั้งหมดที่วางโดยการใช้ตัวจับเวลาจะเป็นโมฆะทันที
                            <br/> • 1.6.2.1. หากพบว่ามีบัตรสีแดงหรือบัตรสีแดงที่เป็นไปได้
                            <br/> • 1.6.2.2. หากมีการลงโทษที่เป็นไปได้หรือมีการลงโทษ
                            <br/> • 1.6.2.3. หากปรากฏว่ามีเป้าหมายที่เป็นไปได้หรือมีการทำประตูใด ๆ โดยฝ่ายใดฝ่ายหนึ่ง
                            <br/> • 1.6.2.4 เหตุการณ์ฟอร์ทไทม์รวมถึงความล้มเหลวในอุปกรณ์หรือการสื่อสารโทรคมนาคมที่ป้องกันการวางการยอมรับการบันทึกหรือแจ้งการเดิมพันความล่าช้าหรือการขัดจังหวะในการดำเนินงานหรือการส่งผ่านความล้มเหลวของสายสื่อสาร
                            <br/> • 1.6.3 ในการใช้คุณลักษณะการยอมรับการจับเวลาลูกค้ายอมรับว่าคะแนนปัจจุบันเวลาที่ผ่านไปและข้อมูลอื่น ๆ ที่มีอยู่ในไซต์นี้ในขณะที่ฟีด
                            "สด" ที่จัดเตรียมโดยบุคคลที่สามให้บริการอยู่ภายใต้การหน่วงเวลาและ / หรืออาจไม่ถูกต้องและการเดิมพันใด ๆ ที่วางไว้บนพื้นฐานของข้อมูลนี้เป็นความเสี่ยงของลูกค้าเอง
                            บริษัท ฯ ให้ข้อมูลนี้และไม่รับผิดชอบต่อความสูญเสีย (โดยทางตรงหรือทางอ้อม) ของลูกค้าเนื่องจากลูกค้าต้องพึ่งพาข้อมูลดังกล่าว
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


BetRulesTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRulesTh))));