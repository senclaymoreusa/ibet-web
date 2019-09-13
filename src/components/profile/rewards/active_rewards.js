import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { config } from '../../../util_config';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },

    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28,
    },
    contentPaper: {

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
    },
    leftCell: {
        display: 'flex',
        alignItems: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',

    },
    rightCell: {
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',
    },
    button: {
        height: 52,
        borderRadius: 10,
        minWidth: 162,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'inline-block',
        marginBottom: 23,
        color: '#fff',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        '&:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
    },
    updateRow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 75,
        textAlign: 'right',
        paddingTop: 13,
        paddingRight: 52,
    },
    text: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
    },
    subTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    },
    row: {
        paddingLeft: 85,
        paddingRight: 85,
        paddingTop: 30,
    },
    subRow: {
        paddingLeft: 140,
        paddingRight: 85,
        paddingTop: 10,
    },
    notification: {
        backgroundColor: '#3ce86a',
        // marginTop: 202,
        //minWidth: 1330,
    },
    message: {
        marginLeft: 10,
        float: 'left',
        lineHeight: 1.9
    },
    margin: {
        margin: theme.spacing.unit,
    },
    checkIcon: {
        float: 'left',
    }
});

export class ActiveRewards extends Component {

    constructor(props) {
        super(props);

        this.state = {
   
        }

        
    }


    render() {
        const { classes } = this.props;
       
        return (
            <div className={classes.root}>
            ActiveRewards
            </div>
        );
    }
}

ActiveRewards.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(ActiveRewards)));