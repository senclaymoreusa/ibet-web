import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
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
import DepositQaicashAlipay from './deposit_types/deposit_qaicash_alipay';
import DepositPaypal from './deposit_types/deposit_paypal';
import DepositAsiapayQucikpay from './deposit_types/deposit_asiapay_kuaijie';
import DepositAsiapayUnionpay from './deposit_types/deposit_asiapay_unionpay';
import DepositAsiapayWechatpay from './deposit_types/deposit_asiapay_wechatpay';

import DepositCirclepay from './deposit_types/deposit_circlepay';
import DepositPayzod from './deposit_types/deposit_payzod';
import DepositHelp2pay from './deposit_types/deposit_help2pay';
import DepositFgo from './deposit_types/deposit_fgo';
import DepositAstropay from './deposit_types/deposit_astropay';

const styles = theme => ({
    root: {
        width: '100%',
    },
});


export class DepositMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentValue: 'deposit_method',
            creditCardType: '',
            depositErrorMessage: '',
        }
    }

    addCard = (step, type) => {
        this.setState({ creditCardType: type });
        this.setState({ contentValue: step });
    }

    setPage = (step) => {
        this.setState({ contentValue: step });
    }

    swtInitialPage() {
        let e = 0;
    }

    setDepositErrorPage = (msg) => {
        this.setState({ depositErrorMessage: msg });
        this.setState({ contentValue: 'error' });
    }

    render() {
        const { classes } = this.props;
        const { contentValue } = this.state;

        return (
            <div className={classes.root}>
                {contentValue === 'deposit_method' && <DepositMethod callbackForPayment={this.setPage} callbackForAddPayment={this.addCard} />}
                {contentValue === 'add_credit_card' && <AddCreditCard callbackFromParent={this.setPage} cardType={this.state.creditCardType} />}
                {contentValue === 'deposit_amount' && <DepositAmount callbackFromParent={this.setPage} />}
                {contentValue === 'asiapay_alipay' && <DepositAsiapayAlipay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'linepay' && <DepositLinepay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'asia_jdpay' && <DepositAsiapayJDPay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'qaicash_wechat' && <DepositQaicah callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'qaicash_alipay' && <DepositQaicashAlipay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'paypal' && <DepositPaypal callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'asia_quickpay' && <DepositAsiapayQucikpay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'asia_wechatpay' && <DepositAsiapayWechatpay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'unionpay' && <DepositAsiapayUnionpay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'circlepay' && <DepositCirclepay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'payzod' && <DepositPayzod callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'help2pay' && <DepositHelp2pay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'fgo' && <DepositFgo callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {contentValue === 'astropay' && <DepositAstropay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}

                {contentValue === 'success' && <DepositSuccess callbackFromParent={this.setPage} />}
                {contentValue === 'error' && <DepositError callbackFromParent={this.setPage} errorMessage={this.state.depositErrorMessage} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState, withRef: true })(DepositMain), { withRef: true }));