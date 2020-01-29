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
   
    content: {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
       
    },
    infoSelect: {
        paddingLeft: 300,
        display: 'flex',
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

export class GameWenzhoujiupaiVn extends React.Component {
    
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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
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
                                <a href="/vi/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Nguyên tắc Casino >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail" className={classes.detail}>
                    <h2>Pai Gow Ôn Châu (Bài cửu Ôn châu)</h2>
                        <p>Bài cửu Ôn châu là một cách chơi game truyền thống Trung quốc, cách chơi là căn cứ vào một bộ bài 32 lá, lấy sự tổ hợp điểm
                            số khác nhau làm cơ sở so sánh to bé, và quyết định thắng thua.</p>
                        <p>-Quy tắc chơi
                            <br /> • Xếp bài: lấy 2 lá bài làm một bộ, xếp thành một dãy.
                            <br /> • Mỗi bộ bài chỉ chơi 2 ván là xào bài lại
                            <br /> • Chia bài: Nhà cái lắc hai con xúc xắc trước, sau lấy điểm số trừ đi số dư của 4, 1= nhà cái,2= người chơi thứ nhất,
                            3= người chơi thứ 2, 0= người chơi thứ 4 , để quyết định chia bài từ cửa nào, mỗi cửa một vòng chia một lá bài, mỗi nhà
                            tổng cộng có 2 lá bài.
                            <br /> • Đặt cược số cửa: có 3 cửa, mỗi cửa có thể đặt cược riêng xem cửa đó thắng hay thua,nhưng người đặt cược cửa thua mỗi
                            ngưởi chơi chỉ được đặt một cửa, người đặt cửa thắng tối đa có thể đặt đến 3 cửa.
                            <br /> • Lấy số hàng đơn vị của tổng điểm số hai lá bài để quyết định thắng thua, tối đa là 9, tối thiểu là 0.
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


GameWenzhoujiupaiVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameWenzhoujiupaiVn))));