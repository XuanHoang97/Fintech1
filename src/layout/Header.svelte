<script>
    import {link} from 'svelte-spa-router'
    
</script>

<header class="header">
    <div class="menu">
        <div class="logo">
            <a href="/" use:link><img src="img/logo-Beetle.png" alt=""></a>
        </div>
        <div class="menu__item">
            <a href="">Tư vấn</a>
            <a href="">Hướng dẫn</a>
            <div class="store">
                <a href="/store" use:link><img src="img/store.png" alt="store"></a>
                <p>$2,167.97</p>
            </div>
            <a href="/login" class="login" use:link>Đăng nhập</a>
        </div>
        <!-- mobile -->
        <div class="menu__mobile">
            <div class="store">
                <a href="/store" use:link><img src="img/store.png" alt="store"></a>
                <p>$2,167.97</p>
            </div>
            <div class="menu--btn">
                <img src="img/btn-menu.png" alt="">
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    @import "../src/styles/header.scss";
</style>
