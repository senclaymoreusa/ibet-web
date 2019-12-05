import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';




import {
    show_letou_announcements
} from '../../actions';
 



const styles = () => ({
    
})

export class InfoSelect  extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
        };
    
        this.getLabelInfo = this.getLabelInfo.bind(this);
      }

      getLabelInfo(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
      }

     render() {                 

        return (
          <div    className="HelpCenterLeftNav">
          <ul>
              <li>
                <a  href="/for_member">{this.getLabelInfo('help-title')}</a>
              </li>
              <li>
                <a   href="/for_partner">{this.getLabelInfo('help-title')}</a>
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