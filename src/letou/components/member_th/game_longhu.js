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

export class GameLongHuTh extends React.Component {
    
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
                                <a href="/th/for_member">กฎของคาสิโนสด>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p>มังกร เสือเป็นหนึ่งในเกมโป๊กเกอร์ วัตถุประสงค์ของเกมคือให้แบงค์เกอร์เทียบคะแนนบนการ์ดมังกร และ เสือ วาดบัตรสำหรับมังกรและเสือเพื่อแข่งขันกันจากแต้มบนไพ่.
                            <br/> การเริ่มเกมส์เดิมพัน เลือกจำนวนเงินที่คุณต้องการเดิมพันและลากไปที่ส่วน 'Dragon' 'Tiger' หรือ 'Tie' ของตารางเกม การนับถอยหลังสิ้นสุด
                            ดีลเลอร์แจกไพ่สองใบ ไพ่สองใบจะได้รับการแจกไพ่หน้าหนึ่งมังกรก่อนจากนั้นจะเป็นเสือ ฝั่งใดมีแต้มสูงกว่าจะเป็นผู้ชนะผลลัพธ์</p>
                        <p>หน้าจอสว่างไสวด้วยไฟซึ่งช่วยให้มองเห็นได้ชัดเจนเกี่ยวกับการชนะเดิมพันและอัตราเดิมพันที่สูญเสีย กำหนดโดยการพนันของผู้เล่น
                            <br/> กฎของเกมส์ 1. คิงเป็นจุดสูงสุดและ A เป็นจุดต่ำสุด 2. เมื่อการ์ดกำลังถูกจัดการโดยดีลเลอร์ระบบอาจหรือไม่สามารถอ่านบัตรได้หากระบบไม่สามารถอ่านบัตรได้ตัวแทนจำหน่ายจะสแกนบัตรอีกครั้งจนกว่าระบบจะอ่านบัตร
                            (ถ้าระบบอยู่ ยังไม่สามารถอ่านบัตรได้รอบปัจจุบันจะถูกยกเลิกและการเดิมพันทั้งหมดจะถูกส่งกลับ)</p>
                        <div class="MarginBottom20 tableFontStyle">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="Title">&nbsp;</td>
                                        <td class="Title">B/O</td>
                                        <td class="Title">S/O</td>
                                        <td class="Title">B/E</td>
                                        <td class="Title">S/E</td>
                                        <td class="Title">มูลค่ารวม 810</td>
                                    </tr>
                                    <tr>
                                        <td>Odds</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>3.7</td>
                                        <td>คืนเงิน</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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


GameLongHuTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameLongHuTh))));