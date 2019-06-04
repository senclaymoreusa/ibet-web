import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink} from 'react-router-dom';
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
import { PayPalButton } from "react-paypal-button-v2";

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

class Deposit extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          amount: '',
          currency: '',
          error: false,
          data: '',
          type: '',

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
        const { type } = this.props.match.params;
        this.setState({type: type});

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
        let user = this.state.data.username;
        return (
            <div>
                <TopNavbar />
                <form className='deposit-form'>
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
                        value={this.state.balance}
                        onChange={this.onInputChange_balance}
                    />
                    <br />
                    <div className='paypal-button'>
                    
                        <PayPalButton
                            
                            createOrder={function() {
                                var postData = {
                                    "amount": amount,
                                    "currency": "USD",
                                    "user": user,
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
                                return fetch(API_URL + 'accounting/api/paypal_create_payment', {
                                  method: 'POST',
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  },
                                  body: formBody
                                }).then(function(res) {
                                    console.log(res.json())
                                  return res.json();
                                }).then(function(data) {
                                    let token;
                                    for (let link of data.links) {
                                        if (link.rel === 'approval_url') {
                                            token = link.href.match(/EC-\w+/)[0];
                                        }
                                    }
                                    return token;
                                });
                                
                            }}
                            
                            onApprove={(data) => {
                                var postData = {
                                    "order_id": data.id,   
                                }
                                console.log(data.id)
                                var formBody = [];
                                for (var pd in postData) {
                                    var encodedKey = encodeURIComponent(pd);
                                    var encodedValue = encodeURIComponent(postData[pd]);
                                    formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");
                                // OPTIONAL: Call your server to save the transaction
                                return fetch(API_URL + 'accounting/api/paypal_get_order', {
                                method: "POST",
                                body: formBody
                                }).then(function(res) {
                                    return res.json();
                                }).then(function(details) {
                                    alert('Transaction approved by ' + details.payer_given_name);
                                });
                              }}
                            options={{
                                clientId: CLIENT.sandbox
                            }}
                        />
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(Deposit)));