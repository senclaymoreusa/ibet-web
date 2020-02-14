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
        width: 1000,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        marginTop: 15,
        lineHeight: 2,
        color: 'grey',
    },
    mainInfo: {
        borderTop: '1px solid #ddd',
        backgroundColor: '#FFFCFA',
        paddingTop: 30,
        paddingBottom: 30,
    },
    mainInfoText: {
        width: 1000,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    wrapper: {
        fontWeight: 900,
        borderLeft: '5px solid #FF9E00',
        paddingLeft: 10,
        fontSize: 22,
        marginBottom: 15,
    },
    tableHeader: {
        backgroundColor: 'orange',
        color: 'white',
    },
    table: {
        borderSpacing: 0,
        marginTop: 25,
        marginBottom: 25,
    },
    tableCell: {
        border: '1px solid grey',
        width: 350,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 6,
    },
    contentHeading: {
        fontWeight: 900,
        fontSize: 22,
    },
};

class THDepositAutoFreeBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/THDepositAutoFree.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    
                    <h3 className={classes.mainHeading}>
                        ฝากเงินผ่าน Help2Pay รับโบนัสเพิ่มทันที 5%
                        <br/>
                        สูงสุดถึง 300 บาท!
                    </h3>

                    <div className={classes.mainInfo}>
                        <div className={classes.mainInfoText}>
                            <div className={classes.wrapper}>
                                ระยะเวลาและเงื่อนไข
                            </div>

                            <ul>
                                <li>1. ระยะเวลาโปรโมชั่นตั้งแต่ 1 ~ 29 ก.พ. 63 23:59:59 (GMT + 8) เฉพาะบัญชีที่ลงทะเบียนกับ Letou ด้วย THB เท่านั้น</li>
                                <li>2. ในช่วงระยะเวลาโปรโมชั่นสมาชิกจะต้องทำการฝากเงินผ่านระบบ Help 2 Pay ขั้นต่ำ 500 บาท จึงจะได้รับโบนัส 5%</li>
                                <li>3. ยอดฝากสำเร็จก่อนเวลา 22:00:00 (GMT+8) ในแต่ละวัน จะสามารถนำมาขอรับโบนัส 5% ได้</li>
                                <li>4. จะต้องติดต่อเจ้าหน้าที่ผ่านทางแชตสดทุกครั้งเพื่อขอรับโบนัส และต้องไม่นำเงินไปเดิมพันก่อน</li>
                                <li>5. โบนัสสูงสุด 300 บาท</li>
                                <li>6. โบนัสเครดิตจะเพิ่มเข้าบัญชีภายใน 24 ชัวโมง</li>
                                <li>7. สมาชิกสามารถรับโบนัสของโปรโมชั่นนี้ได้เพียงแค่ 1 ครั้งต่อวันเท่านั้น</li>
                                <li>8. สมาชิกจะต้องทำยอดเทิร์นโอเวอร์ 10 เท่า จึงจะสามารถถอนเงินได้</li>
                                <li>9. Letou ขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง ยกเลิกโปรโมชั่นโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
                                <li>9. โปรโมชั่นนี้สามารถใช่ร่วมกับโปรโมชั่นอื่นได้</li>
                                <li>9. เงื่อนไขของโปรโมชั่นทั่วไปจะถูกนำมาใช้กับโปรโมชั่นนี้</li>
                            </ul>

                            <br/>

                            <div>
                                <img className={classes.bankLogos} src={ images.src + "letou/bonus_images/THBankLogos.png" } alt="BankLogos"/>
                            </div>

                            <p className={classes.contentHeading}>รายละเอียด ระบบฝากเงินเงินอัตโนมัติ</p>

                            <ul>
                                <li>1. เพียงท่านสมาชิก มีบัญชีอินเตอร์เน็ตแบงค์ต่างๆ</li>
                                <li>2. เลือกทำรายการฝากเงิน ที่ฝากเงินอัตโนมัติ Help2Pay</li>
                                <li>3. หลังทำการเลือกธนาคาร และกรอกจำนวนเงินแล้ว</li>
                                <li>4. กรอกรายละเอียดอินเตอร์เน็ตแบงค์ ในหน้าต่างและกดตกลง</li>
                                <li>5. ระบบจะทำการเพิ่มเครดิต ให้ท่านสมาชิกโดยอัตโนมัติ พร้อมสนุกไปกับทุกบริการของ LETOU ได้ทันที</li>
                            </ul>

                            <br/>

                            <p>
                                **ข้อควรระวัง**: กรุณาตรวจสอบกับเจ้าหน้าที่ก่อนทุกครั้งในการขอรับโบนัส หากท่านทำการสมัครและขอรับโบนัสในที่สาธารณะ เช่น ที่ทำงาน, ร้านอินเตอร์เน็ต, มือถือ & แท็บเล็ตเครื่องเดียวกัน หรือ หอพัก เนื่องจากทั้งหมดที่กล่าวมาอาจจะทำให้เป็นการรับโบนัสซ้ำซ้อนและถูกริบเงินรางวัลในภายหลังหากมีการตรวจสอบพบ
                            </p>

                        </div>
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

export default withStyles(styles)(THDepositAutoFreeBonus);
