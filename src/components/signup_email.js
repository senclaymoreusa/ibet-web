import React from 'react';
import { hide_signup_email, show_signup_detail, show_signup } from '../actions';
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

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    textField: {
      width: 530,
    }
});

class Signup_Email extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            live_check_email: '',
            button_disable: true,
            email_exist: false,
            strength_level: '',
            bar: [],
            grey_bar: [],
            showPassword: false
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

    handlesubmit(event){

        event.preventDefault();

        axios.get(API_URL + `users/api/checkemailexist/?email=${this.state.email}`, config)
        .then(res => {
            if (res.data !== 'Exist'){
                this.setState({email_exist: false})
                this.props.hide_signup_email();
                this.props.show_signup_detail();
            }else{
                this.setState({email_exist: true})
            }
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div>
                <form onSubmit={this.handlesubmit.bind(this)}>
                    
                    <div className='signup-title'> 
                        <Back 
                            style={{cursor: 'pointer', marginTop: 12, marginLeft: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_email();
                                this.props.show_signup();
                            }}
                        />

                        <div style={{marginLeft: 270 , marginTop: 15}}> 
                            <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                        </div>

                        <Close 
                            style={{cursor: 'pointer', marginLeft: 270, marginTop: 5, height: 40, width: 20}}
                            onClick = { () => {
                                this.props.hide_signup_email();
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30}}>
                        <span style={{fontWeight: 600}}> ____________________  1 </span>  <span style={{color: '#e4e4e4'}}> ____________________  2 </span >  <span style={{color: '#e4e4e4'}}> ___________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginRight: 320}}> 
                        <FormattedMessage  id="signup.email_title" defaultMessage='Regitration details' />
                    </div>

                    <div style={{color: '#e4e4e4'}}>
                        __________________________________________________________________
                    </div>

                    <TextField
                        label="EMAIL ADDRESS"
                        className={classes.textField}
                        type="email"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onInputChange_email.bind(this)}
                    />

                
                    <div style={{color: '#747175', paddingRight: 340}}> 
                        <FormattedMessage  id="signup.email_message1" defaultMessage='This will be used to log in.' />
                    </div>

                    {this.state.live_check_email && <div style={{color: 'red'}}> <FormattedMessage  id="error.email" defaultMessage='Email address not valid' /> </div>}

                    {this.state.email_exist && <div style={{color: 'red'}}> <FormattedMessage  id="referral.email_exist" defaultMessage='This email has already been registerd' /> </div>}

                    <TextField
                        label="PASSWORD"
                        className={classes.textField}
                        type={this.state.showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onInputChange_password.bind(this)}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword.bind(this)}
                                >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />

                    <div style={{color: '#747175', paddingRight: 370}}> 
                        <FormattedMessage  id="signup.email_message2" defaultMessage='At least 8 characters.' />
                    </div>

                    {this.state.password_too_simple && <div style={{color: 'red'}}> <FormattedMessage  id="signup.password_simple" defaultMessage='Password is too simple' /> </div>}

                    {
                    this.state.password && 
                    <div>
                        <div className='row' style={{marginLeft: 80, marginTop: 20}}> 
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

                        <div style={{marginRight: 315, marginTop: 20, marginBottom: 15}}> 
                            <span style ={{color: '#747175'}}> <FormattedMessage  id="signup.strength" defaultMessage='Password Strength: ' /> </span>
                            <span> {this.state.strength_level} </span>
                        </div>
                        
                    </div>
                    }
                    
                    <div>
                        <div style={{ paddingRight: 340}}> 
                            <FormattedMessage  id="signup.email.passwordtip0" defaultMessage='At least 8 characters.' />
                        </div>

                        <div style={{color: '#747175', paddingRight: 350, marginTop: 15}}> 
                            <FormattedMessage  id="signup.email.passwordtip1" defaultMessage='At least 8 characters.' />
                        </div>

                        <div style={{color: '#747175', paddingRight: 300}}> 
                            <FormattedMessage  id="signup.email.passwordtip2" defaultMessage='At least 8 characters.' />
                        </div>

                        <div style={{color: '#747175', paddingRight: 345}}> 
                            <FormattedMessage  id="signup.email.passwordtip3" defaultMessage='At least 8 characters.' />
                        </div>

                    </div>

                    <button 
                        disabled = {this.state.button_disable}
                        style={{backgroundColor: 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer'}}
                        type='submit'
                    > 
                        <div >  
                            Continue
                        </div>
                    </button>
                </form>

            </div>
        )
    }
}


export default withStyles(styles)(connect(null, {hide_signup_email, show_signup_detail, show_signup})(Signup_Email));