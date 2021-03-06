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

export class LotteryRuleTwoTh extends React.Component {
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

    onClick(index, e) {
        e.preventDefault()
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">กติกาการเดิมพันล็อตเตอรี>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}> </a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}>กติกา คีโน</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    {/* <!-- please only edit HelperCenterDetail's contain --> */}
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>คีโน</h2>
                             &nbsp;
                            <p>คีโนเป็นเกมการพนันที่มีการจับสลากหมายเลขมักเล่นที่คาสิโนสมัยใหม่และยังมีบริการเป็นเกมลอตเตอรี่บางชนิด ชุดของ บิลเดิมพันคีโน
                                ผู้เล่นพนันโดยการเลือกตัวเลขตั้งแต่ 1 ถึง 80 หลังจากผู้เล่นทุกคนทำการเดิมพัน. บอล 20 หมายเลข (บางแบบจะน้อยลง) จะถูกสุ่มโดยเครื่องคล้ายกับที่ใช้ในการเล่นสลากและบิงโกหรือ
                                ด้วยเครื่องสุ่มเลขไฟฟ้า.
                                <br />
                                <br /> คำว่า "คีโน" มีรากศัพท์ภาษาฝรั่งเศสหรือภาษาลาติน แต่โดยบัญชีทั้งหมดเกมนี้มีต้นกำเนิดในประเทศจีน ตำนานเล่าว่าการประดิษฐ์เกมนี้ช่วยให้เมืองโบราณได้รับการช่วยเหลือในช่วงเวลาแห่งสงครามและความนิยมอย่างแพร่หลายช่วยระดมทุนในการสร้างกำแพงเมืองจีน
                                ในยุคใหม่ของจีนความคิดในการใช้สลากเพื่อการเป็นสถาบันของรัฐไม่เป็นที่ยอมรับก่อนปลายศตวรรษที่ 19 ในที่สุดผู้อพยพชาวจีนได้แนะนำ
                                คีโน ทางตะวันตกเมื่อพวกเขาแล่นเรือข้ามมหาสมุทรแปซิฟิกเพื่อช่วยสร้างทางรถไฟข้ามทวีปแห่งแรกในศตวรรษที่ 19 ในปีพ. ศ. 2409
                                ได้กลายเป็นเกมการพนันที่ได้รับความนิยมอย่างแพร่หลายในฮูสตันเท็กซัสภายใต้ชื่อ "คีโน".
                                <br />
                                <br /> การจ่ายเงินของคีโนจะขึ้นอยู่กับจำนวนหมายเลขที่ผู้เล่นเลือกและจำนวนหมายเลขจะตรงตามผลที่ออกเรียกว่า “ฮิต” คูณด้วยค่าน้ำของการเดิมพันเดิมของผู้เล่นต่อ
                                "อัตราพื้นฐาน" ของตารางจ่ายเงิน อย่างไรก็ตามตัวเลขที่ผู้เล่นเลือกยิ่งมากและจำนวนตัวเลขที่”ฮิต”ที่มากขึ้นการจ่ายเงินจะมากขึ้นแม้ว่าตารางจ่ายเงินการฮิตจำนวนที่ออกจะน้อย
                                ตัวอย่างเช่นไม่ใช่เรื่องแปลกที่จะเห็นคาสิโนจ่ายเงิน 500 เหรียญหรือแม้แต่ 1,000 เหรียญสำหรับ "จับฉลาก" จาก0 ถึง 20 โดยมีเงินเดิมพัน
                                5.00 ดอลลาร์ ต่อการจับ การจ่ายเงินแตกต่างกัน คาสิโนส่วนใหญ่อนุญาตให้มีการเดิมพันแบบ 1 ถึง 20 หมายเลข แต่มีข้อ จำกัด ให้เลือกเพียง
                                1 ถึง 10, 12 และ 15 หมายเลขหรือ "สปอต"ถ้าคุณเป็นคนรัก คีโน&nbsp;เรียกหมายเลขที่คุณชอบ.
                                <br />
                                <br /> ล๊อตโต้ คีโน อยู่บนพื้นฐานของกฎเกณฑ์ขององค์กรจีนเกาหลีแคนาดาสโลวะเกียและมอลตาและมี 7 ชุดและลำดับดังนี้: ใหญ่ / เล็ก
                                / ราคา / คู่; จำนวนรวมคี่ / คู่ / ด้านบน / ดร๊าฟ / ดาวน์; PB; B / S &amp; O / E Parlay; B / S lx / ห้าองค์ประกอบ; ผสม
                                Parlay / ไม่สามารถผสม Parlay; Chase &amp; Redouble เมื่อเทียบกับชุดเดียวขององค์กรที่ออก คีโน.</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>KENO กติกา</h2>
                            &nbsp;
                            <h1>1. ใหญ่/เล็ก</h1>
                            <p> มูลค่ารวมของหมายเลข 20 หมายเลข เป็นผลของเกมส์ หากมูลค่ารวมของ 20 หมายเลข คือ 810 ถ้ามากกว่า 810 เรียกว่าว่า ใหญ่ ผลและน้อยกว่า
                                810 เรียกว่า เล็ก ตัวอย่าง：หมายเลขที่ออก: 02,03,07,08,11,16,17,26,29,32,33,35,39,43,50,56,68,72,74,และ 80. ผลรวมของ20หมายเลขเท่ากับ
                                710. แบบนี้เรียกว่าผลรวม "เล็ก."ผู้เล่นที่เดิมพันเล็กจะชนะเดิมพัน. ผู้เล่นที่เดิมพันใหญ่จะเสียเดิมพัน. </p>
                            &nbsp;
                            <h1>2. คี่/คู่ </h1>
                            <p> หมายเลขที่ทำการจับฉลากมีดังต่อไปนี้ คือ 02,03,07,08,11,16,17,26,29,32,33,35,39,43,50,56,68,72,74,and 80. มูลค่ารวมของทั้ง
                                20 หมายเลข เป็น 701 ดังนั้นผลเป็นเกมคือ “ คี่ ". ผู้เล่นที่เดิมพันสำหรับ "คี่" ชนะ. ผู้เล่นที่เดิมพัน คู่ จะเสีย
                            </p>
                            &nbsp;
                            <h1>3. ผลรวมหมายเลข คู่/คี่ </h1>
                            <p>หากว่าใน20หมายเลขมีจำนวนรวมเลขคี่มากกว่าเลขคู่,ผลของเกมส์จะออกมาเป็นคี่และผู้เล่นที่เดิมพันคี่จะชนะHowever, หากผลจำนวนรวมคี่และคู่เท่ากันฝั่งละ10หมายเลข
                                ผลจะออกเป็น “เสมอ”และผู้เล่นที่เดิมพันเสมอจะชนะ</p>
                            &nbsp;
                            <h1>4. ผมรวมหมายเลข บน/เสมอ/ล่าง</h1>
                            <p> หมายเลข1-40คือบน.หมายเลข41-80 คือล่าง. หากหมายเลขฝั่งไหนมีผลการออกมากกว่าอีกฝั่ง ฝั่งนั้นจะชนะ "แต่ถ้าหากออกฝั่งละ 10 หมายเลขเท่ากัน
                                ผลจะเป็น เสมอ </p>
                            &nbsp;
                            <h1>5.PB</h1>
                            <p> PB คือ หมายเลขที่เลือกขึ้นมา กฎของ PB คือ เลือกหมายเลข 1 หมายเลข ถึง 5 หมายเลขจากจำนวน 80 หมายเลข และ ทำการรวมกันเพื่อเป็นหมายเลขในการทายผล
                                ผู้เล่นจะทำการเลือกหมายเลขที่ชนะ จำนวนที่ชนะจะขึ้นอยู่กับตหมายเลขที่ผู้เล่นเลือกตรงกับหมายเลขที่ชนะ จำนวนชั้นที่ชนะจะถูกแบ่งมาทำการเดิมพัน
                                . </p>
                            &nbsp;
                            <h1>6.B/S &O/E Parlay </h1>
                            <p>ผลรวมของ 20 หมายเลขการจ่ายเงินคือผลของเกมและอาจจัดเป็น "ใหญ่ คี่" "เล็ก คี่" "ใหญ่ คู่" และ "เล็กคู่" ผลรวมที่มากกว่า 810
                                และเป็นตัวเลขคี่คือผลลัพธ์ "ใหญ่ คี่" ผลรวมที่มากกว่า 810 และเป็นตัวเลขคู่คือ "ใหญ่ คู่" ผลรวมที่น้อยกว่า 810 และเป็นตัวเลขคี่คือผลลัพธ์
                                "เล็กคี่" ผลรวมที่น้อยกว่า 810 และเป็นตัวเลขคู่คือ "เล็ก คู่". </p>
                            &nbsp;
                            <h1>7. B/S lx / Five Elements </h1>
                            <p> B/S Ix -- มูลค่ารวมของการจ่ายเงินทั้งหมด 20 จำนวนคือผลของเกม ผลที่ได้จาก "810" คือ "Rise" มากกว่า 810 คือ "Fall" และ 810
                                คือ "Retain" ตัวอย่าง: เมื่อค่าทั้งหมด 20 ตัวเป็น 860 แล้วจะมีการเพิ่มขึ้น 50 จุด หากผู้เล่นเดิมพัน "Rise" และผู้เล่นชนะการคำนวณสำหรับจำนวนเงินเดิมพันต่อจุด
                                หากการตั้งค่าเป็น 10 บาท เป็น 1 จุดสำหรับการชนะ 50 คะแนนจำนวนเงินที่ชนะจะเท่ากับ 500 บาท หากผู้เล่นเดิมพัน "Small" ผู้เล่นจะเสีย
                                500 บาท หากวงเงินสูงสุดคือ 300 บาทจำนวนเงินที่ชนะ / แพ้ 300 บาท มากที่สุด </p>
                            <p> ต่อไปนี้ห้าธาตุและตำแหน่งลำดับตัวเลขประจำธาตุนั้นๆใน 20 ตัวเลขที่ทำการจับฉลาก ': ทอง (210 ~ 695), ไม้ (696 ~ 763), น้ำ (764
                                ~ 855), ไฟ (856 ~ 923) และโลก (924 ~ 1410) ผลตัวเลขที่ออกคือ 01,02,05,09,10,17,18,26,28,33,34,35,41,43,50,57,68,73,76
                                และ 80 มูลค่ารวมเป็น 706 ซึ่งเป็นในส่วน (696 ~ 763) ดังนั้นผลที่ได้คือ "ไม้". ผู้เล่นเดิมพัน "ไม้" ชนะเดิมพันในขณะที่ทำในอีกสี่
                                (4) ธาตุเสียเงินเดิมพัน
                            </p>
                            &nbsp;
                            <h1>8. Mix Parlay</h1>
                            <p>ผู้เล่นสามารถเลือกรายการเดิมพันจากแผงเดิมพันได้.
                                <br />
                                <br /> การเดิมพันต่อไปนี้ที่ไม่อนุญาติในโหมด Mix Parlay:
                                <br /> * ไม่ว่าจะเป็น Big/ Smallไม่ได้รับอนุญาตให้เล่นในโหมด Mix Parlay.
                                <br /> *อัตราการจ่ายที่แตกต่างชนิดกัน, ทุกเดิมพันใช้ได้ Mix Parlay ยกเว้น Big/Small.
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Hit จะไม่ได้รับอนุญาตใน Mix Parlayed กับส่วนที่เหลือ.
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Big / Small ไม่ได้รับอนุญาตใน Mix Parlayed กับ Top / Bottom, Odd / Even และ Big / Small
                                และ Five Elements.
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Odd / Even ไม่ได้รับอนุญาตให้ผสมร่วมกับ Parlay กับ Odd / Even และ Big / Small
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Top / Bottom ไม่ได้รับอนุญาตใน Mix Parlayed กับ Odd / Even และ Big / Small และ Five Elements.
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Odd / Even & Big / Small ไม่ได้รับอนุญาตใน Mix Parlayed กับ Five Elements.
                                <br /> *สำหรับแหล่งจ่ายเงินเดียวกัน Odd / Even ไม่ได้รับอนุญาตให้เป็น Mix Parlayed กับจำนวนคี่ / คู่และ Odd / Even และใหญ่
                                / เล็ก.
                            </p>
                            &nbsp;
                            <h1>9.Chase</h1>
                            <p> Chase หมายถึงการเลือกเดิมพันหนึ่งหรือกลุ่มของตัวเลขเป็นสองรอบหรือมากกว่าสองรอบการเดิมพันโดยมีรอบต่อเนื่องสูงสุด 10 รอบ.
                                <br />
                            <br /> ข้อกำหนดเกี่ยวกับการยกเลิกเดิมพันของ Chase：
                            <br /> *เมื่อผู้เล่นเข้าถึงรอบ Chase เศษ หรือ ข้อกำหนดเกี่ยวกับการยกเลิกสัญญา
                            <br /> *หากยอดเงินในบัญชีของผู้เล่นน้อยกว่าจำนวนเงินเดิมพันที่คาดไว้.
                            <br /> *หากจำนวนเงินชนะมากกว่าจำนวนเงินที่ชนะสูงสุดในรอบถัดไป.
                            <br /> *หากผลการเดิมพันไม่ได้รับการประมวลผล.
                            <br /> *ถ้าผู้เล่นยกเลิกหมายเลขของ chase.
                            <br />
                            <br /> ได้เวลาที่จะเริ่ม Chase:
                            <br /> การเพิ่มขึ้นของยอดจะเริ่มต้น และจะสิ้นสุดเมื่อ เงื่อนไขการยกเลิกเดิมพันครบ.
                            </p>
                            &nbsp;
                            <h1>10. Redouble</h1>
                            <p>Redouble หมายถึงการเดิมพันจำนวนเงินปัจจุบันผ่านวิธีการต่อรองเริ่มต้นด้วย 1.0 สำหรับการเดิมพันต่อเนื่องกันสามครั้ง.</p>
                            &nbsp;
                           
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


LotteryRuleTwoTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleTwoTh))));