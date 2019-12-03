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

export class LunpanTh extends React.Component {
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
                                <a href="/th/for_member">สำหรับคู่ค้า >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>บริการแก่สมาชิกใช้</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>กฎของคาสิโนสด</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>รูเล็ตเอเชีย</h2>
                            <p>- กฎของ ยุโรเปี้ยนรูเล็ตสามารถนำไปใช้กับเอเชียนรูเล็ตได้ โดยเป้าหมายของเกมคือการทำนายที่ลูกบอลว่าจะตกอยู่ที่ไหนบนวงล้อรูเล็ต
                                ซึ่งวงล้อรูเล็ตจะประกอบด้วยหมายเลข 0 ถึงหมายเลข 36.
                            </p>
                            <h1>วิธีการวางเดิมพัน</h1>
                            <p>
                                <br/>♦ เมื่อเกมเริ่มต้นคุณสามารถเลือกชิปเพื่อวางเดิมพันตามคาดเดาตัวเลขหรือประเภทการเดิมพันอื่น ๆ ในรูเล็ตได้การเดิมพันสิ้นสุดลงหลังจากสิ้นสุดการนับถอยหลัง
                                <br/>
                                <br/>♦ เมื่อการนับถอยหลังสิ้นสุดลงตัวแทนจำหน่ายจะหมุนวงล้อไปในทิศทางเดียวและหมุนลูกบอลไปในทิศทางตรงกันข้ามรอบ ๆ วงกลมที่เอียงไปตามเส้นรอบวงของล้อ
                                <br/>
                                <br/>
                                <br/>♦ หลังจากที่ลูกบอลตกลงบนกระเป๋าแล้วตัวแทนจำหน่ายจะป้อนจำนวนผลการแข่งขันและผลตอบแทนจะปรากฏในตารางของผู้เล่น
                                <br/>
                                <br/>
                            </p>
                            <h1>เงื่อนไขการเดิมพัน</h1>
                            <p>
                                <br/>♦ ชิพเหล่านี้วางอยู่บนกริดเดิมพันที่แตกต่างกันและคุณสามารถวางเดิมพันบนกริดใดก็ได้ในช่วงเวลาเดิมพัน.
                                <br/>
                                <br/>
                            </p>
                            <h1>พิเศษ</h1>
                            <p>
                                <br/>♦เดิมพันพิเศษ: เดิมพันของฉันผู้เล่นสามารถบันทึกสี่เดิมพันที่คุณชื่นชอบและวางเดิมพันไว้บนโต๊ะด้วยการคลิกเมาส์หนึ่งครั้ง.
                                <br/>
                                <br/>♦ เดิมพันตัวเลขสุดท้าย: เดิมพันตัวเลขสุดท้ายรวมถึงตำแหน่งการเดิมพันทั้งหมดที่มีตัวเลขสุดท้ายที่เลือก (0-9) เป็นตัวเลขสุดท้ายรวมถึงตัวเลขด้วย
                                หากต้องการวางเดิมพันหลักสุดท้ายคลิกที่หมายเลขที่ต้องการระหว่าง 0 ถึง 9 ในแผงเดิมพันฝรั่งเศส การวางเดิมพันจะถูกวางลงบนตำแหน่งที่สัมพันธ์กันโดยอัตโนมัติ
                                <br/>
                                <br/>♦ เพื่อนบ้าน: แผง Neighbors ช่วยให้คุณยกเว้นหมายเลขที่เลือกเองและวางเดิมพันระหว่างหมายเลขที่ด้านใดด้านหนึ่ง มีทั้งหมด
                                1-5 ชนิดของเพื่อนบ้าน ในการวางเดิมพันของเพื่อนบ้านให้คลิกที่ประเภทที่ต้องการในส่วนของเพื่อนบ้านแล้วคลิกหมายเลขที่คุณต้องการในแผงเดิมพันฝรั่งเศส
                                ตัวอย่าง: เลือกเพื่อนบ้านประเภทที่ 5 จากนั้นคลิก 7 แล้วเดิมพันที่เกี่ยวข้องจะถูกวางไว้ที่: 31, 9, 22, 18, 29, 7,
                                28, 12, 35, 3, 26
                                <br/>
                                <br/>♦เดิมพันภาษาฝรั่งเศส: ในรูเล็ตมีชุดหมายเลขต่างกันที่มีชื่อพิเศษติดอยู่ (เช่นถังที่สามเพื่อนบ้านของศูนย์และอื่น ๆ
                                ) และแต่ละส่วนจะครอบคลุมส่วนล้อ มีการเดิมพัน 5 ประเภทในการเดิมพันฝรั่งเศส วิธีเดิมพัน: วางเดิมพันบนโต๊ะรูเล็ตรูปไข่และแสดงชิปบนโต๊ะรูเล็ตอื่น
                                จากนั้นคลิก 'แน่ใจ' เพื่อยืนยันการเดิมพันของคุณ.
                                <br/>
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2> รูเล็ตนานาชาติ</h2>
                            &nbsp;
                            <p>- เป้าหมายของเกมนี้คือการทำนายที่ลูกบอลว่าจะตกอยู่ที่ไหนบนวงล้อรูเล็ต ซึ่งวงล้อรูเล็ตจะประกอบด้วยหมายเลข 0 ถึงหมายเลข 36
                                สำหรับวิธีการวางเดิมพันหมายเลขสำหรับรูเล็ตนานาชาตินั้นจะมีความแตกต่างจากเอเชียรูเล็ต โดยลูกบอลจะหมุนบนวงล้อในทิศทางทวนเข็มนาฬิกา
                                และจะมาเป็นสมอลเช็ค (small check) หลังจากที่วงล้อไปในทิศทางตามเข็มนาฬิกา ขณะเดียวกันวิธีการวางเดิมพันรูเล็ตนานาชาติ จะมีความคล้ายคลึงกับการวางเดิมพันของเอเชียรูเล็ต
                                แต่จะมีบางประเภทที่มีการวางเดิมพันที่แตกต่างกันออกไป
                                <br/> ความแตกต่างระหว่างเอเชียกับรูเล็ตนานาชาติคือวิธีการเดิมพันและจ่ายเงิน.
                            </p>
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


LunpanTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LunpanTh))));