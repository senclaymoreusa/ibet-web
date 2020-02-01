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
    bannerImg: {
        width: '100%',
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
    mainHeading: {
        fontSize: 25,
        color: 'orange',
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 500,
    },
    wrapper: {
        fontWeight: 900,
        borderLeft: '5px solid #FF9E00',
        paddingLeft: 10,
        marginBottom: 15,
    },
    tableHeader: {
        backgroundColor: 'orange',
        color: 'white',
    },
    table: {
        borderSpacing: 0,
        marginBottom: 20,
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
    indentedContent: {
        paddingLeft: 20,
    },
    bolded: {
        fontWeight: 900,
    },
};

class VNFirstTimeGameBonus extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.offerHeader}>
                    <img className={classes.mainLogo} src={ images.src + "letou/logo_vi.png" } alt="Main Logo"/>
                    <div className={classes.button}>
                        <a href="/">Xem thêm</a>
                    </div>
                </div>

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/VNFirstTime.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    <h3 className={classes.mainHeading}>150% THƯỞNG CHÀO MỪNG TẠI GAMES</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <div>
                        <table className={classes.table}>
                            <tr className={classes.tableHeader}>
                                <th className={classes.tableCell}>Tiền Gửi Tối Thiểu</th>
                                <th className={classes.tableCell}>Khuyến Mãi</th>
                                <th className={classes.tableCell}>Thưởng Tối Đa</th>
                                <th className={classes.tableCell}>Vòng Cược</th>
                            </tr>
                            <tr>
                                <td className={classes.tableCell}>200 VND</td>
                                <td className={classes.tableCell}>150%</td>
                                <td className={classes.tableCell}>3,000 VND</td>
                                <td className={classes.tableCell}>25</td>
                            </tr>
                        </table>
                    </div>

                    <ul>
                        <li>1. Chương trình Khuyến mãi bắt đầu từ 00:00:00 (GMT+8) ngày 01/01/2020 đến 23:59:59 (GMT+8) ngày 31/01/2020.</li>
                        <li>2. Chương trình dành cho 1,000 thành viên MỚI của Việt Nam đăng ký tiền tệ VND và có lần đầu gửi tiền thành công tại Letou trong thời gian diễn ra Khuyến mãi.</li>
                        <li>3. Người chơi cần phải thực hiện nạp tiền tối thiểu là 200VND để có thể tham gia Khuyến mãi.</li>
                        <li>4. Tiền gửi cộng tiền thưởng cần trải qua 25 vòng cược tại Games trước khi tiến hành rút tiền. Ví dụ:</li>

                        <div className={classes.indentedContent}>
                            <li className={classes.bolded}>Ví dụ</li>
                            <li>Chuyển quỹ vào tài khoản Games: 200 VND</li>
                            <li>Nhận thưởng 150%: 150% x 200 = 300 VND</li>
                            <li>Số tiền cược yêu cầu: (200 + 300) x 25 = 12,500VND</li>
                        </div>

                        <li>5. Để tham gia Khuyến mãi Thành viên vui lòng liên hệ với bộ phận HỖ TRỢ TRỰC TUYẾN để được kiểm tra và kích hoạt tiền thưởng trước khi có lệnh đặt cược của giao dịch gửi tiền thành công.</li>
                        <li>6. Tiền thưởng sẽ được cập nhật trong vòng 48h kể từ thời điểm khi tài khoản của Khách hàng đã đăng kí thành công với bộ phận Hỗ trợ trực tuyến</li>
                        <li>7. Tất cả các cược HÒA, cược HỦY, cược 2 BÊN, các trò không phải là Slots Game, lũy tiến RNG Jackpots, Game bàn chơi sẽ không được tính vào chương trình này.</li>
                        <li>8. Letou có quyền chỉnh sửa, từ chối hoặc hủy bỏ chương trình Khuyến mãi này bất cứ thời gian nào mà không cần báo trước.</li>
                        <li>9. Khuyến mãi sẽ không được áp dụng chung với các Khuyến mãi nạp tiền lần đầu khác.</li>
                        <li>10. Điều khoản & Điều kiện khuyến mãi chung được áp dụng.</li>
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

export default withStyles(styles)(VNFirstTimeGameBonus);
