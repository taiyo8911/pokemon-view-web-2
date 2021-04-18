// Noで並び替えボタンが押されたら実行。Noを降順に並び替える
function ReverseSort() {
    // 他のボタンを無効化する
    document.getElementById("sort-btn2").disabled = true;
    document.getElementById("sort-btn3").disabled = true;

    // 各行データを配列に保管する。
    lineData = [];
    for (i = 0; i < maxNum; i++) {
        lineData[i] = document.getElementById("tr" + (i + 1)).innerHTML;
    }

    // lineDataを逆順に並び替える
    lineData.sort().reverse();

    // 並び替えた結果を、各行へ書き出す
    for (i = 0; i < lineData.length; i++) {
        document.getElementById("tr" + (i + 1)).innerHTML = lineData[i];
    }

}




// 並び替え用に、ランキングをつける関数を定義
const ranking = (arr, num) => [1, 2].indexOf(num) < 0 ? null : arr.map((x, y, z) => z.filter(w => (num == 2) ? w < x : w > x).length + 1);


// たかさ、おもさで並び替えボタンが押されたら実行
function Sort(x) {
    // 押されたボタン以外のボタンを無効化する
    document.getElementById("sort-btn1").disabled = true;
    document.getElementById("sort-btn2").disabled = true;
    document.getElementById("sort-btn3").disabled = true;

    let data;
    let dataTable = [];
    let rank = [];
    let lineData = [];
    let index = [];


    // 各行のデータを配列に保管する。
    for (i = 0; i < maxNum; i++) {
        lineData[i] = document.getElementById("tr" + (i + 1)).innerHTML;
    }

    // データを比較するため、全データを配列に入れる
    for (i = 0; i < maxNum; i++) {
        data = document.getElementById(x + (i + 1)).innerText;
        dataTable[i] = Number(data);
    }

    // ランキング関数を実行（引数：1は降順、2は昇順）
    rank = ranking(dataTable, 1)


    // 配列のインデックスを取得する
    for (i = 1; i < rank.length + 1; i++) {
        index.push(rank.indexOf(i));
    }


    // 並び替え結果を書き出す
    for (i = 0; i < lineData.length; i++) {
        document.getElementById("tr" + (i + 1)).innerHTML = lineData[index[i]];
    }
}