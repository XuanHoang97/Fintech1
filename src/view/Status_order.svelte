<script>
    import {link} from 'svelte-spa-router'
    import Header from '../layout/Header.svelte';  
    import {product, currentPro, productNumber} from '../store_admin.js';
    let pro = $product[$productNumber];
  
</script>
<Header></Header>
<div class="wrapper">
    <div class="order_info">
        <div class="payment__customer">
            <div class="customer__cont">
                <h1>Thông tin đơn hàng</h1>
                <div class="payment--user">
                    <div class="user__detail">
                        <div class="detail__order">
                            <h3 class="detail_heading">Chi tiết đơn hàng</h3>
                            <span>{pro.order_code}</span>
                        </div>
                        
                        <div class="detail">
                            <h4>Cấu hình {pro.type}</h4>
                            <div class="detail__item">
                                <img src="img/note.png" alt="" >
                                <img src="assets/img/note.png" alt="" class="note_mobile">
                                <div class="detail--info">
                                    <div class="heading">Ổ Cứng 50TB</div>
                                    <p>Có sẵn <span>50 Plot</span></p>
                                    <p>1 PC tối ưu cấu hình</p>
                                    <p>Hỗ trợ 24/7/365</p>
                                    <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                    <p>Gói bảo hành Gold 2 năm</p>
                                </div>
                            </div>
                            
                        </div>
                        <p>{pro.content}</p>
                        <h2>{pro.price}</h2>
                        <p>Freeshipping</p>
                        <div class="time">{pro.time}</div>
                    </div>
                    <div class="user__contact">
                        <h3 class="addr">Địa chỉ giao hàng</h3>
                        <p>Người nhận</p>
                        <div class="user--name">{pro.customer}</div>
                        <p>Số điện thoại</p>
                        <div class="user--name">{pro.phone}</div>
                        <p>Người nhận</p>
                        <div class="user--name">{pro.addr}</div>
                    </div>
                </div>
                <div class="verify_order">
                    <a href="#">Xác nhận giao hàng</a>   
                </div>
            </div>
            
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/status_order.scss";
</style>