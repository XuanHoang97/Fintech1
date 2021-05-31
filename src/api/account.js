import Api from "../Api.js";

//add account
export const register = async (req) =>{
    try{
        const res= await Api.post("/register/account",req);
        // console.log(res.data.message)
        return res
    }
    catch (error) {
        console.error(error);
      }
}
// verify account
export const registerCode = async (req) =>{
    try{
        const res = await Api.post(`/auth/verify-account`, req);
        return res
    }
    catch(error){
        console.error(error);
    }
}
//login
export const login = async (req) =>{
    try{
        const res = await Api.post("/auth/login", req);
        return res
    }
    catch(error){
        console.error(error);
    }
}
// forgot password
export const forgotPassword = async (req) =>{
    try{
        const res = await Api.post("/auth/forgot-password/send-code", req);
        return res
    }
    catch(error){
        console.error(error);
    }
}
// forgot password code
export const forgotPasswordCode = async (req) =>{
    try{
        const res = await Api.post("/auth/forgot-password/confirm-code", req);
        return res
    }
    catch(error){
        console.error(error);
    }
}
// forgot password new
export const newPassword = async (req) =>{
    try{
        const res = await Api.post("/auth/forgot-password/new-password", req);
        return res
    }
    catch(error){
        console.error(error);
    }
}
//

