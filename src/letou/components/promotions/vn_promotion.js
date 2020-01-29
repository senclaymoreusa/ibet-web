import React from 'react';
import TopNavbar from '../top_navbar';
import Footer from '../footer';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Fade } from 'react-slideshow-image';

const styles = {
    content: {
        paddingTop: 300,
        paddingBottom: 300,
    },
    fadeContainer: {
        marginTop: 3,
    },
    image: {
        textAlign: "center",
    },
};

class VNPromotion extends React.Component {

    render() {
        const { classes } = this.props;

        const fadeImages = [
            'https://ibet-web.s3-us-west-1.amazonaws.com/public_images/letou/promotion_images/vn_promo_1.jpg',
            'https://ibet-web.s3-us-west-1.amazonaws.com/public_images/letou/promotion_images/vn_promo_2.jpg',
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
                    <p className={classes.content}>testing promotion page</p>
                </div>


                <Footer />
            </div>
        );

    }
}

export default withStyles(styles)(VNPromotion);
