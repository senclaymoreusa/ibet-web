import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';

import '../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import { PayPalButton } from 'react-paypal-button-v2';


import { hide_deposit_paypal, show_deposit } from '../actions';
import { ReactComponent as Paypal } from '../assets/img/svg/paypal.svg';

import Left from '@material-ui/icons/ChevronLeft'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const CLIENT = {
    sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
    production: 'xxxXXX',
};


const styles = theme => ({
    root: {
        width: '100%',
    },

    margin: {
        margin: 'auto',
    },

    textField: {
        flexBasis: 200,
        width: 330,
        backgroundColor: '#ffffff;'
    },

    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
            backgroundColor: blue[800],
        },
    },
    paypalPaper: {
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
    },
});

class New_Deposit_Paypal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',

            live_check_amount: false,

            button_disable: true,
        };
        this.onInputChange_balance = this.onInputChange_balance.bind(this);
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    onInputChange_balance(event) {
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)) {
            this.setState({ balance: event.target.value });

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)) {
                this.setState({ live_check_amount: true, button_disable: true })
            } else {
                this.setState({ live_check_amount: false, button_disable: false })
            }
        }
    }

    render() {
        const { classes } = this.props;
        let amount = this.state.balance;
        let user = this.state.data.username;

        return (
            <div className={classes.root}>
                {/* <Paper className={classes.paypalPaper}>

                </Paper> */}
                <form>
                    <Left
                        style={{ cursor: 'pointer', position: 'absolute', top: 8, left: 25, fontSize: 30, color: 'red' }}
                        onClick={() => {
                            this.props.hide_deposit_paypal();
                            this.props.show_deposit();
                        }}
                    />

                    <div style={{ position: 'absolute', top: 20, left: 300, }}>
                        <Paypal style={{ height: 50, width: 60 }} />
                    </div>

                    <div style={{ backgroundColor: 'white', height: 44, fontSize: 15.8, color: 'black', paddingLeft: 60, paddingTop: 12 }}>
                        Deposit
                    </div>

                    <div style={{ color: 'red', fontSize: 30, fontWeight: 600, marginLeft: 30 }}>
                        Amount
                    </div>

                    <div style={{ textAlign: 'center', color: '#e4e4e4' }}>
                        _________________________________________
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.balance || ''}
                            onChange={this.onInputChange_balance}
                        />
                    </div>
                    <br />
                    {
                        this.state.live_check_amount && this.state.live_check_amount ?
                            <div style={{ color: 'red' }}>
                                <FormattedMessage id="balance.error" defaultMessage='The balance you entered is not valid' />
                            </div> :
                            <div>
                                <br />
                            </div>
                    }
                    <div className='paypal-button'  >

                        <PayPalButton

                            createOrder={function () {
                                var postData = {
                                    "amount": amount,
                                    "currency": "USD",
                                    "user": user,
                                }
                                console.log(amount)
                                console.log(user)
                                var formBody = [];
                                for (var pd in postData) {
                                    var encodedKey = encodeURIComponent(pd);
                                    var encodedValue = encodeURIComponent(postData[pd]);
                                    formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");
                                return fetch(API_URL + 'accounting/api/paypal/create_payment', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                    },
                                    body: formBody
                                }).then(function (res) {
                                    return res.json();
                                }).then(function (data) {
                                    let token;
                                    for (let link of data.links) {
                                        if (link.rel === 'approval_url') {
                                            token = link.href.match(/EC-\w+/)[0];
                                        }
                                    }
                                    return token;
                                });

                            }}

                            onApprove={(data) => {

                                // Call your server to validate and capture the transaction
                                var postData = {
                                    "order_id": data.orderID,
                                    "user": user,
                                }
                                var formBody = [];
                                for (var pd in postData) {
                                    var encodedKey = encodeURIComponent(pd);
                                    var encodedValue = encodeURIComponent(postData[pd]);
                                    formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");

                                return fetch(API_URL + 'accounting/api/paypal/get_order', {
                                    method: "POST",
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                    },
                                    body: formBody
                                }).then(function (res) {
                                    return res.json();
                                }).then(function (details) {
                                    alert('Transaction approved by ' + details.payer.name.given_name + ' ' + details.payer.name.surname);
                                    const body = JSON.stringify({
                                        type: 'add',
                                        username: user,
                                        balance: amount,
                                    });
                                    console.log(body)
                                    axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                                        .then(res => {
                                            if (res.data === 'Failed') {
                                                this.setState({ error: true });
                                            } else if (res.data === 'The balance is not enough') {
                                                alert("cannot withdraw this amount")
                                            } else {
                                                alert("your balance is updated")
                                                window.location.reload()
                                            }
                                        });

                                });
                            }}

                            options={{
                                clientId: CLIENT.sandbox
                            }}
                        />
                    </div>


                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { hide_deposit_paypal, show_deposit })(New_Deposit_Paypal)));