import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    titleCell: {
        width: 925,
        height: 76,
        backgroundColor: '#eaeaea',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        width: 222,
        height: 20,
        fontFamily: 'Gilroy',
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: "#212121",
    },
});


export class InboxMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: '1'
        }
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Inbox</span>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(InboxMain)));