import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/deposit.css';


// Material-UI
import {TextField, FormControl, InputLabel, Button, Select, MenuItem} from '@material-ui/core';
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
            width: 220,
            // background:
            // backgroundColor: "#ffffff"
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

const operators = [
    {
        value: "vtt",
        label: "Viettel"
    },
    {
        value: "vnp",
        label: "Vinaphone"
    },
    {
        value: "vms",
        label: "Mobifone"
    }
]
class DepositScratchCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            amount: "",
            card_num: "",
            card_code: "",
            exp_date: "",
            operator: ""
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

        this.setState({amount: event.target.value}); 
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

        this.setState({operator: event.target.value}); 
    }
    
    async depositMoney(event) {
        event.preventDefault();
        const {amount, card_num, card_code, operator, data} = this.state;
        const token = localStorage.getItem('token');

        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        console.log("amount: " + amount);
        console.log(data)
        let postData = {
            "serial": card_num,
            "pin": card_code,
            "operator": operator,
            "amount": amount
        };

        var res = await axios.post(API_URL + 'accounting/api/scratchcard/deposit',
            postData,
            config)
        console.log("result of deposit: ");
        console.log(res);

        if (res.status === 200) {
            console.log("nice!");
            if (res.data.status === 6 || res.data.status === 1) {
                this.setState({
                    receive_response: true, 
                    response_msg: JSON.stringify(res.data.msg),
                    error: false,
                    error_msg: ""
                });
            }
            else {
                this.setState({
                    error: true, 
                    error_msg: JSON.stringify(res.data.msg),
                    receive_response: false,
                    response_msg: ""
                });
            }
            // const body = JSON.stringify({
            //     type : 'add',
            //     username: data.username || "",
            //     balance: amount,
            // });
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
        else {
            this.setState({error: true, error_msg: "Could not communicate with iBet servers. Error code: " + res.status});
        }
    }

    render() {
        const {classes} = this.props;
        const {amount, card_num, card_code, operator} = this.state;
        return (
            <div>
                <TopNavbar />
                <form className="deposit-form" onSubmit={this.depositMoney}>
                    <FormattedMessage id="balance.enter_balance" />
                    <br/>
                    <TextField
                        required
                        label="Serial No."
                        value={card_num}
                        inputProps={{"maxLength":16}}
                        placeholder="1234567890" 
                        name="card_num"
                        onChange={this.handleNumChange}
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        label="PIN"
                        // type="password"
                        value={card_code}
                        placeholder="1111111111" 
                        inputProps={{"maxLength":16}}
                        name="card_code" 
                        onChange={this.handleNumChange}
                        className={classes.textField}
                        // style={{"width": 100}}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        id="select-operator"
                        select
                        label="Operator"
                        className={classes.textField}
                        value={operator}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        inputProps={{"maxLength":7}}
                        onChange={this.handleDateChange}
                        helperText="Telecom Company"
                        variant="outlined"
                        margin="normal"
                        style={{"width": 125}}
                    >
                        {
                            operators.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <br/>
                    <TextField
                        id="select-amount"
                        select
                        label="Amount"
                        className={classes.textField}
                        value={amount}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        onChange={this.handleAmountChange}
                        helperText="Please Select Deposit Amount"
                        variant="outlined"
                        margin="normal"
                    >
                        {
                            [10000,20000,30000,50000,100000,200000,300000,500000,1000000].map(option => (
                                <MenuItem key={option} value={option}>
                                    {option + " VND"}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <div id="response-msg">
                        {
                            this.state.receive_response ? 
                            <p>{this.state.response_msg}</p> :
                            <br></br>
                        }
                    </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositScratchCard)));