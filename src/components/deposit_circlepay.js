import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/deposit.css';


// Material-UI
import {TextField, Select, InputAdornment, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { authCheckState } from '../actions';

const 
    crypto = require("crypto"),
    API_URL = process.env.REACT_APP_DEVELOP_API_URL,
    CIRCLEPAY_DEPOSIT_URL = "https://gateway.circlepay.ph/payment/",
    USER_CODE = 297802061195;

const styles = function(theme) {
    return ({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "30%"
        },

        textField: {
            marginLeft: theme.spacing.unit*2,
            marginRight: theme.spacing.unit*2,
            width: 250,
            // background:
            backgroundColor: "#ffffff"
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
    })
};

class DepositCirclepay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            amount: "",
        };

        this.handleAmountChange = this.handleAmountChange.bind(this);
        // this.handleNumChange = this.handleNumChange.bind(this);
        // this.handleDateChange = this.handleDateChange.bind(this);
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
            console.log("auth check results:");
            console.log(res);
            this.setState({data: res.data});
        });
    }

    handleAmountChange(event) {
        event.preventDefault();
        if (event.target.value >= 20 && event.target.value <= 1000) {
            this.setState({valid_amt: true});
        }
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, disable_button: true})
            } else {
                this.setState({live_check_amount: false, disable_button: false})
            }
        }
    }
    
    async depositMoney(event) {
        event.preventDefault();

        const {amount} = this.state;
        const token = localStorage.getItem('token');
        if (amount < 20000 || amount > 1000000) {
            this.setState({valid_amt: false, disable_button: true, error_msg: "Min deposit is 20000, Max deposit is 1000000"});
            return;
        }
        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;


        // setup POST request params
        let currDate = new Date();
        function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            
            if ("withCredentials" in xhr) {
          
              // Check if the XMLHttpRequest object has a "withCredentials" property.
              // "withCredentials" only exists on XMLHTTPRequest2 objects.
              xhr.open(method, url, true);
          
            } else {
          
              // Otherwise, CORS is not supported by the browser.
              xhr = null;
          
            }
            return xhr;
        }
          
        
        let transId = "testOrder" + currDate.getFullYear() + currDate.getMonth() + currDate.getDate() + currDate.getHours() + currDate.getMinutes();
        // let transId = "Abcdefg4321"
        const secret = 'Kiy4O3IAvPpHxXJ9ht1mBfZs';

        let secretMsg = 'jennyto@ibet.com' + transId + amount;
        console.log(secretMsg);

        const hash = crypto.createHmac('sha256', secret)
                           .update(secretMsg)
                           .digest('hex');
        console.log(transId);
        console.log(hash);
        let corsURL = "https://cors-anywhere.herokuapp.com/"
        let postURL = CIRCLEPAY_DEPOSIT_URL + USER_CODE + "/?partner_tran_id=" + transId + "&amount=" + amount + "&token=" + hash;
        

        var xhr = createCORSRequest('GET', corsURL+postURL);
        // xhr.setRequestHeader("X-Request-Url", postURL);
        // xhr.setRequestHeader("Origin", postURL);
        console.log(xhr);
        // xhr.onreadystatechange = function () {
        //     console.log(xhr.readyState, xhr.status);
        //     if(xhr.readyState === 4 && xhr.status === 200) {
        //         window.open(postURL);
        //     }
        // };
        
        window.open(postURL);
        // xhr.send();

        let postData = {
            "amount": amount,
            "trans_id": transId
        }

        axios.post(API_URL + 'accounting/api/circlepay/deposit',
            postData,
        config).then(res => {
            console.log("result of deposit: ");
            console.log(res);
            if(res.status !== 200) {
                this.setState({error: true, error_msg: JSON.stringify(res)});
            }
            else {
                console.log(res);
                
            }
        });

        // axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
        // .then(res => {
        //     if (res.data === 'Failed'){
        //         this.setState({error: true});
        //     } else if (res.data === 'The balance is not enough') {
        //         alert("cannot withdraw this amount")
        //     } else {
        //         alert("your balance is updated")
        //         // window.location.reload();
        //     }
        // });
        

    }

    render() {
        const {classes} = this.props;
        const {amount, error, error_msg, valid_amt, disable_button, response: resp_msg} = this.state;
        return (
            <div>
                <TopNavbar />
                <form className="deposit-form" onSubmit={this.depositMoney}>
                    <FormattedMessage id="balance.enter_balance" />
                    <br/>
                    <TextField
                        required
                        label="Amount"
                        value={amount}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            style: {
                                backgroundColor: "white"
                            }
                        }}
                        placeholder="" 
                        name="amount" 
                        onChange={this.handleAmountChange}
                        className={classes.textField}
                        // style={{"width": 100}}
                        variant="filled"
                        margin="normal"
                    />
                    <div id="error-msg">
                        {
                            (error || !valid_amt) ? 
                            <p style={{color: "red"}}>{error_msg}</p> :
                            <br></br>
                        }
                    </div>
                    <div id="submit-amount">
                        <Button 
                            type="submit" 
                            variant="contained" 
                            value="Deposit" 
                            onSubmit={this.depositMoney}
                            style={disable_button ? {} : {cursor: "pointer"}}
                        >
                            {"Deposit " + this.state.amount + " to my account"}
                        </Button>
                    </div>
                    <div id="resp-msg">
                        {
                            resp_msg ?
                            <p>{resp_msg}</p> :
                            <br></br>
                        }
                    </div>

                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositCirclepay)));