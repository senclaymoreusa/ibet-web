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

export class BetRuleTwoTh extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          hide: true,
          current: 1
        }
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    onClick(index) {
        this.setState({
          hide: false,
          current: index
          
        })
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>กฎทั่วไป</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>ตัวเลือกเดิมพันหลายรายการ</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                        <h2>กฎทั่วไป</h2>
                            <p>ตรงไปตรงมา
                                <br /> หมายถึงการเดิมพันผู้ชนะการแข่งขันการแข่งขันหรือการแข่งขัน ตัวอย่างเช่นฟุตบอลลีกหรือแชมป์ F1 Gamble ในชื่อระบุรายละเอียด
                                หากนักกีฬา / ผู้เล่นไม่ได้เริ่มต้นการแข่งขันการแข่งขันหรือการแข่งขันการวางเดิมพันทั้งหมดทันทีที่ผู้แข่งขัน / ผู้เล่นรายนั้นจะเป็นโมฆะเว้นแต่จะระบุไว้เป็นอย่างอื่นในกฏการเดิมพันกีฬาที่เฉพาะเจาะจง
                                คำว่า "ผู้เล่นอื่นใด" (ทีมอื่น ๆ ฯลฯ ) หมายถึงคู่แข่งทั้งหมดที่ไม่ได้ตั้งชื่อในตลาด</p>
                            <p>
                                <br /> 3 วิธี
                                <br /> 1X2 (3way), เดิมพันที่ทีมชนะ
                                <br /> - 1: ถ้าทีมบ้านชนะตัวเลือกนี้จะชนะ
                                <br /> - X: ถ้าสองทีมผูกตัวเลือกนี้จะชนะ
                                <br /> - 2: ถ้าทีมเยือนชนะชนะตัวเลือกนี้
                                <br /> หากการแข่งขันถูกเล่นในสถานที่ที่เป็นกลางทีมแรกที่ถือว่าเป็นทีมแรกในการเดิมพัน
                            </p>
                            <p>
                                <br /> 2 วิธี
                                <br /> 2 วิธีหมายถึงการเดิมพันว่าทีมใดชนะ (ไม่ผูก)</p>
                            <p>
                                <br /> Handicap (HDP)
                                <br /> แฮนดิแค็ปหมายถึงการเดิมพันเมื่อผู้แข่งขันหรือทีมคนหนึ่งได้รับการเริ่มต้นของหัวอย่างแท้จริง (มีประสิทธิภาพในการเริ่มต้นของหัวนั้นก่อนที่เหตุการณ์จะเริ่มขึ้น)
                                ผู้ชนะคือผู้แข่งขันหรือทีมที่มีคะแนนที่ดีขึ้นหลังจากเพิ่มแต้มต่อที่กำหนดให้กับผลการแข่งขัน กฎแฮนดิแค็ปที่เหลืออยู่ในกฎการเดิมพันเฉพาะเจาะจง</p>
                            <p>
                                <br /> European Handicap
                                <br /> การเดิมพันจะตัดสินตามคะแนนการปรับแต้มต่อแต้มต่อของเกมที่กำหนดโดยอัตราต่อรอง
                            </p>
                            <p>
                                <br /> เว่อร์ / อันเดอร์
                                <br /> การเดิมพันสูง / ต่ำหมายถึงการเดิมพันที่กำหนดโดยจำนวนคะแนนทั้งหมด (เป้าหมายเกมเป็นต้น) ในผลการแข่งขันที่ผ่านมา หากผลรวมเกินกว่าเส้นสูงกว่า
                                / ต่ำกว่าเส้นที่กำหนดไว้แล้วผลที่ชนะจะจบลง หากผลรวมต่ำกว่าเส้นแบ่งช่วงการเล่นเกิน / ใต้เส้นที่กำหนดไว้ล่วงหน้าผลชนะจะอยู่ภายใต้</p>
                            <p>
                                <br /> โกล์ทั้งหมดสกอร์ / คู่, โกล์ทั้งหมดโ / ไม่ - ครึ่งเวลา
                                <br /> จำนวนรวมของการเล่นที่ผิดปกติและแม้กระทั่งจะถูกกำหนดโดยการแข่งขันทีมสุดท้ายผลรวมคะแนนรวม (จำนวนประตูคะแนน ฯลฯ ) เพื่อกำหนดเดิมพัน
                                <br /> แปลกและแม้กระทั่งหมายถึงการเดิมพันผลการแข่งขันในช่วงครึ่งแรกจากคะแนนการแข่งขันครึ่งแรกที่จะตัดสิน หากการแข่งขันถูกยกเลิกในช่วงครึ่งแรกการเดิมพันทั้งหมดจะถือเป็นโมฆะ
                                หากการแข่งขันถูกยกเลิกในช่วงครึ่งหลังการเดิมพันครึ่งแรกทั้งหมดจะสมบูรณ์
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                        <h2>ตัวเลือกเดิมพันหลายรายการ</h2>
                            <p>ผู้เล่นสามารถเลือกพื้นที่การเดิมพันได้คือ Parlay ราคาต่อคูณ คุณไม่สามารถจับคู่การแข่งขันเดียวกันหรือผู้ชนะทันที</p>
                            <div className="MarginBottom20 tableFontStyle">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="Title">Win1</td>
                                                <td class="Title">Win2</td>
                                                <td class="Title">Win3</td>
                                                <td class="Title">Win4</td>
                                                <td class="Title">Win5</td>
                                                <td class="Title">Win6</td>
                                                <td class="Title">Win7</td>
                                                <td class="Title">Win8</td>
                                                <td class="Title">Win9</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>2x1</td>
                                                <td>3x1</td>
                                                <td>4x1</td>
                                                <td>5x1</td>
                                                <td>6x1</td>
                                                <td>7x1</td>
                                                <td>8x1</td>
                                                <td>9x1</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>
                                                    <br /> 3x3
                                                </td>
                                                <td>
                                                    <br /> 4x4
                                                </td>
                                                <td>
                                                    <br /> 5x5
                                                </td>
                                                <td>
                                                    <br /> 6x6
                                                </td>
                                                <td>
                                                    <br /> 7x7
                                                </td>
                                                <td>
                                                    <br /> 8x8
                                                </td>
                                                <td>
                                                    <br /> 9x9
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>
                                                    <br /> 3x4
                                                </td>
                                                <td>
                                                    <br /> 4x6
                                                </td>
                                                <td>
                                                    <br /> 5x10
                                                </td>
                                                <td>
                                                    <br /> 6x15
                                                </td>
                                                <td>
                                                    <br /> 7x21
                                                </td>
                                                <td>
                                                    <br /> 8x28
                                                </td>
                                                <td>
                                                    <br /> 9x36
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>
                                                    <br /> 4x5
                                                </td>
                                                <td>
                                                    <br /> 5x6
                                                </td>
                                                <td>
                                                    <br /> 6x7
                                                </td>
                                                <td>
                                                    <br /> 7x8
                                                </td>
                                                <td>
                                                    <br /> 8x9
                                                </td>
                                                <td>
                                                    <br /> 9x10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>
                                                    <br /> 4x11
                                                </td>
                                                <td>
                                                    <br /> 5x16
                                                </td>
                                                <td>
                                                    <br /> 6x22
                                                </td>
                                                <td>
                                                    <br /> 7x29
                                                </td>
                                                <td>
                                                    <br /> 8x37
                                                </td>
                                                <td>
                                                    <br /> 9x46
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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


BetRuleTwoTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRuleTwoTh))));