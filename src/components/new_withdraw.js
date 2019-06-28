import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hide_withdraw, show_deposit } from '../actions';
import { ReactComponent as CloseIcon } from '../assets/img/svg/red-close.svg';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios';
import { config } from '../util_config';
import { FormattedMessage, injectIntl } from 'react-intl';

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
      width: 330,
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

class New_Withdraw extends Component {

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
        event.preventDefault();
        
        const body = JSON.stringify({
            type : 'withdraw',
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
                this.props.hide_withdraw();
            }
        });
        
    }
    render(){
        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white',  minHeight: 400, width: 380}}>
                <CloseIcon 
                    style={{cursor: 'pointer', position: 'absolute', top: 15, left: 30, height: 15, width: 15, color: 'red'}}
                    onClick = { () => {
                        this.props.hide_withdraw();
                    }}
                />
                <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, color: 'black', paddingLeft: 60, paddingTop: 12}}> 
                    Withdraw
                </div>

                <div className='row' style={{height: 50}}>
                    <div 
                        style={{backgroundColor: 'black', height: 44, color: '#e4e4e4', width: 190, fontSize: 20, textAlign: 'center', paddingTop: 10, cursor: 'pointer'}}
                        onClick={() => {
                            this.props.hide_withdraw();
                            this.props.show_deposit();
                        }}
                    >
                        Deposit
                    </div>

                    <div style={{backgroundColor: 'black', height: 44, color: 'white', width: 190, fontSize: 20, textAlign: 'center', paddingTop: 10, borderBottom: '2px solid red', borderLeft: '1px solid #e4e4e4'}}>
                        Withdraw
                    </div>
                    
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                <form onSubmit={this.onFormSubmit} >
                
                    <div style={{textAlign: 'center', marginTop: 30}}> 
                        <TextField
                                className={classes.textField}
                                variant="outlined"
                                type={'text'}
                                value={this.state.balance}
                                onChange={this.onInputChange_balance}
                        />
                    </div>
                    

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
                        <button 
                            disabled = {this.state.button_disable}
                            style={{border: 'none', backgroundColor: 'black', color: 'white', width: 330, height: 50, marginLeft: 25}}
                            type="submit" 
                        > 
                            <FormattedMessage id="balance.submit" defaultMessage='Submit' />   
                        </button>
                    </div>
                    

                    


                </form>
            </div>
        )
    }
}

export default withStyles(styles)(connect(null, { hide_withdraw, show_deposit } )(New_Withdraw));