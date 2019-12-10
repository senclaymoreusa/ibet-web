import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../../../../../util_config';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        paddingLeft: 10
    },
    label: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#999',
        whiteSpace: 'nowrap',
    },
    value: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121'
    },
    row: {
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 40,
        fontWeight: 60,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
        marginTop: 44
    },
    contentPaper: {
        paddingLeft: 0,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20
    },
    button: {
        width: '50%',
        height: 33,
        borderRadius: 22,
        backgroundColor: '#4DA9DF',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        "&:focus": {
            backgroundColor: '#57b9f2',
            color: '#fff'
        },
        textTransform: 'capitalize'
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
    },
    completeCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    InprogressRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    InprogressText: {
        fontSize: 40,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display: 'inline-block',
        marginTop: 44
    },
    text: {
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        textAlign: 'center',
        color: '#212121',
        display: 'inline-block'
    },
    alertIcon: {
        width: 66,
        height: 66
    }
});

export class DepositInprogress extends Component {
    constructor(props) {
        super(props);

        this.cancelClicked = this.cancelClicked.bind(this);
        this.tryAgainClicked = this.tryAgainClicked.bind(this);
    }

    cancelClicked() {
        this.props.history.push('/');
    }

    tryAgainClicked() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 2).join('/');
        url = url + path + "/transaction-records"
        this.props.history.push(url);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { InprogressMessage } = this.props;

        return (
            <div className={classes.root}>
                {/*
                <Grid container spacing={3} style={{ width: 700 }}>
                    <Grid item xs={12} className={classes.completeCell}>
                        <div className={classes.completeDiv}>
                            <img src={images.src + 'letou/alert.svg'} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.InprogressRow}>
                        <span className={classes.title}>
                            {this.getLabel('deposit-inprogress')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.InprogressRow} style={{ marginTop: 20, marginBottom: 50 }}>
                        <span className={classes.text}>
                            {InprogressMessage ? InprogressMessage : this.getLabel('deposit-failed-text')}
                        </span>
                    </Grid>
                */}
                <Grid container>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {"Deposit Method"}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                        {InprogressMessage["method"] ? InprogressMessage["method"] : this.getLabel('deposit-failed-text')}
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row}></Grid>

                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('Order Number')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                        {InprogressMessage["trans_ID"] ? InprogressMessage["trans_ID"] : this.getLabel('deposit-failed-text')}
                        </span>
                    </Grid>

                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.button}
                            onClick={this.tryAgainClicked}
                        >
                            {this.getLabel('try-again')}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(DepositInprogress))));