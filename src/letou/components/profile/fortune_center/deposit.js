import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
       
    },

});



export class Deposit extends Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
               deposit page works!!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Deposit))));