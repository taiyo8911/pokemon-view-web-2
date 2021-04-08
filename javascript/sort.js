// function ReverseSort() {
//     // 並び替えるため、各行のデータを配列に保管する。
//     let lineData = [];

//     for (i = 0; i < maxNum; i++) {
//         let element = document.getElementById("tr" + (i + 1));
//         lineData[i] = element.innerHTML;
//     }

//     // lineDataを逆順に並び替える
//     lineData.sort().reverse();

//     // 並び替えた結果を、各行へ書き出す
//     for (i = 0; i < lineData.length; i++) {
//         document.getElementById("tr" + (i + 1)).innerHTML = lineData[i];
//     }
// }




// 並び替え用に、ランキングをつける関数を定義
const ranking = (arr, num) => [1, 2].indexOf(num) < 0 ? null : arr.map((x, y, z) => z.filter(w => (num == 2) ? w < x : w > x).length + 1);


// 高さで並び替える
function HeightSort() {
    let heightTable = [];
    let element;
    let height;
    let rank = [];

    // たかさを比較するため、全ポケモンのたかさを配列に入れる
    for (i = 0; i < maxNum; i++) {
        element = document.getElementById("height" + (i + 1));
        height = element.textContent;
        heightTable[i] = height;
    }

    // ランキング関数を実行（引数：1は降順、2は昇順）
    rank = ranking(heightTable, 1)
    

    // 並び替えるため、各行のデータを配列に保管する。
    let lineData = [];

    for (i = 0; i < maxNum; i++) {
        let element = document.getElementById("tr" + (i + 1));
        lineData[i] = element.innerHTML;
    }

    // 配列のインデックスを取得する
    var index =[];
    for (i = 1; i < rank.length+1; i++) {
        index.push(rank.indexOf(i));
    }


    // 並び替え結果を書き出す
    for (i = 0; i < lineData.length; i++) {
        document.getElementById("tr" + (i + 1)).innerHTML = lineData[index[i]];
    }
}
