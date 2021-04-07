maxNum = 5; //表示したい画像の数

async function callAPI() {
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
        tr.id = 'tr' + i;

        // img要素をtrに追加する
        var img = document.createElement('img')
        img.src = pokeImageUrl; // 画像パスを追加
        tr.appendChild(img);

        // 図鑑番号
        var id = document.createElement('td');
        id.textContent = pokeId;

        tr.appendChild(id);

        // 英語名
        var name = document.createElement('td');
        name.textContent = pokeName;
        name.className = "name";
        tr.appendChild(name);

        // 高さ
        var height = document.createElement('td');
        height.textContent = pokeHeight;
        height.id = "height" + i;
        tr.appendChild(height);

        // 重さ
        var weight = document.createElement('td');
        weight.textContent = pokeWeight;
        tr.appendChild(weight);

        // タイプ
        var type = document.createElement('td');
        type.textContent = pokeType;
        tr.appendChild(type);

        // 生成したtr要素を、#tbodyに追加する
        document.getElementById('tbody').appendChild(tr);
    }
}

callAPI();