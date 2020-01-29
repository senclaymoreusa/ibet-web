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

export class GameRuleSeven extends React.Component {
    
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
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/zh/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/zh/for_member">小游戏规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <h2>大型电玩</h2>
                        &nbsp;
                        <h1>硬币投掷赌博游戏</h1>
                        &nbsp;
                        <p>- 你的目标是赌猜硬币投掷的结果。首先，通过点击屏幕左下角的＋和－按扭，选择你要下的赌注，然后点击 “ 确认 ” （Confirm）。选择硬币的正面和反面。这些正面或反面就是你赌猜的投掷结果。现在，点击一个投掷按扭，其中按扭 “ Flipx1
                            ” 表示只投掷1次，按扭 “ Flipx2 ” 表示投掷2次，按扭 “ Flipx3 ” 表示投掷3次。如果你点击的是 “ Flipx2 ” 或 “ Flipx3 ” ，就意味着你赌猜的投掷结果应连续出现2次或3次。在这些连续投掷中只要有任何一次投掷结果与你事先赌猜的结果不一样，那你就输了。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>双硬币玩法</h1>
                        &nbsp;
                        <p>- 你也可以选择用两枚硬币玩本赌博游戏。点击标签 “ 2 Coin Play ” ，就可以玩双硬币投掷赌博游戏。这时，你必须对两枚硬币的投掷结果进行预测，否则就相当于单硬币游戏（此时按单硬币游戏计费）。点击标签 “ 1 Coin Play
                            ” ，可以使游戏重新回到单硬币游戏状态。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>赔付倍数</h1>
                        &nbsp;
                        <p>
                            <img src="http://i.imgur.com/AijJax2.png" alt=""/>
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


GameRuleSeven.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleSeven))));