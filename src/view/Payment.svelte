<script>
    import Header from "../layout/Header.svelte";
    import { productNumber, currentPro, product } from "../store.js";
    let pro = $product[$productNumber];
    let check = false;
    let check_y=false;
    let checkDirection=false;
    let note =false;
    let selectedMonth=1;
    let selectedYear=2021;
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = [2021, 2022, 2023, 2024, 2025, 2026, 2027,2028];
    let activeContact = "contact0";
    let activeComponent = "payment0";
    let name = '';
    let addres = '';
    let phone = '';
    let visa=true;
    
    let current =1
    let num_items=30
    let per_page=3
    
</script>

<Header />
<div class="wrapper">
    <div class="payment">
        {#if activeContact == "contact0"}
        <div class="payment__info">
            <div class="payment__method">
                {#if activeComponent == "payment0"}
                    <!-- payment0 -->
                    <div class="payment-first">
                        <div class="payment__heading">Thanh toán</div>
                        <div class="payment__transfer" on:click={()=>activeComponent="payment1"}>
                        <h3>Chuyển khoản</h3>
                        <img src="img/right.png" alt="" />
                    </div>
                    <div class="payment__visa" on:click={()=>activeComponent="payment2"}>
                        <h3>Visa</h3>
                        <img src="img/right.png" alt="" />
                    </div>
                    <div class="payment__wallet" on:click={()=>activeComponent="payment3"}>
                    <h3>Ví điện tử Metamask</h3>
                    <img src="img/right.png" alt="">
                    </div>
                </div>
                
                 

                {:else if activeComponent == "payment1"}
                    
                    <div class="transfer__detail">
                        <h2>Thanh toán</h2>
                        <h3>Chuyển khoản</h3>
                        <i>Chủ tài khoản</i>
                        <strong>CAO TRUONG AN</strong>
                        <i class="addr">Ngân hàng thụ hưởng</i>
                        <i class="bank"
                            >Vietcombank (Ngân hàng thương mại cổ phần Ngoại thương
                            Việt Nam)</i
                        >
                        <i class="num">Số tài khoản tài khoản</i>
                        <strong class="name">CAO TRUONG AN</strong>
    
                        <div class="next" on:click={() => {checkDirection = !checkDirection;}}>Tiếp theo</div>
                        <!-- <div class="next" on:click={()=>activeComponent="payment4"}>Tiếp theo</div> -->
                      
                    </div>

                    
                
                {:else if activeComponent == "payment2"}
                    
                    <div class="visa__verify" >
                        <h2>Thanh toán</h2>
                        <h3>Chuyển khoản</h3>
                        <div class="boss__acc">
                            <label for="">chủ thẻ</label>
                            <input type="password" placeholder="********" />
                        </div>
    
                        <div class="num__acc">
                            <label for="">Số thẻ</label>
                            <input
                                type="password"
                                placeholder="**** **** **** ****"
                            />
                        </div>
    
                        <div class="option__acc">
                            <div class="code">
                                <label for="">CVV/CVC2</label>
                                <input type="password" placeholder="***" />
                            </div>
                            <div class="select__M">
                                <label for="">Tháng</label>
                                <div
                                    class="month"
                                    on:click={() => {
                                        check = !check;
                                    }}
                                >
                                    <div class="current">{selectedMonth}</div>
                                    <img src="img/down.png" alt="" />
                                    <div class:active={check} class="list">
                                        {#each month as value, i}
                                            <div
                                                class="list__month"
                                                on:click={() => {
                                                    selectedMonth = value;
                                                }}
                                            >
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
    
                            <div class="select__Y">
                                <label for="">Năm</label>
                                <div
                                    class="year"
                                    on:click={() => {
                                        check_y = !check_y;
                                    }}
                                >
                                    <div class="current">{selectedYear}</div>
                                    <img src="img/down.png" alt="" />
                                    <div class:active={check_y} class="list">
                                        {#each year as value, i}
                                            <div
                                                class="list__year"
                                                on:click={() => {
                                                    selectedYear = value;
                                                }}
                                            >
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="code__otp" class:otp={!visa}>
                            <label for="">Nhập mã OTP</label>
                            <input
                                type="password"
                                placeholder="**** **** **** ****"
                            />
                        </div>
    
                        <div class="verify" on:click={() => {visa=false}} on:click={()=>activeComponent="payment4"}>Tiếp theo</div>
                    </div>

                {:else if activeComponent == "payment3"}
                    <!-- Payment__Wallet -->
                    <div class="payment-metamask">
                        <div class="payment__headin">Thanh toán</div>
                        <h3>Metamask</h3>
                        <p>Địa chỉ nạp</p>
                        <img src="assets/img/capcha.png" alt="">
                        <p>Link</p>
                        <input type="text">
                        <div class="accept" on:click={()=>activeComponent="payment4"}>Xác nhận</div>
                    </div>
                

                

                <!-- payment__success-->
                <div class="transaction">
                    <h2>Thanh toán</h2>

                    <div class="notice">
                        <img src="img/check.png" alt="" />
                    </div>
                    <p>Giao dịch thành công, 
                        đơn hàng của quý khách sẽ được giao trong 3-7 ngày</p>
                </div>
                <!-- payment-contact -->
                {:else if activeComponent == "payment4"}
                <div class="payment__contact">
                    <h1>Thanh toán</h1>
                    <h3>Địa chỉ giao hàng</h3>
                    <div class="user">
                        <p>Người nhận</p>
                        <input type="text" bind:value={name} placeholder = "Nhập tên người nhận">
                    </div>
                    <div class="user">
                        <p>Số điện thoại</p>
                        <input type="text" bind:value={phone} placeholder = "Nhập số điện thoại">
                    </div>
                    <div class="user">
                        <p>Địa chỉ</p>
                        <input type="text" bind:value={addres} placeholder = "Nhập địa chỉ">
                    </div>
                    <div class="btn__accept" on:click={()=>activeContact ="contact1"}>Xác minh</div>
                </div>
                {/if}
            </div>
            <div class="payment__content">
                <div class="order">Đơn hàng</div>
                <div class="info__heading">{pro.title}</div>
                <div class="desc">{pro.content}</div>
                <div class="detail">
                    <h4>{pro.memory}</h4>
                    <p>Có sẵn <span>{pro.plot}</span></p>
                    <p>1 PC tối ưu cấu hình</p>
                    <p>Hỗ trợ 24/7/365</p>
                    <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                    <p>Gói bảo hành Gold 2 năm</p>
                </div>
                <div class="sale__off">
                    <h3>{pro.price}</h3>
                    <p>Tiết kiệm 30,0% </p>
                </div>
                <div class="price">
                    {pro.cutPrice}
                </div>
                <div class="ship">Freeshipping</div>
            </div>
        </div>
        {:else if activeContact == "contact1"}
        <div class="payment__customer">
            <div class="customer__cont">
                <h1>Thông tin đơn hàng</h1>
                <div class="payment--user">
                    <div class="user__detail">
                        <h3>Chi tiết đơn hàng</h3>
                        <div class="detail">
                            <h4>{pro.title}</h4>
                            <div class="detail__item">
                                <img src="img/note.png" alt="" >
                                <div class="detail--info" class:detail__info--active={note}>
                                    <div class="heading">{pro.memory}</div>
                                    <p>Có sẵn <span>{pro.plot}</span></p>
                                    <p>1 PC tối ưu cấu hình</p>
                                    <p>Hỗ trợ 24/7/365</p>
                                    <p>Bảo hành 1 đổi 1 trong 365 ngày</p>
                                    <p>Gói bảo hành Gold 2 năm</p>
                                </div>
                            </div>
                            
                        </div>
                        <p>{pro.content}</p>
                        <h2>{pro.cutPrice}</h2>
                        <p>Freeshipping</p>
                        <div class="time">12:30 20/5/2021</div>
                    </div>
                    <div class="user__contact">
                        <h3>Địa chỉ giao hàng</h3>
                        <p>Người nhận</p>
                        <div class="user--name">{name.trim("") || "Name"}</div>
                        <p>Số điện thoại</p>
                        <div class="user--name">{phone.trim("") || "Phone"}</div>
                        <p>Người nhận</p>
                        <div class="user--name">{addres.trim("") || "Addres"}</div>
                    </div>
                </div>
                <div class="content">Giao dịch thành công, đơn hàng của quý khách sẽ được giao trong 3-7 ngày</div>
            </div>
            
        </div>
        {/if}
    </div>

    <div class="redirect" class:active={checkDirection}>
        <div class="popup_wait">
            <img src="assets/img/popup.gif" alt="">
            <p>Vui lòng chờ hệ thống xác nhận</p>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/payment.scss";
</style>
