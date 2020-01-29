import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, handle_inbox_value, sendingLog, logout, postLogout } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { errors } from '../../../../../ibet/components/errors'

import { images, config } from '../../../../../util_config';
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

const styles = theme => ({
    root: {
        width: 925,
        minHeight: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    content: {
        paddingLeft: 163,
        paddingRight: 162,
        marginTop: 52,
        minHeight: 485,
        overflowY: 'auto',
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 925,
        height: 76,
        backgroundColor: '#eaeaea',
    },
    title: {
        width: 222,
        height: 20,
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: "#212121",
        marginTop: 28,
    },
    notification: {
        height: 58,
        maxHeight: 58,
        borderRadius: 6,
        boxShadow: '0 7px 13px -6px rgba(0, 0, 0, 0.4)',
        border: 'solid 0.9px #bfbfbf',
        backgroundColor: '#ffffff',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    unreadMark: {
        display: 'inline-block',
        width: 10,
        height: 58,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5,   
        backgroundColor: '#bfbfbf',
    },
    readMark: {
        display: 'inline-block',
        width: 10,
        height: 58,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5,
    },
    messageContainer: {
        width: 310,
        paddingLeft: 14,
        flexDirection: "column",
        justify: "center",
        alignItems: "center",
    },
    subject: {
        fontSize: 12,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
    },
    message: {
        display: 'block',
        width: 310,
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
        backgroundColor: '#f2f2f2',
        marginLeft: 129,
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
    },
    deleteInfo: {
        width: 454,
        boxShadow: '0 5px 10px -2px rgba(0, 0, 0, 0.27)',
        backgroundColor: '#d0d0d0',
    },
    deleteMessage: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000',
    },
    closeIcon: {
        display: 'inline-block',
        width: 16,
        height: 16,
    },
});


export class InboxMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Messages: [],
            showMessage: false,
            messageText: "Message deleted",
            changed: false
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
                        this.setState({Messages: res.data});
                    }).catch(err => {
                        // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                        sendingLog(err);
                    })
            })
    }

    detailClicked(msg) {
        this.props.callbackFromParent('inbox_detail', msg);
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
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Inbox</span>
                            <Grid item xs={12} className={classes.content}>
                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={showMessage}
                                    onClose={this.closeNotificationClicked}
                                    autoHideDuration={3000}
                                    TransitionComponent={Fade}
                                >
                                <SnackbarContent
                                    className={classes.deleteInfo}
                                    aria-describedby="client-snackbar"
                                    message={
                                        <div>
                                            <span id="client-snackbar" className={classes.deleteMessage}>
                                                {messageText}
                                            </span>
                                        </div>
                                    }
                                    action={[
                                        <IconButton
                                            key="close"
                                            aria-label="close"
                                            color="inherit"
                                            className={classes.close}
                                            onClick={this.closeNotificationClicked}
                                        >
                                            <img src={images.src + 'close.svg'} className={classes.closeIcon} alt='Not available'/>
                                        </IconButton>,
                                    ]}
                                /></Snackbar>
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
                                                        <Button className={classes.delete} onClick={() => this.deleteClicked(item.pk)}>delete</Button>
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
                                                        <Button className={classes.delete} onClick={() => this.deleteClicked(item.pk)}>delete</Button>
                                                        <span className={classes.date}>{item.publish_on}</span>
                                                    </Grid>
                                                </Grid>
                                            )
                                        }
                                    }
                                    return null;
                                })
                                }
                            </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang,
        inbox: state.general.inbox,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState, handle_inbox_value, logout })(InboxMain)));