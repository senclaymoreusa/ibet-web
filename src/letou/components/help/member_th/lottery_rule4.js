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

export class LotteryRuleFourTh extends React.Component {
    
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
                                <a href="/th/for_member">กติกาการเดิมพันล็อตเตอรี >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>รถปักกิ่ง PK10</h2>
                        <p>
                            <br /> การจัดอันดับ
                            <br /> 1.การจัดอันดับ : เดิมพันโดยเลือกหมายเลขของรถแข่งและอันดับการเข้าเส้นชัย การเดิมพันจะถือว่าเป็นผลชนะ ถ้าเลือกเดิมพันได้ถูกต้อง
                            <br
                            /> ยกตัวอย่างเช่น. เดิมพันให้รถหมายเลข 9 เข้าเส้นชัยเป็นอันดับที่ 3 เมื่อผลการแข่งขันออกมาว่าอันดับ 3 คือรถหมายเลข 9 ถือว่าการเดิมพันชนะ</p>
                        <p>สูง/ต่ำ/คี่/คู่ : เลือกอันดับที่ต้องการเดิมพันและเลือกหมายเลขของรถตามแบบ สูง (หมายเลข 6,7,8,9,10), ต่ำ (หมายเลข1,2,3,4,5),
                            คี่ (หมายเลข 1,3,5,7,9), หรือ คู่ (หมายเลข 2,4,6,8,10) เมื่อผลการแข่งขันตรงกับการเดิมพัน ถือว่าชนะ
                            <br /> ยกตัวอย่างเช่น.เดิมพันรถอับดับหนึ่ง และเลือกเดิมพันหมายเลขแบบต่ำ ผลการแข่งขันออกมาว่า รถหมายเลข 5 เป็นรถเข้าเส้นชัยอันดับหนึ่ง
                            เพราะฉะนั้นการเดิมพันถือว่าชนะ หรือหากเดิมพันแบบหมายเลขคี่ ก็ถือว่าชนะเหมือนกัน</p>
                        <p>2.ผลรวมของหมายเลขรถอันดับหนึ่งและอันดับสอง
                            <br /> ผลรวมของหมายเลขรถอันดับหนึ่งและสอง เริ่มจาก 3 ถึง 19. ถ้าผู้เล่นเดิมพันหมายเลขได้ถูกต้อง ถือว่าการเดิมพันเป็นผลชนะ
                            <br
                            /> ยกตัวอย่างเช่น. เดิมพันว่าผลรวมของหมายเลขรถที่เป็นอันดับหนึ่งและอันดับสอง คือ 13 เมื่อผลการแข่งขันออกมาว่ารถหมายเลข
                            5 เป็นผู้ชนะอันดับหนึ่ง และรถหมายเลข 8 เข้าอันดับ 2 รวมแล้วผลหมายเลขคือ 13 เพราะฉะนั้นการเดิมพันถือว่ามีผลชนะ</p>
                        <p>เลือกผลรวมเป็นกลุ่ม : มี 4 แบบให้เลือกเดิมพัน คือ แบบที่ 1 (ผลรวม 3,4,18,19), แบบที่ 2 (ผลรวม 5,6,16,17), แบบที่ 3 (ผลรวม
                            7,8,14,15), แบบที่ 4 (ผลรวม 9,10,12,13) ถ้าผลการแข่งขันออกมาตรงกับการเดิมพัน ถือว่าชนะ</p>
                        <p>ยกตัวอย่างเช่น. เมื่อรถหมายเลข 5 เป็นผุ้ชนะอันดับหนึ่ง และรถหมายเลข 8 คืออันดับสอง ถ้าหากเลือกเดิมพันแบบที่ 4 ซึ่งมีหมายเลข
                            (9,10,12,13) ถือว่าการเดิมพันมีผลชนะ</p>
                        <p>3.ผลรวมใหญ่/เล็ก
                            <br /> เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่ามากกว่า 11 ถือว่าเปนใหญ่ ผู้ที่เดิมพัน [ผลรวมใหญ่] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าน้อยกว่า 11 ถือว่าเป็นเล็ก ผู้ที่เดิมพัน [ผลรวมเล็ก] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าเท่ากับ 11 ถือว่าเป็นเสมอ [ไม่มีผลชนะ]&nbsp;</p>
                        <p>4.ผลรวมคู่/คี่
                            <br /> เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่ามากกว่า 11 ถือว่าเป็นใหญ่ผู้ที่เดิมพัน [ผลรวมใหญ่] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าน้อยกว่า 11 ถือว่าเป็นเล็ก ผู้ที่เดิมพัน [ผลรวมเล็ก] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าเท่ากับ 11 ถือว่าเป็นเสมอ [ไม่มีผลชนะ]&nbsp;</p>
                        <p>5.ผลรวมคู่คี่
                            <br /> เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าเป็น 9 13 ผู้ที่เดิมพัน [ผลรวมคี่] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าเป็น12 16 ผู้ที่เดิมพัน [ผลรวมคู่] ชนะ</p>
                        <p>เมื่อผลรวมเลขที่ออกของแชมป์และรองแชมป์มีค่าเท่ากับ 11 ถือว่าเป็นเสมอ [ไม่มีผลชนะ]</p>
                        <p>Dragon/Tiger
                            <br /> 1st place of Dragon / Tiger
                            <br /> Dragon: เมื่อหมายเลขของรถอันดับ 1 มากกว่าหมายเลขของรถอันดับ 10, ถ้าเลือกเดิมพันแบบ “1st Dragon” ถือว่าชนะ</p>
                        <p>Tiger: เมื่อหมายเลขของรถอันดับ 1 น้อยกว่าหมายเลขของรถอันดัน 10, ถ้าเลือกเดิมพันแบบ “1st Tiger” ถือว่าชนะ</p>
                        <p>2nd place of Dragon / Tiger
                            <br /> Dragon: เมื่อหมายเลขของรถอันดับ 2 มากกว่าหมายเลขของรถอันดับ 9, ถ้าเลือกเดิมพันแบบ “2nd Dragon” ถือว่าชนะ</p>
                        <p>Tiger: เมื่อหมายเลขของรถอันดับ 2 น้อยกว่าหมายเลขของรถอันดัน 9, ถ้าเลือกเดิมพันแบบ “2nd Tiger” ถือว่าชนะ</p>
                        <p>3rd place of Dragon / Tiger
                            <br /> Dragon: เมื่อหมายเลขของรถอันดับ 3 มากกว่าหมายเลขของรถอันดับ 8, ถ้าเลือกเดิมพันแบบ “3rd Dragon” ถือว่าชนะ</p>
                        <p>Tiger: เมื่อหมายเลขของรถอันดับ 3 น้อยกว่าหมายเลขของรถอันดัน 8, ถ้าเลือกเดิมพันแบบ “3rd Tiger” ถือว่าชนะ</p>
                        <p>4th place of Dragon / Tiger
                            <br /> Dragon: เมื่อหมายเลขของรถอันดับ 4 มากกว่าหมายเลขของรถอันดับ 7, ถ้าเลือกเดิมพันแบบ “4th Dragon” ถือว่าชนะ</p>
                        <p>Tiger: เมื่อหมายเลขของรถอันดับ 4 น้อยกว่าหมายเลขของรถอันดัน 7, ถ้าเลือกเดิมพันแบบ “4th Tiger” ถือว่าชนะ</p>
                        <p>5th place of Dragon / Tiger
                            <br /> Dragon: เมื่อหมายเลขของรถอันดับ 5 มากกว่าหมายเลขของรถอันดับ 6, ถ้าเลือกเดิมพันแบบ “5th Dragon” ถือว่าชนะ</p>
                        <p>Tiger: เมื่อหมายเลขของรถอันดับ 5 น้อยกว่าหมายเลขของรถอันดัน 6, ถ้าเลือกเดิมพันแบบ “5th Tiger” ถือว่าชนะ</p>
                        <p>3+ Dragons: เมื่อหมายเลขของ Dragon มีค่ามากกว่าหมายเลขของ Tiger</p>
                        <p>3+ Tigers: เมื่อหมายเลขของ Tiger มีค่ามากกว่าหมายเลขของ Dragon</p>
                        <p>5 Dragons: เมื่อมี 5 Dragons และ 0 Tiger</p>
                        <p>5 Tigers: เมื่อมี 0 Dragon และ 5 Tigers</p>
                        <p>
                            <br /> EX.
                        </p>
                        <p>ยกตัวอย่างเช่น. เลือกเดิมพันแบบ 5th Dragon เมื่อผลออกการแข่งขันออกมาว่า รถอันดับที่ 5 คือรถหมายเลข 8 และรถอันดับที่ 6 คือรถหมายเลข
                            5 เพราะฉะนั้น เลข 8 มีค่ามากกว่า เลข 5 ถือว่าการเดิมพันชนะ</p>
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


LotteryRuleFourTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleFourTh))));