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
          live_check_bank:false,
          live_check_cardnum:false,
          live_check_cardhoder:false,

          button_disable: true,
          value: "",
          size: 128,
          fgColor: '#000000',
          bgColor: '#ffffff',
          level: 'L',
          renderAs: 'svg',
          includeMargin: false,
          show_qrcode: false,
          bank:'',
          cardnumber:'',
          cardhodername: '',
        };
        
        this.onInputChange_amount          = this.onInputChange_amount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onInputChange_bank  = this.onInputChange_bank.bind(this);
        this.onInputChange_cardnumber  = this.onInputChange_cardnumber.bind(this);
        this.onInputChange_cardhodername  = this.onInputChange_cardhodername.bind(this);
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
    async onInputChange_bank(event){
        if (!event.target.value.match(/[\u4e00-\u9fa5]/)){
            this.setState({live_check_bank: true, button_disable: true,})
          }else{
            this.setState({live_check_bank: false})
          }
          await this.setState({bank: event.target.value});
          this.check_button_disable()
    }
    async onInputChange_cardnumber(event){
        if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/)){
            this.setState({live_check_cardnum: true, button_disable: true,})
          }else{
            this.setState({live_check_cardnum: false})
          }
          await this.setState({cardnumber: event.target.value});
          this.check_button_disable()
    }
    async onInputChange_cardhodername(event){
        if (!event.target.value.match(/^[a-zA-Z]+$/) && !event.target.value.match(/[\u4e00-\u9fa5]/)){
            this.setState({live_check_cardhoder: true, button_disable: true,})
        }else{
            this.setState({live_check_cardhoder: false})
        }
        await this.setState({cardhodername: event.target.value});
        this.check_button_disable()
    }
    check_button_disable(){
        if(this.state.bank && this.state.amount && this.state.cardnumber && this.state.cardhodername && !this.state.live_check_bank && !this.state.live_check_amount && !this.state.live_check_cardnum && !this.state.live_check_cardhoder){
            this.setState({button_disable: false})
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){
        const { classes } = this.props;
        let amount = this.state.amount;
        let user = this.state.data.pk;
        let cardhodername = this.state.cardhodername;
        let cardnumber = this.state.cardnumber;
        let bank = this.state.bank;
        return (
            <div>
                <TopNavbar />
                <form  className='withdraw-form'>
                    
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="withdraw.bank" defaultMessage='Bank name' />
                            </b>
                        </label>
                    </div>
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.bank || ''}
                        onChange={this.onInputChange_bank}
                    />
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="withdraw.bank" defaultMessage='Card number' />
                            </b>
                        </label>
                    </div>
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.cardnumber || ''}
                        onChange={this.onInputChange_cardnumber}
                    />
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="withdraw.bank" defaultMessage='Card holder name' />
                            </b>
                        </label>
                    </div>
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.cardhodername || ''}
                        onChange={this.onInputChange_cardhodername}
                    />
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
                                    "userid": user,
                                    "currency": "0",
                                    "cashoutMethod" : "cashifacebatch", //代付
                                    "method": "49", 
                                    "CashCardNumber": cardnumber,
                                    "CashCardChName": cardhodername,
                                    "CashBankDetailName":bank,
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
                                return fetch(API_URL + 'accounting/api/asiapay/cashout', {
                                  method: 'POST',
                                  headers: {
                                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  },
                                  body: formBody
                                }).then(function(res) {
                                  return res.json();
                                }).then(function(data) {
                                    if(data == '50001'){
                                        alert('Your withdraw is success.')
                                    }else{
                                        alert('Your withdraw is failed.')
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