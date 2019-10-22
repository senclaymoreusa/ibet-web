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

export class Lunpan extends React.Component {
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
                                <a href="/for_member">娱乐场规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HelpCenterSmNav">
                        <ul>
                            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.onClick.bind(this,1)}>
                                <a>亚洲轮盘</a>
                            </li>
                            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.onClick.bind(this,2)}>
                                <a>国际轮盘</a>
                            </li>
                        </ul>
                        <div className="ClearBoth"></div>
                    </div>
                    <div id="HelperCenterDetail">
                        <div className="centerDetail" hidden={this.state.current != 1}>
                            <h2>亚洲轮盘</h2>
                            <p>- 本游戏是采用欧式轮盘，欧式轮盘上共有37个小方格（0至36）。
                                <br /> - 轮盘会顺时针转动，在投注时间结束后，小球会向逆时针方向弹出并於轮盘上滚动，最后会停在其中一个小方格内。
                                <br /> - 戏目的是预测小球会停留在那一个颜色，号码或投注号码组合上。</p>

                            <h1>【押注方式】</h1>
                            <p>♦ 在赌桌上有个下注的表格是以每竖排三个数字共有12排1~36依序排列，数字的颜色即和轮盘相同。轮盘压注方式有：直接押注号码、两码押注、竖排三码押注、方形四码押注、二竖排六码押注、十二码押注、直线押注、红色／黑色押注、奇数／偶数押注和大／小范围押注等。
                                <br
                                />
                                <br /> ♦ 关於押注的方式并没有硬性规定，所以您可以自由选择多种押注。在电脑屏幕的右上方我们随时会将上一局游戏的号码秀出来，通常若有号码久久都末出现，那接下来要出的概率将会很大（ 下列例子赔率不连本金计算）。
                                <br />
                                <br /> ♦ 自动加注功能：在轮盘游戏中，不同的投注项目也有其独立的投注下限（ 详情请查询"单项限红"）。为方便用户投注，低於单项投注下限的投注金额将会自动增加，从而达到该单项投注项目的下限标准。
                                <br />
                                <br /> ♦ 例：在（ 上限：20000／下限：50）的轮盘游戏中，"单／双"项目的投注下限是$500，当用户押$100（ 低於$500）在"单／双"项目的时候，由於投注金额低於"单／双"项目的投注下限，所以游戏系统便会自动将投注金额增加到$500。</p>
                        </div>
                        <div className="centerDetail" hidden={this.state.current != 2}>
                            <h2>国际轮盘</h2>
                            <p>- 采用国际轮盘，国际轮盘上共有37个小方格（0至36）。
                                <br /> - 国际轮盘的号码排列方式与亚洲轮盘不同。
                                <br /> - 轮盘会顺时针转动，在投注时间结束后，小球会向逆时针方向弹出并於轮盘上滚动，最后会停在其中一个小方格内。
                                <br /> - 游戏目的是预测小球会停留在那一个颜色，号码或投注号码组合上。
                                <br /> - 国际轮盘的投注方式与亚洲轮盘无异，而投注种类则有区别。</p>
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


Lunpan.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Lunpan))));