import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../../../../../util_config';
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


export class WithdrawMethod extends Component {

    constructor(props) {
        super(props);

        this.addVisaCard = this.addVisaCard.bind(this);
        this.addMasterCard = this.addMasterCard.bind(this);
        this.addBankAccount = this.addBankAccount.bind(this);
        this.addPaypal = this.addPaypal.bind(this);
        this.withdrawWith = this.withdrawWith.bind(this);
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

    withdrawWith(ev) {
        this.props.callbackForPayment(ev);
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let addPaymentMethodTitle = formatMessage({ id: 'withdraw.add_payment_method' });
        let withdrawMethodTitle = formatMessage({ id: 'withdraw.withdraw_method' });
        let choosePaymentMethodTitle = formatMessage({ id: 'withdraw.choose_payment_method' });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>
                            {withdrawMethodTitle}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        <Grid container>
                            <Grid item xs={12} className={classes.choosePaymentTitleRow}>
                                {choosePaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button className={classes.addButton} onClick={() => { this.withdrawWith("qaicash_lbt") }}>
                                    Qaicash Lbt
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.withdrawWith("qaicash_btc") }}>
                                    Qaicash BTC
                                </Button>
                                <Button className={classes.addButton} onClick={() => { this.withdrawWith("asiapay_bankTransfer") }}>
                                    Asiapay Bank Transfer
                                </Button>

                            </Grid>
                            <Grid item xs={12} className={classes.addPaymentTitleRow}>
                                {addPaymentMethodTitle}
                            </Grid>
                            <Grid item xs={12} className={classes.buttonsRow}>
                                <Button className={classes.addButton} disabled={true} onClick={this.addVisaCard}>
                                    <img src={images.src + 'visa-blue.svg'}  alt=""/>
                                </Button>
                                <Button className={classes.addButton} disabled={true} onClick={this.addMasterCard}>
                                    <img src={images.src + 'master-card.svg'}  alt=""/>
                                </Button>
                                <Button className={classes.addButton} disabled={true} onClick={this.addBankAccount}>
                                    <img src={images.src + 'bank-icon-black.svg'}  alt=""/>
                                </Button>
                                <Button className={classes.addButton} disabled={true} onClick={this.addPaypal}>
                                    <img src={images.src + 'paypal.svg'}  alt=""/>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(WithdrawMethod)));