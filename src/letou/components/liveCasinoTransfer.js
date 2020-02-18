/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    authLogin,
    authCheckState,
    show_letou_forgot_password,
    hide_letou_transfer,
    show_signup,
} from '../../actions';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Grid} from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';



  
const styles = () => ({
    root: {
        width: 360,
        padding: 15,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 40,
        width: '100%',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 8,
        
    },
    closeCell: {
        paddingLeft: 10,
        alignItems: 'left',
        
    },
    closeButton: {
        height: 48,
        width: 48,
        
    },
    loginText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: 'red'
    },
    
});

export class LiveCasinoTransfer extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            from_wallet_name: [],
        };

       
    }

    componentDidMount() {
       
    }
    componentWillUnmount() {
        this._isMounted = false;
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
                    
                    <Grid item xs={10} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('transfer-title')}
                        </span>
                    </Grid>
                    <Grid item xs={2} className={classes.closeCell}>
                        <IconButton
                            className={classes.closeButton}
                            onClick={() => {
                                this.props.hide_letou_transfer();
                            }}
                        >
                            <Clear />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            paddingTop: 20,
                            paddingBottom: 20,
                            textAlign: 'center'
                        }}
                    >
                        <span className={classes.loginText}>
                            {this.getLabel('dont-have-enough-balance')}
                        </span>
                        
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className={classes.titleRow}>
                        <Button 
                            variant="contained"
                            color="secondary"
                            onClick = {() => {
                                this.props.history.push(
                                    '/p/fortune-center/transfer'
                                );
                            }}>
                            <span className={classes.label}>
                                {this.getLabel('transfer-redirect')}
                            </span>
                            
                        </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    
                    
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { loading } = state.auth;
    return {
        loading: loading
    };
};

export default withStyles(styles)(
    injectIntl(
        withRouter(
            connect(mapStateToProps, {
                authLogin,
                authCheckState,
                show_signup,
                show_letou_forgot_password,
                hide_letou_transfer
            })(LiveCasinoTransfer)
        )
    )
);
