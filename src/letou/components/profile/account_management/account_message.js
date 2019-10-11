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
        color: '#212121'
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
});

export class AccountMessage extends Component {

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
                    <Grid item xs={3} className={classes.row} style={{        textAlign: 'right',
}}>
                        <Button variant="contained"
                            color="default"
                            startIcon={<Create />}>{this.getLabel('edit-label')}</Button>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(AccountMessage))));