function ReverseSort() {
    let lineData = [];
    let element;

    // テーブルの各行の内容を取得して配列lineDataに入れる ・・・ (1)
    let i = 0;
    while (element = document.getElementById("tr" + (i + 1))) {
        lineData[i] = element.innerHTML;
        i++;
    }

    // 逆順に並び替える ・・・ (2)
    lineData.sort().reverse();

    // 並び替えた結果を各行へ書き出す ・・・ (3)
    for (i = 0; i < lineData.length; i++) {
        document.getElementById("tr" + (i + 1)).innerHTML = lineData[i];
    }

}


function HeightSort() {

    let lineData = [];
    let element;

    let heightData = [];
    let height;

    // 各行の内容を取得して、1件ずつ配列lineDataに入れる ・・・ (1)
    let i = 0;
    while (element = document.getElementById("tr" + (i + 1))) {
        lineData[i] = element.innerHTML;
        i++;
    }

    // 全ポケモンのたかさを配列に入れる
    let a = 0;
    while (height = document.getElementById("height" + (a + 1))) {
        height = height.textContent;
        heightData.push(height);
        a++;
    }

    // 降順でランキングをつける
    const ranking=(arr,num)=>[1,2].indexOf(num)<0?null:arr.map((x,y,z)=>z.filter(w=>(num==2)?w<x:w>x).length+1);
    let b = heightData.map(Number);

    console.log(ranking(b,1));

    console.log(heightData.map(Number));

    

}