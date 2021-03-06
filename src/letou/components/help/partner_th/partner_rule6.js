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

export class MemberRuleSixTh extends React.Component {
    
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
                                    <li>
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li className="Active">
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/th/for_partner">สำหรับคู่ค้า  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/th/for_partner">เกมส์แนะนำ >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>ข้อดีของ LETOU</h2>
                        &nbsp;
                        <h1>ข้อดีจากคาสิโนออนไลน์ยอดเยี่ยม</h1>
                        <p>LETOU ก่อตั้งขึ้นเมื่อปีพ. ศ. 2547 ตั้งแต่ประเทศฟิลิปปินส์และมีใบอนุญาต PAGCOR เต็มรูปแบบ</p>
                        <h1>โปรแกรมพันธมิตรการแข่งขัน</h1>
                        <p>สี่ขั้นตอนสู่ความสำเร็จ
                            <br /> 1. ลงทะเบียนกับเราและสมัครเป็นพันธมิตรระดับสูงเพื่อคุณโดยเฉพาะ
                            <br /> 2. ติดต่อตัวแทนจำหน่ายผ่าน LINE
                            <br /> 3. พูดคุยเกี่ยวกับความร่วมมือในรายละเอียดและเข้าร่วมโปรแกรม Affiliate ที่ทำกำไรได้มาก
                            <br /> 4. เปิดใช้งานบัญชีเพื่อรับลิงก์การทำเครื่องหมายพิเศษ
                        </p>
                        <h1>แพลตฟอร์มที่ดีที่สุด</h1>
                        <p>ประสบการณ์ในการสร้างความไว้วางใจมากกว่า 10 ปี
                            <br /> ทางเลือกแรกสำหรับวีไอพี - คำขอถอนเงินเป็นจำนวนมากตั้งเป็นวินาที
                            <br /> ให้ความอุดมสมบูรณ์ของเกมจากแพลตฟอร์มที่แตกต่างกันทั้งหมด
                            <br />
                            <br />
                            <img src="http://i.imgur.com/dUnTJ3C.png" alt=""/> 
                            <img src="http://i.imgur.com/2E0DHdC.png" alt=""/>
                            <img src="http://i.imgur.com/VFe5GuY.png" alt=""/>
                            <br />
                            <img src="http://i.imgur.com/5bJpJZr.png" alt=""/>
                            <img src="http://i.imgur.com/ddSTWzD.png" alt=""/>
                            <img src="http://i.imgur.com/IkaG8hp.png" alt=""/>
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


MemberRuleSixTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(MemberRuleSixTh))));