import React from 'react';
import { hide_signup_email } from '../actions';
import { FormattedMessage, injectIntl} from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { config } from "../util_config";

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    textField: {
      width: 300,
    },

    menu: {
      width: 200,
    },

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

    handlesubmit(event){

        event.preventDefault();

        console.log(this.state.button_disable)

        axios.get(API_URL + `users/api/checkemailexist/?email=${this.state.email}`, config)
        .then(res => {
            console.log(res.data)
            if (res.data !== 'Exist'){
                this.setState({email_exist: false})
                alert('Success')
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

                        
                        <div style={{marginLeft: 330 , marginTop: 15}}> 
                            <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                        </div>

                        <Close 
                            style={{cursor: 'pointer', marginLeft: 250, marginTop: 15}}
                            onClick = { () => {
                                this.props.hide_signup_email();
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30}}>
                        <span style={{fontWeight: 600}}> __________  1 </span>  <span style={{color: '#e4e4e4'}}> __________  2 </span >  <span style={{color: '#e4e4e4'}}> __________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20}}> 
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

                
                    <div style={{color: '#e4e4e4', paddingRight: 120}}> 
                        <FormattedMessage  id="signup.email_message1" defaultMessage='This will be used to log in.' />
                    </div>

                    <TextField
                        label="PASSWORD"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onInputChange_password.bind(this)}
                    />

                    {
                    this.state.password && 
                    <div>
                        <div className='row' style={{marginLeft: 250}}> 
                        {
                            this.state.bar.map(item => {
                                return <div key ={item} style={{width: 30, borderBottom: '5px solid red', marginLeft: 10}}>  </div>
                            }) 
                        }
                        {
                            this.state.grey_bar.map(item => {
                                return <div key ={item} style={{width: 30, borderBottom: '5px solid grey', marginLeft: 10}}>  </div>
                            }) 
                        }
                        </div>
                        <br/>
                        <FormattedMessage  id="signup.strength" defaultMessage='Password Strength: ' />
                        <span> {this.state.strength_level} </span>
                    </div>
                    }
                    

                    <div style={{color: '#e4e4e4', paddingRight: 150}}> 
                        <FormattedMessage  id="signup.email_message2" defaultMessage='At least 8 characters.' />
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

                {this.state.live_check_email && <div style={{color: 'red'}}> <FormattedMessage  id="error.email" defaultMessage='Email address not valid' /> </div>}

                {this.state.password_too_simple && <div style={{color: 'red'}}> <FormattedMessage  id="signup.password_simple" defaultMessage='Password is too simple' /> </div>}
 
                {this.state.email_exist && <div style={{color: 'red'}}> <FormattedMessage  id="referral.email_exist" defaultMessage='This email has already been registerd' /> </div>}

            </div>
        )
    }
}


export default withStyles(styles)(connect(null, {hide_signup_email})(Signup_Email));