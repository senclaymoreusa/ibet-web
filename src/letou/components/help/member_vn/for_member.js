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

export class ForMemberVn extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
                <Grid item xs={7} className={classes.detail}>
                <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                Lịch sử LETOU
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/about_us">
                        <ListItemText classes={{primary:classes.listItemText}} >Về LETOU</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/contact_us">
                        <ListItemText classes={{primary:classes.listItemText}} >Liên hệ</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Bảo mật duy trì tài khoản
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/statement">
                        <ListItemText classes={{primary:classes.listItemText}} >Điều kiện và Điều khoản</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/disclaimer">
                        <ListItemText classes={{primary:classes.listItemText}} >Từ chối</ListItemText>
                        </Link>
                        <Link className={classes.list}  href="/vi/privacy">
                        <ListItemText classes={{primary:classes.listItemText}} >Thu thập dữ liệu</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/safe_bet">
                        <ListItemText classes={{primary:classes.listItemText}} >Trách nhiệm khi chơi</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/identity">
                        <ListItemText classes={{primary:classes.listItemText}} >Xác minh chứng minh thư</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Kế hoạch Khuyến mãi
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/offer_terms">
                        <ListItemText classes={{primary:classes.listItemText}} >Điều kiện và Điều khoản của Khuyến mãi</ListItemText>
                        </Link>
                        
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Luật chơi Thể thao
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/rules">
                        <ListItemText classes={{primary:classes.listItemText}} primary="Điều lệ và Quy tắc đặt cược" />
                        </Link>
                        <Link className={classes.list} href="/vi/bet_rules2">
                        <ListItemText classes={{primary:classes.listItemText}} >Giới thiệu cược chấp</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Nguyên tắc Thể thao</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/bet_rules3">
                        <ListItemText classes={{primary:classes.listItemText}} >Giới thiệu các loại cược chấp trong bóng đá</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/bet_rules4">
                        <ListItemText classes={{primary:classes.listItemText}} >Các môn Thể thao khác</ListItemText>
                        </Link>
                        
                    </List>
                </div>
                </div>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                Luật chơi thể thao OW
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật cược</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/general_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật doanh thu cược</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/special_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật đặt cược đặc biệt</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/virtual_sports">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật trò chơi Ảo</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Nguyên tắc Casino
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/game_baijiale">
                        <ListItemText classes={{primary:classes.listItemText}} >Baccarat</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_lunpan">
                        <ListItemText classes={{primary:classes.listItemText}} >Rồng hổ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_21dian">
                        <ListItemText classes={{primary:classes.listItemText}} >Blackjack</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_longhu">
                        <ListItemText classes={{primary:classes.listItemText}} >Rồng hổ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_gubao">
                        <ListItemText classes={{primary:classes.listItemText}} >Sic Bo</ListItemText>
                        </Link>
                        
                        <Link className={classes.list} href="/vi/game_erbagang">
                        <ListItemText classes={{primary:classes.listItemText}} >Pai gow</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_sangong">
                        <ListItemText classes={{primary:classes.listItemText}} >Ba Hình</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_wenzhoujiupai">
                        <ListItemText classes={{primary:classes.listItemText}} >Pai Gow Ôn Châu</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_sedie">
                        <ListItemText classes={{primary:classes.listItemText}} >Xóc đĩa</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_poker">
                        <ListItemText classes={{primary:classes.listItemText}} >Texas Hold'em</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_niuniu">
                        <ListItemText classes={{primary:classes.listItemText}} >Bull Bull</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                Luật chơi RNG
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/game_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật chơi RNG</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >Slot Cổ Điển</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} >Poker Games</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >Lottery Cards</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule5">
                        <ListItemText classes={{primary:classes.listItemText}} >Nhiều người chơi</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule6">
                        <ListItemText classes={{primary:classes.listItemText}} >Asian Games</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule7">
                        <ListItemText classes={{primary:classes.listItemText}} >Arcade Games</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/game_rule8">
                        <ListItemText classes={{primary:classes.listItemText}} >NetEnt</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Luật chơi Sổ xố
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/vi/lottery_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật chơi LOTTO</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/lottery_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật Chơi KENO</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/lottery_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} > Luật Chơi SSC</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/vi/lottery_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật chơi PK10</ListItemText>
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

ForMemberVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(ForMemberVn))));