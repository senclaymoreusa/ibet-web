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

export class GameRuleSix extends React.Component {
    
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
                        <h2>亚洲游戏</h2>
                        &nbsp;
                        <h1>日本单人麻将</h1>
                        &nbsp;
                        <p>- 这是传统中国麻将的单人版本，按日本规则进行（Tenwa）。您开始就已 “ 听牌 ” （差一张牌就胡），必须在 “ 牌墙 ” 中摸取正确的牌以胡牌。
                            <br />
                            <br /> - 牌墙是24张字面朝下的一组牌。单击一张牌即可摸牌。您每局有三次机会找到正确的牌。
                            <br />
                            <br /> - 牌墙下方显示剩余的选择次数。
                            <br />
                            <br /> - 牌墙下面是您的牌。其右侧空间放置最后摸到的牌，其上是您打出的牌。如果您摸取一张牌后不能胡牌， “ 不成牌 ” 指示将闪烁，而且此牌会被自动打出。您也可以单击此张牌自己打出。之后，您再摸另一张牌。如果您在摸取三张牌后没有一张能让您胡牌，此局结束。
                            <br
                            />
                            <br /> - 请注意：在标准麻将中，打出的牌可用于胡牌。但在单人麻将中，则不行。已出牌不以任何方式参与游戏。
                            <br />
                            <br /> - 如果摸取的牌让您胡牌，则会打开结算屏幕。这里您会看到手中的所有组合，以及每个组合相应的点数。游戏点数将转换为 “ 得分 ” ，决定您赢得的金额。得分是根据传统、复杂的算法从总点数计算而来。在结算屏幕中，您可单击 “ 继续
                            ” 查看每局的状态，或单击 “ 新游戏 ” 按钮立即开始下一局。
                            <br />
                            <br /> - 牌墙右面是 “ 牌面信息 ” 区，显示当前局相关的随机操作或奖励。牌面信息参数代表真正麻将游戏结束时的场景。获胜牌面的最终得分也基于牌面信息参数：
                            <br /> ► “ 操作 ” 是作为奖励的麻将牌面。如果您获胜，此牌面的点数将加到您的总点数中。参见单人麻将规则，了解牌面说明及其点数。请注意：如果操作是自摸无番，那么您不会得到奖励点数。
                            <br /> ► “ 立直 ” 表示是否启用立直或初立直。
                            <br /> ► “ 门风 ” 和 “ 圈风 ” 指示。与门风或圈风相符的一组风牌组成特别牌面并增加您的得分。
                            <br /> ► “ 悬赏 ” 牌。您牌面中与悬赏牌相符的每一张牌都会给您额外的游戏点数。
                            <br />
                            <br /> - 您的牌面下方有如下说明：
                            <br /> √ A. “ 赌注 ” ：您每局的赌注。使用箭头按钮改变下注金额。
                            <br /> √ B.奖金 ” ：上一局中您赢取的金额。
                            <br /> √ C.在 “ 赔率表 ” 按钮打开的屏幕中，您可以看到您的得分让您赢取多少奖金以及牌的字面。单击 “ 结束 ” 按钮关闭赔率表。
                            <br /> √ D. “ 新游戏 ” 按钮可开始新的一局。</p>
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


GameRuleSix.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleSix))));