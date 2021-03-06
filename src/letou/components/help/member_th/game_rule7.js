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

export class GameRuleSevenTh extends React.Component {
    
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
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">รูเล็ต RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>Arcade Games</h2>
                        <p>1. หมายเลขพิเศษ
                            <br /> ผู้เล่นจะชนะหากหมายเลขพิเศษที่ชนะอยู่ในปัจจุบันจะเหมือนกันกับหมายเลขเดิมพัน
                            <br /> 2. หมายเลขปกติ
                            <br /> ผู้เล่นชนะหากมีความสอดคล้องกับ Ball 1 ถึง Ball 6
                            <br /> 3. เดิมพันแบบผสม:
                            <br /> 4 All Hit: ผู้เล่นจะชนะหากทั้ง 4 หมายเลขตรงกับ 6 หมายเลขที่วาด (ไม่รวม Special Ball)
                            <br /> 3 All Hit: ผู้เล่นชนะหากทั้ง 3 หมายเลขตรงกับ 6 หมายเลขที่วาด (ไม่รวมลูกพิเศษ)
                            <br /> 3 ครั้งที่ 2:
                            <br /> •ตี 2: ผู้เล่นชนะถ้า 2 หมายเลขตรงกับตัวเลขที่วาด 3 (ไม่รวมลูกบอลพิเศษ)
                            <br /> •ตี 3: ผู้เล่นชนะถ้า 3 ตัวเลขตรงกับตัวเลขที่วาด 3 (ไม่รวมลูกพิเศษ)
                            <br /> 2 All Hit: ผู้เล่นชนะถ้า 2 หมายเลขตรงกับตัวเลขที่วาด 3 (ไม่รวม Special Ball)
                            <br /> 2 hit special numbers:
                            <br /> • Hit 2: ตัวเลขเดิมพันทั้งหมดจะมีจำนวน 2 หมายเลขตามปกติ
                            <br /> •กดหมายเลขพิเศษ: หมายเลขเดิมพันทั้งหมดจะถูกกดหมายเลขพิเศษ 1 หมายเลขและหมายเลขปกติ 1 หมายเลข
                            <br /> การเล่นพิเศษ: ผู้เล่นจะชนะหากมี 6 หมายเลขที่วาดและ 1 หมายเลขพิเศษสอดคล้องกับช่วงเดิมพันสำหรับเลขที่ปกติ 1 และเลขที่พิเศษ
                            1 เลขหมาย
                            <br /> 4. จักรราศี
                            <br /> จักรราศีเป็นวิธีการเล่นที่ใช้จักรราศีของปีปัจจุบันให้สอดคล้องกับลูกที่ 1 ถึงลูก 49
                            <br /> ราศีปกติ: ผู้เล่นชนะหากหมายเลขเดิมพัน 1 ตรงกับราศีที่วาด (ไม่รวมบอลพิเศษ) หากมีจำนวนการเดิมพันมากกว่า 1 ในช่วงจักรราศีโบนัสจะเพิ่มขึ้นโดยอัตโนมัติ
                            <br
                            /> นักษัตรพิเศษ: ผู้เล่นจะชนะหากตัวเลขที่ได้สำหรับตำแหน่งที่เลือกโดยเฉพาะของลูกตรงกับตัวเลขใด ๆ ที่แสดงโดยเครื่องหมายราศีที่เลือก
                            <br
                            /> หนึ่งราศี: สมาชิกจะเป็นผู้ชนะหากตัวเลขที่แสดงภายใต้เครื่องหมายราศีนี้จะปรากฏเป็นผลจากตำแหน่งลูกใด ๆ จากลูกที่ 1 ถึงลูกที่
                            6 ซึ่งไม่รวมถึงบอลพิเศษ
                            <br /> 5. Combo ราศีจีน
                            <br /> คอมโบราศีจีน: เลือกสัตว์มากกว่าหนึ่งชนิดสำหรับการเดิมพันแบบกลุ่ม ผู้เล่นชนะเมื่อ zodiacs จากเจ็ดผลตัวเลขสอดคล้องกับการเลือกราศี
                            Combo ไม่ว่าจะมีจำนวนเท่าไหร่จะมาจากราศีเดียวกันรางวัลจะได้รับการพิจารณาเพียงครั้งเดียวเท่านั้น
                            <br /> Two Zodiac Combo: ผู้เล่นจะชนะเมื่อสอง Zodiacs ที่เลือกตรงกับสอง zodiacs จากเจ็ดตัวเลขที่เกิดขึ้น
                            <br /> Three Zodiac Combo: ผู้เล่นชนะเมื่อสาม Zodiacs ที่เลือกตรงกับสาม zodiacs จากเจ็ดผลตัวเลข
                            <br /> Four Zodiac Combo: ผู้เล่นชนะเมื่อสี่ Zodiacs ที่เลือกตรงกับสี่ zodiacs จากเจ็ดหมายเลขที่เกิดขึ้น
                            <br /> Five Zodiac Combo: ผู้เล่นชนะเมื่อห้า Zodiacs ที่เลือกตรงกับห้า zodiacs จากเจ็ดตัวเลขที่เกิดขึ้น
                            <br /> 6. สองด้าน
                            <br /> สองด้านเป็นคำทั่วไปสำหรับใหญ่ / เล็ก / แปลก / แม้แต่
                            <br /> ใหญ่ / เล็ก: ถ้าตัวเลขที่วาดไว้เท่ากับหรือมากกว่า 25 ก็ใหญ่ "" "เท่ากับหรือน้อยกว่า 24" "เล็ก ๆ " "ถ้าตัวเลขที่วาดไว้คือ
                            49 จะเป็น" " ผูก.""
                            <br /> คี่ / คู่: ผลลัพธ์จะพิจารณาจากจำนวนที่เป็นเลขคี่หรือคู่ ถ้าตัวเลขที่วาดไว้คือ 49 จะเป็นเน็คไท "" เสมอ "
                            <br /> ตัวเลขเดี่ยวตัวเลขใหญ่ / เล็ก: ถ้าเลขหลักเดียวมีค่าเท่ากับหรือมากกว่า 5 ตัวจะเป็น "" หลักเดียว ""; ถ้าตัวเลขหนึ่งหลักมีค่าเท่ากับหรือน้อยกว่า
                            4 จะเป็นตัวเลขเล็ก ๆ ตัวเดียว "" ถ้าตัวเลขที่วาดไว้คือ 49 จะเป็นเน็คไท "" "
                            <br /> ราศีใหญ่ / เล็ก: จะเป็นราศีขนาดใหญ่ถ้าตัวเลขที่วาดเป็นม้าแพะลิงไก่หรือหมู มันจะเป็นราศีเล็ก ๆ ถ้าตัวเลขที่วาดเป็นหนู,
                            วัว, กระต่าย, มังกรหรืองู ถ้าตัวเลขที่วาดไว้คือ 49 จะเป็นเน็คไท "" เสมอ "
                            <br /> รวมใหญ่ / เล็ก: ผู้เล่นวางเดิมพันตามผลรวมของตัวเลขที่วาดไว้ 'หลักสิบและหลักเดียว ถ้าผลรวมมีค่าเท่ากับหรือมากกว่า 7 จะรวมเป็นขนาดใหญ่
                            "" ถ้าผลรวมมีค่าเท่ากับหรือน้อยกว่า 6 จะเป็นขนาดรวม ถ้าหมายเลขที่วาดไว้คือ 49 ก็จะเป็นเน็คไท "" "
                            <br /> รวม Odd / Even: ผู้เล่นวางเดิมพันตามผลรวมของตัวเลขที่วาดไว้ 'หลักสิบและหลักเดียว ถ้าผลรวมเป็นจำนวนคู่ก็จะรวมกัน; ถ้าผลรวมเป็นเลขคี่มันจะเป็นจำนวนคี่
                            ถ้าตัวเลขที่วาดไว้คือ 49 จะเป็นเน็คไท "" เสมอ "
                            <br /> ผลรวมของผลลัพธ์ขนาดใหญ่ / เล็ก: ผลขึ้นอยู่กับผลรวมของตัวเลขที่วาด 7 ฉบับปัจจุบันซึ่งรวมถึงตัวเลขปกติ 6 ตัวและเลขที่พิเศษ
                            1 ชุดเพื่อระบุว่าเป็นผลรวมขนาดใหญ่ / เล็กหรือไม่ ถ้าผลรวมมีค่าเท่ากับหรือมากกว่า 175 จะเป็นผลรวม ถ้าผลรวมมีค่าเท่ากับหรือน้อยกว่า
                            174 ผลลัพธ์ก็คือผลรวมเล็ก ๆ
                            <br /> ผลรวมคำนวณจากผลรวมของ 7 จำนวนที่วาดโดยรวม 6 หมายเลขตามปกติและ 1 หมายเลขพิเศษเพื่อระบุว่าเป็นผลรวมของผลคี่ / คู่ ถ้าผลรวมเป็นจำนวนคู่ก็จะเป็นผลรวม;
                            ถ้าผลรวมเป็นเลขคี่มันจะเป็นผลลัพธ์ของคี่7. Tens / Single Digit
                            <br /> หลักสิบ: ผู้เล่นวางเดิมพันเป็นตัวเลขหลักสิบของลูกที่มีเลขเฉพาะใด ๆ ตัวเลขหลักสิบอาจเป็น 0, 1, 2, 3 หรือ 4
                            <br /> ตัวเลขเดี่ยว: ตัวเลขหลักเดียวอาจเป็นตัวเลขตั้งแต่ 0 ถึง 9
                            <br /> หลักสิบของหมายเลขพิเศษ: ผู้เล่นจะชนะหากเดิมพันของตนในจำนวนหลักสิบของหมายเลขพิเศษสอดคล้องกับตัวเลขหลักสิบที่ดึงมา
                            <br
                            /> ตัวเลขเดี่ยวของจำนวนพิเศษ: ผู้เล่นจะชนะหากเดิมพันของตนบนเลขหลักเดียวของหมายเลขพิเศษจะสอดคล้องกับตัวเลขหลักที่มีหมายเลขเดียว
                            <br
                            /> หมายเลขเดียวของจำนวนปกติ / พิเศษ: ผู้เล่นจะชนะหากเดิมพันของตัวเองที่เลขหลักเดียวของตัวเลขใด ๆ ซึ่งรวมถึงตัวเลขปกติและหมายเลขพิเศษสอดคล้องกับหมายเลขเดียวของหมายเลขที่ดึงมา
                            <br
                            /> 8. คะแนน:
                            <br /> ผู้เล่นคาดการณ์ผลรวมของลูกโดยเฉพาะและลูกปกติในตำแหน่งใด ๆ และถ้าจำนวนที่เป็นผลลัพธ์ตรงกับช่วงใด ผลรวมจะแบ่งออกเป็น 6
                            ช่วงตั้งแต่ 28 คะแนนจนถึง 322
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


GameRuleSevenTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleSevenTh))));