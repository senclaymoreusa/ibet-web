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

export class BaijialeTh extends React.Component {
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}>บาคาร่า super 6</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(2, e);}}>บาคาร่าแบบดั้งเดิม</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(3, e);}}>ซุปเปอร์บาคาร่า</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(4, e);}}>ไพ่คู่ บาคาร่า</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(5, e);}}>ผู้เล่น คาบาร่า 14 ราย (ต่อโต๊ะ)</a>
                            </li>
                            <li className={this.state.current === 6 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(6, e);}}>>บาคาร่า คลาสสิก</a>
                            </li>
                            <li className={this.state.current === 7 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(7, e);}}>VIPบาคาร่า</a>
                            </li>
                            <li className={this.state.current === 8 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(8, e);}}>การเดิมพันบาคาร่า</a>
                            </li>
                            <li className={this.state.current === 9 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(9, e);}}>หลากหลายเกมบาคาร่า</a>
                            </li>
                            <li className={this.state.current === 10 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(10, e);}}>บาคาร่าโบนัสมังกร</a>
                            </li>
                            <li className={this.state.current === 11 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(11, e);}}>บาคาร่า Playboy</a>
                            </li>
                            <li className={this.state.current === 12 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(12, e);}}>แต้ม บาคาร่า</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        `<h2>Super 6 Baccarat</h2>
                            &nbsp;
                            <p>กำเนิดในอิตาลีในปีพ. ศ. 2543 และนำมาใช้อีกครั้งที่ยุโรปในศตวรรษที่สิบเก้า บาคาร่าถือได้ว่าเป็นเกมแห่งกษัตริย์ บาคาร่ายังเป็นที่รู้จักกันในชื่อ
                                "Lucky 9" และ "Punto Banco" มีสองรูปแบบของบาคาร่าที่สามารถเล่นได้ใน Resorts World Manila, Mini Baccarat และ Super
                                Six จุดมุ่งหมายของเกมคือการวางเดิมพันในมือซึ่งทั้งหมดเก้าหรือใกล้เคียงกับเก้า คุณสามารถวางเดิมพันส่วนของเพลเยอร์
                                แบงค์เกอร์ หรือเสมอ
                                <br/>
                                <br/> -Platform AG, EA, OPUS, MG
                                <br/>
                                <br/> - เดิมพันอย่างไร
                                <br/> 1. จุดมุ่งหมายของเกมคือการวางเดิมพันในมือซึ่งมีผลรวมเก้าหรือใกล้เคียงกับเก้า
                                <br/> 2. ผู้เล่นอาจวางเดิมพัน: เพลเยอร์ หรือ แบงค์เกอร์ รวมกับการวางเดิมพันเพลเยอร์คู่/แบงค์เกอร์คู่ หรือเสมอหรือ
                                ซุปเปอร์ 6 ตามตารางต่ำสุดและสูงสุดของโต๊ะนั้นๆ
                                <br/> 3. ดีลเลอร์แจกไพ่สองฝั่ง ให้กับเพลเยอร์และแบงค์เกอร์
                                <br/> 4. ผู้เล่นที่มีแต้มสูงสามารถเรียกไพ่หรือหรือให้ดีลเลอร์เปิดไพ่ ให้ เพลเยอร์/แบงค์เกอร์อยู่ หรือ เปิดไพ่ใบที่
                                3 ขึ้นอยู่กับเงื่อนไขโต๊ะนั้นๆ (ดูข้อมูลเพิ่มเติม)
                                <br/> 5. ดีลเลอร์แจ้งผู้ชนะหลังจากไพ่ทั้งสองฝั่งได้ถูกเปิดออกครบถ้วนแล้ว
                                <br/> ♦ ผู้ที่เดิมพันชนะฝั่งเพลเยอร์หรือแบงค์เกอร์จะได้รับการจ่ายเงิน
                                <br/> ♦ เมื่อชนะ การเดิมพันซุปเปอร์ 6 จะได้รับเงิน 12 ต่อ 1 ถ้า แบงค์เกอร์ ชนะ 6 คะแนนยอดชนะทั้งหมดจะถูกจ่ายออกเพียงครึ่งเดียว
                                <br/> ♦ เดิมพันเสมอจ่าย 8 ต่อ1 เมื่อเพลเยอร์และแบงค์เกอร์มียอดรวมแต้มที่เท่ากัน
                                <br/> ♦ การเดิมพันคู่ ระบบจะจ่ายออก 11 ต่อ 1 เท่าเมื่อไพ่ของเพลเยอร์หรือแบงค์เกอร์มีแต้ม 2 ใบแรกเหมือนกัน
                                <br/>การเดิมพันข้างเคียง จะสามารถทำให้มีโอกาสที่ชนะเพิ่มขึ้น”.
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}> 
                        <h2>บาคาร่าแบบดั้งเดิม</h2>
                            <p>8 แต้มของไพ่จะถูกนำมาใช้ในการเดิมพันนี้:
                                <br/>
                                <br/> เรานำเสนอ บาคาร่า 8 สำรับ กับยอดรวมไพ่ทั้งหมด 416 ใบ โดยวัตถุประสงค์ของบาคาร่าคือการได้รับไพ่ในมือที่มีจำนวนแต้มใกล้เคียงกับ
                                9 แต้มที่สุด โดยไพ่ เอซจะนับเป็นหนึ่งแต้ม ; 2 ถึง 9 จะมีแต้มเป็นค่าของพวกมันเอง ; 10 และไพ่หน้า (ไพ่หน้าฝรั่ง
                                ; K, Q และ J)จะนับเป็นศูนย์ โดยผู้เล่นและเจ้ามือ จะได้รับไพ่สองใบ และผู้เล่นจะได้รับกสนแจกไพ่ใบแรก ในบางกรณีไพ่ใบที่
                                3 จะถูกแจกให้กับ ผู้เล่นหรือเจ้ามือ หรือ ให้ทั้งสองฝั่ง (กฎไพ่ใบที่สาม) ผู้เล่นที่มีแต้มใกล้เคียง 9 ที่สุด จะเป็นผู้ชนะ
                                และหากทั้งมือผู้เล่นและเจ้ามือ มีแต้มเท่ากัน ผลของเกมคือ “เสมอ”.
                                <br/>
                                <br/> การเรียกไพ่ใบที่สาม
                                <br/> เพบเยอร์
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 0 เสมอ เรียกไพ่เพิ่ม ผลรวมไพ่ในมือของผู้เล่น 1 เสมอ เรียกไพ่เพิ่ม ผลรวมไพ่ในมือของผู้เล่น
                                2 เสมอ เรียกไพ่เพิ่ม ผลรวมไพ่ในมือของผู้เล่น 3 เสมอ เรียกไพ่เพิ่ม ผลรวมไพ่ในมือของผู้เล่น 4 เสมอ เรียกไพ่เพิ่ม
                                ผลรวมไพ่ในมือของผู้เล่น 5 อยู่ ผลรวมไพ่ในมือของผู้เล่น 6 อยู่ ผลรวมไพ่ในมือของผู้เล่น 7 อยู่ ผลรวมไพ่ในมือของผู้เล่น
                                8 อยู่"ชนะทันที" ผลรวมไพ่ในมือของผู้เล่น 9 อยู่"ชนะทันที""
                                <br/> แบงค์เกอร์
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 0 เสมอ เรียกไพ่เพิ่ม
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 1 เสมอ เรียกไพ่เพิ่ม
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 2 เสมอ เรียกไพ่เพิ่ม
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 3 หากเพลเยอร์จั่ว 0,A ,8, แบงค์เกอร์อยู่
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 4 หากเพลเยอร์จั่ว 0,A,8,9 แบงค์เกอร์อยู่
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 5 หากเพลเยอร์จั่ว 0,A,2,3,8,9 แบงค์เกอร์อยู่
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 6 หากเพลเยอร์จั่ว 0,A,2,3,4,5,8,9 แบงค์เกอร์อยู่
                                <br/> ผลรวมไพ่ในมือของผู้เล่น 7 อยู่ ผลรวมไพ่ในมือของผู้เล่น 8 อยู่"ชนะทันที" ผลรวมไพ่ในมือของผู้เล่น 9 อยู่"ชนะทันที""
                                <br/> - อัตราการจ่าย
                                <br/> เดิมพันแบงค์เกอร์ ค่าต่อรอง 1 ： 0.95
                                <br/> เดิมพันเพลเยอร์ ค่าต่อรอง 1 ： 1
                                <br/> เดิมพันเสมอ ค่าต่อรอง 1 ： 8
                                <br/> เดิมพันแบงค์เกอร์คู่ ค่าต่อรอง 1 ： 8
                                <br/>： 11
                                <br/> เดิมพันเพลเยอร์คู่ ค่าต่อรอง 1 ： 11
                                <br/> เดิมพันคู่ใดใด ค่าต่อรอง 1 ： 5
                                <br/> เดิมพัน Perfect pair ค่าต่อรอง 1 ： 25
                                <br/> เดิมพันใหญ่ ค่าต่อรอง 1 ： 0.54
                                <br/> เดิมพันเล็ก ค่าต่อรอง 1 ： 1.50
                                <br/> ♦ สำหรับผลการแข่งขันเกมส์เสมอ ใด ๆ การเดิมพันที่วางไว้สำหรับ Banker และ Player จะถูกส่งคืนให้กับผู้เล่น.
                                <br/> ♦ " Banker Pair " หมายถึงมือเริ่มต้นของ Banker มีค่าหรือตัวอักษรเหมือนกัน.
                                <br/> ♦ "Player Pair" หมายถึงมือที่เริ่มในฝั่ง Player สองฝั่ง มีค่าหรือตัวอักษรเท่ากัน
                                <br/> ♦ "คู่ " หมายถึงมือเริ่มต้นของ Banker หรือ Player มีค่าหรือตัวอักษรเดียวกัน
                                <br/> ♦ "Perfect Pair" หมายถึงมือเริ่มต้นของนายธนาคารหรือผู้เล่นมีชุดและค่าเดียวกันหรือชุดเดียวกันและตัวอักษร
                                <br/> ♦ "ใหญ่" หมายถึงเมื่อคุณแสดงมือคุณมีไพ่ 5 หรือ 6 ใบ
                                <br/> ♦ "เล็ก" หมายถึงเมื่อคุณแสดงมือคุณมีไพ่ 4 ใบ 
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2>ซุปเปอร์บาคาร่า</h2>
                            &nbsp;
                            <p> ไม่มีความแตกต่างมากนักระหว่าง บาคาร่า และ ซุปเปอร์บาคาร่า ข้อแตกต่างเพียงอย่างเดียวคือ ซุปเปอร์บาคาร่ามีการเดิมพันพิเสษเพิ่มเติมอีก
                                6 ช่องทาง:
                                <br/>
                                <img src="http://i.imgur.com/GWynoVc.png" alt=""></img>
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2> ไพ่คู่ บาคาร่า </h2>
                            &nbsp;
                            <p> “ไพ่คู่ บาคาร่า” เป็นการเดิมพันฝ่ายใดฝ่ายหนึ่งที่ชนะบน Punto Banco ถ้าไพ่สองใบแรกที่ถูกแจกให้กับ ฝ่าย ผู้เล่น หรือ
                                ฝ่ายเจ้ามือ ออกเป็นคู่ก็จะชนะ ตามที่ผู้เล่นได้เดิมพันไว้ ( ตัวอย่างเช่นผลฝ่ายผู้เล่นออกคู่ 10, 10 หรือ K, K ผู้เล่นที่เดิมพันฝ่ายPLAYER
                                PAIRS จะเป็นผู้ชนะ) และผู้เดิมพันอีกฝ่ายจะเป็นผู้แพ้ ซึ่งผู้เล่นยังสามารถวางเดิมพัน ผลฝ่ายผู้เล่นออกคู่ และผลฝ่ายเจ้ามือออกคู่
                                หรือทั้งสองอย่างได้ตามปกติ นอกจากผู้เล่นจะวางในส่วนผลฝ่ายผู้เล่นออกคู่ และผลฝ่ายเจ้ามือออกคู่ แล้วยังสามารถที่จะวางเดิมพัน
                                ในส่วนอื่นๆได้อีกด้วย
                                <br/>
                                <br/> ♦ ทายว่าไพ่สองใบแรกของฝ่ายใดฝ่ายหนึ่งจะออกไพ่คู่ อัตราจ่าย 1 ต่อ 11
                                <br/> ♦ รายละเอียด Sidebet House Edge:
                                <br/> 8 แต้ม/เด้ง -- อัตราจ่าย 11 ต่อ 1-- ความน่าจะเป็นของไพ่คู่ 7.47% -- House Edge 10.36%
                                <br/> 6 แต้ม/เด้ง -- อัตราจ่าย 11 ต่อ 1-- ความน่าจะเป็นของไพ่คู่ 7.40% -- House Edge 11.25% </p>
                        
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                            <h2>ผู้เล่น คาบาร่า 14 ราย (ต่อโต๊ะ)</h2>
                            &nbsp;
                            <p> 14 ผู้เล่น บาคาร่า คล้ายกับ การเล่นไพ่คู่ บาคาร่า (Baccarat Pairs) มีกฎเดียวกัน แต่มีความตื่นเต้นเป็นพิเศษเพื่อให้ผู้เล่นรู้สึกว่าพวกเขาอยู่ในคาสิโนจริง
                                และมีความสนุกพร้อมกับความสุขมากขึ้นอีกด้วย
                                <br/>
                                <br/> - คุณสมบัติของเกมส์
                                <br/> ♦ อัตราในการเดิมพันไม่จำกัดเสมือนอยู่ในสภาพแวดล้อมของคาสิโนจริง
                                <br/> ♦ สามารถรองรับผู้เล่นได้ถึง 14 รายต่อโต๊ะ ในการเล่นและโต้ตอบในเวลาเดียวกันบนอินเทอร์เน็ต p&gt;
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 6}>
                        <h2> บาคาร่า คลาสสิก</h2>
                            &nbsp;
                            <p> บาคาร่าคลาสสิกเป็นเกมไพ่ที่เล่นกันที่บ้าน วัตถุประสงค์ของเกมคือการทำนายผลของไพ่ที่แจกให้กับผู้เล่นและเจ้ามือ ทุกมือจะมีค่าแต้มเท่ากับหรือน้อยกว่า9
                                ,โปรดจำไว้ว่าไพ่ทั้งหมดมีแต้มสูงสุด 10 แต้ม นับเป็น0 และเอซ นับเป็น1 แต้ม เมื่อแต้มรวมของไพ่มากกว่า 10แต้ม แล้ว
                                10แต้ม จะถูกหักออกเพื่อให้ได้แต้มไพ่ต่ำกว่าหรือเท่ากับ9 แต้ม ในการเล่นคุณสามารถวางเดิมพันของคุณได้ที่ แบงค์เกอร์,เพลเยอร์หรือเสมอ
                                และไม่สามารถวางเดิมพันได้มากกว่าหนึ่งรายการ กฎกติกาการเล่นสามารถดูได้จากคู่มือด้านล่าง ผู้ชนะเดิมพันคือผู้ที่ได้คะแนนใกล้เคียงกับคะแนนสูงสุดถึง
                                9 แต้มหลังจากที่เปิดไพ่แล้ว หลังจากนั้นไพ่จะถูกเก็บ และฝ่ายที่ชนะจะได้รับเงินตามอัตรา
                                <br/>
                                <br/> - ข้อมูล
                                <br/> - เงื่อนไข
                                <br/> 1. 6 เด้งปกติปกติใช้กับไพ่ 52 ใบและไม่มีไพ่ โจ๊กเกอร์ 2. เจ้าหน้าที่ จะสับไพ่ก่อนแจกทุกครั้ง 3. แต้มไพ่ทั้งหมดจะไม่รวม
                                โพดำ, โพแดง, ดอกจิก, ข้าวหลามตัด 4. กฏของเกมและการจ่ายเงินรางวัลจะเหมือนกันทั้งในรูปแบบเงินจริงและรูปแบบเงินที่เป็นเครดิต
                                5.ไพ่ที่มีแต้ม 10 แต้ม หรือเท่ากับ 10 แต้ม จะถูกนับเป็น 0 ตัวอย่างเช่น ถ้าได้ 6+7 =13 แต้ม 10 แต้มจะถูกหักออก
                                เหลือเพียง 3 แต้มเท่านั้น
                                <br/> 1. ไม่ว่าผู้เล่นหรือเจ้ามือ ถือไพ่ที่ 8 หรือ 9 แต้ม จะเรียกว่า อยู่ กฎนี้จะอยู่เหนือกฎอื่น ๆ ทั้งหมด 2. ถ้าผู้เล่นทั้งหมดมีแต้ม
                                5 แต้มหรือน้อยกว่า หลังจากนั้นผู้เล่นต้องเรียกไพ่เพิ่มเพื่อเพิ่มแต้ม ถ้าผู้เล่นไม่เรียกไพ่เพิ่ม มิฉะนั้น ผู้เล่นฝั่งตรงข้ามจะถือว่าฝั่งผู้เล่นอยู่
                                3. หากผู้เล่นมีแต้มที่ดี อยู่ หรือไม่เรียกไพ่เพิ่มแล้ว หลังจากนั้นเจ้ามือเจ้ามือสามารถเรียกไพ่เพิ่มได้ถ้ามีแต้มที่เท่ากับ
                                หรือน้อยกว่า 5 </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 7}>
                        <h2> VIPบาคาร่า </h2>
                            &nbsp;
                            <p> VIP บาคาร่า คือเกมส์ที่มีการเดิมพันสูงตั้งแต่ในเกมแรก ซึ่งผู้เล่นที่มีเงินเดิมพันมากที่สุดไม่ว่าจะเล่นในฝั่งผู้เล่นหรือเจ้ามือ
                                มีโอกาสที่จะได้ลุ้นไพ่ใบที่คว่ำอยู่และทราบผลก่อนผู้เล่นเกมรายอื่น ๆ นอกจากการเดิมพันระหว่าง ผู้เล่น, เจ้ามือ
                                หรือ Tie แล้วVIP บาคาร่ายังสนับสนุนการเดิมพันอีก 6 ด้าน ซึ่งทำให้สมาชิกมีโอกาสในการเดิมพันเพิ่มขึ้น
                                <br/>
                                <br/> - ข้อมูล
                                <br/> มีชิปทั้งหมด 6 ขนาดที่มีไว้บริการ ดังนั้นเพียงแค่คลิกเลือกชิปขนาดที่ต้องการและวางเดิมพันบนตำแหน่ง ของฝ่ายผู้เล่น
                                , เสมอ หรือ แบงค์เกอร์ ในกรณีที่คุณต้องการเพิ่มการเดิมพันบางส่วน ให้คลิกที่เดิมพันไพ่คู่ที่อยู่มุมขวาล่างและ
                                เลือกเดิมพันไพ่คู่ฝ่ายผู้เล่น และ เดิมพันไพ่คู่ฝ่ายเจ้ามือ จะถูกเพิ่มลงในต้นฉบับ 3 ประเภท.
                                <br/>แผงตัวเลือกเกมที่ด้านล่างของหน้าจอมีคุณลักษณะที่เป็นประโยชน์จำนวนมาก ซึ่งช่วยให้ผู้เล่นสามารถปรับคุณภาพวิดีโอและคุณภาพเสียง
                                สลับระหว่างมุมมองคลาสสิกและมุมมอง 3 มิติ สนทนากับตัวแทนและติดตามประวัติเกมได้ .
                                <br/> แผงที่แสดงในมุมซ้ายบนจะบอกถึงลักษณะของ Big Road, Big Eye Boy, Small Road and Cockroach,ซึ่งช่วยให้ผู้เล่นได้รับทราบถึงแนวโน้มล่าสุด
                                แม้ว่าคุณอาจต้องการความช่วยเหลือในการเรียนรู้ว่าตัวเลขเหล่านี้มีความหมายอะไร
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 8}>
                            <h2> การเดิมพันบาคาร่า</h2>
                            &nbsp;
                            <p> การเดิมพันบาคาร่าเป็นหนึ่งในเกมที่เก่าแก่และเป็นที่นิยมมากที่สุดในทั่วทุกมุมโลก นอกจากนี้ ทางเรายังพร้อมมอบประสบการณ์ใหม่ๆ
                                สำหรับการเล่นเกมที่แท้จริงให้แก่คุณ! ยิ่งกว่านั้นยังเป็นโอกาสที่ดีในการเพิ่มประสบการณ์การเล่นของผู้เล่น โดยการนำการสื่อออนไลน์ที่เป็นเบบเรียลไทม์(เสมือนว่าผู้เล่นอยู่ในคาสิโน
                                ณ ขณะนั้น) มาใช้ควบคู่ กับการแชทที่สามารถแลกเปลี่ยนความคิดเห็นกับผู้ที่เล่นบาคาร่าได้ในขณะที่รอเปิดไพ่ สด จากคาสิโนจริง
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 9}>
                            <h2> หลากหลายเกมบาคาร่า</h2>
                            &nbsp;
                            <p>ในเกมบาคาร่าถ่ายทอดสดทั่วไปภายในคาสิโน ผู้เล่นสามารถย้ายไปที่โต๊ะอื่นได้ และสามารถทำเช่นเดียวกันในขณะที่เล่นเกมโอเรียนเต็ล
                                แต่เพื่อป้องกันผู้เล่นเกิดความสับสน เราจึงสร้างโปรแกรมที่สามารถเล่นได้หลายเกมในเวลาเดียวกัน ดังนั้นผู้เล่นที่นี่อาจเลือกที่จะเล่นได้ถึงหก
                                (6) โต๊ะบาคาร่าได้พร้อมกัน สิ่งที่ดีเกี่ยวกับคุณลักษณะนี้คือทุกโต๊ะในกลุ่มยังคงสามารถใช้ได้ในตารางบาคาร่าเดียวกัน
                                ตัวอย่างเช่นการจับเวลาสำหรับการวางเดิมพันแผงควบคุม ฟังก์ชันSuper Six การปิดหน้าไพ่ ฯลฯ เกมโอเรียนเต็ล คือเกมบาคาร่ามาที่สามารถเล่นได้ทั้ง2
                                ประเภทในเวลาเดียวกัน คือ บาคาร่าแบบ 3 โต๊ะและ บาคาร่าดังกล่าวแบบ 6 โต๊ะ
                                <br/>
                                <br/> - หลากหลายเกมบาคาร่า: AG, OPUS
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 10}>
                             <h2> บาคาร่าโบนัสมังกร</h2>
                            &nbsp;
                            <p> โบนัสมังกร เป็นการเดิมพันในฝั่งที่เป็นตัวเลือกที่ถูกนำเสนอในตารางบาคาร่า โบนัสมังกร จะชนะถ้ามือบาคาร่า (ฝ่ายเพลเยอร์
                                หรือ ฝ่ายแบงค์เกอร์ )มีแต้มรวมที่สูงกว่าอีกฝ่าย หรือแต้มรวมของฝั่งบาคาร่าสูงกว่ามือของฝ่ายตรงข้าม 4 แต้มขึ้นไป
                                <br/> - 1. เมื่อข้างที่คุณเลือกพนันชนะแบบป๊อก
                                <br/> - 2. เมื่อข้างที่คุณเลือกชนะที่อย่างน้อย 4 แต้มขึ้นไป
                                <br/> - 3. เมื่อแบงค์เกอร์และเพลเยอร์ทั้งคู่มีผลที่ 3 แต้มหรือต่างน้อยกว่านั้น จะมีผลเป็นแพ้
                                <br/> - บาคาร่าโบนัสมังกร: AG, EA, MG
                                <br/> - ข้อควรระวัง
                                <br/> 1. เมื่อมีการใช้สำรับไพ่แต่ละชุดเล่นถึง31 รอบหลังจากนั้น จะไม่อนุญาติให้เดิมพันเพลเยอร์มังกร,แบงค์เกอร์มังกร,ใหญ่และเล็ก
                                <br/> 2. การเดิมพันต่ำสุดและสูงสุดจะขึ้นอยู่กับตารางที่กำหนดไว้ ผู้เล่นสามารถวางเดิมพันภายในช่วงการเดิมพันแบบรวมของตารางการเดิมพันและวงเงินเดิมพันส่วนบุคคลของผู้เล่น
                                หากคุณต้องการปรับวงเงินเดิมพันของคุณ กรุณาติดต่อฝ่ายบริการลูกค้า
                                <br/> 3. เมื่อไพ่ถูกเปิดโดยดีลเลอร์ ระบบอาจจะสามารถหรือไม่สามารถอ่านไพ่ได้ หากระบบไม่สามารถอ่านไพ่ได้ ดีลเลอร์จะสแกนอีกครั้งจนกว่าระบบจะสามารถอ่านไพ่ได้
                                ถ้าระบบยังไม่สามารถอ่านไพ่ได้ การเดิมพันรอบนั้นๆ จะถูกยกเลิกทันที
                                <br/>4. ในกรณีที่บิลเดิมพันมีการคำนวนหรือแจ้งผิด ระบบจะทำรายการคำนวนอีกครั้งโดยอ้างอิงจากวีดีโอที่บันทึกไว้
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 11}>
                            <h2>บาคาร่า Playboy</h2>
                            <p>หากคุณกำลังมองหาสุดยอดความตื่นเต้นขณะเล่นเกมไพ่ยอดนิยมในเอเชีย ดังนั้นคุณจะต้องลองเกมนี้ เพย์บอยไลฟ์บาคาร่า ( Playboy
                                Live Baccarat) เกมนี้ถูกจัดให้เล่นที่โต๊ะพิเศษที่คาสิโนในโตรอนโตประเทศแคนนาดา ที่ซึ่งพนักงานในนั้นเรียกตัวเองว่า
                                บันนี่และเพลย์บอย ซึ่งถือว่าเป็นบทบาทที่แท้จริงของพวกเขา
                                <br/>
                                <br/> - บาคาร่า Playboy: MG
                                <br/>
                                <br/> - ตารางเพลย์บอยบาคาร่าที่ดูสวยงามและสามารถรองรับผู้เล่นได้ถึง 7 คนต่อครั้ง ในขณะที่คุณมีตัวเลือกในการเล่นหลายโต๊ะพร้อมกัน
                                โดยการกดปุ่มเพิ่มตาราง เมื่อคุณเลือกขนาดชิปที่ต้องการแล้วให้คลิกที่ P หรือ B ที่ด้านหน้าของที่นั่งเพื่อเดิมพัน
                                ผู้เล่น (Player) หรือ (Banker) ตามลำดับ
                                <br/> - ในแต่ละส่วนเหล่านี้จะมีช่องโบนัสขนาดเล็กซึ่งคุณสามารถทำการเดิมพันแบบ Dragon โบนัสได้ การเดิมพันจะทำให้คุณเห็นความแตกต่างของผู้ชนะทั้งฝั่ง
                                ผู้เล่น หรือ เจ้ามือ โดยจ่ายเงินตั้งแต่ 30 ถึง 1 ไพ่คู่ ฝ่ายผู้เล่น และ ๆไพ่คู่ฝ่ายเจ้ามือ ชนะเดิมพันอัตราจ่าย
                                11 ต่อ 1 ในขณะที่อัตราจ่าย เสมอ 8 ต่อ 1.
                                <br/> - ประวัติการเล่นและแผนมาตรฐานจะแสดงขึ้นที่ด้านซ้ายและด้านขวาของเจ้ามือการพนัน ในส่วนบนหน้าจอเกม ในขณะเดียวกันคุณสามารถดูตัวเลือกเกมที่สำคัญได้ทั้งหมดจากแท็บเมนู.
                            </p>
                        </div>
                        <div className="centerDetai" hidden={this.state.current !== 12}>
                            <h2> แต้ม บาคาร่า </h2>
                            &nbsp;
                            <p>แต้ม บาคาร่าเป็นอีกรูปแบบหนึ่งของ "การเล่นบาคาร่าแบบไม่มีคอมมิชชั่น " - Super 6
                                <br/>
                                <br/> -ลักษณะใหม่ที่น่าตื่นเต้น: อัตราส่วนการเดิมพันแบบเรียลไทม์ – แสดงจำนวนเงินเดิมพันตามเวลาจริงใน ขณะนั้น ทั้งฝั่งเจ้ามือ
                                และฝั่งผู้เล่น จะถูกอัปเดตทุกครั้งที่หมดเวลาเดิมพัน.
                                <br/> -มีการเดิมพันรูปแบบใหม่เพิ่มขึ้นทั้งในฝั่งของ ผู้เล่น และเจ้ามือ เช่น [ผู้เล่นชนะแบบธรรมชาติ], [เจ้ามือชนะแบบธรรมชาติ],
                                [เจ้ามือ 0 แต้ม] ถึง [เจ้ามือ 9 แต้ม] และ [ผู้เล่น 0 แต้ม]ถึง [ผู้เล่น 9 แต้ม].
                                <br/> -รายการแต้มเดิมพัน สำหรับ เจ้ามือ และ ผู้เล่น การจ่ายเงินจะถูกจ่ายเป็นเป็นรายบุคคลและไม่เกี่ยวข้องกับการแพ้
                                ชนะของเกมนั้น.
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


BaijialeTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BaijialeTh))));