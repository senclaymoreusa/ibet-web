import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { config } from '../../util_config';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import TopNavbar from "./top_navbar";
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';

import '../css/reset_password.css';

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


class Reset_Password extends Component {

    constructor(props){
        super(props);

        this.state = {
           show_page: true,
           password1: '',
           password2: '',
           error_message: '',
           errorCode: '',
           hidden: true,
           showPassword: false,
           button_type: 'submit-button-disable',
           button_disable: true,
           live_check_password2: false,
           passward_too_simple: false
        }

        this.onInputChange_password1  = this.onInputChange_password1.bind(this);
        this.onInputChange_password2  = this.onInputChange_password2.bind(this);
        this.onFormSubmit             = this.onFormSubmit.bind(this);
        this.toggleShow               = this.toggleShow.bind(this);
        this.check_valid   = this.check_valid.bind(this);
    }

    componentDidMount() {
        const check = localStorage.getItem('forget-password-inprogress')
        if (!check){
            this.setState({show_page: false})
        }
    }
    
    async onInputChange_password1(event){
        this.setState({password1: event.target.value});
        
        if (!event.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
            this.setState({passward_too_simple: true, button_disable: true})
        }else{
            this.setState({passward_too_simple: false})
        }

        if (event.target.value !== this.state.password2){
            this.setState({live_check_password2: true, button_disable: true})
        }else{
            await this.setState({live_check_password2: false})
        }
        
        this.check_valid()
    }

    async onInputChange_password2(event){
        this.setState({password2: event.target.value});

        if (event.target.value !== this.state.password1){
            this.setState({live_check_password2: true, button_disable: true})
        }else{
            await this.setState({live_check_password2: false})
        }
        
        this.check_valid()
    }

    check_valid(){
        if (this.state.password1 &&  this.state.password2 && this.state.password1 === this.state.password2){
            this.setState({button_disable: false})
        }else{
            this.setState({button_disable: true, live_check_password2: true})
        }
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    // onFormSubmit(event){
    //     event.preventDefault();

    //     const body = {
    //         token: this.props.location.pathname.slice(16),
    //         password: this.state.password1
    //     }
        
    //     if (this.state.password1 !== this.state.password2) {
    //         this.setState({ errorCode: errors.PASSWORD_NOT_MATCH });
    //     } else if ( this.state.password1.length < 8){ 
    //         this.setState({ errorCode: errors.PASSWORD_NOT_VALID });
    //     } else {
    //         this.setState({ errorCode: '' });
    //         axios.post(API_URL + 'users/api/reset-password/confirm/', body, config)
    //         .then(res => {
    //             this.props.history.push("/reset_password_done")
    //         })
    //     }
    // }

    onFormSubmit(event){
        event.preventDefault();

        const { email } = this.props.match.params;

        axios.post(API_URL + `users/api/changeandresetpassword/`,{
            email: email,
            password: this.state.password1
        }, config)
        .then(res => {
            const { formatMessage } = this.props.intl;
            const message = formatMessage({ id: "reset_password.done" });
            localStorage.removeItem('forget-password-inprogress')
            alert(message)
            this.props.history.push("/login");
        })
    }

    render(){

        const { classes } = this.props;

        // const showErrors = () => {
        //     if (this.state.errorCode === errors.PASSWORD_NOT_MATCH) {
        //         return (
        //             <div style={{color: 'red'}}> 
        //                 <FormattedMessage id="reset_password.password_not_match" defaultMessage='Password not match' /> 
        //             </div>
        //         );
        //     } else if (this.state.errorCode === errors.PASSWORD_NOT_VALID) {
        //         return (
        //             <div style={{color: 'red'}}> 
        //                 <FormattedMessage id="reset_password.password_not_valid" defaultMessage='Password not valid' /> 
        //             </div>
        //         );
        //     } 
        // }

        return (
            <div> 
                {
                    this.state.show_page ?
                    <div>
                        <TopNavbar />
                        
                        <div className='reset-password-form'> 
                            <div>
                                <FormattedMessage id="reset_password.new_password" defaultMessage='New Password' />      
                            </div>

                            <form onSubmit={this.onFormSubmit} >

                                <div> 
                                    <TextField
                                        id="outlined-adornment-password"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password1}
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
                                </div>

                                { 
                                    this.state.password1 && <PasswordStrengthMeter password={this.state.password1} />
                                }

                                <br/>
                                
                                <div>
                                    <FormattedMessage id="reset_password.confirm_password" defaultMessage='Confirm Password:' />      
                                </div>

                                <div> 
                                    <TextField
                                        id="outlined-adornment-password2"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password2}
                                        onChange={this.onInputChange_password2}
                                    />
                                </div>

                                <br/>
                                <br/>
                                
                                <Button 
                                    disabled = {this.state.button_disable} 
                                    variant="contained"
                                    color="primary"
                                    type="submit" 
                                    className={this.state.button_type}
                                > 
                                    <FormattedMessage id="reset_password.confirm" defaultMessage='Confirm' />      
                                </Button>
                           
                            </form>

                            <br/>

                            <NavLink to='/' style={{ textDecoration: 'none', color: 'red' }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                >
                                    <FormattedMessage id="signup.cancel" defaultMessage='Cancel' />
                                </Button>
                            </NavLink>

                            {
                                 
                                    this.state.live_check_password2 && 
                                    <div style={{color: 'red'}}>
                                        <FormattedMessage id="reset_password.password_not_match" defaultMessage='Password not match' />
                                    </div>
                            }

                            <br/>

                            {
                                this.state.passward_too_simple && 
                                <div style={{color: 'red'}}>
                                    <FormattedMessage id="reset_password.simple" defaultMessage='Password is too simple' />
                                </div>
                            }

                        </div>
                    </div>
                    : 
                    <div> 

                        <TopNavbar />

                        <div className='reset-password-form' style={{fontSize: '20px'}}> 
                            <FormattedMessage id="reset_password.page_not_valid" defaultMessage='This page no longer exists' /> 
                        </div>

                    </div>
                }

            </div>
        )
    }
}

export default  withStyles(styles)(injectIntl(withRouter(Reset_Password)));