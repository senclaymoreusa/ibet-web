import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



import { images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';

import {
    show_letou_announcements
} from '../../actions';


const styles = theme => ({
    logoHeader: {
        height: '20px',
        padding: '10px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
         
        }
    },
    header : {
        fontSize: '36px',
        color: '#fff',
        fontWight: 'bold',
        fontFamily: 'Microsoft YaHei',
        lineHeight: '50px',
        width: '100%',
        height: '400px',
        backgroundColor: '#fcf2dc',
        backgroundImage: 'url(' + images.src + 'hpbanner.jpg)',
        marginBottom: '50px',
        marginTop: '20px',
        paddingLeft: 450,
        paddingTop: 80,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
      
    }
})
    


export class InfoSelect extends React.Component {
    
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
      const { classes } = this.props;
      return (
        <div >
         <IconButton className={classes.logoHeader}>
             <img src={images.src + 'letou/letou-logo.png'} alt="LETOU" height="20" />
         </IconButton>
         <h2 className={classes.header}>{this.getLabel('help-problem')}
          <br/>{this.getLabel('help-service')}
         </h2>
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