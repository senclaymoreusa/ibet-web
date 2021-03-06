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
    },
    bannerImg: {
        width: '100%',
    },
    tableHeader: {
        backgroundColor: 'orange',
        color: 'white',
    },
    table: {
        borderSpacing: 0,
        marginTop: 15,
        marginBottom: 15,
    },
    tableCell: {
        border: '1px solid grey',
        width: 480,
        textAlign: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 6,
        paddingBottom: 6,
    },
};


class VNSpecialCasinoBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/VNSpecialCasino.jpg" } alt="Banner"/>

                <div className={classes.content}>

                    <h3 className={classes.mainHeading}>0.88% HOÀN TRẢ CỰC KHỦNG TẠI CASINO TRỰC TUYẾN</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1.Chương trình Khuyến mãi dành cho tất cả thành viên LETOU tham gia tại Casino trực tuyến và có đầy đủ thông tin đã được xác nhận:</li>
                        <li>- Họ tên thật.</li>
                        <li>- Số di động.</li>
                        <li>- Địa chỉ email.</li>
                        <li>2.Tiền hoàn trả sẽ dựa trên tổng số tiền đặt cược hợp lệ (doanh thu cược) của thành viên tại sản phẩm Casino trực tuyến theo từng kèo, từng trận đấu và từng cấp độ thành viên như sau:</li>
                        
                        <div>
                            <table className={classes.table}>
                                <tr className={classes.tableHeader}>
                                    <th className={classes.tableCell}>Cấp độ</th>
                                    <th className={classes.tableCell}>Hoàn trả</th>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên thường</td>
                                    <td className={classes.tableCell}>0.38%</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên đồng</td>
                                    <td className={classes.tableCell}>0.48%</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên bạc</td>
                                    <td className={classes.tableCell}>0.58%</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên vàng</td>
                                    <td className={classes.tableCell}>0.68%</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên bạch kim</td>
                                    <td className={classes.tableCell}>0.78%</td>
                                </tr>
                                <tr>
                                    <td className={classes.tableCell}>Thành viên kim cương</td>
                                    <td className={classes.tableCell}>0.88%</td>
                                </tr>
                            </table>
                        </div>

                        <li>3.Không giới hạn mức hoàn trả tối thiểu và tối đa.</li>
                        <li>4.Số tiền hoàn trả không cần cược lại.</li>
                        <li>5.Mức hoàn trả được tính như sau:</li>
                        <li>Tổng số tiền đặt cược của thành viên tại Casino trực tuyến: 20,000VND</li>
                        <li>Tổng số tiền hoàn trả: 20,000 VND x 0.88% = 176 VND.</li>
                        <li>6. Để nhận tiền hoàn trả, Thành viên cần nhấp vào nút GIÀNH tại mục Casino sau khi kết thúc cược. Số tiền hoàn trả sẽ được cập nhật trực tiếp vào tài khoản thành viên.</li>
                        <li>7.Chương trình chỉ áp dụng cho các vé cược hợp lệ trong thời gian diễn ra Khuyến mãi tại các sảnh của Casino trực tuyến. Tất cả cược Hòa, cược Hủy, cược 2 BÊN, lũy tiến RNG Jackpots, lũy tiến RNG Slots, Bài và Game bàn chơi, Number Game, Thể thao Ảo sẽ không được tính trong tổng số tiền đặt cược.</li>
                        <li>8.Chương trình Khuyến mãi có thể áp dụng cùng lúc với các chương trình Khuyến mãi tại Letou, ngoại trừ khuyến mãi trả sau.</li>
                        <li>9.Letou có quyền chỉnh sửa, từ chối hoặc hủy bỏ chương trình Khuyến mãi này bất cứ thời gian nào mà không cần báo trước.</li>
                        <li>10.Điều khoản & Điều kiện khuyến mãi chung được áp dụng.</li>
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

export default withStyles(styles)(VNSpecialCasinoBonus);
