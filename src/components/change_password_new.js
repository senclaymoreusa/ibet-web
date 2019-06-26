import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { hide_change_password } from '../actions';

import { FormattedMessage } from 'react-intl';
import axios from 'axios'
import { config } from '../util_config';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { ReactComponent as Back } from '../assets/img/svg/back.svg';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const styles = theme => ({
    textField: {
      width: 330,
      backgroundColor: '#ffffff;'
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

class Change_Password extends Component {
    constructor(props){
        super(props);

        this.state ={
            password: '',
            password1: '',
            password2: '',

            showPassword: false,
            showPassword1: false,
            showPassword2: false,

            data: '',

            error: false,
            live_chech_password_match: false
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        return axios.get(API_URL + 'users/api/user/', config)
        .then(res => {
            this.setState({data: res.data});
        })  
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPassword1 = () => {
        this.setState(state => ({ showPassword1: !state.showPassword1 }));
    };

    handleClickShowPassword2 = () => {
        this.setState(state => ({ showPassword2: !state.showPassword2 }));
    };

    async onInputChange_password(event){
        await this.setState({password: event.target.value});
        this.check_password_match();
    }

    async onInputChange_password1(event){
        if(this.state.password2 && event.target.value !== this.state.password2){
            this.setState({live_chech_password_match: true, button_disable: true})
        }else{
            this.setState({live_chech_password_match: false})
        }
        await this.setState({password1: event.target.value});
        this.check_password_match();
    }

    async onInputChange_password2(event){
        if (event.target.value !== this.state.password1){
            this.setState({live_chech_password_match: true, button_disable: true})
        }else{
            this.setState({live_chech_password_match: false})
        }
        await this.setState({password2: event.target.value});
        this.check_password_match();
    }

    check_password_match(){
        if(this.state.password && this.state.password1 && this.state.password2 && !this.state.live_chech_password_match && !this.state.error){
            this.setState({button_disable: false})
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.post(API_URL + 'users/api/validateandresetpassword/', {'username': this.state.data.username, 'current_password': this.state.password, 'new_password': this.state.password1}, config)
        .then(res => {
            if(res.data === 'Success'){
                alert('Password updated successfully')
                this.props.hide_change_password()
            }else{
                this.setState({error: true})
            }
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: '#f1f1f1', height: 480, width: 380}}>

                <Back 
                    style={{cursor: 'pointer', position: 'absolute', top: 20, left: 30, height: 25, width: 15, color: 'red'}}
                    onClick = { () => {
                        this.props.hide_change_password()
                    }}
                />

                <div style={{ backgroundColor: 'white', textAlign: 'center', height: 60, fontSize: 25, paddingTop: 15 }}> 
                    <FormattedMessage id="changepassword" defaultMessage='Change Password' />
                </div>

                <div style={{ color: 'red', fontSize: 25, paddingTop: 15, fontWeight: 600, marginLeft: 30 }}> 
                    <FormattedMessage id="changepassword" defaultMessage='Change Password' />
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4', zIndex: 100000}}>
                    _______________________________________
                </div>

                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div style={{marginTop: 15, textAlign: 'center'}}> 
                        <TextField
                            className={classes.textField}
                            label="CURRENT PASSWORD"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
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
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    { this.state.error && <div style={{color: 'red', marginLeft: 30}}> Old password now correct </div>}

                    <div style={{marginTop: 15, textAlign: 'center'}}> 
                        <TextField
                            className={ classes.textField}
                            label="NEW PASSWORD"
                            variant="outlined"
                            type={this.state.showPassword1 ? 'text' : 'password'}
                            value={this.state.password1}
                            onChange={this.onInputChange_password1.bind(this)}
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
                                    onClick={this.handleClickShowPassword1.bind(this)}
                                    >
                                    {this.state.showPassword1 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div style={{marginTop: 15, textAlign: 'center'}}> 
                        <TextField
                            className={ classes.textField}
                            label="CONFIRM PASSWORD"
                            variant="outlined"
                            type={this.state.showPassword2 ? 'text' : 'password'}
                            value={this.state.password2}
                            onChange={this.onInputChange_password2.bind(this)}
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
                                    onClick={this.handleClickShowPassword2.bind(this)}
                                    >
                                    {this.state.showPassword2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    {this.state.live_chech_password_match && <div>  <FormattedMessage id="reset_password.password_not_match" defaultMessage='Password not match' /> </div>}

                    <button
                        disabled = {this.state.button_disable} 
                        style={{backgroundColor: 'red', height: 52, width: 330, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', marginLeft: 25, fontSize: 15, fontWeight: 600}}
                        type="submit" 
                    > 
                        <FormattedMessage id="changepassword2" defaultMessage='CHANGE PASSWORD' />
                    </button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(connect(null, { hide_change_password })(Change_Password));
