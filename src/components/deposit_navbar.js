import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
          <Button variant="contained" color="primary" component="a" href="/deposit_qaicash/" id="nav.deposit_qaicash" className={classes.button}>
              Qaicash Wechat Pay
          </Button>
          <Button variant="contained" color="secondary" component="a" href="/deposit_paypal/" id="nav.deposit_paypal" className={classes.button}>
              Paypal
          </Button>
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