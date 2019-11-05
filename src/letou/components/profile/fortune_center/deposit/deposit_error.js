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
        alignItems: 'center',
        padding: 30
    },
    title: {
        fontSize: 40,
        fontWeight: 800,
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20
    },
    button: {
        width: '100%',
        height: 44,
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
    errorRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    errorText: {
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

export class DepositError extends Component {
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
        var path = parts.slice(1, 3).join('/');
        url = url + path;
        this.props.history.push(url);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { errorMessage } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3} style={{ width: 700 }}>
                <Grid item xs={12} className={classes.completeCell}>
                        <div className={classes.completeDiv}>
                            <img src={images.src + 'letou/alert.svg'} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.errorRow}>
                        <span className={classes.title}>
                            {this.getLabel('deposit-failed')}
                        </span>
                    </Grid>
                    <Grid item xs={12} className={classes.errorRow} style={{ marginTop: 20, marginBottom: 50 }}>
                        <span className={classes.text}>
                            {this.getLabel('deposit-failed-text')}
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
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.button}
                            onClick={this.cancelClicked}
                        >
                            {this.getLabel('cancel-label')}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(DepositError))));