//表示したいデータ数を定義
const MAX_NUM = 10;

async function getPokemonData(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const speciesData = await res.json();
    const pokemonUrl = speciesData.varieties[0].pokemon.url;
    const pokemonRes = await fetch(pokemonUrl);
    const pokemonData = await pokemonRes.json();
    const pokeId = speciesData.id;
    const pokeName = speciesData.names[0].name;
    const pokeImageUrl = pokemonData.sprites.front_default;
    const pokeHeight = pokemonData.height / 10;
    const pokeWeight = pokemonData.weight / 10;

    return {
        id: pokeId,
        name: pokeName,
        imageUrl: pokeImageUrl,
        height: pokeHeight,
        weight: pokeWeight,
    };
}

async function generateTableRow(id) {
    const pokemonData = await getPokemonData(id);

    const tr = document.createElement("tr");
    tr.id = `tr${id}`;

    const img = document.createElement("img");
    img.src = pokemonData.imageUrl;
    tr.appendChild(img);

    const pokeId = document.createElement("td");
    pokeId.textContent = pokemonData.id;
    tr.appendChild(pokeId);

    const name = document.createElement("td");
    name.textContent = pokemonData.name;
    tr.appendChild(name);

    const height = document.createElement("td");
    height.textContent = pokemonData.height;
    height.id = `height${id}`;
    tr.appendChild(height);

    const weight = document.createElement("td");
    weight.textContent = pokemonData.weight;
    weight.id = `weight${id}`;
    tr.appendChild(weight);

    return tr;
}

async function callAPI() {
    const tableBody = document.getElementById("tbody");

    const promises = [];
    for (let i = 1; i <= MAX_NUM; i++) {
        promises.push(generateTableRow(i));
    }

    const trs = await Promise.all(promises);
    trs.forEach((tr) => {
        tableBody.appendChild(tr);
    });
}

callAPI();