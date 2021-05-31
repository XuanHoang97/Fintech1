<script>
    import { link, replace } from "svelte-spa-router";
    import { forgotPasswordCode } from "../api/account.js";
    import { tokenStr } from "../store.js";
    import { emailStr } from "../store.js";
    let token = "";
    let email = $emailStr;
    let err = "";

    const submit = () => {
        let formdata = {
            token: token,
        };
        console.log(token);

        forgotPasswordCode(formdata)
            .then((res) => {
                if (res.code == 422) {
                    err = "Mã code sai!";
                }
                if (res.code == 200 && res.data) {
                    $tokenStr = token;
                    replace("/forgot_password_comfirm");
                } else {
                    err = "Mã code sai!";
                }
            })
            .catch((error) => {
                err = "Mã code sai!";
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
                <div class="content">
                    <p class="content_text">
                        Chúng tôi đã gửi mã xác nhận vào email
                    </p>
                    <p class="content_email">{email}</p>
                </div>
                <div class="email">
                    <input
                        type="text"
                        bind:value={token}
                        placeholder="Nhập mã xác nhận"
                    />
                </div>
                <p>{err}</p>
                <div class="redirect_module">
                    <div class="null">
                        <a href="#">Không nhận được mã xác nhận?</a>
                    </div>
                    <div class="sign_up"><a href="/" use:link>Gửi lại</a></div>
                </div>
            </div>
        </div>
        <div class="login__btn">
            <!-- <div class="log"><a href="/forgot_password_comfirm" use:link>Tiếp tục</a></div> -->
            <div class="log" on:click={submit}>Tiếp tục</div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/forgot_password_code.scss";
</style>
