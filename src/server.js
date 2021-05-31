import { sortNumber, sortString } from "./sorting.js";

function generateData() {
    const rand = Math.floor(Math.random() * 1000);
    return [
        { config: "a-", type: "o", customer: 12 },
        { config: "a-", type: "o", customer: 12 },
        { config: "a-", type: "o", customer: 12 },

    ];
}


export function getAll(text) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(generateData());
        }, 500);
    });
}

export function getData(page, pageSize, text, sorting) {
    let originalData = generateData();

    if (sorting) {
        if (sorting.key === "age") {
            originalData = sortNumber(originalData, sorting.dir, sorting.key);
        } else {
            originalData = sortString(originalData, sorting.dir, sorting.key);
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let rowsCount = originalData.length;
            const originalRows = originalData;
            let rows = [];

            if (text && text.length > 0) {
                for (let i in originalRows) {
                    for (let j in originalRows[i]) {
                        if (
                            originalRows[i][j]
                            .toString()
                            .toLowerCase()
                            .indexOf(text) > -1
                        ) {
                            rows.push(originalRows[i]);
                            break;
                        }
                    }
                }

                rowsCount = rows.length;
            } else {
                rows = originalRows;
            }

            resolve({ rows: rows.slice(0, pageSize), rowsCount: rowsCount - 1 });
        }, 500);
    });
}