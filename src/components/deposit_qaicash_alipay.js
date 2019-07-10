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

class DepositQaicahAlipay extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          amount: '',
          currency: '',
          error: false,
          data: '',
          type: '',
          qaicash_error: false,
          qaicash_error_msg: "",
          live_check_amount: false,
          button_disable: true,
        };
        
        this.onInputChange_balance          = this.onInputChange_balance.bind(this);
        //this.addBalance          = this.addBalance.bind(this);
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
    onInputChange_balance(event){
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({balance: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            }else{
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }
    
    render(){
        const { classes } = this.props;
        let amount = this.state.balance;
        let user = this.state.data.pk;
        let username = this.state.data.username;
        return (
            <div>
                <TopNavbar />
                <form  className='deposit-form'>
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.amount" defaultMessage='Please enter the amount you want to add to your account' />
                            </b>
                        </label>
                    </div>
                    
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.balance || ''}
                        onChange={this.onInputChange_balance}
                    />
                    <br />
                    {
                        this.state.live_check_amount && this.state.live_check_amount ? 
                        <div style={{color: 'red'}}> 
                            <FormattedMessage id="balance.error"  defaultMessage='The amount you entered is not valid' />
                        </div> :
                        <div>
                            <br />
                        </div>
                    }
                    <div className='qaicash-button'  >
                        <Button 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={function() {
                                var postData = {
                                    "amount": amount,
                                    "user_id": user,
                                    "currency": "0",
                                    "language" : "zh-Hans",
                                    "method": "ALIPAY",
                                }
                                console.log(amount)
                                console.log(user)
                                var formBody = [];
                                for (var pd in postData) {
                                    var encodedKey = encodeURIComponent(pd);
                                    var encodedValue = encodeURIComponent(postData[pd]);
                                    formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");
                                return fetch(API_URL + 'accounting/api/qaicash/submit_deposit', {
                                  method: 'POST',
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  },
                                  body: formBody
                                }).then(function(res) {
                                  return res.json();
                                }).then(function(data){
                                    let redirectUrl = data.paymentPageSession.paymentPageUrl
                                    console.log(redirectUrl)

                                    if(redirectUrl != null){
                                        const mywin = window.open(redirectUrl, 'qaicash-Wechatpay', 'height=500,width=500');
                                        var timer = setInterval(function() { 
                                            console.log('checking..')
                                              if(mywin.closed) {
                                                    clearInterval(timer);
                                                    var postData = {
                                                        "order_id": data.paymentPageSession.orderId
                                                    }
                                                    var formBody = [];
                                                    for (var pd in postData) {
                                                        var encodedKey = encodeURIComponent(pd);
                                                        var encodedValue = encodeURIComponent(postData[pd]);
                                                        formBody.push(encodedKey + "=" + encodedValue);
                                                    }
                                                    formBody = formBody.join("&");
                                                    
                                                    return fetch(API_URL + 'accounting/api/qaicash/deposit_transaction', {
                                                        method: "POST",
                                                        headers: {
                                                            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                                        },
                                                        body: formBody
                                                        }).then(function(res) {
                                                            return res.json();
                                                        }).then(function(data) {
                                                            console.log(data.status)
                                                            if(data.status === 'SUCCESS'){
                                                                alert('Transaction is approved.');
                                                                const body = JSON.stringify({
                                                                    type : 'add',
                                                                    username: username,
                                                                    balance: amount,
                                                                });
                                                                console.log(body)
                                                                axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                                                .then(res => {
                                                                    if (res.data === 'Failed'){
                                                                        this.setState({error: true});
                                                                    } else if (res.data === 'The balance is not enough') {
                                                                        alert("cannot withdraw this amount")
                                                                    }else{
                                                                        alert("your balance is updated")
                                                                        window.location.reload()
                                                                    }
                                                                });
                                                            }else{
                                                                alert('Transaction is not approved.')
                                                            }
                                                            
                                                            
                                                    });
                                                    
                                              }
                                          }, 1000);
                                        
                                    }else{
                                        this.setState({qaicash_error: true, qaicash_error_msg: data.returnMessage});
                                    }
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(DepositQaicahAlipay)));