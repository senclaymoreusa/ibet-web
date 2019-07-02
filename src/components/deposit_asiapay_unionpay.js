import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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


class DepositUnionpay extends Component {
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
          bankid:'',
        };
        
        this.onInputChange_amount          = this.onInputChange_amount.bind(this);
        this.handleChange                   = this.handleChange.bind(this);
       
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
    onInputChange_amount(event){
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({amount: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            }else{
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }
    handleClick = (depositChannel, apiRoute) => {
            var postData = {
                "amount": this.state.amount,
                "userid": this.state.data.pk,
                "currency": "0",
                "PayWay" : "42", //QRCode
                "method": "41", //alipay
            }
            console.log(this.state.amount)
            console.log(this.state.data.pk)
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
                this.state.value = data.qr;
                this.state.show_qrcode=true;
                  
            });
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){
        const { classes } = this.props; 
        return (
            <div>
                <TopNavbar />
                <form  className='deposit-bankcard-form'>
                    
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositUnionpay)));