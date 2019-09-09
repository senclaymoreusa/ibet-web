import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';

import { config } from '../../../../util_config';
import axios from 'axios';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        overflowY: 'scroll',
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
        height: 44,
        boxShadow: '0 5px 10px -2px rgba(0, 0, 0, 0.27)',
        backgroundColor: '#d0d0d0',
    }
});


export class InboxMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unreadMessages: [],
            readMessages: [],
            showMessage: false,
            messageText: "Message deleted"
        }

        this.detailClicked = this.detailClicked.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
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
                    this.setState({unreadMessages: res.data.unread_list});
                    this.setState({readMessages: res.data.read_list});
                }).catch(err => {
                    this.setState({ showMessage: true });
                })
            })
    }

    // function UnreadMessageItem (props) {
    //     return (
    //         <Grid container>
    //             <Grid item xs={12} className={classes.notification} key={item.pk}>
    //                 <div className={classes.unreadMark}></div>
    //                 <div className={classes.messageContainer}>
    //                     <span className={classes.subject}>{item.pk}</span>
    //                     <br/>
    //                     <span className={classes.message}>Message Body</span>
    //                 </div>
    //                 <Button className={classes.delete}>delete</Button>
    //                 <span className={classes.date}>8/24</span>
    //             </Grid>
    //         </Grid>
    //     )
    // }

    detailClicked(msg) {
        this.props.callbackFromParent('inbox_detail', msg);
    }

    deleteClicked(id) {
        axios.post(API_URL + 'operation/api/delete_message/' + id, config)
            .then(res => {
                if(res.status === 200) {
                    this.setState({showMessage: true});
                }
            })
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { unreadMessages, readMessages, showMessage, messageText } = this.state;

        unreadMessages.forEach(message => {
            let publish_on = moment(message.publish_on);
            publish_on = publish_on.format('MM/DD');
            message.publish_on = publish_on;
        });
        readMessages.forEach(message => {
            let publish_on = moment(message.publish_on);
            publish_on = publish_on.format('MM/DD');
            message.publish_on = publish_on;
        });

        return (
            <div className={classes.root}>
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
                    className={classes.notification}
                    aria-describedby="client-snackbar"
                    message={
                        <div>
                            <CheckCircleIcon className={classes.checkIcon} />
                            <span id="client-snackbar" className={classes.message}>
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
                            <CloseIcon />
                        </IconButton>,
                    ]}
                /></Snackbar>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Inbox</span>
                            <Grid item xs={12} className={classes.content}>
                                {this.state.unreadMessages.map(item => {
                                    return(
                                        <Grid container key={item.pk} onClick={() => this.detailClicked(item)}>
                                            <Grid item xs={12} className={classes.notification}>
                                                <div className={classes.unreadMark}></div>
                                                <div className={classes.messageContainer}>
                                                    <span className={classes.subject}>{item.subject}</span>
                                                    <br/>
                                                    <span className={classes.message}>{item.content}</span>
                                                </div>
                                                <Button className={classes.delete}>delete</Button>
                                                <span className={classes.date}>{item.publish_on}</span>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                                }
                                {this.state.readMessages.map(item => {
                                    return(
                                        <Grid container key={item.pk} onClick={() => this.detailClicked(item)}>
                                            <Grid item xs={12} className={classes.notification}>
                                                <div className={classes.readMark}></div>
                                                <div className={classes.messageContainer}>
                                                    <span className={classes.subject}>{item.subject}</span>
                                                    <br/>
                                                    <span className={classes.message}>{item.content}</span>
                                                </div>
                                                <Button className={classes.delete} onClick={() => this.deleteClicked(item.pk)}>delete</Button>
                                                <span className={classes.date}>{item.publish_on}</span>
                                            </Grid>
                                        </Grid>
                                    )
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
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(InboxMain)));