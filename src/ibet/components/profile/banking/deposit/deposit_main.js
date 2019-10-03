import React, { Component, forwardRef, useRef, useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState,
    hide_deposit_main_menu,
    show_deposit_main_menu
} from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';
import DepositError from './deposit_error';
import DepositMethod from './deposit_method';
import AddCreditCard from './add_credit_card';
import DepositAmount from './deposit_amount';
import DepositAsiapayAlipay from './deposit_types/deposit_asiapay_alipay';
import DepositLinepay from './deposit_types/deposit_linepay';
import DepositAsiapayJDPay from './deposit_types/deposit_asiapay_jdpay';
import DepositQaicah from './deposit_types/deposit_qaicash';
import DepositQaicashUnionpay from './deposit_types/deposit_qaicash_unionpay';
import DepositQaicashAlipay from './deposit_types/deposit_qaicash_alipay';
import DepositQaicashBT from './deposit_types/deposit_qaicash_bankTrans';
import DepositPaypal from './deposit_types/deposit_paypal';
import DepositAsiapayQucikpay from './deposit_types/deposit_asiapay_kuaijie';
import DepositAsiapayUnionpay from './deposit_types/deposit_asiapay_unionpay';
import DepositAsiapayWechatpay from './deposit_types/deposit_asiapay_wechatpay';
import DepositQaicashBTC from './deposit_types/deposit_qaicash_btc';
import DepositCirclepay from './deposit_types/deposit_circlepay';
import DepositPayzod from './deposit_types/deposit_payzod';
import DepositHelp2pay from './deposit_types/deposit_help2pay';
import DepositFgo from './deposit_types/deposit_fgo';
import DepositAstropay from './deposit_types/deposit_astropay';
import DepositAsiapayOnlinePay from './deposit_types/deposit_asiapay_onlinepay';
import DepositAsiapayBT from './deposit_types/deposit_asiapay_BT'
import DepositScratchCard from './deposit_types/deposit_scratchcard';
import DepositPIQ from './deposit_types/deposit_piq';

const styles = theme => ({
    root: {
        width: '100%'
    }
});

export class DepositMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentValue: 'deposit_method',
            creditCardType: '',
            depositResultMessage: ''
        };

        this.setPage = this.setPage.bind(this);
    }

    addCard = (page, type) => {
        this.setState({ creditCardType: type });
        this.setState({ contentValue: page });
    };


    setPage = (page, msg) => {
        this.props.hide_deposit_main_menu();
        this.setState({ contentValue: page });

        if (msg) this.setState({ depositMessage: msg });
    };

    render() {
        const { classes } = this.props;
        const { contentValue } = this.state;

        return (
            <div className={classes.root}>
                {(contentValue === 'deposit_method' || this.props.showDepositMain) && (
                    <DepositMethod
                        callbackForPayment={this.setPage}
                        callbackForAddPayment={this.addCard}
                    />
                )}
                {contentValue === 'add_credit_card'&& (
                    <AddCreditCard
                        callbackFromParent={this.setPage}
                        cardType={this.state.creditCardType}
                    />
                )}
                {contentValue === 'deposit_amount' && (
                    <DepositAmount callbackFromParent={this.setPage} />
                )}
                {contentValue === 'asiapay_alipay' && (
                    <DepositAsiapayAlipay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'linepay' && (
                    <DepositLinepay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'asia_jdpay' && (
                    <DepositAsiapayJDPay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'qaicash_wechat' && (
                    <DepositQaicah callbackFromParent={this.setPage} />
                )}
                {contentValue === 'qaicash_alipay' && (
                    <DepositQaicashAlipay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'qaicash_bankTrans' && (
                    <DepositQaicashBT callbackFromParent={this.setPage} />
                )}
                {contentValue === 'qaicash_unionpay' && (
                    <DepositQaicashUnionpay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'qaicash_btc' && (
                    <DepositQaicashBTC callbackFromParent={this.setPage} />
                )}
                {contentValue === 'paypal' && (
                    <DepositPaypal callbackFromParent={this.setPage} />
                )}
                {contentValue === 'asia_bankTransfer' && (
                    <DepositAsiapayBT callbackFromParent={this.setPage} />
                )}
                {contentValue === 'asia_quickpay' && (
                    <DepositAsiapayQucikpay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'asia_wechatpay' && (
                    <DepositAsiapayWechatpay
                        callbackFromParent={this.setPage}
                    />
                )}
                {contentValue === 'unionpay' && (
                    <DepositAsiapayUnionpay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'circlepay' && (
                    <DepositCirclepay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'payzod' && (
                    <DepositPayzod callbackFromParent={this.setPage} />
                )}
                {contentValue === 'help2pay' && (
                    <DepositHelp2pay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'fgo' && (
                    <DepositFgo callbackFromParent={this.setPage} />
                )}
                {contentValue === 'astropay' && (
                    <DepositAstropay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'onlinepay' && (
                    <DepositAsiapayOnlinePay callbackFromParent={this.setPage} />
                )}
                {contentValue === 'scratchcard' && (
                    <DepositScratchCard callbackFromParent={this.setPage} />
                )}
                {contentValue === 'paymentiq' && (
                    <DepositPIQ callbackFromParent={this.setPage} />
                )}
                {contentValue === 'success' && (
                    <DepositSuccess
                        callbackFromParent={this.setPage}
                        successMessage={this.state.depositMessage}
                    />
                )}
                {contentValue === 'error' && (
                    <DepositError
                        callbackFromParent={this.setPage}
                        errorMessage={this.state.depositMessage}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang,
        showDepositMain: state.general.show_deposit_main_menu,
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps, { authCheckState, hide_deposit_main_menu, forwardRef: true }
        )(DepositMain),
        { withRef: true }
    )
);
