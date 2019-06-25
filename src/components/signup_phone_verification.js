import React from 'react';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { ReactComponent as Back } from '../assets/img/svg/back.svg';
import { ReactComponent as Check } from '../assets/img/svg/check.svg';

import { hide_phone_verification, show_complete_registration, show_signup_finish } from '../actions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import { FormattedMessage } from 'react-intl';

import axios from 'axios'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    textField: {
      width: 54,
      height: 44,
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

class Phone_Verification extends React.Component {
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
            show_check: false
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

    check_valid(){
        if (this.state.code_1 && this.state.code_2 && this.state.code_3 && this.state.code_4){
            axios.post(API_URL + 'users/api/verifyactivationcode/', {'username': this.props.signup_username, 'code': this.state.code_1.toString() + this.state.code_2.toString() + this.state.code_3.toString() + this.state.code_4.toString()})
            .then(res => {
                if(res.data.status === 'Failed'){
                    this.setState({error: true})
                }else{
                    this.setState({error: false, show_check: true})
                    
                    setTimeout(
                        function() {
                            //alert('You have completed registration')
                            this.props.hide_phone_verification();
                            this.props.show_signup_finish();
                        }
                        .bind(this),
                        3000
                    );
                    
                }
            })
        }
    }

    render(){

        const { classes } = this.props;

        return (
            <div style={{backgroundColor: 'white', height: 640, width: 770}}>
                <div className='signup-title'>     

                    <div style={{ paddingTop: 20}}> 
                        VERIFICATION
                    </div>

                    <Close 
                        style={{cursor: 'pointer', position: 'absolute', top: 8, left: 720, height: 40, width: 20}}
                        onClick = { () => {
                            this.props.hide_phone_verification();
                        }}
                    />
                </div>

                <div style={{fontSize: 38, fontWeight: 'bold', marginLeft: 77}}> We sent you a code to </div>
                <div style={{fontSize: 38, fontWeight: 'bold', marginLeft: 77}}> confrim you phone number </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    ________________________________________________________________________________
                </div>

                <div className='row'> 
   
                   <div style={{marginLeft: 65, marginTop: 24}}> 
                       Sent to: 

                       <div style={{backgroundColor: '#f9f9f9', width: 218, height: 48, marginTop: 24, fontSize: 20, fontWeight: 600, fontFamily: 'Gilroy', textAlign: 'center'}}>
                           <div style={{paddingTop: 12}}> {this.props.signup_phone.split('/')[0] + this.props.signup_phone.split('/')[1]} </div>
                       </div>
                    </div>

                   <div style={{marginTop: 24, marginLeft: 82}}>  

                       <div style={{fontSize: 15, fontWeight: 600}}> 
                           VERIFICATION CODE
                       </div>

                       <div className='row' style={{marginTop: 24}}>  
                       
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

                            {
                                this.state.show_check && 
                                <div style={{position: 'absolute', left: 658, top: 272}}> 
                                    <Check />
                                </div>
                            }

                            {
                                this.state.error && 
                                <div style={{position: 'absolute', left: 400, top: 292}}>
                                    <div style={{color: 'red', fontSize: 16}}> 
                                        <FormattedMessage id="signup.signupphoneerror1" defaultMessage='Sorry, that’s not the code we’re looking for.' />
                                    </div>
                                    <div style={{color: 'red', fontSize: 16}}>
                                        <FormattedMessage id="signup.signupphoneerror2" defaultMessage='Please check and try again.' /> 
                                    </div>
                                </div>
                            }

                       </div>

                   </div>

                </div>

                <div onClick={()=>{
                    this.setState({code_1: '', code_2: '', code_3: '', code_4: '', error: false})
                    axios.post(API_URL + 'users/api/generateactivationcode/', {'username': this.props.signup_username})
                    .then(res => {
                        
                    })
                }}
                    style={{ fontSize: 15, height: 50, width: 320, marginLeft: 215, marginTop: 70, color: 'black', cursor: 'pointer', textAlign: 'center', border: '1px solid #e4e4e4'}}
                > 
                    <div style={{paddingTop: 12}}>  
                        RESEND SMS
                    </div>
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4', marginTop: 30}}>
                    ________________________________________________________________________________
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_phone:    state.general.signup_phone,
        signup_username: state.general.signup_username
    }
}

export default withStyles(styles)(connect(mapStateToProps, { hide_phone_verification, show_complete_registration, show_signup_finish })(Phone_Verification));