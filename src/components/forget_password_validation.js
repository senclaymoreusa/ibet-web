import React, { Component } from 'react';
import { hide_forget_password_validation } from '../actions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormattedMessage } from 'react-intl';
import axios from 'axios'
import { images } from '../util_config';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const styles = theme => ({
    textField: {
      width: 54,
      height: 44,
      backgroundColor: '#ffffff;'
    },

    textField2: {
        width: 330,
        backgroundColor: '#ffffff;'
    },

    cssOutlinedInput:{
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
        },
      
        "&$cssFocused $notchedOutline": {
            borderColor: "blue",
        },
    },

    cssFocused: {  },
    
    notchedOutline: {  },
  });

class Forget_Password_Validation extends Component {

    constructor(props){
        super(props);

        this.textInput_1 = React.createRef();
        this.textInput_2 = React.createRef();
        this.textInput_3 = React.createRef();
        this.textInput_4 = React.createRef();

        this.state = {
            code_1: '',
            code_2: '',
            code_3: '',
            code_4: '',

            error: false,
            show_check: false,
            password: '',
            password_too_simple: false,
            button_disable: true,
            verification_error: false
        }
    }

    focusTextInput_1() {
        this.textInput_1.current.focus();
    }

    focusTextInput_2() {
        this.textInput_2.current.focus();
    }

    focusTextInput_3() {
        this.textInput_3.current.focus();
    }

    focusTextInput_4() {
        this.textInput_4.current.focus();
    }

    async handle_code_1(event){
        if(!event.target.value || (event.target.value.match(/^[0-9]+$/) && event.target.value.length < 2)){
            await this.setState({code_1: event.target.value})
            if (this.state.code_1){
                this.focusTextInput_2()
            }
        }
        this.check_valid();
    }

    async handle_code_2(event){
        if(!event.target.value ||  (event.target.value.match(/^[0-9]+$/) && event.target.value.length < 2)){
           await  this.setState({code_2: event.target.value})
           if(this.state.code_2){
              this.focusTextInput_3()
           }
        }
        this.check_valid();
    }

    async handle_code_3(event){
        if(!event.target.value ||  (event.target.value.match(/^[0-9]+$/) && event.target.value.length < 2)){
            await this.setState({code_3: event.target.value})
            if (this.state.code_3){
                this.focusTextInput_4()
            }
        }
        this.check_valid();
    }

    async handle_code_4(event){
        if(!event.target.value ||  (event.target.value.match(/^[0-9]+$/) && event.target.value.length < 2)){
            await this.setState({code_4: event.target.value})
        }
        this.check_valid();
    }

    async onInputChange_password(event){
        if (event.target.value.length < 8){
            this.setState({password_too_simple: true, button_disable: true})
        }else{
            this.setState({password_too_simple: false})
        }
        await this.setState({password: event.target.value});
        this.check_valid();
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    check_valid(){
        if (!this.state.password_too_simple && this.state.password && this.state.code_1 && this.state.code_2 && this.state.code_3 && this.state.code_4){
            this.setState({button_disable: false})
        }else{
            this.setState({button_disable: true})
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        axios.post(API_URL + `users/api/verifyresetpasswordcode/`, {
            email: this.props.email, 
            code: this.state.code_1 + this.state.code_2 + this.state.code_3 + this.state.code_4,
            password: this.state.password
        })
        .then(res => {
            if (res.data === 'Success'){
                alert('You have successfully reser your password');
                this.props.hide_forget_password_validation()
            }else{
                this.setState({verification_error: true})
            }
        })
        
    }

    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white', minHeight: 650, width: 662}}>
                <div className='signup-title'> 

                    <div style={{ paddingTop: 20, fontSize: 14, fontWeight: 600, color: '#212121', letterSpacing: 0.88, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normal', lineHeight: 'normal'}}> 
                        Forget Password
                    </div>

                    <img src={images.src + 'close_page.svg'}   style={{cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20}}
                        onClick = { () => {
                            this.props.hide_forget_password_validation();
                        }}
                    />
                    </div>

                    <div style={{fontSize: 15, fontWeight: 600, textAlign: 'center', marginTop: 30}}> 
                        VERIFICATION CODE
                    </div>

                    <form onSubmit={this.onFormSubmit.bind(this)}> 

                        <div className='row' style={{marginTop: 24, marginLeft: 180}}>  
                        
                            <div> 
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    type={'text'}
                                    value={this.state.code_1}
                                    onChange={this.handle_code_1.bind(this)}
                                    inputRef={this.textInput_1} 
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </div>

                            <div style={{marginLeft: 30}}>
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    type={'text'}
                                    value={this.state.code_2}
                                    onChange={this.handle_code_2.bind(this)}
                                    inputRef={this.textInput_2} 
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </div>

                            <div style={{marginLeft: 30}}> 
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    type={'text'}
                                    value={this.state.code_3}
                                    onChange={this.handle_code_3.bind(this)}
                                    inputRef={this.textInput_3} 
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </div>

                            <div style={{marginLeft: 30}}> 
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    type={'text'}
                                    value={this.state.code_4}
                                    onChange={this.handle_code_4.bind(this)}
                                    inputRef={this.textInput_4} 
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {this.state.verification_error && <div style={{color: 'red', marginLeft: 180}}> Verification code not correct </div>}


                        <div style={{marginTop: 15, textAlign: 'center', marginTop: 50}}> 
                            <TextField
                                className={classes.textField2}
                                label="NEW PASSWORD"
                                variant="outlined"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.onInputChange_password.bind(this)}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    },
                                    
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword.bind(this)}
                                        >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        {this.state.password_too_simple && <div style={{color: 'red', marginLeft: 170}}> <FormattedMessage  id="signup.password_simple" defaultMessage='Password is too simple' /> </div>}

                        <div style={{textAlign: 'center', marginTop: 50}}> 
                            <button 
                                disabled = {this.state.button_disable}
                                style={{backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 48, width: 300, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                                type='submit'
                            > 
                                Confirm
                            </button>
                        </div>
                    </form>

                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email:      state.general.forget_email,
    }
}

export default withStyles(styles)(connect(mapStateToProps, { hide_forget_password_validation })(Forget_Password_Validation));

