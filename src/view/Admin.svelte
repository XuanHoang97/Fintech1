<script>
    import { link } from "svelte-spa-router";
    import Header from "../layout/Header.svelte";
    import { chart } from "svelte-apexcharts";
    import Datepicker from "svelte-calendar";
    import { getAll } from "../server.js";
    import { sortNumber, sortString } from "../sorting.js";

    //datepicker
    let fromDate = "21/05/2021";
    let toDate = "21/06/2021";

    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row, Sort } from "../pagination/Table.svelte";

    let rows = [];
    let page = 0; //first page
    let pageSize = 10;

    function onSortString(event) {
        event.detail.rows = sortString(
            event.detail.rows,
            event.detail.dir,
            event.detail.key
        );
    }

    function onSortNumber(event) {
        event.detail.rows = sortString(
            event.detail.rows,
            event.detail.dir,
            event.detail.key
        );
    }

    //chart
    var options = {
        series: [
            {
                name: "Cooper",
                data: [90, 50, 32, 4, 42],
            },
            {
                name: "silver",
                data: [32, 69, 37, 18, 92],
            },

            {
                name: "Gold",
                data: [23, 61, 90, 61, 63],
            },
        ],

        chart: {
            height: 350,
            width: 1280,
            type: "line",
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },

        legend: {
            show: false,
        },
        
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },

        colors: ["#2F9773", "#1F78B4", "#FFC107"],
        xaxis: {
            categories: ["06/2021", "07/2021", "08/2021", "09/2021", "10/2021"],
        },

        yaxis: {
            min: 0,
            max: 100,
        },
        markers: {
            size: 4,
            colors: ["#2F9773", "#1F78B4", "#FFC107"],
            strokeColors: "#fff",
            strokeWidth: 0,
            hover: {
                size: 7,
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    //chart_mobile
    var options_mobile = {
        series: [
            {
                name: "Cooper",
                data: [90, 50, 32, 4],
            },
            {
                name: "silver",
                data: [32, 69, 37, 18],
            },

            {
                name: "Gold",
                data: [23, 61, 90, 61],
            },
        ],

        chart: {
            height: 350,
            width: 345,
            type: "line",
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },

        colors: ["#2F9773", "#1F78B4", "#FFC107"],
        xaxis: {
            categories: ["05/2021", "06/2021", "07/2021", "08/2021"],
        },

        yaxis: {
            min: 0,
            max: 90,
        },
        markers: {
            size: 4,
            colors: ["#2F9773", "#1F78B4", "#FFC107"],
            strokeColors: "#fff",
            strokeWidth: 0,
            hover: {
                size: 7,
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    //select option
    let check_time = false;
    let check_config = false;
    let check_config_detail = false;
    let check_person = false;
    let check_status = false;
    let selectedTime = "Month";
    let selectedPerson = "Admin";
    let selectedConfig = "Farmer";
    let selectedStatus = "Trạng thái";
    let selectedConfig_detail = "Basic";
    let time = ["Month", "Year"];
    let person = ["Nicholas", "John", "Lune", "all"];
    let config = ["Farmer", "Profession", "All"];
    let config_detail = ["Farmer", "Profession", "Basic"];
    let status = ["Chờ xử lý", "Đã giao", "Đang giao", "Tất cả"];
    let status_guarrant = ["Chờ xử lý", "Đang bảo hành", "Hoàn tất", "Tất cả"];
    let tableData = [];
    let guarranteeData = [];

    //table_info
    import { product, currentPro, productNumber } from "../store_admin.js";
    let pro = $product;
    let data_wait = [
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "wait",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "wait",
            status_guarantee: "wait",
        },
    ];

    let data_delivering = [
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2397.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
            status_guarantee: "warranty",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2397.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
            status_guarantee: "warranty",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2397.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
        },
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2397.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
            status_guarantee: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2397.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
        },
    ];

    let data_done = [
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "delivering",
        },
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "done",
        },
        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "wait",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "wait",
        },

        {
            order_code: "zd37x",
            config: "Farmer",
            type: "Copper",
            customer: "Cao An",
            mail: "caoan@gmail.com",
            value: 2387.91,
            time: "11:30 18/5/2021",
            time_buy: "11:30  17/5/2021",
            warranty_period: "11:30  17/5/2022",
            time_guarrant: "11:30  17/8/2021",
            status: "wait",
        },
    ];
    rows = [...data_wait, ...data_delivering, ...data_done];
    tableData = rows;
    guarranteeData = rows;
    console.log(rows);
</script>

<Header />
<div class="admin">
    <div class="container__admin">
        <div class="stat">
            <div class="order__delivered">
                <img src="assets/img/order.png" alt="" />
                <div class="detail">
                    <p>Đơn hàng đã giao</p>
                    <h2>100</h2>
                </div>
            </div>

            <div class="order__delivering">
                <img src="assets/img/order1.png" alt="" />
                <div class="detail">
                    <p>Đơn hàng đang giao</p>
                    <h2>100</h2>
                </div>
            </div>

            <div class="total__revenue">
                <img src="assets/img/transfer.png" alt="" />
                <div class="detail">
                    <p>Tổng doanh thu</p>
                    <h2>1,000,000 $</h2>
                </div>
            </div>
        </div>

        <div class="chart">
            <div class="set__chart">
                <div class="set__item">
                    <div class="time">
                        <p>Thời gian</p>
                        <div
                            class="month"
                            on:click={() => {
                                check_time = !check_time;
                            }}
                        >
                            <label for="">{selectedTime}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>
                        <div class="list__time" class:active={check_time}>
                            {#each time as value, i}
                                <div
                                    class="op--time"
                                    on:click={() => {
                                        selectedTime = value;
                                        check_time = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="config">
                        <p>Cấu hình Farm</p>
                        <div
                            class="op__machine"
                            on:click={() => {
                                check_config = !check_config;
                            }}
                        >
                            <label for="">{selectedConfig}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>

                        <div class="list__option" class:active={check_config}>
                            {#each config as value, i}
                                <div
                                    class="op--config"
                                    on:click={() => {
                                        selectedConfig = value;
                                        check_config = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <div class="desc">
                    <div class="suggest1">
                        <img src="assets/img/conn.png" alt="" />
                        <span>Copper</span>
                    </div>
                    <div class="suggest2">
                        <img src="assets/img/ic1.png" alt="" />
                        <span>Silver</span>
                    </div>
                    <div class="suggest3">
                        <img src="assets/img/ic2.png" alt="" />
                        <span>Gold</span>
                    </div>
                </div>
            </div>
            <div class="chart__Detail">
                <div id="chart" use:chart={options} />
            </div>

            <div class="chart__Detail_mobile">
                <div id="chart_mobile" use:chart={options_mobile} />
            </div>
        </div>

        <div class="control">
            <div class="control__Detail">
                <div class="setup">
                    <div class="permission">
                        <p>Admin</p>
                        <div
                            class="list"
                            on:click={() => {
                                check_person = !check_person;
                            }}
                        >
                            <label for="">{selectedPerson}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>

                        <div
                            class="list__permission"
                            class:active={check_person}
                        >
                            {#each person as value, i}
                                <div
                                    class="op--person"
                                    on:click={() => {
                                        selectedPerson = value;
                                        check_person = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="config">
                        <p>Cấu hình Farm</p>
                        <div
                            class="op__machine"
                            on:click={() => {
                                check_config_detail = !check_config_detail;
                            }}
                        >
                            <label for="">{selectedConfig_detail}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>

                        <div
                            class="list__detail"
                            class:active={check_config_detail}
                        >
                            {#each config_detail as value, i}
                                <div
                                    class="config_detail"
                                    on:click={() => {
                                        selectedConfig_detail = value;
                                        check_config_detail = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="time">
                    <div class="permission">
                        <p>Thời gian</p>
                        <div class="times">
                            <div class="date">
                                <div class="from">
                                    <Datepicker
                                        bind:formattedSelected={fromDate}
                                        format={"#{d}/#{m}/#{Y}"}
                                        dayTextColor="#262D33"
                                        dayHighlightedBackgroundColor="#18A0FB"
                                        highlightColor="#18A0FB"
                                        dayHighlightedTextColor="#fff"
                                    >
                                        <button class="custom-button">
                                            {fromDate}
                                            <img
                                                src="assets/img/down.png"
                                                alt=""
                                            />
                                        </button>
                                    </Datepicker>
                                </div>
                                <!-- <span>-</span> -->
                                <div class="to">
                                    <Datepicker
                                        bind:formattedSelected={toDate}
                                        format={"#{d}/#{m}/#{Y}"}
                                        dayTextColor="#262D33"
                                        dayHighlightedBackgroundColor="#18A0FB"
                                        highlightColor="#18A0FB"
                                        dayHighlightedTextColor="#fff"
                                    >
                                        <button class="custom-button">
                                            {toDate}
                                            <img
                                                src="assets/img/down.png"
                                                alt=""
                                            />
                                        </button>
                                    </Datepicker>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                <thead slot="head">
                    <tr class="head_table">
                        <th>Cấu hình</th>
                        <th>Loại</th>
                        <th>Khách hàng</th>

                        <th
                            >Giá trị <Sort
                                key="value"
                                on:sort={onSortNumber}
                            /></th
                        >
                        <th
                            >Thời gian<Sort
                                key="time"
                                on:sort={onSortNumber}
                            /></th
                        >

                        <th
                            class="status_head"
                            on:click={() => {
                                check_status = !check_status;
                            }}
                            >{selectedStatus}
                            <img src="assets/img/down.png" alt="" />
                        </th>
                        <div class="list__status" class:active={check_status}>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Chờ xử lý";
                                    check_status = false;
                                    tableData = rows.filter(
                                        (item) => item.status == "wait"
                                    );
                                }}
                            >
                                Chờ xử lý
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Đang giao";
                                    check_status = false;
                                    tableData = rows.filter(
                                        (item) => item.status == "delivering"
                                    );
                                }}
                            >
                                Đang giao
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Đã giao";
                                    check_status = false;
                                    tableData = rows.filter(
                                        (item) => item.status == "done"
                                    );
                                }}
                            >
                                Đã giao
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Tất cả";
                                    check_status = false;
                                    tableData = rows;
                                }}
                            >
                                Tất cả
                            </div>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {#each rows2 as row, index (row)}
                        <Row {index} class="content__admin ">
                            <td data-label="config" class="config"
                                >{row.config}</td
                            >
                            <td data-label="type" class="type">{row.type}</td>
                            <div class="customer">
                                <td data-label="customer" class="customer__info"
                                    >{row.customer}
                                    <span> phaoxit98@gmail.com</span>
                                </td>
                            </div>
                            <td data-label="value" class="value"
                                >{row.value}$</td
                            >
                            <td data-label="time" class="time">{row.time}</td>
                            <td data-label="status" class="status">
                                {#if row.status == "wait"}
                                    <span class="wait"
                                        ><a
                                            href="/status_order"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[0];
                                                $productNumber = 0;
                                            }}>Chờ xử lý</a
                                        >
                                    </span>
                                {:else if row.status == "done"}
                                    <span class="done"
                                        ><a
                                            href="/verify_order"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[1];
                                                $productNumber = 1;
                                            }}>Đã giao</a
                                        ></span
                                    >
                                {:else}
                                    <span class="delivering"
                                        ><a
                                            href="/delivering_order"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[2];
                                                $productNumber = 2;
                                            }}>Đang giao</a
                                        ></span
                                    >
                                {/if}
                            </td>
                        </Row>
                    {/each}
                </tbody>
            </Table>
        </div>

        <div class="guarant">
            <h2>Thông tin bảo hành</h2>
            <div class="guarant__Detail">
                <div class="setup">
                    <div class="permission">
                        <p>Admin</p>
                        <div
                            class="list"
                            on:click={() => {
                                check_person = !check_person;
                            }}
                        >
                            <label for="">{selectedPerson}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>

                        <div
                            class="list__permission"
                            class:active={check_person}
                        >
                            {#each person as value, i}
                                <div
                                    class="op--person"
                                    on:click={() => {
                                        selectedPerson = value;
                                        check_person = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="config">
                        <p>Cấu hình Farm</p>
                        <div
                            class="op__machine"
                            on:click={() => {
                                check_config_detail = !check_config_detail;
                            }}
                        >
                            <label for="">{selectedConfig_detail}</label>
                            <img src="assets/img/down.png" alt="" />
                        </div>

                        <div
                            class="list__detail"
                            class:active={check_config_detail}
                        >
                            {#each config_detail as value, i}
                                <div
                                    class="config_detail"
                                    on:click={() => {
                                        selectedConfig_detail = value;
                                        check_config_detail = false;
                                    }}
                                >
                                    {value}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="time">
                    <div class="permission">
                        <p>Thời gian</p>
                        <div class="times">
                            <div class="date">
                                <div class="from">
                                    <Datepicker
                                        bind:formattedSelected={fromDate}
                                        format={"#{d}/#{m}/#{Y}"}
                                        dayTextColor="#262D33"
                                        dayHighlightedBackgroundColor="#18A0FB"
                                        highlightColor="#18A0FB"
                                        dayHighlightedTextColor="#fff"
                                    >
                                        <button class="custom-button">
                                            {fromDate}
                                            <img
                                                src="assets/img/down.png"
                                                alt=""
                                            />
                                        </button>
                                    </Datepicker>
                                </div>
                                <!-- <span>-</span> -->
                                <div class="to">
                                    <Datepicker
                                        bind:formattedSelected={toDate}
                                        format={"#{d}/#{m}/#{Y}"}
                                        dayTextColor="#262D33"
                                        dayHighlightedBackgroundColor="#18A0FB"
                                        highlightColor="#18A0FB"
                                        dayHighlightedTextColor="#fff"
                                    >
                                        <button class="custom-button">
                                            {toDate}
                                            <img
                                                src="assets/img/down.png"
                                                alt=""
                                            />
                                        </button>
                                    </Datepicker>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Table {page} {pageSize} rows={guarranteeData} let:rows={rows2}>
                <thead slot="head">
                    <tr class="head_table">
                        <th>Mã đơn</th>
                        <th>Cấu hình</th>
                        <th>Loại</th>
                        <th>Thời gian mua</th>

                        <th>Hạn bảo hành</th>
                        <th>Thời gian bảo hành</th>

                        <th
                            class="status_head"
                            on:click={() => {
                                check_status = !check_status;
                            }}
                            >{selectedStatus}
                            <img src="assets/img/down.png" alt="" />
                        </th>
                        <div class="list__status" class:active={check_status}>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Chờ xử lý";
                                    check_status = false;
                                    guarranteeData = rows.filter(
                                        (item) => item.status == "wait"
                                    );
                                }}
                            >
                                Chờ xử lý
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Đang bảo hành";
                                    check_status = false;
                                    guarranteeData = rows.filter(
                                        (item) =>
                                            item.status_guarantee == "warranty"
                                    );
                                }}
                            >
                                Đang bảo hành
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Hoàn tất";
                                    check_status = false;
                                    guarranteeData = rows.filter(
                                        (item) => item.status == "done"
                                    );
                                }}
                            >
                                Hoàn tất
                            </div>
                            <div
                                class="status--item"
                                on:click={() => {
                                    selectedStatus = "Tất cả";
                                    check_status = false;
                                    guarranteeData = rows;
                                }}
                            >
                                Tất cả
                            </div>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {#each rows2 as row, index (row)}
                        <Row {index} class="content__guarrant ">
                            <td data-label="order_code" class="order_code"
                                >{row.order_code}</td
                            >
                            <td data-label="config" class="config"
                                >{row.config}</td
                            >
                            <td data-label="type" class="type">{row.type}</td>
                            <td data-label="time_buy" class="time_buy"
                                >{row.time_buy}</td
                            >

                            <td
                                data-label="warranty_period"
                                class="warranty_period"
                                >{row.warranty_period}</td
                            >
                            <td data-label="time_guarrant" class="time_guarrant"
                                >{row.time_guarrant}</td
                            >
                            <td data-label="status" class="status">
                                {#if row.status == "wait"}
                                    <span class="wait">
                                        <a
                                            href="/guarantee"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[0];
                                                $productNumber = 0;
                                            }}>Chờ xử lý</a
                                        >
                                    </span>
                                {:else if row.status == "done"}
                                    <span class="done">
                                        <a
                                            href="/verify_guarantee"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[0];
                                                $productNumber = 0;
                                            }}>Hoàn tất</a
                                        ></span
                                    >
                                {:else}
                                    <span class="delivering">
                                        <a
                                            href="/guarantee_n"
                                            use:link
                                            on:click={() => {
                                                $currentPro = pro[0];
                                                $productNumber = 0;
                                            }}>Đang bảo hành</a
                                        ></span
                                    >
                                {/if}
                            </td>
                        </Row>
                    {/each}
                </tbody>
            </Table>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../styles/admin.scss";
</style>
