<script>
    import { link } from "svelte-spa-router";
    import { login } from "../api/account.js";
    import { token, email, password } from "../store.js";

    //
    let inputEmail;
    let inputPassword;
    inputEmail = $email;
    inputPassword = $password;
   
    let err = "";
    const submit = () => {
        let formData = {
            email: inputEmail,
            password: inputPassword,
        };
        login(formData)
            .then((res) => {
                console.log(res);
                if (res.code == 401) {
                    err = "Email hoặc mật khẩu không chính xác";
                }
                if (res.code == 200) {
                    $token = res.data.token;
                    console.log(res.data.token);
                }
                if (check) {
                    $email = inputEmail;
                    $password = inputPassword;
                }
            })
            .catch((error) => {
                err = "Email hoặc mật khẩu không chính xác";
            });
    };

    let check = true;
</script>

<div class="login">
    <div class="container">
        <div class="logo">
            <a href="/"><img src="img/logo-Beetle-black.png" alt="" /></a>
        </div>
        <div class="login__heading">Đăng nhập</div>

        <div class="login__social">
            <div class="reg__google">
                <a href="#"><img src="img/gp.png" alt="no display" />Google</a>
            </div>
            <div class="reg__fb">
                <a href="#"><img src="img/fb.png" alt="no display" />Facebook</a>
            </div>
        </div>

        <div class="enter__info">
            <div class="input__item">
                <p>{err}</p>
                <div class="email">
                    <input
                        type="email"
                        bind:value={inputEmail}
                        placeholder="Email"
                    />
                </div>
                <div class="password">
                    <input
                        type="password"
                        bind:value={inputPassword}
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
        </div>

        <div class="policy">
            <div class="check">
                <div
                    class="check__item"
                    on:click={() => {
                        check = !check;
                    }}
                >
                    <img
                        class="check-img"
                        src="img/tick.png"
                        alt=""
                        class:active={check}
                    />
                </div>
                <span>Nhớ mật khẩu</span>
            </div>

            <div class="forget_pw">
                <a href="/forgot_password" use:link>Quên mật khẩu? </a>
            </div>
        </div>

        <div class="login__btn">
            <div class="log" on:click={submit}>Đăng nhập</div>
        </div>

        <div class="redirect_module">
            <div class="null"><a href="#">Don't have an account yet?</a></div>
            <div class="sign_up"><a href="/register" use:link>Đăng ký</a></div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/login.scss";
</style>
