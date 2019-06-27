import React, { Component } from 'react';
import axios from 'axios';
import { FormattedMessage, injectIntl } from 'react-intl';
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
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

class DepositSuccess extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waiting: true,
            msg: ""
        }
    }
    componentDidMount() {
        axios.get(API_URL + 'users/api/user/', config)
        .then(res => {
            this.setState({data: res.data});
        })
        .catch(err => {
            console.log("Error with authentication! Error: " + err);
        })
        
        if (window.location.search.indexOf("transactionId") === 1) {
            console.log("confirming payment with LINEpay servers");
            let qs = window.location.search.slice(1);
            let data = qs.split("&");
            let postData = {};
            let kv = data[0].split("=");
            postData[kv[0]] = kv[1];
            console.log(postData);


            // was a redirect 
            axios.post(
                API_URL + "accounting/api/linepay/confirm_payment",
                JSON.stringify(postData),
                config
            ).then(res => {
                console.log("backend response:");
                console.log(res);
                if (res.status === 200) {
                    if (res.data.returnCode !== "0000") {
                        alert("See error message");
                        this.setState(
                            {
                                success: false,
                                waiting: false,
                                msg: JSON.stringify(res.data)
                            }
                        )
                    }
                    else {
                        const body = JSON.stringify({
                            type : 'add',
                            username: this.state.data.username || "",
                            balance: res.data.info.payInfo[0].amount,
                        });
                        axios.post(API_URL + "users/api/addorwithdrawbalance/", body, config)
                        .then(res => {
                            if (res.data === 'Failed'){
                                this.setState({error: true});
                            } else if (res.data === 'The balance is not enough') {
                                alert("cannot withdraw this amount")
                            } else{
                                alert("your balance is updated")
                            }
                        });
                        this.setState(
                            {
                                success: true,
                                waiting: false,
                                msg: JSON.stringify(res.data)
                            }
                        )
                    }
                }
            });
        }
    }

    render() {
        const {success, waiting, msg} = this.state;
        return (
            <div>
                <TopNavbar />
                <div style={{textAlign: "center", alignContent: "center"}}>
                    {
                        waiting ? 
                        <p>Waiting...</p> :
                        <p>Done.</p>
                    }
                    <div>
                        <p>Result was:</p>
                        {
                            (success != false && success == true) ? 
                            <p>Success! {msg}</p> :
                            <p>Error: {msg}</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default (injectIntl(connect(mapStateToProps)(DepositSuccess)));