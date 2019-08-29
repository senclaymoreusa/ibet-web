import React from 'react';
import { images } from '../util_config';
import { connect } from 'react-redux';
import { hide_oneclick_finish, show_login } from '../actions';
import { FormattedMessage } from 'react-intl';

class One_Click_Finish extends React.Component {
    render(){
        return (
            <div style={{backgroundColor: 'white', height: 730, width: 770}}> 
                <div className='signup-title'> 

                    <div style={{ paddingTop: 20, fontFamily: 'Gilroy', fontSize: 14}}> 
                        <FormattedMessage id="signup.oneclickregister" defaultMessage='ONE-CLICK-REGISTRATION' />
                    </div>

                    <img src={images.src + 'close_page.svg'}
                        style={{cursor: 'pointer', position: 'absolute', top: 8, left: 720, height: 40, width: 20}}
                        onClick = { () => {
                            this.props.hide_oneclick_finish()
                        }}
                    />

                </div>

                <div style={{fontSize: 34, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Gilroy', color: '#212121', marginTop: 15}}> 
                    <FormattedMessage id="signup.oneclickregister.acountcreated" defaultMessage='Account Created' />
                </div>

                <div style={{fontSize: 20, fontFamily: 'Gilroy', fontWeight: 500, color: '#747175', textAlign: 'center', marginTop: 20}}>
                     
                    <FormattedMessage id="signup.oneclickregister.save" defaultMessage='Save these details and use them to resume play.' />
                </div>

                <div style={{color: '#e4e4e4', textAlign: 'center', marginTop: 20}}> _______________________________________ </div>

                <div style={{fontSize: 15, fontWeight: 600, marginLeft: 233, marginTop: 10}}>
                
                    <FormattedMessage id="signup.oneclickregister.username" defaultMessage='USERNAME' />

                    <span style={{marginLeft: 50, fontSize: 18, fontWeight: 'normal'}}> {this.props.username} </span>
                </div>

                <div style={{color: '#e4e4e4', textAlign: 'center'}}> _______________________________________ </div>

                <div style={{fontSize: 15, fontWeight: 600, marginLeft: 233, marginTop: 10}}>
                    <FormattedMessage id="signup.oneclickregister.password" defaultMessage='PASSWORD' />

                    <span style={{marginLeft: 50, fontSize: 18, fontWeight: 'normal'}}> {this.props.password} </span>
                </div>

                

                <div style={{color: '#e4e4e4', textAlign: 'center'}}> _______________________________________ </div>


                <div
                    onClick={() => {
                        this.props.hide_oneclick_finish();
                        this.props.show_login();
                    }} 
                    style={{backgroundColor: 'red', fontSize: 15, height: 53, width: 305, marginLeft: 225, marginTop: 30, color: 'white', cursor: 'pointer', textAlign: 'center'}}
                > 
                    <div style={{paddingTop: 15}}>  
                        MAKE MY FIRST DEPOSITE
                    </div>

                </div>

                <div style={{textAlign: 'center', marginTop: 15, cursor: 'pointer'}}> <span onClick={() => {
                    this.props.hide_oneclick_finish();
                }}> <u> I'M DONE </u> </span></div>

                <div style={{color: '#747175', fontSize: 12, marginTop: 10, textAlign: 'center'}}> By signing up you agree to ibet's <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/terms_conditions')}> terms and conditions </b> and</div>
                <div style={{color: '#747175', fontSize: 12, textAlign: 'center'}}> confirm you've read and understood the <b style={{color: 'black', cursor: 'pointer'}} onClick={()=> window.open('/privacy_policy')}> privacy </b> policy</div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.general.onc_click_username,
        password: state.general.onc_click_password
    }
}

export default connect(mapStateToProps, { hide_oneclick_finish, show_login })(One_Click_Finish);