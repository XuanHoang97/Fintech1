<script>
    import {link ,replace} from 'svelte-spa-router';
    import { registerCode } from "../api/account.js";
    import {  emailVerify } from "../store.js";
    
    let verify;
    let email;
    email = $emailVerify
    let err = "";
    const submit = ()=>{
        let formData = {
            code_verify_email: verify,
            email: $emailVerify,
        };
        let data= JSON.stringify(formData)
        registerCode(data)
        .then((res)=>{
          
            console.log(res)
            if(res.code == 422){
                err = "Mã code sai!"
            }
            if (res.code == 200) {
                    replace("/login");    
            }
        })
        .catch((error) => {
                 err = "Mã code sai!"
            });
    }
</script>

<div class="login">
    <div class="container">
        <div class="logo">
            <a href="/"><img src="img/logo-Beetle-black.png" alt=""></a>
        </div>
        <div class="login__heading">
           Đăng ký
        </div>

        <div class="login__social">
            <div class="reg__google">
                <a href="/"><img src="img/gp.png" alt="no display">Google</a> 
            </div>
            <div class="reg__fb">
                <a href="/"><img src="img/fb.png" alt="no display">Facebook</a> 
            </div>
        </div>

        <div class="enter__info">
            <div class="input__item">
                <p>Chúng tôi đã gửi mã xác nhận vào email 
                </p>
                    <h2>{email}</h2> 

                <div class="text">
                    <input type="number" bind:value={verify} placeholder="Nhập mã xác nhận">
                </div>
                <p style="color:red">{err}</p>
                <div class="redirect_module">
                    <div class="null">Không nhận được mã xác nhận?</div>
                    <div class="sign_up">Gửi lại</div>
                </div>
            </div>
        </div>
        <div class="login__btn">
            <div class="log" on:click={submit}>Tiếp tục</div>
        </div>

    </div>
</div>

<style lang="scss">
    @import "../styles/register_code.scss";
</style>
