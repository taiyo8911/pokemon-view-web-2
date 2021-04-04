maxNum = 151; //表示したい画像の数

async function makeData() {
    for (i = 1; i <= maxNum; i++) {
        // APIを叩いてjsonを取得する
        res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        data = await res.json();

        // 個別のjsonデータを変数に入れる
        pokeImageUrl = data['sprites']['front_default']
        pokeId = data['id']
        pokeName = data['name']
        pokeType = data['types'][0]['type']['name']
        pokeHeight = data['height'] / 10
        pokeWeight = data['weight'] / 10

        // HTMLを生成していく
        // tr要素を生成
        var tr = document.createElement('tr');
        tr.className = 'item';

        // 画像を表示
        var img = document.createElement('img')
        img.src = pokeImageUrl; // 画像パスを追加
        tr.appendChild(img);

        // 図鑑番号を表示
        var id = document.createElement('td');
        id.innerHTML = pokeId;
        tr.appendChild(id);

        // 英語名を表示
        var name = document.createElement('td');
        name.innerHTML = pokeName;
        tr.appendChild(name);
        
        // 高さを表示
        var height = document.createElement('td');
        height.innerHTML = pokeHeight;
        tr.appendChild(height);

        // 重さを表示
        var weight = document.createElement('td');
        weight.innerHTML = pokeWeight;
        tr.appendChild(weight);

        // タイプを表示
        var type = document.createElement('td');
        type.innerHTML = pokeType;
        tr.appendChild(type);
        
        // 生成したtr要素を、tableに追加する
        document.getElementById('myTable').appendChild(tr);
    }
}

makeData();