import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/deposit.css';


// Material-UI
import {TextField, InputAdornment, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { authCheckState } from '../actions';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

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

class DepositAstropay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            amount: "",
            card_num: "",
            card_code: "",
            exp_date: "",
        };

        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            } else {
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }

    handleNumChange(event) {
        event.preventDefault();
        if (!event.target.value || event.target.value.match(/^[0-9]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            } else {
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }

    handleDateChange(event) {
        event.preventDefault();
        if (!event.target.value || event.target.value.match(/^[0-9/]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/(0[1-9]|1[0-2])\/[0-9]{2}/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            } else {
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }
    
    async depositMoney(event) {
        event.preventDefault();
        const {amount, card_num, card_code, exp_date, data} = this.state;

        console.log("amount: " + amount);
        console.log(data)
        let postData = {
            "card_num": card_num,
            "card_code": card_code,
            "exp_date": exp_date,
            "amount": amount
        };

        var res = await axios.post(API_URL + 'accounting/api/astropay/capture_transaction',
            postData,
            config)
        console.log("result of deposit: ");
        console.log(res);
        if (res.data.response_msg.slice(0,5) === "1|1|1") {
            const body = JSON.stringify({
                type : 'add',
                username: data.username || "",
                balance: amount,
            });
            axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
            .then(res => {
                if (res.data === 'Failed'){
                    this.setState({error: true});
                } else if (res.data === 'The balance is not enough') {
                    alert("cannot withdraw this amount")
                } else {
                    alert("your balance is updated")
                    // window.location.reload();
                }
            });
        }
        else {
            // this.showError(res.data.response_msg.split("|")[3]);
            this.setState({error: true, error_msg: res.data.response_msg.split("|")[3]});
        }
    }

    render() {
        const {classes} = this.props;
        const {amount, card_num, card_code, exp_date} = this.state;
        return (
            <div>
                <TopNavbar />
                <form className="deposit-form" onSubmit={this.depositMoney}>
                    <FormattedMessage id="balance.enter_balance" />
                    <br/>
                    <TextField
                        required
                        label="Card No."
                        value={card_num}
                        inputProps={{"maxLength":16}}
                        placeholder="1234 5678 9999 0000" 
                        name="card_num"
                        onChange={this.handleNumChange}
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Code"
                        // type="password"
                        value={card_code}
                        placeholder="eg. 1234" 
                        inputProps={{"maxLength":4}}
                        name="card_code" 
                        onChange={this.handleNumChange}
                        className={classes.textField}
                        style={{"width": 100}}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Expiration Date"
                        type="text"
                        name="exp_date" 
                        value={exp_date}
                        placeholder="MM/YYYY" 
                        inputProps={{"maxLength":7}}
                        onChange={this.handleDateChange}
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        required
                        label="Amount"
                        value={amount}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        placeholder="" 
                        name="amount" 
                        onChange={this.handleAmountChange}
                        className={classes.textField}
                        style={{"width": 100}}
                        variant="filled"
                        margin="normal"
                    />
                    <div id="error-msg">
                        {
                            this.state.error ? 
                            <p style={{color: "red"}}>{this.state.error_msg}</p> :
                            <br></br>
                        }
                    </div>
                    <div id="submit-amount">
                        <Button type="submit" variant="contained" value="Deposit" onSubmit={this.depositMoney}>
                            {"Deposit " + this.state.amount + " to my account"}
                        </Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositAstropay)));