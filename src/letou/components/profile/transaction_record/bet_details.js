import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        width: '100%',
    },

});



export class BetDetails extends Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
              bet details page works!!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(BetDetails))));