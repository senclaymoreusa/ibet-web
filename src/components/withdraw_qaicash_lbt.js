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
import {authCheckState} from '../actions';

var QRCode = require('qrcode.react');

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
    button:{
        margin: theme.spacing.unit,
    }
  });

class WithdrawQaicashLBT extends Component {
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
          value: "",
          size: 128,
          fgColor: '#000000',
          bgColor: '#ffffff',
          level: 'L',
          renderAs: 'svg',
          includeMargin: false,
        };
        
        this.onInputChange_amount          = this.onInputChange_amount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1){
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
          })
        const { type } = this.props.match.params;
        

    }
    async onInputChange_amount(event){
        
        if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
            this.setState({live_check_amount: true, button_disable: true})
        }else{
            this.setState({live_check_amount: false})
        }
        await this.setState({amount: event.target.value});
        this.check_button_disable()
        
    }
    
    check_button_disable(){
        if(this.state.amount  && !this.state.live_check_amount ){
            this.setState({button_disable: false})
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){
        const { classes } = this.props;
        let amount = this.state.amount;
        let user = this.state.data.username;
        return (
            <div>
                <TopNavbar />
                <form  className='withdraw-form'>
                    
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="withdraw.amount" defaultMessage='Withdraw amount' />
                            </b>
                        </label>
                    </div>
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.amount || ''}
                        onChange={this.onInputChange_amount}
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
                    
                    <div className='asiapay-withdraw-button'  >
                        <Button 
                            disabled = {this.state.button_disable} 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={(e) => {
                                var postData = {
                                    "amount": amount,
                                    "user_id": user,
                                    "currency": "CNY",
                                    "method": "LOCAL_BANK_TRANSFER", 
                                    "language" : "zh-Hans",
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
                                return fetch(API_URL + 'accounting/api/qaicash/submit_payout', {
                                  method: 'POST',
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  },
                                  body: formBody
                                }).then(function(res) {
                                  return res.json();
                                }).then(function(data) {
                                    let redirectUrl = data.paymentPageSession.paymentPageUrl;
                                    if(redirectUrl != null){
                                        const mywin = window.open(redirectUrl,'qaicash-checkout', 'height=500,width=500');
                                        var timer = setInterval(function() { 
                                            console.log('checking..')
                                              if(mywin.closed) {
                                                    clearInterval(timer);
                                                    alert('Transaction is approved.');
                                                    const body = JSON.stringify({
                                                        type : 'withdraw',
                                                        username: user,
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
                                              }
                                          }, 1000);
                                        
                                    }else{
                                        this.setState({qaicash_error: true, qaicash_error_msg: data.returnMessage});
                                    }
                                    
                                });
                            }}
                            
                        >
                            Withdraw NOW
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(WithdrawQaicashLBT)));