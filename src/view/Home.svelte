<script>
    import { cart } from "../api/cart.js";
    import {link} from 'svelte-spa-router'
    import { Swipe, SwipeItem } from "svelte-swipe";
    import Header from '../layout/Header.svelte';
    import Footer from '../layout/Footer.svelte';
    import {product, currentPro, productNumber} from '../store.js';
    let check = true;
    let pro = $product;
    const swipeConfig = {
    autoplay: true,
    delay: 2000,
    showIndicators: false,
    transitionDuration: 1000,
    defaultIndex: 0,
    };
    let screenWidth = window.innerWidth;
    let farm = "farm0";
</script>

<Header></Header>
<div class="wrapper">
    <div class="intro">
        <div class="intro__container container">
            <h1>Farming workstation Cho Một Nhiệm Vụ Khả Thi</h1>
            <h4>Khuyến Mãi Kỷ Niệm Ngày Thành Lập Computer Associates</h4>
            <p>Copy
                Nhận Voucher 30% cho lần mua sắm tiếp theo khi mua gói Cao Cấp. Tặng thêm Gear trị giá 500k</p>
            <span>Ưu đãi kết thúc trong:</span>
            <div class="time">
                <div class="time__day ">
                    <div class="set">
                        <div class="time--number">45</div>
                        <span>:</span>
                    </div>
                    <span>Ngày</span>
                </div>
                <div class="time__hours">
                    <div class="set">
                        <div class="time--number">15</div>
                        <span>:</span>
                    </div>
                    <span>Giờ</span>
                </div>
                <div class="time__min">
                    <div class="set">
                        <div class="time--number">02</div>
                        <span>:</span>
                    </div>
                    <span>Phút</span>
                </div>
                <div class="time__sec">
                    <div class="set">
                        <div class="time--number">32</div>
                    </div>
                    <span>Giây</span>
                </div>
            </div>
            <div class="btn-begin">
                <a href="#">BẮT ĐẦU NGAY</a>
            </div>  
            <div class="content">
                <img src="assets/img/security.png" alt="">
                <span>Bảo hành 1 đổi 1 trong 30 ngày.</span>
            </div>
        </div>
    </div>
    <div class="title container">
        <img src="assets/img/nvidia.png" alt="">
        <img src="assets/img/asus.png" alt="">
        <img src="assets/img/corsair.png" alt="">
        <img src="assets/img/amd.png" alt="">
        <img src="assets/img/gamemax.png" alt="">
    </div>
    <div class="product container">
        <div class="product__item">
            <div class="item--list">
                <div class="list__farmer active"  on:click={()=>{farm="farm0";check=true}} class:active={check}>Farmer</div>
                <div class="list__profes"  on:click={()=>{farm="farm1";check=false}} class:active={!check}>Profession</div>
            </div>
            {#if farm=="farm0"}          
            <div class="item--farmer" >
                <h2>Cấu Hình Famer</h2>
                {#if screenWidth > 768}
                <div class="farmer__item farmer">              
                    <div class="item--copper">
                        <h3>Cấu hình Copper</h3>
                        <p>Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu</p>
                        <div class="copper__sale">
                            <span>$3,097.10</span>
                            <p>Tiết kiệm 30,0% </p>
                        </div>
                        <h1>$2,167.97</h1>
                        <button><a href="/payment" use:link on:click={()=>{$currentPro = pro[0];$productNumber=0}}>Thêm vào giỏ hàng</a></button>
                        <div class="contents">
                            <h4>Ổ Cứng 50TB</h4>
                            <p>Có sẵn <span>50 Plot</span></p>
                            <p>1 PC tối ưu cấu hình</p>
                            <p>Hỗ trợ 24/7/365</p>
                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                            <p>Gói bảo hành Gold 2 năm</p>
                        </div>
                        <h2>Xem hết thông tin sản phẩm</h2>
                    </div>
                    <div class="item--copper2">
                        <h3>Cấu hình Silver</h3>
                        <p>Cấu hình phù hợp nhất cho nhà đầu tư cá nhân</p>
                        <div class="copper__sale">
                            <span>$6,194.21</span>
                            <p>Tiết kiệm 30,0% </p>
                        </div>
                        <h1>$4,335.95</h1>
                        <button><a href="/payment" use:link on:click={()=>{$currentPro = pro[1];$productNumber=1}}>Thêm vào giỏ hàng</a></button>
                        <div class="contents">
                            <h4>Ổ Cứng 100TB</h4>
                            <p>Có sẵn <span>100 Plot</span></p>
                            <p>1 PC tối ưu cấu hình</p>
                            <p>Hỗ trợ 24/7/365</p>
                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                            <p>Gói bảo hành Gold 2 năm</p>
                        </div>
                        <h2>Xem hết thông tin sản phẩm</h2>
                    </div>
                    <div class="item--copper">
                        <h3>Cấu hình Gold</h3>
                        <p>Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ</p>
                        <div class="copper__sale">
                            <span>$12,388.43</span>
                            <p>Tiết kiệm 30,0% </p>
                        </div>
                        <h1>$8,671.90</h1>
                        <button ><a href="/payment" use:link on:click={()=>{$currentPro = pro[2];;$productNumber=2}} >Thêm vào giỏ hàng</a></button>
                        <div class="contents">
                            <h4>Ổ Cứng 200TB</h4>
                            <p>Có sẵn <span>200 Plot</span></p>
                            <p>1 PC tối ưu cấu hình</p>
                            <p>Hỗ trợ 24/7/365</p>
                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                            <p>Gói bảo hành Gold 2 năm</p>
                        </div>
                        <h2>Xem hết thông tin sản phẩm</h2>
                    </div>
                    
                    
                </div>
                {:else if screenWidth < 577}
                    <div class="swipe-holder">
                        <Swipe {...swipeConfig}>
                            <SwipeItem>
                                <div class="swipeitem">
                                    <div class="item--copper">
                                        <h3>Cấu hình Copper</h3>
                                        <p>Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu</p>
                                        <div class="copper__sale">
                                            <span>$3,097.10</span>
                                            <p>Tiết kiệm 30,0% </p>
                                        </div>
                                        <h1>$2,167.97</h1>
                                        <button class="has-pointer-event"><a href="/payment" use:link on:click={()=>{$currentPro = pro[0];$productNumber=0}}>Thêm vào giỏ hàng</a></button>
                                        <div class="contents">
                                            <h4>Ổ Cứng 50TB</h4>
                                            <p>Có sẵn <span>50 Plot</span></p>
                                            <p>1 PC tối ưu cấu hình</p>
                                            <p>Hỗ trợ 24/7/365</p>
                                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                            <p>Gói bảo hành Gold 2 năm</p>
                                        </div>
                                        <h2>Xem hết thông tin sản phẩm</h2>
                                    </div>
                                </div>
                                
                            </SwipeItem>
                        
                            <SwipeItem>
                                <div class="swipeitem">
                                    <div class="item--copper2">
                                        <h3>Cấu hình Silver</h3>
                                        <p>Cấu hình phù hợp nhất cho nhà đầu tư cá nhân</p>
                                        <div class="copper__sale">
                                            <span>$6,194.21</span>
                                            <p>Tiết kiệm 30,0% </p>
                                        </div>
                                        <h1>$4,335.95</h1>
                                        <button class="has-pointer-event"><a href="/payment" use:link on:click={()=>{$currentPro = pro[1];$productNumber=1}}>Thêm vào giỏ hàng</a></button>
                                        <div class="contents">
                                            <h4>Ổ Cứng 100TB</h4>
                                            <p>Có sẵn <span>100 Plot</span></p>
                                            <p>1 PC tối ưu cấu hình</p>
                                            <p>Hỗ trợ 24/7/365</p>
                                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                            <p>Gói bảo hành Gold 2 năm</p>
                                        </div>
                                        <h2>Xem hết thông tin sản phẩm</h2>
                                    </div>
                                </div>
                                
                            </SwipeItem>
                        
                            <SwipeItem>
                                <div class="swipeitem">
                                    <div class="item--copper">
                                        <h3>Cấu hình Gold</h3>
                                        <p>Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ</p>
                                        <div class="copper__sale">
                                            <span>$12,388.43</span>
                                            <p>Tiết kiệm 30,0% </p>
                                        </div>
                                        <h1>$8,671.90</h1>
                                        <button class="has-pointer-event"><a href="/payment" use:link on:click={()=>{$currentPro = pro[2];;$productNumber=2}} >Thêm vào giỏ hàng</a></button>
                                        <div class="contents">
                                            <h4>Ổ Cứng 200TB</h4>
                                            <p>Có sẵn <span>200 Plot</span></p>
                                            <p>1 PC tối ưu cấu hình</p>
                                            <p>Hỗ trợ 24/7/365</p>
                                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                            <p>Gói bảo hành Gold 2 năm</p>
                                        </div>
                                        <h2>Xem hết thông tin sản phẩm</h2>
                                    </div>
                                </div>
                                
                            </SwipeItem>
                        </Swipe>
                    </div>
                {/if}
            </div>
            {:else if farm=="farm1"}
            <div class="item--profes">
                <h2> Nâng cấp cấu hình Farm</h2>
                {#if screenWidth > 768}
                <div class="farmer__item">
                    <div class="item--copper2">
                        <h3>Cấu hình Silver</h3>
                        <p>Cấu hình phù hợp nhất cho nhà đầu tư cá nhân</p>
                        <div class="copper__sale">
                            <span>$18,572.54</span>
                            <p>Tiết kiệm 30,0% </p>
                        </div>
                        <h1>$13,000.78</h1>
                        <button><a href="/payment" use:link on:click={()=>{$currentPro = pro[3];;$productNumber=3}}>Thêm vào giỏ hàng</a></button>
                        <div class="contents">
                            <h4>Ổ Cứng 500TB</h4>
                            <p>Có sẵn <span>500 Plot</span></p>
                            <p>1 PC tối ưu cấu hình</p>
                            <p>Hỗ trợ 24/7/365</p>
                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                            <p>Gói bảo hành Gold 2 năm</p>
                        </div>
                        <h2>Xem hết thông tin sản phẩm</h2>
                    </div>
                    <div class="item--copper3">
                        <h3>Cấu hình Gold</h3>
                        <p>Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ</p>
                        <div class="copper__sale">
                            <span>$30,971.07</span>
                            <p>Tiết kiệm 30,0% </p>
                        </div>
                        <h1>$21,679.75</h1>
                        <button><a href="/payment" use:link on:click={()=>{$currentPro = pro[4]; ;$productNumber=4}}>Thêm vào giỏ hàng</a></button>
                        <div class="contents">
                            <h4>Ổ Cứng 1000TB</h4>
                            <p>Có sẵn <span>1000 Plot</span></p>
                            <p>1 PC tối ưu cấu hình</p>
                            <p>Hỗ trợ 24/7/365</p>
                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                            <p>Gói bảo hành Gold 2 năm</p>
                        </div>
                        <h2>Xem hết thông tin sản phẩm</h2>
                    </div>
                </div>
                {:else if screenWidth < 577}
                    <div class="swipe-holder">
                        <Swipe {...swipeConfig}>
                            <SwipeItem>
                                <div class="swipeitem">
                                    <div class="item--copper2">
                                        <h3>Cấu hình Silver</h3>
                                        <p>Cấu hình phù hợp nhất cho nhà đầu tư cá nhân</p>
                                        <div class="copper__sale">
                                            <span>$18,572.54</span>
                                            <p>Tiết kiệm 30,0% </p>
                                        </div>
                                        <h1>$13,000.78</h1>
                                        <button class="has-pointer-event"><a href="/payment" use:link on:click={()=>{$currentPro = pro[3];;$productNumber=3}}>Thêm vào giỏ hàng</a></button>
                                        <div class="contents">
                                            <h4>Ổ Cứng 500TB</h4>
                                            <p>Có sẵn <span>500 Plot</span></p>
                                            <p>1 PC tối ưu cấu hình</p>
                                            <p>Hỗ trợ 24/7/365</p>
                                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                            <p>Gói bảo hành Gold 2 năm</p>
                                        </div>
                                        <h2>Xem hết thông tin sản phẩm</h2>
                                    </div>
                                </div>
                                
                            </SwipeItem>                     
                            <SwipeItem>
                                <div class="swipeitem">
                                    <div class="item--copper3">
                                        <h3>Cấu hình Gold</h3>
                                        <p>Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ</p>
                                        <div class="copper__sale">
                                            <span>$30,971.07</span>
                                            <p>Tiết kiệm 30,0% </p>
                                        </div>
                                        <h1>$21,679.75</h1>
                                        <button class="has-pointer-event"><a href="/payment" use:link on:click={()=>{$currentPro = pro[4]; ;$productNumber=4}}>Thêm vào giỏ hàng</a></button>
                                        <div class="contents">
                                            <h4>Ổ Cứng 1000TB</h4>
                                            <p>Có sẵn <span>1000 Plot</span></p>
                                            <p>1 PC tối ưu cấu hình</p>
                                            <p>Hỗ trợ 24/7/365</p>
                                            <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                            <p>Gói bảo hành Gold 2 năm</p>
                                        </div>
                                        <h2>Xem hết thông tin sản phẩm</h2>
                                    </div>
                                </div>
                            </SwipeItem>
                        </Swipe>
                    </div>
                {/if}
            </div>
            {/if}
        </div>
    </div>
    <div class="contact">
        <h2>Để lại Email hoặc Số Điện Thoại để nhận tư vấn</h2>
        <p>Hãy để lại thông tin liên lạc của bạn, chúng tôi sẽ liên hệ tư vấn và giải đáp mọi thắc mắc về sản phẩm của chúng tôi. Bạn có thể liên hệ ngay qua tổng đài: <span>19001009</span></p>
        <div class="contact__user">
            <input type="text">
            <button><a href="">Gửi</a></button>
        </div>
    </div>
    <div class="demo container">
        <div class="demo-container">
            <div class="demo__content">
                <h3 class="border">Môi trường hoàn hảo để thành công</h3>
                <h2>Dễ dàng cài đặt</h2>
                <p>Sản phẩm đã được các chuyên gia nghiên cứu và tích hợp sẵn các phần mềm chuyên dụng cho việc Farm Chia</p>
                <a href="">Tìm hiểu thêm</a>
            </div>
            <div class="demo__img"></div>
        </div>
        <div class="demo-container reverse">
            <div class="demo__content">
                <h3>Hiệu năng và tốc độ</h3>
                <h2>Farm tốc độ cao</h2>
                <p>Trữ lượng đồng XCH ngày càng giảm. Hãy cân nhắc đến tốc độ farm để nhận được nhiều XCH nhất.</p>
                <a href="">Tìm hiểu thêm</a>
            </div>
            <div class="demo__img"></div>
        </div>
        <div class="demo-container">
            <div class="demo__content">
                <h3>Trải nghiệm tuyệt vời</h3>
                <h2>Sử dụng thuận tiện</h2>
                <p>Farm Chia dễ dàng chỉ với một PC duy nhất và nhận được sự hỗ trợ 24/7 từ các chuyên gia.</p>
                <a href="">Tìm hiểu thêm</a>
            </div>
            <div class="demo__img"></div>
        </div>
        <div class="demo-container reverse">
            <div class="demo__content">
                <h3>Chuyên nghiệp và tiện dụng</h3>
                <h2>Hỗ trợ 24/7/365</h2>
                <p>Chúng tôi cam kết đảm bảo quyền lợi và sẵn sàng hỗ trợ khách hàng toàn thời gian.</p>
                <a href="">Tìm hiểu thêm</a>
            </div>
            <div class="demo__img"></div>
        </div>
        <div class="demo-container">
            <div class="demo__content">
                <h3>Linh hoạt và sẵn sàng mở rộng quy mô</h3>
                <h2>Từ quy mô vừa và nhỏ đến quy mô lớn  </h2>
                <p>Beetle Associates cung cấp đa dạng các gói sản phẩm để phục vụ nhu cầu khách hàng mở rộng quy mô của khách hàng.</p>
                <a href="">Tìm hiểu thêm</a>
            </div>
            <div class="demo__img"></div>
        </div>
    </div>
    <div class="present">
        <h1>Trang quản lý thân thiện với người dùng</h1>
        <div class="present__intro">
            <div class="present--img"></div>
            <div class="present--content">
                <div class="content drop">
                    <img src="assets/img/user.png" alt="">
                    <h3>Dễ sử dụng</h3>
                    <p>Sản phẩm của chúng tôi vô cùng thân thiện và bất kỳ ai cũng có thể dùng được để farm XCH, kể cả người chưa có kinh nghiệm.</p>
                </div>
                <div class="content drop">
                    <img src="assets/img/Group.png" alt="">
                    <h3>Tốc độ bứt phá</h3>
                    <p>Công cụ Farm đã được tích hợp sẵn bên trong phần cứng. Đồng thời sản phẩm được tối ưu về mặt hiệu năng giúp giảm thời gian farm đến 50%</p>
                </div>
                <div class="content ">
                    <img src="assets/img/ion_rocket.png" alt="">
                    <h3>Tối ưu tuyệt đối</h3>
                    <p>PC đã được ghi sẵn các Plot tương ứng với dung lượng có trong máy. Người dùng không cần mất thời gian để vẽ Plot thủ công.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="benefit container">
        <h1>Vì sao bạn nên chọn Beetle Associates</h1>
        <div class="benefit__compare">
            <div class="benefit--regular">
                <h3>Máy tính thông thường</h3>
                <div class="key-value">
                    <p>Thời gian vẽ Plot</p>
                    <span>45 ngày</span>
                </div>
                <div class="key-value">
                    <p>Lợi nhuận</p>
                    <span>Không chắc chắn</span>
                </div>
                <div class="key-value">
                    <p>Khả năng mở rộng</p>
                    <span>Không</span>
                </div>
                <div class="key-value">
                    <p>Đội ngũ hỗ trợ</p>
                    <span>Không</span>
                </div>
                <div class="key-value">
                    <p>Hao mòn thiết bị</p>
                    <span>Có</span>
                </div>
                <div class="key-value">
                    <p>Thời gian bảo hành</p>
                    <span>Không</span>
                </div>
            </div>
            <div class="benefit--farm">
                <h3>Máy tính Farm Chia</h3>
                <div class="key-value">
                    <p>Thời gian vẽ Plot</p>
                    <span>0 ngày</span>
                </div>
                <div class="key-value">
                    <p>Lợi nhuận</p>
                    <span>Đảm bảo lợi nhuận</span>
                </div>
                <div class="key-value">
                    <p>Khả năng mở rộng</p>
                    <span>Dễ dàng</span>
                </div>
                <div class="key-value">
                    <p>Đội ngũ hỗ trợ</p>
                    <span>Hỗ trợ 24/7/365</span>
                </div>
                <div class="key-value">
                    <p>Hao mòn thiết bị</p>
                    <span>Không</span>
                </div>
                <div class="key-value">
                    <p>Thời gian bảo hành</p>
                    <span>1 đổi 1 trong 365 ngày</span>
                </div>
                
            </div>
        </div>
        <div class="benefit__mobile">
            <div class="titles table">
                <div></div>
                <p>Thời gian vẽ Plot</p>
                <p>Lợi nhuận</p>
                <p>Khả năng mở rộng</p>
                <p>Đội ngũ hỗ trợ</p>
                <p>Hao mòn thiết bị</p>
                <p>Thời gian bảo hành</p>
            </div>
            <div class="usually table">
                <h2>Máy tính thông thường</h2>
                <p>45 ngày</p>
                <p>Không chắc chắn</p>
                <p>Không</p>
                <p>Không</p>
                <p>Có </p>
                <p>Không</p>
            </div>
            <div class="farm table">
                <h2>Máy tính Farm Chia</h2>
                <p>0 ngày</p>
                <p>Không chắc chắn</p>
                <p>Không</p>
                <p>Không</p>
                <p>Có </p>
                <p>Không</p>
            </div>
        </div>

    </div>
    <div class="surety">
        <h1>365 ngày đảm bảo 1 đổi 1</h1>
        <p>Nếu sản phẩm của chúng tôi gặp rắc rối phần cứng do nhà sản xuất, chúng tôi sẽ đảm bảo 1 đổi 1 cho bạn. Không rắc rối, không rủi ro.</p>
        <div class="surety-btn">Bắt đầu</div>
    </div>
    
</div>
<Footer></Footer>
<style lang="scss">
    @import "../styles/main.scss";

</style>