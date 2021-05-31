<script>
    import Header from '../layout/Header.svelte';
    let count = 0;
	function handleClickc() {
		count += 1;
	}
    function handleClickt() {
        if(count>0){
            count -= 1;
        }
        else{
            return count;
        }
		
	}
    if(count>=0){}
</script>
<Header></Header>
<div class="Store">
    <div class="infoProduct container">
        <div class="info__slide">
            <div class="pro--heading">
                <h1>Cấu hình copper</h1>
                <img src="img/back.png" alt="">
            </div>
            <div class="pro--price">
                <h2>$2,167.97</h2>
                <p>$3,097.10</p>
                <h3>Tiết kiệm 30,0% </h3>
            </div>
            <div class="info--origin">
                <img src="img/img_cop.png" alt="">
            </div>
            <div class="info--item">
                <div class="item__img">
                    <img src="img/img-204.png" alt="">
                </div>
                <div class="item__img">
                    <img src="img/img-205.png" alt="">
                </div>
                <div class="item__img">
                    <img src="img/img-206.png" alt="">
                </div>
            </div>
        </div>
        <div class="info__pro">
            <div class="pro--heading">
                <h1>Cấu hình copper</h1>
                <img src="img/back.png" alt="">
            </div>
            <div class="pro--price">
                <h2>$2,167.97</h2>
                <p>$3,097.10</p>
                <h3>Tiết kiệm 30,0% </h3>
            </div>
            <div class="pro--title">
                <p><span>Tình trạng: </span>New, Nguyên Sealbox, Chưa Active</p>
                <p><span>CPU: </span>3.0GHz quad-core Intel Core i5, Turbo Boost 4.1GHz, 9MB L3 cache</p>
                <p><span>Ram: </span>8GB 2666 DDR4</p>
                <p><span>SSD: </span>512GB</p>
                <p><span>Card Đồ Họa: </span>Intel UHD Graphics 630</p>
                <p><span>Kết nối: </span>2 x USB 3.0, 4 x Thunderbolt 3(USB-C), 1 x Ethernet, 1 x HDMI, 1 Jack 3,5mm</p>
                <p><span>Phụ kiện: </span>Body, Dây nguồn</p>
            </div>
            <div class="pro--color">
                <h3>Color</h3>
                <div class="color-wh right">
                    <img src="img/color1.png" alt="">
                    <p>Sliver</p>
                </div>
                <div class="color-wh">
                    <img src="img/color2.png" alt="">
                    <p>Grey</p>
                </div>
            </div>
            <div class="pro--amount">
                <h4>Số lượng</h4>
                <div class="add">
                    <p on:click={handleClickt}>-</p>
                    <div class="amount">{count}</div>
                    <p on:click={handleClickc}>+</p>
                </div>
                
            </div>
            <div class="pro--buy">
                <p class="opas">Thêm vào giỏ hàng</p>
                <p>Mua ngay</p>
            </div>
            <div class="pro--hotline">Hotline hỗ trợ bán hàng: <span> 19001009</span></div>
        </div>
        <div class="info__catagory">
            <div class="catagory">
                <div class="cata-first">
                    <h1>Cấu hình sliver</h1>
                    <span>-30%</span>
                </div>
                <h1>$6,194.21</h1>
                <h3>$2,167.97</h3>
                <h2>Ổ Cứng 100TB</h2>
                <p>Có sẵn <span>100 plot</span></p>
                <h4>Bảo hành 1 đổi 1 trong 365 ngày</h4>
                <a href="#">Xem sản phẩm</a>
            </div>
            <div class="catagory">
                <div class="cata-first">
                    <h1>Cấu hình sliver</h1>
                    <span>-30%</span>
                </div>
                
                <h1>$6,194.21</h1>
                <h3>$2,167.97</h3>
                <h2>Ổ Cứng 100TB</h2>
                <p>Có sẵn <span>100 plot</span></p>
                <h4>Bảo hành 1 đổi 1 trong 365 ngày</h4>
                <a href="#">Xem sản phẩm</a>
            </div>
            <div class="catagory">
                <div class="cata-first">
                    <h1>Cấu hình sliver</h1>
                    <span>-30%</span>
                </div>
                <h1>$6,194.21</h1>
                <h3>$2,167.97</h3>
                <h2>Ổ Cứng 100TB</h2>
                <p>Có sẵn <span>100 plot</span></p>
                <h4>Bảo hành 1 đổi 1 trong 365 ngày</h4>
                <a href="#">Xem sản phẩm</a>
            </div>
        </div>
        
    </div>
    <div class="product__same container">
        <h1>Sản phẩm tương tự</h1>
        <div class="same--item">
            <div class="product--item">
                <div class="item__img">
                    <p class="right">-30%</p>
                    <h3>New</h3>
                </div>
                <div class="item__content">
                    <h2>Cấu hình Silver</h2>
                    <h4>$3,097.10</h4>
                    <h3>$2,167.97</h3>
                    <div class="item--buy">
                        <p class="opas">Thêm vào giỏ hàng</p>
                        <p>Mua ngay</p>
                    </div>
                </div>
            </div>
            <div class="product--item">
                <div class="item__img">
                    <p>-30%</p>
                </div>
                <div class="item__content">
                    <h2>Cấu hình Silver</h2>
                    <h4>$3,097.10</h4>
                    <h3>$2,167.97</h3>
                    <div class="item--buy">
                        <p class="opas">Thêm vào giỏ hàng</p>
                        <p>Mua ngay</p>
                    </div>
                </div>
            </div>
            <div class="product--item">
                <div class="item__img">
                    <p>-30%</p>
                </div>
                <div class="item__content">
                    <h2>Cấu hình Silver</h2>
                    <h4>$3,097.10</h4>
                    <h3>$2,167.97</h3>
                    <div class="item--buy">
                        <p class="opas">Thêm vào giỏ hàng</p>
                        <p>Mua ngay</p>
                    </div>
                </div>
            </div>
            <div class="product--item">
                <div class="item__img">
                    <p>-30%</p>
                </div>
                <div class="item__content">
                    <h2>Cấu hình Silver</h2>
                    <h4>$3,097.10</h4>
                    <h3>$2,167.97</h3>
                    <div class="item--buy">
                        <p class="opas">Thêm vào giỏ hàng</p>
                        <p>Mua ngay</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
<style lang="scss">
    @import "../styles/store.scss";
</style>