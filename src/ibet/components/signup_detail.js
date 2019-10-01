import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { hide_signup_detail, show_signup_email, show_signup_contact, handle_signup_username, handle_signup_first_name, handle_signup_last_name, handle_signup_dob, sendingLog } from '../../actions';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { getNames } from 'country-list';
import { config, images } from "../../util_config";

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    textField: {
      width: 530,
    },

    textField2: {
      width: 240,
    },

    textFieldDOB:{
        width: 70,
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
  

class SignupDetail extends React.Component {
    constructor(props){
        super(props);

        this.textInput_1 = React.createRef();
        this.textInput_2 = React.createRef();

        this.state = {
            username: this.props.signup_username ? this.props.signup_username : '',
            first_name: this.props.signup_first_name ? this.props.signup_first_name : '',
            last_name: this.props.signup_last_name ? this.props.signup_last_name : '',
            month: this.props.signup_dob ? this.props.signup_dob.split('/')[0] : '',
            day: this.props.signup_dob ? this.props.signup_dob.split('/')[1] : '',
            year: this.props.signup_dob ? this.props.signup_dob.split('/')[2] : '',
            DOB: '',

            live_check_username: false,
            live_check_firstname: false,
            live_check_lastname: false,
            live_check_dob: false,

            button_disable: this.props.signup_username ? false : true,

            username_error: false,

            all_country_name: [],

            less_18_error: false
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
        this.check_18()
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
        this.check_18()
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
        this.check_18()
        this.check_button_disable()
    }

    check_18(){
        var today = new Date();
        var cur_year = today.getFullYear();
        var cur_month = today.getMonth() + 1 ;
        var cur_day = today.getDate();
        if (this.state.month && this.state.day && this.state.year){
            if(Number(cur_year) - Number(this.state.year) < 18){
                this.setState({less_18_error: true})
            }else if(Number(cur_year) - Number(this.state.year) === 18 && Number(cur_month) - Number(this.state.month) < 0){
                this.setState({less_18_error: true})
            }else if(Number(cur_year) - Number(this.state.year) === 18 && Number(cur_month) - Number(this.state.month) === 0 && Number(cur_day) - Number(this.state.day) < 0){
                this.setState({less_18_error: true})
            }else{
                this.setState({less_18_error: false})
            }
        }
    }

    focusTextInput_1() {
        this.textInput_1.current.focus();
    }

    focusTextInput_2() {
        this.textInput_2.current.focus();
    }


    check_button_disable(){
        if(this.state.username && this.state.first_name && this.state.last_name && this.state.year && this.state.day && this.state.month &&
            !this.state.live_check_username && !this.state.live_check_firstname && !this.state.live_check_lastname && !this.state.live_check_dob && !this.state.less_18_error){
            this.setState({button_disable: false})
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        axios.get(API_URL + `users/api/checkusernameexist/?username=${this.state.username}`, config)
        .then(res => {

            this.setState({username_error: false});
            this.props.handle_signup_username(this.state.username);
            this.props.handle_signup_first_name(this.state.first_name);
            this.props.handle_signup_last_name(this.state.last_name);
            this.props.handle_signup_dob(this.state.month + '/' + this.state.day + '/' + this.state.year);
            this.props.hide_signup_detail();
            this.props.show_signup_contact();
            
        }).catch(err => {
            // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
            sendingLog(err);
            this.setState({username_error: true})
        })
    }


    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white', minHeight: 650, width: 662}}> 
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='signup-title'>     

                    <img src={images.src + 'back.svg'} alt=""
                            style={{cursor: 'pointer', position: 'absolute', top: 12, left: 30, height: 25, width: 15}}
                            onClick = { () => {
                                this.props.hide_signup_detail();
                                this.props.show_signup_email();
                            }}
                        />

                    <div style={{ paddingTop: 20, fontSize: 14, fontWeight: 600, color: '#212121', letterSpacing: 0.88, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normal', lineHeight: 'normal'}}> 
                        <FormattedMessage id="signup.openaccount" defaultMessage='OPEN ACCOUNT' />
                    </div>

                    <img src={images.src + 'close_page.svg'} alt=""
                            style={{cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20}}
                            onClick = { () => {
                                this.props.hide_signup_detail();
                            }}
                        />
                    </div>

                    <div style={{marginTop: 30, textAlign: 'center'}}>
                        <span style={{color: '#e4e4e4'}} > ____________________  1 </span>  <span style={{fontWeight: 600}}> ____________________  2 </span >  <span style={{color: '#e4e4e4'}}> ____________________ 3 </span>
                    </div>

                    <div style={{color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 70}}> 
                        <FormattedMessage  id="signup.detail.personal" defaultMessage='Personal Details' />
                    </div>

                    <div style={{color: '#e4e4e4', textAlign: 'center'}}>
                        __________________________________________________________________
                    </div>
 
                    <div style={{textAlign: 'center'}}>
                        <TextField
                            value={this.state.username}
                            label="USER NAME"
                            className={classes.textField}
                            type="username"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_username.bind(this)}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    {this.state.live_check_username && <div style={{color: 'red', marginLeft: 70}}> <FormattedMessage  id="error.username" defaultMessage='Username not valid' /> </div>}
                    
                    {this.state.username_error && <div style={{color: 'red', marginLeft: 70}}> <FormattedMessage  id="signup.detail.usernametaken" defaultMessage='This username is already in use' /> </div>}

                    <div style={{color: '#747175', fontSize: 15, marginLeft: 70}}> 
                        <FormattedMessage  id="signup.detail.loginmessage" defaultMessage='This is used to log in. Limit 15 characters' />
                    </div>

                    <div className='row' style={{marginLeft: 70}}> 

                        <div> 
                            <TextField
                                value={this.state.first_name}
                                label="FIRST NAME"
                                className={classes.textField2}
                                type="username"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onInputChange_first_name.bind(this)}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />

                            {this.state.live_check_firstname && <div style={{color: 'red'}}> <FormattedMessage  id="error.firstname" defaultMessage='First name not valid' /> </div>}
                        </div>

                        <div style={{marginLeft: 47}}> 
                            <TextField
                                value={this.state.last_name}
                                label="LAST NAME"
                                className={classes.textField2}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onInputChange_last_name.bind(this)}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />

                            {this.state.live_check_lastname && <div style={{color: 'red'}}> <FormattedMessage  id="error.lastname" defaultMessage='Last name not valid' /> </div>}
                        </div>

                    </div>

                    <div style={{ fontSize: 15, fontWeight: 600, marginTop: 30, marginLeft: 70}}> 
                        <FormattedMessage  id="signup.detail.dob" defaultMessage='DATE OF BIRTH' />
                    </div>

                    <div style={{marginLeft: 70}}> 

                        <TextField
                            className={classes.textFieldDOB}
                            label="MM"
                            margin="normal"
                            onChange={this.onInputChange_month.bind(this)}
                            value={this.state.month}
                        />

                        <TextField
                            className={classes.textFieldDOB}
                            label="DD"
                            margin="normal"
                            onChange={this.onInputChange_day.bind(this)}
                            style={{marginLeft: 20}}
                            inputRef={this.textInput_1}
                            value={this.state.day}
                        />

                        <TextField
                            className={classes.textFieldDOB}
                            label="YYYY"
                            margin="normal"
                            onChange={this.onInputChange_year.bind(this)}
                            style={{marginLeft: 20}}
                            inputRef={this.textInput_2}
                            value={this.state.year}
                        />

                        {this.state.live_check_dob && <div style={{color: 'red'}}> <FormattedMessage  id="error.dateofbirth" defaultMessage='Date of birth not valid' /> </div>}

                        {this.state.less_18_error && <div style={{color: 'red'}}> <FormattedMessage  id="signup.over18error" defaultMessage='You have to be at least 18 to registrate an account' /> </div>}

                    </div>

                    <div style={{textAlign: 'center'}}> 
                        <button 
                            disabled = {this.state.button_disable}
                            style={{backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                            type='submit'
                        > 
                            <FormattedMessage  id="signup.continue" defaultMessage='CONTINUE' />
                        </button>
                    </div>

                    <div style={{color: '#747175', fontSize: 12, marginTop: 10, textAlign: 'center'}}> By signing up you agree to ibet's <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/terms_conditions')}> terms and conditions </b> and</div>
                    <div style={{color: '#747175', fontSize: 12, textAlign: 'center'}}> confirm you've read and understood the <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/privacy_policy')}> privacy </b> policy</div>
                </form>

                <div style={{height: 20}}> </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_username:    state.general.signup_username,
        signup_first_name:  state.general.signup_first_name,
        signup_last_name:   state.general.signup_last_name,
        signup_dob:         state.general.signup_dob
    }
}

export default withStyles(styles)(connect(mapStateToProps,{ hide_signup_detail, show_signup_email, show_signup_contact, handle_signup_username, handle_signup_first_name, handle_signup_last_name, handle_signup_dob })(SignupDetail));