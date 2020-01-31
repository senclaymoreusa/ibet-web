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
};

class VNFirstTime200ScratchCardBonus extends React.Component {

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

                <img className={classes.bannerImg} src={ images.src + "letou/bonus_images/VNScratchCard.jpg" } alt="Banner"/>
                
                <div className={classes.content}>
                    <h3 className={classes.mainHeading}>NHẬN 200% THƯỞNG NẠP THẺ CÀO</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1. Chương trình Khuyến mãi bắt đầu từ 00:00:00 (GMT+8) ngày 01/01/2020 đến 23:59:59 (GMT+8) ngày 31/01/2020, áp dụng cho 1,000 thành viên nạp tiền lần đầu trên Letou.</li>
                        <li>2. Thành viên sau khi đăng ký tài khoản tại Letou và thực hiện xác nhận thông tin sẽ nhận ngay 200% tiền thưởng miễn phí khi nạp tiền lần đầu bằng thẻ cào điện thoại:</li>

                        <div className={classes.indentedContent}>
                            <li>- Họ tên thật.</li>
                            <li>- Số di động.</li>
                            <li>- Địa chỉ email.</li>
                        </div>

                        <li>3. Tiền thưởng tối thiểu 50VND, tối đa 200VND.</li>
                        <li>4. Chương trình chỉ áp dụng 1 lần duy nhất. Thẻ cộng dồn sẽ được tính hợp lệ nếu là 1 lần nạp liên hoàn (liên tiếp), ngoài ra sẽ chỉ tính cho lần đầu tiên duy nhất.</li>
                        <li>5. Để tham gia Khuyến mãi thành viên cần liên hệ với bộ phận HỖ TRỢ TRỰC TUYẾN để được kiểm tra và xác nhận thông tin trước khi có lệnh đặt cược của giao dịch gửi tiền thành công.</li>
                        <li>6. Tiền gửi cộng tiền thưởng cần trải qua 15 vòng cược trước khi tiến hành rút tiền.</li>
                        <li>7. Tiền thưởng sẽ được cập nhật trong vòng 24 giờ kể từ thời điểm Thành viên đăng ký thành công với Letou.</li>
                        <li>8. Yêu cầu duy trì số dư tối thiểu trong tài khoản chính phải lớn hơn hoặc bằng 100VND (duy trì trong vòng 30 ngày kể từ thời điểm nhận Khuyến mãi). Trường hợp số dư bằng 0VND, yêu cầu tự động được hủy bỏ.</li>
                        <li>9. Tất cả các cược HÒA, cược HỦY, cược 2 BÊN, cược vào Europe Handicap dưới 1.75, Asian Handicap dưới 0.75, Lũy tiến Jackpots, Lũy tiến Slots, Game bàn chơi, Number Game, Thể thao Ảo, sẽ không được tính trong chương trình này.</li>
                        <li>10. Cược tất tay (cược toàn bộ số tiền gửi và Khuyến mãi) trong 2 vé cược đầu tiên khi tham gia Khuyến mãi này và đặt 2 vé cược trên cùng 1 loại cược trong cùng trận đấu sẽ không được coi là hợp lệ tại Letou. Tiền cược tối đa cho 2 lần cược đầu tiên sau khi nhận Khuyến mãi phải thấp hơn hoặc bằng với số tiền gốc gửi vào. Các tài khoản vi phạm sẽ bị tịch thu toàn bộ tiền Khuyến mãi cũng như các khoản tiền thắng khác.</li>
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

export default withStyles(styles)(VNFirstTime200ScratchCardBonus);
