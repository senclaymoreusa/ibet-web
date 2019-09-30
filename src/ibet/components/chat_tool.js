import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { authCheckState, AUTH_RESULT_FAIL } from '../../actions'
import axios from 'axios';
import { connect } from 'react-redux';

import { config } from '../../util_config';
import AddIcon from '@material-ui/icons/ChatBubble';
import Fab from '@material-ui/core/Fab';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        position: 'fixed',
        bottom: 40,
        right: 10,
    },
    chatRoot: {
        position: 'fixed',
        bottom: 10,
        right: 1,
    },
    fab: {
        margin: theme.spacing(),
        backgroundColor: '#fe0000',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#fe0000',
        },
    },
});

class ChatTool extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: {},
            level: '',
            showChatButton: false,
        };

        this.handleChatButtonclicked = this.handleChatButtonclicked.bind(this);
    }

    handleChatButtonclicked = event => {
        // const { userData } = this.state;
        // const { level } = this.state;
        // const time = new Date().getTime();

        // var md5 = require('md5');

        // let stitchText = userData.username + userData.username + level + userData.first_name + "memo" + time + "live800Key";
        // let encodedText = encodeURIComponent(stitchText);
        // let upperCaseEncodedText = encodedText.toUpperCase();
        // let encryptedText = md5(upperCaseEncodedText);
        // let hashCode = encryptedText.toUpperCase();
        // let stitchedInfo = "userId=" + userData.username + "&loginname=" + userData.username +
        //     "&grade=" + level + "&name=" + userData.first_name + "&memo=" + "memo" +
        //     "&timestamp=" + time + "&hashCode=" + hashCode;
        // let encodedInfo = encodeURIComponent(stitchedInfo);


    }

    componentWillReceiveProps(prevProps) {
        this.props.authCheckState()
        .then(res => {
            if (res === AUTH_RESULT_FAIL) {
                console.log('authentication failure!!!')
            } else {
                this.setState({ showChatButton: true });

                const token = localStorage.getItem('token');
                config.headers["Authorization"] = `Token ${token}`;

                return axios.get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        this.setState({ userData: res.data });

                        // axios.get(API_URL + 'users/api/config/', config)
                        //     .then(res => {
                        //         this.setState({ level: res.data })
                        //     })
                    })
            }
        });
      }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_FAIL) {
                    console.log('authentication failure!!!')
                } else {
                    this.setState({ showChatButton: true });

                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    return axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            this.setState({ userData: res.data });

                            // axios.get(API_URL + 'users/api/config/', config)
                            //     .then(res => {
                            //         this.setState({ level: res.data })
                            //     })
                        })
                }
            });
    }

    render() {
        const { classes } = this.props;

        const { userData,showChatButton } = this.state;
        const { level } = this.state;
        const time = new Date().getTime();

        var md5 = require('md5');

        let stitchText = userData.username + userData.username + level + userData.first_name + "memo" + time + "live800Key";
        let encodedText = encodeURIComponent(stitchText);
        let upperCaseEncodedText = encodedText.toUpperCase();
        let encryptedText = md5(upperCaseEncodedText);
        let hashCode = encryptedText.toUpperCase();
        let stitchedInfo = "userId=" + userData.username + "&loginname=" + userData.username +
            "&grade=" + level + "&name=" + userData.first_name + "&memo=memo" +
            "&timestamp=" + time + "&hashCode=" + hashCode;
        let encodedInfo = encodeURIComponent(stitchedInfo);

        let hrefLink = "https://care60.live800.com/live800/chatClient/monitor.js?companyID=71165577&configID=31&info=" + encodedInfo;

        return (
            <div >
                { showChatButton ?
                <div className={classes.chatRoot}>
                    <Fab aria-label="Add" className={classes.fab} href={hrefLink}>
                        <AddIcon />
                    </Fab>
                </div>
                : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined)
    }
}
export default withStyles(styles)(connect(mapStateToProps, { authCheckState })(ChatTool));
