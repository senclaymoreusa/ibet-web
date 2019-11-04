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

export class SpecialRulesTh extends React.Component {
    
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
                                <a href="/th/for_member">กติกากีฬา OW Sports Rules >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>3. กฎการเดิมพันในเหตุการณ์ที่เฉพาะเจาะจง</h2>
                        <p>• 3.1 กฎผู้จับกุม</p>
                        <p>(เช่นช่วงเวลาพิเศษในการเล่นในทัวร์นาเมนท์ต่างๆลีคเยาวชนการแข่งขันเยาวชนทีมสำรองหรือการแข่งขันที่เป็นมิตร) การเดิมพันทั้งหมดจะตัดสินเมื่อสิ้นสุดการแข่งขัน
                            ของเวลาที่กำหนด</p>
                        <p>• 3.1.1.1 ในกรณีที่มีการเล่นน้อยกว่าเวลาปกติผู้ดำเนินการขอสงวนสิทธิ์ในการระงับการระงับการเดิมพันทั้งหมดจนกว่าผลการแข่งขันอย่างเป็นทางการของการแข่งขันนั้น</p>
                        <p>• 3.1.1.2 ยกเว้นการแข่งขันที่ไม่ใช่เวลาปกติที่ระบุไว้อย่างชัดเจนในเว็บไซต์ก่อนการแข่งขันฟุตบอลทั้งหมดการเดิมพันที่เกิดขึ้นในการแข่งขันดังกล่าวจะถือเป็น
                            VOID</p>
                        <p>• 3.1.2. หากการแข่งขันฟุตบอลถูกเลื่อนออกไปหรือถูกระงับหรือระงับชั่วคราวและไม่สามารถดำเนินการต่อได้ภายใน 12 ชั่วโมงนับจากวันที่เริ่มต้นการแข่งขันการจับคู่จะเป็นโมฆะ
                            (ไม่ว่าการตัดสินใจอย่างเป็นทางการใด ๆ เพื่อเป็นเกียรติแก่ผลการแข่งขัน) ผลของการเดิมพันทั้งหมดในการแข่งขันที่ถูกทิ้งร้าง
                            / ระงับการแข่งขันอยู่ภายใต้ดุลพินิจของ บริษัท แต่เพียงผู้เดียว</p>
                        <p>• 3.1.3. การเดิมพันครึ่งแรก (1H) ใช้กับการเล่นครึ่งแรกเท่านั้น หากการแข่งขันถูกยกเลิกในช่วงครึ่งแรกการเดิมพันทั้งหมดถือเป็นโมฆะ
                            หากการแข่งขันถูกยกเลิกในช่วงครึ่งหลังการเดิมพันครึ่งแรกทั้งหมดยังคงมีผลอยู่</p>
                        <p>• 3.1.4 บริษัท ให้ข้อมูล (เช่นพื้นดินที่เป็นกลาง, บัตรสีแดง, นาฬิกาจับเวลา, ข้อมูลทางสถิติ, วันที่เริ่ม, ฯลฯ ) ในฐานะบริการและไม่รับผิดชอบใด
                            ๆ ลูกค้าเป็นผู้รับผิดชอบในการรับทราบข้อมูลที่ถูกต้องสำหรับการแข่งขันใด ๆ</p>
                        <p>• 3.1.5 หากไม่มีการระบุไว้เป็นอย่างอื่นถ้าการแข่งขันมีกำหนดเล่นบนพื้นสนามกลาง (แต่เล่นบนสนามที่ไม่ใช่เป็นกลางหรือในทางกลับกัน)
                            การเดิมพันทั้งหมดถือว่าถูกต้อง</p>
                        <p>ในกรณีที่มีการเปลี่ยนแปลงสถานที่ (ทีมบ้านเกิดขึ้นหรือในทางกลับกัน) การเดิมพันทั้งหมดในการแข่งขันจะถือว่าเป็นโมฆะ การเดิมพันยังถือเป็นโมฆะถ้าชื่อทีมบ้านและทีมเยือนได้รับการระบุอย่างผิดพลาดในสิ่งที่ตรงกันข้าม</p>
                        <p>• 3.1.6. คะแนนจะได้รับการอัปเดตสำหรับการเดิมพันฟุตบอลสดและการเดิมพันที่แสดงในระหว่างการซื้อขายสดหมายถึงคะแนนที่แสดงในเวลาวางเดิมพัน
                            คำบอกกล่าวเกี่ยวกับตัวจับเวลาและบัตรสีแดงมีไว้เพื่อจุดประสงค์ในการอ้างอิงเท่านั้น</p>
                        <p>• 3.1.7. สำหรับการเดิมพันแบบสดในระหว่างเกมเกี่ยวกับการดำเนินการที่ บริษัท ฯ ใช้ดุลพินิจ แต่เพียงผู้เดียวและเห็นสมควรถือว่าเป็นอันตรายเมื่อคะแนนผลการปฏิบัติงานของทีมหรือผู้เล่นคนใดคนหนึ่งอาจได้รับผลกระทบ
                            หรือ "การเล่นที่อันตราย") บริษัท ขอสงวนสิทธิ์ในการระงับการยอมรับการเดิมพันและอาจยอมรับหรือปฏิเสธการเดิมพันหลังจากเล่นอันตราย
                            การดำเนินการอื่น ๆ ทั้งหมดในเกมถือว่าเป็นการเล่นที่ปลอดภัยและการเดิมพันจะดำเนินการต่อเพื่อรับการยอมรับ</p>
                        <p>• 3.1.8. สำหรับการเดิมพันแบบสดการวางเดิมพันจะได้รับอนุญาตภายใน 90 นาทีนอกเหนือจากเวลาการบาดเจ็บใด ๆ สำหรับเกมแบบเต็มเวลา
                            (ตามดุลพินิจของ บริษัท ) การดำเนินการใด ๆ ที่นอกเหนือจากที่กล่าวถึงในส่วนนี้ 3.1.8 จะถือว่าเป็นการเล่นที่ปลอดภัยและทำให้การเดิมพันที่ค้างอยู่ทั้งหมดสามารถอยู่ในการยอมรับได้:
                            เล่นในหรือรอบบริเวณจุดโทษ; โทษ; และลูกฟรีคิกที่ บริษัท ถือว่าเป็นอันตราย (ความเป็นไปได้ของเป้าหมาย)</p>
                        <p>• 3.1.9. สำหรับการเดิมพันแบบสดการเดิมพันที่ค้างอยู่ทั้งหมดจะถูกปฏิเสธโดยอัตโนมัติในขณะที่ผู้ตัดสินจบการแข่งขันในครึ่งเวลาและ
                            / หรือเต็มเวลา</p>
                        <p>• 3.1.10. สำหรับการเดิมพันสด แต่ไม่รวมนาทีสุดท้าย 2 นาทีของ O / U เฉพาะ 15 นาทีเฉพาะ O / U เฉพาะ 10 นาทีและเฉพาะเจาะจง HDP
                            15 นาทีเดิมพันที่รอดำเนินการจะถูกปฏิเสธเมื่อทำประตูและรอดำเนินการ เดิมพันจะได้รับการยอมรับภายใต้พื้นที่ปลอดภัยเมื่อพิจารณาโทษ</p>
                        <p>• 3.1.11. สำหรับการเดิมพันแบบแฟนตาซีแบบสดการเดิมพันจะอนุญาตให้วางเดิมพันได้ถึง 90 นาทีนอกเหนือจากเวลาการบาดเจ็บใด ๆ สำหรับเกมแบบเต็มเวลา
                            (ตามดุลพินิจของ บริษัท ) ตั้งแต่เวลาเริ่มเล่น (00:00) เป็นต้นไปจนกว่าจะหมดเวลาการควบคุม (90 นาที) แล้วแต่จำนวนใดจะใช้ได้ในเกมการกระทำใด
                            ๆ ที่นอกเหนือจากที่กล่าวถึงในเอกสารฉบับนี้จะถือว่าเป็นสิ่งที่ปลอดภัยและด้วยเหตุนี้ทั้งหมด การเดิมพันที่ค้างอยู่อาจถือเป็นที่ยอมรับได้:
                            เล่นในหรือรอบบริเวณจุดโทษ; โทษ; และลูกฟรีคิกที่ บริษัท ถือว่าเป็นอันตราย (ความเป็นไปได้ของเป้าหมาย)</p>
                        <p>• 3.1.12. การเดิมพันทั้งหมดสำหรับโอเวอร์ / อันเดอร์จะตัดสินทันทีเมื่อได้รับการตัดสินก่อนจบการแข่งขันเต็มเวลา การชำระบัญชีทันใจใช้เฉพาะกับลีกที่ระบุโดย
                            บริษัท เท่านั้น</p>
                        <p>• 3.1.13 การเดิมพันจะเป็นโมฆะถ้าการแข่งขันถูกยกเลิกเว้นแต่จะมีการกำหนดเดิมพันเรียบร้อยแล้ว</p>
                        <p>• 3.2.Basketball</p>
                        <p>• 3.2.1. ทุกตลาดแบบเต็มเวลารวมถึงการเดิมพันแบบสดจะตัดสินตามผลการแข่งขันรอบสุดท้ายรวมถึงการต่อเวลาหากมีการเล่น (ยกเว้นที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.2.2. หากการแข่งขันไม่เริ่มต้นในวันที่เริ่มต้นตามกำหนดการเดิมพันทั้งหมดจะถือเป็นโมฆะ (เว้นแต่ที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.2.3. ถ้าการแข่งขันเริ่มขึ้น แต่ถูกระงับหรือยกเลิกภายใน 12 ชั่วโมงนับจากเวลาเริ่มต้นที่กำหนดไว้การเดิมพันแบบเต็มเวลาจะถือว่าถูกต้องถ้ามีการแข่งขันเอ็นบีเออย่างน้อยสี่สิบสาม
                            (43) นาทีหรือสามสิบห้า (35) นาทีของการแข่งขันบาสเกตบอลอื่น ๆ เสร็จสิ้นแล้ว การเดิมพันจะถือเป็นผลถ้าผลการแข่งขันอย่างเป็นทางการประกาศโดยคณะกรรมการที่เกี่ยวข้อง
                            มิฉะนั้นการเดิมพันในการแข่งขันที่ระงับหรือถูกยกเลิกจะถือเป็นโมฆะเว้นแต่เดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.2.4. ผลลัพธ์ครึ่งแรกคือผลรวมของไตรมาสแรกและไตรมาสที่สอง ผลการแข่งขันในช่วงครึ่งหลังคือผลรวมของไตรมาสที่สามและสี่รวมทั้งการเล่นล่วงเวลาที่อาจมีขึ้น</p>
                        <p>• 3.2.5. ผลการดำเนินงานไตรมาสที่สี่ไม่รวมค่าล่วงเวลาใด ๆ ที่อาจมีขึ้น</p>
                        <p>• 3.2.6. ถ้าการแข่งขันถูกระงับหรือถูกทอดทิ้งการวางเดิมพันในครึ่งหลังหรือไตรมาสที่ยังไม่เสร็จสิ้นจะถือว่าเป็นโมฆะ หากครึ่งหลังหรือไตรมาสที่กำหนดเสร็จสมบูรณ์แล้วการเดิมพันจะมีผลสมบูรณ์</p>
                        <p>• 3.2.7 คะแนนจะไม่ได้รับการอัปเดตสำหรับการเดิมพันสดบาสเก็ตบอลและแฮนดิแคปที่แสดงในระหว่างการซื้อขายสดหมายถึงคะแนนที่เริ่มต้นของการแข่งขันเช่น
                            0-0 เวลาและคะแนนที่แสดงไว้มีวัตถุประสงค์เพื่อการอ้างอิงเท่านั้น</p>
                        <p>• 3.2.8. ทีมใดทำสกอร์ได้ก่อนจะตัดสินในทีมที่ทำแต้มได้แต้มแรก หากการแข่งขันถูกระงับหรือยกเลิกหลังจากทำคะแนนแรกแล้วการเดิมพันยังคงใช้งานได้</p>
                        <p>• 3.2.9. ทีมที่ทำคะแนนตลาดสุดท้ายจะตัดสินในทีมที่ทำแต้มคะแนนสุดท้ายของการแข่งขัน (รวมถึงการต่อเวลา) หรือครึ่งหลัง / ไตรมาสที่ระบุ
                            (ไม่รวมค่าล่วงเวลา) หากการแข่งขันถูกระงับหรือยกเลิกการเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันที่อยู่ในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.2.10. ตลาดพิเศษ (รวมถึงจำนวนคะแนน, การตีกลับ, การช่วยเหลือ, สามแต้ม, ฟรีพาดหัว ฯลฯ ) มีผลถ้าทั้งสองผู้เล่นเข้าร่วมการแข่งขัน
                            หากผู้เล่นหนึ่งหรือทั้งสองฝ่ายไม่เข้าร่วมการแข่งขันการเดิมพันทั้งหมดถือเป็นโมฆะ ผลการค้นหาสำหรับตลาดพิเศษ ได้แก่ การทำงานล่วงเวลายกเว้นที่ระบุไว้เป็นอย่างอื่น
                            ผลการแข่งขันทั้งหมดจะถูกนำมาใช้เมื่อผลการแข่งขันอย่างเป็นทางการถูกประกาศเมื่อจบการแข่งขันโดย NBA.com, FIBA.com ฯลฯ และการเปลี่ยนแปลงใด
                            ๆ ที่เกิดขึ้นภายหลังในสถิติจะไม่สามารถใช้ในการเดิมพันได้</p>
                        <p>• 3.2.11. บ้าน / สถานที่สำหรับการแข่งขัน NCAA เป็นเพียงข้อมูลอ้างอิงเท่านั้น</p>
                        <p>• 3.2.12.Fantasy Basketball markets (รวมถึงตลาดที่ถ่ายทอดสด) คือการจับคู่หรือการรวมกันของทีมจากการแข่งขันที่แตกต่างกัน การแข่งขันที่เกี่ยวข้องกับทั้งสองทีมจะต้องสิ้นสุดลงในวันเดียวกันมิฉะนั้นการเดิมพันถือเป็นโมฆะ
                            สถานที่สำหรับตลาดบาสเกตบอลแฟนตาซีมีวัตถุประสงค์เพื่อการอ้างอิงเท่านั้น</p>
                        <p>• 3.2.13 หากต้องการชนะมากที่สุดในสี่ตลาดจะได้รับการตัดสินในทีมที่ชนะได้มากที่สุดเป็นจำนวนสี่ในระหว่างการแข่งขันบาสเกตบอล
                            หากผลของไตรมาสที่หนึ่งเป็นที่เสมอกันทีมที่ชนะในไตรมาสนั้นไม่ได้ การทำงานล่วงเวลาไม่รวมอยู่ในตลาดนี้ หากการแข่งขันถูกระงับหรือยกเลิกการเดิมพันทั้งหมดจะถือเป็นโมฆะ</p>
                        <p>• 3.3. อเมริกันฟุตบอล</p>
                        <p>• 3.3.1. ตลาดแบบเต็มเวลารวมทั้งการเดิมพันแบบสดจะตัดสินตามผลการแข่งขันที่ผ่านมารวมถึงการต่อเวลา (ยกเว้นที่ระบุไว้เป็นอย่างอื่นในกติกาฉบับนี้)</p>
                        <p>• 3.3.2. หากการแข่งขันไม่เริ่มต้นในวันที่เริ่มต้นตามกำหนดการเดิมพันทั้งหมดจะถือเป็นโมฆะ (เว้นแต่ที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.3.3. ถ้าการแข่งขันเริ่มขึ้น แต่ถูกระงับหรือยกเลิกภายใน 12 ชั่วโมงนับจากเวลาเริ่มต้นตามกำหนดเวลาการเดิมพันแบบเต็มเวลาจะถือเป็นที่ถูกต้องถ้าเวลาห้าสิบห้า
                            (55) นาทีของการจับคู่เสร็จสิ้น การเดิมพันจะถือเป็นผลถ้าผลการแข่งขันอย่างเป็นทางการประกาศโดยคณะกรรมการที่เกี่ยวข้อง มิฉะนั้นการเดิมพันในการแข่งขันที่ระงับหรือถูกยกเลิกจะถือเป็นโมฆะเว้นแต่เดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.3.4 ผลการทดสอบครึ่งแรกคือผลรวมของไตรมาสแรกและไตรมาสที่สอง ผลการแข่งขันในช่วงครึ่งหลังคือผลรวมของไตรมาสที่สามและสี่รวมทั้งการเล่นล่วงเวลาที่อาจมีขึ้น</p>
                        <p>• 3.3.5. ผลการดำเนินงานไตรมาสที่สี่ไม่รวมค่าล่วงเวลาใด ๆ ที่อาจมีขึ้น</p>
                        <p>• 3.3.6. หากการแข่งขันถูกระงับหรือถูกทอดทิ้งการวางเดิมพันในครึ่งหลังหรือไตรมาสที่ยังไม่เสร็จสิ้นจะถือว่าเป็นโมฆะ หากครึ่งหลังหรือไตรมาสที่กำหนดเสร็จสมบูรณ์แล้วการเดิมพันจะมีผลสมบูรณ์</p>
                        <p>• 3.3.7 คะแนนจะได้รับการอัปเดตสำหรับการเดิมพันสดอเมริกันฟุตบอลและตลาดที่แสดงในระหว่างการซื้อขายสดดูที่คะแนนที่แสดงในขณะวางเดิมพัน</p>
                        <p>• 3.3.8. ทีมที่ทำประตูคะแนนแรกจะตัดสินในทีมที่ทำแต้มได้แต้มแรก หากการแข่งขันถูกระงับหรือยกเลิกหลังจากทำคะแนนแรกแล้วการเดิมพันยังคงใช้งานได้</p>
                        <p>• 3.3.9. ทีมที่ทำประตูคะแนนสุดท้ายจะตัดสินในทีมที่ทำแต้มได้แต้มสุดท้ายของการแข่งขัน (รวมถึงการทำงานล่วงเวลา) หากการแข่งขันถูกระงับหรือยกเลิกการเดิมพันทั้งหมดจะถือเป็นโมฆะ</p>
                        <p>• 3.3.10 สถานที่บ้าน / นอกบ้านสำหรับการแข่งขันของซีเอเป็นเพียงข้อมูลอ้างอิงเท่านั้น</p>
                        <p>• 3.3.11. สำหรับการเดิมพันแบบสดในระหว่างเกมเกี่ยวกับการดำเนินการที่ บริษัท ฯ ใช้ดุลพินิจ แต่เพียงผู้เดียวและเห็นสมควรถือว่าเป็นอันตรายเมื่อคะแนนผลการปฏิบัติงานของทีมหรือผู้เล่นคนใดคนหนึ่งอาจได้รับผลกระทบ
                            หรือ "การเล่นที่อันตราย") บริษัท ขอสงวนสิทธิ์ในการระงับการยอมรับการเดิมพันและอาจยอมรับหรือปฏิเสธการเดิมพันหลังจากเล่นอันตราย
                            การดำเนินการอื่น ๆ ทั้งหมดในเกมถือว่าเป็นการเล่นที่ปลอดภัยและการเดิมพันจะดำเนินการต่อเพื่อรับการยอมรับ</p>
                        <p>• 3.4 เบสบอล</p>
                        <p>• 3.4.1 ชื่อคนพึ่งถือเป็นเพียงวัตถุประสงค์เพื่อการอ้างอิงเท่านั้น การเดิมพันเบสบอลทั้งหมดจะถือว่าถูกต้องโดยไม่คำนึงถึงเหยือกเริ่มต้น</p>
                        <p>• 3.4.2 ตลาดแบบเต็มเวลารวมทั้งการเดิมพันแบบสดจะตัดสินตามผลการแข่งขันรอบสุดท้ายซึ่งรวมถึงโอกาสพิเศษ (ยกเว้นกรณีที่ระบุไว้ในกฎเหล่านี้)
                            ในเบสบอลญี่ปุ่นจะมีการผูกและในกรณีนี้จะมีการคืนเงินเดิมพัน</p>
                        <p>• 3.4.3. หากเกมไม่เริ่มต้นในวันที่เริ่มต้นตามกำหนดการเดิมพันทั้งหมดจะเป็นโมฆะ (เว้นแต่ที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.4.4. สำหรับการเดิมพันเบสบอลถือว่าถูกต้องแล้วเกมจะต้องใช้โอกาส 9 (เก้า) (หรือ 8.5 โอกาสหากทีมเจ้าบ้านเป็นผู้นำ) หากเกมถูกระงับและเสร็จสิ้นในวันถัดมาการเดิมพันทั้งหมด
                            (ยกเว้นเกมที่ได้รับการกำหนดโดยไม่มีเงื่อนไข) จะถือว่าเป็นโมฆะ</p>
                        <p>• 3.4.5. ถ้าเกมถูกระงับหรือถูกเรียกในโอกาสพิเศษคะแนนจะถูกตัดสินหลังจากการแข่งขันเต็มรูปแบบครั้งสุดท้ายเว้นแต่คะแนนของทีมเจ้าบ้านจะผูกหรือนำไปสู่ครึ่งล่างของโอกาสซึ่งในกรณีนี้คะแนนเป็น
                            กำหนดเวลาเล่นเกม</p>
                        <p>• 3.4.6. การเดิมพัน Innings 5 ​​ครั้งแรกจะตัดสินตามผลที่เกิดขึ้นเมื่อครบ 5 โอกาส หากโอกาสทั้งห้าไม่เสร็จสมบูรณ์ไม่ว่าด้วยเหตุผลใด
                            ๆ การเดิมพันทั้งหมดจะถือเป็นโมฆะ</p>
                        <p>• 3.4.7 คะแนนจะได้รับการอัปเดตสำหรับการเดิมพันแบบสดและการเดิมพันระหว่างการซื้อขายสดดูที่คะแนนที่แสดงในเวลาวางเดิมพัน</p>
                        <p>• 3.4.8 เกมเบสบอลเวิลด์คลาสสิกจะจบลงในช่วงต้น ๆ หากทีมที่นำโดยสิบหรือมากกว่านั้นหลังจากที่ทีมของฝ่ายตรงข้ามได้เข้าร่วมอย่างน้อย
                            7 ครั้งหรือถ้าทีมที่นำโดยการแข่งขันมากกว่า 15 ครั้งหลังจากที่ทีมฝ่ายตรงข้ามได้ เข้ามาถี่ยิบอย่างน้อยห้าครั้ง หากเกิดเหตุการณ์นี้เดิมพันทั้งหมดจะถือว่าถูกต้อง</p>
                        <p>• 3.4.9. เกมเบสบอลนานาชาติ (เช่นการแข่งขันโอลิมปิก) อาจเรียกได้ตั้งแต่ต้นและสำหรับการเดิมพันที่ถูกต้องจะต้องมีการแข่งขัน
                            6.5 ครั้ง</p>
                        <p>• 3.4.10. สำหรับการเดิมพันแบบสดในระหว่างเกมซึ่งเกี่ยวกับการดำเนินการที่ บริษัท ฯ เห็นสมควร แต่เพียงผู้เดียวและเห็นสมควรถือว่าเป็นอันตรายเมื่อคะแนนผลการปฏิบัติงานของทีมหรือผู้เล่นคนใดคนหนึ่งอาจได้รับผลกระทบ
                            หรือ "การเล่นที่อันตราย") บริษัท ขอสงวนสิทธิ์ในการระงับการยอมรับการเดิมพันและอาจยอมรับหรือปฏิเสธการเดิมพันหลังจากเล่นอันตราย
                            การดำเนินการอื่น ๆ ทั้งหมดในเกมถือว่าเป็นการเล่นที่ปลอดภัยและการเดิมพันจะดำเนินการต่อเพื่อรับการยอมรับ</p>
                        <p>• 3.5. ไอซ์ฮอกกี้</p>
                        <p>• 3.5.1. ตลาดแบบเต็มเวลาอาจได้รับการเสนอเป็น "เวลาปกติเท่านั้น" หรือ "รวมทั้งการล่วงเวลาและการลงโทษ" หรือทั้งสองอย่าง ลูกค้าควรดูชื่อตลาดเสมอ
                            สำหรับการแข่งขันที่ถูกตัดสินโดยการยิงลูกโทษทีมที่ชนะจะมีเป้าหมายเพิ่มขึ้นหนึ่งคะแนนในการตัดสินผลการแข่งขัน</p>
                        <p>• 3.5.2. หากการแข่งขันไม่เริ่มต้นในวันที่เริ่มต้นตามกำหนดการการเดิมพันทั้งหมดจะเป็นโมฆะ (เว้นแต่ที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.5.3. ถ้าการแข่งขันเริ่มขึ้น แต่ถูกระงับหรือยกเลิกภายใน 12 ชั่วโมงนับจากเวลาเริ่มต้นตามกำหนดเวลาการเดิมพันแบบเต็มเวลาจะถือเป็นที่ถูกต้องหากสิ้นสุดการแข่งขันเป็นเวลาห้าสิบห้า
                            (55) นาที การเดิมพันจะถือเป็นผลถ้าผลการแข่งขันอย่างเป็นทางการประกาศโดยคณะกรรมการที่เกี่ยวข้อง มิฉะนั้นการเดิมพันในการแข่งขันที่ระงับหรือถูกยกเลิกจะถือเป็นโมฆะเว้นแต่เดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.5.4. สำหรับการเดิมพันรอบระยะเวลาต้องดำเนินการรอบระยะเวลาหนึ่งเพื่อให้การเดิมพันถือว่าถูกต้อง</p>
                        <p>• 3.5.5 ผลการแข่งขันระยะที่สามไม่รวมถึงการต่อเวลาหรือการยิงประตูที่อาจเล่นได้</p>
                        <p>• 3.5.6.Ice Hockey Live Betting จะตัดสินตามผลการแข่งขันเมื่อสิ้นสุดรอบการแข่งขันปกติ (สามรอบ) ผลการทำงานล่วงเวลาและยิงออกไม่นับ</p>
                        <p>• 3.5.7 คะแนนจะได้รับการอัปเดตสำหรับการเดิมพันสดแบบ Ice Hockey และตลาดที่แสดงในระหว่างการซื้อขายสดดูที่คะแนนที่แสดงในเวลาวางเดิมพัน</p>
                        <p>• 3.5.8. สำหรับการเดิมพันแบบสดในระหว่างเกมที่เกี่ยวกับการดำเนินการที่ บริษัท ฯ ใช้ดุลพินิจ แต่เพียงผู้เดียวและเห็นสมควรถือว่าเป็นอันตรายเมื่อคะแนนผลการปฏิบัติงานของทีมหรือผู้เล่นคนใดคนหนึ่งอาจได้รับผลกระทบ
                            หรือ "การเล่นที่อันตราย") บริษัท ขอสงวนสิทธิ์ในการระงับการยอมรับการเดิมพันและอาจยอมรับหรือปฏิเสธการเดิมพันหลังจากเล่นอันตราย
                            การดำเนินการอื่น ๆ ทั้งหมดในเกมถือว่าเป็นการเล่นที่ปลอดภัยและการเดิมพันจะดำเนินการต่อเพื่อรับการยอมรับ</p>
                        <p>• 3.6.Tennis</p>
                        <p>• 3.6.1 ตลาดทองคำหมายถึงผู้ชนะการแข่งขันหรือชุดที่ระบุ ตลาดแฮนดิแคปขึ้นอยู่กับชุดหรือเกม (โปรดดูชื่อเรื่องการตลาด) เหนือ
                            / ใต้และนอกคอก / ดีบุกขึ้นอยู่กับเกม (ยกเว้นที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.6.2. หากผู้เล่นไม่เริ่มต้นทัวร์นาเม้นท์หรือแข่งขันแล้วการเดิมพันทั้งหมดในผู้เล่นนั้นจะเป็นโมฆะ</p>
                        <p>• 3.6.3. หากผู้เล่น (หรือคู่) เกษียณหรือถูกตัดสิทธิ์ในระหว่างการแข่งขันเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นเดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.6.4. หากการแข่งขันถูกเลื่อนออกไปหรือถูกระงับการเดิมพันทั้งหมดถือว่าถูกต้องหากการแข่งขันเสร็จสิ้น</p>
                        <p>• 3.6.5. การเดิมพันทั้งหมดจะถือว่ายังคงใช้ได้โดยไม่คำนึงถึงการเปลี่ยนแปลงสถานที่จัดงานหรือสนามแข่งขัน (รวมถึงการย้ายการแข่งขันจากสนามกลางแจ้งสู่สนามในร่มหรือในทางกลับกัน)</p>
                        <p>• 3.6.6. ถ้าจำนวนชุดที่กำหนดในการชนะการแข่งขันจะเปลี่ยนจากเดิมที่กำหนดไว้การเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.6.7 ผู้ชนะชุดแรก (Second, Third Set Winner ฯลฯ ) หมายถึงผลของชุดที่ระบุ การเดิมพันทั้งหมดจะถือเป็นโมฆะถ้าชุดที่ระบุไม่สมบูรณ์</p>
                        <p>• 3.6.8.Tennis Live Betting ตัดสินตามผลของการแข่งขัน (หรือชุดที่ระบุ) คะแนนจะไม่ได้รับการปรับปรุงสำหรับการเดิมพันสดเทนนิส</p>
                        <p>• 3.6.9. เอซเซส (ข้อบกพร่องคู่ ฯลฯ ) จะถูกตัดสินตามสถิติการแข่งขันอย่างเป็นทางการ หากผู้เล่นเกษียณหรือถูกตัดสิทธิ์ก่อนการแข่งขันเสร็จสิ้นการเดิมพันทั้งหมดจะเป็นโมฆะ</p>
                        <p>• 3.6.10. First Ace (Double Fault etc) จะตัดสินตามสถิติการแข่งขันอย่างเป็นทางการ หากมีการตัดสินว่ามีปัญหาใด ๆ เกิดขึ้นจากการแข่งขันเอซ
                            (ข้อบกพร่องสองครั้ง) แล้วการเดิมพันทั้งหมดจะถือว่าถูกต้องแม้ว่าการแข่งขันจะยังไม่สมบูรณ์เนื่องจากเกษียณหรือถูกตัดสิทธิก็ตาม
                            ในกรณีที่ไม่มีเอซ (ข้อผิดพลาดสองครั้ง) ในขณะที่เกษียณ / ถูกตัดสิทธิ์เดิมพันทั้งหมดจะถือเป็นโมฆะ</p>
                        <p>• 3.6.11.Game Winner markets หมายถึงผู้ชนะในเกมที่เฉพาะเจาะจงเช่น ตั้ง 1 เกมที่ 1; ชุดที่ 1 เกม 2 เป็นต้นหากมีการตั้งค่าไปที่
                            tie-break แล้วตลาดจะถูกกำหนดให้เป็นชุดที่ 1 TB; กำหนด 2 TB เป็นต้นหากมีการเกษียณ / ถูกตัดสิทธิ์ในระหว่างเกมที่ไม่สมบูรณ์เดิมพันทั้งหมดจะถือเป็นโมฆะ
                            หากเกมเสร็จสิ้นโดยผู้ตัดสินที่ตัดสิน "เกมโทษ" การเดิมพันทั้งหมดในเกมนั้นจะถือเป็นโมฆะ (แม้ว่าเกมจะจบด้วย "จุดโทษ" แล้วการเดิมพันทั้งหมดยังคงมีผลอยู่)
                            หากเกมถูกระงับการเดิมพันทั้งหมดถือว่าถูกต้องหากเกมเสร็จสิ้น</p>
                        <p>• 3.6.12. ตลาดที่ถูกต้องจับคู่หมายถึงจำนวนที่แน่นอนของชุดที่ชนะโดยผู้เล่นแต่ละคนในการจับคู่ หากการแข่งขันไม่สมบูรณ์การเดิมพันทั้งหมดจะเป็นโมฆะ
                            หากมีการเปลี่ยนแปลงจำนวนชุดที่กำหนดให้ชนะการเดิมพันทั้งหมดการเดิมพันทั้งหมดจะเป็นโมฆะ</p>
                        <p>• 3.6.13 กำหนดตลาดที่ถูกต้อง X ถูกต้องหมายถึงจำนวนที่แน่นอนของเกมที่ชนะโดยผู้เล่นแต่ละรายในเซตเฉพาะ หากการเดิมพันไม่สมบูรณ์การเดิมพันทั้งหมดจะเป็นโมฆะ
                            หากมีการเปลี่ยนแปลงจำนวนเกมตามกำหนดเวลาที่กำหนดไว้การเดิมพันทั้งหมดจะเป็นโมฆะ</p>
                        <p>• 3.7.Badminton</p>
                        <p>• 3.7.1 ตลาดทองคำหมายถึงผู้ชนะการแข่งขันหรือชุดที่ระบุ ตลาดแฮนดิแคปขึ้นอยู่กับชุดหรือจุด (โปรดดูชื่อเรื่องการตลาด) ราคาที่ต่ำกว่า
                            / ต่ำกว่าและต่ำ / ต่ำกว่าขึ้นอยู่กับคะแนน (ยกเว้นที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.7.2. หากผู้เล่นไม่เริ่มต้นทัวร์นาเม้นท์หรือแข่งขันแล้วการเดิมพันทั้งหมดในผู้เล่นนั้นจะเป็นโมฆะ</p>
                        <p>• 3.7.3. หากผู้เล่น (หรือคู่) เกษียณหรือถูกตัดสิทธิ์ในระหว่างการแข่งขันการเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.7.4. ถ้าการแข่งขันถูกเลื่อนออกไปหรือถูกระงับการแข่งขันการเดิมพันทั้งหมดถือว่าถูกต้องหากการแข่งขันดำเนินต่อก่อนหมดอายุ
                            12 ชั่วโมง</p>
                        <p>• 3.7.5. ผู้ชนะชุดแรก (Second, Third Set Winner ฯลฯ ) หมายถึงผลของชุดที่ระบุ การเดิมพันทั้งหมดจะถือเป็นโมฆะถ้าชุดที่ระบุไม่สมบูรณ์</p>
                        <p>• 3.7.6. การเดิมพันสดแบบสดจะตัดสินตามผลของการแข่งขัน (หรือชุดที่ระบุ) คะแนนจะไม่ได้รับการปรับปรุงสำหรับแบดมินตันเดิมพันสด</p>
                        <p>•เทนนิส 3.8</p>
                        <p>• 3.8.1 ตลาดทองคำหมายถึงผู้ชนะการแข่งขันหรือชุดที่ระบุ ตลาดแฮนดิแคปขึ้นอยู่กับชุดหรือจุด (โปรดดูชื่อเรื่องการตลาด) ราคาที่ต่ำกว่า
                            / ต่ำกว่าและต่ำ / ต่ำกว่าขึ้นอยู่กับคะแนน (ยกเว้นที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.8.2. หากผู้เล่นไม่เริ่มต้นทัวร์นาเม้นท์หรือแข่งขันแล้วการเดิมพันทั้งหมดในผู้เล่นนั้นจะเป็นโมฆะ</p>
                        <p>• 3.8.3. หากผู้เล่น (หรือคู่) เกษียณหรือถูกตัดสิทธิ์ในระหว่างการแข่งขันการเดิมพันทั้งหมดจะถือเป็นโมฆะเว้นแต่ผู้เล่นในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.8.4. หากการแข่งขันถูกเลื่อนหรือถูกระงับการเดิมพันทั้งหมดถือว่าถูกต้องหากการแข่งขันดำเนินต่อไปก่อนที่การหมดอายุของสิบสองชั่วโมง</p>
                        <p>• 3.8.5. ผู้ชนะชุดแรก (Second, Third Set Winner ฯลฯ ) หมายถึงผลของชุดที่ระบุ การเดิมพันทั้งหมดจะถือเป็นโมฆะถ้าชุดที่ระบุไม่สมบูรณ์</p>
                        <p>• 3.8.6 การเดิมพันเทนนิสสดจะตัดสินตามผลของการแข่งขัน (หรือชุดที่ระบุ) คะแนนจะไม่ได้รับการปรับปรุงสำหรับการเดิมพันปิงปองสด</p>
                        <p>• 3.9 วอลเลย์บอลชายหาดและวอลเลย์บอลชายหาด</p>
                        <p>• 3.9.1 ตลาดทองคำหมายถึงผู้ชนะการแข่งขันหรือชุดที่ระบุ ตลาดแฮนดิแคปขึ้นอยู่กับชุดหรือจุด (โปรดดูชื่อเรื่องการตลาด) ราคาที่ต่ำกว่า
                            / ต่ำกว่าและต่ำ / ต่ำกว่าขึ้นอยู่กับคะแนน (ยกเว้นที่ระบุไว้เป็นอย่างอื่น)</p>
                        <p>• 3.9.2. หากทีมใดไม่เริ่มการแข่งขันหรือจับคู่การเดิมพันทั้งหมดในทีมนั้นจะเป็นโมฆะ</p>
                        <p>• 3.9.3. หากทีมใดเกษียณหรือถูกตัดสิทธิ์ในระหว่างการแข่งขันการเดิมพันทั้งหมดจะเป็นโมฆะยกเว้นการเดิมพันในตลาดที่ได้รับการกำหนดโดยไม่มีเงื่อนไข</p>
                        <p>• 3.9.4. หากการแข่งขันถูกเลื่อนออกไปหรือถูกระงับการเดิมพันทั้งหมดถือว่าถูกต้องหากการแข่งขันดำเนินต่อก่อนหมดอายุ 12 ชั่วโมง</p>
                        <p>• 3.9.5. ผู้ชนะชุดแรก (Second, Third Set Winner ฯลฯ ) หมายถึงผลของชุดที่ระบุ การเดิมพันทั้งหมดจะถือเป็นโมฆะถ้าชุดที่ระบุไม่สมบูรณ์</p>
                        <p>• 3.9.6.Volleyball Live Betting จะตัดสินตามผลของการแข่งขัน (หรือชุดที่ระบุ) คะแนนจะไม่ได้รับการอัปเดตสำหรับการเดิมพันวอลเลย์บอลสด</p>
                        <p>3.10.Field Hockey</p>
                        <p>• 3.10.1. ตลาดแบบเต็มเวลารวมถึงการเดิมพันแบบสดจะตัดสินตามผลการแข่งขันเมื่อสิ้นสุดเวลาปกติ การทำประตูพิเศษ, โกลเด้นและการยิงลูกโทษไม่นับสำหรับตลาดแบบเต็มเวลา
                            อาจมีการเสนอตลาดเฉพาะสำหรับเวลาพิเศษ (ET) และการลงโทษลูกโทษ (PEN) สำหรับการเดิมพัน)</p>
                        <p>• 3.10.2. หากการแข่งขันถูกเลื่อนออกไประงับหรือยกเลิกและไม่สามารถดำเนินการต่อภายใน 12 ชั่วโมงนับจากเวลาเริ่มต้นที่กำหนดการเดิมพันทั้งหมดถือเป็นโมฆะยกเว้นการเดิมพันที่ได้รับการกำหนดโดยไม่มีเงื่อนไข
                            การเดิมพันจะถือเป็นผลถ้าผลการแข่งขันอย่างเป็นทางการประกาศโดยคณะกรรมการที่เกี่ยวข้อง</p>
                        <p>• 3.10.3. ตลาดครึ่งแรกหมายถึงผลของครึ่งแรก การเดิมพันทั้งหมดจะถือเป็นโมฆะถ้าครึ่งที่ระบุไม่เสร็จสิ้น</p>
                        <p>3.10.4.Field Hockey Live Betting จะตัดสินตามผลของการแข่งขันเมื่อสิ้นสุดเวลาปกติ</p>
                        <p>• 3.10.5 คะแนนจะได้รับการอัปเดตสำหรับการเดิมพันสดฟิลด์ฮ็อกกี้และตลาดที่แสดงในระหว่างการซื้อขายสดดูที่คะแนนที่แสดงในขณะวางเดิมพัน</p>
                        <p>• 3.10.6. สำหรับการเดิมพันแบบสดในระหว่างเกมเกี่ยวกับการดำเนินการที่ บริษัท ฯ ใช้ดุลพินิจ แต่เพียงผู้เดียวและเห็นสมควรถือว่าเป็นอันตรายเมื่อคะแนนผลการปฏิบัติงานของทีมหรือผู้เล่นคนใดคนหนึ่งอาจได้รับผลกระทบ
                            หรือ "การเล่นที่อันตราย") บริษัท ขอสงวนสิทธิ์ในการระงับการยอมรับการเดิมพันและอาจยอมรับหรือปฏิเสธการเดิมพันหลังจากเล่นอันตราย
                            การดำเนินการอื่น ๆ ทั้งหมดในเกมถือว่าเป็นการเล่นที่ปลอดภัยและการเดิมพันจะดำเนินการต่อเพื่อรับการยอมรับ</p>
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


SpecialRulesTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(SpecialRulesTh))));