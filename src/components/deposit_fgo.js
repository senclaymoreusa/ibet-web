import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';

import TopNavbar from "./top_navbar";
import '../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

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
      width: 400,
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

class DepositFgo extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          pin: '',
          serial: '',
          error: false,
          data: '',
          live_check_pin : false,
          live_check_serial: false,
          button_disable: true,
        };
        
        this.onInputChange_pin          = this.onInputChange_pin.bind(this);
        this.onInputChange_serial          = this.onInputChange_serial.bind(this);
    }
    
    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
          })
        const { type } = this.props.match.params;
        

    }
    async onInputChange_pin(event){
        if (!event.target.value.match(/^[0-9.]+$/) || event.target.value.length != 14){
            this.setState({live_check_pin: true, button_disable: true}); 
        }else{
            this.setState({live_check_pin: false})
        }
        await this.setState({pin: event.target.value})
        this.check_button_disable()
    }
    async onInputChange_serial(event){
        if (event.target.value.length != 15){
            this.setState({live_check_serial: true, button_disable: true}); 
        }else{
            this.setState({live_check_serial: false})
        }
        await this.setState({serial: event.target.value})
        this.check_button_disable()
    }
    check_button_disable(){
        if(this.state.pin && !this.state.live_check_pin && this.state.serial && !this.state.live_check_serial){
            this.setState({button_disable: false})
        }
    }
    render(){
        const { classes } = this.props;
        let pin = this.state.pin;
        let serial = this.state.serial;
        let username = this.state.data.username;
        return (
            <div>
                <TopNavbar />
                <form  className='fgo-form'>
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.amount" defaultMessage='Please enter the pin of your Fgo card' />
                            </b>
                        </label>
                    </div>
                    
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.pin || ''}
                        onChange={this.onInputChange_pin}
                    />
                    {this.state.live_check_pin && <div style={{color: 'red'}}> <FormattedMessage  id="error.pin" defaultMessage='Pin is not valid' /> </div>}
                    <br />
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.amount" defaultMessage='Please enter the serial of your Fgo card' />
                            </b>
                        </label>
                    </div>
                    
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.serial || ''}
                        onChange={this.onInputChange_serial}
                    />
                    {this.state.live_check_serial && <div style={{color: 'red'}}> <FormattedMessage  id="error.serial" defaultMessage='Serial is not valid' /> </div>}
                    <br />
                    
                    <div className='fgo-button'  >
                        <Button 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={function() {
                                var postData = {
                                    "pin": pin,
                                    "user": username,
                                    "serial": serial,
                                }
                                const token = localStorage.getItem('token');
                                var formBody = [];
                                for (var pd in postData) {
                                    var encodedKey = encodeURIComponent(pd);
                                    var encodedValue = encodeURIComponent(postData[pd]);
                                    formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");
                                return fetch(API_URL + 'accounting/api/fgate/chargeCard', {
                                  method: 'POST',
                                  withCredentials: true,
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                    'Authorization': 'Token ' + token
                                  },
                                  body: formBody
                                }).then(function(res) {
                                  return res.json();
                                }).then(function(data){
                                    if(data.error_code == '00' && data.status == '1'){
                                        alert('Your fgo card is successfully deposit to your account!');
                                        const body = JSON.stringify({
                                            type : 'add',
                                            username: username,
                                            balance: data.amount,
                                        });
                                        axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                        .then(res => {
                                            if (res.data === 'Failed'){
                                                this.setState({error: true});
                                            } else if (res.data === 'The balance is not enough') {
                                                alert("cannot withdraw this amount")
                                            }else{
                                                alert("your balance is updated")
                                            }
                                        });
                                    }else{
                                        alert(data.message);
                                    }
                                    window.location.reload()
                                });
                                
                            }}
                        >
                            PAY NOW
                        </Button>
                        
                    </div>
                    

                </form>
            </div>
            
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(DepositFgo)));