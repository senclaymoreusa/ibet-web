import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Create from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

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
        whiteSpace: 'nowrap'
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
        borderBottom: '1px solid #ddd'
    },
    editButton:{
        textTransform:'capitalize',
        fontSize: 12,
        whiteSpace: 'nowrap'
    }
});

export class EditPhone extends Component {

    constructor(props) {
        super(props);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('actual-name')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            actual name
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>

                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('title-mail')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            mail address
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                            startIcon={<Create />}>{this.getLabel('edit-label')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('phone-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            phone
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                            startIcon={<Create />}>{this.getLabel('edit-label')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('username-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            username
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('username-label')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            username
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                        
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
                            startIcon={<Create />}>{this.getLabel('change-password')}</Button>
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
                            className={classes.editButton}
                            startIcon={<Create />}>{this.getLabel('change-password')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('registration-time')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            2017/10/10
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                    <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                            startIcon={<Create />}>{this.getLabel('gaming-responsibility')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('bank-card')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            Bind bank card
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row} style={{ textAlign: 'right' }}>
                    <Button variant="contained"
                            color="default"
                            className={classes.editButton}
                            startIcon={<Create />}>{this.getLabel('binding-card-number')}</Button>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(EditPhone))));