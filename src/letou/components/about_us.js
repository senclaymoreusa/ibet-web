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
import IconHeader from "./icon_header";
import { config, images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';

import {
    show_letou_announcements
} from '../../actions';


const styles = theme => ({
    logoHeader: {
        height: '20px',
        padding: '10px'
    },
    header : {
        fontSize: '24px',
        color: '#333333',
        position: 'relative',
        width: '100%',
        height: '75px',
        backgroundColor: '#f5f5f5',
        marginBottom: '50px',
        paddingLeft: 300,
        paddingTop: 20
      
    },
    content : {
        display: 'flex',
        paddingRight: 400,
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
    },
    aboutUsDetail : {
       fontSize: '14px',
    }
})

export class AboutUs extends React.Component {
    
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
  
      const { classes } = this.props;
  
      return (
       
        <div className={classes.root}> 
            <IconHeader/>
            <Grid container className={classes.content}>
                <Grid item xs={5} className={classes.infoSelect}>
                    <Link href="/for_member">
                      供会员使用
                    </Link>
                    <Link href="/for_partner">
                      供合作伙伴使用
                    </Link>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                <Typography component="p" variant="h6">
                {this.getLabel('about-letou')}  
                </Typography>
                {'\n'}{'\n'}
                <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                {this.getLabel('aboutUs-detail-text-one')}     
                </Typography>
                <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                {this.getLabel('aboutUs-detail-text-two')}     
                </Typography>
                <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                {this.getLabel('aboutUs-detail-text-three')}     
                </Typography>
                <Typography component="p" paragraph={true} className={classes.aboutUsDetail}>
                {this.getLabel('aboutUs-detail-text-four')}     
                </Typography>
                </Grid>
            </Grid>
            
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


AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(AboutUs))));