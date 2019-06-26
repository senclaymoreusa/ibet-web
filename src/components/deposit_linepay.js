import React, { Component } from 'react';
import axios from 'axios';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import { authCheckState } from "../actions/auth";
import '../css/deposit.css';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;
console.log("Process.env is");
console.log(process.env);


const CLIENT = {
    sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
    production: 'xxxXXX',
  };

const 
    LINEPAY_LOGO_URL = "https://scdn.line-apps.com/linepay/partner/images/logo/linepay_logo_119x39_v3.png",
    MIN_DEPOSIT = 200,
    MAX_DEPOSIT = 30000,
    CURRENCY = "THB"

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        font: "bolder",
        fontSize: "20px",
        // margin: "25px",
        // padding: "25px",
        // color: "black"
    },
    input: {
        display: 'none',
    },

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

function  ContainedButtons(buttonProps) {
    return (
        <Button  variant="contained" color={buttonProps.color} className={buttonProps.button} onClick={buttonProps.onClick}>
            {"$"+buttonProps.amount}
        </Button>
    );
}


class DepositPage extends Component {
    constructor(props){
        super(props);

        this.state = {
          amount: '',
          amount_display: '',
          currency: '',
          error: false,
          data: '',
          type: '',
          live_check_amount: false,
          button_disable: true
        };

    }

    componentDidMount() {
        /*
         * Check if there is a user logged in
         */
        this.props.authCheckState()
        .then(res => {
            console.log("Auth check state result: " + res)
            if (res === 1) {
                console.log(this.props);
                window.location.href = "/";
                return;
            }
        })
        .catch(err => {
            console.log("ERROR!!! " + err)
        });

        console.log(this.props.history);
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
          })
          .catch(err => {
              console.log("Error with authentication! Error: " + err);
          })

        const { type } = this.props.match.params;
    }

    render() {
        const { classes } = this.props; // props is loaded with state, style, and authCheckState ... it appears that it's loaded with everything in constructor + what is exported
        let amount = this.state.amount; // this.state.balance doesn't exist?
        let user = this.state.data.username; // this.state.data is initialized to a string not a dictionary
        
        return (
            <div>
                <TopNavbar />
                <InputForm className="input-form" {...classes} deposit_amount="" deposit_channel=""/>
            </div>
            
        )
    }
    
}

// form / input component for transfer and deposit money
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deposit_amount: "",
            currency: "",
            live_check_amount: false,
            button_disable: true,

            error: false,
            error_msg: "",
            // line_pay_error: false,
            // line_pay_error_msg: "",
        }

        // class methods bound to the defined class method, (allows access to this.state after binding)
        this.handleChange = this.handleChange.bind(this);
    }

    // onClick method sends a post request to deposit channel to make a deposit
    handleClick = (depositChannel, apiRoute) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("no token -- user is not logged in");
        }
        config.headers["Authorization"] = `Token ${token}`;

        let postData = {
            amount: this.state.deposit_amount
        }
        axios.post(
            API_URL + "accounting/api/linepay/reserve_payment",
            JSON.stringify(postData),
            config
        ).then(
            response => { 
                console.log(response.data);
                if (response.data && response.data.returnCode && response.data.returnCode === "0000") {
                    window.open(response.data.info.paymentUrl.web);
                }
                else {
                    this.setState({error: true});
                    if (response.data.returnMessage) this.setState({error_msg: response.data.returnMessage});
                    else this.setState({error_msg: response.data.errorMsg});

                }
            }
        );
    }
    
    // user input validation
    handleChange(event){
        // console.log("there was a change to the component")
        event.preventDefault();
        // event.persist();
        // console.log(typeof this.state.deposit_amount);
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({[event.target.name]: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || !event.target.value || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            } else {
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }

    // button functions
    selectAmount(amt) {
        this.setState({
            deposit_amount: amt,
            live_check_amount: false,
            button_disable: false
        });
        console.log(typeof this.state.deposit_amount);
    }

    renderAmtButton(amt, color) {
        return (
            <ContainedButtons {...this.props} color={color || "default"} amount={amt} onClick={() => this.selectAmount(amt)} classes={{button: "ContainedButtons-button-33", input: "ContainedButtons-input-34"}} />
        )
    }

    render() {
        const {deposit_amount: depositAmount, error: showError, error_msg: errorMsg} = this.state;
        const {button_disable, live_check_amount} = this.state;

        return (
            <div>
                <form className="deposit-form" id="deposit_form">
                    <p>How much do you want to deposit? {depositAmount}</p>                        
                    <input
                        type="text"
                        value={depositAmount || ''}
                        placeholder="Enter Amount" 
                        name="deposit_amount" 
                        onChange={this.handleChange}
                        className="input-deposit-amount"
                    />
                    <br></br>
                    <FormattedMessage className="min-max" id="deposit_prompt" defaultMessage={"Min: " + MIN_DEPOSIT + " " + CURRENCY}/>
                    <FormattedMessage className="min-max" id="deposit_prompt" defaultMessage={"Max: " + MAX_DEPOSIT + " " + CURRENCY}/>
                    {
                        live_check_amount ? 
                        <div style={{color: 'red'}}> 
                            <FormattedMessage id="amount.error"  defaultMessage={"Invalid deposit amount!"}/>
                        </div> 
                        :
                        <div></div>
                    }
                    {
                        showError ? 
                        <div style={{color: 'red'}}> 
                        <FormattedMessage id="amount.error"  defaultMessage={"Error: " + errorMsg}/>
                        </div> 
                        :
                        <div></div>
                    }
                </form>
                <div id="quick-deposit" className="deposit-form">
                    {this.renderAmtButton("25")}
                    {this.renderAmtButton("50", "primary")}
                    {this.renderAmtButton("100", "primary")}
                    {this.renderAmtButton("250", "secondary")}
                    {this.renderAmtButton("500", "secondary")}
                </div>
                <div className="deposit-form" id="submit-amount">
                    <p>Select payment method:</p>
                    <img 
                        id="LINElogo" 
                        type="image" 
                        onClick={button_disable ? () => {} : this.handleClick}
                        style={button_disable ? {} : {cursor: "pointer"}}  
                        src={LINEPAY_LOGO_URL} 
                        alt="LINEpay logo"
                    />
                </div>
            </div>
        )
    }
}


ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    console.log("State language: ");
    console.log(state.language);
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositPage)));