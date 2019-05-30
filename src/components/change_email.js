import React, { Component } from 'react';
import { config } from "../util_config";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { errors } from './errors';

import TopNavbar from "./top_navbar";

import '../css/change_email.scss';

// Material-UI

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

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


class Change_Email extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            new_email: '',
            confirm_email: '',
            errorCode: '',
            fetched_data: {},

            live_check_email: false,
            live_check_email_match: false,

            email_existed_error: false,

            button_disable: true
        }

        this.onInputChange_new_email     = this.onInputChange_new_email.bind(this);
        this.onInputChange_confirm_email = this.onInputChange_confirm_email.bind(this);
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

    async onInputChange_new_email(event){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)){
            this.setState({live_check_email: true, button_disable: true})
        }else{
            this.setState({live_check_email: false})
        }
        if (this.state.confirm_email){
            if (this.state.confirm_email !== event.target.value){
                this.setState({live_check_email_match: true, button_disable: true});
            }else{
                this.setState({live_check_email_match: false});
            }
        }
        await this.setState({new_email: event.target.value});
        this.check_button_disable()
    }
    
    async onInputChange_confirm_email(event){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.new_email !== event.target.value){
            this.setState({live_check_email_match: true, button_disable: true})
        }else{
            this.setState({live_check_email_match: false});
        }
        
        await this.setState({confirm_email: event.target.value});
        this.check_button_disable();

    }

    check_button_disable(){
        if (!this.state.live_check_email && !this.state.live_check_email_match && this.state.new_email && this.state.confirm_email && this.state.confirm_email === this.state.new_email){
          this.setState({button_disable: false})
        }
      }
    
    onFormSubmit(event){
        event.preventDefault();
        
        this.setState({email_existed_error: false})

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        

        axios.post(API_URL + `users/api/updateemail/`, {
            old_email: this.state.fetched_data.email,
            new_email: this.state.new_email
        }, config)
        .then(res => {
            if (res.data === 'Duplicate'){
                this.setState({email_existed_error: true})
            }else{
                axios.get(API_URL + `users/api/sendemail/?case=change_email&to_email_address=${this.state.fetched_data.email}&email=${this.state.new_email}`, config)
                .then(res => {
                    axios.get(API_URL + `users/api/sendemail/?case=change_email&to_email_address=${this.state.new_email}&&email=${this.state.new_email}`, config)
                })

                const { formatMessage } = this.props.intl;

                var message = formatMessage({ id: "update_email.success" });

                alert(message);
                
                this.props.history.push("/profile");
            }
        })
    }
    render(){

        const { classes } = this.props;

        const showErrors = () => {
            if (this.state.errorCode === errors.EMAIL_NOT_MATCH) {
                return (
                    <div style={{color: 'red'}}> 
                        <FormattedMessage id="change_email.email_not_match" defaultMessage='Email does not match' /> 
                    </div>
                );
            } else if (this.state.errorCode === errors.EMAIL_CAN_NOT_BE_SAME) {
                return (
                    <div style={{color: 'red'}}> 
                        <FormattedMessage id="change_email.email_can_not_be_same" defaultMessage='New email address has to be different from the old email address' /> 
                    </div>
                );
            }
        }
        return (
            <div>

                <TopNavbar style={{zIndex: '100'}} />
                
                <form onSubmit={this.onFormSubmit} className='update-email-form'>

                    <div>

                        <FormattedMessage id="change_email.enter_email" defaultMessage='New Email address: ' />    

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.new_email}
                            onChange={this.onInputChange_new_email}
                            oninput="this.value=this.value.toLowerCase()"
                        />
                    </div>
                    
                    <div>

                        <FormattedMessage id="change_email.confirm_email" defaultMessage='Confirm Email address: ' />

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.confirm_email}
                            onChange={this.onInputChange_confirm_email}
                            oninput="this.value=this.value.toLowerCase()"
                        />
                    </div>

                    {this.state.live_check_email_match && <div style={{color: 'red'}}> <FormattedMessage id="change_email.email_not_match" defaultMessage='Email does not match' />  </div>}
 
                    {this.state.live_check_email && <div style={{color: 'red'}}> <FormattedMessage  id="error.email" defaultMessage='Email address not valid' /> </div>}

                    {this.state.email_existed_error && <div style={{color: 'red'}}> <FormattedMessage  id="referral.email_exist" defaultMessage='This email has already been registerd' /> </div>}
                    
                    <br />

                    <Button 
                        disabled = {this.state.button_disable} 
                        type="submit" 
                        variant="contained"
                        color="primary"
                    > 
                        <FormattedMessage id="change_email.sumbit" defaultMessage='Submit' />    
                    </Button>

                    <br />
                    <br />

                    <Button
                        onClick={()=>{this.props.history.push("/update_profile")}}
                        variant="contained"
                        color="secondary"
                    > 
                        <FormattedMessage id="change_email.cancel" defaultMessage='Cancel' />       
                    </Button>
                </form>
                {
                    showErrors()
                }
            </div>
        )
    }
}

export default withStyles(styles)(injectIntl(withRouter(Change_Email)));