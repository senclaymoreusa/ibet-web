import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { hide_signup_detail } from '../actions';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import { getNames } from 'country-list';

import { config } from "../util_config";

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    textField: {
      width: 300,
    },

    textFieldDOB:{
        width: 38,
    },

    menu: {
      width: 200,
    },

});

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 200,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
  
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  

class Signup_Detail extends React.Component {
    constructor(props){
        super(props);

        this.textInput_1 = React.createRef();
        this.textInput_2 = React.createRef();

        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            month: '',
            day: '',
            year: '',
            DOB: '',
            country: '',
            city: '',
            state: '',
            zipcode: '',
            street_address_1: '',
            street_address_2: '',

            live_check_username: false,
            live_check_firstname: false,
            live_check_lastname: false,
            live_check_dob: false,
            live_check_city: false,
            live_check_state: false,
            live_check_zipcode: false,

            button_disable: true,

            username_error: false,

            all_country_name: []
        }
    }

    componentDidMount() {
        this.setState({all_country_name: getNames()})

        axios.get('https://ipapi.co/json/')
        .then(res => {
        this.setState({
            country: res.data.country_name
          })
        })
    }

    async onInputChange_username(event){
        if (!event.target.value.match(/^[0-9a-zA-Z]+$/)){
          this.setState({live_check_username: true, button_disable: true})
        }else{
          this.setState({live_check_username: false})
        }
        await this.setState({username: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_first_name(event){
        if (!event.target.value.match(/^[a-zA-Z]+$/)){
          this.setState({live_check_firstname: true, button_disable: true,})
        }else{
          this.setState({live_check_firstname: false})
        }
        await this.setState({first_name: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_last_name(event){
        if (!event.target.value.match(/^[a-zA-Z]+$/)){
          this.setState({live_check_lastname: true, button_disable: true,})
        }else{
          this.setState({live_check_lastname: false})
        }
        await this.setState({last_name: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_month(event){
        if (event.target.value.length <= 2){
            await this.setState({month: event.target.value});
        }
        
        if (![1,2,3,4,5,6,7,8,9,10,11,12].includes(Number(this.state.month))){
          this.setState({live_check_dob: true, button_disable: true,})
        }else{
          this.setState({live_check_dob: false})
        }
        
        if (this.state.month.length === 2 && !this.state.live_check_dob){
            this.focusTextInput_1()
        }
        this.check_button_disable()
    }

    async onInputChange_day(event){
        if (event.target.value.length <= 2){
            await this.setState({day: event.target.value});
        }
        
        if (![1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].includes(Number(this.state.day))){
          this.setState({live_check_dob: true, button_disable: true,})
        }else{
          this.setState({live_check_dob: false})
        }
        
        if (this.state.day.length === 2 && !this.state.live_check_dob){
            this.focusTextInput_2()
        }
        this.check_button_disable()
    }

    async onInputChange_year(event){
        var today = new Date();
        var cur_year = today.getFullYear();

        if (event.target.value.length <= 4){
            await this.setState({year: Number(event.target.value)});
        }
        
        if (!(Number(cur_year) - 120 <= Number(this.state.year) &&  Number(this.state.year) <= Number(cur_year))){
          this.setState({live_check_dob: true, button_disable: true,})
        }else{
          this.setState({live_check_dob: false})
        }
        
        this.check_button_disable()
    }

    focusTextInput_1() {
        this.textInput_1.current.focus();
    }

    focusTextInput_2() {
        this.textInput_2.current.focus();
    }

    onInputChange_country(event){
        this.setState({country: event.target.value});
    }

    onInputChange_street_address_1(event){
        this.setState({street_address_1: event.target.value});
    }
    
    onInputChange_street_address_2(event){
        this.setState({street_address_2: event.target.value});
    }

    async onInputChange_city(event){
        if (!event.target.value.match(/^[a-zA-Z\s]+$/)){
          this.setState({live_check_city: true, button_disable: true,})
        }else{
          this.setState({live_check_city: false})
        }
        await this.setState({city: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_state(event){
        if (!event.target.value.match(/^[a-zA-Z]+$/)){
          this.setState({live_check_state: true, button_disable: true,})
        }else{
          this.setState({live_check_state: false})
        }
        await this.setState({state: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_zipcode(event){
        if (!event.target.value.match(/^[0-9]+$/)){
            this.setState({live_check_zipcode: true, button_disable: true,})
        }else{
            this.setState({live_check_zipcode: false})
        }
        await this.setState({zipcode: event.target.value});
        this.check_button_disable()
    }

    check_button_disable(){
        if(this.state.username && this.state.first_name && this.state.last_name && this.state.zipcode && this.state.country && this.state.year && this.state.day && this.state.month && this.state.city &&
            !this.state.live_check_username && !this.state.live_check_firstname && !this.state.live_check_lastname && !this.state.live_check_dob && !this.state.live_check_city && !this.state.live_check_state && !this.state.live_check_zipcode){
            this.setState({button_disable: false})
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        axios.get(API_URL + `users/api/checkusernameexist/?username=${this.state.username}`, config)
        .then(res => {
            if (res.data === 'Exist'){
                this.setState({username_error: true})
            }
            else{
                this.setState({username_error: false})
                alert('success')
            }
        })
    }



    render(){

        const { classes } = this.props;

        return (
            <div> 
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='signup-title'>     
                        <div style={{marginLeft: 330 , marginTop: 15}}> 
                            <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                        </div>

                        <Close 
                            style={{cursor: 'pointer', marginLeft: 250, marginTop: 15}}
                            onClick = { () => {
                                this.props.hide_signup_detail();
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30}}>
                        <span style={{color: '#e4e4e4'}} > __________  1 </span>  <span style={{fontWeight: 600}}> __________  2 </span >  <span style={{color: '#e4e4e4'}}> __________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20}}> 
                        <FormattedMessage  id="signup.detail.personal" defaultMessage='Personal Details' />
                    </div>

                    <div style={{color: '#e4e4e4'}}>
                        __________________________________________________________________
                    </div>
 
                    <TextField
                        label="USER NAME"
                        className={classes.textField}
                        type="username"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onInputChange_username.bind(this)}
                    />

                    {this.state.live_check_username && <div style={{color: 'red'}}> <FormattedMessage  id="error.username" defaultMessage='Username not valid' /> </div>}
                    
                    {this.state.username_error && <div style={{color: 'red'}}> <FormattedMessage  id="signup.detail.usernametaken" defaultMessage='This username is already in use' /> </div>}

                    <div style={{color: '#e4e4e4', fontSize: 15}}> 
                        <FormattedMessage  id="signup.detail.loginmessage" defaultMessage='This is used to log in. Limit 15 characters' />
                    </div>

                    <div> 
                        <TextField
                            id="standard-name"
                            label="FIRST NAME"
                            className={classes.textField}
                            type="username"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_first_name.bind(this)}
                        />
                    </div>

                    {this.state.live_check_firstname && <div style={{color: 'red'}}> <FormattedMessage  id="error.firstname" defaultMessage='First name not valid' /> </div>}

                    <div> 
                        <TextField
                            label="LAST NAME"
                            className={classes.textField}
                            type="username"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_last_name.bind(this)}
                        />
                    </div>

                    {this.state.live_check_lastname && <div style={{color: 'red'}}> <FormattedMessage  id="error.lastname" defaultMessage='Last name not valid' /> </div>}
 
                    <div style={{ fontSize: 15, fontWeight: 300}}> 
                        <FormattedMessage  id="signup.detail.dob" defaultMessage='DATE OF BIRTH' />
                    </div>

                    <TextField
                        className={classes.textFieldDOB}
                        label="MM"
                        type="username"
                        margin="normal"
                        onChange={this.onInputChange_month.bind(this)}
                        value={this.state.month}
                    />

                    <TextField
                        className={classes.textFieldDOB}
                        label="DD"
                        type="username"
                        margin="normal"
                        onChange={this.onInputChange_day.bind(this)}
                        style={{marginLeft: 20}}
                        inputRef={this.textInput_1}
                        value={this.state.day}
                    />

                    <TextField
                        className={classes.textFieldDOB}
                        label="YYYY"
                        type="username"
                        margin="normal"
                        onChange={this.onInputChange_year.bind(this)}
                        style={{marginLeft: 20}}
                        inputRef={this.textInput_2}
                        value={this.state.year}
                    />

                    {this.state.live_check_dob && <div style={{color: 'red'}}> <FormattedMessage  id="error.dateofbirth" defaultMessage='Date of birth not valid' /> </div>}

                    <div style={{ fontSize: 25, fontWeight: 600, color: 'red', marginTop: 30}}> 
                        <FormattedMessage  id="signup.detail.address" defaultMessage='Address' />
                    </div>

                    <div style={{color: '#e4e4e4'}}>
                        __________________________________________________________________
                    </div>

                    <FormControl className={classes.margin}>
                        <Select
                            value={this.state.country}
                            onChange={this.onInputChange_country.bind(this)}
                            input={<BootstrapInput name="country" id="country-customized-select" />}
                        >
                            {this.state.all_country_name.map(name => (
                            <MenuItem key={name} value={name} >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <br/>

                    <TextField
                        className={classes.textField}
                        label="ADDRESS LINE 1"
                        margin="normal"
                        onChange={this.onInputChange_street_address_1.bind(this)}
                        value={this.state.street_address_1}
                        variant="outlined"
                    />

                    <br/>

                    <TextField
                        className={classes.textField}
                        label="ADDRESS LINE 2"
                        margin="normal"
                        onChange={this.onInputChange_street_address_2.bind(this)}
                        value={this.state.street_address_2}
                        variant="outlined"
                    />

                    <br/>

                    <TextField
                        className={classes.textField}
                        label="CITY"
                        margin="normal"
                        onChange={this.onInputChange_city.bind(this)}
                        value={this.state.city}
                        variant="outlined"
                    />

                    {this.state.live_check_city && <div style={{color: 'red'}}> <FormattedMessage  id="error.city" defaultMessage='City not valid' /> </div>}

                    <br/>

                    <TextField
                        className={classes.textField}
                        label="STATE"
                        margin="normal"
                        onChange={this.onInputChange_state.bind(this)}
                        value={this.state.state}
                        variant="outlined"
                    />

                    {this.state.live_check_state && <div style={{color: 'red'}}> <FormattedMessage  id="error.state" defaultMessage='State not valid' /> </div>}  

                    <br/>

                    <TextField
                        className={classes.textField}
                        label="ZIPCODE"
                        margin="normal"
                        onChange={this.onInputChange_zipcode.bind(this)}
                        value={this.state.zipcode}
                        variant="outlined"
                    />

                    {this.state.live_check_zipcode && <div style={{color: 'red'}}> <FormattedMessage  id="error.zipcode" defaultMessage='Zipcode not valid' /> </div>}

                    <br />

                    <button 
                        disabled = {this.state.button_disable}
                        style={{backgroundColor: 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer'}}
                        type='submit'
                    > 
                        <div >  
                            Continue
                        </div>
                    </button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(connect(null,{ hide_signup_detail })(Signup_Detail));