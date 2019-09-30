import React from 'react';
import { connect } from 'react-redux';
import { authSignup, authCheckState } from '../actions'
import { injectIntl } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height:600,
    width:600
  },
});

class Announcements extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      
    };

  }

 

  render() {

    const { classes } = this.props;
    
    return (

      <div className={classes.root}> 

        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}


export default withStyles(styles)(injectIntl(connect(mapStateToProps, {authSignup, authCheckState})(Announcements)));

