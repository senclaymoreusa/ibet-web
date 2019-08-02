import React from 'react';
import { hide_signup_email, show_signup_detail, show_signup, handle_signup_email, handle_signup_password, handle_signup_language } from '../actions';
import { FormattedMessage, injectIntl} from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { connect } from 'react-redux';
import axios from 'axios'
import { config } from "../util_config";
import { ReactComponent as Back } from '../assets/img/svg/back.svg';


import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Select, MenuItem, Input } from "@material-ui/core";

import InputBase from '@material-ui/core/InputBase';

import Flag from 'react-flagkit';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    textField: {
      width: 530,
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


const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 80,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


class Signup_Email extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: this.props.signup_email ? this.props.signup_email : '',
            password: this.props.signup_password ? this.props.signup_password : '',
            live_check_email: '',
            button_disable: this.props.signup_email && this.props.signup_password ? false : true,
            email_exist: false,
            strength_level: '',
            bar: [],
            grey_bar: [],
            showPassword: false,
            language: this.props.signup_language ? this.props.signup_language : 'English',
        }
    }

    async onInputChange_email(event){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)){
          this.setState({live_check_email: true, button_disable: true,})
        }else{
          this.setState({live_check_email: false})
        }
        await this.setState({email: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_password(event){
        if (!event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
          this.setState({password_too_simple: true, button_disable: true})
        }else{
          this.setState({password_too_simple: false})
        }

        if (event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/)){
          this.setState({strength_level: 'Perfect', bar: [1,2,3,4], grey_bar: []})
        }else if (event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
            this.setState({strength_level: 'Great', bar: [1,2,3], grey_bar:[1]})
        }else if (event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)){
            this.setState({strength_level: 'Weak', bar: [1,2],  grey_bar:[1,2]})
        }else{
            this.setState({strength_level: 'Too weak', bar: [1], grey_bar:[1,2,3]})
        }
        await this.setState({password: event.target.value});
        this.check_button_disable()
    }

    check_button_disable(){
        if(!this.state.live_check_email && !this.state.password_too_simple && this.state.email && this.state.password){
            this.setState({button_disable: false})
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handle_language_change(event){
        this.setState({language: event.target.value})
    }

    handlesubmit(event){

        event.preventDefault();

        axios.get(API_URL + `users/api/checkemailexist/?email=${this.state.email}`, config)
        .then(res => {

            this.setState({email_exist: false})
            this.props.handle_signup_email(this.state.email);
            this.props.handle_signup_password(this.state.password);
            this.props.handle_signup_language(this.state.language);
            this.props.hide_signup_email();
            this.props.show_signup_detail();
            
        }).catch(err => {
            this.setState({email_exist: true})
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white', minHeight: 650, width: 662}}>
                <form onSubmit={this.handlesubmit.bind(this)}>
                    
                    <div className='signup-title'> 
                        <Back 
                            style={{cursor: 'pointer', position: 'absolute', top: 12, left: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_email();
                                this.props.show_signup();
                            }}
                        />

                    <div style={{ paddingTop: 20, fontSize: 14, fontWeight: 600, color: '#212121', letterSpacing: 0.88, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normal', lineHeight: 'normal'}}> 
                        <FormattedMessage id="signup.openaccount" defaultMessage='OPEN ACCOUNT' />
                    </div>

                        <Close 
                            style={{cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20}}
                            onClick = { () => {
                                this.props.hide_signup_email();
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30, textAlign: 'center'}}>
                        <span style={{fontWeight: 600}}> ____________________  1 </span>  <span style={{color: '#e4e4e4'}}> ____________________  2 </span >  <span style={{color: '#e4e4e4'}}> ___________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 70}}> 
                        <FormattedMessage  id="signup.email_title" defaultMessage='Regitration details' />
                    </div>

                    <div style={{color: '#e4e4e4', textAlign: 'center'}}>
                        __________________________________________________________________
                    </div>

                    <div style={{textAlign: 'center'}}> 
                        <TextField
                            value={this.state.email}
                            label="EMAIL ADDRESS"
                            className={classes.textField}
                            type="email"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_email.bind(this)}
                            InputProps={{
                                classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    {this.state.live_check_email && <div style={{color: 'red', marginLeft: 70}}> <FormattedMessage  id="error.email" defaultMessage='Email address not valid' /> </div>}

                    {this.state.email_exist && <div style={{color: 'red', marginLeft: 70}}> <FormattedMessage  id="referral.email_exist" defaultMessage='This email has already been registerd' /> </div>}

                    <div style={{color: '#747175', marginLeft: 70}}> 
                        <FormattedMessage  id="signup.email_message1" defaultMessage='This will be used to log in.' />
                    </div>

                    <div style={{textAlign: 'center'}}>
                        <TextField
                            value={this.state.password}
                            label="PASSWORD"
                            className={classes.textField}
                            type={this.state.showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_password.bind(this)}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                },

                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword.bind(this)}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        <span style={{fontSize: 14, fontWeight: 600, color: '#212121', opacity: 0.5, marginLeft: 5, marginTop: 2}}> SHOW </span>
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    {this.state.password_too_simple && <div style={{color: 'red', marginLeft: 70}}> <FormattedMessage  id="signup.password_simple" defaultMessage='Password is too simple' /> </div>}

                    <div style={{color: '#747175', marginLeft: 70}}> 
                        <FormattedMessage  id="signup.email_message2" defaultMessage='At least 8 characters.' />
                    </div>


                    {
                    this.state.password && 
                    <div>
                        <div className='row' style={{marginLeft: 70, marginTop: 20}}> 
                        {
                            this.state.bar.map(item => {
                                return <div key ={item} style={{width: 50, borderBottom: '2px solid red', marginLeft: 10}}>  </div>
                            }) 
                        }
                        {
                            this.state.grey_bar.map(item => {
                                return <div key ={item} style={{width: 50, borderBottom: '2px solid grey', marginLeft: 10}}>  </div>
                            }) 
                        }
                        </div>

                        <div style={{marginTop: 20, marginBottom: 15, marginLeft: 70}}> 
                            <span style ={{color: '#747175'}}> <FormattedMessage  id="signup.strength" defaultMessage='Password Strength: ' /> </span>
                            <span> {this.state.strength_level} </span>
                        </div>
                        
                    </div>
                    }
                    
                    <div className='row'>
                        <div> 
                            <div style={{ fontSize: 15, marginLeft: 70}}> 
                                <FormattedMessage  id="signup.email.passwordtip0" defaultMessage='At least 8 characters.' />
                            </div>

                            <div style={{color: '#747175', marginTop: 15, fontSize: 12, marginLeft: 70}}> 
                                <FormattedMessage  id="signup.email.passwordtip1" defaultMessage='At least 8 characters.' />
                            </div>

                            <div style={{color: '#747175', fontSize: 12, marginLeft: 70}}> 
                                <FormattedMessage  id="signup.email.passwordtip2" defaultMessage='At least 8 characters.' />
                            </div>

                            <div style={{color: '#747175', fontSize: 12, marginLeft: 70}}> 
                                <FormattedMessage  id="signup.email.passwordtip3" defaultMessage='At least 8 characters.' />
                            </div>
                        </div>

                        <div style={{position: 'absolute', left: 400}}>
                            <div style={{fontSize: 12, fontWeight: 'normal', lineHeight: 1.83, letterSpacing: 'normal', color: '#747175', width: 120, textAlign: 'center', whiteSpace: 'nowrap'}}>
                                <FormattedMessage  id="signup.preferredlanguage" defaultMessage='Preferred Language' />
                            </div>
                            <Select
                                style={{marginTop: 5}}
                                value={this.state.language}
                                displayEmpty
                                onChange={this.handle_language_change.bind(this)}
                                input={<BootstrapInput name="age" id="age-customized-select" />}
                                >
                                    
                                <MenuItem value="English">
                                    <div className='row'>
                                        <Flag country="US" />
                                        <div style={{marginLeft: 10}}>
                                            English
                                        </div>
                                    </div>
                                </MenuItem>

                                <MenuItem value={'Chinese'}>
                                    <div className='row'>
                                        <Flag country="CN" />
                                        <div style={{marginLeft: 10}}>
                                            中文
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={'French'}>
                                    <div className='row'>
                                        <Flag country="FR" />
                                        <div style={{marginLeft: 10}}>
                                            Franch
                                        </div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </div>

                    </div>

                    <div style={{textAlign: 'center'}}> 
                        <button 
                            disabled = {this.state.button_disable}
                            style={{backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                            type='submit'
                        > 
                            <FormattedMessage  id="signup.continue" defaultMessage='CONTINUE' />
                        </button>
                    </div>

                    <div style={{height: 20}}> </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_email:    state.general.signup_email,
        signup_password: state.general.signup_password,
        signup_language: state.general.signup_language
    }
}


export default withStyles(styles)(connect(mapStateToProps, {hide_signup_email, show_signup_detail, show_signup, handle_signup_email, handle_signup_password, handle_signup_language})(Signup_Email));