import { writable } from 'svelte/store';
import { localStore } from "./localStore.js";
import { writableSession } from "./sessionStore.js";

export const token = writableSession('token', '');


let content = [{
        id: 0,
        type: "Copper",
        order_code: "zd37x",
        content: "Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu",
        price: "$2,167.97",
        time: "12:30 23/05/2021",
        customer: "Cao Trường An",
        phone: "0989 888 888",
        addr: "275 Nguyễn Trãi, Thanh Xuân, Hà Nội",
        guarantee_n1: "1",
        guarantee_time: "12:30 17/05/2021",
        guarantee_receive: "11:30  17/5/2022",
        guarantee_repay: "11:30  17/8/2021",
        done_guarantee: "Hoàn tất",
        status_guarantee: "Đang bảo hành"
    },
    {
        id: 1,
        type: "Copper",
        order_code: "zd37x",
        content: "Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu",
        price: "$2,167.97",
        time: "12:30 23/05/2021",
        customer: "Cao Trường An",
        phone: "0989 888 888",
        addr: "275 Nguyễn Trãi, Thanh Xuân, Hà Nội"

    },
    {
        id: 2,
        type: "Copper",
        order_code: "zd37x",
        content: "Giải pháp cấu hình với giá rẻ lý tưởng cho người mới bắt đầu",
        price: "$2,167.97",
        time: "12:30 20/05/2021",
        customer: "Cao Trường An",
        phone: "0989 888 888",
        addr: "275 Nguyễn Trãi, Thanh Xuân, Hà Nội"
    },
]
export const product = writable(content);
export let currentPro = writable({});
export const productNumber = localStore("product", 0);