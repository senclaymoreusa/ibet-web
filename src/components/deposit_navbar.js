import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const LINEPAY_LOGO_URL = "https://scdn.line-apps.com/linepay/partner/images/logo/linepay_logo_119x39_v3.png";
const QUICKPAY_LOGO_URL = "http://cdn.68design.net/work/pic/201205/5Fm4VdeqjE.jpg";

export class DepositNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };


}
  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <Link to="/deposit_qaicash/">
            <Button variant="contained" color="primary" id="nav.deposit_qaicash" className={classes.button}>
                Wechat Pay
            </Button>
          </Link>
          <Link to="/deposit_paypal/">
            {/* <Button variant="contained" color="secondary" component="a" href="/deposit_paypal/" id="nav.deposit_paypal" className={classes.button}> */}
            <Button variant="contained"  id="nav.deposit_paypal" className={classes.button}>
                Paypal
            </Button>
          </Link>
          <Link to="/deposit_linepay/">
            <img 
              id="LINElogo" 
              type="image" 
              // onClick={() => {this.props.history.push("/deposit_linepay/");}}
              style={{cursor: "pointer", marginTop: "30px"}}
              src={LINEPAY_LOGO_URL} 
              alt="LINEpay logo"
            />
          </Link>
          <Link to="/deposit_asiapay_kuaijie/">
            <Button variant="contained" color="secondary" id="nav.deposit_asiapay_jdpay" className={classes.button}>
                快捷支付
            </Button>
          </Link>
          <Link to="/deposit_asiapay_jdpay/">
            <Button variant="contained" color="secondary" id="nav.deposit_asiapay_jdpay" className={classes.button}>
                JD Pay
            </Button>
          </Link>
          <Link to="/deposit_asiapay_bankcard/">
            <Button variant="contained" color="secondary" id="nav.deposit_asiapay_bankcard" className={classes.button}>
                在线支付
            </Button>
          </Link>
          <Link to="/deposit_asiapay_unionpay/">
          <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_unionpay" className={classes.button}>
                UnionPay
            </Button>
          </Link>
          <Link to="/deposit_asiapay_wechatpay/">
          <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_wechatpay" className={classes.button}>
                微信支付
            </Button>
          </Link>
          <Link to="/deposit_asiapay_alipay/">
          <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_alipay" className={classes.button}>
                支付宝
            </Button>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}
export default withStyles()(injectIntl(withRouter(connect(mapStateToProps)(DepositNavBar))));