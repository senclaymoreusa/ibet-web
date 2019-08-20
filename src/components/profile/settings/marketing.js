import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { ReactComponent as CompleteIcon } from '../../../assets/img/svg/complete-icon.svg';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 925,
        height: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    backCell: {
        paddingLeft: 10,
        paddingTop: 20,
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
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
        width: 324,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
        display: 'inline-block',
        marginBottom: 23,
    },
    buttonCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 64,
    },
    completeCell:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom:50,
    },
    successRow:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#eaeaea',
        height:170,
    },
    successText:{
        fontSize: 40,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#292929',
        display:'inline-block',
        marginTop:44,
    },
    successDesc:{
        fontSize: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#212121',
        display:'inline-block',
marginTop:19
    }
});


export class Marketing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            communication: false,
            phone: false,
            email: false,
            sms: false,
            postalMail: false,
            socialMedia: false,
        }

        this.updateClicked = this.updateClicked.bind(this);
        this.communicationClicked = this.communicationClicked.bind(this);
        this.phoneClicked = this.phoneClicked.bind(this);
        this.emailClicked = this.emailClicked.bind(this);
        this.smsClicked = this.smsClicked.bind(this);
        this.postalMailClicked = this.postalMailClicked.bind(this);
        this.socialMediaClicked = this.socialMediaClicked.bind(this);
    }

    updateClicked(ev) {
        
    }

    communicationClicked(ev) {
        this.setState({ communication: !this.state.communication });
    }

    phoneClicked(ev) {
        this.setState({ phone: !this.state.phone });
    }

    emailClicked(ev) {
        this.setState({ email: !this.state.email });
    }

    smsClicked(ev) {
        this.setState({ sms: !this.state.sms });
    }

    postalMailClicked(ev) {
        this.setState({ postalMail: !this.state.postalMail });
    }

    socialMediaClicked(ev) {
        this.setState({ socialMedia: !this.state.socialMedia });
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Marketing Settings</span>
                    </Grid>
                    <Grid item xs={12} className={classes.completeCell}>
                        <CompleteIcon/>
                    </Grid>
                    <Grid item xs={12} className={classes.successRow}>
                       <span className={classes.successText}>Successful!</span>

                    </Grid>
                    <Grid item xs={12} className={classes.buttonCell}>
                        <Button className={classes.button} onClick={this.updateClicked}>
                            Done
                        </Button>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Marketing)));