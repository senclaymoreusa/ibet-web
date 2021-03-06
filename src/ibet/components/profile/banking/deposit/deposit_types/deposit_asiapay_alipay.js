import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { authCheckState, sendingLog , logout, postLogout } from '../../../../../../actions';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';

var QRCode = require('qrcode.react');

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: 925,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797'
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
        paddingBottom: 50
    },
    cardTypeCell: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
        paddingTop: 15,
        textAlign: 'center'
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
        marginTop: 28
    },
    continueButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8'
    },
    backBankingButton: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8'
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
    },
    backButtonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    rememberCell: {
        paddingTop: 20
    },
    cardTypeButton: {
        width: 72,
        height: 48,
        borderRadius: 4.8,
        backgroundColor: '#f1f1f1'
    },
    infoCell: {
        paddingTop: 15
    },
    infoRow: {
        display: 'block'
    },
    infoLabel: {
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#4a4a4a'
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
        marginLeft: 3
    },
    detailRow: {
        paddingBottom: 15
    },
    leftButton: {
        display: 'inline-block',
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44
    },
    middleButton: {
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 90,
        height: 44
    },
    rightButton: {
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 4,
        backgroundColor: '#efefef',
        marginTop: 15,
        marginBottom: 15,
        width: 88,
        height: 44
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
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        }
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
        color: '#292929'
    }
});

const amounts = Object.freeze([300, 400, 500, 1000]);

class DepositAsiapayAlipay extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            error: false,
            data: '',
            type: '',
            qaicash_error: false,
            qaicash_error_msg: '',
            live_check_amount: false,
            button_disable: false,
            value: '',
            size: 128,
            fgColor: '#000000',
            bgColor: '#ffffff',
            level: 'L',
            renderAs: 'svg',
            includeMargin: false,
            show_qrcode: false,
            bankid: '',

            amountFocused: false,
            amountInvalid: true,
            showLinearProgressBar: false,

            currencyValue: 'RMB'
        };

        this.backClicked = this.backClicked.bind(this);
        this.amountFocused = this.amountFocused.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    amountChanged = event => {
        if (
            parseInt(event.target.value) > 1500 ||
            parseInt(event.target.value) < 300
        ) {
            this.setState({ amount: 0, amountInvalid: true });
        } else {
            this.setState({ amount: event.target.value, amountInvalid: false });
        }
    };

    amountFocused(event) {
        this.setState({ amountFocused: true });
    }

    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1) {
                this.props.history.push('/');
            }
        });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data });
            // this.setState({ currencyValue: res.data.currency });
        });
    }

    handleClick = () => {
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });
        let userid = this.state.data.pk;
        var postData = {
            amount: this.state.amount,
            userid: this.state.data.pk,
            currency: '0',
            PayWay: '42', //qrcode
            method: '41', //alipay
            RealName: this.state.data.last_name + this.state.data.first_name,
        };
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        return fetch(API_URL + 'accounting/api/asiapay/deposit', {
            method: 'POST',
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        })
            .then(function(res) {
                //console.log(res);
                currentComponent.setState({ showLinearProgressBar: false });
                if(res.status === 200){
                    return res.json();
                }else{
                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                }
                
            })
            .then(function(data) {
                //console.log(data);
                if(data.errorCode){
                    currentComponent.props.logout();
                    postLogout();
                    return;
                }
                let qrurl = data.qr;
                //console.log(qrurl);
                if (qrurl != null) {
                    const mywin = window.open(qrurl, 'asiapay-alipay');
                    var timer = setInterval(function() {
                        
                        if (mywin.closed) {
                            clearInterval(timer);
                            var postData = {
                                order_id: data.oid,
                                userid: 'n' + userid,
                                CmdType: '01'
                            };
                            var formBody = [];
                            for (var pd in postData) {
                                var encodedKey = encodeURIComponent(pd);
                                var encodedValue = encodeURIComponent(
                                    postData[pd]
                                );
                                formBody.push(encodedKey + '=' + encodedValue);
                            }
                            formBody = formBody.join('&');

                            return fetch(
                                API_URL + 'accounting/api/asiapay/orderStatus',
                                {
                                    method: 'POST',
                                    headers: {
                                        'content-type':
                                            'application/x-www-form-urlencoded; charset=UTF-8'
                                    },
                                    body: formBody
                                }
                            )
                                .then(function(res) {
                                    if(res.status === 200){
                                        return res.json();
                                    }else{
                                        currentComponent.props.callbackFromParent("error", "Transaction failed.");
                                        
                                    }
                                })
                                .then(function(data) {
                                    //console.log(data.status);
                                    if (data.status === '001') {
                                        //alert('Transaction is approved.');
                                        const body = JSON.stringify({
                                            type: 'add',
                                            username:
                                                currentComponent.state.data
                                                    .username,
                                            balance:
                                                currentComponent.state.amount
                                        });
                                        //console.log(body);
                                        axios
                                            .post(
                                                API_URL +
                                                    `users/api/addorwithdrawbalance/`,
                                                body,
                                                config
                                            )
                                            .then(res => {
                                                if (res.data === 'Failed') {
                                                    //currentComponent.setState({ error: true });
                                                    currentComponent.props.callbackFromParent(
                                                        'error',
                                                        'Transaction failed.'
                                                    );
                                                } else if (
                                                    res.data ===
                                                    'The balance is not enough'
                                                ) {
                                                    currentComponent.props.callbackFromParent(
                                                        'error',
                                                        'Cannot deposit this amount.'
                                                    );
                                                } else {
                                                    currentComponent.props.callbackFromParent(
                                                        'success',
                                                        currentComponent.state
                                                            .amount
                                                    );
                                                }
                                            });
                                    } else {
                                        currentComponent.props.callbackFromParent(
                                            'error',
                                            data.StatusMsg
                                        );
                                    }
                                });
                        }
                    }, 1000);
                }else{
                    if(data.StatusCode === ('00005' || '100504' || '100505' || '00800' || '100803' || '000008' || '100305' || '100306' || '100307'
                        || '100606' || '100608' || '100603' || '100604' || '100605' || '100901' || '100902' || '100803' || '00050' || '00003' || '00002')){
                        currentComponent.props.callbackFromParent(
                                                        'error',
                                                        data.StatusMsg
                                                    );
                    }else{
                        currentComponent.props.callbackFromParent(
                                                        'error',
                                                        'Transaction failed.'
                                                    );
                    }
                    
                }
                
            })
            .catch(function(err) {
                // catch
                // console.log('Request failed', err);
                currentComponent.props.callbackFromParent(
                    'error',
                    "Something is wrong."
                );

                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                sendingLog(err);
            });
    };

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar } = this.state;

        let depositAmountMessage = formatMessage({
            id: 'deposit.deposit_amount'
        });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} alt=''/>
            </Button>
        );

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
                        <Grid item xs={2} className={classes.backCell}></Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && (
                                <LinearProgress />
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.contentRow}
                            style={
                                showLinearProgressBar === true
                                    ? { pointerEvents: 'none' }
                                    : { pointerEvents: 'all' }
                            }
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.cardTypeCell}
                                >
                                    <Button
                                        className={classes.cardTypeButton}
                                        disabled
                                    >
                                        Ali Pay
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    {amounts.map((x, i) => {
                                        return (
                                            <Button
                                                className={
                                                    i === 0
                                                        ? classes.leftButton
                                                        : i === 3
                                                        ? classes.rightButton
                                                        : classes.middleButton
                                                }
                                                key={i}
                                                onClick={() =>
                                                    this.setState({
                                                        amount: x,
                                                        amountInvalid: false,
                                                        amountFocused: false
                                                    })
                                                }
                                            >
                                                {x}
                                            </Button>
                                        );
                                    })}
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.detailRow}
                                >
                                    <TextField
                                        className={classes.otherText}
                                        placeholder="Deposit 300 - 1500"
                                        onChange={this.amountChanged}
                                        onFocus={this.amountFocused}
                                        error={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                        }
                                        helperText={
                                            this.state.amountInvalid &&
                                            this.state.amountFocused
                                                ? 'Please enter a valid amount.'
                                                : ' '
                                        }
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    Other
                                                </InputAdornment>
                                            ),
                                            inputProps: {
                                                step: 10,
                                                min: 300,
                                                max: 1500
                                            }
                                        }}
                                        type="number"
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.amountRow}>
                                    <div className={classes.amountText}>
                                        <FormattedNumber
                                            value={this.state.amount}
                                            style={`currency`}
                                            currency={this.state.currencyValue}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.amountRightRow}
                                >
                                    <span className={classes.amountText}>
                                        Total
                                    </span>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.buttonCell}
                                >
                                    <Button
                                        className={classes.continueButton}
                                        onClick={this.handleClick}
                                        disabled={this.state.amountInvalid}
                                    >
                                        {continueMessage}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.backButtonCell}
                                >
                                    <Button
                                        className={classes.backBankingButton}
                                        onClick={this.backClicked}
                                    >
                                        {backMessage}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div
                        className="asiapay-qr"
                        style={{
                            display: this.state.show_qrcode ? 'block' : 'none'
                        }}
                    >
                        <QRCode
                            value={this.state.value}
                            size={this.state.size}
                            fgColor={this.state.fgColor}
                            bgColor={this.state.bgColor}
                            level={this.state.level}
                            renderAs={this.state.renderAs}
                            includeMargin={this.state.includeMargin}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState, logout }
        )(DepositAsiapayAlipay)
    )
);
