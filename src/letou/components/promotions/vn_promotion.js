import React from 'react';
import TopNavbar from '../top_navbar';
import Footer from '../footer';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Fade } from 'react-slideshow-image';
import { images } from '../../../util_config';

const styles = {
    fadeContainer: {
        marginTop: 3,
    },
    mainContent: {
        width: 1000,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    welcomeHeader: {
        color: "red",
    },
    rebateHeader: {
        color: "green",
    },
    welcomeContent: {
        height: 250,
    },
    rebateContent: {
        height: 250,
    },
    image: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
};

class VNPromotion extends React.Component {

    render() {
        const { classes } = this.props;

        const fadeImages = [
            images.src + 'letou/promotion_images/vn_promo_1.jpg',
            images.src + 'letou/promotion_images/vn_promo_2.jpg',
        ];

        const fadeProperties = {
            duration: 4000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
        };


        return (
            <div>
                <TopNavbar />

                <div className={classes.fadeContainer}>
                    <Fade {...fadeProperties}>
                        {
                            fadeImages.map(imgSrc => <img src={imgSrc} className={classes.image} />)
                        }
                    </Fade>
                </div>

                <div className={classes.mainContent}>

                    <h3 className={classes.welcomeHeader}>Ưu Đãi Chào Mừng</h3>
                    <hr></hr>
                    <div className={classes.welcomeContent}>
                    </div>


                    <h3 className={classes.rebateHeader}>Hoàn trả không giới hạn ngay tức thì</h3>
                    <hr></hr>
                    <div className={classes.rebateContent}>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
    
}

export default withStyles(styles)(VNPromotion);
