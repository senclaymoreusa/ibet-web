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

export class Rules extends React.Component {
    
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
                                <a href="/for_member">บริการแก่สมาชิกใช้ >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">กติกาเกมส์กีฬา >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p>กติกาและกฎการเดิมพัน</p>
                         <p>บางเหตุการณ์และตลาดมีกฎแตกต่างกันต่อไปนี้เป็นกฎทั่วไปของการเดิมพันที่ใช้กับทุกเหตุการณ์และการเดิมพัน / ประเภทการเดิมพันการปฏิบัติตามอย่างเต็มรูปแบบเป็นข้อบังคับ
                            ข้อกำหนดและคำจำกัดความที่กำหนดไว้ในข้อกำหนดและเงื่อนไขที่เผยแพร่ในเว็บไซต์จะใช้บังคับกับกฎและกฎการเดิมพันเหล่านี้ กฎและข้อบังคับเกี่ยวกับการเดิมพันทั่วไป</p>
                         <p>
                            <br /> ※ข้อมูลการเดิมพันทั้งหมดที่จัดทำโดย บริษัท จะกระทำโดยสุจริต อย่างไรก็ตาม บริษัท ไม่สามารถยอมรับความรับผิดสำหรับข้อผิดพลาดหรือการละเว้นใด
                            ๆ ที่เกี่ยวกับวันเวลาสถานที่คู่แข่งราคาผลสถิติ Jersey (แสดงที่ Live Streaming) หรือข้อมูลเดิมพันอื่น ๆ บริษัท ขอสงวนสิทธิ์ในการแก้ไขข้อผิดพลาดที่เห็นได้ชัดและจะดำเนินการตามขั้นตอนที่เหมาะสมเพื่อให้แน่ใจได้ว่าตลาดซึ่งกำหนดไว้ในประเภทการเดิมพันที่แตกต่างกันที่นำเสนอในการแข่งขันกีฬาบางประเภทจะได้รับการดูแลด้วยความซื่อสัตย์และโปร่งใส
                            บริษัท ขอสงวนสิทธิ์ในการตัดสินใจขั้นสุดท้าย</p>
                         <p>※หากผลการดำเนินงานของตลาดไม่สามารถยืนยันได้อย่างเป็นทางการเราขอสงวนสิทธิ์ในการชะลอการชำระบัญชีจนกว่าจะได้รับการยืนยันอย่างเป็นทางการ</p>
                         <p>※หากมีการนำเสนอตลาดเมื่อทราบผลแล้วเราขอสงวนสิทธิ์ในการยกเลิกการเดิมพันใด ๆ</p>
                         <p>※ในกรณีของราคาที่แสดงหรือคำนวณไม่ถูกต้องเราขอสงวนสิทธิ์ในการถือเป็นโมฆะ ซึ่งรวมถึงการเบี่ยงเบนมากกว่า 100% ในการจ่ายออกเมื่อเทียบกับค่าเฉลี่ยของตลาด</p>
                         <p>※ในกรณีที่ความคุ้มครองต้องถูกยกเลิกและการแข่งขันจบลงอย่างสม่ำเสมอทุกตลาดจะตัดสินตามผลสุดท้าย หากผลลัพธ์ของตลาดไม่สามารถยืนยันได้อย่างเป็นทางการเราขอสงวนสิทธิ์ในการยกเลิกการขาย</p>
                         <p>※ในกรณีของตลาดที่ไม่ถูกต้องเราขอสงวนสิทธิ์ในการแก้ไขปัญหาเหล่านี้ได้ตลอดเวลา</p>
                         <p>※ในกรณีที่มีการละเมิดกฎโดยนัยโดยทั่วไปของกีฬาเราขอสงวนสิทธิ์ในการยกเลิกตลาดใด ๆ (เช่นระยะเวลาผิดปกติขั้นตอนการนับรูปแบบการแข่งขัน
                            ฯลฯ )</p>
                         <p>※ในกรณีที่กฎหรือรูปแบบของการแข่งขันแตกต่างจากข้อมูลโดยนัยของเราเราขอสงวนสิทธิ์ในการยกเลิกตลาดใด ๆ</p>
                         <p>※ในกรณีที่การจับคู่ไม่เสร็จสิ้นหรือเล่นเป็นประจำทุกครั้ง (เช่นการตัดสิทธิ์การหยุดชะงักการถอนการเปลี่ยนแปลงการเบิกจ่ายเป็นต้น)
                            ตลาดที่ไม่ได้พิจารณาทั้งหมดถือว่าเป็นโมฆะ</p>
                         <p>※ในกรณีที่มีความไม่สอดคล้องกันระหว่างชื่อภาษาอังกฤษและภาษาอังกฤษที่ไม่ใช่ชื่อที่ใช้สำหรับเหตุการณ์หรือทีมงานบนเว็บไซต์เป็นภาษาอังกฤษที่มีผลเหนือกว่า</p>
                         <p>※ตลอดเวลาเป็นความรับผิดชอบของลูกค้าที่ต้องทราบเกี่ยวกับคะแนนการแข่งขันและข้อมูลการแข่งขันที่เกี่ยวข้องทั้งหมดและขอแนะนำให้ลูกค้าตรวจสอบสถานะการจับคู่ก่อนวางเดิมพัน</p>
                         <p>※ บริษัท ขอสงวนสิทธิ์ในการแก้ไขกฎเหล่านี้ได้ทุกเมื่อด้วยเหตุผลใด ๆ การแก้ไขดังกล่าวจะมีผลผูกพันทันทีและมีผลทันทีที่โพสต์ในเว็บไซต์</p>
                         <p>※ลูกค้ารับทราบว่าคะแนนปัจจุบันเวลาที่ผ่านไปและข้อมูลอื่น ๆ ที่มีอยู่ในไซต์ในขณะที่ฟีด "สด" ที่บุคคลที่สามจัดหาให้อาจมีความล่าช้าตามเวลาและ
                            / หรืออาจไม่ถูกต้องและการวางเดิมพันใด ๆ ข้อมูลทั้งหมดนี้ขึ้นอยู่กับความเสี่ยงของลูกค้า บริษัท ไม่ได้รับประกันความถูกต้องครบถ้วนหรือทันเวลาของข้อมูลดังกล่าวและไม่รับผิดชอบต่อความสูญเสีย
                            (โดยทางตรงหรือทางอ้อม) ของลูกค้าเนื่องจากลูกค้าต้องพึ่งพาข้อมูลดังกล่าว</p>
                         <p>※หากข้อผิดพลาดในการระงับข้อพิพาทเกิดจากผลการแข่งขันที่เปลี่ยนแปลงอย่างเป็นทางการหรือเหตุผลอื่นใด บริษัท มีสิทธิ์ที่จะรีเซ็ตภายในระยะเวลาอันสมควร</p>
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


Rules.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Rules))));