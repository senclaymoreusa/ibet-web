/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { images } from '../../../../../../util_config';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const styles = () => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    contentGrid: {
        width: 430
    },
    label: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: -6,
        width: 80,
        color: '#212121',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12
    },
    desc: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929'
    },
    addButton: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#53abe0'
    }
});

class BankAccounts extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
            }
        });
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    addAccountClicked(event) {}

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.contentGrid} spacing={2}>
                    <Grid
                        item
                        xs={12}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <span className={classes.selectLabel}>
                            {this.getLabel('bank-account')}
                        </span>
                        <Divider style={{ marginTop: 10 }} />
                        <span
                            className={classes.desc}
                            style={{ marginTop: 10, marginbottom: 20 }}
                        >
                            {this.getLabel('add-bank-account-text')}
                        </span>
                        <Button
                            className={classes.addButton}
                            onClick={event => {
                                this.addAccountClicked(event);
                            }}
                        >
                            <img
                                src={images.src + 'letou/plus.svg'}
                                alt=""
                                style={{ marginRight: 5 }}
                            />
                            {this.getLabel('add-bank-account')}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(
                mapStateToProps,
                { authCheckState }
            )(BankAccounts)
        )
    )
);
