import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl} from 'react-intl';
import { authLogin, authCheckState, AUTH_RESULT_SUCCESS, FacebookSignup, FacebookauthLogin, hide_signup, show_signup_email} from '../actions';
import IoSocialFacebook from 'react-icons/lib/io/social-facebook';
import IoSocialTwitter from  'react-icons/lib/io/social-twitter';

import { ReactComponent as Close } from '../assets/img/svg/close.svg';


class Signup extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                
                <div className='signup-title'> 

                    <div style={{marginLeft: 330 , marginTop: 15}}> 
                        <FormattedMessage  id="login.signup" defaultMessage='Signup' />
                    </div>

                    <Close 
                        style={{cursor: 'pointer', marginLeft: 250, marginTop: 5, height: 40, width: 20}}
                        onClick = { () => {
                            this.props.hide_signup()
                        }}
                />
                </div>

                <div className='signup-top-message' style={{marginTop: 47}}>
                    <FormattedMessage id="signup.message0" defaultMessage='Future of online betting' />
                </div>

                <div className='signup-text' style={{marginTop: 37}}>
                    <FormattedMessage id="signup.message1" defaultMessage='What credentials would you like to user for your ibet account?' />
                </div>


                <div className='row' style={{marginTop: 30}}>  
                    <div className='facebook-button row' style={{cursor: 'pointer'}}>

                        <div style={{color: 'white', backgroundColor: 'blue', height: 20, width: 20, marginLeft: 50, marginTop: 15}}> 
                            <IoSocialFacebook  />
                        </div>

                        <div style={{marginLeft: 50, marginTop: 15, fontSize: 14, color: '#212121', fontWeight: 600}}> 
                            FACEBOOK 
                        </div>

                    </div>

                    <div className='facebook-button row' style={{cursor: 'pointer'}}>
                        
                        <div style={{color: '#1da1f2', height: 20, width: 20, marginLeft: 50, marginTop: 15}}> 
                            <IoSocialTwitter  />
                        </div>

                        <div style={{marginLeft: 50, marginTop: 15, fontSize: 14, color: '#212121', fontWeight: 600}}> 
                            TWITTER
                        </div>

                    </div>
                </div>


                <div className='row' style={{marginTop: 30}}>
                    <div style={{color: '#e4e4e4', marginLeft: 50}}>
                        ______________________________
                    </div>
                    
                    <div style={{color: '#e4e4e4', marginTop: 5, marginLeft: 50, fontSize: 11}}> <FormattedMessage id="signup.or" defaultMessage='OR' /> </div>

                    <div style={{color: '#e4e4e4', marginLeft: 50}}>
                        ______________________________
                    </div>
                </div>


                <div onClick={() => {
                    this.props.show_signup_email()
                    this.props.hide_signup()
                    }} 
                    style={{backgroundColor: 'red', height: 48, width: 272, marginLeft: 215, marginTop: 30, color: 'white', cursor: 'pointer'}}
                > 
                    <div style={{paddingTop: 12}}>  
                        EMAIL
                    </div>
                </div>


                <div className='signup-text' style={{marginTop: 30}}>
                    <FormattedMessage id="signup.message2" defaultMessage='We sometimes send you emails with offers regarding our services. You can unsubscribe from' />
                </div>

                <div className='signup-text'>
                    <FormattedMessage id="signup.message3" defaultMessage='reveiving there emails at any time, free of charge' />
                </div>

                <div className='signup-text' style={{marginTop: 30}}>
                    <FormattedMessage id="signup.message4" defaultMessage="By signing up you agree to ibet's terms and conditions and confirm you've" />
                </div>

                <div className='signup-text'>
                    <FormattedMessage id="signup.message5" defaultMessage='read and understood the privacy policy' />
                </div>
            </div>
        )
    }
}

export default connect(null, {authLogin, authCheckState, FacebookSignup, FacebookauthLogin, hide_signup, show_signup_email})(Signup);

