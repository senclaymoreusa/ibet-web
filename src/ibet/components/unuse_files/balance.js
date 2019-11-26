import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../../util_config';
import { connect } from 'react-redux';

import TopNavbar from "../top_navbar";

import '../css/balance.css';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
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
  });


class Balance extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          balance: '',
          error: false,
          data: '',
          type: '',

          live_check_amount: false,

          button_disable: true,
        };

        this.onInputChange_balance          = this.onInputChange_balance.bind(this);
        this.onFormSubmit                   = this.onFormSubmit.bind(this);
    }
    
    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
          })
        const { type } = this.props.match.params;
        this.setState({type: type});

    }

    onInputChange_balance(event){
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({balance: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            }else{
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
    }

    onFormSubmit(event){
        const { formatMessage } = this.props.intl;
        let message = '';
        if (this.state.type === 'add') {
            message = formatMessage({ id: "balance.confirm" });
        } else {
            message = formatMessage({ id: "balance.withdrawconfirm" });
        }
        
        event.preventDefault();
        if (window.confirm( message + this.state.balance)){
            
            const body = JSON.stringify({
                type : this.state.type,
                username: this.state.data.username,
                balance: this.state.balance
            });
            axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
            .then(res => {
                if (res.data === 'Failed'){
                    this.setState({error: true});
                } else if (res.data === 'The balance is not enough') {
                    alert("cannot withdraw this amount")
                } else {
                    this.props.history.push("/profile");
                }
            });
        }
    }

    render(){

        const { classes } = this.props;

        return (
            <div>

                <TopNavbar />

                <form onSubmit={this.onFormSubmit} className='balance-form'>
                    
                    <div>
                        {this.state.type === 'add' ? 
                        <label><b>
                            <FormattedMessage id='balance.enter_balance' defaultMessage='Please enter the amount you want to add to your account' />
                        </b></label>
                        :
                        <label><b>
                            <FormattedMessage id='balance.withdraw_balance' defaultMessage='Please enter the amount you want to withdraw from your account' />
                        </b></label>
                        }
                            
                    </div>

                    <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.balance}
                            onChange={this.onInputChange_balance}
                    />
                    

                    {
                        this.state.live_check_amount && this.state.live_check_amount ? 
                        <div style={{color: 'red'}}> 
                            <FormattedMessage id="balance.error"  defaultMessage='The balance you entered is not valid' />
                        </div> :
                        <div>
                            <br />
                        </div>
                    }
                    

                    <div>
                        <Button 
                            disabled = {this.state.button_disable} 
                            type="submit" 
                            className="balance-submit-button"
                            variant="contained"
                            color="primary"
                        > 
                            <FormattedMessage id="balance.submit" defaultMessage='Submit' />   
                        </Button>
                    </div>

                    <br />

                    <Button 
                        onClick = {() =>  {
                            this.props.history.push('/profile')
                        }}
                        variant="contained"
                        color="secondary"
                    > 
                        <FormattedMessage id="profile.back" defaultMessage='Back' />
                    </Button>
                              

                </form>

                

                <br/>
                {
                    this.state.error && <div style = {{color: 'red'}}> <FormattedMessage  id="balance.error" defaultMessage='The balance you entered is not valid' /> </div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(Balance)));