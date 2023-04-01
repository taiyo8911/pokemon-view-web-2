// クリックされたボタンに対応するカラムを取得する
const COLUMN_INDEXES = {
    "sort-btn1": 4,
    "sort-btn2": 5,
};

let sortOrder = "asc";
let sortType = COLUMN_INDEXES["sort-btn1"];

function getSortColumn(btnId) {
    return COLUMN_INDEXES[btnId];
}

function sortTable(sortType, sortOrder) {
    const rows = Array.from(document.querySelectorAll("tbody tr"));

    const sortedRows = rows.sort((a, b) => {
        const aData = a.querySelector(`td:nth-child(${sortType})`).innerText;
        const bData = b.querySelector(`td:nth-child(${sortType})`).innerText;

        if (aData && bData) {
            if (sortType === 4 || sortType === 5) {
                return (sortOrder === "asc" ? parseFloat(aData) - parseFloat(bData) : parseFloat(bData) - parseFloat(aData));
            } else {
                return (sortOrder === "asc" ? aData.localeCompare(bData) : bData.localeCompare(aData));
            }
        } else {
            return 0;
        }
    });

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    sortedRows.forEach((row) => {
        tableBody.appendChild(row);
    });
}

// イベントリスナーを登録する
const sortBtn1 = document.getElementById("sort-btn1");
const sortBtn2 = document.getElementById("sort-btn2");

sortBtn1.addEventListener("click", () => {
    if (sortType === COLUMN_INDEXES["sort-btn1"]) {
        sortOrder = (sortOrder === "asc" ? "desc" : "asc");
    } else {
        sortOrder = "asc";
    }
    sortType = COLUMN_INDEXES[sortBtn1.id];
    sortTable(sortType, sortOrder);
});

sortBtn2.addEventListener("click", () => {
    if (sortType === COLUMN_INDEXES["sort-btn2"]) {
        sortOrder = (sortOrder === "asc" ? "desc" : "asc");
    } else {
        sortOrder = "asc";
    }
    sortType = COLUMN_INDEXES[sortBtn2.id];
    sortTable(sortType, sortOrder);
});