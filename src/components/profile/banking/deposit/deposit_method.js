import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { ReactComponent as BankIcon } from '../../../../assets/img/svg/bank-icon-black.svg';
import { ReactComponent as PaypalIcon } from '../../../../assets/img/svg/paypal.svg';
import { ReactComponent as VisaIcon } from '../../../../assets/img/svg/visa-blue.svg';
import { ReactComponent as MastercardIcon } from '../../../../assets/img/svg/master-card.svg';

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
                                    <VisaIcon />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addMasterCard}>
                                    <MastercardIcon />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addBankAccount}>
                                    <BankIcon />
                                </Button>
                                <Button className={classes.addButton} onClick={this.addPaypal}>
                                    <PaypalIcon />
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