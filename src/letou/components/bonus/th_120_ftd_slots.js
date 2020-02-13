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
};

class TH120FTDSlotBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/TH120FTDSlots.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    
                    <h3 className={classes.mainHeading}>
                        สมาชิกใหม่ ฝากครั้งแรกรับโบนัส 120% สำหรับเกมสล็อต (Slot Game)
                        สูงสุด 5,000 บาท
                    </h3>

                    <div className={classes.mainInfo}>
                        <div className={classes.mainInfoText}>
                            <div className={classes.wrapper}>
                                ผลิตภัณฑ์และโบนัส
                            </div>

                            <div>
                                <table className={classes.table}>
                                    <tr className={classes.tableHeader}>
                                        <th className={classes.tableCell}>ผลิตภัณฑ์</th>
                                        <th className={classes.tableCell}>โบนัสสูงสุด</th>
                                        <th className={classes.tableCell}>เทิร์นโอเวอร์</th>
                                    </tr>
                                    <tr>
                                        <td className={classes.tableCell}>สล็อตทุกแบรนด์ (ยกเว้นเกมโต๊ะและโป๊กเกอร์)</td>
                                        <td className={classes.tableCell}>5,000 บาท</td>
                                        <td className={classes.tableCell}>28 เท่า</td>
                                    </tr>
                                </table>
                            </div>

                            <div className={classes.wrapper}>
                                เงื่อนไขและข้อกำหนด
                            </div>

                            <ul>
                                <li>1. สำหรับสมาชิกใหม่นั้น ต้องไม่มีฐานข้อมูลซ้ำกับของเราเช่น ชื่อ เบอร์โทร บัญชีธนาคาร ไอพี หรืออื่นๆ</li>
                                <li>2. โบนัสนี้สามารถรับได้ 1 ครั้ง ต่อ 1 ยูสเซอร์</li>
                                <li>3. ต้องทำรายการ ฝาก 200 บาท ขึ้นไป ถึงจะมีสิทธิ์รับโบนัสนี้</li>
                                <li>4. โบนัสนี้จะใช้ได้เฉพาะการวางเดิมใน เกมสล็อต เท่านั้น</li>
                                <li>5. สมาชิกใหม่ฝากเงินครั้งแรก ได้รับ 120% สูงสุด 5,000 บาท และจะต้องทำเทิร์นโอเวอร์ 28 เท่าจากยอดฝาก+โบนัส</li>
                                <li>6. ห้ามแทงสวน เพื่อปั่นยอดเทิร์น รวมถึงใช้ หลายยูสเซอร์แทงสวนกันเพื่อปั่นยอดเทิร์น</li>
                                <li>7. เทิร์นโอเวอร์ จะนับเฉพาะบิลที่มีผลเดิมพันเป็น แพ้ หรือ ชนะ เท่านั้น</li>
                                <li>8. สำหรับการวางเดิมพันครั้งแรก!! ไม่สามารถเดิมพันเกินจำนวนยอดฝาก มิฉะนั้น จะริบยอดชนะทั้งหมด</li>
                                <li>- เช่น ฝากมา 200 บาท รับโบนัส 200 บาท การวางเดิมพันบิลแรก จะไม่สามารถวางเดิมพันเกิน 200 บาท ได้</li>
                                <li>9. ไม่สามารถเดิมพันด้วยยอดเงินทั้งหมด หรือไม่สามารถเดิมพันมากกว่า 80 % ของยอดเงินทั้งหมดที่สมาชิกมีอยู่ (แทงทบ/All-In) จนกว่าจะทำเทิร์นโอเวอร์ครบตามจำนวน</li>
                                <li>10. สมาชิกต้องทำยอดเทิร์นภายใน 14 วัน นับตั้งแต่ขอรับโบนัสไปหรือทำผิด เราขอสงวนสิทธิ์ขอเรียกคืนเงินโบนัสและเงินชนะ รวมถึงค่าใช้จ่ายอื่นๆได้</li>
                                <li>11. การตัดสินของ Letou Thai ถือเป็นที่สิ้นสุด และขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรโมชั่นนี้ได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
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

export default withStyles(styles)(TH120FTDSlotBonus);
