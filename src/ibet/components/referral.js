import React from 'react';
import axios from 'axios';
import { config } from '../../util_config';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { authCheckState } from '../actions';

import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';

import TopNavbar from "./top_navbar";


import '../css/referral.css';

import { withStyles } from '@material-ui/core/styles';
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


class Referral extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          data: '',
          email: '',
          error: false,
          email_exist_error: false,
          button_disable: true,
          email_valid_error: false
        };

        this.onInputChange_email            = this.onInputChange_email.bind(this);
        this.onFormSubmit                   = this.onFormSubmit.bind(this);
    }

    componentDidMount() {

        this.props.authCheckState()
        
        const token = localStorage.getItem('token');
          config.headers["Authorization"] = `Token ${token}`;

          axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
              this.setState({data: res.data});
        }) 
    }

    onInputChange_email(event){
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)  ){
            this.setState({email_valid_error: true, button_disable: true});
        }else if(event.target.value === this.state.data.email){
            this.setState({email_exist_error: true, button_disable: true});
        }else{
            this.setState({email_valid_error: false, email_exist_error: false, button_disable: false});
        }
        this.setState({ email: event.target.value });
    }

    onFormSubmit(event){
        const { formatMessage } = this.props.intl;
        const message = formatMessage({ id: 'referral.user' });

        event.preventDefault();
        axios.get(API_URL + `users/api/checkreferral?referral_id=${this.state.data.referral_id}&email=${this.state.email}`, config)
        .then(res =>{
            if (res.data === 'Duplicate'){
                this.setState({email_exist_error: true})
            }else if (res.data === 'Valid'){
                axios.get(API_URL + `users/api/sendemail/?case=referral&to_email_address=${this.state.email}&username=${this.state.data.username}&referralid=${this.state.data.referral_id}`, config)
                .then(res =>{
                    alert(message)
                    this.props.history.push('/');
                }).catch(err => {
                    axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });

                    console.log(err.response)
                })
            }else{
                this.setState({error: true})
            }
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div> 

                <TopNavbar />

                <form onSubmit={this.onFormSubmit} className='referral-form'>
                    <div>
                        <div>
                            <label><b>
                                <FormattedMessage id='referral.enter_email' defaultMessage='Please enter the email account for your referral' />
                            </b></label>
                        </div>
                            <TextField
                                className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                type={'text'}
                                value={this.state.email}
                                onChange={this.onInputChange_email}
                            />
                    </div>

                    {
                        this.state.email_valid_error && <div style={{color: 'red'}}> <FormattedMessage id="referral.email_valid" defaultMessage='Please enter a valid email address' /> </div>
                    }

                    {
                        this.state.email_exist_error && <div style={{color: 'red'}}> <FormattedMessage id="referral.email_exist" defaultMessage='This email has already been registerd' /> </div>
                    }

                    {
                        this.state.error && <FormattedMessage id="referral.error" defaultMessage='You have reached the maximum referral number' />
                    }

                    <br/>

                    <Button 
                        disabled = {this.state.button_disable} 
                        type="submit" 
                        variant="contained"
                        color="primary"
                        className='referral-submit'
                        > 
                        <FormattedMessage id="balance.submit" defaultMessage='Submit' />   
                    </Button>

                    
                    <br />
                    <br />

                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick = {() => {
                            this.props.history.push('/')
                        }}
                    > 
                        <FormattedMessage id="profile.back" defaultMessage='Back' />
                    </Button>
      

                </form>
            </div>
        )
    }
}

export default withStyles(styles)(injectIntl(  connect(null, {authCheckState})(Referral)  ));