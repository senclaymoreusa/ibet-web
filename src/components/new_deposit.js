import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hide_deposit, show_deposit_amount, show_deposit_paypal, show_withdraw } from '../actions';
import { ReactComponent as CloseIcon } from '../assets/img/svg/red-close.svg';
import wechat from '../images/WeChat.png';
import Paper from '@material-ui/core/Paper';

import Right from '@material-ui/icons/ChevronRight';
import { ReactComponent as Paypal } from '../assets/img/svg/paypal.svg';

class New_Deposit extends Component {
    render(){
        return (
            <div style={{backgroundColor: 'white',  minHeight: 400, width: 380}}>
                <CloseIcon 
                    style={{cursor: 'pointer', position: 'absolute', top: 15, left: 30, height: 15, width: 15, color: 'red'}}
                    onClick = { () => {
                        this.props.hide_deposit();
                    }}
                />
                <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, color: 'black', paddingLeft: 60, paddingTop: 12}}> 
                    Deposit
                </div>

                <div className='row' style={{height: 50}}>
                    <div style={{backgroundColor: 'black', height: 44, color: 'white', width: 190, fontSize: 20, textAlign: 'center', paddingTop: 10, borderBottom: '2px solid red'}}>
                        Deposit
                    </div>

                    <div 
                        style={{backgroundColor: 'black', height: 44, color: '#e4e4e4', width: 190, fontSize: 20, textAlign: 'center', paddingTop: 10, borderLeft: '1px solid #e4e4e4', cursor: 'pointer'}}
                        onClick={() => {
                            this.props.hide_deposit();
                            this.props.show_withdraw()
                        }}
                    >
                        Withdraw
                    </div>
                    
                </div>

                <div style={{textAlign: 'center', color: '#e4e4e4'}}>
                    _________________________________________
                </div>

                

                <Paper 
                    className="row" style={{ height: 80, width: 320, paddingTop: 10, paddingLeft: 20, marginLeft: 30, marginTop: 10, cursor: 'pointer'}}
                    onClick={()=>{
                        this.props.hide_deposit();
                        this.props.show_deposit_amount();
                    }}
                >
                    <img  style ={{marginTop: 5}} src={wechat} height="50" width="50" alt='Not available' />
                    <div style={{ marginTop: 20, marginLeft: 20}}>
                        WeChat
                    </div>
                    <div style={{marginTop: 18, marginLeft: 100}}> 
                        <Right />
                    </div>
                </Paper>

            
                <Paper 
                    className="row" style={{ height: 80, width: 320, paddingTop: 10, paddingLeft: 20, marginLeft: 30, marginTop: 10, cursor: 'pointer'}}
                    onClick={() => {
                        this.props.hide_deposit();
                        this.props.show_deposit_paypal();
                    }}
                >
                    <div style={{height: 60, width: 60, fontSize: 35}}> 
                        <Paypal />
                    </div>
                    <div style={{ marginTop: 20, marginLeft: 20}}>
                        PayPal
                    </div>
                    <div style={{marginTop: 18, marginLeft: 100}}> 
                        <Right />
                    </div>
                </Paper>
                
            </div>
        )
    }
}

export default connect(null, { hide_deposit, show_deposit_amount, show_deposit_paypal, show_withdraw })(New_Deposit);