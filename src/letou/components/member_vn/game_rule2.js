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

export class GameRuleTwoVn extends React.Component {
    
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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                        </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div className="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vi/for_member">Dành cho Thành viên  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Slot Cổ Điển</h2>
                        <p>1. Số đặc biệt
                            <br /> Người chơi thắng nếu như số đặc biệt hiện tại chiến thắng giống với con số đặt cược.
                            <br /> 2. Số thường
                            <br /> Người chơi thắng nếu đặt đúng bất kỳ bóng nào từ 1 đến 7
                            <br /> 3. Cược 2 bên
                            <br /> Cược 2 bên nói chung là cược cho Lớn/nhỏ/lẻ/chẵn
                            <br /> Lớn/ Nhỏ：Nếu như kết quả ra số bằng hoặc lớn hơn 16, nó là "Lớn”;" bằng hoặc nhỏ hơn 15 là “nhỏ”
                            <br /> Lẻ/Chẵn：Kết quả được xác định bởi số đó là một số lẻ hoặc một số chẵn.
                            <br /> Số duy nhất Lớn/ Nhỏ：Nếu như số duy nhất bằng hoặc lớn hơn 5, nó sẽ là " Số duy nhất Lớn"; nếu như số duy nhất bằng
                            hoặc nhỏ hơn 4, nó sẽ là “ Số duy nhất nhỏ”.
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


GameRuleTwoVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleTwoVn))));