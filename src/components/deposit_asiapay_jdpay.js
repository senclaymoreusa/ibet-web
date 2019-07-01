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

class DepositAsiapayJDPay extends Component {
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
          show_qrcode: false,
        };
        
        this.onInputChange_balance          = this.onInputChange_balance.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.onQrChange  = this.onQrChange.bind(this);
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
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){
        const { classes } = this.props;
        let amount = this.state.balance;
        let user = this.state.data.pk;
        let myqr = this.state.qr;
        
        let currentComponent = this;
        return (
            <div>
                <TopNavbar />
                <form  className='deposit-form'>
                    
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.amount" defaultMessage='Please enter the amount you want to add to your account（30 - 980）' />
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
                    
                    <div className='asiapay-button'  >
                        <Button 
                            disabled = {this.state.button_disable} 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={(e) => {
                                var postData = {
                                    "amount": amount,
                                    "userid": user,
                                    "currency": "0",
                                    "PayWay" : "42", //QRcode
                                    "method": "49", //京东支付
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
                                return fetch(API_URL + 'accounting/api/asiapay/deposit', {
                                  method: 'POST',
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  },
                                  body: formBody
                                }).then(function(res) {
                                  return res.json();
                                }).then(function(data){
                                    myqr = data.qr;
                                    currentComponent.setState({value: myqr,show_qrcode:true})
                                      
                                });
                            }}
                            
                        >
                            PAY NOW
                        </Button>
                        <div className="asiapay-qr" style={{display: this.state.show_qrcode ? "block":"none"}}>
                            <QRCode
                                value={this.state.value}
                                size={this.state.size}
                                fgColor={this.state.fgColor}
                                bgColor={this.state.bgColor}
                                level={this.state.level}
                                renderAs={this.state.renderAs}
                                includeMargin={this.state.includeMargin}
                            />
                        </div>
                        
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositAsiapayJDPay)));