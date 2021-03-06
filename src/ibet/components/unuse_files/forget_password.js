import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../../util_config';
import { sendingLog } from '../../../actions';
import { FormattedMessage } from 'react-intl';
import { errors } from '../errors';
import TopNavbar from "../top_navbar";
import { NavLink } from 'react-router-dom';


// Material design
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';

import '../css/forget_password.css';


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



//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


class Forget_Password extends Component {

    constructor(props){
        super(props);

        this.state = {
           old_email: '',
           success: false,
           errorCode: '',

           button_disable: true,

           live_check_email: '',

           email_not_exist: false
        }

        this.onInputChange_old_email  = this.onInputChange_old_email.bind(this);
        this.onFormSubmit             = this.onFormSubmit.bind(this);
    }

    onInputChange_old_email(event){
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)){
            this.setState({live_check_email: true, button_disable: true})
        }else{
            this.setState({live_check_email: false, button_disable: false})
        }
        this.setState({old_email: event.target.value, email_not_exist: false});
    }


    //  Do not delete the below function, I saved it for future use

    // onFormSubmit(event){
    //     event.preventDefault();
      
    //     const body = {
    //         email: this.state.old_email
    //     }

    //     axios.get(API_URL + `users/api/checkemailexist/?email=${this.state.old_email}`, config)
    //     .then(res => {
    //         if (res.data === 'Exist'){
    //             axios.post(API_URL + 'users/api/reset-password/', body, config)
    //             .then(res => {
    //                 this.setState({success: true})
    //                 this.props.history.push("/email_sent")
    //             })
    //             .catch((err) => {
    //                 this.setState({errorCode: errors.EMAIL_NOT_VALID});
    //             });
    //         }else{
    //             this.setState({email_not_exist: true})
    //         }
    //     })
    // }


    onFormSubmit(event){
        event.preventDefault();

        axios.post(API_URL + `users/api/generatepasswordcode/`, {email: this.state.old_email}, config)
        .then(res => {
            if (res.data === 'Success'){
                axios.post(API_URL + `users/api/sendresetpasswordcode/`, {email: this.state.old_email}, config)
                .then(res => {
                    this.setState({success: true})
                    localStorage.setItem('forget-password-inprogress', 'true')
                    this.props.history.push(`/email_sent/${this.state.old_email}`)
                })
                .catch((err) => {
                    this.setState({errorCode: errors.EMAIL_NOT_VALID});
                    // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                    sendingLog(err);
                });
            }else{
                this.setState({email_not_exist: true})
            }
        })
    }


    render(){

        const { classes } = this.props;

        const showErrors = () => {
            if (this.state.success) {
                return (
                    <div style={{color: 'red'}}> 
                        <FormattedMessage id="email_sent.message" defaultMessage='An email has been sent to you email address to reset your password' /> 
                    </div>
                );
            } else if (this.state.errorCode === errors.EMAIL_NOT_VALID) {
                return (
                    <div style={{color: 'red'}}> 
                        <FormattedMessage id="forget_password.email_not_valid" defaultMessage='Email is not valid' /> 
                    </div>
                );
            }
        }

        return (
            <div> 
                <TopNavbar />

                <div className='forget-password-form'> 

                    <div className='forget-title'> 
                        <FormattedMessage id="forget_password.enter_email" defaultMessage='Enter your email address: ' />
                    </div>

                    <br/>

                    <form onSubmit={this.onFormSubmit} >

                        <div>
                            <FormattedMessage id="forget_password.mail" defaultMessage='Email: ' />
                        </div>

                        <TextField
                            id="outlined-adornment-password"
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.old_email}
                            onChange={this.onInputChange_old_email}
                        />

                        <br/>
                        <br/>
    

                        <Button 
                            variant="contained"
                            color="primary"
                            disabled = {this.state.button_disable} 
                            type="submit" 
                        > 
                            <FormattedMessage id="forget_password.confirm" defaultMessage='Confirm' />
                        </Button>
                        

                        <br/>


                        {this.state.live_check_email && <div style={{color: 'red'}}> <FormattedMessage  id="error.email" defaultMessage='Email address not valid' /> </div>}

                        {this.state.email_not_exist && <div style={{color: 'red'}}> <FormattedMessage  id="forget_password.email_not_valid" defaultMessage='Email does not exsit' /> </div>}
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
                        showErrors()
                    }

                </div>
            </div>
        )
    }
}

export default  withStyles(styles)(withRouter(Forget_Password));