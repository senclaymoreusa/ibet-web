import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import DepositSuccess from './deposit_success';

const styles = theme => ({
    root: {
        width: '100%',
    },
});


export class DepositMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: 1
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({ stepValue: dataFromChild });
    }

    render() {
        const { classes } = this.props;
        const {stepValue} = this.state;

        return (
            <div className={classes.root}>
            {stepValue === 1 && <DepositSuccess callbackFromParent={this.myCallback}/>}
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