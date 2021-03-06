import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../../../../../css/deposit.css';
import { authCheckState } from '../../../../../../actions';

const LINEPAY_LOGO_URL = "https://scdn.line-apps.com/linepay/partner/images/logo/linepay_logo_119x39_v3.png";


const styles = theme => {
  return {
    navcontainer: {
      textAlign: "center"
    },
    Link: {
      textDecoration: "none"
    }
    // button: {
    //   backgroundColor: "green"
    // }
  }
}

export class DepositNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.navcontainer} >
          <nav className="navbar navbar-dark bg-dark mb-3">
            <Link to="/deposit_qaicash/" className={classes.Link}> {/* deposit using wechat provided by qaicash */}
              <Button variant="contained" color="primary" id="nav.deposit_qaicash" className={classes.button}>
              Qaicash Wechat Pay
              </Button>
            </Link>
            <Link to="/deposit_qaicash_alipay/"> {/* deposit using apipay provided by qaicash */}
              <Button variant="contained" color="primary" id="nav.deposit_qaicash_alipay" className={classes.button}>
                  Qaicash AliPay
              </Button>
            </Link>
            <Link to="/deposit_paypal/" className={classes.Link}>
              {/* <Button variant="contained" color="secondary" component="a" href="/deposit_paypal/" id="nav.deposit_paypal" className={classes.button}> */}
              <Button variant="contained"  id="nav.deposit_paypal" className={classes.button}>
                  Paypal
              </Button>
            </Link>
            <Link to="/deposit_linepay/" className={classes.Link}>
              <img 
                id="LINElogo" 
                type="image" 
                // onClick={() => {this.props.history.push("/deposit_linepay/");}}
                style={{cursor: "pointer", marginTop: "30px"}}
                src={LINEPAY_LOGO_URL} 
                alt="LINEpay logo"
              />
            </Link>
            <Link to="/deposit_asiapay_kuaijie/" className={classes.Link}>
              <Button variant="contained" color="secondary" id="nav.deposit_asiapay_jdpay" className={classes.button}>
                  快捷支付
              </Button>
            </Link>
            <Link to="/deposit_asiapay_jdpay/" className={classes.Link}>
              <Button variant="contained" color="secondary" id="nav.deposit_asiapay_jdpay" className={classes.button}>
                  JD Pay
              </Button>
            </Link>
            <Link to="/deposit_asiapay_onlinepay/" className={classes.Link}>
              <Button variant="contained" color="secondary" id="nav.deposit_asiapay_onlinepay" className={classes.button}>
                  在线支付
              </Button>
            </Link>
            <Link to="/deposit_asiapay_unionpay/" className={classes.Link}>
              <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_unionpay" className={classes.button}>
                  UnionPay
              </Button>
            </Link>
            <Link to="/deposit_asiapay_wechatpay/" className={classes.Link}>
              <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_wechatpay" className={classes.button}>
                  微信支付
              </Button>
            </Link>
            <Link to="/deposit_asiapay_alipay/" className={classes.Link}>
              <Button variant="contained"  color="secondary" id="nav.deposit_asiapay_alipay" className={classes.button}>
                  支付宝
              </Button>
            </Link>
            <Link to="/deposit/astropay/" className={classes.Link}>
              <Button variant="contained"  color="primary" id="nav.deposit_astropay" className={classes.button}>
                  Astropay
              </Button>
            </Link>
            <Link to="/deposit/circlepay/" className={classes.Link}>
              <Button variant="contained"  color="secondary" id="nav.deposit_circlepay" className={classes.button}>
                  Circlepay
              </Button>
            </Link>
            <Link to="/deposit/payzod/" className={classes.Link}>
              <Button variant="contained"  color="secondary" id="nav.deposit_payzod" className={classes.button}>
                  Payzod
              </Button>
            </Link>
            <Link to="/deposit_help2pay/" className={classes.Link}>
              <Button variant="contained"   id="nav.deposit_help2pay" className={classes.button}>
                  Help2pay
              </Button>
            </Link>
            <Link to="/deposit_fgo/" className={classes.Link}>
              <Button variant="contained"   color="primary" id="nav.deposit_fgo" className={classes.button}>
                  Fgo
              </Button>
            </Link>
          </nav>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}
export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState })(DepositNavBar))));