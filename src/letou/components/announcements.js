import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import {
  hide_letou_announcements
} from '../../actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 600,
    width: 600
  },
});

class Announcements extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }



  render() {

    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <Button size="small" height={30} onClick={(event) => { this.props.hide_letou_announcements() }}>
          close
        </Button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}


export default withStyles(styles)(injectIntl(connect(mapStateToProps, { hide_letou_announcements })(Announcements)));

