import React from 'react';
import { connect } from 'react-redux';
import {
    hide_complete_registration,
    show_signup_phone,
    show_phone_verification,
    handle_signup_over18, authSignup,
    sendingLog
} from '../../actions';
import { config, images } from '../../util_config';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

class CompleteRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkbox1: this.props.signup_over18 ? true : false,
            checkbox2: false,
            checkbox3: false,
        }
    }

    onInputChange_checkbox1() {
        this.setState({ checkbox1: !this.state.checkbox1 })
    }

    onInputChange_checkbox2() {
        this.setState({ checkbox2: !this.state.checkbox2 })
    }

    onInputChange_checkbox3() {
        this.setState({ checkbox3: !this.state.checkbox3 })
    }

    render() {

        const { formatMessage } = this.props.intl;

        const message1 = formatMessage({ id: "signup.phone.message1" });
        const message2 = formatMessage({ id: "signup.phone.message2" });
        const message2_5 = formatMessage({ id: "signup.phone.message2.5" });
        const message3 = formatMessage({ id: "signup.phone.message3" });

        return (
            <div style={{ backgroundColor: 'white', height: 640, width: 770 }}>
                <div className='signup-title'>
                    <img src={images.src + 'close_page.svg'} alt=""
                        style={{ cursor: 'pointer', position: 'absolute', top: 12, left: 30, height: 25, width: 15 }}
                        onClick={() => {
                            this.props.hide_complete_registration()
                            this.props.show_signup_phone()
                        }}
                    />

                    <div style={{ paddingTop: 20 }}>
                        VERIFICATION
                    </div>

                    <img src={images.src + 'close_page.svg'} alt=""
                        style={{ cursor: 'pointer', position: 'absolute', top: 8, left: 720, height: 40, width: 20 }}
                        onClick={() => {
                            this.props.hide_complete_registration()
                        }}
                    />
                </div>

                <div style={{ fontSize: 38, fontWeight: 'bold', color: '#212121', marginLeft: 65, marginTop: 30 }}>
                    <FormattedMessage id="signup.completeregister" defaultMessage='Complete Registration.' />
                </div>

                <div style={{ fontSize: 16, fontWeight: 500, color: '#747175', marginLeft: 65, marginTop: 17 }}>
                    <FormattedMessage id="signup.realperson" defaultMessage="We need to know you're a real person." />
                </div>

                <div style={{ fontSize: 16, fontWeight: 500, color: '#747175', marginLeft: 65 }}>
                    <FormattedMessage id="signup.confirmphone" defaultMessage="Please confirm either your phone number or your email to complete your registration." />
                </div>

                <div style={{ textAlign: 'center', color: '#e4e4e4' }}>
                    ________________________________________________________________________________
                </div>

                <div style={{ marginLeft: 199, fontSize: 19, color: '#747175', marginTop: 25 }}>
                    <FormattedMessage id="signp.agree" defaultMessage="I agree to: " />
                </div>


                <div style={{ marginLeft: 200 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkbox1}
                                onChange={this.onInputChange_checkbox1.bind(this)}
                            />
                        }
                        label={message1}
                    />
                </div>

                <div style={{ marginLeft: 200 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkbox2}
                                onChange={this.onInputChange_checkbox2.bind(this)}
                            />
                        }
                        label={message2}
                    />

                    <div style={{ fontSize: 15, marginLeft: 35 }}> {message2_5} </div>

                </div>

                <div style={{ marginLeft: 200 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkbox3}
                                onChange={this.onInputChange_checkbox3.bind(this)}
                            />
                        }
                        label={message3}
                    />
                </div>

                <button
                    disabled={!this.state.checkbox1}
                    onClick={() => {
                        this.props.handle_signup_over18(this.state.checkbox1)

                        this.props.authSignup(
                            this.props.signup_username,
                            this.props.signup_email,
                            this.props.signup_password,
                            this.props.signup_first_name,
                            this.props.signup_last_name,
                            this.props.signup_phone.split('/')[0] + this.props.signup_phone.split('/')[1],
                            this.props.signup_dob,
                            this.props.signup_address,
                            this.props.signup_country,
                            this.props.signup_city,
                            this.props.signup_zipcode,
                            this.state.checkbox1,
                            this.props.signup_language
                        ).then(res => {
                            axios.post(API_URL + 'users/api/generateactivationcode/', { 'username': this.props.signup_username, 'type': '', })
                            this.props.hide_complete_registration();
                            this.props.show_phone_verification();
                        }).catch(err => {
                            console.log(err.response);
                            sendingLog(err);
                            // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                        })
                    }}
                    style={{ backgroundColor: !this.state.checkbox1 ? '#ff8080' : 'red', fontSize: 15, height: 50, width: 320, marginLeft: 215, marginTop: 30, color: 'white', cursor: 'pointer', textAlign: 'center', border: 'none' }}
                >
                    <div>
                        <FormattedMessage id="signup.confirmviaphone" defaultMessage="CONFIRM VIA PHONE" />
                    </div>
                </button>

                <div style={{ textAlign: 'center', color: '#e4e4e4', marginTop: 30 }}>
                    ________________________________________________________________________________
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_over18: state.general.signup_over18,
        signup_phone: state.general.signup_phone,
        signup_email: state.general.signup_email,
        signup_password: state.general.signup_password,
        signup_language: state.general.signup_language,
        signup_username: state.general.signup_username,
        signup_first_name: state.general.signup_first_name,
        signup_last_name: state.general.signup_last_name,
        signup_dob: state.general.signup_dob,
        signup_address: state.general.signup_address,
        signup_city: state.general.signup_city,
        signup_zipcode: state.general.signup_zipcode,
        signup_country: state.general.signup_country
    }
}

export default injectIntl(connect(mapStateToProps, { hide_complete_registration, show_signup_phone, show_phone_verification, handle_signup_over18, authSignup })(CompleteRegistration));