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

export class GameRuleTwo extends React.Component {
    
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
                                    <a href="/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">小游戏规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>经典老虎机</h2>
                        &nbsp;
                        <h1>游戏玩法</h1>
                       
                            <ul className={classes.helpCenterArticleColumn}>
                            <li>- 单击屏幕左边的＋和－按钮选择您要在每局下注的硬币数。</li>
                            <li>
                            </li><li> - 单击 “ 赌一个 ” 或者 “ 赌最大 ” 按钮选择您想下注的硬币数。单击一次 “ 赌一个 ” 按钮可在赌注中增加一个硬币。
                            </li><li>
                            </li><li> - 您也可以单击赔率表中相应的列下注（最左边一列下一个硬币的赌注，中间列下两个硬币的赌注，最右边一列下三个硬币的赌注）。转轴会开始自动旋转。
                            </li><li>
                            </li><li> - 单击 “ 赌最大 ” 按钮可将赔付线的数目增加至最大－即三条赔付线－并且自动旋转转轴。
                            </li><li>
                            </li><li> - 单击 “ 旋转 ” 按钮（如果没有按赌最大或者使用赔率表），或者点击转臂以旋转转轴。
                            </li><li>
                            </li><li> - 如果转轴停止后显示赢奖组合（沿着赔付线），您将依照赔率表赢得相应奖金。
                        </li><li>
                        </li><li> &nbsp;</li>
                        </ul>
                        <h1>按钮</h1>
                        &nbsp;
                       
                        <ul className={classes.helpCenterArticleColumn}>
                            <li>► ＋和－按钮：增加或减少硬币值。 </li>
                            <li> ► 赌一个：下一个硬币赌注或者增加一个硬币到赌注中（最多达三个）。然后单击旋转按钮旋转转轴。
                            </li><li> ► 赌最大：下三个硬币的赌注并自动旋转转轴。
                            </li><li> ► 旋转：旋转转轴。</li>
                            </ul>
                           
                       
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


GameRuleTwo.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleTwo))));