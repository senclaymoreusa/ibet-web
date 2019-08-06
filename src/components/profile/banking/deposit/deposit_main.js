import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
});


export class DepositMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: '1'
        }
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        // let bankingMessage = formatMessage({ id: "profile-nav.banking" });
        // let analysisMessage = formatMessage({ id: "profile-nav.analysis" });
        // let accountMessage = formatMessage({ id: "profile-nav.account" });
        // let affiliatesMessage = formatMessage({ id: "profile-nav.affiliates" });

        return (
            <div className={classes.root}>
              burasi deposit main
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(DepositMain)));