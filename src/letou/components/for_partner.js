import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import IconHeader from "./icon_header";

import ListItemText from '@material-ui/core/ListItemText';

import { config, images } from '../../util_config';
import IconButton from '@material-ui/core/IconButton';

import {
    show_letou_announcements
} from '../../actions';
import { InfoSelect } from './infoSelect';


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
    },
    content : {
        display: 'flex',
        paddingRight: 400,
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
        color:'#666666',
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
    },
    listItemText:{
        fontSize:'14px',
        color:'#333333',
      }
    
})

export class ForPartner extends React.Component {
    constructor(props) {
        super(props);
    }

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
                <InfoSelect/>
            </Grid>
            <Grid item xs={7} className={classes.detail}>
            <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                分享计划
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} >
                        <ListItemText classes={{primary:classes.listItemText}} >分享计划服务事项</ListItemText>
                        </Link>
                        <Link className={classes.list}>
                        <ListItemText classes={{primary:classes.listItemText}} >合作经营</ListItemText>
                        </Link>
                        <Link className={classes.list}>
                        <ListItemText classes={{primary:classes.listItemText}} >双方权利与义务</ListItemText>
                        </Link>
                        <Link className={classes.list}>
                        <ListItemText classes={{primary:classes.listItemText}} >佣金分配与计算</ListItemText>
                        </Link>
                        <Link className={classes.list}>
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
                        <Link className={classes.list}>
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