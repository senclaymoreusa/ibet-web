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


const styles = () => ({
   
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

export class GameWenzhoujiupai extends React.Component {
    
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
                                    <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/zh/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/zh/for_member">娱乐场规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>温州牌九</h2>
                        <p>温州牌九是古代中国传统游戏的一种，玩法是依据一副共32张牌，点数的不同组合来比较大小，以决胜负。</p>
                        <p>- 游戏玩法
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> • 理牌：以两张牌为一副，排列成一列。
                            </li><li> • 每副牌只玩两局即重新洗牌
                            </li><li> • 发牌：庄家以两骰先击骰，再以点数除以4的余数，1=庄，2=顺门，3=出门，0=到门，来决定从哪一门开始发牌，每门一圈发一张牌，每家共各有两张牌。
                            </li><li> • 下注门数：有三门，每一门可分别下注该门输或赢，但押闲输者每个玩家只能押一门，押闲赢者最高可以押到3门。
                            </li><li> • 以两支牌点数之和的个位数来分胜负，最大是9，最小是0。
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 牌面点数
                            </li><li> 单张牌的大小顺序：
                            </li><li>
                            <img src="http://i.imgur.com/cUz0rk3.jpg" alt=""></img>
                            </li><li>
                            </li><li> 对牌的大小顺：
                            </li><li>
                            <img src="http://i.imgur.com/u4t1D4t.jpg" alt=""></img>
                            </li><li>
                            </li><li> 没有对牌的大小顺序：
                            </li><li> 若没有对牌，则以两牌点数之和的个位数来分胜负，最大是9，最小是0。
                            </li><li>
                            </li><li> 范例一：没对牌的组合方式
                            </li><li>
                            <img src="http://i.imgur.com/X3BVwUg.jpg" alt=""></img>
                            </li><li>
                            </li><li> 范例二：比点数时如遇到同点数，就以其中最大单张牌的级别来比较大小。
                            </li><li>
                            <img src="http://i.imgur.com/FYHnwff.jpg " alt=""></img>
                        
                            </li><li>
                            </li><li> 范例三：「大鸡六」和「小鸡」不能变化点数
                            </li><li>
                            <img src="http://i.imgur.com/nvfo5zm.jpg " alt=""></img>
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 牌型比较
                            </li><li> •任何对牌皆大于没对牌，任何没对牌皆小于对牌。
                            </li><li> •若双方对牌名称相同，则为庄家赢。〔若庄门对牌级别为同级，则庄家赢。〕
                            </li><li> •若没对牌的点数，其最大单张牌级别大小皆相同，则为庄家赢。
                            </li><li> •0点没有级别，庄家通吃。
                            </li><li> •「大鸡六」和「小鸡」不能变化点数
                            </li><li>
                            </li><li>
                            </li><li> - 派彩
                            </li><li> • 押门赢赔率为1 : 0.99
                            </li><li> • 押门输赔率为1 : 0.93</li></ul></p>
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


GameWenzhoujiupai.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameWenzhoujiupai))));