import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputMask from 'react-input-mask';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ReactComponent as BankIcon } from '../../../../assets/img/svg/bank-icon-black.svg';
import { ReactComponent as PaypalIcon } from '../../../../assets/img/svg/paypal.svg';
import { ReactComponent as VisaIcon } from '../../../../assets/img/svg/visa-blue.svg';
import { ReactComponent as MastercardIcon } from '../../../../assets/img/svg/master-card.svg';

import { ReactComponent as PrevStepIcon } from '../../../../assets/img/svg/prev_step.svg';
import { ReactComponent as CvvIcon } from '../../../../assets/img/svg/card-cvv.svg';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    backCell: {
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    contentRow: {
        paddingLeft: 263,
        paddingRight: 262,
        paddingTop: 50,
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
    buttonCell: {
        paddingTop: 50,
        textAlign: 'center',
    },
    addButton: {
        width: 87,
        height: 58,
        marginLeft: 32,
        marginRight: 32,
        backgroundColor: '#efefef',
        display: 'inline-block',
        "&:hover": {
            backgroundColor: '#fff',
            border: '1px solid #32c5ff',
        },
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
    },
    cardInfoCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 16,
    },
    expireCell: {

    },
    cvvCell: {

    },
    detailText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        marginTop: 10,
        paddingLeft: 10,
        width: 400,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    expireText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        marginTop: 10,
        marginRight: 10,
        paddingLeft: 10,
        width: 190,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    cvvText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        marginTop: 10,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: 190,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    continueButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
    },
    rememberCell: {
        paddingTop: 20,
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        marginTop: 15,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1',
    },
    infoRow: {
        display: 'block',
    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',

    },
    infoValue: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a',
        marginLeft: 3,
    },
    detailRow: {
        paddingBottom: 15
    },
});


export class AddCreditCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameFocused: false,
            nameInvalid: true,

            number: '',
            numberFocused: false,
            numberInvalid: true,

            expireDate: '',
            expireDateFocused: false,
            expireDateInvalid: true,

            cvv: '',
            cvvFocused: false,
            cvvInvalid: true,

            rememberThisCard: false,
        }

        this.nameChanged = this.nameChanged.bind(this);
        this.nameFocused = this.nameFocused.bind(this);

        this.numberChanged = this.numberChanged.bind(this);
        this.numberFocused = this.numberFocused.bind(this);

        this.expireDateChanged = this.expireDateChanged.bind(this);
        this.expireDateFocused = this.expireDateFocused.bind(this);

        this.cvvChanged = this.cvvChanged.bind(this);
        this.cvvFocused = this.cvvFocused.bind(this);

        this.rememberClicked = this.rememberClicked.bind(this);

        this.backClicked = this.backClicked.bind(this);

        this.continueClicked = this.continueClicked.bind(this);
    }

    continueClicked(ev) {
        this.props.callbackFromParent(3);
    }

    nameChanged(event) {
        this.setState({ name: event.target.value });
        this.setState({ nameFocused: true });
        this.setState({ nameInvalid: (event.target.value.toString().length === 0) });
    }

    nameFocused(event) {
        this.setState({ nameFocused: true });
    }

    numberChanged(event) {
        this.setState({ number: event.target.value });
        this.setState({ numberFocused: true });
        this.setState({ numberInvalid: (event.target.value.toString().length < 19) });
    }

    numberFocused(event) {
        this.setState({ numberFocused: true });
    }

    expireDateChanged(event) {
        this.setState({ expireDate: event.target.value });
        this.setState({ expireDateFocused: true });


        if (event.target.value.toString().length < 5) {
            this.setState({ expireDateInvalid: true });
        } else {
            let month = event.target.value.split('/')[0];
            let monthInt = parseInt(month);

            if (month === '00' || monthInt > 12)
                this.setState({ expireDateInvalid: true });
            else {
                let year = event.target.value.split('/')[1];
                let yearInt = parseInt("20" + year);

                let expireDate = new Date();
                expireDate.setDate(1);
                expireDate.setMonth(monthInt - 1);
                expireDate.setFullYear(yearInt);

                let today = new Date();

                this.setState({ expireDateInvalid: (expireDate <= today) });
            }
        }
    }

    expireDateFocused(event) {
        this.setState({ expireDateFocused: true });
    }

    cvvChanged(event) {
        this.setState({ cvv: event.target.value });
        this.setState({ cvvFocused: true });

        this.setState({ cvvInvalid: (event.target.value.length < 3 || event.target.value === '000') });
    }

    cvvFocused(event) {
        this.setState({ cvvFocused: true });
    }

    rememberClicked(event) {
        this.setState({ rememberThisCard: event.target.checked });

    }

    componentDidMount() {

    }


    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    render() {
        const { classes } = this.props;
        const { cardType } = this.props;
        const { formatMessage } = this.props.intl;


        let titleMessage = formatMessage({ id: 'deposit.credit_card' });
        let rememberMessage = formatMessage({ id: 'deposit.remember_this_card' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <PrevStepIcon />
            </Button>);

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.backCell}>
                        {backButton}
                    </Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <span className={classes.title}>
                            {titleMessage}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.backCell}>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        <Grid container>
                            <Grid item xs={3} className={classes.cardTypeCell}>
                                <Button className={classes.cardTypeButton} disabled>
                                    {cardType === 'visa' && <VisaIcon />}
                                    {cardType === 'mastercard' && <MastercardIcon />}
                                    {cardType === 'bankaccount' && <BankIcon />}
                                    {cardType === 'paypal' && <PaypalIcon />}

                                </Button>
                            </Grid>
                            <Grid item xs={9} className={classes.cardInfoCell}>
                                <div className={classes.infoRow}>
                                    <span className={classes.infoLabel}>Fee:</span>
                                    <span className={classes.infoValue}>Free</span>
                                </div>
                                <div className={classes.infoRow}>
                                    <span className={classes.infoLabel}>Process Time:</span>
                                    <span className={classes.infoValue}>1-3 banking days</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} className={classes.detailRow}>
                                <TextField
                                    className={classes.detailText}
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.nameChanged}
                                    onFocus={this.nameFocused}
                                    error={this.state.nameInvalid && this.state.nameFocused}
                                    helperText={(this.state.nameInvalid && this.state.nameFocused) ? 'Please enter cardholder name.' : ' '}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.detailRow}>
                                <InputMask
                                    mask="9999 9999 9999 9999" maskChar={null}
                                    onChange={this.numberChanged}
                                    onFocus={this.numberFocused}
                                    value={this.state.number}

                                    className={classes.detailText}>
                                    {() => <TextField
                                        className={classes.detailText}
                                        placeholder="Card Number"
                                        type="text"
                                        error={(this.state.numberInvalid && this.state.numberFocused)}
                                        helperText={(this.state.numberInvalid && this.state.numberFocused) ? 'Please enter 16-digit card number.' : ' '}
                                        InputProps={{ disableUnderline: true }}
                                    />}
                                </InputMask>

                            </Grid>
                            <Grid item xs={6} className={classes.expireCell}>
                                <InputMask
                                    mask="99/99" maskChar={null}
                                    onChange={this.expireDateChanged}
                                    onFocus={this.expireDateFocused}
                                    value={this.state.expireDate}

                                    className={classes.expireText}>
                                    {() => <TextField
                                        className={classes.expireText}
                                        placeholder="MM/YY"
                                        type="text"
                                        error={(this.state.expireDateInvalid && this.state.expireDateFocused)}
                                        helperText={(this.state.expireDateInvalid && this.state.expireDateFocused) ? 'Invalid expiration card' : ' '}
                                        InputProps={{ disableUnderline: true }}
                                    />}
                                </InputMask>

                            </Grid>
                            <Grid item xs={6} className={classes.cvvCell}>
                                <InputMask
                                    mask="999" maskChar={null}
                                    onChange={this.cvvChanged}
                                    onFocus={this.cvvFocused}
                                    value={this.state.cvv}

                                    className={classes.cvvText}>
                                    {() => <TextField
                                        className={classes.cvvText}
                                        placeholder="CVV"
                                        type="text"
                                        error={(this.state.cvvInvalid && this.state.cvvFocused)}
                                        helperText={(this.state.cvvInvalid && this.state.cvvFocused) ? 'Invalid code' : ' '}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: <InputAdornment position="end"><CvvIcon /></InputAdornment>,
                                        }}
                                    />}
                                </InputMask>

                            </Grid>
                            <Grid item xs={12} className={classes.rememberCell}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.rememberThisCard}
                                            onChange={this.rememberClicked}
                                            color="default"
                                        />
                                    }
                                    label={rememberMessage}
                                />


                            </Grid>
                            <Grid item xs={12} className={classes.buttonCell}>
                                <Button className={classes.continueButton}
                                    onClick={this.continueClicked}
                                    disabled={this.state.nameInvalid ||
                                        this.state.numberInvalid ||
                                        this.state.expireDateInvalid ||
                                        this.state.cvvInvalid
                                    }
                                >Continue</Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(AddCreditCard)));