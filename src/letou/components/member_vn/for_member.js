import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import IconHeader from "../icon_header";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import '../../css/help.css'
import ListItemText from '@material-ui/core/ListItemText';


import {
    show_letou_announcements
} from '../../../actions';
import { InfoSelect } from '../info_select';



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

export class ForMember extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    <InfoSelect/>
                </Grid>
                <Grid item xs={7} className={classes.detail}>
                <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                Lịch sử LETOU
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/about_us">
                        <ListItemText classes={{primary:classes.listItemText}} >Về LETOU</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/contact_us">
                        <ListItemText classes={{primary:classes.listItemText}} >Liên hệ</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Bảo mật duy trì tài khoản
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/statement">
                        <ListItemText classes={{primary:classes.listItemText}} >Điều kiện và Điều khoản</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/disclaimer">
                        <ListItemText classes={{primary:classes.listItemText}} >Từ chối</ListItemText>
                        </Link>
                        <Link className={classes.list}  href="/privacy">
                        <ListItemText classes={{primary:classes.listItemText}} >Thu thập dữ liệu</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/safe_bet">
                        <ListItemText classes={{primary:classes.listItemText}} >Trách nhiệm khi chơi</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/identity">
                        <ListItemText classes={{primary:classes.listItemText}} >Xác minh chứng minh thư</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Kế hoạch Khuyến mãi
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/offer_terms">
                        <ListItemText classes={{primary:classes.listItemText}} >Điều kiện và Điều khoản của Khuyến mãi</ListItemText>
                        </Link>
                        
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                >Luật chơi Thể thao
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/rules">
                        <ListItemText classes={{primary:classes.listItemText}} primary="Điều lệ và Quy tắc đặt cược" />
                        </Link>
                        <Link className={classes.list} href="/bet_rules2">
                        <ListItemText classes={{primary:classes.listItemText}} >Giới thiệu cược chấp</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Nguyên tắc Thể thao</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/bet_rules3">
                        <ListItemText classes={{primary:classes.listItemText}} >Giới thiệu các loại cược chấp trong bóng đá</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/bet_rules4">
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
                        <Link className={classes.list} href="/football_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật cược</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/general_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật doanh thu cược</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/special_rules">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật đặt cược đặc biệt</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/virtual_sports">
                        <ListItemText classes={{primary:classes.listItemText}} >Luật trò chơi Ảo</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                Nguyên tắc Casino
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/game_baijiale">
                        <ListItemText classes={{primary:classes.listItemText}} >Baccarat</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_lunpan">
                        <ListItemText classes={{primary:classes.listItemText}} >Rồng hổ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_21dian">
                        <ListItemText classes={{primary:classes.listItemText}} >Blackjack</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_longhu">
                        <ListItemText classes={{primary:classes.listItemText}} >Rồng hổ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_gubao">
                        <ListItemText classes={{primary:classes.listItemText}} >Sic Bo</ListItemText>
                        </Link>
                        
                        <Link className={classes.list} href="/game_erbagang">
                        <ListItemText classes={{primary:classes.listItemText}} >Pai gow</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_sangong">
                        <ListItemText classes={{primary:classes.listItemText}} >Ba Hình</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_wenzhoujiupai">
                        <ListItemText classes={{primary:classes.listItemText}} >Pai Gow Ôn Châu</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_sedie">
                        <ListItemText classes={{primary:classes.listItemText}} >Xóc đĩa</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_poker">
                        <ListItemText classes={{primary:classes.listItemText}} >Texas Hold'em</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_niuniu">
                        <ListItemText classes={{primary:classes.listItemText}} >Bull Bull</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                小游戏规则
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/game_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >电动吃角子老虎</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >经典老虎机</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} >牌桌&牌游戏</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >刮刮乐</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule5">
                        <ListItemText classes={{primary:classes.listItemText}} >多玩家游戏</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule6">
                        <ListItemText classes={{primary:classes.listItemText}} >亚洲游戏</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule7">
                        <ListItemText classes={{primary:classes.listItemText}} >大型电玩</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/game_rule8">
                        <ListItemText classes={{primary:classes.listItemText}} >NetEnt</ListItemText>
                        </Link>
                    </List>
                </div>
                <Typography variant="h6" className={classes.title}>
                彩票规则
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/lottery_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >世界乐透规则</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/lottery_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >快乐彩规则</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/lottery_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} > 时时彩规则</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/lottery_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >PK拾游戏规则</ListItemText>
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

ForMember.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(ForMember))));