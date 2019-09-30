import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../../util_config';
import { connect } from 'react-redux';
import '../css/deposit.css';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../../util_config';
import { hide_deposit_amount, show_deposit } from '../../actions';
import WeChatIcon from '../images/WeChat.png';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

// const CLIENT = {
//     sandbox: 'AXoM7FKTdT8rfh-SI66SlAWd_P85YSsNfTvm0zjB0-AhJhUhUHTuXi4L87DcgkxLSLPYKCMO5DVl2pDD',
//     production: 'xxxXXX',
// };


const styles = theme => ({
    root: {
        width: '100%',
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 44,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    backButton: {
        width: 32,
        height: 32,
        minWidth: 32,
        marginTop: 6,
        marginBottom: 6,
    },
    depositRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
    },
    contentRow: {
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    contentPaper: {
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
    title: {
        display: 'inline',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 6,
        height: 30,
        marginTop: 12,

    },
    depositLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#ffffff',
        fontSize: 15.8,
        textTransform: 'uppercase',
    },
    depositAmount: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 24,
        margintop: 10,
    },
    confirmButton: {
        width: 160,
        marginTop: 20,
        textTransform: 'capitalize',
    },
    weChatIcon: {
        height: 80,
        widrth: 80,
        marginTop: 20,
        marginBottom: 20,
    },
    confirmDepositLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 20,
        margintop: 10,
    }
});

class NewDepositWechat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            qaicash_error: false,
            qaicash_error_msg: "",
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

    onformsubmit(event) {
        event.preventDefault()

        let amount = this.state.balance;
        let user = this.state.data.pk;
        let username = this.state.data.username;

        var postData = {
            "amount": amount,
            "user_id": user,
            "currency": "0",
            "language": "zh-Hans",
            "method": "WECHAT_PAY",
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
        return fetch(API_URL + 'accounting/api/qaicash/submit_deposit', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (data) {
            let redirectUrl = data.paymentPageSession.paymentPageUrl
            console.log(redirectUrl)

            if (redirectUrl != null) {
                const mywin = window.open(redirectUrl, 'qaicash-Wechatpay', 'height=500,width=500');
                var timer = setInterval(function () {
                    console.log('checking..')
                    if (mywin.closed) {
                        clearInterval(timer);
                        var postData = {
                            "order_id": data.paymentPageSession.orderId
                        }
                        var formBody = [];
                        for (var pd in postData) {
                            var encodedKey = encodeURIComponent(pd);
                            var encodedValue = encodeURIComponent(postData[pd]);
                            formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");

                        return fetch(API_URL + 'accounting/api/qaicash/deposit_transaction', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: formBody
                        }).then(function (res) {
                            return res.json();
                        }).then(function (data) {
                            console.log(data.status)
                            if (data.status === 'SUCCESS') {
                                alert('Transaction is approved.');
                                const body = JSON.stringify({
                                    type: 'add',
                                    username: username,
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
                            } else {
                                alert('Transaction is not approved.')
                            }
                        });
                    }
                }, 1000);

            } else {
                this.setState({ qaicash_error: true, qaicash_error_msg: data.returnMessage });
            }
        });
    }

    backClicked = (event) => {
        this.props.hide_deposit_amount();
        this.props.show_deposit();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <img src={images.src + 'account-menu-back.svg'}  alt=""/>
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.depositRow}>
                        <div className={classes.depositLabel}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        <Paper className={classes.contentPaper}>
                            <div className={classes.confirmDepositLabel}>
                                <FormattedMessage id="accountmenu.confirm-deposit" defaultMessage="Confirm Deposit" />
                            </div>
                            <img src={WeChatIcon} className={classes.weChatIcon} alt='Not available' />
                            <span className={classes.depositAmount}>
                                {this.state.weChatDepositAmount}
                            </span>

                            <Button variant="contained" color="primary" className={classes.confirmButton}
                                onClick={this.onformsubmit.bind(this)}>Confirm</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { hide_deposit_amount, show_deposit })(NewDepositWechat)));