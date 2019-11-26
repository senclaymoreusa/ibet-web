import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SupervisorAccountTwoTone from '@material-ui/icons/SupervisorAccountTwoTone';
import { config, images } from '../../../../util_config';
import Link from '@material-ui/core/Link';


import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {

    },
    titleRow: {
        paddingBottom: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#4DA9DF',
    },
    subLabel: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#4DA9DF',
    },
    subText: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#F1941A',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "&:hover": {
            textDecoration: 'underline #4DA9DF',

        },
        "&:focus": {
            textDecoration: 'underline #4DA9DF',
        },
    },
});



export class Suggestions extends Component {

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
                    <Grid item xs={12} className={classes.titleRow}>
                        <img src={images.src + 'letou/contact-support.svg'} alt="" height="50" style={{ marginLeft: 30, marginRight: 30 }} />
                        <span className={classes.title}>
                            {this.getLabel('suggestion-text')}
                        </span>
                    </Grid>
                    <Grid item xs={4} className={classes.column}>
                        <span className={classes.subTitle} style={{ marginBottom: 20 }}>
                            {this.getLabel('online-service')}
                        </span>
                        <img src={images.src + 'letou/sup-24web.png'} alt="" style={{ marginBottom: 20 }} />
                        <Link chref="#" className={classes.link}>
                            <span className={classes.subLabel}>{this.getLabel('exclusive-support')}
                            </span>
                            <span className={classes.subText}>{this.getLabel('click-online-service')}
                            </span>
                        </Link>
                    </Grid>
                    <Grid item xs={4} className={classes.column}>
                        <span className={classes.subTitle} style={{ marginBottom: 20 }}>
                            {this.getLabel('domestic-line')}
                        </span>
                        <img src={images.src + 'letou/sup-24tel.png'} alt="" style={{ marginBottom: 20 }} />
                        <span className={classes.subLabel}>{this.getLabel('24-hours')}
                        </span>
                        <span className={classes.subText}>400-120-8588</span>
                    </Grid>
                    <Grid item xs={4} className={classes.column}>
                        <span className={classes.subTitle} style={{ marginBottom: 20 }}>
                            {this.getLabel('send-email')}
                        </span>
                        <img src={images.src + 'letou/sup-24mail.png'} alt="" style={{ marginBottom: 20 }} />
                        <Link className={classes.link} href="mailto:cs@letou.me?subject = Feedback&body = Message" >
                            <span className={classes.subLabel}>{this.getLabel('send-email')}</span>
                            <span className={classes.subText}>
                                cs@letou.me
                             </span>
                        </Link>
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

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(Suggestions))));