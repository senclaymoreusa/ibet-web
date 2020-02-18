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
    bolded: {
        fontWeight: 900,
    },
    example: {
        paddingLeft: 25,
    },
    tableHeader: {
        backgroundColor: 'orange',
        color: 'white',
    },
    table: {
        borderSpacing: 0,
        padding: 10,
        width: 600,
        tableLayout: 'fixed',
        overflow: 'hidden',
    },
    tableCell: {
        border: '1px solid grey',
        width: 170,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 6,
        verticalAlign: 'middle',
    },
};

class VNFirstTimeSportsBookBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/VNSportsbook.jpg" } alt="Banner"/>

                <div className={classes.content}>
                    <h3 className={classes.mainHeading}>100% THƯỞNG THÀNH VIÊN MỚI TẠI THỂ THAO</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1. Chương trình khuyến mãi bắt đầu từ 00:00:00 (GMT +8) ngày 01/01/2020 đến 23:59:59 (GMT +8) ngày 31/01/2020.</li>
                        <li>2. Chương trình dành cho 1,000 thành viên MỚI của Việt Nam đăng ký tiền tệ VND và có lần gửi tiền đầu tiên thành công tại Letou trong thời gian diễn ra Khuyến mãi.</li>
                        <li>3. Thành viên cần gửi tiền thành công tối thiểu 200VND để có thể tham gia Khuyến mãi.</li>
                        <li>4. Thành viên chỉ có thể nhận một lần tiền thưởng Khuyến mãi 100% hay 25% tại o-Thể Thao/e-Thể Thao. Vì vậy, thành viên phải chọn loại Khuyến mãi mà mình muốn nhận.</li>

                        <div>
                            <table className={classes.table}>
                                <tr className={classes.tableHeader}>
                                    <th className={classes.tableCell}>Mã Thưởng</th>
                                    <th className={classes.tableCell}>Sản phẩm</th>
                                    <th className={classes.tableCell}>Tiền gửi tối thiểu</th>
                                    <th className={classes.tableCell}>Thưởng</th>
                                    <th className={classes.tableCell}>Thưởng Tối Đa</th>
                                    <th className={classes.tableCell}>Vòng Cược yêu cầu</th>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>100FTDSPORT</td>
                                    <td className={classes.tableCell} rowspan={2}>Thể thao</td>
                                    <td className={classes.tableCell} rowspan={2}>200VND</td>
                                    <td className={classes.tableCell}>100%</td>
                                    <td className={classes.tableCell}>1,000VND</td>
                                    <td className={classes.tableCell}>30</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>25FTDSPORT</td>
                                    <td className={classes.tableCell}>25%</td>
                                    <td className={classes.tableCell}>10,000VND</td>
                                    <td className={classes.tableCell}>18</td>
                                </tr>
                            </table>
                        </div>

                        <li>5. Tiền gửi cộng tiền thưởng cần trải qua số vòng cược tại o-Thể Thao/e-Thể Thao theo yêu cầu ở điều kiện số 4 trước khi tiến hành rút tiền.</li>
                        
                        <div className={classes.example}>
                            <li className={classes.bolded}>Ví dụ</li>
                            <li>Chuyển quỹ vào tài khoản o-Thể Thao: 200 VND</li>
                            <li>Nhận thưởng 100%: 100% x 200 = 200 VND</li>
                            <li>Số tiền cược yêu cầu: (200 + 200) x 30 = 12,000 VND</li>
                        </div>
                        
                        <li>6. Để tham gia Khuyến mãi, thành viên vui lòng liên hệ HỖ TRỢ TRỰC TUYẾN để được kiểm tra và kích hoạt tiền thưởng trước khi có lệnh đặt cược của giao dịch gửi tiền thành công.</li>
                        <li>7. Tiền thưởng sẽ được cập nhật trong vòng 48 giờ kể từ thời điểm thành viên đăng ký thành công với Letou.</li>
                        <li>8. Tất cả cược HÒA, cược HỦY, cược 2 BÊN, kiểu cược Europe Handicap tỷ lệ dưới 1.75, Asian Handicap dưới 0.75, Thể thao ảo, Đua ngựa và Number Game sẽ không được áp dụng cho chương trình này.</li>
                        <li>9. Cược tất tay (cược toàn bộ số tiền gửi và Khuyến mãi) trong 2 vé cược đầu tiên khi tham gia Khuyến mãi và đặt 2 vé cược trên cùng 1 loại cược trong cùng trận đấu sẽ không được coi là hợp lệ tại Letou. Tổng tiền cược của 2 vé cược đầu tiên sau khi nhận Khuyến mãi phải thấp hơn hoặc bằng với số tiền gốc gửi vào. Các tài khoản vi phạm sẽ bị tịch thu toàn bộ tiền Khuyến mãi cũng như các khoản tiền thắng khác.</li>
                        <li>10. Letou có quyền chỉnh sửa,từ chối hoặc hủy bỏ chương trình Khuyến mãi bất cứ thời gian nào mà không cần báo trước.</li>
                        <li>11. Khuyến mãi không được kết hợp với những khuyến mãi thành viên nạp tiền lần đầu khác.</li>
                        <li>12. Điều khoản & Điều kiện khuyến mãi chung được áp dụng.</li>
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

export default withStyles(styles)(VNFirstTimeSportsBookBonus);
