<script>
    import {link} from 'svelte-spa-router'
    import Header from '../layout/Header.svelte';  
    import {product, currentPro, productNumber} from '../store_admin.js';
    let pro = $product[$productNumber];
</script>
<Header></Header>
<div class="wrapper">
    <div class="order_info">
        <div class="guarrantee__customer">
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
                    <a href="#">Xác nhận bảo hành</a>   
                </div>

                <div class="log">
                    <h2>Lịch sử bảo hành</h2>

                    <div class="info_guarantee">     
                        <div class="guarantee_title">
                            <p>Lần</p>
                            <p>Thời gian bảo hành</p>
                            <p>Thời gian nhận máy</p>
                            <p>Thời gian trả máy</p>
                            <p>Trạng thái</p>
                        </div>
                        
                        <div class="list__item">
                            <div class="list__guarantee">
                                <p>{pro.guarantee_n1}</p>
                                <p>{pro.guarantee_time}</p>
                                <p>{pro.guarantee_receive}</p>
                                <p>{pro.guarantee_repay}</p>
                                <p class="done">{pro.done_guarantee}</p>
                            </div>
                            <div class="list__guarantee">
                                <p>2</p>
                                <p>{pro.guarantee_time}</p>
                                <p>{pro.guarantee_receive}</p>
                                <p>--</p>
                                <p class="warranty">{pro.status_guarantee}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/verify_guarantee.scss";
</style>