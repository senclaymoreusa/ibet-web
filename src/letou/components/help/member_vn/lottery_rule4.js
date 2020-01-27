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

export class LotteryRuleFourVn extends React.Component {
    
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
                                <a href="/vi/for_member">Luật chơi Sổ xố>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Luật chơi PK10</h2>
                        &nbsp;
                        <h1> Cược vị trí </h1>
                        <p> Vị trí：Cược vào bảng xếp hạng của chiếc xe đua bằng cách chọn số của xe. Tiền cược thắng nếu bạn đặt cược vào kết quả trận
                            đấu chính xác trong khi những người khác bị thua.
                            <br /> EX. Chọn số xe 9 kết thúc ở vị trí thứ ba, và kết quả trận đấu cho chiếc xe thứ ba là số 9, cược sẽ thắng.
                            <br /> Big / Small / Odd / Even: Chọn một vị trí xếp hạng xe và đặt cược số xe cho Big (6,7,8,9,10), Small (1,2,3,4,5), Odd
                            (1, 3,5,7,9), hoặc Even (2,4,6,8,10). Khi cược khớp với kết quả, cược thắng.
                            <br /> EX. Cược vào số xe vô địch là nhỏ, và kết quả trận đấu cho nhà vô địch là xe số 5, cá cược thắng; hoặc cá cược vào số
                            vô địch xe là Odd, cá cược cũng chiến thắng.</p>
                        <h1>Tổng số xe của vị trí thứ nhất và vị trí thứ 2</h1>
                        <p> Tổng số xe của vị trí thứ nhất và vị trí thứ 2 từ 3 đến 19.Khi người chơi cược đúng con số, cược sẽ thắng.
                            <br /> EX. Đặt cược cho tổng số xe của vị trí thứ nhất và vị trí thứ 2 là 13. Kết quả cho xe về vị trí thứ nhất là 5, xe về
                            vị trí thứ 2 là 8. Cược thắng.
                            <br /> Tổng theo nhóm：Có 4 nhóm kết hợp: (1) [3, 4, 18, 19] (2) [5, 6, 16, 17] (3) [7, 8, 14, 15] (4) [9, 10, 12, 13] để người
                            chơi đặt cược. Khi cược đúng với kết quả, Cược thắng.
                            <br /> EX. Khi xe về nhất là xe số 5, vị trí thứ 2 là xe số 8, cược vào nhóm (4) [9, 10, 12, 13] thắng.</p>
                        <h1>Dragon/Tiger</h1>
                        <p> Dragon/Tiger cho vị trí thứ nhất：Dragon: Khi xe thứ nhất có số cao hơn xe thứ 10, cược chọn vào “Dragon cho vị trí thứ nhất”
                            thắng. Tiger: Khi xe thứ nhất có số nhỏ hơn xe thứ 10, cược chọn vào “Tiger cho vị trí thứ nhất” thắng.
                            <br /> Dragon/Tiger cho vị trí thứ 2：Khi xe về thứ 2 có số cao hơn xe thứ 9, cược chọn vào “Dragon cho vị trí thứ 2” thắng.
                            Tiger: Khi xe thứ 2 có số nhỏ hơn xe thứ 9, cược chọn vào “Tiger cho vị trí thứ 2” thắng.
                            <br /> Dragon/Tiger cho vị trí thứ 3：Khi xe về thứ 3 có số cao hơn xe thứ 8, cược chọn vào “Dragon cho vị trí thứ 3” thắng.
                            Tiger: Khi xe thứ 3 có số nhỏ hơn xe thứ 8, cược chọn vào “Tiger cho vị trí thứ 3” thắng.
                            <br /> Dragon/Tiger cho vị trí thứ 4：Khi xe về thứ 4 có số cao hơn xe thứ 7, cược chọn vào “Dragon cho vị trí thứ 4” thắng.
                            Tiger: Khi xe thứ 4 có số nhỏ hơn xe thứ 7, cược chọn vào “Tiger cho vị trí thứ 4” thắng.
                            <br /> Dragon/Tiger cho vị trí thứ 5：Khi xe về thứ 5 có số cao hơn xe thứ 6, cược chọn vào “Dragon cho vị trí thứ 5” thắng.
                            Tiger: Khi xe thứ 5 có số nhỏ hơn xe thứ 6, cược chọn vào “Tiger cho vị trí thứ 5” thắng.
                            <br /> 3+ Dragons: The number of “Dragon” &gt; the number of “Tiger” is 3+ Dragons.
                            <br /> 3+ Tigers: The number of “Tiger” &gt; the number of “Dragon” is 3+ Tigers.
                            <br /> 5 Dragons: Có 5 Dragon và 0 Tiger.
                            <br /> 5 Tigers: Có 0 Dragon và 5 Tigers.
                            <br /> EX. Cược Dragon cho vị trí thứ 5, kết quả về vị trí thứ 5 là xe số 8, và vị trí số 6 là xe số 5. 8>5, Dragon cho vị
                            trí số 5 thắng.</p>
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


LotteryRuleFourVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(LotteryRuleFourVn))));