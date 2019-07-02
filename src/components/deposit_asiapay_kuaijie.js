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
import { Input } from 'antd';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
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
      marginLeft: "30%",
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




class DepositAsiapayKuaiJie extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    handleChange(event) {
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

    render() {
        return (
            <div>
                <TopNavbar />
                <form className="deposit-form">
                    <FormattedMessage id="balance.enter_balance" />
                    <br/>
                    <TextField
                        type="text" 
                        value={''}
                        placeholder="Enter Amount" 
                        name="deposit_amount" 
                        onChange={this.handleChange}
                        className="input-deposit-amount"
                    />
                </form>
                <div className="deposit-form" id="submit-amount">
                    {/* <p>Select payment method:</p> */}
                    <Button variant="contained" value="Deposit">
                        Deposit
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