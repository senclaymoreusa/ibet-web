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
            display: 'none' 
        }
    },
    detail: {
        fontSize: '14px',
        color: '#666666',
        fontFamily: 'Microsoft YaHei'
    },
 
    mobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row'
         
        }
    },
    mainCont: {
        paddingLeft: 20,
        paddingRight: 20
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
                   
                    <Grid item md={5}  className={classes.infoSelect}>
                            <div className="HelpCenterLeftNav">
                                <ul>
                                    <li >
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li>
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                   
                    

                    <Grid item md={7} xs={12} className={classes.mainCont}>
                        <div className={classes.mobile}>
                            <div className="HelpCenter">
                                <ul >
                                    <li className="Active">
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li>
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                        <h2 >
                                {this.getLabel('about-letou')}
                            </h2>
                        <div className={classes.detail}>
                           
                            <p>&nbsp;</p>
                            <p>
                                {this.getLabel('aboutUs-detail-text-one')}
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                {this.getLabel('aboutUs-detail-text-two')}
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                {this.getLabel('aboutUs-detail-text-three')}
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                {this.getLabel('aboutUs-detail-text-four')}
                            </p>
                        </div>
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