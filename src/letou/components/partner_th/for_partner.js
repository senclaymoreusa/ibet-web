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
import IconHeader from "../icon_header";

import ListItemText from '@material-ui/core/ListItemText';


import {
    show_letou_announcements
} from '../../../actions';


const styles = () => ({
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

export class ForPartnerTh extends React.Component {
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
            <div className="HelpCenterLeftNav">
                            <ul>
                                <li>
                                    <a href="/th/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/th/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
            </Grid>
            <Grid item xs={7} className={classes.detail}>
            <div className={classes.all}>
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                แบ่งปันแพลน
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/member_rule1">
                        <ListItemText classes={{primary:classes.listItemText}} >โปรแกรมพันธมิตรของ LETOU international คืออะไร</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/member_rule2">
                        <ListItemText classes={{primary:classes.listItemText}} >Affiliate Program</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/member_rule3">
                        <ListItemText classes={{primary:classes.listItemText}} >ข้อผูกพันของ Affiliate</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/member_rule4">
                        <ListItemText classes={{primary:classes.listItemText}} >โปรแกรมพาร์ทเนอร์นานาชาติ</ListItemText>
                        </Link>
                        <Link className={classes.list} href="/th/member_rule5">
                        <ListItemText classes={{primary:classes.listItemText}} >คำถามที่พบบ่อยเกี่ยวกับโปรแกรมพันธมิตร</ListItemText>
                        </Link>
                    </List>
                </div>
                </div>
            
            
            
                <div className={classes.first}>
                <Typography variant="h6" className={classes.title}>
                เกมส์แนะนำ
                </Typography>
                <div className={classes.demo}>
                    <List >
                        <Link className={classes.list} href="/th/member_rule6">
                        <ListItemText classes={{primary:classes.listItemText}} >ข้อดีของ LETOU</ListItemText>
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

ForPartnerTh.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(ForPartnerTh))));