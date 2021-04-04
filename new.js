// 変数の初期化
let pokeImageUrl;
let pokeId;
let pokeName;
let pokeHeight;
let pokeWeight;
let pokeType;

// 全データを入れる各種配列
let imageArr = [];
let idArr = [];
let nameArr = [];
let heightArr = [];
let weightArr = [];
let typeArr = [];

let tr, img, id, myName, weight, height, type;


// 出力するデータ数
let max = 4;


// URLの1から順に各データを配列に入れる
async function makeData(i) {
    // APIを呼び出してjsonファイル化
    String(i);
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    let data = await res.json();
    parseInt(i);

    // JSONデータを変数に入れる
    pokeImageUrl = data['sprites']['front_default'];
    pokeId = data['id'];
    pokeName = data['name'];
    pokeHeight = data['height'];
    pokeWeight = data['weight'];
    pokeType = data['types'][0]['type']['name'];

    // 全データを各配列に入れる
    imageArr.push(pokeImageUrl);
    idArr.push(pokeId);
    nameArr.push(pokeName);
    heightArr.push(pokeHeight);
    weightArr.push(pokeWeight);
    typeArr.push(pokeType);

    return imageArr, idArr, nameArr, heightArr, weightArr, typeArr;
}


for (let i = 1; i <= max; i++) {
    makeData(i);
}

for (let a = 1; a <= max; a++){

// HTMLを生成する
// tr要素を生成
tr = document.createElement('tr');
tr.className = 'item';

// 画像を表示
img = document.createElement('img')
img.src = imageArr; // 画像パスを追加
tr.appendChild(img);

// 図鑑番号を表示
id = document.createElement('td');
id.innerHTML = idArr;
tr.appendChild(id);

// 英語名を表示
myName = document.createElement('td');
myName.innerHTML = nameArr;
tr.appendChild(myName);

// 高さを表示
weight = document.createElement('td');
weight.innerHTML = weightArr[0];
tr.appendChild(weight);

// 重さを表示
height = document.createElement('td');
height.innerHTML = heightArr[0];
tr.appendChild(height);


// タイプを表示
type = document.createElement('td');
type.innerHTML = typeArr[0];
tr.appendChild(type);


// 生成したtr要素を、tableに追加する
document.getElementById('myTable').appendChild(tr);

}