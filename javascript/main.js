const maxNum = 151; //表示したいデータ数

async function callAPI() {
    for (i = 1; i <= maxNum; i++) {
        // APIでjsonを取得する
        let res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i + "/");
        let data = await res.json();

        // jsonを変数に入れていく
        // ID、名前、URLを取得
        let pokeId = data['id']
        let pokeName = data['names'][0]['name']
        let pokemonUrl = data['varieties'][0]['pokemon']['url']

        // エンドポイントを変更
        res = await fetch(pokemonUrl)
        data = await res.json();

        // 画像、たかさ、おもさを取得
        let pokeImageUrl = data['sprites']['front_default']
        let pokeHeight = data['height'] / 10
        let pokeWeight = data['weight'] / 10

        // HTMLを生成していく
        // tr要素を生成
        let tr = document.createElement('tr');
        tr.id = 'tr' + i;

        // img要素をtrに追加する
        let img = document.createElement('img')
        img.src = pokeImageUrl; // 画像パスを追加
        tr.appendChild(img);

        // 図鑑番号
        let id = document.createElement('td');
        id.textContent = pokeId;

        tr.appendChild(id);

        // 名前
        let name = document.createElement('td');
        name.textContent = pokeName;
        tr.appendChild(name);

        // 高さ
        let height = document.createElement('td');
        height.textContent = pokeHeight;
        height.id = "height" + i;
        tr.appendChild(height);

        // 重さ
        let weight = document.createElement('td');
        weight.textContent = pokeWeight;
        weight.id = "weight" + i;
        tr.appendChild(weight);

        

        // 生成したtr要素を、#tbodyに追加する
        document.getElementById('tbody').appendChild(tr);
    }
}

callAPI();