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

export class Virtual extends React.Component {
    
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
                                <a href="/for_member">沙巴体育规则  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h1>• 4.1.一般规定</h1>
                        &nbsp;
                        <p>• 4.1.1.虚拟运动游戏是电脑生成的演示，随机抽取的数字结果可决定哪队赢得比赛或赛事，或者哪一位参赛者将在比赛或赛事中获得第一名、第二名、第三名等等。 比赛或赛事的结果由通过认证测试公司单独测试的随机号码生成器 (RNG) 控制。
                            <br
                            /> • 4.1.2.在任何适用条件下, 虚拟运动的投注规则约束与真实体育赛事相同。
                            <br /> • 4.1.3.虚拟运动是广播赛事。 对同一比赛或赛事投注的会员都将收到同一结果。
                            <br /> • 4.1.4.如果因电脑、电子或其他关键故障而干扰比赛或赛事的演示，被受影响的赛事上的投注均将作废，赌金将全额退还。
                            <br /> • 4.1.5.即使比赛或赛事的评论信息不与虚拟运动视频流同步，所有投注仍视为有效。
                            <br /> • 4.1.6.如果比赛或赛事未开始或未完成且不能确定赛果，则比赛或赛事将作废。 根据此次投注规则与规定，赌金将全额退还。
                            <br /> • 4.1.7.即使会员从网站注销，未来比赛、赛事、周赛或季度赛的已接受投注仍视为有效。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.2.虚拟足球</h1>
                        &nbsp;
                        <p>• 4.2.1.虚拟足球是指对由随机号码生成的足球比赛或赛事结果进行的投注。 RNG 使用每个单独球队的系统评级来决定比赛或赛事的结果。 这里有五 (5) 个球队彩池可供选择，从国际级到俱乐部级标准。 每次比赛将由两 (2) 个球队对决。
                            <br
                            /> • 4.2.2.虚拟足球有六 (6) 种投注类型：
                            <br /> 1. 1x2(独赢)
                            <br /> 2. 波胆
                            <br /> 3. 总进球数(总入球数)
                            <br /> 4. 双重机会
                            <br /> 5. 2.5大小盘
                            <br /> 6. 亚洲盘
                            <br /> • 4.2.3.每场比赛或赛事都在晴天天气下举行，时间持续大约六十 (60) 秒。 包含四 (4) 次射门的精彩镜头集锦显示每个进球、失球和救球的结果。
                            <br /> • 4.2.4.每场比赛或赛事开始都会说明及显示两 (2) 个球队和投注类型的相应金额列表。
                            <br /> • 4.2.5.在开球警报之后，所有比赛或赛事将不会再接受投注。 开球后错误接受的任何投注将作废并退还赌金。
                            <br /> • 4.2.6.一旦比赛或赛事结束，将会出现一个比赛结果比分牌，上面显示每个投注类型的分数线和投注结果。
                            <br /> • 4.2.7.在显示比赛或赛事的结果后，将会介绍下一场比赛或赛事。 每场比赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.3.虚拟赛马</h1>
                        &nbsp;
                        <p>• 4.3.1.虚拟赛马表示根据随机数字产生的赛马或赛事的结果下注。
                            <br /> • 4.3.2.对于虚拟赛马，有5种下注方式：
                            <br /> 1. 独赢（ Win）
                            <br /> 2. 位置（Place）
                            <br /> 3. 独赢/位置(Win/Place)
                            <br /> 4. 连赢（Forecast）
                            <br /> 5. 三重彩（Tri-cast）
                            <br /> • 4.3.3.参赛马匹的数量在每次竞赛或赛事中将改变，这些竞赛将在晴天、阴天和夜晚的情况下分别按平跑、跳跃或冲刺的形式举行。
                            <br /> • 4.3.4.取决于参赛马匹的数量，虚拟赛马中独赢/位置（Win/Place）定义为：
                            <br /> • 4.3.4.1.对于8-11 匹: 位置1、2、3，赔率1/5
                            <br /> • 4.3.4.2.对于12-15匹: 位置1、2、3，赔率1/4
                            <br /> • 4.3.4.3.对于16 匹: 位置1、2、3，赔率1/4
                            <br /> • 4.3.5.每次竞赛或赛事开始时将进行介绍，要显示所有马匹、它们各自的号码和价格清单。
                            <br /> • 4.3.6.每次竞赛或赛事将持续30到45秒。
                            <br /> • 4.3.7.一旦竞赛或赛事结束，将回放跨过终点线的马匹，然后显示前3或前4名。
                            <br /> • 4.3.8.显示竞赛或赛事的结果后，将介绍下一次竞赛或赛事。每次竞赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.4.虚拟赛狗</h1>
                        &nbsp;
                        <p>• 4.4.1.虚拟赛狗表示根据随机数字产生的赛狗或赛事的结果下注。
                            <br /> • 4.4.2.对于虚拟赛狗，有5种下注方式：
                            <br /> 1. 独赢（ Win）
                            <br /> 2. 位置（Place）
                            <br /> 3. 独赢/位置(Win/Place)
                            <br /> 4. 连赢（Forecast）
                            <br /> 5. 三重彩（Tri-cast）
                            <br /> • 4.4.3.每次竞赛或赛事有6只狗参赛，这些竞赛将在晴天、阴天和夜晚的情况下分别按平跑、跳跃或冲刺的形式举行。
                            <br /> • 4.4.4.每次竞赛或赛事开始时将进行介绍，要显示所有赛狗、它们各自的号码和价格清单。
                            <br /> • 4.4.5.每次竞赛或赛事将持续30到45秒。
                            <br /> • 4.4.6.一旦竞赛或赛事结束，将回放跨过终点线的赛狗，然后显示前3名。
                            <br /> • 4.4.7.显示竞赛或赛事的结果后，将介绍下一次竞赛或赛事。每次竞赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.5.虚拟网球赛</h1>
                        &nbsp;
                        <p>• 4.5.1.虚拟网球赛表示根据随机数字产生的网球赛或赛事的结果下注。
                            <br /> • 4.5.2.每次网球赛有两名选手参赛，这些比赛将于天晴时在草地球场上举行。
                            <br /> • 4.5.3.对于虚拟网球赛，有三种下注方式：
                            <br /> 1. Moneyline
                            <br /> 2. 正确的得分
                            <br /> 3. 总分
                            <br /> • 4.5.4.每次竞赛或赛事开始时将进行介绍，要显示两位选手、他们各自的衬衫和旗帜、一只选手服务指示器以及每种下注的价格。
                            <br /> • 4.5.5.每次竞赛或赛事包括分数达到12分的单轮比赛，比赛时间为30到120秒。
                            <br /> • 4.5.6.显示竞赛或赛事的结果后，将介绍下一次竞赛或赛事。每次竞赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.6.虚拟赛车</h1>
                        &nbsp;
                        <p>• 4.6.1.虚拟赛车表示根据随机数字产生的竞赛或赛事的结果下注。
                            <br /> • 4.6.2.虚拟赛车有五种下注方式：
                            <br /> 1． 独赢
                            <br /> 2． 位置
                            <br /> 3． 独赢/位置
                            <br /> 4． 连赢
                            <br /> 5． 三重彩
                            <br /> • 4.6.3.每场竞赛或赛事将由12位车手参赛，这些赛事将在晴天的情况下在椭圆的赛道 上进行。
                            <br /> • 4.6.4.每场竞赛或赛事开始时将进行介绍，介绍将显示车手列表，价格，赛道名字， 倒计时钟，赛事距离和赛事。
                            <br /> • 4.6.5.每场竞赛或赛事将为60秒。
                            <br /> • 4.6.6.一旦竞赛或赛事结束，将回放及显示前3名跨过终点线的车手。
                            <br /> • 4.6.7.显示竞赛或赛事的结果后，将介绍下一次竞赛或赛事，每次竞赛或赛事的结果 将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.7.虚拟自行车</h1>
                        &nbsp;
                        <p>• 4.7.1.虚拟自行车表示根据随机数字产生的赛车或赛事的结果下注。
                            <br /> • 4.7.2.对于虚拟自行车，有5种下注方式：
                            <br /> 1. 独赢
                            <br /> 2. 位置
                            <br /> 3. 独赢/位置
                            <br /> 4. 连赢
                            <br /> 5. 三重彩
                            <br /> • 4.7.3.每次竞赛或赛事有6-9辆自行车参赛，竞赛是在椭圆形的自行车场及灯光的情况下进行。
                            <br /> • 4.7.4.每次竞赛或赛事开始时将进行介绍，介绍将显示骑士名单，球衣颜色，价格清单，跑道名称，倒数时钟和比赛距离。
                            <br /> • 4.7.5.每次竞赛或赛事将持续45秒。
                            <br /> • 4.7.6.一旦竞赛或赛事结束，屏幕将回放跨过终点的骑士，附加照片显示及首三位到达终点的骑士
                            <br /> • 4.7.7.显示竞赛或赛事的结果后，将介绍下一场竞赛或赛事。每次竞赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
                        <h1>• 4.8.虚拟沙地摩托车</h1>
                        &nbsp;
                        <p>• 4.8.1.虚拟沙地摩托车表示根据随机数字产生的赛车或赛事的结果下注。
                            <br /> • 4.8.2.对于虚拟沙地摩托车，有2种下注方式：
                            <br /> 1. 独赢
                            <br /> 2. 连赢
                            <br /> • 4.8.3.每次竞赛或赛事有4名摩托车骑士，竞赛将在夜间或灯光下的扁椭圆形轨道上进行。
                            <br /> • 4.8.4.每次竞赛或赛事开始时将进行介绍，介绍将显示骑士名单，价格清单，跑道名称，倒数时钟和比赛距离。
                            <br /> • 4.8.5.每次竞赛或赛事将持续30秒。
                            <br /> • 4.8.6.一旦竞赛或赛事结束，屏幕将回放跨过终点的骑士，附加照片显示及首三 位到达终点的骑士。
                            <br /> • 4.8.7.显示竞赛或赛事的结果后，将介绍下一场竞赛或赛事。每次竞赛或赛事的结果将在网站上显示一段时间。</p>
                        <br />
                        <br /> &nbsp;
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


Virtual.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Virtual))));