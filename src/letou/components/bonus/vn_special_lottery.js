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
    indentedContent: {
        paddingLeft: 35,
    },
    bolded: {
        fontWeight: 900,
    },
};


class VNSpecialLotteryBonus extends React.Component {

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

                <div className={classes.content}>

                    <h3 className={classes.mainHeading}>5% HOÀN TRẢ HÀNG TUẦN TẠI XỔ SỐ</h3>
                    <hr></hr>
                    <p className={classes.wrapper}>Điều kiện và Điều khoản:</p>

                    <ul>
                        <li>1. Chương trình Khuyến mãi dành cho tất cả thành viên LETOU tham gia tại Xổ số ( Lotto, SSC, PK10) và có đầy đủ thông tin đã được xác nhận:</li>
                        <li>- Họ tên thật</li>
                        <li>- Số di động</li>
                        <li>- Địa chỉ email</li>
                        <li>2. Tiền hoàn trả hàng tuần của thành viên sẽ dựa trên tổng số tiền đặt cược hợp lệ tính từ 00:00:00 (GMT+8) thứ 2 đến 23:59:59 (GMT+8) chủ nhật tại sản phẩm Xổ số sau:</li>
                        <li>3. Tiền thưởng tối thiểu 1VND, tối đa hoàn trả 1,500VND.</li>
                        <li>4. Số tiền hoàn trả không cần cược lại.</li>
                        <li>5. Mức hoàn trả được tính như sau:</li>

                        <div className={classes.indentedContent}>
                            <li className={classes.bolded}>Ví dụ</li>
                            <li>Tổng số tiền đặt cược của thành viên VIP tại Xổ số: 5,000VND</li>
                            <li>Tổng số tiền hoàn trả: 5,000 x 5%= 250VND.</li>
                        </div>

                        <li>6. Số tiền khuyến mãi hoàn trả sẽ được cập nhật hàng tuần vào ngày thứ 2 của tuần kế tiếp.</li>
                        <li>7. Chương trình chỉ áp dụng cho các vé cược hợp lệ trong thời gian diễn ra Khuyến mãi. Tất cả cược Hòa, cược Hủy, cược Hai bên sẽ không được tính trong tổng số tiền đặt cược.</li>
                        <li>8. Letou có quyền chỉnh sửa, từ chối hoặc hủy bỏ chương trình Khuyến mãi này bất cứ thời gian nào mà không cần báo trước.</li>
                        <li>9. Chương trình có thể áp dụng cùng lúc với tất cả các Khuyến mãi tại LETOU.</li>
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

export default withStyles(styles)(VNSpecialLotteryBonus);
