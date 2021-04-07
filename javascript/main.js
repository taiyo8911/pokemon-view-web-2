num = 151; //表示したい画像の数

async function callApi() {
    for (i = 1; i <= num; i++) {
        String(i); // 数値を文字に変換してURLにする
        // APIを叩いてjsonを取得する
        res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        data = await res.json();

        // 個別のjsonデータを変数に入れる
        pokeImageUrl = data['sprites']['front_default']
        pokeId = data['id']
        pokeName = data['name']
        pokeType = data['types'][0]['type']['name']

        // HTMLを生成していく
        // div要素を生成
        var div = document.createElement('div');

        // img要素を生成
        var img = document.createElement('img');
        img.src = pokeImageUrl; // 画像パスを追加
        div.appendChild(img); // img要素をdiv要素の子要素に追加

        // idを表示
        var id = document.createElement('p');
        id.innerHTML = pokeId;
        div.appendChild(id);

        // タイプを表示
        var type = document.createElement('p');
        type.innerHTML = pokeType;
        div.appendChild(type);

        // 英語名を表示
        var name = document.createElement('p');
        name.innerHTML = pokeName;
        div.appendChild(name);

        // jsonファイルを読み込んで、日本語の名前を取得する
        $.getJSON("name_trans.json", function(data){
            jName = data[i-2].ja;

            // 日本語名を表示
            var jn = document.createElement('p');
            jn.innerHTML = jName;
            div.appendChild(jn);
        });

        // タイプによって背景色を変える（クラスを付与する）
        switch (pokeType){
        case 'grass':
            div.className = 'grass';
            break;
        case 'fire':
            div.className = 'fire';
            break;
        case 'water':
            div.className = 'water';
            break;
        case 'bug':
            div.className = 'bug';
            break;
        case 'normal':
            div.className = 'normal';
            break;
        case 'poison':
            div.className = 'poison';
            break;
        case 'electric':
            div.className = 'electric';
            break;
        case 'ground':
            div.className = 'ground';
            break;
        case 'fairy':
            div.className = 'fairy';
            break;
        case 'fighting':
            div.className = 'fighting';
            break;
        case 'psychic':
            div.className = 'psychic';
            break;
        case 'rock':
            div.className = 'rock';
            break;
        case 'ghost':
            div.className = 'ghost';
            break;
        case 'ice':
            div.className = 'ice';
            break;
        case 'dragon':
            div.className = 'dragon';
            break;
        default:
        }

        // 生成したdiv要素を、wrapperに追加する
        document.getElementById('wrapper').appendChild(div);
    }
}

callApi();