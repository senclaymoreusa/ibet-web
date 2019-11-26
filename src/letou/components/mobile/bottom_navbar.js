import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {
    logout,
    postLogout,
    authCheckState,
    show_letou_announcements,
    show_letou_login,
    show_letou_forgot_password
} from '../../../actions';

const styles = theme => ({
    root: {
        width: '100%',
    },
});

export class BottomNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeValue: 'home'
        };
    }


    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { activeValue } = this.state;

        return (
            <BottomNavigation
                value={activeValue}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label={this.getLabel('home-label')} icon={<RestoreIcon />} />
                <BottomNavigationAction label={this.getLabel('promotions-label')} icon={<FavoriteIcon />} />
                <BottomNavigationAction label={this.getLabel('sign-up')} icon={<FavoriteIcon />} />
                <BottomNavigationAction label={this.getLabel('support-label')} icon={<FavoriteIcon />} />
                <BottomNavigationAction label={this.getLabel('log-in')} icon={<LocationOnIcon />} />
            </BottomNavigation>
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

BottomNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    logout, postLogout, authCheckState, show_letou_announcements, show_letou_login, show_letou_forgot_password
})(BottomNavbar))));
