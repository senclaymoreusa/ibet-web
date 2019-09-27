import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';

import '../css/top_navbar.scss';

const styles = theme => ({
    root: {
        width: '100%',
    },
    firstBar: {
        height: 29,
        minHeight: 29,
        backgroundColor: '#f4f4f4',
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
    firstRow: {
        height: 29,
    }
});

export class TopNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        let aboutMessage = formatMessage({ id: 'about-letou' });
        
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.firstRow}>
                    <Toolbar className={classes.firstBar}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            
                        }}
                    >
                        {aboutMessage}
                    </Link>
                    
                    </Toolbar>
                </AppBar>
                <AppBar position="static" >
                    {/* <Toolbar className={classes.firstBar}>
             
                    </Toolbar> */}
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