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

export class GameRuleOneTh extends React.Component {
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
                                    <a href="th/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="th/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="th/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="th/for_member">รูเล็ต RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>Marvel Jackpot</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>5-10 ไลน์ที่เล่น</a>
                            </li>
                            <li className={this.state.current === 3 ? "Active" : ""} onClick={this.onClick.bind(this,3)}>
                                <a>15-20 ไลน์เดิมพัน</a>
                            </li>
                            <li className={this.state.current === 4 ? "Active" : ""} onClick={this.onClick.bind(this,4)}>
                                <a>25+ Play-lines</a>
                            </li>
                            <li className={this.state.current === 5 ? "Active" : ""} onClick={this.onClick.bind(this,5)}>
                                <a>Multi-Spin</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                   
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>Marvel Jackpot</h2>
                            <h1>กติกา</h1>
                            <p>-คุณสามารถเลือกสกุลเงิน (เหรียญ) ได้โดยคลิกปุ่มเพื่อเปลี่ยนสกุลเงินที่มุมล่างซ้ายของหน้าจอ.
                                <br />
                                <br /> - บนไลน์ (Line) เดิมพันจะถูกเลือกโดยคลิกเดิมพันต่อเส้นนั้นๆ การคลิกแต่ละครั้งจะเป็นการเพิ่มเหรียญในการวางเดิมพันไลน์
                                ,เมื่อกดถึงจำนวนเงินสูงสุด (10 เหรียญของสกุลเงินเดิมพันที่เลือกไว้) ให้คลิกที่ปุ่มอีกครั้งเพื่อรีเซ็ตเดิมพันไลน์เป็นหนึ่งเหรียญ.
                                <br />
                                <br />
                                <br /> Paylines(เส้นการจ่ายเดิมพัน)จะถูกเลือกโดยการคลิกที่ไลน์นั้นๆ, การคลิกแต่ละครั้งจะเปิดใช้งานPaylines(เส้นการจ่ายเดิมพัน)
                                เมื่อเปิดใช้งานเส้นเดิมพันทั้งหมดคลิกปุ่มอีกครั้งจะรีเซ็ตเป็นเส้นเดิมพันที่ใช้งานอยู่ให้เหลือเส้นเดียว การวางไลน์ที่จะเลือกเดิมพันสามารถใช้งานได้โดยใช้ปุ่มเลขที่ด้านข้างของวงล้อ
                                การเลือกเส้นเดิมพันที่จ่ายเงินสูงจะรวมถึงรายการทั้งหมดด้วย ตัวอย่างเช่นการเลือกไลน์เพย์ไลน์ 6 จะเปิดใช้งานตั้งแต่ไลน์
                                1 ถึง 5 . การคลิกเดิมพันสูงสุดจะเปิดใช้งานไลน์ทั้งหมดด้วยการวางเดิมพันสูงสุดต่อไลน์และหมุนวงล้อ .
                                <br />
                                <br />
                                <br /> -ยอดเดิมพันทั้งหมดต่อรอบเกมส์ = line bet X active paylines.
                                <br />
                                <br /> - การคลิกSpinจะหมุนวงล้อโดยเลือกเส้นและเส้นเดิมพันปัจจุบัน ในระหว่างที่แกนหมุนปุ่มสปินจะเปลี่ยนเป็น Stop การคลิกที่
                                Stop จะสิ้นสุดการเคลื่อนไหวของสปินและจะแสดงผลการปั่นทันที.
                                <br />
                                <br /> -การเล่นยังสามารถหมุนได้โดยอัตโนมัติใช้ฟังก์ชั่น Auto Start การคลิก + หรือ - เหนือ Auto Start จะเลือกจำนวนการหมุนเพื่อเปิดใช้งานต่อเนื่อง
                                การคลิกเริ่มอัตโนมัติจะหมุนวงล้อ ปุ่ม Auto Start จะเปลี่ยนเป็น Stop ในโหมด Auto Start .โหมดเริ่มต้นอัตโนมัติจะสิ้นสุดลงเมื่อวงล้อหมุนจำนวนครั้งที่ผู้เล่นกำหนดหรือเมื่อผู้เล่นคลิกหยุด.
                                <br />
                                <br /> - การชนะเดิมพันจะคำนวณตาม paytable Line win = เดิมพันไลน์ X ตัวคูณที่สอดคล้องกันตาม paytable Scatter win = เดิมพันทั้งหมด
                                x ตัวคูณที่สอดคล้องกันตามตารางการจ่ายเงิน สามารถดูรายละเอียดได้ที่หน้าข้อมูล.
                                <br />
                                <br /> - ในเพย์ไลน์ที่กำหนดเฉพาะไลน์การจ่ายเงินสูงสุดที่ชนะการเดิมพันจะจ่ายในกรณีที่การชนะพร้อมกันในช่องจ่ายเงินที่ต่างกันจะถูกเพิ่มเข้าด้วยกัน.
                                <br />
                                <br /> - ในกรณีของการปั่นที่ชนะเดิมพัน จะแสดงเงินสะสม สามารถกดปุ่มข้ามได้โดยคลิกที่ใดก็ได้บนหน้าจอ
                                <br />
                                <br /> - Payline ชนะและการชนะเดิมพันรวมจะปรากฏบนแถบที่อยู่ด้านล่างของวงล้อหรือหน้าต่างเกม
                                <br />
                                <br /> -ปุ่ม Gamble ซึ่งเมื่อคลิกแล้วจะเริ่มเล่น Gamble ข้อมูลเพิ่มเติมเกี่ยวกับคุณลักษณะ Gamble สามารถดูได้ที่ด้านล่าง.</p>
                            <br />
                            <br /> &nbsp;
                            <h1>ข้อมูล Page</h1>
                            &nbsp;
                            <p>- การคลิกข้อมูลจะเปิดหน้าจออ้างอิงที่อธิบายองค์ประกอบของเกมต่างๆ การคลิกปุ่มลูกศรที่มุมขวาล่างของหน้าจอจะช่วยให้สามารถนำทางระหว่างหน้าจอข้อมูลต่างๆได้
                                .
                                <br />
                                <br /> ► หน้าจอ Paytable อัตราการจ่ายเดิมพัน จะแสดงชุดค่าผสมที่ชนะทั้งหมด เมื่อเปิดหลังจากหมุนชนะการผสมสัญลักษณ์ที่ชนะ
                                (จำนวนของสัญลักษณ์และตัวคูณการเดิมพัน) จะปรากฏ
                                <br /> ► หน้าจอเกมส์ฟรีจะอธิบายเกี่ยวกับชุดค่าผสมของสัญลักษณ์ที่จำเป็นสำหรับการเข้าสู่ Free Games และอธิบายเกี่ยวกับกฎคุณลักษณะฟรีเกมส์
                                .
                                <br />- หน้าจอ Gamble จะอธิบายถึงวิธีการเรียกเงินรางวัลเป็นสองเท่าหากชนะโดยการเล่นการพนันกับพวกเขาและอธิบายถึงกฎการเล่น
                                .
                                <br />- การคลิกที่Paylineในหน้า Paytable จะเปิดหน้าจอที่แสดงชุดค่าผสมของไลน์ไลน์ที่เป็นไปได้ทั้งหมด การคลิก Hide Paylines
                                จะปิดหน้าจอนี้และกลับไปที่หน้า Paytable .
                                <br /> - การคลิกBackจะออกจากหน้าจอข้อมูลและกลับไปที่เกม .
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> PAYLINES </h1>
                            &nbsp;
                            <p>- Paylineที่ใช้งานอยู่แสดงโดยLineที่ปรากฏเหนือวงล้อ สามารถเปิดใช้งานPaylineและแสดงรูปร่างได้โดยคลิกที่เส้น
                                <br />
                                <br /> - การชนะจะนับเฉพาะPaylineที่เปิดใช้งานเท่านั้น
                                <br />
                                <br /> - มีความแตกต่างระหว่างการเดิมพันแบบไลน์และการเดิมพันทั้งหมด เดิมพันไลน์จะแสดงจำนวนเงินที่เดิมพันบนไลน์เพย์ไลน์เดียว
                                เงินเดิมพันทั้งหมดจะแสดงจำนวนเงินที่เดิมพันทั้งหมดในรอบการเล่นเกม การจ่ายเงินที่แสดงใน Paytable คูณด้วยการเดิมพันไลน์.
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> ABOUT PAYOUTS </h1>
                            &nbsp;
                            <p>- การจ่ายเงินจะแสดงอยู่ในหน้าจอ Paytable หากต้องการหาจำนวนเงินที่จะได้รับจากการเดิมพัน ต้องนับไลน์คูณด้วยการจ่ายเงิน.
                                <br />
                                <br /> - หากมีชุดค่าผสมแบบเพย์ไลน์สองชุดที่ชนะอยู่ในบรรทัดเดียวกันจะมีการจ่ายเงินรางวัลมากขึ้น หากมีเพย์ไลน์ที่ใช้งานอยู่มากกว่าหนึ่งรายการมีชุดค่าผสมที่ชนะการชนะจะมีการเพิ่มเงินรางวัล
                                .
                                <br />
                                <br /> - ชุดค่าผสมที่ชนะจะต้องเริ่มต้นจากแกนหมุนที่ด้านซ้ายสุดและสัญลักษณ์จะต้องต่อเนื่องกัน
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>5-10 Play-lines</h2>
                            <h1>กติกา</h1>
                            <p>-คุณสามารถเลือกสกุลเงิน (เหรียญ) ได้โดยคลิกปุ่มเพื่อเปลี่ยนสกุลเงินที่มุมล่างซ้ายของหน้าจอ.
                                <br />
                                <br /> - บนไลน์ (Line) เดิมพันจะถูกเลือกโดยคลิกเดิมพันต่อเส้นนั้นๆ การคลิกแต่ละครั้งจะเป็นการเพิ่มเหรียญในการวางเดิมพันไลน์
                                ,เมื่อกดถึงจำนวนเงินสูงสุด (10 เหรียญของสกุลเงินเดิมพันที่เลือกไว้) ให้คลิกที่ปุ่มอีกครั้งเพื่อรีเซ็ตเดิมพันไลน์เป็นหนึ่งเหรียญ
                                .
                                <br />
                                <br />
                                <br /> -Paylines(เส้นการจ่ายเดิมพัน)จะถูกเลือกโดยการคลิกที่ไลน์นั้นๆ, การคลิกแต่ละครั้งจะเปิดใช้งานPaylines(เส้นการจ่ายเดิมพัน)
                                เมื่อเปิดใช้งานเส้นเดิมพันทั้งหมดคลิกปุ่มอีกครั้งจะรีเซ็ตเป็นเส้นเดิมพันที่ใช้งานอยู่ให้เหลือเส้นเดียว การวางไลน์ที่จะเลือกเดิมพันสามารถใช้งานได้โดยใช้ปุ่มเลขที่ด้านข้างของวงล้อ
                                การเลือกเส้นเดิมพันที่จ่ายเงินสูงจะรวมถึงรายการทั้งหมดด้วย ตัวอย่างเช่นการเลือกไลน์เพย์ไลน์ 6 จะเปิดใช้งานตั้งแต่ไลน์
                                1 ถึง 5 . การคลิกเดิมพันสูงสุดจะเปิดใช้งานไลน์ทั้งหมดด้วยการวางเดิมพันสูงสุดต่อไลน์และหมุนวงล้อ .
                                <br />
                                <br />
                                <br /> - ยอดเดิมพันทั้งหมดต่อรอบเกมส์ = line bet X active paylines.
                                <br />
                                <br /> - การคลิกSpinจะหมุนวงล้อโดยเลือกเส้นและเส้นเดิมพันปัจจุบัน ในระหว่างที่แกนหมุนปุ่มสปินจะเปลี่ยนเป็น Stop การคลิกที่
                                Stop จะสิ้นสุดการเคลื่อนไหวของสปินและจะแสดงผลการปั่นทันที..
                                <br />
                                <br /> - การเล่นยังสามารถหมุนได้โดยอัตโนมัติใช้ฟังก์ชั่น Auto Start การคลิก + หรือ - เหนือ Auto Start จะเลือกจำนวนการหมุนเพื่อเปิดใช้งานต่อเนื่อง
                                การคลิกเริ่มอัตโนมัติจะหมุนวงล้อ ปุ่ม Auto Start จะเปลี่ยนเป็น Stop ในโหมด Auto Start .โหมดเริ่มต้นอัตโนมัติจะสิ้นสุดลงเมื่อวงล้อหมุนจำนวนครั้งที่ผู้เล่นกำหนดหรือเมื่อผู้เล่นคลิกหยุด.
                                <br />
                                <br /> - การชนะเดิมพันจะคำนวณตาม paytable Line win = เดิมพันไลน์ X ตัวคูณที่สอดคล้องกันตาม paytable Scatter win = เดิมพันทั้งหมด
                                x ตัวคูณที่สอดคล้องกันตามตารางการจ่ายเงิน สามารถดูรายละเอียดได้ที่หน้าข้อมูล .
                                <br />
                                <br /> - ในเพย์ไลน์ที่กำหนดเฉพาะไลน์การจ่ายเงินสูงสุดที่ชนะการเดิมพันจะจ่ายในกรณีที่การชนะพร้อมกันในช่องจ่ายเงินที่ต่างกันจะถูกเพิ่มเข้าด้วยกัน.
                                <br />
                                <br /> - ในกรณีของการปั่นที่ชนะเดิมพัน จะแสดงเงินสะสม สามารถกดปุ่มข้ามได้โดยคลิกที่ใดก็ได้บนหน้าจอ
                                <br />
                                <br /> - Payline ชนะและการชนะเดิมพันรวมจะปรากฏบนแถบที่อยู่ด้านล่างของวงล้อหรือหน้าต่างเกม .
                                <br />
                                <br /> -ปุ่ม Gamble ซึ่งเมื่อคลิกแล้วจะเริ่มเล่น Gamble ข้อมูลเพิ่มเติมเกี่ยวกับคุณลักษณะ Gamble สามารถดูได้ที่ด้านล่าง</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>ข้อมูล Page</h1>
                            <p>- การคลิกข้อมูลจะเปิดหน้าจออ้างอิงที่อธิบายองค์ประกอบของเกมต่างๆ การคลิกปุ่มลูกศรที่มุมขวาล่างของหน้าจอจะช่วยให้สามารถนำทางระหว่างหน้าจอข้อมูลต่างๆได้
                                .
                                <br />
                                <br /> ► หน้าจอ Paytable อัตราการจ่ายเดิมพัน จะแสดงชุดค่าผสมที่ชนะทั้งหมด เมื่อเปิดหลังจากหมุนชนะการผสมสัญลักษณ์ที่ชนะ
                                (จำนวนของสัญลักษณ์และตัวคูณการเดิมพัน) จะปรากฏ
                                <br /> ► หน้าจอเกมส์ฟรีจะอธิบายเกี่ยวกับชุดค่าผสมของสัญลักษณ์ที่จำเป็นสำหรับการเข้าสู่ Free Games และอธิบายเกี่ยวกับกฎคุณลักษณะฟรีเกมส์
                                .
                                <br /> - หน้าจอ Gamble จะอธิบายถึงวิธีการเรียกเงินรางวัลเป็นสองเท่าหากชนะโดยการเล่นการพนันกับพวกเขาและอธิบายถึงกฎการเล่น
                                .
                                <br /> - การคลิกที่Paylineในหน้า Paytable จะเปิดหน้าจอที่แสดงชุดค่าผสมของไลน์ไลน์ที่เป็นไปได้ทั้งหมด การคลิก Hide Paylines
                                จะปิดหน้าจอนี้และกลับไปที่หน้า Paytable .
                                <br /> - การคลิกBackจะออกจากหน้าจอข้อมูลและกลับไปที่เกม .</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>PAYLINES</h1>
                            <p>- Paylineที่ใช้งานอยู่แสดงโดยLineที่ปรากฏเหนือวงล้อ สามารถเปิดใช้งานPaylineและแสดงรูปร่างได้โดยคลิกที่เส้น
                                <br />
                                <br /> - การชนะจะนับเฉพาะPaylineที่เปิดใช้งานเท่านั้น
                                <br />
                                <br /> - มีความแตกต่างระหว่างการเดิมพันแบบไลน์และการเดิมพันทั้งหมด เดิมพันไลน์จะแสดงจำนวนเงินที่เดิมพันบนไลน์เพย์ไลน์เดียว
                                เงินเดิมพันทั้งหมดจะแสดงจำนวนเงินที่เดิมพันทั้งหมดในรอบการเล่นเกม การจ่ายเงินที่แสดงใน Paytable คูณด้วยการเดิมพันไลน์.
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>ABOUT PAYOUTS</h1>
                            <p>- การจ่ายเงินจะแสดงอยู่ในหน้าจอ Paytable หากต้องการหาจำนวนเงินที่จะได้รับจากการเดิมพัน ต้องนับไลน์คูณด้วยการจ่ายเงิน.
                                <br />
                                <br /> - หากมีชุดค่าผสมแบบเพย์ไลน์สองชุดที่ชนะอยู่ในบรรทัดเดียวกันจะมีการจ่ายเงินรางวัลมากขึ้น หากมีเพย์ไลน์ที่ใช้งานอยู่มากกว่าหนึ่งรายการมีชุดค่าผสมที่ชนะการชนะจะมีการเพิ่มเงินรางวัล
                                .
                                <br />
                                <br /> - ชุดค่าผสมที่ชนะจะต้องเริ่มต้นจากแกนหมุนที่ด้านซ้ายสุดและสัญลักษณ์จะต้องต่อเนื่องกัน
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 3}>
                        <h2>15-20 Play-lines</h2>
                            &nbsp;
                            <h1>กติกา</h1>
                            &nbsp;
                            <p>คุณสามารถเลือกสกุลเงิน (เหรียญ) ได้โดยคลิกปุ่มเพื่อเปลี่ยนสกุลเงินที่มุมล่างซ้ายของหน้าจอ.
                                <br />
                                <br /> - บนไลน์ (Line) เดิมพันจะถูกเลือกโดยคลิกเดิมพันต่อเส้นนั้นๆ การคลิกแต่ละครั้งจะเป็นการเพิ่มเหรียญในการวางเดิมพันไลน์
                                ,เมื่อกดถึงจำนวนเงินสูงสุด (10 เหรียญของสกุลเงินเดิมพันที่เลือกไว้) ให้คลิกที่ปุ่มอีกครั้งเพื่อรีเซ็ตเดิมพันไลน์เป็นหนึ่งเหรียญ
                                .
                                <br />
                                <br />
                                <br /> -Paylines(เส้นการจ่ายเดิมพัน)จะถูกเลือกโดยการคลิกที่ไลน์นั้นๆ, การคลิกแต่ละครั้งจะเปิดใช้งานPaylines(เส้นการจ่ายเดิมพัน)
                                เมื่อเปิดใช้งานเส้นเดิมพันทั้งหมดคลิกปุ่มอีกครั้งจะรีเซ็ตเป็นเส้นเดิมพันที่ใช้งานอยู่ให้เหลือเส้นเดียว การวางไลน์ที่จะเลือกเดิมพันสามารถใช้งานได้โดยใช้ปุ่มเลขที่ด้านข้างของวงล้อ
                                การเลือกเส้นเดิมพันที่จ่ายเงินสูงจะรวมถึงรายการทั้งหมดด้วย ตัวอย่างเช่นการเลือกไลน์เพย์ไลน์ 6 จะเปิดใช้งานตั้งแต่ไลน์
                                1 ถึง 5 . การคลิกเดิมพันสูงสุดจะเปิดใช้งานไลน์ทั้งหมดด้วยการวางเดิมพันสูงสุดต่อไลน์และหมุนวงล้อ .
                                <br />
                                <br />
                                <br /> - ยอดเดิมพันทั้งหมดต่อรอบเกมส์ = line bet X active paylines.
                                <br />
                                <br /> - การคลิกSpinจะหมุนวงล้อโดยเลือกเส้นและเส้นเดิมพันปัจจุบัน ในระหว่างที่แกนหมุนปุ่มสปินจะเปลี่ยนเป็น Stop การคลิกที่
                                Stop จะสิ้นสุดการเคลื่อนไหวของสปินและจะแสดงผลการปั่นทันที..
                                <br />
                                <br /> - การเล่นยังสามารถหมุนได้โดยอัตโนมัติใช้ฟังก์ชั่น Auto Start การคลิก + หรือ - เหนือ Auto Start จะเลือกจำนวนการหมุนเพื่อเปิดใช้งานต่อเนื่อง
                                การคลิกเริ่มอัตโนมัติจะหมุนวงล้อ ปุ่ม Auto Start จะเปลี่ยนเป็น Stop ในโหมด Auto Start .โหมดเริ่มต้นอัตโนมัติจะสิ้นสุดลงเมื่อวงล้อหมุนจำนวนครั้งที่ผู้เล่นกำหนดหรือเมื่อผู้เล่นคลิกหยุด.
                                <br />
                                <br /> - การชนะเดิมพันจะคำนวณตาม paytable Line win = เดิมพันไลน์ X ตัวคูณที่สอดคล้องกันตาม paytable Scatter win = เดิมพันทั้งหมด
                                x ตัวคูณที่สอดคล้องกันตามตารางการจ่ายเงิน สามารถดูรายละเอียดได้ที่หน้าข้อมูล .
                                <br />
                                <br /> - ในเพย์ไลน์ที่กำหนดเฉพาะไลน์การจ่ายเงินสูงสุดที่ชนะการเดิมพันจะจ่ายในกรณีที่การชนะพร้อมกันในช่องจ่ายเงินที่ต่างกันจะถูกเพิ่มเข้าด้วยกัน.
                                <br />
                                <br /> - ในกรณีของการปั่นที่ชนะเดิมพัน จะแสดงเงินสะสม สามารถกดปุ่มข้ามได้โดยคลิกที่ใดก็ได้บนหน้าจอ
                                <br />
                                <br /> - Payline ชนะและการชนะเดิมพันรวมจะปรากฏบนแถบที่อยู่ด้านล่างของวงล้อหรือหน้าต่างเกม .
                                <br />
                                <br /> -ปุ่ม Gamble ซึ่งเมื่อคลิกแล้วจะเริ่มเล่น Gamble ข้อมูลเพิ่มเติมเกี่ยวกับคุณลักษณะ Gamble สามารถดูได้ที่ด้านล่าง
                            </p>
                            <h1>ข้อมูล Page</h1>
                            &nbsp;
                            <p>- การคลิกข้อมูลจะเปิดหน้าจออ้างอิงที่อธิบายองค์ประกอบของเกมต่างๆ การคลิกปุ่มลูกศรที่มุมขวาล่างของหน้าจอจะช่วยให้สามารถนำทางระหว่างหน้าจอข้อมูลต่างๆได้
                                .
                                <br />
                                <br /> ► หน้าจอ Paytable อัตราการจ่ายเดิมพัน จะแสดงชุดค่าผสมที่ชนะทั้งหมด เมื่อเปิดหลังจากหมุนชนะการผสมสัญลักษณ์ที่ชนะ
                                (จำนวนของสัญลักษณ์และตัวคูณการเดิมพัน) จะปรากฏ
                                <br /> ► หน้าจอเกมส์ฟรีจะอธิบายเกี่ยวกับชุดค่าผสมของสัญลักษณ์ที่จำเป็นสำหรับการเข้าสู่ Free Games และอธิบายเกี่ยวกับกฎคุณลักษณะฟรีเกมส์
                                .
                                <br />- หน้าจอ Gamble จะอธิบายถึงวิธีการเรียกเงินรางวัลเป็นสองเท่าหากชนะโดยการเล่นการพนันกับพวกเขาและอธิบายถึงกฎการเล่น
                                .
                                <br />- การคลิกที่Paylineในหน้า Paytable จะเปิดหน้าจอที่แสดงชุดค่าผสมของไลน์ไลน์ที่เป็นไปได้ทั้งหมด การคลิก Hide Paylines
                                จะปิดหน้าจอนี้และกลับไปที่หน้า Paytable .
                                <br /> - การคลิกBackจะออกจากหน้าจอข้อมูลและกลับไปที่เกม .
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> PAYLINES </h1>
                            &nbsp;
                            <p>- Paylineที่ใช้งานอยู่แสดงโดยLineที่ปรากฏเหนือวงล้อ สามารถเปิดใช้งานPaylineและแสดงรูปร่างได้โดยคลิกที่เส้น
                                <br />
                                <br /> - การชนะจะนับเฉพาะPaylineที่เปิดใช้งานเท่านั้น
                                <br />
                                <br /> - มีความแตกต่างระหว่างการเดิมพันแบบไลน์และการเดิมพันทั้งหมด เดิมพันไลน์จะแสดงจำนวนเงินที่เดิมพันบนไลน์เพย์ไลน์เดียว
                                เงินเดิมพันทั้งหมดจะแสดงจำนวนเงินที่เดิมพันทั้งหมดในรอบการเล่นเกม การจ่ายเงินที่แสดงใน Paytable คูณด้วยการเดิมพันไลน์.
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> ABOUT PAYOUTS </h1>
                            &nbsp;
                            <p>- การจ่ายเงินจะแสดงอยู่ในหน้าจอ Paytable หากต้องการหาจำนวนเงินที่จะได้รับจากการเดิมพัน ต้องนับไลน์คูณด้วยการจ่ายเงิน.
                                <br />
                                <br /> - หากมีชุดค่าผสมแบบเพย์ไลน์สองชุดที่ชนะอยู่ในบรรทัดเดียวกันจะมีการจ่ายเงินรางวัลมากขึ้น หากมีเพย์ไลน์ที่ใช้งานอยู่มากกว่าหนึ่งรายการมีชุดค่าผสมที่ชนะการชนะจะมีการเพิ่มเงินรางวัล
                                .
                                <br />
                                <br /> - ชุดค่าผสมที่ชนะจะต้องเริ่มต้นจากแกนหมุนที่ด้านซ้ายสุดและสัญลักษณ์จะต้องต่อเนื่องกัน
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 4}>
                        <h2>25+ Play-lines</h2>
                            <h1>กติกา</h1>
                            <p>- คุณสามารถเลือกสกุลเงิน (เหรียญ) ได้โดยคลิกปุ่มเพื่อเปลี่ยนสกุลเงินที่มุมล่างซ้ายของหน้าจอ..
                                <br />
                                <br /> - บนไลน์ (Line) เดิมพันจะถูกเลือกโดยคลิกเดิมพันต่อเส้นนั้นๆ การคลิกแต่ละครั้งจะเป็นการเพิ่มเหรียญในการวางเดิมพันไลน์
                                ,เมื่อกดถึงจำนวนเงินสูงสุด (10 เหรียญของสกุลเงินเดิมพันที่เลือกไว้) ให้คลิกที่ปุ่มอีกครั้งเพื่อรีเซ็ตเดิมพันไลน์เป็นหนึ่งเหรียญ.
                                <br />
                                <br />
                                <br /> - Paylines(เส้นการจ่ายเดิมพัน)จะถูกเลือกโดยการคลิกที่ไลน์นั้นๆ, การคลิกแต่ละครั้งจะเปิดใช้งานPaylines(เส้นการจ่ายเดิมพัน)
                                เมื่อเปิดใช้งานเส้นเดิมพันทั้งหมดคลิกปุ่มอีกครั้งจะรีเซ็ตเป็นเส้นเดิมพันที่ใช้งานอยู่ให้เหลือเส้นเดียว การวางไลน์ที่จะเลือกเดิมพันสามารถใช้งานได้โดยใช้ปุ่มเลขที่ด้านข้างของวงล้อ
                                การเลือกเส้นเดิมพันที่จ่ายเงินสูงจะรวมถึงรายการทั้งหมดด้วย ตัวอย่างเช่นการเลือกไลน์เพย์ไลน์ 6 จะเปิดใช้งานตั้งแต่ไลน์
                                1 ถึง 5 . การคลิกเดิมพันสูงสุดจะเปิดใช้งานไลน์ทั้งหมดด้วยการวางเดิมพันสูงสุดต่อไลน์และหมุนวงล้อ .
                                <br />
                                <br />
                                <br /> - ยอดเดิมพันทั้งหมดต่อรอบเกมส์ = line bet X active paylines.
                                <br />
                                <br /> - การคลิกSpinจะหมุนวงล้อโดยเลือกเส้นและเส้นเดิมพันปัจจุบัน ในระหว่างที่แกนหมุนปุ่มสปินจะเปลี่ยนเป็น Stop การคลิกที่
                                Stop จะสิ้นสุดการเคลื่อนไหวของสปินและจะแสดงผลการปั่นทันที..
                                <br />
                                <br /> - การเล่นยังสามารถหมุนได้โดยอัตโนมัติใช้ฟังก์ชั่น Auto Start การคลิก + หรือ - เหนือ Auto Start จะเลือกจำนวนการหมุนเพื่อเปิดใช้งานต่อเนื่อง
                                การคลิกเริ่มอัตโนมัติจะหมุนวงล้อ ปุ่ม Auto Start จะเปลี่ยนเป็น Stop ในโหมด Auto Start .โหมดเริ่มต้นอัตโนมัติจะสิ้นสุดลงเมื่อวงล้อหมุนจำนวนครั้งที่ผู้เล่นกำหนดหรือเมื่อผู้เล่นคลิกหยุด.
                                <br />
                                <br /> - การชนะเดิมพันจะคำนวณตาม paytable Line win = เดิมพันไลน์ X ตัวคูณที่สอดคล้องกันตาม paytable Scatter win = เดิมพันทั้งหมด
                                x ตัวคูณที่สอดคล้องกันตามตารางการจ่ายเงิน สามารถดูรายละเอียดได้ที่หน้าข้อมูล .
                                <br />
                                <br /> - ในเพย์ไลน์ที่กำหนดเฉพาะไลน์การจ่ายเงินสูงสุดที่ชนะการเดิมพันจะจ่ายในกรณีที่การชนะพร้อมกันในช่องจ่ายเงินที่ต่างกันจะถูกเพิ่มเข้าด้วยกัน.
                                <br />
                                <br /> - ในกรณีของการปั่นที่ชนะเดิมพัน จะแสดงเงินสะสม สามารถกดปุ่มข้ามได้โดยคลิกที่ใดก็ได้บนหน้าจอ
                                <br />
                                <br /> - Payline ชนะและการชนะเดิมพันรวมจะปรากฏบนแถบที่อยู่ด้านล่างของวงล้อหรือหน้าต่างเกม .
                                <br />
                                <br /> -ปุ่ม Gamble ซึ่งเมื่อคลิกแล้วจะเริ่มเล่น Gamble ข้อมูลเพิ่มเติมเกี่ยวกับคุณลักษณะ Gamble สามารถดูได้ที่ด้านล่าง</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>ข้อมูล Page</h1>
                            <p>- การคลิกข้อมูลจะเปิดหน้าจออ้างอิงที่อธิบายองค์ประกอบของเกมต่างๆ การคลิกปุ่มลูกศรที่มุมขวาล่างของหน้าจอจะช่วยให้สามารถนำทางระหว่างหน้าจอข้อมูลต่างๆได้
                                .
                                <br />
                                <br /> ► หน้าจอ Paytable อัตราการจ่ายเดิมพัน จะแสดงชุดค่าผสมที่ชนะทั้งหมด เมื่อเปิดหลังจากหมุนชนะการผสมสัญลักษณ์ที่ชนะ
                                (จำนวนของสัญลักษณ์และตัวคูณการเดิมพัน) จะปรากฏ
                                <br /> ► หน้าจอเกมส์ฟรีจะอธิบายเกี่ยวกับชุดค่าผสมของสัญลักษณ์ที่จำเป็นสำหรับการเข้าสู่ Free Games และอธิบายเกี่ยวกับกฎคุณลักษณะฟรีเกมส์
                                .
                                <br /> - หน้าจอ Gamble จะอธิบายถึงวิธีการเรียกเงินรางวัลเป็นสองเท่าหากชนะโดยการเล่นการพนันกับพวกเขาและอธิบายถึงกฎการเล่น
                                .
                                <br /> - การคลิกที่Paylineในหน้า Paytable จะเปิดหน้าจอที่แสดงชุดค่าผสมของไลน์ไลน์ที่เป็นไปได้ทั้งหมด การคลิก Hide Paylines
                                จะปิดหน้าจอนี้และกลับไปที่หน้า Paytable .
                                <br /> - การคลิกBackจะออกจากหน้าจอข้อมูลและกลับไปที่เกม .</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>PAYLINES</h1>
                            <p>- Paylineที่ใช้งานอยู่แสดงโดยLineที่ปรากฏเหนือวงล้อ สามารถเปิดใช้งานPaylineและแสดงรูปร่างได้โดยคลิกที่เส้น
                                <br />
                                <br /> - การชนะจะนับเฉพาะPaylineที่เปิดใช้งานเท่านั้น
                                <br />
                                <br /> - มีความแตกต่างระหว่างการเดิมพันแบบไลน์และการเดิมพันทั้งหมด เดิมพันไลน์จะแสดงจำนวนเงินที่เดิมพันบนไลน์เพย์ไลน์เดียว
                                เงินเดิมพันทั้งหมดจะแสดงจำนวนเงินที่เดิมพันทั้งหมดในรอบการเล่นเกม การจ่ายเงินที่แสดงใน Paytable คูณด้วยการเดิมพันไลน์.
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                            <p>
                                <br /> &nbsp;
                            </p>
                            <h1>ABOUT PAYOUTS</h1>
                            <p>- การจ่ายเงินจะแสดงอยู่ในหน้าจอ Paytable หากต้องการหาจำนวนเงินที่จะได้รับจากการเดิมพัน ต้องนับไลน์คูณด้วยการจ่ายเงิน.
                                <br />
                                <br /> - หากมีชุดค่าผสมแบบเพย์ไลน์สองชุดที่ชนะอยู่ในบรรทัดเดียวกันจะมีการจ่ายเงินรางวัลมากขึ้น หากมีเพย์ไลน์ที่ใช้งานอยู่มากกว่าหนึ่งรายการมีชุดค่าผสมที่ชนะการชนะจะมีการเพิ่มเงินรางวัล
                                .
                                <br />
                                <br /> - ชุดค่าผสมที่ชนะจะต้องเริ่มต้นจากแกนหมุนที่ด้านซ้ายสุดและสัญลักษณ์จะต้องต่อเนื่องกัน
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 5}>
                        <h2>Multi-Spin</h2>
                            &nbsp;
                            <h1>กติกา</h1>
                            <p>- คุณสามารถเลือกสกุลเงิน (เหรียญ) ได้โดยคลิกปุ่มเพื่อเปลี่ยนสกุลเงินที่มุมล่างซ้ายของหน้าจอ.
                                <br />
                                <br /> - บนไลน์ (Line) เดิมพันจะถูกเลือกโดยคลิกเดิมพันต่อเส้นนั้นๆ การคลิกแต่ละครั้งจะเป็นการเพิ่มเหรียญในการวางเดิมพันไลน์
                                ,เมื่อกดถึงจำนวนเงินสูงสุด (10 เหรียญของสกุลเงินเดิมพันที่เลือกไว้) ให้คลิกที่ปุ่มอีกครั้งเพื่อรีเซ็ตเดิมพันไลน์เป็นหนึ่งเหรียญ
                                .
                                <br />
                                <br />
                                <br /> -Paylines(เส้นการจ่ายเดิมพัน)จะถูกเลือกโดยการคลิกที่ไลน์นั้นๆ, การคลิกแต่ละครั้งจะเปิดใช้งานPaylines(เส้นการจ่ายเดิมพัน)
                                เมื่อเปิดใช้งานเส้นเดิมพันทั้งหมดคลิกปุ่มอีกครั้งจะรีเซ็ตเป็นเส้นเดิมพันที่ใช้งานอยู่ให้เหลือเส้นเดียว การวางไลน์ที่จะเลือกเดิมพันสามารถใช้งานได้โดยใช้ปุ่มเลขที่ด้านข้างของวงล้อ
                                การเลือกเส้นเดิมพันที่จ่ายเงินสูงจะรวมถึงรายการทั้งหมดด้วย ตัวอย่างเช่นการเลือกไลน์เพย์ไลน์ 6 จะเปิดใช้งานตั้งแต่ไลน์
                                1 ถึง 5 . การคลิกเดิมพันสูงสุดจะเปิดใช้งานไลน์ทั้งหมดด้วยการวางเดิมพันสูงสุดต่อไลน์และหมุนวงล้อ .
                                <br />
                                <br />
                                <br /> - ยอดเดิมพันทั้งหมดต่อรอบเกมส์ = line bet X active paylines.
                                <br />
                                <br /> - การคลิกSpinจะหมุนวงล้อโดยเลือกเส้นและเส้นเดิมพันปัจจุบัน ในระหว่างที่แกนหมุนปุ่มสปินจะเปลี่ยนเป็น Stop การคลิกที่
                                Stop จะสิ้นสุดการเคลื่อนไหวของสปินและจะแสดงผลการปั่นทันที..
                                <br />
                                <br /> - การเล่นยังสามารถหมุนได้โดยอัตโนมัติใช้ฟังก์ชั่น Auto Start การคลิก + หรือ - เหนือ Auto Start จะเลือกจำนวนการหมุนเพื่อเปิดใช้งานต่อเนื่อง
                                การคลิกเริ่มอัตโนมัติจะหมุนวงล้อ ปุ่ม Auto Start จะเปลี่ยนเป็น Stop ในโหมด Auto Start .โหมดเริ่มต้นอัตโนมัติจะสิ้นสุดลงเมื่อวงล้อหมุนจำนวนครั้งที่ผู้เล่นกำหนดหรือเมื่อผู้เล่นคลิกหยุด.
                                <br />
                                <br /> - การชนะเดิมพันจะคำนวณตาม paytable Line win = เดิมพันไลน์ X ตัวคูณที่สอดคล้องกันตาม paytable Scatter win = เดิมพันทั้งหมด
                                x ตัวคูณที่สอดคล้องกันตามตารางการจ่ายเงิน สามารถดูรายละเอียดได้ที่หน้าข้อมูล .
                                <br />
                                <br /> - ในเพย์ไลน์ที่กำหนดเฉพาะไลน์การจ่ายเงินสูงสุดที่ชนะการเดิมพันจะจ่ายในกรณีที่การชนะพร้อมกันในช่องจ่ายเงินที่ต่างกันจะถูกเพิ่มเข้าด้วยกัน.
                                <br />
                                <br /> - ในกรณีของการปั่นที่ชนะเดิมพัน จะแสดงเงินสะสม สามารถกดปุ่มข้ามได้โดยคลิกที่ใดก็ได้บนหน้าจอ
                                <br />
                                <br /> - Payline ชนะและการชนะเดิมพันรวมจะปรากฏบนแถบที่อยู่ด้านล่างของวงล้อหรือหน้าต่างเกม .
                                <br />
                                <br /> -ปุ่ม Gamble ซึ่งเมื่อคลิกแล้วจะเริ่มเล่น Gamble ข้อมูลเพิ่มเติมเกี่ยวกับคุณลักษณะ Gamble สามารถดูได้ที่ด้านล่าง
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1>ข้อมูล Page</h1>
                            &nbsp;
                            <p>- การคลิกข้อมูลจะเปิดหน้าจออ้างอิงที่อธิบายองค์ประกอบของเกมต่างๆ การคลิกปุ่มลูกศรที่มุมขวาล่างของหน้าจอจะช่วยให้สามารถนำทางระหว่างหน้าจอข้อมูลต่างๆได้
                                .
                                <br />
                                <br /> ► หน้าจอ Paytable อัตราการจ่ายเดิมพัน จะแสดงชุดค่าผสมที่ชนะทั้งหมด เมื่อเปิดหลังจากหมุนชนะการผสมสัญลักษณ์ที่ชนะ
                                (จำนวนของสัญลักษณ์และตัวคูณการเดิมพัน) จะปรากฏ
                                <br /> ► หน้าจอเกมส์ฟรีจะอธิบายเกี่ยวกับชุดค่าผสมของสัญลักษณ์ที่จำเป็นสำหรับการเข้าสู่ Free Games และอธิบายเกี่ยวกับกฎคุณลักษณะฟรีเกมส์
                                .
                                <br />- หน้าจอ Gamble จะอธิบายถึงวิธีการเรียกเงินรางวัลเป็นสองเท่าหากชนะโดยการเล่นการพนันกับพวกเขาและอธิบายถึงกฎการเล่น
                                .
                                <br />- การคลิกที่Paylineในหน้า Paytable จะเปิดหน้าจอที่แสดงชุดค่าผสมของไลน์ไลน์ที่เป็นไปได้ทั้งหมด การคลิก Hide Paylines
                                จะปิดหน้าจอนี้และกลับไปที่หน้า Paytable .
                                <br /> - การคลิกBackจะออกจากหน้าจอข้อมูลและกลับไปที่เกม .
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> PAYLINES </h1>
                            &nbsp;
                            <p>- Paylineที่ใช้งานอยู่แสดงโดยLineที่ปรากฏเหนือวงล้อ สามารถเปิดใช้งานPaylineและแสดงรูปร่างได้โดยคลิกที่เส้น
                                <br />
                                <br /> - การชนะจะนับเฉพาะPaylineที่เปิดใช้งานเท่านั้น
                                <br />
                                <br /> - มีความแตกต่างระหว่างการเดิมพันแบบไลน์และการเดิมพันทั้งหมด เดิมพันไลน์จะแสดงจำนวนเงินที่เดิมพันบนไลน์เพย์ไลน์เดียว
                                เงินเดิมพันทั้งหมดจะแสดงจำนวนเงินที่เดิมพันทั้งหมดในรอบการเล่นเกม การจ่ายเงินที่แสดงใน Paytable คูณด้วยการเดิมพันไลน์.
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง
                            </p>
                            <br />
                            <br /> &nbsp;
                            <h1> ABOUT PAYOUTS </h1>
                            &nbsp;
                            <p>- การจ่ายเงินจะแสดงอยู่ในหน้าจอ Paytable หากต้องการหาจำนวนเงินที่จะได้รับจากการเดิมพัน ต้องนับไลน์คูณด้วยการจ่ายเงิน.
                                <br />
                                <br /> - หากมีชุดค่าผสมแบบเพย์ไลน์สองชุดที่ชนะอยู่ในบรรทัดเดียวกันจะมีการจ่ายเงินรางวัลมากขึ้น หากมีเพย์ไลน์ที่ใช้งานอยู่มากกว่าหนึ่งรายการมีชุดค่าผสมที่ชนะการชนะจะมีการเพิ่มเงินรางวัล
                                .
                                <br />
                                <br /> - ชุดค่าผสมที่ชนะจะต้องเริ่มต้นจากแกนหมุนที่ด้านซ้ายสุดและสัญลักษณ์จะต้องต่อเนื่องกัน
                                <br />
                                <br /> - สัญลักษณ์ Scatter เป็นข้อยกเว้นสำหรับกฎเหล่านี้ ข้อมูลเพิ่มเติมเกี่ยวกับสัญลักษณ์ Scatter สามารถดูได้ที่ด้านล่าง</p>
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


GameRuleOneTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleOneTh))));