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

export class LotteryRuleThreeTh extends React.Component {
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
                                <a href="/th/for_member">กติกาการเดิมพันล็อตเตอรี >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a href="/">วิธีการเดิมพันล็อตเตอรี่</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a href="/">วิธีการเดิมพัน SSC</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
              
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2>SSC</h2>
                            &nbsp;
                            <p>SSC คือ สลากกินแบ่ง โดยจะเป็นการสุ่มชุดของตัวเลข จากตัวเลขสามหลัก หรือ ตัวเลขห้าหลัก
                                <br />
                                <br /> ซึ่งทุก ๆ หลัก จะทำการถูกสุ่มมาตั้งแต่ตัวเลข 0 ถึง 9 โดยผลการออกสลากของตัวเลขสามหลัก จะขึ้นอยู่กับตัวเลขหลักที่
                                1 , ตัวเลขหลักที่ 2 และ, ตัวเลขหลักที่ 3 และผลของการออกสลากของตัวเลขห้าหลัก จะขึ้นอยู่กับตัวเลขหลักที่ 1, ตัวเลขหลักที่
                                2, ตัวเลขหลักที่ 3,ตัวเลขหลักที่ 4 และตัวเลขหลักที่ 5 นอกจากนี้การเล่นจะมีขั้นตอนแตกต่างกันไปตามการตั้งค่าของตัวเลขที่ถูกสุ่มขึ้น
                                ขณะที่การเสนออัตราการต่อรอง รวมถึงการได้รับรางวัลก็จะแตกต่างกันออกไปเช่นเดียวกัน .
                                <br />
                                <br /> โดยแหล่งอ้างอิงเหล่านี้จะมาจากกรุงปักกิ่ง (จีน SWL 3D), เซี่ยงไฮ้, ฉงชิ่ง, เจียงซี, เทียนจิน, ซินเจียง และ ควิ๊กคีโนซอซ์ส(หมายเหตุ)
                                ซึ่งถือว่าเป็นการนำเสนอแหล่งตัวเลือกที่ดีเป็นอย่างมาก .
                                <br />
                                <br /> -ฐานข้อมูล คีโนแบบรวดเร็ว : ผลสลาก 75s และ 90s จะนับเป็นผลชนะ ซึ่งกติกาการเล่นนี้ได้ถูกนำเข้ามาจากบริษัทเกมในยุโรป
                                และตรวจสอบควบคุมโดย บริษัทเกมที่ได้รับใบอนุญาตในประเทศฟิลิปปินส์ เพื่อให้มีความยุติธรรม และเพิ่มความน่าตื่นเต้นมากยิ่งขึ้นคลิกเลือกแบบคีโน
                                : ผลสลาก 75s และ 90s จะนับเป็นผลชนะ ซึ่งกติกาการเล่นนี้ได้ถูกนำเข้ามาจากบริษัทเกมในยุโรป และตรวจสอบควบคุมโดย
                                บริษัทเกมที่ได้รับใบอนุญาตในประเทศฟิลิปปินส์ เพื่อให้มีความยุติธรรม และเพิ่มความน่าตื่นเต้นมากยิ่งขึ้น .
                                <br /> - การแจ้งเตือนมังกร(ดราก้อน รีไมน์เดอร์): มันจะแสดง "ธง" ของผลการเล่นเกมที่เหมือนกันสี่ครั้งติดต่อกัน
                                <br /> - การยกเลิกการเดิมพัน : หากผลการเล่นเกมไม่ได้ออกจากซัพพลายเออร์ จากการเล่นเกมเป็นเวลาหนึ่งชั่วโมง ทางเราจะพิจารณายกเลิกการเดิมพันสำหรับช่วงเวลานั้น
                                .
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>วิธีการเดิมพัน SSC</h2>
                            &nbsp;
                            <h1>1. Big/ Small</h1>
                            <p>การเดิมพัน "ใหญ่" (5,6,7,8,9) หรือ "เล็ก" (0,1,2,3,4) บนการเดิมพันเฉพาะ ในการเดิมพันตัวเลขห้าหลัก หรือ ตัวเลขสามหลัก
                                ซึ่งท่านจะชนะถ้าหากผลที่ท่านเดิมพันตรงกับตัวเลขที่ระบบออกสลาก.
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพันที่ "เล็ก" ในตัวเลขหลักที่ 3 และผลที่ได้คือ 36258 ซึ่งตัวเลขหลักที่ 3 คือ 2, ซึ่งเป็น
                                "เล็ก" ดังนั้นท่านจะชนะในการเดิมพันนี้.
                            </p>
                            <h1>2. คี่ / คู่</h1>
                            <p>เดิมพัน "คี่" (1,3,5,7,9) หรือ "คู่" (0,2,4,6,8) บนการเดิมพันเฉพาะ ในการเดิมพันตัวเลขห้าหลัก หรือ ตัวเลขสามหลัก ซึ่งท่านจะชนะถ้าหากผลที่ท่านเดิมพันตรงกับตัวเลขที่ระบบออกสลาก
                                ยกตัวอย่างเช่น ท่านเดิมพัน "คู่" ในตัวเลขหลักที่ 3 และผลที่ได้คือ 36258 ซึ่งตัวเลขหลักที่ 3 คือ 2 ซึ่งเป็น "คู่"
                                ดังนั้นท่านจะชนะในการเดิมพันนี้
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพัน "คู่" ในตัวเลขหลักที่ 3 และผลที่ได้คือ 36258 ซึ่งตัวเลขหลักที่ 3 คือ 2 ซึ่งเป็น
                                "คู่" ดังนั้นท่านจะชนะในการเดิมพันนี้</p>
                            <h1>3. ใหญ่ / เล็ก พาร์เลย์หรือ คี่ / คู่ พาร์เลย์</h1>
                            <p>เป็นรูปแบบการเดิมพันที่มากกว่า 2 หลักในการเดิมพัน ใหญ่ / เล็ก หรือ คี่ / คู่ และท่านสามารถเดิมพันเป็นกลุ่มแบบพาร์เลย์ได้
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพัน "ใหญ่" ในตัวเลขหลักที่ 3 และเดิมพัน "เล็ก" ในตัวเลขหลักที่ 1 ซึ่งท่านยังสามารถเลือกกลุ่มพาร์เลย์จาก
                                2 x 1 ในรายการการเดิมพันได้</p>
                            <h1>4. ผลรวมของตัวเลข 3 หลัก</h1>
                            <p>โดยจะเป็นผลที่ได้จากการรวมกันของตัวเลขสามหลัก โดยแหล่งที่มาของตัวเลขจะมาจากตัวเลขห้าหลัก ซึ่งจะแบ่งออกเป็นสามตัวแรก
                                (ตัวเลขหลัก 5 , ตัวเลขหลัก 4 และตัวเลขหลักที่ 3) ; สามตัวกลาง (ตัวเลขหลัก 4 ,ตัวเลขหลัก 3 และตัวเลขหลักที่ 2)
                                ; และสามตัวท้าย (ตัวเลขหลักที่ 3, ตัวเลขหลักที่ 2 และตัวเลขหลัก 1 ) โดยจำนวนตัวเลขในการเดิมพัน จะเริ่มตั้งแต่
                                0-27 ซึ่งท่านจะชนะถ้าตัวเลขที่ท่านเดิมพัน ตรงกันกับผลรวมของตัวเลข 3 หลัก ที่ออกสลากจากระบบ
                                <br />
                                <br /> ►ยกตัวอย่างเช่น ท่านเดิมพัน "15" บนผลรวมของตัวเลข 3 ตัวท้าย ซึ่งผลที่ได้คือ 36258, ดังนั้นจะเป็น 2 + 5 + 8 =
                                15, ซึ่งหมายความว่าท่านจะชนะการเดิมพันนี้</p>
                            <h1>5. ใหญ่ / เล็ก / คี่ / คู่</h1>
                            <p>โดยจะเป็นผลที่ได้จากการรวมกันของตัวเลขสามหลัก โดยแหล่งที่มาของตัวเลขจะมาจากตัวเลขห้าหลัก ซึ่งจะแบ่งออกเป็นสามตัวแรก
                                (ตัวเลขหลัก 5 , ตัวเลขหลัก 4 และตัวเลขหลักที่ 3) ; สามตัวกลาง (ตัวเลขหลัก 4 ,ตัวเลขหลัก 3 และตัวเลขหลักที่ 2)
                                ; และสามตัวท้าย (ตัวเลขหลักที่ 3, ตัวเลขหลักที่ 2 และตัวเลขหลัก 1 ) โดยจำนวนตัวเลขในการเดิมพัน จะเริ่มตั้งแต่
                                0-27 ซึ่งท่านจะชนะถ้าตัวเลขที่ท่านเดิมพัน ตรงกันกับผลรวมของตัวเลข 3 หลัก ที่ออกสลากจากระบบ
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพัน "15" บนผลรวมของตัวเลข 3 ตัวท้าย ซึ่งผลที่ได้คือ 36258, ดังนั้นจะเป็น 2 + 5 + 8
                                = 15, ซึ่งหมายความว่าท่านจะชนะการเดิมพันนี้</p>
                            <h1>6. ผลรวมแต่ละช่วง</h1>
                            <p>โดยจะเป็นผลที่ได้จากการรวมกันของตัวเลขสามหลัก โดยแหล่งที่มาของตัวเลขจะมาจากตัวเลขห้าหลัก ซึ่งจะแบ่งออกเป็นสามตัวแรก
                                (ตัวเลขหลัก 5 , ตัวเลขหลัก 4 และตัวเลขหลักที่ 3) ; สามตัวกลาง (ตัวเลขหลัก 4 ,ตัวเลขหลัก 3 และตัวเลขหลักที่ 2)
                                ; และสามตัวท้าย (ตัวเลขหลักที่ 3, ตัวเลขหลักที่ 2 และตัวเลขหลัก 1 ) รายการการเดิมพันจะเป็นสีแดง (0-3), สีส้ม
                                (4-7), สีเหลือง (8-11), สีเขียว (12-15), สีฟ้า (16-19), สีคราม (20-23) และสีม่วง (24 27) ) ซึ่งท่านจะชนะการเดิมพันถ้าหากตัวเลขที่ท่านเดิมพัน
                                ตรงกันกับผลรวมของตัวเลข 3 หลัก ที่ออกสลากจากระบบ
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพัน "สีเขียว" ในผลรวมของตัวเลข 3 ตัวท้าย ผลที่ได้คือ 36258, 2 + 5 + 8 = 15, ซึ่งหมายความว่าท่านจะชนะในการเดิมพันนี้</p>
                            <h1>7. บอลล็อตโต้</h1>
                            <p>โดยผลที่ได้จะมากการรับรวมกันรวมกันของตัวเลขสามหลัก โดยแหล่งที่มาของตัวเลขจะมาจากตัวเลขห้าหลัก ซึ่งจะแบ่งออกเป็นสามตัวแรก
                                (ตัวเลขหลัก 5 , ตัวเลขหลัก 4 และตัวเลขหลักที่ 3) ; สามตัวกลาง (ตัวเลขหลัก 4 ,ตัวเลขหลัก 3 และตัวเลข หลักที่ 2)
                                ; และสามตัวท้าย (ตัวเลขหลักที่ 3, ตัวเลขหลักที่ 2 และตัวเลขหลัก 1 )
                                <br />
                                <br /> ► ยกตัวอย่างเช่น ท่านเดิมพัน "ใหญ่" ในผลรวมของตัวเลข 3 ตัวท้าย ผลที่ได้คือ 36258, 2 + 5 + 8 = 15, ซึ่งหมายความว่าท่านจะชนะในการเดิมพันนี้</p>
                            <h1>8. พาร์เลย์กลุ่ม</h1>
                            <p>วิธีการเล่นคือ การเดิมพันตัวเลขตัวเลขใดตัวเลขหนึ่งเป็นชุดเดียวกัน ซึ่งตัวเลขนั้นจะต้องเป็นตัวเลขที่แตกต่างกัน (0-9)
                                โดยจะมีตัวเลขที่ทำการเดิมพันอยู่ห้าหลักและสามหลัก โดยการเดิมพันเป็นชุดที่มี 2 หลักรวมกันนี้จะเรียกว่า พาร์เลย์2,
                                การเดิมพันเป็นชุดที่มี 3 หลักรวมกันนี้จะเรียกว่า พาร์เลย์3 และกลุ่ม5 เป็นพาร์เลย์กลุ่มที่มากที่สุด ซึ่งท่านจะชนะถ้าหากผลที่ท่านเดิมพันตรงกับตัวเลขที่ออกสลากจากระบบ
                                <br />
                                <br /> ► ยกตัวอย่างเช่น, ท่านเดิมพัน "3" ในตัวเลขหลักที่ 5 , เดิมพัน "2" ในตัวเลขหลักที่ 3 และเดิมพัน "8" ในตัวเลขหลักที่
                                1 ซึ่งการเดิมพันแบบนี้จะเรียกว่าพาร์เลย์3 และถ้าผลที่ได้คือ 36258 ซึ่งตัวเลข หลักที่ 5 คือ 3 , ตัวเลขหลักที่
                                3 คือ 2 และตัวเลขหลักที่ 1 คือ 8 , ดังนั้นท่านจะเป็นผู้ชนะในการเดิมพันนี้</p>
                            <h1>9. กลุ่ม 2</h1>
                            <p>บอลล็อตโต้จะเป็นการเดิมพันตัวเลขตัวใดตัวหนึ่งจากตัวเลข 0-9 ในจำนวนตัวเลข 5 หลัก หรือ ตัวเลข 3 หลักที่ออกสลาก ซึ่งท่านจะชนะถ้าหากผลที่ท่านเดิมพันตรงกับตัวเลขที่ออกสลากจากระบบ
                                <br />
                                <br />
                                <strong>พาร์เลย์กลุ่ม วิธีการเล่นคือ การเดิมพันตัวเลขตัวเลขใดตัวเลขหนึ่งเป็นชุดเดียวกัน ซึ่งตัวเลขนั้นจะต้องเป็นตัวเลขที่แตกต่างกัน
                                    (0-9) โดยจะมีตัวเลขที่ทำการเดิมพันอยู่ห้าหลักและสามหลัก โดยการเดิมพันเป็นชุดที่มี 2 หลักรวมกันนี้จะเรียกว่า
                                    พาร์เลย์2, การเดิมพันเป็นชุดที่มี 3 หลักรวมกันนี้จะเรียกว่า พาร์เลย์3 และกลุ่ม5 เป็นพาร์เลย์กลุ่มที่มากที่สุด
                                    ซึ่งท่านจะชนะถ้าหากผลที่ท่านเดิมพันตรงกับตัวเลขที่ออกสลากจากระบบ
                                    <br />
                                    <strong>► ยกตัวอย่างเช่น ท่านเดิมพันที่ "เล็ก" ในตัวเลขหลักที่ 3 และผลที่ได้คือ 36258 ซึ่งตัวเลขหลักที่ 3 คือ 2,
                                        ซึ่งเป็น "เล็ก" ดังนั้นท่านจะชนะในการเดิมพันนี้
                                        <br />
                                        <br />
                                        <strong>√การเดิมพันแบบเลขเดี่ยว: เป็นการเลือกชุดตัวเลขสองตัวจาก 0-9, และทำการเดิมพันในตัวเลขสองตัวแรก และ สองตัวสุดท้าย
                                            แล้วนำมาเปรียบเทียบกับผลที่ออกสลาก สิ่งพิเศษที่ท่านจะได้ คือท่านสามารถเลือกตัวเลขเดียวกันพร้อมด้วยราคาอัตราการจ่ายที่สูง
                                            ทั้งนี้ทั้งนี้ท่านไม่จำเป็นต้องเรียงลำดับตัวเลขในแต่ละหลักทีทำการเดิมพัน ซึ่งทางเราจะดูที่ผลของตัวเลขเท่านั้น
                                            แม้ว่าตัวเลขสองตัวจะลำดับไม่ตรงกันก็ตาม
                                        </strong>
                                        <br /> ► ตัวอย่างที่ 1: ท่านเดิมพัน "8" ในตัวเลขหลักที่ 2 และ "5" ในตัวเลขหลักที่ 1, ผลที่ได้คือ 36258 แม้ว่าตัวเลขสองหลักสุดท้ายจะออกมาเป็น
                                        5 และ 8 ท่านก็ยังคงชนะในการเดิมพันในครั้งนี้
                                        <br /> ► ตัวอย่างที่ 2: ท่านเดิมพัน "8" ในตัวเลขหลักที่ 2 และ "8" ในตัวเลขหลักที่ 1 ,ผลที่ได้คือ 36288 และตัวเลขสองตัวสุดท้ายคือ
                                        8 และ 8 ท่านจะเป็นผู้ชนะในการเดิมพันในครั้งนี้.</strong>
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <strong>เป็นการเลือกสองตัวเลขจาก 0-9 และเป็นการเดิมพันในตัวเลขสองตัวแรก และสองตัวสุดท้าย โดยผลของการเดิมพันที่ตัวเลข
                                        5 หลัก จะมาจากตัวเลข 5 หลัก ที่ออกสลากจากระบบ ซึ่งจะแบ่งออกเป็นตัวเลขสองตัวแรก (ตัวเลขหลักที่ 5 และตัวเลขหลักที่
                                        4 ) และตัวเลขสองตัวสุดท้าย (ตัวเลขหลักที่ 2 และตัวเลขหลักที่ 1) , ในขณะที่ผลของการเดิมพันที่ตัวเลข 3
                                        หลัก ตัวเลขจะมากจาก ตัวเลขสองตัวแรก (ตัวเลขหลักที่ 3 และตัวเลขหลักที่ 2) และตัวเลขสองตัวท้าย (ตัวเลขหลักที่
                                        2 และตัวเลขหลักที่ 1) ซึ่งการเดิมพันแบบนี้จะมี 2 แบบคือ “การเดิมพันแบบคู่” และ”การเดิมพันแบบเลขเดี่ยว”
                                        <br />
                                        <br />
                                        <strong>√ การเดิมพันแบบเลขเดี่ยว: เป็นการเลือกตัวเลขในแต่ละหลักอย่างน้อยหนึ่งตัวที่ตรงกับระบบที่ออกสลาก ทั้งนี้ทั้งนี้ท่านไม่จำเป็นต้องเรียงลำดับตัวเลขในแต่ละหลักทีทำการเดิมพัน
                                            ซึ่งทางเราจะดูที่ผลของตัวเลขเท่านั้น แม้ว่าตัวเลขสองตัวจะลำดับไม่ตรงกันก็ตาม</strong>
                                        <br /> ► ตัวอย่างเช่น: ท่านเดิมพัน "8" ในตัวเลขหลักที่ 3 , เดิมพัน "8" ในตัวเลขหลักที่ 2 และเดิมพัน "2" ในตัวเลขหลักที่
                                        1 ซึ่งผลที่ออกสลากคือ 36288 โดย 3 ตัวสุดท้ายที่ออกคือ 288 ซึ่งก็ยังถือว่าท่านชนะเดิมพัน แม้ว่าตัวเลขจะเรียงไม่ตรงกันก็ตาม
                                        <br />
                                        <br />
                                        <strong>√ การเดิมพันแบบคู่ : เป็นการเลือกตัวเลขสองตัวจาก 0-9, และทำการเดิมพันในตัวเลขสามตัวแรก, สามตัวกลาง และ
                                            สามตัวสุดท้าย แล้วนำมาเปรียบเทียบกับผลที่ออกสลาก ทั้งนี้ท่านไม่จำเป็นต้องเรียงลำดับตัวเลขในแต่ละหลักที่ทำการเดิมพัน
                                            ซึ่งทางเราจะดูที่ผลของตัวเลขเท่านั้น แม้ว่าตัวเลขสองตัวจะเรียงลำดับไม่ตรงกันก็ตาม
                                        </strong>
                                        <br /> ► ตัวอย่างเช่น: ท่านเลือก "2" และ "8" ในตัวเลขสามตัวสุดท้าย ซึ่งผลที่ได้คือ 36288 และตัวเลขสามตัวสุดท้ายคือ
                                        288, ท่านจะชนะการเดิมพันในครั้งนี้ นอกจากนี้ ท่านยังจะคงชนะถ้าผลที่ได้คือ 828, 882, 282, 228, 822.</strong>
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <strong>เป็นการเดิมพันในสามตัวเลขจาก 0-9 และเป็นเดิมพันในตัวเลขสามตัวแรก, สามตัวกลาง หรือ สามตัวสุดท้าย โดยผลของการเดิมพันที่ตัวเลข
                                        5 หลัก จะมาจากตัวเลขสามตัวแรก (ตัวเลขหลักที่ 5 ,ตัวเลขหลักที่ 4 และตัวเลขหลักที่ 3) และตัวเลขสามตัวกลาง
                                        (ตัวเลขหลักที่ 4 ,ตัวเลขหลักที่ 3 และตัวเลขหลักที่ 2)และตัวเลขสามตัวท้าย(ตัวเลขหลักที่3 ,ตัวเลขหลักที่
                                        2 และตัวเลขหลักที่ 1) , ซึ่งผลของการเดิมพันจะมาจากตัวเลข 3 หลัก (ตัวเลขหลักที่3 ,ตัวเลขหลักที่ 2 และตัวเลขหลักที่
                                        1) เช่นเดียวกัน การเดิมพันแบบนี้จะมี 2 แบบคือ “การเดิมพันแบบคู่” และ”การเดิมพันแบบเลขเดี่ยว”
                                        <br />
                                        <br /> ► ตัวอย่างเช่น : ท่านเลือก "2", “8" และ "5" ในตัวเลข 3 ตัวสุดท้าย ซึ่งผลที่ได้คือ 36258 ทั้งนี้แม้ว่าสามตัวสุดท้ายที่ออกคือ
                                        258 ก็ยังถือว่าท่านชนะการเดิมพันในครั้งนี้</strong>
                                </strong>
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


LotteryRuleThreeTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleThreeTh))));