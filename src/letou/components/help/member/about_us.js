import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../../icon_header";
import '../../../css/help.css'

import { show_letou_announcements} from '../../../../actions';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,

    },
    content: {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
       
    },
    infoSelect: {
        paddingLeft: 300,
        display: 'flex',
      

        [theme.breakpoints.down('md')]: {
            display: 'none',
            paddingLeft: 3
         
        }
    },
    
    aboutUsDetail: {
        fontSize: '14px',
    },
    desktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
         
        }
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
         
        }
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
                <IconHeader />
                <Grid container className={classes.content}>
                    <div className={classes.desktop}>
                        <Grid item xs={5} className={classes.infoSelect}>
                            <div className="HelpCenterLeftNav">
                                <ul>
                                    <li>
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li>
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </div>
                    <div className={classes.mobile}>
                        
                            <ul>
                                <li>
                                    <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                    

                    </div>

                    <Grid item xs={7} className={classes.detail}>
                        <div className="HelpCenterList">
                            <ul>
                                <li>
                                    <a href="/zh/for_member">{this.getLabel('for-member')}  >
                                    <i></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/zh/for_member">{this.getLabel('letou-story')}  >
                                    <i></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
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