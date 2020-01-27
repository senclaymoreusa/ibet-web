import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../../icon_header";

import { show_letou_announcements} from '../../../../actions';


const styles = () => ({
    logoHeader: {
        height: '20px',
        padding: '10px'
    },
    header : {
        fontSize: '24px',
        color: '#333333',
        position: 'relative',
        width: '100%',
        height: '75px',
        backgroundColor: '#f5f5f5',
        marginBottom: '50px',
        paddingLeft: 300,
        paddingTop: 20
      
    },
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

export class DisclaimerTh extends React.Component {
    
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
                                <a href="/th/for_member">บริการแก่สมาชิกใช้  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_member">การรักษาความปลอดภัยบัญชี  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2> เอกสารสละสิทธิ์ </h2>
                        <p> LETOU ไม่รับประกันหรือระบุโดยชัดแจ้งว่าข้อมูลที่เผยแพร่ในเว็บไซต์นี้หรือเว็บไซต์ของบุคคลที่สามซึ่งเชื่อมโยงกับ LETOU.com
                            ถูกต้อง 100% แม้ว่าเราจะใช้ความรอบคอบและพยายามอย่างเต็มที่เพื่อให้เนื้อหาที่ถูกต้อง 100% และอัปเดตข้อมูลรีวิวทั้งหมดเพื่อสะท้อนถึงการเปลี่ยนแปลงที่บังคับใช้โดยบุคคลที่สามการใช้งานเว็บไซต์นี้หมายความว่า
                            LETOU.com ไม่สามารถรับผิดชอบต่อข้อมูลที่ผิดได้ </p>
                            <br/>
                            <br/> เนื้อหาทั้งหมดมีวัตถุประสงค์เพื่อข่าวสารและความบันเทิงเท่านั้น ไม่มีข้อมูลที่เผยแพร่ใน LETOU.com มีไว้เพื่อใช้ในการให้คำปรึกษาหรือแนะนำด้านกฎหมาย
                            <br/>
                            <br/> การประมวลผลเงินที่จะใช้สำหรับการพนันออนไลน์ไม่ใช่กฎหมายในทุกประเทศและเป็นความรับผิดชอบของคุณผู้เข้าชมไซต์เพื่อใช้ความขยันที่เหมาะสมเพื่อให้แน่ใจว่าการพนันออนไลน์เป็นไปตามกฎหมายในเขตอำนาจศาลที่คุณอาศัยอยู่และเป็น
                            พลเมืองของกฎหมายและยิ่งไปกว่านั้นเพื่อทำความคุ้นเคยกับนโยบายด้านกฎระเบียบและข้อ จำกัด ที่กำหนดโดยหน่วยงานกำกับดูแล
                            <br/>
                            <br/> เจ้าของและพนักงานของ LETOU.com จะไม่รับผิดชอบต่อความยากลำบากส่วนบุคคลรวมถึง แต่ไม่ จำกัด เพียงผลกระทบทางกฎหมายความสูญเสียทางการเงินความช่วยเหลือทางด้านจิตใจและการให้คำปรึกษาที่อาจเกิดขึ้นเนื่องจากการวางเดิมพันทางอินเทอร์เน็ต
                            <br/>
                            <br/> เนื้อหาทั้งหมดมีลิขสิทธิ์ สงวนลิขสิทธิ์. LETOU.com ไม่ยอมแจกจ่ายหรือคัดลอกเนื้อหาที่เผยแพร่ใน LETOU.com โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษร
                            การละเมิดลิขสิทธิ์ของเราจะได้รับการปฏิบัติตามกฎหมายอย่างที่สุด
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


DisclaimerTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(DisclaimerTh))));