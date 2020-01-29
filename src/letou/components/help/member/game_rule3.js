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

export class GameRuleThree extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          hide: true,
          current: 1
        }
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    onClick(index) {
        this.setState({
          hide: false,
          current: index
          
        })
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
                    <div className="HelpCenterList">
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
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current === 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>21点</a>
                            </li>
                            <li className={this.state.current === 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>轮盘</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                        <div className="centerDetail" hidden={this.state.current !== 1}>
                            <h2>21点</h2>
                            &nbsp;
                            <h1>21点</h1>
                            &nbsp;
                            <p>- 六副牌的21点。每一回合结束后，用过的牌放回牌组，然后洗牌。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 点击筹码选中。点击可用手位（牌桌上以半圆铺开的圆）。每点击一次，您的投注增加所选筹码之数额。投注可下在任何手位，可仅在一个位置下注，也可在最多五个位置下注。要减少赌注，按住键盘上的Shift键，同时点击赌注，即减少选定筹码值数目。
                                <br />
                                <br /> - 您可点击 “ 清除赌注 ” 从牌桌上去除所有投注。
                                <br />
                                <br /> - 点击 “ 加倍 ” 将您已经投放在牌桌的赌注加倍。
                                <br />
                                <br /> - 每个投注位的最小最大投注限制根据您的VIP级别不同而不同，该限制显示在牌桌上。限制仅适用于第一次投注。既然您放置了等于最大投注的投注，需要额外加注的操作（如分牌等）仍然可用。
                                <br />
                                <br /> - 点击 “ 发牌 ” 按钮发牌。玩家和庄家派发两张牌。牌依次一张一张地派发到每个手中，第一张牌发到玩家手中。最后一张牌发到庄家手中，发牌时面朝下。
                                <br />
                                <br /> - 如果您打超过一手牌，那么每手牌应分别操作，从最右边一手开始。
                                <br />
                                <br /> - 如果庄家翻开的牌是A，您则被提供保险。点击 “ 保险 ” 按钮预防庄家有二十一点。
                                <br />
                                <br /> - 按需要使用 “ 要牌 ” 、 “ 开牌 ” 、 “ 加倍 ” 和 “ 分牌 ” 按钮。
                                <br />
                                <br /> - 请注意投保、加倍和分牌都需要加注。若账户余额不足，您需要存入更多的存款才能使用这些功能。
                                <br />
                                <br /> - 庄家展示面朝下的牌，并根据规则抽取附加牌。
                                <br />
                                <br /> - 您的手牌与庄家手牌对比。
                                <br />
                                <br /> - 如果您再想玩一回合，点击 “ 新建游戏 ” 。然后根据以上所述下注，或点击 “ 再次下注 ” 放置与上一回合同样的投注，然后点击 “ 发牌 ” 按钮发牌。点击 “ 重新下注并发牌 ” 放置与上一局相同的赌注并立即发牌。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>多手模式</h1>
                            &nbsp;
                            <p>- 在多手模式下，可以在牌桌半圆的多个手位投注。在手位投注时，您可以放一手，也可以放多手，最多放5手。每个手位的投注数额可能不同。
                                <br />
                                <br /> - 牌依次派发到每个手中，在最右边开始，然后顺时针派发，庄家收到最后一手。牌派发完毕后，每手分开打，从最右边开始。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current !== 2}>
                            <h2>轮盘</h2>
                            &nbsp;
                            <h1>美式轮盘</h1>
                            &nbsp;
                            <p>- 游戏的目标是预测小球将在轮盘哪个位置停留。轮盘包括红黑相间的1至36号数字和绿色的0和00。</p>
                            <br />
                            <br /> &nbsp;
                            <h1>游戏玩法</h1>
                            &nbsp;
                            <p>- 单击选择含有所需值的筹码。
                                <br />
                                <br /> - 单击轮盘赌桌上的数字或下注区域下注。每次单击该区域将在赌注中增加一个所选值的筹码。
                                <br />
                                <br /> - 最小和最大下注限额取决于您的VIP等级。如果赌注小于最低限制，则显示信息提示赌注不足，牌桌上相应的筹码闪动三次。关于所有位置下注限额的详细信息，将鼠标悬停或点击牌桌上的限额标志。
                                <br />
                                <br /> - 若要增加其他金额的赌注，请选择其他筹码并单击需要的下注区域。
                                <br />
                                <br /> - Shift点击（按住Shift点击）赌注区，从赌注中去除与选中筹码相同数额的筹码，如果选定筹码比已放置赌注数额大，则去除整个赌注。
                                <br />
                                <br /> - 您可同时将多个筹码放置在不同的下注区。
                                <br />
                                <br /> - 请在投放赌注后单击 “ 旋转 ” 转动小球。请注意， “ 旋转 ” 按钮在赌注低于最低限制时不能使用。单击 “ 清除赌注 ” 从赌桌上移除所有已下赌注。旋转结束后，单击 “ 重新下注 ” 投放与上一轮旋转相同的赌注，然后单击
                                “ 旋转 ” 转动小球。
                                <br />
                                <br /> - 获胜赌注留在桌子上。您可像拿走别的赌注一样把它们拿走，也可留在牌桌上供下一局使用。Inandplay可在某个牌桌上禁用此功能。如果禁用，获胜赌注与您的奖金一起返还给您。</p>
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


GameRuleThree.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleThree))));