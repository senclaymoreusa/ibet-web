import React from 'react';
import TopNavbar from '../top_navbar';
import Footer from '../footer';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const styles = {
    mainHeading: {
        fontSize: 25,
        color: 'orange',
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 500,
    },
    content: {
        margin: 15,
        paddingLeft: 250,
        paddingRight: 250,
        paddingBottom: 50,
        lineHeight: 2,
        color: 'grey',
    },
    bannerImg: {
        width: '100%',
    },
    indentedContent: {
        paddingLeft: 15,
    },
    tableHeader: {
        backgroundColor: 'orange',
        color: 'white',
    },
    table: {
        borderSpacing: 0,
    },
    tableCell: {
        border: '1px solid grey',
        width: 250,
        textAlign: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 6,
        paddingBottom: 6,
    },
    bolded: {
        fontWeight: 900,
    },
    wrapper: {
        fontWeight: 900,
        borderLeft: '5px solid #FF9E00',
        paddingLeft: 10,
    },
    offerHeader: {
        height: 55,
    },
    mainLogo: {
        height: 33,
        paddingLeft: 250,
        marginTop: 11,
    },
    button: {
        width: 95,
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
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 2.0,
    },
    footer: {
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },
};


class VNFirst200SlotBonus extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>

                <div className={classes.offerHeader}>
                    <img className={classes.mainLogo} src="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/letou/logo_vi.png" alt="Main Logo"/>
                    <div className={classes.button}>
                        <a className={classes.buttonText}>Xem thêm</a>
                    </div>
                </div>

                <img className={classes.bannerImg} src="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/letou/bonus_images/VN200slots.jpg" alt="Banner Image"/>
                <div className={classes.content}>

                    <h3 className={classes.mainHeading}>200% THƯỞNG CHÀO MỪNG TẠI SLOT GAMES</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1. Chương trình Khuyến mãi bắt đầu từ 00:00:00 (GMT+8) ngày 01/01/2020 đến 23:59:59 (GMT+8) ngày 31/01/2020</li>
                        <li>2. Chương trình dành cho thành viên MỚI của Việt Nam đăng ký tiền tệ VND và có lần đầu gửi tiền thành công tại Letou trong thời gian diễn ra Khuyến mãi.</li>
                        <li>3. Người chơi cần nạp tiền tối thiểu 500VND để có thể tham gia Khuyến mãi.</li>
                        <li>4. Để hợp lệ nhận thưởng thì tiền gửi cộng tiền thưởng cần trải qua 32 vòng cược tại Slot Games.</li>

                        <div className={classes.indentedContent}>
                            <div>
                                <table className={classes.table}>
                                    <tr className={classes.tableHeader}>
                                        <th className={classes.tableCell}>Sản phẩm</th>
                                        <th className={classes.tableCell}>Thưởng</th>
                                        <th className={classes.tableCell}>Thưởng tối đa</th>
                                        <th className={classes.tableCell}>Vòng cược yêu cầu</th>
                                    </tr>
                                    <tr>
                                        <td className={classes.tableCell}>Slot Games</td>
                                        <td className={classes.tableCell}>200%</td>
                                        <td className={classes.tableCell}>2,888VND</td>
                                        <td className={classes.tableCell}>32</td>
                                    </tr>
                                </table>
                            </div>

                            <li className={classes.bolded}>Ví dụ</li>
                            <li>Chuyển quỹ vào tài khoản Slot Games: 500VND</li>
                            <li>Nhận thưởng 200% Khuyến mãi: 200% x 500 = 1,000VND</li>
                            <li>Số tiền cược yêu cầu: (500+1,000)x 32 = 48,000VND</li>
                        </div>

                        <li>5. Tiền thưởng sẽ được cập nhật trong vòng 48 giờ kể từ thời điểm thành viên đăng ký thành công với Letou và đạt đủ doanh thu vòng cược theo yêu cầu.</li>
                        <li>6. Trong quá trình tham gia khuyến mãi, thành viên có thể rút tiền sau khi hoàn thành 1 vòng cược của tổng số tiền nạp.</li>
                        <li>7. Doanh thu cược tại Slot Games bắt đầu được tính cộng dồn từ thời điểm thành viên đăng ký Khuyến mãi thành công với LETOU, trước đó sẽ coi là không hợp lệ.</li>
                        <li>8. Thời gian tính cộng dồn cho doanh thu cược là 30 ngày ( kể từ thời điểm đăng ký thành công). Quá thời hạn trên, Khuyến mãi coi như bị hủy và không hợp lệ.</li>
                        <li>9. Để tham gia Khuyến mãi thành viên cần liên hệ với bộ phận HỖ TRỢ TRỰC TUYẾN để được kiểm tra và kích hoạt Khuyến mãi trước khi có lệnh đặt cược của giao dịch gửi tiền thành công.</li>
                        <li>10. Tất cả các cược HÒA, cược HỦY, cược 2 BÊN, các trò không phải là Slots Games, các trò lũy tiến RNG Jackpots, Game bàn chơi sẽ không được tính trong chương trình này.</li>
                        <li>11. Letou có quyền chỉnh sửa, từ chối hoặc hủy bỏ chương trình Khuyến mãi này bất cứ thời gian nào mà không cần báo trước.</li>
                        <li>12. Khuyến mãi không được kết hợp với những Khuyến mãi thành viên nạp tiền lần đầu khác.</li>
                        <li>13. Điều khoản & Điều kiện khuyến mãi chung được áp dụng.</li>
                    </ul>
                </div>

                <div className={classes.footer}>
                    Letou.com được cấp phép bởi Pagcor Philippines Offshore Gaming.
                    <br/>
                    Bản quyền thuộc về LETOU.
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(VNFirst200SlotBonus);
