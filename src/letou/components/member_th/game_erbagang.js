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

export class GameErbagangTh extends React.Component {
    
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
                    <h2>Pai gow</h2>
                        <p>
                            <br/> Pai gow คือการพนันของจีนชนิดหนึ่ง,คล้ายกับโดมิโน่จีนประกอบด้วย 32 ชุด.
                            <br/> • Basic scoring
                            <br/> ชื่อ "pai gow" แปลอย่างอิสระว่า "make nine" หรือ "card nine" คะแนนสูงสุดสำหรับมือมีค่าเท่ากับเก้า ค่าของมือจะถูกกำหนดโดยการเพิ่มจำนวนของ
                            pips บนไพ่สองใบและลดจำนวนหลักสิบ Examples: 1-3 with 2-3: value 9 (nine pips altogether) 2-3 with 5-6: value 6 (16 pips;
                            drop the 10) 5-5 with 4-6: value 0 (20 pips; ones digit is zero)
                            <br/> • Gongs and Wongs
                            <br/> มีวิธีพิเศษที่มือสามารถทำแต้มได้มากกว่าเก้าแต้ม กระเบื้องสองชั้นและกระเบื้องสองชั้นเรียกว่ากระเบื้องวันและวัยรุ่นตามลำดับ
                            การรวมกันของวันหรือวัยรุ่นที่มีแปดผลในฆ้องมูลค่า 10 คะแนนในขณะที่การวางทั้งสองของพวกเขาด้วยเก้าสร้างวงศ์มูลค่า 11. แต่เมื่อวันหรือวัยรุ่นจะจับคู่กับกระเบื้องอื่น
                            ๆ มาตรฐาน เกณฑ์การให้คะแนน.
                            <br/> •Gee Joon tiles
                            <br/> 1-2 และ 2-4 เรียกว่า Gee Joon tile และทำหน้าที่เป็นwildการ์ดที่ จำกัด เมื่อใช้เป็นส่วนหนึ่งของมือกระเบื้องเหล่านี้อาจได้คะแนนเป็น
                            3 หรือ 6 อันใดอันหนึ่งส่งผลให้มูลค่ามือที่สูงขึ้น ตัวอย่างเช่นมือที่มีคะแนน 1-2 และ 5-6 เท่ากับ 7 มากกว่าสี่.
                            <br/> • Pairs
                            <br/> ชุดรูปแบบโดมิโน 32 ชุดสามารถจัดเป็น 16 คู่ได้ดังรูปที่ด้านบนของบทความนี้ สิบเอ็ดคู่มีกระเบื้องเหมือนกันและห้าคู่นี้ประกอบด้วยสองแผ่นที่ทำแต้มเดียวกัน
                            แต่ดูแตกต่างกัน (กลุ่มหลังประกอบด้วยกระเบื้อง Gee Joon ซึ่งสามารถทำคะแนนได้เหมือนกันไม่ว่าจะเป็นสามหรือหกชิ้น) ถ้ามือประกอบด้วยคู่ก็จะมีคะแนนสูงกว่าคู่ที่ไม่ใช่คู่ไม่ว่าค่าของ
                            pips เป็น (คู่มักจะคิดว่าเป็นมูลค่า 12 คะแนนแต่ละ.) เมื่อผู้เล่นและตัวแทนจำหน่ายทั้งคู่มีคู่ชนะคู่ที่สูงกว่า การจัดอันดับไม่ได้พิจารณาจากผลรวมของไพ่ป๊อก
                            แต่โดยความสวยงาม คำสั่งต้องจดจำไว้ คู่ที่สูงที่สุดคือกระเบื้อง Gee Joon, Teens, Days และ Eights สีแดง คู่ต่ำสุดคือ nines
                            ที่ไม่ตรงกัน, แปด, สามัคคี, และ fives.
                            <br/> • Ties
                            <br/> เมื่อผู้เล่นและตัวแทนจำหน่ายแสดงมือที่มีคะแนนเท่ากันผู้เล่นที่มีไพ่สูงที่สุด (ตามการจัดอันดับคู่ที่อธิบายไว้ด้านบน)
                            เป็นผู้ชนะ ตัวอย่างเช่นมือของผู้เล่น 3-4 และ 2-2 และมือของเจ้ามือ 5-6 และ 5-5 แต่ละคะแนนหนึ่งจุด อย่างไรก็ตามเนื่องจากพ่อค้า
                            5-5 outranks อื่น ๆ สามกระเบื้องเขาจะชนะมือ หากคะแนนถูกมัดและหากผู้เล่นและตัวแทนจำหน่ายแต่ละคนมีไพ่อันดับสูงสุดเท่ากันมือจะได้รับการคัดลอกและตัวแทนจำหน่ายจะชนะ
                            ตัวอย่างเช่นถ้าผู้เล่นถือ 2-2 และ 1-6 และตัวแทนจำหน่ายที่จัดขึ้น 2-2 และ 3-4 ตัวแทนจำหน่ายจะชนะตั้งแต่คะแนน (1 แต่ละ)
                            และกระเบื้องสูงกว่า (2-2) จะเหมือนกัน . กระเบื้องที่ต่ำกว่าที่ได้รับการจัดอันดับในแต่ละมือไม่เคยถูกนำมาใช้เพื่อทำลายความสัมพันธ์
                            มีข้อยกเว้นสองวิธีที่อธิบายข้างต้น อันดับแรกแม้ว่ากระเบื้อง Gee Joon จะเป็นคู่ที่มีคะแนนสูงสุด แต่ก็ถือว่าไม่มีค่าเมื่อประเมินความสัมพันธ์
                            ประการที่สองศูนย์ใดก็ได้เป็นศูนย์ผูกชนะโดยตัวแทนจำหน่ายโดยไม่คำนึงถึงกระเบื้องในมือทั้งสองข้าง.</p>
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


GameErbagangTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameErbagangTh))));