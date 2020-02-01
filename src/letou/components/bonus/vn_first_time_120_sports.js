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
    mainHeading: {
        fontSize: 25,
        color: 'orange',
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 500,
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
    wrapper: {
        fontWeight: 900,
        borderLeft: '5px solid #FF9E00',
        paddingLeft: 10,
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
};

class VNFirstTime120SportsBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/VN120Sports.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    <h3 className={classes.mainHeading}>120% THƯỞNG CHÀO MỪNG TẠI THỂ THAO LÊN ĐẾN 6,888VND</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1. Chương trình khuyến mãi diễn ra từ ngày 01 tháng 01 năm 2020 vào lúc 00:00:00 (GMT +8) đến ngày 31 tháng 01 năm 2020 vào lúc 23:59:59 (GMT +8).</li>
                        <li>2. Chương trình dành cho các thành viên MỚI của Việt Nam đăng ký tiền tệ VND và có lần đầu gửi tiền thành công tại Letou trong thời gian diễn ra Khuyến mãi.</li>
                        <li>3. Người chơi cần nạp tiền tối thiểu 1,000VND để có thể tham gia Khuyến mãi. Thành viên chỉ có thể nhận một lần tiền thưởng Khuyến Mãi tại o- Thể Thao hoặc e- Thể Thao.</li>
                        <li>4. Để hợp lệ nhận thưởng thì tiền thưởng cộng tiền gửi cần trải qua 28 vòng cược tại sản phẩm Thể Thao mà thành viên chọn tham gia (o-Thể Thao hoặc e- Thể Thao)</li>

                        <div className={classes.indentedContent}>
                            <div>
                                <table className={classes.table}>
                                    <tr className={classes.tableHeader}>
                                        <th className={classes.tableCell}>Sản phẩm</th>
                                        <th className={classes.tableCell}>Thưởng</th>
                                        <th className={classes.tableCell}>Thưởng Tối Đa</th>
                                        <th className={classes.tableCell}>Vòng Cược yêu cầu</th>
                                    </tr>
                                    <tr>
                                        <td className={classes.tableCell}>o-Thể thao/e- Thể Thao</td>
                                        <td className={classes.tableCell}>120%</td>
                                        <td className={classes.tableCell}>6,888 VND</td>
                                        <td className={classes.tableCell}>28</td>
                                    </tr>
                                </table>
                            </div>

                            <li className={classes.bolded}>Ví dụ</li>
                            <li>Chuyển quỹ vào tài khoản o-Thể Thao: 1,000 VND</li>
                            <li>Nhận thưởng 120%: 120% x 1,000 = 1,200 VND</li>
                            <li>Số tiền cược yêu cầu: (1,000 + 1,200) x 28 = 61,600 VND</li>
                        </div>

                        <li>5. Khuyến mãi chỉ áp dụng tại o-Thể thao/e- Thể Thao.</li>
                        <li>6. Trong quá trình tham gia khuyến mãi, thành viên có thể rút tiền sau khi hoàn thành 1 vòng cược của tổng số tiền nạp.</li>
                        <li>7. Tiền thưởng sẽ được cập nhật trong vòng 48 giờ kể từ thời điểm thành viên đăng ký thành công với Letou và đạt đủ doanh thu vòng cược theo yêu cầu.</li>
                        <li>8. Doanh thu cược tại o-Thể thao/ e- Thể Thao bắt đầu được tính cộng dồn từ thời điểm thành viên đăng ký Khuyến mãi thành công với LETOU, trước đó sẽ coi là không hợp lệ.</li>
                        <li>9. Thời gian tính cộng dồn cho doanh thu cược là 30 ngày (kể từ thời điểm đăng ký thành công). Quá thời hạn trên, Khuyến mãi coi như bị hủy và không hợp lệ.</li>
                        <li>10. Để tham gia Khuyến mãi thành viên cần liên hệ với bộ phận HỖ TRỢ TRỰC TUYẾN để kiểm tra và kích hoạt Khuyến mãi trước khi có lệnh đặt cược của giao dịch gửi tiền thành công.</li>
                        <li>11. Tất cả các cược hòa, cược hủy, cược 2 bên, Number Game, Thể thao Ảo, cược vào Europe Handicap dưới 1.75, Asian Handicap dưới 0.75, không phải là o-Thể thao sẽ không được tính trong chương trình này.</li>
                        <li>12. Letou có quyền chỉnh sửa, từ chối hoặc hủy bỏ chương trình Khuyến mãi này bất cứ thời gian nào mà không cần báo trước.</li>
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

export default withStyles(styles)(VNFirstTime120SportsBonus);
