import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TopNavbar from "./top_navbar";

import { config, images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';

import {
    show_letou_announcements
} from '../../actions';


const styles = theme => ({
    
})
    


export  class InfoSelect extends React.Component {
    
    
    render() {
      const { classes } = this.props;
      return (
        <div    className="HelpCenterLeftNav">
        <ul>
            <li>
                <a  className="tabs active" href="/for_member">供会员使用</a>
            </li>
            <li>
                <a  className="tabs" href="/for_partner">供合作伙伴使用</a>
            </li>
        </ul>
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(InfoSelect))));