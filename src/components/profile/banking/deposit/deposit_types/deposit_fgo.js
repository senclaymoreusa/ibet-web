import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputMask from 'react-input-mask';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        //height: 688,
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
        paddingBottom: 50,
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 15,
        textAlign: 'center',
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
    continueButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
    },
    backBankingButton: {
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
    backButtonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
    },
    rememberCell: {
        paddingTop: 20,
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1',
    },
    infoCell: {
        paddingTop: 15,
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
        paddingBottom: 15,
        paddingTop: 15,
    },
    leftButton: {
        display: 'inline-block',
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44,
    },
    middleButton: {
        marginRight: 10,
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44,
    },
    rightButton: {
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 88,
        height: 44,
    },
    otherText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
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
    amountRow: {
        height: 40,
        borderBottom: '4px solid #5e5e5e'
    },
    amountRightRow: {
        height: 40,
        textAlign: 'right',
        borderBottom: '4px solid #5e5e5e'
    },
    amountText: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
    },
});

class DepositFgo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pin: '',
            serial: '',
            error: false,
            data: '',
            live_check_pin: false,
            live_check_serial: false,
            button_disable: false,

            serialFocused: false,
            serialInvalid: true,

            pinFocused: false,
            pinInvalid: true,

            showLinearProgressBar: false,
        };

        this.backClicked = this.backClicked.bind(this);

        this.pinChanged = this.pinChanged.bind(this);
        this.pinFocused = this.pinFocused.bind(this);

        this.serialChanged = this.serialChanged.bind(this);
        this.serialFocused = this.serialFocused.bind(this);
        this.handleClick = this.handleClick.bind(this);

        // this.onInputChange_pin = this.onInputChange_pin.bind(this);
        // this.onInputChange_serial = this.onInputChange_serial.bind(this);
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

    // async onInputChange_pin(event) {
    //     if (!event.target.value.match(/^[0-9.]+$/) || event.target.value.length != 14) {
    //         this.setState({ live_check_pin: true, button_disable: true });
    //     } else {
    //         this.setState({ live_check_pin: false })
    //     }
    //     await this.setState({ pin: event.target.value })
    //     this.check_button_disable()
    // }

    // async onInputChange_serial(event) {
    //     if (event.target.value.length != 15) {
    //         this.setState({ live_check_serial: true, button_disable: true });
    //     } else {
    //         this.setState({ live_check_serial: false })
    //     }
    //     await this.setState({ serial: event.target.value })
    //     this.check_button_disable()
    // }

    // check_button_disable() {
    //     if (this.state.pin && !this.state.live_check_pin && this.state.serial && !this.state.live_check_serial) {
    //         this.setState({ button_disable: false })
    //     }
    // }



    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    pinChanged(event) {
        this.setState({ pin: event.target.value });
        this.setState({ pinFocused: true });
        this.setState({ pinInvalid: (event.target.value.toString().length != 14) });
    }

    pinFocused(event) {
        this.setState({ pinFocused: true });
    }

    serialChanged(event) {
        this.setState({ serial: event.target.value });
        this.setState({ serialFocused: true });
        this.setState({ serialInvalid: (event.target.value.toString().length != 15) });
    }

    serialFocused(event) {
        this.setState({ serialFocused: true });
    }

    handleClick = () => {
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        let pin = this.state.pin;
        let serial = this.state.serial;
        let username = this.state.data.username;

        var postData = {
            "pin": pin,
            "user": username,
            "serial": serial,
        }
        const token = localStorage.getItem('token');
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return fetch(API_URL + 'accounting/api/fgate/chargeCard', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': 'Token ' + token
            },
            body: formBody
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            if (data.error_code === '00' && data.status === '0') {
                currentComponent.props.callbackFromParent('error', data.message);
            } else if (data.error_code === '00' && data.status === '1') {
                //alert('Your fgo card is successfully deposit to your account!');
                const body = JSON.stringify({
                    type: 'add',
                    username: username,
                    balance: data.amount,
                });
                axios.post(API_URL + `users/api/addorwithdrawbalance/`, body, config)
                    .then(res => {
                        if (res.data === 'Failed') {
                            currentComponent.props.callbackFromParent("error", "Transaction failed.");
                        } else if (res.data === 'The balance is not enough') {
                            currentComponent.props.callbackFromParent("error", "Cannot deposit this amount.");
                        } else {
                            currentComponent.props.callbackFromParent("success", data.amount);
                        }
                    });

                currentComponent.setState({ showLinearProgressBar: false });

            } else {
                // alert(data.message);
                currentComponent.props.callbackFromParent('error', data.error_message);

            }
            // window.location.reload()
        });
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

        let depositAmountMessage = formatMessage({ id: 'deposit.deposit_amount' });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} />
            </Button>);

        return (
            <div className={classes.root}>
                <form>
                    <Grid container>
                        <Grid item xs={2} className={classes.backCell}>
                            {backButton}
                        </Grid>
                        <Grid item xs={8} className={classes.titleRow}>
                            <span className={classes.title}>
                                {depositAmountMessage}
                            </span>
                        </Grid>
                        <Grid item xs={2} className={classes.backCell}>
                        </Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && <LinearProgress />}
                        </Grid>
                        <Grid item xs={12} className={classes.contentRow}
                            style={(showLinearProgressBar === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                            <Grid container>
                                <Grid item xs={12} className={classes.cardTypeCell}>
                                    <Button className={classes.cardTypeButton} disabled>
                                        Fgo
                                </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <InputMask
                                        mask="99999999999999" maskChar={null}
                                        onFocus={this.pinFocused}
                                        onChange={this.pinChanged}
                                        value={this.state.pin}
                                        className={classes.otherText}>
                                        {() => <TextField
                                            className={classes.otherText}
                                            placeholder="Card Number"
                                            type="text"
                                            error={(this.state.pinInvalid && this.state.pinFocused)}
                                            helperText={(this.state.pinInvalid && this.state.pinFocused) ? 'Please enter a valid 14-digit pin number.' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    {/* <TextField
                                        className={classes.otherText}
                                        placeholder="Card serial number"
                                        onFocus={this.serialFocused}
                                        onChange={this.serialChanged}
                                        error={this.state.serialInvalid && this.state.serialFocused}
                                        helperText={(this.state.serialInvalid && this.state.serialFocused) ? 'Please enter a valid serial number' : ' '}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        type="text"
                                    /> */}

                                    <InputMask
                                        mask="***************" maskChar={null}
                                        onFocus={this.serialFocused}
                                        onChange={this.serialChanged}
                                        value={this.state.serial}
                                        className={classes.otherText}>
                                        {() => <TextField
                                            className={classes.otherText}
                                            placeholder="Card Serial Number"
                                            type="text"
                                            error={this.state.serialInvalid && this.state.serialFocused}
                                            helperText={(this.state.serialInvalid && this.state.serialFocused) ? 'Please enter a valid 15-digit serial number' : ' '}
                                            InputProps={{ disableUnderline: true }}
                                        />}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonCell}>
                                    <Button className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={this.state.pinInvalid || this.state.serialInvalid}
                                    >{continueMessage}</Button>
                                </Grid>
                                <Grid item xs={12} className={classes.backButtonCell}>
                                    <Button className={classes.backBankingButton}
                                        onClick={this.backClicked}
                                    >{backMessage}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>

            // <div>
            //         <form className='fgo-form'>
            //             <div>
            //                 <label>
            //                     <b>
            //                         <FormattedMessage id="deposit.amount" defaultMessage='Please enter the pin of your Fgo card' />
            //                     </b>
            //                 </label>
            //             </div>

            //             <TextField
            //                 className={classNames(classes.margin, classes.textField)}
            //                 variant="outlined"
            //                 type={'text'}
            //                 value={this.state.pin || ''}
            //                 onChange={this.onInputChange_pin}
            //             />
            //             {this.state.live_check_pin && <div style={{ color: 'red' }}> <FormattedMessage id="error.pin" defaultMessage='Pin is not valid' /> </div>}
            //             <br />
            //             <div>
            //                 <label>
            //                     <b>
            //                         <FormattedMessage id="deposit.amount" defaultMessage='Please enter the serial of your Fgo card' />
            //                     </b>
            //                 </label>
            //             </div>

            //             <TextField
            //                 className={classNames(classes.margin, classes.textField)}
            //                 variant="outlined"
            //                 type={'text'}
            //                 value={this.state.serial || ''}
            //                 onChange={this.onInputChange_serial}
            //             />
            //             {this.state.live_check_serial && <div style={{ color: 'red' }}> <FormattedMessage id="error.serial" defaultMessage='Serial is not valid' /> </div>}
            //             <br />

            //             <div className='fgo-button'  >
            //                 <Button
            //                     variant="contained"
            //                     color="primary"
            //                     className={classes.button}
            //                     onClick={function () {

            //                     }}
            //                 >
            //                     PAY NOW
            //                 </Button>

            //             </div>


            //         </form>
            //     </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps)(DepositFgo)));