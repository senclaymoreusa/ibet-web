import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../../../../util_config';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
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
        marginTop: 28,
    },
    contentRow: {
        paddingLeft: 123,
        paddingRight: 122,
        paddingTop: 50,
    },
    buttonCell: {
        paddingTop: 50,
        textAlign: 'center',
    },
    addButton: {
        width: 87,
        height: 58,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 32,
        backgroundColor: '#efefef',
        display: 'inline-block',
        "&:hover": {
            backgroundColor: '#fff',
            border: '1px solid #32c5ff',
        },
    },
    choosePaymentTitleRow: {
        borderBottom: '1px solid #d8d8d8',

        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#4a4a4a',
    },
    addPaymentTitleRow: {
        borderBottom: '1px solid #d8d8d8',

        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#4a4a4a',
    },
    buttonsRow: {
        paddingTop: 20,
        textAlign: 'center',
        paddingBottom: 50,
    },
});


export class DepositMethod extends Component {

    constructor(props) {
        super(props);

        this.addVisaCard = this.addVisaCard.bind(this);
        this.addMasterCard = this.addMasterCard.bind(this);
        this.addBankAccount = this.addBankAccount.bind(this);
        this.addPaypal = this.addPaypal.bind(this);
        this.depositWith = this.depositWith.bind(this);
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

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let addPaymentMethodTitle = formatMessage({ id: 'deposit.add_payment_method' });
        let depositMethodTitle = formatMessage({ id: 'deposit.deposit_method' });
        let choosePaymentMethodTitle = formatMessage({ id: 'deposit.choose_payment_method' });

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
                            <Grid item xs={12} className={classes.choosePaymentTitleRow}>
                                {choosePaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("qaicash_wechat") }}>
                                    Qaicash WeChat
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("qaicash_alipay") }}>
                                    Qaicash Alipay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("qaicash_bankTrans") }}>
                                    Qaicash BT
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("qaicash_unionpay") }}>
                                    Qaicash UnionPay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("qaicash_btc") }}>
                                    Qaicash BitCoin
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("paypal") }}>
                                    Paypal
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("linepay") }} >
                                    Line Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("asia_quickpay") }}>
                                    Quick Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("asia_jdpay") }}>
                                    JD Pay
                                </Button>
                                <Button className={classes.addButton} disabled={true} onClick={() => { this.depositWith("onlinepay") }}>
                                    Online Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("unionpay") }}>
                                    Union Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("asia_wechatpay") }}>
                                    WeChat
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("asiapay_alipay") }} >
                                    Ali Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("astropay") }}>
                                    Astro Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("circlepay") }}>
                                    Circle Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("payzod") }}>
                                    Payzod
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("help2pay") }}>
                                    Help2Pay
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("fgo") }}>
                                    FGO
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.depositWith("scratchcard") }}>
                                    ScratchCard
                                </Button>
                            </Grid>
                            <Grid item xs={12} className={classes.addPaymentTitleRow}>
                                {addPaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button className={classes.addButton} onClick={this.addVisaCard}>
                                <img src={images.src + 'visa-blue.svg'} />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addMasterCard}>
                                <img src={images.src + 'master-card.svg'} />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addBankAccount}>
                                <img src={images.src + 'bank-icon-black.svg'} />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addPaypal}>
                                <img src={images.src + 'paypal.svg'} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositMethod)));