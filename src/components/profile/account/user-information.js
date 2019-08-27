import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { hide_user_profile, show_update_profile, authCheckState } from '../../../actions';
import { connect } from 'react-redux';
import { config } from '../../../util_config';
import axios from 'axios'

import { Link } from 'react-router-dom';

import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28,
    },
    updateRow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 75,
        textAlign: 'right',
        paddingTop: 13,
        paddingRight: 52,
    },
    button: {
        height: 52,
        borderRadius: 10,
        minWidth: 162,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'inline-block',
        marginBottom: 23,
        color: '#fff',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        '&:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
    },
    row:{
        paddingLeft:128,
        paddingRight:128,
        paddingTop:10,
    },


    textField: {
      width: 330,
      backgroundColor: 'white'
    },

    textField2: {
        width: 80,
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
    },

    textField3: {
        width: 150,
        backgroundColor: 'white',
        textAlign: 'center'
    },

    cssOutlinedInput:{
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
          },
      
          "&$cssFocused $notchedOutline": {
            borderColor: "blue",
          }
    },
    cssFocused: {  },

    notchedOutline: {  },
});

class New_Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            user_data: ''
        }
    }

    componentDidMount() {

      this.props.authCheckState()
      .then(res => {
        if (res === 1) {
          this.props.history.push('/'); 
          window.location.reload()
        }})

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
        .then(res => {
            this.setState({user_data: res.data});
        })
    }

    onInputChange_country(event){
        this.setState({country: event.target.value});
    }

    render(){

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let titleMessage = formatMessage({ id: "user_information.user_information" });
        let editButtonMessage = formatMessage({ id: "user_information.edit_information" });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>{titleMessage}</span>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:30}} className={classes.row}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        disabled={true}
                        value={this.state.user_data.first_name}
                    />    

                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        disabled={true}
                        value={this.state.user_data.last_name}
                    />                    
                    </Grid>
                    <Grid item xs={12} >
                       
                    </Grid>
                    <Grid item xs={12} className={classes.updateRow}>
                            <Button className={classes.button}  >
                                {editButtonMessage}
                            </Button>
                        </Grid>
                </Grid>



                <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, paddingTop: 12, paddingLeft: 60 }}> 
                    <FormattedMessage id="new_profile.profile" defaultMessage='Profile' />
                </div>

                <div style={{ color: 'red', fontSize: 25, paddingTop: 15, fontWeight: 600, marginLeft: 30 }}> 
                    <FormattedMessage id="new_profile.profile" defaultMessage='Profile' />
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                <div style={{ marginLeft: 30, marginTop: 5 }}>
                    <FormattedMessage id="nav.username" defaultMessage='Username' />
                </div>

                <div style={{textAlign: 'center', marginTop: 5}}> 
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        disabled={true}
                        value={this.state.user_data.username}
                    />
                </div>

            
                
                <div style={{marginLeft: 30, marginTop: 10}}>
                    <FormattedMessage id="signup.detail.dob" defaultMessage='DATE OF BIRTH' />
                </div>

                <div className='row'>

                    <div style={{borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 30}}>  
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[0] : ''}
                    </div>

                    <div style={{borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 10}}>  
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[1] : ''}
                    </div>

                    <div style={{borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 10}}>  
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[2] : ''}
                    </div>

                </div>

                <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30}}> 
                    <FormattedMessage  id="signup.contact.title" defaultMessage='Contact details' />
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                <div style={{ marginLeft: 30, marginTop: 5 }}>
                    <FormattedMessage  id="signup.detail.address" defaultMessage='Address' />
                </div>

                <div style={{textAlign: 'center', marginTop: 5}}> 
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.street_address_1}
                        disabled={true}
                    />
                </div>

                <div className='row' style={{marginLeft: 25, marginTop: 5}}> 
                   
                    <div>
                        <div>                        
                            <FormattedMessage  id="profile.city" defaultMessage='City' />
                        </div>

                        <TextField
                            className={classes.textField3}
                            variant="outlined"
                            type='text'
                            value={this.state.user_data.city}
                            disabled={true}
                            style={{marginTop: 5}}
                        />

                    </div>

                    <div style={{marginLeft: 30}}>
                        <div>
                            <FormattedMessage  id="profile.zipcode" defaultMessage='Zipcode' />
                        </div>
                    
                        <TextField
                            className={classes.textField3}
                            variant="outlined"
                            type='text'
                            value={this.state.user_data.zipcode}
                            disabled={true}
                            style={{marginTop: 5}}
                        />
                    </div>
                </div>

                <div style={{ marginLeft: 30, marginTop: 5 }}>
                    <FormattedMessage  id="profile.country" defaultMessage='Country' />
                </div>

                <div style={{textAlign: 'center', marginTop: 5}}> 
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.country}
                        disabled={true}
                    />
                </div>

                <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                    <FormattedMessage id="new_profile.mobile" defaultMessage='Mobile Details' />
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                <div style={{textAlign: 'center', marginTop: 10}}> 
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.phone}
                        disabled={true}
                    />
                </div>
                    
                <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                    <FormattedMessage id="new_profile.email" defaultMessage='Email Details' />
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                <div style={{textAlign: 'center', marginTop: 10}}> 
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.email}
                        disabled={true}
                    />
                </div>

                <Link to="/update_profile/" >
                    <button style={{border: 'none', height: 30, width: 70, backgroundColor: 'black', color: 'white', cursor: 'pointer', borderRadius: 100}}>
                        <FormattedMessage id="new_profile.edit" defaultMessage='Edit' />
                    </button>
                </Link>
            </div>
        )
    }
}

export default withStyles(styles)(connect(null, { hide_user_profile, show_update_profile, authCheckState })(New_Profile));