import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, sendingLog  } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {config, images } from '../../../../../util_config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Timer from 'react-compound-timer';
import axios from 'axios';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL;
const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    backCell: {
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
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
    contentPaper: {

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
    },
    leftCell: {
        display: 'flex',
        alignItems: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',

    },
    rightCell: {
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',
    },
    button: {
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
        display: 'inline-block',
        marginBottom: 23,
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 64,
    },
    completeCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    successRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        height: 170,
    },
    successText: {
        fontSize: 40,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
        marginTop: 44,
    },
    successDesc: {
        fontSize: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#212121',
        display: 'inline-block',
        marginTop: 19
    },
    table: {
        minWidth: 650,
    },
});


export class DepositDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : '',
        }
        this.cancelClicked = this.cancelClicked.bind(this);
        this.checkStatusClicked = this.checkStatusClicked.bind(this);
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data });
        });
    }

    cancelClicked(bankOrderId) {
        let currentComponent = this;
        let success = false;
        var postData = {
            userid: this.state.data.pk,
            order_id: bankOrderId.bankOrderId,
        };
        //console.log(postData)
        var formBody = [];
        for (var pd in postData) {
            var encodedKey = encodeURIComponent(pd);
            var encodedValue = encodeURIComponent(postData[pd]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        return fetch(API_URL + 'accounting/api/asiapay/depositFinish', {
            method: 'POST',
            headers: {
                'content-type':
                    'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        })
            .then(function(res) {
                
                if(res.status == 200){
                    return res.json();
                }else{
                    currentComponent.props.callbackFromParent("error", "Transaction failed.");
                }
            })
            .then(function(data) {
                //console.log(data)
                if(data.StatusCode == "00001"){
                    
                    currentComponent.props.callbackFromParent('cancel',bankOrderId.bankOrderId);
                    
                   
                }else{
                    currentComponent.props.callbackFromParent('error',data.StatusMsg);
                    
                }
                
            }).catch(function (err) {  
            //console.log('Request failed', err);
            currentComponent.props.callbackFromParent("error", err.message);
            sendingLog(err);
        });
    };

    checkStatusClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    
    render() {
        const { classes } = this.props;
        
        const { bankOrderId } = this.props;
        // const { order_id } = bankOrderId.order_id
        //console.log(this.props)
        //console.log(bankOrderId)
        //console.log(this.props.bankOrderId.order_id)
        
        
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Deposit Bank Transfer Details</span>
                    </Grid>
                    <Grid item xs={12} className={classes.completeCell}>
                    <p>尊贵的客户您好，请记录以下官方帐号信息及存款金额，并在3小时内以任意方式存款进该账号。超过存款时间或者存款金额不一致可能会导致无法正常上分。存款完成后，请保留存款回执，以便确认转账资讯。
重要提醒：您每次获取的银行账号都可能会不同，请切勿使用过往保存的账号进行存款，若存入账号与本次获取账号不一致时将无法上分。</p>
                    </Grid>
                    
                    <Table className={classes.table}>
                        <TableBody>        
                        <TableRow>
                            <TableCell align="right">订单编号</TableCell>
                            <TableCell align="right">
                                <span></span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">银行账号</TableCell>
                                <span></span>
                            <TableCell align="right">
                              
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">银行</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">用户名</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">分行名称</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">金额</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    
                    <Grid item xs={12} className={classes.timerRow}>
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
                    </Grid>
                    <Grid item xs={12} className={classes.buttonCell}>
                        <Button className={classes.button} onClick={this.cancelClicked.bind(this,123)}>
                            Cancel
                        </Button>
                        <Button className={classes.button} onClick={this.checkStatusClicked}>
                            Check Order Status
                        </Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositDetails)));