import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';

import { config } from '../../../../util_config';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
        paddingTop: 52,
        minHeight: 100,
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
        fontFamily: 'Gilroy',
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
        width: 310,
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
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
    },
});


export class InboxMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userMessages: [],
        }
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                    window.location.reload();
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                axios.get(API_URL + 'operation/api/notification-users/' + res.data.pk, config)
                .then(res => {  
                    this.setState({userMessages: res.data});
                    console.log(res.data);
                })
            })
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { userMessages } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Inbox</span>
                            <Grid item xs={12} className={classes.content}>
                                {this.state.userMessages.map(item => {
                                    return(
                                        <Grid container>
                                            <Grid item xs={12} className={classes.notification} key={item.pk}>
                                                <div className={classes.unreadMark}></div>
                                                <div className={classes.messageContainer}>
                                                    <span className={classes.subject}>{item.pk}</span>
                                                    <br/>
                                                    <span className={classes.message}>Message Body</span>
                                                </div>
                                                <Button className={classes.delete}>delete</Button>
                                                <span className={classes.date}>8/24</span>
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