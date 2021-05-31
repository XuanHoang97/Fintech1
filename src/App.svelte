<script>
    import { routes, Router } from "svelte-hash-router";
    import Home from "./view/Home.svelte";
    import Register from "./view/Register.svelte";
    import Register_code from "./view/Register_code.svelte";
    import Login from "./view/Login.svelte";
    import Payment from "./view/Payment.svelte";
    import Status_order from "./view/Status_order.svelte";
    import Delivering_order from "./view/Delivering_order.svelte";
    import Verify_order from "./view/Verify_order.svelte";
    import Verify_guarantee from "./view/Verify_guarantee.svelte";
    import Guarantee from "./view/Guarantee.svelte";
    import Guarantee_n from "./view/Guarantee_n.svelte";
    import Forgot_password from "./view/Forgot_password.svelte";
    import Forgot_password_code from "./view/Forgot_password_code.svelte";
    import Forgot_password_comfirm from "./view/Forgot_password_comfirm.svelte";
    import Store from "./view/Store.svelte";


    import Admin from "./view/Admin.svelte";
    routes.set({
        "/": Home,
        "/register": Register,
        "/register_code": Register_code,
        "/login": Login,
        "/payment": Payment,
        "/forgot_password": Forgot_password,
        "/forgot_password_code": Forgot_password_code,
        "/forgot_password_comfirm": Forgot_password_comfirm,
        "/store": Store,
        "/admin": Admin,
        "/payment": Payment,
        "/status_order": Status_order,
        "/delivering_order": Delivering_order,
        "/verify_order": Verify_order,
        "/guarantee": Guarantee,
        "/guarantee_n": Guarantee_n,
        "/verify_guarantee": Verify_guarantee
    });
</script>

<Router />
