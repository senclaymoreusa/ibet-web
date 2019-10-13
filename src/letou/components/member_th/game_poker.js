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

export class GamePoker extends React.Component {
    
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
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">กฎของคาสิโนสด >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2> Texas Hold'em </h2>
                        &nbsp;
                        <p> เท็กซัสโฮลเด็มโป๊กเกอร์เป็นเกมคาสิโนตัวแทนจำหน่ายสด ใช้การ์ด 52 ใบ ผู้เล่นใช้ไพ่ 2 ใบและไพ่กองกลาง 5 ใบซึ่งเป็นไพ่ 7 ใบจากนั้นเลือกการ์ดที่ดีที่สุด
                            5 ใบ ผู้เล่นจะต้องคิดว่าจะชนะดีลเลอร์และไม่จำเป็นต้องพิจารณาเกี่ยวกับชุดนี้ นี่คือการทดสอบความฉลาดและความกล้าหาญของเกมโป๊กเกอร์.</p>
                        &nbsp;
                        <p>- เดิมพันอย่างไร
                            <br/> หลังจากที่ผู้เล่นทำการเดิมพันแบบ Ante ไพ่สองใบจะถูกแจกให้กับผู้เล่นและไพ่สองใบจะถูกแจกให้กับเจ้ามือเป็นไพ่กองกลางจากนั้นทำการเดิมพันบนกระดาน
                            5 ใบแยกตามลำดับ สุดท้ายตัวแทนจำหน่ายจะแสดงไพ่ อันดับมือของเจ้ามือและอันดับมือของผู้เล่นจะถูกเปรียบเทียบเพื่อดูว่าใครชนะ
                            <br/> ผู้เล่นอาจทำการเดิมพันโบนัสเสริมในเวลาเดียวกันกับที่วางเดิมพันเริ่มต้น Ante เมื่อไพ่ของผู้เล่นตรงกับอันดับโบนัสตามลำดับให้ผู้เล่นสามารถชนะรางวัลได้
                            3 ~ 30 เท่า
                            <br/>
                            <br/>
                            <br/>
                            <br/> - กฎของเกมศ์
                            <br/> เริ่มเกมผู้เล่นต้องเดิมพันภายในเวลาที่กำหนดและตัดสินใจจะเรียกไพ่หรือไม่:
                            <br/> เดิมพัน ยอดเดิมพัน คำแนะนำ เงินเดิมพัน Ante ต้องสอดคล้องกับขีด จำกัด Flop สองเท่าของขนาด Ante bet ผู้เล่นสามารถยกหรือพับได้
                            พับจะสูญเสียเดิมพัน Ante หลังจากเพิ่มแล้วจะมีการแจกไพ่กองกลาง 3 ใบในบอร์ด เปลี่ยนขนาดเดียวกับการเดิมพัน Ante ผู้เล่นสามารถโทรหรือเช็คได้
                            เช็คจะทำให้ไม่มีการเดิมพันกับเกมต่อไป บัตรชุมชนที่สี่จะกระทำบนกระดาน แม่น้ำขนาดเดียวกับการเดิมพัน Ante ผู้เล่นสามารถโทรหรือเช็ค
                            เช็คจะทำให้ไม่มีการเดิมพันกับเกมต่อไป บัตรชุมชนที่ห้าแจกอยู่บนกระดานและโชว์ดาวน์
                            <br/>
                            <br/> หลังจากการเปิดไพ่ผู้เล่นและเจ้ามือแจกไพ่ 5 ใบที่ดีที่สุดจากไพ่ 2 ใบและไพ่บอร์ด 5 ใบเปรียบเทียบกันเพื่อดูว่าใครจะเป็นผู้ชนะ
                            <br/>
                            <br/> •หากมือของผู้เล่นมีคะแนนตรงหรือสูงกว่าจะชนะได้เงิน (เช่น 1: 1) ในการเดิมพัน Ante, Flop, Turn and River หากอันดับมือของผู้เล่นสามประเภทหรือต่ำกว่าจะชนะเงินได้
                            (เช่น 1: 1) ในการเดิมพัน Flop, Turn and River.
                            <br/> •เมื่ออันดับมือของนายธนาคารและอันดับมือของผู้เล่นจะเหมือนกันจำนวนที่มากที่สุดจะชนะ แต่ถ้าตัวเลขมีค่าเท่ากันรอบนี้จะเป็นคะแนนที่เท่ากันและผู้เล่นสามารถรับเงินเดิมพันทั้งหมดได้โดยไม่รวมโบนัส
                            <br/>
                            <br/>
                            <br/>
                            <br/> - Bonus Payout
                            <br/> ไม่ว่าผู้เล่นจะชนะหรือแพ้ในรอบนี้ ไพ่กองกลางของเขา / เธอจะได้รับรางวัลตามจำนวนเงินและอัตราเดิมพัน
                            <br/> การรวมกันของการ์ด A-A ราคาต่อรอง1︰30 A-K (เหมาะ) ราคาต่อรอง 1:25 A-Q หรือ A-J (เหมาะ) ราคาต่อรอง 1:20 A-K (ไม่เหมาะ)
                            ราคาต่อรอง 1:15 K-K หรือ Q-Q หรือ J-J ราคาต่อรอง 1:10 A-Q หรือ A-J (unsuited) อัตราเดิมพัน 1: 5 คู่ใน 2 ~ 10 Odds 1:
                            3
                            <br/>
                            <br/> - Winning Combination
                            <br/>
                            <img src=" http://i.imgur.com/NNAVms4.png"></img>
                            <br/>
                            <img src="http://i.imgur.com/5n5iQi0.png"></img>
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


GamePoker.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GamePoker))));