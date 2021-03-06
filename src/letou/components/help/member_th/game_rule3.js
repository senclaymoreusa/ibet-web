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

export class GameRuleThreeTh extends React.Component {
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
                                <a href="/th/for_member">รูเล็ต RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(1, e);}}>21แต้ม Blackjack</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} >
                                <a href="/" onClick={(e) => {this.onClick(2, e);}}>การเดิมพันรูเล็ต</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                        <h2> Blackjack</h2>
                            &nbsp;
                            <p>- เป้าหมายของแบล็คแจ๊คคือไพ่ทั้งหมดของคุณมีจำนวนเท่ากับ21แต้มหรือใกล้เคียงกับ 21 มากกว่าไพ่ของเจ้ามือ แต่ไม่เกิน 21แต้ม.
                                ในแบล็คแจ็คเอซจะนับเป็น 1 หรือ 11 ก็ได้ ,ไพ่ที่เป็นใบหน้า(J,Q,K)นับเป็น 10 แต้ม และไพ่หมายเลขทั่วไปก็มีค่าตามตัวเลขที่กำหนด
                                หากคุณได้รับไพ่เอซ(A)และไพ่สิบ10แต้ม เป็นไพ่สองใบแรกคุณจะมีแบล็คแจ็คจะชนะทันที และได้รับ1.5 เท่าของเงินเดิมพันของคุณ
                                (ถ้าการเดิมพันของคุณอยู่ที่ 10 เหรียญคุณจะได้รับ 25 เหรียญ) หากมูลค่ารวมของไพ่ของคุณอยู่ใกล้ 21 กว่าดีลของดีลเลอร์คุณจะชนะเงินเดิมพันของคุณ
                                (ถ้าเดิมพันของคุณอยู่ที่ 10 เหรียญคุณจะได้รับ 20 เหรียญ) หากยอดรวมแต้มของคุณสูงกว่า 21 คุณจะแพ้ทันทีเรียกว่า "ไพ่น๊อค"
                                และเสียเงินเดิมพันของคุณ หากคุณและดีลเลอร์มียอดรวมแต้มเท่ากัน (แต้ม17 ปีขึ้นไป) ไม่มีใครชนะและเดิมพันของคุณจะถูกส่งกลับมายังคุณ
                            </p>
                            <h1>กติกา</h1>
                            <p>- คลิกที่ชิปเพื่อเลือกจำนวน คลิกที่ตำแหน่งที่ว่าง(ช่องสำหรับวางเดิมพัน) (จัดเป็นรูปครึ่งวงกลมบนโต๊ะ) การคลิกทุกครั้งจะเพิ่มเงินเดิมพันของคุณตามมูลค่าของชิปที่เลือก
                                เดิมพันสามารถวางไว้บนมือใด ๆ ในการเล่นบนมือเดียวหรือไม่เกินห้ามือพร้อมกัน ในการลดการเดิมพันของคุณให้คลิกขวาที่การวางเดิมพันเพื่อลดจำนวนชิปที่เลือก
                                .
                                <br />
                                <br /> - หากคุณกำลังเล่นเกมในโหมดเดี่ยวให้คลิกที่ชิปเพื่อเพิ่มเงินเดิมพันของคุณ การคลิกบนชิปทั้งหมดจะเป็นการเพิ่มเงินเดิมพันของคุณตามมูลค่าชิปและทุกๆคลิกขวาจะลดการเดิมพัน.
                                <br />
                                <br /> -คุณสามารถคลิก Clear Bets สำหรับการยกเลิกวางเดิมพันบนโต๊ะทั้งหมด
                                <br />
                                <br /> - วงเงินเดิมพันต่ำสุดและสูงสุดในแต่ละมือจะขึ้นอยู่กับระดับ VIP ของคุณและจะแสดงอยู่บนโต๊ะ ขีด จำกัด จะมีผลกับการเดิมพันเริ่มต้นเท่านั้น
                                การดำเนินการ (เช่น Split ฯลฯ ) ที่ต้องมีการเดิมพันเพิ่มเติมสามารถใช้งานได้แม้ว่าคุณจะวางเดิมพันไว้เท่ากับเดิมพันสูงสุดเท่านั้น.
                                <br />
                                <br /> - คลิกปุ่มดีลเพื่อเริ่มแจกไพ่ จะแจกไพ่มือละสองใบ แจกให้กับผู้เล่นและมือของเจ้ามือ ไพ่ใบแรกจะมีการแจกให้ผู้เล่นก่อน และ
                                ไพ่ทีละหนึ่งใบในแต่ละรอบ ไพ่ใบสุดท้ายจะไปที่มือของเจ้ามือและคว่ำไพ่ .
                                <br />
                                <br /> - หากคุณกำลังเล่นมากกว่าหนึ่งมือจะมีการดำเนินการกับแต่ละมือแยกกันโดยเริ่มจากด้านขวามือ.
                                <br />
                                <br /> - หากเจ้ามือหงายไพ่เป็นเอซ(A)คุณจะได้รับการประกัน คลิกปุ่มประกันภัยเพื่อกันเจ้ามือได้ Blackjack.
                                <br />
                                <br /> - ใช้ปุ่ม Hit, Stand, Double และ Split ตามต้องการ.
                                <br />
                                <br /> - โปรดทราบว่าการจะใช้ ประกันภัย เดิมพันสองเท่า และสปลิต(แยกไพ่) จำเป็นต้องมีการเดิมพันเพิ่มเติม หากยอดเงินของคุณไม่มีเงินเพียงพอที่จะครอบคลุมค่าใช้จ่ายเหล่านี้คุณจะต้องฝากเงินเพิ่มเพื่อใช้ตัวเลือกเหล่านี้.
                                <br />
                                <br /> - เจ้ามือสามารถหงายไพ่ และเรียกไพ่เพิ่มเติมได้ตามกฎ .
                                <br />
                                <br /> -มือของคุณเทียบกับมือของเจ้ามือ .
                                <br />
                                <br /> -ถ้าคุณต้องการเล่นรอบอื่นให้คลิกเกมใหม่ จากนั้นวางเดิมพันตามที่อธิบายไว้ด้านบนหรือคลิก Rebet เพื่อวางเดิมพันเช่นเดียวกับในรอบก่อนหน้าและคลิก
                                Deal เพื่อแจกไพ่บัตร
                            </p>
                            <h1>Multihand</h1>
                            <p>- ในโหมดมัลติแฮนด์คุณสามารถวางเดิมพันในตำแหน่งของมือที่ตั้งอยู่ในรูปครึ่งวงกลมบนโต๊ะได้ คุณสามารถเล่นมือเดียวได้หากต้องการหรือเล่นได้ถึง
                                5 มือโดยวางเดิมพันในมือ ทุกๆมืออาจมีจำนวนเงินเดิมพันแตกต่างกัน
                                <br />
                                <br /> - ไพ่จะได้รับการแจกทีละใบต่อเทิร์นโดยเริ่มจากมือด้านขวาสุดและเคลื่อนที่ตามเข็มนาฬิกา เจ้ามือได้รับไพ่ทีหลังสุด เมื่อไพ่ถูกแจกแล้วแต่ละมือจะถูกเล่นแยกกันโดยเริ่มจากมือด้านขวาสุด</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                        <h2>รูเล็ต</h2>
                            &nbsp;
                            <h1>อเมริกัน รูเล็ต </h1>
                            <p>- เป้าหมายของเกมคือการทำนายตำแหน่งที่ลูกบอลจะหยุดบนวงล้อรูเล็ต วงล้อรูเล็ตประกอบด้วยตัวเลขตั้งแต่ 1 ถึง 36 สลับสีแดงและดำ
                                และ0 , 00 ซึ่งเป็นสีเขียว.</p>
                            <h1>กติกา</h1>
                            <p>- คลิกเพื่อเลือกมูลค่าของชิปที่ต้องการ .
                                <br />
                                <br /> - วางเดิมพันของคุณโดยคลิกที่ตัวเลขหรือพื้นที่การเดิมพันบนตารางรูเล็ต การคลิกทุกครั้งในพื้นที่การเดิมพันจะเพิ่มชิพขึ้นจำนวน1
                                และจะเป็นมูลค่าชิพที่เลือกไว้แล้ว.
                                <br />
                                <br /> - วงเงินเดิมพันต่ำสุดและสูงสุดขึ้นอยู่กับระดับวีไอพีของคุณ หากเดิมพันต่ำกว่าขีด จำกัด ต่ำสุดจะมีข้อความเกี่ยวกับการเดิมพันแจ้งว่าไม่เพียงพอและชิพที่เกี่ยวข้องบนโต๊ะจะถูกแสดงเน้น
                                3 ครั้ง . .ในส่วนของข้อมูลโดยละเอียดเกี่ยวกับวงเงินเดิมพันสำหรับทุกตำแหน่งให้เลื่อนเมาส์ไปวางหรือคลิกที่เครื่องหมายขีด
                                จำกัด บนโต๊ะ.
                                <br />
                                <br /> - หากต้องการเพิ่มเงินเดิมพันอีกจำนวนหนึ่งให้เลือกชิพอื่นและคลิกที่พื้นที่การเดิมพันที่ต้องการ .
                                <br />
                                <br /> - การคลิกขวาที่พื้นที่การเดิมพันจะเป็นการเอาชิพตัวเดียวที่มีมูลค่าเท่ากับชิปที่เลือกออกจากการเดิมพัน หรือเป็นการยกเลิกชิปทั้งหมดที่วางเดินพันไป
                                หากชิปที่เลือกมีค่ามากกว่าการวางเดิมพัน.
                                <br />
                                <br /> - คุณสามารถวางชิพหลาย ๆ แบบในพื้นที่การเดิมพันที่ต่างกันได้ .
                                <br />
                                <br /> - คลิกหมุนเพื่อเป็นการหมุนลูกหลังจากที่คุณวางเดิมพันเรียบร้อยแล้ว ,การคลิกที่ Clear Bets จะเป็นการลบการวางเดิมพันทั้งหมดออกจากตาราง
                                ,คลิกที่ Re-bet เพื่อวางเดิมพันเช่นเดียวกับในช่วงก่อนหน้า และหมุนเพื่อเป็นการปั่นลูก ,การคลิกDouble จะเป็นการเพิ่มเดิมพัน1เท่าตัวที่คุณวางไว้บนโต๊ะ.
                                <br
                                />
                                <br /> - เดิมพันที่ชนะจะยังคงอยู่บนโต๊ะ คุณสามารถลบออกได้เช่นเดียวกับการเดิมพันอื่น ๆ หรือวางไว้บนโต๊ะในรอบถัดไป 12BET Casino
                                อาจปิดใช้งานคุณลักษณะนี้สำหรับตาราง หากเดิมพันถูกปิดใช้งานเดิมพันที่ชนะจะถูกส่งคืนให้กับคุณพร้อมกับเงินรางวัลของคุณ.</p>
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


GameRuleThreeTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleThreeTh))));