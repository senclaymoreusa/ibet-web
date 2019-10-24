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

export class Game21dianTh extends React.Component {
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>Blackjack21แต้ม</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>เครย์ซี่แบล็คแจ็ค</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                        <h2>Blackjack</h2>
                            &nbsp;
                            <p>- เป้าหมายของแบล็คแจ๊คคือไพ่ทั้งหมดของคุณมีจำนวนเท่ากับ21แต้มหรือใกล้เคียงกับ 21 มากกว่าไพ่ของเจ้ามือ แต่ไม่เกิน 21แต้ม.
                                ในแบล็คแจ็คเอซจะนับเป็น 1 หรือ 11 ก็ได้ ,ไพ่ที่เป็นใบหน้า(J,Q,K)นับเป็น 10 แต้ม และไพ่หมายเลขทั่วไปก็มีค่าตามตัวเลขที่กำหนด
                                หากคุณได้รับไพ่เอซ(A)และไพ่สิบ10แต้ม เป็นไพ่สองใบแรกคุณจะมีแบล็คแจ็คจะชนะทันที และได้รับ1.5 เท่าของเงินเดิมพันของคุณ
                                (ถ้าการเดิมพันของคุณอยู่ที่ 10 เหรียญคุณจะได้รับ 25 เหรียญ) หากมูลค่ารวมของไพ่ของคุณอยู่ใกล้ 21 กว่าดีลของดีลเลอร์คุณจะชนะเงินเดิมพันของคุณ
                                (ถ้าเดิมพันของคุณอยู่ที่ 10 เหรียญคุณจะได้รับ 20 เหรียญ) หากยอดรวมแต้มของคุณสูงกว่า 21 คุณจะแพ้ทันทีเรียกว่า "ไพ่น๊อค"
                                และเสียเงินเดิมพันของคุณ หากคุณและดีลเลอร์มียอดรวมแต้มเท่ากัน (แต้ม17 ปีขึ้นไป) ไม่มีใครชนะและเดิมพันของคุณจะถูกส่งกลับมายังคุณ</p>
                            <p>
                                <br/> &nbsp;
                            </p>
                            <h1>กติกา</h1>
                            <p>- คลิกที่ชิปเพื่อเลือกจำนวน คลิกที่ตำแหน่งที่ว่าง(ช่องสำหรับวางเดิมพัน) (จัดเป็นรูปครึ่งวงกลมบนโต๊ะ) การคลิกทุกครั้งจะเพิ่มเงินเดิมพันของคุณตามมูลค่าของชิปที่เลือก
                                เดิมพันสามารถวางไว้บนมือใด ๆ ในการเล่นบนมือเดียวหรือไม่เกินห้ามือพร้อมกัน ในการลดการเดิมพันของคุณให้คลิกขวาที่การวางเดิมพันเพื่อลดจำนวนชิปที่เลือก
                                .
                                <br/>
                                <br/> - หากคุณกำลังเล่นเกมในโหมดเดี่ยวให้คลิกที่ชิปเพื่อเพิ่มเงินเดิมพันของคุณ การคลิกบนชิปทั้งหมดจะเป็นการเพิ่มเงินเดิมพันของคุณตามมูลค่าชิปและทุกๆคลิกขวาจะลดการเดิมพัน.
                                <br/>
                                <br/> -คุณสามารถคลิก Clear Bets สำหรับการยกเลิกวางเดิมพันบนโต๊ะทั้งหมด
                                <br/>
                                <br/> - วงเงินเดิมพันต่ำสุดและสูงสุดในแต่ละมือจะขึ้นอยู่กับระดับ VIP ของคุณและจะแสดงอยู่บนโต๊ะ ขีด จำกัด จะมีผลกับการเดิมพันเริ่มต้นเท่านั้น
                                การดำเนินการ (เช่น Split ฯลฯ ) ที่ต้องมีการเดิมพันเพิ่มเติมสามารถใช้งานได้แม้ว่าคุณจะวางเดิมพันไว้เท่ากับเดิมพันสูงสุดเท่านั้น.
                                <br/>
                                <br/> - คลิกปุ่มดีลเพื่อเริ่มแจกไพ่ จะแจกไพ่มือละสองใบ แจกให้กับผู้เล่นและมือของเจ้ามือ ไพ่ใบแรกจะมีการแจกให้ผู้เล่นก่อน และ
                                ไพ่ทีละหนึ่งใบในแต่ละรอบ ไพ่ใบสุดท้ายจะไปที่มือของเจ้ามือและคว่ำไพ่ .
                                <br/>
                                <br/> - หากคุณกำลังเล่นมากกว่าหนึ่งมือจะมีการดำเนินการกับแต่ละมือแยกกันโดยเริ่มจากด้านขวามือ.
                                <br/>
                                <br/> - หากเจ้ามือหงายไพ่เป็นเอซ(A)คุณจะได้รับการประกัน คลิกปุ่มประกันภัยเพื่อกันเจ้ามือได้ Blackjack.
                                <br/>
                                <br/> - ใช้ปุ่ม Hit, Stand, Double และ Split ตามต้องการ.
                                <br/>
                                <br/> - โปรดทราบว่าการจะใช้ ประกันภัย เดิมพันสองเท่า และสปลิต(แยกไพ่) จำเป็นต้องมีการเดิมพันเพิ่มเติม หากยอดเงินของคุณไม่มีเงินเพียงพอที่จะครอบคลุมค่าใช้จ่ายเหล่านี้คุณจะต้องฝากเงินเพิ่มเพื่อใช้ตัวเลือกเหล่านี้.
                                <br/>
                                <br/> - เจ้ามือสามารถหงายไพ่ และเรียกไพ่เพิ่มเติมได้ตามกฎ .
                                <br/>
                                <br/> -มือของคุณเทียบกับมือของเจ้ามือ .
                                <br/>
                                <br/> -ถ้าคุณต้องการเล่นรอบอื่นให้คลิกเกมใหม่ จากนั้นวางเดิมพันตามที่อธิบายไว้ด้านบนหรือคลิก Rebet เพื่อวางเดิมพันเช่นเดียวกับในรอบก่อนหน้าและคลิก
                                Deal เพื่อแจกไพ่บัตร</p>
                            <p>
                                <br/> &nbsp;
                            </p>
                            <h1>Multihand</h1>
                            <p>- ในโหมดมัลติแฮนด์คุณสามารถวางเดิมพันในตำแหน่งของมือที่ตั้งอยู่ในรูปครึ่งวงกลมบนโต๊ะได้ คุณสามารถเล่นมือเดียวได้หากต้องการหรือเล่นได้ถึง
                                5 มือโดยวางเดิมพันในมือ ทุกๆมืออาจมีจำนวนเงินเดิมพันแตกต่างกัน
                                <br/>
                                <br/> - ไพ่จะได้รับการแจกทีละใบต่อเทิร์นโดยเริ่มจากมือด้านขวาสุดและเคลื่อนที่ตามเข็มนาฬิกา เจ้ามือได้รับไพ่ทีหลังสุด เมื่อไพ่ถูกแจกแล้วแต่ละมือจะถูกเล่นแยกกันโดยเริ่มจากมือด้านขวาสุด</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                        <h2>เครย์ซี่แบล็คแจ็ค</h2>
                            &nbsp;
                            <p>เครย์ซี่แบล็คแจ็ค มีกฎกติกาที่คล้ายกับแบล็คแจ็คแบบดั้งเดิม (Traditional Blackjack) ผู้เล่นจะเป็นผู้ชนะ แต่แต้มรวมของผู้เล่นมากกว่าไพ่ของเจ้ามือ
                                โดยผู้เล่นจะเปรียบเทียบกับแต้มของเจ้ามือเท่านั้น และไพ่ทั้งหมดของผู้เล่นจะถูกหงายขึ้นp&gt; &nbsp;
                                </p><h1>【คำแนะนำ】</h1>
                                &nbsp;
                                <p>• ผู้เล่นวางเดิมพัน
                                    <br/> • ดีลเลอร์แจกไพ่คว่ำหน้าไปยังผู้เล่นวนตามเข็มนาฬิกา
                                    <br/> • ดีลเลอร์ให้เปิดหน้าไพ่อีกครั้งสำหรับผู้เล่นและจากนั้นใช้เวลาตรวจสอบสำหรับตัวเอง
                                    <br/> • ผู้เล่นเลือกไพ่ใบใดใบหนึ่ง
                                    <br/> • สุดท้ายดีลเลอร์เปิดหน้าคว่ำการ์ดและยืนไพ่ที 17 แต้ม
                                    <br/> • เมื่อเกมส์จบ, ผู้เล่นเปรียบเทียบกับแต้มรวมของเจ้ามือ</p>
                                &nbsp;
                                <h1>【เงื่อนไขของเกมส์】</h1>
                                &nbsp;
                                <p> 1. เล่นกัน 8 รอบ 2. ดีลเลอร์จะยืนไพ่ที่แต้ม 17 ตลอด 4. แยกไพ่ใบแรก ๆ ที่มีค่าเท่ากัน 5. มีเพียงหนึ่งสปรัมต่อมือเท่านั้น
                                    6. การ์ดใบเดียวกับ Ace Split แต่ละใบ 7. ไม่มีคู่หลังแยก 8. ประกันภัยที่เสนอเมื่อตัวแทนจำหน่ายแสดง Ace 9. Blackjack
                                    payoff 2: 3. 10. ผลตอบแทนที่ได้รับจากการประกันภัย 1: 2. 11. กดเกมเมื่อดีลเลอร์ดีลมือและมือผู้เล่นเสมอ
                                </p>
                                &nbsp;
                                <h1>【มูลค่าของไพ่ 】</h1>
                                &nbsp;
                                <p>
                                    <br/> - 10, J, Q, K นับเป็น 10แต้ม
                                    <br/> - 2ถึง 9 นับเป็นแต้ม 2-9 ตามมูลค่าหมายเลขที่แสดงบนไพ่
                                    <br/> - Ace นับเป็น 1 หรือ 11 &nbsp;
                                </p>
                                <h1>【 การจัดอันดับของมือ】</h1>
                                &nbsp;
                                <p>อันดับสูงสุด : แบล็คแจ็ค - ตีไพ่ 21 ใบประกอบด้วยไพ่ 3 ใบขึ้นไป แบล็คแจ๊คยังชนะมือจาก 21 ที่เกิดจากคู่แยก อันดับ 2 : 21
                                    แต้ม - ไพ่มากกว่า 2 ใบบวก 21 แต้มหรือหลังจากแบ่งเป็น Blackjack 21 เมื่อเทียบกับดีลเลอร์ อันดับที่ 3: หากแต้มรวมใด
                                    ๆ – หากตัวแทนจำหน่ายไม่ได้รับหน้าอกเดิมพันที่เหลือทั้งหมดจะชนะถ้ามือนั้นสูงกว่าดีลเลอร์และเสียถ้ามีราคาต่ำกว่า อันดับที่
                                    4: Push - หากมูลค่าของมือของคุณเท่ากับดีลเลอร์อบเกมจะจบลงด้วยการ PUSH และการเดิมพันของคุณจะถูกกลับคืน อันดับสุดท้าย
                                    : Bust - หากมูลค่ามือเกิน 21 คะแนน เรียกว่า Bust และการเดิมพันทั้งหมดจะถูกริบทันที.</p>
                                &nbsp;
                                <h1>【การจ่าย &amp; การเดิมพัน】</h1>
                                &nbsp;
                                <p>Side Bet: </p>
                                &nbsp;
                                <p> - อนุญาตให้ผู้เล่นหลักหรือผู้เล่นที่ไม่ได้นั่งทั้งหมดเล่นเดิมพันกับผู้เล่นรายอื่น
                                    <br/> - ผู้เล่นวางเดิมพันด้าน Side bet ได้รับอนุญาตให้วางเดิมพันในตำแหน่งวางเดิมพันด้านใดก็ได้ในขณะที่การเดิมพันเปิดอยู่
                                    <br/> - ผู้เล่นหลักไม่สามารถวางเดิมพันข้างได้ด้วยตัวเองได้
                                </p>
                                <p>การแยกไพ่: </p>
                                &nbsp;
                                <p> - หากมือแรกของคุณเป็นคู่ของไพ่ที่มีมูลค่าเท่ากันคุณสามารถตัดสินใจที่จะแบ่งคู่นี้ออกเป็นสองมือโดยแต่ละตัวจะมีการเดิมพันแยกกันไปเท่ากับเงินเดิมพันหลักของคุณ
                                    <br/> - 1. ไม่มีดับเบิ้ล หลังจากแยกคู่
                                    <br/> - 2. หากคุณแบ่งเอซคู่แรก คุณจะได้รับไพ่เพิ่มอีกหนึ่งใบต่อหนึ่งมือโดยไม่มีตัวเลือกในการ Hit
                                    <br/> - 3. หลังจากแยกไพ่ ดีลเลอร์จะแจกไพ่ไพ่และมีเพียงหนึ่ง Split ต่อมือเท่านั้น
                                    <br/> - 4. ถ้าคุณแบ่งและหนึ่งในมือมี Ace และ 10 จะนับเป็น 21 ซึ่งเกิดจากคู่ที่แบ่ง
                                </p>
                                <p>Blackjack: </p>
                                &nbsp;
                                <p> - A &amp; Q อัตราการจ่าย 2:3.</p>
                                <p>Best hand: </p>
                                &nbsp;
                                <p> - K &amp; A &amp; Q อัตราการจ่าย 1:1.</p>
                                <p>การประกัน: </p>
                                &nbsp;
                                <p> - หากดีลเลอร์เป็น Black jack , อัตราการจ่าย : 1:2.</p>
                                <p>การเดิมพันหลัก: </p>
                                &nbsp;
                                <p> - ที่นั่งของผู้เล่นเลือกชิปและวางเดิมพันหลักและกดปุ่มยืนยันเพื่อเริ่มเล่นเกม</p>
                                <p>Perfect Pairs: </p>
                                &nbsp;
                                <p>Perfect Pairs – อัตราการจ่าย 1:25.
                                    <br/> Colored Pair – ต่างดอกแต่สีเดียวกัน อัตราการจ่าย 1:12.
                                    <br/> Mixed Pair – ต่างดอก อัตราการจ่าย 1:6.
                                </p>
                                <h1>【ข้อควรระวัง】</h1>
                                &nbsp;
                                <p>1. ผู้เล่นทุกคนต้องวางเดิมพันแล้วสามารถวางเดิมพันคู่ที่สมบูรณ์แบบและตัวเลือกการเดิมพัน 21 + 3 อื่น ๆ 2. เดิมพันแบบเล่นซ้ำใช้ได้กับการวางเดิมพันคู่ที่สมบูรณ์แบบและ
                                    21 + 3 แต่ไม่ใช่สำหรับ sidebet 3. หากผู้เล่นทั้งหมดในเกมส่งผลให้เป็น Bust หรือแบล็คแจ๊ค ดีลเลอร์จะเปิดไพ่ทั้งหมดและจบเกมโดยไม่คำนึงถึงดีลเลอร์ว่าคะแนนถึง
                                    17 หรือไม่ 4. การเดิมพันต่ำสุดและสูงสุดจะขึ้นอยู่กับขีด จำกัด ของตาราง ผู้เล่นสามารถวางเดิมพันภายในช่วงการเดิมพันแบบรวมของตารางและวงเงินเดิมพันส่วนบุคคลของผู้เล่น
                                    หากคุณต้องการปรับวงเงินเดิมพันส่วนตัวของคุณโปรดติดต่อฝ่ายบริการลูกค้า 5. เมื่อไพ่ที่ถูกดำเนินการแจกโดยดีลเลอร์จากระบบอาจหรือไม่สามารถอ่านไพ่ได้
                                    หากระบบไม่สามารถอ่านไพ่ได้ ดีลเลอร์จะสแกนบัตรอีกครั้งจนกว่าระบบจะอ่านบัตร (ถ้าระบบอยู่ ยังไม่สามารถอ่านบัตรได้รอบปัจจุบันจะถูกยกเลิกและการเดิมพันทั้งหมดจะถูกคืน)
                                    6. ในกรณีที่มีการชำระบัญชีไม่ถูกต้องการชำระบัญชีจะได้รับการชำระบัญชีใหม่ตามผลวิดีโอปัจจุบัน 7. เนื่องจากระบบเครือข่ายล้มเหลวทำให้เกมไม่สามารถดำเนินการได้ระบบจะยกเลิกรอบปัจจุบันและคืนเงินเดิมพันทั้งหมด
                                    (หากผู้เล่นมีแบล็คแจ๊คระบบเครือข่ายล้มเหลวระบบจะยังคงใช้เลข 2: 3 เพื่อจ่ายให้ผู้เล่น)</p>
                            <p></p>
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


Game21dianTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Game21dianTh))));