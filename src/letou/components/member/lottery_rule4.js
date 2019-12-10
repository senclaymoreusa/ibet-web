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

export class LotteryRuleFour extends React.Component {
    
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
                                <a href="/zh/for_member">彩票规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>PK拾游戏规则</h2>
                        <h2>一、 名次定位</h2>
                        <p>名次定位玩法：选择一个名次后，投注该名次的车号，若开奖结果“投注车号”对应所投名次相符视为中奖，其余视为不中奖。
                            <br /> 例如：选择季军投注车号9，开奖结果季军车号为9号车即为中奖。
                            <br /> 大小单双玩法：选择一个名次后，投注该名次的车号大(6,7,8,9,10)、小(1,2,3,4,5)、单(1,3,5,7,9)、双(2,4,6,8,10)，所投注与开奖结果相符视为中奖，其余视为不中奖。
                            <br /> 例如：投注冠军车号为小，开奖结果冠军为5号车即为中奖；投注冠军车号为单，开奖结果冠军为5号车即为中奖。
                        </p>
                        <p>
                            <br /> &nbsp;
                        </p>
                        <h2>二、 冠亚和</h2>
                        <p>冠亚军和值玩法：冠军车号+亚军车号的和值区间为 3~19，当投注号码符合该局所开出的冠亚军和值，即视为中奖。
                            <br /> 例如：投注冠亚军和值号码13，开奖结果冠军为5号车、亚军为8号车，冠亚军车号和值为13即为中奖。
                            <br /> 和值组合玩法：分别为(1)青龙[3,4,18,19] (2)白虎[5,6,16,17] (3)朱雀[7,8,14,15] (4)玄武[9,10,12,13] 等 4 个投注组合，当投注组合其中任一号码符合该局所开出的冠亚军和值，即视为中奖。
                            <br
                            /> 例如：投注和值组合(3)朱雀[7,8,14,15]，开奖结果冠军为5号车、亚军为9号车，冠亚军车号和值为14即为中奖。
                            <br /> 和值大小单双玩法：所投注与开奖结果冠亚军和值相符视为中奖，其余视为不中奖。(3~10为小、12~19为大；3、5、7、9、13、15、17、19为单，4、6、8、10、12、14、16、18为双) *开出和值11时为平局退款。</p>
                        <p>
                            <br /> &nbsp;
                        </p>
                        <h2>三、 龙虎组合</h2>
                        <p>冠　军 龙/虎：第一名车号＞第十名车号视为【龙】中奖、反之小于视为【虎】中奖。
                            <br /> 亚　军 龙/虎：第二名车号＞第九名车号视为【龙】中奖、反之小于视为【虎】中奖。
                            <br /> 季 军 龙/虎：第三名车号＞第八名车号视为【龙】中奖、反之小于视为【虎】中奖。
                            <br /> 第四名 龙/虎：第四名车号＞第七名车号视为【龙】中奖、反之小于视为【虎】中奖。
                            <br /> 第五名 龙/虎：第五名车号＞第六名车号视为【龙】中奖、反之小于视为【虎】中奖。
                            <br /> 龙多：龙的数量＞虎的数量，即为龙多。
                            <br /> 虎多：虎的数量＞龙的数量，即为虎多。
                            <br /> 全龙：龙的数量为 5、虎的数量为 0
                            <br /> 全虎：龙的数量为 0、虎的数量为 5
                            <br /> 例如：投注第五名[龙]，开奖结果第五名为8号车、第六名为5号车，8＞5为[龙]即为中奖。
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


LotteryRuleFour.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleFour))));