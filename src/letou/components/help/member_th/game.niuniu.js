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

export class GameNiuniuTh extends React.Component {
    
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
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/th/for_member">บริการแก่สมาชิกใช้ >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">กฎของคาสิโนสด >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2> บลู บลู</h2>
                        &nbsp;
                        <p> บลู บลู เกมส์ออนไลน์ เป็นเกมไพ่โป๊กเกอร์แบบดั้งเดิมและเป็นที่นิยมในมณฑลกวางตุ้ง มณฑลหูหนาน มณฑลเจียงซูและเจ้อเจียง กฏเงื่อนไขของบลูบลูง่ายต่อความเข้าใจ</p>
                        &nbsp;
                        <p>-เดิมพันอย่างไร
                            <br/> เกมใช้ไพ่ 52 ใบ (ไม่รวมโจ๊กเกอร์) แจกไพ่ 5 ใบต่อผู้เล่นแต่ละคน ในทุกเกม หาไพ่ 3 ใบที่สามารถเพิ่มได้ถึง 10 หรือ 10 ใน
                            10 หากส่วนที่เหลือของไพ่ 2 ใบเพิ่มขึ้นรวมกันเกิน 10 ตัวรวมทั้งหมดจะต้องมีค่าเป็นลบ 10 จากนั้นคะแนนที่เหลือจะเปรียบเทียบแต้มกับแบงค์เกอร์
                            <br/>
                            <br/> คุณสามารถเลือกประเภทการเดิมพันได้หลายประเภทโปรดดูที่ด้านล่าง
                            <br/>
                            <br/> "ผู้เล่นที่ 1": เท่ากับ, คู่
                            <br/> "ผู้เล่นที่ 2": เท่ากับ, Double
                            <br/> "ผู้เล่นที่ 3": เท่ากับ, คู่
                            <br/> หมายเหตุ: เมื่อคุณเดิมพัน Double "เครดิต" จะต้องสูงกว่า 5 เท่าของจำนวนเงินเดิมพัน (จำนวนเงินเดิมพัน x อัตราเดิมพัน 5P)
                            โปรดอ่าน "คำอธิบาย" เพื่อดูรายละเอียดเพิ่มเติม
                            <br/>
                            <br/> ไพ่ใบแรก: ดีลเลอร์จะแสดง "ไพ่ใบแรก" เมื่อเริ่มเล่นเกมกัน ตามอันดับของ "ไพ่ใบแรก" ให้ตัดสินใจเลือกตำแหน่งการซื้อขาย (เริ่มจากตัวแทนจำหน่ายในทิศทางทวนเข็มนาฬิกา)
                            <br/>
                            <img src="http://i.imgur.com/sJzs2gw.jpg"></img>
                            <br/>
                            <br/> ลำดับการซื้อขาย: ในทิศทางทวนเข็มนาฬิกา
                            <br/>
                            <img src="http://i.imgur.com/dJmqONC.png"></img>
                            <br/>
                            <br/> - การนับใหญ่และเล็ก
                            <br/> ในระหว่างเกมถ้าคะแนนเท่ากันผู้เล่นจะต้องเลือกไพ่อันดับสูงสุดจากไพ่ 5 ใบเพื่อเปรียบเทียบ ผู้เล่นที่มีบัตรอันดับสูงสุดจะชนะ
                            หากคะแนนและอันดับเหมือนกันผู้เล่นจำเป็นต้องเปรียบเทียบชุด โปรดดูตารางด้านล่าง
                            <br/>
                            <br/> ชนิดของไพ่:
                            <br/>
                            <img src="http://i.imgur.com/kFgcRVR.png "></img>
                            <br/>
                            <br/> ใหญ่/เล็ก:
                            <br/>
                            <img src="http://i.imgur.com/sRZf7W7.png "></img>
                            <br/>
                            <br/>
                            <br/>
                            <br/> - อัตราการจ่าย
                            <br/> โอกาสในการชนะ:
                            <br/>
                            <img src="http://i.imgur.com/paep88b.png "></img>
                            <br/>
                            <br/> โอกาสในการแพ้:
                            <br/>
                            <img src="http://i.imgur.com/Hnj7FPY.png "></img>
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


GameNiuniuTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameNiuniuTh))));