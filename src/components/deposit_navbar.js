import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


const LINEPAY_LOGO_URL = "https://scdn.line-apps.com/linepay/partner/images/logo/linepay_logo_119x39_v3.png";

const styles = theme => ({

})

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
                Qaicash Wechat Pay
            </Button>
          </Link>
          <Link to="/deposit_paypal/">
            {/* <Button variant="contained" color="secondary" component="a" href="/deposit_paypal/" id="nav.deposit_paypal" className={classes.button}> */}
            <Button variant="contained" color="secondary" id="nav.deposit_paypal" className={classes.button}>
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
          <Link to="/deposit_asiapay/">
          <Button variant="contained" color="secondary" id="nav.deposit_asiapay" className={classes.button}>
                Asiapay JD Pay
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
export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps)(DepositNavBar))));