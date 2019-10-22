import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import InfoSelect from "../info_select";
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

export class BetRuleTwo extends React.Component {
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
                                <a href="/for_member">体育规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>一般盘口规则</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>混合过关与兑现功能</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                            <h2>优胜冠军</h2>

                            <p>优胜冠军是指对一项赛事、比赛或锦标赛中的获胜者投注。例如：足球联赛或一个F1赛季冠军。赌盘标题中将标明详细内容。
                                <br /> 如果参赛者/球员没有出场参加赛事、比赛或锦标赛，则所有投注于该参赛者/球员的“优胜冠军/冠军”投注将作废，除非在特定的投注规则中另有说明。
                                <br /> 术语“任何其他选手”（任何其他团队等）指所有未在赌盘中列名的参赛者。
                            </p>

                            <p>&nbsp;</p>

                            <h2>1X2</h2>

                            <p>1X2(3way)，代表投注哪只球队胜出。
                                <br /> 1：如果主队胜出，该选项投注为赢
                                <br /> X：如果两队和局，该选项投注为赢
                                <br /> 2：如果客队胜出，该选项投注为赢
                                <br /> 进行投注结算时，如果比赛是在中立场举行，列在前面的球队将被视为主队。
                            </p>

                            <p>&nbsp;</p>

                            <h2>独赢盘</h2>

                            <p>独赢盘是指投注哪只球队胜出(无和局)。</p>

                            <p>&nbsp;</p>

                            <h2>让分盘</h2>

                            <p>让球盘是指当一方参赛者或团队获得假定的预先让分（在赛事开始之前凭借该让分而有效领先）。获胜者为赛果加上该让分后得分更高的参赛者或团队。 在《特定赛事投注规则》中列出了其余的让球盘规则。</p>

                            <p>&nbsp;</p>

                            <h2>三项让分盘</h2>

                            <p>将依让分调整后的实际比赛得分所定的赔率进行投注结算。</p>

                            <p>&nbsp;</p>

                            <h2>大小盘</h2>

                            <p>大/小盘是指由该赛事最终总分（入球数、得分情况等）来确定的投注。 如果总分超过大/小盘预先指定的分数线，则投注“大盘”者为赢；如果总分低于大/小盘预先指定的分数线，则投注“小盘”者为赢。</p>

                            <p>&nbsp;</p>

                            <h2>总进球数 单/双、总进球数 单/双-上半场</h2>

                            <p>总进球数单/双，是指由一项赛事最终赛果两队加总的得分（入球数、得分情况等）来确定的投注。
                                <br /> 上半场单双盘是指投注结果由上半场赛事的总分来决定。
                                <br /> 如果赛事在上半场结束之前中止，全部上半场的投注将视为无效。相反的，如果赛事在上半场结束之后中止，则全部上半场的投注将视为有效。
                            </p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                            <h2>混合过关</h2>

                            <p>玩家可选择任何地区的投注选项进行过关投注，混和过关的赔率固定为相乘。同一场赛事、优胜冠军不能互相串关。</p>

                            <div className="MarginBottom20 tableFontStyle">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="Title">独赢1</td>
                                            <td className="Title">独赢2</td>
                                            <td className="Title">独赢3</td>
                                            <td className="Title">独赢4</td>
                                            <td className="Title">独赢5</td>
                                            <td className="Title">独赢6</td>
                                            <td className="Title">独赢7</td>
                                            <td className="Title">独赢8</td>
                                            <td className="Title">独赢9</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>2串1</td>
                                            <td>3串1</td>
                                            <td>4串1</td>
                                            <td>5串1</td>
                                            <td>6串1</td>
                                            <td>7串1</td>
                                            <td>8串1</td>
                                            <td>9串1</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <br /> 3串3
                                            </td>
                                            <td>
                                                <br /> 4串4
                                            </td>
                                            <td>
                                                <br /> 5串5
                                            </td>
                                            <td>
                                                <br /> 6串6
                                            </td>
                                            <td>
                                                <br /> 7串7
                                            </td>
                                            <td>
                                                <br /> 8串8
                                            </td>
                                            <td>
                                                <br /> 9串9
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <br /> 3串4
                                            </td>
                                            <td>
                                                <br /> 4串6
                                            </td>
                                            <td>
                                                <br /> 5串10
                                            </td>
                                            <td>
                                                <br /> 6串15
                                            </td>
                                            <td>
                                                <br /> 7串21
                                            </td>
                                            <td>
                                                <br /> 8串28
                                            </td>
                                            <td>
                                                <br /> 9串36
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <br /> 4串5
                                            </td>
                                            <td>
                                                <br /> 5串6
                                            </td>
                                            <td>
                                                <br /> 6串7
                                            </td>
                                            <td>
                                                <br /> 7串8
                                            </td>
                                            <td>
                                                <br /> 8串9
                                            </td>
                                            <td>
                                                <br /> 9串10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <br /> 4串11
                                            </td>
                                            <td>
                                                <br /> 5串16
                                            </td>
                                            <td>
                                                <br /> 6串22
                                            </td>
                                            <td>
                                                <br /> 7串29
                                            </td>
                                            <td>
                                                <br /> 8串37
                                            </td>
                                            <td>
                                                <br /> 9串46
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>例：玩家选择5种玩法，投注10元，则过关投注选项将有
                                <br /> i. 独赢：5种玩法各自下注，共产生5注，赔率依各玩法设定，需符合最大限额，总注金为50。
                                <br /> ii. 五串一：5种玩法皆获胜投注方为赢，共产生1注，赔率为各玩法相乘，需符合最大限额，总注金为10。
                                <br /> iii. 五串五：5种玩法任选4种玩法组合为四串一，若5种玩法中仅4玩法获赢，仍可赢得1注，共产生5注，赔率为各玩法相乘，需符合最大限额，总注金为50。
                                <br /> iv. 五串十：5种玩法任选3种玩法组合为三串一，若5种玩法中仅3玩法获赢，仍可赢得1注，共产生10注，赔率为各玩法相乘，需符合最大限额，总注金为100。
                                <br /> v. 五串六：产生二、三注单，共产生6注，赔率为各玩法相乘，需符合最大限额，总注金为60。
                                <br /> vi. 五串十六：产生二、三、四注单，共产生16注，赔率为各玩法相乘，需符合最大限额，总注金为160。</p>

                            <p>&nbsp;</p>

                            <h2>兑现</h2>

                            <p>“兑现”功能让您有机会在赛事结束前就提前结算。如果投注队伍表现出色，可以提前兑现获得奖金，或是当注单即将要输时，使用兑现功能来减少可能的损失。此功能将让您随时兑现注单，灵活运用资金。
                                <br />
                                <br /> 赛事开始后，如果想选择提前兑现，请在未结算注单中点选“兑现”按钮，将显示为“兑现中”，当申请成功时，投注随即结算，所兑现的金额将发放至您的账户中，金额取决于实时赔率，可能高于或低于投注额。
                                <br />
                                <br /> 兑现功能适用于滚球盘口，目前仅提供足球的让球与大小盘口可以兑现。赛前注单亦可于滚球时进行兑现。兑现交易会因盘口中止、危险球情况(进球、红牌等)或是结算时的赔率变动而失败，请以实际操作为准。
                            </p>

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


BetRuleTwo.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(BetRuleTwo))));