import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/top_navbar.scss';

const styles = theme => ({
    root: {
        width: '100%',
    },
   appBar: {
        height: 60,
        boxShadow: '0 8px 18px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#fff'
    },
     grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

});

export class TopNavbar extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.firstNavLayer}>
                    <Toolbar className={classes.appBar}>
             
                    </Toolbar>
                </AppBar>
                <AppBar position="static" >
                   
                </AppBar>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        error: state.auth.error,
        lang: state.language.lang,
      
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
})(TopNavbar))));