import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    leftPane: {
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightPane: {
        paddingTop: 50,
    },
    leftPaneButton: {
        width: 250,
        maxWidth: 250,
        height: 76,
        backgroundColor: '#f1f1f1',
        marginTop: 2,
        "&:hover": {
            backgroundColor: '#f1f1f1',
        },
    },
    activeLeftPaneButton: {
        width: 250,
        maxWidth: 250,
        height: 76,
        backgroundColor: '#dfdfdf',
        marginTop: 2,
        "&:hover": {
            backgroundColor: '#dfdfdf',
        },
    },
    cell: {
        height: 415,
        margin: 10,
        borderRadius: 4,
        border: 'solid 1px #979797'
    }
});

export class ResponsibleGaming extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }

    // handleTabChange(event, newValue) {
    //     this.setState({ tabValue: newValue })
    // }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={4} className={classes.cell}>
                    </Grid>
                    <Grid item xs={4} className={classes.cell}>
                    </Grid>
                    <Grid item xs={4} className={classes.cell}>
                    </Grid>
                    <Grid item xs={12} className={classes.cell}>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(ResponsibleGaming))));