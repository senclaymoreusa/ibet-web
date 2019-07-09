import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

export class WithdrawNavBar extends Component {
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
          <Link to="/withdraw_asiapay/">
            <Button variant="contained" color="primary" id="nav.withdraw_asiapay" className={classes.button}>
                Asiapay
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
export default (injectIntl(withRouter(connect(mapStateToProps)(WithdrawNavBar))));