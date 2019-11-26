import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import Input from '@material-ui/icons/Input';
import ContactSupport from '@material-ui/icons/ContactSupport';
import MeetingRoom from '@material-ui/icons/MeetingRoom';

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
        borderColor: '#80bdff',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
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
                <BottomNavigationAction label={this.getLabel('home-label')} icon={<Home />} />
                <BottomNavigationAction label={this.getLabel('promotions-label')} icon={<AssignmentTurnedIn />} />
                <BottomNavigationAction label={this.getLabel('sign-up')} icon={<MeetingRoom />} />
                <BottomNavigationAction label={this.getLabel('support-label')} icon={<ContactSupport />} />
                <BottomNavigationAction label={this.getLabel('log-in')} icon={<Input />} />
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
