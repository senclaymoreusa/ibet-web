import React, { Component } from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

document.body.style = 'background: #f1f1f1;';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
  }
});

export class Home extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        <div className={classes.grow} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(Home));