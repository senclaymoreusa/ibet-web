import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
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
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    content : {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
        color:'#666666',
        [theme.breakpoints.down('md')]: {
            display: 'none' 
        }
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
        [theme.breakpoints.down('md')]: {
            padding: 1,
           
        }
    },
    listItemText:{
        fontSize:'14px',
        color:'#333333',
        [theme.breakpoints.down('md')]: {
             border: '1px solid #dddddd',
             height: '35px',
             padding: 8,

        }
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

})

export class ForMember extends React.Component {
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
                <Grid item md={5} className={classes.infoSelect}>
                <div className="HelpCenterLeftNav">
                    <ul>
                        <li>
                            <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                        </li>
                        <li>
                            <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
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
                    <div className={classes.all}>
                        <div className={classes.first}>
                            <Typography variant="h6" >
                                乐投品牌故事
                            </Typography>
                            <div >
                                <List >
                                    <Link className={classes.list} href="/zh/about_us">
                                    <ListItemText classes={{primary:classes.listItemText}} >关于我们</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/contact_us">
                                    <ListItemText classes={{primary:classes.listItemText}} >联络我们</ListItemText>
                                    </Link>
                                </List>
                            </div>
                            <Typography variant="h6" >
                                维护帐户安全
                            </Typography>
                            <div >
                                <List >
                                    <Link className={classes.list} href="/zh/statement">
                                    <ListItemText classes={{primary:classes.listItemText}} >法律声明与责任</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/disclaimer">
                                    <ListItemText classes={{primary:classes.listItemText}} >免责声明</ListItemText>
                                    </Link>
                                    <Link className={classes.list}  href="/zh/privacy">
                                    <ListItemText classes={{primary:classes.listItemText}} >隐私权政策</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/safe_bet">
                                    <ListItemText classes={{primary:classes.listItemText}} >理性博彩</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/identity">
                                    <ListItemText classes={{primary:classes.listItemText}} >身份核实</ListItemText>
                                    </Link>
                                </List>
                            </div>
                            <Typography variant="h6" >
                            优惠活动与奖励
                            </Typography>
                            <div >
                                <List >
                                    <Link className={classes.list} href="/zh/offer_terms">
                                    <ListItemText classes={{primary:classes.listItemText}} >活动相关条款</ListItemText>
                                    </Link>
                                    
                                </List>
                            </div>
                            <Typography variant="h6" >
                            体育规则
                            </Typography>
                            <div >
                                <List >
                                    <Link className={classes.list} href="/zh/rules">
                                    <ListItemText classes={{primary:classes.listItemText}} primary="投注规则与规定" />
                                    </Link>
                                    <Link className={classes.list} href="/zh/bet_rules2">
                                    <ListItemText classes={{primary:classes.listItemText}} >盘口介绍</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/football_rules">
                                    <ListItemText classes={{primary:classes.listItemText}} >足球赛事交易规则</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/bet_rules3">
                                    <ListItemText classes={{primary:classes.listItemText}} >足球特有盘口介绍</ListItemText>
                                    </Link>
                                    <Link className={classes.list} href="/zh/bet_rules4">
                                    <ListItemText classes={{primary:classes.listItemText}} >其他运动项目</ListItemText>
                                    </Link>
                                    
                                </List>
                            </div>
                        </div>
                        <div className={classes.first}>
                        <Typography variant="h6" className={classes.title}>
                        沙巴体育规则
                        </Typography>
                        <div className={classes.demo}>
                            <List >
                                <Link className={classes.list} href="/zh/football_rules">
                                <ListItemText classes={{primary:classes.listItemText}} >一般投注规则与规定</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/general_rules">
                                <ListItemText classes={{primary:classes.listItemText}} >赌盘（投注类型）规则之一般规则</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/special_rules">
                                <ListItemText classes={{primary:classes.listItemText}} >特定赛事投注规则</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/virtual_sports">
                                <ListItemText classes={{primary:classes.listItemText}} >虚拟运动规则</ListItemText>
                                </Link>
                            </List>
                        </div>
                        <Typography variant="h6" className={classes.title}>
                        娱乐场规则
                        </Typography>
                        <div className={classes.demo}>
                            <List >
                                <Link className={classes.list} href="/zh/game_baijiale">
                                <ListItemText classes={{primary:classes.listItemText}} >百家乐</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_lunpan">
                                <ListItemText classes={{primary:classes.listItemText}} >轮盘</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_21dian">
                                <ListItemText classes={{primary:classes.listItemText}} >21点</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_longhu">
                                <ListItemText classes={{primary:classes.listItemText}} >龙虎</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_gubao">
                                <ListItemText classes={{primary:classes.listItemText}} >骰宝</ListItemText>
                                </Link>
                                
                                <Link className={classes.list} href="/zh/game_erbagang">
                                <ListItemText classes={{primary:classes.listItemText}} >二八杠</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_sangong">
                                <ListItemText classes={{primary:classes.listItemText}} >三公</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_wenzhoujiupai">
                                <ListItemText classes={{primary:classes.listItemText}} >温州牌九</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_sedie">
                                <ListItemText classes={{primary:classes.listItemText}} >色碟</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_poker">
                                <ListItemText classes={{primary:classes.listItemText}} >德州扑克</ListItemText>
                                </Link>
                                <Link className={classes.list} href="/zh/game_niuniu">
                                <ListItemText classes={{primary:classes.listItemText}} >牛牛</ListItemText>
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
                            <Link className={classes.list} href="/zh/game_rule1">
                            <ListItemText classes={{primary:classes.listItemText}} >电动吃角子老虎</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule2">
                            <ListItemText classes={{primary:classes.listItemText}} >经典老虎机</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule3">
                            <ListItemText classes={{primary:classes.listItemText}} >牌桌&牌游戏</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule4">
                            <ListItemText classes={{primary:classes.listItemText}} >刮刮乐</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule5">
                            <ListItemText classes={{primary:classes.listItemText}} >多玩家游戏</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule6">
                            <ListItemText classes={{primary:classes.listItemText}} >亚洲游戏</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule7">
                            <ListItemText classes={{primary:classes.listItemText}} >大型电玩</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/game_rule8">
                            <ListItemText classes={{primary:classes.listItemText}} >NetEnt</ListItemText>
                            </Link>
                        </List>
                    </div>
                    <Typography variant="h6" className={classes.title}>
                    彩票规则
                    </Typography>
                    <div className={classes.demo}>
                        <List >
                            <Link className={classes.list} href="/zh/lottery_rule1">
                            <ListItemText classes={{primary:classes.listItemText}} >世界乐透规则</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/lottery_rule2">
                            <ListItemText classes={{primary:classes.listItemText}} >快乐彩规则</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/lottery_rule3">
                            <ListItemText classes={{primary:classes.listItemText}} > 时时彩规则</ListItemText>
                            </Link>
                            <Link className={classes.list} href="/zh/lottery_rule4">
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