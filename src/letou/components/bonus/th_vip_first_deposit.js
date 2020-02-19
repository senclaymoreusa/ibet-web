import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { images } from '../../../util_config';

const styles = {
    offerHeader: {
        height: 55,
    },
    mainLogo: {
        height: 33,
        paddingLeft: 250,
        marginTop: 11,
    },
    button: {
        width: 105,
        height: 30,
        backgroundColor: '#FF9E00',
        borderRadius: 5,
        float: 'right',
        marginRight: 250,
        marginTop: 13,
        '&:hover': {
            backgroundColor: '#ff8a00'
        },
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 2.6,
    },
    footer: {
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },
    bannerImg: {
        width: '100%',
    },
    mainHeading: {
        fontSize: 30,
        color: 'orange',
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 900,
    },
    content: {
        margin: 15,
        width: 1000,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 50,
        lineHeight: 2,
        color: 'grey',
    },
};

class THVIPFirstDepositBonus extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.offerHeader}>
                    <img className={classes.mainLogo} src={ images.src + "letou/logo_vi.png" } alt="Main Logo"/>
                    <div className={classes.button}>
                        <a href="/">โปรโมชั่นเพิ่มเติม</a>
                    </div>
                </div>

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/THVIPFirstDeposit.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    
                    <h3 className={classes.mainHeading}>
                    </h3>

                </div>

                <div className={classes.footer}>
                    เว็บไซต์ที่ได้รับอนุญาตและอยู่ภายใต้การกำกับดูแลของ Pagcor ในฟิลิปปินส์
                    <br/>
                    LETOU สงวนลิขสิทธิ์
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(THVIPFirstDepositBonus);
