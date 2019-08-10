import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import DepositNavBar from "./profile/banking/deposit/deposit_types/deposit_navbar";
import '../css/deposit.css';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import {  authCheckState } from '../actions';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const CLIENT = {
    sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
    production: 'xxxXXX',
};

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
});

class Deposit extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            live_check_amount: false,
            button_disable: true,
        };
    }
    
    componentDidMount() {
        this.props.authCheckState()
        .then(res => {
            if (res === 1) {
                window.location.href = ("/");
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
    
    render() {
        const { classes } = this.props;
        let amount = this.state.balance;
        let user = this.state.data.username;
        
        return (
            <div>
                <TopNavbar />
                <div>
                    <DepositNavBar />
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
    
export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Deposit)));