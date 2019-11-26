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

export class GameGubao extends React.Component {
    
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
                                <a href="/for_member">娱乐场规则 >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <h2>
                            <span>骰宝</span>
                        </h2>
                        <h1>【游戏规则】</h1>
                        <p>- 骰宝游戏采用三粒骰子，用户可在投注时间内下注投注项目。
                        <ul className={classes.helpCenterArticleColumn}>
                            <li> - 投注时间结束后，三粒骰子在自动振动骰盅内进行滚动。当振动时间完毕后，静止的三粒骰子朝上一方的点数便是该局的结果。</li>
                            <li> - 因斜骰或叠骰...等因素令结果不能清析判定。监场人员有权把该次结果设为无效。该局投注会按重新摇骰后的清析结果计算。</li>
            
                            <li> - 当游戏结果出现围骰，投注（大／小 ）或（单／双）项目均作为输。</li></ul></p>
                        <h1>【派彩赔率】</h1>
                        <p></p>
                            <img src="http://i.imgur.com/TsYw1Xt.png" alt=""></img>
                        
                        <p>下注在单一个点数：</p>
                            
                            <img src="http://i.imgur.com/HO61AWk.png" alt=""></img>
                        
                        <p>3颗骰子点数总和： </p>
                           
                            <img src="http://i.imgur.com/UmmvOkb.png" alt=""></img>
                       
                        <p>3颗骰子点数总和：</p>
                           
                            <img src="http://i.imgur.com/DTrEM5e.png" alt=""></img>
                        
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


GameGubao.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameGubao))));