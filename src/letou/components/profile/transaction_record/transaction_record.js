import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainGrid: {
        maxWidth: 1400
    },
    leftPane: {
        backgroundColor: '#f0f0f0',
        minHeight: 500,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    rightPane: {},
    leftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#f1f1f1'
        }
    },
    activeLeftPaneButton: {
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        backgroundColor: '#d1d1d1',
        width: 220,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#dfdfdf'
        }
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000'
    },
    titleRow: {
        borderBottom: '1px solid #4DA9DF',
        paddingBottom: 12
    },
    content: {
        flexGrow: 1,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export class TransactionRecord extends Component {
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
                <Grid container className={classes.mainGrid}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('transaction-record')}
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingTop: 20
                        }}
                    ></Grid>
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

export default withStyles(styles)(
    withRouter(
        injectIntl(
            connect(
                mapStateToProps,
                { authCheckState }
            )(TransactionRecord)
        )
    )
);
