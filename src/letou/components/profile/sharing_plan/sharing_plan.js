import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
       padding:10
    },

});



export class SharingPlan extends Component {

    
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
               sharing plan page works!!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(SharingPlan))));