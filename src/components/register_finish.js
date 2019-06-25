import React from 'react';
import { connect } from 'react-redux';
import { hide_signup_finish, show_login } from '../actions';
import { ReactComponent as Close } from '../assets/img/svg/close.svg';
import { FormattedMessage } from 'react-intl';

class Register_Finish extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{backgroundColor: '#212121', height: 640, width: 770}}> 
                
                <div style={{color: 'white', textAlign: 'center',  fontSize: 35, fontWeight: 600, marginTop: 60}}>
                     ibet 
                </div>

                <Close 
                    style={{cursor: 'pointer', position: 'absolute', top: 25, left: 690, height: 120, width: 20}}
                    onClick = { () => {
                        this.props.hide_signup_finish();
                    }}
                />

                <div style={{color: 'white', fontSize: 45, fontWeight: 600, marginLeft: 135, marginTop: 30}}> 
                    <FormattedMessage id="signup.thankyou" defaultMessage='Your email is confirmed' />
                </div>

                <div style={{color: '#e5e5e5', fontSize: 24, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normail', letterSpacing: 'normal', marginLeft: 135, marginTop: 50}}> 
                    <FormattedMessage id="signup.emailconfirm" defaultMessage='Thank you' />
                </div>

                <div style={{color: '#e5e5e5', fontSize: 24, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normail', letterSpacing: 'normal', marginLeft: 135, marginTop: 50}}> 
                    <FormattedMessage id="signup.loginandcontinue" defaultMessage='You can now log in and continue' />
                </div>

                <div style={{color: '#e5e5e5', fontSize: 24, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normail', letterSpacing: 'normal', marginLeft: 135, marginTop: 20}}> 
                    <FormattedMessage id="signup.settingup" defaultMessage='setting up your account' />
                </div>

                <div style={{textAlign: 'center'}}> 
                    <button 
                        onClick ={() => {
                            this.props.hide_signup_finish();
                            this.props.show_login();
                        }}
                        style={{backgroundColor: 'red', height: 48, width: 272, marginTop: 170, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                        type='submit'
                    > 
                        <FormattedMessage id="signup.login" defaultMessage='LOGIN' />
                    </button>
                </div>

            </div>
        )
    }
}



export default connect(null, { hide_signup_finish, show_login })(Register_Finish);