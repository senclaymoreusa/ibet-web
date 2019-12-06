import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

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
        borderBottomLeftRadius:6,   
        backgroundColor: '#53abe0',
    },
    messageContainer: {
        width: 310,
        paddingLeft: 43,
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
    }
});



export class MessageNotification extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        const { classes } = this.props;

        // return (
        //     <div className={classes.root}>
        //         message notification page will be available later!!
        //     </div>
        // );

        // const { Messages, showMessage, messageText } = this.state;

        // Messages.forEach(message => {
        //     let publish_on = moment(message.publish_on);
        //     publish_on = publish_on.format('MM/DD');
        //     message.publish_on = publish_on;
        // });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.notification}>
                        <div className={classes.unreadMark}></div>
                        <div className={classes.messageContainer}>
                            <span className={classes.subject}>Hello</span>
                            <br/>
                            <span className={classes.message}>Bobby</span>
                        </div>
                        <Button className={classes.delete}>delete</Button>
                        <span className={classes.date}>07/12</span>
                    </Grid>
                    <Grid item xs={12} className={classes.notification}>
                        <div className={classes.unreadMark}></div>
                        <div className={classes.messageContainer}>
                            <span className={classes.subject}>Hi</span>
                            <br/>
                            <span className={classes.message}>Bobby</span>
                        </div>
                        <Button className={classes.delete}>delete</Button>
                        <span className={classes.date}>07/10</span>
                    </Grid>
                    {/* <Grid item xs={12} className={classes.titleCell}>
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
                                })
                                }
                            </Grid>
                    </Grid> */}
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