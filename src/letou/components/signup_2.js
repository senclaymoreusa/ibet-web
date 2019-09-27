import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, } from 'react-intl';
import {
    authLogin,
    authCheckState,
    FacebookSignup,
    FacebookauthLogin,
    hide_signup,
    show_signup_email,
    handle_oneclick_username,
    handle_oneclick_password,
    show_oneclick_finish
} from '../actions';
import IoSocialFacebook from 'react-icons/lib/io/social-facebook';
import IoSocialTwitter from 'react-icons/lib/io/social-twitter';
import { withRouter } from 'react-router-dom';
import { images } from '../../util_config';
import axios from 'axios';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            referrer: '',
        }
    }

    componentDidMount() {

        axios.get(API_URL + `users/api/getusernamebyreferid/?referid=${this.props.refer_id}`)
            .then(res => {
                this.setState({ ready: true, referrer: res.data })
            })
    }

    render() {
        return (
            this.state.ready && <div style={{ backgroundColor: 'white', minHeight: 650, width: 662 }}>

                <div className='signup-title'>

                    <div style={{ paddingTop: 20, fontSize: 14, fontWeight: 600, color: '#212121', letterSpacing: 0.88, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normal', lineHeight: 'normal' }}>
                        <FormattedMessage id="signup.openaccount" defaultMessage='OPEN ACCOUNT' />
                    </div>

                    <img src={images.src + 'close_page.svg'} alt=""
                        style={{ cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20 }}
                        onClick={() => {
                            this.props.hide_signup()
                        }}
                    />
                </div>
                {
                    this.state.referrer !== 'Failed' && <div style={{ textAlign: 'center', fontSize: 20 }}>
                        Your Referrer:   <b> {this.state.referrer} </b>
                    </div>
                }
                <div className='signup-top-message' style={{ marginTop: 47, textAlign: 'center' }}>
                    <FormattedMessage id="signup.message0" defaultMessage='Future of online betting' />
                </div>
                <div className='signup-text' style={{ marginTop: 37, textAlign: 'center' }}>
                    <FormattedMessage id="signup.message1" defaultMessage='What credentials would you like to user for your ibet account?' />
                </div>
                <div className='row' style={{ marginTop: 30 }}>
                    <div className='facebook-button row' style={{ cursor: 'pointer' }}>
                        <div style={{ color: 'white', backgroundColor: 'blue', height: 20, width: 20, marginLeft: 50, marginTop: 15 }}>
                            <IoSocialFacebook />
                        </div>
                        <div style={{ marginLeft: 50, marginTop: 15, fontSize: 14, color: '#212121', fontWeight: 600 }}>
                            FACEBOOK
                      </div>
                    </div>
                    <div className='facebook-button row' style={{ cursor: 'pointer' }}>
                        <div style={{ color: '#1da1f2', height: 20, width: 20, marginLeft: 50, marginTop: 15 }}>
                            <IoSocialTwitter />
                        </div>
                        <div style={{ marginLeft: 50, marginTop: 15, fontSize: 14, color: '#212121', fontWeight: 600 }}>
                            TWITTER
                        </div>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 30 }}>
                    <div style={{ color: '#e4e4e4', marginLeft: 40 }}>
                        ______________________________
                    </div>

                    <div style={{ color: '#212121', marginTop: 5, marginLeft: 50, fontSize: 11, fontFamily: 'Gilroy' }}> <FormattedMessage id="signup.or" defaultMessage='OR' /> </div>
                    <div style={{ color: '#e4e4e4', marginLeft: 40 }}>
                        ______________________________
                    </div>
                </div>


                <div onClick={() => {
                    this.props.show_signup_email()
                    this.props.hide_signup()
                }}
                    style={{ backgroundColor: 'red', fontSize: 15, height: 48, width: 272, marginLeft: 200, marginTop: 30, color: 'white', cursor: 'pointer', textAlign: 'center' }}
                >
                    <div style={{ paddingTop: 12 }}>
                        <FormattedMessage id="signup.register" defaultMessage='REGISTER' />
                    </div>
                </div>

                <div
                    onClick={() => {
                        axios.post(API_URL + 'users/api/oneclicksignup/')
                            .then(res => {
                                this.props.handle_oneclick_username(res.data.username)
                                this.props.handle_oneclick_password(res.data.password)
                                this.props.hide_signup()
                                this.props.show_oneclick_finish();
                            })
                    }}
                    style={{ backgroundColor: '#212121', fontSize: 15, height: 48, width: 272, marginLeft: 200, marginTop: 30, color: 'white', cursor: 'pointer', textAlign: 'center' }}
                >
                    <div style={{ paddingTop: 15 }}>
                        <FormattedMessage id="signup.onclickregister" defaultMessage='REGISTER WITH ONE CLICK' />
                    </div>
                </div>


                <div className='signup-text' style={{ marginTop: 30, fontSize: 13, textAlign: 'center' }}>
                    <FormattedMessage id="signup.message2" defaultMessage='We sometimes send you emails with offers regarding our services. You can unsubscribe from' />
                </div>

                <div className='signup-text' style={{ fontSize: 13, textAlign: 'center' }}>
                    <FormattedMessage id="signup.message3" defaultMessage='reveiving there emails at any time, free of charge' />
                </div>

                <div className='signup-text' style={{ marginTop: 30, fontSize: 13, textAlign: 'center' }}>
                    By signing up you agree to ibet's <span style={{ color: 'black', cursor: 'pointer' }} onClick={() => { window.open('/terms_conditions') }}><b>terms and conditions</b></span> and confirm you've
                </div>

                <div className='signup-text' style={{ fontSize: 13, textAlign: 'center' }}>
                    read and understood the <span style={{ color: 'black', cursor: 'pointer' }} onClick={() => { window.open('/privacy_policy') }}><b>privacy</b></span> policy
                </div>

                <div style={{ height: 20 }}> </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        refer_id: state.general.refer_id
    }
}

export default withRouter(connect(mapStateToProps, { authLogin, authCheckState, FacebookSignup, FacebookauthLogin, hide_signup, show_signup_email, handle_oneclick_username, handle_oneclick_password, show_oneclick_finish })(Signup));

