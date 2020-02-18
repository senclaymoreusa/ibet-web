import React, { Component } from 'react';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../../util_config';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { authCheckState, sendingLog, logout, postLogout  } from '../../../../../../actions';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import Radio from '@material-ui/core/Radio';
import 'react-image-picker/dist/index.css';




const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const bankList = [
    { label: '工商银行', value: '1' },
    { label: '农业银行', value: '3'},
    { label: '中国银行', value: '7' },
];

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
    bankRow: {
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        height: 77,
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
    },
    bankList: {
        width: '100%',
        height: 77
    },
    table: {
        minWidth: 650,
    },
});

const amounts = Object.freeze([100, 200, 500, 1000]);

class DepositAsiapayBT extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            amount: '',
            currency: '',
            realname: '',
            error: false,
            data: '',
            type: '',
            qaicash_error: false,
            qaicash_error_msg: '',
            live_check_amount: false,
            button_disable: true,
            value: '',
            order_id: '',
            BankName: '',
            CardChName: '',
            CardNumber: '',
            CardBankName: '',
            bankid: '',
            image: null,

            amountFocused: false,
            amountInvalid: true,

            realnameFocused: false,
            realnameInvalid: true,

            currencyValue: 'RMB',
            showLinearProgressBar: false
        };

        this.onPick = this.onPick.bind(this);

        this.bankChanged = this.bankChanged.bind(this);
        this.realnameChanged = this.realnameChanged.bind(this);
        this.realnameFocused = this.realnameFocused.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data });
        });
    }

    amountChanged = event => {
        if (
            event.target.value.length === 0 ||
            parseInt(event.target.value) > 50000 ||
            parseInt(event.target.value) < 100
        ) {
            this.setState({ amount: 0, amountInvalid: true });
        } else {
            this.setState({ amountInvalid: false, amount: event.target.value });
        }
    };
    realnameChanged = event => {
        this.setState({ realname: event.target.value });
        this.setState({ realnameFocused: true });
        this.setState({ realnameInvalid: (event.target.value.length < 2) });
    }
    realnameFocused(event){
        this.setState({ realnameFocused: true });
    }


    amountFocused = () => {
        this.setState({ amountFocused: true });
    };

    backClicked = () => {
        this.props.callbackFromParent('deposit_method');
    };

    onPick(image) {
        this.setState({ image });
        this.setState({ bankid: image.value });
    }

    handleClick = () => {
        let currentComponent = this;
        currentComponent.setState({ showLinearProgressBar: true });
        
        var postData = {
            amount: this.state.amount,
            userid: this.state.data.pk,
            currency: '0',
            PayWay: '10', //网银转账
            method: this.state.bankid, //银行卡
            RealName : this.state.realname,
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
                console.log(res)
                if(res.status === 200){
                    return res.json();
                }else{
                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                }
            })
            .then(function(data) {
                if(data.errorCode){
                    currentComponent.props.logout();
                    postLogout();
                    return;
                }
                currentComponent.setState({ showLinearProgressBar: false });
                //console.log(data.order_id);
                if(data.StatusMsg === 'OK'){
                    
                    // currentComponent.setState({ order_id: data.order_id});
                    // currentComponent.setState({ CardNumber: data.CardNumber});
                    // currentComponent.setState({ BankName: data.BankName});
                    // currentComponent.setState({ CardChName: data.CardChName});
                    // currentComponent.setState({ CardBankName: data.CardBankName});
                    currentComponent.props.callbackFromParent('bank_transfer',data.order_id);
                   
                }else{
                    currentComponent.props.callbackFromParent('error',data.StatusMsg);
                }
                
            }).catch(function (err) {  
            //console.log('Request failed', err);
            currentComponent.props.callbackFromParent("error", "Something is wrong.");
            sendingLog(err);
        });
    };

    bankChanged = event => {
        this.setState({ bankid: event.target.value });
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
                <img src={images.src + 'prev_step.svg'} alt="" />
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
                                
                                <Grid item xs={12} className={classes.bankRow}>
                                    <Select
                                        className={classes.bankList}
                                        value={this.state.bankid}
                                        onChange={this.bankChanged}
                                        
                                        inputProps={{
                                            name: 'bank',
                                            id: 'bank-simple',
                                            height: 77
                                        }}
                                    >
        
                                        {bankList.map(bank => (
                                            <MenuItem
                                                key={bank.label}
                                                value={bank.value}
                                            >
                                                {bank.label}
                                                <Radio
                                                    checked={
                                                        this.state.bankid ===
                                                        bank.value
                                                    }
                                                    name="radio-button-demo"
                                                    inputProps={{
                                                        'aria-label': 'B'
                                                    }}
                                                />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <div></div>
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
                                        placeholder="Deposit 100 - 50000"
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
                                                min: 100,
                                                max: 50000
                                            }
                                        }}
                                        type="number"
                                        inputRef={this.amountInput}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.detailRow}>
                                    <TextField
                                        onFocus={this.realnameFocused}
                                        onChange={this.realnameChanged}
                                        value={this.state.cardname}
                                        className={classes.otherText}
                                        placeholder="Card Holder Name"
                                        helperText={(this.state.realnameInvalid && this.state.realnameFocused) ? 'Please enter a valid card holder name.' : ' '}
                                        InputProps={{ disableUnderline: true }}
                                        type="text"
                                        error={( this.state.realnameFocused)}   
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
                                        disabled={
                                            this.state.amountInvalid || this.state.bankid === ''
                                        }
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
                    {/* <div id="api-response" style={{textAlign: 'left', paddingLeft: 100, paddingRight: 100}}>
                        {
                            order_id?
                            <>
                                <p>尊贵的客户您好，请记录以下官方帐号信息及存款金额，并在3小时内以任意方式存款进该账号。超过存款时间或者存款金额不一致可能会导致无法正常上分。存款完成后，请保留存款回执，以便确认转账资讯。
重要提醒：您每次获取的银行账号都可能会不同，请切勿使用过往保存的账号进行存款，若存入账号与本次获取账号不一致时将无法上分。</p>
                                <Table className={classes.table}>
                                    
                                    <TableRow>
                                        <TableCell align="right">订单编号</TableCell>
                                        <TableCell align="right">{order_id}</TableCell>
                                        <TableCell align="right">银行账号</TableCell>
                                        <TableCell align="right">{CardNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">银行</TableCell>
                                        <TableCell align="right">{BankName}</TableCell>
                                        <TableCell align="right">用户名</TableCell>
                                        <TableCell align="right">{CardChName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">分行名称</TableCell>
                                        <TableCell align="right">{CardBankName}</TableCell>
                                        <TableCell align="right">金额</TableCell>
                                        <TableCell align="right">{this.state.amount}</TableCell>
                                    </TableRow>
                                </Table>
                                
                                <Timer
                                    initialTime={10800000}
                                    direction="backward"
                                >
                                    {() => (
                                        <React.Fragment>
                                            <Timer.Hours /> hours
                                            <Timer.Minutes /> minutes
                                            <Timer.Seconds /> seconds
                                        </React.Fragment>
                                    )}
                                </Timer>
                            </>
                            : 
                            <br/>
                        }
                    </div> */}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState, logout }
        )(DepositAsiapayBT)
    )
);
