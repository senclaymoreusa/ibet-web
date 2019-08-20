import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import WithdrawSuccess from './withdraw_success';
import WithdrawError from './withdraw_error';
import WithdrawMethod from './withdraw_method';

import AddCreditCard from './add_credit_card';
import WithdrawAmount from './withdraw_amount';
import WithdrawQaicashLBT from './withdraw_types/withdraw_qaicash_lbt';

const styles = theme => ({
    root: {
        width: '100%',
    },
});


export class WithdrawMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentValue: 'withdraw_method',
            creditCardType: '',
            withdrawResultMessage: '',
        }
    }

 componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_FAIL) {
                    this.props.history.push('/');
                }
            });
    }

    addCard = (page, type) => {
        this.setState({ creditCardType: type });
        this.setState({ contentValue: page });
    }

    setPage = (page, msg) => {
        this.setState({ contentValue: page });

        if (msg)
            this.setState({ withdrawMessage: msg });
    }

    render() {
        const { classes } = this.props;
        const { contentValue } = this.state;

        return (
            <div className={classes.root}>
                {contentValue === 'withdraw_method' && <WithdrawMethod callbackForPayment={this.setPage} callbackForAddPayment={this.addCard} />}
                {contentValue === 'add_credit_card' && <AddCreditCard callbackFromParent={this.setPage} cardType={this.state.creditCardType} />}
                {contentValue === 'withdraw_amount' && <WithdrawAmount callbackFromParent={this.setPage} />}
                {contentValue === 'qaicash_lbt' && <WithdrawQaicashLBT callbackFromParent={this.setPage} />}

                {contentValue === 'success' && <WithdrawSuccess callbackFromParent={this.setPage} successMessage={this.state.withdrawMessage} />}
                {contentValue === 'error' && <WithdrawError callbackFromParent={this.setPage} errorMessage={this.state.withdrawMessage} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, withRef: true })(WithdrawMain), { withRef: true })));