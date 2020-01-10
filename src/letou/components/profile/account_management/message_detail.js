import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, handle_inbox_value, sendingLog, logout, postLogout } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { errors } from '../../errors';
import { withRouter } from 'react-router-dom';
import { images, config } from '../../../../util_config';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
    },
    headbar: {
        height: 25,
        display: 'flex',
        flexDirection: 'row',
    },
    goBackIcon: {
        display: 'inline-block',
        width: 20,
        height: 25,
        marginLeft: 50,
        marginRight: 50,
    },
    title: {
        display: 'inline-block',
        width: 925,
        height: 25,
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: "#212121",
    },
    delete: {
        display: 'inline-block',
        width: 60,
        height: 30,
        borderRadius: 6,
        backgroundColor: '#f2f2f2',
        marginLeft: 235,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 60,
        marginTop: 50,
        minHeight: 485,
        overflowY: 'scroll',
    },
    closeIcon: {
        display: 'inline-block',
        width: 20,
        height: 20,
        marginRight: 50,
    },
    subject: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    divideLine: {
        height: 1,
        backgroundColor: '#e7e7e7',
        marginTop: 12,
    },
    messageInfo: {
        flexDirection: "row",
    },
    date: {
        display: 'inline-block',
        width: 299,
        height: 16,
        fontSize: 12,
        fontWeight: 500,
        fontStyle: 'normal',
        color: '#787878',
        marginTop: 13,
    },
    messageBody: {
        fontSize: 14,
        fontWeight: 17,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: 0.37,
    },
});

export class MessageDetail extends Component {

    constructor(props) {
        super(props);

        this.backClicked = this.backClicked.bind(this);
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                } else {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    axios.post(API_URL + 'operation/api/read_message/' + this.props.message.pk, config)
                        .then(res => {
                            if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                                this.props.postLogout();
                                // postLogout();
                                return;
                            }
                            if(res.status === 201) {
                                this.props.handle_inbox_value(this.props.inbox - 1);
                            }
                        }).catch(err => {
                            sendingLog(err);
                        })
                }
            })

        
    }

    backClicked() {
        this.props.callbackFromParent('message-notification');
    }

    deleteClicked(id) {
        axios.post(API_URL + 'operation/api/delete_message/' + id, config)
            .then(res => {
                if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                    this.props.postLogout();
                    // postLogout();
                    return;
                }
                if(res.status === 200) {
                    this.props.callbackFromParent('message-notification', true);
                }
            }).catch(err => {
                sendingLog(err);
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.headbar}>
                        <span className={classes.goBackIcon} onClick={this.backClicked}>
                            <img src={images.src + 'back2.svg'} alt='Not available'/>
                        </span>
                        <span className={classes.title}>{this.props.message.subject}</span>
                        <span className={classes.closeIcon} onClick={() => this.deleteClicked(this.props.message.pk)}>
                            <img src={images.src + 'delete-btn.svg'} className={classes.closeIcon} alt='Not available'/>
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        {/* <span className={classes.subject}>{this.props.message.subject}</span> */}
                        {/* <div className={classes.divideLine}/> */}
                        {/* <div className={classes.messageInfo}>
                            <Button className={classes.delete} onClick={()=> this.deleteClicked(this.props.message.pk)}>delete</Button>
                        </div> */}
                        <div className={classes.messageBody} dangerouslySetInnerHTML={{ __html: this.props.message.content}}></div>
                        <span className={classes.date}>{this.props.message.publish_on}</span>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState, handle_inbox_value, logout })(MessageDetail))));