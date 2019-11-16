import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';

import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


const styles = theme => ({
   
})

export class Iovation extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "../src/letou/components/iovation/config.js";
    script.lang = "javascript"
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    // script2.async = true;
    script2.src = "../src/letou/components/iovation/iovation.js";
    script2.lang = "javascript"
    document.body.appendChild(script2);
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hello react</h1>
  //     </div>
  //   );
  // }

    send_bb() {
      // make AJAX call here or do something else with blackbox
      // for illustration purposes, we are just going to do an alert here
      var bb = "";
      try {

          console.log( window.IGLOO)
          bb = window.IGLOO.getBlackbox();
          alert( "bb: " + bb.blackbox );
      } catch (e) { 
        alert( "Unable to get blackbox. " + e );
    }
  }

    render() {
  
      const { classes } = this.props;
  
      return (
       
        <div className={classes.root}> 
          <form method="POST" action="#">
            <input type="submit" name="Go first!" onclick={this.send_bb()}></input>
          </form>
                
          {/* <h2>{window.IGLOO}</h2> */}
          
          {/* <script type="text/javascript"> */}
            
{/*            
        
           
            /> */}

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


Iovation.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Iovation))));