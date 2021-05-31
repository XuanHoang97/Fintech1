<script>
    import { register } from "../api/account.js";
    import { link, replace } from "svelte-spa-router";
    import { emailVerify } from "../store.js";

    let first_name = "";
    let last_name = "";
    let email = "";
    let password = "";
    let passwordConfirm = "";
    //
    let check_first_name;
    let check_last_name;
    let check_email;
    let check_password;
    let check_passwordConfirm;

    $: if (first_name == "") {
        check_first_name = false;
    } else if (first_name && first_name.search(/[0-9]{1,}/g) >= 0) {
        check_first_name = false;
    } else {
        check_first_name = true;
    }
    //
    $: if (last_name == "") {
        check_last_name = false;
    } else if (last_name && last_name.search(/[0-9]{1,}/g) >= 0) {
        check_last_name = false;
    } else {
        check_last_name = true;
    }
    //
    $: if (email == "") {
        check_email = false;
    } else if (
        email &&
        !email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        check_email = false;
    } else {
        check_email = true;
    }
    //
    $: if (password == "") {
        check_password = false;
    } else if (
        password &&
        password.match(/[0-9]/g) &&
        password.match(/[A-Z]/g) &&
        password.match(/[a-z]/g) &&
        password.length >= 8 &&
        password.match(/[!@#$%^&]/g)
    ) {
        check_password = true;
    } else {
        check_password = false;
    }
    //
    $: if (passwordConfirm !== "" && passwordConfirm == password) {
        check_passwordConfirm = true;
    } else {
        check_passwordConfirm = false;
    }
    //
    let response;
    let check;
    let err = "";

    const handleOnClick = () => {
        if (
            check_first_name &&
            check_last_name &&
            check_email &&
            check_password &&
            check_passwordConfirm
        ) {
            check = true;
            let formData = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
            };
            register(formData)
                .then((mes) => {
                    response = mes;
                    console.log(response);
                    if (response.code == 500) {
                        err = "Email này đã được sử dụng";
                        password = "";
                        passwordConfirm = "";
                        check_email = false;
                    }
                    if (response.code == 200) {
                        $emailVerify = response.data.email;
                        replace("/register_code");
                    }
                })
                .catch((error) => {
                    err = "Email này đã được sử dụng";
                    password = "";
                    passwordConfirm = "";
                    check_email = false;
                });
        } else {
            check = false;
        }
    };

    //
    let focusPass = false;
    function passFocus() {
        focusPass = true;
    }
    let tick = false;
</script>

<div class="register">
    <div class="container">
        <div class="logo">
            <a href="/"><img src="img/logo-Beetle-black.png" alt="" /></a>
        </div>
        <div class="register__heading">Đăng ký</div>
        <div class="register__social">
            <div class="reg__google">
                <a href="#"><img src="img/g.png" alt="no display" />Google</a>
            </div>
            <div class="reg__fb">
                <a href="#"><img src="img/fb.png" alt="no display" />Facebook</a
                >
            </div>
        </div>
        <div class="enter__info">
            <div class="input__item1">
                <div class="input--content">
                    <input
                        bind:value={first_name}
                        type="text"
                        placeholder="Họ"
                    />
                    <div class="checkName">
                        {#if first_name}
                            {#if check_first_name}
                                <img src="img/Check_circle.png" alt="" />
                            {:else}
                                <img src="img/X_circle.png" alt="" />
                            {/if}
                        {:else if typeof check == "boolean"}
                            <img src="img/X_circle.png" alt="" />
                        {/if}
                    </div>
                </div>

                <div class="input--content ">
                    <input
                        bind:value={last_name}
                        type="text"
                        placeholder="Tên"
                    />
                    <div class="checkName">
                        {#if last_name}
                            {#if check_last_name}
                                <img src="img/Check_circle.png" alt="" />
                            {:else}
                                <img src="img/X_circle.png" alt="" />
                            {/if}
                        {:else if typeof check == "boolean"}
                            <img src="img/X_circle.png" alt="" />
                        {/if}
                    </div>
                </div>
            </div>
            <div class="input__item2">
                <input bind:value={email} type="email" placeholder="Email" />

                <p>{err}</p>
                <div class="checkName">
                    {#if email}
                        {#if check_email}
                            <img src="img/Check_circle.png" alt="" />
                        {:else}
                            <img src="img/X_circle.png" alt="" />
                        {/if}
                    {:else if typeof check == "boolean"}
                        <img src="img/X_circle.png" alt="" />
                    {/if}
                </div>
            </div>
            <div class="input__item3">
                <div class="item3">
                    <input
                        bind:value={password}
                        on:focus={passFocus}
                        type="password"
                        placeholder="Mật khẩu"
                    />
                    <div class="checkName">
                        {#if password}
                            {#if check_password}
                                <img src="img/Check_circle.png" alt="" />
                            {:else}
                                <img src="img/X_circle.png" alt="" />
                            {/if}
                        {:else if typeof check == "boolean"}
                            <img src="img/X_circle.png" alt="" />
                        {/if}
                    </div>
                </div>
                <div class="focus" class:focus--active={focusPass}>
                    <p>Yêu cấu mật khẩu từ 8-16 ký tự</p>
                    <p>
                        (bao gồm số, chữ thường, chữ viết hoa và ký tự đặc biệt)
                    </p>
                </div>
            </div>
            <div class="input__item4">
                <input
                    bind:value={passwordConfirm}
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                />
                <div class="checkName">
                    {#if passwordConfirm}
                        {#if check_passwordConfirm}
                            <img src="img/Check_circle.png" alt="" />
                        {:else}
                            <img src="img/X_circle.png" alt="" />
                        {/if}
                    {:else if typeof check == "boolean"}
                        <img src="img/X_circle.png" alt="" />
                    {/if}
                </div>
            </div>
        </div>

        <div class="policy">
            <div
                class="check"
                on:click={() => {
                    tick = !tick;
                }}
            >
                <img
                    class="check-img"
                    src="img/tick.png"
                    alt=""
                    class:active={tick}
                />
            </div>
            <label for="">Tôi đồng ý với</label>
            <a href="http//">Điều khoản và điều kiện </a>
        </div>

        <div class="continue">
            <button class="cont" on:click={handleOnClick}> Tiếp tục </button>
        </div>

        <div class="redirect_module">
            <div class="already"><a href="#">Đã có tài khoản?</a></div>
            <div class="login"><a href="/login" use:link>Đăng nhập</a></div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/register.scss";
</style>
