import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {config,images } from '../../../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: 925,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797'
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28
    },
    contentRow: {
        paddingLeft: 123,
        paddingRight: 122,
        paddingTop: 50
    },
    buttonCell: {
        paddingTop: 50,
        textAlign: 'center'
    },
    addButton: {
        width: 87,
        height: 58,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 32,
        backgroundColor: '#efefef',
        display: 'inline-block',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #32c5ff'
        }
    },
    choosePaymentTitleRow: {
        borderBottom: '1px solid #d8d8d8',

        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#4a4a4a'
    },
    addPaymentTitleRow: {
        borderBottom: '1px solid #d8d8d8',

        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#4a4a4a'
    },
    buttonsRow: {
        paddingTop: 20,
        textAlign: 'center',
        paddingBottom: 50
    }
});

export class DepositMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            qrcode: '',
        }
        this.addVisaCard = this.addVisaCard.bind(this);
        this.addMasterCard = this.addMasterCard.bind(this);
        this.addBankAccount = this.addBankAccount.bind(this);
        this.addPaypal = this.addPaypal.bind(this);
        this.depositWith = this.depositWith.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ data: res.data });
                this.setState({ currencyValue: res.data.currency });
            });
    }

    addVisaCard(ev) {
        this.props.callbackForAddPayment('add_credit_card', 'visa');
    }

    addMasterCard(ev) {
        this.props.callbackForAddPayment('add_credit_card', 'mastercard');
    }

    addBankAccount(ev) {
        this.props.callbackForAddPayment('add_credit_card', 'bankaccount');
    }

    addPaypal(ev) {
        this.props.callbackForAddPayment('add_credit_card', 'paypal');
    }

    depositWith(ev) {
        this.props.callbackForPayment(ev);
    }

    handleClick = () => {
        
        var postData = {
                user_id: this.state.data.pk,
                method: "49",
            };
            var formBody = [];
            for (var pd in postData) {
                var encodedKey = encodeURIComponent(pd);
                var encodedValue = encodeURIComponent(
                    postData[pd]
                );
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            return fetch(
                API_URL +
                    'accounting/api/asiapay/checkQrcode',
                {
                    method: 'POST',
                    headers: {
                        'content-type':
                            'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    body: formBody
                }
            ).then(function(res){
                console.log(res)
                if(res.ok){
                    return res.json();
                }
            }).then(function(data){
                let qrcode = data.qrcode;
                var request_time = data.request_time;
                var request_day = request_time.split('T')[0].replace(/-/g, "")
                console.log(request_day);
                request_time = request_time.split('T')[1].split('.')[0];
                console.log(request_time);
                var today = new Date();
                var current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var current_day = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
                console.log(current_day);
                console.log(current_time);
                if(current_day == request_day){
                    var time_diff = current_time - request_time;
                }else if(current_day - 1 == request_day){
                    //if(current_time + 24 - request_time <= 3)
                }
                
                
            })

        
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let addPaymentMethodTitle = formatMessage({
            id: 'deposit.add_payment_method'
        });
        let depositMethodTitle = formatMessage({
            id: 'deposit.deposit_method'
        });
        let choosePaymentMethodTitle = formatMessage({
            id: 'deposit.choose_payment_method'
        });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>
                            {depositMethodTitle}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                className={classes.choosePaymentTitleRow}
                            >
                                {choosePaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('qaicash_wechat');
                                    }}
                                >
                                    Qaicash WeChat
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('qaicash_alipay');
                                    }}
                                >
                                    Qaicash Alipay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('qaicash_bankTrans');
                                    }}
                                >
                                    Qaicash BT
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('qaicash_unionpay');
                                    }}
                                >
                                    Qaicash UnionPay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    disabled={true}
                                    onClick={() => {
                                        this.depositWith('qaicash_btc');
                                    }}
                                >
                                    Qaicash BitCoin
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    disabled={true}
                                    onClick={() => {
                                        this.depositWith('paypal');
                                    }}
                                >
                                    Paypal
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('linepay');
                                    }}
                                >
                                    Line Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('asia_bankTransfer');
                                    }}
                                >
                                    Asiapay LBT
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('asia_quickpay');
                                    }}
                                >
                                    Quick Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    
                                    onClick={() => {
                                        this.depositWith('asia_jdpay');
                                    }
                                        //this.handleClick
                                        
                                    }
                                >
                                    JD Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    // disabled={true}
                                    onClick={() => {
                                        this.depositWith('onlinepay');
                                    }}
                                >
                                    Online Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('unionpay');
                                    }}
                                >
                                    Union Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('asia_wechatpay');
                                    }}
                                >
                                    WeChat
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('asiapay_alipay');
                                    }}
                                >
                                    Ali Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('astropay');
                                    }}
                                >
                                    Astro Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('circlepay');
                                    }}
                                >
                                    Circle Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('payzod');
                                    }}
                                >
                                    Payzod
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('help2pay');
                                    }}
                                >
                                    Help2Pay
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('fgo');
                                    }}
                                >
                                    FGO
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('scratchcard');
                                    }}
                                >
                                    ScratchCard
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={() => {
                                        this.depositWith('paymentiq');
                                    }}
                                >
                                    PIQ
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                className={classes.addPaymentTitleRow}
                            >
                                {addPaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button
                                    className={classes.addButton}
                                    onClick={this.addVisaCard}
                                >
                                    <img src={images.src + 'visa-blue.svg'} alt='' />
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={this.addMasterCard}
                                >
                                    <img src={images.src + 'master-card.svg'} alt='' />
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={this.addBankAccount}
                                >
                                    <img src={images.src + 'bank-icon-black.svg'} alt='' />
                                </Button>
                                <Button
                                    className={classes.addButton}
                                    onClick={this.addPaypal}
                                >
                                    <img src={images.src + 'paypal.svg'} alt='' />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState }
        )(DepositMethod)
    )
);
