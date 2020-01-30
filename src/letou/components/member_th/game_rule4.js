import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
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

export class GameRuleFourTh extends React.Component {
    
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
  
      const { classes } = this.props;
  
      return (
       
        <div className={classes.root}> 
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
            <Grid container className={classes.content}>
                <Grid item xs={5} className={classes.infoSelect}>
                    <InfoSelect/>
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
                                <a href="/th/for_member">รูเล็ต RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Lottery Cards</h2>
                        <p>1. หมายเลขพิเศษ
                            <br /> ผู้เล่นจะชนะหากหมายเลขพิเศษที่ชนะอยู่ในปัจจุบันจะเหมือนกันกับหมายเลขเดิมพัน
                            <br /> 2. หมายเลขปกติ
                            <br /> ผู้เล่นจะชนะหากตำแหน่งและจำนวนเงินเดิมพันสอดคล้องกับลำดับและตำแหน่งของบอล 1 ถึงบอล 6
                            <br /> 3. สองด้าน
                            <br /> สองด้านเป็นคำทั่วไปสำหรับใหญ่ / เล็ก / แปลก / แม้แต่
                            <br /> ใหญ่หรือเล็ก: ถ้าตัวเลขที่วาดไว้เท่ากับหรือมากกว่า 21 ก็ใหญ่ "" "เท่ากับหรือน้อยกว่า 20 ก็เล็ก" ""
                            <br /> คี่ / คู่: ผลลัพธ์จะพิจารณาจากจำนวนที่เป็นเลขคี่หรือคู่
                            <br /> ตัวเลขเดี่ยวตัวเลขใหญ่ / เล็ก: ถ้าตัวเลขหนึ่งหลักมีค่าเท่ากับหรือมากกว่า 5 จะเป็นตัวเลขขนาดใหญ่เดียว "" ถ้าตัวเลขตัวเดียวมีค่าเท่ากับหรือน้อยกว่า
                            4 จะมีขนาดเล็กเพียงตัวเดียว
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


GameRuleFourTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleFourTh))));