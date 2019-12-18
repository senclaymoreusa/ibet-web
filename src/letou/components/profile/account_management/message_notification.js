import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState, handle_inbox_value, sendingLog, logout, postLogout } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { errors } from '../../errors';
import { withRouter } from 'react-router-dom';

import { images, config } from '../../../../util_config';
import axios from 'axios';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {

    },
    content: {
        paddingLeft: 163,
        paddingRight: 162,
        marginTop: 52,
        minHeight: 485,
        overflowY: 'auto',
    },
    notification: {
        height: 60,
        borderRadius: 6,
        boxShadow: '0 2px 8px 0 rgba(7, 18, 37, 0.2)',
        // border: 'solid 0.9px #bfbfbf',
        backgroundColor: '#ffffff',
        marginTop: 13,
        display: 'flex',
        flexDirection: 'row',
    },
    unreadMark: {
        display: 'inline-block',
        width: 10,
        height: 60,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,   
        backgroundColor: '#53abe0',
    },
    readMark: {
        display: 'inline-block',
        width: 10,
        height: 60,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    messageContainer: {
        width: 750,
        paddingTop: 6,
        paddingLeft: 43,
        flexDirection: "column",
        justify: "center",
        alignItems: "center",
    },
    subject: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '20px',
        letterSpacing: 'normal',
        color: '#f28f22',
    },
    message: {
        display: 'block',
        width: 505,
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        whiteSpace: 'nowrap',  
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'normal',
    },
    delete: {
        width: 60,
        height: 30,
        borderRadius: 6,
        backgroundColor: 'transparent',
        marginLeft: 225,
        marginTop: 14,
    },
    date: {
        width: 50,
        height: 12,
        fontSize: 12,
        textAlign: 'right',
        color: '#787878',
        marginTop: 23,
        marginRight: 23,
    }
});



export class MessageNotification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Messages: [],
            showMessage: false,
            messageText: "Message deleted",
            changed: false,
            noMessage: null,
        }

        this.detailClicked = this.detailClicked.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.closeNotificationClicked = this.closeNotificationClicked.bind(this);
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    window.location.reload();
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                axios.get(API_URL + 'operation/api/notification-users/' + res.data.pk, config)
                    .then(res => {
                        if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                            this.props.logout();
                            postLogout();
                            return;
                        }
                        if(res.data.length == 0) {
                            this.setState({noMessage: "You don't have any message yet"});
                        }
                        
                        this.setState({Messages: res.data});
                    }).catch(err => {
                        // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                        sendingLog(err);
                    })
            })
    }

    detailClicked(msg) {
        this.props.callbackFromParent('message-detail', msg);
    }

    deleteClicked(id) {
        axios.post(API_URL + 'operation/api/delete_message/' + id, config)
            .then(res => {
                if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                    this.props.logout();
                    postLogout();
                    return;
                }

                if(res.status === 200) {
                    this.setState({ showMessage: true });
                    let filteredList = this.state.Messages.filter(item => item.pk !== id);
                    this.setState({ Messages: filteredList});
                    this.setState({ changed : !this.state.changed});
                }

            }).catch(err => {
                //console.log("err: ", err);
                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                sendingLog(err);
            })
    }

    closeNotificationClicked() {
        this.setState({ showMessage: false });
    }

    render() {
        const { classes } = this.props;

        const { Messages, showMessage, messageText } = this.state;

        Messages.forEach(message => {
            let publish_on = moment(message.publish_on);
            publish_on = publish_on.format('MM/DD');
            message.publish_on = publish_on;
        });

        return (
            <div className={classes.root}>
                <Grid container>
                    {this.state.noMessage}
                    {this.state.Messages.map(item => {
                        if(!item.is_deleted) {
                            if(!item.is_read) {
                                return(
                                    <Grid container key={item.pk}>
                                        <Grid item xs={12} className={classes.notification}>
                                            <div className={classes.unreadMark}></div>
                                            <div className={classes.messageContainer} onClick={() => this.detailClicked(item)}>
                                                <span className={classes.subject}>{item.subject}</span>
                                                <br/>
                                                <span className={classes.message}>{item.content}</span>
                                            </div>
                                            <Button className={classes.delete} onClick={() => this.deleteClicked(item.pk)}>
                                                <img src={images.src + 'delete-btn.svg'} alt='Not available'/>
                                            </Button>
                                            <span className={classes.date}>{item.publish_on}</span>
                                        </Grid>
                                    </Grid>
                                )
                            } else {
                                return(
                                    <Grid container key={item.pk}>
                                        <Grid item xs={12} className={classes.notification}>
                                            <div className={classes.readMark}></div>
                                            <div className={classes.messageContainer} onClick={() => this.detailClicked(item)}>
                                                <span className={classes.subject}>{item.subject}</span>
                                                <br/>
                                                <span className={classes.message}>{item.content}</span>
                                            </div>
                                            <Button className={classes.delete} onClick={() => this.deleteClicked(item.pk)}>
                                                <img src={images.src + 'delete-btn.svg'} alt='Not available'/>
                                            </Button>
                                            <span className={classes.date}>{item.publish_on}</span>
                                        </Grid>
                                    </Grid>
                                )
                            }
                        }
                    })
                    }
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(MessageNotification))));