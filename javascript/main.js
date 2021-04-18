const maxNum = 151; //表示したいデータ数

async function callAPI() {
    for (i = 1; i <= maxNum; i++) {
        // APIでjsonを取得する
        var res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i + "/");
        var data = await res.json();

        // jsonを変数に入れていく
        // ID、名前、URLを取得
        var pokeId = data['id']
        var pokeName = data['names'][0]['name']
        var pokemonUrl = data['varieties'][0]['pokemon']['url']

        // エンドポイントを変更
        res = await fetch(pokemonUrl)
        data = await res.json();

        // 画像、タイプ、たかさ、おもさを取得
        var pokeImageUrl = data['sprites']['front_default']
        var pokeType = data['types'][0]['type']['name']
        var pokeHeight = data['height'] / 10
        var pokeWeight = data['weight'] / 10

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
        tr.appendChild(name);

        // 高さ
        var height = document.createElement('td');
        height.textContent = pokeHeight;
        height.id = "height" + i;
        tr.appendChild(height);

        // 重さ
        var weight = document.createElement('td');
        weight.textContent = pokeWeight;
        weight.id = "weight" + i;
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