import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { ReactComponent as Back } from '../assets/img/svg/back.svg';
import { hide_signup_phone, show_signup_contact, show_complete_registration, handle_signup_phone } from '../actions';
import { connect } from 'react-redux';

import Country_Info from './country_info';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

import TextField from '@material-ui/core/TextField';

import axios from 'axios'


const styles = theme => ({
    textField: {
      width: 400,
      height: 10,
    },

    cssOutlinedInput:{
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
        },
      
        "&$cssFocused $notchedOutline": {
            borderColor: "blue",
        },
        width: 420,
        height: 50,
    },

    cssFocused: {  },
    
    notchedOutline: {  },

    labelRoot: {
        fontSize: 15
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
            phone_code: this.props.signup_phone ? this.props.signup_phone.split('/')[0] : '',
            phone:      this.props.signup_phone ? this.props.signup_phone.split('/')[1] : '',
            all_country_name: Country_Info['Country_Info'],
            form_open: false,

            live_check_phone: false,


            button_disable: this.props.signup_phone ? false : true,
            error_18: false
        }
    }

    componentDidMount() {
        if (!this.props.signup_phone){
            axios.get('https://ipapi.co/json/')
            .then(res => {
            this.setState({
                phone_code: res.data.country_calling_code
                })
            })
        }
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

    onFormSubmit(event){
        event.preventDefault();

        this.props.handle_signup_phone(this.state.phone_code + '/' + this.state.phone)

        this.props.hide_signup_phone();
        this.props.show_complete_registration();
    }
    

    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white', minHeight: 650, width: 662}}> 
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='signup-title'>     
                        <Back 
                            style={{cursor: 'pointer', position: 'absolute', top: 12, left: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_phone();
                                this.props.show_signup_contact();
                            }}
                        />

                        <div style={{ paddingTop: 20}}> 
                            OPEN ACCOUNT
                        </div>

                        <Close 
                            style={{cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20}}
                            onClick = { () => {
                               this.props.hide_signup_phone()
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30, textAlign:  'center'}}>
                        <span style={{color: '#e4e4e4'}} > ____________________  1 </span>  <span style={{color: '#e4e4e4'}}> ____________________  2 </span >  <span  style={{fontWeight: 600}}> ____________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 70}}> 
                        <FormattedMessage  id="signup.contact.title" defaultMessage='Contact details' />
                    </div>

                    <div style={{textAlign: 'center'}}> 
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
                            label="PHONE NUMBER"
                            margin="normal"
                            onChange={this.onInputChange_phone.bind(this)}
                            value={this.state.phone}
                            variant="outlined"
                            style={{marginTop: 20}}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                    
                                }
                            }}

                            InputLabelProps={{
                                
                                    FormLabelClasses: {
                                      root: classes.labelRoot
                                    }
                                
                            }}
                        />
                    </div>

                    {this.state.live_check_phone && <div style={{color: 'red', marginLeft: 180}}> <FormattedMessage  id="error.phone" defaultMessage='Phone number not valid' /> </div>}

                    <div style={{color: '#747175', fontSize: 15, fontWeight: 600, marginTop: 10, marginLeft: 80}}> 
                        <FormattedMessage  id="signup.detail.sms" defaultMessage="We'll send you an SMS to confirm" />
                    </div>

                    <div style={{textAlign: 'center'}}> 
                        <button 
                            disabled = {this.state.button_disable}
                            style={{backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                            type='submit'
                        > 
                            <div >  
                                <FormattedMessage  id="signup.confirm" defaultMessage="CONFIRM" />
                            </div>
                        </button>
                    </div>

                    <div style={{color: '#747175', fontSize: 12, marginTop: 10, textAlign: 'center'}}> By signing up you agree to ibet's <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/terms_conditions')}> terms and conditions </b> and</div>
                    <div style={{color: '#747175', fontSize: 12, textAlign: 'center'}}> confirm you've read and understood the <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/privacy_policy')}> privacy </b> policy</div>

                    { this.state.error_18 && <div style={{color: 'red'}}> <FormattedMessage  id="signup.phone.over18" defaultMessage="You have to confirm you are over 18:" /> </div>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_phone: state.general.signup_phone,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{ hide_signup_phone, show_signup_contact, show_complete_registration, handle_signup_phone })(Signup_Phone)));