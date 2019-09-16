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
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';


import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        minHeight: 688,
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
    pleased: {
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.45,
        color: 'black',
    },
    steps: {
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.55,
        color: '#6d7278',
    },
    content: {
        padding: 28
    },
    noEligible: {
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.55,
        color: 'black',
    },
});

const iBetConnector = withStyles({
    alternativeLabel: {
        top: 22,
      },
      active: {
        '& $line': {
          backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
      },
      completed: {
        '& $line': {
          backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
      },
      line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
      },
  })(StepConnector);

//   const iBetStepIconStyles = makeStyles({
//     root: {
//       backgroundColor: '#ccc',
//       zIndex: 1,
//       color: '#fff',
//       width: 50,
//       height: 50,
//       display: 'flex',
//       borderRadius: '50%',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     active: {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//       boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//     },
//     completed: {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     },
//   });

//   function IbetStepIcon(props) {
//     const classes = iBetStepIconStyles();
//     const { active, completed } = props;
  
//     return (
//       <div
//         className={clsx(classes.root, {
//           [classes.active]: active,
//         })}
//       >
//         {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
//       </div>
//     );
//   }

//   IbetStepIcon.propTypes = {
//     active: PropTypes.bool,
//     completed: PropTypes.bool,
//   };

export class ActiveRewards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep : 0,
        }


    }


    render() {
        const { classes } = this.props;
        const {activeStep} = this.state;

        const stepLabels = ['Accept', 'Play', 'Progress']

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Active Rewards</span>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <span className={classes.pleased}>We are pleased you are interested in our rewards. Please note we change these on occasion to offer you the best options. Below is what is available to you today.</span>

                        <Stepper alternativeLabel activeStep={activeStep} >
                            {stepLabels.map((label, index) => {
                                
                                return (
                                    <Step key={label}>
                                        <StepLabel >{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>

                    </Grid>
                </Grid>
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