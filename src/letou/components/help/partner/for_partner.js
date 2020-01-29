import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import InfoSelect from "../../info_select";

import ListItemText from '@material-ui/core/ListItemText';


import {
    show_letou_announcements
} from '../../../../actions';


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
    all : {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    content : {
        display: 'flex',
        paddingRight: 400,
        [theme.breakpoints.down('md')]: {
            paddingRight: 2,
            flexDirection: 'column'
         
        },
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
        color:'#666666',
        [theme.breakpoints.down('md')]: {
            display: 'none' 
        }
    },
    infoItem : {
        textColor:'#666666',
    },
    aboutUsDetail : {
       fontSize: '14px',
    },
    first: {
        paddingRight:100,
    },
    list : {
        padding: 0,
        [theme.breakpoints.down('md')]: {
            padding: 1,
           
        }
    },
    listItemText:{
        fontSize:'14px',
        color:'#333333',
        [theme.breakpoints.down('md')]: {
            border: '1px solid #dddddd',
            height: '35px',
            padding: 8,

       }
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
        },
    
})

export class ForPartner extends React.Component {

    // constructor(props) {
    //     super(props);
    // }


    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

      
    render() {
  
      const { classes } = this.props;
   

      return (
       
        <div className={classes.root}> 
        <InfoSelect/>
    
        <Grid container className={classes.content}>
            <Grid item md={5} className={classes.infoSelect}>
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
            <Grid item md={7} xs={12} className={classes.mainCont}>
                    <div className={classes.mobile}>
                            <div className="HelpCenter">
                                <ul >
                                    <li >
                                        <a href="/zh/for_member">{this.getLabel('for-member')}</a>
                                    </li>
                                    <li className="Active">
                                        <a href="/zh/for_partner">{this.getLabel('for-partner')}</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
            <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                分享计划
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/zh/member_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >分享计划服务事项</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/zh/member_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >合作经营</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/zh/member_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} >双方权利与义务</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/zh/member_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >佣金分配与计算</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/zh/member_rule5">
                        <ListItemText classes={{primary:classes.listItemText}} >代理FAQ</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
            
            
            
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                品牌介绍
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/zh/member_rule6">
                        <ListItemText classes={{primary:classes.listItemText}} >专业优势</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
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

ForPartner.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(ForPartner))));