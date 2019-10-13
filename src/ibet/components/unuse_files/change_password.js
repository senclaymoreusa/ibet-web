import React, { Component } from 'react';
import TopNavbar from "../top_navbar";
import { config } from "../util_config";
import axios from 'axios';

// Material-UI

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { FormattedMessage, injectIntl } from 'react-intl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PasswordStrengthMeter from '../../commons/PasswordStrengthMeter';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  
    margin: {
      margin: 'auto',
    },
  
    textField: {
      flexBasis: 200,
      width: 300,
      backgroundColor: '#ffffff;'
    },
  
    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
          backgroundColor: blue[800],
        },
      },
  });

class ChangePassword extends Component {
    constructor(props){
        super(props);

        this.state = {

            fetched_data: '',

            password: '',
            confirm: '',
            password_too_simple: false,
            live_check_passwordmatch: false,
            button_disable: true,
        }

        this.onInputChange_password1        = this.onInputChange_password1.bind(this);
        this.onInputChange_password2        = this.onInputChange_password2.bind(this);
        this.check_valid                    = this.check_valid.bind(this);
        this.onFormSubmit                   = this.onFormSubmit.bind(this);
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
  
        await axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
              this.setState({fetched_data: res.data});
          })
      }

    async onInputChange_password1(event){
        if (!event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
          this.setState({password_too_simple: true, button_disable: true})
        }else{
          this.setState({password_too_simple: false})
        }
    
        if (this.state.confirm !== event.target.value){
          this.setState({live_check_passwordmatch: true, button_disable: true,})
        }else{
          this.setState({live_check_passwordmatch: false})
        }
        await this.setState({password: event.target.value});
        this.check_valid()
    }
    
    async onInputChange_password2(event){
        if (this.state.password !== event.target.value){
          this.setState({live_check_passwordmatch: true, button_disable: true,})
        }else{
          this.setState({live_check_passwordmatch: false})
        }
        await this.setState({confirm: event.target.value});
        this.check_valid()
    }

    check_valid(){
        if (this.state.password &&  this.state.confirm && this.state.password === this.state.confirm){
            this.setState({button_disable: false})
        }else{
            this.setState({button_disable: true, live_check_password2: true})
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        const { formatMessage } = this.props.intl;

        let message = formatMessage({ id: "reset_password_done.change_confirm" });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + `users/api/changepassword/`,{
            username: this.state.fetched_data.username,
            password: this.state.password
        }, config)
        .then(res => {
            console.log(res)
           if (res.data === 'Success'){
               alert(message);
               this.props.history.push('/')
           }
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div> 
                <TopNavbar />
                
                <form onSubmit={this.onFormSubmit} className='login-form'>
                    <div>
                        <FormattedMessage id="signup.password" defaultMessage='Password: ' /> 
                    </div>  



                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.onInputChange_password1}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />

                    {
                    this.state.password && <PasswordStrengthMeter password={this.state.password} />
                    }

                    
                    <div> 
                        <FormattedMessage id="signup.confirm" defaultMessage='Confirm: ' />  
                    </div> 

                   
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'password'}
                        value={this.state.comfirm}
                        onChange={this.onInputChange_password2}
                    />

                    <br/>

                    <Button 
                        disabled = {this.state.button_disable} 
                        variant="contained"
                        color="primary"
                        type="submit" 
                        style={{background: !this.state.button_disable ? 'red' : '#e3e8ef', color: 'white', marginTop: 30}}
                    > 
                        <FormattedMessage id="reset_password.confirm" defaultMessage='Confirm' />      
                    </Button>
                    {
                            this.state.live_check_passwordmatch && 
                            <div style={{color: 'red'}}>
                                <FormattedMessage id="reset_password.password_not_match" defaultMessage='Password not match' />
                            </div>
                    }
    
                    {
                        this.state.password_too_simple && 
                        <div style={{color: 'red'}}>
                            <FormattedMessage id="reset_password.simple" defaultMessage='Password is too simple' />
                        </div>
                    }
                    
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(injectIntl(ChangePassword));