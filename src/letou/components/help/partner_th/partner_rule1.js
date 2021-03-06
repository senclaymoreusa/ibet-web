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

export class MemberRuleOneTh extends React.Component {
    
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
                                    <li>
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li className="Active">
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>โปรแกรมพันธมิตรของ LETOU international คืออะไร ?</h2>
                        &nbsp;
                        <p>ยินดีต้อนรับทุกท่าน ที่อยากจะเข้าร่วมเป็นพันธมิตรกับ LETOU international</p>
                        <p>LETOU มีความยินดีที่จะนำเสนอแพลดฟอร์มความบันเทิงยอดนิยมในเอเชีย ซึ่งการเล่นในรูปแบบต่างๆและทุกๆเกมนั้น ถูกปรับมาให้เหมาะสมกับผู้เล่นชาวเอเชียทุกท่าน</p>
                        <p>เราให้บริการแพลตฟอร์มที่มีคุณภาพ,บริหารงานแบบมืออาชีพและให้บริการแบบครงวงจรตลอด 24 ชั่วโมง, ตลอดเวลาที่ท่านแนะนำผู้เล่นให้เข้ามาเล่นที่
                            <a href="https://affiliates.letou.com/th/">www.letou.com</a>&nbsp; ท่านจะไม่มีความเสี่ยงและค่าธรรมเนียมใดๆทั้งนั้นสำหรับการรับค่าคอมมิชชั่น</p>
                        <p>LETOU international มีความมั่นคงทางการเงิน และระบบการบริหารจัดการพันธมิตรที่ปลอดภัยแม่นยำ เพื่อปกป้องและดูแลสิทธิผลประโยชน์ให้กับพันธมิตรของเรา
                            เพื่อให้ไปถึงเป้าหมายร่วมกัน, บริษัทของเรายินดีต้อนรับทุกท่านที่สนใจเข้าร่วมเป็นพันธมิตร ซึ่งจะมีทีมงานช่วยช่วยเหลือดูแลการจัดการะตรวจสอบการพนันที่ไม่เหมาะสม
                            ซึ่งจะเป็นถือเป็นการตัดสินที่สิ้นสุด
                            <br/> &nbsp;
                        </p>
                        <h1>
                            <br/>
                            <strong>*** การคำนวณค่าคอมมิชชั่นโปร่งใสที่สุด ไม่มีค่าใช้จ่ายแอบแฝง ***
                                <br/>
                                <br/> *** ได้รับคอมมิชชั่นสูงสุด ถึง 50% ***</strong>
                            <br/>
                            <br/> &nbsp;
                        </h1>
                        <p>
                            <br/>
                            <a href="https://affiliates.letou.com/th/login">
                                <img alt="" src="https://i.imgur.com/Xtb0aiw.png" />
                            </a>
                            <br/>
                            <br/>
                            <strong>คอมมิชชั่นคำนวณจากอะไรบ้าง:</strong>
                            <br/> สำหรับการเล่นทั้งหมดของ: กีฬา, คาสิโนสด, เกมและโป้กเกอร์ เป็นต้น</p>
                        <p>ขอแจ้งให้ทราบว่า ทางเราขอสงวนสิทธิ์ในการตัดสินใจขั้นสุดท้าย สำหรับสมาชิกที่ใช้วิธีการใดๆที่ไม่สุจริตในการรับค่าคอมมิชชั่น,
                            บัญชีของสมาชิกนั้นๆจะถูกระงับถาวรและจะไม่มีการชดเชยใดๆสำหรับค่าคอมมิชชั่น, ความซื่อตรงและโปร่งใสเป็นหัวใจสำคัญของการพัฒนาไปให้ถึงเป้าหมายสุงสุดร่วมกัน,
                            * และตัวแทนจะต้องไม่ไปกำหนดการวสงเดิมพันของดาวไลน์ มิฉะนั้นจะถูกตัดสิทธิ์และงดจ่ายค่าคอมมิชชั่น
                            <br/>
                            <br/>
                            <strong>รายละเอียดแผนงานและการคำนวณค่าคอมมิชชั่นจากพันธมิตรย่อย:</strong>
                            <br/> เมื่อเป็นพันธมิตรกับ LETOU แล้ว ท่านจะได้รับค่าคอมมิชชั่นเพิ่มอีก 10% สำหรับพันธมิตรย่อย, ยิ่งแนะนำคนให้มาเป็นพันธมิตรมากเท่าไหร่
                            โอกาสในการทำเงินยิ่งมากขึ้นเท่านั้น! โปรดรายละเอียดข้อมูลด้านล่างนี้:</p>
                        <p>สมมุติว่าคุณเป็นตัวแทนตรง A จาก LETOU และพันธมิตรย่อยลำดับถัดคือ B และ C คือพันธมิตรย่อยต่อลงไปจาก B คุณจะได้รับค่าคอมมิสชั่นเพิ่ม
                            10% จากรายได้สุทธิพันธมิตรย่อยของคุณ โดยเครือข่ายพันธมิตรจากการเชิญเพื่อนของคุณเข้าร่วมเป็นส่วนหนึ่งกับ LETOU ยิ่งพันธมิตรในเครือของคุณมากขึ้นเท่าไหร่รายได้ของคุณก็จะเพิ่มสูงมากขึ้น
                            ดังนั้นเพิ่มสายงานพันธมิตรของคุณในวันนี้ และสร้างรายได้จากค่าคอมมิชชั่นแบบไม่มีที่สิ้นสุด</p>
                        <p>
                            <bold>
                                <strong>ตัวอย่างการคำนวณ:</strong>
                            </bold>
                            <br/> ​ค่าคอมมิชชั่นทั้งหมด: ค่าคอมมิชชั่นโดยตรง + 10%ของค่าคอมมิชชั่นของพันธมิตรย่อยชั้นแรก +10%*10%ของค่าคอมมิชชั่นของพันธมิตรย่อยชั้นสอง+10%*10**10%ของค่าคอมมิชชั่นของพันธมิตรย่อยชั้นสาม</p>
                        <p>
                            <img alt="" src="https://i.imgur.com/C6UFUqk.png" style={{width: 800 + 'px', height: 517 + 'px'}} />
                            <br/> &nbsp;
                        </p>
                        <p>
                            <strong>รายละเอียดการจ่ายค่าคอมมิชชั่น:</strong>
                            <br/> 1. เฉพาะเมื่อค่าคอมมิชชั่นของพันธมิตรเป็นบวก, มีสมาชิกที่เล่นอยู่ตั้งแต่ 6 คนขึ้นไป, เมื่อค่าคอมมิชชั่นของพันธมิตรย่อยเป็นติดลบ
                            การคำนวณค่าคอมมิชชั่นจะยังไม่เริ่มต้น และจะค่าติดลบทั้งหมดจะถูกคิดสะสมไว้ (ไม่เกี่ยวข้องกับจำนวนสมาชิก)
                            <br/> 2. คำนวณคอมมิชชั่นเมื่อพันธมิตรย่อยมีการเริ่มดำเนินการอย่างเป็นทางการ จนถึงวันสุดท้ายของเดือน, จากนั้นถึงจะมีการคำนวณค่าคอมมิชชั่น
                            <br/> 3. ทุกวันที่ 5-9 ของเดือน ระบบจะคำนวณค่าคอมมิชชั่นของเดือนก่อนหน้า, วันที่10-19 สำหรับการตรวจสอบ, วันที่ 20 สำหรับการถอนเงินค่าคอมมิชชั่น
                            (ตัวอย่าง: คอมมิชชั่นของเดือนมกราคม จะถูกสรุปภายในวันที่ 5 กุมภาพันธ์ และมีการตรวจสอบอีกครั้งระหว่างวันที่ 6-19 กุมภาพันธ์,
                            และสามารถถอนเงินได้วันที่ 20 กุมภาพันธ์)
                            <br/> 4. พันธมิตรสามารถยื่นขอเบิกเงินได้ตามยอดที่แสดงในบัญชี วงเงินในการเบิกถอนขั้นต่ำต้อง 500 บาทขึ้นไป ถ้ามีเงินในบัญชีน้อยกว่า
                            500 บาท จะต้องสะสมให้ครบตามจำนวนที่กำหนดก่อน ถึงจะสามารถเบิกถอนได้
                            <br/> 5. กำไรสุทธิ = (85%ของยอดแพ้-ชนะ) － โบนัสของระบบ － โบนัสอื่นๆ － ค่าธรรมเนียมการฝากถอน *1.5%
                            <br/>
                            <strong>คอมมิชชั่น = กำไรสุทธิ *&nbsp; อัตราค่าคอมมิชชั่น</strong>
                            <br/> หากคอมมิชชั่นเป็นลบ จะไม่สามารถเบิกถอนเงินได้และจะถูกคิดสะสมไว้ จนกว่าค่าสะสมของคอมมิชชั่นจะเป็นบวก จึงจะถูกปลดล้อคและแจ้งเบิกถอนตามปกติได้
                            <br/> 6. นอกจากพันธมิตรต้องมีจำนวนสมาชิกขั้นต่ำตามกำหนดแล้วนั้น ต้องผ่านขั้นตอนการตรวจสอบตามมาตรฐาน (เกณฑ์การฝากเงิน, การวางเดิมพัน,การเล่นที่สม่ำเสมอ)ซึ่งหากไม่ผ่านการประเมินนั้น
                            ทาง LETOU มีสิทธิ์ในการไม่ออกค่าคอมมิชชั่นให้
                            <br/> 7. เมื่อมีการเลื่อนขั้นเป็นพันธมิตรขั้นสูงแล้ว ต้องรักษาผลประกอบการณ์ขั้นต่ำเป็นเวลา 3 เดือน, หากไม่ผ่านจะถูกลดระดับลงไปเป็นพันธมิตรปกติ
                            <br/> 8. พันธมิตรขั้นสูงจะถูกยืดเวลาการรับคอมมิชชั่นของ 3 เดือนออกไป หากไม่สามารถทำยอดได้ตามกำหนดภายใน 3 เดือน
                            <br/> 9.&nbsp; พันธมิตรนั้นจะต้องดำเนินการตามที่บริษัทกำหนดอย่างเคร่งคัด หากบริษัทพบว่า พันธมิตรมีการใช้งานผิดตามข้อตกลง หรือมีการควบคุมการวางเดิมพันของสมาชิกใดๆ
                            ทางบริษัทมีสิทธิ์ระงับการใช้งานโดยทันที และสงวนสิทธิ์ในการเบิกถอนค่าคอมมิชชั่น
                            <br/> a. ลงทะเบียนสมาชิกปลอม เพื่อเพิ่มจำนวนผู้ใช้งาน
                            <br/> b. ควบคุมการวางเดิมพัน
                            <br/> c. ควบคุมสมัครสมาชิกที่สมัครไว้
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


MemberRuleOneTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleOneTh))));