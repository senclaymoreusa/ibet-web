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

export class GameWenzhoujiupaiTh extends React.Component {
    
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
                                <a href="/th/for_member">กฎของคาสิโนสด >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2> Wenzhou ไพ โกว</h2>
                        &nbsp;
                        <p>
                            Wenzhou ไพ โกวเป็นเกมโป๊กเกอร์แบบดั้งเดิมที่คิดค้นในประเทศจีนโบราณ สำหรับกฎระเบียบทั้งหมด จะใช้ไพ่ 32 ใบจะใช้ในการทำชุดที่แตกต่างกันและตัดสินใจผู้ชนะโดยการเปรียบเทียบ
                            pips.</p>
                        &nbsp;
                        <p>-กฎในการเล่น
                            <br/> • จัดเรียงไพ่: สองใบเป็นคู่และวางคู่กัน
                            <br/> • ไพ่แต่ละสำรับสามารถใช้ได้เฉพาะสำหรับเกมสองเกมเท่านั้นและจะจัดเรียงใหม่อีกครั้ง.
                            <br/> • แจกไพ่ไพ่: ตัวแทนจำหน่ายจับคู่ลูกเต๋าสองก้อน แบ่งลูกเต๋าโดย 4 เพื่อรับเศษ: 1 = เจ้ามือ 2 = ผู้เล่นที่ 1, 3 = ผู้เล่นที่
                            2, 0 = ผู้เล่นที่ 4 เพื่อตัดสินใจว่าผู้เล่นจะจัดการไพ่ใบใด เจ้ามือแจกไพ่ใบหนึ่งใบในแต่ละครั้งและผู้เล่นแต่ละคนมีไพ่สองใบตามลำดับ
                            <br/> • เดิมพัน: มีผู้เล่นสามคนและผู้เล่นแต่ละคนสามารถเดิมพันได้ว่าผู้เล่นสามารถชนะหรือแพ้ได้หรือไม่ แต่ผู้เล่นแต่ละคนสามารถเดิมพันได้เพียงหนึ่งแพ้และการเล่นแต่ละครั้งสามารถเดิมพันผู้ได้รับรางวัลได้สูงสุดสามคน
                            <br/> • เลือกผู้ชนะโดยการตรวจสอบเลขหลักเดียวของผลรวมของไพ่สองใบ สูงสุดคือ 9 pips และต่ำสุดคือ 0.
                    </p></div>

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


GameWenzhoujiupaiTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameWenzhoujiupaiTh))));