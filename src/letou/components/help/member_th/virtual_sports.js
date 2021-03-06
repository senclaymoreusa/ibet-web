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

export class VirtualTh extends React.Component {
    
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
                                <a href="/th/for_member">กติกากีฬา OW Sports Rules  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>4. กฎกติกาและกฎกติกาเสมือนจริง</h2>
                        <p>
                            <br /> • 4.1. ทั่วไป
                            <br /> 4.1.1. เกมกีฬาเสมือนเป็นผลงานที่สร้างขึ้นโดยคอมพิวเตอร์สำหรับผลการสุ่มจับภาพโดยสุ่มเลือกทีมที่จะชนะการแข่งขันหรือการแข่งขันหรือผู้แข่งขันคนใดคนหนึ่งเป็นอันดับที่สองในสามและอื่น
                            ๆ ในการแข่งขันหรือการแข่งขัน ผลการแข่งขันการแข่งขันหรือกิจกรรมจะถูกควบคุมโดยเครื่องกำเนิดตัวเลขสุ่ม (Random Number
                            Generator - RNG) ที่ทดสอบโดย บริษัท ทดสอบที่ได้รับการรับรองอย่างอิสระ
                            <br /> • 4.1.2 เมื่อใดก็ตามที่มีผลบังคับใช้การเดิมพันกีฬาเสมือนจะถูกควบคุมโดยกฎเดียวกันสำหรับการเดิมพันที่เกิดขึ้นในการแข่งขันกีฬาจริง
                            <br /> 4.1.3 กีฬาแบบเสมือนเป็นเกมที่ออกอากาศ สมาชิกทุกคนที่เดิมพันในการแข่งขันการแข่งขันหรือการแข่งขันเดียวกันจะได้รับผลลัพธ์เช่นเดียวกัน
                            <br /> • 4.1.4 ในกรณีที่เครื่องคอมพิวเตอร์เกิดความผิดปกติทางอิเล็กทรอนิกส์หรืออื่น ๆ ที่ขัดขวางการนำเสนอการแข่งขันการแข่งขันหรือการแข่งขันการเดิมพันในการแข่งขันการแข่งขันหรือการแข่งขันจะเป็นโมฆะและส่งคืน
                            <br /> • 4.1.5. แม้ว่าข้อมูลคำติชมในการแข่งขันการแข่งขันหรือกิจกรรมจะไม่ตรงกันกับวิดีโอสตรีมเสมือนก็ตามการเดิมพันทั้งหมดจะยังคงใช้งานได้
                            <br /> • 4.1.6. ในกรณีที่การแข่งขันการแข่งขันหรือการแข่งขันไม่เริ่มต้นหรือไม่เสร็จสิ้นและไม่สามารถตัดสินผลได้การแข่งขันการแข่งขันหรือการแข่งขันจะเป็นโมฆะ
                            การเดิมพันจะได้รับการคืนเงินตามกติกาและกฎการเดิมพันนี้
                            <br /> • 4.1.7 การเดิมพันที่ยอมรับในการแข่งขันในอนาคตการแข่งขันเหตุการณ์สัปดาห์หรือฤดูกาลจะยืนได้แม้ว่าสมาชิกจะล็อกเอาต์จากเว็บไซต์
                            <br /> • 4.2 ฟุตบอลเสมือนจริง
                            <br /> • 4.2.1. ฟุตบอลเสมือนหมายถึงการเดิมพันผลของการสุ่มหมายเลขที่สร้างขึ้นการแข่งขันฟุตบอลหรือการแข่งขัน RNG จะตัดสินผลของการแข่งขันหรือเหตุการณ์โดยใช้การให้คะแนนของระบบสำหรับแต่ละทีม
                            มีห้า (5) สระว่ายน้ำของทีมให้เลือกตั้งแต่ระดับนานาชาติถึงมาตรฐานระดับสโมสร สองทีม (2) จะแข่งขันในแต่ละแมตช์
                            <br /> • 4.2.2. มี 6 ประเภทการเดิมพันสำหรับฟุตบอลเสมือนจริง:
                            <br /> 1. 2x2
                            <br /> 2. คะแนนที่ถูกต้อง
                            <br /> 3. จำนวนเป้าหมายทั้งหมด
                            <br /> 4. Double Chance
                            <br /> 5. จำนวนที่น้อยกว่า / มากกว่า 2.5 จำนวนเป้าหมาย
                            <br /> 6. แฮนดิแคปเอเชีย
                            <br /> • 4.2.3. การแข่งขันหรือการแข่งขันจะเกิดขึ้นในสภาพแสงแดดเป็นเวลาประมาณหกสิบ (60) วินาที รีลไฮไลต์ที่มีการพยายามใช้เป้าหมาย
                            4 ครั้งจะแสดงขึ้นในแต่ละเป้าหมายซึ่งจะทำให้เกิดเป้าหมายมิสหรือบันทึก
                            <br /> • 4.2.4. การจับคู่หรือการแข่งขันแต่ละครั้งจะเริ่มต้นด้วยการแนะนำซึ่งจะแสดงรายชื่อทีมทั้งสอง (2) และราคาที่สอดคล้องกันของประเภทการเดิมพันที่นำเสนอ
                            <br /> • 4.2.5. การเดิมพันสำหรับการแข่งขันหรือการแข่งขันใด ๆ จะไม่ได้รับการยอมรับหลังจากการแจ้งเตือนการเตะออก การเดิมพันใด
                            ๆ ที่ยอมรับโดยผิดพลาดหลังจากเตะออกจะถือเป็นโมฆะและส่งคืน
                            <br /> • 4.2.6 เมื่อการจับคู่หรือการแข่งขันเสร็จสิ้นลงการ์ดผลการแข่งขันจะปรากฏขึ้นแสดงเส้นชัยและผลชนะเลิศสำหรับแต่ละประเภทการเดิมพัน
                            <br /> • 4.2.7 หลังจากผลการแข่งขันหรือการแข่งขันแสดงขึ้นการแข่งขันหรือเหตุการณ์ต่อไปจะมีขึ้น ผลของการจับคู่หรือเหตุการณ์แต่ละครั้งจะปรากฏในเว็บไซต์เป็นระยะเวลาหนึ่ง
                            <br /> • 4.3 การแข่งม้าแบบเสมือน
                            <br /> • 4.3.1 การแข่งม้าแบบเสมือนหมายถึงการเดิมพันผลการแข่งขันแบบสุ่มที่สร้างการแข่งม้าหรือการแข่งขัน
                            <br /> • 4.3.2 มีประเภทเดิมพัน 5 ประเภทสำหรับการแข่งม้าเสมือนจริง:
                            <br /> 1. วิน
                            <br /> 2. สถานที่
                            <br /> 3. ชนะ / สถานที่
                            <br /> 4. พยากรณ์อากาศ
                            <br /> 5. ไตรสิทธิ์
                            <br /> • 4.3.3 จำนวนม้าสามารถเปลี่ยนแปลงได้ในแต่ละเผ่าพันธุ์หรือเหตุการณ์ที่จัดขึ้นในทั้งแนวราบ, กระโดดหรือวิ่งด้วยความเร็วสูงในสภาพอากาศที่มีแดดมืด
                            ๆ และตอนกลางคืน
                            <br /> • 4.3.4 ขึ้นอยู่กับจำนวนของม้าที่กำลังวิ่งแต่ละทางสำหรับการแข่งม้าแบบเสมือนมีดังนี้:
                            <br /> •ผู้แข่งขันวิ่ง 8-11: 1/5 ราคาต่อ 1, 2, 3
                            <br /> •ผู้แข่งขัน 12-15: 1/4 ราคาต่อ 1, 2, 3
                            <br /> •ใน 16 นักวิ่ง: 1/4 ราคาต่อ 1, 2, 3
                            <br /> 4.3.5. การแข่งขันหรือการแข่งขันแต่ละครั้งจะเริ่มต้นด้วยการแนะนำการแสดงรายชื่อของม้าทั้งหมดและจำนวนและราคาของพวกเขา
                            <br /> • 4.3.6. การแข่งขันหรือการแข่งขันจะอยู่ระหว่าง 30 วินาทีและ 45 วินาที
                            <br /> • 4.3.7 เมื่อการแข่งขันหรือการแข่งขันเสร็จสิ้นการเล่นซ้ำของม้าที่ข้ามเส้นจะแสดงขึ้นพร้อมด้วยการแสดงผู้เล่นที่สำเร็จ
                            3 หรือ 4 อันดับแรก
                            <br /> • 4.3.8 หลังจากผลการแข่งขันหรือการแข่งขันแสดงให้เห็นถึงการแข่งขันหรือการแข่งขันครั้งต่อไป ผลของการแข่งขันแต่ละครั้งหรือเหตุการณ์จะปรากฏในเว็บไซต์เป็นระยะ
                            ๆ
                            <br /> •แข่งรถเกรย์ฮาวด์เสมือนจริง 4.4
                            <br /> • 4.4.1. การแข่งรถเกรย์ฮาวด์เสมือนจริงหมายถึงการเดิมพันผลการแข่งขันที่เกิดจากการแข่งเกรย์ฮาวด์หรือเหตุการณ์สุ่ม
                            <br /> • 4.4.2 มีประเภทเดิมพันห้า (5) สำหรับการแข่งรถเกรย์ฮาวด์เสมือน:
                            <br /> 1. วิน
                            <br /> 2. สถานที่
                            <br /> 3. ชนะ / สถานที่
                            <br /> 4. พยากรณ์อากาศ
                            <br /> 5. ไตรสิทธิ์
                            <br /> • 4.4.3 มี greyhounds หก (6) ในแต่ละการแข่งขันหรือการแข่งขันซึ่งจัดขึ้นในแทร็กแบนหรือกระโดดในสภาวะที่มีแดดจืดและตอนกลางคืน
                            <br /> • 4.4.4 แต่ละการแข่งขันหรือเหตุการณ์เริ่มต้นด้วยการแนะนำการแสดงรายชื่อของ greyhounds ทั้งหมดและตัวเลขและราคาที่เกี่ยวข้อง
                            <br /> • 4.4.5. การแข่งขันหรือการแข่งขันจะอยู่ระหว่าง 30 วินาทีและ 45 วินาที
                            <br /> • 4.4.6 เมื่อการแข่งขันหรือการแข่งขันเสร็จสิ้นลงการเล่นใหม่ของ greyhound ที่ข้ามเส้นจะแสดงพร้อมด้วยการแสดงผล 3 อันดับแรก
                            <br /> • 4.4.7 หลังจากที่ได้มีการแสดงผลการแข่งขันหรือการแข่งขันแล้วจะมีการเปิดการแข่งขันหรือการแข่งขันครั้งต่อไป ผลของการแข่งขันแต่ละครั้งหรือเหตุการณ์จะปรากฏในเว็บไซต์เป็นระยะ
                            ๆ
                            <br /> • 4.5 เทนนิสเสมือนจริง
                            <br /> • 4.5.1. เทนนิสเสมือนหมายถึงการเดิมพันผลของการสุ่มหมายเลขที่สร้างการแข่งขันเทนนิส
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


VirtualTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(VirtualTh))));