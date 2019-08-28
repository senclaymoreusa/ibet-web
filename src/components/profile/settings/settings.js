import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState, AUTH_RESULT_FAIL } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import Marketing from './marketing';
import Privacy from './privacy';

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
    }
});

export class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabValue: '',
            urlPath: '',

        }

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, newValue) {
        this.setState({ tabValue: newValue })
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL){
                this.props.history.push('/')
            }
        })
        
        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }


    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length >= 3) {
            if (parts[1].length > 0) {
                this.setState({ tabValue: parts[3] })
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={4} className={classes.leftPane}>
                    <Button className={(tabValue === 'marketing') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'marketing')}>Marketing</Button>
                    <Button className={(tabValue === 'privacy') ? classes.activeLeftPaneButton : classes.leftPaneButton} onClick={(evt) => this.handleTabChange(evt, 'privacy')}>Privacy</Button>
                    </Grid>
                    <Grid item xs={8} className={classes.leftPane}>
                        {tabValue === 'marketing' && <Marketing />}
                        {tabValue === 'privacy' && <Privacy />}
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Settings))));