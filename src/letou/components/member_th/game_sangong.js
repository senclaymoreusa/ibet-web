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

export class GameSangong extends React.Component {
    
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
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">บริการแก่สมาชิกใช้ >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">กฎของคาสิโนสด>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>3 รูปภาพ</h2>
                        <p>1. เงื่อนไข:
                            <br/> "การ์ดรูปภาพ" หมายถึงคำที่ใช้เพื่อกำหนดแจ็ค, ควีนส์และคิงส์ "รอบการเล่น" หมายถึงช่วงเวลาการเล่นที่เริ่มมีการเริ่มเล่นและสรุปเมื่อดีลเลอร์ประกาศผลและถ้าทำได้ให้เก็บเดิมพันที่เสียไปและจ่ายเงินชนะเดิมพัน
                            การเดิมพันด้าน "รอยัลรูปภาพ" หมายถึงการเดิมพันแบบเดี่ยวที่จ่ายเงินด้วยชุดค่าผสมที่ชนะหลายชุด การจ่ายเงินของการเดิมพันด้าน
                            "Royal Pictures" จะไม่ขึ้นกับผลของการเดิมพันหลักของผู้เล่นนั่นคือ Win, Lose หรือ Tie การเดิมพัน "รอยัลพิคเจอร์ส" จะชนะหากไพ่รวมต่อไปนี้ถูกแจกให้กับมือของผู้เล่น:
                            1. "Three Kings" ซึ่งเป็นมือของผู้เล่นประกอบด้วยการ์ด "King" สามใบ 2. "Three Queens" ซึ่งเป็นมือของผู้เล่นประกอบด้วยบัตร
                            "Queen" สามใบ 3. "Three Jacks" ซึ่งเป็นไพ่ของผู้เล่นประกอบด้วยไพ่ "แจ็ค" สามใบ 4. "ภาพสามภาพ" ซึ่งเป็นมือของผู้เล่นประกอบด้วยการ์ดรูปภาพ
                            3 รูปยกเว้น "Three Kings", "Three Queens" หรือ "Three Jacks" 5. "Any Picture Pair" ซึ่งเป็นไพ่ของผู้เล่นประกอบด้วยไพ่รูปภาพและไพ่
                            Non-Picture หนึ่งใบ 6. "พระมหากษัตริย์ใด ๆ " ซึ่งเป็นของผู้เล่นประกอบด้วย: ไพ่ใบหนึ่งใบและสองใบไม่ใช่ไพ่; หรือบัตร King
                            One, Queen Card และ Non-Picture Card หนึ่งชุด; หรือบัตรหนึ่งคิงบัตรแจ็คและบัตรอวยพรหนึ่งใบ“Tie” หมายความว่ามือของผู้เล่นและดีลเลอร์มีคะแนนเท่ากัน.
                            <br/>

                            </p><p> 2 วิธีเล่น:
                                <br/> 1. การเริ่มเล่นจะเริ่มขึ้นเมื่อดีลเลอร์ประกาศ "วางเดิมพันของคุณโปรด" 2. การปิดเดิมพันจะมีผลเมื่อ Dealer ประกาศ "No
                                more bets" 3. วัตถุประสงค์ของเกมคือการได้รับการจัดอันดับสูงกว่ามือของดีลเลอร์ 4. การวางเดิมพันใน "เดิมพันแบบแทง"
                                และ / หรือ "การเดิมพันรอยัลภาพ" อาจมีขึ้นหลังจากที่ผู้เล่นวางเดิมพันเริ่มต้นแล้ว 5. หลังจากวางเดิมพันทั้งหมดแล้วเริ่มจากด้านซ้ายของ
                                Dealer และดำเนินการตามเข็มนาฬิกาตัวแทนจำหน่ายจะแจกไพ่ไพ่สามใบคว่ำหน้าลงไปในแต่ละพื้นที่เล่น ดีลเลอร์จะได้รับแจกไพ่มือสุดท้าย
                                6. หลังจากตรวจสอบไพ่ของตนแล้วผู้เล่นแต่ละคนจะกลับไปยังพื้นที่เล่น 7. หลังจากได้รับการส่งคืนแล้วตัวแทนจำหน่ายจะเปิดเผยและประกาศให้ทราบ
                                8. เมื่อเปรียบเทียบมือของเขากับมือของผู้เล่นแต่ละรายดีลเลอร์จะต้องแจ้งว่าผู้เล่นแต่ละคนได้รับชัยชนะแพ้หรือผูกติดอยู่หรือไม่
                                9. ไพ่แต่ละใบประกอบไปด้วยไพ่สามใบที่มีแต้มรวมของแต่ละมือโดยกำหนดมูลค่าของแต่ละไพ่ มูลค่าจุดของแต่ละบัตรคือมูลค่าที่ตราไว้เว้นแต่
                                10, King, Queen, Jack ซึ่งมีค่าจุดศูนย์ แต่เฉพาะ King, Queen และ Jack จะมีอันดับเป็น "Picture Card" โดยมีคะแนนรวมกัน
                                10. จำนวนรวมของไพ่ที่จะได้รับคือจำนวนที่มีมูลค่ารวมของไพ่ในมืออยู่ระหว่างศูนย์ถึงเก้า หรือตัวเลขด้านขวาของเลขที่ที่มูลค่ารวมของไพ่ในมือเป็นจำนวนสิบหรือสูงกว่า
                                11. การ์ดรูปภาพสามใบเป็นมืออันดับสูงสุด ในกรณีที่ทั้งดีลเลอร์และผู้เล่นมีบัตรรูปภาพสามใบมือจะถูกประกาศว่าเป็น "เน็คไท"
                                12. หลังจากนั้นมือจะถูกกำหนดโดยพิจารณาจากคะแนนรวมตั้งแต่ 0 ถึง 9 13. เมื่อผู้เล่นและดีลเลอร์มีคะแนนเท่ากันมือที่ชนะมากที่สุดจะเป็นผู้ชนะ
                                หากทั้งคู่ของดีลเลอร์และมือของผู้เล่นมีการจัดอันดับเดียวกันมือจะถูกประกาศว่าเป็น "เน็คไท" 14. เมื่อมือของผู้เล่นและดีลเลอร์มีแต้มเท่ากันการเดิมพันแบบมัดรวมจะจ่าย
                                15. การ์ดรูปภาพไม่มีการจัดอันดับนั่นคือ KK มีค่าเท่ากับ QJ และไม่สูงกว่า QJ 16. ไม่มีการจัดอันดับชุดในเกม Royal Three
                                Pictures
                                <br/>
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


GameSangong.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameSangong))));