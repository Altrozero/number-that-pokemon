/**
 * DATA
 */
const pokemonList = [
    { id: 1, name: "Bulbasaur", type: ["Grass", "Poison"], holo: false },
    { id: 2, name: "Ivysaur", type: ["Grass", "Poison"], holo: false },
    { id: 3, name: "Venusaur", type: ["Grass", "Poison"], holo: true },
    { id: 4, name: "Charmander", type: ["Fire"], holo: false },
    { id: 5, name: "Charmeleon", type: ["Fire"], holo: false },
    { id: 6, name: "Charizard", type: ["Fire", "Flying"], holo: true },
    { id: 7, name: "Squirtle", type: ["Water"], holo: false },
    { id: 8, name: "Wartortle", type: ["Water"], holo: false },
    { id: 9, name: "Blastoise", type: ["Water"], holo: true },
    { id: 10, name: "Caterpie", type: ["Bug"], holo: false },
    { id: 11, name: "Metapod", type: ["Bug"], holo: false },
    { id: 12, name: "Butterfree", type: ["Bug", "Flying"], holo: false },
    { id: 13, name: "Weedle", type: ["Bug", "Poison"], holo: false },
    { id: 14, name: "Kakuna", type: ["Bug", "Poison"], holo: false },
    { id: 15, name: "Beedrill", type: ["Bug", "Poison"], holo: false },
    { id: 16, name: "Pidgey", type: ["Normal", "Flying"], holo: false },
    { id: 17, name: "Pidgeotto", type: ["Normal", "Flying"], holo: false },
    { id: 18, name: "Pidgeot", type: ["Normal", "Flying"], holo: false },
    { id: 19, name: "Rattata", type: ["Normal"], holo: false },
    { id: 20, name: "Raticate", type: ["Normal"], holo: false },
    { id: 21, name: "Spearow", type: ["Normal", "Flying"], holo: false },
    { id: 22, name: "Fearow", type: ["Normal", "Flying"], holo: false },
    { id: 23, name: "Ekans", type: ["Poison"], holo: false },
    { id: 24, name: "Arbok", type: ["Poison"], holo: true },
    { id: 25, name: "Pikachu", type: ["Electric"], holo: false },
    { id: 26, name: "Raichu", type: ["Electric"], holo: false },
    { id: 27, name: "Sandshrew", type: ["Ground"], holo: false },
    { id: 28, name: "Sandslash", type: ["Ground"], holo: false },
    { id: 29, name: "Nidoran♀", type: ["Poison"], holo: false },
    { id: 30, name: "Nidorina", type: ["Poison"], holo: false },
    { id: 31, name: "Nidoqueen", type: ["Poison", "Ground"], holo: false },
    { id: 32, name: "Nidoran♂", type: ["Poison"], holo: false },
    { id: 33, name: "Nidorino", type: ["Poison"], holo: false },
    { id: 34, name: "Nidoking", type: ["Poison", "Ground"], holo: false },
    { id: 35, name: "Clefairy", type: ["Fairy"], holo: false },
    { id: 36, name: "Clefable", type: ["Fairy"], holo: false },
    { id: 37, name: "Vulpix", type: ["Fire"], holo: false },
    { id: 38, name: "Ninetales", type: ["Fire"], holo: true },
    { id: 39, name: "Jigglypuff", type: ["Normal", "Fairy"], holo: false },
    { id: 40, name: "Wigglytuff", type: ["Normal", "Fairy"], holo: true },
    { id: 41, name: "Zubat", type: ["Poison", "Flying"], holo: false },
    { id: 42, name: "Golbat", type: ["Poison", "Flying"], holo: false },
    { id: 43, name: "Oddish", type: ["Grass", "Poison"], holo: false },
    { id: 44, name: "Gloom", type: ["Grass", "Poison"], holo: false },
    { id: 45, name: "Vileplume", type: ["Grass", "Poison"], holo: false },
    { id: 46, name: "Paras", type: ["Bug", "Grass"], holo: false },
    { id: 47, name: "Parasect", type: ["Bug", "Grass"], holo: false },
    { id: 48, name: "Venonat", type: ["Bug", "Poison"], holo: false },
    { id: 49, name: "Venomoth", type: ["Bug", "Poison"], holo: false },
    { id: 50, name: "Diglett", type: ["Ground"], holo: false },
    { id: 51, name: "Dugtrio", type: ["Ground"], holo: false },
    { id: 52, name: "Meowth", type: ["Normal"], holo: false },
    { id: 53, name: "Persian", type: ["Normal"], holo: false },
    { id: 54, name: "Psyduck", type: ["Water"], holo: false },
    { id: 55, name: "Golduck", type: ["Water"], holo: false },
    { id: 56, name: "Mankey", type: ["Fighting"], holo: false },
    { id: 57, name: "Primeape", type: ["Fighting"], holo: false },
    { id: 58, name: "Growlithe", type: ["Fire"], holo: false },
    { id: 59, name: "Arcanine", type: ["Fire"], holo: false },
    { id: 60, name: "Poliwag", type: ["Water"], holo: false },
    { id: 61, name: "Poliwhirl", type: ["Water"], holo: false },
    { id: 62, name: "Poliwrath", type: ["Water", "Fighting"], holo: false },
    { id: 63, name: "Abra", type: ["Psychic"], holo: false },
    { id: 64, name: "Kadabra", type: ["Psychic"], holo: false },
    { id: 65, name: "Alakazam", type: ["Psychic"], holo: true },
    { id: 66, name: "Machop", type: ["Fighting"], holo: false },
    { id: 67, name: "Machoke", type: ["Fighting"], holo: false },
    { id: 68, name: "Machamp", type: ["Fighting"], holo: false },
    { id: 69, name: "Bellsprout", type: ["Grass", "Poison"], holo: false },
    { id: 70, name: "Weepinbell", type: ["Grass", "Poison"], holo: false },
    { id: 71, name: "Victreebel", type: ["Grass", "Poison"], holo: false },
    { id: 72, name: "Tentacool", type: ["Water", "Poison"], holo: false },
    { id: 73, name: "Tentacruel", type: ["Water", "Poison"], holo: false },
    { id: 74, name: "Geodude", type: ["Rock", "Ground"], holo: false },
    { id: 75, name: "Graveler", type: ["Rock", "Ground"], holo: true },
    { id: 76, name: "Golem", type: ["Rock", "Ground"], holo: false },
    { id: 77, name: "Ponyta", type: ["Fire"], holo: false },
    { id: 78, name: "Rapidash", type: ["Fire"], holo: false },
    { id: 79, name: "Slowpoke", type: ["Water", "Psychic"], holo: false },
    { id: 80, name: "Slowbro", type: ["Water", "Psychic"], holo: false },
    { id: 81, name: "Magnemite", type: ["Electric", "Steel"], holo: false },
    { id: 82, name: "Magneton", type: ["Electric", "Steel"], holo: false },
    { id: 83, name: "Farfetch'd", type: ["Normal", "Flying"], holo: false },
    { id: 84, name: "Doduo", type: ["Normal", "Flying"], holo: false },
    { id: 85, name: "Dodrio", type: ["Normal", "Flying"], holo: false },
    { id: 86, name: "Seel", type: ["Water"], holo: false },
    { id: 87, name: "Dewgong", type: ["Water", "Ice"], holo: false },
    { id: 88, name: "Grimer", type: ["Poison"], holo: false },
    { id: 89, name: "Muk", type: ["Poison"], holo: false },
    { id: 90, name: "Shellder", type: ["Water"], holo: false },
    { id: 91, name: "Cloyster", type: ["Water", "Ice"], holo: false },
    { id: 92, name: "Gastly", type: ["Ghost", "Poison"], holo: false },
    { id: 93, name: "Haunter", type: ["Ghost", "Poison"], holo: false },
    { id: 94, name: "Gengar", type: ["Ghost", "Poison"], holo: false },
    { id: 95, name: "Onix", type: ["Rock", "Ground"], holo: false },
    { id: 96, name: "Drowzee", type: ["Psychic"], holo: false },
    { id: 97, name: "Hypno", type: ["Psychic"], holo: false },
    { id: 98, name: "Krabby", type: ["Water"], holo: false },
    { id: 99, name: "Kingler", type: ["Water"], holo: false },
    { id: 100, name: "Voltorb", type: ["Electric"], holo: false },
    { id: 101, name: "Electrode", type: ["Electric"], holo: false },
    { id: 102, name: "Exeggcute", type: ["Grass", "Psychic"], holo: false },
    { id: 103, name: "Exeggutor", type: ["Grass", "Psychic"], holo: false },
    { id: 104, name: "Cubone", type: ["Ground"], holo: false },
    { id: 105, name: "Marowak", type: ["Ground"], holo: false },
    { id: 106, name: "Hitmonlee", type: ["Fighting"], holo: false },
    { id: 107, name: "Hitmonchan", type: ["Fighting"], holo: false },
    { id: 108, name: "Lickitung", type: ["Normal"], holo: false },
    { id: 109, name: "Koffing", type: ["Poison"], holo: false },
    { id: 110, name: "Weezing", type: ["Poison"], holo: false },
    { id: 111, name: "Rhyhorn", type: ["Ground", "Rock"], holo: false },
    { id: 112, name: "Rhydon", type: ["Ground", "Rock"], holo: false },
    { id: 113, name: "Chansey", type: ["Normal"], holo: false },
    { id: 114, name: "Tangela", type: ["Grass"], holo: false },
    { id: 115, name: "Kangaskhan", type: ["Normal"], holo: true },
    { id: 116, name: "Horsea", type: ["Water"], holo: false },
    { id: 117, name: "Seadra", type: ["Water"], holo: false },
    { id: 118, name: "Goldeen", type: ["Water"], holo: false },
    { id: 119, name: "Seaking", type: ["Water"], holo: false },
    { id: 120, name: "Staryu", type: ["Water"], holo: false },
    { id: 121, name: "Starmie", type: ["Water", "Psychic"], holo: false },
    { id: 122, name: "Mr. Mime", type: ["Psychic", "Fairy"], holo: false },
    { id: 123, name: "Scyther", type: ["Bug", "Flying"], holo: false },
    { id: 124, name: "Jynx", type: ["Ice", "Psychic"], holo: true },
    { id: 125, name: "Electabuzz", type: ["Electric"], holo: false },
    { id: 126, name: "Magmar", type: ["Fire"], holo: false },
    { id: 127, name: "Pinsir", type: ["Bug"], holo: false },
    { id: 128, name: "Tauros", type: ["Normal"], holo: false },
    { id: 129, name: "Magikarp", type: ["Water"], holo: false },
    { id: 130, name: "Gyarados", type: ["Water", "Flying"], holo: true },
    { id: 131, name: "Lapras", type: ["Water", "Ice"], holo: false },
    { id: 132, name: "Ditto", type: ["Normal"], holo: false },
    { id: 133, name: "Eevee", type: ["Normal"], holo: false },
    { id: 134, name: "Vaporeon", type: ["Water"], holo: false },
    { id: 135, name: "Jolteon", type: ["Electric"], holo: false },
    { id: 136, name: "Flareon", type: ["Fire"], holo: false },
    { id: 137, name: "Porygon", type: ["Normal"], holo: false },
    { id: 138, name: "Omanyte", type: ["Rock", "Water"], holo: false },
    { id: 139, name: "Omastar", type: ["Rock", "Water"], holo: false },
    { id: 140, name: "Kabuto", type: ["Rock", "Water"], holo: false },
    { id: 141, name: "Kabutops", type: ["Rock", "Water"], holo: false },
    { id: 142, name: "Aerodactyl", type: ["Rock", "Flying"], holo: false },
    { id: 143, name: "Snorlax", type: ["Normal"], holo: false },
    { id: 144, name: "Articuno", type: ["Ice", "Flying"], holo: false },
    { id: 145, name: "Zapdos", type: ["Electric", "Flying"], holo: true },
    { id: 146, name: "Moltres", type: ["Fire", "Flying"], holo: false },
    { id: 147, name: "Dratini", type: ["Dragon"], holo: false },
    { id: 148, name: "Dragonair", type: ["Dragon"], holo: false },
    { id: 149, name: "Dragonite", type: ["Dragon", "Flying"], holo: false },
    { id: 150, name: "Mewtwo", type: ["Psychic"], holo: false },
    { id: 151, name: "Mew", type: ["Psychic"], holo: true }
];

/**
 * STATE
 */
let curPokemonIndex = 0;
let score = 0;
let bestScore = 0;

function saveScore() {
    localStorage.setItem('score', score);
    localStorage.setItem('bestScore', bestScore);
}

function loadScore() {
    score = localStorage.getItem('score') || 0;
    bestScore = localStorage.getItem('bestScore') || 0;
    updateUI();
}

/**
 * LOGIC
 */
function selectNewPokemon() {
    curPokemonIndex = Math.floor(Math.random() * pokemonList.length);

    const card = document.querySelector('.card');

    card.style.backgroundImage = `url('assets/images/cards/${curPokemonIndex + 1}.png')`;

    const holo = pokemonList[curPokemonIndex].holo;    
    const holoDiv = document.querySelector('.holo');
    holoDiv.style.display = holo ? 'block' : 'none';

    const blurMiddleDiv = document.querySelector('.blur-number-middle');
    blurMiddleDiv.style.display = holo ? 'none' : 'inline-block';
}

function submitGuess() {
    const guessInput = document.querySelector('#guess');
    const guess = guessInput.value;

    if (guess === '') {
        return;
    } else if (guess === pokemonList[curPokemonIndex].id.toString()) {
        score++;
        bestScore = Math.max(score, bestScore);

        saveScore();
        selectNewPokemon();
    } else {
        gameOver();
    }

    guessInput.value = '';
    updateUI();
}

function updateUI() {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = `${score}`;
    
    const bestScoreEl = document.querySelector('#best');
    bestScoreEl.textContent = `${bestScore}`;
}

function gameOver() {
    document.querySelector('#correct').textContent = pokemonList[curPokemonIndex].id;

    document.querySelector('form.guess').style.display = "none";
    document.querySelector('form.gameover').style.display = "table";
}

function restartGame() {
    score = 0;
    saveScore();
    selectNewPokemon();
    updateUI();
    document.querySelector('form.guess').style.display = "table";
    document.querySelector('form.gameover').style.display = "none";
}

/**
 * DOM INTERACTIONS
 */
document.addEventListener('DOMContentLoaded', (event) => {
    loadScore();
    selectNewPokemon();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelector('.card');

    card.addEventListener('mousemove', function(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 21;
        const rotateY = ((x - centerX) / centerX) * 21;
        
        e.target.style.transform = `perspective(100vh) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Shine effect
        const shineAngle = Math.atan2(y - centerY, x - centerX) * 90 / Math.PI + 45;
        e.target.style.setProperty('--shine-angle', `${shineAngle}deg`);
        e.target.style.setProperty('--shine-opacity', `1`);
    });

    // Reset Card on exit
    card.addEventListener('mouseleave', function(e) {
        e.target.style.transform = 'perspective(100vh) rotateX(0) rotateY(0)';
        e.target.style.setProperty('--shine-opacity', `0`);
    });
});