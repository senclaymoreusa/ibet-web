import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';

import DepositError from './deposit_error';
import DepositMethod from './deposit_method';
import AddCreditCard from './add_credit_card';
import DepositAmount from './deposit_amount';

import DepositAsiapayAlipay from './deposit_types/deposit_asiapay_alipay';
import DepositLinepay from './deposit_types/deposit_linepay';
import DepositAsiapayJDPay from './deposit_types/deposit_asiapay_jdpay';


const styles = theme => ({
    root: {
        width: '100%',
    },
});


export class DepositMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: 1,
            creditCardType:'',
            depositErrorMessage:'',
        }
    }

    addCard = (step, type) => {
        this.setState({ creditCardType: type });
        this.setState({ stepValue: step });
    }

    setPage = (step) => {
        this.setState({ stepValue: step });
    }

    setDepositErrorPage = (msg) => {
        this.setState({ depositErrorMessage: msg });
        this.setState({ stepValue: 11 });
    }

    render() {
        const { classes } = this.props;
        const { stepValue } = this.state;

        return (
            <div className={classes.root}>
                {stepValue === 1 && <DepositMethod callbackForPayment={this.setPage} callbackForAddPayment={this.addCard}/>}
                {stepValue === 2 && <AddCreditCard callbackFromParent={this.setPage} cardType={this.state.creditCardType}/>}
                {stepValue === 3 && <DepositAmount callbackFromParent={this.setPage} />}
                {stepValue === 4 && <DepositAsiapayAlipay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {stepValue === 5 && <DepositLinepay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}
                {stepValue === 6 && <DepositAsiapayJDPay callbackFromParent={this.setPage} callbackFromParentForError={this.setDepositErrorPage} />}

                {stepValue === 0 && <DepositSuccess callbackFromParent={this.setPage} />}

                {stepValue === 11 && <DepositError callbackFromParent={this.setPage} errorMessage={this.state.depositErrorMessage}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositMain)));