import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../../../util_config';
import { connect } from 'react-redux';
import TopNavbar from "../../../../top_navbar";
import '../../../../../css/deposit.css';


// Material-UI
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import {authCheckState} from '../../../../../actions';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = function(theme) {
    return ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: "30%"
    },
  
    // margin: {
    //   margin: 'auto',
    // },
  
    textField: {
      flexBasis: 200,
      width: 300,
      margin: theme.spacing.unit,
    //   marginLeft: "30%",
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
})};




class DepositAsiapayKuaiJie extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            amount: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.depositMoney = this.depositMoney.bind(this);
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                alert("Please log in to view this page");
                window.location.href = "/";
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
        .then(res => {
            this.setState({data: res.data});
        });
    }

    handleChange(event) {
        event.preventDefault();

        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            } else {
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }

    depositMoney(event) {
        event.preventDefault();
        let amount = this.state.amount;
        let user = this.state.data.pk;

        let postData = {
            "amount": amount,
            "userid": user,
            "currency": "0",
            "PayWay" : "30", // pop up window / new tab
            "method": "39", // 快捷支付
        };

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
            console.log(res);
            return res.json();
        }).then(function(data){
            let url = data.url;
            let order_id = data.order_id;
            window.open(url + "?cid=BRANDCQNGHUA3&oid=" + order_id);
        });
    }

    render() {
        const {amount} = this.state;
        return (
            <div>
                <TopNavbar />
                <form className="deposit-form">
                    <FormattedMessage id="balance.enter_balance" />
                    <br/>
                    <input
                        type="text" 
                        value={amount}
                        placeholder="Enter Amount" 
                        name="amount" 
                        onChange={this.handleChange}
                        className="input-deposit-amount"
                    />
                </form>
                <div className="deposit-form" id="submit-amount">
                    {/* <p>Select payment method:</p> */}
                    <Button variant="contained" value="Deposit" onClick={this.depositMoney}>
                        {"Deposit " + this.state.amount + " to my account"}
                    </Button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositAsiapayKuaiJie)));