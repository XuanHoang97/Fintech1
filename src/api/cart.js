import Api from "../Api.js";


export const cart = async(req) => {
    try {
        const res = await Api.post("/cart", req);
        console.log(res)
        return res.results
    } catch (error) {
        console.error(error);
    }
}