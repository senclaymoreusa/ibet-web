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

export class GamePoker extends React.Component {
    
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
                        <h2>德州扑克</h2>
                        <p>视讯德州扑克Texas Hold'em，使用52张扑克牌，玩法是利用2张底牌与牌桌上的5张公牌，共7张牌，再取其中5张组成最佳牌组，玩家单纯与庄家比拚牌型大小而不用考虑花色，是一款考验智力与运气的扑克游戏。</p>
                        <p>- 游戏玩法
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> 闲家下底注后，庄家与闲家轮流分配2张底牌，再依赌桌上5张公牌分次下注，最后庄家开牌与闲家依照牌型组合大小定胜负。
                            </li><li> 闲家下底注同时可选择下注Bonus，闲家当局底牌拿到符合Bonus的牌型时，可依照牌型组合获得3 ~ 30倍不等的赔率奖金。
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 游戏规则
                            </li><li> 牌局开始，闲家在时限内下注并决定是否加注：
                            </li><li>
                            <img src="http://i.imgur.com/d4G3e4O.png" alt=""></img>
                            </li><li>
                            </li><li> 摊牌后，闲家与庄家以自己的2张底牌加上桌面5张公牌，共7张牌中取最大的5张牌型组合决定胜负。
                            </li><li>
                            </li><li> • 若牌型组合在顺子以上(含顺子)，获胜时可取得Ante、Flop、Turn、River个别1：1的下注赔率奖金；若牌型组合在三条以下(含三条)，获胜时可取得Flop、Turn、River个别1：1的下注赔率奖金。
                            </li><li> • 庄家与闲家牌型组合相同时将取中扑克数字最大的定胜负，若数字依然相同时则为平局，闲家将拿回所有下注金额，不含Bonus。
                            </li><li>
                            </li><li>
                            </li><li>
                            </li><li> - 赔率表
                            </li><li> 不同平台的同一游戏玩法，赔率可能不一样，具体以各游戏厅界面所展示的赔率为准。以下赔率以波音厅为例：
                            </li><li>
                            <img src=" http://i.imgur.com/qX4wJpQ.png" alt=""></img>
                            </li><li>
                            </li><li> - 获胜组合
                            </li><li>
                            <img src=" http://i.imgur.com/NNAVms4.png" alt=""></img>
                            </li><li>
                            <img src="http://i.imgur.com/5n5iQi0.png" alt=""></img></li>
                            </ul>
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


GamePoker.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GamePoker))));