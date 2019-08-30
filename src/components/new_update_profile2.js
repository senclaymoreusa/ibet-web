import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { hide_update_profile, show_user_profile, authCheckState } from '../actions';
import { connect } from 'react-redux';
import { config } from '../util_config';
import axios from 'axios'
import { getNames } from 'country-list';
import TopNavbar from "./top_navbar";
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    textField: {
      width: 330,
      backgroundColor: 'white'
    },

    textField2: {
        width: 80,
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
    },

    textField3: {
        width: 150,
        backgroundColor: 'white',
        textAlign: 'center'
    },

    cssOutlinedInput:{
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
          },
      
          "&$cssFocused $notchedOutline": {
            borderColor: "blue",
          }
    },
    cssFocused: {  },

    notchedOutline: {  },
});

class NewUpdateProfile extends Component {

    constructor(props){
        super(props);

        this.state = {
            user_data: '',

            first_name: '',
            last_name: '',
            month: '',
            day: '',
            year: '',
            address: '',
            city: '',
            zipcode: '',
            country: '',

            live_check_firstname: false,
            live_check_lastname: false,
            live_check_dob: false,
            live_check_address: false,
            live_check_city: false,
            live_check_zipcode: false,
            live_check_email: false,
            live_check_phone: false,

            button_disable: false,

            email_exist: false

        }
    }

    componentDidMount() {

        this.props.authCheckState()
       .then(res => {
          if (res === 1) {
            this.props.history.push('/'); 
            window.location.reload()
        }})

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        this.setState({all_country_name: getNames()})

        axios.get(API_URL + 'users/api/user/', config)
        .then(res => {
            this.setState({
                user_data: res.data,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                month: res.data.date_of_birth.split('/')[0],
                day: res.data.date_of_birth.split('/')[1],
                year: res.data.date_of_birth.split('/')[2],
                address: res.data.street_address_1,
                city: res.data.city,
                zipcode: res.data.zipcode,
                country: res.data.country,
                phone: res.data.phone.slice(1),
                email: res.data.email
            });
        })
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
        this.check_button_disable()
    }

    async onInputChange_year(event){
        var today = new Date();
        var cur_year = today.getFullYear();

        if (event.target.value.length <= 4){
            await this.setState({year: event.target.value});
        }
        
        if (!(Number(cur_year) - 120 <= Number(this.state.year) &&  Number(this.state.year) <= Number(cur_year))){
          this.setState({live_check_dob: true, button_disable: true,})
        }else{
          this.setState({live_check_dob: false})
        }
        
        this.check_button_disable()
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
        if (!this.state.live_check_firstname && 
            !this.state.live_check_lastname && 
            !this.state.live_check_address && 
            !this.state.live_check_dob && 
            !this.state.live_check_city && 
            !this.state.live_check_zipcode &&
            !this.state.live_check_email &&
            !this.state.live_check_phone &&
            this.state.first_name && 
            this.state.last_name && 
            this.state.address && 
            this.state.month && 
            this.state.day && 
            this.state.year && 
            this.state.zipcode && 
            this.state.city &&
            this.state.email &&
            this.state.phone
        ){
            this.setState({button_disable: false})
        }
    }

    handleForm(){
        this.setState({form_open: !this.state.form_open})
    }

    async onInputChange_phone(event){
        if ( !event.target.value.match(/^[0-9]+$/) || !(event.target.value.length <= 20 && event.target.value.length >= 6)){
            this.setState({live_check_phone: true})
        }else{
            this.setState({live_check_phone: false, button_disable: false})
        }
        await this.setState({phone: event.target.value})
    }

    async onInputChange_email(event){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)){
          this.setState({live_check_email: true, button_disable: true,})
        }else{
          this.setState({live_check_email: false, email_exist: false})
        }
        await this.setState({email: event.target.value});
        this.check_button_disable()
    }

    onFormSubmit(event){
        event.preventDefault();

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + `users/api/checkemailexist/?email=${this.state.email}`, config)
        .then(res => {
            if (this.state.email === this.state.user_data.email){
                axios.put(API_URL + 'users/api/user/', {
                    first_name:         this.state.first_name,
                    last_name:          this.state.last_name,
                    date_of_birth:      this.state.month + '/' + this.state.day + '/' + this.state.year,
                    street_address_1:   this.state.address,
                    city:               this.state.city,
                    zipcode:            this.state.zipcode,
                    country:            this.state.country,
                    email:              this.state.email,
                    phone:              '+' + this.state.phone,
        
                }, config)
                    .then((res) => {
                        this.props.history.push('/profile/')
                    })
            }
        }).catch(err => {
            this.setState({email_exist: true})
        })
    }

    render(){

        const { classes } = this.props;

        return (
            <div >

                <TopNavbar />

                <form onSubmit={this.onFormSubmit.bind(this)}>

                    <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, color: 'black', paddingLeft: 60, paddingTop: 12}}> 
                        <FormattedMessage id="new_update_profile.title" defaultMessage='Edit Profile' />
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30}}> 
                        <FormattedMessage  id="signup.contact.title" defaultMessage='Contact details' />
                    </div>

                    <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                        _________________________________________
                    </div>

                    <div style={{ marginLeft: 30, marginTop: 5 }}>
                        <FormattedMessage  id="signup.detail.address" defaultMessage='Address' />
                    </div>

                    <div style={{textAlign: 'center', marginTop: 5}}> 
                        <TextField
                            className={classes.textField}
                            variant="outlined"
                            type='text'
                            value={this.state.address}
                            onChange={this.onInputChange_address.bind(this)}
                        />
                    </div>

                    {this.state.live_check_address && <div style={{color: 'red', marginLeft: 30}}> <FormattedMessage  id="error.address" defaultMessage='Address not valid' /> </div>}

                    <div className='row' style={{marginLeft: 25, marginTop: 5}}> 
                    
                        <div>
                            <div>                        
                                <FormattedMessage  id="profile.city" defaultMessage='City' />
                            </div>

                            <TextField
                                className={classes.textField3}
                                variant="outlined"
                                type='text'
                                value={this.state.city}
                                style={{marginTop: 5}}
                                onChange={this.onInputChange_city.bind(this)}
                            />

                            {this.state.live_check_city && <div style={{color: 'red'}}> <FormattedMessage  id="error.city" defaultMessage='City not valid' /> </div>}

                        </div>

                        <div style={{marginLeft: 30}}>
                            <div>
                                <FormattedMessage  id="profile.zipcode" defaultMessage='Zipcode' />
                            </div>
                        
                            <TextField
                                className={classes.textField3}
                                variant="outlined"
                                type='text'
                                value={this.state.zipcode}
                                style={{marginTop: 5}}
                                onChange={this.onInputChange_zipcode.bind(this)}
                            />

                            {this.state.live_check_zipcode && <div style={{color: 'red'}}> <FormattedMessage  id="error.zipcode" defaultMessage='Zipcode not valid' /> </div>}
                        </div>
        
                    </div>

                    <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                        <FormattedMessage id="new_profile.mobile" defaultMessage='Mobile Details' />
                    </div>

                    <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                        _________________________________________
                    </div>

                    <div style={{textAlign: 'center'}}> 

                        <TextField
                            className={classes.textField}
                            margin="normal"
                            onChange={this.onInputChange_phone.bind(this)}
                            value={this.state.phone}
                            variant="outlined"
                            style={{marginTop: 20}}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    {this.state.live_check_phone && <div style={{color: 'red', marginLeft: 30}}> <FormattedMessage  id="error.phone" defaultMessage='Phone number not valid' /> </div>}

                    <button 
                        style={{ border: 'none', height: 30, width: 70, backgroundColor: this.state.button_disable ? '#b3b3b3' : 'black', color: 'white', cursor: 'pointer', borderRadius: 100}}
                        type='submit'
                        disabled={this.state.button_disable}
                    >
                        <FormattedMessage id="new_update_profile.save" defaultMessage='Save' />
                    </button>
                </form>

                

                <Link to="/profile/" >
                    <button style={{border: 'none', height: 30, width: 70, backgroundColor: 'red', color: 'white', cursor: 'pointer', borderRadius: 100}}>
                        <FormattedMessage id="signup.cancel" defaultMessage='Cancel' />
                    </button>
                </Link>

                <div style={{height: 20, backgroundColor: '#f1f1f1'}}> 

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(connect(null, { hide_update_profile, show_user_profile, authCheckState })(NewUpdateProfile));