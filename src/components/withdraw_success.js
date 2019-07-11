import React, { Component } from 'react';
import axios from 'axios';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink} from 'react-router-dom';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/deposit.css';
import {authCheckState} from '../actions';



const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

class WithdrawSuccess extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waiting: true,
            msg: "",
            data: '',
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
    
    }
    

    render() {
        const {success, waiting, msg} = this.state;
        return (
            <div>
                <TopNavbar />
                <div style={{textAlign: "center", alignContent: "center"}}>
                    <div>
                        <h2>Payout success!</h2>
                        
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

export default (injectIntl(connect(mapStateToProps,{authCheckState})(WithdrawSuccess)));