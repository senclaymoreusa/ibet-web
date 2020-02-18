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
        fontSize: 25,
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
    centeredText: {
        textAlign: 'center',
    },
    contentImages: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    orangeBackgroundText: {
        borderTop: '1px solid #ddd',
        backgroundColor: '#FFFCFA',
        paddingTop: 50,
        paddingBottom: 50,
    },
    wrapper: {
        borderLeft: '5px solid #FF9E00',
        paddingLeft: 10,
    },
    orangeText: {
        width: 1000,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

class THDepositAstropayBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/THDepositAstropay.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    
                    <h3 className={classes.mainHeading}>
                        ฝากเงินผ่านระบบอัตโนมัติ AstroPay สามารถเข้าเล่นได้ทันที ไม่ต้องรอ !!!
                        <br/>
                        สำหรับ คอมพิวเตอร์
                    </h3>

                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay01.jpg" } alt="THAstropay01"/>
                    <p className={classes.centeredText}>เลือกที่ "แจ้งฝากเงิน"</p>
                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay02.jpg" } alt="THAstropay02"/>
                    <p className={classes.centeredText}>เลือกที่ "AstroPay"</p>
                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay03.jpg" } alt="THAstropay03"/>
                    <p className={classes.centeredText}>กรอกหมายเลขบัตร , รหัสความปลอดภัย, วันที่, จำนวนเงิน แล้วคลิกขั้นตอนต่อไปเพื่อยืนยันยอดฝาก และเพื่อยืนยันการตัดยอดเงินจากบัตร</p>

                    <br/>
                    <h3 className={classes.mainHeading}>
                        สำหรับ มือถือ
                    </h3>

                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay04.jpg" } alt="THAstropay04"/>
                    <br/>
                    <p className={classes.centeredText}>เลือกที่ "ฝากเงิน"</p>
                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay05.jpg" } alt="THAstropay05"/>
                    <p className={classes.centeredText}>เลือกที่ "AstroPay"</p>
                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/THAstropay06.jpg" } alt="THAstropay06"/>
                    <br/>
                    <p className={classes.centeredText}>กรอกหมายเลขบัตร , รหัสความปลอดภัย, วันที่, จำนวนเงิน แล้วคลิกขั้นตอนต่อไปเพื่อยืนยันยอดฝาก และเพื่อยืนยันการตัดยอดเงินจากบัตร</p>
                    <br/>
                    <p className={classes.centeredText}>หากต้องการทราบวิธีการเติมบัตร AstroPay ด้วย Bitcoin</p>
                    <img className={classes.contentImages} src={ images.src + "letou/bonus_images/deposit_astropay/BottomButton.jpg" } alt="BottomButton"/>

                </div>

                <div className={classes.orangeBackgroundText}>
                    <div className={classes.orangeText}>
                        <p className={classes.wrapper}>ข้อกำหนด</p>
                        <p>1. ท่านสมาชิก สามาถทำรายงานฝาก ผ่านระบบอัตโนมัติได้ที่หน้าเวป LETOU ของเรา</p>
                        <p>2. ระบบจะปรับเงินฝากของท่านให้โดยอัตโนมัติ สามารถเข้าเล่นได้ทันที</p>
                        <p>3. สามารถติดต่อสอบถามข้อมูลอื่นๆได้ที่แชทสด หรือ LINE: LETOUVIP2</p>
                    </div>
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

export default withStyles(styles)(THDepositAstropayBonus);
