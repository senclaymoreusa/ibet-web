import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, handle_inbox_value } from '../../../../../actions';
import { injectIntl } from 'react-intl';

import { images, config } from '../../../../../util_config';
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
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 163,
        paddingRight: 162,
        marginTop: 52,
        minHeight: 485,
        overflowY: 'scroll',
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'justify',
        width: 925,
        height: 76,
        backgroundColor: '#eaeaea',
    },
    goBackIcon: {
        display: 'inline-block',
        width: 20,
        height: 20,
        marginLeft: 49,
    },
    title: {
        display: 'inline-block',
        width: 880,
        height: 20,
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: "#212121",
    },
    closeIcon: {
        display: 'inline-block',
        width: 20,
        height: 20,
        marginRight: 49,
    },
    subject: {
        fontSize: 16,
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
    delete: {
        display: 'inline-block',
        width: 60,
        height: 30,
        borderRadius: 6,
        backgroundColor: '#f2f2f2',
        marginLeft: 235,
    },
    messageBody: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.38,
        letterSpacing: 0.37,
    },
});

export class InboxDetail extends Component {

    constructor(props) {
        super(props);

        this.backClicked = this.backClicked.bind(this);
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

        axios.post(API_URL + 'operation/api/read_message/' + this.props.message.pk, config)
            .then(res => {
                if(res.status === 201) {
                    this.props.handle_inbox_value(this.props.inbox - 1);
                }
                else if(res.status === 200) {

                }
                else {
                    console.log("bad request");
                }

            })
    }

    backClicked() {
        this.props.callbackFromParent('inbox');
    }

    deleteClicked(id) {
        axios.post(API_URL + 'operation/api/delete_message/' + id, config)
            .then(res => {
                if(res.status === 200) {
                    this.props.callbackFromParent('inbox', true);
                }
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.goBackIcon} onClick={this.backClicked}>
                            <img src={images.src + 'back.svg'} alt='Not available'/>
                        </span>
                        <span className={classes.title}>Inbox</span> 
                        <span className={classes.closeIcon} onClick={this.backClicked}>
                            <img src={images.src + 'close.svg'} className={classes.closeIcon} alt='Not available'/>
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <span className={classes.subject}>{this.props.message.subject}</span>
                        <div className={classes.divideLine}/>
                        <div className={classes.messageInfo}>
                            <span className={classes.date}>{this.props.message.publish_on}</span>
                            <Button className={classes.delete} onClick={()=> this.deleteClicked(this.props.message.pk)}>delete</Button>
                        </div>
                        <p className={classes.messageBody}>{this.props.message.content}</p>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState, handle_inbox_value })(InboxDetail)));