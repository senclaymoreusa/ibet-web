import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    logout, handle_search,
    setLanguage,
    show_account_menu,
    hide_deposit_success,
    show_deposit
} from '../../actions';
import { images } from '../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
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
    logo: {
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 20,
    },
    userButton: {
        border: '1px solid #fe0000',
        minWidth: 32,
        height: 32,
        padding: 0,
        marginTop: 6,
        marginBottom: 6,

    },
    balanceButton: {
        backgroundColor: '#fe0000',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#fe0000',
        },
        height: 32,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    depositIcon: {
        marginRight: 5,
        marginTop: -4,
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
    spaceRow: {
        backgroundColor: '#f1f1f1',
        height: 30,
    },
    depositRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
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
    contentRow: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    },
    depositAgainButton: {
        marginTop: 10,
        marginBottom: 10,
        textTransform: 'capitalize',
        display: 'block',
        width: 160,
    },
    doneButton: {
        marginTop: 10,
        marginBottom: 50,
        textTransform: 'capitalize',
        display: 'block',
        width: 160,

    },
    successLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 24,
    },
    depositCompletedLabel: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 15.8,
        marginBottom: 20,
    },
    successIcon: {
        marginTop: 30,
        marginBottom: 20,
    }
});


export class DepositSuccess extends React.Component {


    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_deposit_success();
    }

    doneClicked = (event) => {
        this.props.hide_deposit_success();
        this.props.show_account_menu();
    }

    depositAgainClicked = (event) => {
        this.props.hide_deposit_success();
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
                        <img src={images.src + 'complete-deposit-icon.svg'} className={classes.successIcon}  alt=""/>
                        <div className={classes.successLabel}>
                            <FormattedMessage id="deposit.successful" defaultMessage="Successful!" />
                        </div>
                        <div className={classes.depositCompletedLabel}>
                            <FormattedMessage id="deposit.deposit-completed" defaultMessage="Deposit was completed." />
                        </div>
                        <Button className={classes.depositAgainButton} variant="outlined" onClick={this.depositAgainClicked}>Deposit Again</Button>
                        <Button className={classes.doneButton} variant="contained" color="primary" onClick={this.doneClicked}>Done</Button>
                    </Grid>
                </Grid>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
    }
}

DepositSuccess.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_deposit, show_account_menu, hide_deposit_success })(DepositSuccess))));