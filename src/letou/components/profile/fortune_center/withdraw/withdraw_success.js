import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../../../../../util_config';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    contentPaper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20
    },
    leftCell: {
        display: 'flex',
        alignItems: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121'
    },
    rightCell: {
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121'
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
    completeDiv: {
        height: 160,
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: '#cffcea',
        justifyContent: 'center'
    },
    successRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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
    }
});

export class WithdrawSuccess extends Component {
    constructor(props) {
        super(props);

        this.gameLobbyClicked = this.gameLobbyClicked.bind(this);
        this.checkBalanceClicked = this.checkBalanceClicked.bind(this);
    }

    gameLobbyClicked() {
        this.props.history.push('/');
    }

    checkBalanceClicked() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');
        url = '/';
        var path = parts.slice(1, 3).join('/');
        url = url + path + '/total-assets';
        this.props.history.push(url);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;
        const { successMessage } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3} style={{ width: 700 }}>
                    <Grid item xs={12} className={classes.completeCell}>
                        <div className={classes.completeDiv}>
                            <img src={images.src + 'letou/ok.svg'} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.successRow}>
                        <span className={classes.title}>
                            {this.getLabel('withdraw-submitted')}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={classes.successRow}
                        style={{ marginTop: 20, marginBottom: 50 }}
                    >
                        <span className={classes.text}>
                            {this.getLabel('withdraw-label')} {successMessage}{' '}
                            {this.getLabel('submitted-label')}
                        </span>
                        <span className={classes.text}>
                            {this.getLabel('check-transaction-status')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.button}
                            onClick={this.checkBalanceClicked}
                        >
                            {this.getLabel('check-balance')}
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={classes.buttonCell}>
                        <Button
                            className={classes.button}
                            onClick={this.gameLobbyClicked}
                        >
                            {this.getLabel('back-games-lobby')}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(WithdrawSuccess))));
