import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { ReactComponent as Back } from '../assets/img/svg/back.svg';
import { hide_signup_phone, show_signup_contact } from '../actions';
import { connect } from 'react-redux';

import Country_Info from './country_info';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios'


const styles = theme => ({
    textField: {
      width: 400,
      height: 10,
    }
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
      width: 50,
      height: 25,
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


class Signup_Phone extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phone_code: '',
            phone: '',
            all_country_name: Country_Info['Country_Info'],
            form_open: false,

            live_check_phone: false,

            checkbox1: false,
            checkbox2: false,
            checkbox3: false,

            button_disable:  true,
            error_18: false
        }
    }

    componentDidMount() {

        axios.get('https://ipapi.co/json/')
        .then(res => {
        this.setState({
            phone_code: res.data.country_calling_code
          })
        })
    }

    handleForm(){
        this.setState({form_open: !this.state.form_open})
    }

    onInputChange_phonecode(event){
        this.setState({phone_code: event.target.value});
    }

    async onInputChange_phone(event){
        if ( !event.target.value.match(/^[0-9]+$/) || !(event.target.value.length <= 20 && event.target.value.length >= 6)){
            this.setState({live_check_phone: true})
        }else{
            this.setState({live_check_phone: false, button_disable: false})
        }
        await this.setState({phone: event.target.value})
    }

    onInputChange_checkbox1(){
        this.setState({checkbox1: !this.state.checkbox1})
    }

    onInputChange_checkbox2(){
        this.setState({checkbox2: !this.state.checkbox2})
    }

    onInputChange_checkbox3(){
        this.setState({checkbox3: !this.state.checkbox3})
    }

    onFormSubmit(event){
        event.preventDefault();

        if (!this.state.checkbox1){
            this.setState({error_18: true})
        }
        else{
            this.setState({error_18: false})
            alert('Success')
        }

    }
    

    render(){

        const { classes } = this.props;

        const { formatMessage } = this.props.intl;

        const message1 = formatMessage({ id: "signup.phone.message1" });
        const message2 = formatMessage({ id: "signup.phone.message2" });
        const message2_5 = formatMessage({ id: "signup.phone.message2.5" });
        const message3 = formatMessage({ id: "signup.phone.message3" });

        return (
            <div> 
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='signup-title'>     
                        <Back 
                            style={{cursor: 'pointer', marginTop: 12, marginLeft: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_phone();
                                this.props.show_signup_contact();
                            }}
                        />

                        <div style={{marginLeft: 270 , marginTop: 15}}> 
                            <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                        </div>

                        <Close 
                            style={{cursor: 'pointer', marginLeft: 270, marginTop: 5, height: 40, width: 20}}
                            onClick = { () => {
                               this.props.hide_signup_phone()
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30}}>
                        <span style={{color: '#e4e4e4'}} > ____________________  1 </span>  <span style={{color: '#e4e4e4'}}> ____________________  2 </span >  <span  style={{fontWeight: 600}}> ____________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, paddingRight: 360}}> 
                        <FormattedMessage  id="signup.contact.title" defaultMessage='Contact details' />
                    </div>

                    <FormControl style={{marginTop: 20}} >
                        <Select
                            onClick={this.handleForm.bind(this)}
                            value={this.state.phone_code}
                            onChange={this.onInputChange_phonecode.bind(this)}
                            input={<BootstrapInput name="country" id="country-customized-select" />}
                        >
                            {this.state.all_country_name.map(item => (
                            <MenuItem key={item.name} value={item.code} >
                                {
                                    this.state.form_open ?
                                    <div> {item.name} {item.code} </div>
                                    :
                                    <div> {item.code} </div>
                                }
                                
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <TextField
                        InputProps={{ classes: { input: classes.textField } }}
                        label="PHONE NUMBER"
                        margin="normal"
                        onChange={this.onInputChange_phone.bind(this)}
                        value={this.state.phone}
                        variant="outlined"
                        style={{marginTop: 20}}
                    />

                    {this.state.live_check_phone && <div style={{color: 'red'}}> <FormattedMessage  id="error.phone" defaultMessage='Phone number not valid' /> </div>}

                    <div style={{color: '#747175', fontSize: 15, fontWeight: 600, marginTop: 10, paddingRight: 300}}> 
                        <FormattedMessage  id="signup.detail.sms" defaultMessage="We'll send you an SMS to confirm" />
                    </div>

                    <div style={{color: '#747175', fontSize: 19, fontWeight: 300, marginTop: 20, marginRight: 300}}> 
                        <FormattedMessage  id="signup.detail.agree" defaultMessage="I agree to:" />
                    </div>

                    <div> 
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checkbox1}
                            onChange={this.onInputChange_checkbox1.bind(this)}
                            />
                        }
                        label = {message1}
                        />
                    </div>

                    <div style={{marginRight: 10}}> 
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checkbox2}
                            onChange={this.onInputChange_checkbox2.bind(this)}
                            />
                        }
                        label = {message2}
                        />
                        <br/>
                        {message2_5}

                    </div>

                    <div style={{marginLeft: 10}}>
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checkbox3}
                            onChange={this.onInputChange_checkbox3.bind(this)}
                            />
                        }
                        label = {message3}
                        />
                    </div>

                    <button 
                        disabled = {this.state.button_disable}
                        style={{backgroundColor: 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer'}}
                        type='submit'
                    > 
                        <div >  
                            Register
                        </div>
                    </button>

                    <div style={{color: '#747175', fontSize: 12, marginTop: 10}}> By signing up you agree to ibet's <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/terms_conditions')}> terms and conditions </b> and</div>
                    <div style={{color: '#747175', fontSize: 12}}> confirm you've read and understood the <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/privacy_policy')}> privacy </b> policy</div>

                    { this.state.error_18 && <div style={{color: 'red'}}> <FormattedMessage  id="signup.phone.over18" defaultMessage="You have to confirm you are over 18:" /> </div>}
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(injectIntl(connect(null,{ hide_signup_phone, show_signup_contact })(Signup_Phone)));