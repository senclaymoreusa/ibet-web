import React from 'react';
import { connect } from 'react-redux';
import { show_signup_contact, hide_signup_contact, show_signup_detail, show_signup_phone } from '../actions';
import axios from 'axios'
import { getNames } from 'country-list';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { ReactComponent as Back } from '../assets/img/svg/back.svg';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
    textField: {
      width: 530,
    },

    textField2: {
      width: 320,
    },

    textField3: {
      width: 150,
    },

    textFieldDOB:{
        width: 70,
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
      width: 490,
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

class Signup_Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            address: '',
            city: '',
            zipcode: '',
            country: '',
            all_country_name: [],

            live_check_address: false,
            live_check_city: false,
            live_check_zipcode: false,

            button_disable: true
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

    async onInputChange_address(event){
        if (!event.target.value.match(/^[a-zA-Z0-9.\s]+$/)){
            this.setState({live_check_address: true, button_disable: true})
        }else{
            this.setState({live_check_address: false})
        }
        await this.setState({address: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_city(event){
        if (!event.target.value.match(/^[a-zA-Z\s]+$/)){
          this.setState({live_check_city: true, button_disable: true})
        }else{
          this.setState({live_check_city: false})
        }
        await this.setState({city: event.target.value});
        this.check_button_disable()
    }

    async onInputChange_zipcode(event){
        if (!event.target.value.match(/^[0-9]+$/)){
            this.setState({live_check_zipcode: true, button_disable: true})
        }else{
            this.setState({live_check_zipcode: false})
        }
        await this.setState({zipcode: event.target.value});
        this.check_button_disable()
    }

    onInputChange_country(event){
        this.setState({country: event.target.value});
    }

    check_button_disable(){
        if (this.state.address && this.state.city && this.state.country && this.state.zipcode && 
            !this.state.live_check_address && !this.state.live_check_city && !this.state.live_check_zipcode){
                this.setState({button_disable: false})
            }
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.hide_signup_contact();
        this.props.show_signup_phone();

    }

    render(){

        const { classes } = this.props;

        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>

                    <div className='signup-title'>     

                        <Back 
                            style={{cursor: 'pointer', marginTop: 12, marginLeft: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_contact();
                                this.props.show_signup_detail();
                            }}
                        />

                        <div style={{marginLeft: 270 , marginTop: 15}}> 
                            <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                        </div>

                        <Close 
                            style={{cursor: 'pointer', marginLeft: 270, marginTop: 5, height: 40, width: 20}}
                            onClick = { () => {
                                this.props.hide_signup_contact();
                            }}
                        />

                    </div>

                    <div style={{marginTop: 30}}>
                        <span style={{color: '#e4e4e4'}} > ____________________  1 </span>  <span style={{color: '#e4e4e4'}}> ____________________  2 </span >  <span  style={{fontWeight: 600}}> ____________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, paddingRight: 360}}> 
                        <FormattedMessage  id="signup.contact.title" defaultMessage='Contact details' />
                    </div>

                    <div style={{color: '#e4e4e4'}}>
                        __________________________________________________________________
                    </div>

                    <TextField
                        label="ADDRESS"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.address}
                        onChange={this.onInputChange_address.bind(this)}
                    />

                    {this.state.live_check_address && <div style={{color: 'red'}}> <FormattedMessage  id="error.address" defaultMessage='Address not valid' /> </div>}

                    <div className='row' style={{marginLeft: 85}}> 
 
                        <div> 
                            <TextField
                                className={classes.textField2}
                                label="CITY"
                                margin="normal"
                                onChange={this.onInputChange_city.bind(this)}
                                value={this.state.city}
                                variant="outlined"
                                style={{marginRight: 60}}
                            />

                            {this.state.live_check_city && <div style={{color: 'red'}}> <FormattedMessage  id="error.city" defaultMessage='City not valid' /> </div>}
                        </div>

                        <div> 
                            <TextField
                                className={classes.textField3}
                                label="ZIPCODE"
                                margin="normal"
                                onChange={this.onInputChange_zipcode.bind(this)}
                                value={this.state.zipcode}
                                variant="outlined"
                            />

                            {this.state.live_check_zipcode && <div style={{color: 'red'}}> <FormattedMessage  id="error.zipcode" defaultMessage='Zipcode not valid' /> </div>}

                        </div>

                    </div>

                    <FormControl style={{marginTop: 20}}>
                        <Select
                            className={classes.textField}
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

export default withStyles(styles)(connect(null,{ show_signup_contact, hide_signup_contact, show_signup_detail, show_signup_phone })(Signup_Contact));