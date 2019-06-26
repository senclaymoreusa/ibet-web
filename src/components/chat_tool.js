import React, { Component } from 'react';

import { withStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { authSignup, authCheckState, AUTH_RESULT_FAIL } from '../actions'
import axios from 'axios';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import { config } from '../util_config';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';


// const theme = useTheme();

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        position: 'fixed',
        bottom: 10,
        right: 10
    },
    chatButton: {

    },
});

// const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };


class ChatTool extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: {},
            level: ''
        };

        this.handleChatButtonclicked = this.handleChatButtonclicked.bind(this);

    }

    handleChatButtonclicked = event => {
        const { userData } = this.state;
        const { level } = this.state;
        const time = new Date().getTime();

        //userId+loginname+grade+name +memo+timestamp+key

        let stitchText = userData.username + userData.username + level + userData.first_name + "memo" + time + "key";
        let i = "sdff";
    }


    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === AUTH_RESULT_FAIL) {
                    console.log('authentication failure!!!')
                } else {
                    const token = localStorage.getItem('token');
                    config.headers["Authorization"] = `Token ${token}`;

                    return axios.get(API_URL + 'users/api/user/', config)
                        .then(res => {
                            this.setState({ userData: res.data });

                            axios.get(API_URL + 'users/api/config/', config)
                                .then(res => {
                                    this.setState({ level: res.data })
                                })
                        })
                }
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* <Zoom
                    key='primary'
                    in={true}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${transitionDuration.exit}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab className={classes.chatButton} color="green">
                        <AddIcon/>
                    </Fab>
                </Zoom> */}
                <Button className={classes.chatButton} onClick={this.handleChatButtonclicked}>Start chat tool</Button>

            </div>
        );
    }
}

export default withStyles(styles)(connect(null, { authCheckState })(ChatTool));
