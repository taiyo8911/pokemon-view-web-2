num = 151; //表示したい画像の数

async function callApi() {
    for (i = 1; i <= num; i++) {
        String(i); // 数値を文字に変換してURLにする
        // APIを叩いてjsonを取得する
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const data = await res.json();
        parseInt(i);

        // 個別のjsonデータを変数に入れる
        pokeImageUrl = data['sprites']['front_default']
        pokeId = data['id']
        pokeName = data['name']
        pokeType = data['types'][0]['type']['name']

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

        // 日本語名を表示
        // jsonファイルを読み込んで、日本語の名前を取得する
        $.getJSON("name_trans.json", function(data){
            jName = data[i-2].ja;

            // 日本語名を表示
            var jn = document.createElement('td');
            jn.innerHTML = jName;
            tr.appendChild(jn);

        // 英語名を表示
        var name = document.createElement('td');
        name.innerHTML = pokeName;
        tr.appendChild(name);

        // タイプを表示
        var type = document.createElement('td');
        type.innerHTML = pokeType;
        tr.appendChild(type);
        });
        
        // 生成したtr要素を、tableに追加する
        document.getElementById('myTable').appendChild(tr);
    }
}

callApi();