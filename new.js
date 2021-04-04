// // 変数の初期化
// // var pokeId;
// // var pokeName;
// // var pokeImageUrl;
// // var pokeType;
// // var pokeHeight;
// // var pokeWeight;

// var pokeData= [];

// // 出力するデータ数
// var max = 1;

// async function makeData(i) {
//     // APIを呼び出す
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/");
//     const data = await res.json();

//     // JSONデータを変数に入れる
//     var pokeId = data['id'];
//     var pokeName = data['name'];
//     var pokeImageUrl = data['sprites']['front_default'];
//     var pokeType = data['types'][0]['type']['name'];
//     var pokeHeight = data['height'];
//     var pokeWeight = data['weight'];

//     // 各データを配列に入れる
//     pokeData.push(pokeId);
//     pokeData.push(pokeName);
//     pokeData.push(pokeImageUrl);
//     pokeData.push(pokeType);
//     pokeData.push(pokeHeight);
//     pokeData.push(pokeWeight);
//     console.log(pokeData);
// }


// function makeHtml(){
//     // HTMLを生成していく
//     // tr要素を生成
//     var tr = document.createElement('tr');
//     tr.className = 'item';

//     // 図鑑番号を表示
//     var id = document.createElement('td');
//     id.innerHTML = pokeId;
//     tr.appendChild(id);

//     // 英語名を表示
//     var name = document.createElement('td');
//     name.innerHTML = pokeName;
//     tr.appendChild(name);

//     // 画像を表示
//     var img = document.createElement('img')
//     img.src = pokeImageUrl; // 画像パスを追加
//     tr.appendChild(img);

//     // タイプを表示
//     var type = document.createElement('td');
//     type.innerHTML = pokeType;
//     tr.appendChild(type);

//     // 高さを表示
//     var weight = document.createElement('td');
//     type.innerHTML = pokeWeight;
//     tr.appendChild(weight);

//     // 重さを表示
//     var height = document.createElement('td');
//     type.innerHTML = pokeHeight;
//     tr.appendChild(height);

//     // 生成したtr要素を、tableに追加する
//     document.getElementById('myTable').appendChild(tr);
// }


// for (var i = 1; i <= max; i++) {
//     makeData(i);
//     makeHtml();
// }