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
    contentImages: {
        width: '100%',
    },
    centeredImages: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

class THOneClickRegisterBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/THOneClickRegister.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    
                    <h3 className={classes.mainHeading}>
                        One Click Register
                        <br/>
                        เจ้าแรกในเอเซีย คลิกเดียวเข้าเล่นได้ทันที!!!!
                        <br/>
                        <img src={ images.src + "letou/bonus_images/one_click_register/TopButton.png" } alt="TopButton"/>
                    </h3>

                    <ul>
                        <li>ปกติเวลาผู้เล่นทั่วไปจะเริ่มเล่นเว็บเลโต้ ผู้เล่นต้องทำการลงทะเบียนก่อน โดยกรอกข้อมูล 4-5 ส่วนดังนี้</li>
                        <li>• ชื่อผู้ใช้งาน</li>
                        <li>• รหัสผ่าน</li>
                        <li>• ยืนยันรหัสผ่าน</li>
                        <li>• หมายเลขโทรศัทพ์</li>
                        <li>• รหัสตัวแทน (กรอกเฉพาะในกรณีที่เพื่อนเป็นผู้แนะนำมาเล่น)</li>

                        <br/>
                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick01.jpg" } alt="THOneClick01"/>

                        <li>ระบบ "One Click" เป็นระบบใหม่ ที่จะอำนวยความสะดวกแก่ผู้เล่น ให้สามารถรับยูสเซอร์และพาสเวิร์ดทันทีภายในคลิกเดียว</li>
                        <li>โดยที่ไม่ต้องลงทะเบียนเต็มรูปแบบ ใช้งานได้ง่ายๆ ดังนี้ :</li>
                        <li>1.คลิกที่ปุ่ม [คลิกที่นี่ เพื่อรับยูสทันที]</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick02.jpg" } alt="THOneClick02"/>

                        <li>2.ระบบของเว็บเลโต้ จะสร้างยูสเซอร์และพาสเวิร์ดให้แก่ผู้เล่นทันที</li>
                        <li>•ผู้เล่นสามารถก็อปปี้ชื่อยูสเซอร์ และพาสเวิร์ด แล้วนำไปวางไว้และบันทึกเป็นไฟล์ข้อความได้</li>
                        <li>•ผู้เล่นสามารถทำการส่งข้อมูล ยูสเซอร์และพาสเวิร์ดไปที่อีเมล์ หรือ SMS ไปที่โทรศัพท์มือถือได้</li>
                        <li>(เพื่อเป็นการบันทึกไว้ หรือในกรณีที่ผู้เล่นลืมยูสเซอร์และพาสเวิร์ด)</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick03.jpg" } alt="THOneClick03"/>

                        <li>ผู้เล่นสามารถเลือกส่งยูสเซอร์และพาสเวิร์ดไปที่อีเมล์ได้</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick04.jpg" } alt="THOneClick04"/>

                        <li>ผู้เล่นสามารถเลือกส่งยูสเซอร์และพาสเวิร์ดไปที่โทรศัพท์ ผ่าน SMS ได้ (การใส่หมายเลขโทรศัพท์มือถือ ต้องตัด "0" ตัวแรกออก)</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick05.jpg" } alt="THOneClick05"/>

                        <li>หลังจากคลิก "ฝากเพื่อเล่นทันที" ผู้เล่นต้องกรอกข้อมูลชื่อและนามสกุลจริง ก่อนการฝาก (ทำเพียงครั้งแรกครั้งเดียว)</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick06.jpg" } alt="THOneClick06"/>

                        <li>กรอกชื่อจริง นามสกุลจริง และคลิกที่ [ขั้นต่อไป]</li>

                        <img className={classes.contentImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick07.jpg" } alt="THOneClick07"/>

                        <li>หลังจากนั้นเป็นขั้นตอนการฝาก สมาชิกสามารถเลือกการฝากได้ดังนี้ : [ฝากผ่านบัญชีธนาคาร], [ฝากอัตโนมัติ (อินเตอร์เน็ตแบงค์)] และ [ฝากผ่าน QR Code] ได้ทันที</li>
                    </ul>

                    <img className={classes.centeredImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick08.jpg" } alt="THOneClick08"/>
                    <img className={classes.centeredImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick09.jpg" } alt="THOneClick09"/>
                    <img className={classes.centeredImages} src={ images.src + "letou/bonus_images/one_click_register/THOneClick10.jpg" } alt="THOneClick10"/>
                    <br/>
                    <img className={classes.centeredImages} src={ images.src + "letou/bonus_images/one_click_register/BottomButton.png" } alt="BottomButton"/>

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

export default withStyles(styles)(THOneClickRegisterBonus);
