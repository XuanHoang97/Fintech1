<script>
    import {link ,replace} from 'svelte-spa-router';
    import { tokenStr } from '../store';
    import { newPassword } from "../api/account.js";


    let password = "";
    let passwordConfirm = "";

    let check_password;
    let check_passwordConfirm;
    
    $: if (password == "") {
        check_password = false;
    } else if(password && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.match(/[a-z]/g) && password.length>=8 
    && password.match(/[!@#$%^&]/g))  {
        check_password = true;
    }else{
        check_password = false;
    }
    //
    $: if (passwordConfirm !== "" && passwordConfirm == password) {
        check_passwordConfirm = true;
    } else {
        check_passwordConfirm = false;
    }
    let check;
   
   
    let err = "";
    const submit = () =>{
       if( check_password && check_passwordConfirm){
           check = true;
                let formData = {
                    password: password,
                    token: $tokenStr
                }
                newPassword(formData)
                .then((res)=>{
                    if(res.code == 400){
                        err = "ERROR"
                    }
                    if(res.code == 200){
                        replace('/login')
                    }
                })
                .catch((error) => {
                    err = "ERROR"
                    });
            }else{
            
           check =false;
       }
    }
   
</script>

<div class="login">
    <div class="container">
        <div class="logo">
            <a href="/"><img src="img/logo-Beetle-black.png" alt=""></a>
        </div>
        <div class="login__heading">
           Đăng nhập
        </div>

        <div class="login__social">
            <div class="reg__google">
                <a href=""><img src="img/gp.png" alt="no display">Google</a> 
            </div>
            <div class="reg__fb">
                <a href=""><img src="img/fb.png" alt="no display">Facebook</a> 
            </div>
        </div>

        <div class="enter__info">
            <div class="input__item1">
                    <input
                        bind:value={password}
                     
                        type="password"
                        placeholder="Nhập mật khẩu mới"
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
            <div class="input__item1">
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

        <div class="login__btn">
            <div class="log"  on:click={submit}>Tiếp tục</div>
        </div>

    </div>
</div>

<style lang="scss">
    @import "../styles/forgot_password_comfirm.scss";
</style>
