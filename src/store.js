import { writable } from 'svelte/store';
import { localStore } from "./localStore.js";
import { writableSession } from "./sessionStore.js";

export const token = writableSession('token', '');


let content = [{
        id: 0,
        title: "Cấu hình Copper",
        content: "Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu",
        price: "$3,097.10",
        cutPrice: "$2,167.97",
        memory: "Ổ Cứng 50TB",
        plot: "50 Plot"
    },
    {
        id: 1,
        title: "Cấu hình Silver",
        content: "Cấu hình phù hợp nhất cho nhà đầu tư cá nhân",
        price: "$6,194.21",
        cutPrice: "$4,335.95",
        memory: "Ổ Cứng 100TB",
        plot: "100 Plot"
    },
    {
        id: 2,
        title: "Cấu hình Gold",
        content: "Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ",
        price: "$12,388.43",
        cutPrice: "$8,671.90",
        memory: "Ổ Cứng 200TB",
        plot: "200 Plot"
    },
    {
        id: 3,
        title: "Cấu hình Silver",
        content: "Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu",
        price: "$18,572.54",
        cutPrice: "$13,000.78",
        memory: "Ổ Cứng 500TB",
        plot: "500 Plot"
    },
    {
        id: 4,
        title: "Cấu hình Gold",
        content: "Cấu hình hoàn hảo nhất cho việc đào Chia số vừa và nhỏ",
        price: "$30,971.07",
        cutPrice: "$21,679.75",
        memory: "Ổ Cứng 1000TB",
        plot: "1000 Plot"
    }
]
export const product = writable(content);
export let currentPro = writable({});
export const productNumber = localStore("product", 0);
export const email = localStore("email", "");
export const password = localStore("password", "");
export const emailVerify = localStore("emailVerify", "");
export const tokenStr = localStore("tokenStr", "");
export const emailStr = localStore("emailStr", ""); 

