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

export class GameGubao extends React.Component {
    
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
                                <a href="/for_member">กฎของคาสิโนสด >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <p>1. ไฮโล
                            <br/> ไฮโลเรียกอีกอย่างว่า การเดิมพันใหญ่เล็ก ผู้เล่นแต่ละคนเลือกเดิมพันเพื่อวางเดิมพันและคาดเดาคะแนนรวมที่แสดงโดยลูกเต๋าหลังจากถูกเขย่าโดยเครื่อง
                            <br/> การเริ่มเกมใหม่ เมื่อเริ่มเกมใหม่คุณสามารถเลือกชิปเพื่อวางเดิมพันได้ตามการคาดเดาของคุณ สิ้นสุดการเดิมพัน ขั้นตอนการเดิมพันจะสิ้นสุดลงหลังจากที่การนับถอยหลังเวลาสิ้นสุดลงเจ้าหน้าที่จะเริ่มกดปุ่มหมุนลูกเต๋าโดยเครื่องอัตโนมัติผลลัพท์
                            หน้าจอสว่างไสวด้วยไฟซึ่งช่วยให้มองเห็นได้ชัดเจน เดิมพันที่ชนะและอัตราเดิมพันที่สูญเสียกำหนดโดยการพนันของผู้เล่น
                            <br/> กฏกติกา
                        </p>
                        <p>ชิพเหล่านี้วางอยู่บนกริดเดิมพันที่แตกต่างกันและคุณสามารถวางเดิมพันบนกริดใดก็ได้ในช่วงเวลาเดิมพัน</p>
                        <div className="TableStyle3 MarginBottom20">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="Title">แต้มต่ำสุด</td>
                                        <td className="Title">แต้มสูงสุด</td>
                                        <td className="Title">เดิมพันใหญ่ / เล็กผลลัพธ์คือ 810</td>
                                        <td className="Title"> % คอมมิขขั่น% </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>600</td>
                                        <td>การคืนเงิน</td>
                                        <td>5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        &nbsp;
                        <p>2. Payoff
                            <br/> ใหญ่/เล็ก อัตราการจ่าย 1 : 1 ใหญ่: แต้มรวมของแต้มต่อเป็น 11 ถึง 17, เล็ก: แต้มรวมของแต้มต่อมีตั้งแต่ 4 ถึง 10 (PS *
                            ในกรณีที่มีการออกทริปเปิ้ล เดิมพันตองแบบเจาะจง อัตราการจ่าย 1 : 150 เดิมพันสามลูกเต๋าจะเลื่อนออกไปสามรูปเหมือนกันต้องเป็นตัวเลขที่เฉพาะเจาะจง
                            (เช่นสาม 6) ตองไม่เจาะจง อัตราการจ่าย 1 : 24 เดิมพันทั้งหมด 6 ลูกในครั้งเดียว
                            <br/> One of a kind: หนึ่งลูก อัตราการจ่าย 1 : 1 เดิมพันลูกเต๋าที่ต้องออกมาจากหนึ่งลูกเต๋า (เลือกจากลูกเต๋า 1 ถึง 6) สองลูก
                            อัตราการจ่าย 1 : 2 เดิมพันลูกเต๋าที่ต้องออกมาจากสองลูกเต๋า (เลือกจากลูกเต๋า 1 ถึง 6) สามลูก อัตราการจ่าย 1 : 3 เดิมพันลูกเต๋าที่ต้องออกมาจากสามลูกเต๋า
                            (เลือกจากลูกเต๋า 1 ถึง 6) คู่ที่เฉพาะเจาะจง อัตราการจ่าย 1 : 8 เดิมพันกับลูกเต๋าเฉพาะที่ต้องออกมา Two Dice Combination
                            อัตราการจ่าย 1 : 5 วางเดิมพันบนชุดลูกเต๋าสองชุดมีการรวมกันของลูกเต๋าสองชนิดอยู่ 15 แบบในแบบตาราง.
                            <br/> Sum of Points: 4 or 17 Points Payoff 1 : 50 Total 4 Points or Total 17 Points 5 or 16 Points Payoff 1 : 18 Total 5 Points
                            or Total 16 Points 6 or 15 Points Payoff 1 : 14 Total 6 Points or Total 15 Points 7 or 14 Points Payoff 1 : 12 Total
                            7 Points or Total 14 Points 8 or 13 Points Payoff 1：8 Total 8 Points or Total 13 Points 9, 10, 11, or 12 Points Payoff
                            1 : 6 Total 9, 10, 11 or 12 Points
                            <br/> คี่/ คู่ คี่ Payoff 1 : 1 Total Dice points 5, 7, 9, 11, 13, 15, 17 ( No payoff if result is triple ) Even อัตราการจ่าย
                            1 : 1 รวมแต้มเต็ม 4, 6, 8, 10, 12, 14, 16 (ไม่มีผลตอบแทนถ้าผลเป็น 3 เท่า)
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


GameGubao.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameGubao))));