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

export class GameSedieTh extends React.Component {
    
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
                    <div class="HelpCenterList">
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
                    <div id="HelperCenterDetail">
                    <h2> Se Die </h2>
                        &nbsp;
                        <p> Se Die เริ่มต้นตั้งแต่ปี 1909 เกมออนไลน์ Xoc Dia ใช้อุปกรณ์ที่บ้าน ใช้ชามใส่ฝาครอบ 4 ปุ่มวางไว้บนจานแล้วเลี้ยว ผู้เล่นวางเดิมพันผล
                            เกมนี้เป็นเกมที่เรียบง่ายและสนุกสนานดังนั้นจึงกลายเป็นที่นิยมในเร็ว ๆ นี้.</p>
                        &nbsp;
                        <p>- How to play
                            <br/> เจ้ามือวาง 4 ปุ่มด้วยด้านสีแดงและสีขาวในจานที่มีชามเป็นฝาปิดแล้วเลี้ยว หลังจากเจ้ามือหยุดสั่นในหน้าจอสมาชิกสามารถเริ่มเดิมพันได้
                            เมื่อเวลาในการวางเดิมพันเสร็จสิ้นและเจ้ามือเปิดชามระบบจะคำนวณการจ่ายเงินตามผลที่ได้.
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


GameSedieTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameSedieTh))));