import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Create from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import { config } from '../../../../util_config';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
    },
    label: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#212121',
        whiteSpace: 'nowrap',
    },
    value: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#999'
    },
    row: {
        padding: 20,
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    editButton: {
        textTransform: 'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap',
        minWidth: 140
    }
});

export class SecuritySettings extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentWillReceiveProps(prevProps) {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                    window.location.reload()
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ actualName: res.data.first_name });
                this.setState({ email: res.data.email });
                this.setState({ phone: res.data.phone });
                this.setState({ username: res.data.username });
                this.setState({ registrationDate: res.data.time_of_registration });
            })
    }

    componentDidMount() {
        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                    window.location.reload()
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ actualName: res.data.first_name });
                this.setState({ email: res.data.email });
                this.setState({ phone: res.data.phone });
                this.setState({ username: res.data.username });
                this.setState({ registrationDate: res.data.time_of_registration });
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('last-login-time')}
                        </span>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        <span className={classes.value}>
                            *********
                        </span>
                    </Grid>


                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('login-password')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            *********
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                            onClick={() => {
                                this.props.callbackFromParent(
                                    'reset-password'
                                );
                            }}
                        >{this.getLabel('reset-label')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('withdrawal-password')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            *********
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            disabled={true}
                            className={classes.editButton}
                        >{this.getLabel('reset-label')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('security-question')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                    <span className={classes.label}>
                            {this.getLabel('you-have-set-question')}
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                        >{this.getLabel('modify-label')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label} style={{wordBreak:'break-all'}}>
                            {this.getLabel('jiufu-password')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                        {this.getLabel('not-set')}
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            onClick={() => {
                             
                            }}
                            className={classes.editButton}
                        >{this.getLabel('setting-label')}</Button>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(SecuritySettings))));