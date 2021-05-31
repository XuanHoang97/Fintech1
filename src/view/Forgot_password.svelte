<script>
    import { link ,replace } from "svelte-spa-router";
    import { forgotPassword } from "../api/account.js";
    import { emailStr } from "../store.js";

    let email;
    let err = "";
    const submit = () => {
        let formData = {
            email: email,
        };
        forgotPassword(formData)
            .then((res) => {
                console.log(res);
                if (res.code == 401) {
                    err = "Email chưa được đăng ký";
                }
                if (res.code == 200){
                    $emailStr = email;
                    replace("/forgot_password_code");
                }
            })
            .catch((error) => {
                err = "Email chưa được đăng ký";
            });
    };
</script>

<div class="login">
    <div class="container">
        <div class="logo">
            <a href="/"><img src="img/logo-Beetle-black.png" alt="" /></a>
        </div>
        <div class="login__heading">Quên mật khẩu</div>

        <div class="login__social">
            <div class="reg__google">
                <a href=""><img src="img/gp.png" alt="no display" />Google</a>
            </div>
            <div class="reg__fb">
                <a href=""><img src="img/fb.png" alt="no display" />Facebook</a>
            </div>
        </div>

        <div class="enter__info">
            <div class="input__item">
                <p>Nhập email của bạn</p>
                <div class="email">
                    <input
                        type="email"
                        bind:value={email}
                        placeholder="Email"
                    />
                </div>
                <p style="color:red">{err}</p>
            </div>
        </div>

        <div class="login__btn">
            <!-- <div class="log"><a href="/forgot_password_code" use:link>Tiếp tục</a></div> -->
            <div class="log" on:click={submit}>Tiếp tục</div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/forgot_password.scss";
</style>
