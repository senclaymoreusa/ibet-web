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
import Select from 'react-select';

const bank_options = [
    //tailand
    { value: 'KKR', label: 'Karsikorn Bank (K-Bank)',link: '2' },
    { value: 'BBL', label: 'Bangkok Bank' ,link: '2'},
    { value: 'SCB', label: 'Siam Commercial Bank',link: '2' },
    { value: 'KTB', label: 'Krung Thai Bank',link: '2' },
    { value: 'BOA', label: 'Bank of Ayudhya (Krungsri)',link: '2' },
    { value: 'GSB', label: 'Government Savings Bank',link: '2' },
    { value: 'TMB', label: 'TMB Bank Public Company Limited',link: '2' },
    { value: 'CIMBT', label: 'CIMB Thai',link: '2' },
    { value: 'KNK', label: 'Kiatnakin Bank',link: '2' },
    // vietnam
    { value: 'TCB', label: 'Techcom Bank',link: '8' },
    { value: 'SACOM', label: 'Sacom Bank',link: '8' },
    { value: 'VCB', label: 'Vietcom Bank' ,link: '8'},
    { value: 'ACB', label: 'Asia Commercial Bank' ,link: '8'},
    { value: 'DAB', label: 'DongA Bank' ,link: '8'},
    { value: 'VTB', label: 'Vietin Bank' ,link: '8'},
    { value: 'BIDV', label: 'Bank for Investment and Development of Vietnam',link: '8' },
    { value: 'EXIM', label: 'Eximbank Vietnam',link: '8' },

  ];
const currency_options = [
{ value: '2', label: 'THB' },
{ value: '8', label: 'VND' },
];
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


class DepositHelp2pay extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          amount: '',
          error: false,
          data: '',
          type: '',
          live_check_amount: false,
          button_disable: true,
          value: "",
          selectedCurrencyOption: {},
          selectedBankOption: {},
          order_id: "ibet" + new Date().toISOString().replace(/-/g, '').replace('T','').replace(/:/g,'').split('.')[0],
        };
        
        this.onInputChange_amount          = this.onInputChange_amount.bind(this);
        
       
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
        
    }
    handleCurrencyChange= selectedCurrencyOption => {
        this.setState({ selectedCurrencyOption });
        console.log(`Option selected:`, selectedCurrencyOption);
        this.check_button_disable()
    };
    handleBankChange= selectedBankOption => {
        
        this.setState({ selectedBankOption });
        console.log(`Option selected:`, selectedBankOption);
        this.check_button_disable()
    };

    onInputChange_amount(event){
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({amount: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            }else{
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
        this.check_button_disable()
    }
    check_button_disable(){
        
        if(this.state.amount && this.state.selectedCurrencyOption != {} && this.state.selectedBankOption != {} && !this.state.live_check_amount ){
            this.setState({button_disable: false})
        }
    }
    handleClick = (depositChannel, apiRoute) => {
        var orderid = this.state.order_id;
        var postData = {
            "amount": this.state.amount,
            "user_id": this.state.data.pk,
            "currency": this.state.selectedCurrencyOption.value,
            "bank" : this.state.selectedBankOption.value,
            "language": "en-Us", 
            "order_id" :orderid,
        }
        console.log(orderid)
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        return fetch(API_URL + 'accounting/api/help2pay/deposit', {
            method: 'POST',
            headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then(function(res) {
            if(res.ok){
                return res.text();         
            }
            alert("渠道维护中");
            throw new Error('Something went wrong.');
            
        }).then(function(data){
            let newwin = window.open('');
            newwin.document.write(data);
            var timer = setInterval(function() {
                console.log('checking..')
                if(newwin.closed){
                    clearInterval(timer);
                    const pd = JSON.stringify({
                        order_id : orderid,
                        
                    });
                    
                    return fetch(API_URL + 'accounting/api/help2pay/deposit_status', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: pd
    
                    }).then(function(res){
                        return res.text();
                    }).then(function(data){
                        console.log(data)
                        if(data == '0'){
                            const body = JSON.stringify({
                                type : 'add',
                                username: this.state.data.username,
                                balance: this.state.amount,
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
                            alert('Your deposit is not success!');
                        }
                    });
                }
            }, 1000);
            
        }).catch(function(error) {                        // catch
            console.log('Request failed', error);
        });
    }
    
    
    render(){
        const { classes } = this.props; 
        const { selectedCurrencyOption } = this.state;
        const { selectedBankOption } = this.state;
        const filteredOptions = bank_options.filter((o) => o.link === this.state.selectedCurrencyOption.value)
        return (
            <div>
                <TopNavbar />
                <form  className='deposit-bankcard-form'>
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.currency" defaultMessage='Please choose the currency you want to use' />
                            </b>
                        </label>
                    </div>
                    <div className="select-currency">
                        <Select
                            value={selectedCurrencyOption}
                            onChange={this.handleCurrencyChange}
                            options={currency_options}
                        />
                    </div>
                    
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.bank" defaultMessage='Please choose the bank you want to use' />
                            </b>
                        </label>
                    </div>
                    <div className="select-bank">
                        <Select
                            value={selectedBankOption}
                            onChange={this.handleBankChange}
                            options={filteredOptions}
                        />
                    </div>
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
                   
                    <div className='asiapay-button'  >
                        <Button 
                            disabled = {this.state.button_disable} 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={this.state.button_disable ? () => {} : this.handleClick}
                            
                        >
                            PAY NOW
                        </Button>
                        
                    </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositHelp2pay)));