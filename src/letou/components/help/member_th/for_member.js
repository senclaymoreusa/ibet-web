import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import InfoSelect from "../../info_select";
import '../../../css/help.css'

import { show_letou_announcements} from '../../../../actions';



const styles = theme => ({
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
    all : {
        display: 'flex',
    },
    content : {
        display: 'flex',
        paddingRight: 400,
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
        color:'#666666',
    },
    infoItem : {
        textColor:'#666666',
    },
    aboutUsDetail : {
       fontSize: '14px',
    },
    first: {
        paddingRight:100,
    },
    list : {
        padding: 0,
    },
    listItemText:{
        fontSize:'14px',
        color:'#333333',
    },
    title: {
        
    }
    
})

export class ForMemberTh extends React.Component {

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

      
    render() {
  
      const { classes } = this.props;
      return (
       
        <div className={classes.root}> 
            <InfoSelect/>
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
                <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                เรื่องราวของLetou
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/about_us">
                        <ListItemText classes={{primary:classes.listItemText}} >เกี่ยวกับLetou</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/contact_us">
                        <ListItemText classes={{primary:classes.listItemText}} >ติดต่อเรา</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                การรักษาความปลอดภัยบัญชี
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/statement">
                        <ListItemText classes={{primary:classes.listItemText}} >ข้อตกลงและเงื่อนไข</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/disclaimer">
                        <ListItemText classes={{primary:classes.listItemText}} >เอกสารสละสิทธิ์</ListItemText>
                        </Link>
                        <Link className={classes.list}  href="/th/privacy">
                        <ListItemText classes={{primary:classes.listItemText}} >การเก็บรวบรวมข้อมูล</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/safe_bet">
                        <ListItemText classes={{primary:classes.listItemText}} >ความรับผิดชอบต่อผู้บริโภค</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/identity">
                        <ListItemText classes={{primary:classes.listItemText}} >การยืนยัน ID</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                แผนการส่งเสริมการขาย
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/offer_terms">
                        <ListItemText classes={{primary:classes.listItemText}} >ข้อตกลงและเงื่อนไขการส่งเสริมการขาย</ListItemText>
                        </Link>
                        
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                กติกาเกมส์กีฬา
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/rules">
                        <ListItemText classes={{primary:classes.listItemText}} primary="กติกาและกฎการเดิมพัน" />
                        </Link>
                        <Link className={classes.list} href="/th/bet_rules2">
                        <ListItemText classes={{primary:classes.listItemText}} >การแนะนำแต้มต่อ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >กฎเดิมพันฟุตบอล</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/bet_rules3">
                        <ListItemText classes={{primary:classes.listItemText}} >การนำเสนอแฮนดิแคปฟุตบอลที่ไม่ซ้ำกัน</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/bet_rules4">
                        <ListItemText classes={{primary:classes.listItemText}} >กีฬาอื่น ๆ</ListItemText>
                        </Link>
                        
                    </List>
                </div>
                </div>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                กติกากีฬา OW Sports Rules
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >กติกาและกฎการเดิมพัน</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/general_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >การวางเดิมพันและกติกาการเดิมพันกีฬา</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/special_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >กิจกรรมพิเศษกฎการเดิมพันและกฎระเบียบ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/virtual_sports">
                        <ListItemText classes={{primary:classes.listItemText}} >กฎกติกาและกฎกติกาเสมือนจริง</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                กฎของคาสิโนสด
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/game_baijiale">
                        <ListItemText classes={{primary:classes.listItemText}} >บาคาร่า</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_lunpan">
                        <ListItemText classes={{primary:classes.listItemText}} >รูเล็ต</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_21dian">
                        <ListItemText classes={{primary:classes.listItemText}} >แบล๊คแจ๊ค21</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_longhu">
                        <ListItemText classes={{primary:classes.listItemText}} >มังกร เสือ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_gubao">
                        <ListItemText classes={{primary:classes.listItemText}} >ไฮโล</ListItemText>
                        </Link>
                        
                        <Link className={classes.list} href="/th/game_erbagang">
                        <ListItemText classes={{primary:classes.listItemText}} >วิธีการเดิมพัน Pai gow</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_sangong">
                        <ListItemText classes={{primary:classes.listItemText}} >3 รูปภาพ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_wenzhoujiupai">
                        <ListItemText classes={{primary:classes.listItemText}} >Wenzhou ไพ โกว</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_sedie">
                        <ListItemText classes={{primary:classes.listItemText}} >วิธีการเดิมพัน Se Die</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_poker">
                        <ListItemText classes={{primary:classes.listItemText}} >เท็กซัสโฮลเด็มโป๊กเกอร์</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_niuniu">
                        <ListItemText classes={{primary:classes.listItemText}} >บลู บลู</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                รูเล็ต RNG
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/game_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >Slot Machines</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >เครื่องสล็อตคลาสสิก</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} >เกมส์โป๊กเกอร์</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >Lottery Cards</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule5">
                        <ListItemText classes={{primary:classes.listItemText}} >เกมหลายผู้เล่น</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule6">
                        <ListItemText classes={{primary:classes.listItemText}} >Asian Games</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule7">
                        <ListItemText classes={{primary:classes.listItemText}} >Arcade Games</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/game_rule8">
                        <ListItemText classes={{primary:classes.listItemText}} >NetEnt</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                กติกาการเดิมพันล็อตเตอรี
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/lottery_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >กติกาล๊อตโต้</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/lottery_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >กติกา คีโน</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/lottery_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} > กติกา SSC</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/lottery_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >กติกา PK10</ListItemText>
                        </Link>
                       
                    </List>
                </div>
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

ForMemberTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(ForMemberTh))));