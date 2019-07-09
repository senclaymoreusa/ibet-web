import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';

import '../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';

import { ReactComponent as CloseIcon } from '../assets/img/svg/red-close.svg';

import { hide_deposit_amount, show_deposit } from '../actions';

import Left from '@material-ui/icons/ChevronLeft'

import wechat from '../images/WeChat.png';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const CLIENT = {
    sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
    production: 'xxxXXX',
  };
  

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
      width: 330,
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

class New_Deposit_Wechat extends Component {
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
    }
    
    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
        })
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

    onformsubmit(event){
        event.preventDefault()
        
        let amount = this.state.balance;
        let user = this.state.data.pk;
        let username = this.state.data.username;

        var postData = {
            "amount": amount,
            "user_id": user,
            "currency": "0",
            "language" : "zh-Hans",
            "method": "WECHAT_PAY",
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
            console.log(res)
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
                                    if(data.status == 'SUCCESS'){
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
    }
    
    render(){
        const { classes } = this.props;
        
        
        return (
            <div style={{backgroundColor: 'white',  minHeight: 400, width: 380}}>
                <Left 
                    style={{cursor: 'pointer', position: 'absolute', top: 8, left: 25, fontSize: 30, color: 'red'}}
                    onClick = { () => {
                        this.props.hide_deposit_amount();
                        this.props.show_deposit();
                    }}
                />
              
                <img  style ={{position: 'absolute', top: 20, left: 300}} src={wechat} height="50" width="50" alt='Not available' />
                
                <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, color: 'black', paddingLeft: 60, paddingTop: 12}}> 
                    Deposit
                </div>

                <div style={{color: 'red', fontSize: 30, fontWeight: 600, marginLeft: 30}}>
                    Amount
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                
                    <div style={{textAlign: 'center', marginTop: 20}}> 
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.balance || ''}
                            onChange={this.onInputChange_balance}
                        />
                    </div>
                    <br />
                    {
                        this.state.live_check_amount && this.state.live_check_amount ? 
                        <div style={{color: 'red'}}> 
                            <FormattedMessage id="balance.error"  defaultMessage='The balance you entered is not valid' />
                        </div> :
                        <div>
                            <br />
                        </div>
                    }
                    <div className='qaicash-button'  >
                        <button 
                           style={{border: 'none', backgroundColor: 'black', color: 'white', width: 330, height: 50, marginLeft: 25}}
                            onClick={this.onformsubmit.bind(this)}
                        >
                            Deposit
                        </button>
                        
                    </div>
                    

                
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, {hide_deposit_amount, show_deposit})(New_Deposit_Wechat)));